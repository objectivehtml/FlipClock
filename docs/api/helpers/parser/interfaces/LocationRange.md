[flipclock](../../../index.md) / [helpers/parser](../index.md) / LocationRange

# Interface: LocationRange

The `start` and `end` position's of an object within the source.

## Properties

### end

> `readonly` **end**: [`Location`](Location.md)

Position after the end of the expression.

***

### source

> `readonly` **source**: [`GrammarSource`](../type-aliases/GrammarSource.md)

A string or object that was supplied to the `parse()` call as the
`grammarSource` option.

***

### start

> `readonly` **start**: [`Location`](Location.md)

Position at the beginning of the expression.
