# Dictionaries

Create a [Definition](./definition.md) of terms used for translations.

## Instantiate

<<< @/types/useDictionary.function.ts{TS}
<<< @/types/translator.type.ts{TS}

## Returns

<<< @/types/UseDictionary.type.ts{TS}

## Usage

```ts
import { useDictionary } from 'flipclock';

const { define, translate } = useDictionary({
    foo: 'bar'
});

console.log(translate('foo')); // 'bar'
console.log(translate('bar')); // 'bar
console.log(translate('bar', 'foo')); // 'foo'

define('hello', 'hola'); 

console.log(translate('hello')); // 'hola'
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/dictionary.test.ts` in the repo.
:::
