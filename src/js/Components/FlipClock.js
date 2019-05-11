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
import { flatten, isNull, isString, isObject, isUndefined, isFunction, error } from '../Helpers/Functions';

export default class FlipClock extends DomComponent {
   
    /**
     * Create a new `FlipClock` instance.
     *
     * @class FlipClock
     * @extends DomComponent
     * @param {HTMLElement} el - The HTML element used to bind clock DOM node.
     * @param {*} value - The value that is passed to the clock face.
     * @param {object|undefined} attributes - {@link FlipClock.Options} passed an object with key/value.
     */
        
    /**
     * @namespace FlipClock.Options
     * @classdesc An object of key/value pairs that will be used to set the attributes.
     * 
     * ##### Example:
     * 
     *     {
     *        face: 'DayCounter',
     *        language: 'es',
     *        timer: Timer.make(500)
     *     }
     * 
     * @property {string|Face} [face={@link Faces.DayCounter}] - The clock's {@link Face} instance.
     * @property {number} [interval=1000] - The clock's interval rate (in milliseconds).
     * @property {object} [theme={@link Themes.Original}] - The clock's theme.
     * @property {string|object} [language={@link Languages.English}] - The clock's language.
     * @property {Timer} [timer={@link Timer}] - The clock's timer.
     */
    
    constructor(el, value, attributes) {
        if(!validate(el, HTMLElement)) {
            error(ConsoleMessages.element);
        }

        if(isObject(value) && !attributes) {
            attributes = value;
            value = undefined;
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

    /**
     * The clock `Face`.
     *
     * @type {Face}
     */
    get face() {
        return this.$face;
    }

    set face(value) {
        if(!validate(value, [Face, 'string', 'function'])) {
            error(ConsoleMessages.face);
        }

        this.$face = (Faces[value] || value).make(Object.assign(this.getPublicAttributes(), {
            originalValue: this.face ? this.face.originalValue : undefined
        }));

        this.$face.initialized(this);

        if(this.value) {
            this.$face.value = this.face.createFaceValue(this, this.value.value);
        }
        else if(!this.value) {
            this.value = this.originalValue;
        }

        this.el && this.render();
    }

    /**
     * The `stopAt` attribute.
     *
     * @type {*}
     */
    get stopAt() {
        return isFunction(this.$stopAt) ? this.$stopAt(this) : this.$stopAt;
    }

    set stopAt(value) {
        this.$stopAt = value;
    }

    /**
     * The `timer` instance.
     *
     * @type {Timer}
     */
    get timer() {
        return this.$timer;
    }

    set timer(timer) {
        if(!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
        }

        this.$timer = timer;
    }

    /**
     * Helper method to The clock's `FaceValue` instance.
     *
     * @type {FaceValue|null}
     */
    get value() {
        return this.face ? this.face.value : null;
    }

    set value(value) {
        if(!this.face) {
            throw new Error('A face must be set before setting a value.');
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

    /**
     * The `originalValue` attribute.
     *
     * @type {*}
     */
    get originalValue() {
        if(isFunction(this.$originalValue) && !this.$originalValue.name) {
            return this.$originalValue();
        }

        if(!isUndefined(this.$originalValue) && !isNull(this.$originalValue)) {
            return this.$originalValue;
        }

        return this.face ? this.face.defaultValue() : undefined;
    }

    set originalValue(value) {
        this.$originalValue = value;
    }

    /**
     * Mount the clock to the parent DOM element.
     *
     * @param  {HTMLElement} el - The parent `HTMLElement`.
     * @return {FlipClock} - The `FlipClock` instance.
     */
    mount(el) {
        super.mount(el);

        this.face.mounted(this);

        return this;
    }

    /**
     * Render the clock's DOM nodes.
     *
     * @return {HTMLElement} - The parent `HTMLElement`.
     */
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

        // Return the rendered `HTMLElement`.
        return this.el;
    }

    /**
     * Start the clock.
     *
     * @param  {Function} fn - The interval callback.
     * @return {FlipClock} - The `FlipClock` instance.
     */
    start(fn) {
        if(!this.timer.started) {
            this.value = this.originalValue;
        }

        isUndefined(this.face.stopAt) && (this.face.stopAt = this.stopAt);
        isUndefined(this.face.originalValue) && (this.face.originalValue = this.originalValue);

        this.timer.start(() => {
            this.face.interval(this, fn);
        });

        this.face.started(this);

        return this.emit('start');
    }

    /**
     * Stop the clock.
     *
     * @param  {Function} fn - The stop callback.
     * @return {FlipClock} - The `FlipClock` instance.
     */
    stop(fn) {
        this.timer.stop(fn);
        this.face.stopped(this);

        return this.emit('stop');
    }

    /**
     * Reset the clock to the original value.
     *
     * @param  {Function} fn - The interval callback.
     * @return {FlipClock} - The `FlipClock` instance.
     */
    reset(fn) {
        this.value = this.originalValue;
        this.timer.reset(() => this.interval(this, fn));
        this.face.reset(this);

        return this.emit('reset');
    }

    /**
     * Helper method to increment the clock's value.
     *
     * @param  {*|undefined} value - Increment the clock by the specified value.
     *     If no value is passed, then the default increment is determined by
     *     the Face, which is usually `1`.
     * @return {FlipClock} - The `FlipClock` instance.
     */
    increment(value) {
        this.face.increment(this, value);

        return this;
    }

    /**
     * Helper method to decrement the clock's value.
     *
     * @param  {*|undefined} value - Decrement the clock by the specified value.
     *     If no value is passed, then the default decrement is determined by
     *     the `Face`, which is usually `1`.
     * @return {FlipClock} - The `FlipClock` instance.
     */
    decrement(value) {
        this.face.decrement(this, value);

        return this;
    }

    /**
     * Helper method to instantiate a new `Divider`.
     *
     * @param  {object|undefined} [attributes] - The attributes passed to the
     *     `Divider` instance.
     * @return {Divider} - The instantiated Divider.
     */
    createDivider(attributes) {
        return Divider.make(Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    /**
     * Helper method to instantiate a new `List`.
     *
     * @param  {*} value - The `List` value.
     * @param  {object|undefined} [attributes] - The attributes passed to the
     *     `List` instance.
     * @return {List} - The instantiated `List`.
     */
    createList(value, attributes) {
        return List.make(value, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    /**
     * Helper method to instantiate a new `Label`.
     *
     * @param  {*} value - The `Label` value.
     * @param  {object|undefined} [attributes] - The attributes passed to the
     *     `Label` instance.
     * @return {Label} - The instantiated `Label`.
     */
    createLabel(value, attributes) {
        return Label.make(value, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    /**
     * Helper method to instantiate a new `Group`.
     *
     * @param  {array} items - An array of `List` items to group.
     * @param  {Group|undefined} [attributes] - The attributes passed to the
     *     `Group` instance.
     * @return {Group} - The instantiated `Group`.
     */
    createGroup(items, attributes) {
        return Group.make(items, Object.assign({
            theme: this.theme,
            language: this.language
        }, attributes));
    }

    /**
     * The `defaults` attribute.
     *
     * @type {object}
     */
    static get defaults() {
        return DefaultValues;
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'FlipClock';
    }

    /**
     * Helper method to set the default `Face` value.
     *
     * @param  {Face} value - The default `Face` class.This should be a
     *     constructor.
     * @return {void}
     */
    static setDefaultFace(value) {
        if(!validate(value, Face)) {
            error(ConsoleMessages.face);
        }

        DefaultValues.face = value;
    }

    /**
     * Helper method to set the default theme.
     *
     * @param {object} value - The default theme.
     * @return {void}
     */
    static setDefaultTheme(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.theme);
        }

        DefaultValues.theme = value;
    }

    /**
     * Helper method to set the default language.
     *
     * @param {object} value - The default language.
     * @return {void}
     */
    static setDefaultLanguage(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.language);
        }

        DefaultValues.language = value;
    }

}
