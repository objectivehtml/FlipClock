const ranges = [{
    // 0-9
    min: 48,
    max: 57
},{
    // a-z
    min: 65,
    max: 90
},{
    // A-Z
    min: 97,
    max: 122
}];

function format(value, type) {
    switch(type) {
        case 'number':
            return parseFloat(value);
    }

    return value;
}

function findRange(char) {
    for(const i in ranges) {
        const code = char.toString().charCodeAt(0);

        if(ranges[i].min <= code && ranges[i].max >= code) {
            return ranges[i];
        }
    }

    return null;
}

export function next(value) {
    const converted = (value)
        .toString()
        .split('')
        .map(char => charCode(char, (range, code) => {
            return !range || code < range.max ? code + 1 : range.min
        }))
        .join('');

    return format(converted, typeof value);
}

function charCode(char, fn) {
    const range = findRange(char);
    const code = char.charCodeAt(0);
    return String.fromCharCode(fn(range, code));
}

export function prev(value) {
    const converted = (value)
        .toString()
        .split('')
        .map(char => charCode(char, (range, code) => {
            return !range || code > range.min ? code - 1 : range.max
        }))
        .join('');

    return format(converted, typeof value);
}
