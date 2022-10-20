# Plano de fundo para charts
---

Planos de fundo são uma característica importante de um chart, e existem alguns tipos diferentes deles (em ordem de complexidade):

### .png

Se quiser um fundo simples e fácil de se fazer, esse é o recomendado.

Simplesmente ponha uma imagem `1920x1080` chamada `bg.png` na pasta de sua música.

Você pode usar imagens que não tem a resolução de `1920x1080`, mas elas talvez se comportem de forma estranha, já que a escala de um sprite na Unity é baseada na resolução da imagem.

### .mp4

Se quiser um plano de fundo um pouco mais interessante, um clipe musical, ou quer pré-renderizar um fundo se movendo, você pode usar um vídeo!

Basta por um arquivo .mp4 com o nome `bg.mp4` na pasta de sua música.

Você pode usar qualquer resolução de vídeo, mas **por favor** tente deixar o tamanho do arquivo razoável — busque ter um arquivo abaixo de 50 MB. Se o tamanho do seu arquivo for muito alto, você pode tentar abaixar a resolução do vídeo no seu editor de escolha.

### .trombackground

Se quiser fazer um plano de fundo que vai deixar a gurizada de queixo caído, quer usar eventos, ou quer ter controle total de seu chart, recomendamos criar um arquivo `.trombackground`.

Isto lhe dará todo o poder do editor Unity, e a quantidade de coisas que você pode fazer é maior que qualquer outro método.

As instruções são atualmente encontradas num detalhado readme no GitHub do projeto Unity: <https://github.com/legoandmars/TrombLoaderBackgroundProject/> (Somente em inglês no momento.)