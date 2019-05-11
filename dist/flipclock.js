(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.FlipClock = factory());
}(this, (function () { 'use strict';

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }

      return object;
    }

    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);

          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(receiver);
          }

          return desc.value;
        };
      }

      return _get(target, property, receiver || target);
    }

    /**
     * These are a collection of helper functions, some borrowed from Lodash,
     * Underscore, etc, to provide common functionality without the need for using
     * a dependency. All of this is an attempt to reduce the file size of the
     * library.
     *
     * @namespace Helpers.Functions
     */

    /**
     * Throw a string as an Error exception.
     *
     * @function error
     * @param  {string} string - The error message.
     * @return {void}
     * @memberof Helpers.Functions
     */
    function error(string) {
      throw Error(string);
    }
    /**
     * Check if `fn` is a function, and call it with `this` context and pass the
     * arguments.
     *
     * @function callback
     * @param  {string} string - The callback fn.
     * @param  {...*} args - The arguments to pass.
     * @return {void}
     * @memberof Helpers.Functions
     */

    function callback(fn) {
      if (isFunction(fn)) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return fn.call.apply(fn, [this].concat(args));
      }
    }
    /**
     * Round the value to the correct value. Takes into account negative numbers.
     *
     * @function round
     * @param  {value} string - The value to round.
     * @return {string} - The rounded value.
     * @memberof Helpers.Functions
     */

    function round(value) {
      return isNegativeZero(value = isNegative(value) ? Math.ceil(value) : Math.floor(value)) ? ('-' + value).toString() : value;
    }
    /**
     * Returns `true` if `undefined or `null`.
     *
     * @function noop
     * @param  {value} string - The value to check.
     * @return {boolean} - `true` if `undefined or `null`.
     * @memberof Helpers.Functions
     */

    function noop(value) {
      return !isUndefined(value) && !isNull(value);
    }
    /**
     * Returns a function that executes the `before` attribute and passes that value
     * to `after` and the subsequent value is returned.
     *
     * @function chain
     * @param  {function} before - The first function to execute.
     * @param  {function} after - The subsequent function to execute.
     * @return {function} - A function that executes the chain.
     * @memberof Helpers.Functions
     */

    function chain(before, after) {
      return function () {
        return after(before());
      };
    }
    /**
     * Returns a function that returns maps the values before concatenating them.
     *
     * @function concatMap
     * @param  {function} fn - The map callback function.
     * @return {function} - A function that executes the map and concatenation.
     * @memberof Helpers.Functions
     */

    function concatMap(fn) {
      return function (x) {
        return x.map(fn).reduce(function (x, y) {
          return x.concat(y);
        }, []);
      };
    }
    /**
     * Flatten an array.
     *
     * @function flatten
     * @param  {array} value - The array to flatten.
     * @return {array} - The flattened array.
     * @memberof Helpers.Functions
     */

    function flatten(value) {
      return concatMap(function (value) {
        return value;
      })(value);
    }
    /**
     * Deep flatten an array.
     *
     * @function deepFlatten
     * @param  {array} value - The array to flatten.
     * @return {array} - The flattened array.
     * @memberof Helpers.Functions
     */

    function deepFlatten(x) {
      return concatMap(function (x) {
        return Array.isArray(x) ? deepFlatten(x) : x;
      })(x);
    }
    /**
     * Returns the length of a deep flatten array.
     *
     * @function length
     * @param  {array} value - The array to count.
     * @return {number} - The length of the deep flattened array.
     * @memberof Helpers.Functions
     */

    function length(value) {
      return deepFlatten(value).length;
    }
    /**
     * Determines if a value is a negative zero.
     *
     * @function isNegativeZero
     * @param  {number} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a negative zero (`-0`).
     * @memberof Helpers.Functions
     */

    function isNegativeZero(value) {
      return 1 / Math.round(value) === -Infinity;
    }
    /**
     * Determines if a value is a negative.
     *
     * @function isNegative
     * @param  {number} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a negative.
     * @memberof Helpers.Functions
     */

    function isNegative(value) {
      return isNegativeZero(value) || value < 0;
    }
    /**
     * Determines if a value is `null`.
     *
     * @function isNull
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a `null`.
     * @memberof Helpers.Functions
     */

    function isNull(value) {
      return value === null; // || typeof value === 'null';
    }
    /**
     * Determines if a value is `undefined`.
     *
     * @function isNull
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a `undefined`.
     * @memberof Helpers.Functions
     */

    function isUndefined(value) {
      return typeof value === 'undefined';
    }
    /**
     * Determines if a value is a constructor.
     *
     * @function isConstructor
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a constructor.
     * @memberof Helpers.Functions
     */

    function isConstructor(value) {
      return value instanceof Function && !!value.name;
    }
    /**
     * Determines if a value is a string.
     *
     * @function isString
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a string.
     * @memberof Helpers.Functions
     */

    function isString(value) {
      return typeof value === 'string';
    }
    /**
     * Determines if a value is a array.
     *
     * @function isString
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a string.
     * @memberof Helpers.Functions
     */

    function isArray(value) {
      return value instanceof Array;
    }
    /**
     * Determines if a value is an object.
     *
     * @function isObject
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is an object.
     * @memberof Helpers.Functions
     */

    function isObject(value) {
      var type = _typeof(value);

      return value != null && !isArray(value) && (type == 'object' || type == 'function');
    }
    /**
     * Determines if a value is a function.
     *
     * @function isObject
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a function.
     * @memberof Helpers.Functions
     */

    function isFunction(value) {
      return value instanceof Function;
    }
    /**
     * Determines if a value is a number.
     *
     * @function isObject
     * @param  {*} value - The value to check.
     * @return {boolean} - Returns `true` if the value is a number.
     * @memberof Helpers.Functions
     */

    function isNumber(value) {
      return !isNaN(value);
    }
    /**
     * Converts a string into kebab case.
     *
     * @function kebabCase
     * @param  {string} string - The string to convert.
     * @return {string} - The converted string.
     * @memberof Helpers.Functions
     */

    function kebabCase(string) {
      return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
    }

    var Component =
    /*#__PURE__*/
    function () {
      /**
       * Abstract base class.
       *
       * @class Component
       * @param {(object|undefined)} [attributes] - The instance attributes.
       */
      function Component(attributes) {
        _classCallCheck(this, Component);

        this.setAttribute(Object.assign({
          events: {}
        }, attributes));
      }
      /**
       * Get the `name` attribute.
       *
       * @type {string}
       */


      _createClass(Component, [{
        key: "emit",

        /**
         * Emit an event.
         *
         * @param  {string} key - The event id/key.
         * @return {Component} - Returns `this` instance.
         */
        value: function emit(key) {
          var _this = this;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (this.events[key]) {
            this.events[key].forEach(function (event) {
              event.apply(_this, args);
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

      }, {
        key: "on",
        value: function on(key, fn) {

          if (!this.events[key]) {
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

      }, {
        key: "off",
        value: function off(key, fn) {
          if (this.events[key] && fn) {
            this.events[key] = this.events[key].filter(function (event) {
              return event !== fn;
            });
          } else {
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

      }, {
        key: "once",
        value: function once(key, fn) {
          var _this2 = this;

          fn = chain(fn, function () {
            return _this2.off(key, fn);
          });
          return this.on(key, fn, true);
        }
        /**
         * Get an attribute. Returns null if no attribute is defined.
         *
         * @param  {string} key - The attribute name.
         * @return {*} - The attribute value.
         */

      }, {
        key: "getAttribute",
        value: function getAttribute(key) {
          return this.hasOwnProperty(key) ? this[key] : null;
        }
        /**
         * Get all the atttributes for this instance.
         *
         * @return {object} - The attribute dictionary.
         */

      }, {
        key: "getAttributes",
        value: function getAttributes() {
          var _this3 = this;

          var attributes = {};
          Object.getOwnPropertyNames(this).forEach(function (key) {
            attributes[key] = _this3.getAttribute(key);
          });
          return attributes;
        }
        /**
         * Get only public the atttributes for this instance. Omits any attribute
         * that starts with `$`, which is used internally.
         *
         * @return {object} - The attribute dictionary.
         */

      }, {
        key: "getPublicAttributes",
        value: function getPublicAttributes() {
          var _this4 = this;

          return Object.keys(this.getAttributes()).filter(function (key) {
            return !key.match(/^\$/);
          }).reduce(function (obj, key) {
            obj[key] = _this4.getAttribute(key);
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

      }, {
        key: "setAttribute",
        value: function setAttribute(key, value) {
          if (isObject(key)) {
            this.setAttributes(key);
          } else {
            this[key] = value;
          }
        }
        /**
         * Set an attributes by object of key/value pairs.
         *
         * @param  {object} values - The object dictionary.
         * @return {void}
         */

      }, {
        key: "setAttributes",
        value: function setAttributes(values) {
          for (var i in values) {
            this.setAttribute(i, values[i]);
          }
        }
        /**
         * Helper method to execute the `callback()` function.
         *
         * @param  {Function} fn - The callback function.
         * @return {*} - Returns the executed callback function.
         */

      }, {
        key: "callback",
        value: function callback$$1(fn) {
          return callback.call(this, fn);
        }
        /**
         * Factor method to static instantiate new instances. Useful for writing
         * clean expressive syntax with chained methods.
         *
         * @param  {...*} args - The callback arguments.
         * @return {*} - The new component instance.
         */

      }, {
        key: "name",
        get: function get() {
          if (!(this.constructor.defineName instanceof Function)) {
            error('Every class must define its name.');
          }

          return this.constructor.defineName();
        }
        /**
         * The `events` attribute.
         *
         * @type {object}
         */

      }, {
        key: "events",
        get: function get() {
          return this.$events || {};
        },
        set: function set(value) {
          this.$events = value;
        }
      }], [{
        key: "make",
        value: function make() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _construct(this, args);
        }
      }]);

      return Component;
    }();

    /**
     * @namespace Helpers.Digitize
     */
    /**
     * Digitize a number, string, or an array into a digitized array. This function
     * use by the `Face`, which convert the digitized array into an array of `List`
     * instances.
     *
     * @function digitize
     * @param  {*} value - The value to digitize.
     * @param  {(Object|undefined)} [options] - The digitizer options.
     * @return {array} - The digitized array.
     * @memberof Helpers.Digitize
     */

    function digitize(value, options) {
      options = Object.assign({
        minimumDigits: 0,
        prependLeadingZero: true
      }, options);

      function prepend(number) {
        var shouldPrependZero = options.prependLeadingZero && number.toString().split('').length === 1;
        return (shouldPrependZero ? '0' : '').concat(number);
      }

      function digits(arr, min) {
        var length$$1 = deepFlatten(arr).length;

        if (length$$1 < min) {
          for (var i = 0; i < min - length$$1; i++) {
            arr[0].unshift('0');
          }
        }

        return arr;
      }

      return digits(flatten([value]).map(function (number) {
        return flatten(deepFlatten([number]).map(function (number) {
          return prepend(number).split('');
        }));
      }), options.minimumDigits || 0);
    }

    /**
     * @namespace Helpers.Value
     */

    /**
     * An array of objects with min/max ranges.
     *
     * @private
     * @type {array}
     */
    var RANGES = [{
      // 0-9
      min: 48,
      max: 57
    }, {
      // a-z
      min: 65,
      max: 90
    }, {
      // A-Z
      min: 97,
      max: 122
    }];
    /**
     * Format a string into a new data type. Currently only supports string to
     * number conversion.
     *
     * @private
     * @function format
     * @param {string} string - The string to format.
     * @param {string} type - The data type (represented as a string) used to
     *     convert the string.
     * @return {boolean} - Returns the formatted string.
     */

    function format(string, type) {
      switch (type) {
        case 'number':
          return parseFloat(string);
      }

      return string;
    }
    /**
     * Find the range object from the `RANGES` constant from the character given.
     * This is mainly an interval method, but can be used by faces to help
     * determine what the next value of a string should be.
     *
     * @private
     * @function format
     * @param {string} char - The char used to determine the range.
     * @param {string} type - The data type (represented as a string) used to
     *     convert the string.
     * @return {boolean} - Returns the formatted string.
     */


    function findRange(_char) {
      for (var i in RANGES) {
        var code = _char.toString().charCodeAt(0);

        if (RANGES[i].min <= code && RANGES[i].max >= code) {
          return RANGES[i];
        }
      }

      return null;
    }
    /**
     * Create a string from a character code, which is returned by the callback.
     *
     * @private
     * @callback stringFromCharCodeBy
     * @param {string} char - The char used to determine the range.
     * @param {function} fn - The callback function receives `range` and `code`
     *     arguments. This function should return a character code.
     * @return {string} - Creates a string from the character code returned by the
     *     callback function.
     */


    function stringFromCharCodeBy(_char2, fn) {
      return String.fromCharCode(fn(findRange(_char2), _char2.charCodeAt(0)));
    }
    /**
     * Calculate the next value for a string. 'a' becomes 'b'. 'A' becomes 'B'. 1
     * becomes 2, etc. If multiple character strings are passed, 'aa' would become
     * 'bb'.
     *
     * @function next
     * @param  {(string|number)} value - The string or number to convert.
     * @return {string} - The formatted string
     * @memberof Helpers.Value
     */


    function next(value) {
      var converted = value.toString().split('').map(function (_char3) {
        return stringFromCharCodeBy(_char3, function (range, code) {
          return !range || code < range.max ? code + 1 : range.min;
        });
      }).join('');
      return format(converted, _typeof(value));
    }
    /**
     * Calculate the prev value for a string. 'b' becomes 'a'. 'B' becomes 'A'. 2
     * becomes 1, 0 becomes 9, etc. If multiple character strings are passed, 'bb'
     * would become 'aa'.
     *
     * @function prev
     * @param  {(string|number)} value - The string or number to convert.
     * @return {string} - The formatted string
     * @memberof Helpers.Value
     */

    function prev(value) {
      var converted = value.toString().split('').map(function (_char4) {
        return stringFromCharCodeBy(_char4, function (range, code) {
          return !range || code > range.min ? code - 1 : range.max;
        });
      }).join('');
      return format(converted, _typeof(value));
    }

    var FaceValue =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FaceValue, _Component);

      /**
       * The `FaceValue` class handles all the digitizing for the `Face`.
       *
       * @class FaceValue
       * @extends Component
       * @param {*} value - The `FaceValue`'s actual value. Most likely should
       *     string, number, or Date. But since the Face handles the value, it
       *     could be anything.
       * @param {(object|undefined)} [attributes] - The instance attributes.
       */
      function FaceValue(value, attributes) {
        var _this;

        _classCallCheck(this, FaceValue);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FaceValue).call(this, Object.assign({
          format: function format(value) {
            return value;
          },
          prependLeadingZero: true,
          minimumDigits: 0
        }, attributes)));

        if (!_this.value) {
          _this.value = value;
        }

        return _this;
      }
      /**
       * The `digits` attribute.
       *
       * @type {(Array|undefined)}
       */


      _createClass(FaceValue, [{
        key: "isNaN",

        /**
         * Returns `true` if the `value` attribute is not a number.
         *
         * @return {boolean} - `true` is the value is not a number.
         */
        value: function (_isNaN) {
          function isNaN() {
            return _isNaN.apply(this, arguments);
          }

          isNaN.toString = function () {
            return _isNaN.toString();
          };

          return isNaN;
        }(function () {
          return isNaN(this.value);
        })
        /**
         * Returns `true` if the `value` attribute is a number.
         *
         * @return {boolean} - `true` is the value is a number.
         */

      }, {
        key: "isNumber",
        value: function isNumber$$1() {
          return isNumber();
        }
        /**
         * Clones the current `FaceValue` instance, but sets a new value to the
         * cloned instance. Used for copying the current instance options and
         * methods, but setting a new value.
         *
         * @param  {*} value - The n
         * @param {(object|undefined)} [attributes] - The instance attributes.
         * @return {FaceValue} - The cloned `FaceValue`.
         */

      }, {
        key: "clone",
        value: function clone(value, attributes) {
          return new this.constructor(value, Object.assign(this.getPublicAttributes(), attributes));
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }, {
        key: "digits",
        get: function get() {
          return this.$digits;
        },
        set: function set(value) {
          this.$digits = value;
          this.minimumDigits = Math.max(this.minimumDigits, length(value));
        }
        /**
         * The `value` attribute.
         *
         * @type {*}
         */

      }, {
        key: "value",
        get: function get() {
          return this.$value;
        },
        set: function set(value) {
          this.$value = value;
          this.digits = digitize(this.format(value), {
            minimumDigits: this.minimumDigits,
            prependLeadingZero: this.prependLeadingZero
          });
        }
      }], [{
        key: "defineName",
        value: function defineName() {
          return 'FaceValue';
        }
      }]);

      return FaceValue;
    }(Component);

    /**
     * Validate the data type of a variable.
     *
     * @function validate
     * @param {*} value - The value to validate.
     * @param {...*} args - The data types to use for validate.
     * @return {boolean} - Returns `true`is the value has a valid data type.
     * @memberof Helpers.Validate
     */

    function validate(value) {
      var success = false;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      flatten(args).forEach(function (arg) {
        if (isNull(value) && isNull(arg) || isObject(arg) && value instanceof arg || isFunction(arg) && !isConstructor(arg) && arg(value) === true || isString(arg) && _typeof(value) === arg) {
          success = true;
        }
      });
      return success;
    }

    /**
     * @alias ConsoleMessages
     * @type {object}
     * @memberof module:Config/ConsoleMessages
     */
    var ConsoleMessages = {
      className: 'The className() is not defined.',
      items: 'The items property must be an array.',
      theme: 'The theme property must be an object.',
      language: 'The language must be an object.',
      date: 'The value must be an instance of a Date.',
      face: 'The face must be an instance of a Face class.',
      element: 'The element must be an instance of an HTMLElement',
      faceValue: 'The face must be an instance of a FaceValue class.',
      timer: 'The timer property must be an instance of a Timer class.'
    };

    var Face =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Face, _Component);

      /**
       * This class is meant to be provide an interface for all other faces to
       * extend.
       *
       * @class Face
       * @extends Component
       * @param {(FaceValue|object)} value - The `Face` value. If not an instance
       *     of FaceValue, this argument is assumed to be the instance attributes.
       * @param {(object|undefined)} [attributes] - The instance attributes.
       */
      function Face(value, attributes) {
        var _this;

        _classCallCheck(this, Face);

        if (!(value instanceof FaceValue) && isObject(value)) {
          attributes = value;
          value = undefined;
        }

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Face).call(this));

        _this.setAttributes(Object.assign({
          autoStart: true,
          countdown: false,
          animationRate: 500
        }, _this.defaultAttributes(), attributes || {}));

        if (isNull(value) || isUndefined(value)) {
          value = _this.defaultValue();
        }

        if (value) {
          _this.value = value;
        }

        return _this;
      }
      /**
       * The `dataType` attribute.
       *
       * @type {*}
       */


      _createClass(Face, [{
        key: "interval",

        /**
         * This method is called with every interval, or every time the clock
         * should change, and handles the actual incrementing and decrementing the
         * clock's `FaceValue`.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @param  {Function} fn - The interval callback.
         * @return {Face} - This `Face` instance.
         */
        value: function interval(instance, fn) {
          if (this.countdown) {
            this.decrement(instance);
          } else {
            this.increment(instance);
          }

          callback.call(this, fn);

          if (this.shouldStop(instance)) {
            instance.stop();
          }

          return this.emit('interval');
        }
        /**
         * Determines if the clock should stop or not.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {boolean} - Returns `true` if the clock should stop.
         */

      }, {
        key: "shouldStop",
        value: function shouldStop(instance) {
          return !isUndefined(this.stopAt) ? this.stopAt === instance.value.value : false;
        }
        /**
         * By default this just returns the value unformatted.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @param  {*} value - The value to format.
         * @return {*} - The formatted value.
         */

      }, {
        key: "format",
        value: function format(instance, value) {
          return value;
        }
        /**
         * The default value for the `Face`.
         *
         * @return {*} - The default value.
         */

      }, {
        key: "defaultValue",
        value: function defaultValue() {} //

        /**
         * The default attributes for the `Face`.
         *
         * @return {(Object|undefined)} - The default attributes.
         */

      }, {
        key: "defaultAttributes",
        value: function defaultAttributes() {} //

        /**
         * The default data type for the `Face` value.
         *
         * @return {(Object|undefined)} - The default data type.
         */

      }, {
        key: "defaultDataType",
        value: function defaultDataType() {} //

        /**
         * Increment the clock.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @param  {Number} [amount] - The amount to increment. If the amount is not
         *     defined, it is left up to the `Face` to determine the default value.
         * @return {void}
         */

      }, {
        key: "increment",
        value: function increment(instance, amount) {} //

        /**
         * Decrement the clock.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @param  {Number} [amount] - The amount to decrement. If the amount is not
         *     defined, it is left up to the `Face` to determine the default value.
         * @return {void}
         */

      }, {
        key: "decrement",
        value: function decrement(instance, amount) {} //

        /**
         * This method is called right after clock has started.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "started",
        value: function started(instance) {} //

        /**
         * This method is called right after clock has stopped.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "stopped",
        value: function stopped(instance) {} //

        /**
         * This method is called right after clock has reset.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "reset",
        value: function reset(instance) {} //

        /**
         * This method is called right after `Face` has initialized.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "initialized",
        value: function initialized(instance) {} //

        /**
         * This method is called right after `Face` has rendered.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "rendered",
        value: function rendered(instance) {} //

        /**
         * This method is called right after `Face` has mounted.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "mounted",
        value: function mounted(instance) {
          if (this.autoStart && instance.timer.isStopped) {
            window.requestAnimationFrame(function () {
              return instance.start(instance);
            });
          }
        }
        /**
         * Helper method to instantiate a new `FaceValue`.
         *
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @param  {object|undefined} [attributes] - The attributes passed to the
         *     `FaceValue` instance.
         * @return {Divider} - The instantiated `FaceValue`.
         */

      }, {
        key: "createFaceValue",
        value: function createFaceValue(instance, value) {
          var _this2 = this;

          return FaceValue.make(isFunction(value) && !value.name ? value() : value, {
            minimumDigits: this.minimumDigits,
            format: function format(value) {
              return _this2.format(instance, value);
            }
          });
        }
      }, {
        key: "dataType",
        get: function get() {
          return this.defaultDataType();
        }
        /**
         * The `value` attribute.
         *
         * @type {*}
         */

      }, {
        key: "value",
        get: function get() {
          return this.$value;
        },
        set: function set(value) {
          if (!(value instanceof FaceValue)) {
            value = this.createFaceValue(value);
          }

          this.$value = value;
        }
        /**
         * The `stopAt` attribute.
         *
         * @type {*}
         */

      }, {
        key: "stopAt",
        get: function get() {
          return this.$stopAt;
        },
        set: function set(value) {
          this.$stopAt = value;
        }
        /**
         * The `originalValue` attribute.
         *
         * @type {*}
         */

      }, {
        key: "originalValue",
        get: function get() {
          return this.$originalValue;
        },
        set: function set(value) {
          this.$originalValue = value;
        }
      }]);

      return Face;
    }(Component);

    /**
     * @classdesc Arabic Language Pack
     * @desc This class will be used to translate tokens into the Arabic language.
     * @namespace Languages.Arabic
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Arabic
     */
    var dictionary = {
      'years': 'سنوات',
      'months': 'شهور',
      'days': 'أيام',
      'hours': 'ساعات',
      'minutes': 'دقائق',
      'seconds': 'ثواني'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Arabic
     */

    var aliases = ['ar', 'ar-ar', 'arabic'];

    var arAr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary,
        aliases: aliases
    });

    /**
     * @classdesc Catalan Language Pack
     * @desc This class will used to translate tokens into the Catalan language.
     * @namespace Languages.Catalan
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Catalan
     */
    var dictionary$1 = {
      'years': 'Anys',
      'months': 'Mesos',
      'days': 'Dies',
      'hours': 'Hores',
      'minutes': 'Minuts',
      'seconds': 'Segons'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Catalan
     */

    var aliases$1 = ['ca', 'ca-es', 'catalan'];

    var caEs = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$1,
        aliases: aliases$1
    });

    /**
     * @classdesc Czech Language Pack
     * @desc This class will used to translate tokens into the Czech language.
     * @namespace Languages.Czech
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Czech
     */
    var dictionary$2 = {
      'years': 'Roky',
      'months': 'Měsíce',
      'days': 'Dny',
      'hours': 'Hodiny',
      'minutes': 'Minuty',
      'seconds': 'Sekundy'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Czech
     */

    var aliases$2 = ['cs', 'cs-cz', 'cz', 'cz-cs', 'czech'];

    var csCz = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$2,
        aliases: aliases$2
    });

    /**
     * @classdesc Danish Language Pack
     * @desc This class will used to translate tokens into the Danish language.
     * @namespace Languages.Danish
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Danish
     */
    var dictionary$3 = {
      'years': 'År',
      'months': 'Måneder',
      'days': 'Dage',
      'hours': 'Timer',
      'minutes': 'Minutter',
      'seconds': 'Sekunder'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Danish
     */

    var aliases$3 = ['da', 'da-dk', 'danish'];

    var daDk = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$3,
        aliases: aliases$3
    });

    /**
     * @classdesc German Language Pack
     * @desc This class will used to translate tokens into the German language.
     * @namespace Languages.German
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.German
     */
    var dictionary$4 = {
      'years': 'Jahre',
      'months': 'Monate',
      'days': 'Tage',
      'hours': 'Stunden',
      'minutes': 'Minuten',
      'seconds': 'Sekunden'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.German
     */

    var aliases$4 = ['de', 'de-de', 'german'];

    var deDe = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$4,
        aliases: aliases$4
    });

    /**
     * @classdesc English Language Pack
     * @desc This class will used to translate tokens into the English language.
     * @namespace Languages.English
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.English
     */
    var dictionary$5 = {
      'years': 'Years',
      'months': 'Months',
      'days': 'Days',
      'hours': 'Hours',
      'minutes': 'Minutes',
      'seconds': 'Seconds'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.English
     */

    var aliases$5 = ['en', 'en-us', 'english'];

    var English = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$5,
        aliases: aliases$5
    });

    /**
     * @classdesc Spanish Language Pack
     * @desc This class will used to translate tokens into the Spanish language.
     * @namespace Languages.Spanish
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Spanish
     */
    var dictionary$6 = {
      'years': 'Años',
      'months': 'Meses',
      'days': 'Días',
      'hours': 'Horas',
      'minutes': 'Minutos',
      'seconds': 'Segundos'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Spanish
     */

    var aliases$6 = ['es', 'es-es', 'spanish'];

    var esEs = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$6,
        aliases: aliases$6
    });

    /**
     * @classdesc Persian Language Pack
     * @desc This class will used to translate tokens into the Persian language.
     * @namespace Languages.Persian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Persian
     */
    var dictionary$7 = {
      'years': 'سال',
      'months': 'ماه',
      'days': 'روز',
      'hours': 'ساعت',
      'minutes': 'دقیقه',
      'seconds': 'ثانیه'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Persian
     */

    var aliases$7 = ['fa', 'fa-ir', 'persian'];

    var faIr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$7,
        aliases: aliases$7
    });

    /**
     * @classdesc Finnish Language Pack
     * @desc This class will used to translate tokens into the Finnish language.
     * @namespace Languages.Finnish
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Finnish
     */
    var dictionary$8 = {
      'years': 'Vuotta',
      'months': 'Kuukautta',
      'days': 'Päivää',
      'hours': 'Tuntia',
      'minutes': 'Minuuttia',
      'seconds': 'Sekuntia'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Finnish
     */

    var aliases$8 = ['fi', 'fi-fi', 'finnish'];

    var fiFi = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$8,
        aliases: aliases$8
    });

    /**
     * @classdesc Canadian French Language Pack
     * @desc This class will used to translate tokens into the Canadian French language.
     * @namespace Languages.CanadianFrench
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.CanadianFrench
     */
    var dictionary$9 = {
      'years': 'Ans',
      'months': 'Mois',
      'days': 'Jours',
      'hours': 'Heures',
      'minutes': 'Minutes',
      'seconds': 'Secondes'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.CanadianFrench
     */

    var aliases$9 = ['fr', 'fr-ca', 'french'];

    var frCa = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$9,
        aliases: aliases$9
    });

    /**
     * @classdesc Hebrew Language Pack
     * @desc This class will used to translate tokens into the Hebrew language.
     * @namespace Languages.Hebrew
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Hebrew
     */
    var dictionary$10 = {
      'years': 'שנים',
      'months': 'חודש',
      'days': 'ימים',
      'hours': 'שעות',
      'minutes': 'דקות',
      'seconds': 'שניות'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Hebrew
     */

    var aliases$10 = ['il', 'he-il', 'hebrew'];

    var heIl = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$10,
        aliases: aliases$10
    });

    /**
     * @classdesc Hungarian Language Pack
     * @desc This class will used to translate tokens into the Hungarian language.
     * @namespace Languages.Hungarian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Hungarian
     */
    var dictionary$11 = {
      'years': 'Év',
      'months': 'Hónap',
      'days': 'Nap',
      'hours': 'Óra',
      'minutes': 'Perc',
      'seconds': 'Másodperc'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Hungarian
     */

    var aliases$11 = ['hu', 'hu-hu', 'hungarian'];

    var huHu = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$11,
        aliases: aliases$11
    });

    /**
     * @classdesc Italian Language Pack
     * @desc This class will used to translate tokens into the Italian language.
     * @namespace Languages.Italian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Italian
     */
    var dictionary$12 = {
      'years': 'Anni',
      'months': 'Mesi',
      'days': 'Giorni',
      'hours': 'Ore',
      'minutes': 'Minuti',
      'seconds': 'Secondi'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Italian
     */

    var aliases$12 = ['da', 'da-dk', 'danish'];

    var itIt = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$12,
        aliases: aliases$12
    });

    /**
     * @classdesc Japanese Language Pack
     * @desc This class will used to translate tokens into the Japanese language.
     * @namespace Languages.Japanese
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Japanese
     */
    var dictionary$13 = {
      'years': '年',
      'months': '月',
      'days': '日',
      'hours': '時',
      'minutes': '分',
      'seconds': '秒'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Japanese
     */

    var aliases$13 = ['jp', 'ja-jp', 'japanese'];

    var jaJp = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$13,
        aliases: aliases$13
    });

    /**
     * @classdesc Korean Language Pack
     * @desc This class will used to translate tokens into the Korean language.
     * @namespace Languages.Korean
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Korean
     */
    var dictionary$14 = {
      'years': '년',
      'months': '월',
      'days': '일',
      'hours': '시',
      'minutes': '분',
      'seconds': '초'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Korean
     */

    var aliases$14 = ['ko', 'ko-kr', 'korean'];

    var koKr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$14,
        aliases: aliases$14
    });

    /**
     * @classdesc Latvian Language Pack
     * @desc This class will used to translate tokens into the Latvian language.
     * @namespace Languages.Latvian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Latvian
     */
    var dictionary$15 = {
      'years': 'Gadi',
      'months': 'Mēneši',
      'days': 'Dienas',
      'hours': 'Stundas',
      'minutes': 'Minūtes',
      'seconds': 'Sekundes'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Latvian
     */

    var aliases$15 = ['lv', 'lv-lv', 'latvian'];

    var lvLv = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$15,
        aliases: aliases$15
    });

    /**
     * @classdesc Dutch Language Pack
     * @desc This class will used to translate tokens into the Dutch language.
     * @namespace Languages.Dutch
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Dutch
     */
    var dictionary$16 = {
      'years': 'Jaren',
      'months': 'Maanden',
      'days': 'Dagen',
      'hours': 'Uren',
      'minutes': 'Minuten',
      'seconds': 'Seconden'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Dutch
     */

    var aliases$16 = ['nl', 'nl-be', 'dutch'];

    var nlBe = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$16,
        aliases: aliases$16
    });

    /**
     * @classdesc Norwegian-Bokmål Language Pack
     * @desc This class will used to translate tokens into the Norwegian-Bokmål language.
     * @namespace Languages.Norwegian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Norwegian
     */
    var dictionary$17 = {
      'years': 'År',
      'months': 'Måneder',
      'days': 'Dager',
      'hours': 'Timer',
      'minutes': 'Minutter',
      'seconds': 'Sekunder'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Norwegian
     */

    var aliases$17 = ['no', 'nb', 'no-nb', 'norwegian'];

    var noNb = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$17,
        aliases: aliases$17
    });

    /**
     * @classdesc Polish Language Pack
     * @desc This class will used to translate tokens into the Polish language.
     * @namespace Languages.Polish
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Polish
     */
    var dictionary$18 = {
      'years': 'Lat',
      'months': 'Miesięcy',
      'days': 'Dni',
      'hours': 'Godziny',
      'minutes': 'Minuty',
      'seconds': 'Sekundy'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Polish
     */

    var aliases$18 = ['pl', 'pl-pl', 'polish'];

    var plPl = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$18,
        aliases: aliases$18
    });

    /**
     * @classdesc Portuguese Language Pack
     * @desc This class will used to translate tokens into the Portuguese language.
     * @namespace Languages.Portuguese
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Portuguese
     */
    var dictionary$19 = {
      'years': 'Anos',
      'months': 'Meses',
      'days': 'Dias',
      'hours': 'Horas',
      'minutes': 'Minutos',
      'seconds': 'Segundos'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Portuguese
     */

    var aliases$19 = ['pt', 'pt-br', 'portuguese'];

    var ptBr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$19,
        aliases: aliases$19
    });

    /**
     * @classdesc Romanian Language Pack
     * @desc This class will used to translate tokens into the Romanian language.
     * @namespace Languages.Romanian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Romanian
     */
    var dictionary$20 = {
      'years': 'Ani',
      'months': 'Luni',
      'days': 'Zile',
      'hours': 'Ore',
      'minutes': 'Minute',
      'seconds': 'sSecunde'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Romanian
     */

    var aliases$20 = ['ro', 'ro-ro', 'romana'];

    var roRo = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$20,
        aliases: aliases$20
    });

    /**
     * @classdesc Russian Language Pack
     * @desc This class will used to translate tokens into the Russian language.
     * @namespace Languages.Russian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Russian
     */
    var dictionary$21 = {
      'years': 'лет',
      'months': 'месяцев',
      'days': 'дней',
      'hours': 'часов',
      'minutes': 'минут',
      'seconds': 'секунд'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Russian
     */

    var aliases$21 = ['ru', 'ru-ru', 'russian'];

    var ruRu = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$21,
        aliases: aliases$21
    });

    /**
     * @classdesc Slovak Language Pack
     * @desc This class will used to translate tokens into the Slovak language.
     * @namespace Languages.Slovak
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Slovak
     */
    var dictionary$22 = {
      'years': 'Roky',
      'months': 'Mesiace',
      'days': 'Dni',
      'hours': 'Hodiny',
      'minutes': 'Minúty',
      'seconds': 'Sekundy'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Slovak
     */

    var aliases$22 = ['sk', 'sk-sk', 'slovak'];

    var skSk = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$22,
        aliases: aliases$22
    });

    /**
     * @classdesc Swedish Language Pack
     * @desc This class will used to translate tokens into the Swedish language.
     * @namespace Languages.Swedish
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Swedish
     */
    var dictionary$23 = {
      'years': 'År',
      'months': 'Månader',
      'days': 'Dagar',
      'hours': 'Timmar',
      'minutes': 'Minuter',
      'seconds': 'Sekunder'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Swedish
     */

    var aliases$23 = ['sv', 'sv-se', 'swedish'];

    var svSe = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$23,
        aliases: aliases$23
    });

    /**
     * @classdesc Thai Language Pack
     * @desc This class will used to translate tokens into the Thai language.
     * @namespace Languages.Thai
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Thai
     */
    var dictionary$24 = {
      'years': 'ปี',
      'months': 'เดือน',
      'days': 'วัน',
      'hours': 'ชั่วโมง',
      'minutes': 'นาที',
      'seconds': 'วินาที'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Thai
     */

    var aliases$24 = ['th', 'th-th', 'thai'];

    var thTh = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$24,
        aliases: aliases$24
    });

    /**
     * @classdesc Turkish Language Pack
     * @desc This class will used to translate tokens into the Turkish language.
     * @namespace Languages.Turkish
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Turkish
     */
    var dictionary$25 = {
      'years': 'Yıl',
      'months': 'Ay',
      'days': 'Gün',
      'hours': 'Saat',
      'minutes': 'Dakika',
      'seconds': 'Saniye'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Turkish
     */

    var aliases$25 = ['tr', 'tr-tr', 'turkish'];

    var trTr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$25,
        aliases: aliases$25
    });

    /**
     * @classdesc Ukrainian Language Pack
     * @desc This class will used to translate tokens into the Ukrainian language.
     * @namespace Languages.Ukrainian
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Ukrainian
     */
    var dictionary$26 = {
      'years': 'роки',
      'months': 'місяці',
      'days': 'дні',
      'hours': 'години',
      'minutes': 'хвилини',
      'seconds': 'секунди'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Ukrainian
     */

    var aliases$26 = ['ua', 'ua-ua', 'ukraine'];

    var uaUa = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$26,
        aliases: aliases$26
    });

    /**
     * @classdesc Vietnamese Language Pack
     * @desc This class will used to translate tokens into the Vietnamese language.
     * @namespace Languages.Vietnamese
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Vietnamese
     */
    var dictionary$27 = {
      'years': 'Năm',
      'months': 'Tháng',
      'days': 'Ngày',
      'hours': 'Giờ',
      'minutes': 'Phút',
      'seconds': 'Giây'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Vietnamese
     */

    var aliases$27 = ['vn', 'vn-vn', 'vietnamese'];

    var vnVn = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$27,
        aliases: aliases$27
    });

    /**
     * @classdesc Chinese Language Pack
     * @desc This class will used to translate tokens into the Chinese language.
     * @namespace Languages.Chinese
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.Chinese
     */
    var dictionary$28 = {
      'years': '年',
      'months': '月',
      'days': '日',
      'hours': '时',
      'minutes': '分',
      'seconds': '秒'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.Chinese
     */

    var aliases$28 = ['zh', 'zh-cn', 'chinese'];

    var zhCn = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$28,
        aliases: aliases$28
    });

    /**
     * @classdesc Traditional Chinese Language Pack
     * @desc This class will used to translate tokens into the Traditional Chinese language.
     * @namespace Languages.TraditionalChinese
     */

    /**
     * @constant dictionary
     * @type {object}
     * @memberof Languages.TraditionalChinese
     */
    var dictionary$29 = {
      'years': '年',
      'months': '月',
      'days': '日',
      'hours': '時',
      'minutes': '分',
      'seconds': '秒'
    };
    /**
     * @constant aliases
     * @type {array}
     * @memberof Languages.TraditionalChinese
     */

    var aliases$29 = ['zh-tw'];

    var zhTw = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$29,
        aliases: aliases$29
    });

    /**
     * @namespace Languages
     */

    var LANGUAGES = /*#__PURE__*/Object.freeze({
        Arabic: arAr,
        Catalan: caEs,
        Czech: csCz,
        Danish: daDk,
        German: deDe,
        English: English,
        Spanish: esEs,
        Persian: faIr,
        Finnish: fiFi,
        French: frCa,
        Hebrew: heIl,
        Hungarian: huHu,
        Italian: itIt,
        Japanese: jaJp,
        Korean: koKr,
        Latvian: lvLv,
        Dutch: nlBe,
        Norwegian: noNb,
        Polish: plPl,
        Portuguese: ptBr,
        Romanian: roRo,
        Russian: ruRu,
        Slovak: skSk,
        Swedish: svSe,
        Thai: thTh,
        Turkish: trTr,
        Ukrainian: uaUa,
        Vietnamese: vnVn,
        Chinese: zhCn,
        TraditionalChinese: zhTw
    });

    /**
     * @namespace Helpers.Language
     */
    /**
     * Return the language associated with the key. Returns `null` if no language is
     * found.
     * 
     * @function language
     * @param  {string} name - The name or id of the language.
     * @return {object|null} - The language dictionary, or null if not found.
     * @memberof Helpers.Language
     */

    function language(name) {
      return name ? LANGUAGES[name.toLowerCase()] || Object.values(LANGUAGES).find(function (value) {
        return value.aliases.indexOf(name) !== -1;
      }) : null;
    }

    /**
     * @namespace Helpers.Translate
     */
    /**
     * Translate an English string into another language.
     * 
     * @function translate
     * @param {string} string - The string to translate.
     * @param {(string|object)} from - The language used to translate. If a string,
     *     the language is loaded into an object.
     * @return {string} - If no diction key is found, the untranslated string is
     *     returned.
     * @memberof Helpers.Translate
     */

    function translate(string, from) {
      var lang = isString(from) ? language(from) : from;
      var dictionary = lang.dictionary || lang;
      return dictionary[string] || string;
    }

    /**
     * A collection of functions to manage DOM nodes and theme templates.
     *
     * @namespace Helpers.Template
     */
    /**
     * Swap a new DOM node with an existing one.
     *
     * @function swap
     * @param  {HTMLElement} subject - The new DOM node.
     * @param  {HTMLElement} existing - The existing DOM node.
     * @return {HTMLElement} - Returns the new element if it was mounted, otherwise
     *    the existing node is returned.
     * @memberof Helpers.Template
     */

    function swap(subject, existing) {
      if (existing.parentNode) {
        existing.parentNode.replaceChild(subject, existing);
        return subject;
      }

      return existing;
    }
    /**
     * Set the attribute of an element.
     *
     * @function setAttributes
     * @param  {HTMLElement} el - The DOM node that will receive the attributes.
     * @param  {Object|undefined} [attributes] - The attribute object, or if no object
     *     is passed, then the action is ignored.
     * @return {HTMLElement} el - The DOM node that received the attributes.
     * @memberof Helpers.Template
     */

    function setAttributes(el, attributes) {
      if (isObject(attributes)) {
        for (var i in attributes) {
          el.setAttribute(i, attributes[i]);
        }
      }

      return el;
    }
    /**
     * Append an array of DOM nodes to a parent.
     *
     * @function appendChildren
     * @param  {HTMLElement} el - The parent DOM node.
     * @param  {Array|undefined} [children] - The array of children. If no array
     *     is passed, then the method silently fails to run.
     * @return {HTMLElement} el - The DOM node that received the attributes.
     * @memberof Helpers.Template
     */

    function appendChildren(el, children) {
      if (isArray(children)) {
        children.filter(noop).forEach(function (child) {
          if (child instanceof HTMLElement) {
            el.appendChild(child);
          }
        });
      }

      return el;
    }
    /**
     * Create a new HTMLElement instance.
     *
     * @function createElement
     * @param  {HTMLElement} el - The parent DOM node.
     * @param  {Array|undefined} [children] - The array of children. If no array
     *     is passed, then the method silently fails to run.
     * @param  {Object|undefined} [attributes] - The attributes object.
     * @return {HTMLElement} el - The DOM node that received the attributes.
     * @memberof Helpers.Template
     */

    function createElement(el, children, attributes) {
      if (!(el instanceof HTMLElement)) {
        el = document.createElement(el);
      }

      setAttributes(el, isObject(children) ? children : attributes);

      if (!isObject(children) && !isArray(children)) {
        el.innerHTML = children;
      } else {
        appendChildren(el, children);
      }

      return el;
    }

    var DomComponent =
    /*#__PURE__*/
    function (_Component) {
      _inherits(DomComponent, _Component);

      /**
       * An abstract class that all other DOM components can extend.
       *
       * @class DomComponent
       * @extends Component
       * @param {(object|undefined)} [attributes] - The instance attributes.
       */
      function DomComponent(attributes) {
        var _this;

        _classCallCheck(this, DomComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(DomComponent).call(this, Object.assign({
          parent: null
        }, attributes)));

        if (!_this.theme) {
          error("".concat(_this.name, " does not have a theme defined."));
        }

        if (!_this.language) {
          error("".concat(_this.name, " does not have a language defined."));
        }

        if (!_this.theme[_this.name]) {
          throw new Error("".concat(_this.name, " cannot be rendered because it has no template."));
        }

        return _this;
      }
      /**
       * The `className` attribute. Used for CSS.
       *
       * @type {string}
       */


      _createClass(DomComponent, [{
        key: "translate",

        /**
         * Translate a string.
         *
         * @param  {string} string - The string to translate.
         * @return {string} - The translated string. If no tranlation found, the
         *     untranslated string is returned.
         */
        value: function translate$$1(string) {
          return translate(string, this.language);
        }
        /**
         * Alias to translate(string);
         *
         * @alias DomComponent.translate
         */

      }, {
        key: "t",
        value: function t(string) {
          return this.translate(string);
        }
        /**
         * Render the DOM component.
         *
         * @return {HTMLElement} - The `el` attribute.
         */

      }, {
        key: "render",
        value: function render() {
          var el = createElement('div', {
            "class": this.className === 'flip-clock' ? this.className : 'flip-clock-' + this.className
          });
          this.theme[this.name](el, this);

          if (!this.el) {
            this.el = el;
          } else if (this.el.innerHTML !== el.innerHTML) {
            this.el = swap(el, this.el);
          }

          return this.el;
        }
        /**
         * Mount a DOM component to a parent node.
         *
         * @param  {HTMLElement} parent - The parent DOM node.
         * @param  {(false|HTMLElement)} [before=false] - If `false`, element is
         *     appended to the parent node. If an instance of an `HTMLElement`,
         *     the component will be inserted before the specified element.
         * @return {HTMLElement} - The `el` attribute.
         */

      }, {
        key: "mount",
        value: function mount(parent) {
          var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.render();
          this.parent = parent;

          if (!before) {
            this.parent.appendChild(this.el);
          } else {
            this.parent.insertBefore(this.el, before);
          }

          return this.el;
        }
      }, {
        key: "className",
        get: function get() {
          return kebabCase(this.constructor.defineName());
        }
        /**
         * The `el` attribute.
         *
         * @type {HTMLElement}
         */

      }, {
        key: "el",
        get: function get() {
          return this.$el;
        },
        set: function set(value) {
          if (!validate(value, null, HTMLElement)) {
            error(ConsoleMessages.element);
          }

          this.$el = value;
        }
        /**
         * The `parent` attribute. Parent is set when `DomComponent` instances are
         * mounted.
         *
         * @type {DomComponent}
         */

      }, {
        key: "parent",
        get: function get() {
          return this.$parent;
        },
        set: function set(parent) {
          this.$parent = parent;
        }
        /**
         * The `theme` attribute.
         *
         * @type {object}
         */

      }, {
        key: "theme",
        get: function get() {
          return this.$theme;
        },
        set: function set(value) {
          if (!validate(value, 'object')) {
            error(ConsoleMessages.value);
          }

          this.$theme = value;
        }
        /**
         * Get the language attribute.
         *
         * @type {object}
         */

      }, {
        key: "language",
        get: function get() {
          return this.$language;
        },
        set: function set(value) {
          if (isString(value)) {
            value = language(value);
          }

          if (!validate(value, 'object')) {
            error(ConsoleMessages.language);
          }

          this.$language = value;
        }
      }]);

      return DomComponent;
    }(Component);

    /**
     * Create a new `Divider` instance.
     *
     * The purpose of this class is to return a unique class name so the theme can
     * render it appropriately, since each `DomComponent` can receive its own template
     * from the theme.
     *
     * @class Divider
     * @extends DomComponent
     * @param {(object|undefined)} [attributes] - The instance attributes.
     */

    var Divider =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(Divider, _DomComponent);

      function Divider() {
        _classCallCheck(this, Divider);

        return _possibleConstructorReturn(this, _getPrototypeOf(Divider).apply(this, arguments));
      }

      _createClass(Divider, null, [{
        key: "defineName",

        /**
         * Define the name of the class.
         *
         * @return {string}
         */
        value: function defineName() {
          return 'Divider';
        }
      }]);

      return Divider;
    }(DomComponent);

    var ListItem =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(ListItem, _DomComponent);

      /**
       * This class is used to represent a single digits in a `List`.
       *
       * @class ListItem
       * @extends DomComponent
       * @param {(Number|String)} value - The value of the `ListItem`.
       * @param {object|undefined} [attributes] - The instance attributes.
       */
      function ListItem(value, attributes) {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, Object.assign({
          value: value
        }, isObject(value) ? value : null, attributes)));
      }
      /**
       * Define the name of the class.
       *
       * @return {string}
       */


      _createClass(ListItem, null, [{
        key: "defineName",
        value: function defineName() {
          return 'ListItem';
        }
      }]);

      return ListItem;
    }(DomComponent);

    var List =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(List, _DomComponent);

      /**
       * This class is used to add a digit to the clock face. This class is called
       * `List` because it contains a list of `ListItem`'s which are used to
       * create flip effects. In the context of FlipClock.js a `List` represents
       * one single digit.
       *
       * @class List
       * @extends DomComponent
       * @param {Number|String|Object} label - The active value. If an object, it
       * is assumed that it is the instance attributes.
       * @param {object|undefined} [attributes] - The instance attributes.
       */
      function List(value, attributes) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, Object.assign({
          value: value,
          items: []
        }, isObject(value) ? value : null, attributes)));
      }
      /**
       * Get the `value` attribute.
       *
       * @type {(Number|String)}
       */


      _createClass(List, [{
        key: "createListItem",

        /**
         * Helper method to instantiate a new `ListItem`.
         *
         * @param  {(Number|String)} value - The `ListItem` value.
         * @param  {(Object|undefined)} [attributes] - The instance attributes.
         * @return {ListItem} - The instantiated `ListItem`.
         */
        value: function createListItem(value, attributes) {
          var item = new ListItem(value, Object.assign({
            theme: this.theme,
            language: this.language
          }, attributes));
          this.$items.push(item);
          return item;
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }, {
        key: "value",
        get: function get() {
          return this.$value;
        },
        set: function set(value) {
          this.$value = value;
        }
        /**
         * Get the `items` attribute.
         *
         * @type {(Number|String)}
         */

      }, {
        key: "items",
        get: function get() {
          return this.$items;
        },
        set: function set(value) {
          this.$items = value;
        }
      }], [{
        key: "defineName",
        value: function defineName() {
          return 'List';
        }
      }]);

      return List;
    }(DomComponent);

    var Group =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(Group, _DomComponent);

      /**
       * This class is used to group values within a clock face. How the groups
       * are displayed is determined by the theme.
       *
       * @class Group
       * @extends DomComponent
       * @param {Array|Object} items - An array `List` instances or an object of
       *     attributes. If not an array, assumed to be the attributes.
       * @param {object|undefined} [attributes] - The instance attributes.
       */
      function Group(items, attributes) {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, Object.assign({
          items: isArray(items) ? items : []
        }, isObject(items) ? items : null, attributes)));
      }
      /**
       * Define the name of the class.
       *
       * @return {string}
       */


      _createClass(Group, null, [{
        key: "defineName",
        value: function defineName() {
          return 'Group';
        }
      }]);

      return Group;
    }(DomComponent);

    var Label =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(Label, _DomComponent);

      /**
       * This class is used to add a label to the clock face.
       *
       * @class Label
       * @extends DomComponent
       * @param {Number|String|Object} label - The label attribute. If an object,
       *     it is assumed that it is the instance attributes.
       * @param {object|undefined} [attributes] - The instance attributes.
       */
      function Label(label, attributes) {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, _getPrototypeOf(Label).call(this, Object.assign({
          label: label
        }, isObject(label) ? label : null, attributes)));
      }
      /**
       * Define the name of the class.
       *
       * @return {string}
       */


      _createClass(Label, null, [{
        key: "defineName",
        value: function defineName() {
          return 'Label';
        }
      }]);

      return Label;
    }(DomComponent);

    var Timer =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Timer, _Component);

      /**
       * Create a new `Timer` instance.
       *
       * @class Timer
       * @extends Component
       * @param {(Object|Number)} interval - The interval passed as a `Number`,
       *     or can set the attribute of the class with an object.
       */
      function Timer(interval) {
        _classCallCheck(this, Timer);

        return _possibleConstructorReturn(this, _getPrototypeOf(Timer).call(this, Object.assign({
          count: 0,
          handle: null,
          started: null,
          running: false,
          interval: isNumber(interval) ? interval : null
        }, isObject(interval) ? interval : null)));
      }
      /**
       * The `elapsed` attribute.
       *
       * @type {Number}
       */


      _createClass(Timer, [{
        key: "reset",

        /**
         * Resets the timer.
         *
         * @param  {(Function|undefined)} fn - The interval callback.
         * @return {Timer} - The `Timer` instance.
         */
        value: function reset(fn) {
          var _this = this;

          this.stop(function () {
            _this.count = 0;

            _this.start(function () {
              return callback.call(_this, fn);
            });

            _this.emit('reset');
          });
          return this;
        }
        /**
         * Starts the timer.
         *
         * @param  {Function} fn - The interval callback.
         * @return {Timer} - The `Timer` instance.
         */

      }, {
        key: "start",
        value: function start(fn) {
          var _this2 = this;

          this.started = new Date();
          this.lastLoop = Date.now();
          this.running = true;
          this.emit('start');

          var loop = function loop() {
            if (Date.now() - _this2.lastLoop >= _this2.interval) {
              callback.call(_this2, fn);
              _this2.lastLoop = Date.now();

              _this2.emit('interval');

              _this2.count++;
            }

            _this2.handle = window.requestAnimationFrame(loop);
            return _this2;
          };

          return loop();
        }
        /**
         * Stops the timer.
         *
         * @param  {Function} fn - The stop callback.
         * @return {Timer} - The `Timer` instance.
         */

      }, {
        key: "stop",
        value: function stop(fn) {
          var _this3 = this;

          if (this.isRunning) {
            setTimeout(function () {
              window.cancelAnimationFrame(_this3.handle);
              _this3.running = false;
              callback.call(_this3, fn);

              _this3.emit('stop');
            });
          }

          return this;
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }, {
        key: "elapsed",
        get: function get() {
          return !this.lastLoop ? 0 : this.lastLoop - (this.started ? this.started.getTime() : new Date().getTime());
        }
        /**
         * The `isRunning` attribute.
         *
         * @type {boolean}
         */

      }, {
        key: "isRunning",
        get: function get() {
          return this.running === true;
        }
        /**
         * The `isStopped` attribute.
         *
         * @type {boolean}
         */

      }, {
        key: "isStopped",
        get: function get() {
          return this.running === false;
        }
      }], [{
        key: "defineName",
        value: function defineName() {
          return 'Timer';
        }
      }]);

      return Timer;
    }(Component);

    /**
     * @classdesc This face is designed to increment and decrement numberic values,
     *     not `Date` objects.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var Counter =
    /*#__PURE__*/
    function (_Face) {
      _inherits(Counter, _Face);

      function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
      }

      _createClass(Counter, [{
        key: "increment",
        value: function increment(instance) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          instance.value = this.value.value + value;
        }
      }, {
        key: "decrement",
        value: function decrement(instance) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          instance.value = this.value.value - value;
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'Counter';
        }
      }]);

      return Counter;
    }(Face);

    /**
     * @classdesc This face is meant to display a clock that shows minutes, and
     *     seconds.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var MinuteCounter =
    /*#__PURE__*/
    function (_Face) {
      _inherits(MinuteCounter, _Face);

      function MinuteCounter() {
        _classCallCheck(this, MinuteCounter);

        return _possibleConstructorReturn(this, _getPrototypeOf(MinuteCounter).apply(this, arguments));
      }

      _createClass(MinuteCounter, [{
        key: "defaultDataType",
        value: function defaultDataType() {
          return Date;
        }
      }, {
        key: "defaultAttributes",
        value: function defaultAttributes() {
          return {
            showSeconds: true,
            showLabels: true
          };
        }
      }, {
        key: "shouldStop",
        value: function shouldStop(instance) {
          if (isNull(instance.stopAt) || isUndefined(instance.stopAt)) {
            return false;
          }

          if (this.stopAt instanceof Date) {
            return this.countdown ? this.stopAt.getTime() >= this.value.value.getTime() : this.stopAt.getTime() <= this.value.value.getTime();
          } else if (isNumber(this.stopAt)) {
            var diff = Math.floor((this.value.value.getTime() - this.originalValue.getTime()) / 1000);
            return this.countdown ? this.stopAt >= diff : this.stopAt <= diff;
          }

          throw new Error("the stopAt property must be an instance of Date or Number.");
        }
      }, {
        key: "increment",
        value: function increment(instance) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          instance.value = new Date(this.value.value.getTime() + value + (new Date().getTime() - instance.timer.lastLoop));
        }
      }, {
        key: "decrement",
        value: function decrement(instance) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          instance.value = new Date(this.value.value.getTime() - value - (new Date().getTime() - instance.timer.lastLoop));
        }
      }, {
        key: "format",
        value: function format(instance, value) {
          var started = instance.timer.isRunning ? instance.timer.started : new Date(Date.now() - 50);
          return [[this.getMinutes(value, started)], this.showSeconds ? [this.getSeconds(value, started)] : null].filter(noop);
        }
      }, {
        key: "getMinutes",
        value: function getMinutes(a, b) {
          return round(this.getTotalSeconds(a, b) / 60);
        }
      }, {
        key: "getSeconds",
        value: function getSeconds(a, b) {
          var totalSeconds = this.getTotalSeconds(a, b);
          return Math.abs(Math.ceil(totalSeconds === 60 ? 0 : totalSeconds % 60));
        }
      }, {
        key: "getTotalSeconds",
        value: function getTotalSeconds(a, b) {
          return a.getTime() === b.getTime() ? 0 : Math.round((a.getTime() - b.getTime()) / 1000);
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'MinuteCounter';
        }
      }]);

      return MinuteCounter;
    }(Face);

    /**
     * @classdesc This face is meant to display a clock that shows
     *     hours, minutes, and seconds.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var HourCounter =
    /*#__PURE__*/
    function (_MinuteCounter) {
      _inherits(HourCounter, _MinuteCounter);

      function HourCounter() {
        _classCallCheck(this, HourCounter);

        return _possibleConstructorReturn(this, _getPrototypeOf(HourCounter).apply(this, arguments));
      }

      _createClass(HourCounter, [{
        key: "format",
        value: function format(instance, value) {
          var now = !instance.timer.started ? new Date() : value;
          var originalValue = instance.originalValue || value;
          var a = !this.countdown ? now : originalValue;
          var b = !this.countdown ? originalValue : now;
          var data = [[this.getHours(a, b)], [this.getMinutes(a, b)]];

          if (this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
          }

          return data;
        }
      }, {
        key: "getMinutes",
        value: function getMinutes(a, b) {
          return Math.abs(_get(_getPrototypeOf(HourCounter.prototype), "getMinutes", this).call(this, a, b) % 60);
        }
      }, {
        key: "getHours",
        value: function getHours(a, b) {
          return Math.floor(this.getTotalSeconds(a, b) / 60 / 60);
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'HourCounter';
        }
      }]);

      return HourCounter;
    }(MinuteCounter);

    /**
     * @classdesc This face is meant to display a clock that shows days, hours,
     *     minutes, and seconds.
     * @extends HourCounter
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var DayCounter =
    /*#__PURE__*/
    function (_HourCounter) {
      _inherits(DayCounter, _HourCounter);

      function DayCounter() {
        _classCallCheck(this, DayCounter);

        return _possibleConstructorReturn(this, _getPrototypeOf(DayCounter).apply(this, arguments));
      }

      _createClass(DayCounter, [{
        key: "format",
        value: function format(instance, value) {
          var now = !instance.started ? new Date() : value;
          var originalValue = instance.originalValue || value;
          var a = !this.countdown ? now : originalValue;
          var b = !this.countdown ? originalValue : now;
          var data = [[this.getDays(a, b)], [this.getHours(a, b)], [this.getMinutes(a, b)]];

          if (this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
          }

          return data;
        }
      }, {
        key: "getDays",
        value: function getDays(a, b) {
          return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24);
        }
      }, {
        key: "getHours",
        value: function getHours(a, b) {
          return Math.abs(_get(_getPrototypeOf(DayCounter.prototype), "getHours", this).call(this, a, b) % 24);
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'DayCounter';
        }
      }]);

      return DayCounter;
    }(HourCounter);

    /**
     * @classdesc This face shows the current time in twenty-four hour format.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var TwentyFourHourClock =
    /*#__PURE__*/
    function (_Face) {
      _inherits(TwentyFourHourClock, _Face);

      function TwentyFourHourClock() {
        _classCallCheck(this, TwentyFourHourClock);

        return _possibleConstructorReturn(this, _getPrototypeOf(TwentyFourHourClock).apply(this, arguments));
      }

      _createClass(TwentyFourHourClock, [{
        key: "defaultDataType",
        value: function defaultDataType() {
          return Date;
        }
      }, {
        key: "defaultValue",
        value: function defaultValue() {
          return new Date();
        }
      }, {
        key: "defaultAttributes",
        value: function defaultAttributes() {
          return {
            showSeconds: true,
            showLabels: false
          };
        }
      }, {
        key: "format",
        value: function format(instance, value) {
          if (!value) {
            value = new Date();
          }

          var groups = [[value.getHours()], [value.getMinutes()]];

          if (this.showSeconds) {
            groups.push([value.getSeconds()]);
          }

          return groups;
        }
      }, {
        key: "increment",
        value: function increment(instance) {
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          instance.value = new Date(this.value.value.getTime() + offset + (new Date().getTime() - instance.timer.lastLoop));
        }
      }, {
        key: "decrement",
        value: function decrement(instance) {
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          instance.value = new Date(this.value.value.getTime() - offset - (new Date().getTime() - instance.timer.lastLoop));
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'TwentyFourHourClock';
        }
      }]);

      return TwentyFourHourClock;
    }(Face);

    /**
     * @classdesc This face shows the current time in twelve hour format, with AM
     *     and PM.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var TwelveHourClock =
    /*#__PURE__*/
    function (_TwentyFourHourClock) {
      _inherits(TwelveHourClock, _TwentyFourHourClock);

      function TwelveHourClock() {
        _classCallCheck(this, TwelveHourClock);

        return _possibleConstructorReturn(this, _getPrototypeOf(TwelveHourClock).apply(this, arguments));
      }

      _createClass(TwelveHourClock, [{
        key: "defaultAttributes",
        value: function defaultAttributes() {
          return {
            showLabels: false,
            showSeconds: true,
            showMeridium: true
          };
        }
      }, {
        key: "format",
        value: function format(instance, value) {
          if (!value) {
            value = new Date();
          }

          var hours = value.getHours();
          var groups = [hours > 12 ? hours - 12 : hours === 0 ? 12 : hours, value.getMinutes()];
          this.meridium = hours > 12 ? 'pm' : 'am';

          if (this.showSeconds) {
            groups.push(value.getSeconds());
          }

          return groups;
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'TwelveHourClock';
        }
      }]);

      return TwelveHourClock;
    }(TwentyFourHourClock);

    /**
     * @classdesc This face is meant to display a clock that shows weeks, days,
     *     hours, minutes, and seconds.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var WeekCounter =
    /*#__PURE__*/
    function (_DayCounter) {
      _inherits(WeekCounter, _DayCounter);

      function WeekCounter() {
        _classCallCheck(this, WeekCounter);

        return _possibleConstructorReturn(this, _getPrototypeOf(WeekCounter).apply(this, arguments));
      }

      _createClass(WeekCounter, [{
        key: "format",
        value: function format(instance, value) {
          var now = !instance.timer.started ? new Date() : value;
          var originalValue = instance.originalValue || value;
          var a = !this.countdown ? now : originalValue;
          var b = !this.countdown ? originalValue : now;
          var data = [[this.getWeeks(a, b)], [this.getDays(a, b)], [this.getHours(a, b)], [this.getMinutes(a, b)]];

          if (this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
          }

          return data;
        }
      }, {
        key: "getWeeks",
        value: function getWeeks(a, b) {
          return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7);
        }
      }, {
        key: "getDays",
        value: function getDays(a, b) {
          return Math.abs(_get(_getPrototypeOf(WeekCounter.prototype), "getDays", this).call(this, a, b) % 7);
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'WeekCounter';
        }
      }]);

      return WeekCounter;
    }(DayCounter);

    /**
     * @classdesc This face is meant to display a clock that shows years, weeks,
     *     days, hours, minutes, and seconds.
     * @extends Face
     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
     *     of FaceValue, this argument is assumed to be the instance attributes.
     * @param {(object|undefined)} [attributes] - The instance attributes.
     * @memberof Faces
     */

    var YearCounter =
    /*#__PURE__*/
    function (_WeekCounter) {
      _inherits(YearCounter, _WeekCounter);

      function YearCounter() {
        _classCallCheck(this, YearCounter);

        return _possibleConstructorReturn(this, _getPrototypeOf(YearCounter).apply(this, arguments));
      }

      _createClass(YearCounter, [{
        key: "format",
        value: function format(instance, value) {
          var now = !instance.timer.started ? new Date() : value;
          var originalValue = instance.originalValue || value;
          var a = !this.countdown ? now : originalValue;
          var b = !this.countdown ? originalValue : now;
          var data = [[this.getYears(a, b)], [this.getWeeks(a, b)], [this.getDays(a, b)], [this.getHours(a, b)], [this.getMinutes(a, b)]];

          if (this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
          }

          return data;
        }
      }, {
        key: "getYears",
        value: function getYears(a, b) {
          return Math.floor(Math.max(0, this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7 / 52));
        }
      }, {
        key: "getWeeks",
        value: function getWeeks(a, b) {
          return Math.abs(_get(_getPrototypeOf(YearCounter.prototype), "getWeeks", this).call(this, a, b) % 52);
        }
        /**
         * Define the name of the class.
         *
         * @return {string}
         */

      }], [{
        key: "defineName",
        value: function defineName() {
          return 'YearCounter';
        }
      }]);

      return YearCounter;
    }(WeekCounter);

    /**
     * Faces are classes that hook into the core of Flipclock to provide unique
     * functionality. The core doesn't do a lot, except facilitate the interaction
     * between all the components. The Face is what makes the clock "tick".
     *
     * @namespace Faces
     */

    var Faces = /*#__PURE__*/Object.freeze({
        Counter: Counter,
        DayCounter: DayCounter,
        MinuteCounter: MinuteCounter,
        HourCounter: HourCounter,
        TwelveHourClock: TwelveHourClock,
        TwentyFourHourClock: TwentyFourHourClock,
        WeekCounter: WeekCounter,
        YearCounter: YearCounter
    });

    function Divider$1 (el, instance) {
      appendChildren(el, [createElement('div', {
        "class": 'flip-clock-dot top'
      }), createElement('div', {
        "class": 'flip-clock-dot bottom'
      })]);
    }

    function child(el, index) {
      return el ? el.childNodes ? el.childNodes[index] : el[index] : null;
    }

    function _char(el) {
      return el ? el.querySelector('.flip-clock-list-item:first-child .top').innerHTML : null;
    }

    function FlipClock (el, instance) {
      var parts = instance.value.digits.map(function (group, x) {
        var groupEl = child(instance.el ? instance.el.querySelectorAll('.flip-clock-group') : null, x);
        var lists = group.map(function (value, y) {
          var listEl = child(groupEl ? groupEl.querySelectorAll('.flip-clock-list') : null, y);

          var listValue = _char(listEl);

          return instance.createList(value, {
            domValue: listValue,
            countdown: instance.countdown,
            animationRate: instance.face.animationRate || instance.face.delay
          });
        });
        return instance.createGroup(lists);
      });
      var nodes = parts.map(function (group) {
        return group.render();
      });
      appendChildren(el, nodes);
    }

    function Group$1 (el, instance) {
      var items = instance.items.map(function (item) {
        return item.render();
      });
      appendChildren(el, items);
    }

    function Label$1 (el, instance) {
      el.innerHTML = instance.t(instance.label);
    }

    function List$1 (el, instance) {
      var beforeValue = instance.domValue || (!instance.countdown ? prev(instance.value) : next(instance.value));

      if (instance.domValue && instance.domValue !== instance.value) {
        el.classList.add('flip');
      }

      el.style.animationDelay = "".concat(instance.animationRate / 2, "ms");
      el.style.animationDuration = "".concat(instance.animationRate / 2, "ms");
      instance.items = [instance.createListItem(instance.value, {
        active: true
      }), instance.createListItem(beforeValue, {
        active: false
      })];
      appendChildren(el, instance.items.map(function (item) {
        return item.render();
      }));
    }

    function ListItem$1 (el, instance) {
      var className = instance.active === true ? 'active' : instance.active === false ? 'before' : null;
      el.classList.add(className);
      appendChildren(el, [createElement('div', [createElement('div', instance.value, {
        "class": 'top'
      }), createElement('div', instance.value, {
        "class": 'bottom'
      })], {
        "class": 'flip-clock-list-item-inner'
      })]);
    }

    function DayCounter$1 (el, instance) {
      instance.createDivider().mount(el, el.childNodes[1]);
      instance.createDivider().mount(el, el.childNodes[3]);

      if (instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[5]);
      }

      if (instance.face.showLabels) {
        instance.createLabel('days').mount(el.childNodes[0]);
        instance.createLabel('hours').mount(el.childNodes[2]);
        instance.createLabel('minutes').mount(el.childNodes[4]);

        if (instance.face.showSeconds) {
          instance.createLabel('seconds').mount(el.childNodes[6]);
        }
      }
    }

    function HourCounter$1 (el, instance) {
      instance.createDivider().mount(el, el.childNodes[1]);

      if (instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[3]);
      }

      if (instance.face.showLabels) {
        instance.createLabel('hours').mount(el.childNodes[0]);
        instance.createLabel('minutes').mount(el.childNodes[2]);

        if (instance.face.showSeconds) {
          instance.createLabel('seconds').mount(el.childNodes[4]);
        }
      }
    }

    function MinuteCounter$1 (el, instance) {
      if (instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[1]);
      }

      if (instance.face.showLabels) {
        instance.createLabel('minutes').mount(el.childNodes[0]);

        if (instance.face.showSeconds) {
          instance.createLabel('seconds').mount(el.childNodes[2]);
        }
      }
    }

    function TwentyFourHourClock$1 (el, instance) {
      instance.createDivider().mount(el, el.childNodes[1]);

      if (instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[3]);
      }

      if (instance.face.showLabels) {
        instance.createLabel('hours').mount(el.childNodes[0]);
        instance.createLabel('minutes').mount(el.childNodes[2]);

        if (instance.face.showSeconds) {
          instance.createLabel('seconds').mount(el.childNodes[4]);
        }
      }
    }

    function TwelveHourClock$1 (el, instance) {
      TwentyFourHourClock$1(el, instance);

      if (instance.face.showMeridium && instance.face.meridium) {
        var label = instance.createLabel(instance.face.meridium);
        var parent = el.childNodes[el.childNodes.length - 1];
        label.mount(parent).classList.add('flip-clock-meridium');
      }
    }

    function WeekCounter$1 (el, instance) {
      instance.createDivider().mount(el, el.childNodes[1]);
      instance.createDivider().mount(el, el.childNodes[3]);
      instance.createDivider().mount(el, el.childNodes[5]);

      if (instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[7]);
      }

      if (instance.face.showLabels) {
        instance.createLabel('weeks').mount(el.childNodes[0]);
        instance.createLabel('days').mount(el.childNodes[2]);
        instance.createLabel('hours').mount(el.childNodes[4]);
        instance.createLabel('minutes').mount(el.childNodes[6]);

        if (instance.face.showSeconds) {
          instance.createLabel('seconds').mount(el.childNodes[8]);
        }
      }
    }

    function YearCounter$1 (el, instance) {
      instance.createDivider().mount(el, el.childNodes[1]);
      instance.createDivider().mount(el, el.childNodes[3]);
      instance.createDivider().mount(el, el.childNodes[5]);
      instance.createDivider().mount(el, el.childNodes[7]);

      if (instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[9]);
      }

      if (instance.face.showLabels) {
        instance.createLabel('years').mount(el.childNodes[0]);
        instance.createLabel('weeks').mount(el.childNodes[2]);
        instance.createLabel('days').mount(el.childNodes[4]);
        instance.createLabel('hours').mount(el.childNodes[6]);
        instance.createLabel('minutes').mount(el.childNodes[8]);

        if (instance.face.showSeconds) {
          instance.createLabel('seconds').mount(el.childNodes[10]);
        }
      }
    }



    var faces = /*#__PURE__*/Object.freeze({
        DayCounter: DayCounter$1,
        HourCounter: HourCounter$1,
        MinuteCounter: MinuteCounter$1,
        TwelveHourClock: TwelveHourClock$1,
        TwentyFourHourClock: TwentyFourHourClock$1,
        WeekCounter: WeekCounter$1,
        YearCounter: YearCounter$1
    });

    var Original = {
      Divider: Divider$1,
      FlipClock: FlipClock,
      Group: Group$1,
      Label: Label$1,
      List: List$1,
      ListItem: ListItem$1,
      faces: faces
    };

    /**
     * @alias DefaultValues
     * @type {object}
     * @memberof module:Config/DefaultValues
     */

    var DefaultValues = {
      face: Counter,
      theme: Original,
      language: English
    };

    var FlipClock$1 =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(FlipClock, _DomComponent);

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
      function FlipClock(el, value, attributes) {
        var _this;

        _classCallCheck(this, FlipClock);

        if (!validate(el, HTMLElement)) {
          error(ConsoleMessages.element);
        }

        if (isObject(value) && !attributes) {
          attributes = value;
          value = undefined;
        }

        var face = attributes.face || DefaultValues.face;
        delete attributes.face;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlipClock).call(this, Object.assign({
          originalValue: value,
          theme: DefaultValues.theme,
          language: DefaultValues.language,
          timer: Timer.make(attributes.interval || 1000)
        }, attributes)));

        if (!_this.face) {
          _this.face = face;
        }

        _this.mount(el);

        return _this;
      }
      /**
       * The clock `Face`.
       *
       * @type {Face}
       */


      _createClass(FlipClock, [{
        key: "mount",

        /**
         * Mount the clock to the parent DOM element.
         *
         * @param  {HTMLElement} el - The parent `HTMLElement`.
         * @return {FlipClock} - The `FlipClock` instance.
         */
        value: function mount(el) {
          _get(_getPrototypeOf(FlipClock.prototype), "mount", this).call(this, el);

          this.face.mounted(this);
          return this;
        }
        /**
         * Render the clock's DOM nodes.
         *
         * @return {HTMLElement} - The parent `HTMLElement`.
         */

      }, {
        key: "render",
        value: function render() {
          // Call the parent render function
          _get(_getPrototypeOf(FlipClock.prototype), "render", this).call(this); // Check to see if the face has a render function defined in the theme.
          // This allows a face to completely re-render or add to the theme.
          // This allows face specific interfaces for a theme.


          if (this.theme.faces[this.face.name]) {
            this.theme.faces[this.face.name](this.el, this);
          } // Pass the clock instance to the rendered() function on the face.
          // This allows global modifications to the rendered templates not
          // theme specific.


          this.face.rendered(this); // Return the rendered `HTMLElement`.

          return this.el;
        }
        /**
         * Start the clock.
         *
         * @param  {Function} fn - The interval callback.
         * @return {FlipClock} - The `FlipClock` instance.
         */

      }, {
        key: "start",
        value: function start(fn) {
          var _this2 = this;

          if (!this.timer.started) {
            this.value = this.originalValue;
          }

          isUndefined(this.face.stopAt) && (this.face.stopAt = this.stopAt);
          isUndefined(this.face.originalValue) && (this.face.originalValue = this.originalValue);
          this.timer.start(function () {
            _this2.face.interval(_this2, fn);
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

      }, {
        key: "stop",
        value: function stop(fn) {
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

      }, {
        key: "reset",
        value: function reset(fn) {
          var _this3 = this;

          this.value = this.originalValue;
          this.timer.reset(function () {
            return _this3.interval(_this3, fn);
          });
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

      }, {
        key: "increment",
        value: function increment(value) {
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

      }, {
        key: "decrement",
        value: function decrement(value) {
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

      }, {
        key: "createDivider",
        value: function createDivider(attributes) {
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

      }, {
        key: "createList",
        value: function createList(value, attributes) {
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

      }, {
        key: "createLabel",
        value: function createLabel(value, attributes) {
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

      }, {
        key: "createGroup",
        value: function createGroup(items, attributes) {
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

      }, {
        key: "face",
        get: function get$$1() {
          return this.$face;
        },
        set: function set(value) {
          if (!validate(value, [Face, 'string', 'function'])) {
            error(ConsoleMessages.face);
          }

          this.$face = (Faces[value] || value).make(Object.assign(this.getPublicAttributes(), {
            originalValue: this.face ? this.face.originalValue : undefined
          }));
          this.$face.initialized(this);

          if (this.value) {
            this.$face.value = this.face.createFaceValue(this, this.value.value);
          } else if (!this.value) {
            this.value = this.originalValue;
          }

          this.el && this.render();
        }
        /**
         * The `stopAt` attribute.
         *
         * @type {*}
         */

      }, {
        key: "stopAt",
        get: function get$$1() {
          return isFunction(this.$stopAt) ? this.$stopAt(this) : this.$stopAt;
        },
        set: function set(value) {
          this.$stopAt = value;
        }
        /**
         * The `timer` instance.
         *
         * @type {Timer}
         */

      }, {
        key: "timer",
        get: function get$$1() {
          return this.$timer;
        },
        set: function set(timer) {
          if (!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
          }

          this.$timer = timer;
        }
        /**
         * Helper method to The clock's `FaceValue` instance.
         *
         * @type {FaceValue|null}
         */

      }, {
        key: "value",
        get: function get$$1() {
          return this.face ? this.face.value : null;
        },
        set: function set(value) {
          if (!this.face) {
            throw new Error('A face must be set before setting a value.');
          }

          if (value instanceof FaceValue) {
            this.face.value = value;
          } else if (this.value) {
            this.face.value = this.face.value.clone(value);
          } else {
            this.face.value = this.face.createFaceValue(this, value);
          }

          this.el && this.render();
        }
        /**
         * The `originalValue` attribute.
         *
         * @type {*}
         */

      }, {
        key: "originalValue",
        get: function get$$1() {
          if (isFunction(this.$originalValue) && !this.$originalValue.name) {
            return this.$originalValue();
          }

          if (!isUndefined(this.$originalValue) && !isNull(this.$originalValue)) {
            return this.$originalValue;
          }

          return this.face ? this.face.defaultValue() : undefined;
        },
        set: function set(value) {
          this.$originalValue = value;
        }
      }], [{
        key: "defineName",

        /**
         * Define the name of the class.
         *
         * @return {string}
         */
        value: function defineName() {
          return 'FlipClock';
        }
        /**
         * Helper method to set the default `Face` value.
         *
         * @param  {Face} value - The default `Face` class.This should be a
         *     constructor.
         * @return {void}
         */

      }, {
        key: "setDefaultFace",
        value: function setDefaultFace(value) {
          if (!validate(value, Face)) {
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

      }, {
        key: "setDefaultTheme",
        value: function setDefaultTheme(value) {
          if (!validate(value, 'object')) {
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

      }, {
        key: "setDefaultLanguage",
        value: function setDefaultLanguage(value) {
          if (!validate(value, 'object')) {
            error(ConsoleMessages.language);
          }

          DefaultValues.language = value;
        }
      }, {
        key: "defaults",
        get: function get$$1() {
          return DefaultValues;
        }
      }]);

      return FlipClock;
    }(DomComponent);

    return FlipClock$1;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvSGVscGVycy9EaWdpdGl6ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2FyLWFyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jYS1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcm8tcm8uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3ZuLXZuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2luZGV4LmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvTGFuZ3VhZ2UuanMiLCIuLi9zcmMvanMvSGVscGVycy9UcmFuc2xhdGUuanMiLCIuLi9zcmMvanMvSGVscGVycy9UZW1wbGF0ZS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RvbUNvbXBvbmVudC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3QuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Hcm91cC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xhYmVsLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvVGltZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9NaW51dGVDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0hvdXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0RheUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvVHdlbnR5Rm91ckhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VsdmVIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvWWVhckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvaW5kZXguanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgaGVscGVyIGZ1bmN0aW9ucywgc29tZSBib3Jyb3dlZCBmcm9tIExvZGFzaCxcbiAqIFVuZGVyc2NvcmUsIGV0YywgdG8gcHJvdmlkZSBjb21tb24gZnVuY3Rpb25hbGl0eSB3aXRob3V0IHRoZSBuZWVkIGZvciB1c2luZ1xuICogYSBkZXBlbmRlbmN5LiBBbGwgb2YgdGhpcyBpcyBhbiBhdHRlbXB0IHRvIHJlZHVjZSB0aGUgZmlsZSBzaXplIG9mIHRoZVxuICogbGlicmFyeS5cbiAqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cblxuLyoqXG4gKiBUaHJvdyBhIHN0cmluZyBhcyBhbiBFcnJvciBleGNlcHRpb24uXG4gKlxuICogQGZ1bmN0aW9uIGVycm9yXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3Ioc3RyaW5nKSB7XG4gICAgdGhyb3cgRXJyb3Ioc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgZm5gIGlzIGEgZnVuY3Rpb24sIGFuZCBjYWxsIGl0IHdpdGggYHRoaXNgIGNvbnRleHQgYW5kIHBhc3MgdGhlXG4gKiBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmN0aW9uIGNhbGxiYWNrXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBjYWxsYmFjayBmbi5cbiAqIEBwYXJhbSAgey4uLip9IGFyZ3MgLSBUaGUgYXJndW1lbnRzIHRvIHBhc3MuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayhmbiwgLi4uYXJncykge1xuICAgIGlmKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSb3VuZCB0aGUgdmFsdWUgdG8gdGhlIGNvcnJlY3QgdmFsdWUuIFRha2VzIGludG8gYWNjb3VudCBuZWdhdGl2ZSBudW1iZXJzLlxuICpcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtICB7dmFsdWV9IHN0cmluZyAtIFRoZSB2YWx1ZSB0byByb3VuZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgcm91bmRlZCB2YWx1ZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZVplcm8oXG4gICAgICAgIHZhbHVlID0gaXNOZWdhdGl2ZSh2YWx1ZSkgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSlcbiAgICApID8gKCctJyArIHZhbHVlKS50b1N0cmluZygpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYHVuZGVmaW5lZCBvciBgbnVsbGAuXG4gKlxuICogQGZ1bmN0aW9uIG5vb3BcbiAqIEBwYXJhbSAge3ZhbHVlfSBzdHJpbmcgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIGB0cnVlYCBpZiBgdW5kZWZpbmVkIG9yIGBudWxsYC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHRoZSBgYmVmb3JlYCBhdHRyaWJ1dGUgYW5kIHBhc3NlcyB0aGF0IHZhbHVlXG4gKiB0byBgYWZ0ZXJgIGFuZCB0aGUgc3Vic2VxdWVudCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY3Rpb24gY2hhaW5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBiZWZvcmUgLSBUaGUgZmlyc3QgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBhZnRlciAtIFRoZSBzdWJzZXF1ZW50IGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIGNoYWluLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbihiZWZvcmUsIGFmdGVyKSB7XG4gICAgcmV0dXJuICgpID0+IGFmdGVyKGJlZm9yZSgpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIG1hcHMgdGhlIHZhbHVlcyBiZWZvcmUgY29uY2F0ZW5hdGluZyB0aGVtLlxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRNYXBcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBmbiAtIFRoZSBtYXAgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIG1hcCBhbmQgY29uY2F0ZW5hdGlvbi5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TWFwKGZuKSB7XG4gICAgcmV0dXJuIHggPT4ge1xuICAgICAgICByZXR1cm4geC5tYXAoZm4pLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKTtcbiAgICB9XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheS5cbiAqXG4gKiBAZnVuY3Rpb24gZmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh2YWx1ZSA9PiB2YWx1ZSkodmFsdWUpXG59XG5cbi8qKlxuICogRGVlcCBmbGF0dGVuIGFuIGFycmF5LlxuICpcbiAqIEBmdW5jdGlvbiBkZWVwRmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IEFycmF5LmlzQXJyYXkoeCkgPyBkZWVwRmxhdHRlbiAoeCkgOiB4KSh4KTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgaW4gYSBzdHJpbmcuXG4gKlxuICogQGZ1bmN0aW9uIHVjZmlyc3RcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVjZmlyc3Qoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgYSBkZWVwIGZsYXR0ZW4gYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGxlbmd0aFxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGNvdW50LlxuICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBsZW5ndGggb2YgdGhlIGRlZXAgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgodmFsdWUpIHtcbiAgICByZXR1cm4gZGVlcEZsYXR0ZW4odmFsdWUpLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBuZWdhdGl2ZSB6ZXJvLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlWmVyb1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgbmVnYXRpdmUgemVybyAoYC0wYCkuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKHZhbHVlKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLnJvdW5kKHZhbHVlKSA9PT0gLUluZmluaXR5O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIG5lZ2F0aXZlLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBuZWdhdGl2ZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlWmVybyh2YWx1ZSkgfHwgdmFsdWUgPCAwO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgbnVsbGAuXG4gKlxuICogQGZ1bmN0aW9uIGlzTnVsbFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGBudWxsYC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNOdWxsXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYHVuZGVmaW5lZGAuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgY29uc3RydWN0b3IuXG4gKlxuICogQGZ1bmN0aW9uIGlzQ29uc3RydWN0b3JcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBjb25zdHJ1Y3Rvci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgISF2YWx1ZS5uYW1lO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY3Rpb24gaXNTdHJpbmdcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGlzU3RyaW5nXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNPYmplY3RcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBpbnRvIGtlYmFiIGNhc2UuXG4gKlxuICogQGZ1bmN0aW9uIGtlYmFiQ2FzZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGVycm9yLCBjYWxsYmFjaywgaXNPYmplY3QsIGtlYmFiQ2FzZSB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEFic3RyYWN0IGJhc2UgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBldmVudHM6IHt9XG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBuYW1lYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgICBpZighKHRoaXMuY29uc3RydWN0b3IuZGVmaW5lTmFtZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgZXJyb3IoJ0V2ZXJ5IGNsYXNzIG11c3QgZGVmaW5lIGl0cyBuYW1lLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZGVmaW5lTmFtZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgZXZlbnRzYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmVudHMgfHwge307XG4gICAgfVxuXG4gICAgc2V0IGV2ZW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRldmVudHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgLSBUaGUgZXZlbnQgaWQva2V5LlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBSZXR1cm5zIGB0aGlzYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBlbWl0KGtleSwgLi4uYXJncykge1xuICAgICAgICBpZih0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IFtvbmNlPWZhbHNlXSAtIFNob3VsZCB0aGUgZXZlbnQgaGFuZGxlciBiZSBmaXJlZCBhXG4gICAgICogICAgIHNpbmdsZSB0aW1lLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBSZXR1cm5zIGB0aGlzYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBvbihrZXksIGZuLCBvbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIXRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0ucHVzaChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGV2ZW50IGlkL2tleS5cbiAgICAgKiBAcGFyYW0geyhGdW5jdGlvbnx1bmRlZmluZWQpfSBmbiAtIFRoZSBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbi4gSWYgbm9cbiAgICAgKiAgICAgZnVuY3Rpb24gaXMgZGVmaW5lZCwgYWxsIGV2ZW50cyB3aXRoIHRoZSBzcGVjaWZpZWQgaWQva2V5IHdpbGwgYmVcbiAgICAgKiAgICAgcmVtb3ZlZC4gT3RoZXJ3aXNlLCBvbmx5IHRoZSBldmVudCBsaXN0ZW5lcnMgbWF0Y2hpbmcgdGhlIGlkL2tleSBBTkRcbiAgICAgKiAgICAgY2FsbGJhY2sgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBSZXR1cm5zIGB0aGlzYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBvZmYoa2V5LCBmbikge1xuICAgICAgICBpZih0aGlzLmV2ZW50c1trZXldICYmIGZuKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gdGhpcy5ldmVudHNba2V5XS5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudCAhPT0gZm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhbiBldmVudCBvbmx5IG9uZSB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgLSBUaGUgZXZlbnQgaWQva2V5LlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtDb21wb25lbnR9IC0gUmV0dXJucyBgdGhpc2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgb25jZShrZXksIGZuKSB7XG4gICAgICAgIGZuID0gY2hhaW4oZm4sICgpID0+IHRoaXMub2ZmKGtleSwgZm4pKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5vbihrZXksIGZuLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gYXR0cmlidXRlLiBSZXR1cm5zIG51bGwgaWYgbm8gYXR0cmlidXRlIGlzIGRlZmluZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gdGhpc1trZXldIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRoZSBhdHR0cmlidXRlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgYXR0cmlidXRlIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBvbmx5IHB1YmxpYyB0aGUgYXR0dHJpYnV0ZXMgZm9yIHRoaXMgaW5zdGFuY2UuIE9taXRzIGFueSBhdHRyaWJ1dGVcbiAgICAgKiB0aGF0IHN0YXJ0cyB3aXRoIGAkYCwgd2hpY2ggaXMgdXNlZCBpbnRlcm5hbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSBhdHRyaWJ1dGUgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBnZXRQdWJsaWNBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRBdHRyaWJ1dGVzKCkpXG4gICAgICAgICAgICAuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFrZXkubWF0Y2goL15cXCQvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhbiBhdHRyaWJ1dGUga2V5IGFuZCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYW4gYXR0cmlidXRlcyBieSBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZXMgLSBUaGUgb2JqZWN0IGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXRBdHRyaWJ1dGVzKHZhbHVlcykge1xuICAgICAgICBmb3IoY29uc3QgaSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGksIHZhbHVlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGV4ZWN1dGUgdGhlIGBjYWxsYmFjaygpYCBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKiBAcmV0dXJuIHsqfSAtIFJldHVybnMgdGhlIGV4ZWN1dGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNhbGxiYWNrKGZuKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGYWN0b3IgbWV0aG9kIHRvIHN0YXRpYyBpbnN0YW50aWF0ZSBuZXcgaW5zdGFuY2VzLiBVc2VmdWwgZm9yIHdyaXRpbmdcbiAgICAgKiBjbGVhbiBleHByZXNzaXZlIHN5bnRheCB3aXRoIGNoYWluZWQgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgey4uLip9IGFyZ3MgLSBUaGUgY2FsbGJhY2sgYXJndW1lbnRzLlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIG5ldyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhdGljIG1ha2UoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoLi4uYXJncyk7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5EaWdpdGl6ZVxuICovXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogRGlnaXRpemUgYSBudW1iZXIsIHN0cmluZywgb3IgYW4gYXJyYXkgaW50byBhIGRpZ2l0aXplZCBhcnJheS4gVGhpcyBmdW5jdGlvblxuICogdXNlIGJ5IHRoZSBgRmFjZWAsIHdoaWNoIGNvbnZlcnQgdGhlIGRpZ2l0aXplZCBhcnJheSBpbnRvIGFuIGFycmF5IG9mIGBMaXN0YFxuICogaW5zdGFuY2VzLlxuICpcbiAqIEBmdW5jdGlvbiBkaWdpdGl6ZVxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gZGlnaXRpemUuXG4gKiBAcGFyYW0gIHsoT2JqZWN0fHVuZGVmaW5lZCl9IFtvcHRpb25zXSAtIFRoZSBkaWdpdGl6ZXIgb3B0aW9ucy5cbiAqIEByZXR1cm4ge2FycmF5fSAtIFRoZSBkaWdpdGl6ZWQgYXJyYXkuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5EaWdpdGl6ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbWluaW11bURpZ2l0czogMCxcbiAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBwcmVwZW5kKG51bWJlcikge1xuICAgICAgICBjb25zdCBzaG91bGRQcmVwZW5kWmVybyA9IG9wdGlvbnMucHJlcGVuZExlYWRpbmdaZXJvICYmXG4gICAgICAgICAgICBudW1iZXIudG9TdHJpbmcoKS5zcGxpdCgnJykubGVuZ3RoID09PSAxO1xuXG4gICAgICAgIHJldHVybiAoc2hvdWxkUHJlcGVuZFplcm8gPyAnMCcgOiAnJykuY29uY2F0KG51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlnaXRzKGFyciwgbWluKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRlZXBGbGF0dGVuKGFycikubGVuZ3RoO1xuXG4gICAgICAgIGlmKGxlbmd0aCA8IG1pbikge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1pbiAtIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyWzBdLnVuc2hpZnQoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZ2l0cyhmbGF0dGVuKFt2YWx1ZV0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gZmxhdHRlbihkZWVwRmxhdHRlbihbbnVtYmVyXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJlcGVuZChudW1iZXIpLnNwbGl0KCcnKTtcbiAgICAgICAgfSkpO1xuICAgIH0pLCBvcHRpb25zLm1pbmltdW1EaWdpdHMgfHwgMCk7XG59XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5WYWx1ZVxuICovXG5cbi8qKlxuICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIG1pbi9tYXggcmFuZ2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7YXJyYXl9XG4gKi9cbmNvbnN0IFJBTkdFUyA9IFt7XG4gICAgLy8gMC05XG4gICAgbWluOiA0OCxcbiAgICBtYXg6IDU3XG59LHtcbiAgICAvLyBhLXpcbiAgICBtaW46IDY1LFxuICAgIG1heDogOTBcbn0se1xuICAgIC8vIEEtWlxuICAgIG1pbjogOTcsXG4gICAgbWF4OiAxMjJcbn1dO1xuXG4vKipcbiAqIEZvcm1hdCBhIHN0cmluZyBpbnRvIGEgbmV3IGRhdGEgdHlwZS4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc3RyaW5nIHRvXG4gKiBudW1iZXIgY29udmVyc2lvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvcm1hdFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmcgdG8gZm9ybWF0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZGF0YSB0eXBlIChyZXByZXNlbnRlZCBhcyBhIHN0cmluZykgdXNlZCB0b1xuICogICAgIGNvbnZlcnQgdGhlIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyB0aGUgZm9ybWF0dGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KHN0cmluZywgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbi8qKlxuICogRmluZCB0aGUgcmFuZ2Ugb2JqZWN0IGZyb20gdGhlIGBSQU5HRVNgIGNvbnN0YW50IGZyb20gdGhlIGNoYXJhY3RlciBnaXZlbi5cbiAqIFRoaXMgaXMgbWFpbmx5IGFuIGludGVydmFsIG1ldGhvZCwgYnV0IGNhbiBiZSB1c2VkIGJ5IGZhY2VzIHRvIGhlbHBcbiAqIGRldGVybWluZSB3aGF0IHRoZSBuZXh0IHZhbHVlIG9mIGEgc3RyaW5nIHNob3VsZCBiZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvcm1hdFxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSBUaGUgY2hhciB1c2VkIHRvIGRldGVybWluZSB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBkYXRhIHR5cGUgKHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nKSB1c2VkIHRvXG4gKiAgICAgY29udmVydCB0aGUgc3RyaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBmaW5kUmFuZ2UoY2hhcikge1xuICAgIGZvcihjb25zdCBpIGluIFJBTkdFUykge1xuICAgICAgICBjb25zdCBjb2RlID0gY2hhci50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgaWYoUkFOR0VTW2ldLm1pbiA8PSBjb2RlICYmIFJBTkdFU1tpXS5tYXggPj0gY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJBTkdFU1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBmcm9tIGEgY2hhcmFjdGVyIGNvZGUsIHdoaWNoIGlzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhbGxiYWNrIHN0cmluZ0Zyb21DaGFyQ29kZUJ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhciAtIFRoZSBjaGFyIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJlY2VpdmVzIGByYW5nZWAgYW5kIGBjb2RlYFxuICogICAgIGFyZ3VtZW50cy4gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgY2hhcmFjdGVyIGNvZGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gQ3JlYXRlcyBhIHN0cmluZyBmcm9tIHRoZSBjaGFyYWN0ZXIgY29kZSByZXR1cm5lZCBieSB0aGVcbiAqICAgICBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJDb2RlQnkoY2hhciwgZm4pIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgZm4oZmluZFJhbmdlKGNoYXIpLCBjaGFyLmNoYXJDb2RlQXQoMCkpXG4gICAgKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG5leHQgdmFsdWUgZm9yIGEgc3RyaW5nLiAnYScgYmVjb21lcyAnYicuICdBJyBiZWNvbWVzICdCJy4gMVxuICogYmVjb21lcyAyLCBldGMuIElmIG11bHRpcGxlIGNoYXJhY3RlciBzdHJpbmdzIGFyZSBwYXNzZWQsICdhYScgd291bGQgYmVjb21lXG4gKiAnYmInLlxuICpcbiAqIEBmdW5jdGlvbiBuZXh0XG4gKiBAcGFyYW0gIHsoc3RyaW5nfG51bWJlcil9IHZhbHVlIC0gVGhlIHN0cmluZyBvciBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgZm9ybWF0dGVkIHN0cmluZ1xuICogQG1lbWJlcm9mIEhlbHBlcnMuVmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IHN0cmluZ0Zyb21DaGFyQ29kZUJ5KGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlIDwgcmFuZ2UubWF4ID8gY29kZSArIDEgOiByYW5nZS5taW5cbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcHJldiB2YWx1ZSBmb3IgYSBzdHJpbmcuICdiJyBiZWNvbWVzICdhJy4gJ0InIGJlY29tZXMgJ0EnLiAyXG4gKiBiZWNvbWVzIDEsIDAgYmVjb21lcyA5LCBldGMuIElmIG11bHRpcGxlIGNoYXJhY3RlciBzdHJpbmdzIGFyZSBwYXNzZWQsICdiYidcbiAqIHdvdWxkIGJlY29tZSAnYWEnLlxuICpcbiAqIEBmdW5jdGlvbiBwcmV2XG4gKiBAcGFyYW0gIHsoc3RyaW5nfG51bWJlcil9IHZhbHVlIC0gVGhlIHN0cmluZyBvciBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgZm9ybWF0dGVkIHN0cmluZ1xuICogQG1lbWJlcm9mIEhlbHBlcnMuVmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IHN0cmluZ0Zyb21DaGFyQ29kZUJ5KGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlID4gcmFuZ2UubWluID8gY29kZSAtIDEgOiByYW5nZS5tYXhcbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgZGlnaXRpemUgZnJvbSAnLi4vSGVscGVycy9EaWdpdGl6ZSc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBsZW5ndGgsIGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZVZhbHVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgRmFjZVZhbHVlYCBjbGFzcyBoYW5kbGVzIGFsbCB0aGUgZGlnaXRpemluZyBmb3IgdGhlIGBGYWNlYC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBGYWNlVmFsdWVcbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIGBGYWNlVmFsdWVgJ3MgYWN0dWFsIHZhbHVlLiBNb3N0IGxpa2VseSBzaG91bGRcbiAgICAgKiAgICAgc3RyaW5nLCBudW1iZXIsIG9yIERhdGUuIEJ1dCBzaW5jZSB0aGUgRmFjZSBoYW5kbGVzIHRoZSB2YWx1ZSwgaXRcbiAgICAgKiAgICAgY291bGQgYmUgYW55dGhpbmcuXG4gICAgICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IDBcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGRpZ2l0c2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUgeyhBcnJheXx1bmRlZmluZWQpfVxuICAgICAqL1xuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgc2V0IGRpZ2l0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRkaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5taW5pbXVtRGlnaXRzID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlnaXRzLCBsZW5ndGgodmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5kaWdpdHMgPSBkaWdpdGl6ZSh0aGlzLmZvcm1hdCh2YWx1ZSksIHtcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IHRoaXMubWluaW11bURpZ2l0cyxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdGhpcy5wcmVwZW5kTGVhZGluZ1plcm9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgYXR0cmlidXRlIGlzIG5vdCBhIG51bWJlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gYHRydWVgIGlzIHRoZSB2YWx1ZSBpcyBub3QgYSBudW1iZXIuXG4gICAgICovXG4gICAgaXNOYU4oKSB7XG4gICAgICAgIHJldHVybiBpc05hTih0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUgaXMgYSBudW1iZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGB0cnVlYCBpcyB0aGUgdmFsdWUgaXMgYSBudW1iZXIuXG4gICAgICovXG4gICAgaXNOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBpc051bWJlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lcyB0aGUgY3VycmVudCBgRmFjZVZhbHVlYCBpbnN0YW5jZSwgYnV0IHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlXG4gICAgICogY2xvbmVkIGluc3RhbmNlLiBVc2VkIGZvciBjb3B5aW5nIHRoZSBjdXJyZW50IGluc3RhbmNlIG9wdGlvbnMgYW5kXG4gICAgICogbWV0aG9kcywgYnV0IHNldHRpbmcgYSBuZXcgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBuXG4gICAgICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEByZXR1cm4ge0ZhY2VWYWx1ZX0gLSBUaGUgY2xvbmVkIGBGYWNlVmFsdWVgLlxuICAgICAqL1xuICAgIGNsb25lKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih2YWx1ZSwgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpLCBhdHRyaWJ1dGVzXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgbmFtZSBvZiB0aGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmluZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnRmFjZVZhbHVlJztcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQG5hbWVzcGFjZSBIZWxwZXJzLlZhbGlkYXRlXG4gKi9cbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQ29uc3RydWN0b3IgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIGRhdGEgdHlwZSBvZiBhIHZhcmlhYmxlLlxuICpcbiAqIEBmdW5jdGlvbiB2YWxpZGF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byB2YWxpZGF0ZS5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyAtIFRoZSBkYXRhIHR5cGVzIHRvIHVzZSBmb3IgdmFsaWRhdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgaXMgdGhlIHZhbHVlIGhhcyBhIHZhbGlkIGRhdGEgdHlwZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbGlkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDb25zdHJ1Y3RvcihhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiLyoqXG4gKiBAYWxpYXMgQ29uc29sZU1lc3NhZ2VzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIG1vZHVsZTpDb25maWcvQ29uc29sZU1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjbGFzc05hbWU6ICdUaGUgY2xhc3NOYW1lKCkgaXMgbm90IGRlZmluZWQuJyxcbiAgICBpdGVtczogJ1RoZSBpdGVtcyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicsXG4gICAgdGhlbWU6ICdUaGUgdGhlbWUgcHJvcGVydHkgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBsYW5ndWFnZTogJ1RoZSBsYW5ndWFnZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGRhdGU6ICdUaGUgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERhdGUuJyxcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2UgY2xhc3MuJyxcbiAgICBlbGVtZW50OiAnVGhlIGVsZW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhbiBIVE1MRWxlbWVudCcsXG4gICAgZmFjZVZhbHVlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2VWYWx1ZSBjbGFzcy4nLFxuICAgIHRpbWVyOiAnVGhlIHRpbWVyIHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBUaW1lciBjbGFzcy4nXG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBlcnJvciwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNPYmplY3QsIGlzQXJyYXksIGlzRnVuY3Rpb24sIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgbWVhbnQgdG8gYmUgcHJvdmlkZSBhbiBpbnRlcmZhY2UgZm9yIGFsbCBvdGhlciBmYWNlcyB0b1xuICAgICAqIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBGYWNlXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gICAgICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICBjb3VudGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uUmF0ZTogNTAwXG4gICAgICAgIH0sIHRoaXMuZGVmYXVsdEF0dHJpYnV0ZXMoKSwgYXR0cmlidXRlcyB8fCB7fSkpO1xuXG4gICAgICAgIGlmKGlzTnVsbCh2YWx1ZSkgfHwgaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGBkYXRhVHlwZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgZ2V0IGRhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGF0YVR5cGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYoISh2YWx1ZSBpbnN0YW5jZW9mIEZhY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jcmVhdGVGYWNlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICBzZXQgc3RvcEF0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3BBdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIHNldCBvcmlnaW5hbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBldmVyeSBpbnRlcnZhbCwgb3IgZXZlcnkgdGltZSB0aGUgY2xvY2tcbiAgICAgKiBzaG91bGQgY2hhbmdlLCBhbmQgaGFuZGxlcyB0aGUgYWN0dWFsIGluY3JlbWVudGluZyBhbmQgZGVjcmVtZW50aW5nIHRoZVxuICAgICAqIGNsb2NrJ3MgYEZhY2VWYWx1ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtGYWNlfSAtIFRoaXMgYEZhY2VgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICBpZih0aGlzLmNvdW50ZG93bikge1xuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgaWYodGhpcy5zaG91bGRTdG9wKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjbG9jayBzaG91bGQgc3RvcCBvciBub3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNsb2NrIHNob3VsZCBzdG9wLlxuICAgICAqL1xuICAgIHNob3VsZFN0b3AoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGlzLnN0b3BBdCkgPyB0aGlzLnN0b3BBdCA9PT0gaW5zdGFuY2UudmFsdWUudmFsdWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0IHRoaXMganVzdCByZXR1cm5zIHRoZSB2YWx1ZSB1bmZvcm1hdHRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gZm9ybWF0LlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGZvcm1hdHRlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBGYWNlYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgZm9yIHRoZSBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoT2JqZWN0fHVuZGVmaW5lZCl9IC0gVGhlIGRlZmF1bHQgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBkYXRhIHR5cGUgZm9yIHRoZSBgRmFjZWAgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoT2JqZWN0fHVuZGVmaW5lZCl9IC0gVGhlIGRlZmF1bHQgZGF0YSB0eXBlLlxuICAgICAqL1xuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIGNsb2NrLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFthbW91bnRdIC0gVGhlIGFtb3VudCB0byBpbmNyZW1lbnQuIElmIHRoZSBhbW91bnQgaXMgbm90XG4gICAgICogICAgIGRlZmluZWQsIGl0IGlzIGxlZnQgdXAgdG8gdGhlIGBGYWNlYCB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIGFtb3VudCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY3JlbWVudCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gW2Ftb3VudF0gLSBUaGUgYW1vdW50IHRvIGRlY3JlbWVudC4gSWYgdGhlIGFtb3VudCBpcyBub3RcbiAgICAgKiAgICAgZGVmaW5lZCwgaXQgaXMgbGVmdCB1cCB0byB0aGUgYEZhY2VgIHRvIGRldGVybWluZSB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgYW1vdW50KSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGNsb2NrIGhhcyBzdGFydGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgY2xvY2sgaGFzIHN0b3BwZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RvcHBlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBjbG9jayBoYXMgcmVzZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcmVzZXQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgYEZhY2VgIGhhcyBpbml0aWFsaXplZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0aWFsaXplZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBgRmFjZWAgaGFzIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcmVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGBGYWNlYCBoYXMgbW91bnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBtb3VudGVkKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b1N0YXJ0ICYmIGluc3RhbmNlLnRpbWVyLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBpbnN0YW5jZS5zdGFydChpbnN0YW5jZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgRmFjZVZhbHVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgRmFjZVZhbHVlYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtEaXZpZGVyfSAtIFRoZSBpbnN0YW50aWF0ZWQgYEZhY2VWYWx1ZWAuXG4gICAgICovXG4gICAgY3JlYXRlRmFjZVZhbHVlKGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRmFjZVZhbHVlLm1ha2UoXG4gICAgICAgICAgICBpc0Z1bmN0aW9uKHZhbHVlKSAmJiAhdmFsdWUubmFtZSA/IHZhbHVlKCkgOiB2YWx1ZSwge1xuICAgICAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IHRoaXMubWluaW11bURpZ2l0cyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+IHRoaXMuZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQGNsYXNzZGVzYyBBcmFiaWMgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5BcmFiaWNcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5BcmFiaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9iz2YbZiNin2KonLFxuICAgICdtb250aHMnICA6ICfYtNmH2YjYsScsXG4gICAgJ2RheXMnICAgIDogJ9ij2YrYp9mFJyxcbiAgICAnaG91cnMnICAgOiAn2LPYp9i52KfYqicsXG4gICAgJ21pbnV0ZXMnIDogJ9iv2YLYp9im2YInLFxuICAgICdzZWNvbmRzJyA6ICfYq9mI2KfZhtmKJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5BcmFiaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2FyJywgJ2FyLWFyJywgJ2FyYWJpYyddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIENhdGFsYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYXRhbGFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuQ2F0YWxhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNhdGFsYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyA6ICdBbnlzJyxcbiAgICAnbW9udGhzJyA6ICdNZXNvcycsXG4gICAgJ2RheXMnIDogJ0RpZXMnLFxuICAgICdob3VycycgOiAnSG9yZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dHMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWdvbnMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNhdGFsYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NhJywgJ2NhLWVzJywgJ2NhdGFsYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBDemVjaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuQ3plY2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DemVjaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ3plY2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NzJywgJ2NzLWN6JywgJ2N6JywgJ2N6LWNzJywgJ2N6ZWNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRGFuaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRGFuaXNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRGFuaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2UnLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkRhbmlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgR2VybWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgR2VybWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuR2VybWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuR2VybWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5HZXJtYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEVuZ2xpc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRW5nbGlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZZWFycycsXG5cdCdtb250aHMnICA6ICdNb250aHMnLFxuXHQnZGF5cycgICAgOiAnRGF5cycsXG5cdCdob3VycycgICA6ICdIb3VycycsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVzJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZHMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2VuJywgJ2VuLXVzJywgJ2VuZ2xpc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3BhbmlzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlNwYW5pc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5TcGFuaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuU3BhbmlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZXMnLCAnZXMtZXMnLCAnc3BhbmlzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFBlcnNpYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQZXJzaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuUGVyc2lhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBlcnNpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfYs9in2YQnLFxuXHQnbW9udGhzJyAgOiAn2YXYp9mHJyxcblx0J2RheXMnICAgIDogJ9ix2YjYsicsXG5cdCdob3VycycgICA6ICfYs9in2LnYqicsXG5cdCdtaW51dGVzJyA6ICfYr9mC24zZgtmHJyxcblx0J3NlY29uZHMnIDogJ9ir2KfZhtuM2YcnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBlcnNpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBGaW5uaXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkZpbm5pc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5GaW5uaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnVnVvdHRhJyxcblx0J21vbnRocycgIDogJ0t1dWthdXR0YScsXG5cdCdkYXlzJyAgICA6ICdQw6RpdsOkw6QnLFxuXHQnaG91cnMnICAgOiAnVHVudGlhJyxcblx0J21pbnV0ZXMnIDogJ01pbnV1dHRpYScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bnRpYSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRmlubmlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmknLCAnZmktZmknLCAnZmlubmlzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkNhbmFkaWFuRnJlbmNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2FuYWRpYW5GcmVuY2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0FucycsXG4gICAgJ21vbnRocycgIDogJ01vaXMnLFxuICAgICdkYXlzJyAgICA6ICdKb3VycycsXG4gICAgJ2hvdXJzJyAgIDogJ0hldXJlcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWNvbmRlcydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2FuYWRpYW5GcmVuY2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZyJywgJ2ZyLWNhJywgJ2ZyZW5jaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEhlYnJldyBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEhlYnJldyBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkhlYnJld1xuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkhlYnJld1xuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkhlYnJld1xuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgSHVuZ2FyaWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuSHVuZ2FyaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSHVuZ2FyaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4l2JyxcbiAgICAnbW9udGhzJyAgOiAnSMOzbmFwJyxcbiAgICAnZGF5cycgICAgOiAnTmFwJyxcbiAgICAnaG91cnMnICAgOiAnw5NyYScsXG4gICAgJ21pbnV0ZXMnIDogJ1BlcmMnLFxuICAgICdzZWNvbmRzJyA6ICdNw6Fzb2RwZXJjJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5IdW5nYXJpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2h1JywgJ2h1LWh1JywgJ2h1bmdhcmlhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBJdGFsaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuSXRhbGlhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkl0YWxpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSXRhbGlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgSmFwYW5lc2UgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBKYXBhbmVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkphcGFuZXNlXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSmFwYW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSmFwYW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgS29yZWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuS29yZWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuS29yZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn64WEJyxcblx0J21vbnRocycgIDogJ+yblCcsXG5cdCdkYXlzJyAgICA6ICfsnbwnLFxuXHQnaG91cnMnICAgOiAn7IucJyxcblx0J21pbnV0ZXMnIDogJ+u2hCcsXG5cdCdzZWNvbmRzJyA6ICfstIgnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLktvcmVhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsna28nLCAna28ta3InLCAna29yZWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIExhdHZpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5MYXR2aWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuTGF0dmlhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkxhdHZpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2x2JywgJ2x2LWx2JywgJ2xhdHZpYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBEdXRjaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIER1dGNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRHV0Y2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5EdXRjaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnSmFyZW4nLFxuICAgICdtb250aHMnICA6ICdNYWFuZGVuJyxcbiAgICAnZGF5cycgICAgOiAnRGFnZW4nLFxuICAgICdob3VycycgICA6ICdVcmVuJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlbicsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVuJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5EdXRjaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBOb3J3ZWdpYW4tQm9rbcOlbCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbi1Cb2ttw6VsIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuTm9yd2VnaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuTm9yd2VnaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2VyJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Ob3J3ZWdpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25vJywgJ25iJywgJ25vLW5iJywgJ25vcndlZ2lhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFBvbGlzaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvbGlzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlBvbGlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBvbGlzaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0xhdCcsXG5cdCdtb250aHMnICA6ICdNaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnRG5pJyxcblx0J2hvdXJzJyAgIDogJ0dvZHppbnknLFxuXHQnbWludXRlcycgOiAnTWludXR5Jyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBvbGlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUG9ydHVndWVzZSBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5Qb3J0dWd1ZXNlXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUG9ydHVndWVzZVxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0Fub3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRGlhcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Qb3J0dWd1ZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwdCcsICdwdC1icicsICdwb3J0dWd1ZXNlJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUm9tYW5pYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSb21hbmlhbiBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlJvbWFuaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUm9tYW5pYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycyc6ICdBbmknLFxuXHQnbW9udGhzJzogJ0x1bmknLFxuXHQnZGF5cyc6ICdaaWxlJyxcblx0J2hvdXJzJzogJ09yZScsXG5cdCdtaW51dGVzJzogJ01pbnV0ZScsXG5cdCdzZWNvbmRzJzogJ3NTZWN1bmRlJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Sb21hbmlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncm8nLCAncm8tcm8nLCAncm9tYW5hJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFJ1c3NpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5SdXNzaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUnVzc2lhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5SdXNzaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydydScsICdydS1ydScsICdydXNzaWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgU2xvdmFrIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU2xvdmFrIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuU2xvdmFrXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuU2xvdmFrXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5TbG92YWtcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFN3ZWRpc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuU3dlZGlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlN3ZWRpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmFkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnYXInLFxuXHQnaG91cnMnICAgOiAnVGltbWFyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlN3ZWRpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3N2JywgJ3N2LXNlJywgJ3N3ZWRpc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBUaGFpIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVGhhaSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlRoYWlcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UaGFpXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlRoYWlcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3RoJywgJ3RoLXRoJywgJ3RoYWknXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBUdXJraXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHVya2lzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlR1cmtpc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UdXJraXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWcSxbCcsXG5cdCdtb250aHMnICA6ICdBeScsXG5cdCdkYXlzJyAgICA6ICdHw7xuJyxcblx0J2hvdXJzJyAgIDogJ1NhYXQnLFxuXHQnbWludXRlcycgOiAnRGFraWthJyxcblx0J3NlY29uZHMnIDogJ1Nhbml5ZSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuVHVya2lzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFVrcmFpbmlhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlVrcmFpbmlhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlVrcmFpbmlhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0YDQvtC60LgnLFxuICAgICdtb250aHMnICA6ICfQvNGW0YHRj9GG0ZYnLFxuICAgICdkYXlzJyAgICA6ICfQtNC90ZYnLFxuICAgICdob3VycycgICA6ICfQs9C+0LTQuNC90LgnLFxuICAgICdtaW51dGVzJyA6ICfRhdCy0LjQu9C40L3QuCcsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtNC4J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Va3JhaW5pYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3VhJywgJ3VhLXVhJywgJ3VrcmFpbmUnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBWaWV0bmFtZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVmlldG5hbWVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlZpZXRuYW1lc2VcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5WaWV0bmFtZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnTsSDbScsXG5cdCdtb250aHMnICA6ICdUaMOhbmcnLFxuXHQnZGF5cycgICAgOiAnTmfDoHknLFxuXHQnaG91cnMnICAgOiAnR2nhu50nLFxuXHQnbWludXRlcycgOiAnUGjDunQnLFxuXHQnc2Vjb25kcycgOiAnR2nDonknXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlZpZXRuYW1lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3ZuJywgJ3ZuLXZuJywgJ3ZpZXRuYW1lc2UnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkNoaW5lc2VcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DaGluZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poJywgJ3poLWNuJywgJ2NoaW5lc2UnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBUcmFkaXRpb25hbCBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHJhZGl0aW9uYWwgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlRyYWRpdGlvbmFsQ2hpbmVzZVxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlRyYWRpdGlvbmFsQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UcmFkaXRpb25hbENoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzXG4gKi9cbmltcG9ydCAqIGFzIEFyYWJpYyBmcm9tICcuL2FyLWFyJztcbmltcG9ydCAqIGFzIENhdGFsYW4gZnJvbSAnLi9jYS1lcyc7XG5pbXBvcnQgKiBhcyBDemVjaCBmcm9tICcuL2NzLWN6JztcbmltcG9ydCAqIGFzIERhbmlzaCBmcm9tICcuL2RhLWRrJztcbmltcG9ydCAqIGFzIEdlcm1hbiBmcm9tICcuL2RlLWRlJztcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSAnLi9lbi11cyc7XG5pbXBvcnQgKiBhcyBTcGFuaXNoIGZyb20gJy4vZXMtZXMnO1xuaW1wb3J0ICogYXMgUGVyc2lhbiBmcm9tICcuL2ZhLWlyJztcbmltcG9ydCAqIGFzIEZpbm5pc2ggZnJvbSAnLi9maS1maSc7XG5pbXBvcnQgKiBhcyBGcmVuY2ggZnJvbSAnLi9mci1jYSc7XG5pbXBvcnQgKiBhcyBIZWJyZXcgZnJvbSAnLi9oZS1pbCc7XG5pbXBvcnQgKiBhcyBIdW5nYXJpYW4gZnJvbSAnLi9odS1odSc7XG5pbXBvcnQgKiBhcyBJdGFsaWFuIGZyb20gJy4vaXQtaXQnO1xuaW1wb3J0ICogYXMgSmFwYW5lc2UgZnJvbSAnLi9qYS1qcCc7XG5pbXBvcnQgKiBhcyBLb3JlYW4gZnJvbSAnLi9rby1rcic7XG5pbXBvcnQgKiBhcyBMYXR2aWFuIGZyb20gJy4vbHYtbHYnO1xuaW1wb3J0ICogYXMgRHV0Y2ggZnJvbSAnLi9ubC1iZSc7XG5pbXBvcnQgKiBhcyBOb3J3ZWdpYW4gZnJvbSAnLi9uby1uYic7XG5pbXBvcnQgKiBhcyBQb2xpc2ggZnJvbSAnLi9wbC1wbCc7XG5pbXBvcnQgKiBhcyBQb3J0dWd1ZXNlIGZyb20gJy4vcHQtYnInO1xuaW1wb3J0ICogYXMgUm9tYW5pYW4gZnJvbSAnLi9yby1ybyc7XG5pbXBvcnQgKiBhcyBSdXNzaWFuIGZyb20gJy4vcnUtcnUnO1xuaW1wb3J0ICogYXMgU2xvdmFrIGZyb20gJy4vc2stc2snO1xuaW1wb3J0ICogYXMgU3dlZGlzaCBmcm9tICcuL3N2LXNlJztcbmltcG9ydCAqIGFzIFRoYWkgZnJvbSAnLi90aC10aCc7XG5pbXBvcnQgKiBhcyBUdXJraXNoIGZyb20gJy4vdHItdHInO1xuaW1wb3J0ICogYXMgVWtyYWluaWFuIGZyb20gJy4vdWEtdWEnO1xuaW1wb3J0ICogYXMgVmlldG5hbWVzZSBmcm9tICcuL3ZuLXZuJztcbmltcG9ydCAqIGFzIENoaW5lc2UgZnJvbSAnLi96aC1jbic7XG5pbXBvcnQgKiBhcyBUcmFkaXRpb25hbENoaW5lc2UgZnJvbSAnLi96aC10dyc7XG5cbmV4cG9ydCB7XG4gICAgQXJhYmljLFxuICAgIENhdGFsYW4sXG4gICAgQ3plY2gsXG4gICAgRGFuaXNoLFxuICAgIEdlcm1hbixcbiAgICBFbmdsaXNoLFxuICAgIFNwYW5pc2gsXG4gICAgUGVyc2lhbixcbiAgICBGaW5uaXNoLFxuICAgIEZyZW5jaCxcbiAgICBIZWJyZXcsXG4gICAgSHVuZ2FyaWFuLFxuICAgIEl0YWxpYW4sXG4gICAgSmFwYW5lc2UsXG4gICAgS29yZWFuLFxuICAgIExhdHZpYW4sXG4gICAgRHV0Y2gsXG4gICAgTm9yd2VnaWFuLFxuICAgIFBvbGlzaCxcbiAgICBQb3J0dWd1ZXNlLFxuICAgIFJvbWFuaWFuLFxuICAgIFJ1c3NpYW4sXG4gICAgU2xvdmFrLFxuICAgIFN3ZWRpc2gsXG4gICAgVGhhaSxcbiAgICBUdXJraXNoLFxuICAgIFVrcmFpbmlhbixcbiAgICBWaWV0bmFtZXNlLFxuICAgIENoaW5lc2UsXG4gICAgVHJhZGl0aW9uYWxDaGluZXNlXG59XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5MYW5ndWFnZVxuICovXG5pbXBvcnQgKiBhcyBMQU5HVUFHRVMgZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhbmd1YWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5LiBSZXR1cm5zIGBudWxsYCBpZiBubyBsYW5ndWFnZSBpc1xuICogZm91bmQuXG4gKiBcbiAqIEBmdW5jdGlvbiBsYW5ndWFnZVxuICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb3IgaWQgb2YgdGhlIGxhbmd1YWdlLlxuICogQHJldHVybiB7b2JqZWN0fG51bGx9IC0gVGhlIGxhbmd1YWdlIGRpY3Rpb25hcnksIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuTGFuZ3VhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFuZ3VhZ2UobmFtZSkge1xuICAgIHJldHVybiBuYW1lID8gTEFOR1VBR0VTW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgT2JqZWN0LnZhbHVlcyhMQU5HVUFHRVMpLmZpbmQodmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUuYWxpYXNlcy5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9KSA6IG51bGw7XG59XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5UcmFuc2xhdGVcbiAqL1xuaW1wb3J0IGxhbmd1YWdlIGZyb20gJy4vTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogVHJhbnNsYXRlIGFuIEVuZ2xpc2ggc3RyaW5nIGludG8gYW5vdGhlciBsYW5ndWFnZS5cbiAqIFxuICogQGZ1bmN0aW9uIHRyYW5zbGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmcgdG8gdHJhbnNsYXRlLlxuICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGZyb20gLSBUaGUgbGFuZ3VhZ2UgdXNlZCB0byB0cmFuc2xhdGUuIElmIGEgc3RyaW5nLFxuICogICAgIHRoZSBsYW5ndWFnZSBpcyBsb2FkZWQgaW50byBhbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gSWYgbm8gZGljdGlvbiBrZXkgaXMgZm91bmQsIHRoZSB1bnRyYW5zbGF0ZWQgc3RyaW5nIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5UcmFuc2xhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRlKHN0cmluZywgZnJvbSkge1xuICAgIGNvbnN0IGxhbmcgPSBpc1N0cmluZyhmcm9tKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbTtcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0gbGFuZy5kaWN0aW9uYXJ5IHx8IGxhbmc7XG4gICAgcmV0dXJuIGRpY3Rpb25hcnlbc3RyaW5nXSB8fCBzdHJpbmc7XG59O1xuIiwiLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRvIG1hbmFnZSBET00gbm9kZXMgYW5kIHRoZW1lIHRlbXBsYXRlcy5cbiAqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuVGVtcGxhdGVcbiAqL1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogU3dhcCBhIG5ldyBET00gbm9kZSB3aXRoIGFuIGV4aXN0aW5nIG9uZS5cbiAqXG4gKiBAZnVuY3Rpb24gc3dhcFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHN1YmplY3QgLSBUaGUgbmV3IERPTSBub2RlLlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGV4aXN0aW5nIC0gVGhlIGV4aXN0aW5nIERPTSBub2RlLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gUmV0dXJucyB0aGUgbmV3IGVsZW1lbnQgaWYgaXQgd2FzIG1vdW50ZWQsIG90aGVyd2lzZVxuICogICAgdGhlIGV4aXN0aW5nIG5vZGUgaXMgcmV0dXJuZWQuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5UZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhcChzdWJqZWN0LCBleGlzdGluZykge1xuXHRpZihleGlzdGluZy5wYXJlbnROb2RlKSB7XG5cdFx0ZXhpc3RpbmcucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3ViamVjdCwgZXhpc3RpbmcpO1xuXG5cdFx0cmV0dXJuIHN1YmplY3Q7XG5cdH1cblxuXHRyZXR1cm4gZXhpc3Rpbmc7XG59XG5cbi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAZnVuY3Rpb24gc2V0QXR0cmlidXRlc1xuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIERPTSBub2RlIHRoYXQgd2lsbCByZWNlaXZlIHRoZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZSBvYmplY3QsIG9yIGlmIG5vIG9iamVjdFxuICogICAgIGlzIHBhc3NlZCwgdGhlbiB0aGUgYWN0aW9uIGlzIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCByZWNlaXZlZCB0aGUgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBBcHBlbmQgYW4gYXJyYXkgb2YgRE9NIG5vZGVzIHRvIGEgcGFyZW50LlxuICpcbiAqIEBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlblxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIHBhcmVudCBET00gbm9kZS5cbiAqIEBwYXJhbSAge0FycmF5fHVuZGVmaW5lZH0gW2NoaWxkcmVuXSAtIFRoZSBhcnJheSBvZiBjaGlsZHJlbi4gSWYgbm8gYXJyYXlcbiAqICAgICBpcyBwYXNzZWQsIHRoZW4gdGhlIG1ldGhvZCBzaWxlbnRseSBmYWlscyB0byBydW4uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCByZWNlaXZlZCB0aGUgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pIHtcblx0aWYoaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5maWx0ZXIobm9vcCkuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRpZihjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgSFRNTEVsZW1lbnQgaW5zdGFuY2UuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBwYXJlbnQgRE9NIG5vZGUuXG4gKiBAcGFyYW0gIHtBcnJheXx1bmRlZmluZWR9IFtjaGlsZHJlbl0gLSBUaGUgYXJyYXkgb2YgY2hpbGRyZW4uIElmIG5vIGFycmF5XG4gKiAgICAgaXMgcGFzc2VkLCB0aGVuIHRoZSBtZXRob2Qgc2lsZW50bHkgZmFpbHMgdG8gcnVuLlxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIERPTSBub2RlIHRoYXQgcmVjZWl2ZWQgdGhlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5UZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbCwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMpIHtcblx0aWYoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG5cdH1cblxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBpc09iamVjdChjaGlsZHJlbikgPyBjaGlsZHJlbiA6IGF0dHJpYnV0ZXMpO1xuXG5cdGlmKCFpc09iamVjdChjaGlsZHJlbikgJiYgIWlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0ZWwuaW5uZXJIVE1MID0gY2hpbGRyZW47XG5cdH1cblx0ZWxzZSB7XG5cdFx0YXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi4vSGVscGVycy9MYW5ndWFnZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL0hlbHBlcnMvVHJhbnNsYXRlJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGVycm9yLCBrZWJhYkNhc2UgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBzd2FwLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBvdGhlciBET00gY29tcG9uZW50cyBjYW4gZXh0ZW5kLlxuICAgICAqXG4gICAgICogQGNsYXNzIERvbUNvbXBvbmVudFxuICAgICAqIEBleHRlbmRzIENvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcGFyZW50OiBudWxsXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy50aGVtZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgdGhlbWUgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBlcnJvcihgJHt0aGlzLm5hbWV9IGRvZXMgbm90IGhhdmUgYSBsYW5ndWFnZSBkZWZpbmVkLmApO1xuICAgICAgICB9XG5cblx0XHRpZighdGhpcy50aGVtZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5uYW1lfSBjYW5ub3QgYmUgcmVuZGVyZWQgYmVjYXVzZSBpdCBoYXMgbm8gdGVtcGxhdGUuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgY2xhc3NOYW1lYCBhdHRyaWJ1dGUuIFVzZWQgZm9yIENTUy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGtlYmFiQ2FzZSh0aGlzLmNvbnN0cnVjdG9yLmRlZmluZU5hbWUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGBlbGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsO1xuICAgIH1cblxuICAgIHNldCBlbCh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIG51bGwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHBhcmVudGAgYXR0cmlidXRlLiBQYXJlbnQgaXMgc2V0IHdoZW4gYERvbUNvbXBvbmVudGAgaW5zdGFuY2VzIGFyZVxuICAgICAqIG1vdW50ZWQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RG9tQ29tcG9uZW50fVxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQ7XG4gICAgfVxuXG4gICAgc2V0IHBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGhlbWVgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGhlbWU7XG4gICAgfVxuXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IGxhbmd1YWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBsYW5ndWFnZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIHRyYW5zbGF0ZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIHRyYW5zbGF0ZWQgc3RyaW5nLiBJZiBubyB0cmFubGF0aW9uIGZvdW5kLCB0aGVcbiAgICAgKiAgICAgdW50cmFuc2xhdGVkIHN0cmluZyBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICB0cmFuc2xhdGUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUoc3RyaW5nLCB0aGlzLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyB0byB0cmFuc2xhdGUoc3RyaW5nKTtcbiAgICAgKlxuICAgICAqIEBhbGlhcyBEb21Db21wb25lbnQudHJhbnNsYXRlXG4gICAgICovXG4gICAgdChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHN0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBET00gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGBlbGAgYXR0cmlidXRlLlxuICAgICAqL1xuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lID09PSAnZmxpcC1jbG9jaycgPyB0aGlzLmNsYXNzTmFtZSA6ICdmbGlwLWNsb2NrLScgKyB0aGlzLmNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRoZW1lW3RoaXMubmFtZV0oZWwsIHRoaXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmVsLmlubmVySFRNTCAhPT0gZWwuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gc3dhcChlbCwgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogTW91bnQgYSBET00gY29tcG9uZW50IHRvIGEgcGFyZW50IG5vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBET00gbm9kZS5cbiAgICAgKiBAcGFyYW0gIHsoZmFsc2V8SFRNTEVsZW1lbnQpfSBbYmVmb3JlPWZhbHNlXSAtIElmIGBmYWxzZWAsIGVsZW1lbnQgaXNcbiAgICAgKiAgICAgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBub2RlLiBJZiBhbiBpbnN0YW5jZSBvZiBhbiBgSFRNTEVsZW1lbnRgLFxuICAgICAqICAgICB0aGUgY29tcG9uZW50IHdpbGwgYmUgaW5zZXJ0ZWQgYmVmb3JlIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgYGVsYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgbW91bnQocGFyZW50LCBiZWZvcmUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBpZighYmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCBiZWZvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgYERpdmlkZXJgIGluc3RhbmNlLlxuICpcbiAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgY2xhc3MgaXMgdG8gcmV0dXJuIGEgdW5pcXVlIGNsYXNzIG5hbWUgc28gdGhlIHRoZW1lIGNhblxuICogcmVuZGVyIGl0IGFwcHJvcHJpYXRlbHksIHNpbmNlIGVhY2ggYERvbUNvbXBvbmVudGAgY2FuIHJlY2VpdmUgaXRzIG93biB0ZW1wbGF0ZVxuICogZnJvbSB0aGUgdGhlbWUuXG4gKlxuICogQGNsYXNzIERpdmlkZXJcbiAqIEBleHRlbmRzIERvbUNvbXBvbmVudFxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpZGVyIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgbmFtZSBvZiB0aGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmluZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnRGl2aWRlcic7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gcmVwcmVzZW50IGEgc2luZ2xlIGRpZ2l0cyBpbiBhIGBMaXN0YC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBMaXN0SXRlbVxuICAgICAqIEBleHRlbmRzIERvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7KE51bWJlcnxTdHJpbmcpfSB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgYExpc3RJdGVtYC5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgbmFtZSBvZiB0aGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmluZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTGlzdEl0ZW0nO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiwgIH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBpc09iamVjdCwgIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBhZGQgYSBkaWdpdCB0byB0aGUgY2xvY2sgZmFjZS4gVGhpcyBjbGFzcyBpcyBjYWxsZWRcbiAgICAgKiBgTGlzdGAgYmVjYXVzZSBpdCBjb250YWlucyBhIGxpc3Qgb2YgYExpc3RJdGVtYCdzIHdoaWNoIGFyZSB1c2VkIHRvXG4gICAgICogY3JlYXRlIGZsaXAgZWZmZWN0cy4gSW4gdGhlIGNvbnRleHQgb2YgRmxpcENsb2NrLmpzIGEgYExpc3RgIHJlcHJlc2VudHNcbiAgICAgKiBvbmUgc2luZ2xlIGRpZ2l0LlxuICAgICAqXG4gICAgICogQGNsYXNzIExpc3RcbiAgICAgKiBAZXh0ZW5kcyBEb21Db21wb25lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBsYWJlbCAtIFRoZSBhY3RpdmUgdmFsdWUuIElmIGFuIG9iamVjdCwgaXRcbiAgICAgKiBpcyBhc3N1bWVkIHRoYXQgaXQgaXMgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICogQHBhcmFtIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHsoTnVtYmVyfFN0cmluZyl9XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYGl0ZW1zYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7KE51bWJlcnxTdHJpbmcpfVxuICAgICAqL1xuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGl0ZW1zO1xuICAgIH1cblxuICAgIHNldCBpdGVtcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRpdGVtcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYExpc3RJdGVtYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyhOdW1iZXJ8U3RyaW5nKX0gdmFsdWUgLSBUaGUgYExpc3RJdGVtYCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gIHsoT2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEByZXR1cm4ge0xpc3RJdGVtfSAtIFRoZSBpbnN0YW50aWF0ZWQgYExpc3RJdGVtYC5cbiAgICAgKi9cbiAgICBjcmVhdGVMaXN0SXRlbSh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIHRoaXMuJGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmaW5lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdMaXN0JztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBncm91cCB2YWx1ZXMgd2l0aGluIGEgY2xvY2sgZmFjZS4gSG93IHRoZSBncm91cHNcbiAgICAgKiBhcmUgZGlzcGxheWVkIGlzIGRldGVybWluZWQgYnkgdGhlIHRoZW1lLlxuICAgICAqXG4gICAgICogQGNsYXNzIEdyb3VwXG4gICAgICogQGV4dGVuZHMgRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1zIC0gQW4gYXJyYXkgYExpc3RgIGluc3RhbmNlcyBvciBhbiBvYmplY3Qgb2ZcbiAgICAgKiAgICAgYXR0cmlidXRlcy4gSWYgbm90IGFuIGFycmF5LCBhc3N1bWVkIHRvIGJlIHRoZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpdGVtczogaXNBcnJheShpdGVtcykgPyBpdGVtcyA6IFtdXG4gICAgICAgIH0sIChpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwpLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmaW5lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdHcm91cCc7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gYWRkIGEgbGFiZWwgdG8gdGhlIGNsb2NrIGZhY2UuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgTGFiZWxcbiAgICAgKiBAZXh0ZW5kcyBEb21Db21wb25lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBsYWJlbCAtIFRoZSBsYWJlbCBhdHRyaWJ1dGUuIElmIGFuIG9iamVjdCxcbiAgICAgKiAgICAgaXQgaXMgYXNzdW1lZCB0aGF0IGl0IGlzIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobGFiZWwsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSwgKGlzT2JqZWN0KGxhYmVsKSA/IGxhYmVsIDogbnVsbCksIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZpbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0xhYmVsJztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzTnVtYmVyLCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgVGltZXJcbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhPYmplY3R8TnVtYmVyKX0gaW50ZXJ2YWwgLSBUaGUgaW50ZXJ2YWwgcGFzc2VkIGFzIGEgYE51bWJlcmAsXG4gICAgICogICAgIG9yIGNhbiBzZXQgdGhlIGF0dHJpYnV0ZSBvZiB0aGUgY2xhc3Mgd2l0aCBhbiBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWwpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGhhbmRsZTogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IG51bGwsXG4gICAgICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsOiBpc051bWJlcihpbnRlcnZhbCkgPyBpbnRlcnZhbCA6IG51bGwsXG4gICAgICAgIH0sIGlzT2JqZWN0KGludGVydmFsKSA/IGludGVydmFsIDogbnVsbCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgZWxhcHNlZGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgZWxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhc3RMb29wID8gMCA6IHRoaXMubGFzdExvb3AgLSAoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPyB0aGlzLnN0YXJ0ZWQuZ2V0VGltZSgpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGlzUnVubmluZ2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGlzU3RvcHBlZGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGlzU3RvcHBlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyA9PT0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB0aW1lci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyhGdW5jdGlvbnx1bmRlZmluZWQpfSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtUaW1lcn0gLSBUaGUgYFRpbWVyYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLnN0b3AoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCgpID0+IGNhbGxiYWNrLmNhbGwodGhpcywgZm4pKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSB0aW1lci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtUaW1lcn0gLSBUaGUgYFRpbWVyYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzdGFydChmbikge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZTtcbiAgICAgICAgdGhpcy5sYXN0TG9vcCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcblxuICAgICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoRGF0ZS5ub3coKSAtIHRoaXMubGFzdExvb3AgPj0gdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdExvb3AgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGxvb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgdGltZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgc3RvcCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtUaW1lcn0gLSBUaGUgYFRpbWVyYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzdG9wKGZuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RvcCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZpbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ1RpbWVyJztcbiAgICB9XG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIGRlc2lnbmVkIHRvIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IG51bWJlcmljIHZhbHVlcyxcbiAqICAgICBub3QgYERhdGVgIG9iamVjdHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMSkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMSkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgLSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZpbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0NvdW50ZXInO1xuICAgIH1cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgeyBub29wLCByb3VuZCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNOdW1iZXIsIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIG1pbnV0ZXMsIGFuZFxuICogICAgIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW51dGVDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkU3RvcChpbnN0YW5jZSkge1xuICAgICAgICBpZihpc051bGwoaW5zdGFuY2Uuc3RvcEF0KSB8fCBpc1VuZGVmaW5lZChpbnN0YW5jZS5zdG9wQXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0b3BBdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZG93biA/XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQuZ2V0VGltZSgpID49IHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0LmdldFRpbWUoKSA8PSB0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzTnVtYmVyKHRoaXMuc3RvcEF0KSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IoKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpIC0gdGhpcy5vcmlnaW5hbFZhbHVlLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRkb3duID9cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdCA+PSBkaWZmOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0IDw9IGRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBzdG9wQXQgcHJvcGVydHkgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBEYXRlIG9yIE51bWJlci5gKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMCkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpICsgdmFsdWUgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgdmFsdWUgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgLSB2YWx1ZSAtIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydGVkID0gaW5zdGFuY2UudGltZXIuaXNSdW5uaW5nID8gaW5zdGFuY2UudGltZXIuc3RhcnRlZCA6IG5ldyBEYXRlKERhdGUubm93KCkgLSA1MCk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXModmFsdWUsIHN0YXJ0ZWQpXSxcbiAgICAgICAgICAgIHRoaXMuc2hvd1NlY29uZHMgPyBbdGhpcy5nZXRTZWNvbmRzKHZhbHVlLCBzdGFydGVkKV0gOiBudWxsXG4gICAgICAgIF0uZmlsdGVyKG5vb3ApO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gcm91bmQodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCk7XG4gICAgfVxuXG4gICAgZ2V0U2Vjb25kcyhhLCBiKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhNYXRoLmNlaWwodG90YWxTZWNvbmRzID09PSA2MCA/IDAgOiB0b3RhbFNlY29uZHMgJSA2MCkpO1xuICAgIH1cblxuICAgIGdldFRvdGFsU2Vjb25kcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCkgPyAwIDogTWF0aC5yb3VuZCgoYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZpbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ01pbnV0ZUNvdW50ZXInO1xuICAgIH1cbn1cbiIsImltcG9ydCBNaW51dGVDb3VudGVyIGZyb20gJy4vTWludXRlQ291bnRlcic7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBUaGlzIGZhY2UgaXMgbWVhbnQgdG8gZGlzcGxheSBhIGNsb2NrIHRoYXQgc2hvd3NcbiAqICAgICBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyQ291bnRlciBleHRlbmRzIE1pbnV0ZUNvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2UudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0TWludXRlcyhhLCBiKSAlIDYwKTtcbiAgICB9XG5cbiAgICBnZXRIb3VycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmaW5lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdIb3VyQ291bnRlcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIGRheXMsIGhvdXJzLFxuICogICAgIG1pbnV0ZXMsIGFuZCBzZWNvbmRzLlxuICogQGV4dGVuZHMgSG91ckNvdW50ZXJcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheUNvdW50ZXIgZXh0ZW5kcyBIb3VyQ291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQpO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldEhvdXJzKGEsIGIpICUgMjQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgbmFtZSBvZiB0aGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmluZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnRGF5Q291bnRlcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIHNob3dzIHRoZSBjdXJyZW50IHRpbWUgaW4gdHdlbnR5LWZvdXIgaG91ciBmb3JtYXQuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW1xuICAgICAgICAgICAgW3ZhbHVlLmdldEhvdXJzKCldLFxuICAgICAgICAgICAgW3ZhbHVlLmdldE1pbnV0ZXMoKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaChbdmFsdWUuZ2V0U2Vjb25kcygpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSwgb2Zmc2V0ID0gMCkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpICsgb2Zmc2V0ICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5zdGFuY2UudGltZXIubGFzdExvb3ApKTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIG9mZnNldCA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSAtIG9mZnNldCAtIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmaW5lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdUd2VudHlGb3VySG91ckNsb2NrJztcbiAgICB9XG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIHNob3dzIHRoZSBjdXJyZW50IHRpbWUgaW4gdHdlbHZlIGhvdXIgZm9ybWF0LCB3aXRoIEFNXG4gKiAgICAgYW5kIFBNLlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbHZlSG91ckNsb2NrIGV4dGVuZHMgVHdlbnR5Rm91ckhvdXJDbG9jayB7XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TWVyaWRpdW06IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gdmFsdWUuZ2V0SG91cnMoKTtcblx0XHRjb25zdCBncm91cHMgPSBbXG5cdFx0XHRob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IChob3VycyA9PT0gMCA/IDEyIDogaG91cnMpLFxuXHRcdFx0dmFsdWUuZ2V0TWludXRlcygpXG5cdFx0XTtcblxuICAgICAgICB0aGlzLm1lcmlkaXVtID0gaG91cnMgPiAxMiA/ICdwbScgOiAnYW0nO1xuXG5cdFx0aWYodGhpcy5zaG93U2Vjb25kcykge1xuXHRcdFx0Z3JvdXBzLnB1c2godmFsdWUuZ2V0U2Vjb25kcygpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgbmFtZSBvZiB0aGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGRlZmluZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnVHdlbHZlSG91ckNsb2NrJztcbiAgICB9XG59XG4iLCJpbXBvcnQgRGF5Q291bnRlciBmcm9tICcuL0RheUNvdW50ZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIHdlZWtzLCBkYXlzLFxuICogICAgIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kcy5cbiAqIEBleHRlbmRzIEZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtDb3VudGVyIGV4dGVuZHMgRGF5Q291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0IC8gNyk7XG4gICAgfVxuXG4gICAgZ2V0RGF5cyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXREYXlzKGEsIGIpICUgNyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmaW5lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdXZWVrQ291bnRlcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IFdlZWtDb3VudGVyIGZyb20gJy4vV2Vla0NvdW50ZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIHllYXJzLCB3ZWVrcyxcbiAqICAgICBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyQ291bnRlciBleHRlbmRzIFdlZWtDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRZZWFycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFllYXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3IC8gNTIpKTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRXZWVrcyhhLCBiKSAlIDUyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZpbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ1llYXJDb3VudGVyJztcbiAgICB9XG59XG4iLCIvKipcbiAqIEZhY2VzIGFyZSBjbGFzc2VzIHRoYXQgaG9vayBpbnRvIHRoZSBjb3JlIG9mIEZsaXBjbG9jayB0byBwcm92aWRlIHVuaXF1ZVxuICogZnVuY3Rpb25hbGl0eS4gVGhlIGNvcmUgZG9lc24ndCBkbyBhIGxvdCwgZXhjZXB0IGZhY2lsaXRhdGUgdGhlIGludGVyYWN0aW9uXG4gKiBiZXR3ZWVuIGFsbCB0aGUgY29tcG9uZW50cy4gVGhlIEZhY2UgaXMgd2hhdCBtYWtlcyB0aGUgY2xvY2sgXCJ0aWNrXCIuXG4gKlxuICogQG5hbWVzcGFjZSBGYWNlc1xuICovXG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XG5pbXBvcnQgRGF5Q291bnRlciBmcm9tICcuL0RheUNvdW50ZXInO1xuaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuaW1wb3J0IE1pbnV0ZUNvdW50ZXIgZnJvbSAnLi9NaW51dGVDb3VudGVyJztcbmltcG9ydCBUd2VsdmVIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VsdmVIb3VyQ2xvY2snO1xuaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcbmltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcbmltcG9ydCBZZWFyQ291bnRlciBmcm9tICcuL1llYXJDb3VudGVyJztcblxuZXhwb3J0IHtcbiAgICBDb3VudGVyLFxuICAgIERheUNvdW50ZXIsXG4gICAgTWludXRlQ291bnRlcixcbiAgICBIb3VyQ291bnRlcixcbiAgICBUd2VsdmVIb3VyQ2xvY2ssXG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayxcbiAgICBXZWVrQ291bnRlcixcbiAgICBZZWFyQ291bnRlclxufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZsaXAtY2xvY2stZG90IHRvcCd9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgYm90dG9tJ30pXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5mdW5jdGlvbiBjaGlsZChlbCwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWwgPyAoZWwuY2hpbGROb2RlcyA/IGVsLmNoaWxkTm9kZXNbaW5kZXhdIDogZWxbaW5kZXhdKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoYXIoZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5xdWVyeVNlbGVjdG9yKCcuZmxpcC1jbG9jay1saXN0LWl0ZW06Zmlyc3QtY2hpbGQgLnRvcCcpLmlubmVySFRNTCA6IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IHBhcnRzID0gaW5zdGFuY2UudmFsdWUuZGlnaXRzLm1hcCgoZ3JvdXAsIHgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbCA9IGNoaWxkKGluc3RhbmNlLmVsID8gaW5zdGFuY2UuZWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stZ3JvdXAnKSA6IG51bGwsIHgpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RzID0gZ3JvdXAubWFwKCh2YWx1ZSwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gY2hpbGQoZ3JvdXBFbCA/IGdyb3VwRWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stbGlzdCcpIDogbnVsbCwgeSk7XG4gICAgICAgICAgICBjb25zdCBsaXN0VmFsdWUgPSBjaGFyKGxpc3RFbCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVMaXN0KHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgZG9tVmFsdWU6IGxpc3RWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb3VudGRvd246IGluc3RhbmNlLmNvdW50ZG93bixcbiAgICAgICAgICAgICAgICBhbmltYXRpb25SYXRlOiBpbnN0YW5jZS5mYWNlLmFuaW1hdGlvblJhdGUgfHwgaW5zdGFuY2UuZmFjZS5kZWxheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVHcm91cChsaXN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlcyA9IHBhcnRzLm1hcChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBub2Rlcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBpdGVtcyA9IGluc3RhbmNlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaXRlbXMpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBpbnN0YW5jZS50KGluc3RhbmNlLmxhYmVsKTtcbn1cbiIsImltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RJdGVtJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGJlZm9yZVZhbHVlID0gaW5zdGFuY2UuZG9tVmFsdWUgfHwgKFxuICAgICAgICAhaW5zdGFuY2UuY291bnRkb3duID8gcHJldihpbnN0YW5jZS52YWx1ZSkgOiBuZXh0KGluc3RhbmNlLnZhbHVlKVxuICAgICk7XG5cbiAgICBpZiggaW5zdGFuY2UuZG9tVmFsdWUgJiYgaW5zdGFuY2UuZG9tVmFsdWUgIT09IGluc3RhbmNlLnZhbHVlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcbiAgICBlbC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcblxuICAgIGluc3RhbmNlLml0ZW1zID0gW1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShpbnN0YW5jZS52YWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShiZWZvcmVWYWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KVxuICAgIF07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5yZW5kZXIoKSkpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gaW5zdGFuY2UuYWN0aXZlID09PSB0cnVlID8gJ2FjdGl2ZScgOiAoXG4gICAgICAgIGluc3RhbmNlLmFjdGl2ZSA9PT0gZmFsc2UgPyAnYmVmb3JlJyA6IG51bGxcbiAgICApO1xuXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ3RvcCd9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGluc3RhbmNlLnZhbHVlLCB7Y2xhc3M6ICdib3R0b20nfSlcbiAgICAgICAgXSwge2NsYXNzOiAnZmxpcC1jbG9jay1saXN0LWl0ZW0taW5uZXInfSlcbiAgICBdKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2RheXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIH1cbiAgICBcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayhlbCwgaW5zdGFuY2UpO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TWVyaWRpdW0gJiYgaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGluc3RhbmNlLmNyZWF0ZUxhYmVsKGluc3RhbmNlLmZhY2UubWVyaWRpdW0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5jaGlsZE5vZGVzW2VsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGFiZWwubW91bnQocGFyZW50KS5jbGFzc0xpc3QuYWRkKCdmbGlwLWNsb2NrLW1lcmlkaXVtJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s3XSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzldKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3llYXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzhdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMTBdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgRmxpcENsb2NrIGZyb20gJy4vRmxpcENsb2NrJztcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgKiBhcyBmYWNlcyBmcm9tICcuL0ZhY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgRmxpcENsb2NrLFxuICAgIEdyb3VwLFxuICAgIExhYmVsLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgZmFjZXNcbn07XG4iLCJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IHsgT3JpZ2luYWwgfSBmcm9tICcuLi9UaGVtZXMnO1xuaW1wb3J0IHsgRW5nbGlzaCB9IGZyb20gJy4uL0xhbmd1YWdlcyc7XG5cbi8qKlxuICogQGFsaWFzIERlZmF1bHRWYWx1ZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOkNvbmZpZy9EZWZhdWx0VmFsdWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiBDb3VudGVyLFxuICAgIHRoZW1lOiBPcmlnaW5hbCxcbiAgICBsYW5ndWFnZTogRW5nbGlzaFxufTtcbiIsImltcG9ydCBGYWNlIGZyb20gJy4vRmFjZSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCAqIGFzIEZhY2VzIGZyb20gJy4uL0ZhY2VzJztcbmltcG9ydCBGYWNlVmFsdWUgZnJvbSAnLi9GYWNlVmFsdWUnO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgRGVmYXVsdFZhbHVlcyBmcm9tICcuLi9Db25maWcvRGVmYXVsdFZhbHVlcyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgZmxhdHRlbiwgaXNOdWxsLCBpc1N0cmluZywgaXNPYmplY3QsIGlzVW5kZWZpbmVkLCBpc0Z1bmN0aW9uLCBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENsb2NrIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcbiAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBGbGlwQ2xvY2tcbiAgICAgKiBAZXh0ZW5kcyBEb21Db21wb25lbnRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCB0byBiaW5kIGNsb2NrIERPTSBub2RlLlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNsb2NrIGZhY2UuXG4gICAgICogQHBhcmFtIHtvYmplY3R8dW5kZWZpbmVkfSBhdHRyaWJ1dGVzIC0ge0BsaW5rIEZsaXBDbG9jay5PcHRpb25zfSBwYXNzZWQgYW4gb2JqZWN0IHdpdGgga2V5L3ZhbHVlLlxuICAgICAqL1xuICAgICAgICBcbiAgICAvKipcbiAgICAgKiBAbmFtZXNwYWNlIEZsaXBDbG9jay5PcHRpb25zXG4gICAgICogQGNsYXNzZGVzYyBBbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgYXR0cmlidXRlcy5cbiAgICAgKiBcbiAgICAgKiAjIyMjIyBFeGFtcGxlOlxuICAgICAqIFxuICAgICAqICAgICB7XG4gICAgICogICAgICAgIGZhY2U6ICdEYXlDb3VudGVyJyxcbiAgICAgKiAgICAgICAgbGFuZ3VhZ2U6ICdlcycsXG4gICAgICogICAgICAgIHRpbWVyOiBUaW1lci5tYWtlKDUwMClcbiAgICAgKiAgICAgfVxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfEZhY2V9IFtmYWNlPXtAbGluayBGYWNlcy5EYXlDb3VudGVyfV0gLSBUaGUgY2xvY2sncyB7QGxpbmsgRmFjZX0gaW5zdGFuY2UuXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtpbnRlcnZhbD0xMDAwXSAtIFRoZSBjbG9jaydzIGludGVydmFsIHJhdGUgKGluIG1pbGxpc2Vjb25kcykuXG4gICAgICogQHByb3BlcnR5IHtvYmplY3R9IFt0aGVtZT17QGxpbmsgVGhlbWVzLk9yaWdpbmFsfV0gLSBUaGUgY2xvY2sncyB0aGVtZS5cbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xvYmplY3R9IFtsYW5ndWFnZT17QGxpbmsgTGFuZ3VhZ2VzLkVuZ2xpc2h9XSAtIFRoZSBjbG9jaydzIGxhbmd1YWdlLlxuICAgICAqIEBwcm9wZXJ0eSB7VGltZXJ9IFt0aW1lcj17QGxpbmsgVGltZXJ9XSAtIFRoZSBjbG9jaydzIHRpbWVyLlxuICAgICAqL1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighdmFsaWRhdGUoZWwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNPYmplY3QodmFsdWUpICYmICFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZhY2UgPSBhdHRyaWJ1dGVzLmZhY2UgfHwgRGVmYXVsdFZhbHVlcy5mYWNlO1xuXG4gICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmZhY2U7XG5cbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBEZWZhdWx0VmFsdWVzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aW1lcjogVGltZXIubWFrZShhdHRyaWJ1dGVzLmludGVydmFsIHx8IDEwMDApLFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMuZmFjZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlID0gZmFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW91bnQoZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjbG9jayBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RmFjZX1cbiAgICAgKi9cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgc2V0IGZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ3N0cmluZycsICdmdW5jdGlvbiddKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZmFjZSA9IChGYWNlc1t2YWx1ZV0gfHwgdmFsdWUpLm1ha2UoT2JqZWN0LmFzc2lnbih0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSwge1xuICAgICAgICAgICAgb3JpZ2luYWxWYWx1ZTogdGhpcy5mYWNlID8gdGhpcy5mYWNlLm9yaWdpbmFsVmFsdWUgOiB1bmRlZmluZWRcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJGZhY2UuaW5pdGlhbGl6ZWQodGhpcyk7XG5cbiAgICAgICAgaWYodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS5jcmVhdGVGYWNlVmFsdWUodGhpcywgdGhpcy52YWx1ZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhpcy4kc3RvcEF0KSA/IHRoaXMuJHN0b3BBdCh0aGlzKSA6IHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICBzZXQgc3RvcEF0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3BBdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGltZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHR5cGUge1RpbWVyfVxuICAgICAqL1xuICAgIGdldCB0aW1lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRpbWVyO1xuICAgIH1cblxuICAgIHNldCB0aW1lcih0aW1lcikge1xuICAgICAgICBpZighdmFsaWRhdGUodGltZXIsIFRpbWVyKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRpbWVyID0gdGltZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBUaGUgY2xvY2sncyBgRmFjZVZhbHVlYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtGYWNlVmFsdWV8bnVsbH1cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UgPyB0aGlzLmZhY2UudmFsdWUgOiBudWxsO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZighdGhpcy5mYWNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZmFjZSBtdXN0IGJlIHNldCBiZWZvcmUgc2V0dGluZyBhIHZhbHVlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdGhpcy5mYWNlLnZhbHVlLmNsb25lKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS5jcmVhdGVGYWNlVmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIGlmKGlzRnVuY3Rpb24odGhpcy4kb3JpZ2luYWxWYWx1ZSkgJiYgIXRoaXMuJG9yaWdpbmFsVmFsdWUubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG9yaWdpbmFsVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFpc1VuZGVmaW5lZCh0aGlzLiRvcmlnaW5hbFZhbHVlKSAmJiAhaXNOdWxsKHRoaXMuJG9yaWdpbmFsVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UgPyB0aGlzLmZhY2UuZGVmYXVsdFZhbHVlKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc2V0IG9yaWdpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBjbG9jayB0byB0aGUgcGFyZW50IERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIHBhcmVudCBgSFRNTEVsZW1lbnRgLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgbW91bnQoZWwpIHtcbiAgICAgICAgc3VwZXIubW91bnQoZWwpO1xuXG4gICAgICAgIHRoaXMuZmFjZS5tb3VudGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2xvY2sncyBET00gbm9kZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgcGFyZW50IGBIVE1MRWxlbWVudGAuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBDYWxsIHRoZSBwYXJlbnQgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZmFjZSBoYXMgYSByZW5kZXIgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGEgZmFjZSB0byBjb21wbGV0ZWx5IHJlLXJlbmRlciBvciBhZGQgdG8gdGhlIHRoZW1lLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBmYWNlIHNwZWNpZmljIGludGVyZmFjZXMgZm9yIGEgdGhlbWUuXG4gICAgICAgIGlmKHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lLmZhY2VzW3RoaXMuZmFjZS5uYW1lXSh0aGlzLmVsLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhc3MgdGhlIGNsb2NrIGluc3RhbmNlIHRvIHRoZSByZW5kZXJlZCgpIGZ1bmN0aW9uIG9uIHRoZSBmYWNlLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBnbG9iYWwgbW9kaWZpY2F0aW9ucyB0byB0aGUgcmVuZGVyZWQgdGVtcGxhdGVzIG5vdFxuICAgICAgICAvLyB0aGVtZSBzcGVjaWZpYy5cbiAgICAgICAgdGhpcy5mYWNlLnJlbmRlcmVkKHRoaXMpO1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgcmVuZGVyZWQgYEhUTUxFbGVtZW50YC5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIGNsb2NrLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgaWYoIXRoaXMudGltZXIuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVW5kZWZpbmVkKHRoaXMuZmFjZS5zdG9wQXQpICYmICh0aGlzLmZhY2Uuc3RvcEF0ID0gdGhpcy5zdG9wQXQpO1xuICAgICAgICBpc1VuZGVmaW5lZCh0aGlzLmZhY2Uub3JpZ2luYWxWYWx1ZSkgJiYgKHRoaXMuZmFjZS5vcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlKTtcblxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS5pbnRlcnZhbCh0aGlzLCBmbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmFjZS5zdGFydGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgc3RvcCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKGZuKTtcbiAgICAgICAgdGhpcy5mYWNlLnN0b3BwZWQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RvcCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBjbG9jayB0byB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgaW50ZXJ2YWwgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgICAgICB0aGlzLnRpbWVyLnJlc2V0KCgpID0+IHRoaXMuaW50ZXJ2YWwodGhpcywgZm4pKTtcbiAgICAgICAgdGhpcy5mYWNlLnJlc2V0KHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3Jlc2V0Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbmNyZW1lbnQgdGhlIGNsb2NrJ3MgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfHVuZGVmaW5lZH0gdmFsdWUgLSBJbmNyZW1lbnQgdGhlIGNsb2NrIGJ5IHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gICAgICogICAgIElmIG5vIHZhbHVlIGlzIHBhc3NlZCwgdGhlbiB0aGUgZGVmYXVsdCBpbmNyZW1lbnQgaXMgZGV0ZXJtaW5lZCBieVxuICAgICAqICAgICB0aGUgRmFjZSwgd2hpY2ggaXMgdXN1YWxseSBgMWAuXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBpbmNyZW1lbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLmluY3JlbWVudCh0aGlzLCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBkZWNyZW1lbnQgdGhlIGNsb2NrJ3MgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfHVuZGVmaW5lZH0gdmFsdWUgLSBEZWNyZW1lbnQgdGhlIGNsb2NrIGJ5IHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gICAgICogICAgIElmIG5vIHZhbHVlIGlzIHBhc3NlZCwgdGhlbiB0aGUgZGVmYXVsdCBkZWNyZW1lbnQgaXMgZGV0ZXJtaW5lZCBieVxuICAgICAqICAgICB0aGUgYEZhY2VgLCB3aGljaCBpcyB1c3VhbGx5IGAxYC5cbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGRlY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UuZGVjcmVtZW50KHRoaXMsIHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBEaXZpZGVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBhdHRyaWJ1dGVzIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgYERpdmlkZXJgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0RpdmlkZXJ9IC0gVGhlIGluc3RhbnRpYXRlZCBEaXZpZGVyLlxuICAgICAqL1xuICAgIGNyZWF0ZURpdmlkZXIoYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gRGl2aWRlci5tYWtlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgTGlzdGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgTGlzdGAgdmFsdWUuXG4gICAgICogQHBhcmFtICB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgTGlzdGAgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7TGlzdH0gLSBUaGUgaW5zdGFudGlhdGVkIGBMaXN0YC5cbiAgICAgKi9cbiAgICBjcmVhdGVMaXN0KHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMaXN0Lm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgTGFiZWxgLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYExhYmVsYCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBMYWJlbGAgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7TGFiZWx9IC0gVGhlIGluc3RhbnRpYXRlZCBgTGFiZWxgLlxuICAgICAqL1xuICAgIGNyZWF0ZUxhYmVsKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMYWJlbC5tYWtlKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYEdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2FycmF5fSBpdGVtcyAtIEFuIGFycmF5IG9mIGBMaXN0YCBpdGVtcyB0byBncm91cC5cbiAgICAgKiBAcGFyYW0gIHtHcm91cHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBhdHRyaWJ1dGVzIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgYEdyb3VwYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtHcm91cH0gLSBUaGUgaW5zdGFudGlhdGVkIGBHcm91cGAuXG4gICAgICovXG4gICAgY3JlYXRlR3JvdXAoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIEdyb3VwLm1ha2UoaXRlbXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGBkZWZhdWx0c2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZpbmVOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0ZsaXBDbG9jayc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBzZXQgdGhlIGRlZmF1bHQgYEZhY2VgIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmFjZX0gdmFsdWUgLSBUaGUgZGVmYXVsdCBgRmFjZWAgY2xhc3MuVGhpcyBzaG91bGQgYmUgYVxuICAgICAqICAgICBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXREZWZhdWx0RmFjZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIEZhY2UpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmZhY2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgZGVmYXVsdCB0aGVtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBkZWZhdWx0IHRoZW1lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhdGljIHNldERlZmF1bHRUaGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRoZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMudGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgZGVmYXVsdCBsYW5ndWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBkZWZhdWx0IGxhbmd1YWdlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhdGljIHNldERlZmF1bHRMYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJlcnJvciIsInN0cmluZyIsIkVycm9yIiwiY2FsbGJhY2siLCJmbiIsImlzRnVuY3Rpb24iLCJhcmdzIiwiY2FsbCIsInJvdW5kIiwidmFsdWUiLCJpc05lZ2F0aXZlWmVybyIsImlzTmVnYXRpdmUiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwidG9TdHJpbmciLCJub29wIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJjaGFpbiIsImJlZm9yZSIsImFmdGVyIiwiY29uY2F0TWFwIiwieCIsIm1hcCIsInJlZHVjZSIsInkiLCJjb25jYXQiLCJmbGF0dGVuIiwiZGVlcEZsYXR0ZW4iLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJJbmZpbml0eSIsImlzQ29uc3RydWN0b3IiLCJGdW5jdGlvbiIsIm5hbWUiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwidHlwZSIsImlzTnVtYmVyIiwiaXNOYU4iLCJrZWJhYkNhc2UiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJDb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRzIiwia2V5IiwiZm9yRWFjaCIsImV2ZW50IiwiYXBwbHkiLCJwdXNoIiwiZmlsdGVyIiwib2ZmIiwib24iLCJoYXNPd25Qcm9wZXJ0eSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJrZXlzIiwiZ2V0QXR0cmlidXRlcyIsIm1hdGNoIiwib2JqIiwic2V0QXR0cmlidXRlcyIsInZhbHVlcyIsImkiLCJjb25zdHJ1Y3RvciIsImRlZmluZU5hbWUiLCIkZXZlbnRzIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInNwbGl0IiwiZGlnaXRzIiwiYXJyIiwibWluIiwidW5zaGlmdCIsIlJBTkdFUyIsIm1heCIsImZvcm1hdCIsInBhcnNlRmxvYXQiLCJmaW5kUmFuZ2UiLCJjaGFyIiwiY29kZSIsImNoYXJDb2RlQXQiLCJzdHJpbmdGcm9tQ2hhckNvZGVCeSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5leHQiLCJjb252ZXJ0ZWQiLCJyYW5nZSIsImpvaW4iLCJwcmV2IiwiRmFjZVZhbHVlIiwiZ2V0UHVibGljQXR0cmlidXRlcyIsIiRkaWdpdHMiLCIkdmFsdWUiLCJ2YWxpZGF0ZSIsInN1Y2Nlc3MiLCJhcmciLCJjbGFzc05hbWUiLCJpdGVtcyIsInRoZW1lIiwibGFuZ3VhZ2UiLCJkYXRlIiwiZmFjZSIsImVsZW1lbnQiLCJmYWNlVmFsdWUiLCJ0aW1lciIsIkZhY2UiLCJ1bmRlZmluZWQiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJkZWZhdWx0VmFsdWUiLCJpbnN0YW5jZSIsImRlY3JlbWVudCIsImluY3JlbWVudCIsInNob3VsZFN0b3AiLCJzdG9wIiwiZW1pdCIsInN0b3BBdCIsImFtb3VudCIsImlzU3RvcHBlZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0IiwibWFrZSIsImRlZmF1bHREYXRhVHlwZSIsImNyZWF0ZUZhY2VWYWx1ZSIsIiRzdG9wQXQiLCIkb3JpZ2luYWxWYWx1ZSIsImRpY3Rpb25hcnkiLCJhbGlhc2VzIiwiTEFOR1VBR0VTIiwiZmluZCIsImluZGV4T2YiLCJ0cmFuc2xhdGUiLCJmcm9tIiwibGFuZyIsInN3YXAiLCJzdWJqZWN0IiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZWwiLCJhcHBlbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJIVE1MRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiaW5uZXJIVE1MIiwiRG9tQ29tcG9uZW50IiwicGFyZW50IiwicmVuZGVyIiwiaW5zZXJ0QmVmb3JlIiwiJGVsIiwiQ29uc29sZU1lc3NhZ2VzIiwiJHBhcmVudCIsIiR0aGVtZSIsIiRsYW5ndWFnZSIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiVGltZXIiLCJpbnRlcnZhbCIsImNvdW50IiwiaGFuZGxlIiwic3RhcnRlZCIsInJ1bm5pbmciLCJEYXRlIiwibGFzdExvb3AiLCJub3ciLCJsb29wIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZ2V0VGltZSIsIkNvdW50ZXIiLCJNaW51dGVDb3VudGVyIiwic2hvd1NlY29uZHMiLCJzaG93TGFiZWxzIiwiZGlmZiIsIm9yaWdpbmFsVmFsdWUiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImEiLCJiIiwiZ2V0VG90YWxTZWNvbmRzIiwidG90YWxTZWNvbmRzIiwiYWJzIiwiSG91ckNvdW50ZXIiLCJkYXRhIiwiZ2V0SG91cnMiLCJEYXlDb3VudGVyIiwiZ2V0RGF5cyIsIlR3ZW50eUZvdXJIb3VyQ2xvY2siLCJncm91cHMiLCJvZmZzZXQiLCJUd2VsdmVIb3VyQ2xvY2siLCJzaG93TWVyaWRpdW0iLCJob3VycyIsIm1lcmlkaXVtIiwiV2Vla0NvdW50ZXIiLCJnZXRXZWVrcyIsIlllYXJDb3VudGVyIiwiZ2V0WWVhcnMiLCJpbmRleCIsImNoaWxkTm9kZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFydHMiLCJncm91cCIsImdyb3VwRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlzdHMiLCJsaXN0RWwiLCJsaXN0VmFsdWUiLCJjcmVhdGVMaXN0IiwiZG9tVmFsdWUiLCJkZWxheSIsImNyZWF0ZUdyb3VwIiwibm9kZXMiLCJ0IiwiYmVmb3JlVmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjcmVhdGVMaXN0SXRlbSIsImFjdGl2ZSIsImNyZWF0ZURpdmlkZXIiLCJtb3VudCIsImNyZWF0ZUxhYmVsIiwiRmxpcENsb2NrIiwiZmFjZXMiLCJPcmlnaW5hbCIsIkVuZ2xpc2giLCJEZWZhdWx0VmFsdWVzIiwibW91bnRlZCIsInJlbmRlcmVkIiwic3RvcHBlZCIsInJlc2V0IiwiJGZhY2UiLCJGYWNlcyIsImluaXRpYWxpemVkIiwiJHRpbWVyIiwiY2xvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7Ozs7SUFTQTs7Ozs7Ozs7QUFRQSxJQUFPLFNBQVNBLEtBQVQsQ0FBZUMsTUFBZixFQUF1QjtJQUMxQixRQUFNQyxLQUFLLENBQUNELE1BQUQsQ0FBWDtJQUNIO0lBRUQ7Ozs7Ozs7Ozs7O0FBVUEsSUFBTyxTQUFTRSxRQUFULENBQWtCQyxFQUFsQixFQUErQjtJQUNsQyxNQUFHQyxVQUFVLENBQUNELEVB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
