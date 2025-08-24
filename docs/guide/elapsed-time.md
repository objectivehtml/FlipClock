<script setup lang="ts">
import ElapsedTime from '../components/ElapsedTime.vue';
import ElapsedTimeTenSeconds from '../components/ElapsedTimeTenSeconds.vue';
import ElapsedTimeSinceEpoch from '../components/ElapsedTimeSinceEpoch.vue';
import ElapsedTimeUntilNextYear from '../components/ElapsedTimeUntilNextYear.vue';
</script>

# Elapsed Time

[Elapsed Time](../reference/elapsed-time.md) shows a [Duration](../reference/duration.md) between two `Date` objects.

## Options

<<< @/types/ElapsedTimeProps.type.ts{ts}

## Available Formats

For a full overview of [Durations](../reference/duration.md) refer to the reference.

| Format | Description                       |
| ------ | --------------------------------- |
| `Y`    | Outputs duration in years.        |
| `M`    | Outputs duration in months.       |
| `W`    | Outputs duration in weeks .       |
| `D`    | Outputs duration in days.         |
| `h`    | Outputs duration in hours.        |
| `m`    | Outputs duration in minutes.      |
| `s`    | Outputs duration in seconds.      |

::: tip
The number of formatting flags directly correlates to the minimum digits that will be shown. Consider an example where 1 year has passed, `Y` will result in `1`. `YY` will result in `01`, and `YYY` will result in `001`. This pattern can be used for all the flags.
:::

## Basic Example

This example uses the default values. It calcuates the elapsed time from when the clock starts to the current time and is formatted with `[mm]:[ss]`.

<ElapsedTime />

<<< @/components/ElapsedTime.vue#imports,parent,example{ts}

## Stops the Clock

Countdown from now to 10 seconds in the future. The clock will stop it when it reaches 0.

<ElapsedTimeTenSeconds />

<<< @/components/ElapsedTimeTenSeconds.vue#imports,parent,example{ts}

## New Years Countdown

Countdown to the next new year. Notice, this example also shows labels, which are formatted in the same structure as `[WW]:[DD]:[hh]:[mm]:[ss]`.

<ElapsedTimeUntilNextYear />

<<< @/components/ElapsedTimeUntilNextYear.vue#imports,parent,example{ts}

## Time Since Unix Epoch

Show the time since the Unix Epoch.

<ElapsedTimeSinceEpoch />

<<< @/components/ElapsedTimeSinceEpoch.vue#imports,parent,example{ts}