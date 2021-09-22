# PC Beginner Anleitung
---
>
> Diese Anleitung gilt nur für die PC-Version von Gorilla Tag.  
> Wenn du eine Quest verwenden solltest (ohne Link), gehe zur [**Quest Modding**](quest-guide) Anleitung.

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="pc-mod-guide"></div> -->
<!-- Guide Page Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1545654854838298"
     data-ad-slot="8114351325"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

## Installierungen

### Monke Mod Manager {docsify-ignore}

![Monke Mod Manager logo](../docs/files/mmmlogo.png)

?> This is currently the **recommended mod installer**.

Monke Mod Manager is a mod installer that will install custom mods into Gorilla Tag automatically, and can be re-run in order to update the mods. Monke Mod Manager also notifies you of any updates upon launch by opening the latest release's page if available.  
Download Monke Mod Manager from [**Steven's GitHub**](https://github.com/DeadlyKitten/MonkeModManager/releases/latest). Select the **Assets** dropdown and download the .exe file named `MonkeModManager.exe`.

> Notiz: Wenn Windows dich warnt, dass die Datei unsicher oder gefährlich ist, wählen trotzdem zu behalten oder auszuführen aus. Dies ist eine falsche Positive.

![Preview](../docs/files/mmmpreview.png)

## Installationsanleitung

After you've downloaded Monke Mod Manager, double-click the executable to run it. By default, Monke Mod Manager should automatically fill in your Gorilla Tag installation folder.

?> If you installed Gorilla Tag to a seperate drive or path, Monke Mod Manager will prompt you to select `Gorilla Tag.exe` from your installation folder. Go to the [**Install Folder**](#install-folder) section to find your installation folder.

Next, you may select any mods that are listed. BepInEx is the modloader for Gorilla Tag and cannot be unchecked. To update a mod, simply select the installed mod again. If you would like to get more information on a mod, click on it then hit the *View Mod Info* button.

After you select the mods you would like to install/update, hit the *Install/Update* button to begin the process. When the status monitor in the bottom left says "*Install complete!*", you're almost there!

If it's your first time modding (or starting with a clean install), you'll need to launch Gorilla Tag once and close it to initialize BepInEx. **You may not see any mods load the first time you launch Gorilla Tag after modding, this is normal.**  
After that, re-launch Gorilla Tag and if everything went well, your mods will now load into the game. Congratulations!

## Installationspfad

### Standard-standort

If you installed your game on your main drive, this should be your installation folder. `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag`

### Andere Installationspfade

If you installed your game in a different location, follow these instructions to find your installation folder.

1. Öffne Steam und klicke mit der rechten Maustaste den Gorilla Tag. Gehen dann zu `Verwalten > Lokale Dateien durchsuchen`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Klicke oben auf die Adressleiste, um den Pfad deines Installationsordner auszuwählen. Drücke `STRG`+`C` um dies in die Zwischenablage zu kopieren.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Manuelle Installation
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

### BepInEx Installieren

1. Lade [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) herunter. Du willst `BepinEx_x64_VERSION.zip`, mit `VERSION` als die Versionsnummer herunterladen.
2. Extrahieren den Inhalt der BepInEx .zip Datei in den [Installationsordner](#install-folder) deiner Gorilla Tag-Installation.

![BepInEx Folder Preview](../docs/files/bepinexfolder.png)

3. Führe Gorilla Tag einmal aus, um die Installation abzuschließen.

### Mods installieren

4. Lade die Mod(s) herunter, die du installieren möchtest, egal ob von GitHub, die [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) **#pc-mod-releases** Kanal oder andere Quellen. **Stell sicher, dass du alle Abhängigkeiten herunterlädst, die von der Mod benötigt wird.**

![Plugins Folder Preview](../docs/files/pluginsfolder.png)

5. Einige Mods haben Installationsanweisungen, andere nicht. In der Regel kann man einfach die ZIP-Datei im Gorilla Tag Installationsordner ziehen und entpacken. Die Dateien werden dann in die entsprechenden Ordner entpackt. Wenn du eine .dll-Datei hast, sollten diese normalerweise in `BepInEx/Plugins` abgelegt werden.

## Mods Deinstallieren

Either remove the mod's .dll or folder from the `BepInEx/plugins` folder, which is located in your Gorilla Tag install folder.

## Maps installieren {docsify-ignore}

> Schaue dir das [**PC Custom Maps Guide**](pc-maploading) an für Informationen zu benutzerdefinierten Karten, Installation und wo neue Karten zu erhalten sind.

## Mods aktualisieren {docsify-ignore}

> Schaue dir den [**PC Mod Updating Guide**](pc-updating) an, um mehr über die Aktualisierung von Gorilla Tags mit installierten Mods zu erfahren.

---

> Wenn dir diese Anleitung gefallen hat, kannst du [einen Tipp](https://streamelements.com/burritosoft/tip) oder [Den Hauptautor eine spende senden](https://github.com/sponsors/burritosoftware).