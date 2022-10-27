# MODの導入方法
---

?> もし動画による解説をご希望でしたら、VorgunTheBeta氏が投稿した[MODと創作譜面(音源)の導入方法を説明している動画](https://youtu.be/pSwNSGx-P5c)をご覧ください。(※英語).

?> このガイドの冒頭部分はLinuxとSteam Deckにも対応しています！ 詳しい内容については [このガイドの末尾](#linuxsteam-deck-specific-tips)をご確認ください。

## MODを導入するフォルダーを確認する
1. Steamのライブラリを開き、Trombone Champを右クリックする。 次に、`管理 > ローカルファイルを閲覧`を選択する。

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. 上部にあるアドレスバー左側のフォルダマークをクリックして、フォルダパスを選択した状態にする。 `CTRLキー`+`Cキー`を押してクリップボードにコピーする。

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## BepInEx(前提MOD)を導入する

1. まず初めにTromboneChampのフォルダに[BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)をダウンロードする。 BepinEx_x64_VERSION.zip (※VERSIONはBepinExのバージョン番号) が置かれているはずです。
2. ダウンロードしたzipファイルの内容をTromboneChamp.exeと同じフォルダに直接解凍してください。

![BepInEx Extraction Preview](../docs/files/bepinexextract.png)

BepInExの `x64` (64bit版)をダウンロードしたことをご確認ください。 `unix` および `x86` (32bit版)の場合、ゲームが正常に動作しない可能性があります。 これはLinuxとSteam Deckのユーザーにも当てはまります。

!> **重要:** 上記の画像のように、BepInExをTromboneChampのゲームフォルダに*"直接"*解凍してください。 正しく解凍できた場合、下記の画像のようになっているはずです。

![Finished BepinEx Install](../docs/files/finishedbepinex.png)

3. Trombone Champを一度起動するとBepInExのインストールが完了します。

## MODを導入する

BepInExがインストールされたら、特定のMODを入れることができるようになります。[Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)の`#mod-releases`チャンネルから配布されているMODのリストが確認できます。

創作譜面を導入することを想定して、まずここでは[TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest)を例に出して説明します。

1. [TromboneChampのゲームフォルダ](###finding-install-location) / `BepInEx`フォルダ / `plugins`フォルダの順に移動してください。

2. 上部にあるアドレスバー左側のフォルダマークをクリックして、フォルダパスを選択した状態にする。 `CTRLキー`+`Cキー`を押してクリップボードにコピーする。

![Copy Folder Path Preview](../docs/files/copyfolderpathplugins.png)

3. 拡張子が".dll"になっているMODファイルをpluginsフォルダにダウンロードしてください。

![Plugins Folder Preview](../docs/files/pluginswithtrombloader.png)

4. Trombone Champを一度起動するとMODのインストールが完了し、そのMODに必要なファイルが初期化されます。

## Linux/Steam Deckの場合
<details closed>
<summary>詳細を表示</summary>

The process of installing BepInEx is largely the same as on Windows listed above, however there are some extra things to be aware of first:

 - To follow the guide, Steam Deck users will need to switch to Desktop Mode by holding down the power button and selecting `Desktop Mode` from the menu.

 - Steam Deck users will need to install the game to the internal storage, as BepInEx will not load from the microSD card.

 - As stated earlier, you will still need to install the `x64` Windows version of BepInEx, not the `unix` version, as Trombone Champ is still a Windows application running under Proton.

 - Save and log files are stored in your Steam folder within Proton's compatibility folders.

    - On Steam Deck this can be found at: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - On other Linux flavors you can run `locate -r /Holy Wow$` from the terminal if you're unsure of where your Steam folder is.

You will also need to add `WINEDLLOVERRIDES="winhttp=n,b" %command%` to your game's launch options. To do this, right click the game in Steam and click `Properties`. Unlike on Windows, Proton won't load BepInEx's files unless specifically instructed to here.

![Steam Properties Preview](../docs/files/linuxsteamproperties.png)

Once added, BepInEx should now work! Install your mods [as instructed above](##installation) to get custom songs working.

### Video Backgrounds {docsify-ignore}

Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup. </details>

## 音源を導入する {docsify-ignore}

> Check out the [**Custom Songs guide**](installing-songs) for info on installing custom songs.