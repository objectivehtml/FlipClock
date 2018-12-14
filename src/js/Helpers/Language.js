/**
 * @namespace Helpers.Language
 */
import * as LANGUAGES from '../Languages';

/**
 * Return the language associated with the key. Returns `null` if no language is
 * found.
 * 
 * @function language
 * @param  {string} name - The name or id of the language.
 * @return {object|null} - The language dictionary, or null if not found.
 * @memberof Helpers.Language
 */
export default function language(name) {
    return name ? LANGUAGES[name.toLowerCase()] || Object.values(LANGUAGES).find(value => {
        return value.aliases.indexOf(name) !== -1;
    }) : null;
}
