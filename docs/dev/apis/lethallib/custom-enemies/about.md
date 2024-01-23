---
prev: false
next: true
description: A tutorial on implementing custom enemies to Lethal Company.
---
# Custom enemies - Overview

## Preamble

Make sure you've done everything in the [LethalLib main page](/dev/apis/lethallib) first. This page will briefly run through what needs to be done in order to implement your own custom enemies.

In the following pages, we will assume you have a copy of the example project repository on you, and when we are referring to our Unity project, we are talking about the Unity project included in the example project repository.

## Example Enemy Project Repository

::: warning IMPORTANT
Grab yourself a copy of the example enemy project at https://github.com/Hamunii/ToiletLeechIsReal! Every asset used in the project is MIT Licensed, and can be used as a base for your own mod!
:::

We have an example enemy project which includes the full source code, Unity project, and Blender project files used for making the enemy. Currently the example enemy is Toilet Leech, but we will continue improving the example project and will likely eventually make a dedicated example enemy.

## Blender

Blender is an amazing free program and it can do everything you want when making your 3D model. If you don't have a 3D model and want to make one yourself, we highly recommend using Blender.

You can install Blender from https://www.blender.org/, and it's also available on Flathub for Linux users.

For getting started with making your 3D models in Blender, see [3D modeling with Blender](./blender.md).

## Unity

Lethal Company uses Unity version 2022.3.9f1, and therefore we should use it too in order to avoid any issues with version differences when exporting our asset bundles.  

::: warning IMPORTANT
On Linux, Unity 2022.3.9f1 has a bug where it might output audio to the wrong audio device. If this happens, you can try using [pavucontrol](https://flathub.org/apps/org.pulseaudio.pavucontrol) to change Unity's audio output (appears as `FMOD Ex App`) to the correct one.

Alternatively, if you are using pipewire, you could use a patchbay like [qwpgraph](https://flathub.org/apps/org.rncbc.qpwgraph) to always force Unity to output into the audio device of your choosing. If you are unsure on whether or not you are running pipewire, you can see if `$ ps -e | grep pipewire` outputs anything. This command will list active processes that have "pipewire" in their name.
:::