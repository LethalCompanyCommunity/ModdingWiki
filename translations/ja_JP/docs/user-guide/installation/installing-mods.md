# MODの導入方法
---

?> もし動画による解説をご希望でしたら、VorgunTheBeta氏が投稿した[MODとカスタム音源の導入方法を説明している動画](https://youtu.be/pSwNSGx-P5c)をご覧ください。(※英語)

?> このガイドの冒頭部分はLinuxとSteam Deckにも対応しています！ 詳しい内容については [このガイドの末尾](#linuxsteam-deck-specific-tips)をご確認ください。

## MODを導入するフォルダーを確認する
1. Steamのライブラリを開き、Trombone Champを右クリックする。 次に、`管理 > ローカルファイルを閲覧`を選択する。

![右クリックしたメニューのプレビュー](../docs/files/localfilescontext.png)

2. 上部にあるアドレスバー左側のフォルダマークをクリックして、フォルダパスを選択した状態にする。 `CTRLキー`+`Cキー`を押してクリップボードにコピーする。

![コピーしたフォルダパスのプレビュ](../docs/files/copyfolderpath.png)

## BepInEx(前提MOD)を導入する

1. まず初めにTromboneChampのフォルダに[BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)をダウンロードする。 BepinEx_x64_VERSION.zip (※VERSIONはBepinExのバージョン番号) が置かれているはずです。
2. ダウンロードしたzipファイルの内容をTromboneChamp.exeと同じフォルダに直接解凍してください。

![BepInExの解凍 プレビュー](../docs/files/bepinexextract.png)

BepInExの `x64` (64bit版)をダウンロードしたことをご確認ください。 `unix版` および `x86` (32bit版)の場合、ゲームが正常に動作しない可能性があります。 これはLinuxとSteam Deckのユーザーにも当てはまります。

!> **重要:** 上記の画像のように、BepInExをTromboneChampのゲームフォルダに*"直接"*解凍してください。 正しく解凍できた場合、下記の画像のようになっているはずです。

![BepinExのインストール完了](../docs/files/finishedbepinex.png)

3. Trombone Champを一度起動するとBepInExのインストールが完了します。

## MODを導入する

BepInExがインストールされたら、特定のMODを入れることができるようになります。[Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)の`#mod-releases`チャンネルから配布されているMODのリストが確認できます。

カスタム音源を導入することを想定して、まずここでは[TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest)を例に出して説明します。

1. [TromboneChampのゲームフォルダ](###finding-install-location) / `BepInEx`フォルダ / `plugins`フォルダの順に移動してください。

2. 上部にあるアドレスバー左側のフォルダマークをクリックして、フォルダパスを選択した状態にする。 `CTRLキー`+`Cキー`を押してクリップボードにコピーする。

![コピーしたフォルダパスのプレビュー](../docs/files/copyfolderpathplugins.png)

3. 拡張子が".dll"になっているMODファイルをpluginsフォルダにダウンロードしてください。

![プラグインフォルダのプレビュー](../docs/files/pluginswithtrombloader.png)

4. Trombone Champを一度起動するとMODのインストールが完了し、そのMODに必要なファイルが初期化されます。

## Linux/Steam Deckの場合
<details closed>
<summary>詳細を表示</summary>

BepInExの導入方法は上記のWindowsでのやり方とほぼ同じですが最初に注意すべき点がいくつかあります:

 - まずSteam Deckのユーザーはこのガイドに従うにあたって、Steam Deckの電源ボタンを長押し、電源メニューも表示させ、「デスクトップに切り替え」の項目を選択して `デスクトップモード` を立ち上げる必要があります。

 - Steam DeckのユーザーはmicroSDカードからBepInExが読み込まれないため、ゲームを内部ストレージにインストールする必要があります。

 - 前述の通り、Trombone ChampはProton環境下において動作するWindowsアプリケーションであるため、`unix版`ではなく`x64`のWindows版BepInExをインストールする必要があります。

 - セーブファイルやログファイルはProtonの互換フォルダ内のSteamフォルダに保存されます。

    - Steam Deckでは以下のようになります: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - 他のLinuxフレーバーではSteamフォルダの場所がわからない場合、ターミナルから `locate -r /Holy Wow` を実行してください。

また、ゲームの起動オプションに `WINEDLLOVERRIDES="winhttp=n,b" %command%` を追加する必要があります。 起動オプションに書き込みを行うには、SteamのライブラリにてTrombone Champを右クリックし、`プロパティ`をクリックして表示させます。 Windowsとは異なり、Steam Protonは起動オプションにて特に指示がない限り、BepInExのファイルを読み込むことはありません。

![Steam プロパティのプレビュー](../docs/files/linuxsteamproperties.png)

書き込むとBepInExが動作するようになります。 カスタム音源を動作させるには、[「MODを導入する」の説明に従って](##installation)Modをインストールしてください。

### もし譜面の背景が動画だった場合 {docsify-ignore}

カスタム音源の中には背景に動画を含むものがあり、Protonへの通常インストールでは正常に再生することができません。 もし動画を再生させたい場合は[ProtonUp-Qt](https://davidotek.github.io/protonup-qt/)を使用し、`GE-Proton`をインストールすることで可能になります。 これはいくつかの追加機能を含むProtonのバージョンです。 Valveが公式にサポートしていないビデオフォーマットを再生する機能が含まれています。

ProtonUp-Qtの使用方法と`GE-Proton`のインストール方法については、[GamingOnLinuxが作成したこちらのガイド](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/)を参照することをお勧めします。

!> 仮にGE-Protonを使用しても設定の仕方によっては動画の再生に問題が発生する場合があります。 </details>

## カスタム音源を導入する {docsify-ignore}

> カスタム音源の導入に関しては[**カスタム音源のガイド**](installing-songs)をご参照ください。