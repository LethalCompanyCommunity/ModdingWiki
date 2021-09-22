# Guía de Principiantes Para Quest
---
>
> Esta guía solo aplica para la versión Quest de Gorilla Tag. Si estás usando un dispositivo SteamVR o un Quest **con Link**, ve a la guía [**Modding con PC**](pc-guide).

<!-- <div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div> -->
<!-- Guide Page Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1545654854838298"
     data-ad-slot="8114351325"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

## Instalar QuestPatcher

Currently the only recommended way to install mods is **QuestPatcher**. Download **QuestPatcher** from [Lauriethefish's GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

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

!> QuestPatcher should automatically download Java. If you're on an older version of macOS, Java might be detected as already installed when it isn't. If you are having trouble patching, manually download Java [here](https://www.java.com/en/).

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

1. Seleccione la lista de activos desplegables en GitHub, y haga clic en `QuestPatcher-ubuntu.zip`, despues espere a que termine la descarga.
2. Extraer el archivo ZIP usando el Administrador de Archivos.
3. Introduzca la carpeta extraída, haga clic derecho y presione `Abrir en Terminal`.
4. Escriba `chmod +x QuestPatcher` y presione Entrar.
5. Si todo sale bien, escriba `./QuestPatcher` y se cargara QuestPatcher.

## Parcheando

When you first open QuestPatcher, you will be greeted by a loading screen like below. There will be a few short progress bars while QuestPatcher downloads important files. (`Downloading openjre` and `Downloading platform-tools`).

![QuestPatcher Loading](../docs/files/questpatcherloading.png)

> Si recibes un mensaje diciendo `Quest Not Connected`, asegúrate de que tu Quest está conectado, y que has configurado el modo de desarrollador según las [instrucciones de instalación de SideQuest](https://sidequestvr.com/setup-howto). 
> 
> Si recibes un mensaje diciendo `App Not Installed`, Asegúrese de que ha instalado Gorilla Tag desde Oculus App Lab [aquí](https://www.oculus.com/experiences/quest/4979055762136823/).


After about 30 seconds (although it could take longer than five minutes depending on your internet connection), QuestPatcher will finish loading and you will be greeted with a screen like below.

![QuestPatcher Ready To Patch](../docs/files/questpatcherpatch.png)

**To start patching, just click the `Patch my App!` button.**

> Puede tardar 1-15 minutos en emparejar tu aplicación (aproximadamente) Necesitas asegurarte de que tu Internet permanezca en línea durante esto.

!> Do not close QuestPatcher while it is patching your app.

## Manejo de Mods

Once QuestPatcher is done, you will be brought to this screen.

> La próxima vez que abras QuestPatcher, serás llevado directamente a esta pantalla ya que tu juego ya está parcheado.

![Patching Completed](../docs/files/questpatcherpatched.png)

### Instalar Mods

To get mods, you first need to download a `.qmod` file of the mod you want. You can find mods in the `#quest-mod-releases` channel of the [Gorilla Tag modding discord](https://discord.gg/b2MhDBAzTv).

!> Do not download .DLL files - they are PC mods, which cannot be used on the quest version of Gorilla Tag.

To install a mod, click the browse button in the `Mod Management` section of QuestPatcher and select the mods you want. Finally, click `Open` to install the mods. ![Selecting a mod in QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Installing a mod may download other mods that the mod needs to work. Do not uninstall these!

Once the mod is installed, you should see it in the Mods section of QuestPatcher. ![Mods Installed](../docs/files/questpatcherinstalledmods.png)

**You can now open your game, and use your mods!**

?> If you see this screen when launching Gorilla Tag, just click **Open App**. Do not click Restore, this will restore your game back to vanilla and may cause issues with your installation.  
![Restore App](../docs/files/restoreapp.png)

### Desinstalando Mods

Mods can be toggled by clicking the switch next to the mod. Disabling a mod makes the mod act like it is uninstalled, but you can always enable it again.


If you want to delete a mod, click the `Delete` button next to the mod.

## Gestionando Cosméticos & Otros Artículos

!> To use cosmetics, you need to install the Gorilla Cosmetics mod. Otherwise they will not show up in-game.

To view your installed cosmetics and maps, click the `Cosmetics & Other Items` tab of QuestPatcher. Use the drop-down to select the file type you want to manage.

**Cosmetics can be installed by dragging and dropping them into the grey area, or by clicking the Browse button.**

![QuestPatcher Cosmetics Menu](../docs/files/questpatcherotheritems.png)

## Instalar Mapas {docsify-ignore}

> Échale un vistazo a la [**Guía de mapas personalizados**](quest-maploading) para obtener información sobre mapas personalizados, instalación y dónde obtener nuevos mapas.

## Actualizar Mods {docsify-ignore}

> Échale un vistazo a la [**Guía de actualización de Mods de Quest**](quest-updating) para obtener información sobre cómo actualizar Gorilla Tag con mods instalados.

---

> Si te gusto esta guia, puedes [enviar una propina](https://streamelements.com/burritosoft/tip) o [patrocinar el escritor principal](https://github.com/sponsors/burritosoftware).