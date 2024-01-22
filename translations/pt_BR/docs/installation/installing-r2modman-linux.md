---
prev: false
next: false
description: Aprenda a utilizar o r2modman para instalar mods de Lethal Company pela Thunderstore no Linux.
---

# Usando r2modman no Linux e Steam Deck

***

Esse guia vai te ensinar a instalar e usar o [r2modman](https://github.com/ebkr/r2modmanPlus/releases/latest/) para instalar e jogar com mods que estão disponíveis em [Thunderstore](https://thunderstore.io/c/lethal-company/). Usar um gerenciador de mods como o r2modman permite que você atualize e jogue com as últimas versões dos mods de maneira fácil, já que o gerenciador faz tudo para você!

## Preparação específica do Steam Deck

No Steam Deck, você precisará fazer o seguinte antes de continuar seguindo o guia:

- Garanta que o jogo está instalado no armazenamento interno — mods não carregarão se o jogo estiver instalado em um cartão MicroSD.
- Entre no **Modo Desktop** segurando o botão de liga/desliga e selecionando o Modo Desktop no menu.

Quando estiver no modo Desktop, estará pronto para continuar!

:::danger
r2modman **não** funciona no Modo Jogo. Quando tiver terminado de seguir a sessão **Instalando r2modman**, leia também a sessão [**Usando Mods no Modo Jogo do Steam Deck**](installing-r2modman-linux?id=using-mods-in-steam-decks-game-mode) para uma solução alternativa.
:::

## Instalando r2modman

No Linux o r2modman está disponível em diferentes formatos de pacotes, dependendo da sua distro:

- `deb` para distros baseadas em Debian e Ubuntu
- `pacman` para distros baseadas em Arch
- `rpm`para distros usando o RPM Package Manager (RHEL, CentOS, Fedora, openSUSE, etc.)
- `AppImage`, um arquivo executável que funciona na maioria das distros - **útil para o Steam Deck**

Acesse a [**página de publicação do r2modman no GitHub**](https://github.com/ebkr/r2modmanPlus/releases/latest/), baixe o arquivo apropriado para sua distro e instale conforme a documentação do seu gerenciador de pacote.

**Para usuários do Steam Deck**, baixe o arquivo `.AppImage` e o mantenha em um local seguro, como a Desktop (Área de Trabalho) ou a pasta Documents (Documentos). Você também precisará tornar o arquivo como executável. Para fazer isso, clique com o botão direito no arquivo `.AppImage` e selecione `Properties (Propriedades)`. Vá até a aba **Permissions (Permissões)**, marque a caixa `Is Executable (É Executável)` e clique OK.

![Janela de Permissões do Steam Deck](/images/r2modman-linux/appimageproperties.png)

Após marcar o arquivo como executável, você poderá clicar duas vezes em `AppImage` para abrir o r2modman.

## Instalando Mods no r2modman

Quando tiver instalado o r2modman, você poderá finalmente instalar mods.

1. Inicie o **r2modman**. Você verá a seguinte tela.

![Tela de Seleção de Jogos do r2modman](/images/r2modman-install/gameselection.png)

2. Selecione **"Lethal Company"**, e clique em **"Select Game"**.

:::tip
Se não encontrá-lo, **use a barra de pesquisa ou role a tela para baixo** até achar "Lethal Company".
:::

![Selecione Lethal Company](/images/r2modman-install/selectlc.png)

3. O programa perguntará qual perfil você quer usar. Para o propósito deste guia, vamos nos manter com o perfil Default. Clique em **"Select profile"**.

![Select Default Profile](/images/r2modman-install/profileselect.png)

4. This will lead us to this screen.

![First Time Opening Installed](/images/r2modman-install/firsttimeinstall.png)

5. Click **"Online"** on the sidebar. This will bring up a list of all available to download mods on [Thunderstore](https://thunderstore.io/c/lethal-company/).

![Clicking Online](/images/r2modman-install/selectonline.png)

6. From here, you may choose which mods you would like to download and install. Click on a mod you'd like, and then click on Download.

![Downloading a mod](/images/r2modman-install/download.png)

7. It will ask you which version to use. Download the latest version, which is already selected for you by default. Click **"Download with dependencies"** or **"Download"**.

![Downloading with dependencies](/images/r2modman-install/downloadlatest.png)

8. Once you are done installing your mods, you may click on "Start modded" on the sidebar. This will launch the game with your mods.

![Start Lethal Company Modded](/images/r2modman-install/startmodded.png)

That's it! You have just successfully modded Lethal Company!

## Using Mods in Steam Deck's Game Mode

**r2modman will not work in Steam Deck's Game mode, and therefore mods will not load by default.** To get around this, right-click the game in Steam and click `Properties`. From there, paste the following into **Launch Options**:

```
WINEDLLOVERRIDES="winhttp=n,b" %command% --doorstop-enable true --doorstop-target "/home/deck/.config/r2modmanPlus-local/LethalCompany/profiles/Default/BepInEx/core/BepInEx.Preloader.dll" --r2profile "Default"
```

![Steam Properties](/images/r2modman-linux/steamproperties.png)
This will instruct the game to launch with the Default profile we configured in r2modman earlier, so all your mods installed there will be available.

If you'd like to sync your mods with friends, navigate to the [syncing r2modman profiles](syncing-mods) page.
