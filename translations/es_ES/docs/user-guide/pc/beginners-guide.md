# Guía de Principiantes Para Pc
---
>
> Esta guía sólo aplica a la versión de PC de Gorilla Tag.  
> Si estás usando un Quest (sin Link), ve a la guía [**Modding en Quest**](quest-guide).

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="pc-mod-guide"></div>

## Instaladores

### Monke Mod Manager {docsify-ignore}

![Monke Mod Manager logo](../docs/files/mmmlogo.png)

?> actualmente, este es el **instalador de mods recomendado**.

Monke Mod Manager es un instalador de mods que instalará mods personalizados en Gorilla Tag automáticamente, y se puede volver a ejecutar para actualizar los mods. Monke Mod Manager también le avisa de cualquier actualización abriendo la página de la última versión si está disponible.  
Descarga Monke Mod Manager desde [**Steven's GitHub**](https://github.com/DeadlyKitten/MonkeModManager/releases/latest). Seleccione el menú de **activos** desplegable y descargue el archivo .exe llamado `MonkeModManager.exe`.

> Nota: Si Windows le avisa de que el archivo es inseguro/en riesgo, elija guardar/ejecutar de todos modos. Esto es un falso positivo.

![Preview](../docs/files/mmmpreview.png)

## Instrucciones de instalación

Después de haber descargado Monke Mod Manager, haga doble clic en el ejecutable para ejecutarlo. Por defecto, Monke Mod Manager debe rellenar automáticamente su carpeta de instalación de Gorilla Tag.

?> Si instaló Gorilla Tag en un drive o ruta separada, Monke Mod Manager le pedirá que seleccione `Gorilla Tag.exe` de su carpeta de instalación. Vaya a la sección [**Install Folder**](#install-folder) para encontrar su carpeta de instalación.

A continuación, puede seleccionar cualquier mod que aparezca en la lista. BepInEx es el modloader para Gorilla Tag y no puede ser desmarcado. Para actualizar un mod, simplemente seleccione el mod instalado de nuevo. Si quieres obtener más información sobre un mod, haz clic en él y pulsa el botón *View Mod Info*.

Después de seleccionar los mods que desea instalar/actualizar, presione el botón *Install/Update* para iniciar el proceso. Cuando el monitor de estado en la parte inferior izquierda dice "*Instalación completada!*", ¡ya casi está!

Si es su primera vez modificando Gorilla Tag (o comenzando con una instalación limpia), necesitará iniciar Gorilla Tag una vez y cerrarlo para inicializar BepInEx. **puede que no se vea ninguna carga de mods la primera vez que inicias Gorilla Tag después de modificarlo, esto es normal.**  
Después de eso, vuelve a lanzar Gorilla Tag y si todo salió bien, tus mods se cargarán en el juego. ¡Felicidades!

## Carpeta de instalación

### Ubicación predeterminada

Si has instalado tu juego en tu drive principal, esta debería ser tu carpeta de instalación. `C:\Archivos de programa (x86)\Steam\steamapps\common\Gorilla Tag`

### Otras Ubicaciones

Si has instalado tu juego en una ubicación diferente, sigue estas instrucciones para encontrar la carpeta de instalación.

1. Abra Steam y haga clic derecho en Gorilla Tag. Luego, ve a `Administrar > Ver archivos locales`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Haga clic en la barra de direcciones en la parte superior para seleccionar la ruta de la carpeta de instalación. Pulsa `CTRL`+`C` para copiar esto al portapapeles.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Instalación manual
Un instalador de mod es la forma recomendada de instalar mods. Mira la sección [arriba](#installers). Si has parcheado el juego y sólo necesitas instalar mods que no están disponibles en el instalador, salta al paso 4.

### Install BepInEx

1. Descarga [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest). Querrás obtener `BepinEx_x64_VERSION.zip`, con `VERSION` siendo el número de versión.
2. Extract the contents of the BepInEx .zip file to the [install folder](#install-folder) of your Gorilla Tag installation.

![BepInEx Folder Preview](../docs/files/bepinexfolder.png)

3. Run Gorilla Tag once to complete installation.

### Install Mods

4. Download the mod(s) you wish to install, whether it be from GitHub, the [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) **#pc-mod-releases** channel, or other sources. **Make sure to download any dependencies required by the mod.**

![Plugins Folder Preview](../docs/files/pluginsfolder.png)

5. Some mods have installation instructions, some don't. Generally you can just drag and drop the zip contents into your Gorilla Tag install folder, and the files should go into the corresponding folders. If you have a .dll file, you'll usually want to put it in `BepInEx/plugins`.

## Uninstalling Mods

Either remove the mod's .dll or folder from the `BepInEx/plugins` folder, which is located in your Gorilla Tag install folder.

## Installing Maps {docsify-ignore}

> Check out the [**PC Custom Maps Guide**](pc-maploading) for info on custom maps, installation, and where to new new maps.

## Updating Mods {docsify-ignore}

> Check out the [**PC Mod Updating Guide**](pc-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware).