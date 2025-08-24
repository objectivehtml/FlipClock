# Duration

Format the difference between two `Date`'s' into a `string` or `DigitizedValues` using a format string. Just like `useDateFormats()`, you can define your own format flags to either override the defaults formats or add more.

## Instaniate

<<< @/types/useDurationFormats.function.ts{TS}

## Returns

<<< @/types/UseDurationFormats.type.ts{TS}

## Usage

```ts
const { duration, format } = useDurationFormats();

const start = new Date('2024-01-01');
const end = new Date('2025-01-01');

duration(start, end, ['weeks', 'days']); // {weeks: 52, days: 0}
duration(start, endm ['hours']); // {hours: 8760}

format(start, end, 'Y D'); // '1 0'
format(start, end, 'YYYY DD'); // '0001 00'
```

## Intervals

Should you need to calculate the duration between two points you can do so using `duration()`.

```ts
const { duration } = useDurationFormats();

duration(
    new Date('2024-01-01'),
    new Date('2025-01-01'),
    ['weeks', 'days']
); // returns {weeks: 52, days: 0}

duration(
    new Date('2024-01-01'),
    new Date('2024-01-02'),
    ['hours']
); // returns {hours: 24}
```

::: tip
These are just a few examples and far from complete. If you want to see a feature-complete example, check `tests/helpers/duration.spec.ts` in the repo.
:::

## Available Formats

| Format | Description                       |
| ------ | --------------------------------- |
| `Y`    | Outputs duration in years.        |
| `M`    | Outputs duration in months.       |
| `W`    | Outputs duration in weeks.        |
| `D`    | Outputs duration in days.         |
| `h`    | Outputs duration in hours.        |
| `m`    | Outputs duration in minutes.      |
| `s`    | Outputs duration in seconds.      |