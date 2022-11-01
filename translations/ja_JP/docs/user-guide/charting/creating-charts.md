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
  ?> Midi2TromboneChamp以外に2つのMIDIコンバーターが用意されています！ <br>しかしまだベータ版のため、<strong x-id="1">バグがあるかもしれません</strong>。そのためこのガイドではまだMidi2TromboneChampをメインに書いています。 <br>これらのMIDIコンバーターの使用方法は似たような感じなのでこのガイドをそのまま参考にすることができます。 <br>もし最新の変換プログラムを試したい場合は、新しいコンバーターを気軽に試してみてください: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - Unityをベースに作成されたブラウザ版Midi2TromboneChamp <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - 新機能を搭載したウェブベースのコンバーター
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> に移動し、<code>Midi2TromboneChamp.exe</code> をクリックしてダウンロードしてください。
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      起動し、 ファイル選択画面が開くのでMIDIファイル(.mid)を選択します。 「開く」をクリック
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      設定項目を入力してください:
    </p>
    <ul>
      <li>
        <code>Song Name</code> 楽曲のフルネームで、ゲーム内の選曲画面で選択すると楽曲情報に表示される。
      </li>
      <li>
        <code>Short Name</code> 楽曲リストをスクロールするときに表示される名前で、 文字数が長いと表示テキストが縮小されます。文字数制限があるかは不明
      </li>
      <li>
        <code>Folder Name</code> 作成した譜面と音源のデータを格納するフォルダの名前です。 例: Folder Nameを「my map」に設定すると譜面データのファイルパスはBepInEx/CustomSongs/my map/song.tmbになります。
      </li>
      <li>
        <code>Year</code> 使用した楽曲が作成された年
      </li>
      <li>
        <code>Author</code> 使用した楽曲の作曲者名
      </li>
      <li>
        <code>Difficulty</code> 楽曲情報に表示される譜面の難易度を表す星マークの数です。
      </li>
      <li>
        <code>Note Spacing</code>  BPMと組み合わせて、演奏時のノーツの移動速度に影響します。
      </li>
      <li>
        <code>Song Endpoint</code> 楽曲の終わりを示す拍子。 通常これは自動的に計算されますが、演奏終了画面が表示されたときに変更することが可能です。
      </li>
      <li>
        <code>Beats per Bar</code> 拍子の線の間隔を決める。
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      OKを押す。 ファイル選択画面で<code>Folder Name</code>で入力した同じ名前のフォルダを作成し、その中に<code>song.tmb</code>という名前で保存
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      音源データはOGGファイル(.ogg)にする必要があります。 At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file <code>song.ogg</code>.
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