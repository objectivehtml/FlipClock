/**
 * @namespace Helpers.Validate
 */
import { isNull } from './Functions';
import { flatten } from './Functions';
import { isString } from './Functions';
import { isObject } from './Functions';
import { isFunction } from './Functions';
import { isConstructor } from './Functions';

/**
 * Validate the data type of a variable.
 *
 * @function validate
 * @param {*} value - The value to validate.
 * @param {...*} args - The data types to use for validate.
 * @return {boolean} - Returns `true`is the value has a valid data type.
 * @memberof Helpers.Validate
 */
export default function validate(value, ...args) {
    let success = false;

    flatten(args).forEach(arg => {
        if( (isNull(value) && isNull(arg)) ||
            (isObject(arg) && (value instanceof arg)) ||
            (isFunction(arg) && !isConstructor(arg) && arg(value) === true) ||
            (isString(arg) && (typeof value === arg))) {
            success = true;
        }
    });

    return success;
}
