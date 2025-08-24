# Timer

`Timer` is based on `window.requestAnimationFrame` instead of `setInterval`. It can tick at any defined interval, and is fast, efficient, and non-blocking.

## Instantiate

<<< @/types/timer.function.ts{ts}

## Returns

<<< @/types/Timer.class.ts

## Usage

```ts
import { timer } from 'flipclock';

const instance = timer(100);

instance.start(() => {
    console.log('started')
});

instance.stop(() => {
    console.log('stopped')
});

instance.reset(() => {
    console.log('reset')
});
```