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
as using named messages will help against conflicting with other mods' messaging systems.

This article will only go into the basic concepts necessary for usage, not
the actual usage.

### Serialization

To transmit data, you have to manually use the `FastBufferReader` and `FastBufferWriter` to
serialize the data you want to transmit. You can use the pre-built serialization types Unity
provides; however, custom classes, structs, and records will likely need custom serialization.

Custom serialization requires that you manually write extensions for `FastBufferReader` and 
`FastBufferWriter` to serialize the data in the class, struct, or record.

For more information, you can [read this article](https://docs-multiplayer.unity3d.com/netcode/1.5.2/advanced-topics/custom-serialization/).