# Creando Mapas
---

?> Si prefieres tutoriales en video, NyxTheShield tiene [un archivo de stream](https://www.youtube.com/watch?v=ig27SlJveGs) que explica cada paso del proceso de mapeado en detalle.

## Básicos
### Midi Editor/DAW
Charts are made by creating a midi file and running them through a [MIDI converter](#converting-midi-to-map-file).

Midi notes should be in the range 48 to 72 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Algunos editores midi gratis, verificados que funcionan incluyen:
- [Reaper](https://www.reaper.fm/download.php)* (Range: C3-C5)
- [LMMS](https://lmms.io/download#windows) (Range: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: C4-C6)

<sub>*Full software is not free, but has a free trial that works for charting.</sub><br> <sub>**Exports notes into MIDI track 2 by default, which makes it incompatible with Midi2TromboneChamp by default.</sub><br> <sub>†The trial version of FL Studio doesn't allow you to export MIDI, but you can get around this by saving the project file and using <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Reaper Project
</h4>

<p spaces-before="0">
  If you're not sure which editor to use, Reaper is recommended as there's a custom Trombone Champ project file that comes with:
</p>

<ul>
  <li>
    A basic explanation on how to use the controls of Reaper (in English)
  </li>
  <li>
    Preconfigured settings
  </li>
  <li>
    Example MIDI
  </li>
</ul>

<p spaces-before="0">
  The project can be <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">downloaded here</a>.
</p>

<h3 spaces-before="0">
  Notas Normales
</h3>

<p spaces-before="0">
  Notas normales son creadas en el editor midi y se ven igualmente en el juego. ¡Asegúrate de dejar un tiempo de espacio entre notas!
</p>

<h3 spaces-before="0">
  Notas Deslizadas
</h3>

<p spaces-before="0">
  Deslizas se crean al solapar notas en un tiempo. Para un par de notas solapadas, el deslizo va desde el principio de la primera nota hasta el principio de la segunda. La parte solapada de la primera nota se descarta. Vea esta imagen para un ejemplo:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Ejemplo de nota deslizada" />
</p>

<p spaces-before="0">
  Si una nota acaba pero la siguiente nota empieza al mismo tiempo, estan serán conectadas. Esto te permite ajustar donde empieza la curva del desliz. Aquí hay un ejemplo de varias deslizas conectadas:
</p>

<p spaces-before="0">
  (nota: La primera sección recta es una nota separada de la sección curvada. Su tiempo de acabado es el mismo que el comienzo de la siguiente.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Ejemplo de múltiples notas deslizadas" />
</p>

<h2 spaces-before="0">
  Convirtiendo Midi a Archivo de Mapa
</h2>

<p spaces-before="0">
  ?> There are two Midi converters available besides Midi2TromboneChamp! <br>Since they're still in beta, <strong x-id="1">they may have bugs</strong>, so this guide is still written for Midi2TromboneChamp. <br>The process for these new converters is similar enough that this guide should still be usable. <br>If you want to try a more up-to-date conversion program, feel free to give a new converter a try: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - a unity-based sequel to Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - a web-based alternative with new features.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Ve a <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> y haz clic en <code>Midi2TromboneChamp.exe</code> para descargarlo.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Ejecútalo. En el selector de archivo que abre, selecciona tu archivo midi. Haz clic en Abrir.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Rellena los campos:
    </p>
    <ul>
      <li>
        <code>Song Name</code> es el nombre completo de la canción, que se muestra en la información cuando la seleccionas en el juego.
      </li>
      <li>
        <code>Short Name</code> se muestra mientras te desplazas por la lista de canciones. El texto se hace más pequeño cuando el nombre es largo por lo que no estoy seguro de si hay una longitud máxima.
      </li>
      <li>
        <code>Folder Name</code> es el nombre de la carpeta en la que vas a poner tu archivo de mapa y canción. P. ej. Si pones en Folder Name mi mapa, la ruta será BepInEx/CustomSongs/mi mapa/song.tmb.
      </li>
      <li>
        <code>Year</code> es el año en que se creó la canción.
      </li>
      <li>
        <code>Author</code> es el compositor de la canción.
      </li>
      <li>
        <code>Difficulty</code> es el número de estrellas de dificultad que aparecen en la información de la canción.
      </li>
      <li>
        <code>Note Spacing</code> afecta cómo de rápido se desplaza el nivel, en combinación con BPM.
      </li>
      <li>
        <code>Song Endpoint</code> es el pulso en el que acaba la canción. Se calcula automáticamente, pero puedes ajustarlo para cambiar cuando aparece la pantalla del final de nivel.
      </li>
      <li>
        <code>Beats per Bar</code> determina lo alejadas que están las "líneas de pulsos".
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Pulsa OK. En el selector de archivo que abre, crea una carpeta con el mismo nombre al que has puesto en el campo <code>Folder Name</code>, y guarda el archivo como <code>song.tmb</code> en esa carpeta.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Tu pista de música debería ser un archivo .ogg. En el momento de escritura, la duración de la canción debe ser más larga que el Song Endpoint, o la canción se atascará sin acabar nunca. Puedes usar software como Audacity para insertar silencio al principio de la pista que alinearla con el midi. Nombra al archivo <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Mueve el archivo ogg a la misma carpeta que <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Sigue las <a href="installing-songs">Instrucciones de Instalación de Canciones Personalizadas</a> para probarlo.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">¡Añade un fondo!</a>
    </p>
  </li>
</ol>