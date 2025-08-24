<script setup lang="ts">
import Clock from '../components/Clock.vue';
import Counter from '../components/Counter.vue';
</script>

# Clock Faces

The [Face](../reference/face.md) provides unique functionality to each clock. Consider a stop watch, a lunar clock, or counter – these all have different functions around time. The `Face` in FlipClock.js is no different. Each face has different options and methods, but each share a minimal unified API.

## Interface

`faceValue()` and `interval()` are the only methods that are required on a face. Everything else is unique to each face.

<<< @/types/Face.interface.ts

## Available Faces

FlipClock.js provides 4 unique faces.

1. [Clock](./clock.md)
2. [Elapsed Time](./elapsed-time.md)
3. [Counter](./counter.md)
4. [Alphanumeric](./alphanumeric.md)