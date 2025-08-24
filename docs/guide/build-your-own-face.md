# Build Your Own Face

A core concept to `FlipClock` is that the internal implementations are done so with the publicly consumable API's. All the faces provided by library can be used an examples for how to build your own.

## Face Interface

All faces must implement the `Face` interface. All the [Hooks](./event-hooks.md) are available to the `Face`.

<<< @/types/Face.interface.ts{TS}

## Example

Below is the actual source code to the `Counter` face. Here are couple of key notes:

1. The `Counter` enforces a numeric type `FaceValue<number>`.
2. `increment` and `decrement` are public instance methods specific to this face.
3. `faceValue()` and `interval()` satisfy the requirements by the `Face` interface.

<<< @/../src/faces/Counter.ts{TS}
