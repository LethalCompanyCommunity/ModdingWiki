# Infos diverses de charting
---

## Couleur de note
Si vous voulez changer la couleur de votre note, vous pouvez le faire! Ouvrez votre fichier `song.tmb` dans votre éditeur de texte préféré et ajoutez des matrices `note_color_start` et `note_color_end` à la fin.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Avant ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Après ^
```
Le format de couleur est RGB1. L'example ci-haut commence en noir et finit en blanc. Pour convertir vers ce format, utilisez un sélecteur de couleur comme <https://rgbacolorpicker.com/> et prenez les valeurs RGB des couleurs que vous souhaitez. Disons que l'on veut utiliser un beau pourpre foncé qui est `rgb(84, 14, 50)`. Pour utiliser ceci, divisez tout par `255` et mettez le résultat dans la matrice.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Maintenant, les notes finissent et commencent avec ce beau pourpre foncé!


## Autre info de .trombackground

### Rendu par-dessus le tromboniste
Si vous faites un `.trombackground`, vous pouvez faire le rendu PAR-DESSUS le tromboniste en réglant la profondeur de la caméra à 1

### Ajouter le tromboniste à la scène
Si vous faites un `.trombackground` et vous voulez déplacer le joueur, ajoutez le prefab `Prefabs/Tromboner` à votre arrière-plan.

Une fois le jeu chargé, il sera remplacé avec un clone parfait du joueur.

Vous pouvez aussi changer le modèle du joueur et l'apparence du trombone si vous ne voulez pas qu'il soit identique au joueur.

(Utilisez en conjonction avec l'astuce de rendu en profondeur ci-dessus afin de complètement changer l'apparence du tromboniste!)