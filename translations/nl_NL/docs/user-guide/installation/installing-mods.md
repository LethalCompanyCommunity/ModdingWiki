# Mods Installeren
---

?> Als je liever en videotutorial wil hebben, heeft VorgunTheBeta een [video](https://youtu.be/pSwNSGx-P5c) waarin wordt uitgelegd hoe je mods en liedjes installeert. Opmerking: de video is in het Engels.

## Installatiemap vinden
1. Open Steam en klik met de rechtermuisknop op Trombone Champ. Ga daarna naar `Beheren > Door lokale bestanden bladeren`.

![Rechtermuisknop Klik Menu Voorbeeld](../docs/files/localfilescontext.png)

2. Klik bovenaan op de adresbalk om het pad van de installatiemap te selecteren. Klik op `CTRL`+`C` om dit te kopiëren naar je klembord.

![Kopieer mappad voorbeeld](../docs/files/copyfolderpath.png)

## BepInEx Installeren

1. Download [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) in de installatiemap van Trombone Champ. Je wil `BepinEx_x64_VERSION.zip` downloaden, waar `VERSION` het versienummer is.
2. Pak de inhoud van het BepInEx .zip-bestand direct uit in de [installatiemap](##finding-install-location) van Trombone Champ.

![BepInEx Extractie Voorbeeld](../docs/files/bepinexextract.png)

!> Zorg ervoor dat je de `x64` versie van BepInEx hebt gedownload. De `unix` en `x86` versies zullen ervoor zorgen dat het spel niet goed werkt.

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

### Installeren van zelfgemaakte liedjes {docsify-ignore}

> Bekijk de [**Liedjes Installeren gids**](installing-songs) voor info over het installeren van zelfgemaakte liedjes.