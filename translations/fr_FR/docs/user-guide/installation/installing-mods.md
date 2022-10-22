# Installer des mods
---

?> Si vous préférez des tutoriels vidéo, VorgunTheBeta a [une vidéo expliquant comment installer des mods et des chansons personnalisées](https://youtu.be/pSwNSGx-P5c).

## Trouver l'emplacement d'installation
1. Ouvrez Steam et faites un clic droit sur Trombone Champ. Ensuite, allez sur `Gérer > Parcourir les fichiers locaux`.

![Clic droit sur Aperçu du Menu](../docs/files/localfilescontext.png)

2. Cliquez sur la barre d'adresse en haut pour sélectionner le chemin de votre dossier d'installation. Faites` CTRL`+`C` pour copier cela dans votre presse-papiers.

![Copier l'aperçu du chemin du dossier](../docs/files/copyfolderpath.png)

## Installer BepInEx

1. Téléchargez [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) dans votre dossier TromboneChamp. Vous voudrez obtenir `BepinEx_x64_VERSION.zip`, avec `VERSION` étant le numéro de version.
2. Extrayez le contenu du fichier BepInEx.zip directement dans le [dossier d'installation](##finding-install-location) de votre installation de Champ Trombone.

![Aperçu d'extraction de BepInEx](../docs/files/bepinexextract.png)

!> Veuillez vous assurer que vous avez téléchargé la version `x64` de BepInEx. les versions `unix` et `x86` provoqueront un mauvais fonctionnement de votre jeu.

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

### Installation des chansons personnalisées {docsify-ignore}

> Consultez le guide des chansons personnalisées [****](installing-songs) pour plus d'informations sur l'installation de chansons personnalisées.