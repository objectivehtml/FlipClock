<script setup lang="ts">
import Alphanumeric from '../components/Alphanumeric.vue';
import AlphanumericBackwards from '../components/AlphanumericBackwards.vue';
import AlphanumericShuffle from '../components/AlphanumericShuffle.vue';
</script>

# Alphanumeric

[Alphanumeric](../reference/alphanumeric.md) works like an analog flipboard at a train station. This face makes heavy use of the [Sequencer](../reference/sequencer.md) to increment and decrement the clock.

## Options

<<< @/types/AlphanumericProps.type.ts{ts}

## Basic Example

This basic example demonstrates a clock flipping from `Hellow World!` to `This is FlipClock.js`. The clock stops after `3` changes and skips `5` characters at a time until it reaches its destination. `stopAfterChanges` controls how many characters are being flipped at a single time. Adjusting the `skipChars` option will determine how fast the clock reaches its target value.

<Alphanumeric />

<<< @/components/Alphanumeric.vue#imports,parent,example{ts}

## Flip Backwards

The clock will automatically flip backwards when the target value length is less than the current value length.

<AlphanumericBackwards />

<<< @/components/AlphanumericBackwards.vue#imports,parent,example{ts}

## Shuffle the Charset

Shuffling the charset randomly flips to characters until it reaches the target value. Many times shuffling the charset will result in the clock reaching the target faster because it doesn't have to flip through the entire sequence to reach its target.

<AlphanumericShuffle />

<<< @/components/AlphanumericShuffle.vue#imports,parent,example{ts}