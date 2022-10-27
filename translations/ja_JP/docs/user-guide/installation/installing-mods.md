# MODの導入方法
---

?> もし動画による解説をご希望でしたら、VorgunTheBeta氏が投稿した[MODと創作譜面(音源)の導入方法を説明している動画](https://youtu.be/pSwNSGx-P5c)をご覧ください。(※英語).

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

書き込むとBepInExが動作するようになります。 Install your mods [as instructed above](##installation) to get custom songs working.

### Video Backgrounds {docsify-ignore}

Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup. </details>

## カスタム音源を導入する {docsify-ignore}

> カスタム音源の導入に関しては[**カスタム音源のガイド**](installing-songs)をご参照ください。