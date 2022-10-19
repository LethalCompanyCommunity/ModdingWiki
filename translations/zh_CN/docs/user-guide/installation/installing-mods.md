# 安装mod
---

?> 如果需要视频教学, 可参考VorgunTheBeta 的[mod安装与自制曲目导入指南](https://youtu.be/pSwNSGx-P5c).

## 寻找安装位置
1. 打开Steam并右键点击Trombone Champ。 在右键菜单中选择 `管理 > 浏览本地文件`。

![右键菜单预览](../docs/files/localfilescontext.png)

2. 在弹出的文件浏览界面中点击顶部地址栏并选中文件夹路径。 点击`CTRL`+`C`将这个路径复制到剪贴板。

![复制文件夹路径预览](../docs/files/copyfolderpath.png)

## 安装BepInEx

1. 下载[BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)到你的TromboneChamp文件夹。 选择 `BepinEx_x64_VERSION.zip`，其中`VERSION`为版本号。
2. 直接解压压缩包内的文件并放入Trombone Champ的 [文件夹](##finding-install-location)。

![BeepInEx 解压缩预览](../docs/files/bepinexextract.png)

!> 请确认你下载的BepInEx为 `x64`版本， `unix` 与`x86`版本会导致你的游戏无法正常运行。

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

### 安装自制谱面 {docsify-ignore}

> 参考[**Custom Songs guide**](installing-songs) 以获取安装自制谱面的信息。