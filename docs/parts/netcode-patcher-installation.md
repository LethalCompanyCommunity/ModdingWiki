:::details Installing UnityNetcodePatcher

1. Add the following code to your `Plugin::Awake` method:

```cs
private void Awake()
{
    var types = Assembly.GetExecutingAssembly().GetTypes(); // [!code focus:13]
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
}
```

2. Install the tool with:

```sh
$ dotnet tool install -g Evaisa.NetcodePatcher.Cli
```

3. Add the following code to your `.csproj`:

```xml
<Target Name="NetcodePatch" AfterTargets="PostBuildEvent">
    <Exec Command="netcode-patch -uv 2022.3.62 -nv 1.12.0 -tv 1.0.0 &quot;$(TargetPath)&quot; @(ReferencePathWithRefAssemblies->'&quot;%(Identity)&quot;', ' ')"/>
</Target>
```

:::details Editing the `.csproj`
To modify the `.csproj` file, there are a few different methods possible. The first option is to open
the file in a text editor - such as Notepad++. You can also modify the file in your IDE, which can be opened
by either pressing `F4` when the project is selected in the solution explorer, or by right-clicking the
project in the solution explorer and selecting Edit Project.
:::

:::details Updating UnityNetcodePatcher from before v73
If you previously used Unity Netcode Patcher or have it installed, before patching for v73 and later, ensure you have the latest version of UNP.

The maintainer of that project recommends uninstalling and reinstalling the package globally to ensure there's not conflicting files and is up-to-date:

```sh
$ dotnet tool uninstall -g Evaisa.NetcodePatcher.Cli
$ dotnet tool install -g Evaisa.NetcodePatcher.Cli
```

Additionally, ensure you are using the CLI/post-build event correctly with the new parameters:

::: code-group

```sh [CLI]
$ netcode-patch -uv 2022.3.62 -nv 1.12.0 -tv 1.0.0 ...
```

```xml [Post-Build Event]
<Target Name="NetcodePatch" AfterTargets="PostBuildEvent">
    <Exec Command="netcode-patch -uv 2022.3.62 -nv 1.12.0 -tv 1.0.0 &quot;$(TargetPath)&quot; @(ReferencePathWithRefAssemblies->'&quot;%(Identity)&quot;', ' ')"/>
</Target>
```
:::
