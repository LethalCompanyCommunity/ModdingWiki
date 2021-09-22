# Quest Beginner Anleitung
---
>
> Diese Anleitung ist für die Quest Version von Gorilla Tag. Wenn du SteamVR benutzt oder eine Quest **mit Link**, gehe zur [**PC Modifizierung**](pc-guide) Anleitung.

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div> -->
<!-- Guide Page Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1545654854838298"
     data-ad-slot="8114351325"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

## QuestPatcher Installieren

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> Nur Windows 10 wird offiziell unterstützt. Andere Versionen könnten funktionieren, aber wir können nicht volle Funktion garantieren.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-windows.exe` und warte bis der Download fertig ist.
2. Öffne deine Download Ordner und doppelklicke den Installer an.
3. Es kann sein das ein prompt genau wie dieses bei der installation von QuestPatcher auftauchen könnte wenn du QuestPatcher zum ersten mal öffnest. Dies ist eine **falsche postive**, drücke einfach `Mehr info` und dann `Trotzdem Ausführen`.

![Smartscreen pop-up](../docs/files/questpatchersmartscreen.png)

4. Wähle `Installiere für alle Benutzer` oder `Installiere nur für mich` aus und drücke `Ja` wenn ein Admin Prompt aufkommen sollte.
5. Akzeptiere die Lizenzvereinbarung, drücke next zwei mal und dann Install.
6. Warte bis die Installierung fertig ist und drücke dann next, und dann finish, um QuestPatcher zu Öffnen.


### macOS

!> QuestPatcher should automatically download Java. If you're on an older version of macOS, Java might be detected as already installed when it isn't. If you are having trouble patching, manually download Java [here](https://www.java.com/en/).

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-mac.dmg` und warte bis der Download fertig ist.
2. Öffne deinen Download Ordner und doppelklicke `QuestPatcher-mac.dmg` an.
3. Ziehe den QuestPatcher applikation in den Applikations ordner.
4. Schließe das Fenster, rechts klicke QuestPatcher auf deinem Desktop und klicke `"QuestPatcher" auswerfen`.
5. Öffne dein Downloads Ordner und doppelklicke QuestPatcher an. **__Stelle Sicher das du Control haltest__**, dann drücke Öffnen (Du musst das nur beim ersten Start machen).
6. Klicke im unbekannten Entwickler, der aufkommt (siehe unten), auf `Öffnen`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher ist mit [Ubuntu](https://ubuntu.com/) Linux kompiliert. Andere Linux-Distributionen könnten funktionieren, aber du könntest Probleme bekommen.

!> These instructions are more complicated than Mac and Windows, and it is recommended that you know your way around a terminal.

1. Wähle die Asset Dropdown Liste auf GitHub und drücke `QuestPatcher-ubuntu.zip` und warte bis der Download fertig ist.
2. Extrahiere die ZIP-Datei mit Hilfe des Archiv-Managers.
3. Geben den extrahierten Ordner ein, rechts klicke und drücke `Öffnen im Terminal`.
4. Gebe `chmod +x QuestPatcher` ein und drück auf Enter.
5. Wenn alles gut geht, tippe `./QuestPatcher` ein und QuestPatcher wird geladen.

## Patchen

When you first open QuestPatcher, you will be greeted by a loading screen like below. There will be a few short progress bars while QuestPatcher downloads important files. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Wenn du eine Eingabeaufforderung erhältst, in der `Quest nicht verbunden ist` steht, stelle sicher, dass deine Quest verbunden ist, und das du gemäß der [SideQuest Installationsanleitung](https://sidequestvr.com/setup-howto) den Entwicklermodus eingerichtet hast. 
> 
> Wenn Sie eine Eingabeaufforderung erhalten solltest wo steht `App nicht installiert`, stelle sicher, dass du Gorilla Tag vom Oculus App Lab [hier](https://www.oculus.com/experiences/quest/4979055762136823/) installiert hast.


After about 30 seconds (although it could take longer than five minutes depending on your internet connection), QuestPatcher will finish loading and you will be greeted with a screen like below.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> Es kann 1-15 Minuten dauern, um deine App zu patchen (ungefähr) Du musst sicherstellen, dass dein Internet während dieser Zeit online bleibt.

!> Do not close QuestPatcher while it is patching your app.

## Mods verwalten

Once QuestPatcher is done, you will be brought to this screen.

> Beim der nächsten Öffnung von QuestPatcher wirst du direkt auf diesen Bildschirm gebracht, da dein Spiel bereits gepatcht ist.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Mods installieren

To get mods, you first need to download a `.qmod` file of the mod you want. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](../docs/files/restoreapp.png)

### Mods Deinstallieren

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` button next to the mod.

## Verwaltung der Kosmetiks & Anderen Dingen

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Maps installieren {docsify-ignore}

> Schaue dir das [**Quest Custom Maps Guide**](quest-maploading) an für Informationen zu benutzerdefinierten Karten, Installation und wo neue Karten zu erhalten sind.

## Mods aktualisieren {docsify-ignore}

> Schauen dir den [**Quest Mod Updating Guide**](quest-updating) an, um mehr über die Aktualisierung von Gorilla Tags mit installierten Mods zu erfahren.

---

> Wenn dir diese Anleitung gefallen hat, kannst du [einen Tipp](https://streamelements.com/burritosoft/tip) oder [Den Hauptautor eine spende senden](https://github.com/sponsors/burritosoftware).