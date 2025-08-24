[flipclock](../../index.md) / [EventEmitter](../index.md) / EventEmitter

# Class: EventEmitter\<T\>

An event emitter to facilitate emitter and listening for events.

## Extended by

- [`FlipClock`](../../FlipClock/classes/FlipClock.md)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new EventEmitter**\<`T`\>(): `EventEmitter`\<`T`\>

#### Returns

`EventEmitter`\<`T`\>

## Properties

### events

> `protected` **events**: [`Event`](../type-aliases/Event.md)\<`T`, `any`\>[] = `[]`

The registered events.

## Methods

### emit()

> **emit**\<`K`\>(`key`, ...`args`): `void`

Emit an event.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### args

...`Required`\<`T`\>\[`K`\] *extends* (...`args`) => `void` ? `P` : `any`[]

#### Returns

`void`

***

### off()

#### Call Signature

> **off**\<`K`\>(`key`): `void`

Stop listening for all events using a, or with a key and a function.

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### key

`K`

##### Returns

`void`

#### Call Signature

> **off**\<`K`\>(`key`, `fn`): `void`

Stop listening for all events using a, or with a key and a function.

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### key

`K`

###### fn

`T`\[`K`\]

##### Returns

`void`

***

### on()

> **on**\<`K`\>(`key`, `fn`): () => `void`

Listen for an event. This returns a function to unwatch the event.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### fn

[`EventEmitterCallback`](../type-aliases/EventEmitterCallback.md)\<`T`, `K`\>

#### Returns

> (): `void`

##### Returns

`void`

***

### once()

> **once**\<`K`\>(`key`, `fn`): () => `void`

Listen for an event once.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### fn

[`EventEmitterCallback`](../type-aliases/EventEmitterCallback.md)\<`T`, `K`\>

#### Returns

> (): `void`

##### Returns

`void`

***

### reset()

> **reset**(): `void`

Reset the event bus and remove all watchers.

#### Returns

`void`
