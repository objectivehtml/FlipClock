import { isNull } from './Functions';
import { flatten } from './Functions';
import { isClass } from './Functions';
import { isString } from './Functions';
import { isObject } from './Functions';
import { isFunction } from './Functions';

export default function validate(value, ...args) {
    let success = false;

    flatten(args).forEach(arg => {
        if( (isNull(value) && isNull(arg)) ||
            (isObject(arg) && (value instanceof arg)) ||
            (isFunction(arg) && !isClass(arg) && arg(value) === true) ||
            (isString(arg) && (typeof value === arg))) {
            success = true;
        }
    });

    return success;
}
