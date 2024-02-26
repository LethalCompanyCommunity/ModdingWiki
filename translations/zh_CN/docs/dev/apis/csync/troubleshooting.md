---
prev: true
next: false
description: 使用 CSync 出现问题时的故障排除部分。
---

# 故障排除

本页面旨在回答常见问题并解决经常遇到的问题。<br>
如果您遇到的问题不在这里，请在模组 Discord 中的 [CSync forum](https://discord.com/channels/1168655651455639582/1199756974368227439) 报告。

## 手动修补时无法同步。

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
