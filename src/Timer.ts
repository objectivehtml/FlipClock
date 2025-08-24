/**
 * The Timer class uses a requestAnimationFrame loop to build a timer that can
 * start and stop.
 * 
 * @public
 */
export class Timer {

    /**
     * The count increments with each interval.
     * 
     * @protected
     */
    protected $count: number = 0;

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
    public readonly interval: number;

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
    constructor(ms: number = 1000) {
        this.interval = ms;
    }

    /**
     * Get the number of times the timer has ticked.
     * 
     * @public
     */
    get count(): number {
        return this.$count;
    }

    /**
     * The `elapsed` attribute.
     * 
     * @public
     */
    get elapsed(): number {
        if (!this.$startDate) {
            return 0;
        }

        return Math.max(0, Date.now() - this.$startDate.getTime());
    }

    /**
     * The `elapsedSinceLastLoop` attribute.
     * 
     * @public
     */
    get elapsedSinceLastLoop(): number {
        if (!this.lastLoop) {
            return 0;
        }
        
        return Date.now() - this.lastLoop;
    }

    /**
     * Determines if the Timer is currently running.
     * 
     * @public
     */
    get isRunning(): boolean {
        return this.$handle !== undefined;
    }

    /**
     * Determines if the Timer is currently stopped.
     * 
     * @public
     */
    get isStopped(): boolean {
        return !this.isRunning;
    }

    /**
     * Get the last timestamp the timer looped.
     * 
     * @public
     */
    get lastLoop(): number {
        return this.$lastLoop || 0;
    }

    /**
     * Set the last timestamp the timer looped.
     * 
     * @public
     */
    set lastLoop(value: number) {
        this.$lastLoop = value;
    }

    /**
     * Get the date object when the timer started.
     * 
     * @public
     */
    get started(): Date | undefined {
        return this.$startDate;
    }

    /**
     * Resets the timer. If a callback is provided, re-start the clock.
     * 
     * @public
     */
    reset(fn?: (timer: Timer) => void): Timer {
        this.stop(() => {
            this.$count = 0;
            this.$lastLoop = 0;
            this.start(fn);
        });

        return this;
    }

    /**
     * Starts the timer.
     * 
     * @public
     */
    start(fn?: (timer: Timer) => void): Timer {
        this.$startDate = new Date;
        this.$lastLoop = this.$startDate.getTime();

        const loop = () => {
            if (Date.now() - this.lastLoop >= this.interval) {
                if (typeof fn === 'function') {
                    fn(this);
                }

                this.$lastLoop = Date.now();
                this.$count++;
            }

            this.$handle = requestAnimationFrame(loop);

            return this;
        };

        return loop();
    }

    /**
     * Stops the timer.
     * 
     * @public
     */
    stop(fn?: (timer: Timer) => void): Timer {
        if (this.isRunning && this.$handle) {
            window.cancelAnimationFrame(this.$handle);

            this.$lastLoop = 0;
            this.$handle = undefined;

            if (typeof fn === 'function') {
                fn(this);
            }
        }

        return this;
    }
}

/**
 * Create a new `Timer` instance.
 * 
 * @public
 */
export function timer(interval: number = 1000) {
    return new Timer(interval);
}
