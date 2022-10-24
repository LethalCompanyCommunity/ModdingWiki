# 其他自制谱信息
---

## Note颜色
如果您愿意，您可以改变游戏中note的颜色。 在您最喜欢的文本编辑器（例如记事本）中打开您的 `song.tmb` 文件，并添加 `note_color_start` 和 `note_color_end` 数组到结尾。
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// 添加前 ↑
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// 添加后 ↑
```
颜色格式是 RGB1，上面的示例以黑色开始，结尾变成白色。 若要转换到此格式，请使用诸如 <https://rgbacolorpicker.com/> 等颜色选择器并获取您想要的颜色的 RGB 值。 例如说我想使用一个很漂亮的深紫色，这个紫色的RGB值为`rgb(84, 14, 50)`。 要使用这个数值，需要将3个数字全部除以 `255`，并将结果放入数组。
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
现在note将以那种深紫色的颜色作为开头！


## 其他 .trombackground 信息

### 覆盖Tromboner
如果你制作了一个 `.trombackground`, 你可以通过将你的摄像头深度设置为 1 来覆盖掉游戏原本的Tromboner（画面右侧的人物）。

### 在场景中添加Tromboner
If you're making a `.trombackground` and want to move around the player, add the `Prefabs/Tromboner` prefab to your background.

Once the game is loaded, it'll be replaced with an exact clone of the player.

You can also change the player model & trombone skin if you don't want it to look exactly like the player.

(Use in conjunction with the depth render tip above to completely change how the tromboner is rendered!)