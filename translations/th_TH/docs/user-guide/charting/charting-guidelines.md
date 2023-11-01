# ข้อแนะนำการทำเพลง
---
ข้อแนะนำพวกนี้ไม่จำเป็นที่จะต้องทำตามก็ได้ จุดประสงค์ก็คือเพลงนั้นสนุกที่จะเล่น ถ้าเลือกที่จะไม่สนใจกฎก็ทำเพลงให้เล่นให้หรือน่าสนใจ (เช่น Rush E) ก็ยินดีที่จะให้ทำ เครดิต: tsunderestorm, StaticR.

## แบบอย่างที่ดี
- อย่าทำให้โน็ตเพี้ยน ถ้าคุณได้ยินระดับเสียงไม่ดี ถาม #charting หรือ #wip ให้มาช่วยดู
- อย่าทำให้ผิดจังหวะ คุณสามารถชะลอเพลงในตัวตัดต่อของคุณเพื่อช่วยแยกแยะจังหวะที่เร็วของเพลง
- อย่าเริ่มหรือหยุดเพลงกะทันหัน
  - ให้อย่างน้อยช่องว่างช่องหนึ่งก่อนโน็ตตัวแรกและทำเพลงต่อไปไปจนจบเพลง
  - ปรับ ความยาว/จุดจบของเพลง ถ้าผ้าม่านกำลังปิดก่อนที่เพลงจะหยุด อย่าตั้งจุดจบของเพลงใน tmb ยาวกว่าความยาวของเพลงไม่อย่างนั้นเพลงจะไม่หยุด
- โน็ตสามารถยาวได้ถึง 4.5 วินาทีกอนที่จะหมดลมหายใจ ถ้าคุณมีโน็ตหรือสไลด์ที่ยาวกว่านั้น แนะนำว่าให้แยกมันเพื่อให้ผู้เล่นมีเวลาหายใจ
- คอร์ดโดยทั่วไปประกอบด้วยโน็ต 3-4 ตัว โน็ตสูงสุดหรือต่ำสุดโดยปกติให้เสียงที่สะอาดที่สุดสำหรับเพลง
- Trombone Champ DOES support decimal BPMs. Trombone Charter, however, does not, so you will need to edit a decimal BPM into the .tmb another way.
- Avoid excessively long rest sections.

### Note Spacing
- รักษาระยะห่างของโน็ตให้เหมาะสมกับความยาก
  - นี่เป็นข้อแนะนำทั่วไป โน็ตและระยะห่างระหว่างโน็ตตัวต่อไปควรที่จะมีความยาวเท่ากัน
  - **ควร**:
  - ![Ideal Note Spacing](../docs/files/charting/ideal-note-spacing.png)
  - **ไม่ควร**: (นี่อาจจะให้เสียงดีสำหรับการดูตัวอย่างหรือใช้ autotoot แต่มันไม่ให้เวลาพอที่จะปล่อยและกฎโน็ตต่อไปสำหรับคนเล่น)
  - ![Bad Note Spacing](../docs/files/charting/bad-note-spacing.png)
  - คุณสามารถใช้ข้อยกเว้นได้เมื่อ:
    - เพื่อเน้น[การประกบ](https://people.carleton.edu/~jellinge/m101s12/Pages/04/04Articulation.html) เช่น การทอดเสียง การขาดตอน หรือ การเล่นค่อยๆโดยไม่ขาดเสียง
    - เพื่อทำให้การทำคอมโบง่ายขึ้นในส่วนเร็ว
    - ถ้าเกิดจังหวะเพลงนั้นช้าและช่องว่างที่แน่นเพียงพอ
- จังหวะเพลงควรที่จะมองเห็นได้ง่าย ถ้าโน็ตยาวกว่านิดหน่อยมันก็ควรที่จะเห็นยาวกว่านิดหน่อย ถ้าโน็ตสั้นกว่านิดหน่อยมันก็ควรที่จะเห็นสั้นกว่านิดหน่อย
  - **ควร**: (เห็นได้ง่ายว่าตัวไหนเป็นโน็ตตัวสั่นและตัวไหนเป็นโน้ตประจุด (3/16))
  - ![Ideal Visual Rhythm](../docs/files/charting/ideal-visual-rhythm.png)
  - **ไม่ควร**: (โน็ตทุกตัวเป็นโน็ตตัวสั่น)
  - ![Bad Visual Rhythm](../docs/files/charting/bad-visual-rhythm.png)
- ใช้ค่า `savednotespacing` (ความเร็วของการเลื่อน) ให้เหมาะสม
  - 120~200 ขึ้นอยู่กับความซับซ้อนของเพลง แนวทางที่ดีคือ `100/[BPM]*280`
  - นี่ควรเร็วพอที่ทำให้จังหวะเห็นได้ง่ายและช้าพอที่ให้ผู้เล่นมีเวลาที่จะตอบสนอง
  - ค่านี้ไม่จำเป็นที่จะต้องเหมือนกับจังหวะ!

### สไลด์
- หลีกเลี่ยงสไลด์ที่ 90 องศา
  - **ควร**: (ผู้เล่นมีเวลาเพียงพอในการเปลี่ยนความสูงต่ำ ขึ้นอยู่กับความหน่วง คุณอาจต้องการที่จะปรับที่อยู่ของจุดเชื่อมต่อ)
  - ![Ideal Slide 1](../docs/files/charting/ideal-slide1.png)
  - **อาจจะได้**: (เฉพาะการเปลี่ยนอย่างรวดเร็วนั้นจำเป็นอย่างมาก)
  - ![Ideal Slide 2](../docs/files/charting/ideal-slide2.png)
  - **ไม่ควร**: (มนุษย์ไม่สามารถเล่นสิ่งนี้ได้)
  - ![Bad Slide](../docs/files/charting/bad-slide.png)
- สไลด์เข้าใกล้ระดับเสียงเป้าหมายก่อนที่จะจบสไลด์
  - ทำจุดจบของสไลด์ที่ 1-2 เป็นโน้ตสามสิบวินาทีล่าช้าขึ้้นอยู่กับความยาวของสไลด์
  - เริ่มสไลด์ที่โน้ตตัวที่สิบหกก่อนที่จะถึงจังหวะ มันจะยังโอเคอยู่ถ้าครึ่งของโน็ตเป็นสไลด์
- สำหรับโน็ตตัวที่แปดหรือสั้นกว่าคุณไม่จำเป็นที่จะต้องใส่โน็ตกั้กตรงกลาง
  - โดยส่วนมากคุณไม่จำเป็นที่จะต้องใช้โน็ตกั้กที่จุดเริ่ม, ตรงกลาง, หรือจุดจบเว้นแต่ว่าคุณอยากได้โน็ตกั้กที่เห็นชัดเจนสำหรับโน็ตตัวที่แปดหรือยาวกว่า
- When charting runs, simplify slides for a consistent stream of notes going up or down.
  - Instead, you can just do one single slide and pull back the end point until the slide curve matches the notes.
  - Making each individual note part of the slide will make the slide very wobbly. You can make an exception if you specifically want the slide to look like this or the note shape is too complex to estimate with one slide.
- Vibrato or trill type slides work great if they connect in the middle of the note.
- Generally, slides are cleaner with fewer connecting points.
- In a very slide heavy track, setting the color to a solid color instead of a 2 color gradient could look way cleaner.
- If you want clean slides with a midi converter, use [TCCC](https://rshieldsprojects.github.io/projects/tccc/)'s custom slide method.
- Slides can only go 1 octave both up and down from the starting note. If you want a chart a slide that spans a greater range, you can break it up in between and/or find a place where you can start the slide towards the middle of the screen.
- You can connect multiple notes at the same pitch as a slide. This plays as one continuous held note. This boosts combo count and champ meter extremely quickly, which may be useful for certain effects and gimmicks, but you wouldn't want to use it outside of that.
- Good slide timings seem to be about 2:1 to 5:1  (slide end late by about half to one 5th of the length of the slide)
  - 1:1 works too for things like trills or vibrato.
  - When in doubt, just putting the slide end a 32nd note late tends to work well for most slides.
- 2 16th notes or shorter connected work completely fine with only one slide, there doesn't need to be any held for it to sound ok, unless it is a very large jump.
- Slide ends don't need a held part, they're fine just ending a bit early (if the slide end is already delayed by the appropriate amount)

### Tap Notes
- Tap notes or dot notes are notes that show up as a single dot on screen.
- You can create tap notes by setting the note duration to be 0.06 or below.
  - The exact value you choose affects how many points the note will give and how wide of a time window the user has to hit the note. For this reason, it is recommended to always set tap note values to 0.06 for maximum ease of playability.
- Note that for most users, tap notes tend to be very difficult to accurately hit. Ideally, tap notes should only be used in places where the spacing does not allow for short held notes to be used instead.

### แทร็กวนซ้ำ
- วนซ้ำนิดหน่อยไม่เป็นไรแต่หลีกเลี่ยงวนซ้ำโน็ตไปเรื่อยๆ
  - คุณสามารถหาเวอร์ชั่นทีวีหรือตัดต่อด้วยตัวเองถ้าคุณยากได้เพลงที่สั้นลง
  - โดยทั่วไป มันไปได้ดีถ้าคุณทำเพลงที่ง่ายหรือส่วนที่คาดไว้มากในการเล่นครั้งแรก และเลี่ยนไปเป็นอย่างอื่น
    - มันมีทำนองหลักและทำนองรองบ่อยครั้ง
    - ไปตามกับคอร์ดหรือเบสไลน์
    - เล่นอ็อกเทฟที่ต่างกัน
    - ถ้าคุณรู้ว่ากำลังกำลังทำอะไรในทางดนตรี ใช้คอร์ดหรือฮาร์โมนีอย่างอื่น
  - คุณอาจอยากที่จะห้วนกลับถ้าส่วนหลักเป็นจุดสูงสุดของเพลง จุดสูงสุดทางดนตรีส่วนใหญ่เหมาะสมที่สุดที่ส่วนที่สามหรือสี่ของเพลง เพราะอย่างนั้นสร้างจุดซ้ำที่ทำให้ดูสมบรูณ์มากขึ้น
- เพลงที่สั้นมากจะวนซ้ำได้ดีจนกระทั่ง 1 ถึง 1:30 นาที เว้นแต่ว่ามันซ้ำซากจริงๆ
- คุณสามารถที่จะเลือกที่จะเพิ่มจุดซ้ำแบบเต็มหรือบางส่วน ถ้ามันเล่นต่างกันของส่วนในแต่ละส่วน
- จบเพลงที่วนซ้ำไปเรื่อยๆอาจจะยาก คำแนะนำ:
  - จบที่จุดจบโดยไม่มีการซ้ำ
  - จบที่จังหวะ, คอร์ด, หรือส่วนแรกของการซ้ำ
  - ทำให้เพลงเลือนหายไปที่ตอนท้ายของดนตรี

## Technical Requirements
- Don't just convert the .mp3 to .mid. This converts all the instruments, but we can only play one note at a time. Finding a MIDI online would also likely not work without a lot of editing.
- Have [beat](https://en.wikipedia.org/wiki/Beat_(music)#On-beat_and_off-beat) markers that line up with the background audio (unless the song has a varying tempo).
- Use an audio editing software like [Audacity](https://www.audacityteam.org/) to add/remove silence to the beginning of a song to help line up the audio file’s beats with the chart’s beats.
- Ensure that the chart is perfectly synced with the background audio.
- Use [AutoToot](https://github.com/TomDotBat/AutoToot) or [Boner Viewer](https://paturages.github.io/boner-viewer/) and listen if the notes are consistently early or late.
- Set a difficulty rating consistent with [TootTally](https://toottally.com/upload/).
- Have a relevant background. A static PNG background is OK.
- Have good visual contrast between the notes and the background.
- If necessary, reduce the loudness of the song (via Audacity, etc.) so that the trombone sound can be clearly heard over the background track.
  - -15dB LUFS is a good starting point and the default export setting in the reaper template.

### File Specifications
- Follow this archive format: `[mychart].zip/[mychart]/[files]`
- Double check for invalid metadata in the .tmb file
  - `trackref` should be unique and not something like `"trackref"="trombone_charter_x64"`.
  - Check that the [json is valid](https://jsonformatter.curiousconcept.com/#).
- Use h.264 as the video codec for maximum compatibility.
- Have an appropriate video file size (target 10MB per minute of song)
  - Use a tool like [Handbrake](https://handbrake.fr/) to reencode video.
  - Use two-pass encoding with a target bitrate of 1333kbps to eliminate any guesswork.
  - Remove the audio track entirely.
