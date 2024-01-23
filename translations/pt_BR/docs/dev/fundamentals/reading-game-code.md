---
description: Esse artigo ensina você a usar o ILSpy para ler o código do jogo
---

# Lendo o Código do Jogo

## Introdução

Há chances altas de você encontrar desafios consideráveis quando estiver começando na sua jornada de modding. Você irá querer saber como algo no jogo funciona, mas tem um problema... Você não consegue abrir os arquivos do jogo e descobrir por si só _(seu bobinho)_.

Veja bem, o jeito que os jogos da Unity funcionam é compilando o código em um arquivo .dll, que você não consegue abrir normalmente.

## Descompiladores

Felizmente existe algo chamado "descompilador". Ele pega o código do jogo e reverte o processo de compilação, resultando em código legível. Mesmo não sendo perfeito, ele faz um trabalho bem feito.

Atualmente há 3 descompiladores amplamente usados:

[dnSpyEx](https://github.com/dnSpyEx/dnSpy), [ILSpy](https://github.com/icsharpcode/ILSpy) e [dotPeek](https://www.jetbrains.com/decompiler/).

:::info
Escolher o descompilador vai de preferência pessoal, mas este artigo vai seguir utilizando o ILSpy devido a um equilíbrio entre simplicidade e poder.
:::

::: danger
Please keep in mind that while decompiling and reading the code is _not_ illegal, distributing said decompiled code _is_ illegal. Same applies for sharing the game's files.

Isso significa que você **NÃO PODE** agrupar nenhum arquivo do jogo com seus mods.
:::

## Abrindo o DLL do jogo

Ao abrir o ILSpy, você verá uma janela semelhante a esta.
![Captura de uma janela do ILSpy vazia](/images/reading-game-code/ilspy-window.png)

Então você deve abrir o arquivo `Assembly-CSharp.dll` presente nos arquivos do jogo.

Para conseguir ele, faça o seguinte:

### 1. Abra os arquivos do jogo. Pela Steam, basta clicar com o botão direito no jogo e selecionar 'Abrir Arquivos Locais'. {#open-game-files}

![Como abrir arquivos locais pela Steam](/images/reading-game-code/opening-local-files.png)

A pasta de arquivos do jogo vai abrir ![arquivos locais do Lethal Company](/images/reading-game-code/lc-game-folder.png)

### 2. Vá para `Lethal Company_Data/Managed` {#open-managed-folder}

Assim que fizer isto, vai ver vários arquivos .dll.
![DLLs do Lethal Company](/images/reading-game-code/lc-dlls.png)

Copie o caminho e volte para o ILSpy.

### 3. Abra o arquivo no ILSpy {#open-in-ilspy}

No ILSpy, clique em `File -> Open`.
![Como abrir arquivos no ILSpy](/images/reading-game-code/ilspy-open.png)

In an opened file browser paste the path you copied earlier for easy access, select `Assembly-CSharp.dll`, and press 'Open'.
![File browser window](/images/reading-game-code/opened-folder.png)

After you have opened the file you should see that it has been added to the sidebar.
![Opened Assembly-CSharp.dll](/images/reading-game-code/opened-asc-in-ilspy.png)

## Reading the game code

Click on the little `+` left of the file name. You should see a bunch of things pop up in a list.
![Opened Assembly-CSharp.dll](/images/reading-game-code/namespaces.png)

Those are called [namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/namespaces) and are basically just used to organize code into groups. Nearly all of the game's codeis stored under the `{}` (blank) namespace, so open that by clicking on the `+` again.

:::tip
Unlike 99% of the game's code, the actual player controller script (`PlayerMovementB`) is located in the `GameNetcodeStuff` namespace, so keep that in mind in case you cannot find it.
:::

You will see a list of files, all containing code used by the game. If you double click any of them you can see the code inside.
![Opened classes](/images/reading-game-code/so-many-classes.png)

## Searching fields and methods

Obviously, with so many different files it may be difficult to find out a specific function you need. Luckily, ILSpy has a solution - Search tool.

To open the search tool you can either:

Open it by clicking on `Window -> Search`.
![Opening search through menu](/images/reading-game-code/window-search.png)

OR

By clicking on the little magnifying glass icon on the topbar.
![Opening search through icon](/images/reading-game-code/glass-icon.png)

Either way the Search window will open.
![Opened search menu](/images/reading-game-code/opened-search.png)

Using it is quite simple. You can type something in the search bar, and it will be displayed:
![Search menu in action](/images/reading-game-code/search-in-action.png)

If you want to limit the search to only variables(fields) you can select so in the dropdown next to the search bar:
![Search only fields](/images/reading-game-code/only-fields.png)

Of course you can also search for types(classes) and methods(functions) by just selecting them.

## Finding usage

A lot of the times, once you find something you need, you may want to know where it's being used. There is a tool for that as well.

By right clicking on any field or method, in a context menu you can select "Analyze".
![Analyze context menu](/images/reading-game-code/analyze-context.png)

After clicking on it a small window with several dropdowns will open.
![Analyze window](/images/reading-game-code/analyze-window.png)

Here is what most used dropdowns stand for in fields and methods:

### Fields

`Read By` - Methods which use this field inside of them.
![Read By in fields](/images/reading-game-code/field-readby.png)

`Assigned By` - Methods which assign value to this field.
![Assigned By in fields](/images/reading-game-code/field-assignedby.png)

### Methods

`Uses` - List of fields and methods that this method is using.
![Uses in methods](/images/reading-game-code/methods-uses.png)

`Used By` - Methods which use this method.
![Used By in methods](/images/reading-game-code/methods-usedby.png)

## Conclusion

Congrats! Now you know how to read game's code and how to find something that you need. Remember that if you cannot find something - There is no shame in asking. So, in case you need any help, you can get some in the [Unofficial Lethal Company Community Discord](https://discord.gg/nYcQFEpXfU).
