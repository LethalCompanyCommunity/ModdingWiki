# พื้นหลังของผัง
---

พื้นหลังเป็นฟีเจอร์ที่สำคัญของผังและมีความแตกต่างบางประการ (ตามลำดับความซับซ้อน)

### .png

อันนี้แนะนำถ้าคุณอยากได้พื้นหลังแบบง่ายๆ

แค่ใส่ภาพขนาด `1920x1080` และเปลี่ยนชื่อเป็น `bg.png` ในโฟลเดอร์ของคุณ

คุณสามารณใช้ภาพที่ไม่ใช่ขนาด `1920x1080` แต่อาจจะมีอาการผิดปกติเพราะ unity sprite scale นั้นขึ้นอยู่กับขนาดภาพ

### .mp4

If you want a slightly more interesting background, a music video background, or want to prerender a moving background, you can also use a video!

Simply put an mp4 named `bg.mp4` in your song's folder.

You can use any resolution of video, but **please** try to keep the size reasonable - aim for under 50MB. If your video's size is too high, you can always lower the resolution in your favorite video editor.

### .trombackground

If you want a background that'll blow people away, want to use events, or want to have full creative control of how your chart looks, it's highly recommended to use a `.trombackground` file.

This will give you the full power of the Unity Editor, and the amount of things you can do is significantly higher than either of the other methods.

The instructions are currently found in a detailed readme on the Unity Project GitHub: <https://github.com/legoandmars/TrombLoaderBackgroundProject/>