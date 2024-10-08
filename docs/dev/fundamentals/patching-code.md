---
prev: true
next: true
description: Learn about patching game code using MonoMod and Harmony.
---

# Patching Code
## Introduction
When modding games, you will often need to make modifications to the original code. Thankfully, this is fairly easy thanks to **MonoMod** and **Harmony**. These allow us to things such as:
- **Replace and modify** original methods
- **Run our code before and/or after** the original methods

MonoMod and Harmony are incredibly powerful tools, and with them we can do nearly anything we want. They differ in the ways they are used, and it really just comes up to preference which one you should use.

However, keep in mind that you aren't restricted to using only one of these tools, as the version of Harmony we are using is [HarmonyX](https://github.com/BepInEx/HarmonyX), which is Harmony built on top of **MonoMod** so there will not be any conflicts.

:::info NOTE
In this and the following articles, we use *"patching"* and *"hooking"* to refer to the act of running our code before and after the original method, or directly modifying the original method.
:::

## MonoMod
::: info
The version of **MonoMod** we use with BepInEx is considered **legacy**, which is important to know when looking up [MonoMod Documentation](./patching-code/monomod-documentation).
:::
MonoMod is arguably easier to use than Harmony in most cases thanks to its `MMHOOK` assemblies generated by **MonoMod.RuntimeDetour.HookGen**.

If you've ever wondered what [HookGenPatcher](https://thunderstore.io/c/lethal-company/p/Evaisa/HookGenPatcher/) is, it generates these files from its target assemblies using MonoMod's HookGen API. For example, `Assembly-CSharp.dll` is the assembly that contains most of the game's code, and HookGen generates a file from it called `MMHOOK_Assembly-CSharp.dll`, which provides us an easy way to **Hook** any non-generic method as if it were an **event**.

To use these events, we can for example do the following:
```cs
// Subscribe to event, applying our patch
On.GameNetcodeStuff.PlayerControllerB.Update += MyPatch;
```
::: info
`PlayerControllerB` is the class/script that controls all player characters in Lethal Company. It is defined under the `GameNetcodeStuff` namespace.  
`Update` is a method which executes on every frame, which `PlayerControllerB` implements. This is a method provided by the [MonoBehaviour](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) class in Unity.
:::
::: tip
All `MMHOOK` Hooks are under the `On` and `IL` namespaces.  
The `On` namespace contains normal **Hooks** which allow running our code before and after the original method, while the `IL` namespace contains **ILHooks** which allow us to modify the original methods on the **IL** (or **CIL**) level, which is what C# compiles to.
:::

This will add our method `MyPatch` as an event handler for the `MMHOOK`'s `Update` event of `PlayerControllerB`, which runs when the original `Update` method of `PlayerControllerB` runs. 

If we want to undo our patch, we can simply do this:
```cs
// Unsubscribe from event, undoing the patch
On.GameNetcodeStuff.PlayerControllerB.Update -= MyPatch;
```
Do note however that hooking and unhooking isn't cheap performance wise, and therefore it isn't a great idea to e.g. unhook your patch method inside the patch method, as the game will have to wait for unhooking to finish.

In such a case, you could unhook on a thread other than the game's main thread, or avoid unhooking altogether by having a `boolean` to determine whether or not your custom logic should run.

::: warning IMPORTANT
To make use of `MMHOOK` assemblies, you will need to reference them in your project. This can be simply done by e.g. adding the following to your `csproj` file:
```xml
<ItemGroup>
    <Reference Include="MMHOOK_Assembly-CSharp"><HintPath>./my/path/to/MMHOOK_Assembly-CSharp.dll</HintPath></Reference>
</ItemGroup>
```
You can find the `MMHOOK` files from the `.../BepInEx/plugins/MMHOOK/` directory if you have [HookGenPatcher](https://thunderstore.io/c/lethal-company/p/Evaisa/HookGenPatcher/) installed.
:::

### Basics of Using Events in C#
In case events in C# are new to you, we'll go through the basics of how to work with them.  
**To subscribe to an event**, we use the addition assignment operator (`+=`).  
**To unsubscribe from an event**, we use the subtraction assignment operator (`-=`).

Our **event handler** goes to the right side of the operator, and is a method that takes in the arguments given by the event we are subscribing to. In our earlier example, we subscribed `MyPatch` to the `On.GameNetcodeStuff.PlayerControllerB.Update` event. This event passes the original method `On.GameNetcodeStuff.PlayerControllerB.orig_Update orig` and an instance of the object `GameNetcodeStuff.PlayerControllerB self` as arguments. 

Thankfully, we can let our IDE generate the method for us *(from e.g. `quick fix` -> `Generate Method 'MyPatch'` in Visual Studio Code)* so we don't need to define it ourselves. This will generate the the following method:
```cs
private static void MyPatch(On.GameNetcodeStuff.PlayerControllerB.orig_Update orig, GameNetcodeStuff.PlayerControllerB self)
{
    throw new NotImplementedException();
}
```
However, currently this will just throw an exception and the original method will not run. Let's fix that:
```cs
private static void MyPatch(On.GameNetcodeStuff.PlayerControllerB.orig_Update orig, GameNetcodeStuff.PlayerControllerB self)
{
    throw new NotImplementedException(); // [!code --] // [!code focus]
    orig(self); // [!code ++] // [!code focus]
}
```
What we just did is call the original method `orig` with the arguments it takes, which is just `self`. If it had more arguments, we would also pass them in the `orig` call, e.g. `orig(self, arg2, arg3);`. The reason why `self` is an argument is because the method we are patching is not static meaning it has an instance, which is what `self` is.

With `self`, we can access and manipulate the variables of the class (script), which in this case would be an instance of `PlayerControllerB`. Now we have gone through the basics, and can move on to examples.

### Example Patch With MonoMod {#example-patch-monomod}
A simple patch we can do is killing the player if they get exhausted (run out of stamina). Here we have hooked `PlayerControllerB`'s `Update` method which runs every frame. In the Hook, we run the original method, and then get the value of `isExhausted` and check if it's true in an if statement. If it's true, we call `KillPlayer` on the `PlayerControllerB` instance.
```cs
// Somewhere in our code we subscribe to the event once:
On.GameNetcodeStuff.PlayerControllerB.Update += PlayerControllerB_Update;
// ...
private static void PlayerControllerB_Update(On.GameNetcodeStuff.PlayerControllerB.orig_Update orig, GameNetcodeStuff.PlayerControllerB self)
{
    // Code here runs before the original method
    orig(self); // Call the original method with its arguments
    // Code here runs after the original method

    // isExhausted is a boolean field of PlayerControllerB which
    // is set to true after running out of stamina. 
    if (self.isExhausted)
    {
        // KillPlayer is a method of PlayerControllerB which
        // kills the player instance.
        // This method takes in multiple arguments, but the only
        // required argument is the velocity as a Vector3 for the
        // spawned dead body object, which we'll specify as zero.
        self.KillPlayer(Vector3.zero);
    }
}
```
Notice that patches will always apply for every instance of a class, so this code runs for every other player instance in your game. However, this patch will not kill other players running out of stamina even if you have this patch applied, since `KillPlayer` makes sure that it only runs if a client calls it on themselves.

::: tip
See [Patching Code With MonoMod — Examples](./patching-code/monomod-examples.md) for more examples and information about MonoMod usage, and see our unofficial [MonoMod Documentation](./patching-code/monomod-documentation.md) for more in-depth details on how things work!
:::

## Harmony
::: info NOTICE
Unlike with MonoMod, **we don't have dedicated pages for Harmony on this wiki.**  
If you wish to contribute to this wiki, see [Contributing Articles](/contribute/writing-articles).
:::
With Harmony, you need to follow certain rules to write your patches. You must specify the arguments you need in your patch methods, and they must be named correctly for them to be recognized as the correct ones. For example, the argument for the instance of an object must be named `__instance`.

For more information about Harmony, see the [Harmony](https://harmony.pardeike.net/articles/intro.html) or [HarmonyX](https://github.com/BepInEx/HarmonyX/wiki/Basic-usage) documentation.

### Example Patch With Harmony {#example-patch-harmony}
We will now do the same patch for dying from exhaustion as we did with MonoMod:

```cs
using HarmonyLib;
// Somewhere in our code we call e.g. Harmony.CreateAndPatchAll:
Harmony.CreateAndPatchAll(typeof(MyPatches));
// ...
class MyPatches
{
    // We use Attributes to tell Harmony which class' method we are targeting
    [HarmonyPatch(typeof(PlayerControllerB), nameof(PlayerControllerB.Update))]
    // We also specify that our patch method will run after the original method
    [HarmonyPostfix]
    private static void PlayerControllerB_Update(PlayerControllerB __instance)
    {
        if (__instance.isExhausted)
        {
            __instance.KillPlayer(Vector3.zero);
        }
    }
}
```

## Conclusion
We have now briefly gone through using MonoMod and Harmony for Patching code. Let's now quickly go through the reasons why one might prefer either tool:

**Why MonoMod**
- **MonoMod.RuntimeDetour.HookGen's** `MMHOOK` assemblies make patching easy:
    - Applying patches is **clean** and **explicit** (e.g. `On.Namespace.Type.Method += MyPatch;`)
    - We can simply **autocomplete** our patch method's definition
- A **single patch method** can contain code that runs **before and after** the original method
- MonoMod patching works with predictable rules, meanwhile Harmony has its own specific rules you have to follow (e.g. special argument names)
- We have dedicated pages for MonoMod on this wiki

**Why Harmony**
- You can register all your patches in a **single line**
- Makes using the same patch method for multiple methods slightly easier
    - This is due to how you can specify the arguments you want; you don't need to include every argument in the definition of a patch like with MonoMod's **Hooks**
        - With **MonoMod**, you would need to make an **ILHook** for this

It is entirely up to you which one you should use. But remember: you aren't restricted to using only one of them; you can use whichever works the best in whatever situation.