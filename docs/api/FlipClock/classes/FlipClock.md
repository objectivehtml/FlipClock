[flipclock](../../index.md) / [FlipClock](../index.md) / FlipClock

# Class: FlipClock\<T\>

The FlipClock class starts, stops, resets, mounts, and unmounts the clock.
The clock also tracks the time and renders the clock with each interval.

## Extends

- [`EventEmitter`](../../EventEmitter/classes/EventEmitter.md)\<[`Face`](../../Face/interfaces/Face.md)\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`Face`](../../Face/interfaces/Face.md)\<`T`\>

## Constructors

### Constructor

> **new FlipClock**\<`T`\>(`props`): `FlipClock`\<`T`\>

Construct the FlipClock.

#### Parameters

##### props

[`FlipClockProps`](../type-aliases/FlipClockProps.md)\<`T`\>

#### Returns

`FlipClock`\<`T`\>

#### Overrides

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`constructor`](../../EventEmitter/classes/EventEmitter.md#constructor)

## Properties

### autoStart

> `readonly` **autoStart**: `boolean` = `true`

Determines if the clock should automatically start when it is mounted.

***

### el?

> `optional` **el**: `Element`

The clock element.

***

### events

> `protected` **events**: [`Event`](../../EventEmitter/type-aliases/Event.md)\<[`Face`](../../Face/interfaces/Face.md)\<`T`\>, `any`\>[] = `[]`

The registered events.

#### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`events`](../../EventEmitter/classes/EventEmitter.md#events)

***

### face

> `readonly` **face**: `T`

The face used to display the clock.

***

### parent?

> `optional` **parent**: `Element`

The element to which the clock is mounted.

***

### theme

> `readonly` **theme**: [`Theme`](../type-aliases/Theme.md)\<`T`\>

The face used to display the clock.

***

### timer

> `readonly` **timer**: [`Timer`](../../Timer/classes/Timer.md)

The face value displayed on the clock.

## Accessors

### animationRate

#### Get Signature

> **get** **animationRate**(): `number`

Get the animation rate of the clock.

##### Returns

`number`

## Methods

### emit()

> **emit**\<`K`\>(`key`, ...`args`): `void`

Emit an event.

#### Type Parameters

##### K

`K` *extends* keyof [`Face`](../../Face/interfaces/Face.md)\<`T`\>

#### Parameters

##### key

`K`

##### args

...`Required`\<[`Face`](../../Face/interfaces/Face.md)\<`T`\>\>\[`K`\] *extends* (...`args`) => `void` ? `P` : `any`[]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`emit`](../../EventEmitter/classes/EventEmitter.md#emit)

***

### hook()

> `protected` **hook**\<`K`\>(`key`, ...`args`): `void`

Dispatch the event and call the method that corresponds to given hook.

#### Type Parameters

##### K

`K` *extends* keyof [`FaceHooks`](../../Face/interfaces/FaceHooks.md)\<`T`\>

#### Parameters

##### key

`K`

##### args

...`Required`\<[`FaceHooks`](../../Face/interfaces/FaceHooks.md)\<`T`\>\>\[`K`\] *extends* (...`args`) => `void` ? `P` : `any`[]

#### Returns

`void`

***

### mount()

> **mount**(`parent`): `FlipClock`\<`T`\>

Mount the clock instance to the DOM.

#### Parameters

##### parent

`Element`

#### Returns

`FlipClock`\<`T`\>

***

### off()

#### Call Signature

> **off**\<`K`\>(`key`): `void`

Stop listening for all events using a, or with a key and a function.

##### Type Parameters

###### K

`K` *extends* keyof [`Face`](../../Face/interfaces/Face.md)\<`T`\>

##### Parameters

###### key

`K`

##### Returns

`void`

##### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`off`](../../EventEmitter/classes/EventEmitter.md#off)

#### Call Signature

> **off**\<`K`\>(`key`, `fn`): `void`

Stop listening for all events using a, or with a key and a function.

##### Type Parameters

###### K

`K` *extends* keyof [`Face`](../../Face/interfaces/Face.md)\<`T`\>

##### Parameters

###### key

`K`

###### fn

[`Face`](../../Face/interfaces/Face.md)\<`T`\>\[`K`\]

##### Returns

`void`

##### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`off`](../../EventEmitter/classes/EventEmitter.md#off)

***

### on()

> **on**\<`K`\>(`key`, `fn`): () => `void`

Listen for an event. This returns a function to unwatch the event.

#### Type Parameters

##### K

`K` *extends* keyof [`Face`](../../Face/interfaces/Face.md)\<`T`\>

#### Parameters

##### key

`K`

##### fn

[`EventEmitterCallback`](../../EventEmitter/type-aliases/EventEmitterCallback.md)\<[`Face`](../../Face/interfaces/Face.md)\<`T`\>, `K`\>

#### Returns

> (): `void`

##### Returns

`void`

#### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`on`](../../EventEmitter/classes/EventEmitter.md#on)

***

### once()

> **once**\<`K`\>(`key`, `fn`): () => `void`

Listen for an event once.

#### Type Parameters

##### K

`K` *extends* keyof [`Face`](../../Face/interfaces/Face.md)\<`T`\>

#### Parameters

##### key

`K`

##### fn

[`EventEmitterCallback`](../../EventEmitter/type-aliases/EventEmitterCallback.md)\<[`Face`](../../Face/interfaces/Face.md)\<`T`\>, `K`\>

#### Returns

> (): `void`

##### Returns

`void`

#### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`once`](../../EventEmitter/classes/EventEmitter.md#once)

***

### reset()

> **reset**(): `void`

Reset the event bus and remove all watchers.

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../EventEmitter/classes/EventEmitter.md).[`reset`](../../EventEmitter/classes/EventEmitter.md#reset)

***

### start()

> **start**(`fn?`): `this`

Start the clock instance.

#### Parameters

##### fn?

(`instance`) => `void`

#### Returns

`this`

***

### stop()

> **stop**(`fn?`): `this`

Stop the clock instance.

#### Parameters

##### fn?

(`instance`) => `void`

#### Returns

`this`

***

### toggle()

> **toggle**(`fn?`): `this`

Toggle starting/stopping the clock instance.

#### Parameters

##### fn?

(`instance`) => `void`

#### Returns

`this`

***

### unmount()

> **unmount**(): `this`

Unmount the clock instance from the DOM.

#### Returns

`this`
