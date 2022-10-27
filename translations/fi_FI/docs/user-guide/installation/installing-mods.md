# Modien Asentaminen
---

?> Jos haluat videotutoriaaleja, VorgunTheBeta on [ tehnyt videon, jossa kerrotaan, miten modit ja custom kappaleet asennetaan](https://youtu.be/pSwNSGx-P5c).

?> Tämän oppaan alku toimii myös Linux- ja Steam Deckin kanssa! Varmista, että [luet loppuun](#linuxsteam-deck-specific-tips) saadaksesi lisätietoja.

## Asennussijainnin Löytäminen
1. Avaa Steam ja paina Trombone Champ peliä hiiren oikealla painikkeella. Sitten mene `Manage > Browse local files`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Paina osoitepalkkia yläreunassa valitaksesi asennuskansion polun. Paina `CTRL`+`C` kopioidaksesi tämän leikepöydällesi.

![Kopioi Kansion Polku Esikatselu](../docs/files/copyfolderpath.png)

## BipInEx Asennus

1. Lataa [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) TromboneChamp kansioon. Haluat saada `BepinEx_x64_VERSION.zip`, jossa `VERSION` on versionumero.
2. Pura BepInEx .zip-tiedoston sisältö suoraan Trombone Champ [asennuskansioon](##finding-install-location).

![BepInExin Purkamisen Esikatselu](../docs/files/bepinexextract.png)

!> Varmista, että olet ladannut `x64` version BepInExistä. `unix` ja `x86` versiot aiheuttavat sen, että pelisi ei toimi kunnolla. Tämä koskee myös Linux/Steam Deckin käyttäjiä.

!> **TÄRKEÄÄ:** Pura BepInEx *suoraan* pelin kansioon kuten yllä olevassa kuvassa näkyy. Jos olet tehnyt kaiken oikein, pelin kansion pitäisi näyttää kuin alla olevassa kuvassa.

![BepinExin Asennus Valmis](../docs/files/finishedbepinex.png)

3. Käynnistä Trombone Champ viimeistelläksesi asennuksen.

## Asennus

Kun BepInEx on asennettu, voit aloittaa tiettyjen modien lataamisen - täydellinen lista on saatavilla `#mod-releases` kanavalla [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ) palvelimella.

Haluat todennäköisesti asentaa custom kappaleita, tämä osio käyttää [TrombLoaderia](https://github.com/NyxTheShield/TrombLoader/releases/latest) esimerkkinä.

1. Mene [pelin asennuskansioon](###finding-install-location), `BepInEx` kansioon, ja sitten `plugins` kansioon.

2. Paina osoitepalkkia yläreunassa valitaksesi asennuskansion polun. Paina `CTRL`+`C` kopioidaksesi tämän leikepöydällesi.

![Kopioi Kansion Polku Esikatselu](../docs/files/copyfolderpathplugins.png)

3. Lataa modin .dll tiedosto kopioituun kansioon.

![Lisäosien Kansion Esikatselu](../docs/files/pluginswithtrombloader.png)

4. Käynnistä Trombone Champ tarvittavien tiedostoiden alustamiseksi kyseiseen moodin.

## Linux/Steam Deck Vinkit
<details closed>
<summary>Laajenna</summary>

BepInExin asennus on suurelta osin sama kuin Windowsin edellä lueteltu, mutta on olemassa joitakin ylimääräisiä asioita joista olla tietoisia ensin:

 - Jos haluat seurata opasta, Steam Deck käyttäjien on vaihdettava työpöytätilaan pitämällä virtapainike pohjassa ja valitsemalla `Työpöytätila` valikosta.

 - Steam Deck -käyttäjien tulee asentaa peli sisäiseen tallennustilaan, koska BepInEx ei toimi microSD-kortilla.

 - Kuten aiemmin todettiin, sinun täytyy silti asentaa `x64` BepInEx Windows-versio, ei `unix` -versio, sillä Trombone Champ on vielä Protonin alla toimiva Windows-sovellus.

 - Tallennus ja loki tiedostot ovat tallennettu Steam-kansion Proton yhteensopivuuskansioihin.

    - Steam Deckillä tämä löytyy: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - Muilla Linux-asennuksilla voit suorittaa `locate -r /Holy Wow$<0>` terminaalissa, jos et ole varma missä Steam-kansio on.

Sinun tulee myös lisätä `WINEDLLOVERRIDES="winhttp=n,b" %command%` pelin käynnistysvalintoihin. Voit tehdä tämän napsauttamalla hiiren oikealla painikkeella peliä Steamissä ja klikkaa `Properties`. Toisin kuin Windowsissa, Proton ei lataa BepInExin tiedostoja, ellei sitä ole erikseen ohjeistettu tässä.

![Steamin Ominaisuudet Esikatselu](../docs/files/linuxsteamproperties.png)

Kun se on lisätty, BepInExin pitäisi nyt toimia! Asenna modit [yllä olevien ohjeiden mukaisesti](##installation) saadaksesi custom kappaleet toimimaan.

### Videotaustat {docsify-ignore}

Jotkin custom kappaleet sisältävät videoita taustalleen, eikä Protonin oletusasennus voi toistaa niitä. Jos haluat näiden toimivan, voit asentaa `GE-Proton` käyttäen [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). Tämä on Protonin versio, joka sisältää joitakin lisäominaisuuksia, mukaan lukien kyky toistaa videoformaatteja, joita Valve ei pysty tukemaan virallisesti.

Suosittelemme seuraamaan [tätä GamingOnLinuxin](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) luomaa opasta ProtonUp-Qt käytöstä ja `GE-Proton` asennuksesta.

!> Jopa GE-Protonin kanssa, saatat silti kokea ongelmia videon toiston kanssa asetuksistasi riippuen. </details>

## Custom Kappaleiden Asennus {docsify-ignore}

> Tutustu [**Custom Kappaleet oppaseen**](installing-songs) saadaksesi lisätietoja asennettaessa custom kappaleita.