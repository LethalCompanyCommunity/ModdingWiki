---
description: Learn how to create a basic project for a Lethal Company mod.
---

# Создаем мод

## Подготовка проекта

:::warning
This guide assumes you've completed all the required steps in **[initial setup](initial-setup)**, or that you know what you're doing.
:::

Это руководство в основном следует [официальному руководству BepInEx](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html).

### Используем шаблон проекта

Мы создали простой [шаблон мода](https://github.com/LethalCompany/LethalCompanyTemplate) на GitHub. If you're remotely familiar with GitHub, or willing to [learn](initial-setup.html#creating-a-github-account), this might serve as a quick start. У шаблона есть некоторые незначительные недостатки, такие как использование "LethalCompanyTemplate" в качестве имени проекта в некоторых файлах, но вы можете изменить эту часть кода в случае чего. Он должен работать «из коробки» без каких-либо изменений; хотя возможно вам может потребоваться добавить BepInEx в качестве источника NuGet (см. [релевантный](#adding-nuget-source) раздел ниже).

### Создаём ваш проект

Сначала вам нужно создать ваш проект. Мы рекомендуем запустить следующую команду в консоли, чтобы добавить несколько шаблонов BepInEx:

```cmd
dotnet new -i BepInEx.Templates --nuget-source https://nuget.bepinex.dev/v3/index.json
```

Далее, вам необходимо сгенерировать новый проект (Иногда называемый "решением" в CSharp). Есть несколько способов это сделать:

#### С помощью IDE (больше возможностей)

В зависимости от IDE процесс будет протекать по-разному. Если у вашей IDE есть возможность использовать шаблоны (вы можете поискать в Google _"как использовать шаблоны в `ваша IDE, например "Rider" или "Visual Studio"`"_), то используйте `BepInEx 5 Plugin Template`. Но есть и второй вариант.

#### С помощью консоли (более простой вариант)

Во втором случае вы можете открыть консоль и выполнить команду из предыдущего раздела и эту вдобавок :

```cmd
dotnet new bepinex5plugin -n 'Вставьте сюда имя вашего мода' -T "netstandard2.1" -U "2022.3.9"
```

### Храним ваши проекты

Мы советуем вам создать папку где-нибудь в документах, где вы будете хранить все свои проекты. Назвав её при этом чем-то по типу "МодыLC". Перенесите недавно созданную папку мода в эту, чтобы все было более менее организовано.

### Добавляем NuGet

BepInEx использует NuGet. Так что вам придется добавить BepInEx NuGet в список источников.

BepInEx NuGet имеет следующую конфигурацию:

```
name: BepInEx
url: https://nuget.bepinex.dev/v3/index.json
```

Используя Rider вы можете добавить NuGet через вкладку 'Sources' нажав на зелёный плюсик в 'Feeds'. Там добавьте новую запись, используя приведенную выше конфигурацию. Прочитайте [документацию Rider](https://www.jetbrains.com/help/rider/Using_NuGet.html#sources) для большего понимания.

![Show Nuget Sources tab in Rider](/images/starting-a-mod/ridershownugetsources.png)

![Rider Nuget Sources config with BepInEx added](/images/starting-a-mod/ridernugetfeeds.png)

Если же вы используете Visual Studio, то, пожалуйста, следуйте [этой документации](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources).

### Убедитесь, что ваш мод настроен правильно

Модификации разрабатываются под конкретные версий Unity и .NET, которые можно указать в особом конфиге. Файл `.csproj` и является им. В качестве его имени обычно стоит имя вашего мода (например, `MyFirstPlugin.csproj`). Если вы правильно использовали консольные команды сверху то все уже должно быть настроено. Тем не менее, вам следует проверить конфиг, чтобы предотвратить любые проблемы, которые могут возникнуть из-за неправильной настройки. При использовании IDE шаблоны могут использовать не ту версию BepInEx, поэтому вам обязательно придется все проверить.

Наш [шаблон](https://github.com/LethalCompany/LethalCompanyTemplate) уже имеет полностью настроенный`.csproj`, а найти его вы можете [здесь](https://github.com/LethalCompany/LethalCompanyTemplate/blob/main/LethalCompanyTemplate/LethalCompanyTemplate.csproj). Проверьте и сравните ваш файл с этим и убедитесь, что следующие строки те же (за исключением `AssemblyName`, `Description`, и `Version`).

![Example csproj with Nuget references and proper metadata](/images/starting-a-mod/csprojexample.png)

### "Билдим" ваш мод

Ваша IDE способна превратить ваш код в рабочий мод, который можно запустить (в нашем случае с помощью BepInEx). Этот процесс называется билдингом или компиляцией. В нашем случае после компиляции должен получиться файл с расширением `.dll`. Этот и будет ваш мод.

В зависимости от вашей среды кнопка компиляции может быть расположена по разному. В Rider она находится в верхнем правом углу:

![Rider's Build Solution button](/images/starting-a-mod/riderbuild.png)

После компиляции вы сможете найти файл `.dll` в папке вашего проекта по следующему пути (замените `MyFirstPlugin` на имя, которое вы дали своей модификации): `MyFirstPlugin/bin/(Release или Debug)/netstandard2.1/MyFirstPlugin.dll`

Просто скопируйте этот файл и поместите в папку `BepInEx/plugins` что находится в папке с вашей игрой, после чего запустите её. Мы рекомендуем оставить `LogInfo` в методе `Awake` что идёт сразу из коробки. Потому что если он будет включен вы сможете увидеть в консоли работает ли ваш мод (при условии что консоль вы включили).

### Добавляем код игры

Чтобы использовать методы и классы из игры вам потребуется добавить `Assembly-CSharp.dll` в ссылки вашего проекта. Вы можете сделать это вручную, отредактировав файл `.csproj`, или через вашу IDE. Вы можете загуглить как это делается в вашей среде разработки.

Также вам понадобится добавить `UnityEngine.dll`, так как он необходим для использования методов и классов из Unity.

Наш [шаблон](https://github.com/LethalCompany/LethalCompanyTemplate) уже полностью настроен, поэтому советуем просто скопировать `.csproj` из него. Однако вам все равно **придется** отредактировать путь так, что бы он был верным.

Эти два `.dll` можно найти в папке `Lethal Company_Data/Managed` в директории игры.

### Дополнительные руководства

Мы крайне рекомендуем прочитать [руководство BepInEx](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html) для большего понимания темы.

## Что дальше?

Мы рекомендуем прочитать наше краткое руководство по [open-source и этике](open-source-and-ethics) чтобы помочь нам создать здоровое сообщество моддеров.

Как только вы закончили создание своего мода вы можете [опубликовать его](publishing-your-mod).
