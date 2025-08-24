type ClockProps = {
    /**
     * Specify a date used to start the display on the clock.
     */
    date?: Date;
    /**
     * A format string for how the date is displayed.
     */
    format?: string;
    /**
     * A formatter to display the date in the given format.
     */
    formatter?: UseDateFormats | UseDateFormatsOptions;
};