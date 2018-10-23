import Divider from './Divider';
import ListItem from './ListItem';
import DomComponent from './DomComponent';
import { next, prev,  } from '../Helpers/Value';
import { isObject,  } from '../Helpers/Functions';

export default class List extends DomComponent {

    constructor(value, attributes) {
        super(Object.assign({
            value: value,
            items: [],
        }, isObject(value) ? value : null, attributes));
    }

    get value() {
        return this.$value;
    }

    set value(value) {
        this.$value = value;
    }

    get items() {
        return this.$items;
    }

    set items(value) {
        this.$items = value;
    }

    createListItem(value, attributes) {
        const item = new ListItem(value, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
        
        this.$items.push(item);

        return item;
    }

}
