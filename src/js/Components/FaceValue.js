import Component from './Component';
import digitize from '../Helpers/Digitize';
import { next, prev } from '../Helpers/Value';
import { length, isObject, isNumber } from '../Helpers/Functions';

export default class FaceValue extends Component {

    /**
     * The `FaceValue` class handles all the digitizing for the `Face`.
     *
     * @memberof Components
     * @class FaceValue
     * @extends Components.Component
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
     * Get the `digits` attribute.
     *
     * @memberof Components.FaceValue
     * @return {(Array|undefined)} - The `digits` attribute.
     */
    get digits() {
        return this.$digits;
    }

    /**
     * Set `digits` attribute.
     *
     * @memberof Components.FaceValue
     * @param  {Array} value - An array of digits/characters.
     * @return {void}
     */
    set digits(value) {
        this.$digits = value;
        this.minimumDigits = Math.max(this.minimumDigits, length(value));
    }

    /**
     * Get the `value` attribute.
     *
     * @memberof Components.FaceValue
     * @return {*} - The `value` attribute.
     */
    get value() {
        return this.$value;
    }

    /**
     * Set `value` attribute. Also digitizes the new value, and sets the
     * `digits` attributes
     *
     * @memberof Components.FaceValue
     * @param  {*} value - The `value` attribute.
     * @return {void}
     */
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
     * @memberof Components.FaceValue
     * @return {boolean} - `true` is the value is not a number.
     */
    isNaN() {
        return isNaN(this.value);
    }

    /**
     * Returns `true` if the `value` attribute is a number.
     *
     * @memberof Components.FaceValue
     * @return {boolean} - `true` is the value is a number.
     */
    isNumber() {
        return isNumber()
    }

    /**
     * Clones the current `FaceValue` instance, but sets a new value to the
     * cloned instance. Used for copying the current instance options and
     * methods, but setting a new value.
     *
     * @memberof Components.FaceValue
     * @param  {*} value - The n
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @return {FaceValue} - The cloned `FaceValue`.
     */
    clone(value, attributes) {
        return new this.constructor(value, Object.assign(
            this.getPublicAttributes(), attributes
        ));
    }

}
