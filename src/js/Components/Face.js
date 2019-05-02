import Component from './Component';
import FaceValue from './FaceValue';
import validate from '../Helpers/Validate';
import ConsoleMessages from '../Config/ConsoleMessages';
import { error, isNull, isUndefined, isObject, isArray, isFunction, callback } from '../Helpers/Functions';

export default class Face extends Component {

    /**
     * This class is meant to be provide an interface for all other faces to
     * extend.
     *
     * @class Face
     * @extends Component
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     */
    constructor(value, attributes) {
        if(!(value instanceof FaceValue) && isObject(value)) {
            attributes = value;
            value = undefined;
        }

        super();

        this.setAttributes(Object.assign({
            autoStart: true,
            countdown: false,
            animationRate: 500
        }, this.defaultAttributes(), attributes || {}));

        if(isNull(value) || isUndefined(value)) {
            value = this.defaultValue();
        }

        if(value) {
            this.value = value;
        }
    }

    /**
     * The `dataType` attribute.
     *
     * @type {*}
     */
    get dataType() {
        return this.defaultDataType();
    }

    /**
     * The `value` attribute.
     *
     * @type {*}
     */
    get value() {
        return this.$value;
    }

    set value(value) {
        if(!(value instanceof FaceValue)) {
            value = this.createFaceValue(value);
        }

        this.$value = value;
    }

    /**
     * The `stopAt` attribute.
     *
     * @type {*}
     */
    get stopAt() {
        return this.$stopAt;
    }

    set stopAt(value) {
        this.$stopAt = value;
    }

    /**
     * The `originalValue` attribute.
     *
     * @type {*}
     */
    get originalValue() {
        return this.$originalValue;
    }

    set originalValue(value) {
        this.$originalValue = value;
    }

    /**
     * This method is called with every interval, or every time the clock
     * should change, and handles the actual incrementing and decrementing the
     * clock's `FaceValue`.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @param  {Function} fn - The interval callback.
     * @return {Face} - This `Face` instance.
     */
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

    /**
     * Determines if the clock should stop or not.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {boolean} - Returns `true` if the clock should stop.
     */
    shouldStop(instance) {
        return !isUndefined(this.stopAt) ? this.stopAt === instance.value.value : false;
    }

    /**
     * By default this just returns the value unformatted.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @param  {*} value - The value to format.
     * @return {*} - The formatted value.
     */
    format(instance, value) {
        return value;
    }

    /**
     * The default value for the `Face`.
     *
     * @return {*} - The default value.
     */
    defaultValue() {
        //
    }

    /**
     * The default attributes for the `Face`.
     *
     * @return {(Object|undefined)} - The default attributes.
     */
    defaultAttributes() {
        //
    }

    /**
     * The default data type for the `Face` value.
     *
     * @return {(Object|undefined)} - The default data type.
     */
    defaultDataType() {
        //
    }

    /**
     * Increment the clock.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @param  {Number} [amount] - The amount to increment. If the amount is not
     *     defined, it is left up to the `Face` to determine the default value.
     * @return {void}
     */
    increment(instance, amount) {
        //
    }

    /**
     * Decrement the clock.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @param  {Number} [amount] - The amount to decrement. If the amount is not
     *     defined, it is left up to the `Face` to determine the default value.
     * @return {void}
     */
    decrement(instance, amount) {
        //
    }

    /**
     * This method is called right after clock has started.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {void}
     */
    started(instance) {
        //
    }

    /**
     * This method is called right after clock has stopped.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {void}
     */
    stopped(instance) {
        //
    }

    /**
     * This method is called right after clock has reset.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {void}
     */
    reset(instance) {
        //
    }

    /**
     * This method is called right after `Face` has initialized.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {void}
     */
    initialized(instance) {
        //
    }

    /**
     * This method is called right after `Face` has rendered.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {void}
     */
    rendered(instance) {
        //
    }

    /**
     * This method is called right after `Face` has mounted.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @return {void}
     */
    mounted(instance) {
        if(this.autoStart && instance.timer.isStopped) {
            window.requestAnimationFrame(() => instance.start(instance));
        }
    }

    /**
     * Helper method to instantiate a new `FaceValue`.
     *
     * @param  {FlipClock} instance - The `FlipClock` instance.
     * @param  {object|undefined} [attributes] - The attributes passed to the
     *     `FaceValue` instance.
     * @return {Divider} - The instantiated `FaceValue`.
     */
    createFaceValue(instance, value) {
        return FaceValue.make(
            isFunction(value) && !value.name ? value() : value, {
                minimumDigits: this.minimumDigits,
                format: value => this.format(instance, value)
            }
        );
    }

}
