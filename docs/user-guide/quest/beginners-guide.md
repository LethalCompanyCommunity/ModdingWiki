# Quest Beginner's Guide
---
>
> This guide only applies to the Quest version of Gorilla Tag.
> If you're using a SteamVR headset or a Quest **with Link**, go to the [**PC Modding**](pc-guide) guide.
>

## Installation

!> **Before you install QuestPatcher, you need to install Java if you don't have it already, or you will get a warning message.** Download Java for your platform [here](https://www.java.com/en/download/).

> These instructions are for **Windows** only at the moment. If you want to try a Linux build of QuestPatcher, you can find it [here as a .zip file](https://github.com/Lauriethefish/QuestPatcher/releases/latest).  
> Note: If Windows alerts you that the file is unsafe/at risk, choose to keep/run anyway. This is a false-positive.

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest). Select the **Assets** dropdown and download the .exe file named `windows-installer.exe`. Double-click the executable to begin installing, and follow the instructions.


![Preview](/docs/files/questpatcherprocessing.png)

!> If you haven't modded a game or sideloaded apps to your headset before, you'll need to get **SideQuest** in addition to QuestPatcher. [**Follow this link**](https://sidequestvr.com/setup-howto) to learn how to set it up. After you've finished, you should have setup your Quest with developer mode on, and SideQuest showing a green status indicator at the top left when it is plugged in.

## Install Instructions

?> **Plug in your Quest to your computer** ***first*** **before running QuestPatcher.**

After you've downloaded and installed QuestPatcher, open it.
By default, QuestPatcher should automatically detect your Gorilla Tag app.

![Gorilla Tag detected](/docs/files/questpatcherinstalled.png)

?> If you get a red message in QuestPatcher saying "*Please plug in your Quest and then restart QuestPatcher*" or "*App with specified ID could not be found*", check that your Quest is plugged in, and you have Gorilla Tag installed from [Oculus App Lab](https://www.oculus.com/experiences/quest/4979055762136823/).

Hit the *Patch my app!* button to begin patching Gorilla Tag. You'll see the log window showing the progress.

!> **Do NOT unplug the Quest from the computer while QuestPatcher is patching Gorilla Tag.**

![QuestPatcher patching the app](/docs/files/questpatcherprocessing.png)

After this, you'll be brought to the mod management screen, and you'll see "*Modding complete!*" in the log, which means Gorilla Tag has been successfully modded. Congratulations!

## Managing Mods

### Installing Mods

Once QuestPatcher is finished, you'll be brought to this screen. **If you are relaunching QuestPatcher in the future to manage your mods, be sure your Quest is plugged in before launching, as you'll be brought directly to this screen.**

![Manage mods screen](/docs/files/questpatchermods.png)

Next, click the *Browse for Mods* button, and locate a .qmod you would like to install, and open it. You can download the mod(s) you wish to install from GitHub, the [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) **#quest-mod-releases** channel, or other sources. **Dependencies should auto-download, but if they do not, make sure to download them.**

After opening the .qmods you wish to install, they should appear in the mod management screen. You can repeat this process to install whatever mods you like.

![Manage mods screen](/docs/files/questpatcherexamples.png)

Afterwards, launch Gorilla Tag and you should see your mods in game.

### Uninstalling Mods

Select the *Uninstall mod* button within the mod management screen to uninstall that mod.

## Restore App Prompt

?> "Uh oh, I just modded Gorilla Tag on my Quest and I got a prompt like below, **will I get banned?**"  

> ![Restore App prompt](/docs/files/restoreapp.png)  
>
> The restore app prompt is mostly **directed towards those cheating in the game**, and there are likely to be **no repercussions** from just modding the game. In addition, *the developer is okay with fair modding*, so you shouldn't be banned for simply adding mods to your game.  
>
> Simply click "**Open App**" to bypass this warning.

## Installing Maps

> Check out the [**Quest Custom Maps Guide**](quest-maploading) for info on custom maps, installation, and where to new new maps.

## Managing Cosmetics

!> **Make sure you have the Gorilla Cosmetics mod installed and you have run the game once with it installed first before following these instructions.**  

Open SideQuest, and connect your Quest, then click the folder icon at the top. Then, navigate to `sdcard/ModData/com.AnotherAxiom.GorillaTag/Mods/GorillaCosmetics`.

You should see this screen.

![Gorilla Cosmetics Folder](/docs/files/sidequestcosmetics.png)

Then, you can either navigate to the `Hats` or `Materials` folder, and drag in any .hat or .gmat file into the Hats or Materials folders, respectively. To remove a cosmetic, simply delete the .hat or .gmat file from these folders.