/**
 * @namespace Helpers.Translate
 */
import language from './Language';
import { isString } from './Functions';

/**
 * Translate an English string into another language.
 * 
 * @function translate
 * @param {string} string - The string to translate.
 * @param {(string|object)} from - The language used to translate. If a string,
 *     the language is loaded into an object.
 * @return {string} - If no diction key is found, the untranslated string is
 *     returned.
 * @memberof Helpers.Translate
 */
export default function translate(string, from) {
    const lang = isString(from) ? language(from) : from;
    const dictionary = lang.dictionary || lang;
    return dictionary[string] || string;
};
