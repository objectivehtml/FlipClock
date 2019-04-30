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
          if (isFunction(this.$originalValue) && !this.$originalValue.name) {
            return this.$originalValue();
          }

          if (!isUndefined(this.$originalValue) && !isNull(this.$originalValue)) {
            return this.$originalValue;
          }

          return this.face ? this.face.defaultValue() : undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvSGVscGVycy9EaWdpdGl6ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2FyLWFyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jYS1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcm8tcm8uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3ZuLXZuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2luZGV4LmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvTGFuZ3VhZ2UuanMiLCIuLi9zcmMvanMvSGVscGVycy9UcmFuc2xhdGUuanMiLCIuLi9zcmMvanMvSGVscGVycy9UZW1wbGF0ZS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RvbUNvbXBvbmVudC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3QuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Hcm91cC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xhYmVsLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvVGltZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9NaW51dGVDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0hvdXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0RheUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvVHdlbnR5Rm91ckhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VsdmVIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvWWVhckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvaW5kZXguanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgaGVscGVyIGZ1bmN0aW9ucywgc29tZSBib3Jyb3dlZCBmcm9tIExvZGFzaCxcbiAqIFVuZGVyc2NvcmUsIGV0YywgdG8gcHJvdmlkZSBjb21tb24gZnVuY3Rpb25hbGl0eSB3aXRob3V0IHRoZSBuZWVkIGZvciB1c2luZ1xuICogYSBkZXBlbmRlbmN5LiBBbGwgb2YgdGhpcyBpcyBhbiBhdHRlbXB0IHRvIHJlZHVjZSB0aGUgZmlsZSBzaXplIG9mIHRoZVxuICogbGlicmFyeS5cbiAqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cblxuLyoqXG4gKiBUaHJvdyBhIHN0cmluZyBhcyBhbiBFcnJvciBleGNlcHRpb24uXG4gKlxuICogQGZ1bmN0aW9uIGVycm9yXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3Ioc3RyaW5nKSB7XG4gICAgdGhyb3cgRXJyb3Ioc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgZm5gIGlzIGEgZnVuY3Rpb24sIGFuZCBjYWxsIGl0IHdpdGggYHRoaXNgIGNvbnRleHQgYW5kIHBhc3MgdGhlXG4gKiBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmN0aW9uIGNhbGxiYWNrXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBjYWxsYmFjayBmbi5cbiAqIEBwYXJhbSAgey4uLip9IGFyZ3MgLSBUaGUgYXJndW1lbnRzIHRvIHBhc3MuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayhmbiwgLi4uYXJncykge1xuICAgIGlmKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSb3VuZCB0aGUgdmFsdWUgdG8gdGhlIGNvcnJlY3QgdmFsdWUuIFRha2VzIGludG8gYWNjb3VudCBuZWdhdGl2ZSBudW1iZXJzLlxuICpcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtICB7dmFsdWV9IHN0cmluZyAtIFRoZSB2YWx1ZSB0byByb3VuZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgcm91bmRlZCB2YWx1ZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZVplcm8oXG4gICAgICAgIHZhbHVlID0gaXNOZWdhdGl2ZSh2YWx1ZSkgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSlcbiAgICApID8gKCctJyArIHZhbHVlKS50b1N0cmluZygpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYHVuZGVmaW5lZCBvciBgbnVsbGAuXG4gKlxuICogQGZ1bmN0aW9uIG5vb3BcbiAqIEBwYXJhbSAge3ZhbHVlfSBzdHJpbmcgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIGB0cnVlYCBpZiBgdW5kZWZpbmVkIG9yIGBudWxsYC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHRoZSBgYmVmb3JlYCBhdHRyaWJ1dGUgYW5kIHBhc3NlcyB0aGF0IHZhbHVlXG4gKiB0byBgYWZ0ZXJgIGFuZCB0aGUgc3Vic2VxdWVudCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY3Rpb24gY2hhaW5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBiZWZvcmUgLSBUaGUgZmlyc3QgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBhZnRlciAtIFRoZSBzdWJzZXF1ZW50IGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIGNoYWluLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbihiZWZvcmUsIGFmdGVyKSB7XG4gICAgcmV0dXJuICgpID0+IGFmdGVyKGJlZm9yZSgpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIG1hcHMgdGhlIHZhbHVlcyBiZWZvcmUgY29uY2F0ZW5hdGluZyB0aGVtLlxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRNYXBcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBmbiAtIFRoZSBtYXAgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIG1hcCBhbmQgY29uY2F0ZW5hdGlvbi5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TWFwKGZuKSB7XG4gICAgcmV0dXJuIHggPT4ge1xuICAgICAgICByZXR1cm4geC5tYXAoZm4pLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKTtcbiAgICB9XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheS5cbiAqXG4gKiBAZnVuY3Rpb24gZmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh2YWx1ZSA9PiB2YWx1ZSkodmFsdWUpXG59XG5cbi8qKlxuICogRGVlcCBmbGF0dGVuIGFuIGFycmF5LlxuICpcbiAqIEBmdW5jdGlvbiBkZWVwRmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IEFycmF5LmlzQXJyYXkoeCkgPyBkZWVwRmxhdHRlbiAoeCkgOiB4KSh4KTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgaW4gYSBzdHJpbmcuXG4gKlxuICogQGZ1bmN0aW9uIHVjZmlyc3RcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVjZmlyc3Qoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgYSBkZWVwIGZsYXR0ZW4gYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGxlbmd0aFxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGNvdW50LlxuICogQHJldHVybiB7bnVtYmVyfSAtIFRoZSBsZW5ndGggb2YgdGhlIGRlZXAgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgodmFsdWUpIHtcbiAgICByZXR1cm4gZGVlcEZsYXR0ZW4odmFsdWUpLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBuZWdhdGl2ZSB6ZXJvLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlWmVyb1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgbmVnYXRpdmUgemVybyAoYC0wYCkuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKHZhbHVlKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLnJvdW5kKHZhbHVlKSA9PT0gLUluZmluaXR5O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIG5lZ2F0aXZlLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBuZWdhdGl2ZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlWmVybyh2YWx1ZSkgfHwgdmFsdWUgPCAwO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgbnVsbGAuXG4gKlxuICogQGZ1bmN0aW9uIGlzTnVsbFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGBudWxsYC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNOdWxsXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYHVuZGVmaW5lZGAuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgY29uc3RydWN0b3IuXG4gKlxuICogQGZ1bmN0aW9uIGlzQ29uc3RydWN0b3JcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBjb25zdHJ1Y3Rvci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgISF2YWx1ZS5uYW1lO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY3Rpb24gaXNTdHJpbmdcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGlzU3RyaW5nXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNPYmplY3RcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLkZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBpbnRvIGtlYmFiIGNhc2UuXG4gKlxuICogQGZ1bmN0aW9uIGtlYmFiQ2FzZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5GdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCwga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQWJzdHJhY3QgYmFzZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYG5hbWVgIGF0dHJpYnV0ZS4gVXNlcyB0aGUgYHRoaXMuY29uc3RydWN0b3IubmFtZWAgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgYG5hbWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBjbGFzc05hbWVgIGF0dHJpYnV0ZS4gVXNlZCBmb3IgQ1NTLiBLZWJhYiBjYXNlcyB0aGUgYG5hbWVgXG4gICAgICogcHJvcGVydHkgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgYGNsYXNzTmFtZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBldmVudHNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2FycmF5fSAtIFRoZSBgZXZlbnRzYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGV2ZW50cyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlZ2lzdGVyZWQgZXZlbnRzIGZvciB0aGlzIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIG5ldyBldmVudHMgYXJyYXkuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZXZlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXQgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGVtaXQoa2V5LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGV2ZW50IGlkL2tleS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gW29uY2U9ZmFsc2VdIC0gU2hvdWxkIHRoZSBldmVudCBoYW5kbGVyIGJlIGZpcmVkIGFcbiAgICAgKiAgICAgc2luZ2xlIHRpbWUuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG9uKGtleSwgZm4sIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBpZighdGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHNba2V5XS5wdXNoKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgZXZlbnQgaWQva2V5LlxuICAgICAqIEBwYXJhbSB7KEZ1bmN0aW9ufHVuZGVmaW5lZCl9IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBub1xuICAgICAqICAgICBmdW5jdGlvbiBpcyBkZWZpbmVkLCBhbGwgZXZlbnRzIHdpdGggdGhlIHNwZWNpZmllZCBpZC9rZXkgd2lsbCBiZVxuICAgICAqICAgICByZW1vdmVkLiBPdGhlcndpc2UsIG9ubHkgdGhlIGV2ZW50IGxpc3RlbmVycyBtYXRjaGluZyB0aGUgaWQva2V5IEFORFxuICAgICAqICAgICBjYWxsYmFjayB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGFuIGV2ZW50IG9ubHkgb25lIHRpbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBSZXR1cm5zIGB0aGlzYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBvbmNlKGtleSwgZm4pIHtcbiAgICAgICAgZm4gPSBjaGFpbihmbiwgKCkgPT4gdGhpcy5vZmYoa2V5LCBmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiBhdHRyaWJ1dGUuIFJldHVybnMgbnVsbCBpZiBubyBhdHRyaWJ1dGUgaXMgZGVmaW5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KGtleSkgPyB0aGlzW2tleV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIGF0dHRyaWJ1dGVzIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSBhdHRyaWJ1dGUgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9ubHkgcHVibGljIHRoZSBhdHR0cmlidXRlcyBmb3IgdGhpcyBpbnN0YW5jZS4gT21pdHMgYW55IGF0dHJpYnV0ZVxuICAgICAqIHRoYXQgc3RhcnRzIHdpdGggYCRgLCB3aGljaCBpcyB1c2VkIGludGVybmFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGF0dHJpYnV0ZSBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZSBrZXkgYW5kIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgLSBUaGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZXMgYnkgb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIC0gVGhlIG9iamVjdCBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBleGVjdXRlIHRoZSBgY2FsbGJhY2soKWAgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7Kn0gLSBSZXR1cm5zIHRoZSBleGVjdXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjYWxsYmFjayhmbikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIG1ldGhvZCB0byBzdGF0aWMgaW5zdGFudGlhdGUgbmV3IGluc3RhbmNlcy4gVXNlZnVsIGZvciB3cml0aW5nXG4gICAgICogY2xlYW4gZXhwcmVzc2l2ZSBzeW50YXggd2l0aCBjaGFpbmVkIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsuLi4qfSBhcmdzIC0gVGhlIGNhbGxiYWNrIGFyZ3VtZW50cy5cbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBuZXcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuRGlnaXRpemVcbiAqL1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIERpZ2l0aXplIGEgbnVtYmVyLCBzdHJpbmcsIG9yIGFuIGFycmF5IGludG8gYSBkaWdpdGl6ZWQgYXJyYXkuIFRoaXMgZnVuY3Rpb25cbiAqIHVzZSBieSB0aGUgYEZhY2VgLCB3aGljaCBjb252ZXJ0IHRoZSBkaWdpdGl6ZWQgYXJyYXkgaW50byBhbiBhcnJheSBvZiBgTGlzdGBcbiAqIGluc3RhbmNlcy5cbiAqXG4gKiBAZnVuY3Rpb24gZGlnaXRpemVcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGRpZ2l0aXplLlxuICogQHBhcmFtICB7KE9iamVjdHx1bmRlZmluZWQpfSBbb3B0aW9uc10gLSBUaGUgZGlnaXRpemVyIG9wdGlvbnMuXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZGlnaXRpemVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnMuRGlnaXRpemVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlnaXRpemUodmFsdWUsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG1pbmltdW1EaWdpdHM6IDAsXG4gICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZChudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlcGVuZFplcm8gPSBvcHRpb25zLnByZXBlbmRMZWFkaW5nWmVybyAmJlxuICAgICAgICAgICAgbnVtYmVyLnRvU3RyaW5nKCkuc3BsaXQoJycpLmxlbmd0aCA9PT0gMTtcblxuICAgICAgICByZXR1cm4gKHNob3VsZFByZXBlbmRaZXJvID8gJzAnIDogJycpLmNvbmNhdChudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZ2l0cyhhcnIsIG1pbikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBkZWVwRmxhdHRlbihhcnIpLmxlbmd0aDtcblxuICAgICAgICBpZihsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtaW4gLSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclswXS51bnNoaWZ0KCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiBkaWdpdHMoZmxhdHRlbihbdmFsdWVdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oZGVlcEZsYXR0ZW4oW251bWJlcl0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBlbmQobnVtYmVyKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pKTtcbiAgICB9KSwgb3B0aW9ucy5taW5pbXVtRGlnaXRzIHx8IDApO1xufVxuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIEhlbHBlcnMuVmFsdWVcbiAqL1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBtaW4vbWF4IHJhbmdlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge2FycmF5fVxuICovXG5jb25zdCBSQU5HRVMgPSBbe1xuICAgIC8vIDAtOVxuICAgIG1pbjogNDgsXG4gICAgbWF4OiA1N1xufSx7XG4gICAgLy8gYS16XG4gICAgbWluOiA2NSxcbiAgICBtYXg6IDkwXG59LHtcbiAgICAvLyBBLVpcbiAgICBtaW46IDk3LFxuICAgIG1heDogMTIyXG59XTtcblxuLyoqXG4gKiBGb3JtYXQgYSBzdHJpbmcgaW50byBhIG5ldyBkYXRhIHR5cGUuIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHN0cmluZyB0b1xuICogbnVtYmVyIGNvbnZlcnNpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb3JtYXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGRhdGEgdHlwZSAocmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcpIHVzZWQgdG9cbiAqICAgICBjb252ZXJ0IHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgdGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChzdHJpbmcsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIHJhbmdlIG9iamVjdCBmcm9tIHRoZSBgUkFOR0VTYCBjb25zdGFudCBmcm9tIHRoZSBjaGFyYWN0ZXIgZ2l2ZW4uXG4gKiBUaGlzIGlzIG1haW5seSBhbiBpbnRlcnZhbCBtZXRob2QsIGJ1dCBjYW4gYmUgdXNlZCBieSBmYWNlcyB0byBoZWxwXG4gKiBkZXRlcm1pbmUgd2hhdCB0aGUgbmV4dCB2YWx1ZSBvZiBhIHN0cmluZyBzaG91bGQgYmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb3JtYXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyIC0gVGhlIGNoYXIgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZGF0YSB0eXBlIChyZXByZXNlbnRlZCBhcyBhIHN0cmluZykgdXNlZCB0b1xuICogICAgIGNvbnZlcnQgdGhlIHN0cmluZy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyB0aGUgZm9ybWF0dGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiBSQU5HRVMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKFJBTkdFU1tpXS5taW4gPD0gY29kZSAmJiBSQU5HRVNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBSQU5HRVNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZnJvbSBhIGNoYXJhY3RlciBjb2RlLCB3aGljaCBpcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYWxsYmFjayBzdHJpbmdGcm9tQ2hhckNvZGVCeVxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSBUaGUgY2hhciB1c2VkIHRvIGRldGVybWluZSB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiByZWNlaXZlcyBgcmFuZ2VgIGFuZCBgY29kZWBcbiAqICAgICBhcmd1bWVudHMuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIGNoYXJhY3RlciBjb2RlLlxuICogQHJldHVybiB7c3RyaW5nfSAtIENyZWF0ZXMgYSBzdHJpbmcgZnJvbSB0aGUgY2hhcmFjdGVyIGNvZGUgcmV0dXJuZWQgYnkgdGhlXG4gKiAgICAgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ0Zyb21DaGFyQ29kZUJ5KGNoYXIsIGZuKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgIGZuKGZpbmRSYW5nZShjaGFyKSwgY2hhci5jaGFyQ29kZUF0KDApKVxuICAgICk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBuZXh0IHZhbHVlIGZvciBhIHN0cmluZy4gJ2EnIGJlY29tZXMgJ2InLiAnQScgYmVjb21lcyAnQicuIDFcbiAqIGJlY29tZXMgMiwgZXRjLiBJZiBtdWx0aXBsZSBjaGFyYWN0ZXIgc3RyaW5ncyBhcmUgcGFzc2VkLCAnYWEnIHdvdWxkIGJlY29tZVxuICogJ2JiJy5cbiAqXG4gKiBAZnVuY3Rpb24gbmV4dFxuICogQHBhcmFtICB7KHN0cmluZ3xudW1iZXIpfSB2YWx1ZSAtIFRoZSBzdHJpbmcgb3IgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGZvcm1hdHRlZCBzdHJpbmdcbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBzdHJpbmdGcm9tQ2hhckNvZGVCeShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA8IHJhbmdlLm1heCA/IGNvZGUgKyAxIDogcmFuZ2UubWluXG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHByZXYgdmFsdWUgZm9yIGEgc3RyaW5nLiAnYicgYmVjb21lcyAnYScuICdCJyBiZWNvbWVzICdBJy4gMlxuICogYmVjb21lcyAxLCAwIGJlY29tZXMgOSwgZXRjLiBJZiBtdWx0aXBsZSBjaGFyYWN0ZXIgc3RyaW5ncyBhcmUgcGFzc2VkLCAnYmInXG4gKiB3b3VsZCBiZWNvbWUgJ2FhJy5cbiAqXG4gKiBAZnVuY3Rpb24gcHJldlxuICogQHBhcmFtICB7KHN0cmluZ3xudW1iZXIpfSB2YWx1ZSAtIFRoZSBzdHJpbmcgb3IgbnVtYmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGZvcm1hdHRlZCBzdHJpbmdcbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBzdHJpbmdGcm9tQ2hhckNvZGVCeShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA+IHJhbmdlLm1pbiA/IGNvZGUgLSAxIDogcmFuZ2UubWF4XG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IGRpZ2l0aXplIGZyb20gJy4uL0hlbHBlcnMvRGlnaXRpemUnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgbGVuZ3RoLCBpc09iamVjdCwgaXNOdW1iZXIgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2VWYWx1ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYEZhY2VWYWx1ZWAgY2xhc3MgaGFuZGxlcyBhbGwgdGhlIGRpZ2l0aXppbmcgZm9yIHRoZSBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgRmFjZVZhbHVlXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSBgRmFjZVZhbHVlYCdzIGFjdHVhbCB2YWx1ZS4gTW9zdCBsaWtlbHkgc2hvdWxkXG4gICAgICogICAgIHN0cmluZywgbnVtYmVyLCBvciBEYXRlLiBCdXQgc2luY2UgdGhlIEZhY2UgaGFuZGxlcyB0aGUgdmFsdWUsIGl0XG4gICAgICogICAgIGNvdWxkIGJlIGFueXRoaW5nLlxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWUsXG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiAwXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgZGlnaXRzYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoQXJyYXl8dW5kZWZpbmVkKX0gLSBUaGUgYGRpZ2l0c2AgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGBkaWdpdHNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2FycmF5fSB2YWx1ZSAtIEFuIGFycmF5IG9mIGRpZ2l0cy9jaGFyYWN0ZXJzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IGRpZ2l0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRkaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5taW5pbXVtRGlnaXRzID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlnaXRzLCBsZW5ndGgodmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGB2YWx1ZWAgYXR0cmlidXRlLiBBbHNvIGRpZ2l0aXplcyB0aGUgbmV3IHZhbHVlLCBhbmQgc2V0cyB0aGVcbiAgICAgKiBgZGlnaXRzYCBhdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmRpZ2l0cyA9IGRpZ2l0aXplKHRoaXMuZm9ybWF0KHZhbHVlKSwge1xuICAgICAgICAgICAgbWluaW11bURpZ2l0czogdGhpcy5taW5pbXVtRGlnaXRzLFxuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0aGlzLnByZXBlbmRMZWFkaW5nWmVyb1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUgaXMgbm90IGEgbnVtYmVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaXMgdGhlIHZhbHVlIGlzIG5vdCBhIG51bWJlci5cbiAgICAgKi9cbiAgICBpc05hTigpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZSBpcyBhIG51bWJlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gYHRydWVgIGlzIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAgICAgKi9cbiAgICBpc051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgdGhlIGN1cnJlbnQgYEZhY2VWYWx1ZWAgaW5zdGFuY2UsIGJ1dCBzZXRzIGEgbmV3IHZhbHVlIHRvIHRoZVxuICAgICAqIGNsb25lZCBpbnN0YW5jZS4gVXNlZCBmb3IgY29weWluZyB0aGUgY3VycmVudCBpbnN0YW5jZSBvcHRpb25zIGFuZFxuICAgICAqIG1ldGhvZHMsIGJ1dCBzZXR0aW5nIGEgbmV3IHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgblxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcmV0dXJuIHtGYWNlVmFsdWV9IC0gVGhlIGNsb25lZCBgRmFjZVZhbHVlYC5cbiAgICAgKi9cbiAgICBjbG9uZSh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodmFsdWUsIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSwgYXR0cmlidXRlc1xuICAgICAgICApKTtcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQG5hbWVzcGFjZSBIZWxwZXJzLlZhbGlkYXRlXG4gKi9cbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQ29uc3RydWN0b3IgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIGRhdGEgdHlwZSBvZiBhIHZhcmlhYmxlLlxuICpcbiAqIEBmdW5jdGlvbiB2YWxpZGF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byB2YWxpZGF0ZS5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyAtIFRoZSBkYXRhIHR5cGVzIHRvIHVzZSBmb3IgdmFsaWRhdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgaXMgdGhlIHZhbHVlIGhhcyBhIHZhbGlkIGRhdGEgdHlwZS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlZhbGlkYXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDb25zdHJ1Y3RvcihhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiLyoqXG4gKiBAYWxpYXMgQ29uc29sZU1lc3NhZ2VzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIG1vZHVsZTpDb25maWcvQ29uc29sZU1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpdGVtczogJ1RoZSBpdGVtcyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicsXG4gICAgdGhlbWU6ICdUaGUgdGhlbWUgcHJvcGVydHkgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBsYW5ndWFnZTogJ1RoZSBsYW5ndWFnZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGRhdGU6ICdUaGUgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERhdGUuJyxcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2UgY2xhc3MuJyxcbiAgICBlbGVtZW50OiAnVGhlIGVsZW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhbiBIVE1MRWxlbWVudCcsXG4gICAgZmFjZVZhbHVlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2VWYWx1ZSBjbGFzcy4nLFxuICAgIHRpbWVyOiAnVGhlIHRpbWVyIHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBUaW1lciBjbGFzcy4nXG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBlcnJvciwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNPYmplY3QsIGlzQXJyYXksIGlzRnVuY3Rpb24sIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgbWVhbnQgdG8gYmUgcHJvdmlkZSBhbiBpbnRlcmZhY2UgZm9yIGFsbCBvdGhlciBmYWNlcyB0b1xuICAgICAqIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBGYWNlXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gICAgICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICBjb3VudGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uUmF0ZTogNTAwXG4gICAgICAgIH0sIHRoaXMuZGVmYXVsdEF0dHJpYnV0ZXMoKSwgYXR0cmlidXRlcyB8fCB7fSkpO1xuXG4gICAgICAgIGlmKGlzTnVsbCh2YWx1ZSkgfHwgaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgZGF0YVR5cGVgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBkYXRhVHlwZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBkYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERhdGFUeXBlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIEFueSB2YWx1ZSB0aGF0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBgRmFjZVZhbHVlYCB3aWxsXG4gICAgICogICAgIGJlIGNhc3QgaW50byBvbmUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYoISh2YWx1ZSBpbnN0YW5jZW9mIEZhY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jcmVhdGVGYWNlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBzdG9wQXRgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBzdG9wQXRgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgc3RvcEF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcEF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBBbnkgdmFsdWUgdGhhdCBpcyB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlIGZhY2UgdG9cbiAgICAgKiAgICAgZGV0ZXJtaW5lIHdoZW4gdGhlIGNsb2NrIHNob3VsZCBzdG9wLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHN0b3BBdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9wQXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBvcmlnaW5hbFZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBvcmlnaW5hbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kb3JpZ2luYWxWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBvcmlnaW5hbFZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IG9yaWdpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aXRoIGV2ZXJ5IGludGVydmFsLCBvciBldmVyeSB0aW1lIHRoZSBjbG9ja1xuICAgICAqIHNob3VsZCBjaGFuZ2UsIGFuZCBoYW5kbGVzIHRoZSBhY3R1YWwgaW5jcmVtZW50aW5nIGFuZCBkZWNyZW1lbnRpbmcgdGhlXG4gICAgICogY2xvY2sncyBgRmFjZVZhbHVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZhY2V9IC0gVGhpcyBgRmFjZWAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuY291bnRkb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICBpZih0aGlzLnNob3VsZFN0b3AoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGNsb2NrIHNob3VsZCBzdG9wIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY2xvY2sgc2hvdWxkIHN0b3AuXG4gICAgICovXG4gICAgc2hvdWxkU3RvcChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaXMuc3RvcEF0KSA/IHRoaXMuc3RvcEF0ID09PSBpbnN0YW5jZS52YWx1ZS52YWx1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQgdGhpcyBqdXN0IHJldHVybnMgdGhlIHZhbHVlIHVuZm9ybWF0dGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBmb3JtYXQuXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgZm9ybWF0dGVkIHZhbHVlLlxuICAgICAqL1xuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYEZhY2VgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYXR0cmlidXRlcyBmb3IgdGhlIGBGYWNlYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyhPYmplY3R8dW5kZWZpbmVkKX0gLSBUaGUgZGVmYXVsdCBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGRhdGEgdHlwZSBmb3IgdGhlIGBGYWNlYCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyhPYmplY3R8dW5kZWZpbmVkKX0gLSBUaGUgZGVmYXVsdCBkYXRhIHR5cGUuXG4gICAgICovXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gW2Ftb3VudF0gLSBUaGUgYW1vdW50IHRvIGluY3JlbWVudC4gSWYgdGhlIGFtb3VudCBpcyBub3RcbiAgICAgKiAgICAgZGVmaW5lZCwgaXQgaXMgbGVmdCB1cCB0byB0aGUgYEZhY2VgIHRvIGRldGVybWluZSB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluY3JlbWVudChpbnN0YW5jZSwgYW1vdW50KSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjcmVtZW50IHRoZSBjbG9jay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBbYW1vdW50XSAtIFRoZSBhbW91bnQgdG8gZGVjcmVtZW50LiBJZiB0aGUgYW1vdW50IGlzIG5vdFxuICAgICAqICAgICBkZWZpbmVkLCBpdCBpcyBsZWZ0IHVwIHRvIHRoZSBgRmFjZWAgdG8gZGV0ZXJtaW5lIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgZGVjcmVtZW50KGluc3RhbmNlLCBhbW91bnQpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgY2xvY2sgaGFzIHN0YXJ0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnRlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBjbG9jayBoYXMgc3RvcHBlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdG9wcGVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGNsb2NrIGhhcyByZXNldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0ZsaXBDbG9ja30gaW5zdGFuY2UgLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZXNldChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBgRmFjZWAgaGFzIGluaXRpYWxpemVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGBGYWNlYCBoYXMgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgYEZhY2VgIGhhcyBtb3VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIG1vdW50ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYodGhpcy5hdXRvU3RhcnQgJiYgaW5zdGFuY2UudGltZXIuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGluc3RhbmNlLnN0YXJ0KGluc3RhbmNlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBGYWNlVmFsdWVgLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBGYWNlVmFsdWVgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0RpdmlkZXJ9IC0gVGhlIGluc3RhbnRpYXRlZCBgRmFjZVZhbHVlYC5cbiAgICAgKi9cbiAgICBjcmVhdGVGYWNlVmFsdWUoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGYWNlVmFsdWUubWFrZShcbiAgICAgICAgICAgIGlzRnVuY3Rpb24odmFsdWUpICYmICF2YWx1ZS5uYW1lID8gdmFsdWUoKSA6IHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgbWluaW11bURpZ2l0czogdGhpcy5taW5pbXVtRGlnaXRzLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdGhpcy5mb3JtYXQoaW5zdGFuY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEFyYWJpYyBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgYmUgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEFyYWJpYyBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkFyYWJpY1xuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkFyYWJpY1xuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn2LPZhtmI2KfYqicsXG4gICAgJ21vbnRocycgIDogJ9i02YfZiNixJyxcbiAgICAnZGF5cycgICAgOiAn2KPZitin2YUnLFxuICAgICdob3VycycgICA6ICfYs9in2LnYp9iqJyxcbiAgICAnbWludXRlcycgOiAn2K/Zgtin2KbZgicsXG4gICAgJ3NlY29uZHMnIDogJ9ir2YjYp9mG2YonXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkFyYWJpY1xuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnYXInLCAnYXItYXInLCAnYXJhYmljJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgQ2F0YWxhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhdGFsYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5DYXRhbGFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2F0YWxhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnIDogJ0FueXMnLFxuICAgICdtb250aHMnIDogJ01lc29zJyxcbiAgICAnZGF5cycgOiAnRGllcycsXG4gICAgJ2hvdXJzJyA6ICdIb3JlcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0cycsXG4gICAgJ3NlY29uZHMnIDogJ1NlZ29ucydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2F0YWxhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnY2EnLCAnY2EtZXMnLCAnY2F0YWxhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ3plY2ggbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5DemVjaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkN6ZWNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdSb2t5JyxcbiAgICAnbW9udGhzJyAgOiAnTcSbc8OtY2UnLFxuICAgICdkYXlzJyAgICA6ICdEbnknLFxuICAgICdob3VycycgICA6ICdIb2RpbnknLFxuICAgICdtaW51dGVzJyA6ICdNaW51dHknLFxuICAgICdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DemVjaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnY3MnLCAnY3MtY3onLCAnY3onLCAnY3otY3MnLCAnY3plY2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBEYW5pc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBEYW5pc2ggbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5EYW5pc2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5EYW5pc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRGFuaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBHZXJtYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5HZXJtYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5HZXJtYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdKYWhyZScsXG5cdCdtb250aHMnICA6ICdNb25hdGUnLFxuXHQnZGF5cycgICAgOiAnVGFnZScsXG5cdCdob3VycycgICA6ICdTdHVuZGVuJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZW4nLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZW4nXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkdlcm1hblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGUnLCAnZGUtZGUnLCAnZ2VybWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5FbmdsaXNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZW4nLCAnZW4tdXMnLCAnZW5nbGlzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFNwYW5pc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTcGFuaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuU3BhbmlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlNwYW5pc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBw7FvcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEw61hcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5TcGFuaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUGVyc2lhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBlcnNpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5QZXJzaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUGVyc2lhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9iz2KfZhCcsXG5cdCdtb250aHMnICA6ICfZhdin2YcnLFxuXHQnZGF5cycgICAgOiAn2LHZiNiyJyxcblx0J2hvdXJzJyAgIDogJ9iz2KfYudiqJyxcblx0J21pbnV0ZXMnIDogJ9iv2YLbjNmC2YcnLFxuXHQnc2Vjb25kcycgOiAn2KvYp9mG24zZhydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUGVyc2lhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmEnLCAnZmEtaXInLCAncGVyc2lhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBGaW5uaXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuRmlubmlzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkZpbm5pc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5GaW5uaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmaScsICdmaS1maScsICdmaW5uaXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgQ2FuYWRpYW4gRnJlbmNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuQ2FuYWRpYW5GcmVuY2hcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DYW5hZGlhbkZyZW5jaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnQW5zJyxcbiAgICAnbW9udGhzJyAgOiAnTW9pcycsXG4gICAgJ2RheXMnICAgIDogJ0pvdXJzJyxcbiAgICAnaG91cnMnICAgOiAnSGV1cmVzJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlcycsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVzJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5DYW5hZGlhbkZyZW5jaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgSGVicmV3IExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSGVicmV3IGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuSGVicmV3XG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSGVicmV3XG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn16nXoNeZ150nLFxuXHQnbW9udGhzJyAgOiAn15fXldeT16knLFxuXHQnZGF5cycgICAgOiAn15nXnteZ150nLFxuXHQnaG91cnMnICAgOiAn16nXoteV16onLFxuXHQnbWludXRlcycgOiAn15PXp9eV16onLFxuXHQnc2Vjb25kcycgOiAn16nXoNeZ15XXqidcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSGVicmV3XG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydpbCcsICdoZS1pbCcsICdoZWJyZXcnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBIdW5nYXJpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5IdW5nYXJpYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5IdW5nYXJpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDiXYnLFxuICAgICdtb250aHMnICA6ICdIw7NuYXAnLFxuICAgICdkYXlzJyAgICA6ICdOYXAnLFxuICAgICdob3VycycgICA6ICfDk3JhJyxcbiAgICAnbWludXRlcycgOiAnUGVyYycsXG4gICAgJ3NlY29uZHMnIDogJ03DoXNvZHBlcmMnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkh1bmdhcmlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaHUnLCAnaHUtaHUnLCAnaHVuZ2FyaWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgSXRhbGlhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEl0YWxpYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5JdGFsaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuSXRhbGlhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0FubmknLFxuXHQnbW9udGhzJyAgOiAnTWVzaScsXG5cdCdkYXlzJyAgICA6ICdHaW9ybmknLFxuXHQnaG91cnMnICAgOiAnT3JlJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0aScsXG5cdCdzZWNvbmRzJyA6ICdTZWNvbmRpJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5JdGFsaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBKYXBhbmVzZSBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuSmFwYW5lc2VcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5KYXBhbmVzZVxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5KYXBhbmVzZVxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnanAnLCAnamEtanAnLCAnamFwYW5lc2UnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBLb3JlYW4gbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5Lb3JlYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Lb3JlYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfrhYQnLFxuXHQnbW9udGhzJyAgOiAn7JuUJyxcblx0J2RheXMnICAgIDogJ+ydvCcsXG5cdCdob3VycycgICA6ICfsi5wnLFxuXHQnbWludXRlcycgOiAn67aEJyxcblx0J3NlY29uZHMnIDogJ+y0iCdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuS29yZWFuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydrbycsICdrby1rcicsICdrb3JlYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBMYXR2aWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTGF0dmlhbiBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLkxhdHZpYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5MYXR2aWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdHYWRpJyxcbiAgICAnbW9udGhzJyAgOiAnTcSTbmXFoWknLFxuICAgICdkYXlzJyAgICA6ICdEaWVuYXMnLFxuICAgICdob3VycycgICA6ICdTdHVuZGFzJyxcbiAgICAnbWludXRlcycgOiAnTWluxat0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWt1bmRlcydcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuTGF0dmlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIER1dGNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5EdXRjaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkR1dGNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkR1dGNoXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydubCcsICdubC1iZScsICdkdXRjaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTm9yd2VnaWFuLUJva23DpWwgbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5Ob3J3ZWdpYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Ob3J3ZWdpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLk5vcndlZ2lhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgUG9saXNoIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuUG9saXNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUG9saXNoXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnTGF0Jyxcblx0J21vbnRocycgIDogJ01pZXNpxJljeScsXG5cdCdkYXlzJyAgICA6ICdEbmknLFxuXHQnaG91cnMnICAgOiAnR29kemlueScsXG5cdCdtaW51dGVzJyA6ICdNaW51dHknLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuUG9saXNoXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwbCcsICdwbC1wbCcsICdwb2xpc2gnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9ydHVndWVzZSBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlBvcnR1Z3Vlc2VcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Qb3J0dWd1ZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlBvcnR1Z3Vlc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3B0JywgJ3B0LWJyJywgJ3BvcnR1Z3Vlc2UnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBSb21hbmlhbiBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFJvbWFuaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuUm9tYW5pYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5Sb21hbmlhblxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJzogJ0FuaScsXG5cdCdtb250aHMnOiAnTHVuaScsXG5cdCdkYXlzJzogJ1ppbGUnLFxuXHQnaG91cnMnOiAnT3JlJyxcblx0J21pbnV0ZXMnOiAnTWludXRlJyxcblx0J3NlY29uZHMnOiAnc1NlY3VuZGUnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlJvbWFuaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydybycsICdyby1ybycsICdyb21hbmEnXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBSdXNzaWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUnVzc2lhbiBsYW5ndWFnZS5cbiAqIEBuYW1lc3BhY2UgTGFuZ3VhZ2VzLlJ1c3NpYW5cbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5SdXNzaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfQu9C10YInLFxuICAgICdtb250aHMnICA6ICfQvNC10YHRj9GG0LXQsicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3QtdC5JyxcbiAgICAnaG91cnMnICAgOiAn0YfQsNGB0L7QsicsXG4gICAgJ21pbnV0ZXMnIDogJ9C80LjQvdGD0YInLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LQnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlJ1c3NpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogQGNsYXNzZGVzYyBTbG92YWsgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5TbG92YWtcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudCBkaWN0aW9uYXJ5XG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5TbG92YWtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdSb2t5Jyxcblx0J21vbnRocycgIDogJ01lc2lhY2UnLFxuXHQnZGF5cycgICAgOiAnRG5pJyxcblx0J2hvdXJzJyAgIDogJ0hvZGlueScsXG5cdCdtaW51dGVzJyA6ICdNaW7DunR5Jyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlNsb3Zha1xuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc2snLCAnc2stc2snLCAnc2xvdmFrJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKiBAZGVzYyBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFN3ZWRpc2ggbGFuZ3VhZ2UuXG4gKiBAbmFtZXNwYWNlIExhbmd1YWdlcy5Td2VkaXNoXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuU3dlZGlzaFxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuU3dlZGlzaFxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc3YnLCAnc3Ytc2UnLCAnc3dlZGlzaCddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFRoYWkgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUaGFpIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuVGhhaVxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlRoYWlcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfguJvguLUnLFxuXHQnbW9udGhzJyAgOiAn4LmA4LiU4Li34Lit4LiZJyxcblx0J2RheXMnICAgIDogJ+C4p+C4seC4mScsXG5cdCdob3VycycgICA6ICfguIrguLHguYjguKfguYLguKHguIcnLFxuXHQnbWludXRlcycgOiAn4LiZ4Liy4LiX4Li1Jyxcblx0J3NlY29uZHMnIDogJ+C4p+C4tOC4meC4suC4l+C4tSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuVGhhaVxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFR1cmtpc2ggTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuVHVya2lzaFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlR1cmtpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZxLFsJyxcblx0J21vbnRocycgIDogJ0F5Jyxcblx0J2RheXMnICAgIDogJ0fDvG4nLFxuXHQnaG91cnMnICAgOiAnU2FhdCcsXG5cdCdtaW51dGVzJyA6ICdEYWtpa2EnLFxuXHQnc2Vjb25kcycgOiAnU2FuaXllJ1xufTtcblxuLyoqXG4gKiBAY29uc3RhbnQgYWxpYXNlc1xuICogQHR5cGUge2FycmF5fVxuICogQG1lbWJlcm9mIExhbmd1YWdlcy5UdXJraXNoXG4gKi9cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0cicsICd0ci10cicsICd0dXJraXNoJ107XG4iLCIvKipcbiAqIEBjbGFzc2Rlc2MgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqIEBkZXNjIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVWtyYWluaWFuIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuVWtyYWluaWFuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuVWtyYWluaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfRgNC+0LrQuCcsXG4gICAgJ21vbnRocycgIDogJ9C80ZbRgdGP0YbRlicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3RlicsXG4gICAgJ2hvdXJzJyAgIDogJ9Cz0L7QtNC40L3QuCcsXG4gICAgJ21pbnV0ZXMnIDogJ9GF0LLQuNC70LjQvdC4JyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC00LgnXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlVrcmFpbmlhblxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndWEnLCAndWEtdWEnLCAndWtyYWluZSddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFZpZXRuYW1lc2UgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBWaWV0bmFtZXNlIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuVmlldG5hbWVzZVxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlZpZXRuYW1lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdOxINtJyxcblx0J21vbnRocycgIDogJ1Row6FuZycsXG5cdCdkYXlzJyAgICA6ICdOZ8OgeScsXG5cdCdob3VycycgICA6ICdHaeG7nScsXG5cdCdtaW51dGVzJyA6ICdQaMO6dCcsXG5cdCdzZWNvbmRzJyA6ICdHacOieSdcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuVmlldG5hbWVzZVxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndm4nLCAndm4tdm4nLCAndmlldG5hbWVzZSddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDaGluZXNlIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuQ2hpbmVzZVxuICovXG5cbi8qKlxuICogQGNvbnN0YW50IGRpY3Rpb25hcnlcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLkNoaW5lc2VcbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfml7YnLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbi8qKlxuICogQGNvbnN0YW50IGFsaWFzZXNcbiAqIEB0eXBlIHthcnJheX1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBAY2xhc3NkZXNjIFRyYWRpdGlvbmFsIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICogQGRlc2MgVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlIGxhbmd1YWdlLlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXMuVHJhZGl0aW9uYWxDaGluZXNlXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnQgZGljdGlvbmFyeVxuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBMYW5ndWFnZXMuVHJhZGl0aW9uYWxDaGluZXNlXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pmCJyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG4vKipcbiAqIEBjb25zdGFudCBhbGlhc2VzXG4gKiBAdHlwZSB7YXJyYXl9XG4gKiBAbWVtYmVyb2YgTGFuZ3VhZ2VzLlRyYWRpdGlvbmFsQ2hpbmVzZVxuICovXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgtdHcnXTtcbiIsIi8qKlxuICogQG5hbWVzcGFjZSBMYW5ndWFnZXNcbiAqL1xuaW1wb3J0ICogYXMgQXJhYmljIGZyb20gJy4vYXItYXInO1xuaW1wb3J0ICogYXMgQ2F0YWxhbiBmcm9tICcuL2NhLWVzJztcbmltcG9ydCAqIGFzIEN6ZWNoIGZyb20gJy4vY3MtY3onO1xuaW1wb3J0ICogYXMgRGFuaXNoIGZyb20gJy4vZGEtZGsnO1xuaW1wb3J0ICogYXMgR2VybWFuIGZyb20gJy4vZGUtZGUnO1xuaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tICcuL2VuLXVzJztcbmltcG9ydCAqIGFzIFNwYW5pc2ggZnJvbSAnLi9lcy1lcyc7XG5pbXBvcnQgKiBhcyBQZXJzaWFuIGZyb20gJy4vZmEtaXInO1xuaW1wb3J0ICogYXMgRmlubmlzaCBmcm9tICcuL2ZpLWZpJztcbmltcG9ydCAqIGFzIEZyZW5jaCBmcm9tICcuL2ZyLWNhJztcbmltcG9ydCAqIGFzIEhlYnJldyBmcm9tICcuL2hlLWlsJztcbmltcG9ydCAqIGFzIEh1bmdhcmlhbiBmcm9tICcuL2h1LWh1JztcbmltcG9ydCAqIGFzIEl0YWxpYW4gZnJvbSAnLi9pdC1pdCc7XG5pbXBvcnQgKiBhcyBKYXBhbmVzZSBmcm9tICcuL2phLWpwJztcbmltcG9ydCAqIGFzIEtvcmVhbiBmcm9tICcuL2tvLWtyJztcbmltcG9ydCAqIGFzIExhdHZpYW4gZnJvbSAnLi9sdi1sdic7XG5pbXBvcnQgKiBhcyBEdXRjaCBmcm9tICcuL25sLWJlJztcbmltcG9ydCAqIGFzIE5vcndlZ2lhbiBmcm9tICcuL25vLW5iJztcbmltcG9ydCAqIGFzIFBvbGlzaCBmcm9tICcuL3BsLXBsJztcbmltcG9ydCAqIGFzIFBvcnR1Z3Vlc2UgZnJvbSAnLi9wdC1icic7XG5pbXBvcnQgKiBhcyBSb21hbmlhbiBmcm9tICcuL3JvLXJvJztcbmltcG9ydCAqIGFzIFJ1c3NpYW4gZnJvbSAnLi9ydS1ydSc7XG5pbXBvcnQgKiBhcyBTbG92YWsgZnJvbSAnLi9zay1zayc7XG5pbXBvcnQgKiBhcyBTd2VkaXNoIGZyb20gJy4vc3Ytc2UnO1xuaW1wb3J0ICogYXMgVGhhaSBmcm9tICcuL3RoLXRoJztcbmltcG9ydCAqIGFzIFR1cmtpc2ggZnJvbSAnLi90ci10cic7XG5pbXBvcnQgKiBhcyBVa3JhaW5pYW4gZnJvbSAnLi91YS11YSc7XG5pbXBvcnQgKiBhcyBWaWV0bmFtZXNlIGZyb20gJy4vdm4tdm4nO1xuaW1wb3J0ICogYXMgQ2hpbmVzZSBmcm9tICcuL3poLWNuJztcbmltcG9ydCAqIGFzIFRyYWRpdGlvbmFsQ2hpbmVzZSBmcm9tICcuL3poLXR3JztcblxuZXhwb3J0IHtcbiAgICBBcmFiaWMsXG4gICAgQ2F0YWxhbixcbiAgICBDemVjaCxcbiAgICBEYW5pc2gsXG4gICAgR2VybWFuLFxuICAgIEVuZ2xpc2gsXG4gICAgU3BhbmlzaCxcbiAgICBQZXJzaWFuLFxuICAgIEZpbm5pc2gsXG4gICAgRnJlbmNoLFxuICAgIEhlYnJldyxcbiAgICBIdW5nYXJpYW4sXG4gICAgSXRhbGlhbixcbiAgICBKYXBhbmVzZSxcbiAgICBLb3JlYW4sXG4gICAgTGF0dmlhbixcbiAgICBEdXRjaCxcbiAgICBOb3J3ZWdpYW4sXG4gICAgUG9saXNoLFxuICAgIFBvcnR1Z3Vlc2UsXG4gICAgUm9tYW5pYW4sXG4gICAgUnVzc2lhbixcbiAgICBTbG92YWssXG4gICAgU3dlZGlzaCxcbiAgICBUaGFpLFxuICAgIFR1cmtpc2gsXG4gICAgVWtyYWluaWFuLFxuICAgIFZpZXRuYW1lc2UsXG4gICAgQ2hpbmVzZSxcbiAgICBUcmFkaXRpb25hbENoaW5lc2Vcbn1cbiIsIi8qKlxuICogQG5hbWVzcGFjZSBIZWxwZXJzLkxhbmd1YWdlXG4gKi9cbmltcG9ydCAqIGFzIExBTkdVQUdFUyBmcm9tICcuLi9MYW5ndWFnZXMnO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGFuZ3VhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBrZXkuIFJldHVybnMgYG51bGxgIGlmIG5vIGxhbmd1YWdlIGlzXG4gKiBmb3VuZC5cbiAqIFxuICogQGZ1bmN0aW9uIGxhbmd1YWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgbGFuZ3VhZ2UuXG4gKiBAcmV0dXJuIHtvYmplY3R8bnVsbH0gLSBUaGUgbGFuZ3VhZ2UgZGljdGlvbmFyeSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4gKiBAbWVtYmVyb2YgSGVscGVycy5MYW5ndWFnZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYW5ndWFnZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgPyBMQU5HVUFHRVNbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBPYmplY3QudmFsdWVzKExBTkdVQUdFUykuZmluZCh2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5hbGlhc2VzLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH0pIDogbnVsbDtcbn1cbiIsIi8qKlxuICogQG5hbWVzcGFjZSBIZWxwZXJzLlRyYW5zbGF0ZVxuICovXG5pbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi9MYW5ndWFnZSc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuLyoqXG4gKiBUcmFuc2xhdGUgYW4gRW5nbGlzaCBzdHJpbmcgaW50byBhbm90aGVyIGxhbmd1YWdlLlxuICogXG4gKiBAZnVuY3Rpb24gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byB0cmFuc2xhdGUuXG4gKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZnJvbSAtIFRoZSBsYW5ndWFnZSB1c2VkIHRvIHRyYW5zbGF0ZS4gSWYgYSBzdHJpbmcsXG4gKiAgICAgdGhlIGxhbmd1YWdlIGlzIGxvYWRlZCBpbnRvIGFuIG9iamVjdC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBJZiBubyBkaWN0aW9uIGtleSBpcyBmb3VuZCwgdGhlIHVudHJhbnNsYXRlZCBzdHJpbmcgaXNcbiAqICAgICByZXR1cm5lZC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRyYW5zbGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2xhdGUoc3RyaW5nLCBmcm9tKSB7XG4gICAgY29uc3QgbGFuZyA9IGlzU3RyaW5nKGZyb20pID8gbGFuZ3VhZ2UoZnJvbSkgOiBmcm9tO1xuICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBsYW5nLmRpY3Rpb25hcnkgfHwgbGFuZztcbiAgICByZXR1cm4gZGljdGlvbmFyeVtzdHJpbmddIHx8IHN0cmluZztcbn07XG4iLCIvKipcbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdG8gbWFuYWdlIERPTSBub2RlcyBhbmQgdGhlbWUgdGVtcGxhdGVzLlxuICpcbiAqIEBuYW1lc3BhY2UgSGVscGVycy5UZW1wbGF0ZVxuICovXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuLyoqXG4gKiBTd2FwIGEgbmV3IERPTSBub2RlIHdpdGggYW4gZXhpc3Rpbmcgb25lLlxuICpcbiAqIEBmdW5jdGlvbiBzd2FwXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gc3ViamVjdCAtIFRoZSBuZXcgRE9NIG5vZGUuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZXhpc3RpbmcgLSBUaGUgZXhpc3RpbmcgRE9NIG5vZGUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBSZXR1cm5zIHRoZSBuZXcgZWxlbWVudCBpZiBpdCB3YXMgbW91bnRlZCwgb3RoZXJ3aXNlXG4gKiAgICB0aGUgZXhpc3Rpbmcgbm9kZSBpcyByZXR1cm5lZC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzd2FwKHN1YmplY3QsIGV4aXN0aW5nKSB7XG5cdGlmKGV4aXN0aW5nLnBhcmVudE5vZGUpIHtcblx0XHRleGlzdGluZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzdWJqZWN0LCBleGlzdGluZyk7XG5cblx0XHRyZXR1cm4gc3ViamVjdDtcblx0fVxuXG5cdHJldHVybiBleGlzdGluZztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZSBvZiBhbiBlbGVtZW50LlxuICpcbiAqIEBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0gIHtPYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlIG9iamVjdCwgb3IgaWYgbm8gb2JqZWN0XG4gKiAgICAgaXMgcGFzc2VkLCB0aGVuIHRoZSBhY3Rpb24gaXMgaWdub3JlZC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBET00gbm9kZSB0aGF0IHJlY2VpdmVkIHRoZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuVGVtcGxhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXMpIHtcblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIEFwcGVuZCBhbiBhcnJheSBvZiBET00gbm9kZXMgdG8gYSBwYXJlbnQuXG4gKlxuICogQGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgcGFyZW50IERPTSBub2RlLlxuICogQHBhcmFtICB7QXJyYXl8dW5kZWZpbmVkfSBbY2hpbGRyZW5dIC0gVGhlIGFycmF5IG9mIGNoaWxkcmVuLiBJZiBubyBhcnJheVxuICogICAgIGlzIHBhc3NlZCwgdGhlbiB0aGUgbWV0aG9kIHNpbGVudGx5IGZhaWxzIHRvIHJ1bi5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBET00gbm9kZSB0aGF0IHJlY2VpdmVkIHRoZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEhlbHBlcnMuVGVtcGxhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbikge1xuXHRpZihpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLmZpbHRlcihub29wKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGlmKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBIVE1MRWxlbWVudCBpbnN0YW5jZS5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlRWxlbWVudFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIHBhcmVudCBET00gbm9kZS5cbiAqIEBwYXJhbSAge0FycmF5fHVuZGVmaW5lZH0gW2NoaWxkcmVuXSAtIFRoZSBhcnJheSBvZiBjaGlsZHJlbi4gSWYgbm8gYXJyYXlcbiAqICAgICBpcyBwYXNzZWQsIHRoZW4gdGhlIG1ldGhvZCBzaWxlbnRseSBmYWlscyB0byBydW4uXG4gKiBAcGFyYW0gIHtPYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBvYmplY3QuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCByZWNlaXZlZCB0aGUgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzLlRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsLCBjaGlsZHJlbiwgYXR0cmlidXRlcykge1xuXHRpZighKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcblx0fVxuXG5cdHNldEF0dHJpYnV0ZXMoZWwsIGlzT2JqZWN0KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogYXR0cmlidXRlcyk7XG5cblx0aWYoIWlzT2JqZWN0KGNoaWxkcmVuKSAmJiAhaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcblx0fVxuXHRlbHNlIHtcblx0XHRhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pXG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBsYW5ndWFnZSBmcm9tICcuLi9IZWxwZXJzL0xhbmd1YWdlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vSGVscGVycy9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBzd2FwLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBvdGhlciBET00gY29tcG9uZW50cyBjYW4gZXh0ZW5kLlxuICAgICAqXG4gICAgICogQGNsYXNzIERvbUNvbXBvbmVudFxuICAgICAqIEBleHRlbmRzIENvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcGFyZW50OiBudWxsXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy50aGVtZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgdGhlbWUgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBlcnJvcihgJHt0aGlzLm5hbWV9IGRvZXMgbm90IGhhdmUgYSBsYW5ndWFnZSBkZWZpbmVkLmApO1xuICAgICAgICB9XG5cblx0XHRpZighdGhpcy50aGVtZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5uYW1lfSBjYW5ub3QgYmUgcmVuZGVyZWQgYmVjYXVzZSBpdCBoYXMgbm8gdGVtcGxhdGUuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29tcG9uZW50J3MgdG9wIGxldmVsIERPTSBub2RlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGBlbGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY29tcG9uZW50J3MgdG9wIGxldmVsIERPTSBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7KG51bGx8SFRNTEVsZW1lbnQpfSB2YWx1ZSAtIFRoZSBgZWxgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBlbCh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIG51bGwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBwYXJlbnRgIGF0dHJpYnV0ZS4gUGFyZW50IGlzIHNldCB3aGVuIGBEb21Db21wb25lbnRgIGluc3RhbmNlcyBhcmVcbiAgICAgKiBtb3VudGVkLlxuICAgICAqXG4gICAgICogQHJldHVybiB7RG9tQ29tcG9uZW50fSAtIFRoZSBgcGFyZW50YCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBhcmVudCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb21Db21wb25lbnR9IHBhcmVudCAtIFRoZSBgcGFyZW50YCBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHJldHVybiB7RG9tQ29tcG9uZW50fSAtIFRoZSBgcGFyZW50YCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgc2V0IHBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHRoZW1lYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtEb21Db21wb25lbnR9IC0gVGhlIGB0aGVtZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCB0aGVtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRoZW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYHRoZW1lYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbHVlIC0gVGhlIGB0aGVtZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxhbmd1YWdlIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgYGxhbmd1YWdlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbHVlIC0gVGhlIGBsYW5ndWFnZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgYGxhbmd1YWdlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgc2V0IGxhbmd1YWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBsYW5ndWFnZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIHRyYW5zbGF0ZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIHRyYW5zbGF0ZWQgc3RyaW5nLiBJZiBubyB0cmFubGF0aW9uIGZvdW5kLCB0aGVcbiAgICAgKiAgICAgdW50cmFuc2xhdGVkIHN0cmluZyBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICB0cmFuc2xhdGUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUoc3RyaW5nLCB0aGlzLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyB0byB0cmFuc2xhdGUoc3RyaW5nKTtcbiAgICAgKlxuICAgICAqIEBhbGlhcyBEb21Db21wb25lbnQudHJhbnNsYXRlXG4gICAgICovXG4gICAgdChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHN0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBET00gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGBlbGAgYXR0cmlidXRlLlxuICAgICAqL1xuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lID09PSAnZmxpcC1jbG9jaycgPyB0aGlzLmNsYXNzTmFtZSA6ICdmbGlwLWNsb2NrLScgKyB0aGlzLmNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRoZW1lW3RoaXMubmFtZV0oZWwsIHRoaXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmVsLmlubmVySFRNTCAhPT0gZWwuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gc3dhcChlbCwgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogTW91bnQgYSBET00gY29tcG9uZW50IHRvIGEgcGFyZW50IG5vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBET00gbm9kZS5cbiAgICAgKiBAcGFyYW0gIHsoZmFsc2V8SFRNTEVsZW1lbnQpfSBbYmVmb3JlPWZhbHNlXSAtIElmIGBmYWxzZWAsIGVsZW1lbnQgaXNcbiAgICAgKiAgICAgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBub2RlLiBJZiBhbiBpbnN0YW5jZSBvZiBhbiBgSFRNTEVsZW1lbnRgLFxuICAgICAqICAgICB0aGUgY29tcG9uZW50IHdpbGwgYmUgaW5zZXJ0ZWQgYmVmb3JlIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgYGVsYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgbW91bnQocGFyZW50LCBiZWZvcmUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBpZighYmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCBiZWZvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgYERpdmlkZXJgIGluc3RhbmNlLlxuICpcbiAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgY2xhc3MgaXMgdG8gcmV0dXJuIGEgdW5pcXVlIGNsYXNzIG5hbWUgc28gdGhlIHRoZW1lIGNhblxuICogcmVuZGVyIGl0IGFwcHJvcHJpYXRlbHksIHNpbmNlIGVhY2ggYERvbUNvbXBvbmVudGAgY2FuIHJlY2VpdmUgaXRzIG93biB0ZW1wbGF0ZVxuICogZnJvbSB0aGUgdGhlbWUuXG4gKlxuICogQGNsYXNzIERpdmlkZXJcbiAqIEBleHRlbmRzIERvbUNvbXBvbmVudFxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpZGVyIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIHJlcHJlc2VudCBhIHNpbmdsZSBkaWdpdHMgaW4gYSBgTGlzdGAuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgTGlzdEl0ZW1cbiAgICAgKiBAZXh0ZW5kcyBEb21Db21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhOdW1iZXJ8U3RyaW5nKX0gdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGBMaXN0SXRlbWAuXG4gICAgICogQHBhcmFtIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IG5leHQsIHByZXYsICB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgaXNPYmplY3QsICB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gYWRkIGEgZGlnaXQgdG8gdGhlIGNsb2NrIGZhY2UuIFRoaXMgY2xhc3MgaXMgY2FsbGVkXG4gICAgICogYExpc3RgIGJlY2F1c2UgaXQgY29udGFpbnMgYSBsaXN0IG9mIGBMaXN0SXRlbWAncyB3aGljaCBhcmUgdXNlZCB0b1xuICAgICAqIGNyZWF0ZSBmbGlwIGVmZmVjdHMuIEluIHRoZSBjb250ZXh0IG9mIEZsaXBDbG9jay5qcyBhIGBMaXN0YCByZXByZXNlbnRzXG4gICAgICogb25lIHNpbmdsZSBkaWdpdC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBMaXN0XG4gICAgICogQGV4dGVuZHMgRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0gbGFiZWwgLSBUaGUgYWN0aXZlIHZhbHVlLiBJZiBhbiBvYmplY3QsIGl0XG4gICAgICogaXMgYXNzdW1lZCB0aGF0IGl0IGlzIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsoTnVtYmVyfFN0cmluZyl9IC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gdmFsdWUgLSBUaGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7KE51bWJlcnxTdHJpbmcpfSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBpdGVtc2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7KE51bWJlcnxTdHJpbmcpfSAtIFRoZSBgaXRlbXNgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBpdGVtc2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGBpdGVtc2AgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4geyhOdW1iZXJ8U3RyaW5nKX0gLSBUaGUgYGl0ZW1zYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgc2V0IGl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGl0ZW1zID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgTGlzdEl0ZW1gLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7KE51bWJlcnxTdHJpbmcpfSB2YWx1ZSAtIFRoZSBgTGlzdEl0ZW1gIHZhbHVlLlxuICAgICAqIEBwYXJhbSAgeyhPYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICogQHJldHVybiB7TGlzdEl0ZW19IC0gVGhlIGluc3RhbnRpYXRlZCBgTGlzdEl0ZW1gLlxuICAgICAqL1xuICAgIGNyZWF0ZUxpc3RJdGVtKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTGlzdEl0ZW0odmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgdGhpcy4kaXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBncm91cCB2YWx1ZXMgd2l0aGluIGEgY2xvY2sgZmFjZS4gSG93IHRoZSBncm91cHNcbiAgICAgKiBhcmUgZGlzcGxheWVkIGlzIGRldGVybWluZWQgYnkgdGhlIHRoZW1lLlxuICAgICAqXG4gICAgICogQGNsYXNzIEdyb3VwXG4gICAgICogQGV4dGVuZHMgRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1zIC0gQW4gYXJyYXkgYExpc3RgIGluc3RhbmNlcyBvciBhbiBvYmplY3Qgb2ZcbiAgICAgKiAgICAgYXR0cmlidXRlcy4gSWYgbm90IGFuIGFycmF5LCBhc3N1bWVkIHRvIGJlIHRoZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpdGVtczogaXNBcnJheShpdGVtcykgPyBpdGVtcyA6IFtdXG4gICAgICAgIH0sIChpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwpLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gYWRkIGEgbGFiZWwgdG8gdGhlIGNsb2NrIGZhY2UuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgTGFiZWxcbiAgICAgKiBAZXh0ZW5kcyBEb21Db21wb25lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBsYWJlbCAtIFRoZSBsYWJlbCBhdHRyaWJ1dGUuIElmIGFuIG9iamVjdCxcbiAgICAgKiAgICAgaXQgaXMgYXNzdW1lZCB0aGF0IGl0IGlzIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobGFiZWwsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSwgKGlzT2JqZWN0KGxhYmVsKSA/IGxhYmVsIDogbnVsbCksIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzTnVtYmVyLCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgVGltZXJcbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhPYmplY3R8TnVtYmVyKX0gaW50ZXJ2YWwgLSBUaGUgaW50ZXJ2YWwgcGFzc2VkIGFzIGEgYE51bWJlcmAsXG4gICAgICogICAgIG9yIGNhbiBzZXQgdGhlIGF0dHJpYnV0ZSBvZiB0aGUgY2xhc3Mgd2l0aCBhbiBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWwpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGhhbmRsZTogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IG51bGwsXG4gICAgICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsOiBpc051bWJlcihpbnRlcnZhbCkgPyBpbnRlcnZhbCA6IG51bGwsXG4gICAgICAgIH0sIGlzT2JqZWN0KGludGVydmFsKSA/IGludGVydmFsIDogbnVsbCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGVsYXBzZWQgdGhlIHRpbWUgYXMgYW4gaW50ZXJnZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBgZWxhcHNlZGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBlbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGFzdExvb3AgPyAwIDogdGhpcy5sYXN0TG9vcCAtIChcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA/IHRoaXMuc3RhcnRlZC5nZXRUaW1lKCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgcnVubmluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgdGhlIGBydW5uaW5nYCBwcm9wZXJ0eSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIHRoZSBgcnVubmluZ2AgcHJvcGVydHkgaXMgYGZhbHNlYFxuICAgICAqL1xuICAgIGdldCBpc1N0b3BwZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPT09IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsoRnVuY3Rpb258dW5kZWZpbmVkKX0gZm4gLSBUaGUgaW50ZXJ2YWwgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7VGltZXJ9IC0gVGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy5zdG9wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgoKSA9PiBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgaW50ZXJ2YWwgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7VGltZXJ9IC0gVGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGU7XG4gICAgICAgIHRoaXMubGFzdExvb3AgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG5cbiAgICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLmxhc3RMb29wID49IHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHRpbWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIHN0b3AgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7VGltZXJ9IC0gVGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICBpZih0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIGRlc2lnbmVkIHRvIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IG51bWJlcmljIHZhbHVlcyxcbiAqICAgICBub3QgYERhdGVgIG9iamVjdHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMSkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMSkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgLSB2YWx1ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgeyBub29wLCByb3VuZCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNOdW1iZXIsIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIG1pbnV0ZXMsIGFuZFxuICogICAgIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW51dGVDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkU3RvcChpbnN0YW5jZSkge1xuICAgICAgICBpZihpc051bGwoaW5zdGFuY2Uuc3RvcEF0KSB8fCBpc1VuZGVmaW5lZChpbnN0YW5jZS5zdG9wQXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0b3BBdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZG93biA/XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQuZ2V0VGltZSgpID49IHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0LmdldFRpbWUoKSA8PSB0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzTnVtYmVyKHRoaXMuc3RvcEF0KSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IoKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpIC0gdGhpcy5vcmlnaW5hbFZhbHVlLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRkb3duID9cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdCA+PSBkaWZmOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0IDw9IGRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBzdG9wQXQgcHJvcGVydHkgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBEYXRlIG9yIE51bWJlci5gKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMCkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpICsgdmFsdWUgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgdmFsdWUgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgLSB2YWx1ZSAtIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydGVkID0gaW5zdGFuY2UudGltZXIuaXNSdW5uaW5nID8gaW5zdGFuY2UudGltZXIuc3RhcnRlZCA6IG5ldyBEYXRlKERhdGUubm93KCkgLSA1MCk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXModmFsdWUsIHN0YXJ0ZWQpXSxcbiAgICAgICAgICAgIHRoaXMuc2hvd1NlY29uZHMgPyBbdGhpcy5nZXRTZWNvbmRzKHZhbHVlLCBzdGFydGVkKV0gOiBudWxsXG4gICAgICAgIF0uZmlsdGVyKG5vb3ApO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gcm91bmQodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCk7XG4gICAgfVxuXG4gICAgZ2V0U2Vjb25kcyhhLCBiKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhNYXRoLmNlaWwodG90YWxTZWNvbmRzID09PSA2MCA/IDAgOiB0b3RhbFNlY29uZHMgJSA2MCkpO1xuICAgIH1cblxuICAgIGdldFRvdGFsU2Vjb25kcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCkgPyAwIDogTWF0aC5yb3VuZCgoYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBNaW51dGVDb3VudGVyIGZyb20gJy4vTWludXRlQ291bnRlcic7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBUaGlzIGZhY2UgaXMgbWVhbnQgdG8gZGlzcGxheSBhIGNsb2NrIHRoYXQgc2hvd3NcbiAqICAgICBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyQ291bnRlciBleHRlbmRzIE1pbnV0ZUNvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2UudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRNaW51dGVzKGEsIGIpICUgNjApO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBIb3VyQ291bnRlciBmcm9tICcuL0hvdXJDb3VudGVyJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBpcyBtZWFudCB0byBkaXNwbGF5IGEgY2xvY2sgdGhhdCBzaG93cyBkYXlzLCBob3VycyxcbiAqICAgICBtaW51dGVzLCBhbmQgc2Vjb25kcy5cbiAqIEBleHRlbmRzIEhvdXJDb3VudGVyXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlDb3VudGVyIGV4dGVuZHMgSG91ckNvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2Uuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQpO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldEhvdXJzKGEsIGIpICUgMjQpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIHNob3dzIHRoZSBjdXJyZW50IHRpbWUgaW4gdHdlbnR5LWZvdXIgaG91ciBmb3JtYXQuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW1xuICAgICAgICAgICAgW3ZhbHVlLmdldEhvdXJzKCldLFxuICAgICAgICAgICAgW3ZhbHVlLmdldE1pbnV0ZXMoKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaChbdmFsdWUuZ2V0U2Vjb25kcygpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSwgb2Zmc2V0ID0gMCkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpICsgb2Zmc2V0ICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5zdGFuY2UudGltZXIubGFzdExvb3ApKTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIG9mZnNldCA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSAtIG9mZnNldCAtIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIHNob3dzIHRoZSBjdXJyZW50IHRpbWUgaW4gdHdlbHZlIGhvdXIgZm9ybWF0LCB3aXRoIEFNXG4gKiAgICAgYW5kIFBNLlxuICogQGV4dGVuZHMgRmFjZVxuICogQHBhcmFtIHsoRmFjZVZhbHVlfG9iamVjdCl9IHZhbHVlIC0gVGhlIGBGYWNlYCB2YWx1ZS4gSWYgbm90IGFuIGluc3RhbmNlXG4gKiAgICAgb2YgRmFjZVZhbHVlLCB0aGlzIGFyZ3VtZW50IGlzIGFzc3VtZWQgdG8gYmUgdGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gKiBAbWVtYmVyb2YgRmFjZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbHZlSG91ckNsb2NrIGV4dGVuZHMgVHdlbnR5Rm91ckhvdXJDbG9jayB7XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TWVyaWRpdW06IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gdmFsdWUuZ2V0SG91cnMoKTtcblx0XHRjb25zdCBncm91cHMgPSBbXG5cdFx0XHRob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IChob3VycyA9PT0gMCA/IDEyIDogaG91cnMpLFxuXHRcdFx0dmFsdWUuZ2V0TWludXRlcygpXG5cdFx0XTtcblxuICAgICAgICB0aGlzLm1lcmlkaXVtID0gaG91cnMgPiAxMiA/ICdwbScgOiAnYW0nO1xuXG5cdFx0aWYodGhpcy5zaG93U2Vjb25kcykge1xuXHRcdFx0Z3JvdXBzLnB1c2godmFsdWUuZ2V0U2Vjb25kcygpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERheUNvdW50ZXIgZnJvbSAnLi9EYXlDb3VudGVyJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBpcyBtZWFudCB0byBkaXNwbGF5IGEgY2xvY2sgdGhhdCBzaG93cyB3ZWVrcywgZGF5cyxcbiAqICAgICBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBGYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWVrQ291bnRlciBleHRlbmRzIERheUNvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2UudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldFdlZWtzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0IC8gNyk7XG4gICAgfVxuXG4gICAgZ2V0RGF5cyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXREYXlzKGEsIGIpICUgNyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgV2Vla0NvdW50ZXIgZnJvbSAnLi9XZWVrQ291bnRlcic7XG5cbi8qKlxuICogQGNsYXNzZGVzYyBUaGlzIGZhY2UgaXMgbWVhbnQgdG8gZGlzcGxheSBhIGNsb2NrIHRoYXQgc2hvd3MgeWVhcnMsIHdlZWtzLFxuICogICAgIGRheXMsIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kcy5cbiAqIEBleHRlbmRzIEZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJDb3VudGVyIGV4dGVuZHMgV2Vla0NvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2UudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldFllYXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldFdlZWtzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRZZWFycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KDAsIHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0IC8gNyAvIDUyKSk7XG4gICAgfVxuXG4gICAgZ2V0V2Vla3MoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0V2Vla3MoYSwgYikgJSA1Mik7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEZhY2VzIGFyZSBjbGFzc2VzIHRoYXQgaG9vayBpbnRvIHRoZSBjb3JlIG9mIEZsaXBjbG9jayB0byBwcm92aWRlIHVuaXF1ZVxuICogZnVuY3Rpb25hbGl0eS4gVGhlIGNvcmUgZG9lc24ndCBkbyBhIGxvdCwgZXhjZXB0IGZhY2lsaXRhdGUgdGhlIGludGVyYWN0aW9uXG4gKiBiZXR3ZWVuIGFsbCB0aGUgY29tcG9uZW50cy4gVGhlIEZhY2UgaXMgd2hhdCBtYWtlcyB0aGUgY2xvY2sgXCJ0aWNrXCIuXG4gKlxuICogQG5hbWVzcGFjZSBGYWNlc1xuICovXG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XG5pbXBvcnQgRGF5Q291bnRlciBmcm9tICcuL0RheUNvdW50ZXInO1xuaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuaW1wb3J0IE1pbnV0ZUNvdW50ZXIgZnJvbSAnLi9NaW51dGVDb3VudGVyJztcbmltcG9ydCBUd2VsdmVIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VsdmVIb3VyQ2xvY2snO1xuaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcbmltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcbmltcG9ydCBZZWFyQ291bnRlciBmcm9tICcuL1llYXJDb3VudGVyJztcblxuZXhwb3J0IHtcbiAgICBDb3VudGVyLFxuICAgIERheUNvdW50ZXIsXG4gICAgTWludXRlQ291bnRlcixcbiAgICBIb3VyQ291bnRlcixcbiAgICBUd2VsdmVIb3VyQ2xvY2ssXG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayxcbiAgICBXZWVrQ291bnRlcixcbiAgICBZZWFyQ291bnRlclxufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgdG9wJ30pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCBib3R0b20nfSlcbiAgICBdKTtcbn1cbiIsImltcG9ydCB7IG5leHQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmZ1bmN0aW9uIGNoaWxkKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBlbCA/IChlbC5jaGlsZE5vZGVzID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBlbFtpbmRleF0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hhcihlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwLWNsb2NrLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCAudG9wJykuaW5uZXJIVE1MIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnN0YW5jZS52YWx1ZS5kaWdpdHMubWFwKChncm91cCwgeCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEVsID0gY2hpbGQoaW5zdGFuY2UuZWwgPyBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1ncm91cCcpIDogbnVsbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsID8gZ3JvdXBFbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1saXN0JykgOiBudWxsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGluc3RhbmNlLmZhY2UuYW5pbWF0aW9uUmF0ZSB8fCBpbnN0YW5jZS5mYWNlLmRlbGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuXG4gICAgaW5zdGFuY2UuaXRlbXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGluc3RhbmNlLnZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGJlZm9yZVZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgXTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnJlbmRlcigpKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnN0YW5jZS5hY3RpdmUgPT09IHRydWUgPyAnYWN0aXZlJyA6IChcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlID09PSBmYWxzZSA/ICdiZWZvcmUnIDogbnVsbFxuICAgICk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAndG9wJ30pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ2JvdHRvbSd9KVxuICAgICAgICBdLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lcid9KVxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBUd2VudHlGb3VySG91ckNsb2NrKGVsLCBpbnN0YW5jZSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dNZXJpZGl1bSAmJiBpbnN0YW5jZS5mYWNlLm1lcmlkaXVtKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaW5zdGFuY2UuY3JlYXRlTGFiZWwoaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLmNoaWxkTm9kZXNbZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsYWJlbC5tb3VudChwYXJlbnQpLmNsYXNzTGlzdC5hZGQoJ2ZsaXAtY2xvY2stbWVyaWRpdW0nKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s4XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbN10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbOV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgneWVhcnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1sxMF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9GbGlwQ2xvY2snO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCAqIGFzIGZhY2VzIGZyb20gJy4vRmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRGl2aWRlcixcbiAgICBGbGlwQ2xvY2ssXG4gICAgR3JvdXAsXG4gICAgTGFiZWwsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBmYWNlc1xufTtcbiIsImltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgeyBPcmlnaW5hbCB9IGZyb20gJy4uL1RoZW1lcyc7XG5pbXBvcnQgeyBFbmdsaXNoIH0gZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuLyoqXG4gKiBAYWxpYXMgRGVmYXVsdFZhbHVlc1xuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Q29uZmlnL0RlZmF1bHRWYWx1ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZhY2U6IENvdW50ZXIsXG4gICAgdGhlbWU6IE9yaWdpbmFsLFxuICAgIGxhbmd1YWdlOiBFbmdsaXNoXG59O1xuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi9GYWNlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0ICogYXMgRmFjZXMgZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IEZhY2VWYWx1ZSBmcm9tICcuL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBEZWZhdWx0VmFsdWVzIGZyb20gJy4uL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBmbGF0dGVuLCBpc051bGwsIGlzU3RyaW5nLCBpc09iamVjdCwgaXNVbmRlZmluZWQsIGlzRnVuY3Rpb24sIGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGlwQ2xvY2sgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQGNsYXNzIEZsaXBDbG9ja1xuICAgICAqIEBleHRlbmRzIERvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIHRvIGJpbmQgY2xvY2sgRE9NIG5vZGUuXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY2xvY2sgZmFjZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighdmFsaWRhdGUoZWwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNPYmplY3QodmFsdWUpICYmICFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZhY2UgPSBhdHRyaWJ1dGVzLmZhY2UgfHwgRGVmYXVsdFZhbHVlcy5mYWNlO1xuXG4gICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmZhY2U7XG5cbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBEZWZhdWx0VmFsdWVzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aW1lcjogVGltZXIubWFrZShhdHRyaWJ1dGVzLmludGVydmFsIHx8IDEwMDApLFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMuZmFjZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlID0gZmFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW91bnQoZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2xvY2sgYEZhY2VgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7RmFjZX0gVGhlIGBmYWNlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRmYWNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNsb2NrIGBGYWNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufEZhY2V8c3RyaW5nfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZmFjZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIFtGYWNlLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJ10pKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRmYWNlID0gKEZhY2VzW3ZhbHVlXSB8fCB2YWx1ZSkubWFrZShPYmplY3QuYXNzaWduKHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpLCB7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB0aGlzLmZhY2UgPyB0aGlzLmZhY2Uub3JpZ2luYWxWYWx1ZSA6IHVuZGVmaW5lZFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kZmFjZS5pbml0aWFsaXplZCh0aGlzKTtcblxuICAgICAgICBpZih0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRmYWNlLnZhbHVlID0gdGhpcy5mYWNlLmNyZWF0ZUZhY2VWYWx1ZSh0aGlzLCB0aGlzLnZhbHVlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gVGhlIGBzdG9wQXRgIHZhbHVlLlxuICAgICAqL1xuICAgIGdldCBzdG9wQXQoKSB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMuJHN0b3BBdCkgPyB0aGlzLiRzdG9wQXQodGhpcykgOiB0aGlzLiRzdG9wQXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBgc3RvcEF0YCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgc3RvcEF0YCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7VGltZXJ9IFRoZSBgdGltZXJgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdGltZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aW1lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtUaW1lcn0gdGltZXIgLSBUaGUgYHRpbWVyYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgdGltZXIodGltZXIpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHRpbWVyLCBUaW1lcikpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aW1lciA9IHRpbWVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBjbG9jaydzIGBGYWNlVmFsdWVgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7RmFjZVZhbHVlfG51bGx9IFRoZSBgRmFjZVZhbHVlYCBpZiBzZXQsIG90aGVyd2lzZSBgbnVsbGAuXG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNlID8gdGhpcy5mYWNlLnZhbHVlIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgY2xvY2sncyBgRmFjZVZhbHVlYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF0aGlzLmZhY2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBmYWNlIG11c3QgYmUgc2V0IGJlZm9yZSBzZXR0aW5nIGEgdmFsdWUuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS52YWx1ZS5jbG9uZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhY2UudmFsdWUgPSB0aGlzLmZhY2UuY3JlYXRlRmFjZVZhbHVlKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG9yaWdpbmFsIHZhbHVlIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBvcmlnaW5hbFZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIGlmKGlzRnVuY3Rpb24odGhpcy4kb3JpZ2luYWxWYWx1ZSkgJiYgIXRoaXMuJG9yaWdpbmFsVmFsdWUubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG9yaWdpbmFsVmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFpc1VuZGVmaW5lZCh0aGlzLiRvcmlnaW5hbFZhbHVlKSAmJiAhaXNOdWxsKHRoaXMuJG9yaWdpbmFsVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UgPyB0aGlzLmZhY2UuZGVmYXVsdFZhbHVlKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBvcmlnaW5hbCB2YWx1ZSBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IG9yaWdpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBjbG9jayB0byB0aGUgcGFyZW50IERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgcGFyZW50IGBIVE1MRWxlbWVudGAuXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBtb3VudChlbCkge1xuICAgICAgICBzdXBlci5tb3VudChlbCk7XG5cbiAgICAgICAgdGhpcy5mYWNlLm1vdW50ZWQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbG9jaydzIERPTSBub2Rlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgcGFyZW50IGBIVE1MRWxlbWVudGAuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBDYWxsIHRoZSBwYXJlbnQgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZmFjZSBoYXMgYSByZW5kZXIgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGEgZmFjZSB0byBjb21wbGV0ZWx5IHJlLXJlbmRlciBvciBhZGQgdG8gdGhlIHRoZW1lLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBmYWNlIHNwZWNpZmljIGludGVyZmFjZXMgZm9yIGEgdGhlbWUuXG4gICAgICAgIGlmKHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lLmZhY2VzW3RoaXMuZmFjZS5uYW1lXSh0aGlzLmVsLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhc3MgdGhlIGNsb2NrIGluc3RhbmNlIHRvIHRoZSByZW5kZXJlZCgpIGZ1bmN0aW9uIG9uIHRoZSBmYWNlLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBnbG9iYWwgbW9kaWZpY2F0aW9ucyB0byB0aGUgcmVuZGVyZWQgdGVtcGxhdGVzIG5vdFxuICAgICAgICAvLyB0aGVtZSBzcGVjaWZpYy5cbiAgICAgICAgdGhpcy5mYWNlLnJlbmRlcmVkKHRoaXMpO1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgcmVuZGVyZWQgYEhUTUxFbGVtZW50YC5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIGNsb2NrLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgaWYoIXRoaXMudGltZXIuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVW5kZWZpbmVkKHRoaXMuZmFjZS5zdG9wQXQpICYmICh0aGlzLmZhY2Uuc3RvcEF0ID0gdGhpcy5zdG9wQXQpO1xuICAgICAgICBpc1VuZGVmaW5lZCh0aGlzLmZhY2Uub3JpZ2luYWxWYWx1ZSkgJiYgKHRoaXMuZmFjZS5vcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlKTtcblxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS5pbnRlcnZhbCh0aGlzLCBmbilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mYWNlLnN0YXJ0ZWQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHRoZSBjbG9jay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBzdG9wIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoZm4pO1xuICAgICAgICB0aGlzLmZhY2Uuc3RvcHBlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGNsb2NrIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWU7XG4gICAgICAgIHRoaXMudGltZXIucmVzZXQoKCkgPT4gdGhpcy5pbnRlcnZhbCh0aGlzLCBmbikpO1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluY3JlbWVudCB0aGUgY2xvY2sncyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp8dW5kZWZpbmVkfSB2YWx1ZSAtIEluY3JlbWVudCB0aGUgY2xvY2sgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiAgICAgSWYgbm8gdmFsdWUgaXMgcGFzc2VkLCB0aGVuIHRoZSBkZWZhdWx0IGluY3JlbWVudCBpcyBkZXRlcm1pbmVkIGJ5XG4gICAgICogICAgIHRoZSBGYWNlLCB3aGljaCBpcyB1c3VhbGx5IGAxYC4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UuaW5jcmVtZW50KHRoaXMsIHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGRlY3JlbWVudCB0aGUgY2xvY2sncyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp8dW5kZWZpbmVkfSB2YWx1ZSAtIERlY3JlbWVudCB0aGUgY2xvY2sgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiAgICAgSWYgbm8gdmFsdWUgaXMgcGFzc2VkLCB0aGVuIHRoZSBkZWZhdWx0IGRlY3JlbWVudCBpcyBkZXRlcm1pbmVkIGJ5XG4gICAgICogICAgIHRoZSBgRmFjZWAsIHdoaWNoIGlzIHVzdWFsbHkgYDFgLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZGVjcmVtZW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS5kZWNyZW1lbnQodGhpcywgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYERpdmlkZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgRGl2aWRlcmAgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7RGl2aWRlcn0gLSBUaGUgaW5zdGFudGlhdGVkIERpdmlkZXIuXG4gICAgICovXG4gICAgY3JlYXRlRGl2aWRlcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBEaXZpZGVyLm1ha2UoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBMaXN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGBMaXN0YCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBMaXN0YCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtMaXN0fSAtIFRoZSBpbnN0YW50aWF0ZWQgYExpc3RgLlxuICAgICAqL1xuICAgIGNyZWF0ZUxpc3QodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExpc3QubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBMYWJlbGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgTGFiZWxgIHZhbHVlLlxuICAgICAqIEBwYXJhbSAge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBhdHRyaWJ1dGVzIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgYExhYmVsYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtMYWJlbH0gLSBUaGUgaW5zdGFudGlhdGVkIGBMYWJlbGAuXG4gICAgICovXG4gICAgY3JlYXRlTGFiZWwodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExhYmVsLm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgR3JvdXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7YXJyYXl9IGl0ZW1zIC0gQW4gYXJyYXkgb2YgYExpc3RgIGl0ZW1zIHRvIGdyb3VwLlxuICAgICAqIEBwYXJhbSAge0dyb3VwfHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgR3JvdXBgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0dyb3VwfSAtIFRoZSBpbnN0YW50aWF0ZWQgYEdyb3VwYC5cbiAgICAgKi9cbiAgICBjcmVhdGVHcm91cChpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gR3JvdXAubWFrZShpdGVtcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGdsb2JhbCBkZWZhdWx0IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgZGVmYXVsdCBgRmFjZWAgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGYWNlfSB2YWx1ZSAtIFRoZSBkZWZhdWx0IGBGYWNlYCBjbGFzcy5UaGlzIHNob3VsZCBiZSBhXG4gICAgICogICAgIGNvbnN0cnVjdG9yLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgRmFjZSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMuZmFjZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gc2V0IHRoZSBkZWZhdWx0IHRoZW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RGVmYXVsdFRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGhlbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy50aGVtZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBzZXQgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgZGVmYXVsdCBsYW5ndWFnZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsiZXJyb3IiLCJzdHJpbmciLCJFcnJvciIsImNhbGxiYWNrIiwiZm4iLCJpc0Z1bmN0aW9uIiwiYXJncyIsImNhbGwiLCJyb3VuZCIsInZhbHVlIiwiaXNOZWdhdGl2ZVplcm8iLCJpc05lZ2F0aXZlIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInRvU3RyaW5nIiwibm9vcCIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwiY2hhaW4iLCJiZWZvcmUiLCJhZnRlciIsImNvbmNhdE1hcCIsIngiLCJtYXAiLCJyZWR1Y2UiLCJ5IiwiY29uY2F0IiwiZmxhdHRlbiIsImRlZXBGbGF0dGVuIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiSW5maW5pdHkiLCJpc0NvbnN0cnVjdG9yIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsInR5cGUiLCJpc051bWJlciIsImlzTmFOIiwia2ViYWJDYXNlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50cyIsImtleSIsImZvckVhY2giLCJldmVudCIsImFwcGx5IiwicHVzaCIsImZpbHRlciIsIm9mZiIsIm9uIiwiaGFzT3duUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0QXR0cmlidXRlIiwia2V5cyIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsIm9iaiIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZXMiLCJpIiwiY29uc3RydWN0b3IiLCIkZXZlbnRzIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInNwbGl0IiwiZGlnaXRzIiwiYXJyIiwibWluIiwidW5zaGlmdCIsIlJBTkdFUyIsIm1heCIsImZvcm1hdCIsInBhcnNlRmxvYXQiLCJmaW5kUmFuZ2UiLCJjaGFyIiwiY29kZSIsImNoYXJDb2RlQXQiLCJzdHJpbmdGcm9tQ2hhckNvZGVCeSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5leHQiLCJjb252ZXJ0ZWQiLCJyYW5nZSIsImpvaW4iLCJwcmV2IiwiRmFjZVZhbHVlIiwiZ2V0UHVibGljQXR0cmlidXRlcyIsIiRkaWdpdHMiLCIkdmFsdWUiLCJ2YWxpZGF0ZSIsInN1Y2Nlc3MiLCJhcmciLCJpdGVtcyIsInRoZW1lIiwibGFuZ3VhZ2UiLCJkYXRlIiwiZmFjZSIsImVsZW1lbnQiLCJmYWNlVmFsdWUiLCJ0aW1lciIsIkZhY2UiLCJ1bmRlZmluZWQiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJkZWZhdWx0VmFsdWUiLCJpbnN0YW5jZSIsImRlY3JlbWVudCIsImluY3JlbWVudCIsInNob3VsZFN0b3AiLCJzdG9wIiwiZW1pdCIsInN0b3BBdCIsImFtb3VudCIsImlzU3RvcHBlZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0IiwibWFrZSIsImRlZmF1bHREYXRhVHlwZSIsImNyZWF0ZUZhY2VWYWx1ZSIsIiRzdG9wQXQiLCIkb3JpZ2luYWxWYWx1ZSIsImRpY3Rpb25hcnkiLCJhbGlhc2VzIiwiTEFOR1VBR0VTIiwiZmluZCIsImluZGV4T2YiLCJ0cmFuc2xhdGUiLCJmcm9tIiwibGFuZyIsInN3YXAiLCJzdWJqZWN0IiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZWwiLCJhcHBlbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJIVE1MRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiaW5uZXJIVE1MIiwiRG9tQ29tcG9uZW50IiwicGFyZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiaW5zZXJ0QmVmb3JlIiwiJGVsIiwiQ29uc29sZU1lc3NhZ2VzIiwiJHBhcmVudCIsIiR0aGVtZSIsIiRsYW5ndWFnZSIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiVGltZXIiLCJpbnRlcnZhbCIsImNvdW50IiwiaGFuZGxlIiwic3RhcnRlZCIsInJ1bm5pbmciLCJEYXRlIiwibGFzdExvb3AiLCJub3ciLCJsb29wIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZ2V0VGltZSIsIkNvdW50ZXIiLCJNaW51dGVDb3VudGVyIiwic2hvd1NlY29uZHMiLCJzaG93TGFiZWxzIiwiZGlmZiIsIm9yaWdpbmFsVmFsdWUiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImEiLCJiIiwiZ2V0VG90YWxTZWNvbmRzIiwidG90YWxTZWNvbmRzIiwiYWJzIiwiSG91ckNvdW50ZXIiLCJkYXRhIiwiZ2V0SG91cnMiLCJEYXlDb3VudGVyIiwiZ2V0RGF5cyIsIlR3ZW50eUZvdXJIb3VyQ2xvY2siLCJncm91cHMiLCJvZmZzZXQiLCJUd2VsdmVIb3VyQ2xvY2siLCJzaG93TWVyaWRpdW0iLCJob3VycyIsIm1lcmlkaXVtIiwiV2Vla0NvdW50ZXIiLCJnZXRXZWVrcyIsIlllYXJDb3VudGVyIiwiZ2V0WWVhcnMiLCJpbmRleCIsImNoaWxkTm9kZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFydHMiLCJncm91cCIsImdyb3VwRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlzdHMiLCJsaXN0RWwiLCJsaXN0VmFsdWUiLCJjcmVhdGVMaXN0IiwiZG9tVmFsdWUiLCJkZWxheSIsImNyZWF0ZUdyb3VwIiwibm9kZXMiLCJ0IiwiYmVmb3JlVmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjcmVhdGVMaXN0SXRlbSIsImFjdGl2ZSIsImNyZWF0ZURpdmlkZXIiLCJtb3VudCIsImNyZWF0ZUxhYmVsIiwiRmxpcENsb2NrIiwiZmFjZXMiLCJPcmlnaW5hbCIsIkVuZ2xpc2giLCJEZWZhdWx0VmFsdWVzIiwibW91bnRlZCIsInJlbmRlcmVkIiwic3RvcHBlZCIsInJlc2V0IiwiJGZhY2UiLCJGYWNlcyIsImluaXRpYWxpemVkIiwiJHRpbWVyIiwiY2xvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
