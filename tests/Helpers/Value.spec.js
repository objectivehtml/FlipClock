import { next } from '../../src/js/Helpers/Value';
import { prev } from '../../src/js/Helpers/Value';
import { deepFlatten } from '../../src/js/Helpers/Functions';

test('next()', () => {
    expect(next(1)).toBe(2);
    expect(next('1')).toBe('2');
    expect(next('9')).toBe('0');
    expect(next(9)).toBe(0);
    expect(next('a')).toBe('b');
    expect(next('aa')).toBe('bb');
    expect(next('z')).toBe('a');
    expect(next('A')).toBe('B');
    expect(next('AA')).toBe('BB');
    expect(next('Z')).toBe('A');
});

test('prev()', () => {
    expect(prev(2)).toBe(1);
    expect(prev('2')).toBe('1');
    expect(prev('0')).toBe('9');
    expect(prev(0)).toBe(9);
    expect(prev('z')).toBe('y');
    expect(prev('zz')).toBe('yy');
    expect(prev('a')).toBe('z');
    expect(prev('Z')).toBe('Y');
    expect(prev('ZZ')).toBe('YY');
    expect(prev('A')).toBe('Z');
});
