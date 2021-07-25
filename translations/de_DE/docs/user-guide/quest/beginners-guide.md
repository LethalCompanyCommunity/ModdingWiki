# Quest Beginner Anleitung
---
>
> Diese Anleitung ist für die Quest Version von Gorilla Tag. Wenn du SteamVR benutzt oder eine Quest **mit Link**, gehe zur [**PC Modifizierung**](pc-guide) Anleitung.

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## QuestPatcher Installieren

Zur Zeit ist die Empfohlenne methode mods mit **QuestPatcher** zu Installieren. Lade **QuestPatcher** auf [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest) herunter.

### Windows

> Die einzige version ist mit Windows 10 supported. Andere Versionen könnten funktionieren, aber wir können nicht volle Funktion garantieren.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-windows.exe` und warte bis der Download fertig ist.
2. Öffne deine download ordner und doppel klick den installer an.
3. Es kann sein das ein prompt genau wie bei der installation von QuestPatcher auftauhen könnte wenn du es zum ersten mal öffnest. Dies ist eine **falsche postive**, drücke einfach `Mehr info` dann `Trotzdem Rennen`.

![Smartscreen pop-up](../docs/files/questpatchersmartscreen.png)

4. Wähle `Installiere für alle Benutzer` oder `Installiere nur für mich` aus und drücke `Ja` wenn ein Admin Prompt aufkommen sollte.
5. Akzeptiere die Lizenzvereinbarung, drücke next zwei mal und dann Install.
6. Warte bis die Installierung fertig ist und drücke dann next, und dann finish um QuestPatcher zu Öffnen.


### macOS

!> QuestPatcher sollte automatisch Java Installieren. Wenn du eine alte version von macOS benutzt, wird Java als schon installiert detektiert obwohl es nicht installiert ist. Wenn du Probleme hast zu patchen, installiere Java [hier](https://www.java.com/en/) manuel.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-mac.dmg` und warte bis der Download fertig ist.
2. Öffne deine download ordner und doppel klick `QuestPatcher-mac.dmg` an.
3. Ziehe den QuestPatcher applikation in den Download ordner.
4. Schließe das Fenster, rechts klick QuestPatcher auf dein desktop und klicke `Eject "QuestPatcher"`.
5. Öffne dein Downloads ordner und doppel klick QuestPatcher an. **__Stelle Sicher das du Control haltest__**, dann drücke open (Du musst das nur bei der ersten Öffnung machen).
6. Klicke im unbekannten Entwickler, der aufkommt (siehe unten), auf `Öffnen`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher ist für [Ubuntu](https://ubuntu.com/) Linux kompiliert. Andere Linux-Distributionen könnten funktionieren, aber du könntest Probleme bekommen.

> Diese Anweisungen sind komplizierter als Mac und Windows, und es wird empfohlen, dass du den Weg durch ein Terminal kennst.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-ubuntu.zip` und warte bis der Download fertig ist.
2. Extrahiere die ZIP-Datei mit Hilfe des Archiv-Managers.
3. Geben den extrahierten Ordner ein, rechts klicke und drücke `Öffnen im Terminal`.
4. Gebe `chmod +x QuestPatcher` ein und drück auf Enter.
5. Wenn alles gut geht, tippe `./QuestPatcher` ein und QuestPatcher wird geladen.

## Patchen

Wenn du QuestPatcher zum ersten Mal öffnest, wirst du von einem Ladebildschirm wie unten begrüßt. Es wird ein paar kurze Fortschrittsbalken geben, während QuestPatcher wichtige Dateien herunterlädt. (`Lade openjre` und `Lade Plattform-Tools herunter`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Wenn du eine Eingabeaufforderung erhältst, in der `Quest nicht verbunden ist` steht, stelle sicher, dass deine Quest verbunden ist, und das du gemäß der [SideQuest Installationsanleitung](https://sidequestvr.com/setup-howto) den Entwicklermodus eingerichtet hast. 
> 
> Wenn Sie eine Eingabeaufforderung erhalten solltest wo steht `App nicht installiert`, stelle sicher, dass du Gorilla Tag vom Oculus App Lab [hier](https://www.oculus.com/experiences/quest/4979055762136823/) installiert hast.


Nach etwa 30 Sekunden (obwohl es je nach Internetverbindung länger als fünf Minuten dauern kann), QuestPatcher wird das Laden beendet und du wirst wie unten mit einem Bildschirm begrüßt.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**Um mit dem Patch zu beginnen, klicke einfach auf den `Patch meine App!` knopf.**

> Es kann 1-15 Minuten dauern, um deine App zu patchen (ungefähr) Du musst sicherstellen, dass dein Internet während dieser Zeit online bleibt.

!> Schließe QuestPatcher nicht, während du die App patchst.

## Mods verwalten

Sobald QuestPatcher fertig ist, wirst du zu diesen Bildschirm gebracht.

> Beim der nächsten Öffnung von QuestPatcher wirst du direkt auf diesen Bildschirm gebracht, da dein Spiel bereits gepatcht ist.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Mods installieren

Um Mods zu erhalten, musst du zuerst eine `.qmod` Datei der Mod herunterladen die du möchtest. Du kannst Mods im `#quest-mod-release` Kanal der [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv) finden.

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](../docs/files/restoreapp.png)

### Uninstalling Mods

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` mod next to the mod.

## Managing Cosmetics & Other Items

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Installing Maps {docsify-ignore}

> Check out the [**Quest Custom Maps Guide**](quest-maploading) for info on custom maps, installation, and where to get new maps.

## Updating Mods {docsify-ignore}

> Check out the [**Quest Mod Updating Guide**](quest-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware).