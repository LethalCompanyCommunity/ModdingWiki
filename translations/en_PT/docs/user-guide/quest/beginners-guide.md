# Setting Sail For Landlubbers (Quest)
---
>
> Ahoy! These texts apply only to the Quest version of Gorilla Tag. Shall ye use a SteamVR ship or a Quest **with tether**,  sail to the [**PC Modding**](pc-guide) guide.

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## Loading QuestPatcher

Now, the one and only way to recive the booty is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> Argh! The only version of Windows I support be Windows 10! Any other version may work, but hear ye, me crew and I can't guarantee.

1. Steal the loot from the assets dropdown on GitHub, and snatch `QuestPatcher-windows.exe`, then ye shall wait for the ship to be loaded.
2. Open ye downloads chest, then double click the installer.
3. Let be be known, It's likely something like this shall open while ye trying to run QuestPatcher. Avast ye, this is a **false positive**, just press `More info` then `Run anyway`.

![Smartscreen pop-up](../docs/files/questpatchersmartscreen.png)

4. Take `Install for all users` or `Install for me only` and press `Yes` shall ye receive a cap'n prompt.
5. Now ye shall accept me booty agreement, click next, click next once more, then press install.
6. Wait until ye install finishes, then press next, and then finish to open QuestPatcher.


### macOS

!> QuestPatcher shall automatically load Java onto ye ship. Although if ye using one of an older version of macOS, Java may just be detected as already loaded when it isn't. Shall ye run into an enemy while patching, manually load Java onto your ship [here](https://www.java.com/en/).

1. Steal the loot from the assets dropdown on GitHub, and snatch `QuestPatcher-mac.dmg`, then ye shall wait for ye ship to be loaded.
2. Open ye downloads chest, then double click `QuestPatcher-mac.dmg`.
3. Move the QuestPatcher loot into ye Applications chest.
4. Pillage ye DMG window, right click uestPatcher on ye desktop and click `Eject "QuestPatcher"`.
5. Open ye Applications chest, then right click QuestPatcher. **__Make sure ye hold control__**, then click open (Ye must only do this the first time).
6. Shall the unrecognized developer window come up (look below), click `Open`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher is compiled for [Ubuntu](https://ubuntu.com/) Linux. Other Linux ships may work, but ye may enounter enemy ships.

!> These instructions be more complicated than Mac and Windows shall be (nerd), and it be recommended ye know yer way around a terminal.

1. Steal the loot from the assets dropdown on GitHub, and snatch `QuestPatcher-ubuntu.zip`, then ye shall wait for the ship to be loaded.
2. Extract the ZIP file using Archive Manager.
3. Enter the extracted chest, right click, then press `Open in Terminal`.
4. Type in `chmod +x QuestPatcher` and press enter.
5. If all goes well, type in `./QuestPatcher` and QuestPatcher will load.

## Patching

Shall ye first open QuestPatcher, ye shall be greeted by a loading screen like below. Let there be a few short progress bars as QuestPatcher loads the important chests into yer ship. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Shall ye be prompted with `Quest Not Connected`, make sure ye quest is plugged in, and ye have set up developer mode as per the [SideQuest installation instructions](https://sidequestvr.com/setup-howto). 
> 
> If ye recive a prompt prompting ye with `App Not Installed`, make sure ye have installed Gorilla T from Oculus App Lab [here](https://www.oculus.com/experiences/quest/4979055762136823/).


After about 30 seconds (it may take longer if ye internet sucks), QuestPatcher shall finish loading and ye shall be greeted with a screen like below.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> It may take 1-15 minutes to patch ye app (roughly) Ye must make sure ye hamsters on ye internet wheel keep runnin' the whole time.

!> Do not close QuestPatcher while it is patching your app.

## Managing Mods

Once QuestPatcher is done, ye shall be brought upon this screen.

> Next time ye open QuestPatcher, ye shall be brought directly onto this screen as your game is already patched.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Installing Mods

Shall ye seek to get mods, see must first download a `.qmod` treasure of the mod ye wish. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` chest of QuestPatcher and select the mods ye wish. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Ye shant remove these!

Once the mod is installed, ye shall see it in the Mods chest of QuestPatcher.![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**Ye may now set sail, and use yer mods!**

?> shall ye see this screen when setting sail, just click **Open App**. Do not click Restore, this will restore ye game back to vanilla and may cause issues with ye installation.  
![Restore App](../docs/files/restoreapp.png)

### Uninstalling Mods

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act as if it is uninstalled, but not to worry, ye can always enable it once more.


Shall ye seek to pillage a mod, click the `Delete` mod next to the mod.

## Managing Cosmetics & Other Items

!> Shall ye seek cosmetics, ye must load the Gorilla Cosmetics mod onto ye ship. Otherwise, they may not show up while out on the water.

Shall ye seek ye installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the treasure type ye wish to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Installing Maps {docsify-ignore}

> Check out the [**Quest Custom Maps Guide**](quest-maploading) for info on custom maps, installation, and where to get new maps.

## Updating Mods {docsify-ignore}

> Check out the [**Quest Mod Updating Guide**](quest-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware). I cannot properly express how painful this was to write -the translator