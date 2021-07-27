# Guía de Principiantes Para Quest
---
>
> Esta guía solo aplica para la versión Quest de Gorilla Tag. Si estás usando un dispositivo SteamVR o un Quest **con Link**, ve a la guía [**Modding con PC**](pc-guide).

<div class="horizontal bordered" data-ea-publisher="gorillatagmodding-burrito-software" data-ea-type="image" data-ea-manual="true" id="quest-mod-guide"></div>

## Instalar QuestPatcher

Actualmente la única forma recomendada de instalar mods es **QuestPatcher**. Descarga **QuestPatcher** de [Lauriethefish GitHub](https://github.com/Lauriethefish/QuestPatcher/releases/latest).

### Windows

> La única versión de Windows oficialmente soportada es Windows 10. Otras versiones pueden funcionar, pero no podemos garantizar una funcionalidad o facilidad completa.

1. Seleccione los activos desplegables en GitHub, y haga clic en `QuestPatcher-windows.exe`, luego espere a que la descarga termine.
2. Abra la carpeta de descargas y haga doble clic en el instalador.
3. Es posible que se abra un aviso como este cuando se este ejecutando QuestPatcher. Esto es un **falso positivo**, solo pulsa `más información` y luego `Ejecutar de todos modos`.

![Pop-up de pantalla inteligente](../docs/files/questpatchersmartscreen.png)

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

![Pop-up de aplicación no verificada](../docs/files/questpatchermacunverified.png)


### Linux

> QuestPatcher fue compilado únicamente para [Ubuntu](https://ubuntu.com/) Linux. Otras versiones de Linux pueden funcionar, pero podrías encontrar varios problemas.

!> Estas instrucciones son ms complicadas que las de Mac y Windows, se recomienda que sepas tu camino por un terminal.

1. Seleccione la lista de activos desplegables en GitHub, y haga clic en `QuestPatcher-ubuntu.zip`, despues espere a que termine la descarga.
2. Extraer el archivo ZIP usando el Administrador de Archivos.
3. Introduzca la carpeta extraída, haga clic derecho y presione `Abrir en Terminal`.
4. Escriba `chmod +x QuestPatcher` y presione Entrar.
5. Si todo sale bien, escriba `./QuestPatcher` y se cargara QuestPatcher.

## Parcheando

Cuando abras por primera vez QuestPatcher, serás recibido por una pantalla de carga como la siguiente. Habrán algunas barras de progreso breves mientras QuestPatcher descarga unos archivos importantes. (`Descargando openjre` y `Descargando plataform-tools`).

![Carga de QuestPatcher](../docs/files/questpatcherloading.png)

> Si recibes un mensaje diciendo `Quest Not Connected`, asegúrate de que tu Quest está conectado, y que has configurado el modo de desarrollador según las [instrucciones de instalación de SideQuest](https://sidequestvr.com/setup-howto). 
> 
> Si recibes un mensaje diciendo `App Not Installed`, Asegúrese de que ha instalado Gorilla Tag desde Oculus App Lab [aquí](https://www.oculus.com/experiences/quest/4979055762136823/).


Después de 30 segundos (puede tardar más de cinco minutos dependiendo de su conexión a Internet), QuestPatcher terminará de cargarse y serás recibido con una pantalla como la siguiente.

![QuestPatcher listo para parchear](../docs/files/questpatcherpatch.png)

**Para empezar a parchear, solo haz clic en el botón de `Patch my App!`.**

> Puede tardar 1-15 minutos en emparejar tu aplicación (aproximadamente) Necesitas asegurarte de que tu Internet permanezca en línea durante esto.

!> No cierres QuestPatcher mientras parchea tu aplicación.

## Manejo de Mods

Cuando QuestPatcher termine, serás llevado a esta pantalla.

> La próxima vez que abras QuestPatcher, serás llevado directamente a esta pantalla ya que tu juego ya está parcheado.

![Parche Completado](../docs/files/questpatcherpatched.png)

### Instalar mods

Para obtener mods, primero necesitas descargar un archivo `.qmod` del mod que desee. Puedes encontrar mods en el canal `#quest-mod-releases` del discord [Gorilla Tag Modding](https://discord.gg/b2MhDBAzTv).

!> No descargue archivos .DLL - son mods dedicados para PC, que no pueden ser usados en la versión Quest de Gorilla Tag.

Para instalar un mod, haz clic en el botón de navegación de la sección `Mod Management` en QuestPatcher y selecciona los mods que quieres. Finalmente, haga clic en `Open` para instalar los mods. ![Seleccionar un mod en QuestPatcher](../docs/files/questpatcherselectmod.png)

!> Instalar un mod puede descargar otros mods que el mod principal necesita para funcionar. ¡No desinstales estos!

Una vez el mod este instalado, lo deberías poder ver en la sección de Mods de Questpatcher. ![Mods instalados](../docs/files/questpatcherinstalledmods.png)

**¡Ahora puedes abrir tu juego y usar tus mods!**

?> si ves esta pantalla cuando inicias Gorilla Tag, presiona clic **Abrir Aplicación**. No haga clic en Restaurar, esto restaurará su juego a la versión original y puede causar problemas con su instalación.  
![Restaurar App](../docs/files/restoreapp.png)

### Desinstalando Mods

Los mods pueden ser cambiados haciendo clic en el botón junto al mod. Deshabilitar un mod hace que el mod actúe como si estuviera desinstalado, pero siempre puedes activarlo de nuevo.


Si quieres eliminar un mod, haz clic en `Delete` junto al mod.

## Gestionando Cosméticos & Otros Artículos

!> Para usar cosméticos, necesitas instalar el mod de Gorilla Cosmetics. De lo contrario, no aparecerán en el juego.

Para ver tus cosmeticos y mapas, haz clic en el tab de `Cosmetics & Other items` de QuestPatcher. Utilice el menú desplegable para seleccionar el tipo de archivo que desea gestionar.

**Cosméticos pueden ser instalados arrastrándolos y soltándolos en el área gris, o haciendo clic en el botón de Navegar.**

![Menú de Cosméticos de QuestPatcher](../docs/files/questpatcherotheritems.png)

## Instalar Mapas {docsify-ignore}

> Échale un vistazo a la [**Guía de mapas personalizados**](quest-maploading) para obtener información sobre mapas personalizados, instalación y dónde obtener nuevos mapas.

## Actualizar Mods {docsify-ignore}

> Échale un vistazo a la [**Guía de actualización de Mods de Quest**](quest-updating) para obtener información sobre cómo actualizar Gorilla Tag con mods instalados.

---

> Si te gusto esta guia, puedes [enviar una propina](https://streamelements.com/burritosoft/tip) o [patrocinar el escritor principal](https://github.com/sponsors/burritosoftware).