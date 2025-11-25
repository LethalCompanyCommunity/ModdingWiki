---
prev: true
next: true
description: Learn how to use networking for items & other game objects.
---

# Custom Object Behaviour

::: info DISCLAIMER
This is not a detailed tutorial on how to use Unity's [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/1.5.2/about/) 
RPCs and Network Variables. This is only meant to be used to understand *how* to implement custom networking into the game.
:::



## Remote Procedure Calls (RPCs) {#rpcs}

Remote Procedure Calls, or RPCs, are a great way to send "commands" between clients to dictate how the object behaves. 
You can choose to send differnet parameters over the network, such as which client a enemy or trap is targeting,
or text to set the screen of an item to.

There are two "versions" of RPCs. The most common is `ServerRpc` (Client-to-Server) and `ClientRpc` (Server-to-Client), 
which are those used by the game and every mod developed before v73. This is because before v73, they were 
the only option available in the version of NGO the game used. Since then, there is a second way of using RPCs - a 
generic `Rpc` that encompasses both Client-to-Server and Server-to-Client RPCs, as well as allowing Client-to-Client RPCs.

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
        var color = new Color(UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255));
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

### RPC

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
        var color = new Color(UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255));
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

#### Usage {#networkvariable-usage}

```cs
public class ExampleObjectBehaviour : NetworkBehaviour
{
    public Light lightComponent;
    public NetworkVariable<Color> lightColor = new NetworkVariable<Color>();

    [Rpc(SendTo.Server)]
    public void ChangeColorRpc()
    {
        lightColor = new Color(UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255));
    }
}
```

### NetworkList

#### Usage {#networklist-usage}

```cs
public class ExampleObjectBehaviour : NetworkBehaviour
{
    public List<Light> lightComponents;
    public NetworkList<Color> lightColors;

    private void Awake()
    {
        lightColors = new NetworkList<Color>();

        for (var i = 0; i < 5; i++)
            lightColors.Add(new Color(UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255)));
    }

    [Rpc(SendTo.Server)]
    public void ChangeColorsRpc()
    {
        var index = UnityEngine.Random.Range(0,lightColors.Count);
        lightColors[index] = new Color(UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255), UnityEngine.Random.Range(0,255));
    }
}
```