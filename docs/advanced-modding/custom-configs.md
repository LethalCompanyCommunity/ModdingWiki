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

## Creating Config Entries
Create a config class and add entries for any variables that you want to be configurable.

```cs
public class Config
{
    public static ConfigEntry<string> configGreeting;
    public static ConfigEntry<bool> configDisplayGreeting;

    // ...
}
```

Then we can start binding our config entries to the fields we just created inside of a class constructor.

```cs
public Config()
{
    configGreeting = Config.Bind("General",       // The section under which the option is shown
                                 "GreetingText",  // The key of the configuration option in the configuration file
                                 "Hello, world!", // The default value
                                 "A greeting text to show when the game is launched"); // Description of the option
    
    configDisplayGreeting = Config.Bind("General.Toggles", 
                                        "DisplayGreeting",
                                        true,
                                        "Whether or not to show the greeting text");
}
```

We then need to run said constructor to bind said configs to proper values and properties for users.<br>
In your main class (usually `Plugin.cs`), implement the constructor with a parameter referencing the file that will be created by BepInEx.

```cs
public class MyExampleMod : BaseUnityPlugin
{
    public static new Config MyConfig { get; internal set; }

    // ...

    private void Awake()
    {
        MyConfig = new(base.Config);
    }
}
```


## Using Config Entries

You can now get the data from the config variables you have made using the `.Value` property.

```cs
private void MyExamplePatch()
{
    private void MyExampleMethod()
    {
        // Instead of just Logger.LogInfo("Hello, world!")
        if(configDisplayGreeting.Value)
            Logger.LogInfo(configGreeting.Value);
    }
}
```

::: danger STOP
Understand that your config file **Will Not Be Created** until your mod is loaded ingame **at least once**. See the [r2modman Configs Page](/installation/configuration) for using your configs.
:::

Now you have config files for your mods! If it's extremely important that your mod has a config value that's the same for every player, you may want to consider reading the page on [custom config syncing](/intermediate-modding/custom-config-syncing).
