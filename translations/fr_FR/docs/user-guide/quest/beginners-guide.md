# Guide du débutant pour Quest
---
>
> Ce guide ne s'applique qu'à la version Quest de Gorilla Tag. Si vous utilisez un casque SteamVR ou un Quest **avec link**, allez au guide [**Mise à jour du mod PC**](pc-guide).

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div> -->
<!-- Guide Page Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1545654854838298"
     data-ad-slot="8114351325"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

## Installation de QuestPatcher

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> La seule version de Windows officiellement prise en charge est Windows 10. D'autres versions peuvent fonctionner, mais nous ne pouvons pas garantir la pleine fonctionnalité de celle-ci.

1. Sélectionnez le menu déroulant des assets sur GitHub, et cliquez sur `QuestPatcher-windows.exe`, puis attendez que le téléchargement se termine.
2. Ouvrez votre dossier de téléchargements et double-cliquez sur l'installateur.
3. Il est possible qu'une invite de ce type s'ouvre lors de l'exécution de QuestPatcher. Ceci est un **faux positif**, appuyez simplement sur `Plus d'info` puis `Exécuter quand même`.

![Smartscreen pop-up](../docs/files/questpatchersmartscreen.png)

4. Sélectionnez `Installer pour tous les utilisateurs` ou `Installer pour moi seulement` et appuyez sur `Oui` si une invite d'administration apparaît.
5. Acceptez le contrat de licence, appuyez sur Suivant, appuyez à nouveau sur Suivant, puis appuyez sur Installer.
6. Attendez que l'installation se termine, puis appuyez sur Suivant, puis terminez pour ouvrir QuestPatcher.


### macOS

!> QuestPatcher should automatically download Java. If you're on an older version of macOS, Java might be detected as already installed when it isn't. If you are having trouble patching, manually download Java [here](https://www.java.com/en/).

1. Sélectionnez le menu déroulant des assets sur GitHub, et cliquez sur `QuestPatcher-mac.dmg`, puis attendez que le téléchargement se termine.
2. Ouvrez votre dossier Téléchargements, et double-cliquez sur `QuestPatcher-mac.dmg`.
3. Faites glisser l'application QuestPatcher dans le dossier Applications.
4. Fermez la fenêtre DMG, faites un clic droit sur QuestPatcher sur votre bureau et cliquez sur `Éjecter "QuestPatcher"`.
5. Ouvrez votre dossier Téléchargements, et double-cliquez sur QuestPatcher. **__Assurez-vous de maintenir contrôle__**, puis cliquez sur Ouvrir (Vous n'aurez qu'à le faire la première fois).
6. Dans le développeur non reconnu qui arrive (voir ci-dessous), cliquez sur `Ouvrir`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher est compilé pour [Ubuntu](https://ubuntu.com/) Linux. D'autres distributions Linux peuvent fonctionner, mais vous pouvez rencontrer des problèmes.

!> These instructions are more complicated than Mac and Windows, and it is recommended that you know your way around a terminal.

1. Sélectionnez le menu déroulant des assets sur GitHub, et cliquez sur `QuestPatcher-ubuntu.zip`, puis attendez que le téléchargement se termine.
2. Extraire le fichier ZIP à l'aide du gestionnaire d'archives.
3. Entrez le dossier extrait, faites un clic droit, puis appuyez sur `Ouvrir dans le Terminal`.
4. Tapez `chmod +x QuestPatcher` et appuyez sur Entrée.
5. Si tout se passe bien, tapez `./QuestPatcher` et QuestPatcher se chargera.

## Patch

When you first open QuestPatcher, you will be greeted by a loading screen like below. There will be a few short progress bars while QuestPatcher downloads important files. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Si vous obtenez un message indiquant `Quest Not Connected`, assurez-vous que votre quête est branchée, et vous avez configuré le mode développeur conformément aux instructions d'installation de [SideQuest](https://sidequestvr.com/setup-howto). 
> 
> Si vous obtenez une invite disant `App Not Installed`, assurez-vous que vous avez installé Gorilla Tag depuis Oculus App Lab [ici](https://www.oculus.com/experiences/quest/4979055762136823/).


After about 30 seconds (although it could take longer than five minutes depending on your internet connection), QuestPatcher will finish loading and you will be greeted with a screen like below.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> Cela peut prendre 1 à 15 minutes pour patcher votre application (grossièrement) Vous devez vous assurer que votre connexion Internet reste en ligne pendant ce temps.

!> Do not close QuestPatcher while it is patching your app.

## Gérer les mods

Once QuestPatcher is done, you will be brought to this screen.

> La prochaine fois que vous ouvrirez QuestPatcher, vous serez amené directement à cet écran car votre jeu est déjà mis à jour.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Installer les mods

To get mods, you first need to download a `.qmod` file of the mod you want. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](../docs/files/restoreapp.png)

### Désinstaller les Mods

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` button next to the mod.

## Gestion des cosmétiques & autres objets

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Installation des cartes {docsify-ignore}

> Consultez le Guide [**Guide des Cartes Personnalisée Quest**](quest-maploading) pour plus d'informations sur les cartes personnalisées, l'installation et où trouver de nouvelles cartes.

## Mise à jour des mods {docsify-ignore}

> Consultez le [**Guide de Mise à Jour des Mods de Quest**](quest-updating) pour plus d'informations sur la mise à jour de Gorilla Tag avec des mods installés.

---

> Si vous avez apprécié ce guide, vous pouvez [envoyer un conseil](https://streamelements.com/burritosoft/tip) ou [parrainer l'écrivain principal](https://github.com/sponsors/burritosoftware).