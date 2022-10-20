# Diversen Map Informatie
---

## Noot Kleur
Als je de kleur van de noot wilt veranderen, kun je dat doen! Open je `song.tmb` bestand in je favoriete teksteditor en voeg `note_color_start` en `note_color_end` arrays aan het einde toe.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Voor ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Na ^
```
Het kleurenformaat is RGB1, het voorbeeld hierboven begint met zwart en verandert in wit. Om naar dit formaat te converteren, gebruik een kleurkiezer zoals <https://rgbacolorpicker.com/> en krijg de RGB waarden van de kleuren die u wilt. Laten we zeggen dat ik een mooi diep paars wil gebruiken dat `rgb(84, 14, 50)`. Om dit te gebruiken, deel alles door `255` en stop het in de array.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Nu zullen de noten zowel eindigen als beginnen met die diepe paarse kleur!


## Andere .trombackground Info

### Render over Tromboner
Als je een `.trombackground`maakt, kun je de tromboner OVER renderen door de diepte van je camera op 1 in te stellen

### Tromboner in scène toevoegen
Als je een `.trombackground` maakt en door de speler wilt bewegen, voeg je de `Prefabs/Tromboner` prefab toe aan je achtergrond.

Zodra het spel is geladen zal het worden vervangen door een exacte kloon van de speler.

Je kunt ook het spelersmodel & trombone skin veranderen als je niet wilt dat het er precies zo uit ziet als de speler.

(Gebruik in combinatie met de hoogte renderen punt hierboven om het totaal te veranderen hoe de tromboner wordt gerenderd!)