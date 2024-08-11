---
prev: true
next: true
description: Learn how to use MonoMod for patching methods with Hooks and ILHooks.
---

# Patching Code With MonoMod — Examples
::: warning IMPORTANT
For an introduction to using MonoMod's `MMHOOK` assemblies, see [Patching Code — MonoMod](../patching-code.md#monomod).
:::

::: tip
See our unofficial [Legacy MonoMod Documentation](./monomod-documentation.md) for more in-depth details! The version of **MonoMod** we use with BepInEx is considered **legacy**, so we look for legacy documentation.
:::

## Hook Examples
### Basic Hook
::: info
This is the same example patch as shown in [Patching Code — Example Patch With MonoMod](../patching-code.md#example-patch-monomod).
:::
A simple patch we can do is killing the player if they get exhausted (run out of stamina). Here we have hooked `PlayerControllerB`'s `Update` method which runs every frame. In the Hook, we run the original method, and then get the value of `isExhausted` and check if it's true in an if statement. If it's true, we call `KillPlayer` on the `PlayerControllerB` instance.
```cs
// Somewhere in our code we subscribe to the event once:
On.GameNetcodeStuff.PlayerControllerB.Update += PlayerControllerB_Update;
// ...
private static void PlayerControllerB_Update(On.GameNetcodeStuff.PlayerControllerB.orig_Update orig, GameNetcodeStuff.PlayerControllerB self)
{
    orig(self);

    if (self.isExhausted)
        self.KillPlayer(Vector3.zero);
}
```

### Changing Return Value
In the game's code, there is a method that returns a boolean which determines whether or not the player is able to emote at the moment. Let's say we want to make this method always return `true`, meaning we will be able to emote forever. Let's do that:
```cs
// Somewhere in our code we subscribe to the event once:
On.GameNetcodeStuff.PlayerControllerB.CheckConditionsForEmote += PlayerControllerB_CheckConditionsForEmote;
// ...
private static bool PlayerControllerB_CheckConditionsForEmote(On.GameNetcodeStuff.PlayerControllerB.orig_CheckConditionsForEmote orig, GameNetcodeStuff.PlayerControllerB self)
{
    // Since we are patching a method that returns a boolean,
    // we can get the return value by calling the original method.
    bool originalResult = orig(self);
    Plugin.Logger.LogInfo("Would emoting be normally allowed: " + originalResult);

    // What we return from a patch will override the original return value.
    // Since we want to be able to emote all the time, we will return true.
    // We could also return the original return value to do nothing.
    return true;
}
```

### Replacing Property Getter
Lethal Company has its **internal debug tools menu** that is enabled if the game is running in the Unity editor, and current client is host. If we were to force the game to think it is running in the Unity editor, we would get access to this debug tools menu. The property that is used for the editor check is `Application.isEditor` which comes from the `UnityEngine.CoreModule` assembly.

Since `MMHOOK` assemblies only contain methods, we will need to Hook the property getter manually. This can be done like so:
```cs
private static Hook isEditorHook = new Hook
(
    AccessTools.DeclaredPropertyGetter(typeof(Application), nameof(Application.isEditor)),
    Application_isEditor_Getter
);
// Note the arguments of this patch method. See explanation below this code block.
private static bool Application_isEditor_Getter(Func<bool> orig)
{
    // Even though the original method does nothing but return false,
    // we still should call orig so if other mods patch this method
    // their patches also run.
    bool originalValue = orig();
    Plugin.Logger.LogInfo("Original value of isEditor: " + originalValue);

    // What we return from a patch will override the original return value.
    return true;
}
```
Since `Application.isEditor` is a static property, it doesn't have a `self` argument. Also when defining hooks manually, we define the original method as `Action`, `Action<T>`, `Action<T, T>` etc. or `Func<TResult>`,`Func<T, TResult>`, `Func<T, T, TResult>` etc. depending on the **types of arguments** and the **return type** the original method has. Normally these are defined for us by the `MMHOOK` assemblies.

The `Action` delegate signifies that the method doesn't return anything, while `Func` signifies that the method return a value, and has the return type as its last parameter.

So, since the `Application.isEditor`'s getter method does not have any arguments and returns a *boolean* value, the method must be defined as `Func<bool> orig`.

### Patching IEnumerators
Patching `IEnumerator` methods is different from patching "normal" methods. See the [HarmonyX](https://github.com/BepInEx/HarmonyX/wiki/Enumerator-patches) wiki on patching IEnumerator methods, as it explains well why IEnumerators need to be patched like so:
```cs
// Somewhere in our code we subscribe to the event once:
On.GameNetcodeStuff.PlayerControllerB.PlayerJump += PlayerControllerB_PlayerJump;
// ...
private static IEnumerator PlayerControllerB_PlayerJump(On.GameNetcodeStuff.PlayerControllerB.orig_PlayerJump orig, PlayerControllerB self)
{
    // code here runs before the original method

    // Get the IEnumerator returned by the original method
    IEnumerator origIEnumerator = orig(self);
    // Repeat until MoveNext of origIEnumerator is false
    while (origIEnumerator.MoveNext())
    {
        yield return origIEnumerator.Current;
    }
    // code here runs after the original method
}
```
This example `IEnumerator` patch doesn't change the original behavior, it only demonstrates how to write a patch without breaking the original method.

## ILHook Examples
### Introduction to ILHooks
ILHooks are a way to modify the original methods on the **IL** (or **CIL**) level, which is what C# compiles to. This is how we can have full control over what the original method does.

ILHooks should be generally used if you would need to **reimplement** part of the original method in a normal Hook. Using an **ILHook** in such a situation will result in **better compatibility** with other mods that modify the same method. However, do notice that if for example two mods try to modify the same IL code, it could still lead into an incompatibility between the two mods.

When writing ILHooks, it is **important** to know the **IL instructions** you are dealing with, as a single difference in the behavior of an instruction could lead to an error. For example, `brtrue` will jump to a different instruction if value from **stack** is non-zero and will also **pop** the value from the stack, and just replacing it with a `br` (branch unconditionally) will result in an error because it doesn't **pop** a value like `brtrue` does. So in this case we could for example **emit** a pop instruction to keep our IL code valid.

So, **for a list of IL instructions**, see [the Wikipedia page](https://en.wikipedia.org/wiki/List_of_CIL_instructions) or [Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.emit.opcodes?view=net-8.0#fields) on them.

**Other relevant resources:** [IL Hooking — Risk of Rain 2 Modding Wiki](https://risk-of-thunder.github.io/R2Wiki/Mod-Creation/C%23-Programming/IL-Hooking/)

:::tip
See our unofficial [MonoMod Documentation](./monomod-documentation.md) for more in-depth details on e.g. [ILCursor](./monomod-documentation.md#ilcursor)!
:::

#### My First ILHook
Let's say we want to make the following modification to the jumping behavior in the game:  
*When running, the character should perform much bigger jumps.*

::: danger WARNING
On Thunderstore's Lethal Company Community, even a new game mechanic like this **will be considered as cheating and is not allowed on the site** if it provides an unfair advantage on other players *and* your mod can run for non-host clients without the host being able to opt-out of this feature.

In a case like this, you could register a new dummy network object which will automatically prevent players without that network object from joining your lobby, by showing an error message instead.

:::

To do this, we must know that the variable `jumpForce` of `PlayerControllerB` affects how strong jumps are, so let's try making a normal Hook to change it depending on whether or not we are sprinting:

```cs
// Somewhere in our code we subscribe to the event once:
On.GameNetcodeStuff.PlayerControllerB.Update += PlayerControllerB_Update;
// ...
private static void PlayerControllerB_Update(On.GameNetcodeStuff.PlayerControllerB.orig_Update orig, GameNetcodeStuff.PlayerControllerB self)
{
    orig(self);
    if (self.isSprinting)
        self.jumpForce = 30f;
    else
        self.jumpForce = 13f;
}
```
However, the above code doesn't quite give the results we wish for.
This is because `jumpForce` is used when calculating fall speed, and changing it happens to affect how fast we will fall.

There are many ways to work around this, and one way to make sure it is only changed when jumping is to use an ILHook. We will move the above logic to only run when the `Jump_performed` method is run and the player is allowed to jump.

The decompiled `Jump_performed` method will look something like this:
::: info
The latest versions have new method calls in this method that we could hook to, and *even an event that can be subscribed to when the player jumps,* but for the sake of this example we'll ignore those and show the older decompiled version of the method which doesn't have those.
:::
```cs
private void Jump_performed(InputAction.CallbackContext context)
{
    if (!quickMenuManager.isMenuOpen && ((base.IsOwner && isPlayerControlled && (!base.IsServer || isHostPlayerObject)) || isTestingPlayer) && !inSpecialInteractAnimation && !isTypingChat && (isMovementHindered <= 0 || isUnderwater) && !isExhausted && (thisController.isGrounded || (!isJumping && IsPlayerNearGround())) && !isJumping && (!isPlayerSliding || playerSlidingTimer > 2.5f) && !isCrouching)
    {
        // <-- We want to execute our code here
        playerSlidingTimer = 0f;
        isJumping = true;
        sprintMeter = Mathf.Clamp(sprintMeter - 0.08f, 0f, 1f);
        movementAudio.PlayOneShot(StartOfRound.Instance.playerJumpSFX);
        if (jumpCoroutine != null)
        {
            StopCoroutine(jumpCoroutine);
        }
        jumpCoroutine = StartCoroutine(PlayerJump());
    }
}
```
As we can see, if we used a normal Hook, there are many expressions we would have to copy from the if statement into our code for it to work as intended. And if another mod modifies these expressions, our mod will not get these changes because we would have just reimplemented the code instead.

Alternatively we could try hooking the `PlayerJump` method, but it is a coroutine, which need special treatment to be hooked "properly". See [Patching IEnumerators](#patching-ienumerators) to find out how to do it. However for the sake of this example, we will not do that.

The above method in IL with the place we are wanting to execute our code looks like this:
```IL
// ...
IL_00a7: ldarg.0        // load argument 0 'this' onto stack
IL_00a8: ldfld bool GameNetcodeStuff.PlayerControllerB::isCrouching
// Push the value of 'isCrouching' onto stack 
IL_00ad: brtrue.s IL_011d // Branch to IL_011d if value from stack is non-zero (true)

// <-- We want to execute our code here

IL_00af: ldarg.0        // load argument 0 'this' onto stack
IL_00b0: ldc.r4 0.0     // push 0 onto the stack as float32
IL_00b5: stfld float32 GameNetcodeStuff.PlayerControllerB::playerSlidingTimer
// replace the value of 'playerSlidingTimer' with value from stack

IL_00ba: ldarg.0        // load argument 0 'this' onto stack
IL_00bb: ldc.i4.1       // Push 1 onto the stack as int32
IL_00bc: stfld bool GameNetcodeStuff.PlayerControllerB::isJumping
// replace the value of 'isJumping' with value from stack
// ...
```
Now we know the place in IL where we want to insert our code inside the original method, so let's write our ILHook:
```cs
// Somewhere in our code we subscribe to the event once:
IL.GameNetcodeStuff.PlayerControllerB.Jump_performed += PlayerControllerB_Jump_performed;
// ...
private static void PlayerControllerB_Jump_performed(ILContext il)
{
    // We use ILCursor to make modifications to the il code
    ILCursor c = new(il);

    // Find a place inside the if statement which makes us jump.
    // We know the following C# line is inside the if statement:
    // this.playerSlidingTimer = 0f;
    // So we locate it from IL code:
    c.GotoNext(
        // IL_00af: ldarg.0         // load argument 0 'this' onto stack
        // IL_00b0: ldc.r4 0.0      // push 0 onto the stack as float32
        // IL_00b5: stfld float32 GameNetcodeStuff.PlayerControllerB::playerSlidingTimer // replace the value of 'playerSlidingTimer' with value from stack
        x => x.MatchLdarg(0),
        x => x.MatchLdcR4(0.0f),
        // Note that nameof gives the name of a variable, type, or member as a string constant
        // so this is the same as "playerSlidingTimer" but we can more easily change this
        // if the game changes the name of that variable/type/member.
        x => x.MatchStfld<PlayerControllerB>(nameof(PlayerControllerB.playerSlidingTimer))
        // The reason we have multiple things to match is to make sure
        // that even if the original IL code changes, we will find the
        // exact place if it still exists. If GotoNext doesn't match everything,
        // it will throw an exception and this code won't run.
        // If you don't want it to throw an exception, use TryGotoNext instead.
    );
    // Our IL cursor is now located before the first instruction we matched against in GotoNext.
    // The IL cursor will always be between an above and below instruction.
    // If we want to move it, we could for example do c.Index += 3; to move it after the stfld instruction.
    
    // To insert our C# logic from before, we will do the following:
    // We will emit a delegate Method of type void (Action) which
    // takes an instance of PlayerControllerB as an argument.
    // Because this is IL code, we have to load 'this' (PlayerControllerB) onto
    // stack first, with ldarg.0
    // Any non-static method has 'this' as the first argument
    c.Emit(OpCodes.Ldarg_0); // load argument 0 'this' onto stack
    c.EmitDelegate<Action<PlayerControllerB>>((self) =>
    {
        Plugin.Logger.LogInfo("Hello from C# code in IL!");

        if (self.isSprinting)
            self.jumpForce = 30f;
        else
            self.jumpForce = 13f; // this is the default value of jumpForce
    });
    // Plugin.Logger.LogInfo(il.ToString()); // uncomment to print the modified IL code to console
}
```
We have now made our first ILHook! While takes a bit of knowledge to get here, in the end it is not too complicated. As long as you keep a List of IL instructions on you to know which instructions do what exactly, you can get quite far without needing help.

The hard part about ILHooking is that it is very easy to emit invalid IL code, which will immediately result in an error. For example, if we didn't do `c.Emit(OpCodes.Ldarg_0);` before `EmitDelegate`, it would lead to an error. And this is because our Delegate method takes an instance of `PlayerControllerB` as an argument.

### Replacing a Method Call

::: warning
This patch example is for an older version of the game, and isn't valid for the latest versions.
:::
::: info
The following ILHook example is taken from the [JetpackFallFix](https://thunderstore.io/c/lethal-company/p/Hamunii/JetpackFallFix/) mod.
:::
In `PlayerControllerB`, there is an if statement which checks for collision when flying with the jetpack. However, this method call is mistakenly missing an argument which tells the check to ignore trigger colliders, meaning you can take damage with the jetpack when colliding with random trigger colliders.

The following ILHook replaces this method call to fix the bug: 
```cs
Physics.CheckSphere(this.gameplayCamera.transform.position, 3f, StartOfRound.Instance.collidersAndRoomMaskAndDefault) // [!code --]
Physics.CheckSphere(this.gameplayCamera.transform.position, 3f, StartOfRound.Instance.collidersAndRoomMaskAndDefault, QueryTriggerInteraction.Ignore) // [!code ++]
```
```cs
// Somewhere in our code we subscribe to the event once:
IL.GameNetcodeStuff.PlayerControllerB.Update += PlayerControllerB_Update;
// ...
private static void PlayerControllerB_Update(ILContext il)
{
    /*
    // Find:

    if (Physics.CheckSphere(this.gameplayCamera.transform.position, 3f, StartOfRound.Instance.collidersAndRoomMaskAndDefault))
    
    // And add QueryTriggerInteraction.Ignore at the end of CheckSphere().
    // This prevents us from colliding with trigger colliders when flying with the jetpack.
    */

    ILCursor c = new(il);
    c.GotoNext(
        MoveType.After, // position our cursor after the last match
        // IL_12db: ldarg.0     // load argument 0 'this' onto stack
        // IL_12dc: ldfld class [UnityEngine.CoreModule]UnityEngine.Camera GameNetcodeStuff.PlayerControllerB::gameplayCamera   // push the value of 'gameplayCamera' onto stack
        // IL_12e1: callvirt instance class [UnityEngine.CoreModule]UnityEngine.Transform [UnityEngine.CoreModule]UnityEngine.Component::get_transform()
        // IL_12e6: callvirt instance valuetype [UnityEngine.CoreModule]UnityEngine.Vector3 [UnityEngine.CoreModule]UnityEngine.Transform::get_position()
        x => x.MatchLdarg(0),
        x => x.MatchLdfld<PlayerControllerB>(nameof(PlayerControllerB.gameplayCamera)),
        x => x.MatchCallvirt<Component>("get_" + nameof(Component.transform)), // Getter methods begin their name with 'get_' and nameof gives the name of transform, which is 'transform'
        x => x.MatchCallvirt<Transform>("get_" + nameof(Transform.position)),
        // IL_12eb: ldc.r4 3    // push 3 onto the stack as float32
        // IL_12f0: call class StartOfRound StartOfRound::get_Instance()
        // IL_12f5: ldfld int32 StartOfRound::collidersAndRoomMaskAndDefault    // push the value of 'collidersAndRoomMaskAndDefault' onto stack
        // IL_12fa: call bool [UnityEngine.PhysicsModule]UnityEngine.Physics::CheckSphere(valuetype [UnityEngine.CoreModule]UnityEngine.Vector3, float32, int32)
        x => x.MatchLdcR4(3),
        x => x.MatchCall<StartOfRound>("get_" + nameof(StartOfRound.Instance)),
        x => x.MatchLdfld<StartOfRound>(nameof(StartOfRound.collidersAndRoomMaskAndDefault)),
        x => x.MatchCall<Physics>(nameof(Physics.CheckSphere))
        );
    c.Index -= 1;               // Position us before CheckSphere
    c.Remove();                 // Remove original call to CheckSphere
    c.Emit(OpCodes.Ldc_I4_1);   // Push QueryTriggerInteraction.Ignore (1) onto stack

    // And call the version of CheckSphere which takes QueryTriggerInteraction as an argument.
    // We must use GetMethods because CheckSphere has multiple variations of itself,
    // otherwise we could just get the method like normal, e.g.:
    // c.Emit(OpCodes.Call, AccessTools.DeclaredMethod(typeof(Physics), nameof(Physics.CheckSphere)));
    c.Emit(
        OpCodes.Call,
        typeof(Physics)
        .GetMethods()        // There are multiple variations of the method 'CheckSphere'
        .First(x => x.Name.Equals(nameof(Physics.CheckSphere))
            && x.GetParameters().Length == 4) // We want the variation which takes 4 arguments
    );
    
    // Plugin.Logger.LogInfo(il.ToString()); // uncomment to print the modified IL code to console
}
```

### Replacing a Comparison Operator
::: info
The following example implements the [SlimeTamingFix](https://thunderstore.io/c/lethal-company/p/EliteMasterEric/SlimeTamingFix/) mod's patch as an ILHook.
:::

In the `BlobAI` code, there is a **less than** operator (`<`) used for checking whether or not the anger meter is below zero, which determines whether or not the slime should deal damage when the slime is "tamed" (listening to music).

Here is the relevant **decompiled** code in C#:
```cs
public override void OnCollideWithPlayer(Collider other)
{
    // ...
    if (this.tamedTimer > 0f && this.angeredTimer < 0f)
    {
        return;
    }
    // ... deal damage to player
}
```

The comparison operator for `this.angeredTimer` should instead be **Less than or equal to** (`<=`), as the slime's anger meter starts at zero, in which case in the base game this method does not return early and instead deals damage to the player.

Here is the comparison between the variable in IL:

```IL
// ...
IL_0022: ldarg.0                            // load argument 0 'this' onto stack
IL_0023: ldfld float32 BlobAI::angeredTimer // push the value of 'angeredTimer' onto stack
IL_0028: ldc.r4 0.0                         // push 0 onto the stack as float32
IL_002d: bge.un.s IL_0030   // Branch to IL_0030 if the first value (angeredTimer)
                            // is greater than or equal to (>=) the second value (0f)
                            // when comparing unsigned integer values or unordered float values.

IL_002f: ret                                // Returns from the current method
IL_0030: ldarg.0
// ... deal damage to player
```
From this IL code we can see that the comparison is slightly different, using the **greater than or equal to** operator (`>=`), but the underlying logic is still the same. This is normal, as compiled code is always different from the source code.

Based on the above IL code, we want to do the following modification to the IL logic:
```cs
if (angeredTimer >= 0)  // [!code --]
if (angeredTimer > 0)   // [!code ++]
{
    // ... deal damage to player
}
```
The above code is written slightly differently from the original C# code, but follows the logic of the IL code using the comparison operator used in it (`>=`) so we can hopefully understand better what we are trying to do.

By looking at the [Wikipedia page](https://en.wikipedia.org/wiki/List_of_CIL_instructions) on list of IL instructions, we can find that the IL instruction we are looking for is `bgt.un.s`:
<div style="width:175px">Instruction</div> | Description
---------------------------|-------------------------
`bge.un.s <int8 (target)>` | Branch to target if first value is **greater than or equal to** (`>=`) second value (unsigned or unordered), short form.
`bgt.un.s <int8 (target)>` | Branch to target if first value is **greater than** (`>`) second value (unsigned or unordered), short form.

Based on this information, we can simply make an ILHook to replace that instruction. Let's do it:

```cs
// Somewhere in our code we subscribe to the event once:
IL.BlobAI.OnCollideWithPlayer += BlobAI_OnCollideWithPlayer;
// ...
private static void BlobAI_OnCollideWithPlayer(ILContext il)
{
    ILCursor c = new(il);

    c.GotoNext(
        MoveType.After, // position our cursor after the last match
        // IL_0022: ldarg.0            // load argument 0 'this' onto stack
        // IL_0023: ldfld float32 BlobAI::angeredTimer // push the value of 'angeredTimer' onto stack
        // IL_0028: ldc.r4 0.0         // push 0 onto the stack as float32
        // IL_002d: bge.un.s IL_0030   // Branch to IL_0030 if angeredTimer >= 0
        x => x.MatchLdarg(0),
        x => x.MatchLdfld<BlobAI>(nameof(BlobAI.angeredTimer)),
        x => x.MatchLdcR4(0.0f),
        // we can match instructions without specifying the value by using the 'out' keyword
        x => x.MatchBgeUn(out _)
    );
    // Replace the previous instruction (bge.un.s) with our instruction:
    // bgt.un.s: Branch to IL_0030 if angeredTimer > 0
    c.Previous.OpCode = OpCodes.Bgt_Un_S;

    // Plugin.Logger.LogInfo(il.ToString()); // uncomment to print the modified IL code to console
}
```
And that's it! ILHooks are relatively simple once you get familiar with IL code.

### Logging Value From Setter
::: tip
If you don't know what a property is, see the documentation on [C# properties](https://learn.microsoft.com/en-us/dotnet/csharp/properties).  
**TL;DR:** Properties have `get` and `set` accessors.
:::
Have you ever wanted to know which method set the value of a property, and what the new value is? Well, in any case you will now hopefully learn how to do that.

The following code will print every time `UnityEngine.Transform.position` is set, which is every time any GameObject's position is set. It doesn't tell us which GameObject's position is set, it would need slightly more advanced logic.

This code works with the following logic:
- `ldarga.s` fetches the *address* of the new `Vector3` argument and pushes it to stack
- We inject our method to take in the `Vector3` by *reference*
- Because method calls pop their arguments from the stack, we duplicate the value from `ldarga.s` so that the original `set_position_Injected` still runs properly
```cs
 // While we are using MonoMod, nothing stops us from using AccessTools from HarmonyLib.
using HarmonyLib;
using MonoMod.RuntimeDetour;
// ...
// MMHOOK assemblies don't have hooks for getters and setters, since the feature
// would not work very well most of the time. So we are defining our ILHook manually.
private static ILHook setPositionHook = new ILHook
(
    AccessTools.DeclaredPropertySetter(typeof(UnityEngine.Transform), nameof(UnityEngine.Transform.position)),
    Transform_set_position
);
// ...
private static void Transform_set_position(ILContext il)
{
    ILCursor c = new(il);
    c.GotoNext(
        MoveType.After, // position our cursor after the last match
        // IL_0000: ldarg.0
        // IL_0001: ldarga.s 'value'
        // IL_0003: call instance void UnityEngine.Transform::set_position_Injected(valuetype UnityEngine.Vector3&)
        x => x.MatchLdarg(0),
        x => x.MatchLdarga(out _),
        x => x.MatchCall<Transform>("set_position_Injected") // we could also use nameof here if we publicized UnityEngine.CoreModule.dll
    );
    // Position us before the set_position_Injected call
    c.Index -= 1;

    // When we call a method which takes an argument, it will pop the value from the stack.
    // To preserve the value from ldarga.s for the method set_position_Injected, we duplicate it.
    // This is fine because our method 'PrintPosition' doesn't have a return a value,
    // so the value from ldarga.s stays as the topmost value on the stack.
    c.Emit(OpCodes.Dup);
    
    // Emit a call to our own method named PrintPosition in class MyPatches,
    // which takes a (valuetype UnityEngine.Vector3&) by reference as argument,
    // because ldarga.s loads the address of 'value' onto stack
    c.Emit(OpCodes.Call, AccessTools.DeclaredMethod(typeof(MyPatches), nameof(PrintPosition)));

    // The following IL code is after us:
    // IL_0003: call instance void UnityEngine.Transform::set_position_Injected(valuetype UnityEngine.Vector3&)
    // IL_0008: ret

    // Plugin.Logger.LogInfo(il.ToString()); // uncomment to print the modified IL code to console
}

// Notice the ref keyword we have here. This is needed, because
// ldarga.s loads the address of 'value' onto stack instead of the actual value
private static void PrintPosition(ref Vector3 newPosition)
{
    Plugin.Logger.LogDebug("Position was set!");

    // We now have a reference to the new position with the newPosition parameter!
    // Let's print information about who set it and what the new value is:

    string currentGameFrame = $"(frame: {Time.frameCount}) ";
    var leftPaddingWhitespace = new string(' ', currentGameFrame.Length);

    Plugin.Logger.LogDebug(currentGameFrame + "? Position: " + newPosition);

    StackTrace stackTrace = new StackTrace();
    StackFrame? frame;

    // We are at frame 0, get_position is at 1, so we start at 2.
    int i = 2;
    while ((stackFrame = stackTrace.GetFrame(i)) != null)
    {
        Plugin.Logger.LogDebug($"{leftPaddingWhitespace}| {i - 2} Caller: {stackFrame.GetMethod().DeclaringType}::{stackFrame.GetMethod().Name}");
        i++;
    }
    // Prints e.g.:
    // [Debug  :  MyPlugin] Position was set!
    // [Debug  :  MyPlugin] (frame: 192) ? Position: (10.32, 1.74, -12.27)
    // [Debug  :  MyPlugin]              | 0 Caller: AutoParentToShip::MoveToOffset
    // [Debug  :  MyPlugin]              | 1 Caller: AutoParentToShip::LateUpdate
}
```
And there we go! We now have a way to print information about when any GameObject's position is set, with a stack trace and the new value.

## General
### Priority
Priority in MonoMod is an `int32`, meaning the value range is from `int.MinValue` to `int.MaxValue`, with a higher value meaning the Hook should run earlier from all hooks that target the same method. The default value is `0`.

If you want to use priority while using `MMHOOK` events, you can use `DetourContext`.  
If you are using a Hook or an ILHook, you can use `HookConfig` or `ILHookConfig`, respectively.

When using `DetourContext`, you will want to wrap it in a `using` statement so it disposes of itself afterwards, like so:
```cs
using(new DetourContext(priority: 100))
{
    // The DetourContext is active inside this scope
    On.StartOfRound.Awake += StartOfRound_Awake;
}
```
For more details about `DetourContext`, [see our documentation on it](./monomod-documentation.md#detourcontext).
::: danger IMPORTANT
In order to make `DetourContext` *actually* dispose of itself, you must install [DetourContext.Dispose Fix](https://thunderstore.io/c/lethal-company/p/Hamunii/DetourContext_Dispose_Fix/) and add a dependency to it in your mod's **manifest** file!

This can be done like so:
```json
"dependencies": [
    "BepInEx-BepInExPack-5.4.2100",
    "Hamunii-DetourContext_Dispose_Fix-1.0.0" // [!code ++]
]
```
:::

`HookConfig` or `ILHookConfig` can be passed as an argument like so:
```cs {5}
private static Hook myHook = new Hook
(
    AccessTools.DeclaredMethod(typeof(StartOfRound), nameof(StartOfRound.Awake)),
    StartOfRound_Awake,
    new HookConfig(){ Priority = 100 } // or ILHookConfig for ILHooks
);
```
For more details about `HookConfig` and `ILHookConfig`, [see our documentation on them](./monomod-documentation.md#hookconfigs).