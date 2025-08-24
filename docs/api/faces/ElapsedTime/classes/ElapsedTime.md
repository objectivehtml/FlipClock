[flipclock](../../../index.md) / [faces/ElapsedTime](../index.md) / ElapsedTime

# Class: ElapsedTime

This face will show the amount of time elapsed since the given value and
display it a specific format. For example 'hh:mm:ss' will show the elapsed
time in hours, minutes, seconds.

## Implements

- [`Face`](../../../Face/interfaces/Face.md)

## Constructors

### Constructor

> **new ElapsedTime**(`props?`): `ElapsedTime`

Construct the clock face.

#### Parameters

##### props?

[`ElapsedTimeProps`](../type-aliases/ElapsedTimeProps.md)

#### Returns

`ElapsedTime`

## Properties

### current

> `protected` **current**: `Date`

The date used to calculate the current.

***

### format

> **format**: `string` = `'[mm]:[ss]'`

The format string.

***

### formatter

> **formatter**: [`UseDurationFormats`](../../../helpers/duration/type-aliases/UseDurationFormats.md)

The duration formatter.

***

### from?

> `optional` **from**: `Date`

The "from" date used to calculate the elsapsed time.

***

### start

> `protected` **start**: `Date`

The date used to calculate the current.

***

### to?

> `optional` **to**: `Date`

The "to" date used to calculate the elsapsed time.

***

### value

> **value**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

The current face value.

## Accessors

### formattedString

#### Get Signature

> **get** **formattedString**(): `string`

Get the elapsed time as a formatted string.

##### Returns

`string`

## Methods

### beforeStart()

> **beforeStart**(): `void`

The `beforeStart` hook.

#### Returns

`void`

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`beforeStart`](../../../Face/interfaces/Face.md#beforestart)

***

### faceValue()

> **faceValue**(): [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

The face's current value.

#### Returns

[`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`faceValue`](../../../Face/interfaces/Face.md#facevalue)

***

### interval()

> **interval**(`instance`): `void`

Format the value with the new elapsed time.

#### Parameters

##### instance

[`FlipClock`](../../../FlipClock/classes/FlipClock.md)\<`ElapsedTime`\>

#### Returns

`void`

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`interval`](../../../Face/interfaces/Face.md#interval)

***

### shouldStop()

> **shouldStop**(): `boolean`

Determines if the clock should be stopped.

#### Returns

`boolean`
