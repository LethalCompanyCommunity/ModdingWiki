# Mods installieren
---

?> Wenn du Video-Tutorials bevorzugst, hat VorgunTheBeta [ein Video, das erklärt, wie du Mods und eigene Songs installieren kannst](https://youtu.be/pSwNSGx-P5c).

?> Der Anfang dieser Anleitung funktioniert auch für Linux und Steam Deck! Lies [das Ende](#linuxsteam-deck-specific-tips) des Guides für zusätzliche Details.

## Installationsort finden
1. Öffne Steam und klicke mit der rechten Maustaste auf Trombone Champ. Gehe dann zu `Verwalten > Lokale Dateien durchsuchen`.

![Vorschau des Rechtsklick-Menüs](../docs/files/localfilescontext.png)

2. Klicke oben auf die Adressleiste, um den Pfad deines Installationsordners auszuwählen. Drücke `STRG`+`C`, um diesen Pfad in die Zwischenablage zu kopieren.

![Ordnerpfad kopieren Vorschau](../docs/files/copyfolderpath.png)

## BepInEx installieren

1. Lade [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) in deinen TromboneChamp-Ordner herunter. Du solltest `BepinEx_x64_VERSION.zip` erhalten, mit `VERSION` als Versionsnummer.
2. Extrahiere den Inhalt der BepInEx.zip Datei direkt in den [Installationsordner](##finding-install-location) deiner Trombone Champ Installation.

![BepInEx extrahieren Vorschau](../docs/files/bepinexextract.png)

> Bitte stelle sicher, dass die `x64` Version von BepInEx heruntergeladen ist. Die `Unix` und `x86` Versionen führen dazu, dass das Spiel nicht richtig funktioniert. Dies gilt auch für Benutzer auf Linux/Steam Deck.

!> **WICHTIG:** Extrahiere BepInEx *direkt* in den Ordner Ihres Spiels, wie im obrigen Bild gezeigt. Wenn Sie alles richtig gemacht haben, sollte der Ordner Ihres Spiels wie das unten stehende Bild aussehen.

![Abgeschlossene BepInEx Installation](../docs/files/finishedbepinex.png)

3. Starte Trombone Champ, um die Installation abzuschließen.

## Installation

Wenn BepInEx installiert ist, kannst du mit dem Herunterladen bestimmter Mods beginnen - eine vollständige Liste ist im `#mod-release` Kanal des [Pombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ) vorhanden.

Da du wahrscheinlich eigene Songs installieren möchtest, wird dieser Abschnitt [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) als Beispiel verwenden.

1. Navigiere zum [Installationsordner des Spiels](###finding-install-location), dann zu dem `BepInEx` Ordner und schlussenldich in den `Plugins` Ordner.

2. Klicke oben auf die Adressleiste, um den Pfad deines Installationsordners auszuwählen. Drücke `STRG`+`C`, um diesen Pfad in die Zwischenablage zu kopieren.

![Ordnerpfad kopieren Vorschau](../docs/files/copyfolderpathplugins.png)

3. Lade die .dll Datei des Mods in den kopierten Ordner herunter.

![Vorschau des Plugin-Ordners](../docs/files/pluginswithtrombloader.png)

4. Starte Trombone Champ, um die notwendigen Dateien zu initialisieren.

## Linux/Steam Deck Tipps
<details closed>
<summary>Mehr</summary>

The process of installing BepInEx is largely the same as on Windows listed above, however there are some extra things to be aware of first:

 - To follow the guide, Steam Deck users will need to switch to Desktop Mode by holding down the power button and selecting `Desktop Mode` from the menu.

 - Steam Deck users will need to install the game to the internal storage, as BepInEx will not load from the microSD card.

 - As stated earlier, you will still need to install the `x64` Windows version of BepInEx, not the `unix` version, as Trombone Champ is still a Windows application running under Proton.

 - Save and log files are stored in your Steam folder within Proton's compatibility folders.

    - On Steam Deck this can be found at: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - On other Linux flavors you can run `locate -r /Holy Wow$` from the terminal if you're unsure of where your Steam folder is.

You will also need to add `WINEDLLOVERRIDES="winhttp=n,b" %command%` to your game's launch options. To do this, right click the game in Steam and click `Properties`. Unlike on Windows, Proton won't load BepInEx's files unless specifically instructed to here.

![Steam Eigenschaften Vorschau](../docs/files/linuxsteamproperties.png)

Once added, BepInEx should now work! Install your mods [as instructed above](##installation) to get custom songs working.

### Video Backgrounds {docsify-ignore}

Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup. </details>

## Eigene Songs installieren {docsify-ignore}

> Siehe [**Eigene Songs installieren**](installing-songs) für Informationen zur Installation eigener Songs.