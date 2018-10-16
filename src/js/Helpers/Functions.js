export function error(message) {
    throw new Error(message);
}

export function callback(fn) {
    if(isFunction(fn)) {
        return fn.apply(this, [].slice.call(arguments).slice(1));
    }
}

export function noop(value) {
    return !isUndefined(value) && !isNull(value);
}

export function concatMap(fn) {
    return x => {
        return x.map(fn).reduce((x, y) => x.concat(y), []);
    }
}

export function flatten(x) {
    return concatMap(x => x)(x)
}

export function deepFlatten(x) {
    return concatMap(x => Array.isArray(x) ? deepFlatten (x) : x)(x);
}

export function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isNull(value) {
    return typeof value === 'null';
}

export function isUndefined(value) {
    return typeof value === 'undefined';
}

export function isClass(value) {
    return (value instanceof Function) && !!value.name;
}

export function isString(value) {
    return typeof value === 'string';
}

export function isArray(value) {
    return value instanceof Array;
}

export function isObject(value) {
    return value instanceof Object;
}

export function isFunction(value) {
    return value instanceof Function;
}
