import { next, prev } from '../../Helpers/Value';
import ListItem from '../../Components/ListItem';
import { createElement, appendChildren } from '../../Helpers/Template';

export default function(el, instance) {
    const beforeValue = instance.domValue || (
        !instance.countdown ? prev(instance.value) : next(instance.value)
    );

    if( instance.domValue && instance.domValue !== instance.value) {
        el.classList.add('flip');
    }

    el.style.animationDelay = `${instance.animationRate / 2}ms`;
    el.style.animationDuration = `${instance.animationRate / 2}ms`;

    instance.items = [
        instance.createListItem(instance.value, {
            active: true
        }),
        instance.createListItem(beforeValue, {
            active: false
        })
    ];

    appendChildren(el, instance.items.map(item => item.render()));
}
