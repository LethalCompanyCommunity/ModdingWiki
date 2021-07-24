# Guide du débutant pour Quest
---
>
> Ce guide ne s'applique qu'à la version Quest de Gorilla Tag. Si vous utilisez un casque SteamVR ou un Quest **avec link**, allez au guide [**Mise à jour du mod PC**](pc-guide).

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## Installation de QuestPatcher

Actuellement, la seule façon recommandée d'installer des mods est via **QuestPatcher**. Téléchargez **QuestPatcher** sur le GitHub de [Lauriethefish](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

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

!> QuestPatcher devrait télécharger automatiquement Java. Si vous êtes sur une ancienne version de macOS, Java peut être détecté comme déjà installé quand il ne l'est pas. Si vous rencontrez des difficultés à mettre à jour, téléchargez manuellement Java [ici](https://www.java.com/en/).

1. Sélectionnez le menu déroulant des assets sur GitHub, et cliquez sur `QuestPatcher-mac.dmg`, puis attendez que le téléchargement se termine.
2. Ouvrez votre dossier Téléchargements, et double-cliquez sur `QuestPatcher-mac.dmg`.
3. Faites glisser l'application QuestPatcher dans le dossier Applications.
4. Fermez la fenêtre DMG, faites un clic droit sur QuestPatcher sur votre bureau et cliquez sur `Éjecter "QuestPatcher"`.
5. Ouvrez votre dossier Téléchargements, et double-cliquez sur QuestPatcher. **__Assurez-vous de maintenir contrôle__**, puis cliquez sur Ouvrir (Vous n'aurez qu'à le faire la première fois).
6. Dans le développeur non reconnu qui arrive (voir ci-dessous), cliquez sur `Ouvrir`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher est compilé pour [Ubuntu](https://ubuntu.com/) Linux. D'autres distributions Linux peuvent fonctionner, mais vous pouvez rencontrer des problèmes.

!> Ces instructions sont plus compliquées que Mac et Windows, et il est recommandé de vous familiariser avec un terminal.

1. Sélectionnez le menu déroulant des assets sur GitHub, et cliquez sur `QuestPatcher-ubuntu.zip`, puis attendez que le téléchargement se termine.
2. Extraire le fichier ZIP à l'aide du gestionnaire d'archives.
3. Entrez le dossier extrait, faites un clic droit, puis appuyez sur `Ouvrir dans le Terminal`.
4. Tapez `chmod +x QuestPatcher` et appuyez sur Entrée.
5. Si tout se passe bien, tapez `./QuestPatcher` et QuestPatcher se chargera.

## Patch

Lorsque vous ouvrez QuestPatcher pour la première fois, vous serez accueilli par un écran de chargement comme ci-dessous. Il y aura quelques brèves barres de progression pendant que QuestPatcher télécharge des fichiers importants. (`Téléchargement de openjre` et `Téléchargement des plates-outils`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Si vous obtenez un message indiquant `Quest Not Connected`, assurez-vous que votre quête est branchée, et vous avez configuré le mode développeur conformément aux instructions d'installation de [SideQuest](https://sidequestvr.com/setup-howto). 
> 
> Si vous obtenez une invite disant `App Not Installed`, assurez-vous que vous avez installé Gorilla Tag depuis Oculus App Lab [ici](https://www.oculus.com/experiences/quest/4979055762136823/).


Après environ 30 secondes (bien que cela puisse prendre plus de cinq minutes selon votre connexion Internet), QuestPatcher terminera le chargement et vous serez accueilli avec un écran comme ci-dessous.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**Pour commencer à mettre à jour, il suffit de cliquer sur le bouton `Patch my App!`.**

> Cela peut prendre 1 à 15 minutes pour patcher votre application (grossièrement) Vous devez vous assurer que votre connexion Internet reste en ligne pendant ce temps.

!> Ne fermez pas QuestPatcher pendant qu'il patche votre application.

## Gérer les mods

Une fois que QuestPatcher est terminé, vous serez amené à cet écran.

> La prochaine fois que vous ouvrirez QuestPatcher, vous serez amené directement à cet écran car votre jeu est déjà mis à jour.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Installer les mods

Pour obtenir des mods, vous devez d'abord télécharger un fichier `.qmod` du mod que vous voulez. Vous pouvez trouver des mods dans le canal `#quest-mod-releases` de la [discord de modding de Tag Gorilla](https://discord.gg/b2MhDBAzTv).

!> Ne téléchargez pas les fichiers .DLL - ce sont des mods PC, qui ne peuvent pas être utilisés sur la version de quête du Tag Gorilla.

Pour installer un mod, cliquez sur le bouton de navigation dans la section `Mod Management` de QuestPatcher et sélectionnez les mods que vous voulez. Enfin, cliquez sur `Open` pour installer les mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installer un mod peut télécharger d'autres mods dont le mod a besoin pour fonctionner. Ne pas les désinstaller !

Une fois le mod installé, vous devriez le voir dans la section Mods de QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**Vous pouvez maintenant ouvrir votre jeu et utiliser vos mods !**

?> Si vous voyez cet écran lors du lancement du tag Gorilla, cliquez simplement sur **Open App**. Ne cliquez pas sur Restaurer, cela restaurera votre jeu en vanilla et peut causer des problèmes avec votre installation.  
![Restore App](../docs/files/restoreapp.png)

### Désinstaller les Mods

Les mods peuvent être basculés en cliquant sur le bouton à côté du mod. La désactivation d'un mod fait que le mod agit comme s'il était désinstallé, mais vous pouvez toujours l'activer à nouveau.


Si vous voulez supprimer un mod, cliquez sur le mod `Delete` à côté du mod.

## Gestion des cosmétiques & autres objets

!> Pour utiliser les cosmétiques, vous devez installer le mod Gorilla Cosmetics. Sinon, ils n'apparaîtront pas en jeu.

Pour afficher vos cosmétiques et cartes installés, cliquez sur l'onglet `Cosmétiques & Autres objets` de QuestPatcher. Utilisez le menu déroulant pour sélectionner le type de fichier que vous souhaitez gérer.

**Les produits cosmétiques peuvent être installés en les glissant dans la zone grise, ou en cliquant sur le bouton Parcourir.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Installation des cartes {docsify-ignore}

> Consultez le Guide [**Guide des Cartes Personnalisée Quest**](quest-maploading) pour plus d'informations sur les cartes personnalisées, l'installation et où trouver de nouvelles cartes.

## Mise à jour des mods {docsify-ignore}

> Consultez le [**Guide de Mise à Jour des Mods de Quest**](quest-updating) pour plus d'informations sur la mise à jour de Gorilla Tag avec des mods installés.

---

> Si vous avez apprécié ce guide, vous pouvez [envoyer un conseil](https://streamelements.com/burritosoft/tip) ou [parrainer l'écrivain principal](https://github.com/sponsors/burritosoftware).