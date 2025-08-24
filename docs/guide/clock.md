<script setup lang="ts">
import Clock from '../components/Clock.vue';
import ClockTwentyFourHour from '../components/ClockTwentyFourHour.vue';
</script>

# Clock

[Clock](../reference/clock.md) shows a `Date` object in any given format.

## Options

<<< @/types/ClockProps.type.ts{ts}

## Available Formats

For a full overview of [Date Formatting](../reference/date.md) refer to the reference.

| Format | Description                 | Outputs   |
| ------ | --------------------------- | --------- |
| `Q`    | The quarter year (1-4)      | `1`       |
| `YYYY` | 4 digit year                | `2024`    |
| `YY`   | 2 digit year                | `24`      |
| `M`    | 1 digit month               | `1`       |
| `MM`   | 2 digit month               | `01`      |
| `MMM`  | Abbreviated month           | `Jan`     |
| `MMMM` | The full month              | `January` |
| `D`    | 1 digit day of the month    | `1`       |
| `DD`   | 2 digit day of the month    | `01`      |
| `DDD`  | Abbreviated day of the week | `Mon`     |
| `DDDD` | Full day of the week        | `Monday`  |
| `H`    | 1 digit hour (1-24)         | `1`       |
| `HH`   | 2 digit hour (01-24)        | `01`      |
| `h`    | 1 digit hour (1-12)         | `1`       |
| `hh`   | 2 digit hour (01-12)        | `01`      |
| `m`    | 1 digit minute              | `1`       |
| `mm`   | 2 digit minute              | `01`      |
| `s`    | 1 digit second              | `1`       |
| `ss`   | 2 digit second              | `01`      |
| `v`    | 1 digit millisecond         | `1`       |
| `vv`   | 2 digit millisecond         | `01`      |
| `vvv`  | 1 digit millisecond         | `001`     |
| `vvvv` | 2 digit millisecond         | `0001`    |
| `A`    | "AM" or "PM"                | `AM`      |
| `a`    | "am" or "pm"                | `am`      |

## Basic Example

This example uses the default values. It starts on the current time and is formatted with `[hh]:[mm]:[ss][A]`.

<Clock />

<<< @/components/Clock.vue#imports,parent,example{ts}

## 24-Hour Clock

Like real life, a clock is not always showing the current time. This example shows a 24-hour clock that starts on a specific date in the past. 

<ClockTwentyFourHour />

<<< @/components/ClockTwentyFourHour.vue#imports,parent,example{ts}

## Digitizing

Digitizing in the process by which individual characters are display on a clock. Consider the following format: `[hh]:[mm]:[ss][A]`. The letters are date formatting flags. The brackets denote groups. Groups are not required, but allow for more control over the markup and styling of the clock.