# Creare le Charts
---

?> Se preferisci i video tutorial, NyxTheShield possiede [un archivio di stream](https://www.youtube.com/watch?v=ig27SlJveGs) dove spiega nel dettaglio ogni passo del processo di "charting".

## Le basi
### Editor Midi/DAW
Le charts vengono realizzate creando un file midi e facendolo processare da un [convertitore MIDI](#converting-midi-to-map-file).

Midi notes should be in the range 47 to 73 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Alcuni editor midi gratuiti, il cui funzionamento è verificato, sono:
- [Reaper](https://www.reaper.fm/download.php)* (Range: B2-C#5)
- [LMMS](https://lmms.io/download#windows) (Range: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (Range: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

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
  <img src="../docs/files/slide1.png" alt="Esempio di Glissando (&quot;Nota Slide&quot;)" />
</p>

<p spaces-before="0">
  Se una nota finisce ma la nota successiva comincia esattamente nello stesso momento, verranno collegate. In questo modo si può modificare dove comincia la curva di un glissando. Ecco un esempio di diversi glissandi collegati insieme:
</p>

<p spaces-before="0">
  (Nota bene: La prima sezione dritta è una nota separata dalla sezione ricurva. Il momento in cui si conclude è lo stesso al quale comincia la nota successiva.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Esempio di Glissando multiplo" />
</p>

<h2 spaces-before="0">
  Convertire file Midi in file Map
</h2>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://tc-chart-converter.github.io/">Trombone Champ Chart Converter</a>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Compila i campi:
    </p>
    <ul>
      <li>
        <code>Song Name</code> is the full name of the song, shown in the info when you select it in-game.
      </li>
      <li>
        <code>Short Name</code> è il nome mostrato quando si scorre la lista dei brani. Il testo diventa più piccolo quando il nome è lungo, quindi non è sicuro se esiste una lunghezza massima.
      </li>
      <li>
        <code>Release Year</code> is the year the song was created.
      </li>
      <li>
        <code>Artist</code> is the composer of the song.
      </li>
      <li>
        <code>Beats per Bar</code> determina quanto sono distanti le "linee delle battute".
      </li>
      <li>
        <code>Difficulty</code> è il numero di stellette-difficoltà che compaiono nella sezione info del brano.
      </li>
      <li>
        <code>Note Spacing</code> determina la velocità con cui scorre il livello, in combinazione con BPM.
      </li>
      <li>
        <code>Folder Name</code> è il nome della cartella in cui metterai il file map e il file del brano. Per esempio: Se inserisci "la mia map" in Folder Name, il percorso per il tuo file map sarà BepInEx/CustomSongs/la mia map/song.tmb.
      </li>
      <li>
        <code>Song Endpoint</code> è la battuta in cui termina la canzone. Viene calcolata automaticamente, ma puoi regolarla per cambiare quando appare la schermata finale del livello.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Premi OK. Create a folder with the same name as you entered in the <code>Folder Name</code> field, and save the file as <code>song.tmb</code> inside that folder.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      La tua traccia musicale dovrebbe essere un file .ogg. Al momento della stesura di questa guida, la durata della traccia deve essere più lunga del 'Song Endpoint' selezionato, o la canzone si bloccherà e non finirà più. Puoi usare programmi tipo Audacity per inserire del silenzio all'inizio della traccia per allinearlo con il midi. Rinomina il file <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Sposta il file.ogg. nella stessa cartella in cui è presente <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Segui le <a href="installing-songs">Istruzioni per Installare una Canzone Personalizzata</a> per effettuare un test.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">Aggiungi uno sfondo!</a>
    </p>
  </li>
</ol>
