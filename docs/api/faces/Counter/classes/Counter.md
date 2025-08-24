[flipclock](../../../index.md) / [faces/Counter](../index.md) / Counter

# Class: Counter

This face is designed to increment and decrement values. Usually this face
is used as a counter for 0, 1, 2, 3, 4 (etc) for something like page views.

## Implements

- [`Face`](../../../Face/interfaces/Face.md)

## Constructors

### Constructor

> **new Counter**(`props?`): `Counter`

Construct the clock face.

#### Parameters

##### props?

[`CounterProps`](../type-aliases/CounterProps.md)

#### Returns

`Counter`

## Properties

### countdown

> **countdown**: `boolean` = `false`

Should the face count down instead of up.

***

### format()?

> `optional` **format**: (`number`) => `string`

A format callback. If the `formatter` is defined, this prop is ignored.

#### Parameters

##### number

`number`

#### Returns

`string`

***

### formattedValue

> `protected` **formattedValue**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

The formatted face value to display on the clock.

***

### formatter?

> `optional` **formatter**: `NumberFormat`

An `Intl.NumberFormat` instance used to format the number into a string.

***

### step

> **step**: `number` = `1`

The number to increment/decrement in the interval.

***

### targetValue?

> `optional` **targetValue**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`number`\>

The target value determines when the counter should stop.

***

### value

> **value**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`number`\>

The current face value.

## Accessors

### formattedString

#### Get Signature

> **get** **formattedString**(): `string`

Get the number as a formatted string.

##### Returns

`string`

## Methods

### decrement()

> **decrement**(`value?`): `void`

Substract the face value by the given value.

#### Parameters

##### value?

`number`

#### Returns

`void`

***

### faceValue()

> **faceValue**(): [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

The face's current value.

#### Returns

[`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`faceValue`](../../../Face/interfaces/Face.md#facevalue)

***

### increment()

> **increment**(`value?`): `void`

Add to the face value by the given value.

#### Parameters

##### value?

`number`

#### Returns

`void`

***

### interval()

> **interval**(`instance`): `void`

This method is called with every interval, or every time the clock
should change, and handles the actual incrementing and decrementing the
clock's `FaceValue`.

#### Parameters

##### instance

[`FlipClock`](../../../FlipClock/classes/FlipClock.md)\<`Counter`\>

#### Returns

`void`

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`interval`](../../../Face/interfaces/Face.md#interval)
