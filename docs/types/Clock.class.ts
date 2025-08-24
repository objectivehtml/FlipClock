class Clock implements Face {
    /**
     * The starting date on the clock. If no date is set, the current time
     * will be used.
     *
     * @public
     */
    readonly date: Date;
    /**
     * The current formatted value.
     *
     * @public
     */
    readonly value: FaceValue<string>;
    /**
     * The format string.
     *
     * @public
     */
    format: string;
    /**
     * The duration formatter.
     *
     * @public
     */
    formatter: UseDateFormats;
    /**
     * Instantiate the clock face.
     *
     * @public
     */
    constructor(props?: ClockProps);
    /**
     * The face's current value.
     *
     * @public
     */
    faceValue(): FaceValue<string>;
    /**
     * Format the face value to the current date/time.
     *
     * @public
     */
    interval(instance: FlipClock<Clock>): void;
}