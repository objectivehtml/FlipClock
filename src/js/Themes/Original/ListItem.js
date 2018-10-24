import { createElement, appendChildren } from '../../Helpers/Template';

export default function(el, instance) {
    const className = instance.active === true ? 'active' : (
        instance.active === false ? 'before' : null
    );

    el.classList.add(className);

    appendChildren(el, [
        createElement('div', [
            createElement('div', instance.value, {class: 'top'}),
            createElement('div', instance.value, {class: 'bottom'})
        ], {class: 'flip-clock-list-item-inner'})
    ]);
}
