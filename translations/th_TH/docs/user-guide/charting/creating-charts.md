# การสร้างผัง
---

?> ถ้าคุณชอบวิธีแบบวีดีโอ NyxTheShield มี [บันทึกของสตรีม](https://www.youtube.com/watch?v=ig27SlJveGs) ที่อธิบายทุกขั้นตอนในการทำผังอย่างละเอียด

## พื้นฐาน
### ตัวตัดต่อ Midi/DAW
ผังสร้างได้จากการสร้างไฟล์ MIDI และรันผ่าน [MIDI converter](#converting-midi-to-map-file)

โน็ตของ MIDI ควรที่จะอยู่ระหว่างแนวที่ 48 ถึง 72 เพื่อที่จะตรงกับเกม <br>**โน็ต:** ตัวตัดต่อแต่ละตัวจะใช้ค่าของเปียนโนต่างกันกับแนวนี้

ตัวตัดต่อ Midi ที่ฟรีและทดสอบว่าใช้ได้มี:
- [Reaper](https://www.reaper.fm/download.php)* (แนวที่: C3-C5)
- [LMMS](https://lmms.io/download#windows) (แนวที่: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (แนวที่: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (แนวที่: C4-C6)

<sub>*ซอฟต์แวร์เต็มไม่ฟรีแต่มีใช้ทดอลงฟรีที่ทำผังได้</sub><br> <sub>**ส่งออกโน็ตไป MIDI จะได้ 2 รางโดยมาตราฐานซึ่งไม่สามารถใช้งานได้กับ Midi2TromboneChamp โดยมาตราฐาน</sub><br> <sub>†เวอร์ชั่นทดลองฟรีของ FL Studio ไม่ยอมให้คุณส่งออก MIDI แต่สามารถใช้วิธีอ้อมได้โดยบันทึกไฟล์โปรเจ็กและใช้ <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  โปรเจ็กของ Reaper
</h4>

<p spaces-before="0">
  ถ้าคุณไม่แน่ใจว่าจะใช้อะไร แนะนำให้ใช้ Reaper เพราะมันมีไฟล์โปรเจ็กดัดแปลงของ Trombone Champ มาให้:
</p>

<ul>
  <li>
    คำอธิบายพื้นฐานวิธีการใช้ตัวควบคุมของ Reaper (ในภาษาอังกฤษ)
  </li>
  <li>
    ตั้งค่าคอนฟิกที่กำหนดไว้แล้ว
  </li>
  <li>
    MIDI ตัวอย่าง
  </li>
</ul>

<p spaces-before="0">
  โปรเจ็กสามารถ<a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">ดาวน์โหลดได้ที่นี่</a>
</p>

<h3 spaces-before="0">
  โน็ตปกติ
</h3>

<p spaces-before="0">
  โน็ตปกติสร้างในตัวตัดต่อ Midi และดูเหมือนกันกับในเกม เอาให้แน่ใจว่ามันมีช่องว่างระหว่างโน็ตแต่ละตัว!
</p>

<h3 spaces-before="0">
  โน็ตสไลด์
</h3>

<p spaces-before="0">
  สไลด์สร้างจากการเอาโน็ตมาซ้อนกันตามเวลา สำหรับโน็ตที่ซ้อนกัน สไลด์เริ่มจากจุดเริ่มต้นโน็ตแรกถึงจุดเริ่มต้นโน็ตที่สอง จุดที่ซ้อนกันของโน็ตแรกจะถูกทิ้ง ดูภาพนี้เพื่อเป็นตัวอย่าง
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="ตัวอย่างโน็ตสไลด์" />
</p>

<p spaces-before="0">
  ถ้าโน็ตจบแต่โน็ตต่อไปเริ่มจุดเดียวกัน มันจะต่อกัน This allows you to adjust where the curve of a slide starts. Here's an example of multiple slides connected together:
</p>

<p spaces-before="0">
  (note: The first straight section is a separate note from the curved section. Its end time is the same as the next one's start time.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Multiple Slide Note Example" />
</p>

<h2 spaces-before="0">
  Converting Midi to Map File
</h2>

<p spaces-before="0">
  ?> There are two Midi converters available besides Midi2TromboneChamp! <br>Since they're still in beta, <strong x-id="1">they may have bugs</strong>, so this guide is still written for Midi2TromboneChamp. <br>The process for these new converters is similar enough that this guide should still be usable. <br>If you want to try a more up-to-date conversion program, feel free to give a new converter a try: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - a unity-based sequel to Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - a web-based alternative with new features.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> and click <code>Midi2TromboneChamp.exe</code> to download it.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Run it. In the file selector it opens, select your midi file. Click Open.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Fill out the fields:
    </p>
    <ul>
      <li>
        <code>Song Name</code> is the full name of the song, shown in the info when you select it in-game .
      </li>
      <li>
        <code>Short Name</code> is shown while scrolling through the song list. Text gets smaller when the name is long so I'm not sure if there's a maximum length.
      </li>
      <li>
        <code>Folder Name</code> is the name of the folder you will put your map and song file in. E.g. If you set Folder Name to my map, your map path will be BepInEx/CustomSongs/my map/song.tmb.
      </li>
      <li>
        <code>Year</code> is the year the song was created.
      </li>
      <li>
        <code>Author</code> is the composer of the song.
      </li>
      <li>
        <code>Difficulty</code> is the number of difficulty stars that appear on the song's info.
      </li>
      <li>
        <code>Note Spacing</code> affects how fast the level scrolls, in combination with BPM.
      </li>
      <li>
        <code>Song Endpoint</code> is the beat on which the song ends. It is automatically calculated, but you can adjust it to change when the level end screen appears.
      </li>
      <li>
        <code>Beats per Bar</code> determines how far apart the "beat lines" are.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Hit OK. In the file selector it opens, create a folder with the same name as you entered in the <code>Folder Name</code> field, and save the file as <code>song.tmb</code> inside that folder.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Your music track should be a .ogg file. At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file <code>song.ogg</code>.
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