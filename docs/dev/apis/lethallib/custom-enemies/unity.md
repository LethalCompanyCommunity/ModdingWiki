---
prev: true
next: true
description: A tutorial on how to add custom enemies by using LethalLib.
---
# Unity

You can open the Unity project included in the repository by choosing to open a project from disk, and selecting the `UnityProject` folder. When Unity has loaded the project, look into the ToiletLeech folder for the assets that make up the asset bundle.

## Setting Up Our Unity Project

::: tip
You must have git installed for the AssetBundle Browser extension.  
Also, the `SETUP-PROJECT.py` script will copy all of the dlls files for you! So if you run it, you can ignore this section almost entirely.
:::

The Unity project we have is based off of Evaisa's [Lethal Company Unity Template](https://github.com/EvaisaDev/LethalCompanyUnityTemplate/). However, just like with our dlls in the root directory of our project, we need to add some dll files into our `UnityProject/Assets/Plugins` folder. These are listed in the README of Evaisa's repository, but here's the list so you don't miss it:

::: details List of game DLLs
- AmazingAssets.TerrainToMesh.dll
- ClientNetworkTransform.dll
- DissonanceVoip.dll
- Facepunch Transport for Netcode for GameObjects.dll
- Facepunch.Steamworks.Win64.dll
- Newtonsoft.Json.dll
- Assembly-CSharp-firstpass.dll
:::

This part needs confirmation, as I have not tested the project without these dll files and I don't know anything about this stuff.
Anyways, you might also need to add these files from `Lethal Company/BepInEx/core`:
::: details List of BepInEx Core DLLs
- 0Harmony20.dll
- 0Harmony.dll
- BepInEx.dll
- BepInEx.Preloader.dll
- HarmonyXInterop.dll
- Mono.Cecil.dll
- Mono.Cecil.Mdb.dll
- Mono.Cecil.Pdb.dll
- Mono.Cecil.Rocks.dll
- MonoMod.RuntimeDetour.dll
- MonoMod.Utils.dll
:::

Also, you would probably normally want to add `BepInEx.Harmony.dll` too from the same location, but it causes Unity to crash when building asset bundles, so we don't add it. But we don't seem to need that file anyways for making our asset bundle. If you know why this is, please tell about it!

We also depend on LethalLib by Evaisa (which is already included in the project), and it depends on MMHOOK, so you need to run the game once with MMHOOK so these dll files are generated:
::: details List of MMHOOK DLLs
>- MMHOOK_AmazingAssets.TerrainToMesh.dll
>- MMHOOK_Assembly-CSharp.dll
>- MMHOOK_ClientNetworkTransform.dll
>- MMHOOK_DissonanceVoip.dll
>- MMHOOK_Facepunch.Steamworks.Win64.dll
>- MMHOOK_Facepunch Transport for Netcode for GameObjects.dll
:::

The dll file of this mod also needs to be there so we can reference ToiletLeechAI from a component of the Toilet Leech prefab in Unity. It needs to be from the dll file, you cannot just copy and paste the ToiletLeechAI.cs file in the Unity project because asset bundles cannot contain scripts, and it just doesn't get the reference otherwise. You know it doesn't get the reference in the form of a yellow warning text if you launch the game with the mod and you have unity logging enabled in the `BepInEx.cfg` file.

## Our Toilet Leech Assets In Unity

::: tip
The way we figure out how enemies are configured in Unity is done by looking at the Asset Ripper's Unity project output of the game files. You can use [AssetRipper Guid Patcher](https://github.com/ChrisFeline/AssetRipperGuidPatcher) to get a Unity project based on the game files!
:::

We have made a ToiletLeech folder in our Unity project. Everything that goes into our asset bundle is in there.
The first thing we did was import our fbx model into Unity. This is as simple as dragging our fbx file into our assets, or right clicking and choosing `Import New Asset...` and choosing our fbx file. The exported fbx model contains all our materials, textures and animations when first imported, but it is good to separate some of that stuff into their own folders. We have extracted our materials into the `Materials` folder.

We have also copied the individual animations into the `Animations` folder, because I don't know how to separate them properly, but we can just ignore the animations embedded in the fbx file and use the copies inside the `Animations` folder anyways.

Anyways, how do we make the game see our assets as an enemy? Well, we create a new ScriptableObject of type EnemyType. This is what the game uses, so we need it too. Do note that these ScriptableObjects come from the Lethal Company Unity Template this is based off of. Do also note that our UnityProject in this repository is already configured properly.  

![Screenshot: Create object Enemy Type](/images/lethallib/custom-enemies/unity/CreateObjectEnemyType.png)

The EnemyType ScriptableObject has some configuration options, and the most important thing is the "Enemy Prefab" part of it. This is where we tell it what the model and whatever stuff our EnemyType has. Also note the "Enemy Name" thingy, this will be the name of the ToiletLeech enemy in the coding side of things.

### The Toilet Leech Prefab

::: tip
If you don't know what prefabs are, see https://docs.unity3d.com/Manual/Prefabs.html
:::

We have added these components to our prefab for everything to work properly:  

![Screenshot: Toilet Leech Prefab in inspector](/images/lethallib/custom-enemies/unity/ToiletLeechPrefabInspector.png)

1. Toilet Leech AI (Script)
    - This script can be found in `Plugin/src/ToiletLeechAI.cs` at the root of this repository, and we have built our mod dll file and placed it inside `Assets/Plugins` in our Unity project so we can add it as a component to our prefab. We must do it that way because Asset Bundles cannot contain scripts, and by doing it this way, our mod's AI script will get recognized as the same script.
2. Network Object
    - Needs to be added so our enemy's position can sync in multiplayer. After you reference your AI script, Unity will automatically prompt you to add this component.
3. Nav Mesh Agent
    - Allows our enemy to act as a nav mesh agent, which is Unity's system for making easy pathfinding in 3D with the help of a nav mesh that the agents walk on.
4. Animator
    - This allows us to control the animations of our model. This deserves its own section, and I barely know anything about Unity's animation system.

We also have these as children of the prefab itself:
1. ScanNode
    - Allows us to scan the enemy. Make sure the following is set: Tag: `DoNotSet`, Layer: `ScanNode`
2. MapDot
    - Allows us to see the enemy on map. Make sure the following is set: Tag: `DoNotSet`, Layer: `MapRadar`
3. Collision
    - Has the following components: Enemy AI Collision Detect (Script) & Box Collider with `isTrigger: true`
4. TurnCompass
    - Does nothing by itself, but we have a reference to this in the ToiletLeechAI.cs script to make the enemy looking at player a bit easier.
5. AttackArea
    - Does nothing by itself, but we take its position and scale and check if the player exists inside that area for the head swing attack.
6. CreatureSFX
    - We play the creature sound effects through this.
7. CreatureVoice
    - We play the creature's voice through this.

### Toilet Leech Terminal Entry

We need a TerminalNode ScriptableObject for our entry in the bestiary. This contains the bestiary text and displayed enemy name.

::: info
We have set the name in the bestiary to "TLeech" due to the already existing item "Toilet" causing issues with the game thinking we are trying to buy a toilet and not being able to open the bestiary entry.
:::

We also have a TerminalKeyword ScriptableObject, which has the word that the user needs to write in the terminal to find the page.

The enemy spinning animation on the beastiary entry background is a video file, and you can make one yourself in Blender by for example using the decimate (if you have a lot of geometry) and wireframe modifiers.

::: warning IMPORTANT
Unity Editor on Linux has [bad support for video files](https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html), so if you are using Linux, you might want to [encode your video to VP8 using FFmpeg](https://trac.ffmpeg.org/wiki/Encode/VP8). Unfortunately, Blender does not have an option to encode to VP8.
:::

### Adding Items To An Asset Bundle

::: tip
For information about Asset Bundles, see [Asset Bundling](/dev/intermediate/asset-bundling).
:::

::: danger DUPLICATE INFORMATION
This section of the wiki page has duplicate information regarding the creation of Asset Bundles.

**Note:** The existing page on the creation of asset bundles is slightly less in-depth, and does mention how to embed asset bundles in DLL files, which is what we do in this project.
:::

To add an item to an asset bundle, you first need to select the object you want to add, and then on the asset bundle dropdown, select `New...` and write the name of your asset bundle. Or if you already have an asset bundle, you can select that instead. You don't actually need to assign everything you need to the asset bundle as long as the item you assigned to the asset bundle depends on the rest of the items.  

![Screenshot: assign to asset bundle](/images/lethallib/custom-enemies/unity/AssignToAssetBundle.png)

### How To Build An Asset Bundle:

1. Open asset bundle browser (this plugin is included in the Lethal Company Unity Template):  

![Screenshot: open asset bundle browser](/images/lethallib/custom-enemies/unity/OpenAssetBundleBrowser.png)

2. Here we can see files that are included in our bundle. The ones that have the bundle as "auto" are things that our thing we have assigned to the asset bundle depends on, so they will be included as well. Do note that we need to explicitly inclde the assets we want directly refer to in the code. I don't know what modassets really is, it came with the Lethal Company Unity Template too. Should probably ask Evaisa, but anyways we can ignore it. 

![Screenshot: Toilet Leech bundle preview](/images/lethallib/custom-enemies/unity/ToiletLeechBundlePreview.png)

3. This is where we build our asset bundle. The asset bundle will be found where output path specifies, which in this case exists in a directory in the root of the Unity project.  

![Screenshot: build asset bundle](/images/lethallib/custom-enemies/unity/BuildAssetBundle.png)

4. Then we copy the `toiletleech` Asset Bundle to `Plugins` in the root of our repository. Now we can build our project, and the asset bundle gets embedded into our DLL file due to how we have set up our .csproj file.

::: info
If you don't have Windows standalone build support installed in your Unity installation, close Unity and install it from Unity Hub. I'm not 100% sure if this is actually needed, but I had no luck getting the materials of the model working in the Asset Bundle when I had my build target set to Linux.
:::