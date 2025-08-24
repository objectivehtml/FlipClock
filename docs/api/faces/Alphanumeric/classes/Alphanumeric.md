[flipclock](../../../index.md) / [faces/Alphanumeric](../index.md) / Alphanumeric

# Class: Alphanumeric

This face is designed to flip through alphanumeric values similar to a flip
board at a train station. The value will incrementally/decrementally flip
the digits until it reaches the target.

## Implements

- [`Face`](../../../Face/interfaces/Face.md)

## Constructors

### Constructor

> **new Alphanumeric**(`props`): `Alphanumeric`

Construct the clock face.

#### Parameters

##### props

[`AlphanumericProps`](../type-aliases/AlphanumericProps.md)

#### Returns

`Alphanumeric`

## Properties

### currentValue

> **currentValue**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<[`DigitizedValues`](../../../helpers/digitizer/type-aliases/DigitizedValues.md)\>

***

### direction

> `readonly` **direction**: `"auto"` \| `"forwards"` \| `"backwards"` = `'auto'`

The flip direction. If auto, the direction is automatically determined
based on the current value and target value.

***

### method

> `readonly` **method**: `"increment"` \| `"decrement"` = `'increment'`

The sequencer method.

***

### sequencer

> `readonly` **sequencer**: [`UseSequencer`](../../../helpers/sequencer/type-aliases/UseSequencer.md)

Override how digits are sequenced.

***

### skipChars?

> `optional` **skipChars**: `number`

The number of characters to skip during the incrementing/decrementing.

***

### targetValue

> `readonly` **targetValue**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\> \| [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<[`DigitizedValues`](../../../helpers/digitizer/type-aliases/DigitizedValues.md)\>

The face's target value.

***

### value

> `readonly` **value**: [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`string`\> \| [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<[`DigitizedValues`](../../../helpers/digitizer/type-aliases/DigitizedValues.md)\>

The face's current value.

## Accessors

### backwards

#### Get Signature

> **get** **backwards**(): `boolean`

The sequencer method to call.

##### Returns

`boolean`

## Methods

### decrement()

> **decrement**(): `void`

Decrement the value to the next sequence.

#### Returns

`void`

***

### faceValue()

> **faceValue**(): [`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`any`\>

The face's current value.

#### Returns

[`FaceValue`](../../../FaceValue/classes/FaceValue.md)\<`any`\>

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`faceValue`](../../../Face/interfaces/Face.md#facevalue)

***

### increment()

> **increment**(): `void`

Increment the value to the next sequence.

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

[`FlipClock`](../../../FlipClock/classes/FlipClock.md)\<`Alphanumeric`\>

#### Returns

`void`

#### Implementation of

[`Face`](../../../Face/interfaces/Face.md).[`interval`](../../../Face/interfaces/Face.md#interval)
