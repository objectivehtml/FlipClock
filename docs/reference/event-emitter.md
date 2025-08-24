# Event Emitter

`EventEmitter` is extended by [FlipClock](./flipclock.md), which provides event bus on all clocks.

## Instantiate

<<< @/types/eventEmitter.function.ts{ts}

## Returns

<<< @/types/EventEmitter.class.ts{ts}

## Usage

```ts
const emitter = eventEmitter<{
    foo: () => void
    bar: () => void
}>();

const foo = vi.fn();
const bar = vi.fn();

emitter.on('foo', foo);
emitter.on('bar', bar);
emitter.once('foo', foo);

const unwatch = emitter.on('foo', foo);

emitter.emit('foo');

unwatch();
```