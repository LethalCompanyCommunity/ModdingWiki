# Installer des mods
---

?> Si vous préférez des tutoriels vidéo, VorgunTheBeta a [une vidéo expliquant comment installer des mods et des chansons personnalisées](https://youtu.be/pSwNSGx-P5c).

?> Le début de ce guide fonctionne également pour Linux et Steam Deck ! Assurez-vous de [lire la fin](#linuxsteam-deck-specific-tips) pour plus de détails.

## Trouver l'emplacement d'installation
1. Ouvrez Steam et faites un clic droit sur Trombone Champ. Ensuite, allez sur `Gérer > Parcourir les fichiers locaux`.

![Clic droit sur Aperçu du Menu](../docs/files/localfilescontext.png)

2. Cliquez sur la barre d'adresse en haut pour sélectionner le chemin de votre dossier d'installation. Faites` CTRL`+`C` pour copier cela dans votre presse-papiers.

![Copier l'aperçu du chemin du dossier](../docs/files/copyfolderpath.png)

## Installer BepInEx

1. Téléchargez [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) dans votre dossier TromboneChamp. Vous voudrez obtenir `BepinEx_x64_VERSION.zip`, avec `VERSION` étant le numéro de version.
2. Extrayez le contenu du fichier BepInEx.zip directement dans le [dossier d'installation](##finding-install-location) de votre installation de Champ Trombone.

![Aperçu d'extraction de BepInEx](../docs/files/bepinexextract.png)

!> Veuillez vous assurer que vous avez téléchargé la version `x64` de BepInEx. les versions `unix` et `x86` provoqueront un mauvais fonctionnement de votre jeu. Cela s'applique également aux utilisateurs sur Linux/Steam Deck.

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

## Astuces pour Linux/Steam Deck
<details closed>
<summary>Agrandir</summary>

Le processus d'installation de BepInEx est en grande partie le même que sur Windows listé ci-dessus, cependant il y a quelques choses supplémentaires dont il faut d'abord être informé:

 - Pour suivre le guide, les utilisateurs du Steam Deck devront passer en mode Bureau en maintenant enfoncé le bouton d'alimentation et en sélectionnant `Mode Bureau` à partir du menu.

 - Les utilisateurs du Steam Deck devront installer le jeu dans le stockage interne, puisque BepInEx ne chargera pas à partir de la carte microSD.

 - Comme mentionné plus tôt, vous devrez quand même installer la version Windows `x64` de BepInEx, et non la version `unix`, puisque Trombone Champ est toujours une application Windows fonctionnant sous Proton.

 - Les fichiers log et de sauvegarde sont stockés dans votre dossier Steam, dans les dossiers de compatibilité de Proton.

    - Sur le Steam Deck, cela peut être trouvé à : `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - Sur d'autres versions de Linux, vous pouvez exécuter `locate -r /Holy Wow<0>locate -r /Holy Wow$` à partir du terminal si vous êtes incertain de l'emplacement de votre dossier Steam.

Vous devrez aussi ajouter `WINEDLLOVERRIDES="winhttp=n,b" %command%` à vos options de lancement du jeu. Pour faire cela, faites un clic droit sur le jeu sur Steam and cliquez sur `Properties`. Contrairement à Windows, Proton ne chargera pas les fichiers de BepInEx à moins que ce soit spécifiquement demandé ici.

![Aperçu des propriétés Steam](../docs/files/linuxsteamproperties.png)

Une fois ajouté, BepInEx devrait fonctionner ! Installez vos mods [comme spécifié ci-dessus](##installation) pour faire fonctionner vos chansons personnalisées.

### Arrières-plans vidéo {docsify-ignore}

Certaines chansons personnalisées incluront des vidéos pour leur arrière-plan et l'installation par défaut de Proton ne peut pas jouer celles-ci. Si vous voulez les faire fonctionner, vous pouvez installer `GE-Proton` en utilisant [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). Ceci est une version de Proton qui inclue quelques fonctionnalités supplémentaires, y compris la possibilité de lire des formats vidéo que Valve ne prend pas officiellement en charge.

Nous recommandons de suivre [ce guide créé par GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) pour des instructions sur comment utiliser ProtonUp-Qt et installer `GE-Proton`.

!> Même avec GE-Proton, vous pourriez encore rencontrer quelques problèmes de lecture de vidéos dépendamment de votre configuration. </details>

## Installation des chansons personnalisées {docsify-ignore}

> Consultez le guide des chansons personnalisées [****](installing-songs) pour plus d'informations sur l'installation de chansons personnalisées.