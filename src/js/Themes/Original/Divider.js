import { appendChildren, createElement } from '../../Helpers/Template';

export default function(el, instance) {
    appendChildren(el, [
        createElement('div', {class: 'flip-clock-dot top'}),
        createElement('div', {class: 'flip-clock-dot bottom'})
    ]);
}
