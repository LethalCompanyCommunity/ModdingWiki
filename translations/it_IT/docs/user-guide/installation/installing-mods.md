#Installare le Mod
---

?> Se preferisci i video tutorial, VorgunTheBeta ha realizzato [un video che spiega come installare le mod e i brani personalizzati](https://youtu.be/pSwNSGx-P5c).

?> The start of this guide also works for Linux and Steam Deck! Make sure to [read the end](#linuxsteam-deck-specific-tips) for additional details.

## Trovare la cartella di installazione
1. Apri Steam e clicca col destro su Trombone Champ. Quindi, vai su `Gestisci> Sfoglia i file locali`.

![Anteprima del Menu cliccando col tasto destro del mouse](../docs/files/localfilescontext.png)

2. Fare clic sulla barra degli indirizzi in alto per selezionare il percorso della cartella d'installazione. Premi `CTRL`+`C` per copiarlo negli appunti.

![Anteprima Copia percorso della cartella](../docs/files/copyfolderpath.png)

## Installare BepInEx

1. Scarica [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) nella cartella TromboneChamp. Vorrai ottenere `BepinEx_x64_VERSION.zip`, dove `VERSION` è il numero della versione.
2. Estrai il contenuto del file .zip BepInEx direttamente nella [cartella d'installazione](##finding-install-location) di Trombone Champ.

![Anteprima Estrai BepInEx](../docs/files/bepinexextract.png)

> Assicurati di aver scaricato la versione `x64` di BepInEx. e versioni `unix` e `x86` impediscono al gioco di funzionare correttamente. This also applies to users on Linux/Steam Deck.

!> **IMPORTANTE:** Estrarre BepInEx *direttamente* nella cartella del gioco come mostrato nell'immagine qui sopra. Se l'operazione è stata eseguita correttamente, la cartella del gioco dovrebbe apparire come nell'immagine qui sotto.

![Installazione di BepInEx completata](../docs/files/finishedbepinex.png)

3. Avvia Trombone Champ una volta per completare l'Installazione.

## Installazione

Con BepInEx installato, è possibile iniziare a scaricare mod specifiche - un elenco completo è disponibile nel canale `#mod-releases` del [Discord "Trombone Champ Modding" ](https://discord.gg/KVzKRsbetJ).

Siccome probabilmente vorrai installare brani personalizzati, questa sezione userà [TrombLoader](https://github.com/NyxTheShield/TrombLoader/releases/latest) come un esempio.

1. Vai alla [cartella d'installazione del gioco](###finding-install-location), nella cartella `BepInEx` e poi nella cartella `plugins`.

2. Clicca la barra in alto per selezionare il percorso della tua cartella d'installazione. Premi `CTRL`+`C` per copiare il percorso negli appunti.

![Anteprima Copia percorso della cartella](../docs/files/copyfolderpathplugins.png)

3. Scarica il file .dll della mod nella cartella copiata.

![Anteprima Cartella Plugins](../docs/files/pluginswithtrombloader.png)

4. Avvia Trombone Champ una volta per inizializzare i file necessari per la mod.

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

## Installare Brani Personalizzati {docsify-ignore}

> Controlla la [**Guida ai Brani Personalizzati**](installing-songs) per informazioni su come aggiungere brani personalizzati.