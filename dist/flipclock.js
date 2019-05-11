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
//# sourceMappingURL=flipclock.js.map
