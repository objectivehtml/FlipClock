import { callback } from '../Helpers/Functions';
import { isObject } from '../Helpers/Functions';

export default class Component {

    constructor(attributes) {
        this.setAttribute(attributes);
    }

    getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
    }

    getAttributes() {
        return Object.getOwnPropertyNames(this).map(key => {
            return this.getAttribute(key);
        });
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
