---
prev: true
next: false
description: Unofficial legacy MonoMod documentation for modders, with links to the official legacy documentation.
---

# Legacy MonoMod - Documentation {#monomod-documentation}
## Official Documentation {#official-documentation}
::: danger
This page is about **legacy MonoMod**—the version shipped by **BepInEx**, which is what we use.  
The documentation on https://monomod.dev/ is for **“reorganize”**—the next version of MonoMod, *with breaking changes,* which this page doesn't touch.
:::
Legacy MonoMod has official documentation here: https://monomod.github.io/api/index.html  

And while it contains useful information, not everything is well documented. This is where this page comes in; we have documented and linked some of the most relevant pieces of information for modders.

## MonoMod.RuntimeDetour {#monomod-runtimedetour}
**Official Documentation:** [MonoMod.RuntimeDetour](https://monomod.github.io/api/MonoMod.RuntimeDetour.html)  
**Official Usage Example:** [RuntimeDetour Usage](https://github.com/MonoMod/MonoMod/blob/master/README-RuntimeDetour.md)
___
### Hook {#hook}
**Official Documentation:** [MonoMod.RuntimeDetour.Hook](https://monomod.github.io/api/MonoMod.RuntimeDetour.Hook.html)

Hooks are used to **detour** from the original method to run your method instead. They allow receiving a **trampoline** as the first parameter, which when called will call the previous detour in the chain if it exists, or the **original method** if none exist.

You will probably most often use the following constructors:  
`Hook(Delegate from, Delegate to)`  
`Hook(Delegate from, Delegate to, HookConfig config)`  
For the full list, see the official documentation.

#### Hook Example {#hook-example}
**Note:** For more Hook Examples, see [Hook Examples](./monomod-examples.md#hook-examples).
```cs
private static Hook isEditorHook = new Hook
(
    AccessTools.DeclaredPropertyGetter(typeof(UnityEngine.Application), nameof(UnityEngine.Application.isEditor)),
    Hook_Application_get_isEditor,
    new HookConfig(){ Priority = 100 }
);
// The original method get_isEditor is a static boolean,
// so the trampoline must be of type Func<bool>
private static bool Hook_Application_get_isEditor(Func<bool> orig)
{
    Plugin.Logger.LogInfo("Detoured UnityEngine.Application.isEditor!");
    Plugin.Logger.LogInfo("Calling the trampoline...");
    return orig();
}
```

#### Methods {#hook-methods}
**For all methods, see the Official Documentation:** [MonoMod.RuntimeDetour.Hook - Methods](https://monomod.github.io/api/MonoMod.RuntimeDetour.Hook.html#methods)

##### Apply {#hook-apply}
`void Apply()`  
Applies the patch. This is normally done automatically.

##### Undo {#hook-undo}
`void Undo()`  
Unapplies the patch.
___
### ILHook {#ilhook}
**Official Documentation:** [MonoMod.RuntimeDetour.ILHook](https://monomod.github.io/api/MonoMod.RuntimeDetour.ILHook.html)

ILHooks are a different type of detour. Instead of detouring from the original code to your method and calling the trampoline, your method runs once to do the modifications to the IL code, when applied.

You will probably most often use the following constructors:  
`ILHook(MethodBase from, ILContext.Manipulator manipulator)`  
`ILHook(MethodBase from, ILContext.Manipulator manipulator, ILHookConfig config)`  
For the full list, see the official documentation.

Our `ILContext.Manipulator manipulator` method takes in an `ILContext il` as the only argument. We can use `ILCursor` to modify that IL code.

#### ILHook Example {#ilhook-example}
**Note:** For more ILHook Examples, see [ILHook Examples](./monomod-examples.md#ilhook-examples).

```cs
private static ILHook blobCollideHook = new ILHook
(
    AccessTools.DeclaredMethod(typeof(BlobAI), nameof(BlobAI.OnCollideWithPlayer)),
    ILHook_BlobAI_OnCollideWithPlayer
);

private static void ILHook_BlobAI_OnCollideWithPlayer(ILContext il)
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
    // Note the difference: we are changing a bge.un.s for bgt.un.s
    c.Previous.OpCode = OpCodes.Bgt_Un_S;

    Plugin.Logger.LogInfo("IL modifications done!");
    // Plugin.Logger.LogInfo(il.ToString()); // uncomment to print the modified IL code to console
}
```

#### Methods {#ilhook-methods}
**For all methods, see the Official Documentation:** [MonoMod.RuntimeDetour.ILHook - Methods](https://monomod.github.io/api/MonoMod.RuntimeDetour.ILHook.html#methods)

##### Apply {#ilhook-apply}
`void Apply()`  
Applies the patch. This is normally done automatically.

##### Undo {#ilhook-undo}
`void Undo()`  
Unapplies the patch.
___
### HookConfig / ILHookConfig {#hookconfigs}
**Official Documentation:**  
[MonoMod.RuntimeDetour.HookConfig](https://monomod.github.io/api/MonoMod.RuntimeDetour.HookConfig.html)  
[MonoMod.RuntimeDetour.ILHookConfig](https://monomod.github.io/api/MonoMod.RuntimeDetour.ILHookConfig.html)

A configuration object for Hooks/ILHooks. Can be fed as the final argument when creating a Hook/ILHook.

#### Constructors {#hookconfigs-constructors}
`HookConfig()` / `ILHookConfig()`

#### Fields {#hookconfigs-fields}
The fields of `HookConfig` / `ILHookConfig`.
##### After {#hookconfigs-after}
`IEnumerable<string> After`  

##### Before {#hookconfigs-before}
`IEnumerable<string> Before`  

##### ID {#hookconfigs-id}
`string ID`  

##### ManualApply {#hookconfigs-manualapply}
`bool ManualApply`  
Determines whether or not the Hook/ILHook should be applied manually or not. Default: `false`.

##### Priority {#hookconfigs-priority}
`int Priority`  
The priority for this hook. Range: `int.MinValue` to `int.MaxValue`. Default value: `0`. Hooks/ILHooks with a higher priority will run earlier than other Hooks/ILHooks for the same method they are patching.
___
### DetourContext {#detourcontext}
**Official Documentation:** [MonoMod.RuntimeDetour.DetourContext](https://monomod.github.io/api/MonoMod.RuntimeDetour.DetourContext.html)

**DetourContext** is used for ambiently setting a **DetourConfig**, which is basically the same thing as HookConfig/ILHookConfig. This allows us to use things like priority while using **MonoMod.RuntimeDetour.HookGen**'s `MMHOOK` helper assemblies.

#### DetourContext Example {#detourcontext-example}
We will want to wrap the **DetourContext** in a `using` statement so it disposes of itself after running out of scope.
```cs
using(new DetourContext(priority: 100))
{
    // The DetourContext is active inside this scope
    On.StartOfRound.Awake += StartOfRound_Awake;
}
```
::: danger IMPORTANT
You will need to install [DetourContext.Dispose Fix](https://thunderstore.io/c/lethal-company/p/Hamunii/DetourContext_Dispose_Fix/) to fix a bug which causes the **DetourContext** to never dispose of itself. This is because the version of **MonoMod.RuntimeDetour** shipped by **BepInEx** is too old to have that bug fix included.
:::

#### Constructors {#detourcontext-constructors}
`DetourContext()`  
`DetourContext(int priority)`  
`DetourContext(int priority, string id)`  
`DetourContext(string id)`

#### Fields {#detourcontext-fields}
The fields of `DetourContext`.

##### After {#detourcontext-after}
`List<string> After`  

##### Before {#detourcontext-before}
`List<string> Before`  

##### Priority {#detourcontext-priority}
`int Priority`  
The priority for hooks set when the DetourContext is active. Range: `int.MinValue` to `int.MaxValue`. Default value: `0`. Hooks/ILHooks with a higher priority will run earlier than other Hooks/ILHooks for the same method they are patching.

## MonoMod.Cil {#monomod-cil}
**Official Documentation:** [MonoMod.Cil](https://monomod.github.io/api/MonoMod.Cil.html)
___
### ILContext {#ilcontext}
**Official Documentation:** [MonoMod.Cil.ILContext](https://monomod.github.io/api/MonoMod.Cil.ILContext.html)

An IL manipulation "context" with various helpers and direct access to the MethodBody. Passed as an argument to [ILHook](#ilhook) patch methods.

#### Properties {#ilcontext-properties}

**See:** [MonoMod.Cil.ILContext - Properties](https://monomod.github.io/api/MonoMod.Cil.ILContext.html#properties)

#### Methods {#ilcontext-methods}
**For all methods, see the Official Documentation:** [MonoMod.Cil.ILCursor - Methods](https://monomod.github.io/api/MonoMod.Cil.ILContext.html#methods)

The most relevant methods ILContext provides are listed here.

##### DefineLabel {#ilcontext-definelabel}
`ILLabel DefineLabel()`  
Create a new label without target, to be marked with a cursor. See: [ILCursor::MarkLabel](#ilcursor-marklabel).

`ILLabel DefineLabel(Instruction target)`  
Define a new label pointing at a given instruction.
___
### ILCursor {#ilcursor}
**Official Documentation:** [MonoMod.Cil.ILCursor](https://monomod.github.io/api/MonoMod.Cil.ILCursor.html)

A cursor used to manipulate a method body in an [ILContext](#ilcontext). Similar to a text cursor, the **ILCursor** is *between instructions*. ILCursors are used by making an instance of one from an **ILContext**, and using methods such as [Emit](#ilcursor-emit), [EmitDelegate](#ilcursor-emitdelegate) and [Remove](#ilcursor-remove) to modify the ILContext directly.

#### Constructors {#ilcursor-constructors}

`ILCursor(ILContext context)`  
`ILCursor(ILCursor c)`

#### Properties {#ilcursor-properties}
**For all properties, see the Official Documentation:** [MonoMod.Cil.ILCursor - Properties](https://monomod.github.io/api/MonoMod.Cil.ILCursor.html#properties)

##### Index {#ilcursor-index}
`int Index { get; set; }`  
The index of the instruction immediately following the cursor position. Range: 0 to `Instrs.Count`. Setter accepts negative indexing by adding `Instrs.Count` to the operand.

##### Next {#ilcursor-next}
`Instruction Next { get; set; }`  
The instruction immediately following the cursor position or null if the cursor is at the end of the instruction list.

##### Prev/Previous {#ilcursor-previous}
`Instruction Prev { get; set; }`  
`Instruction Previous { get; set; }`  
The instruction immediately preceding the cursor position or null if the cursor is at the start of the instruction list.

#### Methods {#ilcursor-methods}
**For all methods, see the Official Documentation:** [MonoMod.Cil.ILCursor - Methods](https://monomod.github.io/api/MonoMod.Cil.ILCursor.html#methods)

The most relevant methods ILCursor provides are listed here.

##### DefineLabel {#ilcursor-definelabel}
`ILLabel DefineLabel()`  
Create a new label without target, for use with [MarkLabel](#ilcursor-marklabel).

##### MarkLabel {#ilcursor-marklabel}
`void MarkLabel(ILLabel label)`  
Set the target of a label to the current position `(label.Target = Next)` and moves after it. Also see: [ILContext::DefineLabel(Instruction target)](#ilcontext-definelabel).

##### Remove {#ilcursor-remove}
`ILCursor Remove()`  
Remove the Next instruction.

##### RemoveRange {#ilcursor-removerange}
`ILCursor RemoveRange(int num)`  
Remove several instructions.

##### Emit {#ilcursor-emit}
`ILCursor Emit(OpCode opcode)`  
`ILCursor Emit(OpCode opcode, CallSite site)`  
`ILCursor Emit(OpCode opcode, Instruction target)`  
`ILCursor Emit(OpCode opcode, Instruction[] targets)`  
`ILCursor Emit(OpCode opcode, VariableDefinition variable)`  
`ILCursor Emit(OpCode opcode, FieldReference field)`  
`ILCursor Emit(OpCode opcode, MethodBase method)`  
`ILCursor Emit(OpCode opcode, ParameterDefinition parameter)`  
[... And more](https://monomod.github.io/api/MonoMod.Cil.ILCursor.html#MonoMod_Cil_ILCursor_Emit_Mono_Cecil_Cil_OpCode_)  
Emit a new instruction at this cursor's current position.  

##### EmitDelegate {#ilcursor-emitdelegate}
`int EmitDelegate<T>(T cb) where T : Delegate`  
Emit the IL to invoke a delegate as if it were a method. Stack behaviour matches `OpCodes.Call`.

##### GotoNext {#ilcursor-gotonext}
`ILCursor GotoNext(params Func<Instruction, bool>[] predicates)`  
`ILCursor GotoNext(MoveType moveType, params Func<Instruction, bool>[] predicates)`  
Search forward and moves the cursor to the next sequence of instructions matching the corresponding predicates. *Throws `KeyNotFoundException` if sequence is not found.* Use [TryGotoNext](#ilcursor-trygotonext) if this is not desirable.

##### TryGotoNext {#ilcursor-trygotonext}
`ILCursor TryGotoNext(params Func<Instruction, bool>[] predicates)`  
`ILCursor TryGotoNext(MoveType moveType, params Func<Instruction, bool>[] predicates)`  
Search forward and moves the cursor to the next sequence of instructions matching the corresponding predicates. *Returns a boolean which is true if a match was found.*

##### GotoPrev {#ilcursor-gotoprev}
`ILCursor GotoPrev(params Func<Instruction, bool>[] predicates)`  
`ILCursor GotoPrev(MoveType moveType, params Func<Instruction, bool>[] predicates)`  
Search backward and moves the cursor to the next sequence of instructions matching the corresponding predicates. *Throws `KeyNotFoundException` if sequence is not found.* Use [TryGotoPrev](#ilcursor-trygotoprev) if this is not desirable.

##### TryGotoPrev {#ilcursor-trygotoprev}
`ILCursor TryGotoPrev(params Func<Instruction, bool>[] predicates)`  
`ILCursor TryGotoPrev(MoveType moveType, params Func<Instruction, bool>[] predicates)`  
Search backward and moves the cursor to the next sequence of instructions matching the corresponding predicates. *Returns a boolean which is true if a match was found.*