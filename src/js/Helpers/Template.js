import { noop } from './Functions';
import { isArray } from './Functions';
import { isObject } from './Functions';
import { isString } from './Functions';
import { deepFlatten } from './Functions';

export function when(condition, html) {
	return condition === true ? html : '';
}

export function swap(el, existing) {
	if(existing.parentNode) {
		existing.parentNode.replaceChild(el, existing);
		
		return el;
	}

	return existing;
}

export function setAttributes(el, attributes) {
	if(isObject(attributes)) {
		for(const i in attributes) {
			el.setAttribute(i, attributes[i]);
		}
	}

	return el;
}

export function appendChildren(el, children) {
	if(isArray(children)) {
		children.filter(noop).forEach(child => {
			if(child instanceof HTMLElement) {
				el.appendChild(child);
			}
		});
	}

	return el;
}

export function createElement(el, children, attributes) {
	if(!(el instanceof HTMLElement)) {
		el = document.createElement(el);
	}

	setAttributes(el, isObject(children) ? children : attributes);

	if(!isObject(children) && !isArray(children)) {
		el.innerHTML = children;
	}
	else {
		appendChildren(el, children)
	}

	return el;
}

/*
export default function(value, attributes) {
	const template = document.createElement('template');

    template.innerHTML = isArray(value) ?
		deepFlatten(value).filter(noop).join('') : value;

	if(isObject(attributes)) {
		for(const i in attributes) {
			template.content.firstChild.setAttribute(i, attributes[i]);
		}
	}

    return template.content.firstChild;
}
*/
