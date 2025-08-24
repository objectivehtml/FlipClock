import { add, differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks, differenceInYears, set, type Duration } from "date-fns";
import { pad } from "./date";

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
export type DurationMapDefinition = [keyof Duration, DurationFlagFormatter]

const unitConverters = {
    years: differenceInYears,
    months: differenceInMonths,
    weeks: differenceInWeeks,
    days: differenceInDays,
    hours: differenceInHours,
    minutes: differenceInMinutes,
    seconds: differenceInSeconds
} as const;

const unitAdders = {
    years: (date: Date, value: number) => add(date, { years: value }),
    months: (date: Date, value: number) => add(date, { months: value }),
    weeks: (date: Date, value: number) => add(date, { weeks: value }),
    days: (date: Date, value: number) => add(date, { days: value }),
    hours: (date: Date, value: number) => add(date, { hours: value }),
    minutes: (date: Date, value: number) => add(date, { minutes: value }),
    seconds: (date: Date, value: number) => add(date, { seconds: value })
} as const;

/**
 * Get duration between two dates with only specified keys
 * 
 * @public
 */
export function getFilteredDuration<T extends keyof Duration>(
    start: Date | number,
    end: Date | number,
    keys: T[]
): Pick<Duration, T> {
    return keys
        .sort((a, b) => Object.keys(unitConverters).indexOf(a as string) - Object.keys(unitConverters).indexOf(b as string))
        .reduce((carry, key) => {
            const converter = unitConverters[key as keyof typeof unitConverters];
            const adder = unitAdders[key as keyof typeof unitAdders];
            const value = converter(carry.end, carry.start);

            return {
                ...carry,
                result: { ...carry.result, [key]: value },
                start: adder(carry.start, value)
            };
        }, {
            result: {} as Pick<Duration, T>,
            start: new Date(start),
            end: new Date(end)
        }).result;
}

/**
 * The return type for `useDurationFormats()`.
 * 
 * @public
 */
export type UseDurationFormats = {
    /**
     * Format the start and end date into a string.
     */
    format: (start: Date, end: Date, format: string) => string
}

export function useDurationFormats(): UseDurationFormats {
    const flags: Record<keyof Duration, string> = {
        years: 'Y',
        months: 'M',
        weeks: 'W',
        days: 'D',
        hours: 'h',
        minutes: 'm',
        seconds: 's'
    };

    function format(start: Date, end: Date, format: string) {
        const flagPattern: RegExp = new RegExp(
            Object.values(flags).map(value => `${value}+`).join('|'), 'g'
        );

        const durationKeys = format.match(flagPattern)
            ?.map(value => value[0])
            .filter((value, index, self) => self.indexOf(value) === index)
            .reduce<(keyof Duration)[]>((carry, flag) => {
                const match = Object.keys(flags).find(
                    (key) => flags[key as keyof Duration] === flag
                ) as keyof Duration;

                return [...carry, match];
            }, [])!;
        
        const duration = getFilteredDuration(
            set(new Date(start), {milliseconds: 0}),
            set(new Date(end), {milliseconds: 0}),
            durationKeys
        );

        const entries = Object.entries(duration) as [keyof Duration, number][];
        
        return entries.reduce((carry, [key, value]) => {
            const pattern = new RegExp(`${flags[key]}+`, 'g');

            return carry.replace(pattern, flag => {
                return pad(Math.abs(value), flag.length);
            });
        }, format);        
    }
    
    return {
        format
    };
}