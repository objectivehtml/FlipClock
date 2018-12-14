/**
 * Helpers are static functions to handle the recurring logic in the library.
 * Helpers can export one default function, or multiple functions into their
 * namespace.
 *
 * @namespace Helpers
 */
import Digitize from './Digitize';
import Language from './Language';
import Translate from './Translate';
import Validate from './Validate';

export * from './Functions';
export * from './Template';
export {
    Digitize,
    Language,
    Translate,
    Validate
}
