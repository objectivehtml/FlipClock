import { expect, it, test } from 'vitest';
import { useCharset } from '../../src/helpers/charset';
import { parse } from '../../src/helpers/parser';
import { castDigitizedGroup, castDigitizedString, castDigitizedValues, count, matchArrayStructure, stopAfterChanges, trackChanges, type Change } from '../../src/helpers/structure';


test('casting a string to a digitized string', () => {
    expect(castDigitizedString('1')).toBe('1');
    expect(castDigitizedString(['1'])).toBe('1');
    expect(castDigitizedString([['1']])).toBe('1');
    expect(castDigitizedString(undefined)).toBe(undefined);
});

test('casting a string to a digitized values', () => {
    expect(castDigitizedValues('1')).toStrictEqual(['1']);
    expect(castDigitizedValues(['1'])).toStrictEqual(['1']);
    expect(castDigitizedValues([['1']])).toStrictEqual(['1']);
    expect(castDigitizedValues(undefined)).toStrictEqual([]);
});

test('casting a string to digitized values', () => {
    expect(castDigitizedGroup('1')).toStrictEqual([['1']]);
    expect(castDigitizedGroup(['1'])).toStrictEqual([['1']]);
    expect(castDigitizedGroup([['1']])).toStrictEqual([['1']]);
    expect(castDigitizedGroup(undefined)).toStrictEqual([[]]);
});

test('matching array structure going left to right', () => {
    expect(matchArrayStructure([], [])).toStrictEqual([]);
    expect(matchArrayStructure(['1', '2', '3'], ['1', '2', '3'])).toStrictEqual(['1', '2', '3']);

    expect(matchArrayStructure(['1'], ['1', '2', '3'])).toStrictEqual(['1']);
    expect(matchArrayStructure(['1', '2'], ['1', '2', '3'])).toStrictEqual(['1', '2']);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', '2', '3'])).toStrictEqual(['1', '2', '3']);
    expect(matchArrayStructure(['1', ['2', ['3']]], ['1', '2', '3'])).toStrictEqual(['1', '2', '3']);

    expect(matchArrayStructure(['1', '2', '3'], ['1'])).toStrictEqual(['1', '2', '3']);
    expect(matchArrayStructure(['1', '2', '3'], ['1', '2'])).toStrictEqual(['1', '2', '3']);
    expect(matchArrayStructure(['1', '2', '3'], ['1', ['2', '3']])).toStrictEqual(['1', []]);
    expect(matchArrayStructure(['1', '2', '3'], ['1', ['2', ['3']]])).toStrictEqual(['1', [[]]]);

    expect(matchArrayStructure(['1', ['2']], ['1', ['2', '3']])).toStrictEqual(['1', ['2']]);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', ['2', '3']])).toStrictEqual(['1', ['2', '3']]);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', ['2']])).toStrictEqual(['1', ['2', '3']]);

    expect(matchArrayStructure(['1', [['2'], '3']], ['1', ['2', '3']])).toStrictEqual(['1', ['2', '3']]);
    expect(matchArrayStructure(['1', [['2'], '3']], ['1', [['2'], '3']])).toStrictEqual(['1', [['2'], '3']]);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', ['2', ['3']]])).toStrictEqual(['1', ['2', []]]);

    const { next } = useCharset();
    
    const walker = stopAfterChanges(2, (current, target) => {
        return next(current, target);
    });

    expect(matchArrayStructure([], ['z', 'z'], walker)).toStrictEqual(['a', 'a']);
});

test('matching array structure going right to left', () => {
    expect(matchArrayStructure(['1', '2', '3'], ['1', '2', '3'], { backwards: true })).toStrictEqual(['1', '2', '3']);

    expect(matchArrayStructure(['1'], ['1', '2', '3'], { backwards: true })).toStrictEqual(['1']);
    expect(matchArrayStructure(['1', '2'], ['1', '2', '3'], { backwards: true })).toStrictEqual(['1', '2']);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', '2', '3'], { backwards: true })).toStrictEqual(['1', '2', '3']);
    expect(matchArrayStructure(['1', ['2', ['3']]], ['1', '2', '3'], { backwards: true })).toStrictEqual(['1', '2', '3']);

    expect(matchArrayStructure(['1', '2', '3'], ['1', '2'], { backwards: true })).toStrictEqual(['1', '2', '3']);
    expect(matchArrayStructure(['1', '2', '3'], ['1', ['2', '3']], { backwards: true })).toStrictEqual(['1', []]);
    expect(matchArrayStructure(['1', '2', '3'], ['1', ['2', ['3']]], { backwards: true })).toStrictEqual(['1', [[]]]);

    expect(matchArrayStructure(['1', ['2']], ['1', ['2', '3']], { backwards: true })).toStrictEqual(['1', ['2']]);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', ['2', '3']], { backwards: true })).toStrictEqual(['1', ['2', '3']]);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', ['2']], { backwards: true })).toStrictEqual(['1', ['2', '3']]);

    expect(matchArrayStructure(['1', [['2'], '3']], ['1', ['2', '3']], { backwards: true })).toStrictEqual(['1', ['2', '3']]);
    expect(matchArrayStructure(['1', [['2'], '3']], ['1', [['2'], '3']], { backwards: true })).toStrictEqual(['1', [['2'], '3']]);
    expect(matchArrayStructure(['1', ['2', '3']], ['1', ['2', ['3']]], { backwards: true })).toStrictEqual(['1', ['2', []]]);

    expect(matchArrayStructure(['3'], ['1', '2', '3'], { backwards: true })).toStrictEqual(['3']);
});

test('incrementing the array walker after 1 change', () => {
    const { next } = useCharset();

    const subject: string[] = [], target = ['a', 'b', 'c'];

    const walker = () => stopAfterChanges(1, (current, target) => {
        return next(current, target);
    });

    expect(matchArrayStructure(subject, target, walker())).toStrictEqual(['a']);
    expect(matchArrayStructure(subject, target, walker())).toStrictEqual(['a', 'a']);
    expect(matchArrayStructure(subject, target, walker())).toStrictEqual(['a', 'b']);
    expect(matchArrayStructure(subject, target, walker())).toStrictEqual(['a', 'b', 'a']);
    expect(matchArrayStructure(subject, target, walker())).toStrictEqual(['a', 'b', 'b']);
    expect(matchArrayStructure(subject, target, walker())).toStrictEqual(['a', 'b', 'c']);
});

test('decrementing the array walker after 1 change', () => {
    const { prev } = useCharset();

    const walker = () => stopAfterChanges(1, (current, target) => {
        return prev(current, target);
    });

    const subject = ['a', 'b', 'c'], target: string[] = [];

    expect(matchArrayStructure(subject, target, { backwards: true }, walker())).toStrictEqual(['a', 'b', 'b']);
    expect(matchArrayStructure(subject, target, { backwards: true }, walker())).toStrictEqual(['a', 'b', 'a']);
    expect(matchArrayStructure(subject, target, { backwards: true }, walker())).toStrictEqual(['a', 'b', ' ']);
});

test('decrementing the array walker after 1 change', () => {
    const { next } = useCharset();

    expect(matchArrayStructure(['a'], ['b', 'b', 'b', 'b'], { backwards: true }, stopAfterChanges(4, (current, target) => {
        return next(current, target);
    }))).toStrictEqual(['b', 'a', 'a']);
});

it('parses a string to an array', () => {
    expect(parse('hello world')).toStrictEqual(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
    expect(parse('[1]')).toStrictEqual([['1']]);
    expect(parse('[1]2')).toStrictEqual([['1'], '2']);
    expect(parse('[1][2]')).toStrictEqual([['1'], ['2']]);
    expect(parse('1[2]')).toStrictEqual(['1', ['2']]);
    expect(parse('1[2]')).toStrictEqual(['1', ['2']]);
    expect(parse('\t')).toStrictEqual(['\t']);
});

it('throws an error when the parser fails', () => {
    expect(() => parse(']')).toThrow('Expected "[" or end of input but "]" found.');
    expect(() => parse('[1')).toThrow('Expected \"[\", \"]\", or any character but end of input found.');
    expect(() => parse('[[1]')).toThrow('Expected \"[\", \"]\", or any character but end of input found.');
    expect(() => parse('1]')).toThrow('Expected \"[\" or end of input but \"]\" found.');
    expect(() => parse('[1]]')).toThrow('Expected \"[\" or end of input but \"]\" found.');
    expect(() => parse('[1]]')).toThrow('Expected \"[\" or end of input but \"]\" found.');
    expect(() => parse('[1][2')).toThrow('Expected \"[\", \"]\", or any character but end of input found.');
    expect(() => parse('1[2', { startRule: 'array' })).toThrow();

    // @ts-ignore
    expect(() => parse('1[2', { startRule: 'string' })).toThrow();

    try {
        parse('[1][2', { grammarSource: 'test.md' });
    }
    catch (e: any) {
        expect(e.format([{ source: 'test.md', text: '[1][2' }]).replace(/\n/g, '')).toBe('Error: Expected \"[\", \"]\", or any character but end of input found. --> test.md:1:6  |1 | [1][2  |      ^');
    }
});

it('tracks changes', () => {
    let changes: Change<undefined|number|number[]>[] = [];
    
    const track = trackChanges<[number|number[]], number|number[]>((a, value) => {
        changes = a;

        return Array.isArray(value) ? (value.shift() ?? 0) + 1 : [value + 1];
    });

    track([1]);
    track(2);

    expect(changes).toStrictEqual([
        { 'from': [], 'to': 2 },
        { 'from': 2, 'to': [3] }
    ]);
});

it('counts digitized values', () => {
    expect(count(['1', ['2', '3']])).toBe(3);
});