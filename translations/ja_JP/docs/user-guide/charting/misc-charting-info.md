# その他の譜面作成に関する情報
---

## Note Color
If you want to change your note color, you can do that! Open up your `song.tmb` file in your favorite text editor, and add `note_color_start` and `note_color_end` arrays to the end.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Before ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// After ^
```
The color format is RGB1, the example above starts with black and turns into white. To convert to this format, use a color picker such as <https://rgbacolorpicker.com/> and get the RGB values of the colors you want. Let's say I want to use a nice deep purple that's `rgb(84, 14, 50)`. To use this, divide everything by `255` and put it in the array.
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