# Customizing CSS

FlipClock.js allows you to easily override the [CSS](../reference/css.md) used by a theme. CSS definitions can even accept properties for dynamic declarations, giving you the ability to customize the CSS without the need to override it.

## How it works

Let's say you want to adjust the animation duration and font size of the clock.

```ts
import { css } from 'flipclock';

const declaration = css({
    animationDuration: '100ms',
    fontSize: '3rem'
});
```

### Extending the CSS

You can even extend the CSS to create a new declaration based on another.

```ts
import { css } from 'flipclock';

const declaration = css({
    animationDuration: '100ms',
    fontSize: '3rem'
}).extend((props) => ({
    // your CSS overrides here.
}));
```

## Custom CSS

This uses the default CSS for FlipClock.js as an example. Call `useCss` to declare the CSS. Then pass the declaration into the theme.

```ts
import { clock, flipClock, theme, useCss } from 'flipclock';

<!--@include: ../../src/themes/flipclock/flipclock.css.ts{3,}-->

const instance = flipClock({
    face: clock(),
    theme: theme({
        css
    })
});
```

## Using Tradition CSS

Nothing prevents you from using traditional CSS. The CSS-in-JS is totally optional. To use CSS file, just import it like you normally would. This works with `<style>` tags too.

```ts
import { clock, flipClock, theme, useCss } from 'flipclock';
import 'style.css';

const instance = flipClock({
    face: clock(),
    theme: theme()
});
```