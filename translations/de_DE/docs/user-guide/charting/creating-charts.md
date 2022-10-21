# Charts erstellen
---

?> Wenn du Video-Tutorials bevorzugst, hat NyxTheShield [ein Stream-Archiv](https://www.youtube.com/watch?v=ig27SlJveGs) dass jeden Schritt dieses Prozesses genau erklärt.

## Grundlagen
Charts werden erschaffen, wenn man eine midi Datei erstellt und sie mit dem Programm [Midi2TromboneChamp](https://github.com/NyxTheShield/Midi2TromboneChamp) konvertiert.

Einige kostenlose, überprüfte Midi-Editoren beinhalten:
- [LMMS](https://lmms.io/)
- [FL Studio (kostenloser Test)](https://www.image-line.com/fl-studio-download/)

?> Die Testversion von FL Studio erlaubt dir nicht MIDI zu exportieren, allerdings kann man dies umgehen, indem Sie die Projektdatei speichern und [flp2midi](https://github.com/Kaydax/flp2midi) verwenden.

Midi Noten sollten zwischen 48 und 72 sein um mit dem Spiel übereinzustimmen. Alle Noten außerhalb dieses Bereichs werden einfach zu 48 oder 72.

### Normale Noten

Normale Noten werden im Midi Editor erstellt und sehen im Spiel gleich aus. Achte darauf, immer einen kleinen Abstand zwischen den Noten zu lassen!

### "Slide" Noten

"Slides" werden erstellt, wenn man Noten überlappt. Bei einem Paar überlappender Noten geht der "Slide" vom Anfang der ersten Note zum Anfang der zweiten Note. Der überlappende Teil der ersten Note wird verworfen. Siehe dir dieses Bild für ein Beispiel an:

![Slide Note Example](../docs/files/slide1.png)

Wenn eine Note genau da endet, wo die nächste Note beginnt, werden sie verbunden. So können Sie anpassen, wo die Kurve eines "Slides" beginnt. Hier ist ein Beispiel bei dem mehrere "Slides" verbunden sind:

(Anmerkung: Der erste gerade Abschnitt ist eine eigene Note separat vom gebogenen Abschnitt. Diese endet genau da, wo die nächste beginnt.)

![Multiple Slide Note Example](../docs/files/slide2.png)

## Midi zum Chart konvertieren

1. Gehe zu <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> und klicke `Midi2TromboneChamp.exe`, um es herunterzuladen.

2. Starte es. In der Datei-Auswahl die sich öffnet, wähle deine Midi-Datei. Klick auf öffnen.

3. Füllen Sie die Felder aus:
 - `Song Name` ist der vollständige Name des Songs, der in der Info angezeigt wird, wenn du ihn im Spiel auswählst.
 - `Short Name` wird beim Scrollen durch die Songliste angezeigt. Text wird kleiner, wenn der Name lang ist, deswegen bin ich mir nicht sicher, ob es eine maximale Länge gibt.
 - `Folder Name` ist der Name des Ordners, in den du deine Chart- und Songdatei einfügen wirst. Z.B. Wenn du "Folder Name" auf "my map" setzt, wird der Kartenpfad BepInEx/CustomSongs/my map/song.tmb sein.
 - `Year` ist das Jahr, in dem das Lied erstellt wurde.
 - `Author` ist der Komponist des Songs.
 - `Difficulty` ist die Anzahl der Schwierigkeitssterne, die in den Informationen des Songs erscheinen.
 - `Note Spacing` kontrolliert zusammen mit BPM, wie schnell der Level scrollt.
 - `Song Endpoint` ist die Nummer des Schlags, an dem der Song endet. Diese Nummer wird automatisch berechnet, allerdings kannst du sie ändern, um zu kontrollieren, wann der Level endet und der Endbildschirm erscheint.
 - `Beats per Bar` bestimmt den Abstand zwischen den "beat lines".

4. Drücke OK. In der Dateiauswahl, die sich automatisch öffnet, erstelle einen Ordner mit dem Namen den du im Feld `Folder Name` eingegeben hast und speichere die Datei als `song.tmb` in diesem Ordner.

5. Dein Chart sollte eine .ogg Datei sein. At the time of writing, the track duration must be longer than the Song Endpoint, or the song will get stuck and never finish. You can use software like Audacity to insert silence at the start of the track to line it up with the midi. Name the file `song.ogg`.

6. Move the ogg file into the same folder as `song.tmb`.

7. Follow the [Custom Song Installation instructions](installing-songs) to test it.

8. [Add a background!](chart-backgrounds)