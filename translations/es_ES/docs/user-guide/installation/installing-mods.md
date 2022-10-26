# Instalando Mods
---

?> Si prefieres tutoriales en vídeo, VorgunTheBeta tiene [un vídeo explicando como instalar mods y canciones personalizadas](https://youtu.be/pSwNSGx-P5c).

?> The start of this guide also works for Linux and Steam Deck! Make sure to [read the end](#linuxsteam-deck-specific-tips) for additional details.

## Encontrando Ubicación de Instalación
1. Abre Steam y haz clic derecho en Trombone Champ. Luego, ve a `Administrar > Explorar archivos locales`.

![Vista previa del Menú de Clic Derecho](../docs/files/localfilescontext.png)

2. Haz clic en la barra de direcciones en la parte superior para seleccionar la ruta de tu carpeta de instalación. Pulsa `CTRL`+`C` para copiar esto a tu portapapeles.

![Vista previa de ruta de carpeta](../docs/files/copyfolderpath.png)

## Instalando BepInEx

1. Descarga [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) en tu carpeta TromboneChamp. Querrás tener `BepinEx_x64_VERSION.zip`, con `VERSION` siendo el número de versión.
2. Extrae los contenidos del archivo BepInEx .zip directamente en la [carpeta de instalación](##finding-install-location) de tu instalación de Trombone Champ.

![Vista previa de extracción de BepInEx](../docs/files/bepinexextract.png)

!> Por favor, asegúrate de que has descargado la versión `x64` de BepInEx. Las versiones `unix` y `x86` harán que tu juego no funcione correctamente. This also applies to users on Linux/Steam Deck.

!> **IMPORTANTE:** Extraer BepInEx *directamente* en la carpeta de tu juego como se muestra en la imagen superior. Si lo has hecho correctamente, tu carpeta del juego debería verse como la imagen de abajo.

![Instalación BepinEx Terminada](../docs/files/finishedbepinex.png)

3. Ejecuta Trombone Champ una vez para completar la instalación.

## Instalación

Con BepInEx instalado, puedes empezar a descargar mods específicos - una lista completa está disponible en el canal `#mod-releases` en el [Discord de Trombone Champ Modding](https://discord.gg/KVzKRsbetJ).

Como probablemente quieres instalar canciones personalizadas, esta sección usará [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) como ejemplo.

1. Vaya a la [carpeta de instalación del juego](###finding-install-location), la carpeta `BepInEx`, luego la carpeta `plugins`.

2. Haz clic en la barra de direcciones en la parte superior para seleccionar la ruta de la carpeta de instalación. Pulsa `CTRL`+`C` para copiar esto a tu portapapeles.

![Vista previa de ruta de carpeta](../docs/files/copyfolderpathplugins.png)

3. Descarga el archivo .dll del mod a la carpeta copiada.

![Vista previa de Carpeta de Plugins](../docs/files/pluginswithtrombloader.png)

4. Ejecute Trombone Champ una vez para inicializar archivos necesarios para ese mod.

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

## Instalando Canciones Personalizadas

> Echa un vistazo a [**Custom Songs guide**](installing-songs) para obtener información sobre la instalación de canciones personalizadas.