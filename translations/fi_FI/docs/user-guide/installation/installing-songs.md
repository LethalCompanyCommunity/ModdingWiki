# Kappaleiden Asentaminen
---
?> Jos haluat videotutoriaaleja, VorgunTheBeta on [tehnyt videon, jossa kerrotaan, miten modit ja custom kappaleet asennetaan](https://youtu.be/pSwNSGx-P5c).

!> **TÄRKEÄÄ:** Varmista, että olet seurannut [modien asennusopasta](installing-mods) asentaaksesi BepInExin ja TrombLoaderin ennen jatkamista!

## Kappaleiden Löytäminen

Custom kappaleita löytyy `#custom-charts` kanavasta [Trombone Champ Modding Discordissa](https://discord.gg/KVzKRsbetJ).

Jos haluat kompaktimman listan, TheGlitched64 on luonut [taulukon, joka sisältää tietoa jokaisesta custom kartasta](https://docs.google.com/spreadsheets/d/1xpoUnHdSJFqOQEK_637-HCECYtJsgK91oY4dRuDMtik/edit?usp=sharing).

## Asennus

1. Lataa custom kappale - se on yleensä jonkinlainen arkisto tiedosto, yleensä päättyy `.zip`.

2. Pura arkiston sisältö suoraan `BepInEx/CustomSongs` -kansioon, joka luotiin kun ensin käynnistit pelin TrombLoader asennettuna.

![BepInExin Purkamisen Esikatselu](../docs/files/customsongextract.png)

3. Tarkista, että kappale on vain yhdessä kansiossa sen sijaan, että se olisi sisäkkäinen useisiin - tässä esimerkissä, kaikki kappaleen tiedostot on sijoitettava `BepinEx/CustomSongs/BakaMitai/`.

![Oikean Purkamisen Esikatselu](../docs/files/customsongcorrect.png)

### Luodaan Custom Kappaleita {docsify-ignore}

> Tutustu [**Karttaoppaaseen**](creating-charts) saadaksesi tietoa omien karttojen luomisesta.