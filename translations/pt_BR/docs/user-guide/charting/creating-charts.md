# Criando Charts
---

?> Se preferir, NyxTheShield tem uma [transmissão arquivada](https://www.youtube.com/watch?v=ig27SlJveGs) que explica o processo de charting por completo e em detalhes.

## Os básicos
### Editores MIDI/DAW
Charts são feitos a partir de um arquivo midi, que em sequência passam por um [conversor MIDI](#converting-midi-to-map-file).

Midi notes should be in the range 47 to 73 to match the game.<br>**NOTE:** Different editors use different values on the piano for this range.

Alguns editores midi gratuitos que devem funcionar incluem:
- [Reaper](https://www.reaper.fm/download.php)* (Range: B2-C#5)
- [LMMS](https://lmms.io/download#windows) (Range: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (Range: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

<sub>*O software é pago, mas tem uma vesão de avaliação que funciona para criar charts.</sub><br> <sub>**As notas exportadas ficam no canal 2 por padrão, o que as fazem incompatíveis com o Midi2TromboneChamp sem modifica-lás.</sub><br> <sub>†A versão de avaliação do FL Studio não permite exportar aquivos midi, mas é possível resolver isso usando o <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>.</p>

<h4 spaces-before="0">
  Projeto Reaper
</h4>

<p spaces-before="0">
  Se não sabe qual editor usar, o Reaper é recomendado, já que existe um projeto customizado para o Trombone Champ que inclui:
</p>

<ul>
  <li>
    Uma explicação básica de como se usa o Reaper (em inglês)
  </li>
  <li>
    Configurações pré-definidas
  </li>
  <li>
    Exemplos de arquivos MIDI
  </li>
</ul>

<p spaces-before="0">
  O projeto pode ser <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">baixado aqui</a>.
</p>

<h3 spaces-before="0">
  Notas comuns
</h3>

<p spaces-before="0">
  Notas comuns são criadas no editor midi e tem a mesma aparência no jogo. Lembre-se de deixar uma lacuna no tempo entre as notas!
</p>

<h3 spaces-before="0">
  Notas deslizantes
</h3>

<p spaces-before="0">
  Notas deslizantes são criadas sobrepondo outras notas no tempo. Para um par de notas sobrepostas, o deslize vai do começo da primeira nota até o começo da segunda. A parte sobreposta da primeira nota é descartada. Veja esta imagem para um exemplo:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="Exemplo de notas deslizantes" />
</p>

<p spaces-before="0">
  Se uma nota acaba e outra começa imediatamente, elas estarão conectadas. Isso permite você ajustar onde a curva de um deslize começa. Aqui está um exemplo de vários deslizes conectados simultaneamente:
</p>

<p spaces-before="0">
  (nota: A primeira seção reta é uma nota separada da seção curvada. O seu fim é igual à batida onde a próxima nota começa.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="Exemplo de várias notas deslizantes" />
</p>

<h2 spaces-before="0">
  Convertendo Midi ao arquivo de mapa
</h2>

<p spaces-before="0">
  ?> Existem dois conversores Midi disponíveis além do Midi2TromboneChamp! <br>O processo para esses novos conversores é semelhante o suficiente, então este guia ainda é utilizável. <br>Se quiser um conversor mais atualizado, sinta-se à vontade para utilizar os seguintes: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Versão Unity)</a> — Uma versão nova em Unity do Midi2TromboneChamp. <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> — Uma versão alternativa na web com novos recursos.
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest</a> and click <code>Midi2TromboneChamp.exe</code> to download it.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Execute-o. No seletor de arquivos que foi aberto, selecione seu arquivo midi. Clique em Abrir.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Preencha os campos:
    </p>
    <ul>
      <li>
        <code>Song Name</code> é o nome completo da música, mostrado nas informações da música quando selecionada.
      </li>
      <li>
        <code>Short Name</code> é mostrado enquanto navega pela çista de músicas. O texto fica menor dependendo do tamanho do nome, mas não se sabe se tem um limite para tal.
      </li>
      <li>
        <code>Folder Name</code> é o nome da pasta em que foi colocado a música e o chart. Ex. Se você definiu o nome da pasta como banana, seu chart vai estar localizado em BepInEx/CustomSongs/banana/song.tmb.
      </li>
      <li>
        <code>Year</code> é o ano em que a música foi criada.
      </li>
      <li>
        <code>Author</code> é o compositor da música.
      </li>
      <li>
        <code>Difficulty</code> é o número de estrelas que aparece na informação de dificuldade.
      </li>
      <li>
        <code>Note Spacing</code> afeta a velocidade de rolagem, em combinação com o BPM.
      </li>
      <li>
        <code>Song Endpoint</code> é a batida em que a música termina. Ela é calculada automaticamente, mas você pode ajustá-la manualmente para mudar quando o nível acaba.
      </li>
      <li>
        <code>Beats per Bar</code> determina o quão distantes estão as "linhas de batida".
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      Aperte em OK. No seletor de arquivos que será aberto, crie uma pasta de mesmo nome do <code>Folder Name</code>, e salve o arquivo como <code>song.tmb</code> na pasta.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      A sua faixa de música deve ser um arquivo .ogg. No momento da escrita, a duração da faixa deve ser maior que o fim do chart, ou a música fica travada e nunca acaba. Você pode usar programas como o Audacity para inserir silêncio no início da faixa para alinhar o midi. O nome do arquivo deve ser <code>song.ogg</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Mova o arquivo para a mesma pasta em que se encontra o <code>song.tmb</code>.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      Siga a <a href="installing-songs">guia de instalação de músicas personalizadas</a> para testá-la.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">Adicione um plano de fundo!</a>
    </p>
  </li>
</ol>
