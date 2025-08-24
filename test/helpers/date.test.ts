import { expect, it } from 'vitest';
import { pad, useDateFormats } from '../../src/helpers/date';
import { useDictionary } from '../../src/helpers/dictionary';

it('formats date strings', () => {
    const { define, format, unset } = useDateFormats();

    const date = new Date(2000, 0, 1);

    expect(format(date, 'A')).toBe('AM');
    expect(format(date, 'a')).toBe('am');
    expect(format(date, 'Q')).toBe('1');
    expect(format(date, 'YYYY')).toBe('2000');
    expect(format(date, 'YY')).toBe('00');
    expect(format(date, 'MMMM')).toBe('January');
    expect(format(date, 'MMM')).toBe('Jan');
    expect(format(date, 'MM')).toBe('01');
    expect(format(date, 'M')).toBe('1');
    expect(format(date, 'DDDD')).toBe('Saturday');
    expect(format(date, 'DDD')).toBe('Sat');
    expect(format(date, 'DD')).toBe('01');
    expect(format(date, 'D')).toBe('1');
    expect(format(date, 'HH')).toBe('00');
    expect(format(date, 'H')).toBe('0');
    expect(format(date, 'hh')).toBe('12');
    expect(format(date, 'h')).toBe('12');
    expect(format(date, 'mm')).toBe('00');
    expect(format(date, 'm')).toBe('0');
    expect(format(date, 'ss')).toBe('00');
    expect(format(date, 's')).toBe('0');
    expect(format(date, 'vvvv')).toBe('0000');
    expect(format(date, 'vvv')).toBe('000');
    expect(format(date, 'vv')).toBe('00');
    expect(format(date, 'v')).toBe('0');
    expect(format(date, '!')).toBe('!');

    const date2 = new Date(2000, 0, 1, 13);
    
    expect(format(date2, 'A')).toBe('PM');
    expect(format(date2, 'a')).toBe('pm');
    expect(format(date2, 'HH')).toBe('13');
    expect(format(date2, 'H')).toBe('13');
    expect(format(date2, 'hh')).toBe('01');
    expect(format(date2, 'h')).toBe('1');

    define('AA', date => date.getHours() < 13 ? 'a.m.' : 'p.m.');

    define({
        'AAA': date => date.getHours() < 13 ? 'A.M.' : 'P.M.',
    });

    expect(format(date, 'AA')).toBe('a.m.');
    expect(format(date, 'AAA')).toBe('A.M.');

    unset('AA');
    unset(['AAA']);

    expect(format(date, 'AA')).toBe('AMAM');
    expect(format(date, 'AAA')).toBe('AMAMAM');
});

it('formats dates with a translate function', () => {
    // An english to spanish dictionary
    const { translate } = useDictionary({
        'January': 'Enero',
        'February': 'Febrero',
        'March': 'Marzo',
        'April': 'Abril',
        'May': 'Mayo',
        'June': 'Junio',
        'July': 'Julio',
        'August': 'Agosto',
        'September': 'Septiembre',
        'October': 'Octubre',
        'November': 'Noviembre',
        'December': 'Diciembre'
    });

    const { format } = useDateFormats({
        translate
    });

    const date = new Date(2000, 0, 1);

    expect(format(date, 'MMMM')).toBe('Enero');
});

it('formats dates with a dictionary', () => {
    // An english to spanish dictionary
    const { format } = useDateFormats({
        translate: useDictionary({
            'January': 'Enero',
            'February': 'Febrero',
            'March': 'Marzo',
            'April': 'Abril',
            'May': 'Mayo',
            'June': 'Junio',
            'July': 'Julio',
            'August': 'Agosto',
            'September': 'Septiembre',
            'October': 'Octubre',
            'November': 'Noviembre',
            'December': 'Diciembre'
        })
    });

    const date = new Date(2000, 0, 1);

    expect(format(date, 'MMMM')).toBe('Enero');
});

it('pads a digit to a specified length', () => {
    expect(pad(undefined, 1)).toBe('');
    expect(pad(0, 1)).toBe('0');
    expect(pad(0, 2)).toBe('00');
    expect(pad(0, 3)).toBe('000');
});