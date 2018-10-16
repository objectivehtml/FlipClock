import DomComponent from './DomComponent';

export default class ListItem extends DomComponent {

    constructor(value, attributes) {
        super(Object.assign({
            value: value
        }, attributes));
    }

}
