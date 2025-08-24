# Dates

Defines a [Dictionary](./dictionary.md) of date formatting functions.

## Instantiate

<<< @/types/useDateFormats.function.ts{TS}

## Props

<<< @/types/UseDateFormatsOptions.type.ts{ts}

<<< @/types/useDateFormats.function.ts{TS}
<<< @/types/UseDateFormatsOptions.type.ts{TS}
<<< @/types/DateFlagFormatFunction.type.ts{TS}

## Returns

<<< @/types/UseDateFormats.type.ts{TS}

## Usage

```ts
const { format, parse } = useDateFormats();

format(new Date('2025-01-01'), 'MM/DD/YYYY')); // '01/01/2025'
format(new Date('2025-01-01'), 'DDDD, MMMM YYYY')); // 'Monday, January 2025'
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/date.test.ts` in the repo.
:::