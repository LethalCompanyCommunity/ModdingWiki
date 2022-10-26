# Installer des mods
---

?> Si vous préférez des tutoriels vidéo, VorgunTheBeta a [une vidéo expliquant comment installer des mods et des chansons personnalisées](https://youtu.be/pSwNSGx-P5c).

?> The start of this guide also works for Linux and Steam Deck! Make sure to [read the end](#linuxsteam-deck-specific-tips) for additional details.

## Trouver l'emplacement d'installation
1. Ouvrez Steam et faites un clic droit sur Trombone Champ. Ensuite, allez sur `Gérer > Parcourir les fichiers locaux`.

![Clic droit sur Aperçu du Menu](../docs/files/localfilescontext.png)

2. Cliquez sur la barre d'adresse en haut pour sélectionner le chemin de votre dossier d'installation. Faites` CTRL`+`C` pour copier cela dans votre presse-papiers.

![Copier l'aperçu du chemin du dossier](../docs/files/copyfolderpath.png)

## Installer BepInEx

1. Téléchargez [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) dans votre dossier TromboneChamp. Vous voudrez obtenir `BepinEx_x64_VERSION.zip`, avec `VERSION` étant le numéro de version.
2. Extrayez le contenu du fichier BepInEx.zip directement dans le [dossier d'installation](##finding-install-location) de votre installation de Champ Trombone.

![Aperçu d'extraction de BepInEx](../docs/files/bepinexextract.png)

!> Veuillez vous assurer que vous avez téléchargé la version `x64` de BepInEx. les versions `unix` et `x86` provoqueront un mauvais fonctionnement de votre jeu. This also applies to users on Linux/Steam Deck.

!> **IMPORTANT :** Extrayez BepInEx *directement* dans le dossier de votre jeu comme indiqué dans l'image ci-dessus. Si vous avez fait cela correctement, le dossier de votre jeu devrait ressembler à l'image ci-dessous.

![Installation terminée de BepinEx](../docs/files/finishedbepinex.png)

3. Lancez Trombone Champ une fois pour terminer l'installation.

## Installation

Avec BepInEx installé, vous pouvez commencer à télécharger des mods spécifiques - une liste complète est disponible dans le canal `#mod-releases` dans le [Serveur de modding de Trombone Champ](https://discord.gg/KVzKRsbetJ).

Comme vous voulez probablement installer des chansons personnalisées, cette section utilisera [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) comme exemple.

1. Naviguez vers le dossier d'installation de votre [jeu](###finding-install-location), le dossier `BepInEx` , puis le dossier `plugins`.

2. Cliquez sur la barre d'adresse en haut pour sélectionner le chemin de votre dossier d'installation. Faites` CTRL`+`C` pour copier cela dans votre presse-papiers.

![Copier l'aperçu du chemin du dossier](../docs/files/copyfolderpathplugins.png)

3. Téléchargez le fichier .dll du mod dans le dossier copié.

![Aperçu du dossier des plugins](../docs/files/pluginswithtrombloader.png)

4. Lancez Trombone Champ une fois afin d'initialiser les fichiers nécessaires pour ce mod.

## Linux/Steam Deck Tips
<details closed>
<summary>Expand</summary>

The process of installing BepInEx is largely the same as on Windows listed above, however there are some extra things to be aware of first:

 - To follow the guide, Steam Deck users will need to switch to Desktop Mode by holding down the power button and selecting `Desktop Mode` from the menu.

 - Steam Deck users will need to install the game to the internal storage, as BepInEx will not load from the microSD card.

 - As stated earlier, you will still need to install the `x64` Windows version of BepInEx, not the `unix` version, as Trombone Champ is still a Windows application running under Proton.

 - Save and log files are stored in your Steam folder within Proton's compatibility folders.

    - On Steam Deck this can be found at: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - On other Linux flavors you can run `locate -r /Holy Wow$` from the terminal if you're unsure of where your Steam folder is.

You will also need to add `WINEDLLOVERRIDES="winhttp=n,b" %command%` to your game's launch options. To do this, right click the game in Steam and click `Properties`. Unlike on Windows, Proton won't load BepInEx's files unless specifically instructed to here.

![Steam Properties Preview](../docs/files/linuxsteamproperties.png)

Once added, BepInEx should now work! Install your mods [as instructed above](##installation) to get custom songs working.

### Video Backgrounds {docsify-ignore}

Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup. </details>

## Installation des chansons personnalisées {docsify-ignore}

> Consultez le guide des chansons personnalisées [****](installing-songs) pour plus d'informations sur l'installation de chansons personnalisées.