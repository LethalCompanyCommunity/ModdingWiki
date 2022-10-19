# Fondo de Mapa
---

Los fondos son una característica importante de un mapa, y hay unos diferentes tipos (en orden de complejidad):

### .png

Si quieres un fondo simple y fácil, esto se recomienda.

Simplemente pon una imagen`1920x1080` llamada`bg.png` en la carpeta de tu canción.

You can use non-`1920x1080` images, but it might behave weirdly, as unity sprite scale is based on image resolution.

### .mp4

If you want a slightly more interesting background, a music video background, or want to prerender a moving background, you can also use a video!

Simply put an mp4 named `bg.mp4` in your song's folder.

You can use any resolution of video, but **please** try to keep the size reasonable - aim for under 50MB. If your video's size is too high, you can always lower the resolution in your favorite video editor.

### .trombackground

If you want a background that'll blow people away, want to use events, or want to have full creative control of how your chart looks, it's highly recommended to use a `.trombackground` file.

This will give you the full power of the Unity Editor, and the amount of things you can do is significantly higher than either of the other methods.

The instructions are currently found in a detailed readme on the Unity Project GitHub: <https://github.com/legoandmars/TrombLoaderBackgroundProject/>