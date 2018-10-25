import { chain, callback, isObject, kebabCase } from '../Helpers/Functions';

export default class Component {

    constructor(attributes) {
        this.setAttribute(Object.assign({
            events: {}
        }, attributes));
    }

    get name() {
        return this.constructor.name;
    }

    get className() {
        return kebabCase(this.name);
    }

    get events() {
        return this.$events;
    }

    set events(value) {
        this.$events = value;
    }

    emit(key, ...args) {
        if(this.events[key]) {
            this.events[key].forEach(event => {
                event.apply(this, args);
            });
        }

        return this;
    }

    on(key, fn, once = false) {
        if(!this.events[key]) {
            this.events[key] = [];
        }

        this.events[key].push(fn);

        return this;
    }

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

    once(key, fn) {
        fn = chain(fn, () => this.off(key, fn));

        this.on(key, fn, true);
    }

    getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
    }

    getAttributes() {
        const attributes = {};

        Object.getOwnPropertyNames(this).forEach(key => {
            attributes[key] = this.getAttribute(key);
        });

        return attributes;
    }

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

    setAttribute(key, value) {
        if(isObject(key)) {
            this.setAttributes(key)
        }
        else {
            this[key] = value;
        }
    }

    setAttributes(values) {
        for(const i in values) {
            this.setAttribute(i, values[i]);
        }
    }

    callback(fn) {
        return callback.call(this, fn);
    }

    static make(...args) {
        return new this(...args);
    }

}
