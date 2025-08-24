[flipclock](../../../index.md) / [helpers/structure](../index.md) / TrackChangesCallback

# Type Alias: TrackChangesCallback()\<P, R, C\>

> **TrackChangesCallback**\<`P`, `R`, `C`\> = (`changes`, ...`args`) => `R` \| [`Stop`](Stop.md)

Call for for `trackChanges()`.

## Type Parameters

### P

`P` *extends* `any`[]

### R

`R`

### C

`C` = `P`\[`0`\] \| `undefined`

## Parameters

### changes

[`Change`](Change.md)\<`C`\>[]

### args

...`P`

## Returns

`R` \| [`Stop`](Stop.md)
