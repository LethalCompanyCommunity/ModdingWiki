# Создаем мод

## Подготовка проекта

> Предполагается, что вы выполнили все необходимые шаги при **первоначальной настройке**.

Это руководство в основном следует [официальному руководству BepInEx](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html).

### Используем шаблон проекта

Мы создали [шаблон проекта](https://github.com/LethalCompany/LethalCompanyTemplate) на GitHub. Если вы отдаленно знакомы с GitHub или хотите [научиться им пользоваться](#TODO-LINK-TO-CORRECT-PAGE-AND-HEADER), то это может послужить быстрым введением. У шаблона есть некоторые незначительные недостатки, такие как использование «LethalCompanyTemplate» в качестве имени проекта в некоторых файлах, но вы можете это изменить в случае чего. Он должен работать «из коробки» без каких-либо изменений; хотя возможно вам может потребоваться добавить BepInEx в качестве источника NuGet (см. [релевантный](#adding-nuget-source) раздел ниже).

### Создаём ваш проект

Сначала ва нужно создать ваш проект. Если вы еще этого не сделали, мы рекомендуем запустить следующую команду в консоли, чтобы добавить несколько шаблонов BepInEx:

```cmd
dotnet new -i BepInEx.Templates --nuget-source https://nuget.bepinex.dev/v3/index.json
```

Далее, вам нужно создать новый проект (Иногда называемый "решением" в CSharp). Есть несколько способов сделать это.

#### Используя IDE(больше контроля)

В зависимости от вашей IDE этот процесс будет выглядеть по-разному. Вероятно вы захотите дать название вашему новому моду. Если у вас есть возможность использовать шаблоны (вы можете поискать в Google _"как использовать шаблоны в `имя вашей IDE, например "Rider" или "Visual Studio"`"_), используйте `BepInEx 5 Plugin Template`.

#### Используя консоль(проще)

Во втором случае вы можете открыть консоль и выполнить следующую команду, если вы настроили шаблоны с помощью команды выше :

```cmd
dotnet new bepinex5plugin -n 'Вставьте сюда имя вашего мода' -T "netstandard2.1" -U "2022.3.9"
```

### Храним ваши проекты

Мы советуем вам создать папку в которой вы будете хранить все свои проекты. Что-нибудь по типу "МодыLC". Перенесите недавно созданную папку мода в эту, чтобы все было более менее организовано.

### Добавляем NuGet

BepInEx использует NuGet. Так что вам придется добавить BepInEx NuGet в список источников.

BepInEx NuGet имеет следующую конфигурацию:

```
name: BepInEx
url: https://nuget.bepinex.dev/v3/index.json
```

Используя Rider вы можете добавить NuGet через вкладку 'Sources' нажав на зелёный плюсик в 'Feeds'. Там добавьте новую запись, используя приведенную выше конфигурацию. Прочитайте [документацию Rider](https://www.jetbrains.com/help/rider/Using_NuGet.html#sources) для большего понимания.

![Показ Nuget Sources вкладки в Rider](../docs/files/starting-a-mod/ridershownugetsources.png)

![Rider Nuget Sources подключен к BepInEx](../docs/files/starting-a-mod/ridernugetfeeds.png)

Если же вы используете Visual Studio, то, пожалуйста, следуйте [этой документации](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources).

### Убедитесь, что ваш мод настроен правильно

Модификации разрабатываются под конкретные версий Unity и .NET, которые можно указать в особом конфиге. Файл `.csproj` и является им. В качестве его имени обычно стоит имя вашего мода (например, `MyFirstPlugin.csproj`). Если вы правильно использовали консольные команды сверху то все должно быть настроено. Тем не менее, вам следует проверить конфиг, чтобы предотвратить любые проблемы, которые могут возникнуть из-за неправильной настройки. При использовании IDE шаблоны могут использовать не ту версию BepInEx, поэтому вам обязательно придется все проверить.

Наш [шаблон](https://github.com/LethalCompany/LethalCompanyTemplate) уже имеет полностью настроенный`.csproj`, а найти его вы можете [здесь](https://github.com/LethalCompany/LethalCompanyTemplate/blob/main/LethalCompanyTemplate/LethalCompanyTemplate.csproj). Проверьте и сравните ваш файл с этим и убедитесь, что следующий сегмент тот же (за исключением `AssemblyName`, `Description`, и `Version`).

![Пример csproj с ссылками на Nuget и правильной метой](../docs/files/starting-a-mod/csprojexample.png)

### "Билдим" ваш мод

IDE способна превратить ваш код в рабочий мод, который можно запустить (в нашем случае с помощью BepInEx). Этот процесс называется билдингом или компиляцией. В нашем случае на выходе должен получиться файл с расширением `.dll`. Этот файл и есть ваш мод.

В зависимости от вашей среды кнопка компиляции может быть расположена по разному. В Rider она находится в верхнем правом углу:

![Кнопка Билда в Rider](../docs/files/starting-a-mod/riderbuild.png)

После компиляции вы сможете найти файл `.dll` в папке вашего проекта по следующему пути (замените `MyFirstPlugin` на имя, которое вы дали своей модификации): `MyFirstPlugin/bin/(Release или Debug)/netstandard2.1/MyFirstPlugin.dll`

Simply copy & paste this `.dll` file into the `BepInEx/plugins` folder, in your game directory, and it should run the mod. We recommend keeping the default `LogInfo` statement in your `Awake` method that comes with the template. If you have this statement, you should see it appear in the console that opens when you run the game (after installing BepInEx, and enabling the console as per the first wiki article).

### Adding game assemblies

To actually use the game's methods and classes, you'll need to add the game's `Assembly-CSharp.dll` to your project's references. You can either do this manually by editing your `.csproj` file, or through a GUI your IDE provides. You will want to google how to do this for your specific IDE.

You will very likely also need the `UnityEngine.dll`, since this is required to use any of Unity's methods and classes.

The [template project](https://github.com/LethalCompany/LethalCompanyTemplate) has both of these set up, so you can copy that part of the `.csproj` file. You **will** need to edit the path to be correct, however.

The assemblies can be found in the `Lethal Company_Data/Managed` folder, in the game's directory.

### Additional guides

We highly recommend reading through the rest of the [official BepInEx guide](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html) for extra information.

## Next steps

We recommend reading through our very short guide on [open-source & ethics](open-source-and-ethics), to help foster a healthy modding community.

Как только вы закончили создание своего мода вы можете [опубликовать его](publishing-your-mod).
