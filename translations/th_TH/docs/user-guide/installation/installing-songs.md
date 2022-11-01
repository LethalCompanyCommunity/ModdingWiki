# การลงเพลงที่กำหนดเอง
---
?> ถ้าคุณอยากได้วิธีแบบวีดีโอ VorgunTheBeta มี [วีดีโออธิบายวิธีการลง mods และ การลงเพลงกำหนดเอง](https://youtu.be/pSwNSGx-P5c)

!> **สำคัญ:** ให้คุณแน่ใจว่าคุณทำตาม [คู่มือการลง Mod](installing-mods) เพื่อที่จะลง BepInEx และ TrombLoader ก่อนที่จะดำเนินการต่อไป!

## การหาเพลง

เพลงที่กำหนดเองสามารถหาได้ที่ช่อง `#custom-charts` ใน [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)

ถ้าคุณยากได้รายการแบบกระชับ TheGlitched64 ได้สร้าง [สเปรดชีตที่มีข้อมูลของผังสร้างเองทุกตัว](https://docs.google.com/spreadsheets/d/1xpoUnHdSJFqOQEK_637-HCECYtJsgK91oY4dRuDMtik/edit?usp=sharing)

## การติดตั้ง

1. ดาวน์โหลดเพลงกำหนดเอง มันจะเป็นไฟล์บีบอัดโดยทั่วไป ส่วนใหญ่ลงท้ายด้วย `.zip`

2. แตกไฟล์บีบอัดไปที่ข้างในโฟล์เดอร์ที่ได้มาจากการเริ่มเกมครั้งแรกด้วย TrombLoader ที่ `BepInEx/CustomSongs` โดยตรง

![ตัวอย่างการแตกไฟล์ BepInEx](../docs/files/customsongextract.png)

3. ตรวจสอบอีกรอบว่าเพลงเป็นโฟล์เดอร์เดียวและไม่เป็นหลายไฟล์ - ในตัวอย่างนี้ไฟล์ของเพลงควรที่จะอยู่ใน `BepinEx/CustomSongs/BakaMitai/`

![ตัวอย่างการแตกไฟล์ที่ถูกต้อง](../docs/files/customsongcorrect.png)

### การสร้างเพลงที่กำหนดเอง {docsify-ignore}

> ไปที่ [**คู่มือการสร้างผัง**](creating-charts) สำหรับการสร้างผังของคุณเอง