---
prev: false
next: false
description: How to use RPCs in a static context.
---

# StaticNetcodeLib

This lib/patcher is a small patcher that will modify how your static rpcs run, to allow
them to be networked. Using this patcher is simple, and requires very little changes to how
you typically use RPCs.

## Installation

To intsall this lib, reference the package through NuGet. This can be done in several ways:

1. Through your IDE's interface.
2. In the command line.
   - This can be done with the following command:

```sh
dotnet add package Xilophor.StaticNetcodeLib
```

3. Modifying your `.csproj` file.
    - Add the following snippet to your project file:

```xml
<ItemGroup>
    <PackageReference Include="Xilophor.StaticNetcodeLib" Version="1.*" PrivateAssets="all" />
</ItemGroup>
```

## Usage

Once StaticNetcodeLib is referenced, add a BepInDependency to `"Xilophor.StaticNetcodeLib"`,
or use `StaticNetcodeLib.Guid`. It should look like so:

```cs
[BepInDependency(StaticNetcodeLib.Guid, DependencyFlags.HardDependency)]
```

::: danger
This step is <u>***mandatory***</u>. If you do not add the dependency, your mod **will not** be patched.
:::

Next, add the `[StaticNetcode]` attribute to any classes that will have static RPCs in them. This tells
StaticNetcodeLib to search through those classes for RPCs that are static.

Finally, make sure that your RPC is static, like so:

```cs
[StaticNetcode]
public class ExampleNetworkingClass
{

    [ServerRpc] // [!code focus:5]
    public static void ExampleServerRpc(string messageToLog) // [!code highlight]
    {
        ExampleMod.Logger.LogDebug(messageToLog);
    }

}
```

## Differences to NGO RPCs

The major difference, outside of the static environment, to NGO's RPCs is the serialization of data.
StaticNetcodeLib uses OdinSerializer to serialize data that is sent across the network. The lib does,
however, still support `INetworkSerializable`, and thus will serialize classes/structs that implement
that interface.

::: warning
One of the data types that is not supported by OdinSerializer - and thus will not be serialized - are
`record`s.
:::

### Limitations

There are not many limitations of what you can do with static RPCs over what you can do with
typical RPCs, outside of the static vs instanced nature. One of the few limitations to these
static RPCs is that any attribute data you have will be ignored - though this will only appear
in specific use cases, such as `[ClientRpc(Delivery = RpcDelivery.Unreliable)]`.

Otherwise, there are no major limitations in what you do differently.
