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
  - **正面示例**: （可以直观的分辨note的长短）
  - ![Ideal Visual Rhythm](../docs/files/charting/ideal-visual-rhythm.png)
  - **反面示例**: （所有note看起来长度相等）
  - ![Bad Visual Rhythm](../docs/files/charting/bad-visual-rhythm.png)
- 选择一个合适的 `savednotespacing` （滚动速度）。
  - 通常在120~200的区间内，取决于谱面的复杂程度。 推荐使用 `100/[BPM]*280`.
  - 理想的谱面的滚动速度，应该是能让谱面的节奏得以直观展现的同时，足以让玩家有时间对谱面作出反应。
  - 这个值不必与BPM相同！
- 一个长note的极限长度为4.5秒，超过这个时间会触发强制的换气惩罚。 推荐对超过这个时间的长note进行拆分以便玩家有时间换气。
- 和弦通常包含3到4个note。 选择最高或最低的note写入谱面，效果最好。

### 乐曲结构
- 允许存在一定的重复。但要避免同一个note排布过度反复地出现。
  - 选曲时，可以考虑选择TV版（如果有的话），或亲手编辑以获得较短版本的乐曲。
  - 通常情况下，在两个重复的段落中，首段采用较为简单或较为明显的部分来作谱，复段则采用其他部分，这类分配效果最好。
    - 一个乐曲段落通常由主副两段旋律（或多段）合成。
    - 尝试采用和弦或低音声部。
    - 高（或低）一个八度来演奏。
    - 如果您对您的乐感比较有自信，可以尝试自己编写合适的和声。
  - 应尽可能避免乐曲的高潮桥段出现的过早。 音乐高点通常最适合出现在整个曲目的最后三分之一或四分之一左右，照此调整整个乐曲的结构可以让乐曲显得更加完整。
- 较短的乐曲应该循环至1:00到1:30之间，除非重复性过高。
- 如果您对某个段落打算编写多个不同的排布，您可以选择对其添加一个完整或部分的循环。
- 对于一个无限循环的乐曲来说，可能会较难寻找结束点。 建议您：
  - 在单次循环结束时直接结束，不做任何循环。
  - 在循环的第一个节奏点，第一个和弦或第一个小节结束循环。
  - 在乐曲末尾添加淡出效果。

### 滑动（slide）note
- 避免出现接近90度的滑动操作。
  - **正面示例**: （玩家有足够的时间改变音高。 考虑到延迟，您可能需要调整滑动note连接点的位置。）
  - ![Ideal Slide 1](../docs/files/charting/ideal-slide1.png)
  - **可接受的示例**: （仅在有必要使用快速过渡时。）
  - ![Ideal Slide 2](../docs/files/charting/ideal-slide2.png)
  - **反面示例**: （不是人玩的东西-_-）
  - ![Bad Slide](../docs/files/charting/bad-slide.png)
- 滑动note的滑动部分到达目标音高的时间比滑动部分结束要提前一点。
  - 将滑动部分的结束点延后1~2/32音符的长度。
  - 滑动部分的起始点提前1/16音符。 适合滑动note中滑动部分占比超过一半的情况。
- 对于等于或短于1/8音符的滑动note，不建议滑动部分中间分段。
  - 一个滑动note可以不在开始，中途或结束保留任何非滑动部分。
- 简化滑动note，减少多余的波动。
  - 同方向的多段滑动可以合并为单个滑动，通过调整滑动部分结束点来与实际的音调匹配。
  - 一段滑动中每一个note都保留会使得滑动部分过于波动。 尽量避免这种情况，除非您有意为之或原曲音调过于复杂无法用单个滑动来表现。
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
