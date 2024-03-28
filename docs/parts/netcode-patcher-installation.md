:::details Installing UnityNetcodePatcher

1. Install the tool with:

```sh
dotnet tool install -g Evaisa.NetcodePatcher.Cli
```

2. Add the following code to your `.csproj`:

```xml
<Target Name="NetcodePatch" AfterTargets="PostBuildEvent">
    <Exec Command="netcode-patch -nv 1.5.2 &quot;$(TargetPath)&quot; @(ReferencePathWithRefAssemblies->'&quot;%(Identity)&quot;', ' ')"/>
</Target>
```

3. Add the following code to your `Plugin::Awake` method:

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

:::
