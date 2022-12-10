#Installare le Mod
---

?> Se preferisci i video tutorial, VorgunTheBeta ha realizzato [un video che spiega come installare le mod e i brani personalizzati](https://youtu.be/pSwNSGx-P5c).

?> L'inizio di questa guida funziona anche per Linux e Steam Deck! Assicurati di [leggere la fine](#linuxsteam-deck-specific-tips) per ulteriori dettagli.

## Trovare la cartella di installazione
1. Apri Steam e clicca col destro su Trombone Champ. Quindi, vai su `Gestisci> Sfoglia i file locali`.

![Anteprima del Menu cliccando col tasto destro del mouse](../docs/files/localfilescontext.png)

2. Fare clic sulla barra degli indirizzi in alto per selezionare il percorso della cartella d'installazione. Premi `CTRL`+`C` per copiarlo negli appunti.

![Anteprima Copia percorso della cartella](../docs/files/copyfolderpath.png)

## Installare BepInEx

1. Scarica [BepInEx](https://github.com/BepInEx/BepInEx/releases/latest) nella cartella TromboneChamp. Vorrai ottenere `BepinEx_x64_VERSION.zip`, dove `VERSION` è il numero della versione.
2. Estrai il contenuto del file .zip BepInEx direttamente nella [cartella d'installazione](##finding-install-location) di Trombone Champ.

![Anteprima Estrai BepInEx](../docs/files/bepinexextract.png)

> Assicurati di aver scaricato la versione `x64` di BepInEx. e versioni `unix` e `x86` impediscono al gioco di funzionare correttamente. Questo si applica anche per utenti di Linux/Steam Deck.

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

## Consigli per Linux/Steam Deck
<details closed>
<summary>Espandi</summary>

Il processo per installare BepInEx è in gran parte lo stesso di quello su Windows sopra elencato, tuttavia ci sono alcune cose su cui essere consapevoli:

 - Per seguire la guida, gli utenti Steam Deck dovranno passare alla modalità Desktop schiacciando il pulsante di accensione e selezionando `Desktop Mode` dal menu.

 - Gli utenti Steam Deck dovranno installare il gioco nella memoria interna, dato che BepInEx non verrà caricato dalla scheda microSD.

 - Come detto in precedenza, dovrai installare la versione `x64` di BepInEx, non la versione `unix`, dato che Trombone Champ è un'applicazione di Windows che gira con Proton.

 - I files di salvataggio sono conservati nelle cartelle di Steam compatibili con Proton.

    - Su Steam Deck questo può essere trovato in: `~/.local/share/Steam/steamapps/compatdata/1059990/pfx/drive_c/users/steamuser/AppData/LocalLow/Holy Wow/TromboneChamp`
    - Su altri sistemi di Linux puoi eseguire `localizza -r /Holy Wow<0>localizza -r /Holy Wow$` dal terminale se non sei sicuro di dove si trovi la tua cartella Steam.

Dovrai anche aggiungere `WINEDLLOVERRIDES="winhttp=n,b" %command%` alle tue opzioni di avvio del gioco. Per fare questo, schiaccia il tasto destro sul gioco su Steam e schiaccia `Propietà`. Rispetto a Windows, Proton non caricherà i files di BepInEx a meno che non sia specificatamente indicato qui.

![Anteprima delle Proprietà di Steam](../docs/files/linuxsteamproperties.png)

Una volta aggiunto, BepInEx dovrebbe funzionare! Installa le tue mod [come indicato sopra](##installation)affinché le canzoni funzionino.

### Video in Background {docsify-ignore}

Alcune canzoni possono includere video in background, e l'installazione di default di Proton non può riprodurli. Se vuoi che funzioni, puoi installare `GE-Proton` usando [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/). Questa versione di Proton include funzionalità aggiuntive, inclusa la possibilità di riprodurre video in formati che Valve non supporta ufficialmente.

Ti raccomandiamo la seguente [guida creata da GamingOnLinux](https://www.gamingonlinux.com/2022/03/protonup-qt-got-upgraded-heres-how-to-use-it-on-steam-deck-and-linux/) per l'utilizzo di ProtonUp-Qt e per l'installazione di `GE-Proton`.

!> Anche con GE-Proton, potresti ancora avere problemi con i video in background che dipendono dal tuo setup. </details>

## Installare Brani Personalizzati {docsify-ignore}

> Controlla la [**Guida ai Brani Personalizzati**](installing-songs) per informazioni su come aggiungere brani personalizzati.