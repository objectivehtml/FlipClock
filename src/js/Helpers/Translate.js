import { isString } from './Functions';

export default function(value, from) {
    return (isString(from || 'en-us') ? language(from) : from).dictionary[value] || value;
};
