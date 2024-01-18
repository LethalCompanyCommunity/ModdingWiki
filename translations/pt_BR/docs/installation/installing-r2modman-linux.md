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
r2modman **não** funciona no Modo Jogo. Please make sure to read the [**Using Mods in Steam Deck's Game Mode**](installing-r2modman-linux?id=using-mods-in-steam-decks-game-mode) section for a workaround once you've finished with the **Installing r2modman** section.
:::

## Installing r2modman

On Linux, r2modman is available in different package formats depending on your distro:

- `deb` for Debian and Ubuntu-based distros
- `pacman` for Arch-based disros
- `rpm` for distros using the RPM Package Manager (RHEL, CentOS, Fedora, openSUSE, etc.)
- `AppImage`, a single executable file that can run on most distros - **useful for Steam Deck**

Visit the [**r2modman GitHub releases page**](https://github.com/ebkr/r2modmanPlus/releases/latest/) and download the appropriate package file for your distro and install it according to your package manager's documentation.

**For Steam Deck users,** download the `.AppImage` file and keep it in a safe location such as your Desktop or your Documents folder. You will also need to mark the file as executable. To do this, right-click the `.AppImage` file and select `Properties`. Switch to the **Permissions** tab and check the box marked `Is Executable` and click OK.

![Steam Deck Permissions Window](/images/r2modman-linux/appimageproperties.png)

After marking the file as executable, you can now double-click the `AppImage` to open r2modman.

## Installing Mods on r2modman

Once you have succesfully installed r2modman, you can finally install mods.

1. Launch **r2modman**. You will be greeted with the following screen.

![r2modman Game Selection Screen](/images/r2modman-install/gameselection.png)

2. Select **"Lethal Company"**, and click **"Select Game"**.

:::tip
If you do not see it, **use the search bar or scroll down** to find "Lethal Company".
:::

![Select Lethal Company](/images/r2modman-install/selectlc.png)

3. It will ask you to choose which profile to use. For this guide's purposes, we will stick with the Default profile. Click **"Select profile"**.

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
