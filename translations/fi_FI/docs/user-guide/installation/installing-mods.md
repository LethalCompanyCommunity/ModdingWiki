# Modien Asentaminen
---

?> Jos haluat videotutoriaaleja, VorgunTheBeta on [ tehnyt videon, jossa kerrotaan, miten modit ja custom kappaleet asennetaan](https://youtu.be/pSwNSGx-P5c).

?> Tämän oppaan alku toimii myös Linux- ja Steam Deckin kanssa! Varmista, että [luet loppuun](#linuxsteam-deck-specific-tips) saadaksesi lisätietoja.

## Asennussijainnin Löytäminen
1. Avaa Steam ja paina Trombone Champ peliä hiiren oikealla painikkeella. Sitten mene `Manage > Browse local files`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Paina osoitepalkkia yläreunassa valitaksesi asennuskansion polun. Paina `CTRL`+`C` kopioidaksesi tämän leikepöydällesi.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## BipInEx Asennus

1. Lataa [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) TromboneChamp kansioon. Haluat saada `BepinEx_x64_VERSION.zip`, jossa `VERSION` on versionumero.
2. Pura BepInEx .zip-tiedoston sisältö suoraan Trombone Champ [asennuskansioon](##finding-install-location).

![BepInEx Extraction Preview](../docs/files/bepinexextract.png)

!> Varmista, että olet ladannut `x64` version BepInExistä. `unix` ja `x86` versiot aiheuttavat sen, että pelisi ei toimi kunnolla. Tämä koskee myös Linux/Steam Deckin käyttäjiä.

!> **TÄRKEÄÄ:** Pura BepInEx *suoraan* pelin kansioon kuten yllä olevassa kuvassa näkyy. Jos olet tehnyt kaiken oikein, pelin kansion pitäisi näyttää kuin alla olevassa kuvassa.

![Finished BepinEx Install](../docs/files/finishedbepinex.png)

3. Käynnistä Trombone Champ viimeistelläksesi asennuksen.

## Asennus

Kun BepInEx on asennettu, voit aloittaa tiettyjen modien lataamisen - täydellinen lista on saatavilla `#mod-releases` kanavalla [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ) palvelimella.

Haluat todennäköisesti asentaa custom kappaleita, tämä osio käyttää [TrombLoaderia](https://github.com/NyxTheShield/TrombLoader/releases/latest) esimerkkinä.

1. Mene [pelin asennuskansioon](###finding-install-location), `BepInEx` kansioon, ja sitten `plugins` kansioon.

2. Paina osoitepalkkia yläreunassa valitaksesi asennuskansion polun. Paina `CTRL`+`C` kopioidaksesi tämän leikepöydällesi.

![Copy Folder Path Preview](../docs/files/copyfolderpathplugins.png)

3. Lataa modin .dll tiedosto kopioituun kansioon.

![Plugins Folder Preview](../docs/files/pluginswithtrombloader.png)

4. Käynnistä Trombone Champ tarvittavien tiedostoiden alustamiseksi kyseiseen moodin.

## Linux/Steam Deck Vinkit
<details closed>
<summary>Laajenna</summary>

BepInExin asennus on suurelta osin sama kuin Windowsin edellä lueteltu, mutta on olemassa joitakin ylimääräisiä asioita joista olla tietoisia ensin:

 - Jos haluat seurata opasta, Steam Deck käyttäjien on vaihdettava työpöytätilaan pitämällä virtapainike pohjassa ja valitsemalla `Työpöytätila` valikosta.

 - Steam Deck -käyttäjien tulee asentaa peli sisäiseen tallennustilaan, koska BepInEx ei toimi microSD-kortilla.

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

## Installing Custom Songs {docsify-ignore}

> Check out the [**Custom Songs guide**](installing-songs) for info on installing custom songs.