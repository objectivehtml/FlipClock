# Event Hooks

Event hooks are called at specific times in the life cycle. These are useful for manipulating the clock or getting data from the clock at runtime. 

[Full Hooks Reference](../reference/event-hooks.md)

## Listening to Events
```ts
import { flipClock, counter, theme, css } from 'flipclock';

const clock = flipClock({
    parent: document.querySelector('#clock')!,
    face: counter(0),
    theme: theme({
        css: css()
    })
});

clock.on('afterMount', (instance: FlipClock) => {
    console.log('After the clock mounts.')
});

clock.on('beforeInterval', (instance: FlipClock) => {
    console.log('Before the timer ticks.')
});

clock.on('afterInterval', (instance: FlipClock) => {
    console.log('After the timer ticks.')
});

clock.once('afterInterval', (instance: FlipClock) => {
    console.log('Called once after the timer ticks.')
});
```

## Stop Listening

`off` can stop listening to all events, or only events that are associated with a given function.

```ts
function onAfterInterval() {
    console.log('After the timer ticks.')
}

clock.on('afterInterval', onAfterInterval);

clock.on('afterInterval', () => {
    console.log('After the timer ticks.')
});

// Remove only one of the event listeners for `afterInterval`.
clock.off('afterInterval', onAfterInterval);

// Remove all event listeners for `afterInterval`.
clock.off('afterInterval');
```

## Unwatch Callback

`on` and `once` return a function to stop a single event.

```ts
const stop = clock.on('afterInterval', () => {
    console.log(instance.face.faceValue());
});

stop();
```