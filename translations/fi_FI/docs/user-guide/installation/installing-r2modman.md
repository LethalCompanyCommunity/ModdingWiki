# Using r2modman
---

?> For Linux and Steam Deck users, please follow the [Linux instructions](installing-r2modman-linux).

?> For Mac users, you may try looking at Candygoblen123's [Trombone Champ Mod Manager for Mac](https://github.com/Candygoblen123/TromboneChampModManager/)

?> For the purposes of this guide, we will only be installing **TrombLoader** although installing other mods would work the same way.

This guide will run you through installing and using [r2modman](https://github.com/ebkr/r2modmanPlus/releases/latest/) to install and play with mods that are available through [Thunderstore](https://trombone-champ.thunderstore.io/). Using a mod manager like r2modman allows you to update and play with the latest versions of the mods with ease as the manager does all of that for you!

## Installing r2modman

?> The latest version of r2modman is **%{thunderstore:f21c391c-0bc5-431d-a233-95323b95e01b}**.

First things first, download [**r2modman from its GitHub page**](https://github.com/ebkr/r2modmanPlus/releases/latest/).

For **Windows**, you would want to get `r2modman-Setup-%{thunderstore:f21c391c-0bc5-431d-a233-95323b95e01b}.exe` or `r2modman-%{thunderstore:f21c391c-0bc5-431d-a233-95323b95e01b}.exe`. The former installs the mod manager to your system, while the latter simply runs r2modman without any sort of installation. Simply run the installer or the program in order to open r2modman.

## Installing Mods on r2modman

Once you have succesfully installed r2modman, you can finally install mods.

1. Launch **r2modman**. You will be greeted with the following screen.

![r2modman Game Selection Screen](../docs/files/r2modman-install/gameselection.png)

2. Select **"Trombone Champ"**, and click **"Select Game"**.

?> If you do not see it, **use the search bar or scroll down** to find "Trombone Champ".

![Select Trombone Champ](../docs/files/r2modman-install/selecttc.png)

3. It will ask you to choose which profile to use. For this guide's purposes, we will stick with the Default profile. Click **"Select profile"**.

![Select Default Profile](../docs/files/r2modman-install/profileselect.png)

4. This will lead us to this screen.

![First Time Opening Installed](../docs/files/r2modman-install/firsttimeinstall.png)

5. Click **"Online"** on the sidebar. This will bring up a list of all available to download mods on [Thunderstore](https://trombone-champ.thunderstore.io/).

![Clicking Online](../docs/files/r2modman-install/selectonline.png)

6. From here, you may choose which mods you would like to download and install. Click on **TrombLoader**, and then click on Download.

?> If you do not see **TrombLoader**, use the search bar or scroll down.

![Downloading TrombLoader](../docs/files/r2modman-install/downloadtrombloader.png)

7. It will ask you which version to use. Download the latest version, which is already selected for you by default. Click **"Download with dependencies"** or **"Download"**.

![Downloading with dependencies](../docs/files/r2modman-install/downloadlatest.png)

8. Do the same for **"BepInExPack_TromboneChamp"**.

![Downloading BepInExPack_TromboneChamp](../docs/files/r2modman-install/downloadbepinex.png)

9. Once you are done installing your mods, you may click on "Start modded" on the sidebar. This will launch the game with your mods.

![Start Trombone Champ Modded](../docs/files/r2modman-install/startmodded.png)

That's it! You have just successfully modded Trombone Champ!

Godspeed, Tromboner.

## Installing Custom Songs on r2modman

The steps for installing custom songs are more or the less the same as specified in the [Installing Songs](installing-songs) guide. The only difference is that you need to find your `BepInEx` folder. It can be found by clicking "Settings" on the sidebar, and then clicking on "Browse profile folder".

![Browse profile folder](../docs/files/r2modman-install/browseprofile.png)

From there, your `BepInEx` folder is the `BepInEx` folder that you see.

![Profile Folder](../docs/files/r2modman-install/profilefolder.png)

![BepInEx Folder](../docs/files/r2modman-install/bepinexfolder.png)

!> If there is no `CustomSongs` folder inside your `BepInEx` folder, **run the game once by clicking Start Modded**. If that doesn't generate the folder, you may make it yourself.

From there, follow the steps outlined in the [Installing Songs](installing-songs) guide.
