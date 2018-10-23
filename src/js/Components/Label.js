import DomComponent from './DomComponent';
import { isObject } from '../Helpers/Functions';

export default class Label extends DomComponent {

    constructor(label, attributes) {
        super(Object.assign({
            label: label
        }, isObject(label) ? label : null, attributes));
    }

}
