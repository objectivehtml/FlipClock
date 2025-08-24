# Charset

Charset, short for "character set", defines a set of characters. Charset can be sequential or random.

## Instantiate

<<< @/types/useCharset.function.ts{ts}

## Props

<<< @/types/UseCharsetOptions.type.ts{ts}

## Returns

<<< @/types/UseCharset.type.ts{ts}

## Usage

```ts
const { next, prev, chunk } = useCharset({
    blacklist: ['#'],
    whitelist: ['@']
});

expect(next('a')).toBe('b');
expect(next('b')).toBe('c');
expect(next(' ')).toBeUndefined();
expect(next(undefined, 'a')).toBe('a');
expect(next(undefined, 'a', 2)).toBe('a');

expect(prev('b')).toBe('a');
expect(prev('c')).toBe('b');
expect(prev('a')).toBe(' ');
expect(prev(' ')).toBeUndefined();
expect(prev('a', undefined, 2)).toBeUndefined();

expect(chunk(undefined, 1)).toStrictEqual(['a']);
expect(chunk(undefined, 5)).toStrictEqual(['a', 'b', 'c', 'd', 'e']);
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/charset.test.ts` in the repo.
:::
