# カスタム音源の導入方法
---
?> もし動画による解説をご希望でしたら、VorgunTheBeta氏が投稿した[MODとカスタム音源の導入方法を説明している動画](https://youtu.be/pSwNSGx-P5c)をご覧ください。(※英語)

!> **重要:** BepInExとTrombLoaderをインストールしていなければ[MODの導入方法](installing-mods)のページをご参照ください！

## カスタム音源を見つけよう

カスタム音源は[Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)の `#custom-charts` チャンネルで見つけることができます。

もっとコンパクトなリストをご希望でしたら、TheGlitched64氏が[すべての創作譜面の情報を含むスプレッドシート](https://docs.google.com/spreadsheets/d/1xpoUnHdSJFqOQEK_637-HCECYtJsgK91oY4dRuDMtik/edit?usp=sharing)を作ってくれました。

## カスタム音源を導入する

1. カスタム音源をダウンロードする。(大体は `.zip` の拡張子が付いているアーカイブファイル)

2. TrombLoaderをインストールした際に生成された`BepInEx内のCustomSongs`フォルダにアーカイブファイル(zip等)を直接解凍する。

![BepInExの解凍 プレビュー](../docs/files/customsongextract.png)

3. もし複数のフォルダが重なって[譜面データ、音源、背景データ]が入っていた場合、1つのフォルダにしてください。要確認。この例だと[譜面データ、音源、背景データ]は`BepinEx/CustomSongs/BakaMitai/`の下に置く必要があります。

![Correctの解凍 プレビュー](../docs/files/customsongcorrect.png)

### 譜面の作成方法 {docsify-ignore}

> 創作譜面を作るための情報は[**譜面の作成方法**](creating-charts)をご覧ください。