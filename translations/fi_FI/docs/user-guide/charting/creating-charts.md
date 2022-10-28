# Karttojen Luonti
---

?> Jos haluat videotutoriaaleja, NyxTheShieldilla on [stream-arkisto](https://www.youtube.com/watch?v=ig27SlJveGs), joka selittää yksityiskohtaisesti kaikki kartoitusprosessin vaiheet.

## Perusteet
### Midi Editor/DAW
Kartat tehdään luomalla midi tiedosto ja viemällä ne [MIDI muuntimen](#converting-midi-to-map-file) läpi.

Midi nuotit tulisi olla 48 - 72 asteikon välillä toimiakseen pelin kanssa.<br>**HUOM:** Erilaiset editorit käyttävät pianolle erilaisia arvoja.

Jotkut ilmaiset, todennettu toimimaan midi editorit ovat:
- [Reaper](https://www.reaper.fm/download.php)* (Asteikko: C3-C5)
- [LMMS](https://lmms.io/download#windows) (Asteikko: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Asteikko: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Asteikko: C4-C6)

<sub>*Täysi ohjelmisto ei ole ilmainen, mutta on ilmainen kokeiluversio, joka toimii kartoitukseen.</sub><br> <sub>**Vie nuotit MIDI radalle 2 oletuksena, mikä tekee siitä yhteensopimattoman Midi2TromboneChampin kanssa.</sub><br> <sub>†FL Studio kokeiluversio ei salli sinun viedä MIDIä mutta voit kiertää tämän tallentamalla projektin tiedoston ja käyttämällä <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Reaper Projekti
</h4>

<p spaces-before="0">
  Jos et ole varma mitä editoria käyttäisi, Reaper on suositeltava, koska siinä on oma Trombone Champ projektitiedosto, joka sisältää:
</p>

<ul>
  <li>
    Perusselitys siitä, miten käyttää Reaperia (englanniksi)
  </li>
  <li>
    Esimääritellyt asetukset
  </li>
  <li>
    Esimerkki MIDI
  </li>
</ul>

<p spaces-before="0">
  Projekti voidaan <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">ladata täältä</a>.
</p>

<h3 spaces-before="0">
  Tavalliset Nuotit
</h3>

<p spaces-before="0">
  Normaalit nuotit luodaan midi editoriin ja näyttävät samalta pelin sisällä. Varmista, että jätät aukon nuottien väliin!
</p>

<h3 spaces-before="0">
  Liuku Nuotit
</h3>

<p spaces-before="0">
  Liu'ut luodaan päällekkäin nuottien ajoissa. Jos kyseessä on pari päällekkäistä nuottia, liuku menee ensimmäisen nuotin alusta toisen nuotin alkuun. Ensimmäisen nuotin päällekkäistä osaa ei lisätä. Katso tämä kuva esimerkiksi:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Slide Note Example" />
</p>

<p spaces-before="0">
  Jos nuotti päättyy, mutta seuraava nuotti alkaa täsmälleen samaan aikaan, ne yhdistetään. Tämän avulla voit säätää missä liu'un käyrä alkaa. Tässä on esimerkki useista liu'uista yhdistettynä toisiinsa:
</p>

<p spaces-before="0">
  (Huomautus: Ensimmäinen suora osa on erillinen nuotti kaarevasta osasta. Sen päättymisaika on sama kuin seuraavan alkamisaika.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Multiple Slide Note Example" />
</p>

<h2 spaces-before="0">
  Muunnetaan Midi Karttatiedostoksi
</h2>

<p spaces-before="0">
  ?> Midi2TromboneChampin lisäksi on saatavilla kaksi Midi -muunninta! <br>Koska ne ovat vielä betassa, <strong x-id="1">niissä voi olla bugeja</strong>, joten tämä opas on vielä kirjoitettu Midi2TromboneChampille. <br>Prosessi näille uusille muuntimille on tarpeeksi samanlainen, että tämä opas olisi edelleen käyttökelpoinen. <br>Jos haluat kokeilla ajan tasalla olevaa muuntoohjelmaa, voit kokeilla vapaasti uutta muunninta: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - unity-pohjainen jatko-osa Midi2TromboneChampille. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - web-pohjainen vaihtoehto, jossa on uusia ominaisuuksia.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Mene <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> ja lataa <code>Midi2TromboneChamp.exe</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Suorita se. Valitse tiedostonvalitsimessa sinun miditiedosto. Klikkaa Open.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Täytä kentät:
    </p>
    <ul>
      <li>
        <code>Song Name</code> on kartan koko nimi ja sen tiedot näytetään, kun valitset sen pelissä .
      </li>
      <li>
        <code>Short Name</code> näytetään kappalevalikossa. Teksti pienenee kun nimi on pitkä, joten en ole varma, onko siinä enimmäispituus.
      </li>
      <li>
        <code>Folder Name</code> on sen kansion nimi, johon laitat kartta- ja kappaletiedostosi. Esim. Jos asetat Folder Name nimeksi my map, karttasi polku on BepInEx/CustomSongs/my map/song.tmb.
      </li>
      <li>
        <code>Year</code> on vuosi, jolloin kappale luotiin.
      </li>
      <li>
        <code>Author</code> on kappaleen säveltäjä.
      </li>
      <li>
        <code>Difficulty</code> on vaikeustaso eli tähtien määrä, jotka näkyvät kappaleen tiedoissa.
      </li>
      <li>
        <code>Note Spacing</code> vaikuttaa siihen, kuinka nopeasti taso rullaa yhdessä BPM kanssa.
      </li>
      <li>
        <code>Song Endpoint</code> on isku, jolla kappale päättyy. Se lasketaan automaattisesti, mutta voit säätää sitä muuttaaksesi, kun tason loppunäyttö näkyy.
      </li>
      <li>
        <code>Beats per Bar</code> määrittää, kuinka kaukana "iskulinjat" ovat.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Paina OK. Luo tiedosto valitsimessa kansio jonka nimi on sama kuin kirjoittamasi <code>Folder Name</code> -kenttään. ja tallenna tiedosto <code>song.tmb</code> tuon kansion sisään.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Musiikkikappaleesi pitäisi olla .ogg-tiedosto. Kappaleen keston on oltava kirjoittamisen aikaan pidempi kuin kappaleen päätepiste, tai laulu jää jumiin eikä koskaan loppuu. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Move the ogg file into the same folder as <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Follow the <a href="installing-songs">Custom Song Installation instructions</a> to test it.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">Add a background!</a>
    </p>
  </li>
</ol>