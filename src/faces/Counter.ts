import { createEffect, createRoot } from 'solid-js';
import { Face } from '../Face';
import { FaceValue, faceValue } from '../FaceValue';
import { FlipClock } from '../FlipClock';

/**
 * The `Counter` face options.
 * 
 * @public
 */
export type CounterProps = {
    /**
     * Determines if a clock should count down instead of up.
     */
	countdown?: boolean;

    /**
     * A format function for how the counter is displayed.
     */
	format?: (value: number) => string;

    /**
     * A number formatter for how the counter is displayed.
     */
	formatter?: Intl.NumberFormat,

    /**
     * The starting value of the counter.
     */
	value?: FaceValue<number> | number;

    /**
     * The number of steps the counter ticks each interval.
     */
	step?: number;

    /**
     * The clock will automatically stop when the target value is reached.
     */
	targetValue?: FaceValue<number> | number;
}

/**
 * This face is designed to increment and decrement values. Usually this face
 * is used as a counter for 0, 1, 2, 3, 4 (etc) for something like page views.
 * 
 * @public
 */
export class Counter implements Face {

    /**
     * Should the face count down instead of up.
     * 
     * @public
     */
    public countdown: boolean = false;

    /**
     * The number to increment/decrement in the interval.
     * 
     * @public
     */
    public step: number = 1;

    /**
     * The formatted face value to display on the clock.
     * 
     * @protected
     */
    protected formattedValue: FaceValue<string>;

    /**
     * The target value determines when the counter should stop.
     * 
     * @public
     */
    public targetValue?: FaceValue<number>;

    /**
     * The current face value.
     * 
     * @public
     */
    public value: FaceValue<number>;

    /**
     * A format callback. If the `formatter` is defined, this prop is ignored.
     * 
     * @public
     */
    public format?: (number: number) => string;

    /**
     * An `Intl.NumberFormat` instance used to format the number into a string.
     * 
     * @public
     */
    public formatter?: Intl.NumberFormat;

    /**
     * Construct the clock face.
     * 
     * @public
     */
    constructor(props?: CounterProps) {
        this.value = typeof props?.value === 'number' || props?.value === undefined
            ? faceValue(props?.value ?? 0)
            : props.value;

        this.targetValue = typeof props?.targetValue === 'number'
            ? faceValue(props.targetValue)
            : props?.targetValue;

        this.format = props?.format;
        this.formatter = props?.formatter;
        this.formattedValue = createRoot(() => {
            const formattedValue = faceValue(this.formattedString);

            createEffect(() => {
                formattedValue.value = this.formattedString;
            });

            return formattedValue;
        });

        if (typeof props?.countdown === 'boolean') {
            this.countdown = props.countdown;
        }

        if (typeof props?.step === 'number') {
            this.step = props.step;
        }
    }

    /**
     * Get the number as a formatted string.
     * 
     * @public
     */
    public get formattedString() {
        if (this.formatter) {
            return this.formatter.format(this.value.value);
        }

        if (this.format) {
            return this.format(this.value.value);
        }

        return this.value.value.toString();
    }

    /**
     * The face's current value.
     * 
     * @public
     */
    public faceValue(): FaceValue<string> {
        return this.formattedValue;
    }

    /**
     * This method is called with every interval, or every time the clock
     * should change, and handles the actual incrementing and decrementing the
     * clock's `FaceValue`.
     * 
     * @public
     */
    public interval(instance: FlipClock<Counter>): void {
        if (this.countdown) {
            this.decrement(this.step);
        }
        else {
            this.increment(this.step);
        }

        if (this.value.compare(this.targetValue)) {
            instance.stop();
        }
    }

    /**
     * Substract the face value by the given value.
     * 
     * @public
     */
    public decrement(value?: number): void {
        this.value.value = this.value.value - (value ?? this.step);
    }

    /**
     * Add to the face value by the given value.
     * 
     * @public
     */
    public increment(value?: number): void {
        this.value.value = this.value.value + (value ?? this.step);
    }

}

/**
 * Create a new `Counter` instance.
 * 
 * @public
 */
export function counter(props?: CounterProps) {
    return new Counter(props);
}