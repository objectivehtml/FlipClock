# Definition

Create a map of key/value pairs used to define definitions and their values.

## Instantiate

<<< @/types/useDefinitionMap.function.ts{ts}

## Returns

<<< @/types/UseDefinitionMap.type.ts{ts}

## Usage

```ts
import { useDefinition } from 'flipclock';

const { define, unset } = useDefinition([
    ['January', 'Enero'],
    ['February', 'Febrero'],
]);

define('March', 'Marzo');

define({
    April: 'Abril',
    May: 'Mayo'
});

unset('January');
unset(['February', 'March']);
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/dictionary.test.ts` in the repo.
:::
