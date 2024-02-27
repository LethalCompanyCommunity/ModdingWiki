---
prev: false
next: true
description: 使用 CSync 的主要指南。
---

# CSync 使用指南

## 1. 创建一个可序列化的配置类

首先，我们将创建一个继承自 `SyncedInstance` 的新类。<br>
然后，我们必须添加 `[DataContract]` 属性，以便与客户端同步。

```cs
[DataContract]
public class Config : SyncedInstance<Config>
```

在此类中，我们现在可以开始写出要同步的配置条目。<br>
我们还必须使用 `[DataMember]` 属性来标记它们，以便序列化器识别它们。

```cs
[DataContract]
public class Config : SyncedInstance<Config> {
    public ConfigEntry<float> DISPLAY_DEBUG_INFO { get; private set; }

    [DataMember] public SyncedEntry<float> MOVEMENT_SPEED { get; private set; }
    [DataMember] public SyncedEntry<float> CLIMB_SPEED { get; private set; }
}
```

:::warning
When using client side and synced entries in the same class, any instance of `ConfigEntry` should **NOT** be marked with `[DataMember]` to avoid BepInEx runtime errors.
:::

## 2. 绑定配置条目

Before binding, we will add the following line at the top of the constructor.

```cs
InitInstance(this);
```

We can now bind our entries to the **BepInEx** config file like usual, however we will use the dedicated `BindSyncedEntry` extension method provided by **CSync**.

```cs
public Config(ConfigFile cfg) {
    InitInstance(this);

    MOVEMENT_SPEED = cfg.BindSyncedEntry("Movement", "fMovementSpeed", 4.1f,
        "玩家移动的基本速度。这不是乘数。"
    );

    CLIMB_SPEED = cfg.BindSyncedEntry("Movement", "fClimbSpeed", 3.9f,
        "玩家攀爬的基本速度。这不是乘数。"
    );
}
```

## 3. 添加同步方法

We will now place the following methods within the class, making sure to replace `PluginInfo.PLUGIN_GUID` if it is defined elsewhere.

:::warning
If you specify a GUID that is not unique, your mod will conflict with other mods that use **CSync**.
:::

```cs
internal static void RequestSync() {
    if (!IsClient) return;

    using FastBufferWriter stream = new(IntSize, Allocator.Temp);

    // 稍后将在主机上调用方法 `OnRequestSync`。
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
        Plugin.Logger.LogError($"与客户端同步配置时发生错误：{clientId}\n{e}");
    }
}

internal static void OnReceiveSync(ulong _, FastBufferReader reader) {
    if (!reader.TryBeginRead(IntSize)) {
        Plugin.Logger.LogError("配置同步错误：无法开始读取缓冲区。");
        return;
    }

    reader.ReadValueSafe(out int val, default);
    if (!reader.TryBeginRead(val)) {
        Plugin.Logger.LogError("配置同步错误：主机无法同步。");
        return;
    }

    byte[] data = new byte[val];
    reader.ReadBytesSafe(ref data, val);

    try {
        SyncInstance(data);
    } catch(Exception e) {
        Plugin.Logger.LogError($"同步配置实例时出错！\n{e}");
    }
}
```

## 4. 应用 Harmony 补丁

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

## 敲定与发布

It is recommended you inform **BepInEx** that you depend upon **CSync**.<br>
You can do this by adding a `BepInDependency` attribute and specifying the GUID of this library.

```cs
[BepInPlugin(PluginInfo.PLUGIN_GUID, PluginInfo.PLUGIN_NAME, PluginInfo.PLUGIN_VERSION)]
[BepInDependency("io.github.CSync")] // [!code ++]
public class MyPlugin : BaseUnityPlugin
```

If you plan to upload your mod to **Thunderstore**, make sure you also specify the dependency within your `manifest.json` file by adding its **Thunderstore** ID to the array.

```json
"dependencies": ["BepInEx-BepInExPack-5.4.2100", "Owen3H-CSync-1.0.8"]
```

:::info 注意
请确保您的清单包含最新版本，上面看到的版本可能已过时！
:::
