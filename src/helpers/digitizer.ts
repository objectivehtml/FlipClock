import { parse } from './parser';

/**
 * A single digitized value.
 * 
 * @public
 */
export type DigitizedValue = string;

/**
 * An array of digitized values.
 * 
 * @public
 */
export type DigitizedValues = (DigitizedValue | DigitizedValues)[];

/**
 * The default empty character for digitization.
 * 
 * @public
 */
export const EMPTY_CHAR = ' ';

/**
 * The return type for `useDigitizer()`.
 * 
 * @public
 */
export type UseDigitizer = {
    digitize: (value: any) => DigitizedValues;
    isDigitized: (value: any) => boolean;
}

/**
 * Create a digiter that can be used to convert a string into arrays of
 * individual characters.
 * 
 * @public
 */
export function useDigitizer(): UseDigitizer {
    /**
     * Parse a string, number or an array into `DigitizedValues`.
     * 
     * @public
     */
    function digitize(value?: number | string | DigitizedValue | DigitizedValues): DigitizedValues {
        if (value === undefined) {
            return [];
        }

        if (typeof value === 'string') {
            return value.match(/\[|\]/) ? parse(value) : Array.from(value);
        }

        if (typeof value === 'number') {
            return Array.from(value.toString());
        }

        for (const item of value) {
            const index = value.indexOf(item);
            const response = digitize(item);

            if (typeof item == 'string') {
                value.splice(index, 1, ...response);
            }
            else {
                value.splice(index, 1, response);
            }
        }

        return value.filter(Boolean);
    }

    /**
     * Check if the value is the type `DigitizedValues`.
     * 
     * @public
     */
    function isDigitized(value: any): boolean {
        if (!Array.isArray(value)) {
            return false;
        }

        for (const i in value) {
            if (typeof value[i] === 'string' && value[i].length === 1) {
                continue;
            }

            if (!Array.isArray(value[i])) {
                return false;
            }
            else if (!value[i].length) {
                continue;
            }

            if (!isDigitized(value[i])) {
                return false;
            }
        }

        return true;
    }

    return {
        digitize,
        isDigitized
    };
}
