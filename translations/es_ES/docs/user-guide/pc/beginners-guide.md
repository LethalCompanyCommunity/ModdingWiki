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

Después de seleccionar los mods que desea instalar/actualizar, presione el botón *Install/Update* para iniciar el proceso. Cuando el monitor de estado en la parte inferior izquierda dice "*Install complete!*", ¡ya casi está!

If it's your first time modding (or starting with a clean install), you'll need to launch Gorilla Tag once and close it to initialize BepInEx. **You may not see any mods load the first time you launch Gorilla Tag after modding, this is normal.**  
After that, re-launch Gorilla Tag and if everything went well, your mods will now load into the game. Congratulations!

## Install Folder

### Default Location

If you installed your game on your main drive, this should be your installation folder. `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag`

### Other Locations

If you installed your game in a different location, follow these instructions to find your installation folder.

1. Open Steam and right-click on Gorilla Tag. Then, go to `Manage > Browse local files`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Click the address bar at the top to select your installation folder's path. Hit `CTRL`+`C` to copy this to your clipboard.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Manual Installation
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

### Install BepInEx

1. Download [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest). You will want to get `BepinEx_x64_VERSION.zip`, with `VERSION` being the version number.
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