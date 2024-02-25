---
prev: true
next: true
description: Learn how to send messages between the host and connected clients.
---

# Messaging

::: info DISCLAIMER
This is not a tutorial on how to use Unity's [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/1.5.2/about/) RPCs and Network Variables.
This is only meant to be used to understand <i>how</i> to implement custom networking into the game.
:::

There are several different methods available to you for messaging between the
host and any connected clients. You can use an API, use Netcode for GameObjects' 
(NGO) Network Messages, or use NGO's RPCs.

This article will go through the basics on implementing each method, but will not
go into how to use it. It will at most be augmentation for the NGO docs.
For information on how to use NGO-specific classes & methods, look at the [NGO docs](https://docs-multiplayer.unity3d.com/netcode/1.5.2/about/).


## APIs

This is the easiest method of messaging between the host and clients.
The available APIs already implement NGO in the context of the game,
and thus only need to be implemented in the context of your mod.

For specific information on the available APIs, you can look at the
[networking Programing APIs section](/dev/apis/overview#networking)
of this wiki.


## NGO's Custom Messages {#custom-messages}

The hardest method of messaging between the host and clients is using
NGO's Custom Messages. They do have their advantages, however.

- They support vanilla compatibility as they do not have to register custom
network objects, unlike RPCs.
- They do not require the use of Eva's Unity Netcode Patcher. 
- You can also utilize Network Messages to send longer pieces of information
as they have the `NetworkDelivery.ReliableFragmentedSequenced` option.

For examples on usage, take a look at [NGO's Custom Messages docs](https://docs-multiplayer.unity3d.com/netcode/1.5.2/advanced-topics/message-system/custom-messages/#named-messages).
Linked is the named messages heading/section, which is recommended over unnamed messages
as using named messages is easier and will help against conflicting with other mods'
messaging systems.

This article will only go into the basic concepts necessary for usage, not
the actual usage.

### Serialization

To transmit data, you have to manually use the `FastBufferReader` and `FastBufferWriter` to
serialize the data you want to transmit. You can use the pre-built serialization types Unity
provides; however, custom classes, structs, and records will likely need custom serialization.

Custom serialization requires that you manually write extensions for `FastBufferReader` and 
`FastBufferWriter` to serialize the data in the class, struct, or record.

For more information, you can [read this article](https://docs-multiplayer.unity3d.com/netcode/1.5.2/advanced-topics/custom-serialization/).


## NGO's Remote Procedure Calls (RPCs) {#rpcs}

RPCs are the in-between solution. They give you more control than APIs likely will, and they are
significantly easier to use than Custom Messages.

However, they only exist in the context of `NetworkBehaviour`s, and you ***must*** use a [Netcode Patcher](/dev/advanced/networking/dev-tools#netcode-patchers)
in order to use them at runtime.

As RPCs can only exist in the context of a `NetworkBehaviour`, much of what you will have to do is
equivalent to the article on Custom Object Behaviours. As such, this article will only go into the
specifics for messaging. For information on Network Behaviours and what you can use in them, look at
the [Custom Object Behaviour article](/dev/advanced/networking/objects) or the [NGO Docs](https://docs-multiplayer.unity3d.com/netcode/1.5.2/advanced-topics/ways-synchronize/).

### Singleton

Although it depends on your use case, you will likely want to use a "singleton" game object for
your network messages. This is due to the fact that you only want one instance sending/receiving
messages between clients - to prevent methods unintentionally running multiple times.

In your class that extends `NetworkBehaviour`, you can use a simple Singleton/Instance pattern, like so:

```csharp
internal class MyNetworkBehaviour : NetworkBehaviour
{
    internal MyNetworkBehaviour Instance { get; private set; } // [!code focus:12]
    
    public override void OnNetworkSpawn()
    {
        if (Instance != null)
        {
            Destroy(this);
            return;
        }
        
        Instance = this;
    }
}
```

### Attaching to a Network Prefab

There are a few ways of going about this. The easiest way, without a lib, is to use
asset bundles from Unity as described here in the [Custom Object Behaviours article](/dev/advanced/networking/objects).
The other way is to do so programmatically.

There are two options for this, to do so through an API - LethalLib provides a `CreateNetworkPrefab` method -
or to do it manually. Doing it manually requires that you publicize the `Unity.Netcode.Runtime` assembly or use
reflection.

:::warning
You can only register Network Prefabs when both the NetworkManager exists and the player is
not in a lobby.

LethalLib will handle this for you as long as you register/create your Network Prefab in your mod's `Awake` method.
:::

#### LethalLib

To make a network prefab, you can do the following method in your mod's `Awake` method:

```csharp
myNetworkPrefab = NetworkPrefabs.CreateNetworkPrefab("MyNetworkPrefab");
```

Once you have the prefab, you just have to add your NetworkBehaviour component to the prefab.
Doing so is as simple as the following:

```csharp
myNetworkPrefab.AddComponent<MyNetworkBehaviour>();
```

#### Manually

To manually create a network prefab programmatically, you must do so after the NetworkManager
is instantiated (postfix `GameNetworkManager::Start`) and deal with a few issues. To do so, you can do the following:

:::info
1. Make a new GameObject
2. Set it's `HideFlags` to `HideAndDontSave`
3. Parent said object to a disabled "container" that has the `HideAndDontSave` HideFlag
4. Attach a NetworkObject component
5. Attach the Custom Network Behaviour component
6. Change the `GlobalObjectIdHash` to a new uint GUID
7. Register the GameObject as a Network Prefab
:::

To shorten this article, only step 6 will be discussed due to it's complexity and undocumented nature.

You must change the `GlobalObjectIdHash` as it is `0` by default, and leaving it as so will cause
conflicts with any mod that unknowingly has its object id set to `0`.

A simple - *though not infallible* - way of doing this is by hashing your mod's guid & object name into a `uint`.
This can be done like so:

```csharp
var objectIdHash = MD5.Create().ComputeHash(Encoding.UTF8.GetBytes($"{ExampleMod.Info.Metadata.GUID}.MyNetworkPrefab"));

myNetworkPrefab.GetComponent<NetworkObject>()!.GlobalObjectIdHash = BitConverter.ToUInt32(objectIdHash);
```

:::warning
Using this method **requires** publicizing `Unity.Netcode.Runtime.dll`! The `GlobalObjectIdHash` is an internal
field and thus can only be modified either through reflection or the publicized assembly, the latter of which
is much easier to do.
:::