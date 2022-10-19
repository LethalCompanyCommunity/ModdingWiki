# Mods installieren
---

?> Wenn du Video-Tutorials bevorzugst, hat VorgunTheBeta [ein Video, das erklärt, wie du Mods und eigene Songs installieren kannst](https://youtu.be/pSwNSGx-P5c).

## Installationsort finden
1. Öffne Steam und klicke mit der rechten Maustaste auf Trombone Champ. Gehe dann zu `Verwalten > Lokale Dateien durchsuchen`.

![Vorschau des Rechtsklick-Menüs](../docs/files/localfilescontext.png)

2. Klicke oben auf die Adressleiste, um den Pfad deines Installationsordners auszuwählen. Drücke `STRG`+`C`, um diesen Pfad in die Zwischenablage zu kopieren.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## BepInEx installieren

1. Lade [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) in deinen TromboneChamp-Ordner herunter. Du solltest `BepinEx_x64_VERSION.zip` erhalten, mit `VERSION` als Versionsnummer.
2. Extrahiere den Inhalt der BepInEx.zip Datei direkt in den [Installationsordner](##finding-install-location) deiner Trombone Champ Installation.

![BepInEx Extraction Preview](../docs/files/bepinexextract.png)

> Bitte stelle sicher, dass die `x64` Version von BepInEx heruntergeladen ist. Die `Unix` und `x86` Versionen führen dazu, dass das Spiel nicht richtig funktioniert.

!> **WICHTIG:** Extrahiere BepInEx *direkt* in den Ordner Ihres Spiels, wie im obrigen Bild gezeigt. Wenn Sie alles richtig gemacht haben, sollte der Ordner Ihres Spiels wie das unten stehende Bild aussehen.

![Finished BepinEx Install](../docs/files/finishedbepinex.png)

3. Starte Trombone Champ, um die Installation abzuschließen.

## Installation

Wenn BepInEx installiert ist, kannst du mit dem Herunterladen bestimmter Mods beginnen - eine vollständige Liste ist im `#mod-release` Kanal des [Pombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ) vorhanden.

Da du wahrscheinlich eigene Songs installieren möchtest, wird dieser Abschnitt [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) als Beispiel verwenden.

1. Navigiere zum [Installationsordner des Spiels](###finding-install-location), dann zu dem `BepInEx` Ordner und schlussenldich in den `Plugins` Ordner.

2. Klicke oben auf die Adressleiste, um den Pfad deines Installationsordners auszuwählen. Drücke `STRG`+`C`, um diesen Pfad in die Zwischenablage zu kopieren.

![Copy Folder Path Preview](../docs/files/copyfolderpathplugins.png)

3. Lade die .dll Datei des Mods in den kopierten Ordner herunter.

![Plugins Folder Preview](../docs/files/pluginswithtrombloader.png)

4. Starte Trombone Champ, um die notwendigen Dateien zu initialisieren.

### Eigene Songs installieren {docsify-ignore}

> Siehe [**Eigene Songs installieren**](installing-songs) für Informationen zur Installation eigener Songs.