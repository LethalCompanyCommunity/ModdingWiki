---
description: Learn how to create a basic project for a Lethal Company mod.
---

# Starting a mod

## Setting up your project

:::warning
This guide assumes you've completed all the required steps in **[initial setup](initial-setup)**, or that you know what you're doing.
:::

This guide follows certain parts of the [official BepInEx guide](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html).

### Using the template repository

We have created a [template repository](https://github.com/LethalCompany/LethalCompanyTemplate) on GitHub. If you're remotely familiar with GitHub, or willing to [learn](initial-setup.html#creating-a-github-account), this might serve as a quick start. It does come with some minor drawbacks such as it using "LethalCompanyTemplate" as project name in a number of files, but you can edit this. It should build out-of-the-box with no edits required; though you may need to add BepInEx as a NuGet source (see the [relevant](#adding-nuget-source) section below).

### Creating your project

First things first, you'll need to create your project. If you've not done so already, we recommend running the following command in a console to add some BepInEx templates for new projects:

```cmd
dotnet new -i BepInEx.Templates --nuget-source https://nuget.bepinex.dev/v3/index.json
```

Next, you'll want to create a new project (sometimes called "solution", in CSharp). There are two main ways to do this.

#### Using an IDE (more control)

Depending on your IDE, this process will look slightly different. You'll want to give the solution the name of your soon-to-be mod. If given the option to use a template (you may want to google for _"how to use template in `insert your IDE name here, for example "Rider" or "Visual Studio"`"_), use the `BepInEx 5 Plugin Template`.

#### Using the console (simpler)

Alternatively, you can open a console and run the following command, assuming you've set up the templates using the command above. Replace `MyFirstPlugin` with your mod's name:

```cmd
dotnet new bepinex5plugin -n MyFirstPlugin -T "netstandard2.1" -U "2022.3.9"
```

::: warning
Some people have been [reporting problems](https://github.com/BepInEx/BepInEx.Templates/issues/8) creating new BepInEx plugins from the template when using the .NET 8 SDK:

`Failed to create template.
Details: Object reference not set to an instance of an object.`

If you get this error, try downgrading to the [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0).
:::

### Organising your modding projects

We recommend creating a folder somewhere easily accessible that will store all of your future modding projects. Something like "LethalCompanyMods". Move the newly created folder for your mod into this folder, to keep things well-organised.

### Adding NuGet source

BepInEx uses a separate NuGet source. You'll need to add the BepInEx NuGet source to your global source list.

The BepInEx NuGet source has the following configuration:

```
name: BepInEx
url: https://nuget.bepinex.dev/v3/index.json
```

For Rider, you can do this by going to the NuGet window, going to its `Sources` tab, and then clicking on the green "+" icon in the `Feeds` sub-tab. There, add a new entry using the above configuration. See [Rider's docs](https://www.jetbrains.com/help/rider/Using_NuGet.html#sources) for more info.

![Show Nuget Sources tab in Rider](/images/starting-a-mod/ridershownugetsources.png)

![Rider Nuget Sources config with BepInEx added](/images/starting-a-mod/ridernugetfeeds.png)

For Visual Studio, please follow [this documentation](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources).

### Making sure your mod is set up correctly

Mods are developed for specific versions of Unity and .NET, which can be specified in a configuration file. This file is a `.csproj` file, and has as name the name of your mod (e.g. `MyFirstPlugin.csproj`). If you used the console command correctly, it should work out of the box. However, you'll want to double check this to prevent any easy-to-fix problems that can result from not having it set up correctly. When using an IDE, the template might not use the correct version, so in this case you'll definitely have to check things.

Our [template project](https://github.com/LethalCompany/LethalCompanyTemplate) has an example `.csproj` file that is properly configured, which can be found [here](https://github.com/LethalCompany/LethalCompanyTemplate/blob/main/LethalCompanyTemplate/LethalCompanyTemplate.csproj). Please check and compare your local mod's file with this file, and make sure the following segment is the same (except for the `AssemblyName`, `Description`, and `Version`).

![Example csproj with Nuget references and proper metadata](/images/starting-a-mod/csprojexample.png)

### "Building" your mod

Your IDE is capable of turning your code into a file that can be run (in this case by BepInEx as a mod). This process is called "building" or "compiling". In this case, it will turn your code into a `.dll` file. This file _is_ your mod.

Depending on your IDE, the build button may be placed differently. For Rider, it is in the top right:

![Rider's Build Solution button](/images/starting-a-mod/riderbuild.png)

Once built, you should be able to find the `.dll` file in your project's folder, in the following subfolder path (once again replacing `MyFirstPlugin` with the name you gave your mod/project): `MyFirstPlugin/bin/(Release or Debug)/netstandard2.1/MyFirstPlugin.dll`

Simply copy & paste this `.dll` file into the `BepInEx/plugins` folder, in your game directory, and it should run the mod. We recommend keeping the default `LogInfo` statement in your `Awake` method that comes with the template. If you have this statement, you should see it appear in the console that opens when you run the game (after installing BepInEx, and enabling the console as per the first wiki article).

### Adding game assemblies

To actually use the game's methods and classes, you'll need to add the game's `Assembly-CSharp.dll` to your project's references. You can either do this manually by editing your `.csproj` file, or through a GUI your IDE provides. You will want to google how to do this for your specific IDE.

You will very likely also need the `UnityEngine.dll`, since this is required to use any of Unity's methods and classes.

The [template project](https://github.com/LethalCompany/LethalCompanyTemplate) has both of these set up, so you can copy that part of the `.csproj` file. You **will** need to edit the path to be correct, however.

The assemblies can be found in the `Lethal Company_Data/Managed` folder, in the game's directory.

### Additional guides

We highly recommend reading through the rest of the [official BepInEx guide](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html) for extra information.

## Next steps

We recommend reading through our very short guide on [open-source & ethics](open-source-and-ethics), to help foster a healthy modding community.

Once you've finished a mod, you can [publish it](publishing-your-mod).
