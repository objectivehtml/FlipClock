import { useDefinitionMap, type Translator, type UseDefinitionMap, type UseDictionary } from './dictionary';
import { type UseDigitizer } from './digitizer';

/**
 * The number of days in a week.
 * 
 * @public
 */
export const daysInWeek: number = 7;

/**
 * The number of milliseconds in 1 day.
 * 
 * @public
 */
export const millisecondsInDay: number = 86400000;

/**
 * The number of milliseconds in 1 hour.
 * 
 * @public
 */
export const millisecondsInHour: number = 3600000;

/**
 * The number of milliseconds in 1 minute.
 * 
 * @public
 */
export const millisecondsInMinute: number = 60000;

/**
 * The proper names of the days in English.
 * 
 * @public
 */
export const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

/**
 * The abbreviated names of the days in English.
 * 
 * @public
 */
export const dayAbbreviations = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
];

/**
 * The proper names of the months in English.
 * 
 * @public
 */
export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * The abbreviated names of the months in English.
 * 
 * @public
 */
export const monthAbbreviations = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

/**
 * Formats a date into a string.
 * 
 * @public
 */
export type DateFlagFormatFunction = (date: Date) => string;

/**
 * The options for `useDateFormats()`.
 * 
 * @public
 */
export type UseDateFormatsOptions = {
    /**
     * The digitizer instance.
     */
    digitizer?: UseDigitizer;

    /**
     * A translate function or Dictionary.
     */
    translate?: Translator<string> | UseDictionary<string>;

    /**
     * The date format flags.
     */
    formats?: Record<string, DateFlagFormatFunction>;
}

/**
 * The return type for `useDateFormats()`.
 * 
 * @public
 */
export type UseDateFormats = UseDefinitionMap<DateFlagFormatFunction> & {
    format: (date: Date, format: string) => string
}

/**
 * Create a new date string formatter.
 * 
 * @public
 */
export function useDateFormats(): UseDateFormats;
export function useDateFormats(options: UseDateFormatsOptions): UseDateFormats;
export function useDateFormats(options?: UseDateFormatsOptions): UseDateFormats {
    const { map, define, unset } = useDefinitionMap<DateFlagFormatFunction>({
        A: (date: Date) => date.getHours() < 12 ? 'AM' : 'PM',
        a: (date: Date) => date.getHours() < 12 ? 'am' : 'pm',
        Q: (date: Date) => Math.ceil((date.getMonth() + 1) / 3).toString(),
        YYYY: (date: Date) => date.getFullYear().toString(),
        YY: (date: Date) => pad(date.getFullYear().toString().slice(2), 2),
        MMMM: (date: Date) => String(months[date.getMonth()]),
        MMM: (date: Date) => String(monthAbbreviations[date.getMonth()]),
        MM: (date: Date) => pad(date.getMonth() + 1, 2),
        M: (date: Date) => String(date.getMonth() + 1),
        DDDD: (date: Date) => String(days[date.getDay()]),
        DDD: (date: Date) => String(dayAbbreviations[date.getDay()]),
        DD: (date: Date) => pad(date.getDate(), 2),
        D: (date: Date) => String(date.getDate()),
        HH: (date: Date) => pad(date.getHours(), 2),
        H: (date: Date) => String(date.getHours()),
        hh: (date: Date) => pad(getTwelveHourFormat(date), 2),
        h: (date: Date) => getTwelveHourFormat(date),
        mm: (date: Date) => pad(date.getMinutes(), 2),
        m: (date: Date) => String(date.getMinutes()),
        ss: (date: Date) => pad(date.getSeconds(), 2),
        s: (date: Date) => String(date.getSeconds()),
        vvvv: (date: Date) => pad(date.getMilliseconds(), 4),
        vvv: (date: Date) => pad(date.getMilliseconds(), 3),
        vv: (date: Date) => pad(date.getMilliseconds(), 2),
        v: (date: Date) => String(date.getMilliseconds()),
        ...options?.formats
    });

    const translate = typeof options?.translate === 'function'
        ? options.translate
        : options?.translate?.translate;

    /**
     * Formats a date using a format string.
     * 
     * @public
     */
    function format(date: Date, str: string): string {
        const flagPattern: RegExp = new RegExp([...sort(map)].join('|'), 'g');

        return str.replace(flagPattern, key => {
            const str =  map.get(key)!(date);

            return translate?.(str) ?? str;
        });
    }

    return { map, define, format, unset };
}


/**
 * So an array based on the index position of another.
 * 
 * @public
 */
export function sort(map: Map<string, unknown>) {
    return Array.from(map.keys()).sort((a, b) => {
        if (a.length < b.length) {
            return 1;
        }

        if (a.length > b.length) {
            return -1;
        }

        return 0;
    });
}

/**
 * Left pad another value with zero if its less then the given length.
 * 
 * @public
 */
export function pad(value: string | number | undefined, length: number): string {
    if (value === undefined) {
        return '';
    }

    if (typeof value === 'number') {
        value = value.toString();
    }

    if (length < value.length) {
        return value;
    }

    return Array(length - value.length + 1).join('0') + value;
}

/**
 * Get the twelve hour format of the current date.
 * 
 * @public
 */
export function getTwelveHourFormat(date: Date): string {
    const mod: number = date.getHours() % 12;

    return String(mod === 0 ? 12 : mod);
}
