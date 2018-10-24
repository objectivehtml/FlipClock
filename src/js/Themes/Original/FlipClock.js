import { next } from '../../Helpers/Value';
import { appendChildren } from '../../Helpers/Template';

function child(el, index) {
    return el ? (el.childNodes ? el.childNodes[index] : el[index]) : null;
}

function char(el) {
    return el ? el.querySelector('.flip-clock-list-item:first-child .top').innerHTML : null;
}

export default function(el, instance) {
    const parts = instance.value.digits.map((group, x) => {
        const groupEl = child(instance.el ? instance.el.querySelectorAll('.flip-clock-group') : null, x);

        const lists = group.map((value, y) => {
            const listEl = child(groupEl ? groupEl.querySelectorAll('.flip-clock-list') : null, y);
            const listValue = char(listEl);

            return instance.createList(value, {
                domValue: listValue,
                countdown: instance.countdown,
                animationRate: instance.face.animationRate || instance.face.delay
            });
        });

        return instance.createGroup(lists);
    });

    const nodes = parts.map(group => {
        return group.render();
    });

    appendChildren(el, nodes);
}
