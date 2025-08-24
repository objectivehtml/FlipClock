[flipclock](../../../index.md) / [helpers/structure](../index.md) / stopWhen

# Function: stopWhen()

> **stopWhen**\<`P`, `R`\>(`predicate`, `fn`): [`Callback`](../type-aliases/Callback.md)\<`P`, `R`\>

Stop the walker using a predicate function. Return `false` to stop and `true`
to continue. The predicate is ran before the callback function.

## Type Parameters

### P

`P` *extends* `any`[]

### R

`R`

## Parameters

### predicate

[`StopPredicateFunction`](../type-aliases/StopPredicateFunction.md)\<`P`\>

### fn

[`Callback`](../type-aliases/Callback.md)\<`P`, `R`\>

## Returns

[`Callback`](../type-aliases/Callback.md)\<`P`, `R`\>
