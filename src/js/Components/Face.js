import Timer from './Timer';
import Component from './Component';
import FaceValue from './FaceValue';
import validate from '../Helpers/Validate';
import ConsoleMessages from '../Config/ConsoleMessages';
import { error, isNull, isFunction, callback } from '../Helpers/Functions';

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
            (this.defaultAttributes() || {}), (attributes || {})
        ));

        this.value = !isNull(value) ? value : this.defaultValue();
    }

    get dataType() {
        return this.defaultDataType();
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        if(this.dataType && !validate(value, [this.dataType])) {
            error(`The face value must be an instance of a ${this.dataType.name}`);
        }

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

    interval(instance, fn) {
        if(this.countdown) {
            this.decrement(instance);
        }
        else {
            this.increment(instance);
        }

        callback.call(this, fn);

        return this.emit('interval');
    }

    start(instance, fn) {
        this.timer.start(() => this.interval(instance, fn));

        return this.emit('start');
    }

    stop(instance, fn) {
        this.timer.stop(fn);

        return this.emit('stop');
    }

    reset(instance, fn) {
        this.timer.reset(() => this.interval(instance, fn));

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

    defaultValue() {
        //
    }

    defaultAttributes() {
        //
    }

    defaultDataType() {
        //
    }

    increment(instance) {
        //
    }

    decrement(instance) {
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
            this.start(instance);
        }
    }

}
