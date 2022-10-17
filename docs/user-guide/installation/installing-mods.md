# Installing Mods
---

?> If you prefer video tutorials, VorgunTheBeta has [a video explaining how to install mods and custom songs](https://youtu.be/pSwNSGx-P5c).

## Finding Install Location
1. Open Steam and right-click on Trombone Champ. Then, go to `Manage > Browse local files`.  

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Click the address bar at the top to select your installation folder's path. Hit `CTRL`+`C` to copy this to your clipboard.  

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Installing BepInEx

1. Download [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) into your TromboneChamp folder. You will want to get `BepinEx_x64_VERSION.zip`, with `VERSION` being the version number.
2. Extract the contents of the BepInEx .zip file directly into the [install folder](##finding-install-location) of your Trombone Champ installation.  

![BepInEx Extraction Preview](../docs/files/bepinexextract.png)

!> Please ensure that you've downloaded the `x64` version of BepInEx. the `unix` and `x86` versions will cause your game to not function properly.

!> **IMPORTANT:** Extract BepInEx *directly* into your game's folder as shown in the image above. If you've done it correctly, your game's folder should look like the below image.

![Finished BepinEx Install](../docs/files/finishedbepinex.png)

3. Run Trombone Champ once to complete installation.

## Installation

With BepInEx installed, you can start downloading specific mods - a full list is available in the `#mod-releases` channel in the [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ).

As you likely want to install custom songs, this section will use [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) as an example.

1. Navigate to your [game's install folder](###finding-install-location), the `BepInEx` folder, then the `plugins` folder.

2. Click the address bar at the top to select your installation folder's path. Hit `CTRL`+`C` to copy this to your clipboard.  

![Copy Folder Path Preview](../docs/files/copyfolderpathplugins.png)

3. Download the mod's .dll file into the copied folder.

![Plugins Folder Preview](../docs/files/pluginswithtrombloader.png)

4. Run Trombone Champ once to initialize necessary files for that mod.

### Installing Custom Songs {docsify-ignore}

> Check out the [**Custom Songs guide**](installing-songs) for info on installing custom songs.