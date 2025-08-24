<script setup lang="ts">
import Clock from '/components/Clock.vue';
</script>

# Getting Started

## Installation

### Package Manager

Package manager like [pnpm](https://pnpm.io), [yarn](https://classic.yarnpkg.com/en/), [npm](https://www.npmjs.com), etc.
  
::: code-group
```bash [pnpm]
pnpm i flipclock
```

```bash [yarn]
yarn add flipclock
```

```bash [npm]
npm i flipclock
```

```bash [bun]
bun i flipclock
```
:::

### CDN

::: code-group
```html [JSDelivr]
<script src="https://cdn.jsdelivr.net/npm/flipclock@^1/dist/FlipClock.umd.js"></script>
```

```html [Unpkg]
<script src="https://unpkg.com/flipclock@^1/dist/FlipClock.umd.js"></script>
```
:::

## Basic Example

<Clock />

<<< @/components/Clock.vue#imports,parent,example{ts}