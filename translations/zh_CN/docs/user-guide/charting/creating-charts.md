# 长号冠军写谱教程
---

?> 如果您喜欢视频教程，NyxTheShield的 [直播回放](https://www.youtube.com/watch?v=ig27SlJveGs) 会详细解释自制谱过程的每一步。

## 基础
### Midi Editor/DAW
自制谱的制作需要创建Midi文件并使用[MIDI转换器](#converting-midi-to-map-file)进行转换。

Midi文件中的音符应该在48到72的范围内以匹配游戏。<br>**注意：**该范围在不同的编辑器上会使用不同的钢琴琴键范围。

一些免费可用的Midi编辑器包括：
- [Reaper](https://www.reaper.fm/download.php)* (对应琴键范围: C3-C5)
- [LMMS](https://lmms.io/download#windows) (对应琴键范围: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (对应琴键范围: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (对应琴键范围: C4-C6)

<sub>*完整版的软件并非免费，但只使用试用版依然可以完成谱面的制作。</sub><br> <sub>**默认情况下会导出到 Midi 轨道2，会导致无法使用Midi2TromboneChamp。</sub><br> <sub>†FL Studio的试用版无法直接输出Midi文件, 但你可以通过保存项目文件并使用 <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>来解决这个问题.</p>

<h4 spaces-before="0">
  Reaper 项目文件
</h4>

<p spaces-before="0">
  如果您不确定使用哪个编辑器，推荐尝试Reaper。有一个使用Reaper制作的Trombone Champ自制文件示例，其中包括：
</p>

<ul>
  <li>
    关于如何使用Reaper的基础教程（英文）
  </li>
  <li>
    预设设置
  </li>
  <li>
    示例MIDI文件
  </li>
</ul>

<p spaces-before="0">
  这个项目可以在 <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">这里</a>下载。
</p>

<h3 spaces-before="0">
  普通note
</h3>

<p spaces-before="0">
  普通的直线note可以直接在Midi编辑器中创建，并且在游戏中看起来是一样的。 请务必在note之间保留足够时间的空隙！
</p>

<h3 spaces-before="0">
  滑动note
</h3>

<p spaces-before="0">
  滑动note是由时间重叠Midi音符的方式创建的。 For a pair of overlapping notes, the slide goes from the start of the first note to the start of the second. The overlapping part of the first note is discarded. See this image for an example:
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