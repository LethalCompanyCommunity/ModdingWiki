# Création de partitions
---

?> Si vous préférez un tutoriel vidéo, NyxTheShield a [une archive de stream](https://www.youtube.com/watch?v=ig27SlJveGs) qui explique chaque étape du processus de charting en détail.

## Les bases
### Éditeur MIDI/station audionumérique
Les partitions sont faites par créer un fichier MIDI qui est ensuite passé à travers un [convertisseur MIDI](#converting-midi-to-map-file).

Les notes MIDI devraient être entre 48 à 72 pour correspondre au jeu. <br> **NOTE :** Les éditeurs différents utilisent des valeurs différentes sur le piano pour cette gamme.

Quelques éditeurs MIDI gratuits et fonctionnels incluent :
- [Reaper](https://www.reaper.fm/download.php)* (Gamme : C3-C5)
- [LMMS](https://lmms.io/download#windows) (Gamme : C3-C5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Gamme : C4-C6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Gamme : C4-C6)

<sub>*Le programme complet n'est pas gratuit, mais a un essai gratuit qui fonctionne pour créer des partitions.</sub><br> <sub>**Exporte les notes à la piste MIDI 2 par défaut, qui le rend incompatible avec Midi2TromboneChamp par défaut.</sub><br> <sub>†L'essai gratuit de FL Studio ne vous permet pas d'exporter MIDI, mais vous pouvez contourner cela en sauvegardant le fichier du projet et en utilisant <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Projet Reaper
</h4>

<p spaces-before="0">
  Si vous n'êtes pas sûr quel éditeur utiliser, Reaper est recommandé, car il y a un fichier de projet personnalisé pour Trombone Champ qui comprend :
</p>

<ul>
  <li>
    Une explication de base sur la manière d'utiliser les commandes de Reaper (en anglais)
  </li>
  <li>
    Paramètres préconfigurés
  </li>
  <li>
    Exemple MIDI
  </li>
</ul>

<p spaces-before="0">
  Le projet peut être <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">téléchargé ici</a>.
</p>

<h3 spaces-before="0">
  Notes normales
</h3>

<p spaces-before="0">
  Les notes normales sont créées à partir de l'éditeur MIDI et ont la même apparence en jeu. Assurez-vous de laisser un espace entre les notes!
</p>

<h3 spaces-before="0">
  Notes glissées
</h3>

<p spaces-before="0">
  Les notes glissées sont créées en superposant des notes dans le temps. Pour une paire de notes superposées, la glissée va du début de la première note jusqu'au début de la deuxième. La partie superposée de la première note est éliminée. Voir cette image pour un exemple :
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Exemple de note glissée" />
</p>

<p spaces-before="0">
  Si une note finit et que la prochaine commence exactement au même moment, elles seront connectées. Cela vous permet d'ajuster où la courbe d'une glissée commence. Voici un exemple de plusieurs glissées reliées ensemble :
</p>

<p spaces-before="0">
  (note : la première section droite est une note séparée de la section courbe. Son temps de fin est le même que le temps de début de la prochaine.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Exemple de plusieurs notes glissées" />
</p>

<h2 spaces-before="0">
  Convertir de MIDI vers fichier map
</h2>

<p spaces-before="0">
  ?> Il y a deux convertisseurs MIDI disponibles en plus de Midi2TromboneChamp! <br>Puisqu'ils sont encore en version bêta. <strong x-id="1">ils peuvent avoir des bugs </strong>, donc ce guide est encore écrit pour Midi2TromboneChamp. <br>Le processus pour ces nouveaux convertisseurs est assez similaire que ce guide devrait suffire. <br>Si vous voulez essayer un convertisseur plus à jour, n'hésitez pas à donner une chance à un des convertisseurs nouveaux <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Version Unity)</a> - un successeur à Midi2TromboneChamp basée sur Unity. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Convertisseur de partition de Trombone Champ</a> - une application web alternative avec de nouvelles fonctionnalités.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Allez à <a href="https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest</a> et cliquez sur <code>Midi2TromboneChamp.exe</code> pour le télécharger.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Lancez-le. Dans le sélecteur de fichier qu'il ouvre, sélectionnez votre fichier MIDI. Cliquez sur ouvrir.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Remplissez les champs :
    </p>
    <ul>
      <li>
        <code>Nom de chanson</code> est le nom complet de la chanson, affiché dans l'info lorsque vous la sélectionnez en jeu.
      </li>
      <li>
        <code>Nom court</code> est affiché en naviguant la liste de chansons. Le texte devient de plus en plus petit lorsque le nom est long, alors je ne sais pas s'il y a une longueur maximale.
      </li>
      <li>
        <code>Nom de dossier</code> est le nom du dossier dans lequel vous mettrez votre map et votre fichier de chanson. Ex : Si vous définissez « Nom du dossier» comme « ma map», votre chemin de map sera BepInEx/CustomSongs/ma map/song.tmb.
      </li>
      <li>
        <code>Année</code> est l'année de création de la chanson.
      </li>
      <li>
        <code>Auteur</code> est le compositeur de la chanson.
      </li>
      <li>
        <code>Difficulté</code> est le nombre d'étoiles de difficulté qui apparait dans l'info de la chanson.
      </li>
      <li>
        <code>Espacement des notes</code> affecte la vitesse de défilement du niveau, en combinaison avec le BPM (tempo).
      </li>
      <li>
        <code>Fin de la chanson</code> est le temps où la chanson finit. Elle est calculée automatiquement, mais vous pouvez l'ajuster pour changer quand l'écran de fin de niveau apparait.
      </li>
      <li>
        <code>Rythmes par mesure</code> détermine la distance entre les « barres de rythme ».
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Appuyez sur OK. Dans le sélecteur de fichier qui s'ouvre, créez un dossier avec le même nom que vous avez écrit dans le champ <code>Nom de dossier</code>, et sauvegardez-le comme <code>song.tmb</code> à l'intérieur de ce dossier.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Votre piste de musique devrait être un fichier .ogg. À l'heure où j'écris, la durée de la piste doit être plus longue que la Fin de la chanson, sinon la chanson restera coincée et ne finira jamais. Vous pouvez utiliser un programme comme Audacity afin d'insérer un silence au début de la piste pour l'aligner avec le fichier MIDI. Nommez le fichier de chanson <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Déplacez le fichier ogg dans le même dossier que <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Suivez les <a href="installing-songs">instructions d'installation de chansons personnalisées</a> pour le tester.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">Ajoutez un arrière-plan!</a>
    </p>
  </li>
</ol>