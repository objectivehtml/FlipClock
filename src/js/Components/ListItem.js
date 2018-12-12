import DomComponent from './DomComponent';
import { isObject } from '../Helpers/Functions';

export default class ListItem extends DomComponent {

    /**
     * This class is used to represent a single digits in a `List`.
     *
     * @memberof Components
     * @class ListItem
     * @extends Components.DomComponent
     * @param {(Number|String)} value - The value of the `ListItem`.
     * @param {object|undefined} [attributes] - The instance attributes.
     */
    constructor(value, attributes) {
        super(Object.assign({
            value: value
        }, isObject(value) ? value : null, attributes));
    }

}
