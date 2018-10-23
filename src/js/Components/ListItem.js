import DomComponent from './DomComponent';
import { isObject } from '../Helpers/Functions';

export default class ListItem extends DomComponent {

    constructor(value, attributes) {
        super(Object.assign({
            value: value
        }, isObject(value) ? value : null, attributes));
    }

}
