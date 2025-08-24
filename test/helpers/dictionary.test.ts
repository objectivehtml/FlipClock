import { expect, it } from 'vitest';
import { useDictionary } from '../../src/helpers/dictionary';

it('creates a definition from entries', () => {
    const { define, unset, translate } = useDictionary([
        ['Monday', 'Lunes']
    ]);

    unset('test');

    expect(translate('Monday')).toBe('Lunes');
    expect(translate('Tuesday')).toBe('Tuesday');

    // The setter syntax
    define('Tuesday', 'Martes');

    // The object key/value syntax.
    define({
        'Wednesday': 'Miercoles',
    });

    define([
        ['Thursday', () => 'Jueves']
    ]);

    expect(translate('Tuesday')).toBe('Martes');

    unset('Tuesday');
    unset(['Wednesday']);
    
    expect(translate('Tuesday')).toBe('Tuesday');
    expect(translate('Wednesday')).toBe('Wednesday');
    expect(translate('Thursday')).toBe('Jueves');

    expect(translate('foo', 'bar')).toBe('bar');
});

it('creates a definition from object', () => {
    const { define, unset, translate } = useDictionary({
        'Monday': 'Lunes'
    });

    unset('test');

    expect(translate('Monday')).toBe('Lunes');
    expect(translate('Tuesday')).toBe('Tuesday');

    // The setter syntax
    define('Tuesday', 'Martes');

    // The object key/value syntax.
    define({
        'Wednesday': 'Miercoles',
    });

    define([
        ['Thursday', () => 'Jueves']
    ]);

    expect(translate('Tuesday')).toBe('Martes');

    unset('Tuesday');
    unset(['Wednesday']);
    
    expect(translate('Tuesday')).toBe('Tuesday');
    expect(translate('Wednesday')).toBe('Wednesday');
    expect(translate('Thursday')).toBe('Jueves');

    expect(translate('foo', 'bar')).toBe('bar');
});