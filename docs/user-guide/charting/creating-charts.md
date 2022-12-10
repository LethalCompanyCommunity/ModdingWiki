# Creating Charts
---

?> If you prefer video tutorials, NyxTheShield has [a stream archive](https://www.youtube.com/watch?v=ig27SlJveGs) that explains every step of the charting process in detail.

## Basics
### Midi Editor/DAW
Charts are made by creating a midi file and running them through a [MIDI converter](#converting-midi-to-map-file).

Midi notes should be in the range 47 to 73 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Some free, verified to work midi editors include:
- [Reaper](https://www.reaper.fm/download.php)* (Range: B3-C#5)
- [LMMS](https://lmms.io/download#windows) (Range: B3-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: B4-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: B4-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (Range: B2-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

<sub>*Full software is not free, but has a free trial that works for charting.</sub><br>
<sub>**Exports notes into MIDI track 2 by default, which makes it incompatible with Midi2TromboneChamp by default.</sub><br>
<sub>†The trial version of FL Studio doesn't allow you to export MIDI, but you can get around this by saving the project file and using [flp2midi](https://github.com/Kaydax/flp2midi/releases/latest).

#### Reaper Project
If you're not sure which editor to use, Reaper is recommended as there's a custom Trombone Champ project file that comes with:
- A basic explanation on how to use the controls of Reaper (in English)
- Preconfigured settings
- Example MIDI

The project can be [downloaded here](https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip).

### Normal Notes

Normal notes are created in the midi editor and look the same in-game. Make sure to leave a gap in time between notes!

### Slide Notes

Slides are created by overlapping notes in time. For a pair of overlapping notes, the slide goes from the start of the first note to the start of the second. The overlapping part of the first note is discarded. See this image for an example:

![Slide Note Example](../docs/files/slide1.png)

If a note ends but the next note starts at the exact same time, they will be connected. This allows you to adjust where the curve of a slide starts. Here's an example of multiple slides connected together:

(note: The first straight section is a separate note from the curved section. Its end time is the same as the next one's start time.)

![Multiple Slide Note Example](../docs/files/slide2.png)

## Converting Midi to Map File

?> There are two Midi converters available besides Midi2TromboneChamp!
<br>The process for these new converters is similar enough that this guide should still be usable.
<br>If you want to try a more up-to-date conversion program, feel free to give a new converter a try:
<br><br>[Midi2TromboneChamp (Unity Version)](https://nyxtheshield.github.io/Midi2TromboneChamp/) - a unity-based sequel to Midi2TromboneChamp.
<br>[Trombone Champ Chart Converter](https://rshieldsprojects.github.io/projects/tccc/) - a web-based alternative with new features.

1. Go to <https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest> and click `Midi2TromboneChamp.exe` to download it.

2. Run it. In the file selector it opens, select your midi file. Click Open.

3. Fill out the fields:
 - `Song Name` is the full name of the song, shown in the info when you select it in-game .
 - `Short Name` is shown while scrolling through the song list. Text gets smaller when the name is long so I'm not sure if there's a maximum length.
 - `Folder Name` is the name of the folder you will put your map and song file in. E.g. If you set Folder Name to my map, your map path will be BepInEx/CustomSongs/my map/song.tmb.
 - `Year` is the year the song was created.
 - `Author` is the composer of the song.
 - `Difficulty` is the number of difficulty stars that appear on the song's info.
 - `Note Spacing` affects how fast the level scrolls, in combination with BPM.
 - `Song Endpoint` is the beat on which the song ends. It is automatically calculated, but you can adjust it to change when the level end screen appears.
 - `Beats per Bar` determines how far apart the "beat lines" are.

4. Hit OK. In the file selector it opens, create a folder with the same name as you entered in the `Folder Name` field, and save the file as `song.tmb` inside that folder.

5. Your music track should be a .ogg file. At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file `song.ogg`.

6. Move the ogg file into the same folder as `song.tmb`.

7. Follow the [Custom Song Installation instructions](installing-songs) to test it.

8. [Add a background!](chart-backgrounds)