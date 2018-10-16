import Face from './Faces/Face';
import validate from './Helpers/Validate';
import { error } from './Helpers/Functions';
import FaceValue from './Components/FaceValue';
import DefaultValues from './Config/DefaultValues';
import DomComponent from './Components/DomComponent';
import ConsoleMessages from './Config/ConsoleMessages';

export default class FlipClock extends DomComponent {

    constructor(value, attributes) {
        super(Object.assign({
            value: value,
            face: DefaultValues.face
        }, attributes));
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        this.$value = value instanceof FaceValue ? value : FaceValue.make(value);
    }

    get face() {
        return this.$face;
    }

    set face(value) {
        if(!validate(value, [Face, 'function'])) {
            error(ConsoleMessages.face);
        }

        this.$face = value instanceof Function ? new value(this) : value;
    }

    static getDefaultFace() {
        return DefaultValues.face;
    }

    static setDefaultFace(value) {
        validate(value, [Face, 'function']).then(() => {
            DefaultValues.face = value;
        }, () => {
            error(ConsoleMessages.face);
        });
    }

}
