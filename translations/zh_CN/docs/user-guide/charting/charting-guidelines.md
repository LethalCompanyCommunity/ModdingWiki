# 谱面制作指导
---
以下内容仅为指导意见，并非绝对的硬性要求。 一切指导意见的最终目的都是制作一个游玩体验足够优秀的自制谱面。 如果忽略这些意见能够使你的谱面更有趣或者更具有吸引力（例如 Rush E），那么按照您自己的方式去制作即可。 编写者: tsunderestorm, StaticR.

## 游玩体验最佳化

- 保证note间距与难度相匹配
  - 通常情况下，note与note之间的间隔应该与note本身同长。
  - **正面示例**:
  - ![Ideal Note Spacing](../docs/files/charting/ideal-note-spacing.png)
  - **反面示例**: （这种排布虽然在自动演奏中可能会拥有较好的听感，但没有足够的时间空档让玩家抬手并点击下一个note。）
  - ![Bad Note Spacing](../docs/files/charting/bad-note-spacing.png)
  - 当遇到以下情形时，可不遵守此项：
    - 突出表达音调的[连续性](https://people.carleton.edu/~jellinge/m101s12/Pages/04/04Articulation.html)。
    - 在较快速的段落简化谱面以保持Combo。
    - 曲目的节奏较慢，以至于可以使用较紧凑的note排布。
- 请勿跑调。 如果您音感不佳，可以向#charting或#wip请求协助。
- 请注意节奏。 您可以在编辑谱面时适当减慢乐曲的速度以应对较快的节奏。
- 开始与结束应尽可能自然。
  - 在第一个note之前留出至少一个小节的空白距离，并保证你的谱面能持续到乐曲结束。
  - 在谱面的.tmb文件中调整谱面的结束点（endpoint）以确保结算画面不会过早出现。 结束点推荐设置在乐曲最后一个音结束到乐曲文件结束之间。不要设置在乐曲文件结束之后，会导致无法结算。
- 谱面节奏应足够直观。 如果一个note略微更长，这种长度区别在实际游玩时应该能被明显地辨认出。 短note同理。
  - **IDEAL**: (easy to see which are eighth notes and which are dotted eighth (3/16) notes)
  - ![Ideal Visual Rhythm](../docs/files/charting/ideal-visual-rhythm.png)
  - **NOT IDEAL**: (all notes read as eighth notes)
  - ![Bad Visual Rhythm](../docs/files/charting/bad-visual-rhythm.png)
- Use a reasonable `savednotespacing` (scroll speed) value
  - 120~200, depending on song complexity. A good guideline is `100/[BPM]*280`.
  - This should be fast enough for the rhythm to be visually intuitive and slow enough that the player has time to react.
  - This value does not have to be the same as the tempo!
- A note can be held for 4.5 seconds before running out of breath. If you have a note or slide longer than that, it's recommended to break it up so the player can catch their breath.
- Chords typically consist of 3-4 notes. The highest or lowest note usually sounds the cleanest to chart.

### Looping Tracks
- A few repetitions are fine, but avoid repeating the same note pattern over and over.
  - You can look for a TV version or edit it yourself if you want a shorter version of the song.
  - Generally, it flows best if you chart the easier or more expected parts in the first play, and switch to alternatives:
    - Often, there's a primary and secondary melody.
    - Follow the chords or bassline.
    - Play it in a different octave.
    - If you know what you're doing musically, use different chords or harmonies.
  - You may want to reverse this if the main part serves as a high point in the music. Musical high points typically fit best at around the last third or quarter of the entire track, so structuring a loop like that can make it feel more complete.
- Really short tracks are best looped until about 1 to 1:30 minutes, unless they are really repetitive.
- You may choose to add a full or partial loop if there are different parts to play in a section.
- Ending a track that endlessly loops can be hard. Suggestions:
  - End at the end without any loop back.
  - End at the first beat, chord, or section of the loop.
  - Fade the music out at the end of a musical phrase.

### Slides
- Avoid 90 degree slide angles.
  - **IDEAL**: (player has adequate time to change pitches. Depending on latency, you might want to adjust the position of the connecting points.)
  - ![Ideal Slide 1](../docs/files/charting/ideal-slide1.png)
  - **MAYBE IDEAL**: (only if a quick transition is absolutely necessary)
  - ![Ideal Slide 2](../docs/files/charting/ideal-slide2.png)
  - **NOT IDEAL**: (this is not humanly playable)
  - ![Bad Slide](../docs/files/charting/bad-slide.png)
- A slide approaches the target pitch before the slide end.
  - Make the end of the slide ~1-2 32nd notes late, depending on the length of the slide.
  - Start the slide about one 16th note before the target beat. It'll still be fine if half the note is a slide.
- For 8th note slides or shorter, you don't need to include a held note in the middle.
  - You often don't need a held note at the slide start, middle or end at all, unless you want the note to be clearly held for an 8th note or longer.
- Simplify slides for a consistent stream of notes going up or down.
  - Instead, you can just do one single slide and pull back the end point until the slide curve matches the notes.
  - Making each individual note part of the slide will make the slide very wobbly. You can make an exception if you specifically want the slide to look like this or the note shape is too complex to estimate with one slide.
- Vibrato or trill type slides work great if they connect in the middle of the note.
- Generally, slides are cleaner with fewer connecting points.
- In a very slide heavy track, setting the color to a solid color instead of a 2 color gradient could look way cleaner.
- If you want clean slides with a midi converter, use [TCCC](https://rshieldsprojects.github.io/projects/tccc/)'s custom slide method.
- Slides can only go 1 octave both up and down from the starting note. If you want a chart a slide that spans a greater range, you can break it up in between and/or find a place where you can start the slide towards the middle of the screen
- You can connect multiple notes at the same pitch as a slide. This plays as one continuous held note. This boosts combo count and champ meter extremely quickly, which may be useful for certain effects and gimmicks, but you wouldn't want to use it outside of that.
- Good slide timings seem to be about 2:1 to 5:1  (slide end late by about half to one 5th of the length of the slide)
  - 1:1 works too for things like trills or vibrato.
  - When in doubt, just putting the slide end a 32nd note late tends to work well for most slides.
- 2 16th notes or shorter connected work completely fine with only one slide, there doesn't need to be any held for it to sound ok, unless it is a very large jump.
- Slide ends don't need a held part, they're fine just ending a bit early (if the slide end is already delayed by the appropriate amount)

## Technical Requirements
- Don't just convert the .mp3 to .mid. This converts all the instruments, but we can only play one note at a time. Finding a MIDI online would also likely not work without a lot of editing.
- Have [beat](https://en.wikipedia.org/wiki/Beat_(music)#On-beat_and_off-beat) markers that line up with the background audio (unless the song has a varying tempo).
- Use an audio editing software like [Audacity](https://www.audacityteam.org/) to add/remove silence to the beginning of a song to help line up the audio file’s beats with the chart’s beats.
- Ensure that the chart is perfectly synced with the background audio.
- Use [AutoToot](https://github.com/TomDotBat/AutoToot) or [Boner Viewer](https://paturages.github.io/boner-viewer/) and listen if the notes are consistently early or late.
- Set a difficulty rating consistent with [TootTally](https://toottally.com/upload/).
- Avoid excessively long rest sections.
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
