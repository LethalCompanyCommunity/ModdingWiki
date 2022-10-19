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

### Notas Deslizadas

Deslizas se crean al solapar notas en un tiempo. Para un par de notas solapadas, el deslizo va desde el principio de la primera nota hasta el principio de la segunda. La parte solapada de la primera nota se descarta. Vea esta imagen para un ejemplo:

![Slide Note Example](../docs/files/slide1.png)

Si una nota acaba pero la siguiente nota empieza al mismo tiempo, estan serán conectadas. Esto te permite ajustar donde empieza la curva del desliz. Aquí hay un ejemplo de varias deslizas conectadas:

(nota: La primera sección recta es una nota separada de la sección curvada. Su tiempo de acabado es el mismo que el comienzo de la siguiente.)

![Multiple Slide Note Example](../docs/files/slide2.png)

## Convirtiendo Midi a Archivo de Mapa

1. Ve a <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> y haz clic en `Midi2TromboneChamp.exe` para descargarlo.

2. Ejecútalo. En el selector de archivo que abre, selecciona tu archivo midi. Haz clic en Abrir.

3. Rellena los campos:
 - `Song Name` es el nombre completo de la canción, que se muestra en la información cuando la seleccionas en el juego.
 - `Short Name` se muestra mientras te desplazas por la lista de canciones. El texto se hace más pequeño cuando el nombre es largo por lo que no estoy seguro de si hay una longitud máxima.
 - `Folder Name` es el nombre de la carpeta en la que vas a poner tu archivo de mapa y canción. P. ej. Si pones en Folder Name mi mapa, la ruta será BepInEx/CustomSongs/mi mapa/song.tmb.
 - `Year` es el año en que se creó la canción.
 - `Author` es el compositor de la canción.
 - `Difficulty` es el número de estrellas de dificultad que aparecen en la información de la canción.
 - `Note Spacing` afecta cómo de rápido se desplaza el nivel, en combinación con BPM.
 - `Song Endpoint` is the beat on which the song ends. It is automatically calculated, but you can adjust it to change when the level end screen appears.
 - `Beats per Bar` determines how far apart the "beat lines" are.

4. Hit OK. In the file selector it opens, create a folder with the same name as you entered in the `Folder Name` field, and save the file as `song.tmb` inside that folder.

5. Your music track should be a .ogg file. At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file `song.ogg`.

6. Move the ogg file into the same folder as `song.tmb`.

7. Follow the [Custom Song Installation instructions](installing-songs) to test it.

8. [Add a background!](chart-backgrounds)