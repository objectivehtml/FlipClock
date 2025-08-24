# CSS

A powerful CSS-in-JS solution powered by [Goober](https://goober.js.org/) that can be merged and extended.

## Intantiate

<<< @/types/useCss.function.ts{ts}

## Props

<<< @/types/UseCssDeclaration.type.ts{ts}

## Returns 

<<< @/types/UseCss.type.ts{ts}
<<< @/types/CssDeclaration.type.ts{ts}

## Usage

```ts
import { useCss } from 'flipclock';

const css = useCss((background: string, color: string) => ({
    body: {
        background: background,
        color: color,
    }
}));

const declaration = css('white', 'black'); // {body: {background: 'white', color: 'blacl'}}

console.log(String(declaration)); // 'go3003028782'
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/css.test.ts` in the repo.
:::
