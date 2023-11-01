# Guided de chartin
---
Les directives suivantes ne sont pas des exigences absolues. Le but est de créer une chart amusante à jouer. Si ignorer ces règles rend une chart plus amusante ou engageante (par exemple, Rush E), vous pouvez le faire sans problème. Crédits : tsunderestorm, StaticR.

## Bonne pratiques
- Ne soyez pas faux. Si vous avez une mauvaise oreille, demandez à #charting ou #wip de vous assister.
- Ne soyez pas hors rythme. Vous pouvez ralentir la chanson dans votre éditeur pour permettre de distinguer des rythmes plus rapides.
- Ne commencez pas et ne finissez pas brusquement.
  - Donnez au moins une mesure de repos avant la première note et continuez votre chart jusqu'à la fin de la chanson.
  - Ajustez la longueur / le point final de la chanson si les rideaux se ferment un peu trop rapidement avant la fin de la piste de fond. Ne définissez pas le point de terminaison de la chanson dans le tmb pour qu'il soit plus long que la longueur du morceau. Sinon, le morceau ne se terminera pas.
- A note can be held for 4.5 seconds before running out of breath. If you have a note or slide longer than that, it's recommended to break it up so the player can catch their breath.
- Chords typically consist of 3-4 notes. The highest or lowest note usually sounds the cleanest to chart.
- Trombone Champ DOES support decimal BPMs. Trombone Charter, however, does not, so you will need to edit a decimal BPM into the .tmb another way.
- Avoid excessively long rest sections.

### Note Spacing
- Maintenir l'espacement de notes approprié à la difficulté.
  - Comme directive générale, la note et l'espace entre celle-ci et la note suivante devraient être de même longueur
  - **IDÉAL**:
  - ![Espacement idéal de notes](../docs/files/charting/ideal-note-spacing.png)
  - **NON IDÉAL**: (cela pourrait paraitre bien dans l'aperçu ou l'autotoot, mais ne donne pas beaucoup de temps au joueur pour relâcher et cliquer sur la note suivante)
  - ![Mauvais espacement de notes](../docs/files/charting/bad-note-spacing.png)
  - Vous pouvez faire des exceptions :
    - pour mettre l'accent sur [l'articulation](https://people.carleton.edu/~jellinge/m101s12/Pages/04/04Articulation.html) comme des glisses, staccato ou legato
    - pour faciliter le maintien d'un combo dans des sections très rapides
    - si le tempo de la chanson est lent et un espacement serré est adéquat
- Le rythme devrait être visuellement intuitif. Si les notes sont un peu plus longues, elles devraient être un peu plus longues visuellement. Si les notes sont un peu plus courtes, elles devraient être légèrement plus courtes visuellement.
  - **IDÉAL**: (facile de voir lesquelles sont des triples croches (1/8) et lesquelles sont des triples croches pointées (3/16))
  - ![Rythme visuel idéal](../docs/files/charting/ideal-visual-rhythm.png)
  - **NON IDÉAL**: (toutes les notes se lisent comme des triples croches)
  - ![Rythme visuel incorrect](../docs/files/charting/bad-visual-rhythm.png)
- Utilisez une valeur raisonnable de `savednotespacing` (vitesse de défilement)
  - 120~200, selon la complexité de la chanson. Une bonne ligne directrice est `100/[BPM]*280`.
  - Cela devrait être assez rapide pour que le rythme soit visuellement intuitif et assez lent pour que le lecteur ait le temps de réagir.
  - Cette valeur ne doit pas nécessairement être la même que le tempo !

### Glisses
- Éviter les glisses à 90 degrés.
  - **IDÉAL**: (le joueur a suffisamment de temps pour changer de hauteur de note. Selon la latence, vous pouvez ajuster la position des points de connexion.)
  - ![Glisse idéale 1](../docs/files/charting/ideal-slide1.png)
  - **PEUT-ÊTRE IDÉAL**: (seulement si une transition rapide est absolument nécessaire)
  - ![Glisse idéale 2](../docs/files/charting/ideal-slide2.png)
  - **NON IDÉAL**: (ceci n'est pas humainement jouable)
  - ![Mauvaise glisse](../docs/files/charting/bad-slide.png)
- A slide approaches the target pitch before the slide end.
  - Make the end of the slide ~1-2 32nd notes late, depending on the length of the slide.
  - Start the slide about one 16th note before the target beat. It'll still be fine if half the note is a slide.
- For 8th note slides or shorter, you don't need to include a held note in the middle.
  - You often don't need a held note at the slide start, middle or end at all, unless you want the note to be clearly held for an 8th note or longer.
- When charting runs, simplify slides for a consistent stream of notes going up or down.
  - Instead, you can just do one single slide and pull back the end point until the slide curve matches the notes.
  - Making each individual note part of the slide will make the slide very wobbly. You can make an exception if you specifically want the slide to look like this or the note shape is too complex to estimate with one slide.
- Vibrato or trill type slides work great if they connect in the middle of the note.
- Generally, slides are cleaner with fewer connecting points.
- In a very slide heavy track, setting the color to a solid color instead of a 2 color gradient could look way cleaner.
- If you want clean slides with a midi converter, use [TCCC](https://rshieldsprojects.github.io/projects/tccc/)'s custom slide method.
- Slides can only go 1 octave both up and down from the starting note. If you want a chart a slide that spans a greater range, you can break it up in between and/or find a place where you can start the slide towards the middle of the screen.
- You can connect multiple notes at the same pitch as a slide. This plays as one continuous held note. This boosts combo count and champ meter extremely quickly, which may be useful for certain effects and gimmicks, but you wouldn't want to use it outside of that.
- Good slide timings seem to be about 2:1 to 5:1  (slide end late by about half to one 5th of the length of the slide)
  - 1:1 works too for things like trills or vibrato.
  - When in doubt, just putting the slide end a 32nd note late tends to work well for most slides.
- 2 16th notes or shorter connected work completely fine with only one slide, there doesn't need to be any held for it to sound ok, unless it is a very large jump.
- Slide ends don't need a held part, they're fine just ending a bit early (if the slide end is already delayed by the appropriate amount)

### Tap Notes
- Tap notes or dot notes are notes that show up as a single dot on screen.
- You can create tap notes by setting the note duration to be 0.06 or below.
  - The exact value you choose affects how many points the note will give and how wide of a time window the user has to hit the note. For this reason, it is recommended to always set tap note values to 0.06 for maximum ease of playability.
- Note that for most users, tap notes tend to be very difficult to accurately hit. Ideally, tap notes should only be used in places where the spacing does not allow for short held notes to be used instead.

### Pistes en boucle
- Vous pouvez faire quelques répétitions, mais évitez de répéter le même motif de notes trop de fois.
  - Vous pouvez chercher une version TV ou l'éditer vous-même si vous voulez une version plus courte de la chanson.
  - Généralement, c'est plus naturel si vous arrangez les parties les plus faciles ou attendues dans la première partie et basculez vers des alternatives :
    - Souvent, il y a une mélodie primaire et secondaire.
    - Suivez les accords ou lignes de basse.
    - Jouez-le dans une octave différente.
    - Si vous savez ce que vous faites musicalement, utilisez différents accords ou harmonies.
  - Vous voudrez peut-être inverser cela si la partie principale sert de point culminant dans la musique. Les points musicaux culminants vont le mieux vers le dernier tiers ou quart de l'ensemble de la chanson, alors structurer une boucle ainsi peut faire en sorte que le tout ait l'air plus complet.
- Les chansons très courtes sont mieux en boucle jusqu'à environ 1:00 à 1:30, à moins qu'elles soient très répétitives.
- Vous pouvez choisir d'ajouter une boucle complète ou partielle s'il y a différentes parties à jouer dans une section.
- Mettre fin à une chanson qui ne cesse de boucler peut être difficile. Suggestions :
  - Terminer à la fin sans boucle en arrière.
  - Terminer à la première note, au premier accord ou à la première section de la boucle.
  - Faire un fondu dégradé à la fin de la phrase musicale.

## Technical Requirements
- Don't just convert the .mp3 to .mid. This converts all the instruments, but we can only play one note at a time. Finding a MIDI online would also likely not work without a lot of editing.
- Have [beat](https://en.wikipedia.org/wiki/Beat_(music)#On-beat_and_off-beat) markers that line up with the background audio (unless the song has a varying tempo).
- Use an audio editing software like [Audacity](https://www.audacityteam.org/) to add/remove silence to the beginning of a song to help line up the audio file’s beats with the chart’s beats.
- Ensure that the chart is perfectly synced with the background audio.
- Use [AutoToot](https://github.com/TomDotBat/AutoToot) or [Boner Viewer](https://paturages.github.io/boner-viewer/) and listen if the notes are consistently early or late.
- Set a difficulty rating consistent with [TootTally](https://toottally.com/upload/).
- Have a relevant background. Un fond PNG statique peut suffire.
- Have good visual contrast between the notes and the background.
- If necessary, reduce the loudness of the song (via Audacity, etc.) so that the trombone sound can be clearly heard over the background track.
  - -15dB LUFS is a good starting point and the default export setting in the reaper template.

### File Specifications
- Suivez ce format d'archive : `[mychart].zip/[mychart]/[files]`
- Double check for invalid metadata in the .tmb file
  - `trackref` should be unique and not something like `"trackref"="trombone_charter_x64"`.
  - Vérifiez que [le json est valide](https://jsonformatter.curiousconcept.com/#).
- Utilisez h.264 comme codec vidéo pour une compatibilité maximale.
- Have an appropriate video file size (target 10MB per minute of song)
  - Use a tool like [Handbrake](https://handbrake.fr/) to reencode video.
  - Use two-pass encoding with a target bitrate of 1333kbps to eliminate any guesswork.
  - Supprimez complètement la piste audio.
