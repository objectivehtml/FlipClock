import { createElement } from '../../Helpers/Template';

export default function(el, instance) {
    el.innerHTML = instance.t(instance.label);
}
