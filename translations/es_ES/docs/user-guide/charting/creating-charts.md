# Creando Mapas
---

?> Si prefieres tutoriales en video, NyxTheShield tiene [un archivo de stream](https://www.youtube.com/watch?v=ig27SlJveGs) que explica cada paso del proceso de mapeado en detalle.

## Básicos
### Editor Midi/DAW
Los mapas se hacen creando un archivo midi y ejecutándolo en un [convertidor MIDI](#converting-midi-to-map-file).

Midi notes should be in the range 47 to 73 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Algunos editores midi gratis, verificados que funcionan incluyen:
- [Reaper](https://www.reaper.fm/download.php)* (Range: B2-C#5)
- [LMMS](https://lmms.io/download#windows) (Range: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (Range: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

<sub>*El software completo no es gratis, pero tiene una prueba gratuita wue funciona para mapear.</sub><br> <sub>**Exporta notas a pista MIDI 2 por defecto, que lo hace incompatible con Midi2TromboneChamp.</sub><br> <sub>†La versión de prueba de FL Studio no te deja exportar MIDI, pero puedes evitarlo al guardar el archivo del proyecto y usando <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Proyecto Reaper
</h4>

<p spaces-before="0">
  Si no estás seguro de qué editor usar, Reaper es recomendable ya que hay un archivo de proyecto personalizado de Trombone Champ que viene con:
</p>

<ul>
  <li>
    Una explicación básica sobre cómo utilizar los controles de Reaper (en inglés)
  </li>
  <li>
    Ajustes preconfigurados
  </li>
  <li>
    MIDI de ejemplo
  </li>
</ul>

<p spaces-before="0">
  Este proyecto se puede <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">descargar aquí</a>.
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
  ?> ¡Hay dos convertidores Midi disponibles además de Midi2TromboneChamp! <br>El proceso para estos nuevos convertidores es lo bastante similar para que esta guía debería seguir siendo utilizable. <br>Si quieres un programa de conversión más actualizado, siéntete libre de probar un nuevo convertidor: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Versión Unity)</a> una secuela basado - en unity- para Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - una alternativa basada en la web con nuevas características.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest</a> and click <code>Midi2TromboneChamp.exe</code> to download it.
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
