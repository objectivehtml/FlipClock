class ElapsedTime implements Face {
    /**
     * The date used to calculate the current.
     *
     * @protected
     */
    protected start: Date;
    /**
     * The date used to calculate the current.
     *
     * @protected
     */
    protected current: Date;
    /**
     * The "from" date used to calculate the elsapsed time.
     *
     * @public
     */
    from?: Date;
    /**
     * The "to" date used to calculate the elsapsed time.
     *
     * @public
     */
    to?: Date;
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
    formatter: UseDurationFormats;
    /**
     * The current face value.
     *
     * @public
     */
    value: FaceValue<string>;
    /**
     * Construct the clock face.
     *
     * @public
     */
    constructor(props?: ElapsedTimeProps);
    /**
     * Get the elapsed time as a formatted string.
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
     * Format the value with the new elapsed time.
     *
     * @public
     */
    interval(instance: FlipClock<ElapsedTime>): void;
    /**
     * Set the dates before the clock starts.
     *
     * @public
     */
    beforeStart(): void;
    /**
     * Determines if the clock should be stopped.
     *
     * @public
     */
    shouldStop(): boolean;
}