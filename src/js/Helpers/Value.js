/**
 * @namespace Helpers.Value
 */

/**
 * An array of objects with min/max ranges.
 *
 * @private
 * @type {array}
 */
const RANGES = [{
    // 0-9
    min: 48,
    max: 57
},{
    // a-z
    min: 65,
    max: 90
},{
    // A-Z
    min: 97,
    max: 122
}];

/**
 * Format a string into a new data type. Currently only supports string to
 * number conversion.
 *
 * @private
 * @function format
 * @param {string} string - The string to format.
 * @param {string} type - The data type (represented as a string) used to
 *     convert the string.
 * @return {boolean} - Returns the formatted string.
 */
function format(string, type) {
    switch(type) {
        case 'number':
            return parseFloat(string);
    }

    return string;
}

/**
 * Find the range object from the `RANGES` constant from the character given.
 * This is mainly an interval method, but can be used by faces to help
 * determine what the next value of a string should be.
 *
 * @private
 * @function format
 * @param {string} char - The char used to determine the range.
 * @param {string} type - The data type (represented as a string) used to
 *     convert the string.
 * @return {boolean} - Returns the formatted string.
 */
function findRange(char) {
    for(const i in RANGES) {
        const code = char.toString().charCodeAt(0);

        if(RANGES[i].min <= code && RANGES[i].max >= code) {
            return RANGES[i];
        }
    }

    return null;
}

/**
 * Create a string from a character code, which is returned by the callback.
 *
 * @private
 * @callback stringFromCharCodeBy
 * @param {string} char - The char used to determine the range.
 * @param {function} fn - The callback function receives `range` and `code`
 *     arguments. This function should return a character code.
 * @return {string} - Creates a string from the character code returned by the
 *     callback function.
 */
function stringFromCharCodeBy(char, fn) {
    return String.fromCharCode(
        fn(findRange(char), char.charCodeAt(0))
    );
}

/**
 * Calculate the next value for a string. 'a' becomes 'b'. 'A' becomes 'B'. 1
 * becomes 2, etc. If multiple character strings are passed, 'aa' would become
 * 'bb'.
 *
 * @function next
 * @param  {(string|number)} value - The string or number to convert.
 * @return {string} - The formatted string
 * @memberof Helpers.Value
 */
export function next(value) {
    const converted = (value)
        .toString()
        .split('')
        .map(char => stringFromCharCodeBy(char, (range, code) => {
            return !range || code < range.max ? code + 1 : range.min
        }))
        .join('');

    return format(converted, typeof value);
}

/**
 * Calculate the prev value for a string. 'b' becomes 'a'. 'B' becomes 'A'. 2
 * becomes 1, 0 becomes 9, etc. If multiple character strings are passed, 'bb'
 * would become 'aa'.
 *
 * @function prev
 * @param  {(string|number)} value - The string or number to convert.
 * @return {string} - The formatted string
 * @memberof Helpers.Value
 */
export function prev(value) {
    const converted = (value)
        .toString()
        .split('')
        .map(char => stringFromCharCodeBy(char, (range, code) => {
            return !range || code > range.min ? code - 1 : range.max
        }))
        .join('');

    return format(converted, typeof value);
}
