# Chart Troubleshooting
---

Trying to make a chart but something's going wrong? Check if your problem is solved here.

### My chart won't start in Trombone Champ! I can control the Tromboner but I can't pause

Issues like this are usually related to your `song.ogg` file. Ensure that you have a `song.ogg`, and that it is longer than your chart file. Add a few seconds of silence to the end of `song.ogg` if necessary.

### My chart freezes at the end or part way through and I can't pause, but I can still control the tromboner

See above (My chart won't start in Trombone Champ!)

### I hit a certain note, Trombone Champ lagged or froze, the song ended and now I have -3 billion toots?? (or Autotoot got an F/score of 0)

This is likely due to a small ghost note hiding in the spot where the game froze. Check your MIDI file for a note hiding under the note you want in the chart, or check that spot for something funky in Trombone Charter/BonerViewer. Sometimes it will show up in one program but not another.
Play the broken chart again and you can get your toots back.
In old versions of Trombone Champ, this was similar to an issue with tap notes. Check if you're up to date!

### Certain spots in my chart always break combo, even when Autotoot plays it

Check for ghost notes hiding under your main notes in those spots! Check your MIDI, Trombone Charter, and/or BonerViewer. They may show up with one program but not another.
Remember that autotoot isn't perfect. You can change some of the settings in its config file to try to make it more accurate, but sometimes it just can't keep up with very fast notes.

### My chart doesn't show up in the track list

Ensure that your chart has a unique `trackref`. Open the tmb file with notepad, press Ctrl+F, and search for `trackref`. If the `trackref` value is something not unique (e.g. `trombonecharter_x64` or a common song name), change it to something that won't be confused with another chart.
If you are concerned that you may have multiple charts installed with duplicate trackrefs, you can try running [Guardie's trackref duplicate finder](https://github.com/Guarde/TrackRef-Checker/releases/latest) in your customsongs folder.

### My chart background is small and has a gray border around it

Ensure that your background has dimensions of 1920 x 1080.

### My chart background doesn't show up at all

Ensure that your background is named `bg.png` (if it's an image), `bg.mp4` (if it's a video), or `bg.trombackground` (if it's a TromBackground)

### I'm still having problems

If you are still having problems, you may want to consider asking for help in the Trombone Champ Modding Discord server. Be prepared to send the `LogOutput.log` file from your BepInEx folder so we can take a look at what happened when the game broke.
