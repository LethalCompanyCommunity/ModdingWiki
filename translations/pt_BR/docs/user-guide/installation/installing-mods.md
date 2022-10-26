# Instalando mods
---

?> Se preferir, VorgunTheBeta tem [um vídeo explicando como instalar mods e músicas personalizadas](https://youtu.be/pSwNSGx-P5c).

?> The start of this guide also works for Linux and Steam Deck! Make sure to [read the end](#linuxsteam-deck-specific-tips) for additional details.

## Encontrando o local de instalação
1. Abra a Steam e dê um clique direito em Trombone Champ. Após isso, vá para `Gerenciar > Navegar pelos arquivos locais`.

![Preview do menu de clique direito](../docs/files/localfilescontext.png)

2. Clique na barra de endereço no topo para selecionar a sua pasta de instalação. Aperte `CTRL`+`C` para copiar isso a sua área de transferência.

![Preview do diretório da pasta](../docs/files/copyfolderpath.png)

## Instalando o BepInEx

1. Baixe o [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) e ponha o arquivo na pasta do Trombone Champ. Queremos ter o arquivo `BepinEx_x64_VERSÃO.zip`, sendo `VERSÃO` o número da versão do arquivo.
2. Extraia o conteúdo do BepInEx.zip diretamente para a [pasta de instalação](##finding-install-location) do Trombone Champ.

![Preview da extração do BepInEx](../docs/files/bepinexextract.png)

!> Tenha certeza de que você baixou a versão `x64` do BepInEx. As versões em `unix` e `x86` farão com que o jogo não funcione devidamente. This also applies to users on Linux/Steam Deck.

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

## Linux/Steam Deck Tips
<details closed>
<summary>Expand</summary>

The process of installing BepInEx is largely the same as on Windows listed above, however there are some extra things to be aware of first:

 - To follow the guide, Steam Deck users will need to switch to Desktop Mode by holding down the power button and selecting `Desktop Mode` from the menu.

 - Steam Deck users will need to install the game to the internal storage, as BepInEx will not load from the microSD card.

 - As stated earlier, you will still need to install the `x64` Windows version of BepInEx, not the `unix` version, as Trombone Champ is still a Windows application running under Proton.

 - Save and log files are stored in your Steam folder within Proton's compatibility folders.

    - On Steam Deck this can be found at: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - On other Linux flavors you can run `locate -r /Holy Wow$` from the terminal if you're unsure of where your Steam folder is.

You will also need to add `WINEDLLOVERRIDES="winhttp=n,b" %command%` to your game's launch options. To do this, right click the game in Steam and click `Properties`. Unlike on Windows, Proton won't load BepInEx's files unless specifically instructed to here.

![Steam Properties Preview](../docs/files/linuxsteamproperties.png)

Once added, BepInEx should now work! Install your mods [as instructed above](##installation) to get custom songs working.

### Video Backgrounds {docsify-ignore}

Some custom songs will include videos for their backgrounds, and the default Proton install cannot play these back. If you want these to work, you can install `GE-Proton` using [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). This is a version of Proton that includes some additional features, including the ability to play back video formats that Valve are unable to support officially.

We recommend following [this guide created by GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) for instructions on how to use ProtonUp-Qt and install `GE-Proton`.

!> Even with GE-Proton, you may still experience some issues with video playback depending on your setup. </details>

## Instalando músicas personalizadas {docsify-ignore}

> Dê uma olhada na nossa [**guia de músicas personalizadas**](installing-songs) para descobrir como instalar músicas personalizadas.