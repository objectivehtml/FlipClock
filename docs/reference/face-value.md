# FaceValue

The `FaceValue` digitizes a value that can be used `Face` and then rendered by a `Theme`. A `FaceValue` is inherently reactive, so the clock will automatically re-render when the `FaceValue` changes.

## Instantiate

<<< @/types/faceValue.function.ts

## Props

<<< @/types/FaceValueProps.type.ts

## Returns

<<< @/types/FaceValue.class.ts

## Usage

```ts
const a = faceValue(1);

a.value++;

const b = value.copy();

a.compare(b) // true
```