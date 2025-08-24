[flipclock](../../../index.md) / [helpers/charset](../index.md) / UseCharset

# Type Alias: UseCharset

> **UseCharset** = `object`

The return type for `useCharset()`.

## Properties

### charset

> **charset**: `string`[]

***

### chunk()

> **chunk**: (`value`, `size`) => `string`[]

#### Parameters

##### value

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) | `undefined`

##### size

`number`

#### Returns

`string`[]

***

### emptyChar

> **emptyChar**: `string`

***

### isBlacklisted()

> **isBlacklisted**: (`value`) => `boolean`

#### Parameters

##### value

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md)

#### Returns

`boolean`

***

### isWhitelisted()

> **isWhitelisted**: (`value`) => `boolean`

#### Parameters

##### value

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md)

#### Returns

`boolean`

***

### next()

> **next**: (`value?`, `target?`, `count?`) => [`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) \| `undefined`

#### Parameters

##### value?

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md)

##### target?

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) | [`DigitizedValues`](../../digitizer/type-aliases/DigitizedValues.md)

##### count?

`number`

#### Returns

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) \| `undefined`

***

### prev()

> **prev**: (`value?`, `target?`, `count?`) => [`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) \| `undefined`

#### Parameters

##### value?

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md)

##### target?

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) | [`DigitizedValues`](../../digitizer/type-aliases/DigitizedValues.md)

##### count?

`number`

#### Returns

[`DigitizedValue`](../../digitizer/type-aliases/DigitizedValue.md) \| `undefined`
