import Component from './Component';
import { isObject, callback } from '../Helpers/Functions';

export default class Timer extends Component {

    constructor(interval) {
        super(Object.assign({
            count: 0,
            handle: null,
            started: null,
            running: false,
            interval: interval
        }, isObject(interval) ? interval : null));
    }

    /**
     * Gets the elapsed the time as an interger
     *
     * @return Integer
     */
    get elapsed() {
        return this.count * this.interval;
    }

    /**
     * Returns true is the timer is running.
     *
     * @return Boolean
     */
    get isRunning() {
        return this.running === true;
    }

    /**
     * Returns true is the timer is not running.
     *
     * @return Boolean
     */
    get isStopped() {
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
            this.emit('reset');
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
        this.started = new Date;
        this.lastLoop = Date.now();
        this.running = true;
        this.emit('start');

        const loop = () => {
            if(Date.now() - this.lastLoop >= this.interval) {
                this.lastLoop = Date.now();
                callback.call(this, fn);
                this.emit('interval');
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
        if(this.isRunning) {
            setTimeout(() => {
                window.cancelAnimationFrame(this.handle);

                this.running = false;

                callback.call(this, fn);

                this.emit('stop');
            });
        }

        return this;
    }

}
