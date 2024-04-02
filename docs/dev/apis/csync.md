---
prev: false
next: false
description: A guide to synchronizing a BepInEx config file between host and clients using the CSync library.
---

# CSync (Config Syncing Library)

## About CSync

CSync is a utility library for conveniently syncing the values of some BepInEx `ConfigEntry`
instances from host to clients.

::: details History

CSync was originally authored by [@Owen3H](https://github.com/Owen3H). Sadly, Owen fell out of favour
with the Lethal Company Modding discord and removed CSync from the Thunderstore.

This led to the creation of a fork, under the [@lc-sigurd](https://github.com/lc-sigurd) organisation. As of
April 2024, the fork has undergone extensive changes, resolving many issues that remain unfixed in Owen's
distribution of CSync.

Shortly after removing CSync from the Thunderstore in March, Owen reinstated the mod. It is nonetheless
recommended to use Sigurd's distribution of CSync.

For unknown reasons, Owen has transferred ownership of the [original CSync repository](https://github.com/DeathWrench/CSync) to
[@DeathWrench](https://github.com/DeathWrench).

:::

## Setup
There are two ways to depend upon **CSync**, but I recommend using the [NuGet package](https://www.nuget.org/packages/Owen3H.BepInEx.CSync).<br>
This will automatically include both an assembly reference and documentation as opposed to Thunderstore.

### NuGet (Recommended)
**1**. Open the terminal in Visual Studio.<br>
**2**. Run the following command.
```console
dotnet add package Owen3H.BepInEx.CSync
```

Alternatively, you can install it visually via the **NuGet** package manager.

**1**. Head to `Project > Manage NuGet Packages`.<br>
**2**. Search and select the `Owen3H.BepInEx.CSync` package.<br>
**3**. Choose the latest version and hit Install.

### Thunderstore (Manual)
**1**. Download the latest version of the library on the [Thunderstore page](https://thunderstore.io/c/lethal-company/p/Owen3H/CSync/).<br>
**2**. Extract the zip into your game directory root.<br>
**3**. In your mod's project, add an **Assembly Reference** to `../BepInEx/plugins/CSync.dll`.

## Overview
- [Usage Guide (latest)](/dev/apis/csync/usage-guide)
- [Legacy Usage Guide (v3)](/dev/apis/csync/v3-usage-guide) - The guide/tutorial to using CSync v3
- [Troubleshooting](/dev/apis/csync/troubleshooting) - Common issues and their solutions.