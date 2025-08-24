class Counter implements Face {
    /**
     * Should the face count down instead of up.
     *
     * @public
     */
    countdown: boolean;
    /**
     * The number to increment/decrement in the interval.
     *
     * @public
     */
    step: number;
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
    targetValue?: FaceValue<number>;
    /**
     * The current face value.
     *
     * @public
     */
    value: FaceValue<number>;
    /**
     * A format callback. If the `formatter` is defined, this prop is ignored.
     *
     * @public
     */
    format?: (number: number) => string;
    /**
     * An `Intl.NumberFormat` instance used to format the number into a string.
     *
     * @public
     */
    formatter?: Intl.NumberFormat;
    /**
     * Construct the clock face.
     *
     * @public
     */
    constructor(props?: CounterProps);
    /**
     * Get the number as a formatted string.
     *
     * @public
     */
    get formattedString(): string;
    /**
     * The face's current value.
     *
     * @public
     */
    faceValue(): FaceValue<string>;
    /**
     * This method is called with every interval, or every time the clock
     * should change, and handles the actual incrementing and decrementing the
     * clock's `FaceValue`.
     *
     * @public
     */
    interval(instance: FlipClock<Counter>): void;
    /**
     * Substract the face value by the given value.
     *
     * @public
     */
    decrement(value?: number): void;
    /**
     * Add to the face value by the given value.
     *
     * @public
     */
    increment(value?: number): void;
}