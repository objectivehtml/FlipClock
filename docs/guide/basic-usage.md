# Basic Usage

The primary role of the [FlipClock](../reference/flipclock.md) instance is to `mount`, `unmount`, `start`, `stop` and `toggle` a clock. The [Face](../reference/face.md) is responsible for most of the functionality.

## Mounting and Unmounting

Mounting binds the clock to the DOM, and unmounting removes it. Passing `parent` to the `FlipClockProps` will automatically bind it on creation. By not passing an element, you are required to mount it manually.

```ts
import { flipClock } from 'flipclock';

const clock = flipClock({
    // your options here...
});

// Mount the clock
clock.mount(document.querySelector('#clock')!);

// Unmount the clock
clock.unmount();
```

## Starting and stopping the clock

The clock starts automatically by default. If `autoStart` is set to `false`, you must manually start the clock.

```ts
import { flipClock, clock, theme, css } from 'flipclock';

const clock = flipClock({
    // your options here...
});

// Start the clock
clock.start(() => {
    console.log('The clock started!')
});

// Stop the clock
clock.stop(() => {
    console.log('The clock stopped!')
});

// Toggle starts the clock if stopped, and stops if started.
clock.toggle(() => {
    console.log(`Status:`, clock.timer.isStopped)
});
```
