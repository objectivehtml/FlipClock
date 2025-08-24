class Alphanumeric implements Face {
    /**
     * The sequencer method.
     *
     * @public
     */
    readonly method: 'increment' | 'decrement';
    /**
     * The flip direction. If auto, the direction is automatically determined
     * based on the current value and target value.
     *
     * @public
     */
    readonly direction: 'auto' | 'forwards' | 'backwards';
    /**
     * Override how digits are sequenced.
     *
     * @public
     */
    readonly sequencer: UseSequencer;
    /**
     * The number of characters to skip during the incrementing/decrementing.
     *
     * @public
     */
    skipChars?: number;
    /**
     * The face's current value.
     *
     * @public
     */
    readonly value: FaceValue<string> | FaceValue<DigitizedValues>;
    /**
     * The face's target value.
     *
     * @public
     */
    readonly targetValue: FaceValue<string> | FaceValue<DigitizedValues>;
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
    constructor(props: AlphanumericProps);
    /**
     * The sequencer method to call.
     *
     * @public
     */
    get backwards(): boolean;
    /**
     * The face's current value.
     *
     * @public
     */
    faceValue(): FaceValue<any>;
    /**
     * This method is called with every interval, or every time the clock
     * should change, and handles the actual incrementing and decrementing the
     * clock's `FaceValue`.
     *
     * @public
     */
    interval(instance: FlipClock<Alphanumeric>): void;
    /**
     * Increment the value to the next sequence.
     *
     * @public
     */
    increment(): void;
    /**
     * Decrement the value to the next sequence.
     *
     * @public
     */
    decrement(): void;
}