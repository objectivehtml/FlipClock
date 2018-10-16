import Component from './Component';
import { callback } from '../Helpers/Function';

export default class Timer {

    constructor(interval) {
        super();

        this.count = 0;
        this.handle = null;
        this.started = null;
        this.running = false;
        this.interval = interval;
    }

    /**
     * Gets the elapsed the time as an interger
     *
     * @return Integer
     */
    getElapsed() {
        return this.count * this.interval;
    }

    /**
     * Returns true is the timer is running, and false if it's not
     *
     * @return Boolean
     */
    isRunning() {
        return this.running === true;
    }

    /**
     * Returns true is the timer is not running, and false if it is
     *
     * @return Boolean
     */
    isStopped() {
        return this.running === false;
    }

    /**
     * Resets the timer. This method is chainable.
     *
     * @param  Function  fn
     * @return this
     */
    reset(fn) {
        this.stop(() => {
            this.count = 0;
            this.start(() => callback.call(this, fn));
        });

        return this;
    }

    /**
     * Starts the timer. This method is chainable.
     *
     * @param  Function  fn
     * @return this
     */
    start(fn) {
        this.started = Date.now();
        this.running = true;

        const loop = () => {
            if(Date.now() - this.started >= this.interval) {
                this.started = Date.now();
                callback.call(this, fn);
                this.count++;
            }

            this.handle = window.requestAnimationFrame(loop);

            return this;
        };

        return loop();
    }

    /**
     * Stops the timer. This method is chainable.
     *
     * @param  Function fn
     * @return this
     */
    stop(fn) {
        if(this.isRunning()) {
            setTimeout(() => {
                window.cancelAnimationFrame(this.handle);

                this.running = false;

                callback.call(this, fn);
            });
        }

        return this;
    }

}
