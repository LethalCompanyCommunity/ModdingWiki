
---
prev: false
next: false
description: An intermediate overview of how to impliment custom configs for your Lethal Company mods.
---

# Custom Configs

::: warning
**This is an intermediate article. While this introduces some C# concepts, it is recommended to understand C# and the basics of modding this game <i>before</i> reading this article.**
:::

::: info
This tutorial is taken and adapted from the [BepInEx Configuration Documentation]([https://docs-multiplayer.unity3d.com/netcode/1.5.2/about/](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/4_configuration.html)). For more resources refer to that.
:::

## Creating Config Entries
In your main class (usually `Plugin.cs`), create entries for any variables that you want to be configurable.

```cs
public class MyExampleMod : BaseUnityPlugin
{
    public static ConfigEntry<string> configGreeting;
    public static ConfigEntry<bool> configDisplayGreeting;

    // ...

    private void Awake()
    {
        ExampleInitConfig(); //See below
    }
}
```

We also need to run a method to bind said configs to proper values and properties for users. This could be done inside of the Awake method but for the sake of coding conventions making it a seperate method is a more readable way of doing so.

```cs
static void ExampleInitConfig()
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

## Using Config Entries

You can now get the data from the config variables you have made using the `.Value` property.

```cs
private void MyExamplePatch()
{
    private void MyExampleMethod()
    {
        // Instead of just Logger.LogInfo("Hello, world!")
        if(MyExampleMod.configDisplayGreeting.Value)
            Logger.LogInfo(MyExampleMod.configGreeting.Value);
    }
}
```

::: danger STOP
Understand that your config file **Will Not Be Created** until your mod is loaded ingame **at least once**. See the [r2modman Configs Page](https://lethal.wiki/installation/configuration.html) for using your configs.
:::

Now you have config files for your mods!
