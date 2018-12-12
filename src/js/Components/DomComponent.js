import Component from './Component';
import language from '../Helpers/Language';
import validate from '../Helpers/Validate';
import translate from '../Helpers/Translate';
import { error } from '../Helpers/Functions';
import { isString } from '../Helpers/Functions';
import ConsoleMessages from '../Config/ConsoleMessages';
import { swap, createElement } from '../Helpers/Template';

export default class DomComponent extends Component {

    /**
     * An abstract class that all other DOM components can extend.
     *
     * @memberof Components
     * @class DomComponent
     * @extends Components.Component
     * @param {(object|undefined)} [attributes] - The instance attributes.
     */
    constructor(attributes) {
        super(Object.assign({
            parent: null
        }, attributes));

        if(!this.theme) {
            error(`${this.name} does not have a theme defined.`);
        }

        if(!this.language) {
            error(`${this.name} does not have a language defined.`);
        }

		if(!this.theme[this.name]) {
            throw new Error(
                `${this.name} cannot be rendered because it has no template.`
            );
        }
    }

    /**
     * Get the component's top level DOM node.
     *
     * @memberof Components.DomComponent
     * @return {HTMLElement} - The `el` attribute.
     */
    get el() {
        return this.$el;
    }

    /**
     * Set the component's top level DOM node.
     *
     * @memberof Components.DomComponent
     * @param  {(null|HTMLElement)} value - The `el` attribute.
     * @return {void}
     */
    set el(value) {
        if(!validate(value, null, HTMLElement)) {
            error(ConsoleMessages.element);
        }

        this.$el = value;
    }

    /**
     * Get the `parent` attribute. Parent is set when `DomComponent` instances are
     * mounted.
     *
     * @memberof Components.DomComponent
     * @return {DomComponent} - The `parent` attribute.
     */
    get parent() {
        return this.$parent;
    }

    /**
     * Set the parent attribute.
     *
     * @memberof Components.DomComponent
     * @param  {DomComponent} parent - The `parent` attribute value.
     * @return {DomComponent} - The `parent` attribute.
     */
    set parent(parent) {
        this.$parent = parent;
    }

    /**
     * Get the `theme` attribute.
     *
     * @memberof Components.DomComponent
     * @return {DomComponent} - The `theme` attribute.
     */
    get theme() {
        return this.$theme;
    }

    /**
     * Set the `theme` attribute.
     *
     * @memberof Components.DomComponent
     * @param  {object} value - The `theme` attribute.
     * @return {void}
     */
    set theme(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.value);
        }

        this.$theme = value;
    }

    /**
     * Get the language attribute.
     *
     * @memberof Components.DomComponent
     * @return {object} - The `language` attribute.
     */
    get language() {
        return this.$language;
    }

    /**
     * Set the language attribute.
     *
     * @memberof Components.DomComponent
     * @param  {object} value - The `language` attribute.
     * @return {object} - The `language` attribute.
     */
    set language(value) {
        if(isString(value)) {
            value = language(value);
        }

        if(!validate(value, 'object')) {
            error(ConsoleMessages.language);
        }

        this.$language = value;
    }

    /**
     * Translate a string.
     *
     * @memberof Components.DomComponent
     * @param  {string} string - The string to translate.
     * @return {string} - The translated string. If no tranlation found, the
     *     untranslated string is returned.
     */
    translate(string) {
        return translate(string, this.language);
    }

    /**
     * Alias to translate(string);
     *
     * @memberof Components.DomComponent
     * @alias DomComponent.translate
     */
    t(string) {
        return this.translate(string);
    }

    /**
     * Render the DOM component.
     *
     * @memberof Components.DomComponent
     * @return {HTMLElement} - The `el` attribute.
     */
	render() {
        const el = createElement('div', {
            class: this.className === 'flip-clock' ? this.className : 'flip-clock-' + this.className
        });

        this.theme[this.name](el, this);

        if(!this.el) {
            this.el = el;
        }
        else if(this.el.innerHTML !== el.innerHTML) {
            this.el = swap(el, this.el);
        }

        return this.el;
	}

    /**
     * Mount a DOM component to a parent node.
     *
     * @memberof Components.DomComponent
     * @param  {HTMLElement} parent - The parent DOM node.
     * @param  {(false|HTMLElement)} [before=false] - If `false`, element is
     *     appended to the parent node. If an instance of an `HTMLElement`,
     *     the component will be inserted before the specified element.
     * @return {HTMLElement} - The `el` attribute.
     */
    mount(parent, before = false) {
        this.render();
        this.parent = parent;

        if(!before) {
            this.parent.appendChild(this.el);
        }
        else {
            this.parent.insertBefore(this.el, before);
        }

        return this.el;
    }

}
