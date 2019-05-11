import Component from './Component';
import digitize from '../Helpers/Digitize';
import { next, prev } from '../Helpers/Value';
import { length, isObject, isNumber } from '../Helpers/Functions';

export default class FaceValue extends Component {

    /**
     * The `FaceValue` class handles all the digitizing for the `Face`.
     *
     * @class FaceValue
     * @extends Component
     * @param {*} value - The `FaceValue`'s actual value. Most likely should
     *     string, number, or Date. But since the Face handles the value, it
     *     could be anything.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     */
    constructor(value, attributes) {
        super(Object.assign({
            format: value => value,
            prependLeadingZero: true,
            minimumDigits: 0
        }, attributes));

        if(!this.value) {
            this.value = value;
        }
    }

    /**
     * The `digits` attribute.
     *
     * @type {(Array|undefined)}
     */
    get digits() {
        return this.$digits;
    }

    set digits(value) {
        this.$digits = value;
        this.minimumDigits = Math.max(this.minimumDigits, length(value));
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
        this.$value = value;
        this.digits = digitize(this.format(value), {
            minimumDigits: this.minimumDigits,
            prependLeadingZero: this.prependLeadingZero
        });
    }

    /**
     * Returns `true` if the `value` attribute is not a number.
     *
     * @return {boolean} - `true` is the value is not a number.
     */
    isNaN() {
        return isNaN(this.value);
    }

    /**
     * Returns `true` if the `value` attribute is a number.
     *
     * @return {boolean} - `true` is the value is a number.
     */
    isNumber() {
        return isNumber();
    }

    /**
     * Clones the current `FaceValue` instance, but sets a new value to the
     * cloned instance. Used for copying the current instance options and
     * methods, but setting a new value.
     *
     * @param  {*} value - The n
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @return {FaceValue} - The cloned `FaceValue`.
     */
    clone(value, attributes) {
        return new this.constructor(value, Object.assign(
            this.getPublicAttributes(), attributes
        ));
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'FaceValue';
    }

}
