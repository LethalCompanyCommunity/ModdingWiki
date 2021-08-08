# Guide du débutant
---
>
> Ce guide ne s'applique qu'à la version PC de Gorilla Tag.  
> Si vous utilisez un Quest (sans link), aller au guide de mise à jour des mods Quest [****](quest-guide).

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="pc-mod-guide"></div>

## Installeurs

### Monke Mod Manager {docsify-ignore}

![Monke Mod Manager logo](../docs/files/mmmlogo.png)

?> Ceci est actuellement l'installateur de mods **recommandé**.

Monke Mod Manager est un installateur de mods qui installera automatiquement des mods personnalisés dans le tag Gorilla, et peut être ré-exécuté afin de mettre à jour les mods. Monke Mod Manager vous informe également de toutes les mises à jour au lancement en ouvrant la page de la dernière version si disponible.  
Téléchargez Monke Mod Manager sur le [**GitHub de Steven**](https://github.com/DeadlyKitten/MonkeModManager/releases/latest). Sélectionnez le menu déroulant **Assets** et téléchargez le fichier .exe nommé `MonkeModManager.exe`.

> Note : Si Windows vous avertit que le fichier est dangereux ou risqué, choisissez de conserver/exécuter quand même. C'est un faux positif.

![Preview](../docs/files/mmmpreview.png)

## Instructions d'installation

Après avoir téléchargé Monke Mod Manager, double-cliquez sur l'exécutable pour l'exécuter. Par défaut, Monke Mod Manager doit remplir automatiquement le dossier d'installation de votre Tag Gorilla.

?> Si vous avez installé la balise Gorilla sur un lecteur ou un chemin séparés, Monke Mod Manager vous demandera de sélectionner `Gorilla Tag.exe` depuis votre dossier d'installation. Allez à la section [**Installer le dossier**](#install-folder) pour trouver votre dossier d'installation.

Ensuite, vous pouvez sélectionner tous les mods qui sont listés. BepInEx est le chargeur de modules pour la balise Gorilla et ne peut pas être décoché. Pour mettre à jour un mod, il suffit de sélectionner à nouveau le mod installé. Si vous souhaitez obtenir plus d'informations sur un mod, cliquez dessus puis cliquez sur le bouton *Voir les infos de mod*.

Après avoir sélectionné les mods que vous souhaitez installer/mettre à jour, cliquez sur le bouton *Install/Update* pour démarrer le processus. Quand le moniteur d'état en bas à gauche dit "*Installation terminée !*", vous devriez être prêt !

Si c'est votre premier modding (ou à commencer par une installation propre), vous devrez lancer Gorilla Tag une fois et le fermer pour initialiser BepInEx. **Vous ne pouvez pas voir de mods charger la première fois que vous lancez Gorilla Tag après un modding, c'est normal.**  
Après cela, relancez le Gorilla Tag et si tout s'est bien passé, vos mods se chargeront maintenant dans le jeu. Félicitations !

## Dossier d'installation

### Emplacement par défaut

Si vous avez installé votre jeu sur votre disque principal, ce devrait être votre dossier d'installation. `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag`

### Autres emplacements

Si vous avez installé votre jeu à un autre endroit, suivez ces instructions pour trouver votre dossier d'installation.

1. Ouvrez Steam et cliquez avec le bouton droit sur l'étiquette Gorilla. Ensuite, allez à `Gérer > Parcourir les fichiers locaux`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Cliquez sur la barre d'adresse en haut pour sélectionner le chemin du dossier d'installation. Appuyez sur `CTRL`+`C` pour copier ceci dans votre presse-papiers.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Installation manuelle
Un installateur de mods est recommandé pour installer des mods. Lisez la section [ci-dessus](#installateurs). Si vous avez patché le jeu et avez juste besoin d'installer les mods qui ne sont pas disponibles dans l'installateur, passez à l'étape 4.

### Installez BepInEx

1. Télécharger [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest). Vous obtiendrez `BepinEx_x64_VERSION.zip`, avec `VERSION` le numéro de version.
2. Extrayez le contenu du fichier .zip BepInEx dans le dossier [install](#install-folder) de votre installation de la balise Gorilla.

![BepInEx Folder Preview](../docs/files/bepinexfolder.png)

3. Exécutez Gorilla Tag une fois pour terminer l'installation.

### Installer les mods

4. Téléchargez le(s) mod(s) que vous souhaitez mettre à jour, que ce soit depuis GitHub, le canal [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) **#pc-mod-releases** ou d'autres sources. **Assurez-vous de télécharger toutes les dépendances requises pour chaque mod.**

![Plugins Folder Preview](../docs/files/pluginsfolder.png)

5. Certains mods ont des instructions d'installation précises, certains non. Généralement, il suffit de glisser-déposer le contenu du zip dans le dossier d'installation du jeu, et les fichiers doivent aller dans les dossiers correspondant. Si vous avez un fichier .dll, vous devrez généralement le mettre dans `BepInEx/plugins`.

## Désinstaller les Mods

Supprimez le fichier .dll du mod ou le dossier `BepInEx/plugins` qui se trouve dans le dossier d'installation de votre Tag Gorilla.

## Installation des cartes {docsify-ignore}

> Consultez le [**Guide des Cartes Personnalisée Quest**](pc-maploading) pour plus d'informations sur les cartes personnalisées, l'installation et où trouver de nouvelles cartes.

## Mise à jour des mods {docsify-ignore}

> Consultez le [**Guide de Mise à Jour des Mods de Quest**](pc-updating) pour plus d'informations sur la mise à jour de Gorilla Tag avec des mods installés.

---

> Si vous avez apprécié ce guide, vous pouvez [envoyer un conseil](https://streamelements.com/burritosoft/tip) ou [parrainer l'écrivain principal](https://github.com/sponsors/burritosoftware).