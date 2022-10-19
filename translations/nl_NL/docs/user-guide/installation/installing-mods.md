# Mods Installeren
---

?> Als je liever en video-tutorial wil hebben, heeft VorgunTheBeta een [video](https://youtu.be/pSwNSGx-P5c) waarin word uitgelegd hoe mods en aangepaste mappen te installeren. Opmerking: de video is alleen maar in het Engels.

## Installatie-locatie vinden
1. Open Steam en klik met de rechtermuisknop op Trombone Champ. Ga daarna naar `Beheren > Door lokale bestanden bladeren`.

![Rechtermuisknop Klik Menu Voorbeeld](../docs/files/localfilescontext.png)

2. Klik bovenaan de adresbalk om het pad van je installatiemap te selecteren. Klik op `CTRL`+`C` om dit te kopiëren naar je klembord.

![Kopieer mappad voorbeeld](../docs/files/copyfolderpath.png)

## BepInEx Installeren

1. Download [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) in uw TromboneChamp map. Je wilt `BepinEx_x64_VERSION.zip`krijgen, met `VERSION` de versienummer zijn.
2. Haal de inhoud van het BepInEx .zip-bestand rechtstreeks uit in de [installeer map](##finding-install-location) van uw Trombone Champ.

![BepInEx Extractie Voorbeeld](../docs/files/bepinexextract.png)

!> Zorg ervoor dat je de `x64` versie van BepInEx heeft gedownload. De `Unix` en `x86` versies zullen ervoor zorgen dat je spel niet goed werkt.

!> **LET OP:** Extract BepInEx *direct* in je spelmap zoals weergegeven in de afbeelding hierboven. Als je het goed hebt gedaan, zou de map van je spel eruit moeten zien als de onderstaande afbeelding.

![Voltooide Installatie van BepInEx](../docs/files/finishedbepinex.png)

3. Start Trombone Champ één keer om de installatie te voltooien.

## Mod Installatie

Met BepInEx geïnstalleerd, je kan beginnen met het downloaden van specifieke mods - er is een volledige lijst beschikbaar in de `#mod-releases` kanaal in de [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ).

Omdat je waarschijnlijk aangepaste mappen wilt installeren, gebruiken we [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) als het voorbeeld.

1. Navigeer naar de installatie map van je [spel](###finding-install-location), de `BepInEx` map, en vervolgens de `plugins` map.

2. Klik bovenaan de adresbalk om het pad van je installatiemap te selecteren. Klik op `CTRL`+`C` om dit te kopiëren naar je klembord.

![Kopieer mappad voorbeeld](../docs/files/copyfolderpathplugins.png)

3. Download het mod's .dll bestand in de gekopieerde map.

![Plug-ins Map Voorbeeld](../docs/files/pluginswithtrombloader.png)

4. Start Trombone Champ op één keer om de noodzakelijke bestanden voor die mod te initialiseren.

### Installeren van aangepaste mappen {docsify-ignore}

> Bekijk de [**Aangepaste Mappen gids**](installing-songs) voor info over het installeren van aangepaste mappen.