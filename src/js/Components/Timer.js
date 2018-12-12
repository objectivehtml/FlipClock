import Component from './Component';
import { isObject, isNumber, callback } from '../Helpers/Functions';

export default class Timer extends Component {

    /**
     * Create a new `Timer` instance.
     *
     * @memberof Components
     * @class Timer
     * @extends Components.Component
     * @param {(Object|Number)} interval - The interval passed as a `Number`,
     *     or can set the attribute of the class with an object.
     */
    constructor(interval) {
        super(Object.assign({
            count: 0,
            handle: null,
            started: null,
            running: false,
            interval: isNumber(interval) ? interval : null,
        }, isObject(interval) ? interval : null));
    }

    /**
     * Gets the elapsed the time as an interger.
     *
     * @memberof Components.Timer
     * @return {Number} The `elapsed` attribute.
     */
    get elapsed() {
        return !this.lastLoop ? 0 : this.lastLoop - (
            this.started ? this.started.getTime() : new Date().getTime()
        );
    }

    /**
     * Returns true is the timer is running.
     *
     * @memberof Components.Timer
     * @return {boolean} - Returns `true` the `running` property is `true`
     */
    get isRunning() {
        return this.running === true;
    }

    /**
     * Returns true is the timer is not running.
     *
     * @memberof Components.Timer
     * @return {boolean} - Returns `true` the `running` property is `false`
     */
    get isStopped() {
        return this.running === false;
    }

    /**
     * Resets the timer.
     *
     * @memberof Components.Timer
     * @param  {(Function|undefined)} fn - The interval callback.
     * @return {Timer} - The `Timer` instance.
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
     * Starts the timer.
     *
     * @memberof Components.Timer
     * @param  {Function} fn - The interval callback.
     * @return {Timer} - The `Timer` instance.
     */
    start(fn) {
        this.started = new Date;
        this.lastLoop = Date.now();
        this.running = true;
        this.emit('start');

        const loop = () => {
            if(Date.now() - this.lastLoop >= this.interval) {
                callback.call(this, fn);
                this.lastLoop = Date.now();
                this.emit('interval');
                this.count++;
            }

            this.handle = window.requestAnimationFrame(loop);

            return this;
        };

        return loop();
    }

    /**
     * Stops the timer.
     *
     * @memberof Components.Timer
     * @param  {Function} fn - The stop callback.
     * @return {Timer} - The `Timer` instance.
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
