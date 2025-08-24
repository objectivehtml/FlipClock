# Digitizer

Converts an abitrary value into individual digits.

## Instantiate

<<< @/types/useDigitizer.function.ts{TS}

## Returns

<<< @/types/UseDigitizer.type.ts{TS}
<<< @/types/DigitizedValue.type.ts{TS}
<<< @/types/DigitizedValues.type.ts{TS}

## Usage

```ts
const { digitize, isDigitized } = useDigitizer();

console.log(digitize('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log(digitize(['hello', 'world'])); // [['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]

console.log(isDigitized(['hello'])); // false
console.log(isDigitized(['h', 'e', 'l', 'l', 'o'])); // true
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/digitizer.test.ts` in the repo.
:::
