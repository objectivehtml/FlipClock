import { expect, it } from 'vitest';
import { characterRange, defaultCharset, fisherYatesShuffle, range, useCharset } from '../../src/helpers/charset';

it('validates whitelisted and blacklisted characters', () => {
    const { isBlacklisted, isWhitelisted } = useCharset({
        whitelist: ['@'],
        blacklist: ['#']
    });

    expect(isWhitelisted('@')).toEqual(true);
    expect(isBlacklisted('#')).toEqual(true);
});

it('retrieves chunks of the charset going forwards and backwards', () => {
    const { charset, chunk } = useCharset();

    expect(chunk('@', 1)).toStrictEqual([' ']);
    expect(chunk('A', 1000)).toHaveLength(charset.length + 1);
    expect(chunk(':', 7)).toStrictEqual(['-', '.', ',', '!', '?', ' ', 'a']);
    expect(chunk(' ', 2)).toStrictEqual(['a', 'b']);
    expect(chunk(undefined, 1)).toStrictEqual(['a']);
    expect(chunk(undefined, 5)).toStrictEqual(['a', 'b', 'c', 'd', 'e']);
    expect(chunk(undefined, 1000)).toHaveLength(charset.length + 1);

    expect(chunk('@', -1)).toStrictEqual([' ']);
    expect(chunk('A', -1000)).toHaveLength(charset.length + 1);
    expect(chunk('"', -7)).toStrictEqual(['9', '8', '7', '6', '5', '4', '3']);
    expect(chunk(' ', -2)).toStrictEqual(['?', '!']);
    expect(chunk(undefined, -1)).toStrictEqual(['?']);
    expect(chunk(undefined, -5)).toStrictEqual(['?', '!', ',', '.', '-']);
    expect(chunk(undefined, -1000)).toHaveLength(charset.length + 1);
});

it('retrieves the next value towards the target', () => {
    const { next, prev } = useCharset({
        blacklist: ['#'],
        whitelist: ['@']
    });

    expect(next('a')).toBe('b');
    expect(next('b')).toBe('c');
    expect(next(' ')).toBeUndefined();
    expect(next(undefined, 'a')).toBe('a');
    expect(next(undefined, 'a', 2)).toBe('a');
    expect(next('9', '!')).toBe('"');
    expect(next('9', '!', 2)).toBe('\'');
    expect(next('a', '!', 100)).toBe('!');
    expect(next('@')).toBe('@');
    expect(next('@', '@')).toBe('@');
    expect(next('#', '!')).toBe('"');
    expect(next('a', 'z')).toBe('b');
    expect(next('a', 'z', 5)).toBe('f');
    expect(next('a', 'z', 100)).toBe('z');
    expect(next('!', 'a', 2)).toBe(' ');
    expect(next('!', '?', 2)).toBe('?');
    expect(next('!', '?')).toBe('?');
    expect(next('?', undefined)).toBeUndefined();

    expect(prev('b')).toBe('a');
    expect(prev('c')).toBe('b');
    expect(prev('a')).toBe(' ');
    expect(prev(' ')).toBeUndefined();
    expect(prev('a', undefined, 2)).toBeUndefined();
    expect(prev(undefined, '?')).toBe('?');
    expect(prev(undefined, '?', 2)).toBe('?');
    expect(prev('?', '.')).toBe('!');
    expect(prev('?', '.', 2)).toBe(',');
    expect(prev('?', '.', 100)).toBe('.');
    expect(prev('!', '!')).toBe('!');
    expect(prev('@', '@')).toBe('@');
    expect(prev('#', '!')).toBe('"');
    expect(prev('z', 'a')).toBe('y');
    expect(prev('z', 'a', 5)).toBe('u');
    expect(prev('z', 'a', 100)).toBe('a');
});

it('using a randomize charset', () => {
    const { chunk } = useCharset({
        shuffle: true
    });

    expect(chunk('a', 5)).not.toStrictEqual(defaultCharset);
});

it('using a custom shuffle function', () => {
    const { charset } = useCharset();

    const { chunk } = useCharset({
        shuffle: fisherYatesShuffle
    });

    expect(chunk('a', 100)).not.toStrictEqual(charset);
});

it('using a custom charset', () => {
    const { chunk } = useCharset({
        emptyChar: '$',
        charset: () => ['a', 'b', 'c', 'd', 'e', 'f']
    });

    expect(chunk('a', 1)).toStrictEqual(['b']);
    expect(chunk('a', 5)).toStrictEqual(['b', 'c', 'd', 'e', 'f']);
    expect(chunk('a', 100)).toStrictEqual(['b', 'c', 'd', 'e', 'f', '$', 'a']);
});

it('the default charset', () => {
    const { charset } = useCharset();
    
    expect(charset).toEqual(defaultCharset());
});

it('creating character ranges', () => {
    expect(characterRange('a', 'b')).toEqual(['a', 'b']);
    expect(characterRange('a', 'c')).toEqual(['a', 'b', 'c']);
    expect(characterRange('a', 'z')).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
});

it('creating ranges', () => {
    expect(range(5, 1)).toEqual([5]);
    expect(range(5, 2)).toEqual([5, 6]);
    expect(range(5, 5)).toEqual([5, 6, 7, 8, 9]);
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
});