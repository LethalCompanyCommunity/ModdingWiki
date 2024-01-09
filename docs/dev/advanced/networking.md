---
prev: false
next: false
description: An advanced overview of how to use Unity Netcode Patcher to add networking to your Lethal Company mods.
---

# Networking

::: danger
While the code in this article should be compileable on `netstandard2.1` with `c#7.0`, it should be still be seen as pseudo-code and certain things have been omitted, such as using statements, namespaces, etc.
:::

::: warning
**This is an advanced article. While this introduces some C# concepts, it is highly recommended to understand C# and the basics of modding this game <i>before</i> reading this article.**
:::

::: info
This is not a tutorial on how to use Unity's [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/1.5.2/about/) RPCs and Network Variables. This is only meant to be used to understand <i>how</i> to implement custom networking into the game.
:::

## Preface

This tutorial will require you to use
[@EvaisaDev](https://github.com/EvaisaDev/)'s [Unity Netcode Patcher](https://github.com/EvaisaDev/UnityNetcodePatcher).
If you run into any issues after the setup process you can reach out to the developer via the below discord forum posts.

[Unity Netcode Patcher Forum Post](https://discord.com/channels/1169792572382773318/1175504315029389343) inside [Unofficial Lethal Company Community Discord](https://discord.gg/nYcQFEpXfU)

### Evaisa's Unity Netcode Patcher {#desc-netcode-patcher}

Unity Netcode Patcher is a compile-time program that runs the IL Post Processing(**Patching**) utilizing **Unity's Netcode** for GameObjects package, which is typically performed before a game is shipped. 

::: details How your method works after NGOs IL Post Processing
```cs
[ClientRpc]
public void EventClientRPC(string eventType)
{
    // code here
    MyLogger.LogInfo(eventType);
}
```

Into something a bit less legible, but networks your method calls:

```cs
[ClientRpc]
public void EventClientRPC(string eventType)
{
    NetworkManager networkManager = base.NetworkManager; // [!code ++] 
    // If the NetworkManager doesn't exist OR it's not listening, do nothing. 
    if (networkManager == null || !networkManager.IsListening) // [!code ++]
    { // [!code ++]
        return; // [!code ++]
    } // [!code ++]
    if (this.__rpc_exec_stage != NetworkBehaviour.__RpcExecStage.Client && (networkManager.IsServer || networkManager.IsHost)) // [!code ++]
    { // [!code ++]
        // If this NetworkBehaviour's custom variable that tracks RPC state says we're NOT in
        // "client mode" AND we are the server/host, then we send this network message to clients.
        ClientRpcParams clientRpcParams; // [!code ++]
        FastBufferWriter fastBufferWriter = base.__beginSendClientRpc(1302598205U, clientRpcParams, RpcDelivery.Reliable); // [!code ++]
        bool flag = eventType != null; // [!code ++]
        fastBufferWriter.WriteValueSafe<bool>(flag, default(FastBufferWriter.ForPrimitives)); // [!code ++]
        if (flag) // [!code ++]
        { // [!code ++]
            fastBufferWriter.WriteValueSafe(eventType, false); // [!code ++]
        } // [!code ++]
        base.__endSendClientRpc(ref fastBufferWriter, 1302598205U, clientRpcParams, RpcDelivery.Reliable); // [!code ++]
    } // [!code ++]
    // One final check. If this NetworkBehaviour's custom variable that tracks RPC state says we're NOT in "client mode" OR we're a server only. Then do nothing.
    if (this.__rpc_exec_stage != NetworkBehaviour.__RpcExecStage.Client || (!networkManager.IsClient && !networkManager.IsHost)) // [!code ++]
    { // [!code ++]
        return; // [!code ++]
    } // [!code ++]
    // code here
    MyLogger.LogInfo(eventType);
}
```

Which allows you to call this method on the server or host, and instead of executing in the environemnt you called it in, it will execute on all clients (host included).
:::

## Other Setup Required

There **must** be a project reference to `Unity.Netcode.Runtime.dll` to utilize Netcode for GameObjects. You can refer to [this section](/dev/starting-a-mod#adding-game-assemblies) of this wiki to add it.

## Introduction

In order to provide a verbose enough example, without covering too many topics already touched on in the [NGO Documentation](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/messaging-system/), the following example will be of a basic `NetworkHandler` with a Singleton structure that your plugin can use to network information.

## Discussion: NGO Restrictions

::: warning
The following snippet assumes you've read and understand the [<u>Unity Netcode Documention on NetworkObjects</u>](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkobject/index.html) and how they relate to, and identify, `NetworkBehaviour`s, `NetworkTransform`s, and their `NetworkVariable`s. 
:::

In order to keep things predictable, and reproducable, across the network. Unity's Networking for GameObjects is gonna require you to have things be sealed up; This is done by `NetworkObject`s identifying with their child `NetworkBehaviour`s once on start, etc., and to get around this you are typically building your `NetworkObject` and it's networked components as part of a prefab in an AssetBundle that you export from your UnityEditor.

To avoid AssetBundle creation, we will be creating our prefabs programatically in our plugin's Awake method.
First, however, we need a `NetworkHandler` that we can add to our prefab.

## Creating the NetworkHandler

The `NetworkHandler` houses the RPCs, `NetworkVariable`s, and any other methods allowing information to be passed over the network. In this example this will be used to transmit some arbitrary <u>undefined</u> `struct Configuration : INetworkSerializable`. For information on Serialization and what you can send through an RPCs parameters check out the [NGO Documentation on INetworkSerializable](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/serialization/inetworkserializable/) as well as [NGO Documentation on (Server/Client)RpcParams](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/message-system/rpc-params/) for sending to specific clients or getting sender id (which is briefly mentioned in this article).

::: warning
The following snippet assumes you've read and understand the [<u>Unity Netcode Documention on how NetworkBehaviours function</u>](https://docs-multiplayer.unity3d.com/netcode/current/basics/networkbehavior/), as well as [<u>Unity Netcode Documentation on RPCs and Messaging</u>](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/messaging-system/).
:::

First we'll be creating our `NetworkHandler` component and giving it a `static Instance` so we can access it anywhere.

```cs:line-numbers {3}
public class ExampleNetworkHandler : NetworkBehaviour
{
    public static ExampleNetworkHandler Instance { get; private set; }  // [!code ++]
}
```

We'll be needing some RPC methods to call. We'll add a ServerRpc to indicate when a client has joined the server and a ClientRpc for the server to send a configuration back to connecting clients.

::: tip
You'll notice the `ServerRpcParams`, and the `ClientRpcParams`, in the following code are covered in the *NGO Documentation on (Server/Client)RpcPrams*.
:::

```cs:line-numbers 
public class ExampleNetworkHandler : NetworkBehaviour
{
    public static ExampleNetworkHandler Instance { get; private set; }

    [ServerRpc]  // [!code ++]
    public void ConnectedServerRpc(ServerRpcParams rpcParams = default) {  // [!code ++]
        // Send config to client // [!code ++]
        TakeConfigClientRpc(MyPlugin.MyConfig, new ClientRpcParams() {  // [!code ++]
            Send = new ClientRpcSendParams() { // [!code ++]
                TargetClientIds = new ulong[] { rpcParams.Receive.SenderClientId } // [!code ++]
            } // [!code ++]
        }) // [!code ++]
    }  // [!code ++]
    [ClientRpc] // [!code ++]
    public void TakeConfigClientRpc(Configuration serializableConfig, ClientRpcParams rpcParams = default) { // [!code ++]
        // Do something with the config // [!code ++]
    } // [!code ++]
}
```

Next we'll need to trigger the `ConnectedServerRpc`; This can be done in many places, but for simplicity, we override a default `NetworkBehaviour` method `OnNetworkSpawn`

```cs:line-numbers 
public class ExampleNetworkHandler : NetworkBehaviour
{
    public static ExampleNetworkHandler Instance { get; private set; }

    [ServerRpc]
    public void ConnectedServerRpc(ServerRpcParams rpcParams = default) {
        // Send config to client
        TakeConfigClientRpc(MyPlugin.MyConfig, new ClientRpcParams() {
            Send = new ClientRpcSendParams() {
                TargetClientIds = new ulong[] { rpcParams.Receive.SenderClientId }
            }
        })
    }
    [ClientRpc]
    public void TakeConfigClientRpc(Configuration serializableConfig, ClientRpcParams rpcParams = default) {
        // Do something with the config
    }

    public override void OnNetworkSpawn() {  // [!code ++]
        // No need to sync with host // [!code ++]
        if (!IsHost) { // [!code ++]
            ConnectedServerRpc() // [!code ++]
        } // [!code ++]
    } // [!code ++]
}
```

Now we should declare our config and setup our prefab in our plugin.

## Setup Prefab in Plugin::Awake()
Just before prefab creation, as mentioned, in order to avoid AssetBundles, we need to set the `NetworkObject`s `.GlobalObjectIdHash` value ourselves. This value needs to be (somewhat) unique and consistent; So provided is a method we will add to our `BaseUnityPlugin` that will allow us to retrieve *up to* 4 unique hash values to use per call(unique salt value). The method is straight-forward and just returns a tuple of 4 uints.

```cs:line-numbers
[BepInPlugin("some.custom.guid", "My Plugin", "1.0.0")]
public class MyPlugin : BaseUnityPlugin {
    private (uint, uint, uint, uint) QuadHash(int SALT = 0) { // [!code ++]
        Hash128 longHash = new Hash128(); // [!code ++]
        longHash.Append(this.Info.Metadata.GUID); // [!code ++]
        longHash.Append(SALT); // [!code ++]
        return ((uint)longHash.u64_0, (uint)(longHash.u64_0 >> 32), // [!code ++]
                (uint)longHash.u64_1, (uint)(longHash.u64_1 >> 32)); // [!code ++]
    } // [!code ++]
}
```

Now for setting up the prefab in our Plugin's Awake method.
We should also save a reference to this prefab as well as that imaginary `Configuration` we discussed earlier. For this doc's sake, we'll assume that the Type `Configuration` is `INetworkSerializable` and you've created it of course.

```cs:line-numbers
[BepInPlugin("some.custom.guid", "My Plugin", "1.0.0")]
public class MyPlugin : BaseUnityPlugin {
    private (uint, uint, uint, uint) QuadHash(int SALT = 0) { 
        ...
    } 
    internal static Configuration MyConfig;
    internal static GameObject MyPrefab;  // [!code ++]
    private void Awake() { // [!code ++]
        // Create GameObjects // [!code ++]
        MyPrefab = new GameObject("MyPrefab", // [!code ++]
            typeof(NetworkObject), // As mentioned in the articles, we need a NetworkObject for our behaviours. // [!code ++]
            typeof(ExampleNetworkHandler) // We only add our ExampleNetworkHandler here but you could add more // [!code ++]
        ); // [!code ++]
        ExampleNetworkHandler.Instance = MyPrefab.GetComponent<ExampleNetworkHandler>(); // Set the Instance value // [!code ++]
        // [!code ++]
        MyPrefab.hideFlags = HideFlags.HideAndDontSave; // Where prefabs are stored - @Xilo // [!code ++]
        // Get a set of hash values, _ discards the particular return value // [!code ++]
        (hash, _, _, _) = QuadHash(1) // Increase the salt for different values (if you have more than 4 prefabs) // [!code ++]
        MyPrefab.GetComponent<NetworkObject>().GlobalObjectIdHash = hash; // [!code ++]
    }
}
```

## Adding the Prefab as a Network Prefab {#adding-network-prefab}

We'll be using HarmonyX to attach to the `NetworkManager::Start` method so we can register our Network prefab before it starts. The following patch should be patched by a Harmony instance in our Plugin.

```cs
[HarmonyPatch(typeof(GameNetworkManager), "Start")] // [!code ++]
public class GameNetworkManagerStartPatch // [!code ++]
{ // [!code ++]
    [HarmonyPostfix] // [!code ++]
    public static void Init() // [!code ++]
    { // [!code ++]
        NetworkManager.Singleton.AddNetworkPrefab(MyPlugin.MyPrefab) // [!code ++]
    } // [!code ++]
} // [!code ++]
```

::: warning
You can only add network prefabs to NetworkManager **before** the player creates or joins a server. You can also do so after the player leaves the server.<br><br>If you try to add a network prefab while the player is connected to a server, it will result in an error and your object <u>will not</u> be loaded.
:::

::: danger
We're referencing HarmonyX patches here and left out is the code where you need to patch those methods. HarmonyLib has done a great job at [<u>Harmony Docs</u>](https://harmony.pardeike.net/articles/basics.html) and you should implement a patcher and patch the methods discussed.
:::

### Spawning the GameObject During Runtime {#spawning-the-gameobject}

Now that the game knows what to load when we tell it to load the ExampleNetworkHandler, all we have left is to spawn it! To do so, we just must Instantiate the prefab, then spawn it:

```cs
var networkHandlerHost = Object.Instantiate(MyPlugin.MyPrefab, Vector3.zero, Quaternion.identity)
networkHandlerHost.GetComponent<NetworkObject>().Spawn();
```

::: tip
While you can put `destroyWithScene: false` as a parameter in the Spawn method to prevent the game from auto-deleting the object, you shouldn't in this case! The object stays loaded in `SampleSceneRelay`, which is the main ship scene.<br><br>This scene never gets unloaded until disconnecting from the server - <i>precisely</i> when we want the network object to be destroyed!
:::

But wait, there's a catch: Only the host/server is allowed to spawn the network object! To prevent clients from spawning the object, we can do something simple. We just check whether the game instance is a host or a client:

```cs
[HarmonyPatch(typeof(StartOfRound), "Awake")] // [!code ++]
public class StartOfRoundAwakePatch // [!code ++]
{ // [!code ++]
    [HarmonyPostfix] // [!code ++]
    public static void SpawnNetworkHandler() // [!code ++]
    { // [!code ++]
    if(NetworkManager.Singleton.IsHost || NetworkManager.Singleton.IsServer) // [!code highlight]
        {
            var networkHandlerHost = Object.Instantiate(MyPlugin.MyPrefab, Vector3.zero, Quaternion.identity) // [!code ++]
            networkHandlerHost.GetComponent<NetworkObject>().Spawn(); // [!code ++]
        } // [!code ++]
    } // [!code ++]
} // [!code ++]
```

We want to attach this to `StartOfRound.Awake` as this method only runs when a new server is started by the host or loaded in by the client. Not only that, but it's one of the first methods to run when starting or joining a server.

## Using Unity Netcode Patcher {#using-netcode-patcher}

Now that we've finished the networking code, all that's left is to patch the compiled mod assembly with Unity Netcode Patcher. Before we can do so, we need to prepare the mod for patching. 

1. Make sure that there is a .pdb file when you build your plugin. If it is not there, make sure that Debug Symbols is set to `Portable` and not embedded.

2. Add the following code to your main Plugin.cs file, and make sure the method only runs **once**:

```cs
private static void NetcodePatcher()
{
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
}

static void Awake()
{
    NetcodePatcher(); // ONLY RUN ONCE // [!code warning]
}
```

Before you can run Unity Netcode Patcher, make sure it's set up - specifically, copy the contents of `Lethal Company/Lethal Company_Data/Managed` into `NetcodePatcher/deps`.

Now, you just have to add the following Post-Build Event to your project:

```cmd
cd <NetcodePatcher Folder Directory Here>
NetcodePatcher.dll $(TargetDir) deps/
```

If this does not work, you can [follow the instructions on how to use Unity Netcode Patcher from the command line.](https://github.com/EvaisaDev/UnityNetcodePatcher#usage-from-command-line)

## Conclusion

Now that you've finally finished all the code and patched it with Unity Netcode Patcher, you should have networking in your mod! Congrats! Pat yourself on the back! It's not easy getting to this stage, and you will always run into issues as you continue your modding journey. But don't fret! You can always get help in the [Unofficial Lethal Company Community Discord!](https://discord.gg/nYcQFEpXfU)

