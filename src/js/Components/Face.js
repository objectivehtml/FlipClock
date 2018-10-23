import Timer from './Timer';
import Component from './Component';
import FaceValue from './FaceValue';
import { isObject, isFunction, callback } from '../Helpers/Functions';

export default class Face extends Component {

    constructor(value, attributes) {
        super(Object.assign({
            // clock: clock,
            value: value,
            delay: 1000,
            countdown: false
        }, isObject(value) ? value : null, attributes));

        if(!this.timer) {
            this.timer = Timer.make(this.delay);
        }
    }

    /*
    get clock() {
        return this.$clock;
    }

    set clock(clock) {
        this.$clock = clock;
    }
    */

    get value() {
        return this.$value;
    }

    set value(value) {
        this.emit('updated', this.$value = value instanceof FaceValue ? value : FaceValue.make(value));
    }

    get timer() {
        return this.$timer;
    }

    set timer(timer) {
        this.$timer = timer instanceof Timer ? timer : Timer.make(this.delay);
    }

    interval(fn) {
        if(this.countdown) {
            this.decrement();
        }
        else {
            this.increment();
        }

        callback.call(this, fn);

        return this.emit('interval');
    }

    start(fn) {
        this.timer.start(() => this.interval(fn));

        return this.emit('start');
    }

    stop(fn) {
        this.timer.stop(fn);

        return this.emit('stop');
    }

    reset(fn) {
        this.timer.reset(() => this.interval(fn));

        return this.emit('reset');
    }

    increment(value) {
        //
    }

    decrement(value) {
        //
    }

    initialized(clock) {
        //
    }

    rendered(clock) {
        //
    }

    mounted(clock) {
        //
    }

}
