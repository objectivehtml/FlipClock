import { createSignal, type Signal } from 'solid-js';
import { DigitizedValues, UseDigitizer, useDigitizer } from './helpers/digitizer';
import { count } from './helpers/structure';

/**
 * The `FaceValue` face options.
 * 
 * @public
 */
export type FaceValueProps = {
    /**
     * The digitized values.
     */
    digits?: DigitizedValues;

    /**
     * The digitizer instance.
     */
    digitizer?: UseDigitizer;
}

/**
 * The FaceValue class digitizes the raw value and so it can be used by the
 * clock face.
 * 
 * @public
 */
export class FaceValue<T extends Exclude<unknown, Function>> {

    /**
     * Parameters that are passed to the digiter.
     * 
     * @public
     */
    public readonly digitizer: UseDigitizer;

    /**
     * The face's value.
     * 
     * @protected
     */
    protected $value: Signal<T>;

    /**
     * The face's digits.
     * 
     * @protected
     */
    protected $digits: Signal<DigitizedValues>;

    /**
     * Instantiate the face value.
     * 
     * @public
     */
    constructor(value: T, props?: FaceValueProps) {
        this.digitizer = props?.digitizer || useDigitizer();
        this.$value = createSignal<T>(value);
        this.$digits = createSignal(props?.digits ?? this.digitizer.digitize(value));
    }

    /**
     * The digitized value.
     * 
     * @public
     */
    public get digits() {
        return this.$digits[0]();
    }

    /**
     * Set the digits from a `DigitizedValues`.
     * 
     * @public
     */
    public set digits(value: DigitizedValues) {
        this.$digits[1](value);
    }

    /**
     * Get the length of the flattened digitized array.
     * 
     * @public
     */
    public get length() {
        return count(this.$digits[0]());
    }

    /**
     * Get the value.
     * 
     * @public
     */
    public get value(): T {
        return this.$value[0]();
    }

    /**
     * Set the value.
     * 
     * @public
     */
    public set value(value: Exclude<T, Function>) {
        this.$value[1](value);
        this.$digits[1](this.digitizer.digitize(value));
    }

    /**
     * Compare the face value with the given subject.
     * 
     * @public
     */
    public compare(subject?: FaceValue<any>) {
        return JSON.stringify(this.digits) === JSON.stringify(subject?.digits);
    }

    /**
     * Create a new instance with the given value.
     * 
     * @public
     */
    public copy(): FaceValue<T> {
        return new FaceValue(this.value, {
            digits: this.digits,
            digitizer: this.digitizer
        });
    }
}

/**
 * Create a new `FaceValue` instance.
 * 
 * @public
 */
export function faceValue<T>(value: T): FaceValue<T>;
export function faceValue<T>(value: T, props: FaceValueProps): FaceValue<T>;
export function faceValue<T>(value: T, props?: FaceValueProps): FaceValue<T>;
export function faceValue<T>(value: T, props?: FaceValueProps): FaceValue<T> {
    return new FaceValue(value, props);
}