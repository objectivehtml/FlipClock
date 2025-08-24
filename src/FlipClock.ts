import { EventEmitter } from './EventEmitter';
import { Face, FaceHooks } from './Face';
import { getAnimationRate } from './helpers/functions';
import { Timer } from './Timer';

/**
 * The dispose function.
 * 
 * @public
 */
export type DisposeFunction = () => void;

/**
 * A FlipClock theme definition.
 * 
 * @public
 */
export type Theme<T extends Face<T>> = {
    render: (el: Element, instance: FlipClock<T>) => [Element, DisposeFunction]
} & FaceHooks<T>;

/**
 * The options for `FlipClock`.
 * 
 * @public
 */
export type FlipClockProps<T extends Face<T>> = {
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
}

/**
 * The FlipClock class starts, stops, resets, mounts, and unmounts the clock.
 * The clock also tracks the time and renders the clock with each interval.
 * 
 * @public
 */
export class FlipClock<T extends Face<T>> extends EventEmitter<Face<T>> {
    /**
     * Determines if the clock should automatically start when it is mounted.
     * 
     * @public
     */
    public readonly autoStart: boolean = true;

    /**
     * The parent element to which the clock is mounted.
     * 
     * @public
     */
    public parent?: Element;

    /**
     * The clock element.
     * 
     * @public
     */
    public el?: Element;

    /**
     * The face used to display the clock.
     * 
     * @public
     */
    public readonly face: T;

    /**
     * The face used to display the clock.
     * 
     * @public
     */
    public readonly theme: Theme<T>;

    /**
     * The face value displayed on the clock.
     * 
     * @public
     */
    public readonly timer: Timer;

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
    constructor(props: FlipClockProps<T>) {
        super();

        this.face = props.face;
        this.theme = props.theme;

        if (typeof props.autoStart === 'boolean') {
            this.autoStart = props.autoStart;
        }

        this.timer = props.timer instanceof Timer
            ? props.timer
            : new Timer(props.timer);

        this.hook('afterCreate', this);

        if (props.parent) {
            this.mount(props.parent);
        }
    }

    /**
     * Get the animation rate of the clock.
     * 
     * @public
     */
    public get animationRate() {
        if (!this.el) {
            return 0;
        }

        return getAnimationRate(this.el);
    }

    /**
     * Mount the clock instance to the DOM.
     * 
     * @public
     */
    public mount(parent: Element) {
        this.hook('beforeMount', this);

        this.parent = parent;

        const [el, dispose] = this.theme.render(this.parent, this);

        this.el = el;
        this.dispose = dispose;

        this.hook('afterMount', this);

        if (this.autoStart && this.timer.isStopped) {
            requestAnimationFrame(() => this.start());
        }

        return this;
    }

    /**
     * Start the clock instance.
     * 
     * @public
     */
    public start(fn?: (instance: FlipClock<T>) => void): this {
        this.hook('beforeStart', this);
        
        this.timer.start(() => {
            requestAnimationFrame(() => {
                this.hook('beforeInterval', this);

                this.face.interval(this);

                this.hook('afterInterval', this);

                if (typeof fn === 'function') {
                    fn(this);
                }

                this.hook('afterStart', this);
            });
        });

        return this;
    }

    /**
     * Stop the clock instance.
     * 
     * @public
     */
    public stop(fn?: (instance: FlipClock<T>) => void): this {
        this.hook('beforeStop', this);

        this.timer.stop(() => {
            if (typeof fn === 'function') {
                fn(this);
            }

            this.hook('afterStop', this);
        });

        return this;
    }

    /**
     * Toggle starting/stopping the clock instance.
     * 
     * @public
     */
    public toggle(fn?: (instance: FlipClock<T>) => void): this {
        if (this.timer.isStopped) {
            this.start(fn);
        }
        else {
            this.stop(fn);
        }

        return this;
    }

    /**
     * Unmount the clock instance from the DOM.
     * 
     * @public
     */
    public unmount(): this {
        this.hook('beforeUnmount', this);

        this.timer.stop();

        this.el?.remove();
        this.dispose?.();
        
        this.hook('afterUnmount', this);

        return this;
    }

    /**
     * Dispatch the event and call the method that corresponds to given hook.
     * 
     * @protected
     */
    protected hook<K extends keyof Required<FaceHooks<T>>>(key: K, ...args: Required<FaceHooks<T>>[K] extends (...args: infer P) => void ? P : any[]): void {
        if (key in this.face && typeof this.face[key] === 'function') {
            const fn = this.face[key] as Function;

            fn.apply(this.face, args);
        }

        if (key in this.theme && typeof this.theme[key] === 'function') {
            const fn = this.theme[key] as Function;

            fn(...args);
        }

        this.emit(key, ...args);
    }
}

/**
 * Create a new `FlipClock` instance.
 * 
 * @public
 */
export function flipClock<T extends Face<T>>(props: FlipClockProps<T>): FlipClock<T> {
    return new FlipClock<T>(props);
}