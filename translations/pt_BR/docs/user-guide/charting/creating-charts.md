# Criando Charts
---

?> Se preferir, NyxTheShield tem uma [transmissão arquivada](https://www.youtube.com/watch?v=ig27SlJveGs) que explica o processo de charting por completo e em detalhes.

## Os básicos
Charts são feitos a partir de arquivos midi, passando pelo programa [Midi2TromboneChamp](https://github.com/NyxTheShield/Midi2TromboneChamp).

Alguns editores midi gratuitos que devem funcionar incluem:
- [LMMS](https://lmms.io/)
- [FL Studio (avaliação)](https://www.image-line.com/fl-studio-download/)

?> A edição de avaliação do FL Studio não te permite exportar arquivos MIDI, mas você pode solucionar isto salvando o projeto e em seguida usar o [flp2midi](https://github.com/Kaydax/flp2midi).

As notas Midi devem estar entre a 48 e 72 para se igualar as possíveis no jogo. Quaisquer notas fora deste alcance vão se tornar notas entre a 48 e 72.

### Notas comuns

Notas comuns são criadas no editor midi e tem a mesma aparência no jogo. Lembre-se de deixar uma lacuna no tempo entre as notas!

### Notas deslizantes

Notas deslizantes são criadas sobrepondo outras notas no tempo. Para um par de notas sobrepostas, o deslize vai do começo da primeira nota até o começo da segunda. A parte sobreposta da primeira nota é descartada. Veja esta imagem para um exemplo:

![Exemplo de notas deslizantes](../docs/files/slide1.png)

Se uma nota acaba e outra começa imediatamente, elas estarão conectadas. Isso permite você ajustar onde a curva de um deslize começa. Aqui está um exemplo de vários deslizes conectados simultaneamente:

(nota: A primeira seção reta é uma nota separada da seção curvada. O seu fim é igual à batida onde a próxima nota começa.)

![Exemplo de várias notas deslizantes](../docs/files/slide2.png)

## Convertendo Midi ao arquivo de mapa

1. Vá para <https://github.com/NyxTheShield/Midi2TromboneChamp/releases/latest> e clique em `Midi2TromboneChamp.exe` para baixar o arquivo.

2. Execute-o. No seletor de arquivos que foi aberto, selecione seu arquivo midi. Clique em Abrir.

3. Preencha os campos:
 - `Song Name` é o nome completo da música, mostrado nas informações da música quando selecionada.
 - `Short Name` é mostrado enquanto navega pela çista de músicas. O texto fica menor dependendo do tamanho do nome, mas não se sabe se tem um limite para tal.
 - `Folder Name` é o nome da pasta em que foi colocado a música e o chart. Ex. Se você definiu o nome da pasta como banana, seu chart vai estar localizado em BepInEx/CustomSongs/banana/song.tmb.
 - `Year` é o ano em que a música foi criada.
 - `Author` é o compositor da música.
 - `Difficulty` é o número de estrelas que aparece na informação de dificuldade.
 - `Note Spacing` afeta a velocidade de rolagem, em combinação com o BPM.
 - `Song Endpoint` é a batida em que a música termina. Ela é calculada automaticamente, mas você pode ajustá-la manualmente para mudar quando o nível acaba.
 - `Beats per Bar` determina o quão distantes estão as "linhas de batida".

4. Aperte em OK. No seletor de arquivos que será aberto, crie uma pasta de mesmo nome do `Folder Name`, e salve o arquivo como `song.tmb` na pasta.

5. A sua faixa de música deve ser um arquivo .ogg. No momento da escrita, a duração da faixa deve ser maior que o fim do chart, ou a música fica travada e nunca acaba. Você pode usar programas como o Audacity para inserir silêncio no início da faixa para alinhar o midi. O nome do arquivo deve ser `song.ogg`.

6. Mova o arquivo para a mesma pasta em que se encontra o `song.tmb`.

7. Siga a [guia de instalação de músicas personalizadas](installing-songs) para testá-la.

8. [Adicione um plano de fundo!](chart-backgrounds)