import { expect, it } from 'vitest';
import { faceValue } from '../src/FaceValue';

it('digitizes numbers', () => {
    const value = faceValue(100);

    expect(value.value).toBe(100);
    expect(value.digits).toStrictEqual(['1', '0', '0']);
    expect(value.length).toBe(3);
    expect(value.compare(faceValue(100))).toBe(true);

    value.value = 1000;

    expect(value.value).toBe(1000);
    expect(value.digits).toStrictEqual(['1', '0', '0', '0']);
    expect(value.length).toBe(4);

    value.digits = ['1', '0', '0', '1'];

    expect(value.value).toBe(1000);
    expect(value.digits).toStrictEqual(['1', '0', '0', '1']);
});

it('digitizes strings', () => {
    const value = faceValue('foo');

    expect(value.value).toBe('foo');
    expect(value.digits).toStrictEqual(['f', 'o', 'o']);
    expect(value.length).toBe(3);
    expect(value.compare(faceValue('foo'))).toBe(true);

    value.value = 'bar';

    expect(value.value).toBe('bar');
    expect(value.digits).toStrictEqual(['b', 'a', 'r']);
    expect(value.length).toBe(3);

    value.digits = ['f', 'o', 'o'];

    expect(value.value).toBe('bar');
    expect(value.digits).toStrictEqual(['f', 'o', 'o']);
});

it('creates a copy', () => {
    const value = faceValue('foo');

    expect(value.copy().compare(value)).toBe(true);

    value.value = 'bar';

    expect(value.copy().compare(value)).toBe(true);

    value.digits = ['f', 'o', 'o'];

    expect(value.copy().compare(value)).toBe(true);

    const copy = value.copy();
    
    value.value = 'bar';

    expect(copy.compare(value)).toBe(false);
});