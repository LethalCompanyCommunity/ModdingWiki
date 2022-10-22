Ex :
---

?> Si vous préférez un tutoriel vidéo, NyxTheShield a [une archive de stream](https://www.youtube.com/watch?v=ig27SlJveGs) qui explique chaque étape du processus de charting en détail.

## Les bases
Les charts sont faites en créant un fichier MIDI et en les ouvrant avec [Midi2TromboneChamp](https://github.com/NyxTheShield/Midi2TromboneChamp).

Quelques éditeurs MIDI gratuits et fonctionnels incluent :
- [LMMS](https://lmms.io/)
- [FL Studio (essai gratuit)](https://www.image-line.com/fl-studio-download/)

?> La version d'essai de FL Studio ne permet pas l'exportation MIDI, mais vous pouvez contourner cela en sauvegardant le fichier de projet et en utilisant [flp2midi](https://github.com/Kaydax/flp2midi).

Les notes MIDI devraient être entre 48 et 72 pour correspondre au jeu. Toutes les notes hors de ces nombres deviendront simplement 48 ou 72.

### Notes normales

Les notes normales sont créées à partir de l'éditeur MIDI et ont la même apparence en jeu. Assurez-vous de laisser un espace entre les notes!

### Notes glissées

Les notes glissées sont créées en superposant des notes dans le temps. Pour une paire de notes superposées, la glissée va du début de la première note jusqu'au début de la deuxième. La partie superposée de la première note est éliminée. Voir cette image pour un exemple :

![Exemple de note glissée](../docs/files/slide1.png)

Si une note finit et que la prochaine commence exactement au même moment, elles seront connectées. Cela vous permet d'ajuster où la courbe d'une glissée commence. Voici un exemple de plusieurs glissées reliées ensemble :

(note : la première section droite est une note séparée de la section courbe. Son temps de fin est le même que le temps de début de la prochaine.)

![Exemple de plusieurs notes glissées](../docs/files/slide2.png)

## Convertir de MIDI vers fichier map

1. Allez à <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> et cliquez sur `Midi2TromboneChamp.exe` pour le télécharger.

2. Lancez-le. Dans le sélecteur de fichier qu'il ouvre, sélectionnez votre fichier MIDI. Cliquez sur ouvrir.

3. Remplissez les champs :
 - `Nom de chanson` est le nom complet de la chanson, affiché dans l'info lorsque vous la sélectionnez en jeu.
 - `Nom court` est affiché en naviguant la liste de chansons. Le texte devient de plus en plus petit lorsque le nom est long, alors je ne sais pas s'il y a une longueur maximale.
 - `Nom de dossier` est le nom du dossier dans lequel vous mettrez votre map et votre fichier de chanson. Ex : Si vous définissez « Nom du dossier» comme « ma map», votre chemin de map sera BepInEx/CustomSongs/ma map/song.tmb.
 - `Année` est l'année de création de la chanson.
 - `Auteur` est le compositeur de la chanson.
 - `Difficulté` est le nombre d'étoiles de difficulté qui apparait dans l'info de la chanson.
 - `Espacement des notes` affecte la vitesse de défilement du niveau, en combinaison avec le BPM (tempo).
 - `Fin de la chanson` est le temps où la chanson finit. Elle est calculée automatiquement, mais vous pouvez l'ajuster pour changer quand l'écran de fin de niveau apparait.
 - `Rythmes par mesure` détermine la distance entre les « barres de rythme ».

4. Appuyez sur OK. Dans le sélecteur de fichier qui s'ouvre, créez un dossier avec le même nom que vous avez écrit dans le champ `Nom de dossier`, et sauvegardez-le comme `song.tmb` à l'intérieur de ce dossier.

5. Votre piste de musique devrait être un fichier .ogg. À l'heure où j'écris, la durée de la piste doit être plus longue que la Fin de la chanson, sinon la chanson restera coincée et ne finira jamais. Vous pouvez utiliser un programme comme Audacity afin d'insérer un silence au début de la piste pour l'aligner avec le fichier MIDI. Nommez le fichier de chanson `song.ogg`.

6. Déplacez le fichier ogg dans le même dossier que `song.tmb`.

7. Suivez les [instructions d'installation de chansons personnalisées](installing-songs) pour le tester.

8. [Ajoutez un arrière-plan!](chart-backgrounds)