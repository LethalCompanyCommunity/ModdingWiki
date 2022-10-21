# Sonstige Informationen zu Charts
---

## Farbe der Noten
Wenn du die Farbe der Noten ändern willst, kannst du dies tun! Öffne deine `song.tmb` Datei in deinem bevorzugten Texteditor und füge `note_color_start` und `note_color_end` Arrays hinzu.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Vorher ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Nachher ^
```
Das Farbformat ist RGB1, das obige Beispiel beginnt mit schwarz und wird zu weiß. Wenn du in dieses Format konvertieren willst, verwende eine Farbauswahl wie <https://rgbacolorpicker.com/> und hole die RGB-Werte der gewünschten Farben. Nehmen wir an, ich möchte ein schönes tiefes lila verwenden, das die Werte `rgb(84, 14, 50)` hat. Um dies zu verwenden, teile alles durch `255` und lege es ins Array.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Jetzt werden die Noten mit dieser tiefen violetten Farbe beginnen und enden!


## Sonstige Informationen zu .trombackground

### Über dem "Tromboner" rendern
Wenn du einen `.trombackground` erstellst, kannst du ÜBER dem "Tromboner" rendern, indem du die Kamera-Tiefe auf 1 setzt

### Den "Tromboner" in die Szene setzten
Wenn du einen `.trombackground` erstellst und den Spieler bewegen möchtest, füge `Prefabs/Tromboner` in den Hintergrund ein.

Sobald das Spiel geladen ist, wird es durch einen exakten Klon des Spielers ersetzt.

Du kannst ebenfalls das Spieler-Modell & den Posaunen-Skin ändern, wenn du nicht willst, dass es genau wie der Spieler aussieht.

(Verwende dies in Verbindung mit dem obigen Kamera-Tiefe Tipp um das Aussehen des "Tromboners" komplett zu ändern)