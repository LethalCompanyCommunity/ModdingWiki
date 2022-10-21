# Charts erstellen
---

?> Wenn du Video-Tutorials bevorzugst, hat NyxTheShield [ein Stream-Archiv](https://www.youtube.com/watch?v=ig27SlJveGs) dass jeden Schritt dieses Prozesses genau erklärt.

## Grundlagen
Charts werden erschaffen, wenn man eine midi Datei erstellt und sie mit dem Programm [Midi2TromboneChamp](https://github.com/NyxTheShield/Midi2TromboneChamp) konvertiert.

Einige kostenlose, überprüfte Midi-Editoren beinhalten:
- [LMMS](https://lmms.io/)
- [FL Studio (kostenloser Test)](https://www.image-line.com/fl-studio-download/)

?> Die Testversion von FL Studio erlaubt dir nicht MIDI zu exportieren, allerdings kann man dies umgehen, indem Sie die Projektdatei speichern und [flp2midi](https://github.com/Kaydax/flp2midi) verwenden.

Midi Noten sollten zwischen 48 und 72 sein um mit dem Spiel übereinzustimmen. Alle Noten außerhalb dieses Bereichs werden einfach zu 48 oder 72.

### Normale Noten

Normale Noten werden im Midi Editor erstellt und sehen im Spiel gleich aus. Achte darauf, immer einen kleinen Abstand zwischen den Noten zu lassen!

### "Slide" Noten

"Slides" werden erstellt, wenn man Noten überlappt. Bei einem Paar überlappender Noten geht der "Slide" vom Anfang der ersten Note zum Anfang der zweiten Note. Der überlappende Teil der ersten Note wird verworfen. Siehe dir dieses Bild für ein Beispiel an:

![Slide Note Example](../docs/files/slide1.png)

Wenn eine Note genau da endet, wo die nächste Note beginnt, werden sie verbunden. So können Sie anpassen, wo die Kurve eines "Slides" beginnt. Hier ist ein Beispiel bei dem mehrere "Slides" verbunden sind:

(note: The first straight section is a separate note from the curved section. Its end time is the same as the next one's start time.)

![Multiple Slide Note Example](../docs/files/slide2.png)

## Converting Midi to Map File

1. Go to <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> and click `Midi2TromboneChamp.exe` to download it.

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