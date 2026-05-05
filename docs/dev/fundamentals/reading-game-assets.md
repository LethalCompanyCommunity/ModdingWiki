---
prev: true
next: true
description: Tutorial for using AssetRipper with Lethal Company
---

# Reading Game Assets

## Setup

This guide will cover how to extract textures and models from Lethal Company so that you can,
for example, reskin a scrap item by bundling a texture with your mod which has the expected UV mapping.  
You can do this on a Windows or GNU+Linux host, and maybe on macOS.

You will need:
- a copy of Lethal Company (obviously); and
- a copy of [AssetRipper](https://github.com/AssetRipper/AssetRipper/releases/latest).

You won't need Steam or the game open to do this, in fact you should probably have the game closed.

## AssetRipper

### Startup

On Windows:

TODO check

~~&nbsp;
The app is "portable" i.e. it doesn't have an installer,
just extract it somewhere and run `AssetRipper.GUI.Free.exe`.  
Its web interface should automatically open in your browser.
&nbsp;~~

~~&nbsp;
Select `File` > `Open Folder`, navigate to the Steam library install folder (typically `C:\Program Files (x86)\Steam\steamapps\common`),
then select the `Lethal Company` folder and "Submit"/"Open" on the dialog.  
The central button should quickly turn green and read "View Loaded Files", and you can now click that and start browsing.
&nbsp;~~

On Linux:

The app is "portable" i.e. it doesn't have an install script or external dependencies,
just extract it somewhere and run `./AssetRipper.GUI.Free` from a terminal.  
Its web interface should automatically open in your browser, otherwise follow the instructions in the terminal.

Select `File` > `Open Folder`, navigate to the Steam library install dir (typically `~/.steam/root/steamapps/common`),
then select the `Lethal Company` dir and "Submit"/"Open" on the dialog.  
The central button should quickly turn green and read "View Loaded Files", and you can now click that and start browsing.

### Navigation

The 'GameBundle' is the "root" / top level of the tree. All the relevant assets will be found in one of its `*.assets` collections.  
Selecting a collection will bring up a list of all the assets within: 'Path ID' is that asset's position in the list,
'Class' is the "type" or "category" used by the Unity engine for that asset, and 'Name' is a (not unique!) filename.  
Select an asset's name to open its info. The relevant "viewer" tab (`Audio`, `Image`, etc.) will be enabled when applicable.

A list of some of the more useful or interesting assets is maintained [on the Lethal Company wiki](https://lethal.miraheze.org/wiki/Game_asset_paths).

You also have the option to `Export` > `Export All Files`, though YMMV with regards to how useful that is.

### Model viewer

Controls:
- Left-click and drag (or middle-click and drag) to rotate/orbit
- Right-click and drag to pan
- Scroll to zoom

Note that all the models appear on their side in the viewer: see [AssetRipper/AssetRipper#1522](https://github.com/AssetRipper/AssetRipper/issues/1522).
