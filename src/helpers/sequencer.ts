import { type FaceValue } from '../FaceValue';
import { useCharset, type UseCharset, type UseCharsetOptions } from './charset';
import { type DigitizedValue, type DigitizedValues } from './digitizer';
import { matchArrayStructure, stopWhen, type MatchArrayStructureOptions, type StopPredicateFunction } from './structure';

/** 
 * The options for `useSequencer()`.
 * 
 * @public
 */
export type SequencerOptions = {
    /**
     * The charset instance or options used to generate a charset.
     */
    charset?: UseCharset | UseCharsetOptions;
    
    /**
     * The options passed the function that ensure the array structures are the same.
     */
    matchArray?: MatchArrayStructureOptions;

    /**
     * A call that determines when the sequencer should stop.
     */
    stopWhen?: StopPredicateFunction<[current?: DigitizedValue, target?: DigitizedValue | DigitizedValues ]>;

    /**
     * A number of changes that stops the sequencer.
     */
    stopAfterChanges?: number;
}

/**
 * The return type for `useSequencer()`.
 * 
 * @public
 */
export type UseSequencer = {
    /**
     * The charset used by the sequencer.
     */
    charset: string[];

    /**
     * Decrement the current value towards the target value.
     */
    decrement: (current: FaceValue<any>, target: FaceValue<any>, count?: number, backwards?: boolean) => FaceValue<any>;

    /**
     * Increment the current value towards the target value.
     */
    increment: (current: FaceValue<any>, target: FaceValue<any>, count?: number, backwards?: boolean) => FaceValue<any>;
}

/**
 * A composable that creates or uses a charset to increment and decrement
 * face values.
 * 
 * @public
 */
export function useSequencer(): UseSequencer;
export function useSequencer(options: SequencerOptions): UseSequencer;
export function useSequencer(options?: SequencerOptions): UseSequencer;
export function useSequencer(options?: SequencerOptions): UseSequencer {
    const { charset, next, prev } = (
        options?.charset && 'next' in (options.charset)
            ? options.charset
            : useCharset(options?.charset as UseCharsetOptions)
    );
    
    /**
     * Decrement the current face towards the target value. The count determines
     * how many digits are skipped. If the array structures differ, they will be
     * matched.
     * 
     * @public
     */
    function decrement(current: FaceValue<any>, target: FaceValue<any>, count: number = 1, backwards: boolean = false): FaceValue<any> {
        const walkerOptions: MatchArrayStructureOptions = {
            backwards, ...options?.matchArray
        };

        current.digits = matchArrayStructure(
            current.digits,
            target.digits,
            walkerOptions,
            stopWhen((changes, current, target) => {
                if (options?.stopWhen) {
                    return options.stopWhen(changes, current, target);
                }

                if (options?.stopAfterChanges) {
                    return changes.length < options.stopAfterChanges;
                }
                
                return true;
            }, (current, target) => {
                if (current === target) {
                    return current;
                }

                return prev(current ?? '', target, count);
            })
        );

        return current;
    }

    /**
     * Increment the current face towards the target value. The count determines
     * how many digits are skipped. If the array structures differ, they will be
     * matched.
     * 
     * @public
     */
    function increment(current: FaceValue<any>, target: FaceValue<any>, count: number = 1, backwards: boolean = false): FaceValue<any> {
        const walkerOptions: MatchArrayStructureOptions = {
            ...options?.matchArray, backwards
        };

        current.digits = matchArrayStructure(
            current.digits,
            target.digits,
            walkerOptions,
            stopWhen((changes, current, target) => {
                if (options?.stopWhen) {
                    return options.stopWhen(changes, current, target);
                }

                if (options?.stopAfterChanges) {
                    return changes.length < options.stopAfterChanges;
                }

                return true;
            }, (current, target) => {
                if (current === target) {
                    return current;
                }

                return next(current, target, count);
            })
        );

        return current;
    }
    
    return {
        charset,
        decrement,
        increment,
    } as const;
}