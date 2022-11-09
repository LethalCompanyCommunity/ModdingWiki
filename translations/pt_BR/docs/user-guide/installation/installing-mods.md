# Instalando mods
---

?> Se preferir, VorgunTheBeta tem [um vídeo explicando como instalar mods e músicas personalizadas](https://youtu.be/pSwNSGx-P5c).

?> O início deste guia também funciona para Linux e Steam Deck! Certifique-se de que [leia o final](#linuxsteam-deck-specific-tips) para obter detalhes adicionais.

## Encontrando o local de instalação
1. Abra a Steam e dê um clique direito em Trombone Champ. Após isso, vá para `Gerenciar > Navegar pelos arquivos locais`.

![Preview do menu de clique direito](../docs/files/localfilescontext.png)

2. Clique na barra de endereço no topo para selecionar a sua pasta de instalação. Aperte `CTRL`+`C` para copiar isso a sua área de transferência.

![Preview do diretório da pasta](../docs/files/copyfolderpath.png)

## Instalando o BepInEx

1. Baixe o [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) e ponha o arquivo na pasta do Trombone Champ. Queremos ter o arquivo `BepinEx_x64_VERSÃO.zip`, sendo `VERSÃO` o número da versão do arquivo.
2. Extraia o conteúdo do BepInEx.zip diretamente para a [pasta de instalação](##finding-install-location) do Trombone Champ.

![Preview da extração do BepInEx](../docs/files/bepinexextract.png)

!> Tenha certeza de que você baixou a versão `x64` do BepInEx. As versões em `unix` e `x86` farão com que o jogo não funcione devidamente. Isso também se aplica aos usuários que usam Linux/Steam Deck.

!> **IMPORTANTE:** Extraia o BepInEx *diretamente* a pasta de instalação como mostrado na imagem acima. Se feito corretamente, a pasta de instalação do jogo deve se parecer com a imagem mostrada abaixo.

![Instalação finalizada do BepInEx](../docs/files/finishedbepinex.png)

3. Abra o Trombone Champ uma vez só para completar a instalação.

## Instalação

Com o BepInEx instalado, você pode começar a baixar mods específicos — uma lista completa está disponível no canal `#mod-releases` no [Discord de modding para Trombone Champ](https://discord.gg/KVzKRsbetJ).

Como você provavelmente quer instalar músicas personalizadas, esta seção irá usar o [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) como um exemplo.

1. Navegue até a [pasta de instalação](###finding-install-location), a pasta `BepInEx`, terminando na pasta `plugins`.

2. Clique na barra de endereço no topo para selecionar a sua pasta de instalação. Aperte `CTRL`+`C` para copiar isso a sua área de transferência.

![Preview do diretório da pasta](../docs/files/copyfolderpathplugins.png)

3. Baixe e insira o arquivo .dll na pasta mencionada.

![Preview da pasta de plugins](../docs/files/pluginswithtrombloader.png)

4. Abra o Trombone Champ uma vez só, assim inicializando os arquivos necessários para o mod funcionar.

## Dicas para Linux/Steam Deck
<details closed>
<summary>Expandir</summary>

O processo de instalação do BepInEx é quase igual ao do Windows mostrado acima, mas tem algumas coisas extras que precisamos estar cientes:

 - Para seguir esse guia, o Steam Deck precisa estar no modo desktop. Isso pode ser feito segurando o botão liga/desliga e selecionando o `Desktop Mode` no menu.

 - O jogo deve estar instalado no armazenamento interno do Steam Deck, já que o BepInEx não é carregado em cartões MicroSD.

 - Como mencionado anteriormente, A versão instalada do BepInEx deve ser a versão Windows `x64`, e não a em `unix`, já que o Trombone Champ é um aplicativo Windows rodando em Proton.

 - Os arquivos save e log são armazenados na sua pasta Steam, nas pastas de compatibilidade Proton.

    - Dentro do Steam Deck, isso pode ser encontrado no diretório: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - Em outras versões Linux você pode executar o comando `locate -r /Holy Wow<0>locate -r /Holy Wow$` no terminal se não tiver certeza de onde estão suas pastas da Steam.

Você também precisará adicionar `WINEDLLOVERRIDES="winhttp=n,b" %command%` às opções de Inicialização do seu jogo. Para fazer isso, clique com o botão direito no seu jogo na Steam e entre nas `Properties`. Ao contrário do Windows, o Proton não vai carregar os arquivos do BepInEx, a menos que seja instruído para o mesmo.

![Preview das propriedades da Steam](../docs/files/linuxsteamproperties.png)

Uma vez adicionado, o BepInEx deve funcionar agora! Instale seus mods [como instruído acima](##installation) para obter suas músicas personalizadas.

### Vídeos como plano de fundo {docsify-ignore}

Algumas músicas personalizadas tem vídeos como plano de fundo, e a instalação padrão do Proton não vai os reproduzir. Se quiser que eles funcionem, você pode instalar o `GE-Proton` usando [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). Essa é uma versão personalizada do Proton que possuí algumas ferramentas adicionais, incluindo a reprdução de vídeos em formatos que o Proton da Valve não suporta naturalmente.

Recomendamos seguir [este guia criado pelo GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) para obter instruções sobre como usar o ProtonUp-Qt e instalar o `GE-Proton`.

!> Mesmo com o GE-Proton, ainda pode acontecer engasgos na reprodução do vídeo, dependendo das suas configurações. </details>

## Instalando músicas personalizadas {docsify-ignore}

> Dê uma olhada na nossa [**guia de músicas personalizadas**](installing-songs) para descobrir como instalar músicas personalizadas.