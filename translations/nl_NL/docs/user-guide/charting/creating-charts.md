# Map Maken
---

?> Als je liever en video-tutorial wil hebben, heeft NyxTheShield een [en stream-archief](https://www.youtube.com/watch?v=ig27SlJveGs) waarin word uitgelegd elke stap van de map proces in detail. Opmerking: de video is alleen maar in het Engels.

## Basiskennis
Mappen zijn gemaakt door en midi bestand te maken en door [Midi2TromboneChamp](https://github.com/NyxTheShield/Midi2TromboneChamp) te voeren.

Sommige gratis, geverifieerd werkende midi editors omvatten:
- [LMMS](https://lmms.io/)
- [FL Studio (proef)](https://www.image-line.com/fl-studio-download/)

?> De proefversie van FL Studio laat je niet MIDI te exporteren, maar je kunt dit omzeilen door het projectbestand op te slaan en [flp2midi](https://github.com/Kaydax/flp2midi) te gebruiken.

Om overeen te komen met het spel moeten midi notities 48 tot 72 binnen het bereik liggen. Alle notities buiten dit bereik zullen 48 of 72 worden.

### Normale Noten

Normale noten worden gemaakt in de midi editor en hetzelfde uit in-game. Zorg ervoor dat je een tijdsperiode tussen notities laat!

### Schuif Noten

Schuif noten worden gemaakt door overlappende noten in tijd. Voor een paar overlappende noten, gaat de schuif van het begin van de eerste noot naar het begin van de tweede. Het overlappende deel van de eerste noot is verwijderd. Bekijk deze afbeelding voor een voorbeeld:

![Schuif Note Voorbeeld](../docs/files/slide1.png)

Als een noot eindigt, maar de volgende noot begint op hetzelfde moment, worden ze aangesloten. Hiermee kun je aanpassen waar de bocht van een schuif begint. Hier is een voorbeeld van meerdere schuif noten die met elkaar verbonden zijn:

(Let op: het eerste rechte gedeelte is een aparte noot uit het gebogen gedeelte. De eindtijd is gelijk aan de begintijd van de volgende.)

![Voorbeeld van meervoudige schuif noten](../docs/files/slide2.png)

## Midi omzetten naar map bestand

1. Ga naar <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> en klik op `Midi2TromboneChamp.exe` om het te downloaden.

2. Start de programma. In de bestandskiezer opent het en selecteert het je midi bestand. Klik Open.

3. Vul de velden in:
 - `Song Name` is de volledige naam van het liedje, weergegeven in de info wanneer je het in het spel selecteert.
 - `Short Name` wordt weergeven tijdens het scrollen door de songlijst. Deze text wordt kleiner de langer de naam is, dus ik weet niet of er een maximale lengte is.
 - `Folder Name` is de naam van de map waarin je de map en nummerbestand wilt plaatsen. Bijv. Als je de mapnaam op mijn map zet, zal het pad van uw map BepInEx/CustomSongs/mijn map/song.tmb.
 - `Year` is de jaar dat de nummer is gemaakt.
 - `Author` is de artiest van het nummer.
 - `Difficulty` is het aantal moeilijkheids-stichters dat op de info van de map verschijnt.
 - `Note Spacing` beïnvloedt hoe snel de level scrolls, in combinatie met BPM.
 - `Song Endpoint` is de beat waarop de nummer eindigt. Het wordt automatisch berekend, maar je kunt het aanpassen als het eindscherm op het niveau verschijnt.
 - `Beats per Bar` bepalen hoe ver de "beat lines" uiteenlopen.

4. Klik OK. In de bestandskiezer dat wordt geopend, maak een map aan met dezelfde naam als in het `Folder Name` veld, en sla het bestand op als `song.tmb` binnen die map.

5. Uw muziek moet een .ogg bestand zijn. Op het moment van schrijven moet de duur van de track langer zijn dan het Song Endpoint, of het nummer zal vastzitten en nooit eindigen. Je kunt software als Audacity gebruiken om stilte in te voegen aan het begin van het spoor om het met de midi op te houden. Noem het bestand `song.ogg`.

6. Verplaats het ogg-bestand in dezelfde map als `song.tmb`.

7. Volg de [Aangepaste Song Installation instructies](installing-songs) om het te testen.

8. [Voeg een achtergrond toe!](chart-backgrounds)