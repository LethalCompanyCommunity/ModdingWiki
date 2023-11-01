# Creating Charts
---

?> Якщо ви надаєте перевагу відеопосібникам — NyxTheShield має [архів стріму](https://www.youtube.com/watch?v=ig27SlJveGs) де детально пояснюється кожен крок процесу чартування.

## Основи
### Midi-редактор/DAW
Чарти зроблені шляхом створення midi файлу та їх конвертування через [MIDI конвертор](#converting-midi-to-map-file).

Midi notes should be in the range 47 to 73 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Деякі безкоштовні та перевірені Midi-редактори:
- [Reaper](https://www.reaper.fm/download.php)* (Range: B2-C#5)
- [LMMS](https://lmms.io/download#windows) (Range: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (Range: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

<sub>*Повна версія — не безкоштовна, але має безкоштовну пробну версію яка зійде для чартингу.</sub><br> <sub>**Експортує ноти у 2-ий трек MIDI за замовчуванням, що робить його несумісним з Midi2TromboneChamp.</sub><br> <sub>†Пробна версія FL Studio не дозволяє вам експортувати MIDI, але це можна обійти якщо зберегти проєкт та використати <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Reaper Project
</h4>

<p spaces-before="0">
  Якщо ви не впевнені з яким редактором працювати — рекомендується використати Reaper, тому, що є користувацький файл-проєкт Trombone Champ в якому включено:
</p>

<ul>
  <li>
    Основне пояснення як використовувати Reaper (англ.)
  </li>
  <li>
    Попередньо налаштовані параметри
  </li>
  <li>
    MIDI-приклад
  </li>
</ul>

<p spaces-before="0">
  Проєкт можна завантажити <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">тут</a>.
</p>

<h3 spaces-before="0">
  Звичайні ноти
</h3>

<p spaces-before="0">
  Звичайні ноти створені у Midi-редакторі які виглядають однаково в грі. Переконайтеся, що ви залишаєте проміжок часу між нотами!
</p>

<h3 spaces-before="0">
  Слайд-ноти
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

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://tc-chart-converter.github.io/">Trombone Champ Chart Converter</a>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Fill out the fields:
    </p>
    <ul>
      <li>
        <code>Song Name</code> is the full name of the song, shown in the info when you select it in-game.
      </li>
      <li>
        <code>Short Name</code> is shown while scrolling through the song list. Text gets smaller when the name is long so I'm not sure if there's a maximum length.
      </li>
      <li>
        <code>Release Year</code> is the year the song was created.
      </li>
      <li>
        <code>Artist</code> is the composer of the song.
      </li>
      <li>
        <code>Beats per Bar</code> determines how far apart the "beat lines" are.
      </li>
      <li>
        <code>Difficulty</code> is the number of difficulty stars that appear on the song's info.
      </li>
      <li>
        <code>Note Spacing</code> affects how fast the level scrolls, in combination with BPM.
      </li>
      <li>
        <code>Folder Name</code> is the name of the folder you will put your map and song file in. E.g. If you set Folder Name to my map, your map path will be BepInEx/CustomSongs/my map/song.tmb.
      </li>
      <li>
        <code>Song Endpoint</code> is the beat on which the song ends. It is automatically calculated, but you can adjust it to change when the level end screen appears.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Hit OK. Create a folder with the same name as you entered in the <code>Folder Name</code> field, and save the file as <code>song.tmb</code> inside that folder.
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
