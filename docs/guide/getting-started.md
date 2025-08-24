<script setup lang="ts">
import Clock from '/components/Clock.vue';
</script>

# Getting Started

::: warning
FlipClock.js v1 is currently in beta. The library has been entirely re-written and designed from the ground up. It's ready to be used in production, but API's may be subject to minor breaking changes while it is tested across broad use cases.
:::

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
```bash [JSDelivr]
# @todo - Insert link here
```

```bash [Unpkg]
# @todo - Insert link here
```
:::

## Basic Example

<Clock />

<<< @/components/Clock.vue#imports,parent,example{ts}