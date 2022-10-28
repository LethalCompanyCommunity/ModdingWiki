# Instalando Mods
---

?> Si prefieres tutoriales en vídeo, VorgunTheBeta tiene [un vídeo explicando como instalar mods y canciones personalizadas](https://youtu.be/pSwNSGx-P5c).

?> ¡El inicio de esta guía también funciona para Linux y el Steam Deck! Asegúrate de [leer el final](#linuxsteam-deck-specific-tips) para detalles adicionales.

## Encontrando Ubicación de Instalación
1. Abre Steam y haz clic derecho en Trombone Champ. Luego, ve a `Administrar > Explorar archivos locales`.

![Vista previa del Menú de Clic Derecho](../docs/files/localfilescontext.png)

2. Haz clic en la barra de direcciones en la parte superior para seleccionar la ruta de tu carpeta de instalación. Pulsa `CTRL`+`C` para copiar esto a tu portapapeles.

![Vista previa de ruta de carpeta](../docs/files/copyfolderpath.png)

## Instalando BepInEx

1. Descarga [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) en tu carpeta TromboneChamp. Querrás tener `BepinEx_x64_VERSION.zip`, con `VERSION` siendo el número de versión.
2. Extrae los contenidos del archivo BepInEx .zip directamente en la [carpeta de instalación](##finding-install-location) de tu instalación de Trombone Champ.

![Vista previa de extracción de BepInEx](../docs/files/bepinexextract.png)

!> Por favor, asegúrate de que has descargado la versión `x64` de BepInEx. Las versiones `unix` y `x86` harán que tu juego no funcione correctamente. Esto también se aplica a los usuarios en Linux/Steam Deck.

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

## Consejos de Linux/Steam Deck
<details closed>
<summary>Ampliar</summary>

El proceso de instalación de BepInEx es en gran medida el mismo que lo de Windows enumerado anteriormente, pero hay que tener en cuenta algunas cosas adicionales antes:

 - Para seguir la guía, los usuarios de Steam Deck tendrán que cambiar al modo de escritorio manteniendo presionado el botón de encendido y seleccionando `Modo de escritorio` en el menú.

 - Los usuarios de Steam Deck tendrán que instalar el juego en el almacenamiento interno, ya que BepInEx no se cargará desde la tarjeta microSD.

 - Como se ha dicho anteriormente, usted todavía tendrá que instalar la versión `x64` de Windows de BepInEx y no la versión `unix`, ya que Trombone Champ sigue siendo una aplicación de Windows funcionando con Proton.

 - Los archivos log y de archivos se almacenan en su carpeta Steam dentro de las carpetas de compatibilidad de Proton.

    - En el Steam Deck se puede encontrar en: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - En otras versiones de Linux se puede ejecutar `locate -r /Holy Wow<0>locate -r /Holy Wow$` desde el terminal si usted no está seguro de dónde está su carpeta Steam.

También tendrá que añadir `WINEDLLOVERRIDES="winhttp=n,b" %command%` a las opciones de lanzamiento de su juego. Para ello, haga clic derecho en el juego en Steam y haga clic en `Propiedades`. A diferencia de Windows, Proton no cargará los archivos de BepInEx a menos que se indique específicamente aquí.

![Vista previa de propiedades de Steam](../docs/files/linuxsteamproperties.png)

Una vez añadido, ¡BepInEx debería funcionar! Instale tus mods [como se ha indicado anteriormente](##installation) para conseguir que funcionen las canciones personalizadas.

### Fondos de video {docsify-ignore}

Algunas canciones personalizadas incluirán videos para sus fondos y la instalación por defecto de Proton no puede reproducirlos. Si desea que funcionen, puede instalar `GE-Proton` usando [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). Esta es una versión de Proton que incluye algunas características adicionales, incluyendo la capacidad de reproducir formatos de video que Valve no puede soportar oficialmente.

Recomendamos seguir [esta guía creada por GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) para instrucciones sobre cómo usar ProtonUp-Qt e instalar `GE-Proton`.

!> Incluso con GE-Proton, es posible que experimente algunos problemas con la reproducción de videos dependiendo de su configuración. </details>

## Instalando Canciones Personalizadas

> Echa un vistazo a [**Custom Songs guide**](installing-songs) para obtener información sobre la instalación de canciones personalizadas.