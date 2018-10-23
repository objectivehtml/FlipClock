import { flatten } from './Functions';
import { deepFlatten } from './Functions';

export default function digitize(value, options = {}) {
    options = Object.assign({
        minimumDigits: 0,
        prependLeadingZero: true
    }, options);

    function prepend(number) {
        const shouldPrependZero = options.prependLeadingZero &&
            number.toString().split('').length === 1;

        return (shouldPrependZero ? '0' : '').concat(number);
    }

    function digits(arr, min) {
        const length = deepFlatten(arr).length;

        if(length < min) {
            for(let i = 0; i < min - length; i++) {
                arr[0].unshift('0');
            }
        }

        return arr;
    }

    return digits(flatten([value]).map(number => {
        return flatten(deepFlatten([number]).map(number => {
            return prepend(number).split('');
        }));
    }), options.minimumDigits || 0);
}
