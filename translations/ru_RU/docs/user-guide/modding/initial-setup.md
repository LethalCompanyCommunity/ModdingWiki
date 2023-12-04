# Первоначальная настройка

## Настройка среды разработки

Перед тем как начинать вам нужно установить некоторые инструменты для создания модов. К счастью, все они **доступны бесплатно**.

> ! Это руководство в общих чертах основано на некоторых частях [гайда по установке BepInEx](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/1_setup.html), что является еще одним отличным ресурсом для изучения

### .Net SDK

SDK (=Набор для разработки программного обеспечения) это набор систем позволяющих вам превратить ваш код во что-то что может быть запущено на вашем ПК. Он используется другими инструментами, и вы, как правило, не будете взаимодействовать с ним напрямую.

Вам нужно установить последнюю рекомендованную версию с [этого сайта](https://dotnet.microsoft.com/en-us/download). Это выглядит примерно так:

[![.Net SDK](../docs/files/initial-setup/netsdkdownload.png)](https://dotnet.microsoft.com/en-us/download)

### IDE

Безусловно, самым важным инструментом в арсенале программиста является IDE (=Интегрированная среда разработки). На данный момент для нас будет достаточно определения "чрезмерно переработанного текстового редактора". С помощью IDE вы можете редактировать код гораздо эффективнее, поскольку она предлагает такие функции, как:

- Подсветка синтаксиса
- Компиляция
- Автодополнение кода
- Интегрированные инструменты (Контроль версий, отладка и т.д.)
- Отладка

Вы можете задаться вопросом, для чего все они нужны (и что это вообще такое), но это выходит за рамки данной вики. Однако будьте уверены, что все они необходимы и избавят вас от многих проблем. Даже не пытайтесь создавать моды в простом текстовом редакторе, по типу блокнота. Технически, вы сможете это сделать, но для этого не может быть никаких причин, кроме мазохизма.

Из IDE мы рекомендуем один из следующих бесплатных вариантов:

- [Visual Studio](https://visualstudio.microsoft.com/) -- **Рекомендуем!** -- Всё-в-одном. Имеет встроенный декомпилятор что поможет сохранить немного времени.
- [Visual Studio Code](https://code.visualstudio.com/) -- Облегченная версия Visual Studio.

Если же у вас есть лицензия Jetbrains, мы рекомендуем следующий платный вариант:

- [Rider](https://www.jetbrains.com/rider/) -- **Рекомендуем!** (Автор руководства использует его сам!) -- Так же Всё-в-одном. Сравним с Visual Studio. Также имеет встроенный декомпилятор.

### BepInEx

Чтобы загрузить моды в игру, нам нужен загрузчик. Вот тут-то и пригодится BepInEx! **Be**pis **In**jector **Ex**tensible это фреймворк-патчер работающий из коробки как модуль для игр Unity. Он будет обрабатывать все, что связано с загрузкой мода в игру, так что мы можем сосредоточиться на создании модификации, не беспокоясь ни о чем другом.

Сначала установите BepInEx на вашу игру. Следуйте данному великолепному [руководству по установке](https://docs.bepinex.dev/articles/user_guide/installation/index.html). Вам нужна [эта](https://github.com/BepInEx/BepInEx/releases/download/v5.4.22/BepInEx_x64_5.4.22.0.zip) версия BepInEx.

Как только установка будет завершена, запустите игру один раз, чтобы она сгенерировала конфиги. Затем перейдите в папку `BepInEx/config`. Здесь вам нужен файл `BepInEx.cfg`. Откройте его, найдите и отредактируйте следующий раздел:

```ini
[Logging.Console]

## Enables showing a console for log output.
# Setting type: Boolean
# Default value: false
Enabled = false
```

В

```ini
[Logging.Console]

## Enables showing a console for log output.
# Setting type: Boolean
# Default value: false
Enabled = true
```

### Декомпилятор (_настоятельно рекомендуется / почти необходим_)

Декомпилятор позволяет вам декомпилировать существующую программу. Это технический термин, который можно перевести как "то что позволяет вам заглянуть за занавес и увидеть, как выглядит код программы". Вы можете спросить, почему это важно? Что ж, если мы собираемся модифицировать игру, то нам сначала нужно знать, _что именно нужно_ модифицировать. Хотите снизить цены на предметы? Тогда нам нужно будет знать, в какой части кода отображаются предметы, которые продаются игроку. Хотите добавить погоду? Тогда нам нужно будет знать, в каких частях кода игра обрабатывает погоду и создаёт ее.

Мы рекомендуем один (или все) из трех бесплатных вариантов:

- [dnSpy](https://github.com/dnSpy/dnSpy)
- [ILSpy](https://github.com/icsharpcode/ILSpy)
- [dotPeek](https://www.jetbrains.com/decompiler/)

!> \*\* Обратите внимание, что это не обязательно, если у вас есть Rider или Visual Studio, поскольку они поставляются со встроенными декомпиляторами. Также обратите внимание, что разные декомпиляторы предлагают немного разные результаты и имеют разные интерфейсы.\*\*

### Unity Explorer (необязательно)

[Unity Explorer](https://github.com/sinai-dev/UnityExplorer) это инструмент, который добавляет GUI, позволяющий вам изучать, отлаживать и изменять игру во время ее запуска. Он может быть очень полезен для лучшего знакомства с технической стороной игры, и поэтому его настоятельно рекомендуется использовать.

Вам потребуется загрузить версию, совместимую с последней версией BepInEx (5).

[![скачать Unity Explorer](../docs/files/initial-setup/unityexplorerdownload.png)](https://github.com/sinai-dev/UnityExplorer/releases/latest/download/UnityExplorer.BepInEx5.Mono.zip)

### Дополнительные инструменты (необязательны)

Существует ряд плагинов и инструментов BepInEx, которые могут оказаться полезными по мере того, как вы приобретете больше опыта в моддинге. The BepInEx devs have helpfully listed them [here](https://docs.bepinex.dev/articles/dev_guide/dev_tools.html).

## Creating a GitHub account

We strongly recommend using git - a "version control system". The most popular website that offers this as a (free) service is GitHub; the website you're on right now.

The following video is a short primer on what git (and a version control systems in general) is: https\://www\.youtube.com/watch?v=2ReR1YJrNOM

For additional reading, please see [GitHub's documentation](https://docs.github.com/en/get-started/quickstart/hello-world).

In short, Git(Hub) allows you to do the following things without hassle:

- Keep a _complete_ history of your project
  - Allows you to revert to a previous version if you made a mistake
  - Allows you to retrieve your code if your hard drive fails, or you delete something by accident
  - Allows you to revisit previous updates and patch notes, adding implicit documentation to your project (when done right)
- Collaborate with others
  - Others can send _requests_ to update files of your project
  - Others can download your code and learn from it
  - Others can continue updating your project, _long_ after you've stopped caring about it
  - Others can help you fix a bug, and you can easily get that bug fixed version of your project

Without going into too much detail, there is a difference between "Git", and "GitHub". Git is a program that anyone can run. GitHub is a website that makes this program available to others through the cloud - allowing for collaborating, and remote backups. You _can_ just use Git locally, but you'll lose a lot of the benefits. An alternative to GitHub is [GitLab](https://about.gitlab.com/).

To create an account, simply go to [GitHub's home page](https://github.com/) and follow the steps. GitHub also has a [guide](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account) on creating a new account (just ignore the step about checking pricing plans - you don't need a paid account, this is primarily for companies and professional users).

## Next steps

Now that you've set up everything, you'll want to proceed to the **[starting a mod](starting-a-mod)** article!
