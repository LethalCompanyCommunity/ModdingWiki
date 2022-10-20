# Plano de fundo para charts
---

Planos de fundo são uma característica importante de um chart, e existem alguns tipos diferentes deles (em ordem de complexidade):

### .png

Se quer um fundo simples e fácil de se fazer, esse é o recomendado.

Simplesmente ponha uma imagem `1920x1080` chamada `bg.png` na pasta de sua música.

Você pode usar imagens que não tem a resolução de `1920x1080`, mas elas talvez se comportem de forma estranha, já que a escala de um sprite na Unity é baseada na resolução da imagem.

### .mp4

Se quiser um plano de fundo um pouco mais interessante, um clipe musical, ou quer pré-renderizar um fundo se movendo, você pode usar um vídeo!

Basta por um arquivo .mp4 com o nome `bg.mp4` na pasta de sua música.

Você pode usar qualquer resolução de vídeo, mas **por favor** tente deixar o tamanho do arquivo razoável — busque ter um arquivo abaixo de 50 MB. Se o tamanho do seu arquivo for muito alto, você pode tentar abaixar a resolução do vídeo no seu editor de escolha.

### .trombackground

If you want a background that'll blow people away, want to use events, or want to have full creative control of how your chart looks, it's highly recommended to use a `.trombackground` file.

This will give you the full power of the Unity Editor, and the amount of things you can do is significantly higher than either of the other methods.

The instructions are currently found in a detailed readme on the Unity Project GitHub: <https://github.com/legoandmars/TrombLoaderBackgroundProject/>