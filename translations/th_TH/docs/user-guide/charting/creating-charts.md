# การสร้างผัง
---

?> If you prefer video tutorials, NyxTheShield has [a stream archive](https://www.youtube.com/watch?v=ig27SlJveGs) that explains every step of the charting process in detail.

## Basics
### Midi Editor/DAW
Charts are made by creating a midi file and running them through a [MIDI converter](#converting-midi-to-map-file).

Midi notes should be in the range 48 to 72 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Some free, verified to work midi editors include:
- [Reaper](https://www.reaper.fm/download.php)* (Range: C3-C5)
- [LMMS](https://lmms.io/download#windows) (Range: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: C4-C6)

<sub>*Full software is not free, but has a free trial that works for charting.</sub><br> <sub>**Exports notes into MIDI track 2 by default, which makes it incompatible with Midi2TromboneChamp by default.</sub><br> <sub>†The trial version of FL Studio doesn't allow you to export MIDI, but you can get around this by saving the project file and using <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Reaper Project
</h4>

<p spaces-before="0">
  If you're not sure which editor to use, Reaper is recommended as there's a custom Trombone Champ project file that comes with:
</p>

<ul>
  <li>
    A basic explanation on how to use the controls of Reaper (in English)
  </li>
  <li>
    Preconfigured settings
  </li>
  <li>
    Example MIDI
  </li>
</ul>

<p spaces-before="0">
  The project can be <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">downloaded here</a>.
</p>

<h3 spaces-before="0">
  Normal Notes
</h3>

<p spaces-before="0">
  Normal notes are created in the midi editor and look the same in-game. Make sure to leave a gap in time between notes!
</p>

<h3 spaces-before="0">
  Slide Notes
</h3>

<p spaces-before="0">
  Slides are created by overlapping notes in time. For a pair of overlapping notes, the slide goes from the start of the first note to the start of the second. The overlapping part of the first note is discarded. See this image for an example:
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