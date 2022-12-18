# Charting Guidelines
---
The following guidelines are not absolute requirements. The goal is to make a chart that's fun to play. If ignoring these rules make a chart more enjoyable or engaging (e.g. Rush E), you are welcome to do so. Credit to tsunderestorm for writing most of these guidelines.

## Best Practices

- Maintain note spacing appropriate for the difficulty
  - As a very general guideline, the note and space between it and the next note should be of equal length
  - IDEAL:
  - ![Ideal Note Spacing](../docs/files/charting/ideal-note-spacing.png)
  - NOT IDEAL: (this might sound good in preview or autotoot but does not provide much time for a player to release and hit the next note)
  - ![Bad Note Spacing](../docs/files/charting/bad-note-spacing.png)
  - You may make exceptions:
    - to emphasize [articulation](https://people.carleton.edu/~jellinge/m101s12/Pages/04/04Articulation.html) like slurs, staccato, or legato
    - to make it easier to maintain combo on very fast sections
    - if the song tempo is very slow and a tight spacing is adequate
- Do not be off-key. If you have a poor sense of tone, ask #charting or #wip to take a look.
- Do not be off-beat. You can slow the song down in your editor to help distinguish faster rhythms.
- Do not start nor end abruptly
  - Give at least one bar of rest before the first note, and continue your chart until the end of the song.
  - Adjust the length / song endpoint if the curtains are closing slightly before the background track ends. Do not to set the song endpoint in the tmb to be longer than the song length, or the song won't end.
- Avoid repeating the same note pattern over and over.
  - This mostly stems from song choice. When choosing a song to chart, don’t just listen to the lyrics, but also pay attention to the melody.
  - You can look for TV version or edit it yourself if you want a shorter version of the song.
  - Adding slides, notes/sections from other instruments can make it more interesting to play.
- The rhythm should be visually intuitive. If notes are slightly longer, they should be slightly longer visually. If notes are slightly shorter, they should be slightly shorter visually.
  - IDEAL: (easy to see which are eighth notes and which are dotted eighth (3/16) notes)
  - ![Ideal Visual Rhythm](../docs/files/charting/ideal-visual-rhythm.png)
  - NOT IDEAL: (all notes read as eighth notes)
  - ![Bad Visual Rhythm](../docs/files/charting/bad-visual-rhythm.png)
- Use a reasonable `savednotespacing` (scroll speed) value
  - 120~200, depending on song complexity. A good guideline is `100/[BPM]*280`.
  - This should be fast enough for the rhythm to be visually intuitive and slow enough that the player has time to react.
  - This value does not have to be the same as the tempo!

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
  - -6db normalization is a good starting point for most modern music.

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
