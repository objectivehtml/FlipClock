import Timer from './Timer';
import Component from './Component';
import FaceValue from './FaceValue';
import validate from '../Helpers/Validate';
import ConsoleMessages from '../Config/ConsoleMessages';
import { isObject, isFunction, callback } from '../Helpers/Functions';

export default class Face extends Component {

    constructor(value, attributes) {
        const delay = attributes.delay || 1000;

        super({
            autoStart: true,
            countdown: false,
            animationRate: delay / 2,
            timer: Timer.make(delay)
        });

        this.setAttributes(Object.assign(
            this.defaultAttributes(), attributes
        ));

        this.value = value;
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        this.$value = value instanceof FaceValue ?
            value : this.createFaceValue(value);

        this.emit('updated', this.value);
    }

    get timer() {
        return this.$timer;
    }

    set timer(timer) {
        if(!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
        }

        this.$timer = timer;
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

    createFaceValue(value) {
        return FaceValue.make(value, {
            format: value => this.format(value)
        });
    }

    format(value) {
        return value;
    }

    defaultAttributes() {
        //
    }

    increment(value) {
        //
    }

    decrement(value) {
        //
    }

    initialized(instance) {
        //
    }

    rendered(instance) {
        //
    }

    mounted(instance) {
        if(this.autoStart && this.timer.isStopped) {
            this.start();
        }
    }

}
