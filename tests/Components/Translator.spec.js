import { each } from 'lodash';
import Arabic from '../../lang/Arabic.json';
import Czech from '../../lang/Czech.json';
import English from '../../lang/English.json';
import Translator from '../../src/js/Components/Translator.js';

test('Test loading different languages', () => {
    const instance = new Translator();

    expect(instance.loadLanguage('arabic').name).toBe('Arabic');
    expect(instance.loadLanguage('czech').name).toBe('Czech');
    expect(instance.loadLanguage('english').name).toBe('English');
    expect(instance.loadLanguage('spanish').name).toBe('Spanish');
});

test('Test translating the Arabic language', () => {
    const instance = new Translator({
        language: 'arabic'
    });

    each(Arabic.dictionary, (value, key) => {
        expect(instance.localize(key)).toBe(value);
    });
});

test('Test translating the Czech language', () => {
    const instance = new Translator({
        language: 'czech'
    });

    each(Czech.dictionary, (value, key) => {
        expect(instance.localize(key)).toBe(value);
    });
});

test('Test translating the English language', () => {
    const instance = new Translator({
        language: 'english'
    });

    each(English.dictionary, (value, key) => {
        expect(instance.localize(key)).toBe(value);
    });
});
