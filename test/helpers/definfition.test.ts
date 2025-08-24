import { expect, it } from 'vitest';
import { useDefinitionMap } from '../../src';

it('creates a definition map from entries', () => {
    const { define, unset, map } = useDefinitionMap([
        ['foo', 'bar'],
        ['bar', 'foo'],
        ['one', 1]
    ]);

    expect(map.get('foo')).toBe('bar');
    expect(map.get('bar')).toBe('foo');

    unset('foo');

    expect(map.get('foo')).toBeUndefined();

    unset(['bar']);

    expect(map.get('bar')).toBeUndefined();

    define('foo', 'bar');

    define({
        bar: 'foo',
        two: 2
    });

    define([
        ['three', 3]
    ]);

    expect(map.get('foo')).toBe('bar');
    expect(map.get('bar')).toBe('foo');
    expect(map.get('two')).toBe(2);
    expect(map.get('three')).toBe(3);
});

it('creates a definition map from object', () => {
    const { define, unset, map } = useDefinitionMap({
        foo: 'bar',
        bar: 'foo',
        one: 1
    });

    expect(map.get('foo')).toBe('bar');
    expect(map.get('bar')).toBe('foo');

    unset('foo');

    expect(map.get('foo')).toBeUndefined();

    unset(['bar']);

    expect(map.get('bar')).toBeUndefined();

    define('foo', 'bar');

    define({
        bar: 'foo',
        two: 2
    });

    define([
        ['three', 3]
    ]);

    expect(map.get('foo')).toBe('bar');
    expect(map.get('bar')).toBe('foo');
    expect(map.get('two')).toBe(2);
    expect(map.get('three')).toBe(3);
});