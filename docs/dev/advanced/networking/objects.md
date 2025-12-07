---
prev: true
next: true
description: Learn how to use networking for items & other game objects.
---

# Custom Object Behaviour

::: info DISCLAIMER
This is not a detailed tutorial on how to use Unity's [Netcode for GameObjects](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.13/manual/index.html) 
RPCs and Network Variables. This is only meant to be used to understand *how* to implement custom networking into the game.
:::

When developing mods, you may want to create an instanced object that can synchronize across clients. In order to do so,
there are two main steps to create the object in the Unity Editor. 

First, you need to attach a `NetworkObject` component to the `GameObject` in question. Once you've done so, you will need
to make a class inheriting the `NetworkBehaviour` class (like a `MonoBehaviour`), and add that as a component either to
the `GameObject` with the `NetworkObject` component, or a child of the `GameObject`.

Make sure you use the Unity Netcode Patcher (UNP) after compiling your mod, as during game development, Netcode for Game Objects
(NGO) runs post processing on the code, which UNP replicates.

<!--@include: @./parts/netcode-patcher-installation.md-->

## Remote Procedure Calls (RPCs) {#rpcs}

Remote Procedure Calls, or RPCs, are a great way to send "commands" between clients to dictate how the object behaves. 
You can choose to send differnet parameters over the network, such as which client a enemy or trap is targeting,
or text to set the screen of an item to.

There are two "versions" of RPCs. The most common is `ServerRpc` (Client-to-Server) and `ClientRpc` (Server-to-Client), 
which are those used by the game and every mod developed before v73. This is because before v73, they were 
the only option available in the version of NGO the game used. Since then, there is a second way of using RPCs - a 
generic `Rpc` that encompasses both Client-to-Server and Server-to-Client RPCs, as well as allowing Client-to-Client RPCs.

::: tip
When transmitting `NetworkBehaviour`s or `NetworkObject`s across the network, you must use `NetworkBehaviourReference` or
`NetworkObjectReference`. These can be implicitly cast to and from their corresponding types, but are a much smaller form
factor to be transmitted over the network. 
:::

### ServerRPCs and ClientRPCs

There are two main classifications of RPCs. Those that are sent to the server from a client, considered a **ServerRpc**, 
and those that are sent to clients from a server, considered a **ClientRpc**. A server cannot call a ServerRpc, nor can 
a client call a ClientRpc.

There is an exception to this rule, however. In the game, the player hosting the lobby is refered to as the **host** in 
NGO. This classifcation is a mix of server and client, which allows the host to act as both the server and a client. This
lets the host call ServerRpcs even though it is considered a server, and call ClientRpcs even though it is considered 
a client.

#### Usage {#server-client-usage}

Both server and client RPCs must have the corresponding attribute and text appended to the end of the method name.
In addition, the methods must have a return type set to `void`. If this is not the case, NGO will not be able to
run the method. Shown below is a demonstation of valid usage:

```cs
public class ExampleObjectBehaviour : NetworkBehaviour
{
    public Light lightComponent;

    [ServerRpc]
    public void ChangeColorServerRpc()
    {
        /* Method for the server to run */
        var color = UnityEngine.Random.ColorHSV();
        EnableLightClientRpc(color);
    }

    [ClientRpc]
    public void SetColorClientRpc(Color lightColor)
    {
        /* Method for all clients to run */
        lightComponent.color = lightColor;
    }
}
```

#### Post Processing {#server-client-post-processing}

When you are inspecting the game code, you may notice that the server and client RPCs do not look as simple as 
the code above. This is because at compile time of the game, NGO goes through and performs post-processing to make
these methods behave as intended with NGO.

```cs
[ClientRpc]
private void ExampleClientRpc()
{
    NetworkManager networkManager = this.NetworkManager;
    if (networkManager == null || !networkManager.IsListening)
        return;
    if (this.__rpc_exec_stage != NetworkBehaviour.__RpcExecStage.Execute && (networkManager.IsServer || networkManager.IsHost))
    {
        ClientRpcParams clientRpcParams;
        FastBufferWriter bufferWriter = this.__beginSendClientRpc(67448504U, clientRpcParams, RpcDelivery.Reliable);
        this.__endSendClientRpc(ref bufferWriter, 67448504U, clientRpcParams, RpcDelivery.Reliable);
    }
    if (this.__rpc_exec_stage != NetworkBehaviour.__RpcExecStage.Execute || !networkManager.IsClient && !networkManager.IsHost)
        return;
    this.__rpc_exec_stage = NetworkBehaviour.__RpcExecStage.Send;
    // Actual Method Code
}
```

This code may look complex, but it follows a simple process.
>1. Check if server is running/client is connected
>2. Send the method call over the network if meeting the sending requirements and not executing
>3. Return out of the function if not meeting the execution requirements

### RPC {#rpc-method}

NGO has created a new and more broad way of creating RPCs. This is the preferred and widely documented way in the NGO 
docs. It also helps make it a bit clearer on how the RPCs are sent over the network.

#### Usage {#rpc-usage}

The requirements for RPC are essentially the same as with server and client RPCs. You need to have the `Rpc` attribute,
"Rpc" appended to the method name, and a return type of `void`.

To send a command over to the server or client, it is a bit more clear with the `SendTo` enum:

```cs
public class ExampleObjectBehaviour : NetworkBehaviour
{
    public Light lightComponent;

    [Rpc(SendTo.Server)]
    public void ChangeColorRpc()
    {
        /* Method for the server to run */
        var color = UnityEngine.Random.ColorHSV();
        EnableLightClientRpc(color);
    }

    [Rpc(SendTo.ClientsAndHost)]
    public void SetColorRpc(Color lightColor)
    {
        /* Method for all clients to run */
        lightComponent.color = lightColor;
    }
}
```

::: tip
For more information on how to use RPCs in this way, visit the [NGO docs on RPCs](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.13/manual/advanced-topics/message-system/rpc.html).
:::

## Network Variables

RPCs aren't the only way to communicate data between clients. Network Variables exist to simplify some of that for you; 
instead of needing to send commands back and forth with the new data values, NGO can handle that for you. It will
automatically send updates over the network as the variable is updated.

### NetworkVariable

This type is the standard variable type. It can synchronize many types, including C# primitive types (`int`, `long`, 
`char`, `bool`, etc.), some of Unity's built-in types (`Vector2`, `Vector3`, `Color`, `Ray`, etc.), and any type
implementing `INetworkSerialized`, such as `NetworkObjectReference` and `NetworkBehaviourReference`.

::: danger
These types do not include strings. In order to use strings, you must either create a custom implementation, or use
Unity's fixed strings in the `Unity.Collections.FixedString` namespace.
:::

#### Usage {#networkvariable-usage}

By default, only the server can write to the variable, and everything can read the variable. You can read and write the 
value by looking at the `Value` property, or listen to value changes by subscribing to the `OnValueChanged` event.

```cs
public class ExampleObjectBehaviour : NetworkBehaviour
{
    public Light LightComponent;
    public NetworkVariable<Color> LightColor = new NetworkVariable<Color>();
    public NetworkVariable<int> LightHP = new NetworkVariable<int>(10);

    public override void OnNetworkSpawn()
    {
        if (IsClient)
            LightColor.OnValueChanged += UpdateLight;
    }

    public void DamageLight(int amount)
    {
        if (!IsServer) return;
        LightHP.Value -= amount;
    }

    [Rpc(SendTo.Server)]
    public void ChangeColorRpc()
    {
        if (LightHP.Value >= 5)
            LightColor = UnityEngine.Random.ColorHSV();
        else
            LightColor = Color.orange;
    }

    private void UpdateLight(Color oldColor, Color newColor)
    {
        LightComponent.color = newColor;
    }
}
```

::: tip
For more inforamtion on `NetworkVariable`s and their permissions, visit the [NGO docs](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.13/manual/basics/networkvariable.html).
:::

### NetworkList

`NetworkList`s allow you to store lists that can be synchronized across clients in an optimized way that reduces 
bandwidth. They have similar type restrictions as `NetworkVariable`s, and overall work in the same way.

#### Usage {#networklist-usage}

Network Lists are similar to `NetworkVariable`s, but work more in a `List<T>` fashion. You can index the list, add, and
remove from the list. Instead of a `OnValueChanged` event, there is a `OnListChanged` event.

One difference is that `NetworkList`s ***must*** be initialized inside an Awake function; otherwise, they will break.

```cs
public class ExampleObjectBehaviour : NetworkBehaviour
{
    public List<Light> LightComponents;
    public NetworkList<Color> LightColors;
    public NetworkList<int> LightHPs;

    private void Awake()
    {
        LightColors = new NetworkList<Color>();
        LightHPs = new NetworkList<int>();

        if (IsServer)
        {
            for (var i = 0; i < LightComponents.Count; i++)
                LightColors.Add(UnityEngine.Random.ColorHSV());

            for (var i = 0; i < LightComponents.Count; i++)
                LightHPs.Add(10);
        }
    }

    public override void OnNetworkSpawn()
    {
        if (IsClient)
        {
            LightComponents.OnListChanged += UpdateLights;
            for (var i = 0; i < LightComponents.Count; i++)
                LightComponents[i].color = LightColors[i];
        }
    }

    public void DamageLight(int index, int amount)
    {
        if (!IsServer) return;
        LightHPs[index] -= amount;
    }

    [Rpc(SendTo.Server)]
    public void ChangeColorsRpc()
    {
        var index = UnityEngine.Random.Range(0,LightColors.Count);
        if (LightHPs[index] >= 5)
            LightColors[index] = UnityEngine.Random.ColorHSV();
        else
            LightColors[index] = Color.orange;
    }

    private void UpdateLights(NetworkListEvent<Color> changeEvent)
    {
        LightComponents[changeEvent.Index].color = changeEvent.Value;
    }
}
```

::: tip
For more inforamtion on `NetworkList`s, visit the [NGO API docs](https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@1.13/api/Unity.Netcode.NetworkList-1.html).
:::

## Registering the Prefab

Once you've created the prefab in Unity and bundled it for use in the mod, you will need to register the prefab during
runtime. There are two ways of going about this - you can either use LethalLib at `Plugin::Awake`, which has a helper method to perform
this operation for you, or you can register the prefab with the `NetworkManager` yourself after the `NetworkManager`
exists.

### LethalLib {#lethallib-register}

```cs
internal class Plugin : BaseUnityPlugin
{
    private AssetBundle MainAssetBundle;
    
    private void Awake()
    {
        MainAssetBundle = AssetBundle.LoadFromFile(Path.Combine(
                Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!, 
                "exampleBundle"));

        var exampleObjectPrefab = MainAssetBundle.LoadAsset<GameObject>("Assets/ExampleObject.asset");
        LethalLib.Modules.NetworkPrefabs.RegisterNetworkPrefab(exampleObjectPrefab);
    }
}
```

::: tip
There are additonal methods available via LethalLib for registering scrap items and enemies. See the [LethalLib docs](/dev/apis/lethallib)
for more information.
:::

### Manual {#manual-register}

::: code-group

```cs [Harmony]
[HarmonyPatch]
public class NetworkManagerPatches
{
    private static GameObject? _exampleObjectPrefab = null;

    [HarmonyPostfix, HarmonyPatch(typeof(GameNetworkManager), nameof(GameNetworkManager.Start))] 
    public static void Start_PostfixPatch()
    {
        if (_exampleObjectPrefab != null)
            return;
        
        _exampleObjectPrefab = Plugin.MainAssetBundle.LoadAsset<GameObject>("Assets/ExampleObject.asset");
        NetworkManager.Singleton.AddNetworkPrefab(_exampleObjectPrefab);
    }
}
```

```cs [MonoMod]
public class NetworkManagerPatches
{
    private static GameObject? _exampleObjectPrefab = null;

    private static void GameNetworkManager_Start(On.GameNetworkManager.orig_Start orig, GameNetworkManager self)
    {
        orig(self);

        if (_exampleObjectPrefab != null)
            return;
        
        _exampleObjectPrefab = (GameObject)Plugin.MainAssetBundle.LoadAsset("Assets/ExampleObject.prefab");
        NetworkManager.Singleton.AddNetworkPrefab(_exampleObjectPrefab);
    }
}
```

:::