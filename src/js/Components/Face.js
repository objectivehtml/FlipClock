import Component from './Component';
import FaceValue from './FaceValue';
import validate from '../Helpers/Validate';
import ConsoleMessages from '../Config/ConsoleMessages';
import { error, isNull, isUndefined, isObject, isArray, isFunction, callback } from '../Helpers/Functions';

export default class Face extends Component {

    constructor(value, attributes = {}) {
        if(!(value instanceof FaceValue) && isObject(value)) {
            attributes = value;
            value = null;
        }

        super();

        this.setAttributes(Object.assign({
            autoStart: true,
            countdown: false,
            animationRate: 500
        }, this.defaultAttributes(), attributes || {}));

        if(value || this.defaultValue()) {
            this.value = !isNull(value) && !isUndefined(value) ? value : this.defaultValue();
        }
    }

    get dataType() {
        return this.defaultDataType();
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        if(!(value instanceof FaceValue)) {
            value = this.createFaceValue(value);
        }

        this.$value = value;
    }

    get stopAt() {
        return this.$stopAt;
    }

    set stopAt(value) {
        this.$stopAt = value;
    }

    get originalValue() {
        return this.$originalValue;
    }

    set originalValue(value) {
        this.$originalValue = value;
    }

    interval(instance, fn) {
        if(this.countdown) {
            this.decrement(instance);
        }
        else {
            this.increment(instance);
        }

        callback.call(this, fn);

        if(this.shouldStop(instance)) {
            instance.stop();
        }

        return this.emit('interval');
    }

    shouldStop(instance) {
        return !isUndefined(this.stopAt) ? this.stopAt === instance.value.value : false;
    }

    format(instance, value) {
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

    started(instance) {
        //
    }

    stopped(instance) {
        //
    }

    reset(instance) {
        //
    }

    initialized(instance) {
        //
    }

    rendered(instance) {
        //
    }

    mounted(instance) {
        if(this.autoStart && instance.timer.isStopped) {
            window.requestAnimationFrame(() => instance.start(instance));
        }
    }

    createFaceValue(instance, value) {
        return FaceValue.make(
            isFunction(value) && !value.name ? value() : value, {
                minimumDigits: this.minimumDigits,
                format: value => this.format(instance, value)
            }
        );
    }

}
