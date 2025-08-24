import { type Face } from '../Face';
import { faceValue, FaceValue } from '../FaceValue';
import { FlipClock } from '../FlipClock';
import { count } from '../helpers';
import { type DigitizedValues } from '../helpers/digitizer';
import { useSequencer, type UseSequencer } from '../helpers/sequencer';
import { type SequencerOptions } from './../helpers/sequencer';

/**
 * The `Alphanumeric` face options.
 * 
 * @public
 */
export type AlphanumericProps = {
    /**
     * The starting value of the clock.
     */
    value: FaceValue<string> | FaceValue<DigitizedValues>;
    
    /**
     * The target value of the clock.
     */
    targetValue?: FaceValue<string> | FaceValue<DigitizedValues>;

    /**
     * Determines if the clock increments or decrements towards the target.
     */
    method?: 'increment' | 'decrement';

    /**
     * Determines if the sequencer works forwards or backwards.
     */
    direction?: 'auto' | 'forwards' | 'backwards';

    /**
     * The sequencer instance or options used for the sequencer.
     */
    sequencer?: UseSequencer | SequencerOptions;

    /**
     * Determines how many characters to skip with each interval.
     */
    skipChars?: number;
}

/**
 * This face is designed to flip through alphanumeric values similar to a flip
 * board at a train station. The value will incrementally/decrementally flip
 * the digits until it reaches the target.
 * 
 * @public
 */
export class Alphanumeric implements Face {
    /**
     * The sequencer method.
     * 
     * @public
     */
    public readonly method: 'increment' | 'decrement' = 'increment';

    /**
     * The flip direction. If auto, the direction is automatically determined
     * based on the current value and target value.
     * 
     * @public
     */
    public readonly direction: 'auto' | 'forwards' | 'backwards' = 'auto';

    /**
     * Override how digits are sequenced.
     * 
     * @public
     */
    public readonly sequencer: UseSequencer;

    /**
     * The number of characters to skip during the incrementing/decrementing.
     * 
     * @public
     */
    public skipChars?: number;

    /**
     * The face's current value.
     * 
     * @public
     */
    public readonly value: FaceValue<string> | FaceValue<DigitizedValues>;

    /**
     * The face's target value.
     * 
     * @public
     */
    public readonly targetValue: FaceValue<string> | FaceValue<DigitizedValues>;

    /**
     * The face's current value.
     * 
     * @protected
     */
    protected currentValue: FaceValue<DigitizedValues>;
    
    /**
     * Construct the clock face.
     * 
     * @public
     */
    constructor(props: AlphanumericProps) {
        if (props.skipChars) {
            this.skipChars = props.skipChars;
        }

        if (props.direction) {
            this.direction = props.direction;
        }

        if (props.method) {
            this.method = props.method;
        }

        this.sequencer = props.sequencer && 'increment' in props.sequencer
            ? props.sequencer
            : useSequencer(props.sequencer);

        this.value = props.value;
        this.targetValue = props.targetValue ?? this.value.copy();
        this.currentValue = faceValue(this.value.digits);
    }

    /**
     * The sequencer method to call.
     * 
     * @public
     */
    public get backwards(): boolean {
        if (this.direction === 'backwards') {
            return true;
        }

        if (this.direction === 'forwards') {
            return false;
        }

        return count(this.value.digits) > count(this.targetValue.digits);
    }

    /**
     * The face's current value.
     * 
     * @public
     */
    public faceValue(): FaceValue<any> {
        return this.currentValue;
    }

    /**
     * This method is called with every interval, or every time the clock
     * should change, and handles the actual incrementing and decrementing the
     * clock's `FaceValue`.
     * 
     * @public
     */
    public interval(instance: FlipClock<Alphanumeric>): void {
        this[this.method]();

        if (this.currentValue.compare(this.targetValue)) {
            instance.stop();
        }
    }

    /**
     * Increment the value to the next sequence.
     * 
     * @public
     */
    public increment() {
        this.sequencer.increment(
            this.value, this.targetValue, this.skipChars, this.backwards
        );
        
        this.currentValue.value = this.value.digits;
    }

    /**
     * Decrement the value to the next sequence.
     * 
     * @public
     */
    public decrement() {
        this.sequencer.decrement(
            this.value, this.targetValue, this.skipChars, this.backwards
        );
        
        this.currentValue.value = this.value.digits;
    }

}

/**
 * Create a new `Alphanumeric` instance.
 * 
 * @public
 */
export function alphanumeric(props: AlphanumericProps) {
    return new Alphanumeric(props);
}
