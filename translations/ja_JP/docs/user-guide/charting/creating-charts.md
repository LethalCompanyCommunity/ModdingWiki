# 譜面の作成方法
---

?> もし動画による解説をご希望でしたら、NyxTheShield氏が配信した[生放送の録画](https://www.youtube.com/watch?v=ig27SlJveGs)をご覧ください。譜面作成のすべての工程を詳しく説明しています。

## 基本
### MIDIエディター / DAW
譜面はMIDIファイルを作成し、[MIDIコンバーター](#converting-midi-to-map-file)を使って変換することで作ることができます。

MIDIの音符(ノーツ)の高さはゲームに合わせて47～73の範囲である必要があります。<br>**注:** MIDIエディターによってはこの範囲でのピアノの数値が異なるかもしれません。

動作確認済みでフリーで使えるMIDIエディターには以下のようなものがあります:
- [Reaper](https://www.reaper.fm/download.php)* (対応する範囲: B2-C#5)
- [LMMS](https://lmms.io/download#windows) (対応する範囲: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (対応する範囲: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (対応する範囲: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (対応する範囲: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

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
  ノーマルノーツ
</h3>

<p spaces-before="0">
  ノーマルノーツはMIDIエディターで打ち込み、ゲーム内でも打ち込んだ時と同じように見えます。 ノーツとノーツの間には隙間を空けるようにしましょう。
</p>

<h3 spaces-before="0">
  スライドノーツ
</h3>

<p spaces-before="0">
  スライドはノーツを重ねることで作ることができます。 例えば、2つのノーツが重なっている場合、1つ目のノーツの先頭から2つ目のノーツの先頭までスライドします。 ただし、最初のノーツと重なる部分は消えます。 例としてこちらの画像をご覧ください:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="スライドノーツの例" />
</p>

<p spaces-before="0">
  もしノーツが終わっても次のノーツが同じタイミングで始まれば、その2つのノーツは繋がります。 これにより、スライドのカーブの開始位置を調整することができます。 こちらは複数のスライドを繋げた例:
</p>

<p spaces-before="0">
  (注: 最初の直線部分は曲線部分とは別のノーツであり、 ノーツの終了時間は次のノーツの開始時刻と同じになります)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="複数のスライドノーツの例" />
</p>

<h2 spaces-before="0">
  MIDIから譜面データへの変換
</h2>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://tc-chart-converter.github.io/">Trombone Champ Chart Converter</a>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      設定項目を入力してください:
    </p>
    <ul>
      <li>
        <code>Song Name</code> is the full name of the song, shown in the info when you select it in-game.
      </li>
      <li>
        <code>Short Name</code> 楽曲リストをスクロールするときに表示される名前で、 文字数が長いと表示テキストが縮小されます。文字数制限があるかは不明
      </li>
      <li>
        <code>Release Year</code> is the year the song was created.
      </li>
      <li>
        <code>Artist</code> is the composer of the song.
      </li>
      <li>
        <code>Beats per Bar</code> 拍子の線の間隔を決める。
      </li>
      <li>
        <code>Difficulty</code> 楽曲情報に表示される譜面の難易度を表す星マークの数です。
      </li>
      <li>
        <code>Note Spacing</code>  BPMと組み合わせて、演奏時のノーツの移動速度に影響します。
      </li>
      <li>
        <code>Folder Name</code> 作成した譜面と音源のデータを格納するフォルダの名前です。 例: Folder Nameを「my map」に設定すると譜面データのファイルパスはBepInEx/CustomSongs/my map/song.tmbになります。
      </li>
      <li>
        <code>Song Endpoint</code> 楽曲の終わりを示す拍子。 通常これは自動的に計算されますが、演奏終了画面が表示されたときに変更することが可能です。
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      OKを押す。 Create a folder with the same name as you entered in the <code>Folder Name</code> field, and save the file as <code>song.tmb</code> inside that folder.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      音源データはOGGファイル(.ogg)を使用します。 当記事執筆時点で音源の長さはSong Endpointよ当記事執筆時点で音源の長さはSong Endpointより長くあり必要があります。そうでない場合、楽曲が途中で止まってしまい最後まで演奏できなくなってしまいます。 Audacityなどのソフトウェアを使って、音源の最初に無音部分を挿入してMIDIに合わせることができます。 ファイル名: <code>song.ogg</code>
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <code>song.tmb</code>と同じフォルダにOGGファイルを入れる。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      テストプレイを行う際は<a href="installing-songs">カスタム音源の導入方法</a>をご参照ください。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">次は背景を追加だ！</a>
    </p>
  </li>
</ol>
