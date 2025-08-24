# Event Hooks

Hooks are fundemental to `FlipClock` api structure. These get called in the order they are defined. Hooks are triggered on `Face` and `Theme` instances, as well as the event bus.

<<< @/types/FaceHooks.interface.ts

## Event Bus

Using the `FlipClock` instance, the hooks are available using the event bus.

```ts
import { flipClock } from 'flipclock';

const clock = flipClock({
    // Your options here
});

clock.on('afterCreate', (instance: FlipClock) => {
    console.log('created!')
});
```