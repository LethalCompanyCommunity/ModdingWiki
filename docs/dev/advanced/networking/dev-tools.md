---
prev: false
next: true
description: Development tools to help you on your networking journey.
---

# Dev Tools

There are several networking tools available, depending on your use case. Some are patchers,
while others are APIs to help ease networking.

## Patchers

There are two main patchers available to use. The first and preferred is performed during/shortly after 
compilation of the mod. The second runs alongside and patches your mod during runtime.

### UnityNetcodePatcher

First, and the most supported, is [UnityNetcodePatcher](https://github.com/EvaisaDev/UnityNetcodePatcher).
This patcher runs Netcode for GameObjects' (NGO) post-processing on your code. This is the
"native" way of networking that the game uses.

<!--@include: @./parts/netcode-patcher-installation.md-->

::: tip
Currently, this is the only patcher that has support for Network Variables. If you intend on using
those, and do not intend on using an API, you will have to use UnityNetcodePatcher.
:::

### StaticNetcodeLib

Second, with a different use case, is [StaticNetcodeLib](https://github.com/Xilophor/StaticNetcodeLib).
This patcher will patch your remote procedure call (RPC) methods at runtime.

The main difference between this patcher and the others is the support (only) for `static`
RPCs. This allows you to quickly do networking in a static or singleton-like way, reducing
the need for the code required to allow you to use RPCs. In other respects, the RPCs
work almost exactly like NGO.

To install and use StaticNetcodeLib, look at the [corresponding wiki article](/dev/apis/static-netcode).

## APIs / Libraries {#apis}

There is currently only one networking-specific library available, shown below.

### LethalNetworkAPI

[LethalNetworkAPI](https://github.com/Xilophor/LethalNetworkAPI) is meant to provide easier
methods of networking, particularly in a more static-like nature. Instanced networking, however,
is also supported. This API also supports NetworkVariables, if you intend on using them.

For documentation, look at [LethalNetworkAPI's wiki](https://github.com/Xilophor/LethalNetworkAPI).
