[flipclock](../../../index.md) / [faces/Clock](../index.md) / Clock

# Class: Clock

This face will show a clock in a given format. *

## Implements

- [`Face`](../../../Face/interfaces/Face.md)

## Constructors

### Constructor

> **new Clock**(`props?`): `Clock`

Instantiate the clock face.

#### Parameters

##### props?

[`ClockProps`](../type-aliases/ClockProps.md)

#### Returns

`Clock`

## Properties

### date

> `readonly` **date**: `Date`

The starting date on the clock. If no date is set, the current time
will be used.

***

### format

> **format**: `string` = `'[hh]:[mm]:[ss][A]'`

The format string.

***

### formatter

> **formatter**: [`UseDateFormats`](../../../helpers/date/type-aliases/UseDateFormats.md)

The duration formatter.

***

### value

> `readonly` **value**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\>

The current formatted value.

## Methods

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

Format the face value to the current date/time.

#### Parameters

##### instance

[`FlipClock`](../../../FlipClock/classes/FlipClock.md)\<`any`\>

#### Returns

`void`

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`interval`](../../../Face/interfaces/Face.md#interval)
