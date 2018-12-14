/**
 * These are a collection of helper functions, some borrowed from Lodash,
 * Underscore, etc, to provide common functionality without the need for using
 * a dependency. All of this is an attempt to reduce the file size of the
 * library.
 *
 * @namespace Helpers.Functions
 */

/**
 * Throw a string as an Error exception.
 *
 * @function error
 * @param  {string} string - The error message.
 * @return {void}
 * @memberof Helpers.Functions
 */
export function error(string) {
    throw Error(string);
}

/**
 * Check if `fn` is a function, and call it with `this` context and pass the
 * arguments.
 *
 * @function callback
 * @param  {string} string - The callback fn.
 * @param  {...*} args - The arguments to pass.
 * @return {void}
 * @memberof Helpers.Functions
 */
export function callback(fn, ...args) {
    if(isFunction(fn)) {
        return fn.call(this, ...args);
    }
}

/**
 * Round the value to the correct value. Takes into account negative numbers.
 *
 * @function round
 * @param  {value} string - The value to round.
 * @return {string} - The rounded value.
 * @memberof Helpers.Functions
 */
export function round(value) {
    return isNegativeZero(
        value = isNegative(value) ? Math.ceil(value) : Math.floor(value)
    ) ? ('-' + value).toString() : value;
}

/**
 * Returns `true` if `undefined or `null`.
 *
 * @function noop
 * @param  {value} string - The value to check.
 * @return {boolean} - `true` if `undefined or `null`.
 * @memberof Helpers.Functions
 */
export function noop(value) {
    return !isUndefined(value) && !isNull(value);
}

/**
 * Returns a function that executes the `before` attribute and passes that value
 * to `after` and the subsequent value is returned.
 *
 * @function chain
 * @param  {function} before - The first function to execute.
 * @param  {function} after - The subsequent function to execute.
 * @return {function} - A function that executes the chain.
 * @memberof Helpers.Functions
 */
export function chain(before, after) {
    return () => after(before());
}

/**
 * Returns a function that returns maps the values before concatenating them.
 *
 * @function concatMap
 * @param  {function} fn - The map callback function.
 * @return {function} - A function that executes the map and concatenation.
 * @memberof Helpers.Functions
 */
export function concatMap(fn) {
    return x => {
        return x.map(fn).reduce((x, y) => x.concat(y), []);
    }
}

/**
 * Flatten an array.
 *
 * @function flatten
 * @param  {array} value - The array to flatten.
 * @return {array} - The flattened array.
 * @memberof Helpers.Functions
 */
export function flatten(value) {
    return concatMap(value => value)(value)
}

/**
 * Deep flatten an array.
 *
 * @function deepFlatten
 * @param  {array} value - The array to flatten.
 * @return {array} - The flattened array.
 * @memberof Helpers.Functions
 */
export function deepFlatten(x) {
    return concatMap(x => Array.isArray(x) ? deepFlatten (x) : x)(x);
}

/**
 * Capitalize the first letter in a string.
 *
 * @function ucfirst
 * @param  {string} string - The string to capitalize.
 * @return {string} - The capitalized string.
 * @memberof Helpers.Functions
 */
export function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Returns the length of a deep flatten array.
 *
 * @function length
 * @param  {array} value - The array to count.
 * @return {number} - The length of the deep flattened array.
 * @memberof Helpers.Functions
 */
export function length(value) {
    return deepFlatten(value).length;
}

/**
 * Determines if a value is a negative zero.
 *
 * @function isNegativeZero
 * @param  {number} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a negative zero (`-0`).
 * @memberof Helpers.Functions
 */
export function isNegativeZero(value) {
    return 1 / Math.round(value) === -Infinity;
}

/**
 * Determines if a value is a negative.
 *
 * @function isNegative
 * @param  {number} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a negative.
 * @memberof Helpers.Functions
 */
export function isNegative(value) {
    return isNegativeZero(value) || value < 0;
}

/**
 * Determines if a value is `null`.
 *
 * @function isNull
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a `null`.
 * @memberof Helpers.Functions
 */
export function isNull(value) {
    return value === null;// || typeof value === 'null';
}

/**
 * Determines if a value is `undefined`.
 *
 * @function isNull
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a `undefined`.
 * @memberof Helpers.Functions
 */
export function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * Determines if a value is a constructor.
 *
 * @function isConstructor
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a constructor.
 * @memberof Helpers.Functions
 */
export function isConstructor(value) {
    return (value instanceof Function) && !!value.name;
}

/**
 * Determines if a value is a string.
 *
 * @function isString
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a string.
 * @memberof Helpers.Functions
 */
export function isString(value) {
    return typeof value === 'string';
}

/**
 * Determines if a value is a array.
 *
 * @function isString
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a string.
 * @memberof Helpers.Functions
 */
export function isArray(value) {
    return value instanceof Array;
}

/**
 * Determines if a value is an object.
 *
 * @function isObject
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is an object.
 * @memberof Helpers.Functions
 */
export function isObject(value) {
    const type = typeof value;
    return value != null && !isArray(value) && (
        type == 'object' || type == 'function'
    );
}

/**
 * Determines if a value is a function.
 *
 * @function isObject
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a function.
 * @memberof Helpers.Functions
 */
export function isFunction(value) {
    return value instanceof Function;
}

/**
 * Determines if a value is a number.
 *
 * @function isObject
 * @param  {*} value - The value to check.
 * @return {boolean} - Returns `true` if the value is a number.
 * @memberof Helpers.Functions
 */
export function isNumber(value) {
    return !isNaN(value);
}

/**
 * Converts a string into kebab case.
 *
 * @function kebabCase
 * @param  {string} string - The string to convert.
 * @return {string} - The converted string.
 * @memberof Helpers.Functions
 */
export function kebabCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}
