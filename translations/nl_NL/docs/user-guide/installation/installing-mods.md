# Mods Installeren
---

?> Als je liever en videotutorial wil hebben, heeft VorgunTheBeta een [video](https://youtu.be/pSwNSGx-P5c) waarin wordt uitgelegd hoe je mods en liedjes installeert. Opmerking: de video is in het Engels.

?> The start of this guide also works for Linux and Steam Deck! Make sure to [read the end](#linuxsteam-deck-specific-tips) for additional details.

## Installatiemap vinden
1. Open Steam en klik met de rechtermuisknop op Trombone Champ. Ga daarna naar `Beheren > Door lokale bestanden bladeren`.

![Rechtermuisknop Klik Menu Voorbeeld](../docs/files/localfilescontext.png)

2. Klik bovenaan op de adresbalk om het pad van de installatiemap te selecteren. Klik op `CTRL`+`C` om dit te kopiëren naar je klembord.

![Kopieer mappad voorbeeld](../docs/files/copyfolderpath.png)

## BepInEx Installeren

1. Download [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) in de installatiemap van Trombone Champ. Je wil `BepinEx_x64_VERSION.zip` downloaden, waar `VERSION` het versienummer is.
2. Pak de inhoud van het BepInEx .zip-bestand direct uit in de [installatiemap](##finding-install-location) van Trombone Champ.

![BepInEx Extractie Voorbeeld](../docs/files/bepinexextract.png)

!> Zorg ervoor dat je de `x64` versie van BepInEx hebt gedownload. De `unix` en `x86` versies zullen ervoor zorgen dat het spel niet goed werkt. This also applies to users on Linux/Steam Deck.

!> **LET OP:** Pak BepInEx uit *in* de installatiemap zoals weergegeven in de afbeelding hierboven. Als je het goed hebt gedaan, zou de map van je spel eruit moeten zien als de onderstaande afbeelding.

![Voltooide Installatie van BepInEx](../docs/files/finishedbepinex.png)

3. Start Trombone Champ één keer om de installatie te voltooien.

## Mods Installeren

Met BepInEx geïnstalleerd, kan je beginnen met het downloaden van specifieke mods. Er is een volledige lijst met mods beschikbaar in het `#mod-releases` kanaal in de [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ).

Omdat je waarschijnlijk zelfgemaakte liedjes wil installeren, gebruiken we [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) als het voorbeeld.

1. Navigeer naar de [installatiemap](###finding-install-location) van het spel, daarna naar de `BepInEx` map, en vervolgens naar de `plugins` map.

2. Klik bovenaan op de adresbalk om het pad van de plugin-map te selecteren. Klik op `CTRL`+`C` om dit te kopiëren naar je klembord.

![Kopieer mappad voorbeeld](../docs/files/copyfolderpathplugins.png)

3. Download het .dll bestand van de mod naar het net gekopieerde pad.

![Plugins Map Voorbeeld](../docs/files/pluginswithtrombloader.png)

4. Start Trombone Champ één keer op om de noodzakelijke bestanden voor de mod te initialiseren.

## Linux/Steam Deck Tips
<details closed>
<summary>Expand</summary>

The process of installing BepInEx is largely the same as on Windows listed above, however there are some extra things to be aware of first:

 - To follow the guide, Steam Deck users will need to switch to Desktop Mode by holding down the power button and selecting `Desktop Mode` from the menu.

 - Steam Deck users will need to install the game to the internal storage, as BepInEx will not load from the microSD card.

 - As stated earlier, you will still need to install the `x64` Windows version of BepInEx, not the `unix` version, as Trombone Champ is still a Windows application running under Proton.

 - Save and log files are stored in your Steam folder within Proton's compatibility folders.

    - On Steam Deck this can be found at: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - On other Linux flavors you can run `locate -r /Holy Wow$` from the terminal if you're unsure of where your Steam folder is.

You will also need to add `WINEDLLOVERRIDES="winhttp=n,b" %command%` to your game's launch options. To do this, right click the game in Steam and click `Properties`. Unlike on Windows, Proton won't load BepInEx's files unless specifically instructed to here.

![Steam Properties Preview](../docs/files/linuxsteamproperties.png)

Once added, BepInEx should now work! Install your mods [as instructed above](##installation) to get custom songs working.

### Video Backgrounds {docsify-ignore}

Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup. </details>

## Installeren van zelfgemaakte liedjes {docsify-ignore}

> Bekijk de [**Liedjes Installeren gids**](installing-songs) voor info over het installeren van zelfgemaakte liedjes.