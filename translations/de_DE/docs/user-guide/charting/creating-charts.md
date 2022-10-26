# Charts erstellen
---

?> Wenn du Video-Tutorials bevorzugst, hat NyxTheShield [ein Stream-Archiv](https://www.youtube.com/watch?v=ig27SlJveGs) dass jeden Schritt dieses Prozesses genau erklärt.

## Grundlagen
### Midi Editor/DAW
Charts werden erschaffen, wenn man eine midi Datei erstellt und sie mit dem Programm [Midi2TromboneChamp](#converting-midi-to-map-file) konvertiert.

Midi Noten sollten in der Reichweite von 48 bis 72 sein, um mit dem Spiel übereinzustimmen.<br>**HINWEIS:** Verschiedene Editoren verwenden für diesen Bereich unterschiedliche Werte auf dem Klavier.

Einige kostenlose, überprüfte Midi-Editoren beinhalten:
- [Reaper](https://www.reaper.fm/download.php)* (Reichweite: C3-C5)
- [LMMS](https://lmms.io/download#windows) (Reichweite: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Reichweite: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Reichweite: C4-C6)

<sub>*Die vollständige Software ist nicht kostenlos, hat aber eine kostenlose Testversion.</sub><br> <sub>**Exportiert Noten normalerweise in der zweiten MIDI Spur, was es standardmäßig inkompatibel mit Midi2TromboneChamp macht.</sub><br> <sub>†Die Testversion von FL Studio erlaubt den Export von MIDI nicht aber Sie können dies umgehen, indem Sie die Projektdatei speichern und <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a> verwenden.</p>

<h4 spaces-before="0">
  Reaper Projekt
</h4>

<p spaces-before="0">
  Wenn du dir nicht sicher bist, welchen Editor du verwendet möchtest, wird Reaper empfohlen, da es eine benutzerdefinierte Trombone Champ Projektdatei gibt, die folgendes beinhaltet:
</p>

<ul>
  <li>
    Eine grundlegende Erklärung zur Verwendung der Steuerelemente von Reaper (in Englisch)
  </li>
  <li>
    Vorkonfigurierte Einstellungen
  </li>
  <li>
    MIDI Beispiele
  </li>
</ul>

<p spaces-before="0">
  Das Projekt kann <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">hier heruntergeladen werden</a>.
</p>

<h3 spaces-before="0">
  Normale Noten
</h3>

<p spaces-before="0">
  Normale Noten werden im Midi Editor erstellt und sehen im Spiel gleich aus. Achte darauf, immer einen kleinen Abstand zwischen den Noten zu lassen!
</p>

<h3 spaces-before="0">
  "Slide" Noten
</h3>

<p spaces-before="0">
  "Slides" werden erstellt, wenn man Noten überlappt. Bei einem Paar überlappender Noten geht der "Slide" vom Anfang der ersten Note zum Anfang der zweiten Note. Der überlappende Teil der ersten Note wird verworfen. Siehe dir dieses Bild für ein Beispiel an:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="&quot;Slide&quot; Note Beispiel" />
</p>

<p spaces-before="0">
  Wenn eine Note genau da endet, wo die nächste Note beginnt, werden sie verbunden. So können Sie anpassen, wo die Kurve eines "Slides" beginnt. Hier ist ein Beispiel bei dem mehrere "Slides" verbunden sind:
</p>

<p spaces-before="0">
  (Anmerkung: Der erste gerade Abschnitt ist eine eigene Note separat vom gebogenen Abschnitt. Diese endet genau da, wo die nächste beginnt.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Mehrere &quot;Slide&quot; Noten Beispiel" />
</p>

<h2 spaces-before="0">
  Midi zum Chart konvertieren
</h2>

<p spaces-before="0">
  ?> Es sind neben Midi2TromboneChamps noch zwei andere Midi Konverter verfügbar! <br>Da sie immer noch in der Beta sind, <strong x-id="1">können Bugs auftreten</strong>, deswegen ist diese Anleitung noch für Midi2TromboneChamp. <br>Der Prozess für diese neuen Konverter ist so ähnlich, dass diese Anleitung trotzdem anwendbar sein sollte. <br>Wenn du ein aktuelleres Konvertierungsprogramm testen möchtest, probiere einen der neuen Konverter aus: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - ein auf Unity basierender Nachfolger von Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - eine webbasierte Alternative mit neuen Features.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Gehe zu <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> und klicke <code>Midi2TromboneChamp.exe</code>, um es herunterzuladen.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Starte es. In der Datei-Auswahl die sich öffnet, wähle deine Midi-Datei. Klick auf öffnen.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Füllen Sie die Felder aus:
    </p>
    <ul>
      <li>
        <code>Song Name</code> ist der vollständige Name des Songs, der in der Info angezeigt wird, wenn du ihn im Spiel auswählst.
      </li>
      <li>
        <code>Short Name</code> wird beim Scrollen durch die Songliste angezeigt. Text wird kleiner, wenn der Name lang ist, deswegen bin ich mir nicht sicher, ob es eine maximale Länge gibt.
      </li>
      <li>
        <code>Folder Name</code> ist der Name des Ordners, in den du deine Chart- und Songdatei einfügen wirst. Z.B. Wenn du "Folder Name" auf "my map" setzt, wird der Kartenpfad BepInEx/CustomSongs/my map/song.tmb sein.
      </li>
      <li>
        <code>Year</code> ist das Jahr, in dem das Lied erstellt wurde.
      </li>
      <li>
        <code>Author</code> ist der Komponist des Songs.
      </li>
      <li>
        <code>Difficulty</code> ist die Anzahl der Schwierigkeitssterne, die in den Informationen des Songs erscheinen.
      </li>
      <li>
        <code>Note Spacing</code> kontrolliert zusammen mit BPM, wie schnell der Level scrollt.
      </li>
      <li>
        <code>Song Endpoint</code> ist die Nummer des Schlags, an dem der Song endet. Diese Nummer wird automatisch berechnet, allerdings kannst du sie ändern, um zu kontrollieren, wann der Level endet und der Endbildschirm erscheint.
      </li>
      <li>
        <code>Beats per Bar</code> bestimmt den Abstand zwischen den "beat lines".
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Drücke OK. In der Dateiauswahl, die sich automatisch öffnet, erstelle einen Ordner mit dem Namen den du im Feld <code>Folder Name</code> eingegeben hast und speichere die Datei als <code>song.tmb</code> in diesem Ordner.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Dein Chart sollte eine .ogg Datei sein. Im Moment muss die Dauer des Lieds länger sein als der "Song Endpoint", sonst wird der Song blockiert und hört niemals auf. Du kannst Programme wie Audacity benutzen, um Stille an den Anfang des Lieds zu setzen, sodass es gleichzeitig mit der Midi anfängt. Nenne die Datei <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Setze die.ogg Datei in den gleichen Ordner wie <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Folge der <a href="installing-songs">Anleitung zum Erstellen eigener Songs</a> um deinen Song zu testen.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">Hintergrund hinzufügen!</a>
    </p>
  </li>
</ol>