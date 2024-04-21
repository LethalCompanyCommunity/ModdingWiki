---
prev: true
next: true
description: The legacy guide to using CSync (v3, Owen3H).
---

# Guide to using CSync

## 1. Creating a serializable config class

To begin, we will create a new config class (or edit your existing one) and make it inherit from `SyncedConfig`.
We must then add the `[DataContract]` attribute for this to be synced with clients.

```csharp
[DataContract]
public class ExampleConfig : SyncedConfig<ExampleConfig>
```

Within this class, we can begin writing out our config entries that we want to sync using `SyncedEntry`.
We must also mark them with the `[DataMember]` attribute for the serializer to recognize them.

```csharp
[DataContract]
public class ExampleConfig : SyncedConfig<ExampleConfig> {
public ConfigEntry<float> DISPLAY_DEBUG_INFO { get; private set; }

    [DataMember] public SyncedEntry<float> MOVEMENT_SPEED { get; private set; }
    [DataMember] public SyncedEntry<float> CLIMB_SPEED { get; private set; }
}
```

::: warning
When using client side and synced entries in the same class, any instance of `ConfigEntry` should **NOT** be marked with `[DataMember]` to avoid BepInEx runtime errors.
:::

## 2. Binding config entries

Before binding, we must do a few things.
To begin, make sure your config constructor implements base() with the GUID of your mod.

```csharp
public ExampleConfig(ConfigFile cfg) : base("MyModName")
```

Then, add the following line at the top of this constructor.
```csharp
ConfigManager.Register(this);
```

We can now bind our entries to the BepInEx config file like usual, however we will use the dedicated `BindSyncedEntry`
instead - this is an extension method provided by CSync.

```csharp
public ExampleConfig(ConfigFile cfg) : base("MyModName") {
ConfigManager.Register(this);

    MOVEMENT_SPEED = cfg.BindSyncedEntry("Movement", "fMovementSpeed", 4.1f,
        "The base speed at which the player moves."
    );

    CLIMB_SPEED = cfg.BindSyncedEntry("Movement", "fClimbSpeed", 3.9f,
        "The base speed at which the player climbs."
    );
}
```

## Finalizing and Publishing

It is recommended you inform **BepInEx** that you depend upon **CSync**.

You can do this by adding a `BepInDependency` attribute and specifying the GUID of this library. 

```cs
[BepInPlugin(PluginInfo.PLUGIN_GUID, PluginInfo.PLUGIN_NAME, PluginInfo.PLUGIN_VERSION)]
[BepInDependency("com.sigurd.csync")] // [!code ++]
public class MyPlugin : BaseUnityPlugin
```

If you plan to upload your mod to **Thunderstore**, make sure you also specify the dependency within your 
`manifest.json` file by adding its **Thunderstore** ID to the array.
```json
{
  "dependencies": ["BepInEx-BepInExPack-5.4.2100", "Sigurd-CSync-3.1.1"] // [!code focus]
}
```

::: info NOTE
Please ensure your manifest contains the latest version, the one seen above may be outdated!
:::