import ListItem from './ListItem';
import DomComponent from './DomComponent';
import { next, prev } from '../Helpers/Value';

export default class List extends DomComponent {

    constructor(value, attributes) {
        super(Object.assign({
            items: [],
            value: value
        }, attributes));
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

    nextValue() {
        return next(this.value)
    }

    prevValue() {
        return prev(this.value)
    }

}
