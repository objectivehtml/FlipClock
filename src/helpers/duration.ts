import { add, diffInDays, diffInHours, diffInMilliseconds, diffInMinutes, diffInMonths, diffInSeconds, diffInWeeks, diffInYears, pad } from './date';
import { useDefinitionMap, type DefineFunction, type Translator, type UnsetFunction, type UseDictionary } from './dictionary';

/**
 * The time intervals between two dates.
 * 
 * @public
 */
export type Duration = {
    /**
     * The number of years passed.
     */
    years?: number,

    /**
     * The number of months passed.
     */
    months?: number,

    /**
     * The number of weeks passed.
     */
    weeks?: number,

    /**
     * The number of days passed.
     */
    days?: number,

    /**
     * The number of hours passed.
     */
    hours?: number,

    /**
     * The number of minutes passed.
     */
    minutes?: number,

    /**
     * The number of seconds passed.
     */
    seconds?: number,

    /**
     * The number of milliseconds passed.
     */
    milliseconds?: number,
}

/**
 * The duration flag format function.
 * 
 * @public
 */
export type DurationFlagFormatter = (duration: Duration, length: number) => string;

/**
 * The duration map definition.
 * 
 * @public
 */
export type DurationMapDefinition = [keyof Duration | (keyof Duration)[], DurationFlagFormatter]

/**
 * The options for `useDurationFormats()`.
 * 
 * @public
 */
export type UseDurationFormatOptions = {
    translate?: Translator | UseDictionary,
    formats?: Record<string, DurationFlagFormatter>,
}

/**
 * The return type for `useDurationFormats()`.
 * 
 * @public
 */
export type UseDurationFormats = {
    map: Map<string, DurationMapDefinition>
    define: DefineFunction<DurationMapDefinition>
    duration: (left: Date, right: Date, keys?: (keyof Duration)[]) => Duration
    format: (left: Date, right: Date, format: string) => string
    unset: UnsetFunction
}

/**
 * A composable that creates dictionary and formatter for durations.
 * 
 * @public 
 */
export function useDurationFormats(options?: UseDurationFormatOptions): UseDurationFormats {
    const { map, define, unset } = useDefinitionMap(Object.entries<DurationMapDefinition>(
        {
            'Y': ['years', ({ years }, length) => pad(years, length)],
            'M': ['months', ({ months }, length) => pad(months, length)],
            'W': ['weeks', ({ weeks }, length) => pad(weeks, length)],
            'D': ['days', ({ days }, length) => pad(days, length)],
            'h': ['hours', ({ hours }, length) => pad(hours, length)],
            'm': ['minutes', ({ minutes }, length) => pad(minutes, length)],
            's': ['seconds', ({ seconds }, length) => pad(seconds, length)],
            'v': ['milliseconds', ({ milliseconds }, length) => pad(milliseconds, length)]
        }
    ));

    const intervals: Record<keyof Duration, [(left: Date, right: Date) => number, (date: Date, value: number) => Date]> = {
        years: [
            (left: Date, right: Date) => diffInYears(left, right),
            (date, years) => add(date, { years })
        ],
        months: [
            (left: Date, right: Date) => diffInMonths(left, right),
            (date, months) => add(date, { months })
        ],
        weeks: [
            (left: Date, right: Date) => diffInWeeks(left, right),
            (date, weeks) => add(date, { weeks })
        ],
        days: [
            (left: Date, right: Date) => diffInDays(left, right),
            (date, days) => add(date, { days })
        ],
        hours: [
            (left: Date, right: Date) => diffInHours(left, right),
            (date, hours) => add(date, { hours })
        ],
        minutes: [
            (left: Date, right: Date) => diffInMinutes(left, right),
            (date, minutes) => add(date, { minutes })
        ],
        seconds: [
            (left: Date, right: Date) => diffInSeconds(left, right),
            (date, seconds) => add(date, { seconds })
        ],
        milliseconds: [
            (left: Date, right: Date) => diffInMilliseconds(left, right),
            (date, milliseconds) => add(date, { milliseconds })
        ],
    };

    const translate = typeof options?.translate === 'function'
        ? options.translate
        : options?.translate?.translate;

    function format(start: Date, end: Date, format: string) {
        const flagPattern: RegExp = new RegExp(
            Array.from(map.keys()).map(value => `${value}+`).join('|'), 'g'
        );

        const matches = format.match(flagPattern);

        if (!matches) {
            return format;
        }

        const formatters = matches
            .map(match => map.get(match[0]))
            .filter(Boolean) as DurationMapDefinition[];

        const diff = duration(
            start, end, formatters.map(([key]) => key).flat(1)
        );

        return format.replace(flagPattern, (key) => {
            const formatter = map.get(key[0]);

            if (!formatter) {
                return key;
            }

            const str = formatter[1](diff, key.length);

            return translate?.(str) ?? str;
        });
    }

    function duration(left: Date, right: Date, keys?: (keyof Duration)[]): Duration {
        const durationKeys = Object.keys(intervals) as (keyof Duration)[];

        const sortedKeys = !keys ? durationKeys : keys.sort((a, b) => {
            if (durationKeys.indexOf(a) < durationKeys.indexOf(b)) {
                return -1;
            }

            if (durationKeys.indexOf(a) < durationKeys.indexOf(b)) {
                return 1;
            }

            return 0;
        });

        const [duration] = sortedKeys
            .map<[string, [(left: Date, right: Date) => number, (date: Date, value: number) => Date]]>(key => [key, intervals[key]])
            .reduce<[Duration, Date]>(([duration, date], [key, [diff, advance]]) => {
                const difference = diff(right, date);

                duration[key as keyof Duration] = difference;

                return [duration, advance(date, difference)];
            }, [{}, new Date(left)]);

        return duration;
    }

    return { map, define, duration, format, unset };
}