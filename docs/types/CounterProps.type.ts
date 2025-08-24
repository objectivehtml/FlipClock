type CounterProps = {
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
    formatter?: Intl.NumberFormat;
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
};