<script setup lang="ts">
import Counter from '../components/Counter.vue';
import CounterCountdown from '../components/CounterCountdown.vue';
import CounterButtons from '../components/CounterButtons.vue';
</script>

# Counter

[Counter](../reference/counter.md) increments are decrements a `number` in any given format. A counter can stop at a target or count indefinitely.

## Options

<<< @/types/CounterProps.type.ts{ts}

## Basic Example

The counter starts at `0` and counts indefinitely.

<Counter />

<<< @/components/Counter.vue#imports,parent,example{ts}

## Countdown

The counter starts at `10` and counts down to `0` where it stops.

<CounterCountdown />

<<< @/components/CounterCountdown.vue#imports,parent,example{ts}

## Increment and Decrement

The counter manually increments or decrements on button click. The counter will even show negative numbers.

<CounterButtons />

<<< @/components/CounterButtons.vue#imports,parent,example{ts}
<<< @/components/CounterButtons.vue#buttons{html}