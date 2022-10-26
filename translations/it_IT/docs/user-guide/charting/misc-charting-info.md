# Informazioni varie sul Charting
---

## Colore delle note
Se vuoi cambiare il colore delle note, puoi farlo! Apri il file `song.tmb` con il tuo editor di testo preferito, e aggiungi gli array `note_color_start` e `note_color_end` alla fine.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Prima^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Dopo^
```
Il formato del colore è RGB1, l'esempio di sopra comincia con il nero e finisce col bianco. Per convertire in questo formato, usa un selezionatore di colore tipo <https://rgbacolorpicker.com/> e ottieni i valori RGB dei colori che desideri. Supponiamo di voler utilizzare un bel viola intenso che sia `rgb(84, 14, 50)`. Per usarlo, dividi tutto per `255` e inseriscilo nell'array.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Ora le note inizieranno e finiranno con quel colore viola intenso!


## Altre informazioni su .trombackground

### Renderizzare sul Trombonista
Se stai creando un `.trombackground`, puoi renderizzare SUL trombonista impostando la profondità della telecamera (Camera's depth) ad 1

### Aggiungi il Trombonista in scena
Se stai creando un `.trombackground` e vuoi far muovere in giro il musicista, aggiungi la prefab `Prefabs/Tromboner` al tuo sfondo.

Una volta caricato il gioco, verrà sostituito con un clone esatto del giocatore.

È anche possibile cambiare il modello del giocatore & la skin del trombone se non si vuole che sia esattamente come il musicista.

(Usare in combinazione con il suggerimento sul rendering della profondità di cui sopra per cambiare completamente il modo in cui il trombonista viene renderizzato)