# PC Beginner Anleitung
---
>
> Diese Anleitung gilt nur für die PC-Version von Gorilla Tag.  
> Wenn du eine Quest verwenden solltest (ohne Link), gehe zur [**Quest Modding**](quest-guide) Anleitung.

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="pc-mod-guide"></div>

## Installierungen

### Monke Mod Manager {docsify-ignore}

![Monke Mod Manager logo](../docs/files/mmmlogo.png)

?> Dies ist derzeit der **empfohlenste Mod-Installer**.

Monke Mod Manager ist ein Mod-Installer, der benutzerdefinierte Modifizierungen in Gorilla Tag automatisch installiert, und kann erneut ausgeführt werden, um diese Mods zu aktualisieren. Monke Mod Manager informiert dich auch über alle Aktualisierungen beim Start durch das Öffnen der neuesten Versionsseite, wenn eine verfügbar ist.  
Lade den Monke Mod Manager von [**Steven's GitHub**](https://github.com/DeadlyKitten/MonkeModManager/releases/latest) herunter. Wählen die **Assets** aus und lade die .exe Datei mit dem Namen `MonkeModManager.exe` herunter.

> Notiz: Wenn Windows dich warnt, dass die Datei unsicher oder gefährlich ist, wählen trotzdem zu behalten oder auszuführen aus. This is a false-positive.

![Preview](../docs/files/mmmpreview.png)

## Install Instructions

After you've downloaded Monke Mod Manager, double-click the executable to run it. By default, Monke Mod Manager should automatically fill in your Gorilla Tag installation folder.

?> If you installed Gorilla Tag to a seperate drive or path, Monke Mod Manager will prompt you to select `Gorilla Tag.exe` from your installation folder. Go to the [**Install Folder**](#install-folder) section to find your installation folder.

Next, you may select any mods that are listed. BepInEx is the modloader for Gorilla Tag and cannot be unchecked. To update a mod, simply select the installed mod again. If you would like to get more information on a mod, click on it then hit the *View Mod Info* button.

After you select the mods you would like to install/update, hit the *Install/Update* button to begin the process. When the status monitor in the bottom left says "*Install complete!*", you're almost there!

If it's your first time modding (or starting with a clean install), you'll need to launch Gorilla Tag once and close it to initialize BepInEx. **You may not see any mods load the first time you launch Gorilla Tag after modding, this is normal.**  
After that, re-launch Gorilla Tag and if everything went well, your mods will now load into the game. Congratulations!

## Install Folder

### Default Location

If you installed your game on your main drive, this should be your installation folder. `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag`

### Other Locations

If you installed your game in a different location, follow these instructions to find your installation folder.

1. Open Steam and right-click on Gorilla Tag. Then, go to `Manage > Browse local files`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Click the address bar at the top to select your installation folder's path. Hit `CTRL`+`C` to copy this to your clipboard.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Manual Installation
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

### Install BepInEx

1. Download [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest). You will want to get `BepinEx_x64_VERSION.zip`, with `VERSION` being the version number.
2. Extract the contents of the BepInEx .zip file to the [install folder](#install-folder) of your Gorilla Tag installation.

![BepInEx Folder Preview](../docs/files/bepinexfolder.png)

3. Run Gorilla Tag once to complete installation.

### Install Mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) **#pc-mod-releases** channel, or other sources. **Make sure to download any dependencies required by the mod.**

![Plugins Folder Preview](../docs/files/pluginsfolder.png)

5. Some mods have installation instructions, some don't. Generally you can just drag and drop the zip contents into your Gorilla Tag install folder, and the files should go into the corresponding folders. If you have a .dll file, you'll usually want to put it in `BepInEx/plugins`.

## Uninstalling Mods

Either remove the mod's .dll or folder from the `BepInEx/plugins` folder, which is located in your Gorilla Tag install folder.

## Installing Maps {docsify-ignore}

> Check out the [**PC Custom Maps Guide**](pc-maploading) for info on custom maps, installation, and where to new new maps.

## Updating Mods {docsify-ignore}

> Check out the [**PC Mod Updating Guide**](pc-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware).