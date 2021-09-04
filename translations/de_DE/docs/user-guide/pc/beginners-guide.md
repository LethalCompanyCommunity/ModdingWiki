# PC Beginner Anleitung
---
>
> Diese Anleitung gilt nur für die PC-Version von Gorilla Tag.  
> Wenn du eine Quest verwenden solltest (ohne Link), gehe zur [**Quest Modding**](quest-guide) Anleitung.

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="pc-mod-guide"></div> -->

## Installierungen

### Monke Mod Manager {docsify-ignore}

![Monke Mod Manager Logo](../docs/files/mmmlogo.png)

?> Dies ist derzeit der **empfohlene Mod-Installer**.

Monke Mod Manager ist ein Mod-Installer, der benutzerdefinierte Mods in Gorilla Tag automatisch installiert, und kann erneut ausgeführt werden, um diese Mods zu aktualisieren. Monke Mod Manager informiert dich auch über alle Aktualisierungen beim Start durch das Öffnen der neuesten Versionsseite, wenn eine verfügbar ist.  
Lade den Monke Mod Manager von [**Steven's GitHub**](https://github.com/DeadlyKitten/MonkeModManager/releases/latest) herunter. Wählen die **Assets** aus und lade die .exe Datei mit dem Namen `MonkeModManager.exe` herunter.

> Notiz: Wenn Windows dich warnt, dass die Datei unsicher oder gefährlich ist, wählen trotzdem zu behalten oder auszuführen aus. Dies ist eine falsche Positive.

![Vorschau](../docs/files/mmmpreview.png)

## Installationsanleitung

Nachdem du Monke Mod Manager heruntergeladen hast, doppelklicke auf die ausführbare Datei, um es auszuführen. Standardmäßig sollte Monke Mod Manager automatisch den Installationsordner für Gorilla Tag ausfüllen.

?> Wenn du Gorilla Tag auf einem separaten Laufwerk oder Pfad installiert hast, fordert dich Monke Mod Manager auf, `Gorilla Tag.exe` aus deinen Installationsverzeichnis auszuwählen. Gehe zum [**Installations Ordner**](#install-folder) Abschnitt um deinen Installationsordner zu finden.

Als nächstes kannst du alle Mods auswählen, die aufgelistet sind. BepInEx ist der Modloader für Gorilla Tag und kann nicht deaktiviert werden. Um eine Mod zu aktualisieren, wähle einfach erneut die installierte Mod aus. Wenn du mehr Informationen zu einer Mod erhalten möchtest, klicke auf es und drücke den *Mod Info anzeigen* Knopf.

Nachdem du die Mods ausgewählt hast, die du installieren / aktualisieren möchtest, klicke auf *Installieren/Aktualisieren* um den Prozess zu starten. Wenn der Statusmonitor unten links sagt "*Installation abgeschlossen!*", bist du fast fertig!

Wenn du es zum ersten mal Moddest (oder mit einer sauberen Installation beginnst), musst du Gorilla Tag einmal starten und schließen, um BepInEx zu initialisieren. **Du wirst das erste Mal vielleicht keine Mods sehen, wenn du Gorilla Tag nach dem Modding startest. Dies ist normal.**  
Danach starte Gorilla Tag erneut und wenn alles gut gelaufen ist, werden deine Mods nun ins Spiel geladen. Glückwunsch!

## Installationspfad

### Standard-standort

Wenn du dein Spiel auf deinen Hauptlaufwerk installiert hast, sollte dies dein Installationsordner sein. `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag`

### Andere Installationspfade

Wenn du dein Spiel an einem anderen Ort installiert hast, folge diesen Anweisungen, um dessen Installationsordner zu finden.

1. Öffne Steam und klicke mit der rechten Maustaste den Gorilla Tag. Gehen dann zu `Verwalten > Lokale Dateien durchsuchen`.

![Vorschau des Rechtsklick Menüs](../docs/files/localfilescontext.png)

2. Klicke oben auf die Adressleiste, um den Pfad deines Installationsordner auszuwählen. Drücke `STRG`+`C` um dies in die Zwischenablage zu kopieren.

![Ordnerpfadkopieren Vorschau](../docs/files/copyfolderpath.png)

## Manuelle Installation
Ein Mod-Installer ist die empfohlene Methode, um Mods zu installieren. Siehe den Abschnitt [oben](#installers). Solltest du das Spiel gepatched haben und Plugins installiert werden müssen, die nicht im Mod Installer sind, springe zu Schritt 4.

### BepInEx Installieren

1. Lade [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) herunter. Du willst `BepinEx_x64_VERSION.zip`, mit `VERSION` als die Versionsnummer herunterladen.
2. Extrahieren den Inhalt der BepInEx .zip Datei in den [Installationsordner](#install-folder) deiner Gorilla Tag-Installation.

![BepInEx-Ordnervorschau](../docs/files/bepinexfolder.png)

3. Führe Gorilla Tag einmal aus, um die Installation abzuschließen.

### Mods installieren

4. Lade die Mod(s) herunter, die du installieren möchtest, egal ob von GitHub, die [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) **#pc-mod-releases** Kanal oder andere Quellen. **Stell sicher, dass du alle Abhängigkeiten herunterlädst, die von der Mod benötigt wird.**

![Plugin-Ordnervorschau](../docs/files/pluginsfolder.png)

5. Einige Mods haben Installationsanweisungen, andere nicht. In der Regel kann man einfach die ZIP-Datei im Gorilla Tag Installationsordner ziehen und entpacken. Die Dateien werden dann in die entsprechenden Ordner entpackt. Wenn du eine .dll-Datei hast, sollten diese normalerweise in `BepInEx/Plugins` abgelegt werden.

## Mods Deinstallieren

Entweder Entferne den mods .dll oder den Ordner `BepInEx/plugins` der in deinen Gorilla Tag Installationsordner sein sollte.

## Maps installieren {docsify-ignore}

> Schaue dir das [**PC Custom Maps Guide**](pc-maploading) an für Informationen zu benutzerdefinierten Karten, Installation und wo neue Karten zu erhalten sind.

## Mods aktualisieren {docsify-ignore}

> Schaue dir den [**PC Mod Updating Guide**](pc-updating) an, um mehr über die Aktualisierung von Gorilla Tags mit installierten Mods zu erfahren.

---

> Wenn dir diese Anleitung gefallen hat, kannst du [einen Tipp](https://streamelements.com/burritosoft/tip) oder [Den Hauptautor eine spende senden](https://github.com/sponsors/burritosoftware).