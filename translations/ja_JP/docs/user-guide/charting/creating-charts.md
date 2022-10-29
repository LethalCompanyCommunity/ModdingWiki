# 譜面の作成方法
---

?> もし動画による解説をご希望でしたら、NyxTheShield氏が配信した[生放送の録画](https://www.youtube.com/watch?v=ig27SlJveGs)をご覧ください。譜面作成のすべての工程を詳しく説明しています。

## 基本
### MIDIエディター / DAW
譜面はMIDIファイルを作成し、[MIDIコンバーター](#converting-midi-to-map-file)を使って変換することで作ることができます。

MIDIの音符(ノーツ)の高さはゲームに合わせて48～72の範囲である必要があります。<br>**注:** MIDIエディターによってはこの範囲でのピアノの数値が異なるかもしれません。

動作確認済みでフリーで使えるMIDIエディターには以下のようなものがあります:
- [Reaper](https://www.reaper.fm/download.php)* (対応する範囲: C3-C5)
- [LMMS](https://lmms.io/download#windows) (対応する範囲: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (対応する範囲: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (対応する範囲: C4-C6)

<sub>*有料バージョンもありますが無料のままでも譜面の作成に使えます。</sub><br> <sub>**既定のままだとMIDIトラック2にノーツを書き出すため、Midi2TromboneChampとの互換性がありません。</sub><br> <sub>FL Studioの体験版ではMIDIの書き出しは出来ませんがプロジェクトデータを保存し、<a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a> を使用することで回避できます。</p>

<h4 spaces-before="0">
  Reaperでのプロジェクト
</h4>

<p spaces-before="0">
  MIDIエディターどれを使えばいいのかわからない、と思っていたら「Reaper」がオススメです！なんと譜面作成の参考になるプロジェクトファイルも配布しています。
</p>

<ul>
  <li>
    Reaperの基本的な操作の説明 (ただし英語)
  </li>
  <li>
    作りやすいようにあらかじめ設定が変更済み
  </li>
  <li>
    MIDIの例
  </li>
</ul>

<p spaces-before="0">
  プロジェクトファイルは<a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">こちらからダウンロード</a>
</p>

<h3 spaces-before="0">
  普通のノーツ
</h3>

<p spaces-before="0">
  通常のノーツはMIDIエディターで作成され、ゲーム内でも同じように見えます。 ノーツとノーツの間には隙間を空けるようにしましょう。
</p>

<h3 spaces-before="0">
  スライドするノーツ
</h3>

<p spaces-before="0">
  スライドはノーツを重ねることで作ることができます。 例えば、2つのノーツが重なっている場合、1つ目のノーツの先頭から2つ目のノーツの先頭までスライドします。 ただし、最初のノーツと重なる部分は消えます。 例としてこちらの画像をご覧ください:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Slide Note Example" />
</p>

<p spaces-before="0">
  もしノーツが終わっても次のノーツが同じタイミングで始まれば、その2つのノーツは繋がります。 これにより、スライドのカーブの開始位置を調整することができます。 こちらは複数のスライドを繋げた例:
</p>

<p spaces-before="0">
  (注: 最初の直線部分は曲線部分とは別のノーツであり、 ノーツの終了時間は次のノーツの開始時刻と同じになります)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Multiple Slide Note Example" />
</p>

<h2 spaces-before="0">
  MIDIから譜面データへの変換
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