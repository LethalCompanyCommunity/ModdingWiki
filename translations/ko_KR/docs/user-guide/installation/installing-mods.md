# 모드 설치
---

?> 동영상 튜토리얼을 선호하는 경우 VorgunTheBeta의 [모드 및 커스텀 곡 설치 방법](https://youtu.be/pSwNSGx-P5c)에 대한 동영상을 참고하세요.

?> 이 가이드의 첫 부분은 Linux와 Steam Deck에서도 작동합니다! 자세한 내용은 [끝 부분](#linuxsteam-deck-specific-tips)을 반드시 읽어보세요.

## 설치 위치 찾기
1. Steam 라이브러리에서 Trombone Champ를 우클릭합니다. 그 다음 `관리 > 로컬 파일 보기`를 클릭합니다.

![우클릭 메뉴 미리 보기](../docs/files/localfilescontext.png)

2. 상단의 주소 표시줄을 클릭하여 설치 폴더의 경로를 선택합니다. `CTRL`+`C`를 눌러 클립보드에 복사합니다.

![폴더 경로 복사 미리 보기](../docs/files/copyfolderpath.png)

## BepInEx 설치

1. [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)를 TrombonChamp 폴더에 다운로드합니다. `BepinEx_x64_VERSION.zip`라는 파일이 있습니다.
2. 다운로드한 .zip 파일을 Trombone Champ의 설치 폴더에 압축을 해제합니다.

![BepInEx 압축 해제 미리 보기](../docs/files/bepinexextract.png)

!> BepInEx의 `x64` 버전을 다운로드했는지 확인하세요. `unix`와 `x86` 버전은 게임이 제대로 작동하지 않게 됩니다. 이는 Linux/Steam Deck 사용자에게도 적용됩니다.

!> **중요:** 위의 이미지와 같이 BepInEx를 게임 폴더에 *직접* 압축을 풉니다. 제대로 했다면 게임 폴더는 아래 이미지와 같아야 합니다.

![BepinEx 설치 완료](../docs/files/finishedbepinex.png)

3. Trombone Champ를 한 번 실행하여 설치를 완료합니다.

## 모드 설치

BepInEx가 설치되면 각종 모드를 설치할 수 있게 됩니다. [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)의 `#mod-releases` 채널에서 배포되고 있는 모드 목록을 확인할 수 있습니다.

커스텀 곡을 추가하려는 경우 이 섹션에서는 [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest)를 예시로 설명합니다.

1. [게임 설치 폴더](###finding-install-location), `BepInEx` 폴더, `plugins` 폴더 순서로 이동합니다.

2. 상단의 주소 표시줄을 클릭하여 설치 폴더의 경로를 선택합니다. `CTRL`+`C`를 눌러 클립보드에 복사합니다.

![폴더 경로 복사 미리 보기](../docs/files/copyfolderpathplugins.png)

3. 모드의 .dll 파일을 복사한 폴더 위치에 다운로드합니다.

![플러그인 폴더 미리 보기](../docs/files/pluginswithtrombloader.png)

4. Trombone Champ를 한 번 실행하여 해당 모드에 필요한 파일을 초기화합니다.

## Linux/Steam Deck의 경우
<details closed>
<summary>펼치기</summary>

BepInEx 설치 과정은 위에 서술된 Windows와 대체로 동일하지만 먼저 주의해야 할 추가 사항이 있습니다:

 - 가이드를 따르려면 Steam Deck 사용자는 전원 버튼을 누른 상태에서 메뉴에서 `데스크톱 모드`를 선택하여 데스크톱 모드로 전환해야 합니다.

 - Steam Deck 사용자는 microSD 카드에서 BepInEx가 읽히지 않기 때문에 게임을 내부 저장소에 설치해야 합니다.

 - 앞서 언급한 바와 같이 Trombone Champ는 Proton 환경에서 동작하는 Windows 어플리케이션이기 때문에 `unix`가 아닌 `x64`의 Windows용 BepInEx를 설치해야 합니다.

 - 세이브 파일이나 로그 파일은 Proton 호환 폴더 내의 Steam 폴더에 저장됩니다.

    - Steam Deck의 경우 다음 위치에서 확인할 수 있습니다: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - 다른 Linux 플레이버에서는 Steam 폴더의 위치를 모르는 경우 터미널에서 `locate -r /Holy Wow$`을 실행해 주세요.

또한 게임 시작 옵션에 `WINEDLLOVERRIDES="winhttp=n,b" %command%`를 추가해야 합니다. 입력하려면, Steam 라이브러리에서 게임을 우클릭하고 `속성`을 클릭합니다. Windows와 달리 Steam Proton은 시작 옵션에서 별다른 지시가 없는 한 BepInEx의 파일을 가져오지 않습니다.

![Steam 속성 미리 보기](../docs/files/linuxsteamproperties.png)

추가되면 BepInEx가 작동합니다! [위의 지침](##installation)에 따라 모드를 설치하여 커스텀 곡을 설치합니다.

### 동영상 배경 {docsify-ignore}

일부 커스텀 곡에는 배경에 대한 동영상이 포함되며, 기본 Proton 설치에서는 이러한 동영상을 재생할 수 없습니다. 이러한 기능을 사용하려면 [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/)을 사용하여 `GE-Proton`을 설치하면 됩니다. 이것은 Valve가 공식적으로 지원할 수 없는 비디오 포맷을 재생하는 기능을 포함한 몇 가지 추가 기능을 포함하는 Proton 버전입니다.

Proton Up-Qt 사용 및 `GE-Proton` 설치 방법에 대해서는 [Gaming On Linux에서 작성한 이 가이드](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/)를 참조하는 것이 좋습니다.

!> 만일 GE-Proton을 사용해도 설정의 방법에 따라서는 동영상의 재생에 문제가 발생하는 경우가 있습니다. </details>

## 커스텀 곡 설치 {docsify-ignore}

> 커스텀 곡의 설치에 관해서는 [**커스텀 곡 가이드**](installing-songs)를 참조해 주세요.