type ElapsedTimeProps = {
    /**
     * The date from which the elapsed time is calculated.
     */
    from?: Date;
    /**
     * The date to which the elapsed time is calculated.
     */
    to?: Date;
    /**
     * A format string for how the duration is displayed.
     */
    format?: string;
    /**
     * A formatter to display the duration in the given format.
     */
    formatter?: UseDurationFormats;
};