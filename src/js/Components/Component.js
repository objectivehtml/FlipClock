import { chain, error, callback, isObject, kebabCase } from '../Helpers/Functions';

export default class Component {

    /**
     * Abstract base class.
     *
     * @class Component
     * @param {(object|undefined)} [attributes] - The instance attributes.
     */
    constructor(attributes) {
        this.setAttribute(Object.assign({
            events: {}
        }, attributes));
    }

    /**
     * Get the `name` attribute.
     *
     * @type {string}
     */
    get name() {
        if(!(this.constructor.defineName instanceof Function)) {
            error('Every class must define its name.');
        }

        return this.constructor.defineName();
    }

    /**
     * The `events` attribute.
     *
     * @type {object}
     */
    get events() {
        return this.$events || {};
    }

    set events(value) {
        this.$events = value;
    }

    /**
     * Emit an event.
     *
     * @param  {string} key - The event id/key.
     * @return {Component} - Returns `this` instance.
     */
    emit(key, ...args) {
        if(this.events[key]) {
            this.events[key].forEach(event => {
                event.apply(this, args);
            });
        }

        return this;
    }

    /**
     * Start listening to an event.
     *
     * @param  {string} key - The event id/key.
     * @param  {Function} fn - The listener callback function.
     * @param  {boolean} [once=false] - Should the event handler be fired a
     *     single time.
     * @return {Component} - Returns `this` instance.
     */
    on(key, fn, once = false) {
        if(!this.events[key]) {
            this.events[key] = [];
        }

        this.events[key].push(fn);

        return this;
    }

    /**
     * Stop listening to an event.
     *
     * @param {string} key - The event id/key.
     * @param {(Function|undefined)} fn - The listener callback function. If no
     *     function is defined, all events with the specified id/key will be
     *     removed. Otherwise, only the event listeners matching the id/key AND
     *     callback will be removed.
     * @return {Component} - Returns `this` instance.
     */
    off(key, fn) {
        if(this.events[key] && fn) {
            this.events[key] = this.events[key].filter(event => {
                return event !== fn;
            });
        }
        else {
            this.events[key] = [];
        }

        return this;
    }

    /**
     * Listen to an event only one time.
     *
     * @param  {string} key - The event id/key.
     * @param  {Function} fn - The listener callback function.
     * @return {Component} - Returns `this` instance.
     */
    once(key, fn) {
        fn = chain(fn, () => this.off(key, fn));

        return this.on(key, fn, true);
    }

    /**
     * Get an attribute. Returns null if no attribute is defined.
     *
     * @param  {string} key - The attribute name.
     * @return {*} - The attribute value.
     */
    getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
    }

    /**
     * Get all the atttributes for this instance.
     *
     * @return {object} - The attribute dictionary.
     */
    getAttributes() {
        const attributes = {};

        Object.getOwnPropertyNames(this).forEach(key => {
            attributes[key] = this.getAttribute(key);
        });

        return attributes;
    }

    /**
     * Get only public the atttributes for this instance. Omits any attribute
     * that starts with `$`, which is used internally.
     *
     * @return {object} - The attribute dictionary.
     */
    getPublicAttributes() {
        return Object.keys(this.getAttributes())
            .filter(key => {
                return !key.match(/^\$/);
            })
            .reduce((obj, key) => {
                obj[key] = this.getAttribute(key);
                return obj;
            }, {});
    }

    /**
     * Set an attribute key and value.
     *
     * @param  {string} key - The attribute name.
     * @param  {*} value - The attribute value.
     * @return {void}
     */
    setAttribute(key, value) {
        if(isObject(key)) {
            this.setAttributes(key);
        }
        else {
            this[key] = value;
        }
    }

    /**
     * Set an attributes by object of key/value pairs.
     *
     * @param  {object} values - The object dictionary.
     * @return {void}
     */
    setAttributes(values) {
        for(const i in values) {
            this.setAttribute(i, values[i]);
        }
    }

    /**
     * Helper method to execute the `callback()` function.
     *
     * @param  {Function} fn - The callback function.
     * @return {*} - Returns the executed callback function.
     */
    callback(fn) {
        return callback.call(this, fn);
    }

    /**
     * Factor method to static instantiate new instances. Useful for writing
     * clean expressive syntax with chained methods.
     *
     * @param  {...*} args - The callback arguments.
     * @return {*} - The new component instance.
     */
    static make(...args) {
        return new this(...args);
    }

}
