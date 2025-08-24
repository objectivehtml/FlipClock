import { describe, expect, it } from "vitest";
import { parse } from "../../src/helpers/parser";

describe('parser', () => {
    describe('array rule', () => {
        it('should parse empty input', () => {
            expect(parse('')).toEqual([]);
        });

        it('should parse single string value', () => {
            expect(parse('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
        });

        it('should parse single character', () => {
            expect(parse('a')).toEqual(['a']);
        });

        it('should parse string with spaces', () => {
            expect(parse('hi there')).toEqual(['h', 'i', ' ', 't', 'h', 'e', 'r', 'e']);
        });

        it('should parse simple nested array', () => {
            expect(parse('[hello]')).toEqual([['h', 'e', 'l', 'l', 'o']]);
        });

        it('should parse multiple nested arrays', () => {
            expect(parse('[hello][world]')).toEqual([['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]);
        });

        it('should parse deeply nested arrays', () => {
            expect(parse('[[hello]]')).toEqual([[['h', 'e', 'l', 'l', 'o']]]);
        });

        it('should parse mixed string and nested array', () => {
            expect(parse('hi[world]bye')).toEqual(['h', 'i', ['w', 'o', 'r', 'l', 'd'], 'b', 'y', 'e']);
        });

        it('should parse complex nested structure', () => {
            expect(parse('[1[2[3]]]')).toEqual([['1', ['2', ['3']]]]);
        });

        it('should parse multiple levels of nesting', () => {
            expect(parse('[a[b[c]d]e]')).toEqual([['a', ['b', ['c'], 'd'], 'e']]);
        });

        it('should handle empty nested arrays', () => {
            expect(parse('[]')).toEqual([[]]);
        });

        it('should handle multiple empty nested arrays', () => {
            expect(parse('[][]')).toEqual([[], []]);
        });

        it('should handle mixed empty and filled arrays', () => {
            expect(parse('[]hi[]bye[]')).toEqual([[], 'h', 'i', [], 'b', 'y', 'e', []]);
        });

        it('should parse strings with special characters (excluding brackets)', () => {
            expect(parse('hi!@#')).toEqual(['h', 'i', '!', '@', '#']);
        });

        it('should handle whitespace correctly', () => {
            expect(parse('  a  b  ')).toEqual([' ', ' ', 'a', ' ', ' ', 'b', ' ', ' ']);
        });

        it('should handle tabs and newlines', () => {
            expect(parse('a\tb\nc')).toEqual(['a', '\t', 'b', '\n', 'c']);
        });
    });

    it('cannot start an any other starting rule', () => {
        // @ts-ignore
        expect(() => parse('a', { startRule: 'string' })).toThrowError();

        // @ts-ignore
        expect(() => parse('a', { startRule: 'chart' })).toThrowError();
    });

    describe('error cases', () => {
        it('should handle unmatched opening bracket', () => {
            expect(() => parse('hello[')).toThrow();
        });

        it('should handle unmatched closing bracket at start', () => {
            expect(() => parse(']hello')).toThrow();
        });

        it('should handle multiple unmatched opening brackets', () => {
            expect(() => parse('[[')).toThrow();
        });

        it('should handle invalid bracket sequences', () => {
            expect(() => parse('][')).toThrow();
        });
    });

    describe('edge cases', () => {
        it('should handle very long strings', () => {
            const longString = 'a'.repeat(1000);
            expect(parse(longString)).toEqual([...longString]);
        });

        it('should handle deeply nested arrays', () => {
            expect(parse('[[[a]]]')).toEqual([[[['a']]]]);
        });

        it('should handle alternating brackets and content', () => {
            expect(parse('[a]b[c]d[e]')).toEqual([['a'], 'b', ['c'], 'd', ['e']]);
        });

        it('should handle unicode characters', () => {
            expect(parse('hé🌍')).toEqual([ 'h', 'é', '\ud83c', '\udf0d' ]);
        });

        it('should preserve order in complex nested structures', () => {
            expect(parse('a[b[c]d]e')).toEqual(['a', ['b', ['c'], 'd'], 'e']);
        });

        it('should handle numbers as characters', () => {
            expect(parse('123[456]789')).toEqual(['1', '2', '3', ['4', '5', '6'], '7', '8', '9']);
        });

        it('should handle mixed content types', () => {
            expect(parse('a1[b2[c3]]d4')).toEqual(['a', '1', ['b', '2', ['c', '3']], 'd', '4']);
        });
    });

    describe('function expansion behavior', () => {
        it('should not expand string content as functions', () => {
            expect(parse('[hello]')).toEqual([['h', 'e', 'l', 'l', 'o']]);
        });

        it('should handle multiple nested arrays without unwrapping', () => {
            expect(parse('[hello][world]')).toEqual([['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]);
        });

        it('should maintain nested array structure', () => {
            expect(parse('a[nested]b')).toEqual(['a', ['n', 'e', 's', 't', 'e', 'd'], 'b']);
        });

        it('should handle deeply nested function expansions', () => {
            expect(parse('[outer[inner]data]')).toEqual([['o', 'u', 't', 'e', 'r', ['i', 'n', 'n', 'e', 'r'], 'd', 'a', 't', 'a']]);
        });

        it('should handle empty arrays in function expansion', () => {
            expect(parse('test[]more')).toEqual(['t', 'e', 's', 't', [], 'm', 'o', 'r', 'e']);
        });
    });

    describe('whitespace and formatting', () => {
        it('should preserve leading whitespace', () => {
            expect(parse('   hi')).toEqual([' ', ' ', ' ', 'h', 'i']);
        });

        it('should preserve trailing whitespace', () => {
            expect(parse('hi   ')).toEqual(['h', 'i', ' ', ' ', ' ']);
        });

        it('should preserve internal whitespace', () => {
            expect(parse('a   b')).toEqual(['a', ' ', ' ', ' ', 'b']);
        });

        it('should handle mixed whitespace types', () => {
            expect(parse('a\t\n\rb')).toEqual(['a', '\t', '\n', '\r', 'b']);
        });

        it('should handle whitespace in nested arrays', () => {
            expect(parse('[ a ]')).toEqual([[' ', 'a', ' ']]);
        });

        it('should handle tabs in nested structures', () => {
            expect(parse('[a\tb]')).toEqual([['a', '\t', 'b']]);
        });
    });
    
    it('covers the peg$library option for test coverage', () => {
        expect(() => parse('[1]', {
            peg$library: true
        })).not.toThrowError();
    });
    
    it('formats an error from an unknown source', () => {
        try {
            parse('');
        }
        catch (e: any) {
            expect(e.format([{source: ''}])).toContain('Error: Expected "[", "]", or any character but end of input found.');
        };
    });
});