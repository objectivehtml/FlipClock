import Component from './Component';

export default class Timer extends Component {

    /**
     * Set the default properties for the class
     *
     * @param 	null|Object  An object of options
    */
    properties(options) {
        this.count = 0;
        this.running = false;
    }

    /*
     * Get the default options for the class
     *
     * @return object
    */
    defaultOptions() {
        return {
            // Timer interval (1 second by default)
            interval: 1000,
            // The rate of the animation in milliseconds (not currently in use)
            animationRate: 1000
        };
    }

    /**
     * Gets the elapsed the time as an interger
     *
     * @return	int
     */
    getElapsed() {
        return this.count * this.getOption('interval');
    }

    /**
     * Returns true is the timer is running, and false if it's not
     *
     * @return	Boolean
     */
    isRunning() {
        return !!this.running;
    }

    /**
     * Returns true is the timer is not running, and false if it is
     *
     * @return	Boolean
     */
    isStopped() {
        return this.running === false;
    }

    /**
     * Resets the timer. This method is chainable.
     *
     * @param 	function callback
     * @return	object
     */
    reset(callback) {
        this._clearInterval(callback);
        this._setInterval(callback);
        this.count = 0;
        this.emit('reset');

        return this;
    }

    /**
     * Starts the timer. This method is chainable.
     *
     * @param 	function callback
     * @return	object
     */
    start(callback) {
        this.running = true;
        this._setInterval(callback);

        return this;
    }

    /**
     * Stops the timer. This method is chainable.
     *
     * @param 	function callback
     * @return	object
     */
    stop(callback) {
        this._clearInterval();

        setTimeout(() => {
            this.running = false;
            this.callback(callback);
            this.emit('stop');
        }, this.getOption('interval'));

        return this;
    }

    /**
     * Destroy the timer. This method is chainable.
     *
     * @param 	function callback
     * @return	object
     */
    destroy(callback) {
        this._destroyTimer(() => {
            this.running = false;
            this.callback(callback);
            this.emit('destroy');
        });

        return this;
    }


    /**
     * Clear the timer interval
     *
     * @return	void
     */
    _clearInterval() {
        clearInterval(this.timer);
        this.timer = false;
    }

    /**
     * Create the timer object
     *
     * @param 	function callback
     * @return	void
     */
    _createTimer(callback) {
        this._setInterval(callback);
    }

    /**
     * Destroy the timer object
     *
     * @param 	function callback
     * @return	void
     */
    _destroyTimer(callback) {
        this._clearInterval();
        this.callback(callback);
        this.emit('destroy')
    }

    /**
     * This method is called each time the timer interval is ran
     *
     * @param 	function callback
     * @return	void
     */
    _interval(callback) {
        this.callback(callback);
        this.emit('interval');
        this.count++;
    }

    /**
     * Sets the timer interval
     *
     * @param 	function callback
     * @return	void
     */
    _setInterval(callback) {
        this.timer = setInterval(() => {
            if(this.running) {
                this._interval(callback);
            }
        }, this.getOption('interval'));
        this.emit('start');
        this._interval(callback);
    }

};
