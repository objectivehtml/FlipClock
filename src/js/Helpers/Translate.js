import language from './Language';
import { isString } from './Functions';

export default function(value, from) {
    const lang = isString(from) ? language(from) : from;
    const dictionary = lang.dictionary || lang;
    return dictionary[value] || value;
};
