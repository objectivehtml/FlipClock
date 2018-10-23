import DomComponent from './DomComponent';
import { isObject } from '../Helpers/Functions';

export default class Group extends DomComponent {

    constructor(items, attributes) {
        super(Object.assign({
            items: items
        }, isObject(items) ? items : null, attributes));
    }

}
