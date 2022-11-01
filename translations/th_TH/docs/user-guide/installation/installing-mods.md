# การลง Mods
---

?> ถ้าคุณอยากได้วิธีแบบวีดีโอ VorgunTheBeta มี [วีดีโออธิบายวิธีการลง mods และ การลงเพลงกำหนดเอง](https://youtu.be/pSwNSGx-P5c)

?> จุดเริ่มของคู่มือนี้ใช้ได้กับ Linux และ Steam Deck! เอาให้แน่ใจว่า [อ่านจนจบ](#linuxsteam-deck-specific-tips) สำหรับรายละเอียดอื่นๆ

## การหาที่ลง
1. เปิด Steam และคลิกขวาที่ Trombone Champ จากนั้นไปที่ `Manage > Browse local files`

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. กดไปที่ช่องที่อยู่ข้างบนเพื่อที่จะเลือกเส้นทางโฟล์เดอร์สำหรับการลง กด `CTRL`+`C` เพื่อคัดลอกนี้ไปที่คลิปบอรด์

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## การลง BepInEx

1. ดาวน์โหลด [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)ใส่ในโฟล์เดอร์ TromboneChamp ของคุณ คุณจะต้องเอา `BepinEx_x64_VERSION.zip` โดย `VERSION` จะเป็นเลขของเวอร์ชั่น
2. Extract the contents of the BepInEx .zip file directly into the [install folder](##finding-install-location) of your Trombone Champ installation.

![BepInEx Extraction Preview](../docs/files/bepinexextract.png)

!> Please ensure that you've downloaded the `x64` version of BepInEx. the `unix` and `x86` versions will cause your game to not function properly. This also applies to users on Linux/Steam Deck.

!> **IMPORTANT:** Extract BepInEx *directly* into your game's folder as shown in the image above. If you've done it correctly, your game's folder should look like the below image.

![Finished BepinEx Install](../docs/files/finishedbepinex.png)

3. Run Trombone Champ once to complete installation.

## Installation

With BepInEx installed, you can start downloading specific mods - a full list is available in the `#mod-releases` channel in the [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ).

As you likely want to install custom songs, this section will use [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) as an example.

1. Navigate to your [game's install folder](###finding-install-location), the `BepInEx` folder, then the `plugins` folder.

2. Click the address bar at the top to select your installation folder's path. Hit `CTRL`+`C` to copy this to your clipboard.

![Copy Folder Path Preview](../docs/files/copyfolderpathplugins.png)

3. Download the mod's .dll file into the copied folder.

![Plugins Folder Preview](../docs/files/pluginswithtrombloader.png)

4. Run Trombone Champ once to initialize necessary files for that mod.

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

## การลงเพลงที่กำหนดเอง {docsify-ignore}

> ดูที่ [**คู่มือเพลงที่กำหนดเอง**](installing-songs) สำหรับข้อมูลการลงเพลงที่กำหนดเอง