# Using r2modman on Linux and Steam Deck
---

?> For the purposes of this guide, we will only be installing **TrombLoader** although installing other mods would work the same way.

This guide will run you through installing and using [r2modman](https://github.com/ebkr/r2modmanPlus/releases/latest/) to install and play with mods that are available through [Thunderstore](https://trombone-champ.thunderstore.io/). Using a mod manager like r2modman allows you to update and play with the latest versions of the mods with ease as the manager does all of that for you!

## Steam Deck Specific Preparation
On Steam Deck you will need to do the following before you can follow this guide:

 - Make sure the game is installed into the internal storage - mods will not load if the game is installed to the MicroSD card.
 - Enter **Desktop Mode** by holding down the power button and selecting Desktop Mode from the menu.

Once you're at the desktop, you're ready to continue!

!> r2modman does **not** work in Game Mode. Please make sure to read the [**Using Mods in Steam Deck's Game Mode**](installing-r2modman-linux?id=using-mods-in-steam-decks-game-mode) section for a workaround once you've finished with the **Installing r2modman** section.

## Installing r2modman

?> The latest version of r2modman is **%{thunderstore:f21c391c-0bc5-431d-a233-95323b95e01b}**.

On Linux, r2modman is available in different package formats depending on your distro:

 - `deb` for Debian and Ubuntu-based distros
 - `pacman` for Arch-based disros
 - `rpm` for distros using the RPM Package Manager (RHEL, CentOS, Fedora, openSUSE, etc.)
 - `AppImage`, a single executable file that can run on most distros - **useful for Steam Deck**

Visit the [**r2modman GitHub releases page**](https://github.com/ebkr/r2modmanPlus/releases/latest/) and download the appropriate package file for your distro and install it according to your package manager's documentation.

**For Steam Deck users,** download the `.AppImage` file and keep it in a safe location such as your Desktop or your Documents folder. You will also need to mark the file as executable. To do this, right-click the `.AppImage` file and select `Properties`. Switch to the **Permissions** tab and check the box marked `Is Executable` and click OK.

![Steam Deck Permissions Window](../docs/files/r2modman-linux/appimageproperties.png)

After marking the file as executable, you can now double-click the `AppImage` to open r2modman.

## Installing Mods on r2modman

Once you have succesfully installed r2modman, you can finally install mods.

1. Launch **r2modman**. You will be greeted with the following screen.

![r2modman Game Selection Screen](../docs/files/r2modman-linux/gameselection.png)

2. Select **"Trombone Champ"**, and click **"Select Game"**.

?> If you do not see it, **use the search bar or scroll down** to find "Trombone Champ".

![Select Trombone Champ](../docs/files/r2modman-linux/selecttc.png)

3. It will ask you to choose which profile to use. For this guide's purposes, we will stick with the Default profile. Click **"Select profile"**.

![Select Default Profile](../docs/files/r2modman-linux/profileselect.png)

4. This will lead us to this screen.

![First Time Opening Installed](../docs/files/r2modman-linux/firsttimeinstall.png)

5. Click **"Online"** on the sidebar. This will bring up a list of all available to download mods on [Thunderstore](https://trombone-champ.thunderstore.io/).

![Clicking Online](../docs/files/r2modman-linux/selectonline.png)

6. From here, you may choose which mods you would like to download and install. Click on **TrombLoader**, and then click on Download.

?> If you do not see **TrombLoader**, use the search bar or scroll down.

![Downloading TrombLoader](../docs/files/r2modman-linux/downloadtrombloader.png)

7. It will ask you which version to use. Download the latest version, which is already selected for you by default. Click **"Download with dependencies"** or **"Download"**.

![Downloading with dependencies](../docs/files/r2modman-linux/downloadlatest.png)

8. Do the same for **"BepInExPack_TromboneChamp"**.

![Downloading BepInExPack_TromboneChamp](../docs/files/r2modman-linux/downloadbepinex.png)

9. Once you are done installing your mods, you may click on "Start modded" on the sidebar. This will launch the game with your mods.

![Start Trombone Champ Modded](../docs/files/r2modman-linux/startmodded.png)

That's it! You have just successfully modded Trombone Champ!

Godspeed, Tromboner.

## Installing Custom Songs on r2modman

The steps for installing custom songs are more or the less the same as specified in the [Installing Songs](installing-songs) guide. The only difference is that you need to find your `BepInEx` folder. It can be found by clicking "Settings" on the sidebar, and then clicking on "Browse profile folder".

![Browse profile folder](../docs/files/r2modman-linux/browseprofile.png)

From there, your `BepInEx` folder is the `BepInEx` folder that you see.

![Profile Folder](../docs/files/r2modman-linux/profilefolder.png)

!> If there is no `CustomSongs` folder inside your `BepInEx` folder, **run the game once by clicking Start Modded**. If that doesn't generate the folder, you may make it yourself.

From there, follow the steps outlined in the [Installing Songs](installing-songs) guide.

## Getting Video Backgrounds Working
Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup.

## Using Mods in Steam Deck's Game Mode
**r2modman will not work in Steam Deck's Game mode, and therefore mods will not load by default.** To get around this, right-click the game in Steam and click `Properties`. From there, paste the following into **Launch Options**:

```
WINEDLLOVERRIDES="winhttp=n,b" %command% --doorstop-enable true --doorstop-target "/home/deck/.config/r2modmanPlus-local/TromboneChamp/profiles/Default/BepInEx/core/BepInEx.Preloader.dll" --r2profile "Default"
```
![Steam Properties](../docs/files/r2modman-linux/steamproperties.png) This will instruct the game to launch with the Default profile we configured in r2modman earlier, so all your mods and custom songs installed there will be available.
