import DomComponent from './DomComponent';
import { isObject } from '../Helpers/Functions';

export default class Divider extends DomComponent {

    constructor(value, attributes) {
        if(isObject(value)) {
            attributes = value;
            value = null;
        }

        super(Object.assign({
            label: value
        }, attributes));
    }

}
