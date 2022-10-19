# Creando Mapas
---

?> Si prefieres tutoriales en video, NyxTheShield tiene [un archivo de stream](https://www.youtube.com/watch?v=ig27SlJveGs) que explica cada paso del proceso de mapeado en detalle.

## Básicos
Mapas se hacen creando un archivo y ejecutándolo a través de [Midi2TromboneChamp](https://github.com/NyxTheShield/Midi2TromboneChamp).

Algunos editores midi gratis, verificados que funcionan incluyen:
- [LMMS](https://lmms.io/)
- [FL Studio (prueba)](https://www.image-line.com/fl-studio-download/)

?> La versión de prueba de FL Studio no te permite exportar MIDI, pero puede evitarlo guardando el archivo de proyecto y usando [flp2midi](https://github.com/Kaydax/flp2midi).

Notas Midi deben estar en el rango de 48 a 72 para concidir con el juego. Cualquier nota fuera de este rango cambiará a 48 o 72.

### Notas Normales

Notas normales son creadas en el editor midi y se ven igualmente en el juego. ¡Asegúrate de dejar un tiempo de espacio entre notas!

### Slide Notes

Slides are created by overlapping notes in time. For a pair of overlapping notes, the slide goes from the start of the first note to the start of the second. The overlapping part of the first note is discarded. See this image for an example:

![Slide Note Example](../docs/files/slide1.png)

If a note ends but the next note starts at the exact same time, they will be connected. This allows you to adjust where the curve of a slide starts. Here's an example of multiple slides connected together:

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