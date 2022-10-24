# Creare le Charts
---

?> Se preferisci i video tutorial, NyxTheShield possiede [un archivio di stream](https://www.youtube.com/watch?v=ig27SlJveGs) dove spiega nel dettaglio ogni passo del processo di "charting".

## Le basi
### Editor Midi/DAW
Charts are made by creating a midi file and running them through a [MIDI converter](#converting-midi-to-map-file).

Le note midi dovrebbero essere nell'intervallo da 48 a 72 per abbinarsi al gioco. <br>**NOTA BENE:** Editor diversi usano valori diversi per il piano in questo intervallo.

Alcuni editor midi gratuiti, il cui funzionamento è verificato, sono:
- [Reaper](https://www.reaper.fm/download.php)* (Intervallo: C3-C5)
- [LMMS](https://lmms.io/download#windows) (Intervallo: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Intervallo: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Intervallo: C4-C6)

<sub>*La verione completa del software non è gratutia, tuttavia ha una versione di prova gratuita cheè adatta per creare le chart.</sub><br> <sub>**Esporta le note sulla traccia 2 MIDI di default, rendendosi incompatibile con Midi2TromboneChamp.</sub><br> <sub>†La versione di prova di FL Studio non permette di esportare file MIDI, ma puoi aggirare l'ostacolo salvandoil file del progetto e usando <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Progetto su Reaper
</h4>

<p spaces-before="0">
  Se non sai quale editor usare, si raccomanda Reaper in quanto ha un file progetto personalizzato per Trombone Champ che fornisce:
</p>

<ul>
  <li>
    Una spiegazione basilare su come usare i comandi di Reaper (in Inglese)
  </li>
  <li>
    Impostazioni preconfigurate
  </li>
  <li>
    MIDI esempio
  </li>
</ul>

<p spaces-before="0">
  Il progetto si può <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">scaricare qui</a>.
</p>

<h3 spaces-before="0">
  Note normali
</h3>

<p spaces-before="0">
  Le note normali vengono create nell'editor midi e sono così come si vedono in gioco. Assicurati di lasciare uno spazio temporale tra le note!
</p>

<h3 spaces-before="0">
  Glissando (Note "Slide")
</h3>

<p spaces-before="0">
  Il glissando si crea sovrapponendo diverse note nel tempo. Per una coppia di note sovrapposte, il glissando va dall'inizio della prima nota all'inizio della seconda. La parte della prima nota che si sovrappone viene scartata. Si veda la figura per un esempio:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Slide Note Example" />
</p>

<p spaces-before="0">
  If a note ends but the next note starts at the exact same time, they will be connected. This allows you to adjust where the curve of a slide starts. Here's an example of multiple slides connected together:
</p>

<p spaces-before="0">
  (note: The first straight section is a separate note from the curved section. Its end time is the same as the next one's start time.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Multiple Slide Note Example" />
</p>

<h2 spaces-before="0">
  Converting Midi to Map File
</h2>

<p spaces-before="0">
  ?> There are two Midi converters available besides Midi2TromboneChamp! <br>Since they're still in beta, <strong x-id="1">they may have bugs</strong>, so this guide is still written for Midi2TromboneChamp. <br>The process for these new converters is similar enough that this guide should still be usable. <br>If you want to try a more up-to-date conversion program, feel free to give a new converter a try: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - a unity-based sequel to Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - a web-based alternative with new features.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> and click <code>Midi2TromboneChamp.exe</code> to download it.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Run it. In the file selector it opens, select your midi file. Click Open.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Fill out the fields:
    </p>
    <ul>
      <li>
        <code>Song Name</code> is the full name of the song, shown in the info when you select it in-game .
      </li>
      <li>
        <code>Short Name</code> is shown while scrolling through the song list. Text gets smaller when the name is long so I'm not sure if there's a maximum length.
      </li>
      <li>
        <code>Folder Name</code> is the name of the folder you will put your map and song file in. E.g. If you set Folder Name to my map, your map path will be BepInEx/CustomSongs/my map/song.tmb.
      </li>
      <li>
        <code>Year</code> is the year the song was created.
      </li>
      <li>
        <code>Author</code> is the composer of the song.
      </li>
      <li>
        <code>Difficulty</code> is the number of difficulty stars that appear on the song's info.
      </li>
      <li>
        <code>Note Spacing</code> affects how fast the level scrolls, in combination with BPM.
      </li>
      <li>
        <code>Song Endpoint</code> is the beat on which the song ends. It is automatically calculated, but you can adjust it to change when the level end screen appears.
      </li>
      <li>
        <code>Beats per Bar</code> determines how far apart the "beat lines" are.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Hit OK. In the file selector it opens, create a folder with the same name as you entered in the <code>Folder Name</code> field, and save the file as <code>song.tmb</code> inside that folder.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Your music track should be a .ogg file. At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file <code>song.ogg</code>.
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