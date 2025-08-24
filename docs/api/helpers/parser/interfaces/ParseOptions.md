[flipclock](../../../index.md) / [helpers/parser](../index.md) / ParseOptions

# Interface: ParseOptions\<T\>

## Type Parameters

### T

`T` *extends* [`StartRuleNames`](../type-aliases/StartRuleNames.md) = `"array"`

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### grammarSource?

> `readonly` `optional` **grammarSource**: [`GrammarSource`](../type-aliases/GrammarSource.md)

String or object that will be attached to the each `LocationRange` object
created by the parser. For example, this can be path to the parsed file
or even the File object.

***

### peg$currPos?

> `optional` **peg$currPos**: `number`

***

### peg$library?

> `readonly` `optional` **peg$library**: `boolean`

***

### peg$maxFailExpected?

> `optional` **peg$maxFailExpected**: [`Expectation`](../type-aliases/Expectation.md)[]

***

### peg$silentFails?

> `optional` **peg$silentFails**: `number`

***

### startRule?

> `readonly` `optional` **startRule**: `T`

***

### tracer?

> `readonly` `optional` **tracer**: [`ParserTracer`](ParserTracer.md)
