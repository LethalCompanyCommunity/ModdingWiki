---
prev: false
next: true
description: 关于如何为致命公司模组实现自定义配置的中间概述。
---

# 自定义配置

:::warning
**这是一篇进阶文章。 虽然本文介绍了一些 C# 概念，但强烈建议在阅读本文<i>之前</i>了解 C# 和修改此游戏的基础知识。**
:::

:::info
本教程摘录并改编自 [BepInEx 配置文档](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/4_configuration.html)。 更多资源请参阅。
:::

## 创建配置条目

创建一个配置类并为您想要配置的任何变量添加条目。

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
public Config(ConfigFile cfg)
{
    configGreeting = cfg.Bind(
            "General",                          // Config section
            "GreetingText",                     // Key of this config
            "Hello, world!",                    // Default value
            "Greeting text upon game launch"    // Description
    );
    
    configDisplayGreeting = cfg.Bind(
            "General.Toggles",                  // Config subsection
            "DisplayGreeting",                  // Key of this config
            true,                               // Default value
            "To show the greeting text"         // Description
    );
}
```

We then need to run said constructor to bind said configs to proper values and properties for users.<br><br>
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
        if(Config.configDisplayGreeting.Value)
            Logger.LogInfo(Config.configGreeting.Value);
    }
}
```

:::danger STOP
Understand that your config file **Will Not Be Created** until your mod is loaded ingame **at least once**. See the [r2modman Configs Page](/installation/configuration) for using your configs.
:::

Now you have config files for your mods! If it's extremely important that your mod has a config value that's the same for every player, you may want to consider reading the page on [custom config syncing](/dev/intermediate/custom-config-syncing).
