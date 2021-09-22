# Guía de Principiantes Para Pc
---
>
> Esta guía sólo aplica a la versión de PC de Gorilla Tag.  
> Si estás usando un Quest (sin Link), ve a la guía [**Modding en Quest**](quest-guide).

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="pc-mod-guide"></div> -->
<!-- Guide Page Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1545654854838298"
     data-ad-slot="8114351325"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

## Instaladores

### Monke Mod Manager {docsify-ignore}

![Monke Mod Manager logo](../docs/files/mmmlogo.png)

?> This is currently the **recommended mod installer**.

Monke Mod Manager is a mod installer that will install custom mods into Gorilla Tag automatically, and can be re-run in order to update the mods. Monke Mod Manager also notifies you of any updates upon launch by opening the latest release's page if available.  
Download Monke Mod Manager from [**Steven's GitHub**](https://github.com/DeadlyKitten/MonkeModManager/releases/latest). Select the **Assets** dropdown and download the .exe file named `MonkeModManager.exe`.

> Nota: Si Windows le avisa de que el archivo es inseguro/en riesgo, elija guardar/ejecutar de todos modos. Esto es un falso positivo.

![Preview](../docs/files/mmmpreview.png)

## Instrucciones de instalación

After you've downloaded Monke Mod Manager, double-click the executable to run it. By default, Monke Mod Manager should automatically fill in your Gorilla Tag installation folder.

?> If you installed Gorilla Tag to a seperate drive or path, Monke Mod Manager will prompt you to select `Gorilla Tag.exe` from your installation folder. Go to the [**Install Folder**](#install-folder) section to find your installation folder.

Next, you may select any mods that are listed. BepInEx is the modloader for Gorilla Tag and cannot be unchecked. To update a mod, simply select the installed mod again. If you would like to get more information on a mod, click on it then hit the *View Mod Info* button.

After you select the mods you would like to install/update, hit the *Install/Update* button to begin the process. When the status monitor in the bottom left says "*Install complete!*", you're almost there!

If it's your first time modding (or starting with a clean install), you'll need to launch Gorilla Tag once and close it to initialize BepInEx. **You may not see any mods load the first time you launch Gorilla Tag after modding, this is normal.**  
After that, re-launch Gorilla Tag and if everything went well, your mods will now load into the game. Congratulations!

## Carpeta de instalación

### Ubicación predeterminada

If you installed your game on your main drive, this should be your installation folder. `C:\Program Files (x86)\Steam\steamapps\common\Gorilla Tag`

### Otras Ubicaciones

If you installed your game in a different location, follow these instructions to find your installation folder.

1. Abra Steam y haga clic derecho en Gorilla Tag. Luego, ve a `Administrar > Ver archivos locales`.

![Right-click Menu Preview](../docs/files/localfilescontext.png)

2. Haga clic en la barra de direcciones en la parte superior para seleccionar la ruta de la carpeta de instalación. Pulsa `CTRL`+`C` para copiar esto al portapapeles.

![Copy Folder Path Preview](../docs/files/copyfolderpath.png)

## Instalación manual
A mod installer is the recommended way to install mods. See the section [above](#installers). If you have patched the game and just need to install mods that are not available in the installer, skip to step 4.

### Install BepInEx

1. Descarga [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest). Querrás obtener `BepinEx_x64_VERSION.zip`, con `VERSION` siendo el número de versión.
2. Extraiga el contenido del archivo .zip BepInEx a la [carpeta de instalación](#install-folder) de su instalación de Gorilla Tag.

![BepInEx Folder Preview](../docs/files/bepinexfolder.png)

3. Ejecute Gorilla Tag una vez para completar la instalación.

### Instalar mods

4. Descargue el mod(s) que desee instalar, ya sea desde GitHub, desde el [GorillaTag Modding Discord](https://discord.gg/b2MhDBAzTv) en el canal **#pc-mod-releases**, u otras fuentes. **Asegúrate de descargar las dependencias requeridas por el mod.**

![Plugins Folder Preview](../docs/files/pluginsfolder.png)

5. Algunos mods tienen instrucciones de instalación, otros no. Por lo general, puede simplemente arrastrar y soltar el contenido zip en tu carpeta de instalación de Gorilla Tag y los archivos deberían ir a sus carpetas correspondientes. Si tienes un archivo .dll, normalmente querrás ponerlo en `BepInEx/plugins`.

## Desinstalar mods

Either remove the mod's .dll or folder from the `BepInEx/plugins` folder, which is located in your Gorilla Tag install folder.

## Instalar Mapas {docsify-ignore}

> Échale un vistazo a la [**Guía de mapas personalizados para PC**](pc-maploading) para obtener información sobre mapas personalizados, instalación y dónde obtener nuevos mapas.

## Actualizar Mods {docsify-ignore}

> Échale un vistazo a la [**Guía de actualización de Mods para PC**](pc-updating) para obtener información sobre cómo actualizar Gorilla Tag con mods instalados.

---

> Si te gusto esta guía, puedes [enviar una propina](https://streamelements.com/burritosoft/tip) o [patrocinar el escritor principal](https://github.com/sponsors/burritosoftware).