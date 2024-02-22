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