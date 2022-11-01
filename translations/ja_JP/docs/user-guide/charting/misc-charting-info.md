# その他の譜面作成に関する情報
---

## ノーツの色設定
楽曲の雰囲気に合わせてノーツの色を変更したいって思いませんか？...なんと出来ます！ `song.tmb` をお気に入りのテキストエディタ(Notepad++やIntelliJ IDEA等)で開き、 `note_color_start` と `note_color_end` を以下のように配列の末尾に追加してください。
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// 追加前 ↑
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// 追加後 ↑
```
色の表示はRGB1で、上記の例では黒から白に変わります。 このような数値にするには <https://rgbacolorpicker.com/> などのカラーピッカーを利用し、使用する色をRGB値で取得します。 それでは試しに、`rgb(84, 14, 50)` のような素敵な深みのある紫色を使いたいと仮定しましょう。 To use this, divide everything by `255` and put it in the array.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Now the notes will both end and start with that deep purple color!


## Other .trombackground Info

### Render Over Tromboner
If you're making a `.trombackground`, you can render OVER the tromboner by setting your Camera's depth to 1

### Add Tromboner In Scene
If you're making a `.trombackground` and want to move around the player, add the `Prefabs/Tromboner` prefab to your background.

Once the game is loaded, it'll be replaced with an exact clone of the player.

You can also change the player model & trombone skin if you don't want it to look exactly like the player.

(Use in conjunction with the depth render tip above to completely change how the tromboner is rendered!)