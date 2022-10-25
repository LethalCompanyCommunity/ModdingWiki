# Map Maken
---

?> Als je liever en videotutorial wil hebben, heeft NyxTheShield een [en streamarchief](https://www.youtube.com/watch?v=ig27SlJveGs) waarin elke stap van het maken van een map in detail wordt uitgelegd. Opmerking: de video is in het Engels.

## Basiskennis
### Midi Editor/DAW
Mappen zijn gemaakt door en midi bestand te maken en door [Midi2TromboneChamp](#converting-midi-to-map-file) te voeren.

Midi noten moeten tussen 48 tot 72 liggen, anders werkt het niet in het spel. <br>**LET OP:** Verschillende editors gebruiken verschillende waarden op de piano voor dit bereik.

Sommige gratis, geverifieerd werkende midi editors omvatten:
- [Reaper](https://www.reaper.fm/download.php)* (Berijk: C3-C5)
- [LMMS](https://lmms.io/download#windows) (Bereik: C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*½ (Bereik: C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Bereik: C4-C6)

<sub>* Volledige software is niet gratis, maar heeft een gratis proefversie die werkt voor chartering.</sub><br> <sub>**Exporteer notities standaard in MIDI track 2, wat het standaard incompatibel maakt met Midi2TromboneChamp.</sub><br> <sub>† De proefversie van FL Studio staat u niet toe MIDI te exporteren. maar je kan dit omzeilen door het projectbestand op te slaan en <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a> te gebruiken.</p>

<h4 spaces-before="0">
  Reaper Project
</h4>

<p spaces-before="0">
  Als je niet zeker weet welke editor je wilt gebruiken, wordt Reaper aanbevolen, omdat er een aangepast projectbestand van de Trombone Champ is dat komt uit:
</p>

<ul>
  <li>
    Een basisuitleg over het gebruik van de besturingselementen van Reaper (in het Engels)
  </li>
  <li>
    Vooraf geconfigureerde instellingen
  </li>
  <li>
    Voorbeeld MIDI
  </li>
</ul>

<p spaces-before="0">
  Het project kan hier <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">gedownload worden</a>.
</p>

<h3 spaces-before="0">
  Normale Noten
</h3>

<p spaces-before="0">
  Normale noten worden gemaakt in de midi editor en hetzelfde uit in-game. Zorg ervoor dat je een tijdsperiode tussen notities laat!
</p>

<h3 spaces-before="0">
  Schuif Noten
</h3>

<p spaces-before="0">
  Schuif noten worden gemaakt door overlappende noten in tijd. Voor een paar overlappende noten, gaat de schuif van het begin van de eerste noot naar het begin van de tweede. Het overlappende deel van de eerste noot is verwijderd. Bekijk deze afbeelding voor een voorbeeld:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Schuif Note Voorbeeld" />
</p>

<p spaces-before="0">
  Als een noot eindigt, maar de volgende noot begint op hetzelfde moment, worden ze aangesloten. Hiermee kun je aanpassen waar de bocht van een schuif begint. Hier is een voorbeeld van meerdere schuif noten die met elkaar verbonden zijn:
</p>

<p spaces-before="0">
  (Let op: het eerste rechte gedeelte is een aparte noot uit het gebogen gedeelte. De eindtijd is gelijk aan de begintijd van de volgende.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Voorbeeld van meervoudige schuif noten" />
</p>

<h2 spaces-before="0">
  Midi omzetten naar map bestand
</h2>

<p spaces-before="0">
  ?> Er zijn twee Midi converters beschikbaar, naast Midi2TromboneChamp! <br>Omdat ze nog in beta zijn, <strong x-id="1">hebben ze misschien bugs</strong>, dus deze handleiding is nog steeds geschreven voor Midi2TromboneChamp. <br>Het proces voor deze nieuwe converters is gelijk aan dat deze handleiding nog steeds bruikbaar moet zijn. <br>Als u een recenter conversieprogramma wilt proberen, voel je vrij om een nieuwe converter een poging te doen: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - een op eenheden gebaseerde opvolging van Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Converter</a> - een webgebaseerd alternatief met nieuwe functies.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Ga naar <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> en klik op <code>Midi2TromboneChamp.exe</code> om het te downloaden.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Start de programma. In de bestandskiezer opent het en selecteert het je midi bestand. Klik Open.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Vul de velden in:
    </p>
    <ul>
      <li>
        <code>Song Name</code> is de volledige naam van het liedje, weergegeven in de info wanneer je het in het spel selecteert.
      </li>
      <li>
        <code>Short Name</code> wordt weergeven tijdens het scrollen door de songlijst. Deze text wordt kleiner de langer de naam is, dus ik weet niet of er een maximale lengte is.
      </li>
      <li>
        <code>Folder Name</code> is de naam van de map waarin je de map en nummerbestand wilt plaatsen. Bijv. Als je de mapnaam op mijn map zet, zal het pad van uw map BepInEx/CustomSongs/mijn map/song.tmb.
      </li>
      <li>
        <code>Year</code> is de jaar dat de nummer is gemaakt.
      </li>
      <li>
        <code>Author</code> is de artiest van het nummer.
      </li>
      <li>
        <code>Difficulty</code> is het aantal moeilijkheids-stichters dat op de info van de map verschijnt.
      </li>
      <li>
        <code>Note Spacing</code> beïnvloedt hoe snel de level scrolls, in combinatie met BPM.
      </li>
      <li>
        <code>Song Endpoint</code> is de beat waarop de nummer eindigt. Het wordt automatisch berekend, maar je kunt het aanpassen als het eindscherm op het niveau verschijnt.
      </li>
      <li>
        <code>Beats per Bar</code> bepalen hoe ver de "beat lines" uiteenlopen.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Klik OK. In de bestandskiezer dat wordt geopend, maak een map aan met dezelfde naam als in het <code>Folder Name</code> veld, en sla het bestand op als <code>song.tmb</code> binnen die map.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Uw muziek moet een .ogg bestand zijn. Op het moment van schrijven moet de duur van de track langer zijn dan het Song Endpoint, of het nummer zal vastzitten en nooit eindigen. Je kunt software als Audacity gebruiken om stilte in te voegen aan het begin van het spoor om het met de midi op te houden. Noem het bestand <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Verplaats het ogg-bestand in dezelfde map als <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Volg de <a href="installing-songs">Aangepaste Song Installation instructies</a> om het te testen.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">Voeg een achtergrond toe!</a>
    </p>
  </li>
</ol>