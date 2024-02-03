---
prev: false
next: false
description: A guide to synchronizing a BepInEx config file between host and clients using the CSync library.
---

# Setup
There are two ways to depend upon **CSync**, but I recommend using the [NuGet package](https://www.nuget.org/packages/Owen3H.BepInEx.CSync).<br>
This will automatically include both an assembly reference and documentation as opposed to Thunderstore.

## NuGet (Recommended)
1. Open the terminal in Visual Studio.
2. Run the following command.
   ```console
   dotnet add package Owen3H.BepInEx.CSync
   ```

Alternatively, you can install it visually via the **NuGet** package manager.
1. Head to `Project > Manage NuGet Packages`.
2. Search and select the `Owen3H.BepInEx.CSync` package.
3. Choose the latest version and hit Install.

## Thunderstore (Manual)
1. Download the latest version of the library on the [Thunderstore page](https://thunderstore.io/c/lethal-company/p/Owen3H/CSync/).
2. Extract the zip into your game directory root.
3. In your mod's project, add an **Assembly Reference** to `../BepInEx/plugins/CSync.dll`.

# Usage Guide

## 1. Creating a serializable config class
To begin, we will create a new class that will inherit from `SyncedInstance`.<br>
We must then add the `[DataContract]` attribute for this to be synced with clients.

```cs
[DataContract]
public class Config : SyncedInstance<Config>
```

Within this class, we can now begin writing out our config entries that we want to sync.<br>
We must also mark them with the `[DataMember]` attribute for the serializer to recognize them.

```cs
[DataContract]
public class Config : SyncedInstance<Config> {
    public ConfigEntry<float> DISPLAY_DEBUG_INFO { get; private set; }

    [DataMember] public SyncedEntry<float> MOVEMENT_SPEED { get; private set; }
    [DataMember] public SyncedEntry<float> CLIMB_SPEED { get; private set; }
}
```

> [!WARNING]
> When using client side and synced entries in the same class, any instance of `ConfigEntry` should **NOT** be marked with `[DataMember]` to avoid BepInEx runtime errors.

## 2. Binding config entries
Before binding, we will add the following line at the top of the constructor.
```cs
InitInstance(this);
```

We can now bind our entries to the **BepInEx** config file like usual, however we will use the dedicated `BindSyncedEntry` extension method provided by **CSync**.

```cs
public Config(ConfigFile cfg) {
    InitInstance(this);

    MOVEMENT_SPEED = cfg.BindSyncedEntry("Movement", "fMovementSpeed", 4.1f,
        "The base speed at which the player moves. This is NOT a multiplier."
    );

    CLIMB_SPEED = cfg.BindSyncedEntry("Movement", "fClimbSpeed", 3.9f,
        "The base speed at which the player climbs. This is NOT a multiplier."
    );
}
```

## 3. Adding synchronization methods
We will now place the following methods within the class, making sure to replace `PluginInfo.PLUGIN_GUID` if it is defined elsewhere.

> [!WARNING]
> If you specify a GUID that is not unique, your mod will conflict with other mods that use **CSync**.

```cs
internal static void RequestSync() {
    if (!IsClient) return;

    using FastBufferWriter stream = new(IntSize, Allocator.Temp);

    // Method `OnRequestSync` will then get called on host.
    stream.SendMessage($"{PluginInfo.PLUGIN_GUID}_OnRequestConfigSync");
}

internal static void OnRequestSync(ulong clientId, FastBufferReader _) {
    if (!IsHost) return;

    byte[] array = SerializeToBytes(Instance);
    int value = array.Length;

    using FastBufferWriter stream = new(value + IntSize, Allocator.Temp);

    try {
        stream.WriteValueSafe(in value, default);
        stream.WriteBytesSafe(array);

        stream.SendMessage($"{PluginInfo.PLUGIN_GUID}_OnReceiveConfigSync", clientId);
    } catch(Exception e) {
        Plugin.Logger.LogError($"Error occurred syncing config with client: {clientId}\n{e}");
    }
}

internal static void OnReceiveSync(ulong _, FastBufferReader reader) {
    if (!reader.TryBeginRead(IntSize)) {
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

    try {
        SyncInstance(data);
    } catch(Exception e) {
        Plugin.Logger.LogError($"Error syncing config instance!\n{e}");
    }
}
```

## 4.
Add in the following method and make sure the GUID is defined just like the previous step.

```cs
[HarmonyPostfix]
[HarmonyPatch(typeof(PlayerControllerB), "ConnectClientToPlayerObject")]
public static void InitializeLocalPlayer() {
    if (IsHost) {
        MessageManager.RegisterNamedMessageHandler($"{PluginInfo.PLUGIN_GUID}_OnRequestConfigSync", OnRequestSync);
        Synced = true;

        return;
    }

    Synced = false;
    MessageManager.RegisterNamedMessageHandler($"{PluginInfo.PLUGIN_GUID}_OnReceiveConfigSync", OnReceiveSync);
    RequestSync();
}
```

Finally, we need to make sure the client reverts back to their own config upon leaving.

```cs
[HarmonyPostfix]
[HarmonyPatch(typeof(GameNetworkManager), "StartDisconnect")]
public static void PlayerLeave() {
    Config.RevertSync();
}
```

## Finalizing and Publishing
It is recommended you inform **BepInEx** that you depend upon **CSync**.<br>
You can do this by adding a `BepInDependency` attribute and specifying the GUID of this library. 

```cs
[BepInPlugin(PluginInfo.PLUGIN_GUID, PluginInfo.PLUGIN_NAME, PluginInfo.PLUGIN_VERSION)]
[BepInDependency("io.github.CSync")] // [!code ++]
public class MyPlugin : BaseUnityPlugin
```

If you plan to upload your mod to **Thunderstore**, make sure you also specify the dependency within your `manifest.json` file by adding its **Thunderstore** ID to the array.
```json
"dependencies": ["BepInEx-BepInExPack-5.4.2100", "Owen3H-CSync-1.0.6"]
```

# Troubleshooting
## Syncing doesn't work when I patch manually.

If you're using `PatchAll()` with type parameters, make sure to patch the `Config` class like other files.<br>
Example:
```cs
harmony.PatchAll(typeof(StartMatchLeverPatch));
harmony.PatchAll(typeof(GameNetworkManagerPatch));
harmony.PatchAll(typeof(Config)); // [!code ++]
```

## I am not seeing any logs from the request/receiver methods?

Harmony may refuse to patch the `InitializeLocalPlayer` method inside `Config.cs` if you have already have a dedicated patch file for `PlayerControllerB`. You can try placing the method there instead.
```cs
[HarmonyPatch(typeof(PlayerControllerB))]
internal class PlayerControllerBPatch {
    [HarmonyPostfix]
    [HarmonyPatch("ConnectClientToPlayerObject")]
    public static void InitializeLocalPlayer() {
        if (Config.IsHost) {
            try {
                Config.MessageManager.RegisterNamedMessageHandler($"{PluginInfo.PLUGIN_GUID}_OnRequestConfigSync", Config.OnRequestSync);
                Config.Synced = true;
            }
            catch (Exception e) {
                Plugin.Logger.LogError(e);
            }

            return;
        }

        Config.Synced = false;
        Config.MessageManager.RegisterNamedMessageHandler($"{PluginInfo.PLUGIN_GUID}_OnReceiveConfigSync", Config.OnReceiveSync);
        Config.RequestSync();
    }
}
```