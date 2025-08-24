class FlipClock<T extends Face<T>> extends EventEmitter<Face<T>> {
    /**
     * Determines if the clock should automatically start when it is mounted.
     *
     * @public
     */
    readonly autoStart: boolean;
    /**
     * The parent element to which the clock is mounted.
     *
     * @public
     */
    parent?: Element;
    /**
     * The clock element.
     *
     * @public
     */
    el?: Element;
    /**
     * The face used to display the clock.
     *
     * @public
     */
    readonly face: T;
    /**
     * The face used to display the clock.
     *
     * @public
     */
    readonly theme: Theme<T>;
    /**
     * The face value displayed on the clock.
     *
     * @public
     */
    readonly timer: Timer;
    /**
     * Dispose of the clock.
     *
     * @private
     */
    protected dispose?: DisposeFunction;
    /**
     * Construct the FlipClock.
     *
     * @public
     */
    constructor(props: FlipClockProps<T>);
    /**
     * Get the animation rate of the clock.
     *
     * @public
     */
    get animationRate(): number;
    /**
     * Mount the clock instance to the DOM.
     *
     * @public
     */
    mount(parent: Element): this;
    /**
     * Start the clock instance.
     *
     * @public
     */
    start(fn?: (instance: FlipClock<T>) => void): this;
    /**
     * Stop the clock instance.
     *
     * @public
     */
    stop(fn?: (instance: FlipClock<T>) => void): this;
    /**
     * Toggle starting/stopping the clock instance.
     *
     * @public
     */
    toggle(fn?: (instance: FlipClock<T>) => void): this;
    /**
     * Unmount the clock instance from the DOM.
     *
     * @public
     */
    unmount(): this;
    /**
     * Dispatch the event and call the method that corresponds to given hook.
     *
     * @protected
     */
    protected hook<K extends keyof Required<FaceHooks<T>>>(key: K, ...args: Required<FaceHooks<T>>[K] extends (...args: infer P) => void ? P : any[]): void;
}