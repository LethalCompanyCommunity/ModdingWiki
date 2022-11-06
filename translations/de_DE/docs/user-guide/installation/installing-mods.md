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

Der Installationsprozess von BepInEx ist weitgehend identisch mit Windows. Es gibt jedoch einige zusätzliche Dinge, die man zuerst beachten sollte:

 - Um der Anleitung zu folgen, müssen Steam Deck Benutzer in den Desktop Modus wechseln, in dem sie den An-Knopf gedrückt halten und den `Desktop Mode` aus dem Menü auswählen.

 - Steam Deck Benutzer müssen das Spiel auf dem internen Speicher installieren, da BepInEx nicht von der microSD-Karte aus lädt.

 - Wie bereits erwähnt, müssen Sie weiterhin die `x64` Windows-Version von BepInEx, installieren nicht die `unix` Version, da Trombone Champ immer noch eine Windows-Anwendung, die unter Proton läuft, ist.

 - Speicherdaten und Logs werden im Steam Ordner innerhalb Protons Kompatibilitätsordner gespeichert.

    - Auf dem Steam Deck lässt sich dies hier finden: `~/.local/share/Steam/Steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - Auf anderen Linux Varianten können Sie `locate -r /Holy Wow$<0>locate -r /Holy Wow$` im Terminal ausführen, wenn Sie sich nicht sicher sind, wo sich Ihr Steam Ordner befindet.

Sie müssen auch `WINEDLLOVERRIDES="winhttp=n,b" %command%` zu den Startoptionen deines Spiels hinzufügen. Klicken Sie dazu mit der rechten Maustaste auf das Spiel in Steam und klicken Sie auf `Eigenschaften`. Im Gegensatz zu Windows wird Proton BepInEx nicht laden, es sei denn, es wird hier ausdrücklich angewiesen.

![Steam Eigenschaften Vorschau](../docs/files/linuxsteamproperties.png)

Einmal hinzugefügt, sollte BepInEx jetzt funktionieren! Installieren Sie Mods [wie oben beschrieben](##installation), damit eigene Songs funktionieren.

### Video-Hintergründe {docsify-ignore}

Einige benutzerdefinierte Lieder werden Videos für ihre Hintergründe enthalten, und die Standard-Proton-Installation kann diese nicht wiedergeben. Wenn diese funktionieren sollen, können Sie `GE-Proton` mit [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/) installieren. Dies ist eine Version von Proton, die einige zusätzliche Funktionen enthält, einschließlich der Möglichkeit, Videoformate wiederzugeben, die Valve nicht offiziell unterstützen kann.

Wir empfehlen [dieser Guide von GamingOnLinux zu folgen](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/), um Anleitungen zur Verwendung von ProtonUp-Qt zu erhalten und `GE-Proton` zu installieren.

!> Auch mit GE-Proton könnten Sie immer noch Probleme mit der Videowiedergabe haben, abhängig von Ihrem Setup. </details>

## Eigene Songs installieren {docsify-ignore}

> Siehe [**Eigene Songs installieren**](installing-songs) für Informationen zur Installation eigener Songs.