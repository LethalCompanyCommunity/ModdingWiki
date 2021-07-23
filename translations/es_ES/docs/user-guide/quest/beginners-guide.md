# Guía de Principiantes Para Quest
---
>
> Esta guía solo aplica para la versión Quest de Gorilla Tag. Si estás usando un dispositivo SteamVR o un Quest **con link**, ve a la guía [**Modding con PC**](pc-guide).

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## Instalar QuestPatcher

Actualmente la única forma recomendada de instalar mods es **QuestPatcher**. Descarga **QuestPatcher** de [Lauriethefish GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> La única versión de Windows oficialmente soportada es Windows 10. Otras versiones pueden funcionar, pero no podemos garantizar una funcionalidad o facilidad completa.

1. Seleccione los activos desplegables en GitHub, y haga clic en `QuestPatcher-windows.exe`, luego espere a que la descarga termine.
2. Abra la carpeta de descargas y haga doble clic en el instalador.
3. Es posible que se abra un aviso como este cuando se este ejecutando QuestPatcher. Esto es un **falso positivo**, solo pulsa `más información` y luego `Ejecutar de todos modos`.

![Smartscreen pop-up](../docs/files/questpatchersmartscreen.png)

4. Seleccione `Instalar para todos los usuarios` o `Instalar para mí sólo` y presione `Sí` si aparece un aviso de admin.
5. Acepte el acuerdo de licencia, presione siguiente, siguiente de nuevo, y presione instalar.
6. Espere a que la instalación termine, luego presione siguiente, y por ultimo presione termine para abrir QuestPatcher.


### macOS

!> QuestPatcher debería instalar Java automáticamente. Si estás en una versión anterior de macOS, es posible que se detecte que Java ya está instalado cuando no lo está. Si tiene problemas para parchear, puede descargar manualmente Java [aquí](https://www.java.com/en/).

1. Seleccione la lista de activos desplegable en GitHub, y haga clic en `QuestPatcher-mac.dmg`, luego espere a que termine la descarga.
2. Abre tu carpeta de descargas y haz doble clic en `QuestPatcher-mac.dmg`.
3. Arrastre la aplicación de QuestPatcher a la carpeta de aplicaciones.
4. Cierre la ventana DMG, haga clic derecho en QuestPatcher en tu escritorio y haz clic en `Ejecutar "QuestPatcher"`.
5. Abre tu carpeta de aplicaciones y haz clic derecho en QuestPatcher. **__Asegúrate de mantener la tecla de control__**, luego haga clic en abrir (Solo tendrás que hacerlo la primera vez).
6. En el desarrollador no reconocido que aparece (ver abajo), haga clic en `Abrir`.

![Unverified app pop-up](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher fue compilado únicamente para [Ubuntu](https://ubuntu.com/) Linux. Otras versiones de Linux pueden funcionar, pero podrías encontrar varios problemas.

!> These instructions are more complicated than Mac and Windows, and it is recommended that you know your way around a terminal.

1. Select the assets dropdown on GitHub, and click `QuestPatcher-ubuntu.zip`, then wait for the download to finish.
2. Extract the ZIP file using Archive Manager.
3. Enter the extracted folder, right click, then press `Open in Terminal`.
4. Type in `chmod +x QuestPatcher` and press enter.
5. If all goes well, type in `./QuestPatcher` and QuestPatcher will load.

## Patching

When you first open QuestPatcher, you will be greeted by a loading screen like below. There will be a few short progress bars while QuestPatcher downloads important files. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> If you get a prompt saying `Quest Not Connected`, make sure that your quest is plugged in, and you have set up developer mode as per the [SideQuest installation instructions](https://sidequestvr.com/setup-howto). 
> 
> If you get a prompt saying `App Not Installed`, make sure that you have installed Gorilla Tag from Oculus App Lab [here](https://www.oculus.com/experiences/quest/4979055762136823/).


After about 30 seconds (although it could take longer than five minutes depending on your internet connection), QuestPatcher will finish loading and you will be greeted with a screen like below.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> It may take 1-15 minutes to patch your app (roughly) You need to make sure that your internet stays online during this time.

!> Do not close QuestPatcher while it is patching your app.

## Managing Mods

Once QuestPatcher is done, you will be brought to this screen.

> Next time you open QuestPatcher, you will be brought directly to this screen as your game is already patched.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Installing Mods

To get mods, you first need to download a `.qmod` file of the mod you want. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](../docs/files/restoreapp.png)

### Uninstalling Mods

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` mod next to the mod.

## Managing Cosmetics & Other Items

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Installing Maps {docsify-ignore}

> Check out the [**Quest Custom Maps Guide**](quest-maploading) for info on custom maps, installation, and where to get new maps.

## Updating Mods {docsify-ignore}

> Check out the [**Quest Mod Updating Guide**](quest-updating) for info on updating Gorilla Tag with mods installed.

---

> If you appreciated this guide, you can [send a tip](https://streamelements.com/burritosoft/tip) or [sponsor the main writer](https://github.com/sponsors/burritosoftware).