---
prev: false
next: true
description: An intermediate overview of how to implement custom configs for your Lethal Company mods.
---

# Custom Configs

::: warning
**This is an advanced article. While this introduces some C# concepts, it is highly recommended to understand C# and the basics of modding this game <i>before</i> reading this article.**
:::

::: info
This tutorial is taken and adapted from the [BepInEx Configuration Documentation](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/4_configuration.html). For more resources refer to that.
:::

## Introduction

To make config files easy, BepInEx provides a built-in [ConfigFile](https://docs.bepinex.dev/api/BepInEx.Configuration.ConfigFile.html) class. With it, we don't have to worry about reading or writing to files ourselves, and we can easily bind our settings to the configuration file.

We are provided with a `base.Config` variable of type `ConfigFile` in our main plugin class. We can bind our settings to the `base.Config` config file with the `Bind` method.

::: info
[base (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/base)
> *The `base` keyword is used to access members of the base class from within a derived class.*  

We don't actually need to specify the `base` anywhere in these examples, it is merely used to make it clear where the `Config` variable comes from.
:::

## Using Configs

In this example, we have the following settings in our config file:
- **GreetingText**
  - Is listed under the **\[General]** section
  - Is a `string` value
    - Is *`"Hello, world!"`* by default
- **DisplayGreeting**
  - Is listed under the **[General.Toggles]** subsection
  - Is a `boolean` value
    - Is *`true`* by default

### Basic Example

The most basic implementation could look something like this:

```cs
using BepInEx;
using BepInEx.Configuration;

namespace MyMod;

[BepInPlugin("Author.MyMod", "MyMod", "1.0.0")]
public class Plugin : BaseUnityPlugin
{
    private void Awake()
    {
        // We bind our settings to the config file provided by our plugin instance,
        // and we store the bound config entries in our variables
        var configGreeting = base.Config.Bind(
            "General",                          // Config section
            "GreetingText",                     // Key of this config
            "Hello, world!",                    // Default value
            "Greeting text upon game launch"    // Description
        );

        var configDisplayGreeting = base.Config.Bind(
            "General.Toggles",                  // Config subsection
            "DisplayGreeting",                  // Key of this config
            true,                               // Default value
            "To show the greeting text"         // Description
        );
        
        // We can then access the values of the config entries with `.Value`
        if(configDisplayGreeting.Value)
            Logger.LogInfo(configGreeting.Value);
    }
}
```

::: danger NOTICE
Your config file **Will Not Be Created** until your mod is loaded in-game **at least once**. See the [r2modman Configs Page](/installation/configuration) for using your configs.
:::

However, doing our configuration options like this in the `Awake` method can get messy very quickly, so we should probably separate them into their own class. Thankfully, this is simple.

### Custom Configuration Class

Here we have separated our configuration settings into their own class `MyModConfig`.

::: info
We have made `MyModConfig BoundConfig` a property. To learn about properties, see [Properties](https://learn.microsoft.com/en-us/dotnet/csharp/properties).
:::
```cs
// ... in our plugin class
internal static MyModConfig BoundConfig { get; private set; } = null!; // [!code ++]
private void Awake()
{
    // Create a new instance of our config class which has our setting entries // [!code ++]
    BoundConfig = new MyModConfig(base.Config); // [!code ++]
    
    // We access our config variables through the instance
    if(BoundConfig.displayGreeting.Value)
        Logger.LogInfo(BoundConfig.greeting.Value);
}
```
::: info
We have marked our public variables as `readonly`. This prevents assigning to these variables after the constructor exits. See [readonly (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly).
:::
```cs
// We have made a new file for this configuration class
using BepInEx.Configuration;

namespace MyMod;

class MyModConfig
{
    // We define our config variables in a public scope
    public readonly ConfigEntry<string> greeting;
    public readonly ConfigEntry<bool> displayGreeting;

    public MyModConfig(ConfigFile cfg)
    {
        greeting = cfg.Bind(
            "General",                          // Config section
            "GreetingText",                     // Key of this config
            "Hello, world!",                    // Default value
            "Greeting text upon game launch"    // Description
        );

        displayGreeting = cfg.Bind(
            "General.Toggles",                  // Config subsection
            "DisplayGreeting",                  // Key of this config
            true,                               // Default value
            "To show the greeting text"         // Description
        );
    }
}
```
However, we still have an issue: if we change what config entries our config file has, the old config entries will stay. BepInEx also writes to the config file every time to when we bind a setting by default, which is inefficient and slow. So, let's solve these issues.

### Better Configuration

Here we disable the `SaveOnConfigSet` property which is enabled by default in the ConfigFile BepInEx provides us with, and then re-enable it after we have bound all our settings.

We also clear the private `OrphanedEntries` dictionary, which will get rid of all the orphaned settings when the config file is saved.

```cs
using System.Reflection;
using System.Collections.Generic;
using HarmonyLib;
using BepInEx.Configuration;
// ...
class MyModConfig
{
    // ...
    public MyModConfig(ConfigFile cfg)
    {
        // We want to disable saving our config file every time we bind a // [!code ++]
        // setting as it's inefficient and slow // [!code ++]
        cfg.SaveOnConfigSet = false; // [!code ++]

        greeting = cfg.Bind(
            // ...
        );

        displayGreeting = cfg.Bind(
            // ...
        );
        
        // Get rid of old settings from the config file that are not used anymore // [!code ++]
        ClearOrphanedEntries(cfg); // [!code ++]
        // We need to manually save since we disabled `SaveOnConfigSet` earlier // [!code ++]
        cfg.Save(); // [!code ++]
        // And finally, we re-enable `SaveOnConfigSet` so changes to our config // [!code ++]
        // entries are written to the config file automatically from now on // [!code ++]
        cfg.SaveOnConfigSet = true; // [!code ++]
    }

    static void ClearOrphanedEntries(ConfigFile cfg) // [!code ++]
    { // [!code ++]
        // Find the private property `OrphanedEntries` from the type `ConfigFile` // [!code ++]
        PropertyInfo orphanedEntriesProp = AccessTools.Property(typeof(ConfigFile), "OrphanedEntries"); // [!code ++]
        // And get the value of that property from our ConfigFile instance // [!code ++]
        var orphanedEntries = (Dictionary<ConfigDefinition, string>)orphanedEntriesProp.GetValue(cfg); // [!code ++]
        // And finally, clear the `OrphanedEntries` dictionary // [!code ++]
        orphanedEntries.Clear(); // [!code ++]
    } // [!code ++]
}
```

## Conclusion

Now you have config files for your mods! If it's extremely important that your mod has a config value that's the same for every player, you may want to consider reading the page on [custom config syncing](/dev/intermediate/custom-config-syncing).

Alternatively, you might want to use an easy-to-use library for syncing configs, like [CSync](/dev/apis/csync).