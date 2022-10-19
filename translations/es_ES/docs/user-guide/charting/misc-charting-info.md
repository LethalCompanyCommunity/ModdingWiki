# Información de Mapear Miscelánea
---

## Color de Nota
Si quieres cambiar el color de tu nota, ¡puedes hacerlo! Abre tu archivo `song.tmb` en tu editor de texto favorito y añade `note_color_start` y`note_color_end` al final.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Antes ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Después ^
```
El formato de color es RGB1, el ejemplo anterior empieza con negro y se convierte en blanco. Para convertir a este formato, usa un selector de color como <https://rgbacolorpicker.com/> y obtenga los valores RGB de los colores que quieres. Digamos que quiero usar un buen púrpura profundo que es `rgb(84, 14, 50)`. Para usar esto, divide todo entre `255` y ponlo en el conjunto.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
¡Ahora las notas empezarán y terminarán con ese color púrpura profundo!


## Otra información de .trombackground

### Renderizar Sobre Tromboner
Si estás haciendo un `.trombackground`, puedes renderizar SOBRE el tromboner configurando la profundidad de tu cámara a 1

### Añadir Tromboner En Escena
Si estás haciendo un `.trombackground` y quieres mover el jugador, añade el prefab `Prefabs/Tromboner` a tu fondo.

Una vez el juego está cargado, se reemplazará con un clon exacto del jugador.

También puedes cambiar el modelo y skin si no quieres que se vea exactamente como el jugador.

(¡Úsalo junto con el consejo de profundidad de renderizar de arriba para completamente cambiar como se renderiza el tromboner!)