---
prev: true
next: false
description: An intermediate overview of how to sync custom configs for your Lethal Company mods.
---

# Custom Config Syncing

::: warning
**This is an advanced article. While this introduces some C# concepts, it is highly recommended to understand C# and the basics of modding this game <i>before</i> reading this article.**
:::

## Preface
A very common case for many mod developers is wanting to synchronize the host's configuration file with all other players.

There are many different ways you could achieve this, but we will only go through the most straightforward approach that should work for most cases.

## Manually Syncing Instances
For this approach, we will take advantage of [Custom Messages](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/message-system/custom-messages/#named-messages), specifically Named Messages.
They are unbound to any GameObject, meaning **NetcodeWeaver** and **NetworkBehaviour** are **NOT necessary**.

::: info
Before you proceed, it is recommended you familiarize yourself with [Custom configs](/advanced-modding/custom-configs).
:::

### Prerequisites
Add an **Assembly Reference** to the following files:<br>
`Unity.Netcode.Runtime.dll`<br>
`Unity.Collections.dll`

These can be found at `.../Lethal Company/Lethal Company_Data/Managed`.

Now create a `SyncedInstance.cs` file which your config will inherit from, this handles the serialization/de-serialization of data.<br>
It also provides some helper methods to prevent repeating ourselves.

```cs
[Serializable]
public class SyncedInstance<T> {
    public static T Instance { get; internal set; }
    public static bool Synced { get; internal set; }

    internal static CustomMessagingManager MessageManager => NetworkManager.Singleton.CustomMessagingManager;

    internal static bool IsClient => NetworkManager.Singleton.IsClient;

    internal static bool IsHost => NetworkManager.Singleton.IsHost;

    internal static byte[] SerializeToBytes(T val) {
        BinaryFormatter bf = new();
        using MemoryStream stream = new();

        try {
            bf.Serialize(stream, val);
            return stream.ToArray();
        }
        catch (Exception e) {
            Plugin.Logger.LogError($"Error serializing instance: {e}");
            return null;
        }
    }

    internal static T DeserializeFromBytes(byte[] data) {
        BinaryFormatter bf = new();
        using MemoryStream stream = new(data);

        try {
            return (T) bf.Deserialize(stream);
        } catch (Exception e) {
            Plugin.Logger.LogError($"Error deserializing instance: {e}");
            return default;
        }
    }

    internal static void UpdateInstance(byte[] data) {
        Instance = DeserializeFromBytes(data);
        synced = true;
    }
}
```

### 1. Inherit SyncedInstance

We will now make use of the config class file made prior by changing this line:

```cs
public class Config
```

Into a synced alternative that can be serialized.

```cs
[Serializable]
public class Config : SyncedInstance<Config>
```

In addition, we need to make sure 'Instance' is a reference to this class by adding another line in the **constructor**.
```cs
public Config(ConfigFile cfg) {
    Instance = this;

    // ...
}
```

### 2. Setup request/receiver methods
Now simply paste the three following methods within the class.
While these might look intimidating, they will hopefully start to make more sense in step 3.

```cs
public static void RequestSync() {
    if (!IsClient) return;

    using FastBufferWriter stream = new(4, Allocator.Temp);
    MessageManager.SendNamedMessage("ModName_OnRequestConfigSync", 0uL, stream);
}
```

```cs
public static void OnRequestSync(ulong clientId, FastBufferReader _) {
    if (!IsHost) return;

    Plugin.Logger.LogInfo($"Config sync request received from client: {clientId}");

    byte[] array = SerializeToBytes(Instance);
    int value = array.Length;

    using FastBufferWriter stream = new(array.Length + 4, Allocator.Temp);

    try {
        stream.WriteValueSafe(in value, default);
        stream.WriteBytesSafe(array);

        MessageManager.SendNamedMessage("ModName_OnReceiveConfigSync", clientId, stream);
    } catch(Exception e) {
        Plugin.Logger.LogInfo($"Error occurred syncing config with client: {clientId}\n{e}");
    }
}
```

```cs
public static void OnReceiveSync(ulong _, FastBufferReader reader) {
    if (!reader.TryBeginRead(4)) {
        Plugin.Logger.LogError("Config sync error: Could not begin reading buffer.");
        return;
    }

    reader.ReadValueSafe(out int val, default);
    if (!reader.TryBeginRead(val)) {
        Plugin.Logger.LogError("Config sync error: Host could not sync.");
        return;
    }

    byte[] data = new byte[val];
    reader.ReadBytesSafe(ref data, val);

    UpdateInstance(data);

    Plugin.Logger.LogInfo("Successfully synced config with host.");
}
```

### 3. Apply patch to PlayerControllerB
Add in the following method, replacing "ModName" with the name (or abbreviation) of your mod.

Keep in mind that `ConnectClientToPlayerObject` is run just before the player is spawned.
This means if you are patching `SpawnPlayerAnimation`, you might find it gets called before the config has finished syncing!

```cs
[HarmonyPostfix]
[HarmonyPatch(typeof(PlayerControllerB), "ConnectClientToPlayerObject")]
public static void InitializeLocalPlayer() {
    if (IsHost) {
        MessageManager.RegisterNamedMessageHandler("ModName_OnRequestConfigSync", OnRequestSync);
        Synced = true;

        return;
    }

    Synced = false;
    MessageManager.RegisterNamedMessageHandler("ModName_OnReceiveConfigSync", OnReceiveSync);
    RequestSync();
}
```

If you are having issues with this patch, you may want to try **GameNetworkManager** instead.
```cs
[HarmonyPatch(typeof(GameNetworkManager), "SteamMatchmaking_OnLobbyMemberJoined")]
```

Finally, you have manually synced configs within your mod!

## Synced Config Usage
Every client will now have their config synchronized to the hosts upon joining the game.
All that's left to do is use the synced variables where appropriate.

We can do this by referencing `Config.Instance` from any class.
Here's an example that sets the local player's movement speed.
```cs
public static void ExamplePatch(PlayerControllerB __instance) {
    if (__instance == null)
        return;

    float syncedSpeed = Config.Instance.MOVEMENT_SPEED;
    if (__instance.IsOwner && __instance.isPlayerControlled) {
        __instance.movementSpeed = syncedSpeed;
        Plugin.Logger.LogInfo("Movement speed synced with host config.");
    }
}
```
