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

    /**  @namespace Helpers */

    /**
     * Throw a string as an Error exception.
     *
     * @function error
     * @param  {string} string - The error message.
     * @return {void}
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
       * @memberof Components
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
       * @memberof Components.Component
       * @return {string} - The `name` attribute.
       */


      _createClass(Component, [{
        key: "emit",

        /**
         * Emit an event.
         *
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
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
         * @memberof Components.Component
         * @return {Array} - The `events` attribute.
         */

      }, {
        key: "events",
        get: function get() {
          return this.$events || [];
        }
        /**
         * Set the registered events for this class.
         *
         * @memberof Components.Component
         * @param  {Array} value - The new events array.
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
     * Digitize a number, string, or an array into a digitized array. This function
     * use by the `Face`, which convert the digitized array into an array of `List`
     * instances.
     *
     * @function digitize
     * @param  {*} value - The value to digitize.
     * @param  {(Object|undefined)} [options] - The digitizer options.
     * @return {Array} - The digitized array.
     * @memberof Helpers
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

    /**  @namespace Helpers */

    /**
     * An array of objects with min/max ranges.
     * @type {Array}
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
       * @memberof Components
       * @class FaceValue
       * @extends Components.Component
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
       * @memberof Components.FaceValue
       * @return {(Array|undefined)} - The `digits` attribute.
       */


      _createClass(FaceValue, [{
        key: "isNaN",

        /**
         * Returns `true` if the `value` attribute is not a number.
         *
         * @memberof Components.FaceValue
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
         * @memberof Components.FaceValue
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
         * @memberof Components.FaceValue
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
         * @memberof Components.FaceValue
         * @param  {Array} value - An array of digits/characters.
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
         * @memberof Components.FaceValue
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
         * @memberof Components.FaceValue
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
     * Validate the data type of a Validate.
     *
     * @function validate
     * @param {*} value - The value to validate.
     * @param {...*} args - The data types to use for validate.
     * @return {boolean} - Returns `true`is the value has a valid data type.
     * @memberof Helpers
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
     * @memberof Config
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
       * @memberof Components
       * @class Face
       * @extends Components.Component
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
       * @memberof Components.Face
       * @return {*} - The `dataType` attribute.
       */


      _createClass(Face, [{
        key: "interval",

        /**
         * This method is called with every interval, or every time the clock
         * should change, and handles the actual incrementing and decrementing the
         * clock's `FaceValue`.
         *
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
         * @return {*} - The default value.
         */

      }, {
        key: "defaultValue",
        value: function defaultValue() {} //

        /**
         * The default attributes for the `Face`.
         *
         * @memberof Components.Face
         * @return {(Object|undefined)} - The default attributes.
         */

      }, {
        key: "defaultAttributes",
        value: function defaultAttributes() {} //

        /**
         * The default data type for the `Face` value.
         *
         * @memberof Components.Face
         * @return {(Object|undefined)} - The default data type.
         */

      }, {
        key: "defaultDataType",
        value: function defaultDataType() {} //

        /**
         * Increment the clock.
         *
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "started",
        value: function started(instance) {} //

        /**
         * This method is called right after clock has stopped.
         *
         * @memberof Components.Face
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "stopped",
        value: function stopped(instance) {} //

        /**
         * This method is called right after clock has reset.
         *
         * @memberof Components.Face
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "reset",
        value: function reset(instance) {} //

        /**
         * This method is called right after `Face` has initialized.
         *
         * @memberof Components.Face
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "initialized",
        value: function initialized(instance) {} //

        /**
         * This method is called right after `Face` has rendered.
         *
         * @memberof Components.Face
         * @param  {FlipClock} instance - The `FlipClock` instance.
         * @return {void}
         */

      }, {
        key: "rendered",
        value: function rendered(instance) {} //

        /**
         * This method is called right after `Face` has mounted.
         *
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
         * @memberof Components.Face
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
     * FlipClock Arabic Language Pack
     *
     * This class will be used to translate tokens into the Arabic language.
     */
    var dictionary = {
      'years': 'سنوات',
      'months': 'شهور',
      'days': 'أيام',
      'hours': 'ساعات',
      'minutes': 'دقائق',
      'seconds': 'ثواني'
    };
    var aliases = ['ar', 'ar-ar', 'arabic'];

    var arAr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary,
        aliases: aliases
    });

    /**
     * FlipClock Catalan Language Pack
     *
     * This class will used to translate tokens into the Catalan language.
     */
    var dictionary$1 = {
      'years': 'Anys',
      'months': 'Mesos',
      'days': 'Dies',
      'hours': 'Hores',
      'minutes': 'Minuts',
      'seconds': 'Segons'
    };
    var aliases$1 = ['ca', 'ca-es', 'catalan'];

    var caEs = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$1,
        aliases: aliases$1
    });

    /**
     * FlipClock Czech Language Pack
     *
     * This class will used to translate tokens into the Czech language.
     */
    var dictionary$2 = {
      'years': 'Roky',
      'months': 'Měsíce',
      'days': 'Dny',
      'hours': 'Hodiny',
      'minutes': 'Minuty',
      'seconds': 'Sekundy'
    };
    var aliases$2 = ['cs', 'cs-cz', 'cz', 'cz-cs', 'czech'];

    var csCz = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$2,
        aliases: aliases$2
    });

    /**
     * FlipClock Danish Language Pack
     *
     * This class will used to translate tokens into the Danish language.
     */
    var dictionary$3 = {
      'years': 'År',
      'months': 'Måneder',
      'days': 'Dage',
      'hours': 'Timer',
      'minutes': 'Minutter',
      'seconds': 'Sekunder'
    };
    var aliases$3 = ['da', 'da-dk', 'danish'];

    var daDk = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$3,
        aliases: aliases$3
    });

    /**
     * FlipClock German Language Pack
     *
     * This class will used to translate tokens into the German language.
     */
    var dictionary$4 = {
      'years': 'Jahre',
      'months': 'Monate',
      'days': 'Tage',
      'hours': 'Stunden',
      'minutes': 'Minuten',
      'seconds': 'Sekunden'
    };
    var aliases$4 = ['de', 'de-de', 'german'];

    var deDe = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$4,
        aliases: aliases$4
    });

    /**
     * FlipClock English Language Pack
     *
     * This class will used to translate tokens into the English language.
     */
    var dictionary$5 = {
      'years': 'Years',
      'months': 'Months',
      'days': 'Days',
      'hours': 'Hours',
      'minutes': 'Minutes',
      'seconds': 'Seconds'
    };
    var aliases$5 = ['en', 'en-us', 'english'];

    var English = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$5,
        aliases: aliases$5
    });

    /**
     * FlipClock Spanish Language Pack
     *
     * This class will used to translate tokens into the Spanish language.
     */
    var dictionary$6 = {
      'years': 'Años',
      'months': 'Meses',
      'days': 'Días',
      'hours': 'Horas',
      'minutes': 'Minutos',
      'seconds': 'Segundos'
    };
    var aliases$6 = ['es', 'es-es', 'spanish'];

    var esEs = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$6,
        aliases: aliases$6
    });

    /**
     * FlipClock Persian Language Pack
     *
     * This class will used to translate tokens into the English language.
     */
    var dictionary$7 = {
      'years': 'سال',
      'months': 'ماه',
      'days': 'روز',
      'hours': 'ساعت',
      'minutes': 'دقیقه',
      'seconds': 'ثانیه'
    };
    var aliases$7 = ['fa', 'fa-ir', 'persian'];

    var faIr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$7,
        aliases: aliases$7
    });

    /**
     * FlipClock Finnish Language Pack
     *
     * This class will used to translate tokens into the Finnish language.
     */
    var dictionary$8 = {
      'years': 'Vuotta',
      'months': 'Kuukautta',
      'days': 'Päivää',
      'hours': 'Tuntia',
      'minutes': 'Minuuttia',
      'seconds': 'Sekuntia'
    };
    var aliases$8 = ['fi', 'fi-fi', 'finnish'];

    var fiFi = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$8,
        aliases: aliases$8
    });

    /**
     * FlipClock Canadian French Language Pack
     *
     * This class will used to translate tokens into the Canadian French language.
     */
    var dictionary$9 = {
      'years': 'Ans',
      'months': 'Mois',
      'days': 'Jours',
      'hours': 'Heures',
      'minutes': 'Minutes',
      'seconds': 'Secondes'
    };
    var aliases$9 = ['fr', 'fr-ca', 'french'];

    var frCa = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$9,
        aliases: aliases$9
    });

    /**
     * FlipClock Hebrew Language Pack
     *
     * This class will used to translate tokens into the Canadian French language.
     */
    var dictionary$10 = {
      'years': 'שנים',
      'months': 'חודש',
      'days': 'ימים',
      'hours': 'שעות',
      'minutes': 'דקות',
      'seconds': 'שניות'
    };
    var aliases$10 = ['il', 'he-il', 'hebrew'];

    var heIl = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$10,
        aliases: aliases$10
    });

    /**
     * FlipClock Hungarian Language Pack
     *
     * This class will used to translate tokens into the Hungarian language.
     */
    var dictionary$11 = {
      'years': 'Év',
      'months': 'Hónap',
      'days': 'Nap',
      'hours': 'Óra',
      'minutes': 'Perc',
      'seconds': 'Másodperc'
    };
    var aliases$11 = ['hu', 'hu-hu', 'hungarian'];

    var huHu = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$11,
        aliases: aliases$11
    });

    /**
     * FlipClock Italian Language Pack
     *
     * This class will used to translate tokens into the Italian language.
     */
    var dictionary$12 = {
      'years': 'Anni',
      'months': 'Mesi',
      'days': 'Giorni',
      'hours': 'Ore',
      'minutes': 'Minuti',
      'seconds': 'Secondi'
    };
    var aliases$12 = ['da', 'da-dk', 'danish'];

    var itIt = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$12,
        aliases: aliases$12
    });

    /**
     * FlipClock Japanese Language Pack
     *
     * This class will used to translate tokens into the Japanese language.
     */
    var dictionary$13 = {
      'years': '年',
      'months': '月',
      'days': '日',
      'hours': '時',
      'minutes': '分',
      'seconds': '秒'
    };
    var aliases$13 = ['jp', 'ja-jp', 'japanese'];

    var jaJp = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$13,
        aliases: aliases$13
    });

    /**
     * FlipClock Korean Language Pack
     *
     * This class will used to translate tokens into the Korean language.
     */
    var dictionary$14 = {
      'years': '년',
      'months': '월',
      'days': '일',
      'hours': '시',
      'minutes': '분',
      'seconds': '초'
    };
    var aliases$14 = ['ko', 'ko-kr', 'korean'];

    var koKr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$14,
        aliases: aliases$14
    });

    /**
     * FlipClock Latvian Language Pack
     *
     * This class will used to translate tokens into the Latvian language.
     */
    var dictionary$15 = {
      'years': 'Gadi',
      'months': 'Mēneši',
      'days': 'Dienas',
      'hours': 'Stundas',
      'minutes': 'Minūtes',
      'seconds': 'Sekundes'
    };
    var aliases$15 = ['lv', 'lv-lv', 'latvian'];

    var lvLv = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$15,
        aliases: aliases$15
    });

    /**
     * FlipClock Dutch Language Pack
     *
     * This class will used to translate tokens into the Dutch language.
     */
    var dictionary$16 = {
      'years': 'Jaren',
      'months': 'Maanden',
      'days': 'Dagen',
      'hours': 'Uren',
      'minutes': 'Minuten',
      'seconds': 'Seconden'
    };
    var aliases$16 = ['nl', 'nl-be', 'dutch'];

    var nlBe = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$16,
        aliases: aliases$16
    });

    /**
     * FlipClock Norwegian-Bokmål Language Pack
     *
     * This class will used to translate tokens into the Norwegian language.
     */
    var dictionary$17 = {
      'years': 'År',
      'months': 'Måneder',
      'days': 'Dager',
      'hours': 'Timer',
      'minutes': 'Minutter',
      'seconds': 'Sekunder'
    };
    var aliases$17 = ['no', 'nb', 'no-nb', 'norwegian'];

    var noNb = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$17,
        aliases: aliases$17
    });

    /**
     * FlipClock Polish Language Pack
     *
     * This class will used to translate tokens into the Polish language.
     */
    var dictionary$18 = {
      'years': 'Lat',
      'months': 'Miesięcy',
      'days': 'Dni',
      'hours': 'Godziny',
      'minutes': 'Minuty',
      'seconds': 'Sekundy'
    };
    var aliases$18 = ['pl', 'pl-pl', 'polish'];

    var plPl = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$18,
        aliases: aliases$18
    });

    /**
     * FlipClock Portuguese Language Pack
     *
     * This class will used to translate tokens into the Portuguese language.
     */
    var dictionary$19 = {
      'years': 'Anos',
      'months': 'Meses',
      'days': 'Dias',
      'hours': 'Horas',
      'minutes': 'Minutos',
      'seconds': 'Segundos'
    };
    var aliases$19 = ['pt', 'pt-br', 'portuguese'];

    var ptBr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$19,
        aliases: aliases$19
    });

    /**
     * FlipClock Swedish Language Pack
     *
     * This class will used to translate tokens into the Swedish language.
     */
    var dictionary$20 = {
      'years': 'Ani',
      'months': 'Luni',
      'days': 'Zile',
      'hours': 'Ore',
      'minutes': 'Minute',
      'seconds': 'sSecunde'
    };
    var aliases$20 = ['ro', 'ro-ro', 'romana'];

    var roRo = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$20,
        aliases: aliases$20
    });

    /**
     * FlipClock Russian Language Pack
     *
     * This class will used to translate tokens into the Russian language.
     */
    var dictionary$21 = {
      'years': 'лет',
      'months': 'месяцев',
      'days': 'дней',
      'hours': 'часов',
      'minutes': 'минут',
      'seconds': 'секунд'
    };
    var aliases$21 = ['ru', 'ru-ru', 'russian'];

    var ruRu = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$21,
        aliases: aliases$21
    });

    /**
     * FlipClock Slovak Language Pack
     *
     * This class will used to translate tokens into the Slovak language.
     */
    var dictionary$22 = {
      'years': 'Roky',
      'months': 'Mesiace',
      'days': 'Dni',
      'hours': 'Hodiny',
      'minutes': 'Minúty',
      'seconds': 'Sekundy'
    };
    var aliases$22 = ['sk', 'sk-sk', 'slovak'];

    var skSk = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$22,
        aliases: aliases$22
    });

    /**
     * FlipClock Swedish Language Pack
     *
     * This class will used to translate tokens into the Swedish language.
     */
    var dictionary$23 = {
      'years': 'År',
      'months': 'Månader',
      'days': 'Dagar',
      'hours': 'Timmar',
      'minutes': 'Minuter',
      'seconds': 'Sekunder'
    };
    var aliases$23 = ['sv', 'sv-se', 'swedish'];

    var svSe = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$23,
        aliases: aliases$23
    });

    /**
     * FlipClock Thai Language Pack
     *
     * This class will used to translate tokens into the Thai language.
     */
    var dictionary$24 = {
      'years': 'ปี',
      'months': 'เดือน',
      'days': 'วัน',
      'hours': 'ชั่วโมง',
      'minutes': 'นาที',
      'seconds': 'วินาที'
    };
    var aliases$24 = ['th', 'th-th', 'thai'];

    var thTh = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$24,
        aliases: aliases$24
    });

    /**
     * FlipClock Turkish Language Pack
     *
     * This class will used to translate tokens into the Turkish language.
     */
    var dictionary$25 = {
      'years': 'Yıl',
      'months': 'Ay',
      'days': 'Gün',
      'hours': 'Saat',
      'minutes': 'Dakika',
      'seconds': 'Saniye'
    };
    var aliases$25 = ['tr', 'tr-tr', 'turkish'];

    var trTr = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$25,
        aliases: aliases$25
    });

    /**
     * FlipClock Ukrainian Language Pack
     *
     * This class will used to translate tokens into the Ukrainian language.
     */
    var dictionary$26 = {
      'years': 'роки',
      'months': 'місяці',
      'days': 'дні',
      'hours': 'години',
      'minutes': 'хвилини',
      'seconds': 'секунди'
    };
    var aliases$26 = ['ua', 'ua-ua', 'ukraine'];

    var uaUa = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$26,
        aliases: aliases$26
    });

    /**
     * FlipClock Traditional Vietnamese Language Pack
     *
     * This class will used to translate tokens into Vietnamese.
     */
    var dictionary$27 = {
      'years': 'Năm',
      'months': 'Tháng',
      'days': 'Ngày',
      'hours': 'Giờ',
      'minutes': 'Phút',
      'seconds': 'Giây'
    };
    var aliases$27 = ['vn', 'vn-vn', 'vietnamese'];

    var vnVn = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$27,
        aliases: aliases$27
    });

    /**
     * FlipClock Chinese Language Pack
     *
     * This class will used to translate tokens into the Chinese language.
     */
    var dictionary$28 = {
      'years': '年',
      'months': '月',
      'days': '日',
      'hours': '时',
      'minutes': '分',
      'seconds': '秒'
    };
    var aliases$28 = ['zh', 'zh-cn', 'chinese'];

    var zhCn = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$28,
        aliases: aliases$28
    });

    /**
     * FlipClock Traditional Chinese Language Pack
     *
     * This class will used to translate tokens into the Traditional Chinese.
     */
    var dictionary$29 = {
      'years': '年',
      'months': '月',
      'days': '日',
      'hours': '時',
      'minutes': '分',
      'seconds': '秒'
    };
    var aliases$29 = ['zh-tw'];

    var zhTw = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$29,
        aliases: aliases$29
    });



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

    /**  @namespace Helpers */
    /**
     * Return the language associated with the key. Returns `null` if no language is
     * found.
     *
     * @function language
     * @param  {string} name - The name or id of the language.
     * @return {object|null} - The language dictionary, or null if not found.
     * @memberof Helpers
     */

    function language(name) {
      return name ? LANGUAGES[name.toLowerCase()] || Object.values(LANGUAGES).find(function (value) {
        return value.aliases.indexOf(name) !== -1;
      }) : null;
    }

    /**  @namespace Helpers */
    /**
     * Translate a string from a language.
     *
     * @function translate
     * @param {string} string - The string to translate.
     * @param {(string|object)} from - The language used to translate. If a string,
     *     the language is loaded into an object.
     * @return {string} - If no diction key is found, the untranslated string is
     *     returned.
     * @memberof Helpers
     */

    function translate(string, from) {
      var lang = isString(from) ? language(from) : from;
      var dictionary = lang.dictionary || lang;
      return dictionary[string] || string;
    }

    /**  @namespace Helpers */
    /**
     * Swap a new DOM node with an existing one.
     *
     * @function swap
     * @param  {HTMLElement} subject - The new DOM node.
     * @param  {HTMLElement} existing - The existing DOM node.
     * @return {HTMLElement} - Returns the new element if it was mounted, otherwise
     *    the existing node is returned.
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
     * @memberof Helpers
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
       * @memberof Components
       * @class DomComponent
       * @extends Components.Component
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
       * @memberof Components.DomComponent
       * @return {HTMLElement} - The `el` attribute.
       */


      _createClass(DomComponent, [{
        key: "translate",

        /**
         * Translate a string.
         *
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
         * @memberof Components.DomComponent
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
     * @memberof Components
     * @class Divider
     * @extends Components.DomComponent
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
       * @memberof Components
       * @class ListItem
       * @extends Components.DomComponent
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
       * @memberof Components
       * @class List
       * @extends Components.DomComponent
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
       * @memberof Components.List
       * @return {(Number|String)} - The `value` attribute.
       */


      _createClass(List, [{
        key: "createListItem",

        /**
         * Helper method to instantiate a new `ListItem`.
         *
         * @memberof Components.List
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
         * @memberof Components.List
         * @param  {Array} value - The `value` attribute.
         * @return {(Number|String)} - The `value` attribute.
         */
        ,
        set: function set(value) {
          this.$value = value;
        }
        /**
         * Get the `items` attribute.
         *
         * @memberof Components.List
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
         * @memberof Components.List
         * @param  {Array} value - The `items` attribute.
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
       * @memberof Components
       * @class Group
       * @extends Components.DomComponent
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
       * @memberof Components
       * @class Label
       * @extends Components.DomComponent
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
       * @memberof Components
       * @class Timer
       * @extends Components.Component
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
       * @memberof Components.Timer
       * @return {Number} The `elapsed` attribute.
       */


      _createClass(Timer, [{
        key: "reset",

        /**
         * Resets the timer.
         *
         * @memberof Components.Timer
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
         * @memberof Components.Timer
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
         * @memberof Components.Timer
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
         * @memberof Components.Timer
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
         * @memberof Components.Timer
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
     * @class Counter
     * @classdesc This face is designed to increment and decrement numberic values,
     *     not `Date` objects.
     * @extends Components.Face
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
     * @class MinuteCounter
     * @classdesc This face is meant to display a clock that shows minutes, and
     *     seconds.
     * @extends Components.Face
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
     * @class HourCounter
     * @classdesc This face is meant to display a clock that shows
     *     hours, minutes, and seconds.
     * @extends Components.Face
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
     * @class DayCounter
     * @classdesc This face is meant to display a clock that shows days, hours,
     *     minutes, and seconds.
     * @extends Components.Face
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
     * @class TwentyFourHourClock
     * @classdesc This face shows the current time in twenty-four hour format.
     * @extends Components.Face
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
     * @class TwelveHourClock
     * @classdesc This face shows the current time in twelve hour format, with AM
     *     and PM.
     * @extends Components.Face
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
     * @class WeekCounter
     * @classdesc This face is meant to display a clock that shows weeks, days,
     *     hours, minutes, and seconds.
     * @extends Components.Face
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
     * @class YearCounter
     * @classdesc This face is meant to display a clock that shows years, weeks,
     *     days, hours, minutes, and seconds.
     * @extends Components.Face
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
     * @memberof Config
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
       * @memberof Components
       * @class FlipClock
       * @extends Components.DomComponent
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
       * @memberof Components.FlipClock
       * @return {Face} The `face` attribute.
       */


      _createClass(FlipClock, [{
        key: "mount",

        /**
         * Mount the clock to the parent DOM element.
         *
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
         * @param  {Array} items - An array of `List` items to group.
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
         * @memberof Components.FlipClock
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvSGVscGVycy9EaWdpdGl6ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2FyLWFyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jYS1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcm8tcm8uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3ZuLXZuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvSGVscGVycy9MYW5ndWFnZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RyYW5zbGF0ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9ZZWFyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9pbmRleC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmxpcENsb2NrLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9Hcm91cC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xpc3QuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GYWNlcy9EYXlDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GYWNlcy9Ib3VyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvTWludXRlQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvVHdlbnR5Rm91ckhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvVHdlbHZlSG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvWWVhckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL2luZGV4LmpzIiwiLi4vc3JjL2pzL0NvbmZpZy9EZWZhdWx0VmFsdWVzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmxpcENsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiAgQG5hbWVzcGFjZSBIZWxwZXJzICovXG5cbi8qKlxuICogVGhyb3cgYSBzdHJpbmcgYXMgYW4gRXJyb3IgZXhjZXB0aW9uLlxuICpcbiAqIEBmdW5jdGlvbiBlcnJvclxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3Ioc3RyaW5nKSB7XG4gICAgdGhyb3cgRXJyb3Ioc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgZm5gIGlzIGEgZnVuY3Rpb24sIGFuZCBjYWxsIGl0IHdpdGggYHRoaXNgIGNvbnRleHQgYW5kIHBhc3MgdGhlXG4gKiBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmN0aW9uIGNhbGxiYWNrXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBjYWxsYmFjayBmbi5cbiAqIEBwYXJhbSAgey4uLip9IGFyZ3MgLSBUaGUgYXJndW1lbnRzIHRvIHBhc3MuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKGZuLCAuLi5hcmdzKSB7XG4gICAgaWYoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJvdW5kIHRoZSB2YWx1ZSB0byB0aGUgY29ycmVjdCB2YWx1ZS4gVGFrZXMgaW50byBhY2NvdW50IG5lZ2F0aXZlIG51bWJlcnMuXG4gKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gIHt2YWx1ZX0gc3RyaW5nIC0gVGhlIHZhbHVlIHRvIHJvdW5kLlxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSByb3VuZGVkIHZhbHVlLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTmVnYXRpdmVaZXJvKFxuICAgICAgICB2YWx1ZSA9IGlzTmVnYXRpdmUodmFsdWUpID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpXG4gICAgKSA/ICgnLScgKyB2YWx1ZSkudG9TdHJpbmcoKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGB1bmRlZmluZWQgb3IgYG51bGxgLlxuICpcbiAqIEBmdW5jdGlvbiBub29wXG4gKiBAcGFyYW0gIHt2YWx1ZX0gc3RyaW5nIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgYHVuZGVmaW5lZCBvciBgbnVsbGAuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHRoZSBgYmVmb3JlYCBhdHRyaWJ1dGUgYW5kIHBhc3NlcyB0aGF0IHZhbHVlXG4gKiB0byBgYWZ0ZXJgIGFuZCB0aGUgc3Vic2VxdWVudCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY3Rpb24gY2hhaW5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBiZWZvcmUgLSBUaGUgZmlyc3QgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBhZnRlciAtIFRoZSBzdWJzZXF1ZW50IGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgdGhlIGNoYWluLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYWluKGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4gYWZ0ZXIoYmVmb3JlKCkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgbWFwcyB0aGUgdmFsdWVzIGJlZm9yZSBjb25jYXRlbmF0aW5nIHRoZW0uXG4gKlxuICogQGZ1bmN0aW9uIGNvbmNhdE1hcFxuICogQHBhcmFtICB7ZnVuY3Rpb259IGZuIC0gVGhlIG1hcCBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSAtIEEgZnVuY3Rpb24gdGhhdCBleGVjdXRlcyB0aGUgbWFwIGFuZCBjb25jYXRlbmF0aW9uLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdE1hcChmbikge1xuICAgIHJldHVybiB4ID0+IHtcbiAgICAgICAgcmV0dXJuIHgubWFwKGZuKS5yZWR1Y2UoKHgsIHkpID0+IHguY29uY2F0KHkpLCBbXSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW4gYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGZsYXR0ZW5cbiAqIEBwYXJhbSAge2FycmF5fSB2YWx1ZSAtIFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHJldHVybiB7YXJyYXl9IC0gVGhlIGZsYXR0ZW5lZCBhcnJheS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh2YWx1ZSA9PiB2YWx1ZSkodmFsdWUpXG59XG5cbi8qKlxuICogRGVlcCBmbGF0dGVuIGFuIGFycmF5LlxuICpcbiAqIEBmdW5jdGlvbiBkZWVwRmxhdHRlblxuICogQHBhcmFtICB7YXJyYXl9IHZhbHVlIC0gVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgZmxhdHRlbmVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBGbGF0dGVuKHgpIHtcbiAgICByZXR1cm4gY29uY2F0TWFwKHggPT4gQXJyYXkuaXNBcnJheSh4KSA/IGRlZXBGbGF0dGVuICh4KSA6IHgpKHgpO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBpbiBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY3Rpb24gdWNmaXJzdFxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1Y2ZpcnN0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIGEgZGVlcCBmbGF0dGVuIGFycmF5LlxuICpcbiAqIEBmdW5jdGlvbiBsZW5ndGhcbiAqIEBwYXJhbSAge2FycmF5fSB2YWx1ZSAtIFRoZSBhcnJheSB0byBjb3VudC5cbiAqIEByZXR1cm4ge251bWJlcn0gLSBUaGUgbGVuZ3RoIG9mIHRoZSBkZWVwIGZsYXR0ZW5lZCBhcnJheS5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgodmFsdWUpIHtcbiAgICByZXR1cm4gZGVlcEZsYXR0ZW4odmFsdWUpLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBuZWdhdGl2ZSB6ZXJvLlxuICpcbiAqIEBmdW5jdGlvbiBpc05lZ2F0aXZlWmVyb1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgbmVnYXRpdmUgemVybyAoYC0wYCkuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZVplcm8odmFsdWUpIHtcbiAgICByZXR1cm4gMSAvIE1hdGgucm91bmQodmFsdWUpID09PSAtSW5maW5pdHk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgbmVnYXRpdmUuXG4gKlxuICogQGZ1bmN0aW9uIGlzTmVnYXRpdmVcbiAqIEBwYXJhbSAge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIG5lZ2F0aXZlLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmVnYXRpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZVplcm8odmFsdWUpIHx8IHZhbHVlIDwgMDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYG51bGxgLlxuICpcbiAqIEBmdW5jdGlvbiBpc051bGxcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBgbnVsbGAuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY3Rpb24gaXNOdWxsXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYHVuZGVmaW5lZGAuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAZnVuY3Rpb24gaXNDb25zdHJ1Y3RvclxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGNvbnN0cnVjdG9yLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEhdmFsdWUubmFtZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogQGZ1bmN0aW9uIGlzU3RyaW5nXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgYXJyYXkuXG4gKlxuICogQGZ1bmN0aW9uIGlzU3RyaW5nXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICFpc0FycmF5KHZhbHVlKSAmJiAoXG4gICAgICAgIHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nXG4gICAgKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY3Rpb24gaXNPYmplY3RcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBmdW5jdGlvbiBpc09iamVjdFxuICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGludG8ga2ViYWIgY2FzZS5cbiAqXG4gKiBAZnVuY3Rpb24ga2ViYWJDYXNlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZWJhYkNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7IGNoYWluLCBjYWxsYmFjaywgaXNPYmplY3QsIGtlYmFiQ2FzZSB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEFic3RyYWN0IGJhc2UgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYG5hbWVgIGF0dHJpYnV0ZS4gVXNlcyB0aGUgYHRoaXMuY29uc3RydWN0b3IubmFtZWAgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgYG5hbWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBjbGFzc05hbWVgIGF0dHJpYnV0ZS4gVXNlZCBmb3IgQ1NTLiBLZWJhYiBjYXNlcyB0aGUgYG5hbWVgXG4gICAgICogcHJvcGVydHkgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgYGNsYXNzTmFtZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBldmVudHNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0FycmF5fSAtIFRoZSBgZXZlbnRzYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGV2ZW50cyB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlZ2lzdGVyZWQgZXZlbnRzIGZvciB0aGlzIGNsYXNzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuQ29tcG9uZW50XG4gICAgICogQHBhcmFtICB7QXJyYXl9IHZhbHVlIC0gVGhlIG5ldyBldmVudHMgYXJyYXkuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZXZlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXQgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGVtaXQoa2V5LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGV2ZW50IGlkL2tleS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gW29uY2U9ZmFsc2VdIC0gU2hvdWxkIHRoZSBldmVudCBoYW5kbGVyIGJlIGZpcmVkIGFcbiAgICAgKiAgICAgc2luZ2xlIHRpbWUuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG9uKGtleSwgZm4sIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBpZighdGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHNba2V5XS5wdXNoKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGxpc3RlbmluZyB0byBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUgZXZlbnQgaWQva2V5LlxuICAgICAqIEBwYXJhbSB7KEZ1bmN0aW9ufHVuZGVmaW5lZCl9IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBub1xuICAgICAqICAgICBmdW5jdGlvbiBpcyBkZWZpbmVkLCBhbGwgZXZlbnRzIHdpdGggdGhlIHNwZWNpZmllZCBpZC9rZXkgd2lsbCBiZVxuICAgICAqICAgICByZW1vdmVkLiBPdGhlcndpc2UsIG9ubHkgdGhlIGV2ZW50IGxpc3RlbmVycyBtYXRjaGluZyB0aGUgaWQva2V5IEFORFxuICAgICAqICAgICBjYWxsYmFjayB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJldHVybnMgYHRoaXNgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGFuIGV2ZW50IG9ubHkgb25lIHRpbWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSAtIFRoZSBldmVudCBpZC9rZXkuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBSZXR1cm5zIGB0aGlzYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBvbmNlKGtleSwgZm4pIHtcbiAgICAgICAgZm4gPSBjaGFpbihmbiwgKCkgPT4gdGhpcy5vZmYoa2V5LCBmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiBhdHRyaWJ1dGUuIFJldHVybnMgbnVsbCBpZiBubyBhdHRyaWJ1dGUgaXMgZGVmaW5lZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IC0gVGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KGtleSkgPyB0aGlzW2tleV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIGF0dHRyaWJ1dGVzIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuQ29tcG9uZW50XG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSBhdHRyaWJ1dGUgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9ubHkgcHVibGljIHRoZSBhdHR0cmlidXRlcyBmb3IgdGhpcyBpbnN0YW5jZS4gT21pdHMgYW55IGF0dHJpYnV0ZVxuICAgICAqIHRoYXQgc3RhcnRzIHdpdGggYCRgLCB3aGljaCBpcyB1c2VkIGludGVybmFsbHkuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGF0dHJpYnV0ZSBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZSBrZXkgYW5kIHZhbHVlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuQ29tcG9uZW50XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgLSBUaGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7Kn0gdmFsdWUgLSBUaGUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZXMgYnkgb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIC0gVGhlIG9iamVjdCBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBleGVjdXRlIHRoZSBgY2FsbGJhY2soKWAgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7Kn0gLSBSZXR1cm5zIHRoZSBleGVjdXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjYWxsYmFjayhmbikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFjdG9yIG1ldGhvZCB0byBzdGF0aWMgaW5zdGFudGlhdGUgbmV3IGluc3RhbmNlcy4gVXNlZnVsIGZvciB3cml0aW5nXG4gICAgICogY2xlYW4gZXhwcmVzc2l2ZSBzeW50YXggd2l0aCBjaGFpbmVkIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcGFyYW0gIHsuLi4qfSBhcmdzIC0gVGhlIGNhbGxiYWNrIGFyZ3VtZW50cy5cbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBuZXcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIERpZ2l0aXplIGEgbnVtYmVyLCBzdHJpbmcsIG9yIGFuIGFycmF5IGludG8gYSBkaWdpdGl6ZWQgYXJyYXkuIFRoaXMgZnVuY3Rpb25cbiAqIHVzZSBieSB0aGUgYEZhY2VgLCB3aGljaCBjb252ZXJ0IHRoZSBkaWdpdGl6ZWQgYXJyYXkgaW50byBhbiBhcnJheSBvZiBgTGlzdGBcbiAqIGluc3RhbmNlcy5cbiAqXG4gKiBAZnVuY3Rpb24gZGlnaXRpemVcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGRpZ2l0aXplLlxuICogQHBhcmFtICB7KE9iamVjdHx1bmRlZmluZWQpfSBbb3B0aW9uc10gLSBUaGUgZGlnaXRpemVyIG9wdGlvbnMuXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBUaGUgZGlnaXRpemVkIGFycmF5LlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlnaXRpemUodmFsdWUsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG1pbmltdW1EaWdpdHM6IDAsXG4gICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZChudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlcGVuZFplcm8gPSBvcHRpb25zLnByZXBlbmRMZWFkaW5nWmVybyAmJlxuICAgICAgICAgICAgbnVtYmVyLnRvU3RyaW5nKCkuc3BsaXQoJycpLmxlbmd0aCA9PT0gMTtcblxuICAgICAgICByZXR1cm4gKHNob3VsZFByZXBlbmRaZXJvID8gJzAnIDogJycpLmNvbmNhdChudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZ2l0cyhhcnIsIG1pbikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBkZWVwRmxhdHRlbihhcnIpLmxlbmd0aDtcblxuICAgICAgICBpZihsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtaW4gLSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclswXS51bnNoaWZ0KCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiBkaWdpdHMoZmxhdHRlbihbdmFsdWVdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oZGVlcEZsYXR0ZW4oW251bWJlcl0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBlbmQobnVtYmVyKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pKTtcbiAgICB9KSwgb3B0aW9ucy5taW5pbXVtRGlnaXRzIHx8IDApO1xufVxuIiwiLyoqICBAbmFtZXNwYWNlIEhlbHBlcnMgKi9cblxuLyoqXG4gKiBBbiBhcnJheSBvZiBvYmplY3RzIHdpdGggbWluL21heCByYW5nZXMuXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgY29uc3QgUkFOR0VTID0gW3tcbiAgICAvLyAwLTlcbiAgICBtaW46IDQ4LFxuICAgIG1heDogNTdcbn0se1xuICAgIC8vIGEtelxuICAgIG1pbjogNjUsXG4gICAgbWF4OiA5MFxufSx7XG4gICAgLy8gQS1aXG4gICAgbWluOiA5NyxcbiAgICBtYXg6IDEyMlxufV07XG5cbi8qKlxuICogRm9ybWF0IGEgc3RyaW5nIGludG8gYSBuZXcgZGF0YSB0eXBlLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzdHJpbmcgdG9cbiAqIG51bWJlciBjb252ZXJzaW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9ybWF0XG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byBmb3JtYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBkYXRhIHR5cGUgKHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nKSB1c2VkIHRvXG4gKiAgICAgY29udmVydCB0aGUgc3RyaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBmb3JtYXQoc3RyaW5nLCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSByYW5nZSBvYmplY3QgZnJvbSB0aGUgYFJBTkdFU2AgY29uc3RhbnQgZnJvbSB0aGUgY2hhcmFjdGVyIGdpdmVuLlxuICogVGhpcyBpcyBtYWlubHkgYW4gaW50ZXJ2YWwgbWV0aG9kLCBidXQgY2FuIGJlIHVzZWQgYnkgZmFjZXMgdG8gaGVscFxuICogZGV0ZXJtaW5lIHdoYXQgdGhlIG5leHQgdmFsdWUgb2YgYSBzdHJpbmcgc2hvdWxkIGJlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9ybWF0XG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhciAtIFRoZSBjaGFyIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGRhdGEgdHlwZSAocmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcpIHVzZWQgdG9cbiAqICAgICBjb252ZXJ0IHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgdGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGZpbmRSYW5nZShjaGFyKSB7XG4gICAgZm9yKGNvbnN0IGkgaW4gUkFOR0VTKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBjaGFyLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcblxuICAgICAgICBpZihSQU5HRVNbaV0ubWluIDw9IGNvZGUgJiYgUkFOR0VTW2ldLm1heCA+PSBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gUkFOR0VTW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RyaW5nIGZyb20gYSBjaGFyYWN0ZXIgY29kZSwgd2hpY2ggaXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2FsbGJhY2sgc3RyaW5nRnJvbUNoYXJDb2RlQnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyIC0gVGhlIGNoYXIgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gcmVjZWl2ZXMgYHJhbmdlYCBhbmQgYGNvZGVgXG4gKiAgICAgYXJndW1lbnRzLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBjaGFyYWN0ZXIgY29kZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBDcmVhdGVzIGEgc3RyaW5nIGZyb20gdGhlIGNoYXJhY3RlciBjb2RlIHJldHVybmVkIGJ5IHRoZVxuICogICAgIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ2hhckNvZGVCeShjaGFyLCBmbikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICBmbihmaW5kUmFuZ2UoY2hhciksIGNoYXIuY2hhckNvZGVBdCgwKSlcbiAgICApO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgbmV4dCB2YWx1ZSBmb3IgYSBzdHJpbmcuICdhJyBiZWNvbWVzICdiJy4gJ0EnIGJlY29tZXMgJ0InLiAxXG4gKiBiZWNvbWVzIDIsIGV0Yy4gSWYgbXVsdGlwbGUgY2hhcmFjdGVyIHN0cmluZ3MgYXJlIHBhc3NlZCwgJ2FhJyB3b3VsZCBiZWNvbWVcbiAqICdiYicuXG4gKlxuICogQGZ1bmN0aW9uIG5leHRcbiAqIEBwYXJhbSAgeyhzdHJpbmd8bnVtYmVyKX0gdmFsdWUgLSBUaGUgc3RyaW5nIG9yIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBmb3JtYXR0ZWQgc3RyaW5nXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dCh2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZCA9ICh2YWx1ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4gc3RyaW5nRnJvbUNoYXJDb2RlQnkoY2hhciwgKHJhbmdlLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXJhbmdlIHx8IGNvZGUgPCByYW5nZS5tYXggPyBjb2RlICsgMSA6IHJhbmdlLm1pblxuICAgICAgICB9KSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdChjb252ZXJ0ZWQsIHR5cGVvZiB2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBwcmV2IHZhbHVlIGZvciBhIHN0cmluZy4gJ2InIGJlY29tZXMgJ2EnLiAnQicgYmVjb21lcyAnQScuIDJcbiAqIGJlY29tZXMgMSwgMCBiZWNvbWVzIDksIGV0Yy4gSWYgbXVsdGlwbGUgY2hhcmFjdGVyIHN0cmluZ3MgYXJlIHBhc3NlZCwgJ2JiJ1xuICogd291bGQgYmVjb21lICdhYScuXG4gKlxuICogQGZ1bmN0aW9uIHByZXZcbiAqIEBwYXJhbSAgeyhzdHJpbmd8bnVtYmVyKX0gdmFsdWUgLSBUaGUgc3RyaW5nIG9yIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBmb3JtYXR0ZWQgc3RyaW5nXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldih2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZCA9ICh2YWx1ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4gc3RyaW5nRnJvbUNoYXJDb2RlQnkoY2hhciwgKHJhbmdlLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXJhbmdlIHx8IGNvZGUgPiByYW5nZS5taW4gPyBjb2RlIC0gMSA6IHJhbmdlLm1heFxuICAgICAgICB9KSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdChjb252ZXJ0ZWQsIHR5cGVvZiB2YWx1ZSk7XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBkaWdpdGl6ZSBmcm9tICcuLi9IZWxwZXJzL0RpZ2l0aXplJztcbmltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGxlbmd0aCwgaXNPYmplY3QsIGlzTnVtYmVyIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlVmFsdWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBGYWNlVmFsdWVgIGNsYXNzIGhhbmRsZXMgYWxsIHRoZSBkaWdpdGl6aW5nIGZvciB0aGUgYEZhY2VgLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHNcbiAgICAgKiBAY2xhc3MgRmFjZVZhbHVlXG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIGBGYWNlVmFsdWVgJ3MgYWN0dWFsIHZhbHVlLiBNb3N0IGxpa2VseSBzaG91bGRcbiAgICAgKiAgICAgc3RyaW5nLCBudW1iZXIsIG9yIERhdGUuIEJ1dCBzaW5jZSB0aGUgRmFjZSBoYW5kbGVzIHRoZSB2YWx1ZSwgaXRcbiAgICAgKiAgICAgY291bGQgYmUgYW55dGhpbmcuXG4gICAgICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IDBcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBkaWdpdHNgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VWYWx1ZVxuICAgICAqIEByZXR1cm4geyhBcnJheXx1bmRlZmluZWQpfSAtIFRoZSBgZGlnaXRzYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGRpZ2l0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRpZ2l0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYGRpZ2l0c2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVZhbHVlXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHZhbHVlIC0gQW4gYXJyYXkgb2YgZGlnaXRzL2NoYXJhY3RlcnMuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZGlnaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1pbmltdW1EaWdpdHMgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaWdpdHMsIGxlbmd0aCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlVmFsdWVcbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYHZhbHVlYCBhdHRyaWJ1dGUuIEFsc28gZGlnaXRpemVzIHRoZSBuZXcgdmFsdWUsIGFuZCBzZXRzIHRoZVxuICAgICAqIGBkaWdpdHNgIGF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VWYWx1ZVxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGlnaXRzID0gZGlnaXRpemUodGhpcy5mb3JtYXQodmFsdWUpLCB7XG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiB0aGlzLm1pbmltdW1EaWdpdHMsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRoaXMucHJlcGVuZExlYWRpbmdaZXJvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBgdmFsdWVgIGF0dHJpYnV0ZSBpcyBub3QgYSBudW1iZXIuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlVmFsdWVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGB0cnVlYCBpcyB0aGUgdmFsdWUgaXMgbm90IGEgbnVtYmVyLlxuICAgICAqL1xuICAgIGlzTmFOKCkge1xuICAgICAgICByZXR1cm4gaXNOYU4odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgYXR0cmlidXRlIGlzIGEgbnVtYmVyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVZhbHVlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaXMgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLlxuICAgICAqL1xuICAgIGlzTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gaXNOdW1iZXIoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lcyB0aGUgY3VycmVudCBgRmFjZVZhbHVlYCBpbnN0YW5jZSwgYnV0IHNldHMgYSBuZXcgdmFsdWUgdG8gdGhlXG4gICAgICogY2xvbmVkIGluc3RhbmNlLiBVc2VkIGZvciBjb3B5aW5nIHRoZSBjdXJyZW50IGluc3RhbmNlIG9wdGlvbnMgYW5kXG4gICAgICogbWV0aG9kcywgYnV0IHNldHRpbmcgYSBuZXcgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlVmFsdWVcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBuXG4gICAgICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEByZXR1cm4ge0ZhY2VWYWx1ZX0gLSBUaGUgY2xvbmVkIGBGYWNlVmFsdWVgLlxuICAgICAqL1xuICAgIGNsb25lKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih2YWx1ZSwgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpLCBhdHRyaWJ1dGVzXG4gICAgICAgICkpO1xuICAgIH1cblxufVxuIiwiLyoqICBAbmFtZXNwYWNlIEhlbHBlcnMgKi9cblxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNDb25zdHJ1Y3RvciB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgZGF0YSB0eXBlIG9mIGEgVmFsaWRhdGUuXG4gKlxuICogQGZ1bmN0aW9uIHZhbGlkYXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHZhbGlkYXRlLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzIC0gVGhlIGRhdGEgdHlwZXMgdG8gdXNlIGZvciB2YWxpZGF0ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWBpcyB0aGUgdmFsdWUgaGFzIGEgdmFsaWQgZGF0YSB0eXBlLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIC4uLmFyZ3MpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgZmxhdHRlbihhcmdzKS5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICAgIGlmKCAoaXNOdWxsKHZhbHVlKSAmJiBpc051bGwoYXJnKSkgfHxcbiAgICAgICAgICAgIChpc09iamVjdChhcmcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIGFyZykpIHx8XG4gICAgICAgICAgICAoaXNGdW5jdGlvbihhcmcpICYmICFpc0NvbnN0cnVjdG9yKGFyZykgJiYgYXJnKHZhbHVlKSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAgIChpc1N0cmluZyhhcmcpICYmICh0eXBlb2YgdmFsdWUgPT09IGFyZykpKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG59XG4iLCIvKipcbiAqIEBhbGlhcyBDb25zb2xlTWVzc2FnZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpdGVtczogJ1RoZSBpdGVtcyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicsXG4gICAgdGhlbWU6ICdUaGUgdGhlbWUgcHJvcGVydHkgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBsYW5ndWFnZTogJ1RoZSBsYW5ndWFnZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGRhdGU6ICdUaGUgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERhdGUuJyxcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2UgY2xhc3MuJyxcbiAgICBlbGVtZW50OiAnVGhlIGVsZW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhbiBIVE1MRWxlbWVudCcsXG4gICAgZmFjZVZhbHVlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2VWYWx1ZSBjbGFzcy4nLFxuICAgIHRpbWVyOiAnVGhlIHRpbWVyIHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBUaW1lciBjbGFzcy4nXG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBlcnJvciwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNPYmplY3QsIGlzQXJyYXksIGlzRnVuY3Rpb24sIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgbWVhbnQgdG8gYmUgcHJvdmlkZSBhbiBpbnRlcmZhY2UgZm9yIGFsbCBvdGhlciBmYWNlcyB0b1xuICAgICAqIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzXG4gICAgICogQGNsYXNzIEZhY2VcbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICAgICAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYoISh2YWx1ZSBpbnN0YW5jZW9mIEZhY2VWYWx1ZSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcbiAgICAgICAgICAgIGNvdW50ZG93bjogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRpb25SYXRlOiA1MDBcbiAgICAgICAgfSwgdGhpcy5kZWZhdWx0QXR0cmlidXRlcygpLCBhdHRyaWJ1dGVzIHx8IHt9KSk7XG5cbiAgICAgICAgaWYodmFsdWUgfHwgdGhpcy5kZWZhdWx0VmFsdWUoKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICFpc051bGwodmFsdWUpICYmICFpc1VuZGVmaW5lZCh2YWx1ZSkgPyB2YWx1ZSA6IHRoaXMuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGBkYXRhVHlwZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBkYXRhVHlwZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBkYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERhdGFUeXBlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VcbiAgICAgKiBAcmV0dXJuIHsqfSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gQW55IHZhbHVlIHRoYXQgaXMgbm90IGFuIGluc3RhbmNlIG9mIGBGYWNlVmFsdWVgIHdpbGxcbiAgICAgKiAgICAgYmUgY2FzdCBpbnRvIG9uZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZighKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmNyZWF0ZUZhY2VWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBzdG9wQXRgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgc3RvcEF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcEF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gQW55IHZhbHVlIHRoYXQgaXMgdXNlZCB0byBtYXRjaCBhZ2FpbnN0IHRoZSBmYWNlIHRvXG4gICAgICogICAgIGRldGVybWluZSB3aGVuIHRoZSBjbG9jayBzaG91bGQgc3RvcC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBvcmlnaW5hbFZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgYG9yaWdpbmFsVmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IG9yaWdpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aXRoIGV2ZXJ5IGludGVydmFsLCBvciBldmVyeSB0aW1lIHRoZSBjbG9ja1xuICAgICAqIHNob3VsZCBjaGFuZ2UsIGFuZCBoYW5kbGVzIHRoZSBhY3R1YWwgaW5jcmVtZW50aW5nIGFuZCBkZWNyZW1lbnRpbmcgdGhlXG4gICAgICogY2xvY2sncyBgRmFjZVZhbHVlYC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtGYWNlfSAtIFRoaXMgYEZhY2VgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICBpZih0aGlzLmNvdW50ZG93bikge1xuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgaWYodGhpcy5zaG91bGRTdG9wKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjbG9jayBzaG91bGQgc3RvcCBvciBub3QuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFJldHVybnMgYHRydWVgIGlmIHRoZSBjbG9jayBzaG91bGQgc3RvcC5cbiAgICAgKi9cbiAgICBzaG91bGRTdG9wKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiAhaXNVbmRlZmluZWQodGhpcy5zdG9wQXQpID8gdGhpcy5zdG9wQXQgPT09IGluc3RhbmNlLnZhbHVlLnZhbHVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCB0aGlzIGp1c3QgcmV0dXJucyB0aGUgdmFsdWUgdW5mb3JtYXR0ZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBmb3JtYXQuXG4gICAgICogQHJldHVybiB7Kn0gLSBUaGUgZm9ybWF0dGVkIHZhbHVlLlxuICAgICAqL1xuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYEZhY2VgLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgZm9yIHRoZSBgRmFjZWAuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHJldHVybiB7KE9iamVjdHx1bmRlZmluZWQpfSAtIFRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZGF0YSB0eXBlIGZvciB0aGUgYEZhY2VgIHZhbHVlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmFjZVxuICAgICAqIEByZXR1cm4geyhPYmplY3R8dW5kZWZpbmVkKX0gLSBUaGUgZGVmYXVsdCBkYXRhIHR5cGUuXG4gICAgICovXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFthbW91bnRdIC0gVGhlIGFtb3VudCB0byBpbmNyZW1lbnQuIElmIHRoZSBhbW91bnQgaXMgbm90XG4gICAgICogICAgIGRlZmluZWQsIGl0IGlzIGxlZnQgdXAgdG8gdGhlIGBGYWNlYCB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIGFtb3VudCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY3JlbWVudCB0aGUgY2xvY2suXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFthbW91bnRdIC0gVGhlIGFtb3VudCB0byBkZWNyZW1lbnQuIElmIHRoZSBhbW91bnQgaXMgbm90XG4gICAgICogICAgIGRlZmluZWQsIGl0IGlzIGxlZnQgdXAgdG8gdGhlIGBGYWNlYCB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIGFtb3VudCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBjbG9jayBoYXMgc3RhcnRlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhcnRlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBjbG9jayBoYXMgc3RvcHBlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RvcHBlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciBjbG9jayBoYXMgcmVzZXQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlc2V0KGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGBGYWNlYCBoYXMgaW5pdGlhbGl6ZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGBGYWNlYCBoYXMgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcmVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGBGYWNlYCBoYXMgbW91bnRlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZhY2VcbiAgICAgKiBAcGFyYW0gIHtGbGlwQ2xvY2t9IGluc3RhbmNlIC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgbW91bnRlZChpbnN0YW5jZSkge1xuICAgICAgICBpZih0aGlzLmF1dG9TdGFydCAmJiBpbnN0YW5jZS50aW1lci5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5zdGFuY2Uuc3RhcnQoaW5zdGFuY2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYEZhY2VWYWx1ZWAuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GYWNlXG4gICAgICogQHBhcmFtICB7RmxpcENsb2NrfSBpbnN0YW5jZSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBGYWNlVmFsdWVgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0RpdmlkZXJ9IC0gVGhlIGluc3RhbnRpYXRlZCBgRmFjZVZhbHVlYC5cbiAgICAgKi9cbiAgICBjcmVhdGVGYWNlVmFsdWUoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGYWNlVmFsdWUubWFrZShcbiAgICAgICAgICAgIGlzRnVuY3Rpb24odmFsdWUpICYmICF2YWx1ZS5uYW1lID8gdmFsdWUoKSA6IHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgbWluaW11bURpZ2l0czogdGhpcy5taW5pbXVtRGlnaXRzLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdGhpcy5mb3JtYXQoaW5zdGFuY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQXJhYmljIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgYmUgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEFyYWJpYyBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9iz2YbZiNin2KonLFxuICAgICdtb250aHMnICA6ICfYtNmH2YjYsScsXG4gICAgJ2RheXMnICAgIDogJ9ij2YrYp9mFJyxcbiAgICAnaG91cnMnICAgOiAn2LPYp9i52KfYqicsXG4gICAgJ21pbnV0ZXMnIDogJ9iv2YLYp9im2YInLFxuICAgICdzZWNvbmRzJyA6ICfYq9mI2KfZhtmKJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2FyJywgJ2FyLWFyJywgJ2FyYWJpYyddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ2F0YWxhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYXRhbGFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnIDogJ0FueXMnLFxuICAgICdtb250aHMnIDogJ01lc29zJyxcbiAgICAnZGF5cycgOiAnRGllcycsXG4gICAgJ2hvdXJzJyA6ICdIb3JlcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0cycsXG4gICAgJ3NlY29uZHMnIDogJ1NlZ29ucydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjYScsICdjYS1lcycsICdjYXRhbGFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDemVjaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDemVjaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ1Jva3knLFxuICAgICdtb250aHMnICA6ICdNxJtzw61jZScsXG4gICAgJ2RheXMnICAgIDogJ0RueScsXG4gICAgJ2hvdXJzJyAgIDogJ0hvZGlueScsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0eScsXG4gICAgJ3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnY3MnLCAnY3MtY3onLCAnY3onLCAnY3otY3MnLCAnY3plY2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIERhbmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBEYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2UnLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBHZXJtYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgR2VybWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0phaHJlJyxcblx0J21vbnRocycgIDogJ01vbmF0ZScsXG5cdCdkYXlzJyAgICA6ICdUYWdlJyxcblx0J2hvdXJzJyAgIDogJ1N0dW5kZW4nLFxuXHQnbWludXRlcycgOiAnTWludXRlbicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlbidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkZScsICdkZS1kZScsICdnZXJtYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEVuZ2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRW5nbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZZWFycycsXG5cdCdtb250aHMnICA6ICdNb250aHMnLFxuXHQnZGF5cycgICAgOiAnRGF5cycsXG5cdCdob3VycycgICA6ICdIb3VycycsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVzJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZHMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZW4nLCAnZW4tdXMnLCAnZW5nbGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3BhbmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTcGFuaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0HDsW9zJyxcblx0J21vbnRocycgIDogJ01lc2VzJyxcblx0J2RheXMnICAgIDogJ0TDrWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZXMnLCAnZXMtZXMnLCAnc3BhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUGVyc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9iz2KfZhCcsXG5cdCdtb250aHMnICA6ICfZhdin2YcnLFxuXHQnZGF5cycgICAgOiAn2LHZiNiyJyxcblx0J2hvdXJzJyAgIDogJ9iz2KfYudiqJyxcblx0J21pbnV0ZXMnIDogJ9iv2YLbjNmC2YcnLFxuXHQnc2Vjb25kcycgOiAn2KvYp9mG24zZhydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmYScsICdmYS1pcicsICdwZXJzaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBGaW5uaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEZpbm5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnVnVvdHRhJyxcblx0J21vbnRocycgIDogJ0t1dWthdXR0YScsXG5cdCdkYXlzJyAgICA6ICdQw6RpdsOkw6QnLFxuXHQnaG91cnMnICAgOiAnVHVudGlhJyxcblx0J21pbnV0ZXMnIDogJ01pbnV1dHRpYScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bnRpYSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmaScsICdmaS1maScsICdmaW5uaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDYW5hZGlhbiBGcmVuY2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnQW5zJyxcbiAgICAnbW9udGhzJyAgOiAnTW9pcycsXG4gICAgJ2RheXMnICAgIDogJ0pvdXJzJyxcbiAgICAnaG91cnMnICAgOiAnSGV1cmVzJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlcycsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZyJywgJ2ZyLWNhJywgJ2ZyZW5jaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSGVicmV3IExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfXqdeg15nXnScsXG5cdCdtb250aHMnICA6ICfXl9eV15PXqScsXG5cdCdkYXlzJyAgICA6ICfXmdee15nXnScsXG5cdCdob3VycycgICA6ICfXqdei15XXqicsXG5cdCdtaW51dGVzJyA6ICfXk9en15XXqicsXG5cdCdzZWNvbmRzJyA6ICfXqdeg15nXldeqJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2lsJywgJ2hlLWlsJywgJ2hlYnJldyddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSHVuZ2FyaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEh1bmdhcmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDiXYnLFxuICAgICdtb250aHMnICA6ICdIw7NuYXAnLFxuICAgICdkYXlzJyAgICA6ICdOYXAnLFxuICAgICdob3VycycgICA6ICfDk3JhJyxcbiAgICAnbWludXRlcycgOiAnUGVyYycsXG4gICAgJ3NlY29uZHMnIDogJ03DoXNvZHBlcmMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaHUnLCAnaHUtaHUnLCAnaHVuZ2FyaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBJdGFsaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEl0YWxpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5uaScsXG5cdCdtb250aHMnICA6ICdNZXNpJyxcblx0J2RheXMnICAgIDogJ0dpb3JuaScsXG5cdCdob3VycycgICA6ICdPcmUnLFxuXHQnbWludXRlcycgOiAnTWludXRpJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZGknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBKYXBhbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBKYXBhbmVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydqcCcsICdqYS1qcCcsICdqYXBhbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgS29yZWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEtvcmVhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfrhYQnLFxuXHQnbW9udGhzJyAgOiAn7JuUJyxcblx0J2RheXMnICAgIDogJ+ydvCcsXG5cdCdob3VycycgICA6ICfsi5wnLFxuXHQnbWludXRlcycgOiAn67aEJyxcblx0J3NlY29uZHMnIDogJ+y0iCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydrbycsICdrby1rcicsICdrb3JlYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIExhdHZpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTGF0dmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0dhZGknLFxuICAgICdtb250aHMnICA6ICdNxJNuZcWhaScsXG4gICAgJ2RheXMnICAgIDogJ0RpZW5hcycsXG4gICAgJ2hvdXJzJyAgIDogJ1N0dW5kYXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW7Fq3RlcycsXG4gICAgJ3NlY29uZHMnIDogJ1Nla3VuZGVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2x2JywgJ2x2LWx2JywgJ2xhdHZpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIER1dGNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIER1dGNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnSmFyZW4nLFxuICAgICdtb250aHMnICA6ICdNYWFuZGVuJyxcbiAgICAnZGF5cycgICAgOiAnRGFnZW4nLFxuICAgICdob3VycycgICA6ICdVcmVuJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlbicsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25sJywgJ25sLWJlJywgJ2R1dGNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBOb3J3ZWdpYW4tQm9rbcOlbCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBOb3J3ZWdpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2VyJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25vJywgJ25iJywgJ25vLW5iJywgJ25vcndlZ2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUG9saXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdMYXQnLFxuXHQnbW9udGhzJyAgOiAnTWllc2nEmWN5Jyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdHb2R6aW55Jyxcblx0J21pbnV0ZXMnIDogJ01pbnV0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3BsJywgJ3BsLXBsJywgJ3BvbGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUG9ydHVndWVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQb3J0dWd1ZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0Fub3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRGlhcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3B0JywgJ3B0LWJyJywgJ3BvcnR1Z3Vlc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFN3ZWRpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3dlZGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycyc6ICdBbmknLFxuXHQnbW9udGhzJzogJ0x1bmknLFxuXHQnZGF5cyc6ICdaaWxlJyxcblx0J2hvdXJzJzogJ09yZScsXG5cdCdtaW51dGVzJzogJ01pbnV0ZScsXG5cdCdzZWNvbmRzJzogJ3NTZWN1bmRlJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3JvJywgJ3JvLXJvJywgJ3JvbWFuYSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSdXNzaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNsb3ZhayBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzdicsICdzdi1zZScsICdzd2VkaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUaGFpIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRoYWkgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHVya2lzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1nEsWwnLFxuXHQnbW9udGhzJyAgOiAnQXknLFxuXHQnZGF5cycgICAgOiAnR8O8bicsXG5cdCdob3VycycgICA6ICdTYWF0Jyxcblx0J21pbnV0ZXMnIDogJ0Rha2lrYScsXG5cdCdzZWNvbmRzJyA6ICdTYW5peWUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9GA0L7QutC4JyxcbiAgICAnbW9udGhzJyAgOiAn0LzRltGB0Y/RhtGWJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdGWJyxcbiAgICAnaG91cnMnICAgOiAn0LPQvtC00LjQvdC4JyxcbiAgICAnbWludXRlcycgOiAn0YXQstC40LvQuNC90LgnLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LTQuCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd1YScsICd1YS11YScsICd1a3JhaW5lJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUcmFkaXRpb25hbCBWaWV0bmFtZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gVmlldG5hbWVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdOxINtJyxcblx0J21vbnRocycgIDogJ1Row6FuZycsXG5cdCdkYXlzJyAgICA6ICdOZ8OgeScsXG5cdCdob3VycycgICA6ICdHaeG7nScsXG5cdCdtaW51dGVzJyA6ICdQaMO6dCcsXG5cdCdzZWNvbmRzJyA6ICdHacOieSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd2bicsICd2bi12bicsICd2aWV0bmFtZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENoaW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCIvKiogIEBuYW1lc3BhY2UgSGVscGVycyAqL1xuXG5pbXBvcnQgKiBhcyBMQU5HVUFHRVMgZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhbmd1YWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5LiBSZXR1cm5zIGBudWxsYCBpZiBubyBsYW5ndWFnZSBpc1xuICogZm91bmQuXG4gKlxuICogQGZ1bmN0aW9uIGxhbmd1YWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgbGFuZ3VhZ2UuXG4gKiBAcmV0dXJuIHtvYmplY3R8bnVsbH0gLSBUaGUgbGFuZ3VhZ2UgZGljdGlvbmFyeSwgb3IgbnVsbCBpZiBub3QgZm91bmQuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYW5ndWFnZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgPyBMQU5HVUFHRVNbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBPYmplY3QudmFsdWVzKExBTkdVQUdFUykuZmluZCh2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5hbGlhc2VzLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH0pIDogbnVsbDtcbn1cbiIsIi8qKiAgQG5hbWVzcGFjZSBIZWxwZXJzICovXG5cbmltcG9ydCBsYW5ndWFnZSBmcm9tICcuL0xhbmd1YWdlJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIHN0cmluZyBmcm9tIGEgbGFuZ3VhZ2UuXG4gKlxuICogQGZ1bmN0aW9uIHRyYW5zbGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmcgdG8gdHJhbnNsYXRlLlxuICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGZyb20gLSBUaGUgbGFuZ3VhZ2UgdXNlZCB0byB0cmFuc2xhdGUuIElmIGEgc3RyaW5nLFxuICogICAgIHRoZSBsYW5ndWFnZSBpcyBsb2FkZWQgaW50byBhbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gSWYgbm8gZGljdGlvbiBrZXkgaXMgZm91bmQsIHRoZSB1bnRyYW5zbGF0ZWQgc3RyaW5nIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAbWVtYmVyb2YgSGVscGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2xhdGUoc3RyaW5nLCBmcm9tKSB7XG4gICAgY29uc3QgbGFuZyA9IGlzU3RyaW5nKGZyb20pID8gbGFuZ3VhZ2UoZnJvbSkgOiBmcm9tO1xuICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBsYW5nLmRpY3Rpb25hcnkgfHwgbGFuZztcbiAgICByZXR1cm4gZGljdGlvbmFyeVtzdHJpbmddIHx8IHN0cmluZztcbn07XG4iLCIvKiogIEBuYW1lc3BhY2UgSGVscGVycyAqL1xuXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuLyoqXG4gKiBTd2FwIGEgbmV3IERPTSBub2RlIHdpdGggYW4gZXhpc3Rpbmcgb25lLlxuICpcbiAqIEBmdW5jdGlvbiBzd2FwXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gc3ViamVjdCAtIFRoZSBuZXcgRE9NIG5vZGUuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZXhpc3RpbmcgLSBUaGUgZXhpc3RpbmcgRE9NIG5vZGUuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBSZXR1cm5zIHRoZSBuZXcgZWxlbWVudCBpZiBpdCB3YXMgbW91bnRlZCwgb3RoZXJ3aXNlXG4gKiAgICB0aGUgZXhpc3Rpbmcgbm9kZSBpcyByZXR1cm5lZC5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzd2FwKHN1YmplY3QsIGV4aXN0aW5nKSB7XG5cdGlmKGV4aXN0aW5nLnBhcmVudE5vZGUpIHtcblx0XHRleGlzdGluZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzdWJqZWN0LCBleGlzdGluZyk7XG5cblx0XHRyZXR1cm4gc3ViamVjdDtcblx0fVxuXG5cdHJldHVybiBleGlzdGluZztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZSBvZiBhbiBlbGVtZW50LlxuICpcbiAqIEBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCB3aWxsIHJlY2VpdmUgdGhlIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0gIHtPYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlIG9iamVjdCwgb3IgaWYgbm8gb2JqZWN0XG4gKiAgICAgaXMgcGFzc2VkLCB0aGVuIHRoZSBhY3Rpb24gaXMgaWdub3JlZC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBET00gbm9kZSB0aGF0IHJlY2VpdmVkIHRoZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXMpIHtcblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIEFwcGVuZCBhbiBhcnJheSBvZiBET00gbm9kZXMgdG8gYSBwYXJlbnQuXG4gKlxuICogQGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgcGFyZW50IERPTSBub2RlLlxuICogQHBhcmFtICB7QXJyYXl8dW5kZWZpbmVkfSBbY2hpbGRyZW5dIC0gVGhlIGFycmF5IG9mIGNoaWxkcmVuLiBJZiBubyBhcnJheVxuICogICAgIGlzIHBhc3NlZCwgdGhlbiB0aGUgbWV0aG9kIHNpbGVudGx5IGZhaWxzIHRvIHJ1bi5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBlbCAtIFRoZSBET00gbm9kZSB0aGF0IHJlY2VpdmVkIHRoZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEhlbHBlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbikge1xuXHRpZihpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLmZpbHRlcihub29wKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGlmKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBIVE1MRWxlbWVudCBpbnN0YW5jZS5cbiAqXG4gKiBAZnVuY3Rpb24gY3JlYXRlRWxlbWVudFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIHBhcmVudCBET00gbm9kZS5cbiAqIEBwYXJhbSAge0FycmF5fHVuZGVmaW5lZH0gW2NoaWxkcmVuXSAtIFRoZSBhcnJheSBvZiBjaGlsZHJlbi4gSWYgbm8gYXJyYXlcbiAqICAgICBpcyBwYXNzZWQsIHRoZW4gdGhlIG1ldGhvZCBzaWxlbnRseSBmYWlscyB0byBydW4uXG4gKiBAcGFyYW0gIHtPYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBvYmplY3QuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgRE9NIG5vZGUgdGhhdCByZWNlaXZlZCB0aGUgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBIZWxwZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsLCBjaGlsZHJlbiwgYXR0cmlidXRlcykge1xuXHRpZighKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcblx0fVxuXG5cdHNldEF0dHJpYnV0ZXMoZWwsIGlzT2JqZWN0KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogYXR0cmlidXRlcyk7XG5cblx0aWYoIWlzT2JqZWN0KGNoaWxkcmVuKSAmJiAhaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcblx0fVxuXHRlbHNlIHtcblx0XHRhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pXG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBsYW5ndWFnZSBmcm9tICcuLi9IZWxwZXJzL0xhbmd1YWdlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vSGVscGVycy9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBzd2FwLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBvdGhlciBET00gY29tcG9uZW50cyBjYW4gZXh0ZW5kLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHNcbiAgICAgKiBAY2xhc3MgRG9tQ29tcG9uZW50XG4gICAgICogQGV4dGVuZHMgQ29tcG9uZW50cy5Db21wb25lbnRcbiAgICAgKiBAcGFyYW0geyhvYmplY3R8dW5kZWZpbmVkKX0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGhlbWUpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIHRoZW1lIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgbGFuZ3VhZ2UgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG5cdFx0aWYoIXRoaXMudGhlbWVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX0gY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbXBvbmVudCdzIHRvcCBsZXZlbCBET00gbm9kZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkRvbUNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBgZWxgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbXBvbmVudCdzIHRvcCBsZXZlbCBET00gbm9kZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkRvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSAgeyhudWxsfEhUTUxFbGVtZW50KX0gdmFsdWUgLSBUaGUgYGVsYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBudWxsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgcGFyZW50YCBhdHRyaWJ1dGUuIFBhcmVudCBpcyBzZXQgd2hlbiBgRG9tQ29tcG9uZW50YCBpbnN0YW5jZXMgYXJlXG4gICAgICogbW91bnRlZC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkRvbUNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0RvbUNvbXBvbmVudH0gLSBUaGUgYHBhcmVudGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwYXJlbnQgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtICB7RG9tQ29tcG9uZW50fSBwYXJlbnQgLSBUaGUgYHBhcmVudGAgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0RvbUNvbXBvbmVudH0gLSBUaGUgYHBhcmVudGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBwYXJlbnQocGFyZW50KSB7XG4gICAgICAgIHRoaXMuJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGB0aGVtZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHJldHVybiB7RG9tQ29tcG9uZW50fSAtIFRoZSBgdGhlbWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdGhlbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aGVtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGB0aGVtZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBgdGhlbWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCB0aGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRoZW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsYW5ndWFnZSBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Eb21Db21wb25lbnRcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGBsYW5ndWFnZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGdldCBsYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxhbmd1YWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZSAtIFRoZSBgbGFuZ3VhZ2VgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGBsYW5ndWFnZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBsYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZihpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbGFuZ3VhZ2UodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRsYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZSBhIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkRvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byB0cmFuc2xhdGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB0cmFuc2xhdGVkIHN0cmluZy4gSWYgbm8gdHJhbmxhdGlvbiBmb3VuZCwgdGhlXG4gICAgICogICAgIHVudHJhbnNsYXRlZCBzdHJpbmcgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHN0cmluZykge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlKHN0cmluZywgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgdG8gdHJhbnNsYXRlKHN0cmluZyk7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5Eb21Db21wb25lbnRcbiAgICAgKiBAYWxpYXMgRG9tQ29tcG9uZW50LnRyYW5zbGF0ZVxuICAgICAqL1xuICAgIHQoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShzdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgRE9NIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkRvbUNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBgZWxgIGF0dHJpYnV0ZS5cbiAgICAgKi9cblx0cmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSA9PT0gJ2ZsaXAtY2xvY2snID8gdGhpcy5jbGFzc05hbWUgOiAnZmxpcC1jbG9jay0nICsgdGhpcy5jbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aGVtZVt0aGlzLm5hbWVdKGVsLCB0aGlzKTtcblxuICAgICAgICBpZighdGhpcy5lbCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5lbC5pbm5lckhUTUwgIT09IGVsLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHN3YXAoZWwsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IGEgRE9NIGNvbXBvbmVudCB0byBhIHBhcmVudCBub2RlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHBhcmVudCAtIFRoZSBwYXJlbnQgRE9NIG5vZGUuXG4gICAgICogQHBhcmFtICB7KGZhbHNlfEhUTUxFbGVtZW50KX0gW2JlZm9yZT1mYWxzZV0gLSBJZiBgZmFsc2VgLCBlbGVtZW50IGlzXG4gICAgICogICAgIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgbm9kZS4gSWYgYW4gaW5zdGFuY2Ugb2YgYW4gYEhUTUxFbGVtZW50YCxcbiAgICAgKiAgICAgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGluc2VydGVkIGJlZm9yZSB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGBlbGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIG1vdW50KHBhcmVudCwgYmVmb3JlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgaWYoIWJlZm9yZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGBEaXZpZGVyYCBpbnN0YW5jZS5cbiAqXG4gKiBUaGUgcHVycG9zZSBvZiB0aGlzIGNsYXNzIGlzIHRvIHJldHVybiBhIHVuaXF1ZSBjbGFzcyBuYW1lIHNvIHRoZSB0aGVtZSBjYW5cbiAqIHJlbmRlciBpdCBhcHByb3ByaWF0ZWx5LCBzaW5jZSBlYWNoIGBEb21Db21wb25lbnRgIGNhbiByZWNlaXZlIGl0cyBvd24gdGVtcGxhdGVcbiAqIGZyb20gdGhlIHRoZW1lLlxuICpcbiAqIEBtZW1iZXJvZiBDb21wb25lbnRzXG4gKiBAY2xhc3MgRGl2aWRlclxuICogQGV4dGVuZHMgQ29tcG9uZW50cy5Eb21Db21wb25lbnRcbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aWRlciBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byByZXByZXNlbnQgYSBzaW5nbGUgZGlnaXRzIGluIGEgYExpc3RgLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHNcbiAgICAgKiBAY2xhc3MgTGlzdEl0ZW1cbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRzLkRvbUNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7KE51bWJlcnxTdHJpbmcpfSB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgYExpc3RJdGVtYC5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiwgIH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBpc09iamVjdCwgIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBhZGQgYSBkaWdpdCB0byB0aGUgY2xvY2sgZmFjZS4gVGhpcyBjbGFzcyBpcyBjYWxsZWRcbiAgICAgKiBgTGlzdGAgYmVjYXVzZSBpdCBjb250YWlucyBhIGxpc3Qgb2YgYExpc3RJdGVtYCdzIHdoaWNoIGFyZSB1c2VkIHRvXG4gICAgICogY3JlYXRlIGZsaXAgZWZmZWN0cy4gSW4gdGhlIGNvbnRleHQgb2YgRmxpcENsb2NrLmpzIGEgYExpc3RgIHJlcHJlc2VudHNcbiAgICAgKiBvbmUgc2luZ2xlIGRpZ2l0LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHNcbiAgICAgKiBAY2xhc3MgTGlzdFxuICAgICAqIEBleHRlbmRzIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0gbGFiZWwgLSBUaGUgYWN0aXZlIHZhbHVlLiBJZiBhbiBvYmplY3QsIGl0XG4gICAgICogaXMgYXNzdW1lZCB0aGF0IGl0IGlzIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5MaXN0XG4gICAgICogQHJldHVybiB7KE51bWJlcnxTdHJpbmcpfSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuTGlzdFxuICAgICAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAtIFRoZSBgdmFsdWVgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHsoTnVtYmVyfFN0cmluZyl9IC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYGl0ZW1zYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5MaXN0XG4gICAgICogQHJldHVybiB7KE51bWJlcnxTdHJpbmcpfSAtIFRoZSBgaXRlbXNgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBpdGVtc2AgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuTGlzdFxuICAgICAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAtIFRoZSBgaXRlbXNgIGF0dHJpYnV0ZS5cbiAgICAgKiBAcmV0dXJuIHsoTnVtYmVyfFN0cmluZyl9IC0gVGhlIGBpdGVtc2AgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNldCBpdGVtcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRpdGVtcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYExpc3RJdGVtYC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkxpc3RcbiAgICAgKiBAcGFyYW0gIHsoTnVtYmVyfFN0cmluZyl9IHZhbHVlIC0gVGhlIGBMaXN0SXRlbWAgdmFsdWUuXG4gICAgICogQHBhcmFtICB7KE9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcmV0dXJuIHtMaXN0SXRlbX0gLSBUaGUgaW5zdGFudGlhdGVkIGBMaXN0SXRlbWAuXG4gICAgICovXG4gICAgY3JlYXRlTGlzdEl0ZW0odmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICB0aGlzLiRpdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCwgaXNBcnJheSB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGdyb3VwIHZhbHVlcyB3aXRoaW4gYSBjbG9jayBmYWNlLiBIb3cgdGhlIGdyb3Vwc1xuICAgICAqIGFyZSBkaXNwbGF5ZWQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgdGhlbWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50c1xuICAgICAqIEBjbGFzcyBHcm91cFxuICAgICAqIEBleHRlbmRzIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1zIC0gQW4gYXJyYXkgYExpc3RgIGluc3RhbmNlcyBvciBhbiBvYmplY3Qgb2ZcbiAgICAgKiAgICAgYXR0cmlidXRlcy4gSWYgbm90IGFuIGFycmF5LCBhc3N1bWVkIHRvIGJlIHRoZSBhdHRyaWJ1dGVzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpdGVtczogaXNBcnJheShpdGVtcykgPyBpdGVtcyA6IFtdXG4gICAgICAgIH0sIChpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwpLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gYWRkIGEgbGFiZWwgdG8gdGhlIGNsb2NrIGZhY2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50c1xuICAgICAqIEBjbGFzcyBMYWJlbFxuICAgICAqIEBleHRlbmRzIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH0gbGFiZWwgLSBUaGUgbGFiZWwgYXR0cmlidXRlLiBJZiBhbiBvYmplY3QsXG4gICAgICogICAgIGl0IGlzIGFzc3VtZWQgdGhhdCBpdCBpcyB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAgICAgKiBAcGFyYW0ge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0sIChpc09iamVjdChsYWJlbCkgPyBsYWJlbCA6IG51bGwpLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc051bWJlciwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHNcbiAgICAgKiBAY2xhc3MgVGltZXJcbiAgICAgKiBAZXh0ZW5kcyBDb21wb25lbnRzLkNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7KE9iamVjdHxOdW1iZXIpfSBpbnRlcnZhbCAtIFRoZSBpbnRlcnZhbCBwYXNzZWQgYXMgYSBgTnVtYmVyYCxcbiAgICAgKiAgICAgb3IgY2FuIHNldCB0aGUgYXR0cmlidXRlIG9mIHRoZSBjbGFzcyB3aXRoIGFuIG9iamVjdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbCkge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgaGFuZGxlOiBudWxsLFxuICAgICAgICAgICAgc3RhcnRlZDogbnVsbCxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IGlzTnVtYmVyKGludGVydmFsKSA/IGludGVydmFsIDogbnVsbCxcbiAgICAgICAgfSwgaXNPYmplY3QoaW50ZXJ2YWwpID8gaW50ZXJ2YWwgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZWxhcHNlZCB0aGUgdGltZSBhcyBhbiBpbnRlcmdlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLlRpbWVyXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgYGVsYXBzZWRgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgZWxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhc3RMb29wID8gMCA6IHRoaXMubGFzdExvb3AgLSAoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPyB0aGlzLnN0YXJ0ZWQuZ2V0VGltZSgpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5UaW1lclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgdGhlIGBydW5uaW5nYCBwcm9wZXJ0eSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5UaW1lclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyBgdHJ1ZWAgdGhlIGBydW5uaW5nYCBwcm9wZXJ0eSBpcyBgZmFsc2VgXG4gICAgICovXG4gICAgZ2V0IGlzU3RvcHBlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyA9PT0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB0aW1lci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLlRpbWVyXG4gICAgICogQHBhcmFtICB7KEZ1bmN0aW9ufHVuZGVmaW5lZCl9IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge1RpbWVyfSAtIFRoZSBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuVGltZXJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgaW50ZXJ2YWwgY2FsbGJhY2suXG4gICAgICogQHJldHVybiB7VGltZXJ9IC0gVGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGU7XG4gICAgICAgIHRoaXMubGFzdExvb3AgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG5cbiAgICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLmxhc3RMb29wID49IHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHRpbWVyLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuVGltZXJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gLSBUaGUgc3RvcCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtUaW1lcn0gLSBUaGUgYFRpbWVyYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBzdG9wKGZuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RvcCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5cbi8qKlxuICogQGNsYXNzIENvdW50ZXJcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIGRlc2lnbmVkIHRvIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IG51bWJlcmljIHZhbHVlcyxcbiAqICAgICBub3QgYERhdGVgIG9iamVjdHMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGluY3JlbWVudChpbnN0YW5jZSwgdmFsdWUgPSAxKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSArIHZhbHVlO1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgdmFsdWUgPSAxKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSAtIHZhbHVlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IG5vb3AsIHJvdW5kLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc051bWJlciwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogQGNsYXNzIE1pbnV0ZUNvdW50ZXJcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIG1pbnV0ZXMsIGFuZFxuICogICAgIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbnV0ZUNvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRTdG9wKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKGlzTnVsbChpbnN0YW5jZS5zdG9wQXQpIHx8IGlzVW5kZWZpbmVkKGluc3RhbmNlLnN0b3BBdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3RvcEF0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRkb3duID9cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdC5nZXRUaW1lKCkgPj0gdGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCk6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQuZ2V0VGltZSgpIDw9IHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNOdW1iZXIodGhpcy5zdG9wQXQpKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5mbG9vcigodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgLSB0aGlzLm9yaWdpbmFsVmFsdWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGRvd24gP1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0ID49IGRpZmY6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQgPD0gZGlmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIHN0b3BBdCBwcm9wZXJ0eSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIERhdGUgb3IgTnVtYmVyLmApO1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSwgdmFsdWUgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgKyB2YWx1ZSArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlLCB2YWx1ZSA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSAtIHZhbHVlIC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5zdGFuY2UudGltZXIubGFzdExvb3ApKTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBpbnN0YW5jZS50aW1lci5pc1J1bm5pbmcgPyBpbnN0YW5jZS50aW1lci5zdGFydGVkIDogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDUwKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyh2YWx1ZSwgc3RhcnRlZCldLFxuICAgICAgICAgICAgdGhpcy5zaG93U2Vjb25kcyA/IFt0aGlzLmdldFNlY29uZHModmFsdWUsIHN0YXJ0ZWQpXSA6IG51bGxcbiAgICAgICAgXS5maWx0ZXIobm9vcCk7XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiByb3VuZCh0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwKTtcbiAgICB9XG5cbiAgICBnZXRTZWNvbmRzKGEsIGIpIHtcbiAgICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYik7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGguY2VpbCh0b3RhbFNlY29uZHMgPT09IDYwID8gMCA6IHRvdGFsU2Vjb25kcyAlIDYwKSk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxTZWNvbmRzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKSA/IDAgOiBNYXRoLnJvdW5kKChhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IE1pbnV0ZUNvdW50ZXIgZnJvbSAnLi9NaW51dGVDb3VudGVyJztcblxuLyoqXG4gKiBAY2xhc3MgSG91ckNvdW50ZXJcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzXG4gKiAgICAgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzLlxuICogQGV4dGVuZHMgQ29tcG9uZW50cy5GYWNlXG4gKiBAcGFyYW0geyhGYWNlVmFsdWV8b2JqZWN0KX0gdmFsdWUgLSBUaGUgYEZhY2VgIHZhbHVlLiBJZiBub3QgYW4gaW5zdGFuY2VcbiAqICAgICBvZiBGYWNlVmFsdWUsIHRoaXMgYXJndW1lbnQgaXMgYXNzdW1lZCB0byBiZSB0aGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7KG9iamVjdHx1bmRlZmluZWQpfSBbYXR0cmlidXRlc10gLSBUaGUgaW5zdGFuY2UgYXR0cmlidXRlcy5cbiAqIEBtZW1iZXJvZiBGYWNlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyQ291bnRlciBleHRlbmRzIE1pbnV0ZUNvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2UudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRNaW51dGVzKGEsIGIpICUgNjApO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBIb3VyQ291bnRlciBmcm9tICcuL0hvdXJDb3VudGVyJztcblxuLyoqXG4gKiBAY2xhc3MgRGF5Q291bnRlclxuICogQGNsYXNzZGVzYyBUaGlzIGZhY2UgaXMgbWVhbnQgdG8gZGlzcGxheSBhIGNsb2NrIHRoYXQgc2hvd3MgZGF5cywgaG91cnMsXG4gKiAgICAgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheUNvdW50ZXIgZXh0ZW5kcyBIb3VyQ291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldERheXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCk7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0SG91cnMoYSwgYikgJSAyNCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbi8qKlxuICogQGNsYXNzIFR3ZW50eUZvdXJIb3VyQ2xvY2tcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIHNob3dzIHRoZSBjdXJyZW50IHRpbWUgaW4gdHdlbnR5LWZvdXIgaG91ciBmb3JtYXQuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZW50eUZvdXJIb3VyQ2xvY2sgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncm91cHMgPSBbXG4gICAgICAgICAgICBbdmFsdWUuZ2V0SG91cnMoKV0sXG4gICAgICAgICAgICBbdmFsdWUuZ2V0TWludXRlcygpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKFt2YWx1ZS5nZXRTZWNvbmRzKCldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgKyBvZmZzZXQgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgb2Zmc2V0ID0gMCkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpIC0gb2Zmc2V0IC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5zdGFuY2UudGltZXIubGFzdExvb3ApKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBUd2VudHlGb3VySG91ckNsb2NrIGZyb20gJy4vVHdlbnR5Rm91ckhvdXJDbG9jayc7XG5cbi8qKlxuICogQGNsYXNzIFR3ZWx2ZUhvdXJDbG9ja1xuICogQGNsYXNzZGVzYyBUaGlzIGZhY2Ugc2hvd3MgdGhlIGN1cnJlbnQgdGltZSBpbiB0d2VsdmUgaG91ciBmb3JtYXQsIHdpdGggQU1cbiAqICAgICBhbmQgUE0uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWx2ZUhvdXJDbG9jayBleHRlbmRzIFR3ZW50eUZvdXJIb3VyQ2xvY2sge1xuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd01lcmlkaXVtOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBob3VycyA9IHZhbHVlLmdldEhvdXJzKCk7XG5cdFx0Y29uc3QgZ3JvdXBzID0gW1xuXHRcdFx0aG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzKSxcblx0XHRcdHZhbHVlLmdldE1pbnV0ZXMoKVxuXHRcdF07XG5cbiAgICAgICAgdGhpcy5tZXJpZGl1bSA9IGhvdXJzID4gMTIgPyAncG0nIDogJ2FtJztcblxuXHRcdGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcblx0XHRcdGdyb3Vwcy5wdXNoKHZhbHVlLmdldFNlY29uZHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEYXlDb3VudGVyIGZyb20gJy4vRGF5Q291bnRlcic7XG5cbi8qKlxuICogQGNsYXNzIFdlZWtDb3VudGVyXG4gKiBAY2xhc3NkZXNjIFRoaXMgZmFjZSBpcyBtZWFudCB0byBkaXNwbGF5IGEgY2xvY2sgdGhhdCBzaG93cyB3ZWVrcywgZGF5cyxcbiAqICAgICBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtDb3VudGVyIGV4dGVuZHMgRGF5Q291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3KTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldERheXMoYSwgYikgJSA3KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcblxuLyoqXG4gKiBAY2xhc3MgWWVhckNvdW50ZXJcbiAqIEBjbGFzc2Rlc2MgVGhpcyBmYWNlIGlzIG1lYW50IHRvIGRpc3BsYXkgYSBjbG9jayB0aGF0IHNob3dzIHllYXJzLCB3ZWVrcyxcbiAqICAgICBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRzLkZhY2VcbiAqIEBwYXJhbSB7KEZhY2VWYWx1ZXxvYmplY3QpfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuIElmIG5vdCBhbiBpbnN0YW5jZVxuICogICAgIG9mIEZhY2VWYWx1ZSwgdGhpcyBhcmd1bWVudCBpcyBhc3N1bWVkIHRvIGJlIHRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHsob2JqZWN0fHVuZGVmaW5lZCl9IFthdHRyaWJ1dGVzXSAtIFRoZSBpbnN0YW5jZSBhdHRyaWJ1dGVzLlxuICogQG1lbWJlcm9mIEZhY2VzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJDb3VudGVyIGV4dGVuZHMgV2Vla0NvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2UudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldFllYXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldFdlZWtzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRZZWFycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KDAsIHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0IC8gNyAvIDUyKSk7XG4gICAgfVxuXG4gICAgZ2V0V2Vla3MoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0V2Vla3MoYSwgYikgJSA1Mik7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEZhY2VzIGFyZSBjbGFzc2VzIHRoYXQgaG9vayBpbnRvIHRoZSBjb3JlIG9mIEZsaXBjbG9jayB0byBwcm92aWRlIHVuaXF1ZVxuICogZnVuY3Rpb25hbGl0eS4gVGhlIGNvcmUgZG9lc24ndCBkbyBhIGxvdCwgZXhjZXB0IGZhY2lsaXRhdGUgdGhlIGludGVyYWN0aW9uXG4gKiBiZXR3ZWVuIGFsbCB0aGUgY29tcG9uZW50cy4gVGhlIEZhY2UgaXMgd2hhdCBtYWtlcyB0aGUgY2xvY2sgXCJ0aWNrXCIuXG4gKlxuICogQG5hbWVzcGFjZSBGYWNlc1xuICovXG5cbmltcG9ydCBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XG5pbXBvcnQgRGF5Q291bnRlciBmcm9tICcuL0RheUNvdW50ZXInO1xuaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuaW1wb3J0IE1pbnV0ZUNvdW50ZXIgZnJvbSAnLi9NaW51dGVDb3VudGVyJztcbmltcG9ydCBUd2VsdmVIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VsdmVIb3VyQ2xvY2snO1xuaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcbmltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcbmltcG9ydCBZZWFyQ291bnRlciBmcm9tICcuL1llYXJDb3VudGVyJztcblxuZXhwb3J0IHtcbiAgICBDb3VudGVyLFxuICAgIERheUNvdW50ZXIsXG4gICAgTWludXRlQ291bnRlcixcbiAgICBIb3VyQ291bnRlcixcbiAgICBUd2VsdmVIb3VyQ2xvY2ssXG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayxcbiAgICBXZWVrQ291bnRlcixcbiAgICBZZWFyQ291bnRlclxufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgdG9wJ30pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCBib3R0b20nfSlcbiAgICBdKTtcbn1cbiIsImltcG9ydCB7IG5leHQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmZ1bmN0aW9uIGNoaWxkKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBlbCA/IChlbC5jaGlsZE5vZGVzID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBlbFtpbmRleF0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hhcihlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwLWNsb2NrLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCAudG9wJykuaW5uZXJIVE1MIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnN0YW5jZS52YWx1ZS5kaWdpdHMubWFwKChncm91cCwgeCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEVsID0gY2hpbGQoaW5zdGFuY2UuZWwgPyBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1ncm91cCcpIDogbnVsbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsID8gZ3JvdXBFbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1saXN0JykgOiBudWxsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGluc3RhbmNlLmZhY2UuYW5pbWF0aW9uUmF0ZSB8fCBpbnN0YW5jZS5mYWNlLmRlbGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuXG4gICAgaW5zdGFuY2UuaXRlbXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGluc3RhbmNlLnZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGJlZm9yZVZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgXTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnJlbmRlcigpKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnN0YW5jZS5hY3RpdmUgPT09IHRydWUgPyAnYWN0aXZlJyA6IChcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlID09PSBmYWxzZSA/ICdiZWZvcmUnIDogbnVsbFxuICAgICk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAndG9wJ30pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ2JvdHRvbSd9KVxuICAgICAgICBdLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lcid9KVxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBUd2VudHlGb3VySG91ckNsb2NrKGVsLCBpbnN0YW5jZSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dNZXJpZGl1bSAmJiBpbnN0YW5jZS5mYWNlLm1lcmlkaXVtKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaW5zdGFuY2UuY3JlYXRlTGFiZWwoaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLmNoaWxkTm9kZXNbZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsYWJlbC5tb3VudChwYXJlbnQpLmNsYXNzTGlzdC5hZGQoJ2ZsaXAtY2xvY2stbWVyaWRpdW0nKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s4XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbN10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbOV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgneWVhcnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1sxMF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9GbGlwQ2xvY2snO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCAqIGFzIGZhY2VzIGZyb20gJy4vRmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRGl2aWRlcixcbiAgICBGbGlwQ2xvY2ssXG4gICAgR3JvdXAsXG4gICAgTGFiZWwsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBmYWNlc1xufTtcbiIsImltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgeyBPcmlnaW5hbCB9IGZyb20gJy4uL1RoZW1lcyc7XG5pbXBvcnQgeyBFbmdsaXNoIH0gZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuLyoqXG4gKiBAYWxpYXMgRGVmYXVsdFZhbHVlc1xuICogQHR5cGUge29iamVjdH1cbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZhY2U6IENvdW50ZXIsXG4gICAgdGhlbWU6IE9yaWdpbmFsLFxuICAgIGxhbmd1YWdlOiBFbmdsaXNoXG59O1xuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi9GYWNlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0ICogYXMgRmFjZXMgZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IEZhY2VWYWx1ZSBmcm9tICcuL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBEZWZhdWx0VmFsdWVzIGZyb20gJy4uL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBmbGF0dGVuLCBpc1N0cmluZywgaXNPYmplY3QsIGlzVW5kZWZpbmVkLCBpc0Z1bmN0aW9uLCBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENsb2NrIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzXG4gICAgICogQGNsYXNzIEZsaXBDbG9ja1xuICAgICAqIEBleHRlbmRzIENvbXBvbmVudHMuRG9tQ29tcG9uZW50XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgdG8gYmluZCBjbG9jayBET00gbm9kZS5cbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjbG9jayBmYWNlLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGluc3RhbmNlIGF0dHJpYnV0ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZShlbCwgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc09iamVjdCh2YWx1ZSkgJiYgIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZhY2UgPSBhdHRyaWJ1dGVzLmZhY2UgfHwgRGVmYXVsdFZhbHVlcy5mYWNlO1xuXG4gICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmZhY2U7XG5cbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBEZWZhdWx0VmFsdWVzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aW1lcjogVGltZXIubWFrZShhdHRyaWJ1dGVzLmludGVydmFsIHx8IDEwMDApLFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMuZmFjZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlID0gZmFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW91bnQoZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2xvY2sgYEZhY2VgLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHJldHVybiB7RmFjZX0gVGhlIGBmYWNlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IGZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRmYWNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNsb2NrIGBGYWNlYC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufEZhY2V8c3RyaW5nfSB2YWx1ZSAtIFRoZSBgRmFjZWAgdmFsdWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgZmFjZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIFtGYWNlLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJ10pKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRmYWNlID0gKEZhY2VzW3ZhbHVlXSB8fCB2YWx1ZSkubWFrZShPYmplY3QuYXNzaWduKHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpLCB7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB0aGlzLmZhY2UgPyB0aGlzLmZhY2Uub3JpZ2luYWxWYWx1ZSA6IHVuZGVmaW5lZFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kZmFjZS5pbml0aWFsaXplZCh0aGlzKTtcblxuICAgICAgICBpZih0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRmYWNlLnZhbHVlID0gdGhpcy5mYWNlLmNyZWF0ZUZhY2VWYWx1ZSh0aGlzLCB0aGlzLnZhbHVlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYHN0b3BBdGAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHJldHVybiB7Kn0gVGhlIGBzdG9wQXRgIHZhbHVlLlxuICAgICAqL1xuICAgIGdldCBzdG9wQXQoKSB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMuJHN0b3BBdCkgPyB0aGlzLiRzdG9wQXQodGhpcykgOiB0aGlzLiRzdG9wQXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBgc3RvcEF0YCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GbGlwQ2xvY2tcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgc3RvcEF0YCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgVGltZXJgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHJldHVybiB7VGltZXJ9IFRoZSBgdGltZXJgIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBnZXQgdGltZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aW1lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGBUaW1lcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GbGlwQ2xvY2tcbiAgICAgKiBAcGFyYW0gIHtUaW1lcn0gdGltZXIgLSBUaGUgYHRpbWVyYCBhdHRyaWJ1dGUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXQgdGltZXIodGltZXIpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHRpbWVyLCBUaW1lcikpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aW1lciA9IHRpbWVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBjbG9jaydzIGBGYWNlVmFsdWVgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHJldHVybiB7RmFjZVZhbHVlfG51bGx9IFRoZSBgRmFjZVZhbHVlYCBpZiBzZXQsIG90aGVyd2lzZSBgbnVsbGAuXG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNlID8gdGhpcy5mYWNlLnZhbHVlIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgY2xvY2sncyBgRmFjZVZhbHVlYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF0aGlzLmZhY2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBmYWNlIG11c3QgYmUgc2V0IGJlZm9yZSBzZXR0aW5nIGEgdmFsdWUuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS52YWx1ZS5jbG9uZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhY2UudmFsdWUgPSB0aGlzLmZhY2UuY3JlYXRlRmFjZVZhbHVlKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG9yaWdpbmFsIHZhbHVlIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEByZXR1cm4geyp9IC0gVGhlIGBvcmlnaW5hbFZhbHVlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpc0Z1bmN0aW9uKHRoaXMuJG9yaWdpbmFsVmFsdWUpICYmICF0aGlzLiRvcmlnaW5hbFZhbHVlLm5hbWVcbiAgICAgICAgKSA/IHRoaXMuJG9yaWdpbmFsVmFsdWUoKSA6ICh0aGlzLiRvcmlnaW5hbFZhbHVlIHx8ICh0aGlzLmZhY2UgPyB0aGlzLmZhY2UuZGVmYXVsdFZhbHVlKCkgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBvcmlnaW5hbCB2YWx1ZSBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GbGlwQ2xvY2tcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgb3JpZ2luYWxWYWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2V0IG9yaWdpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50IHRoZSBjbG9jayB0byB0aGUgcGFyZW50IERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgLSBUaGUgcGFyZW50IGBIVE1MRWxlbWVudGAuXG4gICAgICogQHJldHVybiB7RmxpcENsb2NrfSAtIFRoZSBgRmxpcENsb2NrYCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBtb3VudChlbCkge1xuICAgICAgICBzdXBlci5tb3VudChlbCk7XG5cbiAgICAgICAgdGhpcy5mYWNlLm1vdW50ZWQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbG9jaydzIERPTSBub2Rlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgcGFyZW50IGBIVE1MRWxlbWVudGAuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBDYWxsIHRoZSBwYXJlbnQgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZmFjZSBoYXMgYSByZW5kZXIgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGEgZmFjZSB0byBjb21wbGV0ZWx5IHJlLXJlbmRlciBvciBhZGQgdG8gdGhlIHRoZW1lLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBmYWNlIHNwZWNpZmljIGludGVyZmFjZXMgZm9yIGEgdGhlbWUuXG4gICAgICAgIGlmKHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lLmZhY2VzW3RoaXMuZmFjZS5uYW1lXSh0aGlzLmVsLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhc3MgdGhlIGNsb2NrIGluc3RhbmNlIHRvIHRoZSByZW5kZXJlZCgpIGZ1bmN0aW9uIG9uIHRoZSBmYWNlLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBnbG9iYWwgbW9kaWZpY2F0aW9ucyB0byB0aGUgcmVuZGVyZWQgdGVtcGxhdGVzIG5vdFxuICAgICAgICAvLyB0aGVtZSBzcGVjaWZpYy5cbiAgICAgICAgdGhpcy5mYWNlLnJlbmRlcmVkKHRoaXMpO1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgcmVuZGVyZWQgYEhUTUxFbGVtZW50YC5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIGNsb2NrLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuIC0gVGhlIGludGVydmFsIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgaWYoIXRoaXMudGltZXIuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVW5kZWZpbmVkKHRoaXMuZmFjZS5zdG9wQXQpICYmICh0aGlzLmZhY2Uuc3RvcEF0ID0gdGhpcy5zdG9wQXQpO1xuICAgICAgICBpc1VuZGVmaW5lZCh0aGlzLmZhY2Uub3JpZ2luYWxWYWx1ZSkgJiYgKHRoaXMuZmFjZS5vcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlKTtcblxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS5pbnRlcnZhbCh0aGlzLCBmbilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mYWNlLnN0YXJ0ZWQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHRoZSBjbG9jay5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBzdG9wIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoZm4pO1xuICAgICAgICB0aGlzLmZhY2Uuc3RvcHBlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGNsb2NrIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAtIFRoZSBpbnRlcnZhbCBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWU7XG4gICAgICAgIHRoaXMudGltZXIucmVzZXQoKCkgPT4gdGhpcy5pbnRlcnZhbCh0aGlzLCBmbikpO1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluY3JlbWVudCB0aGUgY2xvY2sncyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAgeyp8dW5kZWZpbmVkfSB2YWx1ZSAtIEluY3JlbWVudCB0aGUgY2xvY2sgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiAgICAgSWYgbm8gdmFsdWUgaXMgcGFzc2VkLCB0aGVuIHRoZSBkZWZhdWx0IGluY3JlbWVudCBpcyBkZXRlcm1pbmVkIGJ5XG4gICAgICogICAgIHRoZSBGYWNlLCB3aGljaCBpcyB1c3VhbGx5IGAxYC4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGbGlwQ2xvY2t9IC0gVGhlIGBGbGlwQ2xvY2tgIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UuaW5jcmVtZW50KHRoaXMsIHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGRlY3JlbWVudCB0aGUgY2xvY2sncyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAgeyp8dW5kZWZpbmVkfSB2YWx1ZSAtIERlY3JlbWVudCB0aGUgY2xvY2sgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiAgICAgSWYgbm8gdmFsdWUgaXMgcGFzc2VkLCB0aGVuIHRoZSBkZWZhdWx0IGRlY3JlbWVudCBpcyBkZXRlcm1pbmVkIGJ5XG4gICAgICogICAgIHRoZSBgRmFjZWAsIHdoaWNoIGlzIHVzdWFsbHkgYDFgLlxuICAgICAqIEByZXR1cm4ge0ZsaXBDbG9ja30gLSBUaGUgYEZsaXBDbG9ja2AgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZGVjcmVtZW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS5kZWNyZW1lbnQodGhpcywgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gaW5zdGFudGlhdGUgYSBuZXcgYERpdmlkZXJgLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHBhcmFtICB7b2JqZWN0fHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgRGl2aWRlcmAgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7RGl2aWRlcn0gLSBUaGUgaW5zdGFudGlhdGVkIERpdmlkZXIuXG4gICAgICovXG4gICAgY3JlYXRlRGl2aWRlcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBEaXZpZGVyLm1ha2UoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBMaXN0YC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlIC0gVGhlIGBMaXN0YCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gIHtvYmplY3R8dW5kZWZpbmVkfSBbYXR0cmlidXRlc10gLSBUaGUgYXR0cmlidXRlcyBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgIGBMaXN0YCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtMaXN0fSAtIFRoZSBpbnN0YW50aWF0ZWQgYExpc3RgLlxuICAgICAqL1xuICAgIGNyZWF0ZUxpc3QodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExpc3QubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGluc3RhbnRpYXRlIGEgbmV3IGBMYWJlbGAuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GbGlwQ2xvY2tcbiAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZSAtIFRoZSBgTGFiZWxgIHZhbHVlLlxuICAgICAqIEBwYXJhbSAge29iamVjdHx1bmRlZmluZWR9IFthdHRyaWJ1dGVzXSAtIFRoZSBhdHRyaWJ1dGVzIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgYExhYmVsYCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtMYWJlbH0gLSBUaGUgaW5zdGFudGlhdGVkIGBMYWJlbGAuXG4gICAgICovXG4gICAgY3JlYXRlTGFiZWwodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExhYmVsLm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBgR3JvdXBgLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGl0ZW1zIC0gQW4gYXJyYXkgb2YgYExpc3RgIGl0ZW1zIHRvIGdyb3VwLlxuICAgICAqIEBwYXJhbSAge0dyb3VwfHVuZGVmaW5lZH0gW2F0dHJpYnV0ZXNdIC0gVGhlIGF0dHJpYnV0ZXMgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICBgR3JvdXBgIGluc3RhbmNlLlxuICAgICAqIEByZXR1cm4ge0dyb3VwfSAtIFRoZSBpbnN0YW50aWF0ZWQgYEdyb3VwYC5cbiAgICAgKi9cbiAgICBjcmVhdGVHcm91cChpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gR3JvdXAubWFrZShpdGVtcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGdsb2JhbCBkZWZhdWx0IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRzLkZsaXBDbG9ja1xuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHNldCB0aGUgZGVmYXVsdCBgRmFjZWAgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GbGlwQ2xvY2tcbiAgICAgKiBAcGFyYW0gIHtGYWNlfSB2YWx1ZSAtIFRoZSBkZWZhdWx0IGBGYWNlYCBjbGFzcy5UaGlzIHNob3VsZCBiZSBhXG4gICAgICogICAgIGNvbnN0cnVjdG9yLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgRmFjZSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMuZmFjZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gc2V0IHRoZSBkZWZhdWx0IHRoZW1lLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudHMuRmxpcENsb2NrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gVGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RGVmYXVsdFRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGhlbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy50aGVtZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBzZXQgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50cy5GbGlwQ2xvY2tcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBUaGUgZGVmYXVsdCBsYW5ndWFnZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsiZXJyb3IiLCJzdHJpbmciLCJFcnJvciIsImNhbGxiYWNrIiwiZm4iLCJpc0Z1bmN0aW9uIiwiYXJncyIsImNhbGwiLCJyb3VuZCIsInZhbHVlIiwiaXNOZWdhdGl2ZVplcm8iLCJpc05lZ2F0aXZlIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInRvU3RyaW5nIiwibm9vcCIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwiY2hhaW4iLCJiZWZvcmUiLCJhZnRlciIsImNvbmNhdE1hcCIsIngiLCJtYXAiLCJyZWR1Y2UiLCJ5IiwiY29uY2F0IiwiZmxhdHRlbiIsImRlZXBGbGF0dGVuIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiSW5maW5pdHkiLCJpc0NvbnN0cnVjdG9yIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsInR5cGUiLCJpc051bWJlciIsImlzTmFOIiwia2ViYWJDYXNlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50cyIsImtleSIsImZvckVhY2giLCJldmVudCIsImFwcGx5IiwicHVzaCIsImZpbHRlciIsIm9mZiIsIm9uIiwiaGFzT3duUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0QXR0cmlidXRlIiwia2V5cyIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsIm9iaiIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZXMiLCJpIiwiY29uc3RydWN0b3IiLCIkZXZlbnRzIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInNwbGl0IiwiZGlnaXRzIiwiYXJyIiwibWluIiwidW5zaGlmdCIsIlJBTkdFUyIsIm1heCIsImZvcm1hdCIsInBhcnNlRmxvYXQiLCJmaW5kUmFuZ2UiLCJjaGFyIiwiY29kZSIsImNoYXJDb2RlQXQiLCJzdHJpbmdGcm9tQ2hhckNvZGVCeSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5leHQiLCJjb252ZXJ0ZWQiLCJyYW5nZSIsImpvaW4iLCJwcmV2IiwiRmFjZVZhbHVlIiwiZ2V0UHVibGljQXR0cmlidXRlcyIsIiRkaWdpdHMiLCIkdmFsdWUiLCJ2YWxpZGF0ZSIsInN1Y2Nlc3MiLCJhcmciLCJpdGVtcyIsInRoZW1lIiwibGFuZ3VhZ2UiLCJkYXRlIiwiZmFjZSIsImVsZW1lbnQiLCJmYWNlVmFsdWUiLCJ0aW1lciIsIkZhY2UiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJkZWZhdWx0VmFsdWUiLCJpbnN0YW5jZSIsImRlY3JlbWVudCIsImluY3JlbWVudCIsInNob3VsZFN0b3AiLCJzdG9wIiwiZW1pdCIsInN0b3BBdCIsImFtb3VudCIsImlzU3RvcHBlZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0IiwibWFrZSIsImRlZmF1bHREYXRhVHlwZSIsImNyZWF0ZUZhY2VWYWx1ZSIsIiRzdG9wQXQiLCIkb3JpZ2luYWxWYWx1ZSIsImRpY3Rpb25hcnkiLCJhbGlhc2VzIiwiTEFOR1VBR0VTIiwiZmluZCIsImluZGV4T2YiLCJ0cmFuc2xhdGUiLCJmcm9tIiwibGFuZyIsInN3YXAiLCJzdWJqZWN0IiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZWwiLCJhcHBlbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJIVE1MRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiaW5uZXJIVE1MIiwiRG9tQ29tcG9uZW50IiwicGFyZW50IiwiY2xhc3MiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJpbnNlcnRCZWZvcmUiLCIkZWwiLCJDb25zb2xlTWVzc2FnZXMiLCIkcGFyZW50IiwiJHRoZW1lIiwiJGxhbmd1YWdlIiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdCIsIml0ZW0iLCIkaXRlbXMiLCJHcm91cCIsIkxhYmVsIiwibGFiZWwiLCJUaW1lciIsImludGVydmFsIiwiY291bnQiLCJoYW5kbGUiLCJzdGFydGVkIiwicnVubmluZyIsIkRhdGUiLCJsYXN0TG9vcCIsIm5vdyIsImxvb3AiLCJpc1J1bm5pbmciLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJnZXRUaW1lIiwiQ291bnRlciIsIk1pbnV0ZUNvdW50ZXIiLCJzaG93U2Vjb25kcyIsInNob3dMYWJlbHMiLCJkaWZmIiwib3JpZ2luYWxWYWx1ZSIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiYSIsImIiLCJnZXRUb3RhbFNlY29uZHMiLCJ0b3RhbFNlY29uZHMiLCJhYnMiLCJIb3VyQ291bnRlciIsImRhdGEiLCJnZXRIb3VycyIsIkRheUNvdW50ZXIiLCJnZXREYXlzIiwiVHdlbnR5Rm91ckhvdXJDbG9jayIsImdyb3VwcyIsIm9mZnNldCIsIlR3ZWx2ZUhvdXJDbG9jayIsInNob3dNZXJpZGl1bSIsImhvdXJzIiwibWVyaWRpdW0iLCJXZWVrQ291bnRlciIsImdldFdlZWtzIiwiWWVhckNvdW50ZXIiLCJnZXRZZWFycyIsImluZGV4IiwiY2hpbGROb2RlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJ0cyIsImdyb3VwIiwiZ3JvdXBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaXN0cyIsImxpc3RFbCIsImxpc3RWYWx1ZSIsImNyZWF0ZUxpc3QiLCJkb21WYWx1ZSIsImRlbGF5IiwiY3JlYXRlR3JvdXAiLCJub2RlcyIsInQiLCJiZWZvcmVWYWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImNyZWF0ZUxpc3RJdGVtIiwiYWN0aXZlIiwiY3JlYXRlRGl2aWRlciIsIm1vdW50IiwiY3JlYXRlTGFiZWwiLCJGbGlwQ2xvY2siLCJmYWNlcyIsIk9yaWdpbmFsIiwiRW5nbGlzaCIsIkRlZmF1bHRWYWx1ZXMiLCJtb3VudGVkIiwicmVuZGVyZWQiLCJzdG9wcGVkIiwicmVzZXQiLCIkZmFjZSIsIkZhY2VzIiwidW5kZWZpbmVkIiwiaW5pdGlhbGl6ZWQiLCIkdGltZXIiLCJjbG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7O0lBRUE7Ozs7Ozs7O0FBUUEsSUFBTyxTQUFTQSxLQUFULENBQWVDLE1BQWYsRUFBdUI7SUFDMUIsUUFBTUMsS0FBSyxDQUFDRCxNQUFELENBQVg7SUFDSDtJQUVEOzs7Ozs7Ozs7OztBQVVBLElB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
