[flipclock](../../index.md) / [FaceValue](../index.md) / FaceValue

# Class: FaceValue\<T\>

The FaceValue class digitizes the raw value and so it can be used by the
clock face.

## Type Parameters

### T

`T` *extends* `Exclude`\<`unknown`, `Function`\>

## Constructors

### Constructor

> **new FaceValue**\<`T`\>(`value`, `props?`): `FaceValue`\<`T`\>

Instantiate the face value.

#### Parameters

##### value

`T`

##### props?

[`FaceValueProps`](../type-aliases/FaceValueProps.md)

#### Returns

`FaceValue`\<`T`\>

## Properties

### $digits

> `protected` **$digits**: `Signal`\<[`DigitizedValues`](../../helpers/digitizer/type-aliases/DigitizedValues.md)\>

The face's digits.

***

### $value

> `protected` **$value**: `Signal`\<`T`\>

The face's value.

***

### digitizer

> `readonly` **digitizer**: [`UseDigitizer`](../../helpers/digitizer/type-aliases/UseDigitizer.md)

Parameters that are passed to the digiter.

## Accessors

### digits

#### Get Signature

> **get** **digits**(): [`DigitizedValues`](../../helpers/digitizer/type-aliases/DigitizedValues.md)

The digitized value.

##### Returns

[`DigitizedValues`](../../helpers/digitizer/type-aliases/DigitizedValues.md)

#### Set Signature

> **set** **digits**(`value`): `void`

Set the digits from a `DigitizedValue`. It's possible the digits differ
than the value, if a sequencer or something else is iterating on the
digits.

##### Parameters

###### value

[`DigitizedValues`](../../helpers/digitizer/type-aliases/DigitizedValues.md)

##### Returns

`void`

***

### length

#### Get Signature

> **get** **length**(): `number`

Get the length of the flattened digitized array.

##### Returns

`number`

***

### value

#### Get Signature

> **get** **value**(): `T`

Get the value.

##### Returns

`T`

#### Set Signature

> **set** **value**(`value`): `void`

Set the value.

##### Parameters

###### value

`Exclude`\<`T`, `Function`\>

##### Returns

`void`

## Methods

### compare()

> **compare**(`subject?`): `boolean`

Compare the face value with the given subject.

#### Parameters

##### subject?

`FaceValue`\<`any`\>

#### Returns

`boolean`

***

### copy()

> **copy**(): `FaceValue`\<`T`\>

Create a new instance with the given value.

#### Returns

`FaceValue`\<`T`\>
