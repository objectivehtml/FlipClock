class Timer {
    /**
     * The count increments with each interval.
     *
     * @protected
     */
    protected $count: number;
    /**
     * The requestAnimationFrame handle number.
     *
     * @protected
     */
    protected $handle?: number;
    /**
     * The number of milliseconds that define an interval.
     *
     * @public
     */
    readonly interval: number;
    /**
     * The timestamp of the last loop.
     *
     * @protected
     */
    protected $lastLoop?: number;
    /**
     * The date the timer starts.
     *
     * @protected
     */
    protected $startDate?: Date;
    /**
     * Construct the timer.
     *
     * @public
     */
    constructor(ms?: number);
    /**
     * Get the number of times the timer has ticked.
     *
     * @public
     */
    get count(): number;
    /**
     * The `elapsed` attribute.
     *
     * @public
     */
    get elapsed(): number;
    /**
     * The `elapsedSinceLastLoop` attribute.
     *
     * @public
     */
    get elapsedSinceLastLoop(): number;
    /**
     * Determines if the Timer is currently running.
     *
     * @public
     */
    get isRunning(): boolean;
    /**
     * Determines if the Timer is currently stopped.
     *
     * @public
     */
    get isStopped(): boolean;
    /**
     * Get the last timestamp the timer looped.
     *
     * @public
     */
    get lastLoop(): number;
    /**
     * Set the last timestamp the timer looped.
     *
     * @public
     */
    set lastLoop(value: number);
    /**
     * Get the date object when the timer started.
     *
     * @public
     */
    get started(): Date | undefined;
    /**
     * Resets the timer. If a callback is provided, re-start the clock.
     *
     * @public
     */
    reset(fn?: (timer: Timer) => void): Timer;
    /**
     * Starts the timer.
     *
     * @public
     */
    start(fn?: (timer: Timer) => void): Timer;
    /**
     * Stops the timer.
     *
     * @public
     */
    stop(fn?: (timer: Timer) => void): Timer;
}