import { noop } from './Functions';
import { isArray } from './Functions';
import { deepFlatten } from './Functions';

export function when(condition, html) {
	return condition === true ? html : '';
}

export default function(value) {
	const template = document.createElement('template');

    template.innerHTML = isArray(value) ?
		deepFlatten(value).filter(noop).join('') : value;

    return template.content.firstChild;
}
