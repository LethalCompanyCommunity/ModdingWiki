---
prev: false
next: false
description: R2modman을 사용하여 Linux의 Thunderstore 에서 Lethal Company 모드를 설치하는 방법을 배우세요.
---

# R2modman 을 Linux 나 Steam deck 으로 사용하는 법

***

이 가이드에서는 [r2modman] 설치 및 사용 과정을 강의합니다.
(https\://github.com/ebkr/r2modmanPlus/releases/latest/) 를 통해 사용할 수 있는 모드를 설치하고 플레이합니다. [Thunderstore](https://thunderstore.io/c/lethal-company/). R2modman과 같은 모드 관리 프로그램을 사용하면 모드 관리 프로그램이 모든 것을 해주므로 최신 버전의 모드를 쉽게 업데이트하고 플레이할 수 있습니다!

## Steam Deck 설치 방법

Steam Deck은 이 가이드를 따르기 전에 다음 작업을 수행해야 합니다.

- 게임이 내부 저장소에 설치되어 있는지 확인하십시오 - 게임이 MicroSD 카드에 설치되어 있으면 모드가 로드되지 않습니다.
- 전원 버튼을 누르고 메뉴에서 Desktop Mode(데스크탑 모드) 를 선택하여 **데스크탑 모드** 로 들어갑니다.

데스크탑에서 실행을 하셨다면, 당신은 플레이할 준비가 되었습니다!

:::danger
r2modman은 게임 모드에서 "작동하지 않습니다." **r2modman** 설치를 마치면 해결 방법에 대한 [**Steam Deck의 게임 모드에서 모드 사용**](installing-r2modman-linux?id=using-mods-in-steam-decks-game-mode) 섹션을 반드시 읽어주세요.
:::

## R2modman 을 설치하는 방법

Linux 에서 r2modman은 배포판에 따라 다양한 패키지 형식으로 사용할 수 있습니다:

- `deb` for Debian and Ubuntu-based distros
- `pacman` for Arch-based disros
- `rpm` for distros using the RPM Package Manager (RHEL, CentOS, Fedora, openSUSE, etc.)
- `AppImage`, a single executable file that can run on most distros - **useful for Steam Deck**

[**r2modman GitHub releases page**](https://github.com/ebkr/r2modmanPlus/releases/latest/) 에 방문하여 배포판에 적합한 패키지 파일을 다운로드하여 패키지 설명서에 따라 설치합니다.

**SteamDeck 사용자의 경우** '.AppImage' 파일을 다운로드하여 데스크탑이나 Documents 폴더와 같은 안전한 파일 위치에 보관하십시오. 또한 파일을 실행 가능한 파일로 표시해야 합니다. (.exe) 이렇게 하려면 '.AppImage' 파일을 마우스 오른쪽 버튼으로 클릭하고 '속성'을 선택합니다. **Permissions** 탭으로 전환하여 'Is Executable'(실행 가능) 란을 선택한 후 OK(확인) 를 클릭합니다.

![Steam Deck 권한 창](/images/r2modman-linux/appimageproperties.png)

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
