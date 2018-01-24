(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var is = function(instance, proto) {
    return instance instanceof proto;
};

var isFunction = function(subject) {
    return subject !== null && typeof subject === "function";
};

class BroadcastEvent {

    constructor(key, callback) {
        this.key = key;
        this.allowMultipleEmits = true;

        if(isFunction(callback)) {
            this.handle = callback;
        }
    }

    allowsMultipleEmits() {
        return !!this.allowMultipleEmits;
    }

    once() {
        this.allowMultipleEmits = false;

        return this;
    }

    handle() {
        //
    }

}

class BroadcastReply {

    constructor(key, callback) {
        this.key = key;
        this.allowMultipleRequests = false;

        if(typeof callback === "function") {
            this.handle = callback;
        }
    }

    allowsMultipleRequests() {
        return !!this.allowMultipleRequests;
    }

    once() {
        this.allowMultipleRequests = true;

        return this;
    }

    handle() {
        //
    }

}

class Dispatcher {

    constructor(channel) {
        this.channel = channel;
        this._events = [];
        this._replies = [];
    }

    createEvent(key, callback) {
        return !is(key, BroadcastEvent) ? new BroadcastEvent(key, callback) : key;
    }

    hasEvent(key) {
        return !!this.getEvent(key);
    }

    getEvent(key) {
        return this._events[key] || null;
    }

    setEvent(key, value) {
        if(key instanceof BroadcastEvent) {
            value = key;
            key = value.key;
        }

        if(!value instanceof BroadcastEvent) {
            throw new Error('The value argument must be an instance of BroadcastEvent');
        }

        return this._events[key] = value;
    }

    getEvents() {
        return this._events;
    }

    on(key, callback) {
        const event = this.createEvent(key, callback);

        this._events.push(event);

        return event;
    }

    once(key, callback) {
        const event = this.createEvent(key, callback);

        this.on(event.once());

        return event;
    }

    off(key) {
        const removed = [];

        for(let i in this._events) {
            if(is(key, BroadcastEvent) && key == this._events[i] || key === this._events[i].key) {
                removed.push(this._events[i]);
                delete this._events[i];
            }
        }

        return removed;
    }

    emit(event) {
        const args = [].slice.call(arguments).slice(1);

        for(let i in this._events) {
            if(this._events[i].key === (event.key || event)) {
                this._events[i].handle.apply(this, args);

                if(!this._events[i].allowsMultipleEmits()) {
                    delete this._events[i];
                }
            }
        }
    }

    createReply(key, callback) {
        return !is(key, BroadcastReply) ? new BroadcastReply(key, callback) : key;
    }

    hasReply(key) {
        return !!this.getReply(key);
    }

    getReply(key) {
        return this._replies[key] || null;
    }

    setReply(key, value) {
        if(key instanceof BroadcastReply) {
            value = key;
            key = value.key;
        }

        if(!value instanceof BroadcastReply) {
            throw new Error('The value argument must be an instance of BroadcastReply');
        }

        return this._replies[key] = value;
    }

    getReplies() {
        return this._replies;
    }

    request(reply, context) {
        const args = [].slice.call(arguments).slice(1);

        if(!this._replies[reply.key || reply]) {
            throw new Error('No BroadcastReply exists by the name "'+(reply.key || reply)+'"!');
        }

        const handle = this._replies[reply.key || reply].handle;

        return new Promise(function(resolve, reject) {
            handle.apply(this, [resolve, reject].concat(args));
        });
    }

    reply(key, callback) {
        const reply = this.createReply(key, callback);

        return this._replies[reply.key] = reply;
    }

    stopReply(key) {
        delete this._replies[reply.key || reply];
    }

}

//import 'es6-promise/auto';
class BroadcastManager {

    constructor(channel) {
        this._dispatchers = {};
        this.defaultChannel = 'app';
        this.dispatch(channel || this.defaultChannel);
    }

    dispatch(channel) {
        channel || (channel = this.defaultChannel);

        if(this.doesDispatchExist(channel)) {
            return this._dispatchers[channel];
        }

        return this.registerDispatch(new Dispatcher(channel));
    }

    doesDispatchExist(instance) {
        return !!this._dispatchers[instance.channel || instance];
    }

    registerDispatch(instance) {
        if(!is(instance, Dispatcher)) {
            throw new Error('The argument must be an instance of Broadcast/BroadcastDispatch!');
        }

        if(this.doesDispatchExist(instance.channel)) {
            throw new Error('There is already a Broadcast/BroadcastDispatch instance assigned to "'+instance.channel+'"!');
        }

        return this._dispatchers[instance.channel] = instance;
    }

    unregisterDispatch(dispatch) {
        unset(this._dispatchers[dispatch.channel || dispatch]);
    }

}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$2.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$2.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;

function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;

var each = forEach_1;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Component = function () {

	/**
  * Constructor use to set the default properties and options
  * @param  ....
 */
	function Component() {
		classCallCheck(this, Component);

		this.el = null;
		this.channel = 'flipclock';
		this.options = this.defaultOptions();
		this.properties.apply(this, arguments);
		this.setOptions(arguments[arguments.length - 1]);
		this.registerDispatch(this.channel);
		this.initialize.apply(this, arguments);
	}

	/**
  * Initialize the class after all settings/getters have ran
  *
  * @param  ....
 */


	createClass(Component, [{
		key: 'initialize',
		value: function initialize() {}
		//


		/**
   * Set the default properties for the class
   *
   * @param 	null|Object  An object of options
  */

	}, {
		key: 'properties',
		value: function properties(options) {}
		//


		/**
   * Register the event dispatcher
   *
   * @param	String	The name of the dispatch channel
  */

	}, {
		key: 'registerDispatch',
		value: function registerDispatch(channel) {
			var _this = this;

			var dispatch = this.$dispatch = new BroadcastManager().dispatch(channel);

			each(this.$dispatchMethods = ['on', 'once', 'off', 'emit', 'request', 'reply', 'stopReply'], function (method) {
				_this[method] = function () {
					return dispatch[method].apply(dispatch, arguments);
				};
			});
		}

		/**
   * Delegates the callback to the defined method
   *
   * @param  {function} method - The callback function
   * @return Object
  */

	}, {
		key: 'callback',
		value: function callback(method) {
			if (typeof method === "function") {
				var args = [];

				for (var x = 1; x <= arguments.length; x++) {
					if (arguments[x]) {
						args.push(arguments[x]);
					}
				}

				method.apply(this, args);
			}

			return this;
		}

		/**
   * Log a string into the console if it exists
   *
   * @param  {string} str - The string to log
   * @return mixed
  */

	}, {
		key: 'log',
		value: function log(str) {
			if (window.console && console.log) {
				console.log(str);
			}

			return this;
		}

		/**
   * Get an single option value. Returns false if option does not exist
   *
   * @param  {string} index - The name of the option
   * @return mixed
  */

	}, {
		key: 'getOption',
		value: function getOption(index) {
			if (this.options.hasOwnProperty(index)) {
				return this.options[index];
			}
			return null;
		}

		/**
   * Get all options
   *
   * @return	bool
  */

	}, {
		key: 'getOptions',
		value: function getOptions() {
			return this.options;
		}

		/**
   * Set a single option value
   *
   * @param  {string} index - The name of the option
   * @param  {string} value - The value of the option
   * @return Object
  */

	}, {
		key: 'setOption',
		value: function setOption(index, value) {
			if (this.hasOwnProperty(index) || typeof this[index] === "function" || index in this) {
				this[index] = value;
			} else {
				this.options[index] = value;
			}

			return this;
		}

		/**
   * Set a multiple options by passing a JSON object
   *
   * @param  {object} - An object of options to set
   * @return Object
  */

	}, {
		key: 'setOptions',
		value: function setOptions(options) {
			for (var key in options) {
				if (typeof options[key] !== "undefined") {
					this.setOption(key, options[key]);
				}
			}

			return this;
		}

		/*
   * Get the default options for the class
   *
   * @return Object
  */

	}, {
		key: 'defaultOptions',
		value: function defaultOptions() {
			return {};
		}

		/*
   * Translate a string to the localized locale
   *
   * @param  {string} name - The name of the string to localize
   * @return string
  */

	}, {
		key: 'localize',
		value: function localize(name) {
			if (this.translator) {
				return this.translator.localize(name);
			}

			return name;
		}

		/*
   * Helper method for localize. t() is just short.
   *
   * @param  {string} name - The name of the string to localize
   * @return string
  */

	}, {
		key: 't',
		value: function t(name) {
			return this.localize(name);
		}

		/*
   * Helper method to create DOM nodes.
   *
   * @param  {string} name - The name of the string to localize
   * @return string
  */

	}, {
		key: '$el',
		value: function $el(html) {
			var template = document.createElement('template');
			template.innerHTML = (isArray_1(html) ? html.join('') : '').trim();
			this.el = template.content.firstChild;
		}
	}]);
	return Component;
}();

var Timer = function (_Component) {
    inherits(Timer, _Component);

    function Timer() {
        classCallCheck(this, Timer);
        return possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));
    }

    createClass(Timer, [{
        key: 'properties',


        /**
         * Set the default properties for the class
         *
         * @param 	null|Object  An object of options
        */
        value: function properties() {
            this.count = 0;
            this.running = false;
        }

        /*
         * Get the default options for the class
         *
         * @return object
        */

    }, {
        key: 'defaultOptions',
        value: function defaultOptions() {
            return {
                // Timer interval (1 second by default)
                interval: 1000,
                // The rate of the animation in milliseconds (not currently in use)
                animationRate: 1000
            };
        }

        /**
         * Gets the elapsed the time as an interger
         *
         * @return	int
         */

    }, {
        key: 'getElapsed',
        value: function getElapsed() {
            return this.count * this.getOption('interval');
        }

        /**
         * Returns true is the timer is running, and false if it's not
         *
         * @return	Boolean
         */

    }, {
        key: 'isRunning',
        value: function isRunning() {
            return !!this.running;
        }

        /**
         * Returns true is the timer is not running, and false if it is
         *
         * @return	Boolean
         */

    }, {
        key: 'isStopped',
        value: function isStopped() {
            return this.running === false;
        }

        /**
         * Resets the timer. This method is chainable.
         *
         * @param 	function callback
         * @return	object
         */

    }, {
        key: 'reset',
        value: function reset(callback) {
            this._clearInterval(callback);
            this._setInterval(callback);
            this.count = 0;
            this.emit('reset');

            return this;
        }

        /**
         * Starts the timer. This method is chainable.
         *
         * @param 	function callback
         * @return	object
         */

    }, {
        key: 'start',
        value: function start(callback) {
            this.running = true;
            this._setInterval(callback);

            return this;
        }

        /**
         * Stops the timer. This method is chainable.
         *
         * @param 	function callback
         * @return	object
         */

    }, {
        key: 'stop',
        value: function stop(callback) {
            var _this2 = this;

            this._clearInterval();

            setTimeout(function () {
                _this2.running = false;
                _this2.callback(callback);
                _this2.emit('stop');
            }, this.getOption('interval'));

            return this;
        }

        /**
         * Destroy the timer. This method is chainable.
         *
         * @param 	function callback
         * @return	object
         */

    }, {
        key: 'destroy',
        value: function destroy(callback) {
            var _this3 = this;

            this._destroyTimer(function () {
                _this3.running = false;
                _this3.callback(callback);
                _this3.emit('destroy');
            });

            return this;
        }

        /**
         * Clear the timer interval
         *
         * @return	void
         */

    }, {
        key: '_clearInterval',
        value: function _clearInterval() {
            clearInterval(this.timer);
            this.timer = false;
        }

        /**
         * Create the timer object
         *
         * @param 	function callback
         * @return	void
         */

    }, {
        key: '_createTimer',
        value: function _createTimer(callback) {
            this._setInterval(callback);
        }

        /**
         * Destroy the timer object
         *
         * @param 	function callback
         * @return	void
         */

    }, {
        key: '_destroyTimer',
        value: function _destroyTimer(callback) {
            this._clearInterval();
            this.callback(callback);
            this.emit('destroy');
        }

        /**
         * This method is called each time the timer interval is ran
         *
         * @param 	function callback
         * @return	void
         */

    }, {
        key: '_interval',
        value: function _interval(callback) {
            this.callback(callback);
            this.emit('interval');
            this.count++;
        }

        /**
         * Sets the timer interval
         *
         * @param 	function callback
         * @return	void
         */

    }, {
        key: '_setInterval',
        value: function _setInterval(callback) {
            var _this4 = this;

            this.timer = setInterval(function () {
                if (_this4.running) {
                    _this4._interval(callback);
                }
            }, this.getOption('interval'));
            this.emit('start');
            this._interval(callback);
        }
    }]);
    return Timer;
}(Component);

var Uuid = function (_Component) {
	inherits(Uuid, _Component);

	function Uuid() {
		classCallCheck(this, Uuid);
		return possibleConstructorReturn(this, (Uuid.__proto__ || Object.getPrototypeOf(Uuid)).apply(this, arguments));
	}

	createClass(Uuid, [{
		key: 'properties',


		/**
   * Set the default properties for the class
   *
   * @param 	null|Object  An object of options
  */
		value: function properties(value) {
			this.value = value || this.generate();
			this.pattern = "[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}";
		}

		/*
   * Generate a new Uuid
   *
   * @return string
  */

	}, {
		key: 'generate',
		value: function generate() {
			var d = new Date().getTime();
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
		}

		/*
   * Does this uuid equal another uuid object
   *
   * @param  object
   * @return bool
  */

	}, {
		key: 'equals',
		value: function equals(value) {
			return this.isUuid(value) && this === value;
		}

		/*
   * Tests another value to see if it's a uuid
   *
   * @param  mixed
   * @return bool
  */

	}, {
		key: 'isUuid',
		value: function isUuid(value) {
			return new RegExp(this.pattern, "i").test(value && value.toString ? value.toString() : value);
		}

		/*
   * Outputs the object instance as a string
   *
   * @return string
  */

	}, {
		key: 'toString',
		value: function toString() {
			return this.value;
		}
	}]);
	return Uuid;
}(Component);

var ListItem = function (_Component) {
	inherits(ListItem, _Component);

	function ListItem() {
		classCallCheck(this, ListItem);
		return possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
	}

	createClass(ListItem, [{
		key: 'properties',


		/**
   * Set the default properties for the class
   *
   * @param  mixed  A single digit value used for the label
  */
		value: function properties(value) {
			this.el = null;
			this.value = value || null;
		}

		/*
   * Get the default options for the class
   *
   * @return object
  */

	}, {
		key: 'defaultOptions',
		value: function defaultOptions() {
			return {
				// The css class appended to the parent DOM node
				className: null,

				// An object of available CSS classes
				classes: {
					down: 'down',
					inn: 'inn',
					shadow: 'shadow',
					up: 'up'
				}
			};
		}
	}, {
		key: 'initialize',
		value: function initialize() {
			this.$el(['<li class="' + (this.getOption('className') ? this.getOption('className') : '') + '">', '<a href="#">', '<div class="' + this.getOption('classes').up + '">', '<div class="' + this.getOption('classes').shadow + '"></div>', '<div class="' + this.getOption('classes').inn + '">' + this.value + '</div>', '</div>', '<div class="' + this.getOption('classes').down + '">', '<div class="' + this.getOption('classes').shadow + '"></div>', '<div class="' + this.getOption('classes').inn + '">' + this.value + '</div>', '</div>', '</a>', '</li>']);
		}

		/*
   * Output the object instance as a string
   *
   * @return string
  */

	}, {
		key: 'toString',
		value: function toString() {
			return this.el.outerHTML;
		}
	}]);
	return ListItem;
}(Component);

var t = {
    true: function _true() {
        console.log.apply(this, arguments);
    },
    false: function _false() {
        console.log.apply(this, arguments);
    }
};

var instance = new ListItem(1, {
    className: 'some-class-name'
});

t.true(instance.value === 1);
t.true(instance.getOption('className') === 'some-class-name');

})));
//# sourceMappingURL=flipclock.js.map
