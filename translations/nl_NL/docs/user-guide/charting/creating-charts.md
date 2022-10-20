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

![Slide Note Example](../docs/files/slide1.png)

Als een noot eindigt, maar de volgende noot begint op hetzelfde moment, worden ze aangesloten. Hiermee kun je aanpassen waar de bocht van een schuif begint. Hier is een voorbeeld van meerdere schuif noten die met elkaar verbonden zijn:

(Let op: het eerste rechte gedeelte is een aparte noot uit het gebogen gedeelte. De eindtijd is gelijk aan de begintijd van de volgende.)

![Multiple Slide Note Example](../docs/files/slide2.png)

## Midi omzetten naar map bestand

1. Ga naar <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> en klik op `Midi2TromboneChamp.exe` om het te downloaden.

2. Start de programma. In de bestandskiezer opent het en selecteert het je midi bestand. Klik Open.

3. Vul de velden in:
 - `Song Name` is de volledige naam van het liedje, weergegeven in de info wanneer je het in het spel selecteert.
 - `Short Name` wordt weergeven tijdens het scrollen door de songlijst. Deze text wordt kleiner de langer de naam is, dus ik weet niet of er een maximale lengte is.
 - `Folder Name` is de naam van de map waarin je de map en nummerbestand wilt plaatsen. Bijv. Als je de mapnaam op mijn map zet, zal het pad van uw map BepInEx/CustomSongs/mijn map/song.tmb.
 - `Year` is de jaar dat de nummer is gemaakt.
 - `Author` is de artiest van het nummer.
 - `Difficulty` is the number of difficulty stars that appear on the song's info.
 - `Note Spacing` affects how fast the level scrolls, in combination with BPM.
 - `Song Endpoint` is the beat on which the song ends. It is automatically calculated, but you can adjust it to change when the level end screen appears.
 - `Beats per Bar` determines how far apart the "beat lines" are.

4. Hit OK. In the file selector it opens, create a folder with the same name as you entered in the `Folder Name` field, and save the file as `song.tmb` inside that folder.

5. Your music track should be a .ogg file. At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file `song.ogg`.

6. Move the ogg file into the same folder as `song.tmb`.

7. Follow the [Custom Song Installation instructions](installing-songs) to test it.

8. [Add a background!](chart-backgrounds)