# Writing Mods

So you've decided to write some mods. Look no further!

?> BepInEx has [a broadly-applicable starter guide](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/index.html) that you should read too!

## Setting up the project

Your editor likely has a "Create project" button. [Rider's](https://jetbrains.com/rider/) looks like this:

![Rider 'new solution' page](../docs/files/new_solution.png)

You want to pick "Class Library" as the project type. The correct target framework is **.NET 4.7.2**,
though the runtime is actually Unity Mono which has some quirks. If you can't select `net472`, select
`netstandard2.1` and change it manually in the `.csproj`.

### NuGet note

BepInEx hosts their packages on their own NuGet server, so once you've set up the project, you'll need
to add a `NuGet.config` file next to your solution file with the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <add key="BepInEx" value="https://nuget.bepinex.dev/v3/index.json" />
    </packageSources>
</configuration>
```

## Setting up your `.csproj`

The generated `.csproj` probably looks pretty empty right now:

```xml
<!-- The `Sdk` property automatically sets up a lot of things for us (i.e. standard library!) -->
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <!-- Change this to net472 if you created it as netstandard2.1 -->
        <TargetFramework>net472</TargetFramework>
        <Nullable>enable</Nullable>
    </PropertyGroup>

</Project>
```

Since you're developing mods for Trombone Champ, you'll need the actual game code!
Fortunately we ship it on NuGet, so you can simply add the below to your `.csproj` file,
below the end of the `</PropertyGroup>`:

```xml
<ItemGroup>
    <!-- Required: BepInEx and the game code itself! -->
    <PackageReference Include="BepInEx.Core" Version="5.*" />
    <PackageReference Include="TromboneChamp.GameLibs" Version="%{nuget:TromboneChamp.GameLibs}" />

    <!-- BaboonAPI provides useful hooks and patches for mods, -->
    <!-- but it's not strictly required -->
    <PackageReference Include="TromboneChamp.BaboonAPI" Version="%{nuget:TromboneChamp.BaboonAPI}" />
</ItemGroup>
```

### Depending on TrombLoader

TrombLoader is now also on NuGet, so you can simply add another PackageReference:

```xml
<PackageReference Include="TromboneChamp.TrombLoader" Version="%{nuget:TromboneChamp.TrombLoader}" />
```
