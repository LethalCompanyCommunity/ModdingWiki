# ข้อมูลผังอย่างอื่น
---

## สีของโน็ต
ถ้าคุณอยากเปลี่ยนสีโน็ตคุณสามารถทำได้! เปิดไฟล์ `song.tmb` ของคุณกับโปรแกรมแก้ไขข้อความและใส่ `note_color_start` กับ `note_color_end` แถวส่วนท้าย
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// ก่อน ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// หลัง ^
```
รูปแบบสีคือ RGB1 ตัวอย่างข้างบนเริ่มจากดำและเปลี่ยนไปเป็นสีขาว เพื่อแปลงเป็นรูปแบบนี้ใช้ตัวเลือกสี เช่น <https://rgbacolorpicker.com/> และเอาค่า RGB ของสีที่คุณอยากได้ เอาเป็นว่าฉันอยากได้สีม่วงดำจะเป็น `rgb(84, 14, 50)` ใช้นี้หารทุกตัวด้วย `255` และใส่ในแถว
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