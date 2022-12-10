# การลง Mods
---

?> ถ้าคุณอยากได้วิธีแบบวีดีโอ VorgunTheBeta มี [วีดีโออธิบายวิธีการลง mods และ การลงเพลงกำหนดเอง](https://youtu.be/pSwNSGx-P5c)

?> จุดเริ่มของคู่มือนี้ใช้ได้กับ Linux และ Steam Deck! เอาให้แน่ใจว่า [อ่านจนจบ](#linuxsteam-deck-specific-tips) สำหรับรายละเอียดอื่นๆ

## การหาที่ลง
1. เปิด Steam และคลิกขวาที่ Trombone Champ จากนั้นไปที่ `Manage > Browse local files`

![ตัวอย่างเมนูคลิกขวา](../docs/files/localfilescontext.png)

2. กดไปที่ช่องที่อยู่ข้างบนเพื่อที่จะเลือกเส้นทางโฟล์เดอร์สำหรับการลง กด `CTRL`+`C` เพื่อคัดลอกนี้ไปที่คลิปบอรด์

![ตัวอย่างการก็อปปี้โฟล์เดอร์เป็นเส้นทาง](../docs/files/copyfolderpath.png)

## การลง BepInEx

1. ดาวน์โหลด [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest)ใส่ในโฟล์เดอร์ TromboneChamp ของคุณ คุณจะต้องเอา `BepinEx_x64_VERSION.zip` โดย `VERSION` จะเป็นเลขของเวอร์ชั่น
2. แตกไฟล์ BepInEx .zip ไปที่ [โฟล์เดอร์ทีลง](##finding-install-location) Trombone Champ ของคุณ

![ตัวอย่างการแตกไฟล์ BepInEx](../docs/files/bepinexextract.png)

!> ใฟ้แน่ใจว่าคุณได้ดาวน์โหลด BepInEx เวอร์ชั่น `x64` เวอร์ชั่น `unix` และ `x86` จะทำให้เกมของคุณทำงานไม่ถูกต้อง นี่รวมถึงผู้ที่ใช้ Linux และ Steam Deck

!> **สำคัญ:** แตกไฟล์ BepInEx ไปที่โฟล์เดอร์เกมของคุณ *โดยตรง* อย่างที่ภาพแสดงข้างบน ถ้าคุณทำมันถูกต้องโฟล์เดอร์เกมของคุณจะดูเหมือนภาพข้างล่าง

![การลง BepinEx เสร็จสิ้น](../docs/files/finishedbepinex.png)

3. เปิด Trombone Champ เพื่อเสร็จสินการลง

## การติดตั้ง

และเมื่อ BepInEx ติดตั้ง คุณสามารถดาวน์โหลด Mods ได้ - รายการทั้งหมดมีอยู่ที่ช่อง `#mod-releases` ใน [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)

ส่วนนี้จะใช้ [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) เป็นตัวอย่าง ตามที่คุณต้องการที่จะลงเพลงที่กำหนดเอง

1. ไปที่ [โฟล์เดอร์ที่คุณลงเกม](###finding-install-location) แล้วไปที่โฟล์เอดร์ `BepInEx` จากนั้นโฟล์เดอร์ `plugins`

2. กดไปที่ช่องที่อยู่ข้างบนเพื่อที่จะเลือกเส้นทางโฟล์เดอร์สำหรับการลง กด `CTRL`+`C` เพื่อคัดลอกนี้ไปที่คลิปบอรด์

![ตัวอย่างการก็อปปี้โฟล์เดอร์เป็นเส้นทาง](../docs/files/copyfolderpathplugins.png)

3. ดาวน์โหลดไฟล์ .dll ของ Mod ไปที่โฟล์เดอร์ที่สุดกอปปี้ไว้

![ตัวอย่างโฟล์เดอร์ Plugins](../docs/files/pluginswithtrombloader.png)

4. เปิด Trombone Champ เพื่อที่จะให้ Mod เริ่มต้นไฟล์ที่ต้องการ

## เคล็ดลับ สำหรับ Linux และ Steam Deck
<details closed>
<summary>ขยาย</summary>

ขั้นตอนการลง BepInEx ส่วนใหญ่จะเหมือนกับ Windows ข้างบน แต่ยังไงก็ตามจะมีบางสิ่งที่ต้องรู้ไว้ก่อน:

 - ผู้ใช้ Steam Deck จะต้องเปลี่ยนเป็น Desktop Mode เพื่อที่จะทำตามคู่มือนี้ โดย กดปุ่ม Power ค้างไว้และเลือก `Desktop Mode` จากเมนู

 - ผู้ใช้ Steam Deck จะต้องติดตั้งเกมไปที่จัดเก็บภายใน เพราะว่า BepInEx จะไม่โหลดจาก microSD card

 - อย่างที่บอกไว้ คุณจะต้องลง BepInEx เวอร์ชั่น `x64` ของ Windows ไม่ใช่เวอร์ชั่น `unix` เพราะว่า Trombone Champ ยังเป็นโปรแกรมของ Windows วิ่งด้วย Proton

 - ไฟล์ เซฟเกม และ บันทึกข้อมูล เก็บอยู่ที่โฟล์เดอร์ Steam ข้างในโฟล์เดอร์ความเข้ากันได้ของ Proton

    - บน Steam Deck หาได้ที่: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - ใน Linux ชนิดอื่นคุณสามารถใช้คำสั่ง `locate -r /Holy Wow$` บนเทอร์มินัลถ้าคุณไม่แน่ใจว่าโฟล์เดอร์ Steam อยู่ที่ไหน

คุณจะยังต้องการเพิ่ม `WINEDLLOVERRIDES="winhttp=n,b" %command%` ที่ตัวเลือการเริ่มเกมของคุณ ทำอันนี้โดยการ คลิกขวาที่เกมใน Steam และคลิก `Properties` Proton จะไม่โหลดไฟล์ BepInEx เว้นแต่ว่าจะบอกให้มันโหลด ไม่เหมือนกับ Windows

![ตัวอย่าง Steam Properties](../docs/files/linuxsteamproperties.png)

และเมื่อเพิ่ม BepInEx ควรที่จะใช้งานได้ตอนนี้ ลง mods ของคุณ [ตามที่ขั้นตอนข้างบน](##installation) เพื่อที่จะได้เพลงที่กำหนดเองใช้งานได้

### วีดีโอพื้นหลัง {docsify-ignore}

เพลงที่กำหนดเองบางเพลงจะมีพื้นหลังที่เป็นวีดีโอ และ Proton พื้นฐานไม่สารมารถเล่นได้ ถ้าคุณอยากให้มันใช้งานได้คุณสามารถลง `GE-Proton` โดยใช้ [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/) Proton เวอร์ชั่นนี้ได้รวมฟีเจอร์เพิ่มเติมรวมถึงการเล่นรูปแบบวีดีโอที่ Valve ไม่สามารถที่สนันสนุนอยากเป็นทางการได้

เราแนะนำให้ทำตาม [คู่มือนี้สร้างโดย GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) สำหรับการใช้งาน ProtonUp-Qt และติดตั้ง `GE-Proton`

!> แม้กระทั่งมี GE-Proton คุณอาจจะยังมีปัญหากับการเล่นวีดีโอขึ้นอยู่กับคอมพิวเตอร์ของคุณ </details>

## การลงเพลงที่กำหนดเอง {docsify-ignore}

> ดูที่ [**คู่มือเพลงที่กำหนดเอง**](installing-songs) สำหรับข้อมูลการลงเพลงที่กำหนดเอง