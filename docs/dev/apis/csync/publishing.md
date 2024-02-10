---
prev: true
next: true
description: Notes for publishing a mod depending on CSync.
---

# Finalizing and Publishing
It is recommended you inform **BepInEx** that you depend upon **CSync**.<br>
You can do this by adding a `BepInDependency` attribute and specifying the GUID of this library. 

```cs
[BepInPlugin(PluginInfo.PLUGIN_GUID, PluginInfo.PLUGIN_NAME, PluginInfo.PLUGIN_VERSION)]
[BepInDependency("io.github.CSync")] // [!code ++]
public class MyPlugin : BaseUnityPlugin
```

If you plan to upload your mod to **Thunderstore**, make sure you also specify the dependency within your `manifest.json` file by adding its **Thunderstore** ID to the array.
```json
"dependencies": ["BepInEx-BepInExPack-5.4.2100", "Owen3H-CSync-1.0.7"]
```

**NOTE**:
Please ensure your manifest contains the latest version, the one seen above may be outdated!
