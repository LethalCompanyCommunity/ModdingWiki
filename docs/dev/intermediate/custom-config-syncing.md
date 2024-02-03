---
prev: true
next: false
description: An intermediate overview of how to sync custom configs for your Lethal Company mods.
---

# Custom Config Syncing

## Preface
A very common case for many mod developers is wanting to synchronize the host's configuration file with all other players.

There are many different ways you could achieve this, but the following two mods will work without using **NetcodeWeaver** or a **NetworkBehaviour**.

## CSync
A compact but effective library focused on syncing **BepInEx** configuration files using Unity's **Named Messages**.<br>
It does not provide an in-game menu, though it works well with mods such as **LethalConfig** and **ConfigurationManager**.

### Features
- Can serialize/sync a `ConfigEntry` with a drop-in replacement. (`SyncedEntry`)
- Retains **BepInEx** support, no seperate file system.
- Uses `DataContractSerializer`, a fast and safer alternative to `BinaryFormatter`.
- Provides helpful extension methods to aid with binding and converting entries.

#### For a usage guide, visit [this](/dev/apis/csync) page.

## ConfigurableCompany
An API that can be used to develop save-dependent configurations that persist between matches.
ConfigurableCompany will show these configs with its own in-game menu.

### Features
- Optional synchronization capability.
- Enables creatation of pages and categories.
- Has many events that can be listened to.
- Simple to use through use of a "builder pattern".
<br>

#### To see the API documentation, visit [this](/dev/apis/configurable-company) page.