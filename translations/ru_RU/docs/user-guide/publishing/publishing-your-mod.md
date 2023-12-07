# Публикуем свой мод

Существует несколько вариантов для публикации вашего мода, например, на различных сайтах, посвященных моддингу.

Однако большинство моддеров Lethal Company используют в первую очередь [Thunderstore](https://thunderstore.io/c/lethal-company/). Поэтому мы сосредоточимся на нем.

Есть ряд причин, по которым мы рекомендуем использовать его:

- У Thunderstore есть свой лаунчер для модов, использующий open-source лаунчер R2ModMan -- он позволяет пользователям устанавливать моды буквально в один клик
- Когда сообщество моддеров нацелено на один сайт это делает поиск модов легче и малозатратнее по времени
- Сообществу моддеров становится проще предоставлять помощь (как эта вики) по сравнению с поддержкой разных платформ

<!-- ## Mod websites -->

<!-- - https://www.moddb.com/games/lethal-company -->

<!-- - https://www.nexusmods.com -->

<!-- - https://mod.io/g **(Not available currently, since Lethal Company has not been registered there yet)** -->

## Публикуем на Thunderstore

Сначала создайте аккаунт. Когда ваш аккаунт будет создан, вам нужно будет настроить "Team". Чтобы это сделать направляйтесь в настройки аккаунта, находящиеся в правом верхнем углу окна, вот здесь:

![Настройки аккаунта Thunderstore](../docs/files/publishing-your-mod/thunderstoresettings.png)

Следом, нажмите "Teams", и снова нажмите "Create Team":

![Кнопка "Create Team" на Thunderstore](../docs/files/publishing-your-mod/thunderstorecreateteam.png)

Мы рекомендуем использовать ник как наименование команды, если вы не имеете команды.

Чтобы загрузить мод для Lethal Company, вам сначала нужно переместиться в категорию [Lethal Company](https://thunderstore.io/c/lethal-company/).

Всё что вам нужно здесь это нажать "Upload", в верхнем левом углу экрана:

![Кнопка "Upload" на Thunderstore](../docs/files/publishing-your-mod/thunderstoreupload.png)

Вы увидите следующее:

![Страница загрузки мода на Thunderstore](../docs/files/publishing-your-mod/thunderstoreuploadpackage.png)

Мод должен быть определенного формата, чтобы быть подходящим для Thunderstore. Это позволит им показать его описание, иконку и другие особенности пользователю.

Документацию для этого формата вы можете найти [здесь](https://thunderstore.io/c/lethal-company/create/docs/).

Однако если вы хотите получить краткое объяснение, то вам нужно создать папку со следующими файлами:

- icon.png (PNG иконка для мода, должна быть 256x256 разрешения)
- README.md (Readme файл с расширением .md для отображения на странице)
- manifest.json (файл JSON с метадатой)
- Сам мод (типа 'MyMod.dll')

Ниже приведен пример manifest.json:

```json
{
    "name": "MoonOfTheDay",
    "version_number": "1.0.3",
    "website_url": "https://github.com/MaxWasUnavailable/MoonOfTheDay",
    "description": "Описание мода. Максимум 250 символов.",
    "dependencies": [
        "LethalAPI-1.0.0"
    ]
}
```

Обратите внимание, что вы можете оставить зависимости пустыми, если в вашем моде их нет:

```json
    "dependencies": []
```

!> **Обратите внимание, что если вы используете BepInEx, то вам нужно будет добавить `BepInEx-BepInExPack-5.4.2100` к вашим зависимостям:**

```json
    "dependencies": ["BepInEx-BepInExPack-5.4.2100"]
```

Как только вы закончите со всем этим, и будете довольны тем, как ваш README файл \[будет выглядеть] (https\://thunderstore.io/tools/markdown-preview/), и ваш манифест \[будет проверен] (https\://thunderstore.io/tools/manifest-v1-validator/), вам останется только создать zip-архив и загрузить мод!

**Обратите внимание, что в zip-архив нужно засунуть файлы, а не папку с файлами. Выберите все файлы а и потом уже создавайте zip архив.**

## Обновляем на Thunderstore

Чтобы обновить мод на Thunderstore вам необходимо повторить процесс публикации. **Убедитесь что вы изменили версию мода в файле `manifest.json`!**

# Discord

- На сервере [Unofficial Lethal Company Community](https://discord.gg/nYcQFEpXfU) есть канал [#mod-releases](https://discord.com/channels/1169792572382773318/1169851544359927858).
