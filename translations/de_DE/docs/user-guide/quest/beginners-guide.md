# Quest Beginner's Guide
---
>
> This guide only applies to the Quest version of Gorilla Tag. If you're using a SteamVR headset or a Quest **with Link**, go to the [**PC Modding**](pc-guide) guide.

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## Installing QuestPatcher

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> The only version of Windows officially supported is Windows 10. Other versions might work, but we cannot guarantee full functionality.

1. Select the assets dropdown on GitHub, and click `QuestPatcher-windows.exe`, then wait for the download to finish.
2. Open your downloads folder, and double click the installer.
3. It's possible that a prompt like this will open when running QuestPatcher. This is a **false positive**, just press `More info` then `Run anyway`.

![Smartscreen pop-up](/docs/files/questpatchersmartscreen.png)

4. Select `Install for all users` or `Install for me only` and press `Yes` if an admin prompt comes up.
5. Accept the license agreement, press next, press next again, then press install.
6. Wait until the install finishes, then press next, and then finish to open QuestPatcher.


### macOS

!> QuestPatcher should automatically download Java. If you're on an older version of macOS, Java might be detected as already installed when it isn't. If you are having trouble patching, manually download Java [here](https://www.java.com/en/).

1. Select the assets dropdown on GitHub, and click `QuestPatcher-mac.dmg`, then wait for the download to finish.
2. Open your Downloads folder, and double click `QuestPatcher-mac.dmg`.
3. Drag the QuestPatcher application into the Applications folder.
4. Close the DMG window, right click QuestPatcher on your desktop and click `Eject "QuestPatcher"`.
5. Open your Applications folder and right click QuestPatcher. **__Make sure you hold control__**, then click open (You will only have to do this the first time).
6. In the unrecognized developer that comes up (see below), click `Open`.

![Unverified app pop-up](/docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher is compiled for [Ubuntu](https://ubuntu.com/) Linux. Other Linux distributions may work, but you may encounter issues.

!> These instructions are more complicated than Mac and Windows, and it is recommended that you know your way around a terminal.

1. Select the assets dropdown on GitHub, and click `QuestPatcher-ubuntu.zip`, then wait for the download to finish.
2. Extract the ZIP file using Archive Manager.
3. Enter the extracted folder, right click, then press `Open in Terminal`.
4. Type in `chmod +x QuestPatcher` and press enter.
5. If all goes well, type in `./QuestPatcher` and QuestPatcher will load.

## Patching

When you first open QuestPatcher, you will be greeted by a loading screen like below. There will be a few short progress bars while QuestPatcher downloads important files. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](/docs/files/questpatcherloading.png)

> If you get a prompt saying `Quest Not Connected`, make sure that your quest is plugged in, and you have set up developer mode as per the [SideQuest installation instructions](https://sidequestvr.com/setup-howto). 
> 
> If you get a prompt saying `App Not Installed`, make sure that you have installed Gorilla Tag from Oculus App Lab [here](https://www.oculus.com/experiences/quest/4979055762136823/).


After about 30 seconds (although it could take longer than five minutes depending on your internet connection), QuestPatcher will finish loading and you will be greeted with a screen like below.

![QuestPatcher Ready To Patch](/docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> It may take 1-15 minutes to patch your app (roughly) You need to make sure that your internet stays online during this time.

!> Do not close QuestPatcher while it is patching your app.

## Managing Mods

Once QuestPatcher is done, you will be brought to this screen.

> Next time you open QuestPatcher, you will be brought directly to this screen as your game is already patched.

![Patching Completed](/docs/files/questpatcherpatched.png)

### Installing Mods

To get mods, you first need to download a `.qmod` file of the mod you want. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](/docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](/docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](/docs/files/restoreapp.png)

### Uninstalling Mods

Mods can be toggled by clicking the switch next to the mod. Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` mod next to the mod.

## Managing Cosmetics & Other Items

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](/docs/files/questpatcherotheritems.png)

## Installing Maps {docsify-ignore}

> Check out the [**Quest Custom Maps Guide**](quest-maploading) for info on custom maps, installation, and where to get new maps.

## Updating Mods {docsify-ignore}

> Check out the [**Quest Mod Updating Guide**](quest-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware).