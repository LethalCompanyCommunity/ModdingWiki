# Фони чартів
---

Фони — важлива частина чарту, їх є пару типів (у порядку складності):

### .png

Якщо ви хочете простий, легкий фон — це найкращий вибір.

Просто покладіть зображення з назвою `bg.png` та роздільною здатністю `1920x1080` у папку пісні.

Використовувати розширення `1920x1080` не обов'язково, проте воно може поводитися дивно, оскільки масштабування спрайтів Unity базується на основі роздільної здатності зображення.

### .mp4

Якщо ви хочете трохи цікавіший фон, наприклад музичний кліп, або просто фон який рухається — ви також можете використовувати відео!

Simply put an mp4 named `bg.mp4` in your song's folder.

You can use any resolution of video, but **please** try to keep the size reasonable - aim for under 50MB. If your video's size is too high, you can always lower the resolution in your favorite video editor.

### .trombackground

If you want a background that'll blow people away, want to use events, or want to have full creative control of how your chart looks, it's highly recommended to use a `.trombackground` file.

This will give you the full power of the Unity Editor, and the amount of things you can do is significantly higher than either of the other methods.

The instructions are currently found in a detailed readme on the Unity Project GitHub: <https://github.com/legoandmars/TrombLoaderBackgroundProject/>