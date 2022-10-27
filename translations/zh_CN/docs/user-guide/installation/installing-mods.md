# 安装mod
---

?> 如果需要视频教学, 可参考VorgunTheBeta 的[mod安装与自制曲目导入指南](https://youtu.be/pSwNSGx-P5c).

?> 本指南的前半部分也适用于Linux和Steam Deck！ 请务必查看 [结尾](#linuxsteam-deck-specific-tips)以确认关于这两个运行环境的更多信息。

## 寻找安装位置
1. 打开Steam并右键点击Trombone Champ。 在右键菜单中选择 `管理 > 浏览本地文件`。

![右键菜单预览](../docs/files/localfilescontext.png)

2. 在弹出的文件浏览界面中点击顶部地址栏并选中文件夹路径。 点击`CTRL`+`C`将这个路径复制到剪贴板。

![复制文件夹路径预览](../docs/files/copyfolderpath.png)

## 安装BepInEx

1. 下载[BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)到你的TromboneChamp文件夹。 选择 `BepinEx_x64_VERSION.zip`，其中`VERSION`为版本号。
2. 直接解压压缩包内的文件并放入Trombone Champ的 [文件夹](##finding-install-location)。

![BepInEx 解压缩预览](../docs/files/bepinexextract.png)

!> 请确认你下载的BepInEx为 `x64`版本， `unix` 与`x86`版本会导致你的游戏无法正常运行。 这也适用于Linux/Steam Deck的用户。

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

## Linux/Steam Deck 相关
<details closed>
<summary>展开...</summary>

安装BepInEx 的过程与上面列出的 Windows 版本基本相同，但还有一些额外的东西需要首先了解：

 - 在按照指南进行操作之前Steam Deck用户需要按住电源按钮，并从菜单中选择`Desktop Mode/桌面模式`来切换到桌面模式。

 - Steam Deck用户将需要将游戏安装到内部存储，因为BepInEx无法从microSD卡中加载。

 - 如前所述，您仍然需要安装 `x64` Windows 版本的 BepInEx，而不是 `unix` 版本，因为Trombone Champ仍然是一个在 Proton环境下运行的Windows应用程序。

 - 存档与日志文件存储在您的Proton兼容文件夹内的Steam文件夹中。

    - 在Steam Deck上的位置如下： `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - 在其他基于Linux的系统上，如果您不确定您Steam 文件夹的位置，您可以从终端中运行`locate -r /Holy Wow$`

您还需要将 `WINEDLLOVERRIDES="winhttp=n,b" %command%` 添加到您的游戏启动项中。 右键单击Steam中的游戏，然后单击 `Properties/属性`。 与Windows不同的是，除非有明确的命令，Proton不会加载BepInEx的相关文件。

![Steam属性预览](../docs/files/linuxsteamproperties.png)

到这一步，BepInEx应该已经可以正常工作了！ 按照[上方的教程](##installation)安装您的mod，以使自制谱面能正常运行。

### 视频背景 {docsify-ignore}

一些自制谱面可能包含视频文件，默认的Proton设置无法播放。 如果您想要这些视频文件正常播放，可以使用[ProtonUp-Qt](https://davidotek.github.io/protonup-qt/)安装`GE-Proton`。 这是一个包含一些额外功能的Proton版本，包括能够播放Valve官方无法支持的视频格式。

我们建议参考[由GamingOnLinux编写的指南](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) ，用于说明如何使用ProtonUp-Qt安装 `GE-Proton`。

！> 即便使用GE-Proton, 您仍然可能会遇到一些视频播放方面的问题，这取决于您的设置。 </details>

## 安装自制谱面 {docsify-ignore}

> 参考[**Custom Songs guide**](installing-songs) 以获取安装自制谱面的信息。