# 安装mod
---

?> 如果需要视频教学, 可参考VorgunTheBeta 的[mod安装与自制曲目导入指南](https://youtu.be/pSwNSGx-P5c).

?> The start of this guide also works for Linux and Steam Deck! Make sure to [read the end](#linuxsteam-deck-specific-tips) for additional details.

## 寻找安装位置
1. 打开Steam并右键点击Trombone Champ。 在右键菜单中选择 `管理 > 浏览本地文件`。

![右键菜单预览](../docs/files/localfilescontext.png)

2. 在弹出的文件浏览界面中点击顶部地址栏并选中文件夹路径。 点击`CTRL`+`C`将这个路径复制到剪贴板。

![复制文件夹路径预览](../docs/files/copyfolderpath.png)

## 安装BepInEx

1. 下载[BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)到你的TromboneChamp文件夹。 选择 `BepinEx_x64_VERSION.zip`，其中`VERSION`为版本号。
2. 直接解压压缩包内的文件并放入Trombone Champ的 [文件夹](##finding-install-location)。

![BepInEx 解压缩预览](../docs/files/bepinexextract.png)

!> 请确认你下载的BepInEx为 `x64`版本， `unix` 与`x86`版本会导致你的游戏无法正常运行。 This also applies to users on Linux/Steam Deck.

!> **注意:** 如上图所示将 BepInEx *直接*解压 到你的游戏安装文件夹， 如果操作正确，你的游戏安装文件夹会与下图相同。

![BepinEx 安装完成](../docs/files/finishedbepinex.png)

3. 运行一次Trombone Champ来完成安装。

## 安装mod

BepInEx安装完成之后，你就可以开始下载一些特定的mod了。[Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)的`#mod-releases`频道有一份mod清单可供参考。

考虑到你大概率想要安装自制谱面，本节将以 [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest)作为例子。

1. 打开你的[游戏安装文件夹](###finding-install-location)，再打开 `BepInEx`文件夹，然后进入`plugins` 文件夹。

2. 点击顶部地址栏并选中文件夹路径， 点击`CTRL`+`C` 将这个路径复制到剪贴板。

![复制文件夹路径预览](../docs/files/copyfolderpathplugins.png)

3. 下载mod的 .dll 文件到复制的文件夹。

![Plugins文件夹预览](../docs/files/pluginswithtrombloader.png)

4. 运行一次Trombone Champ 来初始化该模组的必要文件。

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

## 安装自制谱面 {docsify-ignore}

> 参考[**Custom Songs guide**](installing-songs) 以获取安装自制谱面的信息。