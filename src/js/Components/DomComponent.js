import Component from './Component';
import validate from '../Helpers/Validate';
import translate from '../Helpers/Translate';
import { error } from '../Helpers/Functions';
import { kebabCase } from '../Helpers/Functions';
import ConsoleMessages from '../Config/ConsoleMessages';
import { swap, createElement } from '../Helpers/Template';

export default class DomComponent extends Component {

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

    get el() {
        return this.$el;
    }

    set el(value) {
        if(!validate(value, null, HTMLElement)) {
            error(ConsoleMessages.element);
        }

        this.$el = value;
    }

    get parent() {
        return this.$parent;
    }

    set parent(parent) {
        this.$parent = parent;
    }

    get theme() {
        return this.$theme;
    }

    set theme(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.value);
        }

        this.$theme = value;
    }

    get language() {
        return this.$language;
    }

    set language(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.language);
        }

        this.$language = value;
    }

    get name() {
        return this.constructor.name;
    }

    get className() {
        return kebabCase(this.name);
    }

    translate(key) {
        return translate(key, this.language);
    }

    t(key) {
        return this.translate(key);
    }

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

    mount(parent) {
        const el = this.render();

        this.parent = parent;
        this.parent.appendChild(el);

        return el;
    }

}
