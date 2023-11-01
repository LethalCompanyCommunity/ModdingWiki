# การลงเพลงที่กำหนดเอง
---
?> If you prefer video tutorials, Rayanne has [a video explaining how to install mods and custom songs](https://youtu.be/6msFI8Sz1UQ).

!> **IMPORTANT:** Make sure you've followed the [mod installation guide](installing-r2modman) to install BepInEx and TrombLoader before continuing!

## การหาเพลง

เพลงที่กำหนดเองสามารถหาได้ที่ช่อง `#custom-charts` ใน [Trombone Champ Modding Discord](https://discord.gg/KVzKRsbetJ)

ถ้าคุณยากได้รายการแบบกระชับ TheGlitched64 ได้สร้าง [สเปรดชีตที่มีข้อมูลของผังสร้างเองทุกตัว](https://docs.google.com/spreadsheets/d/1xpoUnHdSJFqOQEK_637-HCECYtJsgK91oY4dRuDMtik/edit?usp=sharing)

## การติดตั้ง

1. ดาวน์โหลดเพลงกำหนดเอง มันจะเป็นไฟล์บีบอัดโดยทั่วไป ส่วนใหญ่ลงท้ายด้วย `.zip`

2. Extract the contents of the archive file directly into the `BepInEx/CustomSongs` folder in the r2modman profile directory.

![ตัวอย่างการแตกไฟล์ BepInEx](../docs/files/customsongextract.png)

3. ตรวจสอบอีกรอบว่าเพลงเป็นโฟล์เดอร์เดียวและไม่เป็นหลายไฟล์ - ในตัวอย่างนี้ไฟล์ของเพลงควรที่จะอยู่ใน `BepinEx/CustomSongs/BakaMitai/`

![ตัวอย่างการแตกไฟล์ที่ถูกต้อง](../docs/files/customsongcorrect.png)

### การสร้างเพลงที่กำหนดเอง {docsify-ignore}

> ไปที่ [**คู่มือการสร้างผัง**](creating-charts) สำหรับการสร้างผังของคุณเอง