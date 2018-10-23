import { createElement, appendChildren } from '../../Helpers/Template';

export default function(el, instance) {
    const items = instance.items.map(item => {
        return item.render();
    });

    appendChildren(el, items);
}
