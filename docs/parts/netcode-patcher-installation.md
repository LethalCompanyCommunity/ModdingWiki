:::details Installing UnityNetcodePatcher

1. Add the following code to your `Plugin::Awake` method:

```cs
var types = Assembly.GetExecutingAssembly().GetTypes();
foreach (var type in types)
{
    var methods = type.GetMethods(BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);
    foreach (var method in methods)
    {
        var attributes = method.GetCustomAttributes(typeof(RuntimeInitializeOnLoadMethodAttribute), false);
        if (attributes.Length > 0)
        {
            method.Invoke(null, null);
        }
    }
}
```

2. Install the tool with:

```sh
dotnet tool install -g Evaisa.NetcodePatcher.Cli
```

3. Add the following code to your `.csproj`:

```xml
<Target Name="NetcodePatch" AfterTargets="PostBuildEvent">
    <Exec Command="netcode-patch -nv 1.5.2 &quot;$(TargetPath)&quot; @(ReferencePathWithRefAssemblies->'&quot;%(Identity)&quot;', ' ')"/>
</Target>
```

:::details Editing the `.csproj`
To modify the `.csproj` file, there are a few different methods possible. The first option is to open
the file in a text editor - such as Notepad++. You can also modify the file in your IDE, which can be opened
by either pressing `F4` when the project is selected in the solution explorer, or by right-clicking the
project in the solution explorer and selecting Edit Project.
:::
