# Custom Networking

>**Note:** This is not a tutorial on how to use Unity's [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/tutorials/get-started-ngo/) RPCs and Network Variables.  
>This is only meant to be used to understand <i>how</i> to implement custom networking into the game.

## Preface

This tutorial requires using [@EvaisaDev](https://github.com/EvaisaDev/)'s [UnityNetcodeWeaver](https://github.com/EvaisaDev/UnityNetcodeWeaver) (Thank you very much Evaisa!). This tutorial will only go into the basics of using this tool; if you run into any issues, ask in the [NetcodePatcher Forum Post](https://discord.com/channels/1169792572382773318/1175504315029389343) on the [Unofficial Lethal Company Community Discord](https://discord.gg/nYcQFEpXfU).

### Why use Unity Netcode Weaver?

Unity Netcode Weaver replicates the IL Post Processing Unity performs when compiling code utilizing Netcode for GameObjects package. Essentially, this allows you to create and use RPCs, Network Variables, etc.

### Other Setup Required

There **must** be a project reference to `Unity.Netcode.Runtime.dll` to utilize Netcode for GameObjects. You can refer to [this section](./starting-a-mod?id=adding-game-assemblies) of this wiki to add it.

><b><i>In addition, the mod must use </i></b>`netstandard2.1`<b><i>. Failure to do so can cause Unity Netcode Weaver to not function!</i></b> (You should be using `netstandard2.1` anyways since the game is built with that.)

## Introduction

There are two parts to making a mod using Netcode for GameObjects (NGO) to allow the transmission of info between the host & clients.

1. Creating what I call the `NetworkHandler`
2. Spawning said `NetworkHandler` into the game

The first part is simple, it just requires making a script that will be attached to a game object as a component. The second gets more complicated due to requiring loading a GameObject from an AssetBundle - something not explained in this tutorial.

This tutorial will not go into detail on how to use this for Custom Objects or Creatures, but the basics generally are the same.

### ExampleMod

As an example, this tutorial will go through the process of adding networking to a mod that adds new-level events into the game. These events are not able to be replicated on each client and must instead receive info from the server/host on what event is to be played. Since we are dealing with events, RPCs would be preferable to Network Variables.

## Creating the NetworkHandler

The `NetworkHandler` houses the RPCs, Network Variables, and any other methods allowing information to be passed over the network. I recommend separating this script as far as possible from any patches to avoid potential errors through Unity. This can easily be done by not including/using any outside methods and variables in the script.

When creating the `NetworkHandler`, you must inherit the `NetworkBehaviour` class. This allows the script to utilize the networking methods.

```cs
using System;
using Unity.Netcode;
using UnityEngine;
using Object = UnityEngine.Object;

namespace ExampleMod
{
    public class ExampleNetworkHandler : NetworkBehaviour
    {

    }
}
```

### ClientRpc

We have our basic component! From here, we need to add the RPCs and a measure to avoid duplicate signals. Since the event info is only sent by the server, we do not have to deal with a ServerRpc and only need to set up the ClientRpc. This is what our example mod uses:

```cs
public static event Action<String> LevelEvent;

[ClientRpc]
public void EventClientRpc(string eventName)
{
    LevelEvent?.Invoke(eventName); // If the event has subscribers (does not equal null), invoke the event
}
```

According to the [Unity Docs](https://docs-multiplayer.unity3d.com/netcode/current/advanced-topics/message-system/clientrpc/#declaring-a-clientrpc), there must be an attribute before the RPC, and the RPC method name ***must*** end with ClientRpc.

### ServerRpc

Although not necessary in our tutorial mod, a server RPC method is similar and easy to set up as well. By default, however, any client that is not the owner of the game object will not be able to call the method. To avoid this and allow any client to call this method, we can add `(RequireOwnership = false)` to the attribute, resulting in the following method:

```cs
[ServerRpc(RequireOwnership = false)]
public void EventServerRPC(/*parameters here*/)
{
    // code here
}
```

### C# Events

Now, you may ask, what is `public static event Action<String> LevelEvent;`? This uses C#'s event/delegate system to create a readable event. While it may look complex at first, it turns out to be quite simple! A script can subscribe to the event (which will be shown later), at which point, when the event is invoked, a specified method will run.

You may also see `LevelEvent?.Invoke(eventName)` and wonder what the heck this mess of letters and symbols does. It's just a simplified version of the following code:

```cs
if (LevelEvent != null)
{
    LevelEvent(eventName);
}
```

All this if statement checks is whether the event is not equal to null and calls the event if so. The event will be null *if there are no subscribers to the event.*

### Preventing Duplication of Events

Since we are using `static` when defining our C# event, an edge case can occur. What happens if the event is not unsubscribed from, and the player joins a new server? Any code that unknowingly subscribes to the event a second time will run twice! How do we make sure this does not occur? We set the C# event to equal null. The best time to do so is when the NetworkHandler gets spawned in:

```cs
public override void OnNetworkSpawn()
{
    LevelEvent = null;

    base.OnNetworkSpawn();
}
```

This removes any subscribers and continues to call the base OnNetworkSpawn method to allow any code that runs in that to still occur.

### Finalized Network Handler

We finished! All that's left is to throw it all together into one script:

```cs
using System;
using Unity.Netcode;
using UnityEngine;
using Object = UnityEngine.Object;

namespace ExampleMod
{
    public class ExampleNetworkHandler : NetworkBehaviour
    {
        public override void OnNetworkSpawn()
        {
            LevelEvent = null;

            base.OnNetworkSpawn();
        }

        [ClientRpc]
        public void EventClientRpc(string eventName)
        {
            LevelEvent?.Invoke(eventName); // If the event has subscribers (does not equal null), invoke the event
        }

        public static event Action<String> LevelEvent;
    }
}
```

## Spawning the Network Handler

Before we can spawn the ExampleNetworkHandler, we must load it into the game. There are two ways we can do this: through LethalLib or loading it from an AssetBundle. In our case, we are going to load our handler from an AssetBundle. 

The Game Object we spawn as an asset requires a network object. We will use this prefab for our Network Handler:

![ExampleNetworkHandler Prefab](../docs/files/custom-networking/ExampleNetworkHandlerPrefab.png)

We bundle this prefab up, embed the prefab as a resource in our ExampleMod project, and then import it using:

```cs
MainAssetBundle = AssetBundle.LoadFromStream(Assembly.GetExecutingAssembly().GetManifestResourceStream("ExampleMod.ExampleModAssets"))
```

We then can begin working on the patch that spawns the NetworkHandler.

One other method of importing the asset is with:

```cs
MainAssetBundle = AssetBundle.LoadFromFile(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "ExampleModAssets"));
```

While this method works, it's not recommended due to potential issues with the ExampleModAssets file not existing at that location, either from the mod not being installed correctly, or someone accidentally deleting the file.

### Loading the Asset In

The asset needs to be loaded in and given to the NetworkManager as a NetworkPrefab - before the player starts or joins a server. If this is not done, the host and/or clients will not know what object to spawn in, and will result in nothing spawning in.

First, we need to load in the asset, which we will patch into GameNetworkManager's Start method to load it in:

```cs
[HarmonyPatch]
public class NetworkObjectManager
{

    [HarmonyPostfix, HarmonyPatch(typeof(GameNetworkManager), "Start")]
    public static void Init()
    {
        if (networkPrefab != null)
            return;
        
        networkPrefab = (GameObject)MainAssetBundle.LoadAsset("ExampleNetworkHandler");
    }

    static GameObject networkPrefab;
}
```

Wait! Before we can send this to the NetworkManager, don't you think it's missing something? Right, the ExampleNetworkHandler component! While it is possible to add this to the prefab beforehand (you can ask to find out how), it's also simple to add it right here and now. All we must do is add it as a component:

```cs
[HarmonyPostfix, HarmonyPatch(typeof(GameNetworkManager), "Start")]
public static void Init()
{
    if (networkPrefab != null)
        return;
    
    networkPrefab = (GameObject)MainAssetBundle.LoadAsset("ExampleNetworkHandler");
    networkPrefab.AddComponent<ExampleNetworkHandler>();
}
```

### Adding Asset as Network Prefab

Now that we have the prefab ready to be loaded, it's quite simple:

```cs
NetworkManager.Singleton.AddNetworkPrefab(networkPrefab);
```

>**Note:** You can only add network prefabs to NetworkManager **before** the player creates or joins a server. You can also do so after the player leaves the server.
>
>If you try to add a network prefab while the player is connected to a server, it will result in an error and your object <u>will not</u> be loaded.

To prevent any errors, we do this shortly after the prefab is loaded:

```cs
[HarmonyPostfix, HarmonyPatch(typeof(GameNetworkManager), "Start")]
public static void Init()
{
    if (networkPrefab != null)
        return;
    
    networkPrefab = (GameObject)MainAssetBundle.LoadAsset("ExampleNetworkHandler");
    networkPrefab.AddComponent<ExampleNetworkHandler>();
    
    NetworkManager.Singleton.AddNetworkPrefab(networkPrefab);
}
```

### Spawning the NetworkHandler

Now that the game knows what to load when we tell it to load the ExampleNetworkHandler, all we have left is to spawn it! To do so, we just must Instantiate the prefab, then load it in:

```cs
var networkHandlerHost = Object.Instantiate(networkPrefab, Vector3.zero, Quaternion.identity)
networkHandlerHost.GetComponent<NetworkObject>().Spawn();
```

>**Note:** While you can put false as a parameter in the Spawn method to prevent the game from auto-deleting the object, you shouldn't! The object stays loaded in `SampleSceneRelay`, which is the main ship scene. 
>
>This scene never gets unloaded until disconnecting from the server - <i>precisely</i> when we want the network object to be destroyed!

But wait, there's a catch: Only the host/server is allowed to spawn the network object! To prevent clients from spawning the object, we can do something simple. We just check whether the game instance is a host or a client:

```cs
[HarmonyPostfix, HarmonyPatch(typeof(StartOfRound), "Awake")]
static void SpawnNetworkHandler()
{
    if(NetworkManager.Singleton.IsHost || NetworkManager.Singleton.IsServer)
    {
        var networkHandlerHost = Object.Instantiate(networkPrefab, Vector3.zero, Quaternion.identity)
        networkHandlerHost.GetComponent<NetworkObject>().Spawn();
    }
}
```

We want to attach this to `StartOfRound.Awake` as this method only runs when a new server is started by the host or loaded in by the client. Not only that, but it's one of the first methods to run when starting or joining a server.

### Finalized Network Object Manager

Once we throw everything together, we get a class looking like this:

```cs
[HarmonyPatch]
public class NetworkObjectManager
{

    [HarmonyPostfix, HarmonyPatch(typeof(GameNetworkManager), "Start")]
    public static void Init()
    {
        if (networkPrefab != null)
            return;
        
        networkPrefab = (GameObject)MainAssetBundle.LoadAsset("ExampleNetworkHandler");
        networkPrefab.AddComponent<ExampleNetworkHandler>();
        
        NetworkManager.Singleton.AddNetworkPrefab(networkPrefab);
    }

    [HarmonyPostfix, HarmonyPatch(typeof(StartOfRound), "Awake")]
    static void SpawnNetworkHandler()
    {
        if(NetworkManager.Singleton.IsHost || NetworkManager.Singleton.IsServer)
        {
            var networkHandlerHost = Object.Instantiate(networkPrefab, Vector3.zero, Quaternion.identity)
            networkHandlerHost.GetComponent<NetworkObject>().Spawn();
        }
    }

    static GameObject networkPrefab;
}
```

## Utilizing the NetworkHandler

Finally! The handler is in the game! Now we can utilize it. But how? Easy, we subscribe to the C# event. For example, our mod only needs to subscribe when the round starts and needs to unsubscribe when the round ends.

```cs
[HarmonyPostfix, HarmonyPatch(typeof(RoundManager), "GenerateNewLevelClientRpc")]
static void SubscribeToHandler()
{
    NetworkHandler.LevelEvent += ReceivedEventFromServer;
}

[HarmonyPostfix, HarmonyPatch(typeof(RoundManager), "DespawnPropsAtEndOfRound")]
static void UnsubscribeFromHandler()
{
    NetworkHandler.LevelEvent -= ReceivedEventFromServer;
}

static void ReceivedEventFromServer(string eventName)
{
    // Event Code Here
}
```

What does this all do? Well, `NetworkHandler.LevelEvent += ReceivedEventFromServer;` simply tells C# that we want to have `ReceivedEventFromServer(string eventName)` to run when the `LevelEvent` event is invoked. `NetworkHandler.LevelEvent -= Received` tells C# that we no longer want `ReceivedEventFromServer` to run when the event is invoked.

>**Note:** When subscribing and unsubscribing to an event, make sure that <i>both</i> the host and the client do so. Both `GenerateNewLevelClientRpc` and `DespawnPropsAtEndOfRound` run on all game instances - even if the latter method immediately attempts to return if the game instance is not the host.
>
>If you don't ensure both the host and clients subscribe/unsubscribe to an event, it very quickly leads to unwanted behavior. For example, if the client doesn't unsubscribe in our test mod, events will be duplicated on client instances since the event will be subscribed to multiple times.

## Using UnityNetcodeWeaver

Now that we've finished the networking code, all that's left is to patch the compiled mod assembly with Unity Netcode Weaver/Patcher. Before we can do so, we need to prepare the mod for patching. 

First, ***ensure that you are using netstandard2.1 [as aforementioned.](/custom-networking?id=other-setup-required)***

Second, make sure that there is a .pdb file when you build your plugin. If it is not there, make sure that Debug Symbols is set to `Portable` and not embedded.

Finally, add the following code to your main Plugin.cs file, and make sure the method only runs once:

```cs
private static void NetcodeWeaver()
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
    NetcodeWeaver(); // ONLY RUN ONCE
}
```

Before you can run Unity Netcode Weaver, make sure it's set up - specifically, copy the contents of `Lethal Company/Lethal Company_Data/Managed` into `NetcodePatcher/deps`.

Now, you just have to add the following Post-Build Event to your project:

```cmd
cd <NetcodePatcher Folder Directory Here>
NetcodePatcher.dll $(TargetDir) deps/
```

If this does not work, you can [follow the instructions on how to use UnityNetcodeWeaver from the command line.](https://github.com/EvaisaDev/UnityNetcodeWeaver#usage-from-command-line)

## Conclusion

Now that you've finally finished all the code and patched it with UnityNetcodeWeaver, you should have networking in your mod! Congrats! Pat yourself on the back! It's not easy getting to this stage, and you will always run into issues as you continue your modding journey. But don't fret! You can always get help in the [Unofficial Lethal Company Community Discord!](https://discord.gg/nYcQFEpXfU)

