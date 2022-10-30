# Sekalaiset Kartoitustiedot
---

## Nuotin Väri
Jos haluat muuttaa nuotin väriä, voit tehdä sen! Avaa `song.tmb` tiedosto tekstieditoriin, ja lisää `note_color_start` ja `note_color_end` loppuun.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Ennen ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Jälkeen ^
```
Värimuoto on RGB1, ylläoleva esimerkki alkaa mustalla ja muuttuu valkoiseksi. Muuntaaksesi tähän muotoon, käytä värivalitsinta kuten <https://rgbacolorpicker.com/> ja saat haluamasi värien RGB arvot. Sanotaan, että haluan käyttää kivaa syvää violettia joka on `rgb(84, 14, 50)`. Käyttääksesi tätä, jaa kaikki luvulla `255` ja laita se taulukkoon.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Nyt molemmat nuotit päättyvät ja alkavat violettilla värillä!


## Muut .trombackground Tiedot

### Renderöi Trombonerin Yli
Jos olet tekemässä `.trombackground`, voit renderöidä trombonerin YLI asettamalla Kameran syvyyden numeroon 1

### Lisää Tromboner näyttämöön
Jos olet tekemässä `.trombackground` ja haluat liikkuttaa pelaajaa, lisää `Prefabs/Tromboner` prefab taustaasi.

Kun peli on ladattu, se korvataan tarkalla pelaajan kloonilla.

Voit myös muuttaa pelaajamallia & trombone iho, jos et halua sen näyttävän aivan kuin pelaaja.

(Käytä yhdessä syvyys renderöinti vinkkiä yläpuolella muuttaaksesu täysin miten tromboner on renderöity!)