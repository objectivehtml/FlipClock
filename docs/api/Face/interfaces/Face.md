[flipclock](../../index.md) / [Face](../index.md) / Face

# Interface: Face\<T\>

All faces must implement this interface.

## Extends

- [`FaceHooks`](FaceHooks.md)\<`T`\>

## Type Parameters

### T

`T` *extends* `Face`\<`T`\> = `any`

## Methods

### afterCreate()?

> `optional` **afterCreate**(`instance`): `void`

The `afterCreate` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`afterCreate`](FaceHooks.md#aftercreate)

***

### afterInterval()?

> `optional` **afterInterval**(`instance`): `void`

The `afterInterval` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`afterInterval`](FaceHooks.md#afterinterval)

***

### afterMount()?

> `optional` **afterMount**(`instance`): `void`

The `afterMount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`afterMount`](FaceHooks.md#aftermount)

***

### afterStart()?

> `optional` **afterStart**(`instance`): `void`

The `afterStart` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`afterStart`](FaceHooks.md#afterstart)

***

### afterStop()?

> `optional` **afterStop**(`instance`): `void`

The `afterStop` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`afterStop`](FaceHooks.md#afterstop)

***

### afterUnmount()?

> `optional` **afterUnmount**(`instance`): `void`

The `afterUnmount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`afterUnmount`](FaceHooks.md#afterunmount)

***

### beforeInterval()?

> `optional` **beforeInterval**(`instance`): `void`

The `beforeInterval` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`beforeInterval`](FaceHooks.md#beforeinterval)

***

### beforeMount()?

> `optional` **beforeMount**(`instance`): `void`

The `beforeMount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`beforeMount`](FaceHooks.md#beforemount)

***

### beforeStart()?

> `optional` **beforeStart**(`instance`): `void`

The `beforeStart` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`beforeStart`](FaceHooks.md#beforestart)

***

### beforeStop()?

> `optional` **beforeStop**(`instance`): `void`

The `beforeStop` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`beforeStop`](FaceHooks.md#beforestop)

***

### beforeUnmount()?

> `optional` **beforeUnmount**(`instance`): `void`

The `beforeUnmount` hook.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`FaceHooks`](FaceHooks.md).[`beforeUnmount`](FaceHooks.md#beforeunmount)

***

### faceValue()

> **faceValue**(): [`FaceValue`](../../FaceValue/classes/FaceValue.md)\<`any`\>

The face's value to display. When this value changes, or a new
`FaceValue` instance has been returned, the clock will automatically
re-render.

#### Returns

[`FaceValue`](../../FaceValue/classes/FaceValue.md)\<`any`\>

***

### interval()

> **interval**(`instance`): `void`

This method is called with every timer interval. Use this to increment,
decrement or value change the `faceValue()`.

#### Parameters

##### instance

[`FlipClock`](../../FlipClock/classes/FlipClock.md)\<`T`\>

#### Returns

`void`
