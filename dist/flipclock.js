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
       * Get the `name` attribute. Uses the `this.constructor.name` by default.
       *
       * @return {string} - The `name` attribute.
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
          return this.constructor.name;
        }
        /**
         * Get the `className` attribute. Used for CSS. Kebab cases the `name`
         * property by default.
         *
         * @return {string} - The `className` attribute.
         */

      }, {
        key: "className",
        get: function get() {
          return kebabCase(this.name);
        }
        /**
         * Get the `events` attribute.
         *
         * @return {array} - The `events` attribute.
         */

      }, {
        key: "events",
        get: function get() {
          return this.$events || [];
        }
        /**
         * Set the registered events for this class.
         *
         * @param  {array} value - The new events array.
         * @return {void}
         */
        ,
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


    function findRange(char) {
      for (var i in RANGES) {
        var code = char.toString().charCodeAt(0);

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


    function stringFromCharCodeBy(char, fn) {
      return String.fromCharCode(fn(findRange(char), char.charCodeAt(0)));
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
      var converted = value.toString().split('').map(function (char) {
        return stringFromCharCodeBy(char, function (range, code) {
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
      var converted = value.toString().split('').map(function (char) {
        return stringFromCharCodeBy(char, function (range, code) {
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
       * Get the `digits` attribute.
       *
       * @return {(Array|undefined)} - The `digits` attribute.
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
      }, {
        key: "digits",
        get: function get() {
          return this.$digits;
        }
        /**
         * Set `digits` attribute.
         *
         * @param  {array} value - An array of digits/characters.
         * @return {void}
         */
        ,
        set: function set(value) {
          this.$digits = value;
          this.minimumDigits = Math.max(this.minimumDigits, length(value));
        }
        /**
         * Get the `value` attribute.
         *
         * @return {*} - The `value` attribute.
         */

      }, {
        key: "value",
        get: function get() {
          return this.$value;
        }
        /**
         * Set `value` attribute. Also digitizes the new value, and sets the
         * `digits` attributes
         *
         * @param  {*} value - The `value` attribute.
         * @return {void}
         */
        ,
        set: function set(value) {
          this.$value = value;
          this.digits = digitize(this.format(value), {
            minimumDigits: this.minimumDigits,
            prependLeadingZero: this.prependLeadingZero
          });
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
          value = null;
        }

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Face).call(this));

        _this.setAttributes(Object.assign({
          autoStart: true,
          countdown: false,
          animationRate: 500
        }, _this.defaultAttributes(), attributes || {}));

        if (value || _this.defaultValue()) {
          _this.value = !isNull(value) && !isUndefined(value) ? value : _this.defaultValue();
        }

        return _this;
      }
      /**
       * Get the `dataType` attribute.
       *
       * @return {*} - The `dataType` attribute.
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
         * Get the `value` attribute.
         *
         * @return {*} - The `value` attribute.
         */

      }, {
        key: "value",
        get: function get() {
          return this.$value;
        }
        /**
         * Set the `value` attribute.
         *
         * @param  {*} value - Any value that is not an instance of `FaceValue` will
         *     be cast into one.
         * @return {void}
         */
        ,
        set: function set(value) {
          if (!(value instanceof FaceValue)) {
            value = this.createFaceValue(value);
          }

          this.$value = value;
        }
        /**
         * Get the `stopAt` attribute.
         *
         * @return {*} - The `stopAt` attribute.
         */

      }, {
        key: "stopAt",
        get: function get() {
          return this.$stopAt;
        }
        /**
         * Set the `stopAt` attribute.
         *
         * @param  {*} value - Any value that is used to match against the face to
         *     determine when the clock should stop.
         * @return {void}
         */
        ,
        set: function set(value) {
          this.$stopAt = value;
        }
        /**
         * Get the `originalValue` attribute.
         *
         * @return {*} - The `originalValue` attribute.
         */

      }, {
        key: "originalValue",
        get: function get() {
          return this.$originalValue;
        }
        /**
         * Set the `originalValue` attribute.
         *
         * @param  {*} value - The `originalValue` attribute.
         * @return {void}
         */
        ,
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
       * Get the component's top level DOM node.
       *
       * @return {HTMLElement} - The `el` attribute.
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
            class: this.className === 'flip-clock' ? this.className : 'flip-clock-' + this.className
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
        key: "el",
        get: function get() {
          return this.$el;
        }
        /**
         * Set the component's top level DOM node.
         *
         * @param  {(null|HTMLElement)} value - The `el` attribute.
         * @return {void}
         */
        ,
        set: function set(value) {
          if (!validate(value, null, HTMLElement)) {
            error(ConsoleMessages.element);
          }

          this.$el = value;
        }
        /**
         * Get the `parent` attribute. Parent is set when `DomComponent` instances are
         * mounted.
         *
         * @return {DomComponent} - The `parent` attribute.
         */

      }, {
        key: "parent",
        get: function get() {
          return this.$parent;
        }
        /**
         * Set the parent attribute.
         *
         * @param  {DomComponent} parent - The `parent` attribute value.
         * @return {DomComponent} - The `parent` attribute.
         */
        ,
        set: function set(parent) {
          this.$parent = parent;
        }
        /**
         * Get the `theme` attribute.
         *
         * @return {DomComponent} - The `theme` attribute.
         */

      }, {
        key: "theme",
        get: function get() {
          return this.$theme;
        }
        /**
         * Set the `theme` attribute.
         *
         * @param  {object} value - The `theme` attribute.
         * @return {void}
         */
        ,
        set: function set(value) {
          if (!validate(value, 'object')) {
            error(ConsoleMessages.value);
          }

          this.$theme = value;
        }
        /**
         * Get the language attribute.
         *
         * @return {object} - The `language` attribute.
         */

      }, {
        key: "language",
        get: function get() {
          return this.$language;
        }
        /**
         * Set the language attribute.
         *
         * @param  {object} value - The `language` attribute.
         * @return {object} - The `language` attribute.
         */
        ,
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
       * @return {(Number|String)} - The `value` attribute.
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
      }, {
        key: "value",
        get: function get() {
          return this.$value;
        }
        /**
         * Set the `value` attribute.
         *
         * @param  {array} value - The `value` attribute.
         * @return {(Number|String)} - The `value` attribute.
         */
        ,
        set: function set(value) {
          this.$value = value;
        }
        /**
         * Get the `items` attribute.
         *
         * @return {(Number|String)} - The `items` attribute.
         */

      }, {
        key: "items",
        get: function get() {
          return this.$items;
        }
        /**
         * Set the `items` attribute.
         *
         * @param  {array} value - The `items` attribute.
         * @return {(Number|String)} - The `items` attribute.
         */
        ,
        set: function set(value) {
          this.$items = value;
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
       * Gets the elapsed the time as an interger.
       *
       * @return {Number} The `elapsed` attribute.
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
      }, {
        key: "elapsed",
        get: function get() {
          return !this.lastLoop ? 0 : this.lastLoop - (this.started ? this.started.getTime() : new Date().getTime());
        }
        /**
         * Returns true is the timer is running.
         *
         * @return {boolean} - Returns `true` the `running` property is `true`
         */

      }, {
        key: "isRunning",
        get: function get() {
          return this.running === true;
        }
        /**
         * Returns true is the timer is not running.
         *
         * @return {boolean} - Returns `true` the `running` property is `false`
         */

      }, {
        key: "isStopped",
        get: function get() {
          return this.running === false;
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
        class: 'flip-clock-dot top'
      }), createElement('div', {
        class: 'flip-clock-dot bottom'
      })]);
    }

    function child(el, index) {
      return el ? el.childNodes ? el.childNodes[index] : el[index] : null;
    }

    function char(el) {
      return el ? el.querySelector('.flip-clock-list-item:first-child .top').innerHTML : null;
    }

    function FlipClock (el, instance) {
      var parts = instance.value.digits.map(function (group, x) {
        var groupEl = child(instance.el ? instance.el.querySelectorAll('.flip-clock-group') : null, x);
        var lists = group.map(function (value, y) {
          var listEl = child(groupEl ? groupEl.querySelectorAll('.flip-clock-list') : null, y);
          var listValue = char(listEl);
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
        class: 'top'
      }), createElement('div', instance.value, {
        class: 'bottom'
      })], {
        class: 'flip-clock-list-item-inner'
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
       * @param {object|undefined} [attributes] - The instance attributes.
       */
      function FlipClock(el, value, attributes) {
        var _this;

        _classCallCheck(this, FlipClock);

        if (!validate(el, HTMLElement)) {
          error(ConsoleMessages.element);
        }

        if (isObject(value) && !attributes) {
          attributes = value;
          value = null;
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
       * Get the clock `Face`.
       *
       * @return {Face} The `face` attribute.
       */


      _createClass(FlipClock, [{
        key: "mount",

        /**
         * Mount the clock to the parent DOM element.
         *
         * @param {HTMLElement} el - The parent `HTMLElement`.
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
         * @return {HTMLElement} The parent `HTMLElement`.
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
         *     the Face, which is usually `1`.     *
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
         * Get the global default values.
         *
         * @return {object}
         */

      }, {
        key: "face",
        get: function get$$1() {
          return this.$face;
        }
        /**
         * Sets the clock `Face`.
         *
         * @param  {Function|Face|string} value - The `Face` value.
         * @return {void}
         */
        ,
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
         * Get the `stopAt` attribute.
         *
         * @return {*} The `stopAt` value.
         */

      }, {
        key: "stopAt",
        get: function get$$1() {
          return isFunction(this.$stopAt) ? this.$stopAt(this) : this.$stopAt;
        }
        /**
         * Set the `stopAt` attribute.
         *
         * @param  {*} value - The `stopAt` value.
         * @return {void}
         */
        ,
        set: function set(value) {
          this.$stopAt = value;
        }
        /**
         * Get the `Timer` instance.
         *
         * @return {Timer} The `timer` attribute.
         */

      }, {
        key: "timer",
        get: function get$$1() {
          return this.$timer;
        }
        /**
         * Set the `Timer` instance.
         *
         * @param  {Timer} timer - The `timer` attribute.
         * @return {void}
         */
        ,
        set: function set(timer) {
          if (!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
          }

          this.$timer = timer;
        }
        /**
         * Helper method to get the clock's `FaceValue` instance.
         *
         * @return {FaceValue|null} The `FaceValue` if set, otherwise `null`.
         */

      }, {
        key: "value",
        get: function get$$1() {
          return this.face ? this.face.value : null;
        }
        /**
         * Helper method to set the clock's `FaceValue` instance.
         *
         * @param  {*} value - The `value` attribute.
         * @return {void}
         */
        ,
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
         * Get the original value attribute.
         *
         * @return {*} - The `originalValue` attribute.
         */

      }, {
        key: "originalValue",
        get: function get$$1() {
          return isFunction(this.$originalValue) && !this.$originalValue.name ? this.$originalValue() : this.$originalValue || (this.face ? this.face.defaultValue() : null);
        }
        /**
         * Set the original value attribute.
         *
         * @param  {*} value - The `originalValue` attribute.
         * @return {void}
         */
        ,
        set: function set(value) {
          this.$originalValue = value;
        }
      }], [{
        key: "setDefaultFace",

        /**
         * Helper method to set the default `Face` value.
         *
         * @param  {Face} value - The default `Face` class.This should be a
         *     constructor.
         * @return {void}
         */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvSGVscGVycy9EaWdpdGl6ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2FyLWFyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jYS1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcm8tcm8uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3ZuLXZuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2luZGV4LmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvTGFuZ3VhZ2UuanMiLCIuLi9zcmMvanMvSGVscGVycy9UcmFuc2xhdGUuanMiLCIuLi9zcmMvanMvSGVscGVycy9UZW1wbGF0ZS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RvbUNvbXBvbmVudC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3QuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Hcm91cC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xhYmVsLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvVGltZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9NaW51dGVDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0hvdXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0RheUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvVHdlbnR5Rm91ckhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VsdmVIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvWWVhckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvaW5kZXguanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgaGVscGVyIGZ1bmN0aW9ucywgc29tZSBib3Jyb3dlZCBmcm9tIExvZGFzaCxcbiAqIFVuZGVyc2NvcmUsIGV0YywgdG8gcHJvdmlkZSBjb21tb24gZnVuY3Rpb25hbGl0eSB3aXRob3V0IHRoZSBuZWVkIGZvciB1c2luZ1xuICogYSBkZXBlbmRlbmN5LiBBbGwgb2YgdGhpcyBpcyBhbiBhdHRlbXB0IHRvIHJlZHVjZSB0aGUgZmlsZSBzaXplIG9mIHRoZVxuICogbGlicmFyeS5cbiAqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cblxuLyoqXG4gKiBUaHJvdyBhIHN0cmluZyBhcyBhbiBFcnJvciBleGNlcHRpb24uXG4gKlxuICogQGZ1bmN0aW9uIGVycm9yXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3Ioc3RyaW5nKSB7XG4gICAgdGhyb3cgRXJyb3Ioc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgZm5gIGlzIGEgZnVuY3Rpb24sIGFuZCBjYWxsIGl0IHdpdGggYHRoaXNgIGNvbnRleHQgYW5kIHBhc3MgdGhlXG4gKiBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmN0aW9uIGNhbGxiYWNrXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBjYWxsYmFjayBmbi5cbiAqIEBwYXJhbSAgey4uLip9IGFyZ3MgLSBUaGUgYXJndW1lbnRzIHRvIHBhc3MuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayhmbiwgLi4uYXJncykge1xuICAgIGlmKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSb3VuZCB0aGUgdmFsdWUgdG8gdGhlIGNvcnJlY3QgdmFsdWUuIFRha2VzIGludG8gYWNjb3VudCBuZWdhdGl2ZSBudW1iZXJzLlxuICpcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtICB7dmFsdWV9IHN0cmluZyAtIFRoZSB2YWx1ZSB0byByb3VuZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgcm91bmRlZCB2YWx1ZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZVplcm8oXG4gICAgICAgIHZhbHVlID0gaXNOZWdhdGl2ZSh2YWx1ZSkgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSlcbiAgICApID8gKCctJyArIHZhbHVlKS50b1N0cmluZygpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYHVuZGVmaW5lZCBvciBgbnVsbGAuXG4gKlxuICogQGZ1bmN0aW9uIG5vb3BcbiAqIEBwYXJhbSAge3ZhbHVlfSBzdHJpbmcgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIGB0cnVlYCBpZiBgdW5kZWZpbmVkIG9yIGBudWxsYC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHRoZSBgYmVmb3JlYCBhdHRyaWJ1dGUgYW5kIHBhc3NlcyB0aGF0IHZhbHVlXG4gKiB0byBgYWZ0ZXJgIGFuZCB0aGUgc3Vic2VxdWVudCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY3Rpb24gY2hhaW5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBiZWZvcmUgLSBUaGUgZmlyc3QgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBhZnRlciAtIFRoZSBzdWJzZXF1ZW50IGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIGNoYWluLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbihiZWZvcmUsIGFmdGVyKSB7XG4gICAgcmV0dXJuICgpID0+IGFmdGVyKGJlZm9yZSgpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIG1hcHMgdGhlIHZhbHVlcyBiZWZvcmUgY29uY2F0ZW5hdGluZyB0aGVtLlxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRNYXBcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBmbiAtIFRoZSBtYXAgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIG1hcCBhbmQgY29uY2F0ZW5hdGlvbi5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TWFwKGZuKSB7XG4gICAgcmV0dXJuIHggPT4ge1xuICAgICAgICByZXR1cm4geC5tYXAoZm4pLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKTtcbiAgICB9XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheS5cbiAqXG4gKiBAZnVuY3Rpb24gZmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh2YWx1ZSA9PiB2YWx1ZSkodmFsdWUpXG59XG5cbi8qKlxuICogRGVlcCBmbGF0dGVuIGFuIGFycmF5LlxuICpcbiAqIEBmdW5jdGlvbiBkZWVwRmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IEFycmF5LmlzQXJyYXkoeCkgPyBkZWVwRmxhdHRlbiAoeCkgOiB4KSh4KTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgaW4gYSBzdHJpbmcuXG4gKlxuICogQGZ1bmN0aW9uIHVjZmlyc3RcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVjZmlyc3Qoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgYSBkZWVwIGZsYXR0ZW4gYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGxlbmd0aFxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGNvdW50LlxuICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBsZW5ndGggb2YgdGhlIGRlZXAgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgodmFsdWUpIHtcbiAgICByZXR1cm4gZGVlcEZsYXR0ZW4odmFsdWUpLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBuZWdhdGl2ZSB6ZXJvLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlWmVyb1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgbmVnYXRpdmUgemVybyAoYC0wYCkuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKHZhbHVlKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLnJvdW5kKHZhbHVlKSA9PT0gLUluZmluaXR5O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIG5lZ2F0aXZlLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBuZWdhdGl2ZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlWmVybyh2YWx1ZSkgfHwgdmFsdWUgPCAwO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgbnVsbGAuXG4gKlxuICogQGZ1bmN0aW9uIGlzTnVsbFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGBudWxsYC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNOdWxsXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYHVuZGVmaW5lZGAuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgY29uc3RydWN0b3IuXG4gKlxuICogQGZ1bmN0aW9uIGlzQ29uc3RydWN0b3JcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBjb25zdHJ1Y3Rvci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgISF2YWx1ZS5uYW1lO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY3Rpb24gaXNTdHJpbmdcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGlzU3RyaW5nXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNPYmplY3RcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBpbnRvIGtlYmFiIGNhc2UuXG4gKlxuICogQGZ1bmN0aW9uIGtlYmFiQ2FzZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCwga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQWJzdHJhY3QgYmFzZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYG5hbWVgIGF0dHJpYnV0ZS4gVXNlcyB0aGUgYHRoaXMuY29uc3RydWN0b3IubmFtZWAgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgYG5hbWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBjbGFzc05hbWVgIGF0dHJpYnV0ZS4gVXNlZCBmb3IgQ1NTLiBLZWJhYiBjYXNlcyB0aGUgYG5hbWVgXG4gICAgICogcHJvcGVydHkgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgYGNsYXNzTmFtZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBldmVudHNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIFRoZSBgZXZlbnRzYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGV2ZW50cyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlZ2lzdGVyZWQgZXZlbnRzIGZvciB0aGlzIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIG5ldyBldmVudHMgYXJyYXkuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZXZlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXQgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGVtaXQoa2V5LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGV2ZW50IGlkL2tleS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gW29uY2U9ZmFsc2VdIC0gU2hvdWxkIHRoZSBldmVudCBoYW5kbGVyIGJlIGZpcmVkIGFcbiAgICAgKiAgICAgc2luZ2xlIHRpbWUuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG9uKGtleSwgZm4sIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBpZighdGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHNba2V5XS5wdXNoKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgZXZlbnQgaWQva2V5LlxuICAgICAqIEBwYXJhbSB7KEZ1bmN0aW9ufHVuZGVmaW5lZCl9IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBub1xuICAgICAqICAgICBmdW5jdGlvbiBpcyBkZWZpbmVkLCBhbGwgZXZlbnRzIHdpdGggdGhlIHNwZWNpZmllZCBpZC9rZXkgd2lsbCBiZVxuICAgICAqICAgICByZW1vdmVkLiBPdGhlcndpc2UsIG9ubHkgdGhlIGV2ZW50IGxpc3RlbmVycyBtYXRjaGluZyB0aGUgaWQva2V5IEFORFxuICAgICAqICAgICBjYWxsYmFjayB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGFuIGV2ZW50IG9ubHkgb25lIHRpbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBSZXR1cm5zIGB0aGlzYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBvbmNlKGtleSwgZm4pIHtcbiAgICAgICAgZm4gPSBjaGFpbihmbiwgKCkgPT4gdGhpcy5vZmYoa2V5LCBmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiBhdHRyaWJ1dGUuIFJldHVybnMgbnVsbCBpZiBubyBhdHRyaWJ1dGUgaXMgZGVmaW5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KGtleSkgPyB0aGlzW2tleV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIGF0dHRyaWJ1dGVzIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSBhdHRyaWJ1dGUgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9ubHkgcHVibGljIHRoZSBhdHR0cmlidXRlcyBmb3IgdGhpcyBpbnN0YW5jZS4gT21pdHMgYW55IGF0dHJpYnV0ZVxuICAgICAqIHRoYXQgc3RhcnRzIHdpdGggYCRgLCB3aGljaCBpcyB1c2VkIGludGVybmFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGF0dHJpYnV0ZSBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZSBrZXkgYW5kIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgLSBUaGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZXMgYnkgb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIC0gVGhlIG9iamVjdCBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBleGVjdXRlIHRoZSBgY2FsbGJhY2soKWAgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7Kn0gLSBSZXR1cm5zIHRoZSBleGVjdXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjYWxsYmFjayhmbikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIG1ldGhvZCB0byBzdGF0aWMgaW5zdGFudGlhdGUgbmV3IGluc3RhbmNlcy4gVXNlZnVsIGZvciB3cml0aW5nXG4gICAgICogY2xlYW4gZXhwcmVzc2l2ZSBzeW50YXggd2l0aCBjaGFpbmVkIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsuLi4qfSBhcmdzIC0gVGhlIGNhbGxiYWNrIGFyZ3VtZW50cy5cbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBuZXcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuRGlnaXRpemVcbiAqL1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIERpZ2l0aXplIGEgbnVtYmVyLCBzdHJpbmcsIG9yIGFuIGFycmF5IGludG8gYSBkaWdpdGl6ZWQgYXJyYXkuIFRoaXMgZnVuY3Rpb25cbiAqIHVzZSBieSB0aGUgYEZhY2VgLCB3aGljaCBjb252ZXJ0IHRoZSBkaWdpdGl6ZWQgYXJyYXkgaW50byBhbiBhcnJheSBvZiBgTGlzdGBcbiAqIGluc3RhbmNlcy5cbiAqXG4gKiBAZnVuY3Rpb24gZGlnaXRpemVcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGRpZ2l0aXplLlxuICogQHBhcmFtICB7KE9iamVjdHx1bmRlZmluZWQpfSBbb3B0aW9uc10gLSBUaGUgZGlnaXRpemVyIG9wdGlvbnMuXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZGlnaXRpemVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRGlnaXRpemVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlnaXRpemUodmFsdWUsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG1pbmltdW1EaWdpdHM6IDAsXG4gICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZChudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlcGVuZFplcm8gPSBvcHRpb25zLnByZXBlbmRMZWFkaW5nWmVybyAmJlxuICAgICAgICAgICAgbnVtYmVyLnRvU3RyaW5nKCkuc3BsaXQoJycpLmxlbmd0aCA9PT0gMTtcblxuICAgICAgICByZXR1cm4gKHNob3VsZFByZXBlbmRaZXJvID8gJzAnIDogJycpLmNvbmNhdChudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZ2l0cyhhcnIsIG1pbikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBkZWVwRmxhdHRlbihhcnIpLmxlbmd0aDtcblxuICAgICAgICBpZihsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtaW4gLSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclswXS51bnNoaWZ0KCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiBkaWdpdHMoZmxhdHRlbihbdmFsdWVdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oZGVlcEZsYXR0ZW4oW251bWJlcl0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBlbmQobnVtYmVyKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pKTtcbiAgICB9KSwgb3B0aW9ucy5taW5pbXVtRGlnaXRzIHx8IDApO1xufVxuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuVmFsdWVcbiAqL1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBtaW4vbWF4IHJhbmdlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2FycmF5fVxuICovXG5jb25zdCBSQU5HRVMgPSBbe1xuICAgIC8vIDAtOVxuICAgIG1pbjogNDgsXG4gICAgbWF4OiA1N1xufSx7XG4gICAgLy8gYS16XG4gICAgbWluOiA2NSxcbiAgICBtYXg6IDkwXG59LHtcbiAgICAvLyBBLVpcbiAgICBtaW46IDk3LFxuICAgIG1heDogMTIyXG59XTtcblxuLyoqXG4gKiBGb3JtYXQgYSBzdHJpbmcgaW50byBhIG5ldyBkYXRhIHR5cGUuIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHN0cmluZyB0b1xuICogbnVtYmVyIGNvbnZlcnNpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb3JtYXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGRhdGEgdHlwZSAocmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcpIHVzZWQgdG9cbiAqICAgICBjb252ZXJ0IHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgdGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChzdHJpbmcsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIHJhbmdlIG9iamVjdCBmcm9tIHRoZSBgUkFOR0VTYCBjb25zdGFudCBmcm9tIHRoZSBjaGFyYWN0ZXIgZ2l2ZW4uXG4gKiBUaGlzIGlzIG1haW5seSBhbiBpbnRlcnZhbCBtZXRob2QsIGJ1dCBjYW4gYmUgdXNlZCBieSBmYWNlcyB0byBoZWxwXG4gKiBkZXRlcm1pbmUgd2hhdCB0aGUgbmV4dCB2YWx1ZSBvZiBhIHN0cmluZyBzaG91bGQgYmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb3JtYXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyIC0gVGhlIGNoYXIgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZGF0YSB0eXBlIChyZXByZXNlbnRlZCBhcyBhIHN0cmluZykgdXNlZCB0b1xuICogICAgIGNvbnZlcnQgdGhlIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyB0aGUgZm9ybWF0dGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiBSQU5HRVMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKFJBTkdFU1tpXS5taW4gPD0gY29kZSAmJiBSQU5HRVNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBSQU5HRVNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZnJvbSBhIGNoYXJhY3RlciBjb2RlLCB3aGljaCBpcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYWxsYmFjayBzdHJpbmdGcm9tQ2hhckNvZGVCeVxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSBUaGUgY2hhciB1c2VkIHRvIGRldGVybWluZSB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiByZWNlaXZlcyBgcmFuZ2VgIGFuZCBgY29kZWBcbiAqICAgICBhcmd1bWVudHMuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIGNoYXJhY3RlciBjb2RlLlxuICogQHJldHVybiB7c3RyaW5nfSAtIENyZWF0ZXMgYSBzdHJpbmcgZnJvbSB0aGUgY2hhcmFjdGVyIGNvZGUgcmV0dXJuZWQgYnkgdGhlXG4gKiAgICAgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ0Zyb21DaGFyQ29kZUJ5KGNoYXIsIGZuKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgIGZuKGZpbmRSYW5nZShjaGFyKSwgY2hhci5jaGFyQ29kZUF0KDApKVxuICAgICk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBuZXh0IHZhbHVlIGZvciBhIHN0cmluZy4gJ2EnIGJlY29tZXMgJ2InLiAnQScgYmVjb21lcyAnQicuIDFcbiAqIGJlY29tZXMgMiwgZXRjLiBJZiBtdWx0aXBsZSBjaGFyYWN0ZXIgc3RyaW5ncyBhcmUgcGFzc2VkLCAnYWEnIHdvdWxkIGJlY29tZVxuICogJ2JiJy5cbiAqXG4gKiBAZnVuY3Rpb24gbmV4dFxuICogQHBhcmFtICB7KHN0cmluZ3xudW1iZXIpfSB2YWx1ZSAtIFRoZSBzdHJpbmcgb3IgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGZvcm1hdHRlZCBzdHJpbmdcbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBzdHJpbmdGcm9tQ2hhckNvZGVCeShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA8IHJhbmdlLm1heCA/IGNvZGUgKyAxIDogcmFuZ2UubWluXG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHByZXYgdmFsdWUgZm9yIGEgc3RyaW5nLiAnYicgYmVjb21lcyAnYScuICdCJyBiZWNvbWVzICdBJy4gMlxuICogYmVjb21lcyAxLCAwIGJlY29tZXMgOSwgZXRjLiBJZiBtdWx0aXBsZSBjaGFyYWN0ZXIgc3RyaW5ncyBhcmUgcGFzc2VkLCAnYmInXG4gKiB3b3VsZCBiZWNvbWUgJ2FhJy5cbiAqXG4gKiBAZnVuY3Rpb24gcHJldlxuICogQHBhcmFtICB7KHN0cmluZ3xudW1iZXIpfSB2YWx1ZSAtIFRoZSBzdHJpbmcgb3IgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGZvcm1hdHRlZCBzdHJpbmdcbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBzdHJpbmdGcm9tQ2hhckNvZGVCeShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA+IHJhbmdlLm1pbiA/IGNvZGUgLSAxIDogcmFuZ2UubWF4XG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IGRpZ2l0aXplIGZyb20gJy4uL0hlbHBlcnMvRGlnaXRpemUnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgbGVuZ3RoLCBpc09iamVjdCwgaXNOdW1iZXIgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2VWYWx1ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYEZhY2VWYWx1ZWAgY2xhc3MgaGFuZGxlcyBhbGwgdGhlIGRpZ2l0aXppbmcgZm9yIHRoZSBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgRmFjZVZhbHVlXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSBgRmFjZVZhbHVlYCdzIGFjdHVhbCB2YWx1ZS4gTW9zdCBsaWtlbHkgc2hvdWxkXG4gICAgICogICAgIHN0cmluZywgbnVtYmVyLCBvciBEYXRlLiBCdXQgc2luY2UgdGhlIEZhY2UgaGFuZGxlcyB0aGUgdmFsdWUsIGl0XG4gICAgICogICAgIGNvdWxkIGJlIGFueXRoaW5nLlxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWUsXG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiAwXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgZGlnaXRzYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoQXJyYXl8dW5kZWZpbmVkKX0gLSBUaGUgYGRpZ2l0c2AgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGBkaWdpdHNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2FycmF5fSB2YWx1ZSAtIEFuIGFycmF5IG9mIGRpZ2l0cy9jaGFyYWN0ZXJzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IGRpZ2l0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRkaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5taW5pbXVtRGlnaXRzID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlnaXRzLCBsZW5ndGgodmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGB2YWx1ZWAgYXR0cmlidXRlLiBBbHNvIGRpZ2l0aXplcyB0aGUgbmV3IHZhbHVlLCBhbmQgc2V0cyB0aGVcbiAgICAgKiBgZGlnaXRzYCBhdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmRpZ2l0cyA9IGRpZ2l0aXplKHRoaXMuZm9ybWF0KHZhbHVlKSwge1xuICAgICAgICAgICAgbWluaW11bURpZ2l0czogdGhpcy5taW5pbXVtRGlnaXRzLFxuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0aGlzLnByZXBlbmRMZWFkaW5nWmVyb1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUgaXMgbm90IGEgbnVtYmVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaXMgdGhlIHZhbHVlIGlzIG5vdCBhIG51bWJlci5cbiAgICAgKi9cbiAgICBpc05hTigpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZSBpcyBhIG51bWJlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gYHRydWVgIGlzIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAgICAgKi9cbiAgICBpc051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgdGhlIGN1cnJlbnQgYEZhY2VWYWx1ZWAgaW5zdGFuY2UsIGJ1dCBzZXRzIGEgbmV3IHZhbHVlIHRvIHRoZVxuICAgICAqIGNsb25lZCBpbnN0YW5jZS4gVXNlZCBmb3IgY29weWluZyB0aGUgY3VycmVudCBpbnN0YW5jZSBvcHRpb25zIGFuZFxuICAgICAqIG1ldGhvZHMsIGJ1dCBzZXR0aW5nIGEgbmV3IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgblxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcmV0dXJuIHtGYWNlVmFsdWV9IC0gVGhlIGNsb25lZCBgRmFjZVZhbHVlYC5cbiAgICAgKi9cbiAgICBjbG9uZSh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodmFsdWUsIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSwgYXR0cmlidXRlc1xuICAgICAgICApKTtcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQG5hbWVzcGFjZSBIZWxwZXJzLlZhbGlkYXRlXG4gKi9cbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQ29uc3RydWN0b3IgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIGRhdGEgdHlwZSBvZiBhIHZhcmlhYmxlLlxuICpcbiAqIEBmdW5jdGlvbiB2YWxpZGF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byB2YWxpZGF0ZS5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyAtIFRoZSBkYXRhIHR5cGVzIHRvIHVzZSBmb3IgdmFsaWRhdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgaXMgdGhlIHZhbHVlIGhhcyBhIHZhbGlkIGRhdGEgdHlwZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbGlkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDb25zdHJ1Y3RvcihhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiLyoqXG4gKiBAYWxpYXMgQ29uc29sZU1lc3NhZ2VzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIG1vZHVsZTpDb25maWcvQ29uc29sZU1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpdGVtczogJ1RoZSBpdGVtcyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicsXG4gICAgdGhlbWU6ICdUaGUgdGhlbWUgcHJvcGVydHkgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBsYW5ndWFnZTogJ1RoZSBsYW5ndWFnZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGRhdGU6ICdUaGUgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERhdGUuJyxcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2UgY2xhc3MuJyxcbiAgICBlbGVtZW50OiAnVGhlIGVsZW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhbiBIVE1MRWxlbWVudCcsXG4gICAgZmFjZVZhbHVlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2VWYWx1ZSBjbGFzcy4nLFxuICAgIHRpbWVyOiAnVGhlIHRpbWVyIHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBUaW1lciBjbGFzcy4nXG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBlcnJvciwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNPYmplY3QsIGlzQXJyYXksIGlzRnVuY3Rpb24sIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgbWVhbnQgdG8gYmUgcHJvdmlkZSBhbiBpbnRlcmZhY2UgZm9yIGFsbCBvdGhlciBmYWNlcyB0b1xuICAgICAqIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBGYWNlXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gICAgICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgY291bnRkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IDUwMFxuICAgICAgICB9LCB0aGlzLmRlZmF1bHRBdHRyaWJ1dGVzKCksIGF0dHJpYnV0ZXMgfHwge30pKTtcblxuICAgICAgICBpZih2YWx1ZSB8fCB0aGlzLmRlZmF1bHRWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzVW5kZWZpbmVkKHZhbHVlKSA/IHZhbHVlIDogdGhpcy5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYGRhdGFUeXBlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBgZGF0YVR5cGVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgZGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHREYXRhVHlwZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBBbnkgdmFsdWUgdGhhdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgYEZhY2VWYWx1ZWAgd2lsbFxuICAgICAqICAgICBiZSBjYXN0IGludG8gb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmKCEodmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY3JlYXRlRmFjZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgc3RvcEF0YCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBgc3RvcEF0YCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBzdG9wQXRgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gQW55IHZhbHVlIHRoYXQgaXMgdXNlZCB0byBtYXRjaCBhZ2FpbnN0IHRoZSBmYWNlIHRvXG4gICAgICogICAgIGRldGVybWluZSB3aGVuIHRoZSBjbG9jayBzaG91bGQgc3RvcC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgYG9yaWdpbmFsVmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgb3JpZ2luYWxWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG9yaWdpbmFsVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYG9yaWdpbmFsVmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBvcmlnaW5hbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBldmVyeSBpbnRlcnZhbCwgb3IgZXZlcnkgdGltZSB0aGUgY2xvY2tcbiAgICAgKiBzaG91bGQgY2hhbmdlLCBhbmQgaGFuZGxlcyB0aGUgYWN0dWFsIGluY3JlbWVudGluZyBhbmQgZGVjcmVtZW50aW5nIHRoZVxuICAgICAqIGNsb2NrJ3MgYEZhY2VWYWx1ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtGYWNlfSAtIFRoaXMgYEZhY2VgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICBpZih0aGlzLmNvdW50ZG93bikge1xuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgaWYodGhpcy5zaG91bGRTdG9wKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjbG9jayBzaG91bGQgc3RvcCBvciBub3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNsb2NrIHNob3VsZCBzdG9wLlxuICAgICAqL1xuICAgIHNob3VsZFN0b3AoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGlzLnN0b3BBdCkgPyB0aGlzLnN0b3BBdCA9PT0gaW5zdGFuY2UudmFsdWUudmFsdWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0IHRoaXMganVzdCByZXR1cm5zIHRoZSB2YWx1ZSB1bmZvcm1hdHRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gZm9ybWF0LlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGZvcm1hdHRlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBGYWNlYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgZm9yIHRoZSBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoT2JqZWN0fHVuZGVmaW5lZCl9IC0gVGhlIGRlZmF1bHQgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBkYXRhIHR5cGUgZm9yIHRoZSBgRmFjZWAgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoT2JqZWN0fHVuZGVmaW5lZCl9IC0gVGhlIGRlZmF1bHQgZGF0YSB0eXBlLlxuICAgICAqL1xuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIGNsb2NrLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFthbW91bnRdIC0gVGhlIGFtb3VudCB0byBpbmNyZW1lbnQuIElmIHRoZSBhbW91bnQgaXMgbm90XG4gICAgICogICAgIGRlZmluZWQsIGl0IGlzIGxlZnQgdXAgdG8gdGhlIGBGYWNlYCB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIGFtb3VudCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY3JlbWVudCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gW2Ftb3VudF0gLSBUaGUgYW1vdW50IHRvIGRlY3JlbWVudC4gSWYgdGhlIGFtb3VudCBpcyBub3RcbiAgICAgKiAgICAgZGVmaW5lZCwgaXQgaXMgbGVmdCB1cCB0byB0aGUgYEZhY2VgIHRvIGRldGVybWluZSB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgYW1vdW50KSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGNsb2NrIGhhcyBzdGFydGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXJ0ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgY2xvY2sgaGFzIHN0b3BwZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RvcHBlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBjbG9jayBoYXMgcmVzZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcmVzZXQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgYEZhY2VgIGhhcyBpbml0aWFsaXplZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0aWFsaXplZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBgRmFjZWAgaGFzIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcmVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGBGYWNlYCBoYXMgbW91bnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBtb3VudGVkKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b1N0YXJ0ICYmIGluc3RhbmNlLnRpbWVyLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBpbnN0YW5jZS5zdGFydChpbnN0YW5jZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgRmFjZVZhbHVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgRmFjZVZhbHVlYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtEaXZpZGVyfSAtIFRoZSBpbnN0YW50aWF0ZWQgYEZhY2VWYWx1ZWAuXG4gICAgICovXG4gICAgY3JlYXRlRmFjZVZhbHVlKGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRmFjZVZhbHVlLm1ha2UoXG4gICAgICAgICAgICBpc0Z1bmN0aW9uKHZhbHVlKSAmJiAhdmFsdWUubmFtZSA/IHZhbHVlKCkgOiB2YWx1ZSwge1xuICAgICAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IHRoaXMubWluaW11bURpZ2l0cyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+IHRoaXMuZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQGNsYXNzZGVzYyBBcmFiaWMgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5BcmFiaWNcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5BcmFiaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9iz2YbZiNin2KonLFxuICAgICdtb250aHMnICA6ICfYtNmH2YjYsScsXG4gICAgJ2RheXMnICAgIDogJ9ij2YrYp9mFJyxcbiAgICAnaG91cnMnICAgOiAn2LPYp9i52KfYqicsXG4gICAgJ21pbnV0ZXMnIDogJ9iv2YLYp9im2YInLFxuICAgICdzZWNvbmRzJyA6ICfYq9mI2KfZhtmKJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5BcmFiaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2FyJywgJ2FyLWFyJywgJ2FyYWJpYyddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIENhdGFsYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYXRhbGFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuQ2F0YWxhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNhdGFsYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyA6ICdBbnlzJyxcbiAgICAnbW9udGhzJyA6ICdNZXNvcycsXG4gICAgJ2RheXMnIDogJ0RpZXMnLFxuICAgICdob3VycycgOiAnSG9yZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dHMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWdvbnMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNhdGFsYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NhJywgJ2NhLWVzJywgJ2NhdGFsYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBDemVjaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuQ3plY2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DemVjaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ3plY2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NzJywgJ2NzLWN6JywgJ2N6JywgJ2N6LWNzJywgJ2N6ZWNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRGFuaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRGFuaXNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRGFuaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2UnLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkRhbmlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgR2VybWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgR2VybWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuR2VybWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuR2VybWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5HZXJtYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEVuZ2xpc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRW5nbGlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZZWFycycsXG5cdCdtb250aHMnICA6ICdNb250aHMnLFxuXHQnZGF5cycgICAgOiAnRGF5cycsXG5cdCdob3VycycgICA6ICdIb3VycycsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVzJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZHMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2VuJywgJ2VuLXVzJywgJ2VuZ2xpc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3BhbmlzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlNwYW5pc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5TcGFuaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuU3BhbmlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZXMnLCAnZXMtZXMnLCAnc3BhbmlzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFBlcnNpYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQZXJzaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuUGVyc2lhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBlcnNpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfYs9in2YQnLFxuXHQnbW9udGhzJyAgOiAn2YXYp9mHJyxcblx0J2RheXMnICAgIDogJ9ix2YjYsicsXG5cdCdob3VycycgICA6ICfYs9in2LnYqicsXG5cdCdtaW51dGVzJyA6ICfYr9mC24zZgtmHJyxcblx0J3NlY29uZHMnIDogJ9ir2KfZhtuM2YcnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBlcnNpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBGaW5uaXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkZpbm5pc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5GaW5uaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnVnVvdHRhJyxcblx0J21vbnRocycgIDogJ0t1dWthdXR0YScsXG5cdCdkYXlzJyAgICA6ICdQw6RpdsOkw6QnLFxuXHQnaG91cnMnICAgOiAnVHVudGlhJyxcblx0J21pbnV0ZXMnIDogJ01pbnV1dHRpYScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bnRpYSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRmlubmlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmknLCAnZmktZmknLCAnZmlubmlzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkNhbmFkaWFuRnJlbmNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2FuYWRpYW5GcmVuY2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0FucycsXG4gICAgJ21vbnRocycgIDogJ01vaXMnLFxuICAgICdkYXlzJyAgICA6ICdKb3VycycsXG4gICAgJ2hvdXJzJyAgIDogJ0hldXJlcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWNvbmRlcydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2FuYWRpYW5GcmVuY2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZyJywgJ2ZyLWNhJywgJ2ZyZW5jaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEhlYnJldyBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEhlYnJldyBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkhlYnJld1xuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkhlYnJld1xuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkhlYnJld1xuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgSHVuZ2FyaWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuSHVuZ2FyaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSHVuZ2FyaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4l2JyxcbiAgICAnbW9udGhzJyAgOiAnSMOzbmFwJyxcbiAgICAnZGF5cycgICAgOiAnTmFwJyxcbiAgICAnaG91cnMnICAgOiAnw5NyYScsXG4gICAgJ21pbnV0ZXMnIDogJ1BlcmMnLFxuICAgICdzZWNvbmRzJyA6ICdNw6Fzb2RwZXJjJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5IdW5nYXJpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2h1JywgJ2h1LWh1JywgJ2h1bmdhcmlhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBJdGFsaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuSXRhbGlhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkl0YWxpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSXRhbGlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgSmFwYW5lc2UgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBKYXBhbmVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkphcGFuZXNlXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSmFwYW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSmFwYW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgS29yZWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuS29yZWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuS29yZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn64WEJyxcblx0J21vbnRocycgIDogJ+yblCcsXG5cdCdkYXlzJyAgICA6ICfsnbwnLFxuXHQnaG91cnMnICAgOiAn7IucJyxcblx0J21pbnV0ZXMnIDogJ+u2hCcsXG5cdCdzZWNvbmRzJyA6ICfstIgnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLktvcmVhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsna28nLCAna28ta3InLCAna29yZWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIExhdHZpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5MYXR2aWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuTGF0dmlhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkxhdHZpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2x2JywgJ2x2LWx2JywgJ2xhdHZpYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBEdXRjaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIER1dGNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRHV0Y2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5EdXRjaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnSmFyZW4nLFxuICAgICdtb250aHMnICA6ICdNYWFuZGVuJyxcbiAgICAnZGF5cycgICAgOiAnRGFnZW4nLFxuICAgICdob3VycycgICA6ICdVcmVuJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlbicsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVuJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5EdXRjaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBOb3J3ZWdpYW4tQm9rbcOlbCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbi1Cb2ttw6VsIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuTm9yd2VnaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuTm9yd2VnaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2VyJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Ob3J3ZWdpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25vJywgJ25iJywgJ25vLW5iJywgJ25vcndlZ2lhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFBvbGlzaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvbGlzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlBvbGlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBvbGlzaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0xhdCcsXG5cdCdtb250aHMnICA6ICdNaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnRG5pJyxcblx0J2hvdXJzJyAgIDogJ0dvZHppbnknLFxuXHQnbWludXRlcycgOiAnTWludXR5Jyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBvbGlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUG9ydHVndWVzZSBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5Qb3J0dWd1ZXNlXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUG9ydHVndWVzZVxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0Fub3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRGlhcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Qb3J0dWd1ZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwdCcsICdwdC1icicsICdwb3J0dWd1ZXNlJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUm9tYW5pYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSb21hbmlhbiBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlJvbWFuaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUm9tYW5pYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycyc6ICdBbmknLFxuXHQnbW9udGhzJzogJ0x1bmknLFxuXHQnZGF5cyc6ICdaaWxlJyxcblx0J2hvdXJzJzogJ09yZScsXG5cdCdtaW51dGVzJzogJ01pbnV0ZScsXG5cdCdzZWNvbmRzJzogJ3NTZWN1bmRlJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Sb21hbmlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncm8nLCAncm8tcm8nLCAncm9tYW5hJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFJ1c3NpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5SdXNzaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUnVzc2lhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5SdXNzaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydydScsICdydS1ydScsICdydXNzaWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgU2xvdmFrIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU2xvdmFrIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuU2xvdmFrXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuU2xvdmFrXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5TbG92YWtcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFN3ZWRpc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuU3dlZGlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlN3ZWRpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmFkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnYXInLFxuXHQnaG91cnMnICAgOiAnVGltbWFyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlN3ZWRpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3N2JywgJ3N2LXNlJywgJ3N3ZWRpc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBUaGFpIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVGhhaSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlRoYWlcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UaGFpXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlRoYWlcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3RoJywgJ3RoLXRoJywgJ3RoYWknXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBUdXJraXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHVya2lzaCBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlR1cmtpc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UdXJraXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWcSxbCcsXG5cdCdtb250aHMnICA6ICdBeScsXG5cdCdkYXlzJyAgICA6ICdHw7xuJyxcblx0J2hvdXJzJyAgIDogJ1NhYXQnLFxuXHQnbWludXRlcycgOiAnRGFraWthJyxcblx0J3NlY29uZHMnIDogJ1Nhbml5ZSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuVHVya2lzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFVrcmFpbmlhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlVrcmFpbmlhblxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlVrcmFpbmlhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0YDQvtC60LgnLFxuICAgICdtb250aHMnICA6ICfQvNGW0YHRj9GG0ZYnLFxuICAgICdkYXlzJyAgICA6ICfQtNC90ZYnLFxuICAgICdob3VycycgICA6ICfQs9C+0LTQuNC90LgnLFxuICAgICdtaW51dGVzJyA6ICfRhdCy0LjQu9C40L3QuCcsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtNC4J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Va3JhaW5pYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3VhJywgJ3VhLXVhJywgJ3VrcmFpbmUnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBWaWV0bmFtZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVmlldG5hbWVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlZpZXRuYW1lc2VcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5WaWV0bmFtZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnTsSDbScsXG5cdCdtb250aHMnICA6ICdUaMOhbmcnLFxuXHQnZGF5cycgICAgOiAnTmfDoHknLFxuXHQnaG91cnMnICAgOiAnR2nhu50nLFxuXHQnbWludXRlcycgOiAnUGjDunQnLFxuXHQnc2Vjb25kcycgOiAnR2nDonknXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlZpZXRuYW1lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3ZuJywgJ3ZuLXZuJywgJ3ZpZXRuYW1lc2UnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkNoaW5lc2VcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DaGluZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poJywgJ3poLWNuJywgJ2NoaW5lc2UnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBUcmFkaXRpb25hbCBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHJhZGl0aW9uYWwgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlRyYWRpdGlvbmFsQ2hpbmVzZVxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlRyYWRpdGlvbmFsQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UcmFkaXRpb25hbENoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzXG4gKi9cbmltcG9ydCAqIGFzIEFyYWJpYyBmcm9tICcuL2FyLWFyJztcbmltcG9ydCAqIGFzIENhdGFsYW4gZnJvbSAnLi9jYS1lcyc7XG5pbXBvcnQgKiBhcyBDemVjaCBmcm9tICcuL2NzLWN6JztcbmltcG9ydCAqIGFzIERhbmlzaCBmcm9tICcuL2RhLWRrJztcbmltcG9ydCAqIGFzIEdlcm1hbiBmcm9tICcuL2RlLWRlJztcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSAnLi9lbi11cyc7XG5pbXBvcnQgKiBhcyBTcGFuaXNoIGZyb20gJy4vZXMtZXMnO1xuaW1wb3J0ICogYXMgUGVyc2lhbiBmcm9tICcuL2ZhLWlyJztcbmltcG9ydCAqIGFzIEZpbm5pc2ggZnJvbSAnLi9maS1maSc7XG5pbXBvcnQgKiBhcyBGcmVuY2ggZnJvbSAnLi9mci1jYSc7XG5pbXBvcnQgKiBhcyBIZWJyZXcgZnJvbSAnLi9oZS1pbCc7XG5pbXBvcnQgKiBhcyBIdW5nYXJpYW4gZnJvbSAnLi9odS1odSc7XG5pbXBvcnQgKiBhcyBJdGFsaWFuIGZyb20gJy4vaXQtaXQnO1xuaW1wb3J0ICogYXMgSmFwYW5lc2UgZnJvbSAnLi9qYS1qcCc7XG5pbXBvcnQgKiBhcyBLb3JlYW4gZnJvbSAnLi9rby1rcic7XG5pbXBvcnQgKiBhcyBMYXR2aWFuIGZyb20gJy4vbHYtbHYnO1xuaW1wb3J0ICogYXMgRHV0Y2ggZnJvbSAnLi9ubC1iZSc7XG5pbXBvcnQgKiBhcyBOb3J3ZWdpYW4gZnJvbSAnLi9uby1uYic7XG5pbXBvcnQgKiBhcyBQb2xpc2ggZnJvbSAnLi9wbC1wbCc7XG5pbXBvcnQgKiBhcyBQb3J0dWd1ZXNlIGZyb20gJy4vcHQtYnInO1xuaW1wb3J0ICogYXMgUm9tYW5pYW4gZnJvbSAnLi9yby1ybyc7XG5pbXBvcnQgKiBhcyBSdXNzaWFuIGZyb20gJy4vcnUtcnUnO1xuaW1wb3J0ICogYXMgU2xvdmFrIGZyb20gJy4vc2stc2snO1xuaW1wb3J0ICogYXMgU3dlZGlzaCBmcm9tICcuL3N2LXNlJztcbmltcG9ydCAqIGFzIFRoYWkgZnJvbSAnLi90aC10aCc7XG5pbXBvcnQgKiBhcyBUdXJraXNoIGZyb20gJy4vdHItdHInO1xuaW1wb3J0ICogYXMgVWtyYWluaWFuIGZyb20gJy4vdWEtdWEnO1xuaW1wb3J0ICogYXMgVmlldG5hbWVzZSBmcm9tICcuL3ZuLXZuJztcbmltcG9ydCAqIGFzIENoaW5lc2UgZnJvbSAnLi96aC1jbic7XG5pbXBvcnQgKiBhcyBUcmFkaXRpb25hbENoaW5lc2UgZnJvbSAnLi96aC10dyc7XG5cbmV4cG9ydCB7XG4gICAgQXJhYmljLFxuICAgIENhdGFsYW4sXG4gICAgQ3plY2gsXG4gICAgRGFuaXNoLFxuICAgIEdlcm1hbixcbiAgICBFbmdsaXNoLFxuICAgIFNwYW5pc2gsXG4gICAgUGVyc2lhbixcbiAgICBGaW5uaXNoLFxuICAgIEZyZW5jaCxcbiAgICBIZWJyZXcsXG4gICAgSHVuZ2FyaWFuLFxuICAgIEl0YWxpYW4sXG4gICAgSmFwYW5lc2UsXG4gICAgS29yZWFuLFxuICAgIExhdHZpYW4sXG4gICAgRHV0Y2gsXG4gICAgTm9yd2VnaWFuLFxuICAgIFBvbGlzaCxcbiAgICBQb3J0dWd1ZXNlLFxuICAgIFJvbWFuaWFuLFxuICAgIFJ1c3NpYW4sXG4gICAgU2xvdmFrLFxuICAgIFN3ZWRpc2gsXG4gICAgVGhhaSxcbiAgICBUdXJraXNoLFxuICAgIFVrcmFpbmlhbixcbiAgICBWaWV0bmFtZXNlLFxuICAgIENoaW5lc2UsXG4gICAgVHJhZGl0aW9uYWxDaGluZXNlXG59XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5MYW5ndWFnZVxuICovXG5pbXBvcnQgKiBhcyBMQU5HVUFHRVMgZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhbmd1YWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5LiBSZXR1cm5zIGBudWxsYCBpZiBubyBsYW5ndWFnZSBpc1xuICogZm91bmQuXG4gKiBcbiAqIEBmdW5jdGlvbiBsYW5ndWFnZVxuICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb3IgaWQgb2YgdGhlIGxhbmd1YWdlLlxuICogQHJldHVybiB7b2JqZWN0fG51bGx9IC0gVGhlIGxhbmd1YWdlIGRpY3Rpb25hcnksIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuTGFuZ3VhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFuZ3VhZ2UobmFtZSkge1xuICAgIHJldHVybiBuYW1lID8gTEFOR1VBR0VTW25hbWUudG9Mb3dlckNhc2UoKV0gfHwgT2JqZWN0LnZhbHVlcyhMQU5HVUFHRVMpLmZpbmQodmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUuYWxpYXNlcy5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9KSA6IG51bGw7XG59XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5UcmFuc2xhdGVcbiAqL1xuaW1wb3J0IGxhbmd1YWdlIGZyb20gJy4vTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogVHJhbnNsYXRlIGFuIEVuZ2xpc2ggc3RyaW5nIGludG8gYW5vdGhlciBsYW5ndWFnZS5cbiAqIFxuICogQGZ1bmN0aW9uIHRyYW5zbGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmcgdG8gdHJhbnNsYXRlLlxuICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGZyb20gLSBUaGUgbGFuZ3VhZ2UgdXNlZCB0byB0cmFuc2xhdGUuIElmIGEgc3RyaW5nLFxuICogICAgIHRoZSBsYW5ndWFnZSBpcyBsb2FkZWQgaW50byBhbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gSWYgbm8gZGljdGlvbiBrZXkgaXMgZm91bmQsIHRoZSB1bnRyYW5zbGF0ZWQgc3RyaW5nIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5UcmFuc2xhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRlKHN0cmluZywgZnJvbSkge1xuICAgIGNvbnN0IGxhbmcgPSBpc1N0cmluZyhmcm9tKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbTtcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0gbGFuZy5kaWN0aW9uYXJ5IHx8IGxhbmc7XG4gICAgcmV0dXJuIGRpY3Rpb25hcnlbc3RyaW5nXSB8fCBzdHJpbmc7XG59O1xuIiwiLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRvIG1hbmFnZSBET00gbm9kZXMgYW5kIHRoZW1lIHRlbXBsYXRlcy5cbiAqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuVGVtcGxhdGVcbiAqL1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogU3dhcCBhIG5ldyBET00gbm9kZSB3aXRoIGFuIGV4aXN0aW5nIG9uZS5cbiAqXG4gKiBAZnVuY3Rpb24gc3dhcFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHN1YmplY3QgLSBUaGUgbmV3IERPTSBub2RlLlxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGV4aXN0aW5nIC0gVGhlIGV4aXN0aW5nIERPTSBub2RlLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gUmV0dXJucyB0aGUgbmV3IGVsZW1lbnQgaWYgaXQgd2FzIG1vdW50ZWQsIG90aGVyd2lzZVxuICogICAgdGhlIGV4aXN0aW5nIG5vZGUgaXMgcmV0dXJuZWQuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5UZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhcChzdWJqZWN0LCBleGlzdGluZykge1xuXHRpZihleGlzdGluZy5wYXJlbnROb2RlKSB7XG5cdFx0ZXhpc3RpbmcucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3ViamVjdCwgZXhpc3RpbmcpO1xuXG5cdFx0cmV0dXJuIHN1YmplY3Q7XG5cdH1cblxuXHRyZXR1cm4gZXhpc3Rpbmc7XG59XG5cbi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAZnVuY3Rpb24gc2V0QXR0cmlidXRlc1xuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIERPTSBub2RlIHRoYXQgd2lsbCByZWNlaXZlIHRoZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZSBvYmplY3QsIG9yIGlmIG5vIG9iamVjdFxuICogICAgIGlzIHBhc3NlZCwgdGhlbiB0aGUgYWN0aW9uIGlzIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCByZWNlaXZlZCB0aGUgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBBcHBlbmQgYW4gYXJyYXkgb2YgRE9NIG5vZGVzIHRvIGEgcGFyZW50LlxuICpcbiAqIEBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlblxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIHBhcmVudCBET00gbm9kZS5cbiAqIEBwYXJhbSAge0FycmF5fHVuZGVmaW5lZH0gW2NoaWxkcmVuXSAtIFRoZSBhcnJheSBvZiBjaGlsZHJlbi4gSWYgbm8gYXJyYXlcbiAqICAgICBpcyBwYXNzZWQsIHRoZW4gdGhlIG1ldGhvZCBzaWxlbnRseSBmYWlscyB0byBydW4uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCByZWNlaXZlZCB0aGUgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pIHtcblx0aWYoaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5maWx0ZXIobm9vcCkuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRpZihjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgSFRNTEVsZW1lbnQgaW5zdGFuY2UuXG4gKlxuICogQGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBwYXJlbnQgRE9NIG5vZGUuXG4gKiBAcGFyYW0gIHtBcnJheXx1bmRlZmluZWR9IFtjaGlsZHJlbl0gLSBUaGUgYXJyYXkgb2YgY2hpbGRyZW4uIElmIG5vIGFycmF5XG4gKiAgICAgaXMgcGFzc2VkLCB0aGVuIHRoZSBtZXRob2Qgc2lsZW50bHkgZmFpbHMgdG8gcnVuLlxuICogQHBhcmFtICB7T2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIERPTSBub2RlIHRoYXQgcmVjZWl2ZWQgdGhlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5UZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbCwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMpIHtcblx0aWYoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG5cdH1cblxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBpc09iamVjdChjaGlsZHJlbikgPyBjaGlsZHJlbiA6IGF0dHJpYnV0ZXMpO1xuXG5cdGlmKCFpc09iamVjdChjaGlsZHJlbikgJiYgIWlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0ZWwuaW5uZXJIVE1MID0gY2hpbGRyZW47XG5cdH1cblx0ZWxzZSB7XG5cdFx0YXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi4vSGVscGVycy9MYW5ndWFnZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL0hlbHBlcnMvVHJhbnNsYXRlJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgc3dhcCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgb3RoZXIgRE9NIGNvbXBvbmVudHMgY2FuIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBEb21Db21wb25lbnRcbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGhlbWUpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIHRoZW1lIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgbGFuZ3VhZ2UgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG5cdFx0aWYoIXRoaXMudGhlbWVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX0gY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbXBvbmVudCdzIHRvcCBsZXZlbCBET00gbm9kZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBgZWxgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbXBvbmVudCdzIHRvcCBsZXZlbCBET00gbm9kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyhudWxsfEhUTUxFbGVtZW50KX0gdmFsdWUgLSBUaGUgYGVsYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBudWxsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgcGFyZW50YCBhdHRyaWJ1dGUuIFBhcmVudCBpcyBzZXQgd2hlbiBgRG9tQ29tcG9uZW50YCBpbnN0YW5jZXMgYXJlXG4gICAgICogbW91bnRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0RvbUNvbXBvbmVudH0gLSBUaGUgYHBhcmVudGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwYXJlbnQgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9tQ29tcG9uZW50fSBwYXJlbnQgLSBUaGUgYHBhcmVudGAgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0RvbUNvbXBvbmVudH0gLSBUaGUgYHBhcmVudGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBwYXJlbnQocGFyZW50KSB7XG4gICAgICAgIHRoaXMuJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGB0aGVtZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7RG9tQ29tcG9uZW50fSAtIFRoZSBgdGhlbWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdGhlbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aGVtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGB0aGVtZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBgdGhlbWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB0aGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRoZW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGBsYW5ndWFnZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBsYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxhbmd1YWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBgbGFuZ3VhZ2VgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGBsYW5ndWFnZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBsYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZihpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbGFuZ3VhZ2UodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRsYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZSBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byB0cmFuc2xhdGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB0cmFuc2xhdGVkIHN0cmluZy4gSWYgbm8gdHJhbmxhdGlvbiBmb3VuZCwgdGhlXG4gICAgICogICAgIHVudHJhbnNsYXRlZCBzdHJpbmcgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHN0cmluZykge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlKHN0cmluZywgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgdG8gdHJhbnNsYXRlKHN0cmluZyk7XG4gICAgICpcbiAgICAgKiBAYWxpYXMgRG9tQ29tcG9uZW50LnRyYW5zbGF0ZVxuICAgICAqL1xuICAgIHQoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShzdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgRE9NIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBgZWxgIGF0dHJpYnV0ZS5cbiAgICAgKi9cblx0cmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSA9PT0gJ2ZsaXAtY2xvY2snID8gdGhpcy5jbGFzc05hbWUgOiAnZmxpcC1jbG9jay0nICsgdGhpcy5jbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aGVtZVt0aGlzLm5hbWVdKGVsLCB0aGlzKTtcblxuICAgICAgICBpZighdGhpcy5lbCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5lbC5pbm5lckhUTUwgIT09IGVsLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHN3YXAoZWwsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IGEgRE9NIGNvbXBvbmVudCB0byBhIHBhcmVudCBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHBhcmVudCAtIFRoZSBwYXJlbnQgRE9NIG5vZGUuXG4gICAgICogQHBhcmFtICB7KGZhbHNlfEhUTUxFbGVtZW50KX0gW2JlZm9yZT1mYWxzZV0gLSBJZiBgZmFsc2VgLCBlbGVtZW50IGlzXG4gICAgICogICAgIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgbm9kZS4gSWYgYW4gaW5zdGFuY2Ugb2YgYW4gYEhUTUxFbGVtZW50YCxcbiAgICAgKiAgICAgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGluc2VydGVkIGJlZm9yZSB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGBlbGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIG1vdW50KHBhcmVudCwgYmVmb3JlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgaWYoIWJlZm9yZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGBEaXZpZGVyYCBpbnN0YW5jZS5cbiAqXG4gKiBUaGUgcHVycG9zZSBvZiB0aGlzIGNsYXNzIGlzIHRvIHJldHVybiBhIHVuaXF1ZSBjbGFzcyBuYW1lIHNvIHRoZSB0aGVtZSBjYW5cbiAqIHJlbmRlciBpdCBhcHByb3ByaWF0ZWx5LCBzaW5jZSBlYWNoIGBEb21Db21wb25lbnRgIGNhbiByZWNlaXZlIGl0cyBvd24gdGVtcGxhdGVcbiAqIGZyb20gdGhlIHRoZW1lLlxuICpcbiAqIEBjbGFzcyBEaXZpZGVyXG4gKiBAZXh0ZW5kcyBEb21Db21wb25lbnRcbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aWRlciBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byByZXByZXNlbnQgYSBzaW5nbGUgZGlnaXRzIGluIGEgYExpc3RgLlxuICAgICAqXG4gICAgICogQGNsYXNzIExpc3RJdGVtXG4gICAgICogQGV4dGVuZHMgRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsoTnVtYmVyfFN0cmluZyl9IHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBgTGlzdEl0ZW1gLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2LCAgfSBmcm9tICcuLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGlzT2JqZWN0LCAgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGFkZCBhIGRpZ2l0IHRvIHRoZSBjbG9jayBmYWNlLiBUaGlzIGNsYXNzIGlzIGNhbGxlZFxuICAgICAqIGBMaXN0YCBiZWNhdXNlIGl0IGNvbnRhaW5zIGEgbGlzdCBvZiBgTGlzdEl0ZW1gJ3Mgd2hpY2ggYXJlIHVzZWQgdG9cbiAgICAgKiBjcmVhdGUgZmxpcCBlZmZlY3RzLiBJbiB0aGUgY29udGV4dCBvZiBGbGlwQ2xvY2suanMgYSBgTGlzdGAgcmVwcmVzZW50c1xuICAgICAqIG9uZSBzaW5nbGUgZGlnaXQuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgTGlzdFxuICAgICAqIEBleHRlbmRzIERvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGxhYmVsIC0gVGhlIGFjdGl2ZSB2YWx1ZS4gSWYgYW4gb2JqZWN0LCBpdFxuICAgICAqIGlzIGFzc3VtZWQgdGhhdCBpdCBpcyB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7KE51bWJlcnxTdHJpbmcpfSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4geyhOdW1iZXJ8U3RyaW5nKX0gLSBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgaXRlbXNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyhOdW1iZXJ8U3RyaW5nKX0gLSBUaGUgYGl0ZW1zYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBgaXRlbXNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2FycmF5fSB2YWx1ZSAtIFRoZSBgaXRlbXNgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHsoTnVtYmVyfFN0cmluZyl9IC0gVGhlIGBpdGVtc2AgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBpdGVtcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRpdGVtcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYExpc3RJdGVtYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyhOdW1iZXJ8U3RyaW5nKX0gdmFsdWUgLSBUaGUgYExpc3RJdGVtYCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gIHsoT2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEByZXR1cm4ge0xpc3RJdGVtfSAtIFRoZSBpbnN0YW50aWF0ZWQgYExpc3RJdGVtYC5cbiAgICAgKi9cbiAgICBjcmVhdGVMaXN0SXRlbSh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIHRoaXMuJGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc0FycmF5IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gZ3JvdXAgdmFsdWVzIHdpdGhpbiBhIGNsb2NrIGZhY2UuIEhvdyB0aGUgZ3JvdXBzXG4gICAgICogYXJlIGRpc3BsYXllZCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSB0aGVtZS5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBHcm91cFxuICAgICAqIEBleHRlbmRzIERvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtcyAtIEFuIGFycmF5IGBMaXN0YCBpbnN0YW5jZXMgb3IgYW4gb2JqZWN0IG9mXG4gICAgICogICAgIGF0dHJpYnV0ZXMuIElmIG5vdCBhbiBhcnJheSwgYXNzdW1lZCB0byBiZSB0aGUgYXR0cmlidXRlcy5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1zLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgaXRlbXM6IGlzQXJyYXkoaXRlbXMpID8gaXRlbXMgOiBbXVxuICAgICAgICB9LCAoaXNPYmplY3QoaXRlbXMpID8gaXRlbXMgOiBudWxsKSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGFkZCBhIGxhYmVsIHRvIHRoZSBjbG9jayBmYWNlLlxuICAgICAqXG4gICAgICogQGNsYXNzIExhYmVsXG4gICAgICogQGV4dGVuZHMgRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0gbGFiZWwgLSBUaGUgbGFiZWwgYXR0cmlidXRlLiBJZiBhbiBvYmplY3QsXG4gICAgICogICAgIGl0IGlzIGFzc3VtZWQgdGhhdCBpdCBpcyB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0sIChpc09iamVjdChsYWJlbCkgPyBsYWJlbCA6IG51bGwpLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc051bWJlciwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQGNsYXNzIFRpbWVyXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsoT2JqZWN0fE51bWJlcil9IGludGVydmFsIC0gVGhlIGludGVydmFsIHBhc3NlZCBhcyBhIGBOdW1iZXJgLFxuICAgICAqICAgICBvciBjYW4gc2V0IHRoZSBhdHRyaWJ1dGUgb2YgdGhlIGNsYXNzIHdpdGggYW4gb2JqZWN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGludGVydmFsKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBoYW5kbGU6IG51bGwsXG4gICAgICAgICAgICBzdGFydGVkOiBudWxsLFxuICAgICAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnZhbDogaXNOdW1iZXIoaW50ZXJ2YWwpID8gaW50ZXJ2YWwgOiBudWxsLFxuICAgICAgICB9LCBpc09iamVjdChpbnRlcnZhbCkgPyBpbnRlcnZhbCA6IG51bGwpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBlbGFwc2VkIHRoZSB0aW1lIGFzIGFuIGludGVyZ2VyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgYGVsYXBzZWRgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgZWxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhc3RMb29wID8gMCA6IHRoaXMubGFzdExvb3AgLSAoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPyB0aGlzLnN0YXJ0ZWQuZ2V0VGltZSgpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIHRoZSBgcnVubmluZ2AgcHJvcGVydHkgaXMgYHRydWVgXG4gICAgICovXG4gICAgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIG5vdCBydW5uaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCB0aGUgYHJ1bm5pbmdgIHByb3BlcnR5IGlzIGBmYWxzZWBcbiAgICAgKi9cbiAgICBnZXQgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7KEZ1bmN0aW9ufHVuZGVmaW5lZCl9IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge1RpbWVyfSAtIFRoZSBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge1RpbWVyfSAtIFRoZSBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlO1xuICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy5sYXN0TG9vcCA+PSB0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TG9vcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSB0aW1lci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBzdG9wIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge1RpbWVyfSAtIFRoZSBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBpcyBkZXNpZ25lZCB0byBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBudW1iZXJpYyB2YWx1ZXMsXG4gKiAgICAgbm90IGBEYXRlYCBvYmplY3RzLlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlLCB2YWx1ZSA9IDEpIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSB0aGlzLnZhbHVlLnZhbHVlICsgdmFsdWU7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlLCB2YWx1ZSA9IDEpIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSB0aGlzLnZhbHVlLnZhbHVlIC0gdmFsdWU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IHsgbm9vcCwgcm91bmQsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzTnVtYmVyLCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBpcyBtZWFudCB0byBkaXNwbGF5IGEgY2xvY2sgdGhhdCBzaG93cyBtaW51dGVzLCBhbmRcbiAqICAgICBzZWNvbmRzLlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWludXRlQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0xhYmVsczogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZFN0b3AoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYoaXNOdWxsKGluc3RhbmNlLnN0b3BBdCkgfHwgaXNVbmRlZmluZWQoaW5zdGFuY2Uuc3RvcEF0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdG9wQXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGRvd24gP1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0LmdldFRpbWUoKSA+PSB0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKTpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdC5nZXRUaW1lKCkgPD0gdGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc051bWJlcih0aGlzLnN0b3BBdCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLmZsb29yKCh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSAtIHRoaXMub3JpZ2luYWxWYWx1ZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZG93biA/XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQgPj0gZGlmZjpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdCA8PSBkaWZmO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgc3RvcEF0IHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRGF0ZSBvciBOdW1iZXIuYCk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlLCB2YWx1ZSA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSArIHZhbHVlICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5zdGFuY2UudGltZXIubGFzdExvb3ApKTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMCkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpIC0gdmFsdWUgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRlZCA9IGluc3RhbmNlLnRpbWVyLmlzUnVubmluZyA/IGluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNTApO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKHZhbHVlLCBzdGFydGVkKV0sXG4gICAgICAgICAgICB0aGlzLnNob3dTZWNvbmRzID8gW3RoaXMuZ2V0U2Vjb25kcyh2YWx1ZSwgc3RhcnRlZCldIDogbnVsbFxuICAgICAgICBdLmZpbHRlcihub29wKTtcbiAgICB9XG5cbiAgICBnZXRNaW51dGVzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjApO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoYSwgYikge1xuICAgICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoTWF0aC5jZWlsKHRvdGFsU2Vjb25kcyA9PT0gNjAgPyAwIDogdG90YWxTZWNvbmRzICUgNjApKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbFNlY29uZHMoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpID8gMCA6IE1hdGgucm91bmQoKGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgTWludXRlQ291bnRlciBmcm9tICcuL01pbnV0ZUNvdW50ZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzXG4gKiAgICAgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzLlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ckNvdW50ZXIgZXh0ZW5kcyBNaW51dGVDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0TWludXRlcyhhLCBiKSAlIDYwKTtcbiAgICB9XG5cbiAgICBnZXRIb3VycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgSG91ckNvdW50ZXIgZnJvbSAnLi9Ib3VyQ291bnRlcic7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBUaGlzIGZhY2UgaXMgbWVhbnQgdG8gZGlzcGxheSBhIGNsb2NrIHRoYXQgc2hvd3MgZGF5cywgaG91cnMsXG4gKiAgICAgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBIb3VyQ291bnRlclxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5Q291bnRlciBleHRlbmRzIEhvdXJDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0RGF5cyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0KTtcbiAgICB9XG5cbiAgICBnZXRIb3VycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRIb3VycyhhLCBiKSAlIDI0KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgeyBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBzaG93cyB0aGUgY3VycmVudCB0aW1lIGluIHR3ZW50eS1mb3VyIGhvdXIgZm9ybWF0LlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbnR5Rm91ckhvdXJDbG9jayBleHRlbmRzIEZhY2Uge1xuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0xhYmVsczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFtcbiAgICAgICAgICAgIFt2YWx1ZS5nZXRIb3VycygpXSxcbiAgICAgICAgICAgIFt2YWx1ZS5nZXRNaW51dGVzKCldXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goW3ZhbHVlLmdldFNlY29uZHMoKV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIG9mZnNldCA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSArIG9mZnNldCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgLSBvZmZzZXQgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBzaG93cyB0aGUgY3VycmVudCB0aW1lIGluIHR3ZWx2ZSBob3VyIGZvcm1hdCwgd2l0aCBBTVxuICogICAgIGFuZCBQTS5cbiAqIEBleHRlbmRzIEZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWx2ZUhvdXJDbG9jayBleHRlbmRzIFR3ZW50eUZvdXJIb3VyQ2xvY2sge1xuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd01lcmlkaXVtOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBob3VycyA9IHZhbHVlLmdldEhvdXJzKCk7XG5cdFx0Y29uc3QgZ3JvdXBzID0gW1xuXHRcdFx0aG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzKSxcblx0XHRcdHZhbHVlLmdldE1pbnV0ZXMoKVxuXHRcdF07XG5cbiAgICAgICAgdGhpcy5tZXJpZGl1bSA9IGhvdXJzID4gMTIgPyAncG0nIDogJ2FtJztcblxuXHRcdGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcblx0XHRcdGdyb3Vwcy5wdXNoKHZhbHVlLmdldFNlY29uZHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEYXlDb3VudGVyIGZyb20gJy4vRGF5Q291bnRlcic7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBUaGlzIGZhY2UgaXMgbWVhbnQgdG8gZGlzcGxheSBhIGNsb2NrIHRoYXQgc2hvd3Mgd2Vla3MsIGRheXMsXG4gKiAgICAgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzLlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vla0NvdW50ZXIgZXh0ZW5kcyBEYXlDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0V2Vla3MoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCAvIDcpO1xuICAgIH1cblxuICAgIGdldERheXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0RGF5cyhhLCBiKSAlIDcpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFdlZWtDb3VudGVyIGZyb20gJy4vV2Vla0NvdW50ZXInO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIHllYXJzLCB3ZWVrcyxcbiAqICAgICBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyQ291bnRlciBleHRlbmRzIFdlZWtDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRZZWFycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0WWVhcnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heCgwLCB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCAvIDcgLyA1MikpO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldFdlZWtzKGEsIGIpICUgNTIpO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBGYWNlcyBhcmUgY2xhc3NlcyB0aGF0IGhvb2sgaW50byB0aGUgY29yZSBvZiBGbGlwY2xvY2sgdG8gcHJvdmlkZSB1bmlxdWVcbiAqIGZ1bmN0aW9uYWxpdHkuIFRoZSBjb3JlIGRvZXNuJ3QgZG8gYSBsb3QsIGV4Y2VwdCBmYWNpbGl0YXRlIHRoZSBpbnRlcmFjdGlvblxuICogYmV0d2VlbiBhbGwgdGhlIGNvbXBvbmVudHMuIFRoZSBGYWNlIGlzIHdoYXQgbWFrZXMgdGhlIGNsb2NrIFwidGlja1wiLlxuICpcbiAqIEBuYW1lc3BhY2UgRmFjZXNcbiAqL1xuXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL0NvdW50ZXInO1xuaW1wb3J0IERheUNvdW50ZXIgZnJvbSAnLi9EYXlDb3VudGVyJztcbmltcG9ydCBIb3VyQ291bnRlciBmcm9tICcuL0hvdXJDb3VudGVyJztcbmltcG9ydCBNaW51dGVDb3VudGVyIGZyb20gJy4vTWludXRlQ291bnRlcic7XG5pbXBvcnQgVHdlbHZlSG91ckNsb2NrIGZyb20gJy4vVHdlbHZlSG91ckNsb2NrJztcbmltcG9ydCBUd2VudHlGb3VySG91ckNsb2NrIGZyb20gJy4vVHdlbnR5Rm91ckhvdXJDbG9jayc7XG5pbXBvcnQgV2Vla0NvdW50ZXIgZnJvbSAnLi9XZWVrQ291bnRlcic7XG5pbXBvcnQgWWVhckNvdW50ZXIgZnJvbSAnLi9ZZWFyQ291bnRlcic7XG5cbmV4cG9ydCB7XG4gICAgQ291bnRlcixcbiAgICBEYXlDb3VudGVyLFxuICAgIE1pbnV0ZUNvdW50ZXIsXG4gICAgSG91ckNvdW50ZXIsXG4gICAgVHdlbHZlSG91ckNsb2NrLFxuICAgIFR3ZW50eUZvdXJIb3VyQ2xvY2ssXG4gICAgV2Vla0NvdW50ZXIsXG4gICAgWWVhckNvdW50ZXJcbn1cbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZsaXAtY2xvY2stZG90IHRvcCd9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgYm90dG9tJ30pXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5mdW5jdGlvbiBjaGlsZChlbCwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWwgPyAoZWwuY2hpbGROb2RlcyA/IGVsLmNoaWxkTm9kZXNbaW5kZXhdIDogZWxbaW5kZXhdKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoYXIoZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5xdWVyeVNlbGVjdG9yKCcuZmxpcC1jbG9jay1saXN0LWl0ZW06Zmlyc3QtY2hpbGQgLnRvcCcpLmlubmVySFRNTCA6IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IHBhcnRzID0gaW5zdGFuY2UudmFsdWUuZGlnaXRzLm1hcCgoZ3JvdXAsIHgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbCA9IGNoaWxkKGluc3RhbmNlLmVsID8gaW5zdGFuY2UuZWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stZ3JvdXAnKSA6IG51bGwsIHgpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RzID0gZ3JvdXAubWFwKCh2YWx1ZSwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gY2hpbGQoZ3JvdXBFbCA/IGdyb3VwRWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stbGlzdCcpIDogbnVsbCwgeSk7XG4gICAgICAgICAgICBjb25zdCBsaXN0VmFsdWUgPSBjaGFyKGxpc3RFbCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVMaXN0KHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgZG9tVmFsdWU6IGxpc3RWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb3VudGRvd246IGluc3RhbmNlLmNvdW50ZG93bixcbiAgICAgICAgICAgICAgICBhbmltYXRpb25SYXRlOiBpbnN0YW5jZS5mYWNlLmFuaW1hdGlvblJhdGUgfHwgaW5zdGFuY2UuZmFjZS5kZWxheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVHcm91cChsaXN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlcyA9IHBhcnRzLm1hcChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBub2Rlcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBpdGVtcyA9IGluc3RhbmNlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaXRlbXMpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBpbnN0YW5jZS50KGluc3RhbmNlLmxhYmVsKTtcbn1cbiIsImltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RJdGVtJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGJlZm9yZVZhbHVlID0gaW5zdGFuY2UuZG9tVmFsdWUgfHwgKFxuICAgICAgICAhaW5zdGFuY2UuY291bnRkb3duID8gcHJldihpbnN0YW5jZS52YWx1ZSkgOiBuZXh0KGluc3RhbmNlLnZhbHVlKVxuICAgICk7XG5cbiAgICBpZiggaW5zdGFuY2UuZG9tVmFsdWUgJiYgaW5zdGFuY2UuZG9tVmFsdWUgIT09IGluc3RhbmNlLnZhbHVlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcbiAgICBlbC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcblxuICAgIGluc3RhbmNlLml0ZW1zID0gW1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShpbnN0YW5jZS52YWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShiZWZvcmVWYWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KVxuICAgIF07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5yZW5kZXIoKSkpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gaW5zdGFuY2UuYWN0aXZlID09PSB0cnVlID8gJ2FjdGl2ZScgOiAoXG4gICAgICAgIGluc3RhbmNlLmFjdGl2ZSA9PT0gZmFsc2UgPyAnYmVmb3JlJyA6IG51bGxcbiAgICApO1xuXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ3RvcCd9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGluc3RhbmNlLnZhbHVlLCB7Y2xhc3M6ICdib3R0b20nfSlcbiAgICAgICAgXSwge2NsYXNzOiAnZmxpcC1jbG9jay1saXN0LWl0ZW0taW5uZXInfSlcbiAgICBdKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2RheXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIH1cbiAgICBcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayhlbCwgaW5zdGFuY2UpO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TWVyaWRpdW0gJiYgaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGluc3RhbmNlLmNyZWF0ZUxhYmVsKGluc3RhbmNlLmZhY2UubWVyaWRpdW0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5jaGlsZE5vZGVzW2VsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGFiZWwubW91bnQocGFyZW50KS5jbGFzc0xpc3QuYWRkKCdmbGlwLWNsb2NrLW1lcmlkaXVtJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s3XSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzldKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3llYXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzhdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMTBdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgRmxpcENsb2NrIGZyb20gJy4vRmxpcENsb2NrJztcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgKiBhcyBmYWNlcyBmcm9tICcuL0ZhY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgRmxpcENsb2NrLFxuICAgIEdyb3VwLFxuICAgIExhYmVsLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgZmFjZXNcbn07XG4iLCJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IHsgT3JpZ2luYWwgfSBmcm9tICcuLi9UaGVtZXMnO1xuaW1wb3J0IHsgRW5nbGlzaCB9IGZyb20gJy4uL0xhbmd1YWdlcyc7XG5cbi8qKlxuICogQGFsaWFzIERlZmF1bHRWYWx1ZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOkNvbmZpZy9EZWZhdWx0VmFsdWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiBDb3VudGVyLFxuICAgIHRoZW1lOiBPcmlnaW5hbCxcbiAgICBsYW5ndWFnZTogRW5nbGlzaFxufTtcbiIsImltcG9ydCBGYWNlIGZyb20gJy4vRmFjZSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCAqIGFzIEZhY2VzIGZyb20gJy4uL0ZhY2VzJztcbmltcG9ydCBGYWNlVmFsdWUgZnJvbSAnLi9GYWNlVmFsdWUnO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgRGVmYXVsdFZhbHVlcyBmcm9tICcuLi9Db25maWcvRGVmYXVsdFZhbHVlcyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgZmxhdHRlbiwgaXNTdHJpbmcsIGlzT2JqZWN0LCBpc1VuZGVmaW5lZCwgaXNGdW5jdGlvbiwgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsaXBDbG9jayBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgRmxpcENsb2NrXG4gICAgICogQGV4dGVuZHMgRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgdG8gYmluZCBjbG9jayBET00gbm9kZS5cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjbG9jayBmYWNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZShlbCwgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc09iamVjdCh2YWx1ZSkgJiYgIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZmFjZSA9IGF0dHJpYnV0ZXMuZmFjZSB8fCBEZWZhdWx0VmFsdWVzLmZhY2U7XG5cbiAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuZmFjZTtcblxuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIG9yaWdpbmFsVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgdGhlbWU6IERlZmF1bHRWYWx1ZXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogRGVmYXVsdFZhbHVlcy5sYW5ndWFnZSxcbiAgICAgICAgICAgIHRpbWVyOiBUaW1lci5tYWtlKGF0dHJpYnV0ZXMuaW50ZXJ2YWwgfHwgMTAwMCksXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy5mYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2UgPSBmYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3VudChlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjbG9jayBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGYWNlfSBUaGUgYGZhY2VgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2xvY2sgYEZhY2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb258RmFjZXxzdHJpbmd9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBmYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgW0ZhY2UsICdzdHJpbmcnLCAnZnVuY3Rpb24nXSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGZhY2UgPSAoRmFjZXNbdmFsdWVdIHx8IHZhbHVlKS5tYWtlKE9iamVjdC5hc3NpZ24odGhpcy5nZXRQdWJsaWNBdHRyaWJ1dGVzKCksIHtcbiAgICAgICAgICAgIG9yaWdpbmFsVmFsdWU6IHRoaXMuZmFjZSA/IHRoaXMuZmFjZS5vcmlnaW5hbFZhbHVlIDogdW5kZWZpbmVkXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRmYWNlLmluaXRpYWxpemVkKHRoaXMpO1xuXG4gICAgICAgIGlmKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJGZhY2UudmFsdWUgPSB0aGlzLmZhY2UuY3JlYXRlRmFjZVZhbHVlKHRoaXMsIHRoaXMudmFsdWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsICYmIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgc3RvcEF0YCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfSBUaGUgYHN0b3BBdGAgdmFsdWUuXG4gICAgICovXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhpcy4kc3RvcEF0KSA/IHRoaXMuJHN0b3BBdCh0aGlzKSA6IHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBzdG9wQXRgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGBzdG9wQXRgIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHN0b3BBdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9wQXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtUaW1lcn0gVGhlIGB0aW1lcmAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCB0aW1lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRpbWVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYFRpbWVyYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1RpbWVyfSB0aW1lciAtIFRoZSBgdGltZXJgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB0aW1lcih0aW1lcikge1xuICAgICAgICBpZighdmFsaWRhdGUodGltZXIsIFRpbWVyKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRpbWVyID0gdGltZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgdGhlIGNsb2NrJ3MgYEZhY2VWYWx1ZWAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGYWNlVmFsdWV8bnVsbH0gVGhlIGBGYWNlVmFsdWVgIGlmIHNldCwgb3RoZXJ3aXNlIGBudWxsYC5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UgPyB0aGlzLmZhY2UudmFsdWUgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gc2V0IHRoZSBjbG9jaydzIGBGYWNlVmFsdWVgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXRoaXMuZmFjZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGZhY2UgbXVzdCBiZSBzZXQgYmVmb3JlIHNldHRpbmcgYSB2YWx1ZS4nKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdGhpcy5mYWNlLnZhbHVlLmNsb25lKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS5jcmVhdGVGYWNlVmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3JpZ2luYWwgdmFsdWUgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgYG9yaWdpbmFsVmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgb3JpZ2luYWxWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlzRnVuY3Rpb24odGhpcy4kb3JpZ2luYWxWYWx1ZSkgJiYgIXRoaXMuJG9yaWdpbmFsVmFsdWUubmFtZVxuICAgICAgICApID8gdGhpcy4kb3JpZ2luYWxWYWx1ZSgpIDogKHRoaXMuJG9yaWdpbmFsVmFsdWUgfHwgKHRoaXMuZmFjZSA/IHRoaXMuZmFjZS5kZWZhdWx0VmFsdWUoKSA6IG51bGwpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIG9yaWdpbmFsIHZhbHVlIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGBvcmlnaW5hbFZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgb3JpZ2luYWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW91bnQgdGhlIGNsb2NrIHRvIHRoZSBwYXJlbnQgRE9NIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBwYXJlbnQgYEhUTUxFbGVtZW50YC5cbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG1vdW50KGVsKSB7XG4gICAgICAgIHN1cGVyLm1vdW50KGVsKTtcblxuICAgICAgICB0aGlzLmZhY2UubW91bnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsb2NrJ3MgRE9NIG5vZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBwYXJlbnQgYEhUTUxFbGVtZW50YC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHBhcmVudCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBmYWNlIGhhcyBhIHJlbmRlciBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgYSBmYWNlIHRvIGNvbXBsZXRlbHkgcmUtcmVuZGVyIG9yIGFkZCB0byB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGZhY2Ugc3BlY2lmaWMgaW50ZXJmYWNlcyBmb3IgYSB0aGVtZS5cbiAgICAgICAgaWYodGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKHRoaXMuZWwsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFzcyB0aGUgY2xvY2sgaW5zdGFuY2UgdG8gdGhlIHJlbmRlcmVkKCkgZnVuY3Rpb24gb24gdGhlIGZhY2UuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGdsb2JhbCBtb2RpZmljYXRpb25zIHRvIHRoZSByZW5kZXJlZCB0ZW1wbGF0ZXMgbm90XG4gICAgICAgIC8vIHRoZW1lIHNwZWNpZmljLlxuICAgICAgICB0aGlzLmZhY2UucmVuZGVyZWQodGhpcyk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSByZW5kZXJlZCBgSFRNTEVsZW1lbnRgLlxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgaW50ZXJ2YWwgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzdGFydChmbikge1xuICAgICAgICBpZighdGhpcy50aW1lci5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNVbmRlZmluZWQodGhpcy5mYWNlLnN0b3BBdCkgJiYgKHRoaXMuZmFjZS5zdG9wQXQgPSB0aGlzLnN0b3BBdCk7XG4gICAgICAgIGlzVW5kZWZpbmVkKHRoaXMuZmFjZS5vcmlnaW5hbFZhbHVlKSAmJiAodGhpcy5mYWNlLm9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUpO1xuXG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlLmludGVydmFsKHRoaXMsIGZuKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZhY2Uuc3RhcnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgdGhlIGNsb2NrLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIHN0b3AgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzdG9wKGZuKSB7XG4gICAgICAgIHRoaXMudGltZXIuc3RvcChmbik7XG4gICAgICAgIHRoaXMuZmFjZS5zdG9wcGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgY2xvY2sgdG8gdGhlIG9yaWdpbmFsIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgoKSA9PiB0aGlzLmludGVydmFsKHRoaXMsIGZuKSk7XG4gICAgICAgIHRoaXMuZmFjZS5yZXNldCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5jcmVtZW50IHRoZSBjbG9jaydzIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Knx1bmRlZmluZWR9IHZhbHVlIC0gSW5jcmVtZW50IHRoZSBjbG9jayBieSB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqICAgICBJZiBubyB2YWx1ZSBpcyBwYXNzZWQsIHRoZW4gdGhlIGRlZmF1bHQgaW5jcmVtZW50IGlzIGRldGVybWluZWQgYnlcbiAgICAgKiAgICAgdGhlIEZhY2UsIHdoaWNoIGlzIHVzdWFsbHkgYDFgLiAgICAgKlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgaW5jcmVtZW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS5pbmNyZW1lbnQodGhpcywgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZGVjcmVtZW50IHRoZSBjbG9jaydzIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Knx1bmRlZmluZWR9IHZhbHVlIC0gRGVjcmVtZW50IHRoZSBjbG9jayBieSB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqICAgICBJZiBubyB2YWx1ZSBpcyBwYXNzZWQsIHRoZW4gdGhlIGRlZmF1bHQgZGVjcmVtZW50IGlzIGRldGVybWluZWQgYnlcbiAgICAgKiAgICAgdGhlIGBGYWNlYCwgd2hpY2ggaXMgdXN1YWxseSBgMWAuXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBkZWNyZW1lbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLmRlY3JlbWVudCh0aGlzLCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgRGl2aWRlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBEaXZpZGVyYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtEaXZpZGVyfSAtIFRoZSBpbnN0YW50aWF0ZWQgRGl2aWRlci5cbiAgICAgKi9cbiAgICBjcmVhdGVEaXZpZGVyKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIERpdmlkZXIubWFrZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYExpc3RgLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYExpc3RgIHZhbHVlLlxuICAgICAqIEBwYXJhbSAge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBhdHRyaWJ1dGVzIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgYExpc3RgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0xpc3R9IC0gVGhlIGluc3RhbnRpYXRlZCBgTGlzdGAuXG4gICAgICovXG4gICAgY3JlYXRlTGlzdCh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gTGlzdC5tYWtlKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYExhYmVsYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGBMYWJlbGAgdmFsdWUuXG4gICAgICogQHBhcmFtICB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgTGFiZWxgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0xhYmVsfSAtIFRoZSBpbnN0YW50aWF0ZWQgYExhYmVsYC5cbiAgICAgKi9cbiAgICBjcmVhdGVMYWJlbCh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gTGFiZWwubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gaXRlbXMgLSBBbiBhcnJheSBvZiBgTGlzdGAgaXRlbXMgdG8gZ3JvdXAuXG4gICAgICogQHBhcmFtICB7R3JvdXB8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBHcm91cGAgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7R3JvdXB9IC0gVGhlIGluc3RhbnRpYXRlZCBgR3JvdXBgLlxuICAgICAqL1xuICAgIGNyZWF0ZUdyb3VwKGl0ZW1zLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBHcm91cC5tYWtlKGl0ZW1zLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZ2xvYmFsIGRlZmF1bHQgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gc2V0IHRoZSBkZWZhdWx0IGBGYWNlYCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZhY2V9IHZhbHVlIC0gVGhlIGRlZmF1bHQgYEZhY2VgIGNsYXNzLlRoaXMgc2hvdWxkIGJlIGFcbiAgICAgKiAgICAgY29uc3RydWN0b3IuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RGVmYXVsdEZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBGYWNlKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy5mYWNlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBzZXQgdGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgZGVmYXVsdCB0aGVtZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXREZWZhdWx0VGhlbWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aGVtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLnRoZW1lID0gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgZGVmYXVsdCBsYW5ndWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBkZWZhdWx0IGxhbmd1YWdlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhdGljIHNldERlZmF1bHRMYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJlcnJvciIsInN0cmluZyIsIkVycm9yIiwiY2FsbGJhY2siLCJmbiIsImlzRnVuY3Rpb24iLCJhcmdzIiwiY2FsbCIsInJvdW5kIiwidmFsdWUiLCJpc05lZ2F0aXZlWmVybyIsImlzTmVnYXRpdmUiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwidG9TdHJpbmciLCJub29wIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJjaGFpbiIsImJlZm9yZSIsImFmdGVyIiwiY29uY2F0TWFwIiwieCIsIm1hcCIsInJlZHVjZSIsInkiLCJjb25jYXQiLCJmbGF0dGVuIiwiZGVlcEZsYXR0ZW4iLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJJbmZpbml0eSIsImlzQ29uc3RydWN0b3IiLCJGdW5jdGlvbiIsIm5hbWUiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwidHlwZSIsImlzTnVtYmVyIiwiaXNOYU4iLCJrZWJhYkNhc2UiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJDb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRzIiwia2V5IiwiZm9yRWFjaCIsImV2ZW50IiwiYXBwbHkiLCJwdXNoIiwiZmlsdGVyIiwib2ZmIiwib24iLCJoYXNPd25Qcm9wZXJ0eSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJrZXlzIiwiZ2V0QXR0cmlidXRlcyIsIm1hdGNoIiwib2JqIiwic2V0QXR0cmlidXRlcyIsInZhbHVlcyIsImkiLCJjb25zdHJ1Y3RvciIsIiRldmVudHMiLCJkaWdpdGl6ZSIsIm9wdGlvbnMiLCJtaW5pbXVtRGlnaXRzIiwicHJlcGVuZExlYWRpbmdaZXJvIiwicHJlcGVuZCIsIm51bWJlciIsInNob3VsZFByZXBlbmRaZXJvIiwic3BsaXQiLCJkaWdpdHMiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwiUkFOR0VTIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsInN0cmluZ0Zyb21DaGFyQ29kZUJ5IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibmV4dCIsImNvbnZlcnRlZCIsInJhbmdlIiwiam9pbiIsInByZXYiLCJGYWNlVmFsdWUiLCJnZXRQdWJsaWNBdHRyaWJ1dGVzIiwiJGRpZ2l0cyIsIiR2YWx1ZSIsInZhbGlkYXRlIiwic3VjY2VzcyIsImFyZyIsIml0ZW1zIiwidGhlbWUiLCJsYW5ndWFnZSIsImRhdGUiLCJmYWNlIiwiZWxlbWVudCIsImZhY2VWYWx1ZSIsInRpbWVyIiwiRmFjZSIsImF1dG9TdGFydCIsImNvdW50ZG93biIsImFuaW1hdGlvblJhdGUiLCJkZWZhdWx0QXR0cmlidXRlcyIsImRlZmF1bHRWYWx1ZSIsImluc3RhbmNlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50Iiwic2hvdWxkU3RvcCIsInN0b3AiLCJlbWl0Iiwic3RvcEF0IiwiYW1vdW50IiwiaXNTdG9wcGVkIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnQiLCJtYWtlIiwiZGVmYXVsdERhdGFUeXBlIiwiY3JlYXRlRmFjZVZhbHVlIiwiJHN0b3BBdCIsIiRvcmlnaW5hbFZhbHVlIiwiZGljdGlvbmFyeSIsImFsaWFzZXMiLCJMQU5HVUFHRVMiLCJmaW5kIiwiaW5kZXhPZiIsInRyYW5zbGF0ZSIsImZyb20iLCJsYW5nIiwic3dhcCIsInN1YmplY3QiLCJleGlzdGluZyIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJlbCIsImFwcGVuZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJpbm5lckhUTUwiLCJEb21Db21wb25lbnQiLCJwYXJlbnQiLCJjbGFzcyIsImNsYXNzTmFtZSIsInJlbmRlciIsImluc2VydEJlZm9yZSIsIiRlbCIsIkNvbnNvbGVNZXNzYWdlcyIsIiRwYXJlbnQiLCIkdGhlbWUiLCIkbGFuZ3VhZ2UiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0IiwiaXRlbSIsIiRpdGVtcyIsIkdyb3VwIiwiTGFiZWwiLCJsYWJlbCIsIlRpbWVyIiwiaW50ZXJ2YWwiLCJjb3VudCIsImhhbmRsZSIsInN0YXJ0ZWQiLCJydW5uaW5nIiwiRGF0ZSIsImxhc3RMb29wIiwibm93IiwibG9vcCIsImlzUnVubmluZyIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImdldFRpbWUiLCJDb3VudGVyIiwiTWludXRlQ291bnRlciIsInNob3dTZWNvbmRzIiwic2hvd0xhYmVscyIsImRpZmYiLCJvcmlnaW5hbFZhbHVlIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJhIiwiYiIsImdldFRvdGFsU2Vjb25kcyIsInRvdGFsU2Vjb25kcyIsImFicyIsIkhvdXJDb3VudGVyIiwiZGF0YSIsImdldEhvdXJzIiwiRGF5Q291bnRlciIsImdldERheXMiLCJUd2VudHlGb3VySG91ckNsb2NrIiwiZ3JvdXBzIiwib2Zmc2V0IiwiVHdlbHZlSG91ckNsb2NrIiwic2hvd01lcmlkaXVtIiwiaG91cnMiLCJtZXJpZGl1bSIsIldlZWtDb3VudGVyIiwiZ2V0V2Vla3MiLCJZZWFyQ291bnRlciIsImdldFllYXJzIiwiaW5kZXgiLCJjaGlsZE5vZGVzIiwicXVlcnlTZWxlY3RvciIsInBhcnRzIiwiZ3JvdXAiLCJncm91cEVsIiwicXVlcnlTZWxlY3RvckFsbCIsImxpc3RzIiwibGlzdEVsIiwibGlzdFZhbHVlIiwiY3JlYXRlTGlzdCIsImRvbVZhbHVlIiwiZGVsYXkiLCJjcmVhdGVHcm91cCIsIm5vZGVzIiwidCIsImJlZm9yZVZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJhbmltYXRpb25EZWxheSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiY3JlYXRlTGlzdEl0ZW0iLCJhY3RpdmUiLCJjcmVhdGVEaXZpZGVyIiwibW91bnQiLCJjcmVhdGVMYWJlbCIsIkZsaXBDbG9jayIsImZhY2VzIiwiT3JpZ2luYWwiLCJFbmdsaXNoIiwiRGVmYXVsdFZhbHVlcyIsIm1vdW50ZWQiLCJyZW5kZXJlZCIsInN0b3BwZWQiLCJyZXNldCIsIiRmYWNlIiwiRmFjZXMiLCJ1bmRlZmluZWQiLCJpbml0aWFsaXplZCIsIiR0aW1lciIsImNsb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7Ozs7O0lBU0E7Ozs7Ozs7O0FBUUEsSUFBTyxTQUFTQSxLQUFULENBQWVDLE1BQWYsRUFBdUI7SUFDMUIsUUFBTUMsS0FBSyxDQUFDRCxNQUFELENBQVg7SUFDSDtJQUVEOzs7Ozs7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
