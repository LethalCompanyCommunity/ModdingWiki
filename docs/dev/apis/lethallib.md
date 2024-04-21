---
prev: false
next: false
description: An list of entries for LethalLib modding topics and the basis for all LethalLib guides on this wiki.
---
# LethalLib mod creation basics
This page will go over all the basics needed to start making mods using LethalLib. At the bottom of this page you can branch out to whatever specific part of the game you'd like to mod from there.

## LethalLib requirements
To begin with LethalLib development, you will need the following mods:

- [BepInExPack by BepInEx](https://thunderstore.io/c/lethal-company/p/BepInEx/BepInExPack/)

- [HookGenPatcher by HarbingerOfMe (uploaded by Evaisa)](https://thunderstore.io/c/lethal-company/p/Evaisa/HookGenPatcher/)

- [LethalLib by Evaisa](https://thunderstore.io/c/lethal-company/p/Evaisa/LethalLib/)

These can be installed with a mod manager such as r2modman or Thunderstore manager, or installed manually. A mod manager will let you automatically update LethalLib, but a manual install makes it easier to do LAN multiplayer testing. The guides below will assume a manual install for simplicity.

## Development environment
You will need to start by creating a plugin (see [Starting a Mod](/dev/starting-a-mod)) and adding the LethalLib's NuGet package as a package reference. This can be done by adding the following in your `csproj` file:

```xml
<ItemGroup>
    <PackageReference Include="Evaisa.LethalLib" Version="0.*" /> // [!code ++]
</ItemGroup>
```

You'll also want to add the LethalLib mod ID as a BepInEx dependency, which can be done by adding a `BepInDependency` attribute, like so:
```cs
[BepInPlugin(PluginInfo.PLUGIN_GUID, PluginInfo.PLUGIN_NAME, PluginInfo.PLUGIN_VERSION)]
[BepInDependency(LethalLib.Plugin.ModGUID)] // [!code ++]
public class MyPlugin : BaseUnityPlugin
```


This is also a quick way of ensuring you've correctly added the LethalLib as a package reference, as otherwise this will give you an error.

## Lethal Company Unity project
In order to make mods for LethalLib, you will almost certainly need to use a decompiled Lethal Company Unity project so you can access the game scripts. For this you should use NomNom's [Lethal Company Project Patcher](https://github.com/nomnomab/lc-project-patcher#readme), which can output a working Lethal Company Unity project.

:::tip
If you are making an enemy mod, the [LC-ExampleEnemy](https://github.com/Hamunii/LC-ExampleEnemy) project provides a template Unity project made with the **Lethal Company Project Patcher**. [See the custom enemies tutorial here](/dev/apis/lethallib/custom-enemies/overview).
:::

:::danger
You could also use Evaisa's [Lethal Company Unity Template](https://github.com/EvaisaDev/LethalCompanyUnityTemplate/tree/main#readme), **but we don't recommend using it since it is outdated**.
:::

## Specific tutorials
Each page below goes through the full process of creating a mod for the given part of Lethal Company via LethalLib. These will use the template project above as a base.

- [Custom Scrap](/dev/apis/lethallib/customscrap)
- [Custom Enemies](/dev/apis/lethallib/custom-enemies/overview)