# Quest Beginner Anleitung
---
>
> Diese Anleitung ist für die Quest Version von Gorilla Tag. Wenn du SteamVR benutzt oder eine Quest **mit Link**, gehe zur [**PC Modifizierung**](pc-guide) Anleitung.

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## QuestPatcher Installieren

Zur Zeit ist die empfohlene Methode Mods zu installieren durch **QuestPatcher**. Lade **QuestPatcher** auf [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest) herunter.

### Windows

> Nur Windows 10 wird offiziell unterstützt. Andere Versionen könnten funktionieren, aber wir können nicht volle Funktion garantieren.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-windows.exe` und warte bis der Download fertig ist.
2. Öffne deine Download Ordner und doppelklicke den Installer an.
3. Es kann sein das ein prompt genau wie dieses bei der installation von QuestPatcher auftauchen könnte wenn du QuestPatcher zum ersten mal öffnest. Dies ist eine **falsche postive**, drücke einfach `Mehr info` und dann `Trotzdem Ausführen`.

![Smartscreen-Pop-up](../docs/files/questpatchersmartscreen.png)

4. Wähle `Installiere für alle Benutzer` oder `Installiere nur für mich` aus und drücke `Ja` wenn ein Admin Prompt aufkommen sollte.
5. Akzeptiere die Lizenzvereinbarung, drücke next zwei mal und dann Install.
6. Warte bis die Installierung fertig ist und drücke dann next, und dann finish, um QuestPatcher zu Öffnen.


### macOS

!> QuestPatcher sollte automatisch Java Installieren. Wenn du eine alte version von macOS benutzt, wird Java als schon installiert detektiert obwohl es nicht installiert ist. Wenn du Probleme hast zu patchen, installiere Java [hier](https://www.java.com/en/) manuell.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-mac.dmg` und warte bis der Download fertig ist.
2. Öffne deinen Download Ordner und doppelklicke `QuestPatcher-mac.dmg` an.
3. Ziehe den QuestPatcher applikation in den Applikations ordner.
4. Schließe das Fenster, rechts klicke QuestPatcher auf deinem Desktop und klicke `"QuestPatcher" auswerfen`.
5. Öffne dein Downloads Ordner und doppelklicke QuestPatcher an. **__Stelle Sicher das du Control haltest__**, dann drücke Öffnen (Du musst das nur beim ersten Start machen).
6. Klicke im unbekannten Entwickler, der aufkommt (siehe unten), auf `Öffnen`.

![Nicht verifizierte App-Pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher ist mit [Ubuntu](https://ubuntu.com/) Linux kompiliert. Andere Linux-Distributionen könnten funktionieren, aber du könntest Probleme bekommen.

> Diese Anweisungen sind komplizierter als Mac und Windows, und es wird empfohlen, dass du den Weg durch ein Terminal kennst.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-ubuntu.zip` und warte bis der Download fertig ist.
2. Extrahiere die ZIP-Datei mit Hilfe des Archiv-Managers.
3. Geben den extrahierten Ordner ein, rechts klicke und drücke `Öffnen im Terminal`.
4. Gebe `chmod +x QuestPatcher` ein und drück auf Enter.
5. Wenn alles gut geht, tippe `./QuestPatcher` ein und QuestPatcher wird geladen.

## Patchen

Wenn du QuestPatcher zum ersten Mal öffnest, wirst du von einem Ladebildschirm wie unten begrüßt. Es wird ein paar kurze Fortschrittsbalken geben, während QuestPatcher wichtige Dateien herunterlädt. (`Downloading openjre` und `Downloading platform-tools`).

![QuestPatcher lädt](../docs/files/questpatcherloading.png)

> Wenn du eine Eingabeaufforderung erhältst, in der `Quest nicht verbunden ist` steht, stelle sicher, dass deine Quest verbunden ist, und das du gemäß der [SideQuest Installationsanleitung](https://sidequestvr.com/setup-howto) den Entwicklermodus eingerichtet hast. 
> 
> Wenn Sie eine Eingabeaufforderung erhalten solltest wo steht `App nicht installiert`, stelle sicher, dass du Gorilla Tag vom Oculus App Lab [hier](https://www.oculus.com/experiences/quest/4979055762136823/) installiert hast.


Nach etwa 30 Sekunden (obwohl es je nach Internetverbindung länger als fünf Minuten dauern kann), wird QuestPatcher das Laden beendet und du wirst wie unten mit einem Bildschirm begrüßt.

![QuestPatcher bereit zum Patchen](../docs/files/questpatcherpatch.png)

**Um mit dem Patch zu beginnen, klicke einfach auf den `Patch my App!` Knopf.**

> Es kann 1-15 Minuten dauern, um deine App zu patchen (ungefähr) Du musst sicherstellen, dass dein Internet während dieser Zeit online bleibt.

!> Schließe QuestPatcher nicht, während du deine App patchst.

## Mods verwalten

Sobald QuestPatcher fertig ist, wirst du zu diesen Bildschirm gebracht.

> Beim der nächsten Öffnung von QuestPatcher wirst du direkt auf diesen Bildschirm gebracht, da dein Spiel bereits gepatcht ist.

![Patch abgeschlossen](../docs/files/questpatcherpatched.png)

### Mods installieren

Um Mods zu erhalten, musst du zuerst eine `.qmod` Datei der Mod herunterladen die du möchtest. Du kannst Mods im `#quest-mod-release` Kanal des [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv) finden.

> Lade keine .DLL-Dateien herunter - diese sind PC-Mods, die nicht auf der Quest Version von Gorilla Tag verwendet werden können.

Um ein Mod zu installieren, klicke auf den Durchsuchen Knopf in der `Mod-Verwaltung` von QuestPatcher und wähle die Mods aus, die du möchtest. Schließlich, klicke auf `Öffnen` um die Mods zu installieren. ![Mods in QuestPatcher auswählen](../docs/files/questpatcherselectmod.png)

!> Das installieren einer Mod kann downloads von anderen Mods starten, die die Mod, die du installieren möchtest benötigt. Deinstalliere diese nicht!

Sobald die Mod installiert ist, solltest du es im Mods Bereich von QuestPatchers sehen. ![Mods installiert](../docs/files/questpatcherinstalledmods.png)

**Du kannst jetzt dein Spiel öffnen und deine Mods benutzen!**

?> Wenn du diesen Bildschirm beim Starten von Gorilla Tags sehen solltest, klicke einfach auf **App öffnen**. Klicke nicht auf Wiederherstellen, dies wird das Spiel wieder auf der originalen Version zurücksetzen und kann Probleme mit der Installation verursachen.  
![App wiederherstellen](../docs/files/restoreapp.png)

### Mods Deinstallieren

Mods können an- und ausgeschaltet werden, indem du auf den Schalter neben der Mod klickst. Deaktivierung einer mod wird dargestellt als wäre es deinstalliert worden, aber du kannst es Immer wieder einschalten wenn du möchtest.


Wenn du eine Mod löschen möchtest, klicke auf den `Delete mod` Knopf neben der Mod.

## Verwaltung der Kosmetiks & Anderen Dingen

!> Um Kosmetiks zu verwenden, musst du das Gorilla Cosmetics Mod installieren. Andernfalls werden sie nicht im Spiel erscheinen.

Um Ihre installierten Kosmetiks und Karten anzusehen, klicke auf `Cosmetics & Other Items` von QuestPatchers. Verwenden das Dropdown-Menü, um den Dateityp auszuwählen, den du verwalten möchtest.

**Kosmetiks können durch Ziehen und Ablegen in die Grauezone oder durch Klicken auf die Schaltfläche Durchsuchen installiert werden.**

![QuestPatcher Kosmetikmenü](../docs/files/questpatcherotheritems.png)

## Maps installieren {docsify-ignore}

> Schaue dir das [**Quest Custom Maps Guide**](quest-maploading) an für Informationen zu benutzerdefinierten Karten, Installation und wo neue Karten zu erhalten sind.

## Mods aktualisieren {docsify-ignore}

> Schauen dir den [**Quest Mod Updating Guide**](quest-updating) an, um mehr über die Aktualisierung von Gorilla Tags mit installierten Mods zu erfahren.

---

> Wenn dir diese Anleitung gefallen hat, kannst du [einen Tipp](https://streamelements.com/burritosoft/tip) oder [Den Hauptautor eine spende senden](https://github.com/sponsors/burritosoftware).