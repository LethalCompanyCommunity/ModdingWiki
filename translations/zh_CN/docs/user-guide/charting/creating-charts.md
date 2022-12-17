# 长号冠军写谱教程
---

?> 如果您喜欢视频教程，NyxTheShield的 [直播回放](https://www.youtube.com/watch?v=ig27SlJveGs) 会详细解释自制谱过程的每一步。

## 基础
### Midi Editor/DAW
自制谱的制作需要创建Midi文件并使用[MIDI转换器](#converting-midi-to-map-file)进行转换。

Midi文件中的音符应该在47到73的范围内以匹配游戏。<br>**注意：**该范围在不同的编辑器上会使用不同的钢琴琴键范围。

一些免费可用的Midi编辑器包括：
- [Reaper](https://www.reaper.fm/download.php)* ((对应琴键范围: B2-C#5)
- [LMMS](https://lmms.io/download#windows) ((对应琴键范围: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† ((对应琴键范围: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** ((对应琴键范围: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* ((对应琴键范围: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

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
  滑动note是由时间重叠Midi音符的方式创建的。 对于两个时间上有重叠的Midi音符，滑动note会从第一个音符的开头滑至第二个音符的开头。 其中第一个Midi音符的重叠部分会被丢弃。 示例请看此图：
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="滑动note示例" />
</p>

<p spaces-before="0">
  如果一个音符结束，但下一个音符正好同时开始，两个音符将会被连接。 由此您可以调整一个长滑动note中滑动部分的开始位置。 下面是多个滑动Note连接的示例：
</p>

<p spaces-before="0">
  （注：第一个直线note与后方的曲线部分是分开的， 它的结束时间与下一个音符的开始时间相同。)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="长滑动note示例" />
</p>

<h2 spaces-before="0">
  转换Midi文件为谱面文件
</h2>

<p spaces-before="0">
  ?> 除了Midi2TromboneChamp以外，还有两个Midi转换器可用！ <br>这些新转换器的使用流程足够相似，本指南仍然可以使用。 <br>如果您想尝试这些更新的转换程序，请看这里： <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp(Unity 版本)</a> - 一个使用Unity编写的Midi2TromboneChamp。 <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chapt Converter</a> - 一个有新功能的网页版转换器。
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      前往 <a href="https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/leases/leases/latest</a> 并点击 <code>Midi2TromboneChamp.exe</code> 进行下载。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      运行它。 在打开的文件选择其中选择你的Midi文件。 点击Open。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      填写谱面信息：
    </p>
    <ul>
      <li>
        <code>Song Name</code> 是歌曲的全名，当您在游戏中选择这个谱面时，这一条会显示在左上角。
      </li>
      <li>
        <code>Short Name</code> 该内容会显示在曲目滚动列表中. 名称过长时文本字号会相应变小，所以无法确定是否存在长度上限。
      </li>
      <li>
        <code>Folder Name</code> 是您用来存储谱面和歌曲文件的文件夹的名称。 举例： 如果您将文件夹名称设置为“我的自制谱”，您的自制谱路径将是 BepInEx/CustomSongs/我的自制谱/song.tmb。
      </li>
      <li>
        <code>Year</code>是曲目的创作年份。
      </li>
      <li>
        <code>Author</code> 是乐曲的作者。
      </li>
      <li>
        <code>Difficulty</code> 是歌曲信息上出现的难度星级。
      </li>
      <li>
        <code>Note Spacing</code> 影响游戏内note的移动速度，通常与BPM对应.
      </li>
      <li>
        <code>Song Endpoint</code> 是曲目结束时的节奏点。 这个值通常由软件自动计算，但是你可以调整这个数值来改变结算界面的出现时机。
      </li>
      <li>
        <code>Beats per Bar</code> 决定游玩谱面时屏幕上显示的节拍线之间的距离。
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      点击OK。 在出现的文件选择器中，创建一个与您输入的 <code>Folder Name</code> 字段相同的文件夹，并将文件命名为 <code>song.tmb</code>后放入文件夹中 。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      您的音乐应该是一个 .ogg 文件。 在填写谱面信息时，曲目的持续时间必须长于Song Endpoint中填写的时间点，否则谱面会卡住并永远无法结束。 您可以使用像Audacity这样的软件在音轨开始时插入一定时长的空白来将它与midi文件匹配。 将文件命名为<code>song.ogg</code>。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      移动ogg文件到与<code>song.tmb</code>相同的文件夹。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      按照 <a href="installing-songs">自制谱面安装说明</a> 来测试你的自制谱。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">添加背景！</a>
    </p>
  </li>
</ol>
