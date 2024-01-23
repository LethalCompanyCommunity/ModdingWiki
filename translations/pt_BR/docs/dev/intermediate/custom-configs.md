---
prev: false
next: true
description: Uma visão geral de nível intermediário sobre como implementar configurações personalizadas nos seus mods de Lethal Company.
---

# Configurações Personalizadas

:::warning
**Este é um artigo avançado. Mesmo introduzindo alguns conceitos de C#, é altamente recomendado entender C# e os básicos de moddar o game <i>antes</i> de ler este artigo.**
:::

:::info
Este tutorial foi pego e adaptado da [Documentação de configuração do BepInEx](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/4_configuration.html). Para mais recursos, consulte ele.
:::

## Criando Registros de Configuração

Crie uma classe de configuração e adicionar registros para qualquer variável que você quer que seja configurável.

```cs
public class Config
{
    public static ConfigEntry<string> configGreeting;
    public static ConfigEntry<bool> configDisplayGreeting;

    // ...
}
```

Então conseguiremos conectar nosso registro de configuração com os campos que acabamos de criar dentro do construtor da classe.

```cs
public Config(ConfigFile cfg)
{
    configGreeting = cfg.Bind(
            "General",                          // Seção do config
            "GreetingText",                     // Chave do config
            "Hello, world!",                    // Valor padrão
            "Greeting text upon game launch"    // Descrição
    );
    
    configDisplayGreeting = cfg.Bind(
            "General.Toggles",                  // Subseção do config
            "DisplayGreeting",                  // Chave deste config
            true,                               // Valor padrão
            "To show the greeting text"         // Descrição
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
