/**
 * A collection of functions to manage DOM nodes and theme templates.
 *
 * @namespace Helpers.Template
 */
import { noop } from './Functions';
import { isArray } from './Functions';
import { isObject } from './Functions';
import { isString } from './Functions';
import { deepFlatten } from './Functions';

/**
 * Swap a new DOM node with an existing one.
 *
 * @function swap
 * @param  {HTMLElement} subject - The new DOM node.
 * @param  {HTMLElement} existing - The existing DOM node.
 * @return {HTMLElement} - Returns the new element if it was mounted, otherwise
 *    the existing node is returned.
 * @memberof Helpers.Template
 */
export function swap(subject, existing) {
	if(existing.parentNode) {
		existing.parentNode.replaceChild(subject, existing);

		return subject;
	}

	return existing;
}

/**
 * Set the attribute of an element.
 *
 * @function setAttributes
 * @param  {HTMLElement} el - The DOM node that will receive the attributes.
 * @param  {Object|undefined} [attributes] - The attribute object, or if no object
 *     is passed, then the action is ignored.
 * @return {HTMLElement} el - The DOM node that received the attributes.
 * @memberof Helpers.Template
 */
export function setAttributes(el, attributes) {
	if(isObject(attributes)) {
		for(const i in attributes) {
			el.setAttribute(i, attributes[i]);
		}
	}

	return el;
}

/**
 * Append an array of DOM nodes to a parent.
 *
 * @function appendChildren
 * @param  {HTMLElement} el - The parent DOM node.
 * @param  {Array|undefined} [children] - The array of children. If no array
 *     is passed, then the method silently fails to run.
 * @return {HTMLElement} el - The DOM node that received the attributes.
 * @memberof Helpers.Template
 */
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

/**
 * Create a new HTMLElement instance.
 *
 * @function createElement
 * @param  {HTMLElement} el - The parent DOM node.
 * @param  {Array|undefined} [children] - The array of children. If no array
 *     is passed, then the method silently fails to run.
 * @param  {Object|undefined} [attributes] - The attributes object.
 * @return {HTMLElement} el - The DOM node that received the attributes.
 * @memberof Helpers.Template
 */
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
