import DomComponent from './DomComponent';
import { isObject, isArray } from '../Helpers/Functions';

export default class Group extends DomComponent {

    /**
     * This class is used to group values within a clock face. How the groups
     * are displayed is determined by the theme.
     *
     * @class Group
     * @extends DomComponent
     * @param {Array|Object} items - An array `List` instances or an object of
     *     attributes. If not an array, assumed to be the attributes.
     * @param {object|undefined} [attributes] - The instance attributes.
     */
    constructor(items, attributes) {
        super(Object.assign({
            items: isArray(items) ? items : []
        }, (isObject(items) ? items : null), attributes));
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'Group';
    }

}
