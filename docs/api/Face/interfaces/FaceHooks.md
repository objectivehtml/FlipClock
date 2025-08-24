[flipclock](../../index.md) / [Face](../index.md) / FaceHooks

# Interface: FaceHooks\<T\>

The hooks that are fired during the lifecycle. Hooks are triggered in the
order they are defined. Hooks may be implemented on a `Face`, `Theme`, or
as an event.

## Extended by

- [`Face`](Face.md)

## Type Parameters

### T

`T` *extends* [`Face`](Face.md)\<`T`\>

## Methods

### afterCreate()?

> `optional` **afterCreate**(`instance`): `void`

The `afterCreate` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### afterInterval()?

> `optional` **afterInterval**(`instance`): `void`

The `afterInterval` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### afterMount()?

> `optional` **afterMount**(`instance`): `void`

The `afterMount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### afterStart()?

> `optional` **afterStart**(`instance`): `void`

The `afterStart` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### afterStop()?

> `optional` **afterStop**(`instance`): `void`

The `afterStop` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### afterUnmount()?

> `optional` **afterUnmount**(`instance`): `void`

The `afterUnmount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### beforeInterval()?

> `optional` **beforeInterval**(`instance`): `void`

The `beforeInterval` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### beforeMount()?

> `optional` **beforeMount**(`instance`): `void`

The `beforeMount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### beforeStart()?

> `optional` **beforeStart**(`instance`): `void`

The `beforeStart` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### beforeStop()?

> `optional` **beforeStop**(`instance`): `void`

The `beforeStop` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

***

### beforeUnmount()?

> `optional` **beforeUnmount**(`instance`): `void`

The `beforeUnmount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`
