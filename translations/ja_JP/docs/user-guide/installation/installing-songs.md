# カスタム音源の導入方法
---
?> If you prefer video tutorials, Rayanne has [a video explaining how to install mods and custom songs](https://youtu.be/6msFI8Sz1UQ).

!> **IMPORTANT:** Make sure you've followed the [mod installation guide](installing-r2modman) to install BepInEx and TrombLoader before continuing!

## カスタム音源を見つけよう

カスタム音源は[Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)の `#custom-charts` チャンネルで見つけることができます。

もっとコンパクトなリストをご希望でしたら、TheGlitched64氏が[すべての創作譜面の情報を含むスプレッドシート](https://docs.google.com/spreadsheets/d/1xpoUnHdSJFqOQEK_637-HCECYtJsgK91oY4dRuDMtik/edit?usp=sharing)を作ってくれました。

## カスタム音源を導入する

1. カスタム音源をダウンロードする。(大体は `.zip` の拡張子が付いているアーカイブファイル)

2. Extract the contents of the archive file directly into the `BepInEx/CustomSongs` folder in the r2modman profile directory.

![BepInExの解凍 プレビュー](../docs/files/customsongextract.png)

3. もし複数のフォルダが重なって[譜面データ、音源、背景データ]が入っていた場合、1つのフォルダにしてください。要確認。この例だと[譜面データ、音源、背景データ]は`BepinEx/CustomSongs/BakaMitai/`の下に置く必要があります。

![Correctの解凍 プレビュー](../docs/files/customsongcorrect.png)

### 譜面の作成方法 {docsify-ignore}

> 創作譜面を作るための情報は[**譜面の作成方法**](creating-charts)をご覧ください。