# Upgrading to TrombLoader 2

This guide shows you how to upgrade from a manually modded game to r2modman!

!> Make sure to follow this guide fully - otherwise you could end up with missing save data!

## Uninstalling TrombLoader 1

TrombLoader 2 changes the way save data is handled in a way that's incompatible with TrombLoader 1.
Data is automatically migrated when upgrading, but switching back and forth between the two can
result in scores going missing from saves.

So we'll walk you through uninstalling TrombLoader 1.

1. Open Steam and right-click on Trombone Champ. Then, go to `Manage > Browse local files`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Navigate to the BepInEx folder.
3. Delete the `Plugins` folder. You'll reinstall all your mods with r2modman in the next step.

![Plugins folder](../docs/files/r2modman-install/deleteplugins.png)

Keep this folder window open, you'll want to move your CustomSongs folder below!

!> Make sure you're **not** deleting `TromboneChamp_Data/Plugins`! This will break your game! You can fix it by verifying files, though.

## Installing TrombLoader 2

Follow the guide for [installing r2modman](installing-r2modman), then come back here!

If you had any other mods, use r2modman to reinstall them too!

## Migrating songs

r2modman stores mod files in a "profile" directory outside of the game folder.
This means it won't load your existing custom songs until we move them!

1. You can get to the profile folder by clicking on r2modman's "Settings" -> "Browse profile folder"

![Browse profile folder](../docs/files/r2modman-install/browseprofile.png)

2. Navigate into the BepInEx folder.

![Profile Folder](../docs/files/r2modman-install/profilefolder.png)

3. Move your old CustomSongs folder to this directory.

![BepInEx Folder](../docs/files/r2modman-install/bepinexfolder.png)
