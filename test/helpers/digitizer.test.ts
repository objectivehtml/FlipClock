import { expect, it } from 'vitest';
import { useDigitizer } from '../../src/helpers/digitizer';

it('digitizes and undigitizes values', () => {
    const { digitize } = useDigitizer();

    expect(digitize(undefined)).toEqual([]);
    expect(digitize(' ')).toEqual([' ']);
    expect(digitize('  ')).toEqual([' ', ' ']);
    expect(digitize('a ')).toEqual(['a', ' ']);
    expect(digitize('123')).toEqual(['1', '2', '3']);
    expect(digitize(['abc', ['1'], 'def'])).toEqual(['a', 'b', 'c', ['1'], 'd', 'e', 'f']);
    expect(digitize(['a', 'b', 'c', ['1'], 'd', 'e', 'f'])).toEqual(['a', 'b', 'c', ['1'], 'd', 'e', 'f']);
    expect(digitize(['1', '2', '3'])).toEqual(['1', '2', '3']);
    expect(digitize(['1', ['23']])).toEqual(['1', ['2', '3']]);
    expect(digitize(['1', 23])).toEqual(['1', ['2', '3']]);
    expect(digitize(['1', ['2', '3']])).toEqual(['1', ['2', '3']]);
});

it('digitizes array structures', () => {
    const { digitize } = useDigitizer();

    expect(digitize('[123]')).toStrictEqual([['1', '2', '3']]);
    expect(digitize('[1][2][3]')).toStrictEqual([['1'], ['2'], ['3']]);
    expect(digitize('[1[2[3]]]')).toStrictEqual([['1', ['2', ['3']]]]);
    expect(digitize(['[1[2[3]]]', '[4[5]]'])).toStrictEqual([['1', ['2', ['3']]], ['4', ['5']]]);
    expect(digitize(['[aa][bb]', '[cc][dd]'])).toStrictEqual([['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd']]);
});

it('checks if a value is a digitized array', () => {
    const { isDigitized } = useDigitizer();

    expect(isDigitized('1')).toBe(false);
    expect(isDigitized(1)).toBe(false);
    expect(isDigitized(['1', 1])).toBe(false);
    expect(isDigitized([' '])).toBe(true);
    expect(isDigitized(['1', ['2', ['3', []]]])).toBe(true);
    expect(isDigitized(['1', ['2', ['3', ['45']]]])).toBe(false);
    expect(isDigitized(['not', ['v', 'a', 'l', 'i', 'd']])).toBe(false);
});

// it('comparing face values', () => {
//     expect(new FaceValue('hello world').compare(new FaceValue('hello world'))).toBe(true);
//     expect(new FaceValue('hello').compare(new FaceValue('world'))).toBe(false);
//     expect(new FaceValue(['a', ['b', ['c']]]).compare(new FaceValue(['a', ['b', ['c']]]))).toBe(true);
// });