import { add } from "date-fns";
import { expect, it } from "vitest";
import { getFilteredDuration, useDurationFormats } from "../../src/helpers/duration";

it('gets a filtered duration', () => {
    const date = new Date;

    expect(getFilteredDuration(date, add(date, {
        years: 1, months: 2, weeks: 1, days: 1, hours: 1, minutes: 1, seconds: 1
    }), ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'])).toStrictEqual({
        years: 1,
        months: 2,
        weeks: 1,
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 1
    });
    
    expect(getFilteredDuration(date, add(date, {days: 1, hours: 12}), ['days', 'hours', 'minutes'])).toStrictEqual({days: 1, hours: 12, minutes: 0});
    expect(getFilteredDuration(date, add(date, {years: 1}), ['years'])).toStrictEqual({years: 1});
});

it('formats the duration between two dates', () => {
    const { format } = useDurationFormats();

    const date = new Date;

    expect(format(date, add(date, {years: 1}), 'hh:mm')).toBe('8760:00');
    expect(format(date, add(date, {months: 1}), 'hh:mm')).toBe('744:00');
    expect(format(date, add(date, {weeks: 1}), 'hh:mm')).toBe('168:00');
    expect(format(date, add(date, {days: 1}), 'hh:mm')).toBe('24:00');
    expect(format(date, add(date, {hours: 1}), 'hh:mm')).toBe('01:00');
    expect(format(date, add(date, {minutes: 1}), 'hh:mm')).toBe('00:01');
    expect(format(date, add(date, {seconds: 1}), 'hh:mm')).toBe('00:00');

    expect(format(date, add(date, {days: 1, hours: 1, minutes: 30}), 'hhh:mm')).toBe('025:30');
    expect(format(date, add(date, {months: 1, days: 1, hours: 12}), 'DD:hh:mm:mm')).toBe('32:12:00:00');
    expect(format(date, add(date, {years: 2, months: 6, weeks: 2, days: 1, hours: 12, minutes: 30, seconds: 10}), 'YY:MM:DD:hh:mm:ss')).toBe('02:06:15:12:30:10');
});