import Component from './Component';
import digitize from '../Helpers/Digitize';
import { next, prev } from '../Helpers/Value';
import { length, isObject, isNumber } from '../Helpers/Functions';

export default class FaceValue extends Component {

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

    set digits(value) {
        this.$digits = value;
        this.minimumDigits = Math.max(this.minimumDigits, length(value));
    }

    get digits() {
        return this.$digits;
    }

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

    isNaN() {
        return isNaN(this.value);
    }

    isNumber() {
        return isNumber()
    }

}
