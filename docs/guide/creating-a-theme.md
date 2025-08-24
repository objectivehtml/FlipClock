# Creating a Theme

Themes are how the clock faces are rendered. Themes give you the ability to fully control the markup for how a clock is rendered. FlipClock.js uses [SolidJS](https://www.solidjs.com/) under the hood for its reactivity and rendering.

## What is a Theme?

A theme is merely an object that conforms to the type. A theme can tap into the [Event Hooks](./event-hooks.md) life cycle. The only required method is `render`.

<<< @/types/Theme.type.ts{ts}

## Why SolidJS?

SolidJS is an amazing lightweight frontend framework that compiles to vanilla JS. The benefit to SolidJS is its compiler converts `.tsx` files into vanilla JS that can be rendered into any JS application. For example, the docs for FlipClock.js uses Vitepress and Vue, while the FlipClock.js is rendered with SolidJS.

### Why not just use vanilla JS for rendering?

We actually tried this and everything worked the same. However, the themes were more convoluted and harder to main than an expressive `.tsx` declaration file that is compiled into vanilla JS. The resulting bundle sizes wasn't that much smaller, so we feel the benefits of SolidJS far outweigh a few extra kilobytes in bundle size.

### Why not Vue or React?

Because SolidJS is extremely performant, lighweight, and compiles to vanilla JS. The end result is zero runtime dependencies.

## Writing the Theme

Using the FlipClock.js default theme as an example. Create a `.tsx` file and ensure you have SolidJS's build system configured accordingly.

```ts
import type { CssDeclaration, DigitizedValue, DigitizedValues, DisposeFunction, Face, FlipClock, Theme } from 'flipclock';
import { createEffect, createMemo, createRoot, createSignal, Index, Match, Show, Switch, type JSX } from "solid-js";

<!--@include: ../../src/themes/flipclock/index.tsx{8,}-->
```