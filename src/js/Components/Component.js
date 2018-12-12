import { chain, callback, isObject, kebabCase } from '../Helpers/Functions';

export default class Component {

    /**
     * Abstract base class.
     *
     * @class Component
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Components
     */
    constructor(attributes) {
        this.setAttribute(Object.assign({
            events: {}
        }, attributes));
    }

    /**
     * Get the `name` attribute. Uses the `this.constructor.name` by default.
     *
     * @memberof Components.Component
     * @return {string} - The `name` attribute.
     */
    get name() {
        return this.constructor.name;
    }

    /**
     * Get the `className` attribute. Used for CSS. Kebab cases the `name`
     * property by default.
     *
     * @memberof Components.Component
     * @return {string} - The `className` attribute.
     */
    get className() {
        return kebabCase(this.name);
    }

    /**
     * Get the `events` attribute.
     *
     * @memberof Components.Component
     * @return {Array} - The `events` attribute.
     */
    get events() {
        return this.$events || [];
    }

    /**
     * Set the registered events for this class.
     *
     * @memberof Components.Component
     * @param  {Array} value - The new events array.
     * @return {void}
     */
    set events(value) {
        this.$events = value;
    }

    /**
     * Emit an event.
     *
     * @memberof Components.Component
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
     * @memberof Components.Component
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
     * @memberof Components.Component
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
     * @memberof Components.Component
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
     * @memberof Components.Component
     * @param  {string} key - The attribute name.
     * @return {*} - The attribute value.
     */
    getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
    }

    /**
     * Get all the atttributes for this instance.
     *
     * @memberof Components.Component
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
     * @memberof Components.Component
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
     * @memberof Components.Component
     * @param  {string} key - The attribute name.
     * @param  {*} value - The attribute value.
     * @return {void}
     */
    setAttribute(key, value) {
        if(isObject(key)) {
            this.setAttributes(key)
        }
        else {
            this[key] = value;
        }
    }

    /**
     * Set an attributes by object of key/value pairs.
     *
     * @memberof Components.Component
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
     * @memberof Components.Component
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
     * @memberof Components.Component
     * @param  {...*} args - The callback arguments.
     * @return {*} - The new component instance.
     */
    static make(...args) {
        return new this(...args);
    }

}
