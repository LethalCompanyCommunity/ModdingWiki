# Setting Sail For Landlubbers (Quest)
---
>
> Ahoy! These texts apply only to the Quest version of Gorilla Tag. Shall ye use a SteamVR ship or a Quest **with a Link tether**, sail to the [**PC Modding**](pc-guide) guide.

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div> -->
<!-- Guide Page Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1545654854838298"
     data-ad-slot="8114351325"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

## Loading QuestPatcher

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> Argh! The only version of Windows I support be Windows 10! Any other version may work, but hear ye, me crew and I can't guarantee.

1. Steal the loot from the assets dropdown on GitHub, and snatch `QuestPatcher-windows.exe`, then ye shall wait for the ship to be loaded.
2. Open ye Downloads chest, then double click the installer.
3. Let be be known, It's likely something like this shall open while ye trying to run QuestPatcher. Avast ye, this is a **false positive**, just press `More info` then `Run anyway`.

![Smartscreen pop-up](../docs/files/questpatchersmartscreen.png)

4. Take `Install for all users` or `Install for me only` and press `Yes` shall ye receive a cap'n prompt.
5. Now ye shall accept me booty agreement, click next, click next once more, then press install.
6. Wait until ye install finishes, then press next, and then finish to open QuestPatcher.


### macOS

!> QuestPatcher should automatically download Java. If you're on an older version of macOS, Java might be detected as already installed when it isn't. If you are having trouble patching, manually download Java [here](https://www.java.com/en/).

1. Steal the loot from the assets dropdown on GitHub, and snatch `QuestPatcher-mac.dmg`, then ye shall wait for ye ship to be loaded.
2. Open ye downloads chest, then double click `QuestPatcher-mac.dmg`.
3. Move the QuestPatcher loot into ye Applications chest.
4. Pillage ye DMG window, right click QuestPatcher on ye desktop and click `Eject "QuestPatcher"`.
5. Open ye Applications chest, then right click QuestPatcher. **__Make sure ye hold control__**, then click open (Ye must only do this the first time).
6. Shall the unrecognized developer window come up (look below), click `Open`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher is compiled for [Ubuntu](https://ubuntu.com/) Linux. Other Linux ships may work, but ye may enounter enemy ships.

!> These instructions are more complicated than Mac and Windows, and it is recommended that you know your way around a terminal.

1. Steal the loot from the assets dropdown on GitHub, and snatch `QuestPatcher-ubuntu.zip`, then ye shall wait for the ship to be loaded.
2. Extract the ZIP file using Archive Manager.
3. Enter the extracted chest, right click, then press `Open in Terminal`.
4. Type in `chmod +x QuestPatcher` and press enter.
5. If all goes well, type in `./QuestPatcher` and QuestPatcher will load.

## Patching

When you first open QuestPatcher, you will be greeted by a loading screen like below. There will be a few short progress bars while QuestPatcher downloads important files. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Shall ye be prompted with `Quest Not Connected`, make sure ye quest is plugged in, and ye have set up developer mode as per the [SideQuest installation instructions](https://sidequestvr.com/setup-howto). 
> 
> If ye recive a prompt prompting ye with `App Not Installed`, make sure ye have installed Gorilla Tag from Oculus App Lab [here](https://www.oculus.com/experiences/quest/4979055762136823/).


After about 30 seconds (although it could take longer than five minutes depending on your internet connection), QuestPatcher will finish loading and you will be greeted with a screen like below.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> It may take 1-15 minutes to patch ye app (roughly) Ye must make sure ye hamsters on ye internet wheel keep runnin' the whole time.

!> Do not close QuestPatcher while it is patching your app.

## Managing Mods

Once QuestPatcher is done, you will be brought to this screen.

> Next time ye open QuestPatcher, ye shall be brought directly onto this screen as your game is already patched.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Installing Mods

To get mods, you first need to download a `.qmod` file of the mod you want. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](../docs/files/restoreapp.png)

### Uninstalling Mods

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` button next to the mod.

## Managing Cosmetics & Other Items

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Installing Maps {docsify-ignore}

> Check out the [**Quest Custom Maps Guide**](quest-maploading) for info on custom maps, installation, and where to get new maps.

## Updating Mods {docsify-ignore}

> Check out the [**Quest Mod Updating Guide**](quest-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware).