import Face from './Face';
import List from './List';
import Group from './Group';
import Label from './Label';
import Timer from './Timer';
import Divider from './Divider';
import * as Faces from '../Faces';
import FaceValue from './FaceValue';
import DomComponent from './DomComponent';
import validate from '../Helpers/Validate';
import DefaultValues from '../Config/DefaultValues';
import ConsoleMessages from '../Config/ConsoleMessages';
import { flatten, isString, isObject, isUndefined, isFunction, error } from '../Helpers/Functions';

export default class FlipClock extends DomComponent {

    constructor(el, value, attributes) {
        if(!validate(el, HTMLElement)) {
            error(ConsoleMessages.element);
        }

        if(isObject(value) && !attributes) {
            attributes = value;
            value = null;
        }

        const face = attributes.face || DefaultValues.face;

        delete attributes.face;

        super(Object.assign({
            originalValue: value,
            theme: DefaultValues.theme,
            language: DefaultValues.language,
            timer: Timer.make(attributes.interval || 1000),
        }, attributes));

        if(!this.face) {
            this.face = face;
        }

        this.mount(el);
    }

    get face() {
        return this.$face;
    }

    set face(value) {
        if(!validate(value, [Face, 'string', 'function'])) {
            error(ConsoleMessages.face);
        }

        const currentFaceValue = this.value;

        this.$face = (Faces[value] || value).make(Object.assign(this.getPublicAttributes(), {
            originalValue: this.face ? this.face.originalValue : undefined
        }));

        if(currentFaceValue) {
            this.$face.value = this.face.createFaceValue(this, currentFaceValue.value);
        }
        else if(!this.value) {
            this.value = this.originalValue;
        }

        this.$face.initialized(this);
        this.el && this.render();
    }

    get stopAt() {
        return isFunction(this.$stopAt) ? this.$stopAt(this) : this.$stopAt;
    }

    set stopAt(value) {
        this.$stopAt = value;
    }

    get timer() {
        return this.$timer;
    }

    set timer(timer) {
        if(!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
        }

        this.$timer = timer;
    }

    get value() {
        return this.face ? this.face.value : null;
    }

    set value(value) {
        if(!this.face) {
            throw new Error('A face must be set before setting a value.')
        }

        if(value instanceof FaceValue) {
            this.face.value = value;
        }
        else if(this.value) {
            this.face.value = this.face.value.clone(value);
        }
        else {
            this.face.value = this.face.createFaceValue(this, value);
        }

        this.el && this.render();
    }

    get originalValue() {
        return (
            isFunction(this.$originalValue) && !this.$originalValue.name
        ) ? this.$originalValue() : this.$originalValue;
    }

    set originalValue(value) {
        this.$originalValue = value;
    }

    /*
    bindFaceEvents() {
        const fn = () => this.updated();

        this.$face.off('updated', fn).on('updated', fn);

        ['updated', 'start', 'stop', 'reset', 'interval'].forEach(event => {
            const fn = () => this.emit(event);

            this.face.off(event, fn).on(event, fn);
        });
    }
    */

    updated() {
        this.render();

        console.log('dated');
    }

    mount(el) {
        super.mount(el);

        this.face.mounted(this);

        return this;
    }

    render() {
        // Call the parent render function
        super.render();

        // Check to see if the face has a render function defined in the theme.
        // This allows a face to completely re-render or add to the theme.
        // This allows face specific interfaces for a theme.
        if(this.theme.faces[this.face.name]) {
            this.theme.faces[this.face.name](this.el, this);
        }

        // Pass the clock instance to the rendered() function on the face.
        // This allows global modifications to the rendered templates not
        // theme specific.
        this.face.rendered(this);

        // Return the rendered element.
        return this.el;
    }

    start(fn) {
        if(!this.timer.started) {
            this.value = this.originalValue;
        }

        isUndefined(this.face.stopAt) && (this.face.stopAt = this.stopAt);
        isUndefined(this.face.originalValue) && (this.face.originalValue = this.originalValue);

        this.timer.start(() => {
            this.face.interval(this, fn)
        });

        this.face.started(this);

        return this.emit('start');
    }

    stop(fn) {
        this.timer.stop(fn);
        this.face.stopped(this);

        return this.emit('stop');
    }

    reset(fn) {
        this.timer.reset(() => this.interval(this, fn));
        this.face.reset(this);

        return this.emit('reset');
    }

    increment(value) {
        this.face.increment(this, value);
    }

    decrement(value) {
        this.face.decrement(this, value);
    }

    createDivider(attributes) {
        return Divider.make(Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    createList(value, attributes) {
        return List.make(value, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    createLabel(value, attributes) {
        return Label.make(value, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    createGroup(items, attributes) {
        return Group.make(items, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    static get defaults() {
        return DefaultValues;
    }

    static setDefaultFace(value) {
        if(!validate(value, Face)) {
            error(ConsoleMessages.face);
        }

        DefaultValues.face = value;
    }

    static setDefaultTheme(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.theme);
        }

        DefaultValues.theme = value
    }

    static setDefaultLanguage(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.language);
        }

        DefaultValues.language = value;
    }

}
