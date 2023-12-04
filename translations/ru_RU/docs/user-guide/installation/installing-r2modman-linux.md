# Используем r2modman на Linux и Steam Deck

***

Это руководство проведет вас cо установки и использования [r2modman](https://github.com/ebkr/r2modmanPlus/releases/latest/) до установки модов и игры с ними с помощью [Thunderstore](https://thunderstore.io/c/lethal-company/). Использование лаунчера r2modman позволит вам без пролблем устанавливать и обновлять моды до последних версий с помощью лёгкого и удобного меню!

## Специфическая подготовка Steam Deck

На Steam Deck вам необходимо следовать следующему руководству:

- Убедитесь что игра установлена на основном хранилище - моды не загрузятся если игра установлена на MicroSD карте.
- Войдите в **Режим Рабочего Стола** удерживая кнопку питания и выбрав Режим Рабочего Стола из меню.

Как только вы на нём окажитесь мы сможем продолжить!

!> r2modman **не работает** в Игровом Режиме. Пожалуйста, обязательно прочтите [**Использование модов в Игровом Режиме Steam Deck**](installing-r2modman-linux?id=using-mods-in-steam-decks-game-mode) для обхода, как только вы закончите с разделом **Устанавливаем r2modman**.

## Устанавливаем r2modman

?> Последняя версия r2modman на данный момент это **%{thunderstore:f21c391c-0bc5-431d-a233-95323b95e01b}**.

В Linux r2modman доступен в различных форматах в зависимости от вашего дистрибутива:

- `deb` для Debian и основанных на Ubuntu
- `pacman` для основанных на Arch
- `rpm` для использующих RPM Package Manager (RHEL, CentOS, Fedora, openSUSE, и т.п.)
- `AppImage`, один из немногих что запуститься на всех дистрибутив - **подходит для Steam Deck**

Зайдите на [**страницу релизов r2modman в GitHub**](https://github.com/ebkr/r2modmanPlus/releases/latest/) и установите подходящий файл для вашего дистрибутива в соответствии с документацией вашего менеджера пакетов.

**Пользователям Steam Deck нужно** установить`.AppImage` и сохранить где-то на рабочем столе или в папке Документы. Вам также нужно будет пометить файл как 'executable'. Чтобы сделать это нажмите правым кликом по файлу и выберите 'Свойства'. Перейдите на вкладку **Разрешения**, установите флажок с пометкой "Исполняемый" и нажмите "ОК".

![Steam Deck окно Разрешений](../docs/files/r2modman-linux/appimageproperties.png)

После пометки файла в executable, вы наконец можете нажать `AppImage` чтобы открыть r2modman.

## Устанавливаем моды с помощью r2modman

Как только вы установили r2modman вы можете наконец установить моды.

1. Запустите **r2modman**. Вас встретить следующий экран.

![r2modman - выбор игры](../docs/files/r2modman-install/gameselection.png)

2. Выберите **"Lethal Company"**, и нажмите **"Select Game"**.

?> Если вы сразу не нашли её, **то скрольте вниз** пока не найдёте **"Lethal Company"**.

![Выбрать Lethal Company](../docs/files/r2modman-install/selectlc.png)

3. Лаунчер спросит какой профиль использовать. В этом руководстве мы остановимся на стандартном. Нажмите **"Select profile"**.

![Выбрать стандартный профиль](../docs/files/r2modman-install/profileselect.png)

4. Это приведет нас сюда.

![Первое открытие после установки](../docs/files/r2modman-install/firsttimeinstall.png)

5. Нажмите **"Online"** сбоку. И вам покажутся все доступные для скачивания моды с [Thunderstore](https://thunderstore.io/c/lethal-company/).

![Нажимаем Online](../docs/files/r2modman-install/selectonline.png)

6. Начиная отсюда вы вольны выбирать любые моды которые вы хотите установить. Нажмите на понравившийся мод и следом нажмите "Download".

![Скачиваем моды](../docs/files/r2modman-install/download.png)

7. Лаунчер спросит какую версию скачать. Скачивайте последнюю версию, что уже выбрана по стандарту. Нажмите **"Download with dependencies"** или **"Download"**.

![Скачиваем c зависимостями](../docs/files/r2modman-install/downloadlatest.png)

8. Как только вы установите все свои моды вы можете нажать "Start modded" сбоку. Это запустит игру с вашими модами.

![Запуск игры с модами](../docs/files/r2modman-install/startmodded.png)

Вот и всё! Вы только что успешно модифицировали Lethal Company!

## Используем моды на Steam Deck в Игровом Режиме

**r2modman не запускается на Steam Deck в Игровом Режиме, и, следовательно, моды не будут загружаться по умолчанию.**, Чтобы обойти эту проблему, щелкните правой кнопкой мыши по игре в Steam и выберите `Свойства`. Оттуда вставьте следующую строку в **Параметры запуска**:

```
WINEDLLOVERRIDES="winhttp=n,b" %command% --doorstop-enable true --doorstop-target "/home/deck/.config/r2modmanPlus-local/LethalCompany/profiles/Default/BepInEx/core/BepInEx.Preloader.dll" --r2profile "Default"
```

![Свойства Steam](../docs/files/r2modman-linux/steamproperties.png)
дадут команду игре запуститься с профилем по умолчанию, который мы настроили ранее в r2modman, так что теперь все ваши установленные там моды будут доступны в Игровом Режиме.
