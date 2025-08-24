type FlipClockProps<T extends Face<T>> = {
    /**
     * Automatically start the clock after it is mounted.
     */
    autoStart?: boolean;
    /**
     * The face displayed on the clock.
     */
    face: T;
    /**
     * The theme used to render the clock/
     */
    theme: Theme<T>;
    /**
     * The timer that controls the clock interval.
     */
    timer?: Timer | number;
    /**
     * The DOM element the clock is mounted.
     */
    parent?: Element | null;
};