# Quest Beginner's Guide
---
>
> This guide only applies to the Quest version of Gorilla Tag.
> If you're using a SteamVR headset or a Quest **with Link**, go to the [**PC Modding**](pc-guide) guide.
>

## Installation

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest). Select the **Assets** dropdown and download the .exefile named `QuestPatcher.exe`. Double-click the executable to begin installing, and follow the instructions.

> Note: If Windows alerts you that the file is unsafe/at risk, choose to keep/run anyway. This is a false-positive.

![Preview](/docs/files/questpatcherprocessing.png)

## Install Instructions

?> **Plug in your Quest to your computer** ***first*** **before running QuestPatcher.**

After you've downloaded and extracted QuestPatcher, open it.
By default, QuestPatcher should automatically detect your Gorilla Tag app.

![Gorilla Tag detected](/docs/files/questpatcherinstalled.png)

?> If you get a red message in QuestPatcher saying "*App with specified ID could not be found*", check that your Quest is plugged in, and you have Gorilla Tag installed from SideQuest.

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

### Uninstalling Mods

Select the *Uninstall mod* button within the mod management screen to uninstall that mod.

## Managing Cosmetics

> **Make sure you have the Gorilla Cosmetics mod installed and you have run the game once with it installed first before following these instructions.**

Open SideQuest, and connect your Quest, then click the folder icon at the top. Then, navigate to `sdcard/ModData/com.AnotherAxiom.GorillaTag/Mods/GorillaCosmetics`.

You should see this screen.

![Gorilla Cosmetics Folder](/docs/files/sidequestcosmetics.png)

Then, you can either navigate to the `Hats` or `Materials` folder, and drag in any .hat or .gmat file into the Hats or Materials folders, respectively. To remove a cosmetic, simply delete the .hat or .gmat file from these folders.