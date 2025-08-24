[flipclock](../../../index.md) / [helpers/parser](../index.md) / GrammarSourceObject

# Interface: GrammarSourceObject

Anything that can successfully be converted to a string with `String()`
so that it can be used in error messages.

The GrammarLocation class in Peggy is a good example.

## Properties

### offset()?

> `readonly` `optional` **offset**: (`loc`) => [`Location`](Location.md)

If specified, allows the grammar source to be embedded in a larger file
at some offset.

#### Parameters

##### loc

[`Location`](Location.md)

#### Returns

[`Location`](Location.md)

***

### toString()

> `readonly` **toString**: () => `string`

#### Returns

`string`
