import { type DigitizedValue, type DigitizedValues } from './digitizer';

/**
 * The options for matchArrayStructure().
 * 
 * @public
 */

export type MatchArrayStructureOptions = {
    backwards?: boolean;
}

/**
 * The callback for matchArrayStructure().
 * 
 * @public
 */
export type MatchArrayStructureCallback = Callback<[value?: DigitizedValue, target?: DigitizedValue | DigitizedValues], DigitizedValue | undefined>

/**
 * Match the structure of the current value to the target.
 * 
 * @public
 */
export function matchArrayStructure(current: DigitizedValues, target: DigitizedValues, fn?: MatchArrayStructureCallback): DigitizedValues
export function matchArrayStructure(current: DigitizedValues, target: DigitizedValues, options: MatchArrayStructureOptions | undefined, fn?: MatchArrayStructureCallback): DigitizedValues
export function matchArrayStructure(current: DigitizedValues, target: DigitizedValues, options?: MatchArrayStructureOptions | MatchArrayStructureCallback, fn?: MatchArrayStructureCallback): DigitizedValues {
    // Allow for the method overloading. If options is a function, assign it.
    if (typeof options === 'function') {
        fn = options;
        options = {};
    }
    else if (!options) {
        options = {};
    }
    
    const forwards = !options.backwards;
        
    function recurse(current: DigitizedValues | DigitizedValue | undefined, target: DigitizedValues | DigitizedValue): DigitizedValues | DigitizedValue | undefined {
        // If target is a digit group, then loop through them and recursively
        // iterate over the groups.
        if (isDigitizedGroup(target)) {
            // Cast the current value to a digitized group.
            current = castDigitizedGroup(current);

            // Loop through the current using the max length of target and
            // current. This recursively interates through the arrays
            // regardless of which is longer.
            const length = Math.max(target.length, current.length);
          
            for (let i = forwards ? 0 : length - 1; forwards ? i < length : i >= 0; forwards ? i++ : i--) {
                // If the current value doesn't exist, recurively match the
                // target array against an empty array to match the structure.
                // If the current value exists recursively match against target.
                const value = !current[i]
                    ? recurse([], target[i] as DigitizedValue | DigitizedValues)
                    : recurse(current[i], target[i] as DigitizedValue | DigitizedValues);

                // This typescript could be improved. It is cast to `any`
                // because `DigitizedValues` doesn't accept `undefined`. We
                // should probably add a placeholder type to accept undefined
                // and recast to `DigitizedValues`. But this hack is fine for
                // now. The loop below removes the undefined so its still
                // guaranteed to be typesafe.
                if (current[i]) {
                    current[i] = value as DigitizedValue | DigitizedValues;
                }
                else {
                    current.push(value as DigitizedValue | DigitizedValues);
                }
            }
            
            // Remove the undefined items in the array. Use this instead of
            // filter to avoid copying the array.
            for (let i = 0; i < current.length; i++) {
                if (current[i] === undefined) {
                    current.splice(i, 1);
                }
            }
    
            return current;
        }

        // If the target is an array of digitized values, then recursively
        // force the current value to be an array of digitized values.
        if (Array.isArray(target) && !isDigitizedGroup(target)) {
            current = castDigitizedValues(current);

            // Loop over the existing digitized value to ensure the digits are
            // valid and gives the walker a chance to touch it. The walker will
            // touch the existing digits before adding new ones or removing
            // excess digits.
            let i = 0;

            while (i < current.length) {
                const currentIndex = forwards ? i : current.length - 1 - i;
                const targetIndex = forwards ? i : target.length - 1 - i;

                // Again we type `any` to because we remove undefined below.
                current[currentIndex] = recurse(
                    current[currentIndex], target[targetIndex] as DigitizedValue | DigitizedValues
                ) as any;

                if (current[currentIndex] === undefined) {
                    current.splice(currentIndex, 1);
                }
                else {
                    i++;
                }
            }
                        
            // If the current length is less than the target length, recursively
            // loop through it an add the digits. If a walker is used, it can
            // add the values.
            for (
                let i = forwards ? current.length : target.length - 1;
                forwards ? i < target.length : i >= current.length;
                forwards ? i++ : i--
            ) {
                const response = recurse(undefined, target[i] as DigitizedValue | DigitizedValues);

                // If the response gets undefined, just break the array and
                // assume the manipulation has finished.
                if (response === undefined) {
                    break;
                }

                // If we are still here, the push the response 
                current.push(response);
            }
            
            return current;
        }
        
        return fn
            ? fn(castDigitizedString(current), target)
            : castDigitizedString(current); 
    }

    // Recursively match the current and target array structures.
    return recurse(current, target) as DigitizedValues;
}

/**
 * Cast a value to a string.
 * 
 * @public
 */
export function castDigitizedString(value?: DigitizedValue | DigitizedValues): DigitizedValue | undefined {
    if (Array.isArray(value)) {
        return castDigitizedString(value[0]);
    }

    return value;
}

/**
 * Cast a value to an array of strings.
 * 
 * @public
 */
export function castDigitizedValues(value?: DigitizedValue | DigitizedValues): DigitizedValue[] {
    if (isDigitizedGroup(value)) {
        return (value as DigitizedValue[]).flat(Infinity);
    }

    if (Array.isArray(value)) {
        return value as DigitizedValue[];
    }
    
    if (value === undefined) {
        return [];
    }

    return [value];
}

/**
 * Cast a value to a array of digitized arrays.
 * 
 * @public
 */
export function castDigitizedGroup(value?: DigitizedValue | DigitizedValues): DigitizedValues {
    if (isDigitizedGroup(value)) {
        return value as DigitizedValues;
    }

    if (Array.isArray(value)) {
        return [value];
    }

    if (value === undefined) {
        return [[]];
    }

    return [[value]];
}

/**
 * Determines if the value is a digitized group, which is an array of digitized
 * values.
 * 
 * @public
 */
export function isDigitizedGroup(value: DigitizedValues | DigitizedValue | undefined) {
    if (!Array.isArray(value) || !value.length) {
        return false;
    }

    for (const i in value) {
        if (Array.isArray(value[i])) {
            return true;
        }
    }

    return false;
}

/**
 * Counts the digits recursively.
 * 
 * @public 
 */
export function count(values: DigitizedValues) {
    function recurse(values: DigitizedValues, count: number = 0) {
        for (const value of values) {
            if (Array.isArray(value)) {
                count += recurse(value);
            }
            else {
                count += value.length;
            }
        }

        return count;
    }

    return recurse(values);
}

export type Callback<P extends CallbackParams<any[]>, R = undefined> = (...args: P) => R;

export type CallbackParams<T> = T extends any[] ? T : never; 

/**
 * A change object that tracks changes within an iterator.
 * 
 * @public
 */
export type Change<R> = {
    from: R,
    to: R
}

/**
 * A readonly object that when returned will stop an iterator.
 */
export type Stop = Readonly<{
    stop: true
}>

/**
 * Utility function to stop an iterator.
 * 
 * @public
 */
export function stop(): Stop {
    return { stop: true };
}

/**
 * Call for for `trackChanges()`.
 * 
 * @public
 */
export type TrackChangesCallback<P extends any[], R, C = P[0]|undefined> = (changes: Change<C>[], ...args: P) => R | Stop;

/**
 * Create a callback with the values that can be tracked.
 * 
 * @public
 */
export function trackChanges<P extends any[], R>(fn: TrackChangesCallback<P, R>): Callback<P, R> {
    const changes: Change<R>[] = [];

    return (...args: P) => {
        const [ value ] = args;
        
        const originalValue = typeof value === 'object' || Array.isArray(value)
            ? JSON.stringify(value)
            : value;

        const stopOrValue = fn(changes, ...args);

        if (stopOrValue
            && typeof stopOrValue === 'object'
            && 'stop' in stopOrValue) {
            return value;
        }

        const response = stopOrValue;

        const newValue = typeof response === 'object' || Array.isArray(response)
            ? JSON.stringify(response)
            : response;

        if (originalValue !== newValue) {
            changes.push({
                from: value,
                to: response
            });
        }

        return response;
    };
}

/**
 * Determines if a iterator should stop.
 * 
 * @public
 */
export type StopPredicateFunction<T extends CallbackParams<any[]> = any[]> = TrackChangesCallback<T, boolean>;

/**
 * Stop the walker using a predicate function. Return `false` to stop and `true`
 * to continue. The predicate is ran before the callback function.
 * 
 * @public
 */
export function stopWhen<P extends CallbackParams<any[]>, R>(predicate: StopPredicateFunction<P>, fn: Callback<P, R>) {
    return trackChanges<P, R>((changes, ...args: P) => {
        if (!predicate(changes, ...args)) {
            return stop();
        }
        
        return fn(...args);
    });
}

/**
 * Stop the walker after X number of changes.
 * 
 * @public
 */
export function stopAfterChanges<P extends CallbackParams<any[]>, R>(totalChanges: number, fn: Callback<P, R>) {
    return stopWhen<P, R>((changes, ..._: P) => {
        return changes.length < totalChanges;
    }, fn);
}