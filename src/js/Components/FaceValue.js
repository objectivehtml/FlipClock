import Component from './Component';
import digitize from '../Helpers/Digitize';
import { isObject } from '../Helpers/Functions';

export default class FaceValue extends Component {

    constructor(value, attributes) {
        super(Object.assign({
            prependLeadingZero: false,
            minimumDigits: 0,
            value: value
        }, attributes));
    }

    get digits() {
        return this.$digits;
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        this.$digits = digitize(this.$value = value, {
            minimumDigits: this.minimumDigits,
            prependLeadingZero: this.prependLeadingZero
        });
    }

}
