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

    function error(message) {
      throw new Error(message);
    }
    function callback(fn) {
      if (isFunction(fn)) {
        return fn.apply(this, [].slice.call(arguments).slice(1));
      }
    }
    function noop(value) {
      return !isUndefined(value) && !isNull(value);
    }
    function chain(before, after) {
      return function () {
        return after(before());
      };
    }
    function concatMap(fn) {
      return function (x) {
        return x.map(fn).reduce(function (x, y) {
          return x.concat(y);
        }, []);
      };
    }
    function flatten(x) {
      return concatMap(function (x) {
        return x;
      })(x);
    }
    function deepFlatten(x) {
      return concatMap(function (x) {
        return Array.isArray(x) ? deepFlatten(x) : x;
      })(x);
    }
    function length(digits) {
      return deepFlatten(digits).length;
    }
    function isNull(value) {
      return value === null; // || typeof value === 'null';
    }
    function isUndefined(value) {
      return typeof value === 'undefined';
    }
    function isClass(value) {
      return value instanceof Function && !!value.name;
    }
    function isString(value) {
      return typeof value === 'string';
    }
    function isArray(value) {
      return value instanceof Array;
    }
    function isObject(value) {
      var type = _typeof(value);

      return value != null && !isArray(value) && (type == 'object' || type == 'function');
    }
    function isFunction(value) {
      return value instanceof Function;
    }
    function isNumber(value) {
      return !isNaN(value);
    }
    function kebabCase(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
    }

    var Component =
    /*#__PURE__*/
    function () {
      function Component(attributes) {
        _classCallCheck(this, Component);

        this.setAttribute(Object.assign({
          events: {}
        }, attributes));
      }

      _createClass(Component, [{
        key: "emit",
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
      }, {
        key: "on",
        value: function on(key, fn) {

          if (!this.events[key]) {
            this.events[key] = [];
          }

          this.events[key].push(fn);
          return this;
        }
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
      }, {
        key: "once",
        value: function once(key, fn) {
          var _this2 = this;

          fn = chain(fn, function () {
            return _this2.off(key, fn);
          });
          this.on(key, fn, true);
        }
      }, {
        key: "getAttribute",
        value: function getAttribute(key) {
          return this.hasOwnProperty(key) ? this[key] : null;
        }
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
      }, {
        key: "setAttribute",
        value: function setAttribute(key, value) {
          if (isObject(key)) {
            this.setAttributes(key);
          } else {
            this[key] = value;
          }
        }
      }, {
        key: "setAttributes",
        value: function setAttributes(values) {
          for (var i in values) {
            this.setAttribute(i, values[i]);
          }
        }
      }, {
        key: "callback",
        value: function callback$$1(fn) {
          return callback.call(this, fn);
        }
      }, {
        key: "name",
        get: function get() {
          return this.constructor.name;
        }
      }, {
        key: "className",
        get: function get() {
          return kebabCase(this.name);
        }
      }, {
        key: "events",
        get: function get() {
          return this.$events;
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

    var Timer =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Timer, _Component);

      function Timer(interval) {
        _classCallCheck(this, Timer);

        return _possibleConstructorReturn(this, _getPrototypeOf(Timer).call(this, Object.assign({
          count: 0,
          handle: null,
          started: null,
          running: false,
          interval: interval
        }, isObject(interval) ? interval : null)));
      }
      /**
       * Gets the elapsed the time as an interger
       *
       * @return Integer
       */


      _createClass(Timer, [{
        key: "reset",

        /**
         * Resets the timer. This method is chainable.
         *
         * @param  Function  fn
         * @return this
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
         * Starts the timer. This method is chainable.
         *
         * @param  Function  fn
         * @return this
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
              _this2.lastLoop = Date.now();
              callback.call(_this2, fn);

              _this2.emit('interval');

              _this2.count++;
            }

            _this2.handle = window.requestAnimationFrame(loop);
            return _this2;
          };

          return loop();
        }
        /**
         * Stops the timer. This method is chainable.
         *
         * @param  Function fn
         * @return this
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
          return this.count * this.interval;
        }
        /**
         * Returns true is the timer is running.
         *
         * @return Boolean
         */

      }, {
        key: "isRunning",
        get: function get() {
          return this.running === true;
        }
        /**
         * Returns true is the timer is not running.
         *
         * @return Boolean
         */

      }, {
        key: "isStopped",
        get: function get() {
          return this.running === false;
        }
      }]);

      return Timer;
    }(Component);

    function digitize(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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

    var ranges = [{
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

    function format(value, type) {
      switch (type) {
        case 'number':
          return parseFloat(value);
      }

      return value;
    }

    function findRange(char) {
      for (var i in ranges) {
        var code = char.toString().charCodeAt(0);

        if (ranges[i].min <= code && ranges[i].max >= code) {
          return ranges[i];
        }
      }

      return null;
    }

    function next(value) {
      var converted = value.toString().split('').map(function (char) {
        return charCode(char, function (range, code) {
          return !range || code < range.max ? code + 1 : range.min;
        });
      }).join('');
      return format(converted, _typeof(value));
    }

    function charCode(char, fn) {
      var range = findRange(char);
      var code = char.charCodeAt(0);
      return String.fromCharCode(fn(range, code));
    }

    function prev(value) {
      var converted = value.toString().split('').map(function (char) {
        return charCode(char, function (range, code) {
          return !range || code > range.min ? code - 1 : range.max;
        });
      }).join('');
      return format(converted, _typeof(value));
    }

    var FaceValue =
    /*#__PURE__*/
    function (_Component) {
      _inherits(FaceValue, _Component);

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

      _createClass(FaceValue, [{
        key: "isNaN",
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
      }, {
        key: "isNumber",
        value: function isNumber$$1() {
          return isNumber();
        }
      }, {
        key: "digits",
        set: function set(value) {
          this.$digits = value;
          this.minimumDigits = Math.max(this.minimumDigits, length(value));
        },
        get: function get() {
          return this.$digits;
        }
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
      }]);

      return FaceValue;
    }(Component);

    function validate(value) {
      var success = false;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      flatten(args).forEach(function (arg) {
        if (isNull(value) && isNull(arg) || isObject(arg) && value instanceof arg || isFunction(arg) && !isClass(arg) && arg(value) === true || isString(arg) && _typeof(value) === arg) {
          success = true;
        }
      });
      return success;
    }

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

      function Face(value, attributes) {
        var _this;

        _classCallCheck(this, Face);

        var delay = attributes.delay || 1000;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Face).call(this, {
          autoStart: true,
          countdown: false,
          animationRate: delay / 2,
          timer: Timer.make(delay)
        }));

        _this.setAttributes(Object.assign(_this.defaultAttributes() || {}, attributes || {}));

        _this.value = !isNull(value) ? value : _this.defaultValue();
        return _this;
      }

      _createClass(Face, [{
        key: "interval",
        value: function interval(instance, fn) {
          if (this.countdown) {
            this.decrement(instance);
          } else {
            this.increment(instance);
          }

          callback.call(this, fn);
          return this.emit('interval');
        }
      }, {
        key: "start",
        value: function start(instance, fn) {
          var _this2 = this;

          this.timer.start(function () {
            return _this2.interval(instance, fn);
          });
          return this.emit('start');
        }
      }, {
        key: "stop",
        value: function stop(instance, fn) {
          this.timer.stop(fn);
          return this.emit('stop');
        }
      }, {
        key: "reset",
        value: function reset(instance, fn) {
          var _this3 = this;

          this.timer.reset(function () {
            return _this3.interval(instance, fn);
          });
          return this.emit('reset');
        }
      }, {
        key: "createFaceValue",
        value: function createFaceValue(value) {
          var _this4 = this;

          return FaceValue.make(value, {
            format: function format(value) {
              return _this4.format(value);
            }
          });
        }
      }, {
        key: "format",
        value: function format(value) {
          return value;
        }
      }, {
        key: "defaultValue",
        value: function defaultValue() {//
        }
      }, {
        key: "defaultAttributes",
        value: function defaultAttributes() {//
        }
      }, {
        key: "defaultDataType",
        value: function defaultDataType() {//
        }
      }, {
        key: "increment",
        value: function increment(instance) {//
        }
      }, {
        key: "decrement",
        value: function decrement(instance) {//
        }
      }, {
        key: "initialized",
        value: function initialized(instance) {//
        }
      }, {
        key: "rendered",
        value: function rendered(instance) {//
        }
      }, {
        key: "mounted",
        value: function mounted(instance) {
          if (this.autoStart && this.timer.isStopped) {
            this.start(instance);
          }
        }
      }, {
        key: "dataType",
        get: function get() {
          return this.defaultDataType();
        }
      }, {
        key: "value",
        get: function get() {
          return this.$value;
        },
        set: function set(value) {
          if (this.dataType && !validate(value, [this.dataType])) {
            error("The face value must be an instance of a ".concat(this.dataType.name));
          }

          this.$value = value instanceof FaceValue ? value : this.createFaceValue(value);
          this.emit('updated', this.value);
        }
      }, {
        key: "timer",
        get: function get() {
          return this.$timer;
        },
        set: function set(timer) {
          if (!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
          }

          this.$timer = timer;
        }
      }]);

      return Face;
    }(Component);

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
          this.value = this.value.value + 1;
        }
      }, {
        key: "decrement",
        value: function decrement(instance) {
          this.value = this.value.value - 1;
        }
      }]);

      return Counter;
    }(Face);

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
        key: "initialized",
        value: function initialized(instance) {
          this.originalValue = instance.originalValue;
        }
      }, {
        key: "interval",
        value: function interval(instance, fn) {
          this.value = new Date();
          callback.call(this, fn);
          return this.emit('interval');
        }
      }, {
        key: "format",
        value: function format(value) {
          var now = !this.timer.started ? new Date() : value;
          var originalValue = this.originalValue || value;
          var a = !this.countdown ? now : originalValue;
          var b = !this.countdown ? originalValue : now;
          return [[this.getMinutes(a, b)], [this.getSeconds(a, b)]];
        }
      }, {
        key: "getMinutes",
        value: function getMinutes(a, b) {
          return Math.floor(this.getTotalSeconds(a, b) / 60);
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
          return Math.round((a.getTime() - b.getTime()) / 1000);
        }
      }]);

      return MinuteCounter;
    }(Face);

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
        value: function format(value) {
          var now = !this.timer.started ? new Date() : value;
          var originalValue = this.originalValue || value;
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
        value: function format(value) {
          var now = !this.timer.started ? new Date() : value;
          var originalValue = this.originalValue || value;
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

    var TwentyFourHourClock =
    /*#__PURE__*/
    function (_Face) {
      _inherits(TwentyFourHourClock, _Face);

      function TwentyFourHourClock() {
        _classCallCheck(this, TwentyFourHourClock);

        return _possibleConstructorReturn(this, _getPrototypeOf(TwentyFourHourClock).apply(this, arguments));
      }

      _createClass(TwentyFourHourClock, [{
        key: "defaultValue",

        /*
        defaultDataType() {
            return Date;
        }
        */
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
        value: function format(value) {
          var groups = [[value.getHours()], [value.getMinutes()]];

          if (this.showSeconds) {
            groups.push([value.getSeconds()]);
          }

          return groups;
        }
      }, {
        key: "interval",
        value: function interval(instance, fn) {
          this.value = new Date();
          callback.call(this, fn);
          return this.emit('interval');
        }
      }]);

      return TwentyFourHourClock;
    }(Face);

    var TwelveHourClock =
    /*#__PURE__*/
    function (_TwentyFourHourClock) {
      _inherits(TwelveHourClock, _TwentyFourHourClock);

      function TwelveHourClock() {
        _classCallCheck(this, TwelveHourClock);

        return _possibleConstructorReturn(this, _getPrototypeOf(TwelveHourClock).apply(this, arguments));
      }

      _createClass(TwelveHourClock, [{
        key: "defaultDataType",
        value: function defaultDataType() {
          return Date;
        }
      }, {
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
        value: function format(value) {
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
        value: function format(value) {
          var now = !this.timer.started ? new Date() : value;
          var originalValue = this.originalValue || value;
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
        value: function format(value) {
          var now = !this.timer.started ? new Date() : value;
          var originalValue = this.originalValue || value;
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

    function _translate (value, from) {
      return (isString(from || 'en-us') ? language(from) : from).dictionary[value] || value;
    }

    function swap(el, existing) {
      if (existing.parentNode) {
        existing.parentNode.replaceChild(el, existing);
        return el;
      }

      return existing;
    }
    function setAttributes(el, attributes) {
      if (isObject(attributes)) {
        for (var i in attributes) {
          el.setAttribute(i, attributes[i]);
        }
      }

      return el;
    }
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
    /*
    export default function(value, attributes) {
    	const template = document.createElement('template');

        template.innerHTML = isArray(value) ?
    		deepFlatten(value).filter(noop).join('') : value;

    	if(isObject(attributes)) {
    		for(const i in attributes) {
    			template.content.firstChild.setAttribute(i, attributes[i]);
    		}
    	}

        return template.content.firstChild;
    }
    */

    var DomComponent =
    /*#__PURE__*/
    function (_Component) {
      _inherits(DomComponent, _Component);

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

      _createClass(DomComponent, [{
        key: "translate",
        value: function translate(key) {
          return _translate(key, this.language);
        }
      }, {
        key: "t",
        value: function t(key) {
          return this.translate(key);
        }
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
      }, {
        key: "mount",
        value: function mount(parent, before) {
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
        },
        set: function set(value) {
          if (!validate(value, null, HTMLElement)) {
            error(ConsoleMessages.element);
          }

          this.$el = value;
        }
      }, {
        key: "parent",
        get: function get() {
          return this.$parent;
        },
        set: function set(parent) {
          this.$parent = parent;
        }
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
      }, {
        key: "language",
        get: function get() {
          return this.$language;
        },
        set: function set(value) {
          if (!validate(value, 'object')) {
            error(ConsoleMessages.language);
          }

          this.$language = value;
        }
      }]);

      return DomComponent;
    }(Component);

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

      function List(value, attributes) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, Object.assign({
          value: value,
          items: []
        }, isObject(value) ? value : null, attributes)));
      }

      _createClass(List, [{
        key: "createListItem",
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
        },
        set: function set(value) {
          this.$value = value;
        }
      }, {
        key: "items",
        get: function get() {
          return this.$items;
        },
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

      function Group(items, attributes) {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, Object.assign({
          items: items
        }, isObject(items) ? items : null, attributes)));
      }

      return Group;
    }(DomComponent);

    var Label =
    /*#__PURE__*/
    function (_DomComponent) {
      _inherits(Label, _DomComponent);

      function Label(label, attributes) {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, _getPrototypeOf(Label).call(this, Object.assign({
          label: label
        }, isObject(label) ? label : null, attributes)));
      }

      return Label;
    }(DomComponent);

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
      instance.createDivider().mount(el, el.childNodes[1]);

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
     * FlipClock Arabic Language Pack
     *
     * This class will be used to translate tokens into the Arabic language.
     */

    /**
     * FlipClock Czech Language Pack
     *
     * This class will used to translate tokens into the Czech language.
     */

    /**
     * FlipClock Danish Language Pack
     *
     * This class will used to translate tokens into the Danish language.
     */

    /**
     * FlipClock German Language Pack
     *
     * This class will used to translate tokens into the German language.
     */

    /**
     * FlipClock English Language Pack
     *
     * This class will used to translate tokens into the English language.
     */
    var dictionary$4 = {
      'years': 'Years',
      'months': 'Months',
      'days': 'Days',
      'hours': 'Hours',
      'minutes': 'Minutes',
      'seconds': 'Seconds'
    };
    var aliases$4 = ['en', 'en-us', 'english'];

    var English = /*#__PURE__*/Object.freeze({
        dictionary: dictionary$4,
        aliases: aliases$4
    });

    /**
     * FlipClock Spanish Language Pack
     *
     * This class will used to translate tokens into the Spanish language.
     */

    /**
     * FlipClock Persian Language Pack
     *
     * This class will used to translate tokens into the English language.
     */

    /**
     * FlipClock Finnish Language Pack
     *
     * This class will used to translate tokens into the Finnish language.
     */

    /**
     * FlipClock Canadian French Language Pack
     *
     * This class will used to translate tokens into the Canadian French language.
     */

    /**
     * FlipClock Hebrew Language Pack
     *
     * This class will used to translate tokens into the Canadian French language.
     */

    /**
     * FlipClock Hungarian Language Pack
     *
     * This class will used to translate tokens into the Hungarian language.
     */

    /**
     * FlipClock Italian Language Pack
     *
     * This class will used to translate tokens into the Italian language.
     */

    /**
     * FlipClock Japanese Language Pack
     *
     * This class will used to translate tokens into the Japanese language.
     */

    /**
     * FlipClock Korean Language Pack
     *
     * This class will used to translate tokens into the Korean language.
     */

    /**
     * FlipClock Latvian Language Pack
     *
     * This class will used to translate tokens into the Latvian language.
     */

    /**
     * FlipClock Dutch Language Pack
     *
     * This class will used to translate tokens into the Dutch language.
     */

    /**
     * FlipClock Norwegian-Bokmål Language Pack
     *
     * This class will used to translate tokens into the Norwegian language.
     */

    /**
     * FlipClock Polish Language Pack
     *
     * This class will used to translate tokens into the Polish language.
     */

    /**
     * FlipClock Portuguese Language Pack
     *
     * This class will used to translate tokens into the Portuguese language.
     */

    /**
     * FlipClock Swedish Language Pack
     *
     * This class will used to translate tokens into the Swedish language.
     */

    /**
     * FlipClock Russian Language Pack
     *
     * This class will used to translate tokens into the Russian language.
     */

    /**
     * FlipClock Slovak Language Pack
     *
     * This class will used to translate tokens into the Slovak language.
     */

    /**
     * FlipClock Swedish Language Pack
     *
     * This class will used to translate tokens into the Swedish language.
     */

    /**
     * FlipClock Thai Language Pack
     *
     * This class will used to translate tokens into the Thai language.
     */

    /**
     * FlipClock Turkish Language Pack
     *
     * This class will used to translate tokens into the Turkish language.
     */

    /**
     * FlipClock Ukrainian Language Pack
     *
     * This class will used to translate tokens into the Ukrainian language.
     */

    /**
     * FlipClock Traditional Vietnamese Language Pack
     *
     * This class will used to translate tokens into Vietnamese.
     */

    /**
     * FlipClock Chinese Language Pack
     *
     * This class will used to translate tokens into the Chinese language.
     */

    /**
     * FlipClock Traditional Chinese Language Pack
     *
     * This class will used to translate tokens into the Traditional Chinese.
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
          language: DefaultValues.language
        }, isObject(value) ? value : null, attributes)));
        _this.face = face;

        _this.mount(el);

        return _this;
      }

      _createClass(FlipClock, [{
        key: "bindFaceEvents",
        value: function bindFaceEvents() {
          var _this2 = this;

          var fn = function fn() {
            return _this2.updated();
          };

          this.$face.off('updated', fn).on('updated', fn);
          ['updated', 'start', 'stop', 'reset', 'interval'].forEach(function (event) {
            var fn = function fn() {
              return _this2.emit(event);
            };

            _this2.face.off(event, fn).on(event, fn);
          });
        }
      }, {
        key: "updated",
        value: function updated() {
          this.render();

          if (this.stopAt !== undefined && this.stopAt === this.face.value.value) {
            this.stop();
          }
        }
      }, {
        key: "mount",
        value: function mount(el) {
          _get(_getPrototypeOf(FlipClock.prototype), "mount", this).call(this, el);

          this.face.mounted(this);
          return this;
        }
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


          this.face.rendered(this); // Return the rendered element.

          return this.el;
        }
      }, {
        key: "reset",
        value: function reset(fn) {
          this.face.reset(this, fn);
          return this;
        }
      }, {
        key: "start",
        value: function start(fn) {
          this.face.start(this, fn);
          return this;
        }
      }, {
        key: "stop",
        value: function stop(fn) {
          this.face.stop(this, fn);
          return this;
        }
      }, {
        key: "createDivider",
        value: function createDivider(attributes) {
          return Divider.make(Object.assign({
            theme: this.theme,
            language: this.language
          }, attributes));
        }
      }, {
        key: "createList",
        value: function createList(value, attributes) {
          return List.make(value, Object.assign({
            theme: this.theme,
            language: this.language
          }, attributes));
        }
      }, {
        key: "createLabel",
        value: function createLabel(value, attributes) {
          return Label.make(value, Object.assign({
            theme: this.theme,
            language: this.language
          }, attributes));
        }
      }, {
        key: "createGroup",
        value: function createGroup(items, attributes) {
          return Group.make(items, Object.assign({
            theme: this.theme,
            language: this.language
          }, attributes));
        }
      }, {
        key: "face",
        get: function get$$1() {
          return this.$face;
        },
        set: function set(value) {
          if (!validate(value, [Face, 'string', 'function'])) {
            error(ConsoleMessages.face);
          }

          if (isString(value) && Faces[value]) {
            this.$face = new Faces[value](this.originalValue, this.getPublicAttributes());
          } else {
            this.$face = new value(this.originalValue, this.getPublicAttributes());
          }

          this.bindFaceEvents();
          this.face.initialized(this);
          this.el && this.render();
        }
      }, {
        key: "stopAt",
        get: function get$$1() {
          return isFunction(this.$stopAt) ? this.$stopAt(this) : this.$stopAt;
        },
        set: function set(value) {
          this.$stopAt = value;
        }
      }, {
        key: "timer",
        get: function get$$1() {
          return this.face.timer;
        },
        set: function set(value) {
          this.face.timer = value;
        }
      }, {
        key: "value",
        get: function get$$1() {
          return this.face.value;
        },
        set: function set(value) {
          this.face.reset(this, value);
          this.face.value = value;
        }
      }], [{
        key: "setDefaultFace",
        value: function setDefaultFace(value) {
          validate(value, [Face, 'function']).then(function () {
            DefaultValues.face = value;
          }, function () {
            error(ConsoleMessages.face);
          });
        }
      }, {
        key: "setDefaultTheme",
        value: function setDefaultTheme(value) {
          if (!validate(value, 'object')) {
            error(ConsoleMessages.theme);
          }

          DefaultValues.theme = value;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0RpZ2l0aXplLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvSGVscGVycy9WYWxpZGF0ZS5qcyIsIi4uL3NyYy9qcy9Db25maWcvQ29uc29sZU1lc3NhZ2VzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZS5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9ZZWFyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RyYW5zbGF0ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvYXItYXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2NzLWN6LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kYS1kay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGUtZGUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VuLXVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lcy1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmEtaXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZpLWZpLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mci1jYS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaGUtaWwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2h1LWh1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9pdC1pdC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvamEtanAuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2tvLWtyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9sdi1sdi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbmwtYmUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25vLW5iLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wbC1wbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcHQtYnIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3JvLXJvLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ydS1ydS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc2stc2suanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3N2LXNlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90aC10aC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdHItdHIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3VhLXVhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy92bi12bi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtY24uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLXR3LmpzIiwiLi4vc3JjL2pzL0NvbmZpZy9EZWZhdWx0VmFsdWVzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmxpcENsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2soZm4pIHtcbiAgICBpZihpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDEpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgIWlzTnVsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbihiZWZvcmUsIGFmdGVyKSB7XG4gICAgcmV0dXJuICgpID0+IGFmdGVyKGJlZm9yZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdE1hcChmbikge1xuICAgIHJldHVybiB4ID0+IHtcbiAgICAgICAgcmV0dXJuIHgubWFwKGZuKS5yZWR1Y2UoKHgsIHkpID0+IHguY29uY2F0KHkpLCBbXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IHgpKHgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IEFycmF5LmlzQXJyYXkoeCkgPyBkZWVwRmxhdHRlbiAoeCkgOiB4KSh4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVjZmlyc3Qoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChkaWdpdHMpIHtcbiAgICByZXR1cm4gZGVlcEZsYXR0ZW4oZGlnaXRzKS5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7Ly8gfHwgdHlwZW9mIHZhbHVlID09PSAnbnVsbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDbGFzcyh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgISF2YWx1ZS5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgKFxuICAgICAgICB0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJ1xuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2ViYWJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG4iLCJpbXBvcnQgeyBjaGFpbiwgY2FsbGJhY2ssIGlzT2JqZWN0LCBrZWJhYkNhc2UgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZXZlbnRzOiB7fVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGtlYmFiQ2FzZSh0aGlzLm5hbWUpO1xuICAgIH1cblxuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmVudHM7XG4gICAgfVxuXG4gICAgc2V0IGV2ZW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRldmVudHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBlbWl0KGtleSwgLi4uYXJncykge1xuICAgICAgICBpZih0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihrZXksIGZuLCBvbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIXRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0ucHVzaChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb2ZmKGtleSwgZm4pIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSAmJiBmbikge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IHRoaXMuZXZlbnRzW2tleV0uZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQgIT09IGZuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKGtleSwgZm4pIHtcbiAgICAgICAgZm4gPSBjaGFpbihmbiwgKCkgPT4gdGhpcy5vZmYoa2V5LCBmbikpO1xuXG4gICAgICAgIHRoaXMub24oa2V5LCBmbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gdGhpc1trZXldIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgZ2V0UHVibGljQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0QXR0cmlidXRlcygpKVxuICAgICAgICAgICAgLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAha2V5Lm1hdGNoKC9eXFwkLyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZihpc09iamVjdChrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoa2V5KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGVzKHZhbHVlcykge1xuICAgICAgICBmb3IoY29uc3QgaSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGksIHZhbHVlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYmFjayhmbikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2UoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoLi4uYXJncyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0LCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWwpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGhhbmRsZTogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IG51bGwsXG4gICAgICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsOiBpbnRlcnZhbFxuICAgICAgICB9LCBpc09iamVjdChpbnRlcnZhbCkgPyBpbnRlcnZhbCA6IG51bGwpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBlbGFwc2VkIHRoZSB0aW1lIGFzIGFuIGludGVyZ2VyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEludGVnZXJcbiAgICAgKi9cbiAgICBnZXQgZWxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQgKiB0aGlzLmludGVydmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgcnVubmluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqL1xuICAgIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlzIHRoZSB0aW1lciBpcyBub3QgcnVubmluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqL1xuICAgIGdldCBpc1N0b3BwZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPT09IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIuIFRoaXMgbWV0aG9kIGlzIGNoYWluYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgRnVuY3Rpb24gIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy5zdG9wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgoKSA9PiBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXIuIFRoaXMgbWV0aG9kIGlzIGNoYWluYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgRnVuY3Rpb24gIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGU7XG4gICAgICAgIHRoaXMubGFzdExvb3AgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG5cbiAgICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLmxhc3RMb29wID49IHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICBpZih0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZ2l0aXplKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG1pbmltdW1EaWdpdHM6IDAsXG4gICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZChudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlcGVuZFplcm8gPSBvcHRpb25zLnByZXBlbmRMZWFkaW5nWmVybyAmJlxuICAgICAgICAgICAgbnVtYmVyLnRvU3RyaW5nKCkuc3BsaXQoJycpLmxlbmd0aCA9PT0gMTtcblxuICAgICAgICByZXR1cm4gKHNob3VsZFByZXBlbmRaZXJvID8gJzAnIDogJycpLmNvbmNhdChudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZ2l0cyhhcnIsIG1pbikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBkZWVwRmxhdHRlbihhcnIpLmxlbmd0aDtcblxuICAgICAgICBpZihsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtaW4gLSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclswXS51bnNoaWZ0KCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiBkaWdpdHMoZmxhdHRlbihbdmFsdWVdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oZGVlcEZsYXR0ZW4oW251bWJlcl0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBlbmQobnVtYmVyKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pKTtcbiAgICB9KSwgb3B0aW9ucy5taW5pbXVtRGlnaXRzIHx8IDApO1xufVxuIiwiY29uc3QgcmFuZ2VzID0gW3tcbiAgICAvLyAwLTlcbiAgICBtaW46IDQ4LFxuICAgIG1heDogNTdcbn0se1xuICAgIC8vIGEtelxuICAgIG1pbjogNjUsXG4gICAgbWF4OiA5MFxufSx7XG4gICAgLy8gQS1aXG4gICAgbWluOiA5NyxcbiAgICBtYXg6IDEyMlxufV07XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmFuZ2UoY2hhcikge1xuICAgIGZvcihjb25zdCBpIGluIHJhbmdlcykge1xuICAgICAgICBjb25zdCBjb2RlID0gY2hhci50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgaWYocmFuZ2VzW2ldLm1pbiA8PSBjb2RlICYmIHJhbmdlc1tpXS5tYXggPj0gY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmdlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dCh2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZCA9ICh2YWx1ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4gY2hhckNvZGUoY2hhciwgKHJhbmdlLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXJhbmdlIHx8IGNvZGUgPCByYW5nZS5tYXggPyBjb2RlICsgMSA6IHJhbmdlLm1pblxuICAgICAgICB9KSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdChjb252ZXJ0ZWQsIHR5cGVvZiB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGNoYXJDb2RlKGNoYXIsIGZuKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBmaW5kUmFuZ2UoY2hhcik7XG4gICAgY29uc3QgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShmbihyYW5nZSwgY29kZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldih2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZCA9ICh2YWx1ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4gY2hhckNvZGUoY2hhciwgKHJhbmdlLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXJhbmdlIHx8IGNvZGUgPiByYW5nZS5taW4gPyBjb2RlIC0gMSA6IHJhbmdlLm1heFxuICAgICAgICB9KSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdChjb252ZXJ0ZWQsIHR5cGVvZiB2YWx1ZSk7XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBkaWdpdGl6ZSBmcm9tICcuLi9IZWxwZXJzL0RpZ2l0aXplJztcbmltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGxlbmd0aCwgaXNPYmplY3QsIGlzTnVtYmVyIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlVmFsdWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLFxuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0cnVlLFxuICAgICAgICAgICAgbWluaW11bURpZ2l0czogMFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBkaWdpdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZGlnaXRzID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWluaW11bURpZ2l0cyA9IE1hdGgubWF4KHRoaXMubWluaW11bURpZ2l0cywgbGVuZ3RoKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpZ2l0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRpZ2l0cztcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5kaWdpdHMgPSBkaWdpdGl6ZSh0aGlzLmZvcm1hdCh2YWx1ZSksIHtcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IHRoaXMubWluaW11bURpZ2l0cyxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdGhpcy5wcmVwZW5kTGVhZGluZ1plcm9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNOYU4oKSB7XG4gICAgICAgIHJldHVybiBpc05hTih0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpc051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKClcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDbGFzcyhhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGl0ZW1zOiAnVGhlIGl0ZW1zIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgZGF0ZTogJ1RoZSB2YWx1ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRGF0ZS4nLFxuICAgIGZhY2U6ICdUaGUgZmFjZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRmFjZSBjbGFzcy4nLFxuICAgIGVsZW1lbnQ6ICdUaGUgZWxlbWVudCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGFuIEhUTUxFbGVtZW50JyxcbiAgICBmYWNlVmFsdWU6ICdUaGUgZmFjZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRmFjZVZhbHVlIGNsYXNzLicsXG4gICAgdGltZXI6ICdUaGUgdGltZXIgcHJvcGVydHkgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIFRpbWVyIGNsYXNzLidcbn07XG4iLCJpbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBGYWNlVmFsdWUgZnJvbSAnLi9GYWNlVmFsdWUnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGVycm9yLCBpc051bGwsIGlzRnVuY3Rpb24sIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gYXR0cmlidXRlcy5kZWxheSB8fCAxMDAwO1xuXG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcbiAgICAgICAgICAgIGNvdW50ZG93bjogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRpb25SYXRlOiBkZWxheSAvIDIsXG4gICAgICAgICAgICB0aW1lcjogVGltZXIubWFrZShkZWxheSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAodGhpcy5kZWZhdWx0QXR0cmlidXRlcygpIHx8IHt9KSwgKGF0dHJpYnV0ZXMgfHwge30pXG4gICAgICAgICkpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSAhaXNOdWxsKHZhbHVlKSA/IHZhbHVlIDogdGhpcy5kZWZhdWx0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHREYXRhVHlwZSgpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZih0aGlzLmRhdGFUeXBlICYmICF2YWxpZGF0ZSh2YWx1ZSwgW3RoaXMuZGF0YVR5cGVdKSkge1xuICAgICAgICAgICAgZXJyb3IoYFRoZSBmYWNlIHZhbHVlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSAke3RoaXMuZGF0YVR5cGUubmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUgP1xuICAgICAgICAgICAgdmFsdWUgOiB0aGlzLmNyZWF0ZUZhY2VWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkJywgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGltZXI7XG4gICAgfVxuXG4gICAgc2V0IHRpbWVyKHRpbWVyKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh0aW1lciwgVGltZXIpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGltZXIgPSB0aW1lcjtcbiAgICB9XG5cbiAgICBpbnRlcnZhbChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgaWYodGhpcy5jb3VudGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgfVxuXG4gICAgc3RhcnQoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKCkgPT4gdGhpcy5pbnRlcnZhbChpbnN0YW5jZSwgZm4pKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgIH1cblxuICAgIHN0b3AoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIHRoaXMudGltZXIuc3RvcChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RvcCcpO1xuICAgIH1cblxuICAgIHJlc2V0KGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnJlc2V0KCgpID0+IHRoaXMuaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGYWNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZhY2VWYWx1ZS5tYWtlKHZhbHVlLCB7XG4gICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+IHRoaXMuZm9ybWF0KHZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICByZW5kZXJlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIG1vdW50ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYodGhpcy5hdXRvU3RhcnQgJiYgdGhpcy50aW1lci5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgKyAxO1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSAtIDE7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbnV0ZUNvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplZChpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IERhdGU7XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwKTtcbiAgICB9XG5cbiAgICBnZXRTZWNvbmRzKGEsIGIpIHtcbiAgICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYik7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGguY2VpbCh0b3RhbFNlY29uZHMgPT09IDYwID8gMCA6IHRvdGFsU2Vjb25kcyAlIDYwKSk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxTZWNvbmRzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgTWludXRlQ291bnRlciBmcm9tICcuL01pbnV0ZUNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyQ291bnRlciBleHRlbmRzIE1pbnV0ZUNvdW50ZXIge1xuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICF0aGlzLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRNaW51dGVzKGEsIGIpICUgNjApO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBIb3VyQ291bnRlciBmcm9tICcuL0hvdXJDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5Q291bnRlciBleHRlbmRzIEhvdXJDb3VudGVyIHtcblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhdGhpcy50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0RGF5cyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0KTtcbiAgICB9XG5cbiAgICBnZXRIb3VycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRIb3VycyhhLCBiKSAlIDI0KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgeyBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbnR5Rm91ckhvdXJDbG9jayBleHRlbmRzIEZhY2Uge1xuXG4gICAgLypcbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cbiAgICAqL1xuXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFtcbiAgICAgICAgICAgIFt2YWx1ZS5nZXRIb3VycygpXSxcbiAgICAgICAgICAgIFt2YWx1ZS5nZXRNaW51dGVzKCldXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goW3ZhbHVlLmdldFNlY29uZHMoKV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICBpbnRlcnZhbChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRlO1xuXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VsdmVIb3VyQ2xvY2sgZXh0ZW5kcyBUd2VudHlGb3VySG91ckNsb2NrIHtcblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd01lcmlkaXVtOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gdmFsdWUuZ2V0SG91cnMoKTtcblxuXHRcdGNvbnN0IGdyb3VwcyA9IFtcblx0XHRcdGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogKGhvdXJzID09PSAwID8gMTIgOiBob3VycyksXG5cdFx0XHR2YWx1ZS5nZXRNaW51dGVzKClcblx0XHRdO1xuXG4gICAgICAgIHRoaXMubWVyaWRpdW0gPSBob3VycyA+IDEyID8gJ3BtJyA6ICdhbSc7XG5cblx0XHRpZih0aGlzLnNob3dTZWNvbmRzKSB7XG5cdFx0XHRncm91cHMucHVzaCh2YWx1ZS5nZXRTZWNvbmRzKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBncm91cHM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRGF5Q291bnRlciBmcm9tICcuL0RheUNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWVrQ291bnRlciBleHRlbmRzIERheUNvdW50ZXIge1xuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICF0aGlzLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldFdlZWtzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0IC8gNyk7XG4gICAgfVxuXG4gICAgZ2V0RGF5cyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXREYXlzKGEsIGIpICUgNyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgV2Vla0NvdW50ZXIgZnJvbSAnLi9XZWVrQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJDb3VudGVyIGV4dGVuZHMgV2Vla0NvdW50ZXIge1xuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICF0aGlzLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldFllYXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldFdlZWtzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRZZWFycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KDAsIHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCAvIDI0IC8gNyAvIDUyKSk7XG4gICAgfVxuXG4gICAgZ2V0V2Vla3MoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0V2Vla3MoYSwgYikgJSA1Mik7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGZyb20pIHtcbiAgICByZXR1cm4gKGlzU3RyaW5nKGZyb20gfHwgJ2VuLXVzJykgPyBsYW5ndWFnZShmcm9tKSA6IGZyb20pLmRpY3Rpb25hcnlbdmFsdWVdIHx8IHZhbHVlO1xufTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hlbihjb25kaXRpb24sIGh0bWwpIHtcblx0cmV0dXJuIGNvbmRpdGlvbiA9PT0gdHJ1ZSA/IGh0bWwgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3YXAoZWwsIGV4aXN0aW5nKSB7XG5cdGlmKGV4aXN0aW5nLnBhcmVudE5vZGUpIHtcblx0XHRleGlzdGluZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbCwgZXhpc3RpbmcpO1xuXHRcdFxuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHJldHVybiBleGlzdGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXMpIHtcblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKSB7XG5cdGlmKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uZmlsdGVyKG5vb3ApLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0aWYoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRlbC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsLCBjaGlsZHJlbiwgYXR0cmlidXRlcykge1xuXHRpZighKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcblx0fVxuXG5cdHNldEF0dHJpYnV0ZXMoZWwsIGlzT2JqZWN0KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogYXR0cmlidXRlcyk7XG5cblx0aWYoIWlzT2JqZWN0KGNoaWxkcmVuKSAmJiAhaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcblx0fVxuXHRlbHNlIHtcblx0XHRhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pXG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbi8qXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBpc0FycmF5KHZhbHVlKSA/XG5cdFx0ZGVlcEZsYXR0ZW4odmFsdWUpLmZpbHRlcihub29wKS5qb2luKCcnKSA6IHZhbHVlO1xuXG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVzW2ldKTtcblx0XHR9XG5cdH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59XG4qL1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL0hlbHBlcnMvVHJhbnNsYXRlJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IHN3YXAsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBwYXJlbnQ6IG51bGxcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnRoZW1lKSB7XG4gICAgICAgICAgICBlcnJvcihgJHt0aGlzLm5hbWV9IGRvZXMgbm90IGhhdmUgYSB0aGVtZSBkZWZpbmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIGxhbmd1YWdlIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuXHRcdGlmKCF0aGlzLnRoZW1lW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgJHt0aGlzLm5hbWV9IGNhbm5vdCBiZSByZW5kZXJlZCBiZWNhdXNlIGl0IGhhcyBubyB0ZW1wbGF0ZS5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWw7XG4gICAgfVxuXG4gICAgc2V0IGVsKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgbnVsbCwgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQ7XG4gICAgfVxuXG4gICAgc2V0IHBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIGdldCB0aGVtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRoZW1lO1xuICAgIH1cblxuICAgIHNldCB0aGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRoZW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IGxhbmd1YWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUoa2V5LCB0aGlzLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICB0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUoa2V5KTtcbiAgICB9XG5cblx0cmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSA9PT0gJ2ZsaXAtY2xvY2snID8gdGhpcy5jbGFzc05hbWUgOiAnZmxpcC1jbG9jay0nICsgdGhpcy5jbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aGVtZVt0aGlzLm5hbWVdKGVsLCB0aGlzKTtcblxuICAgICAgICBpZighdGhpcy5lbCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5lbC5pbm5lckhUTUwgIT09IGVsLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHN3YXAoZWwsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG5cdH1cblxuICAgIG1vdW50KHBhcmVudCwgYmVmb3JlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGlmKCFiZWZvcmUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGJlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpZGVyIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2LCAgfSBmcm9tICcuLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGlzT2JqZWN0LCAgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGl0ZW1zO1xuICAgIH1cblxuICAgIHNldCBpdGVtcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRpdGVtcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RJdGVtKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTGlzdEl0ZW0odmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRpdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgfSwgaXNPYmplY3QoaXRlbXMpID8gaXRlbXMgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihsYWJlbCwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9LCBpc09iamVjdChsYWJlbCkgPyBsYWJlbCA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZsaXAtY2xvY2stZG90IHRvcCd9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgYm90dG9tJ30pXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5mdW5jdGlvbiBjaGlsZChlbCwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWwgPyAoZWwuY2hpbGROb2RlcyA/IGVsLmNoaWxkTm9kZXNbaW5kZXhdIDogZWxbaW5kZXhdKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoYXIoZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5xdWVyeVNlbGVjdG9yKCcuZmxpcC1jbG9jay1saXN0LWl0ZW06Zmlyc3QtY2hpbGQgLnRvcCcpLmlubmVySFRNTCA6IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IHBhcnRzID0gaW5zdGFuY2UudmFsdWUuZGlnaXRzLm1hcCgoZ3JvdXAsIHgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbCA9IGNoaWxkKGluc3RhbmNlLmVsID8gaW5zdGFuY2UuZWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stZ3JvdXAnKSA6IG51bGwsIHgpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RzID0gZ3JvdXAubWFwKCh2YWx1ZSwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gY2hpbGQoZ3JvdXBFbCA/IGdyb3VwRWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stbGlzdCcpIDogbnVsbCwgeSk7XG4gICAgICAgICAgICBjb25zdCBsaXN0VmFsdWUgPSBjaGFyKGxpc3RFbCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVMaXN0KHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgZG9tVmFsdWU6IGxpc3RWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb3VudGRvd246IGluc3RhbmNlLmNvdW50ZG93bixcbiAgICAgICAgICAgICAgICBhbmltYXRpb25SYXRlOiBpbnN0YW5jZS5mYWNlLmFuaW1hdGlvblJhdGUgfHwgaW5zdGFuY2UuZmFjZS5kZWxheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVHcm91cChsaXN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlcyA9IHBhcnRzLm1hcChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBub2Rlcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBpdGVtcyA9IGluc3RhbmNlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaXRlbXMpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBpbnN0YW5jZS50KGluc3RhbmNlLmxhYmVsKTtcbn1cbiIsImltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RJdGVtJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGJlZm9yZVZhbHVlID0gaW5zdGFuY2UuZG9tVmFsdWUgfHwgKFxuICAgICAgICAhaW5zdGFuY2UuY291bnRkb3duID8gcHJldihpbnN0YW5jZS52YWx1ZSkgOiBuZXh0KGluc3RhbmNlLnZhbHVlKVxuICAgICk7XG5cbiAgICBpZiggaW5zdGFuY2UuZG9tVmFsdWUgJiYgaW5zdGFuY2UuZG9tVmFsdWUgIT09IGluc3RhbmNlLnZhbHVlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcbiAgICBlbC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcblxuICAgIGluc3RhbmNlLml0ZW1zID0gW1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShpbnN0YW5jZS52YWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShiZWZvcmVWYWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KVxuICAgIF07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5yZW5kZXIoKSkpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gaW5zdGFuY2UuYWN0aXZlID09PSB0cnVlID8gJ2FjdGl2ZScgOiAoXG4gICAgICAgIGluc3RhbmNlLmFjdGl2ZSA9PT0gZmFsc2UgPyAnYmVmb3JlJyA6IG51bGxcbiAgICApO1xuXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ3RvcCd9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGluc3RhbmNlLnZhbHVlLCB7Y2xhc3M6ICdib3R0b20nfSlcbiAgICAgICAgXSwge2NsYXNzOiAnZmxpcC1jbG9jay1saXN0LWl0ZW0taW5uZXInfSlcbiAgICBdKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2RheXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIH1cbiAgICBcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayhlbCwgaW5zdGFuY2UpO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TWVyaWRpdW0gJiYgaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGluc3RhbmNlLmNyZWF0ZUxhYmVsKGluc3RhbmNlLmZhY2UubWVyaWRpdW0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5jaGlsZE5vZGVzW2VsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGFiZWwubW91bnQocGFyZW50KS5jbGFzc0xpc3QuYWRkKCdmbGlwLWNsb2NrLW1lcmlkaXVtJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s3XSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzldKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3llYXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzhdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMTBdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgRmxpcENsb2NrIGZyb20gJy4vRmxpcENsb2NrJztcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgKiBhcyBmYWNlcyBmcm9tICcuL0ZhY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgRmxpcENsb2NrLFxuICAgIEdyb3VwLFxuICAgIExhYmVsLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgZmFjZXNcbn07XG4iLCIvKipcbiAqIEZsaXBDbG9jayBBcmFiaWMgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCBiZSB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQXJhYmljIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn2LPZhtmI2KfYqicsXG4gICAgJ21vbnRocycgIDogJ9i02YfZiNixJyxcbiAgICAnZGF5cycgICAgOiAn2KPZitin2YUnLFxuICAgICdob3VycycgICA6ICfYs9in2LnYp9iqJyxcbiAgICAnbWludXRlcycgOiAn2K/Zgtin2KbZgicsXG4gICAgJ3NlY29uZHMnIDogJ9ir2YjYp9mG2YonXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnYXInLCAnYXItYXInLCAnYXJhYmljJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDemVjaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDemVjaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ1Jva3knLFxuICAgICdtb250aHMnICA6ICdNxJtzw61jZScsXG4gICAgJ2RheXMnICAgIDogJ0RueScsXG4gICAgJ2hvdXJzJyAgIDogJ0hvZGlueScsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0eScsXG4gICAgJ3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnY3MnLCAnY3MtY3onLCAnY3onLCAnY3otY3MnLCAnY3plY2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIERhbmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBEYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2UnLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBHZXJtYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgR2VybWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0phaHJlJyxcblx0J21vbnRocycgIDogJ01vbmF0ZScsXG5cdCdkYXlzJyAgICA6ICdUYWdlJyxcblx0J2hvdXJzJyAgIDogJ1N0dW5kZW4nLFxuXHQnbWludXRlcycgOiAnTWludXRlbicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlbidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkZScsICdkZS1kZScsICdnZXJtYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEVuZ2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRW5nbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZZWFycycsXG5cdCdtb250aHMnICA6ICdNb250aHMnLFxuXHQnZGF5cycgICAgOiAnRGF5cycsXG5cdCdob3VycycgICA6ICdIb3VycycsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVzJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZHMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZW4nLCAnZW4tdXMnLCAnZW5nbGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3BhbmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTcGFuaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0HDsW9zJyxcblx0J21vbnRocycgIDogJ01lc2VzJyxcblx0J2RheXMnICAgIDogJ0TDrWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZXMnLCAnZXMtZXMnLCAnc3BhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUGVyc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9iz2KfZhCcsXG5cdCdtb250aHMnICA6ICfZhdin2YcnLFxuXHQnZGF5cycgICAgOiAn2LHZiNiyJyxcblx0J2hvdXJzJyAgIDogJ9iz2KfYudiqJyxcblx0J21pbnV0ZXMnIDogJ9iv2YLbjNmC2YcnLFxuXHQnc2Vjb25kcycgOiAn2KvYp9mG24zZhydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmYScsICdmYS1pcicsICdwZXJzaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBGaW5uaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEZpbm5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnVnVvdHRhJyxcblx0J21vbnRocycgIDogJ0t1dWthdXR0YScsXG5cdCdkYXlzJyAgICA6ICdQw6RpdsOkw6QnLFxuXHQnaG91cnMnICAgOiAnVHVudGlhJyxcblx0J21pbnV0ZXMnIDogJ01pbnV1dHRpYScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bnRpYSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmaScsICdmaS1maScsICdmaW5uaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDYW5hZGlhbiBGcmVuY2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnQW5zJyxcbiAgICAnbW9udGhzJyAgOiAnTW9pcycsXG4gICAgJ2RheXMnICAgIDogJ0pvdXJzJyxcbiAgICAnaG91cnMnICAgOiAnSGV1cmVzJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlcycsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZyJywgJ2ZyLWNhJywgJ2ZyZW5jaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSGVicmV3IExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfXqdeg15nXnScsXG5cdCdtb250aHMnICA6ICfXl9eV15PXqScsXG5cdCdkYXlzJyAgICA6ICfXmdee15nXnScsXG5cdCdob3VycycgICA6ICfXqdei15XXqicsXG5cdCdtaW51dGVzJyA6ICfXk9en15XXqicsXG5cdCdzZWNvbmRzJyA6ICfXqdeg15nXldeqJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2lsJywgJ2hlLWlsJywgJ2hlYnJldyddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSHVuZ2FyaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEh1bmdhcmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDiXYnLFxuICAgICdtb250aHMnICA6ICdIw7NuYXAnLFxuICAgICdkYXlzJyAgICA6ICdOYXAnLFxuICAgICdob3VycycgICA6ICfDk3JhJyxcbiAgICAnbWludXRlcycgOiAnUGVyYycsXG4gICAgJ3NlY29uZHMnIDogJ03DoXNvZHBlcmMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaHUnLCAnaHUtaHUnLCAnaHVuZ2FyaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBJdGFsaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEl0YWxpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5uaScsXG5cdCdtb250aHMnICA6ICdNZXNpJyxcblx0J2RheXMnICAgIDogJ0dpb3JuaScsXG5cdCdob3VycycgICA6ICdPcmUnLFxuXHQnbWludXRlcycgOiAnTWludXRpJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZGknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBKYXBhbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBKYXBhbmVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydqcCcsICdqYS1qcCcsICdqYXBhbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgS29yZWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEtvcmVhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfrhYQnLFxuXHQnbW9udGhzJyAgOiAn7JuUJyxcblx0J2RheXMnICAgIDogJ+ydvCcsXG5cdCdob3VycycgICA6ICfsi5wnLFxuXHQnbWludXRlcycgOiAn67aEJyxcblx0J3NlY29uZHMnIDogJ+y0iCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydrbycsICdrby1rcicsICdrb3JlYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIExhdHZpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTGF0dmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0dhZGknLFxuICAgICdtb250aHMnICA6ICdNxJNuZcWhaScsXG4gICAgJ2RheXMnICAgIDogJ0RpZW5hcycsXG4gICAgJ2hvdXJzJyAgIDogJ1N0dW5kYXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW7Fq3RlcycsXG4gICAgJ3NlY29uZHMnIDogJ1Nla3VuZGVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2x2JywgJ2x2LWx2JywgJ2xhdHZpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIER1dGNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIER1dGNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnSmFyZW4nLFxuICAgICdtb250aHMnICA6ICdNYWFuZGVuJyxcbiAgICAnZGF5cycgICAgOiAnRGFnZW4nLFxuICAgICdob3VycycgICA6ICdVcmVuJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlbicsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25sJywgJ25sLWJlJywgJ2R1dGNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBOb3J3ZWdpYW4tQm9rbcOlbCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBOb3J3ZWdpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2VyJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25vJywgJ25iJywgJ25vLW5iJywgJ25vcndlZ2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUG9saXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdsYXQnLFxuXHQnbW9udGhzJyAgOiAnbWllc2nEmWN5Jyxcblx0J2RheXMnICAgIDogJ2RuaScsXG5cdCdob3VycycgICA6ICdnb2R6aW4nLFxuXHQnbWludXRlcycgOiAnbWludXQnLFxuXHQnc2Vjb25kcycgOiAnc2VrdW5kJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3BsJywgJ3BsLXBsJywgJ3BvbGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUG9ydHVndWVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQb3J0dWd1ZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0Fub3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRGlhcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3B0JywgJ3B0LWJyJywgJ3BvcnR1Z3Vlc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFN3ZWRpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3dlZGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycyc6ICdBbmknLFxuXHQnbW9udGhzJzogJ0x1bmknLFxuXHQnZGF5cyc6ICdaaWxlJyxcblx0J2hvdXJzJzogJ09yZScsXG5cdCdtaW51dGVzJzogJ01pbnV0ZScsXG5cdCdzZWNvbmRzJzogJ3NTZWN1bmRlJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3JvJywgJ3JvLXJvJywgJ3JvbWFuYSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSdXNzaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNsb3ZhayBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzdicsICdzdi1zZScsICdzd2VkaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUaGFpIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRoYWkgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHVya2lzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1nEsWwnLFxuXHQnbW9udGhzJyAgOiAnQXknLFxuXHQnZGF5cycgICAgOiAnR8O8bicsXG5cdCdob3VycycgICA6ICdTYWF0Jyxcblx0J21pbnV0ZXMnIDogJ0Rha2lrYScsXG5cdCdzZWNvbmRzJyA6ICdTYW5peWUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9GA0L7QutC4JyxcbiAgICAnbW9udGhzJyAgOiAn0LzRltGB0Y/RhtGWJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdGWJyxcbiAgICAnaG91cnMnICAgOiAn0LPQvtC00LjQvdC4JyxcbiAgICAnbWludXRlcycgOiAn0YXQstC40LvQuNC90LgnLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LTQuCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd1YScsICd1YS11YScsICd1a3JhaW5lJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUcmFkaXRpb25hbCBWaWV0bmFtZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gVmlldG5hbWVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdOxINtJyxcblx0J21vbnRocycgIDogJ1Row6FuZycsXG5cdCdkYXlzJyAgICA6ICdOZ8OgeScsXG5cdCdob3VycycgICA6ICdHaeG7nScsXG5cdCdtaW51dGVzJyA6ICdQaMO6dCcsXG5cdCdzZWNvbmRzJyA6ICdHacOieSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd2bicsICd2bi12bicsICd2aWV0bmFtZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENoaW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IHsgT3JpZ2luYWwgfSBmcm9tICcuLi9UaGVtZXMnO1xuaW1wb3J0IHsgRW5nbGlzaCB9IGZyb20gJy4uL0xhbmd1YWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiBDb3VudGVyLFxuICAgIHRoZW1lOiBPcmlnaW5hbCxcbiAgICBsYW5ndWFnZTogRW5nbGlzaFxufTtcbiIsImltcG9ydCAqIGFzIEZhY2VzIGZyb20gJy4uL0ZhY2VzJztcbmltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9Db21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4uL0NvbXBvbmVudHMvR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL0NvbXBvbmVudHMvTGFiZWwnO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuLi9Db21wb25lbnRzL0RpdmlkZXInO1xuaW1wb3J0IERlZmF1bHRWYWx1ZXMgZnJvbSAnLi4vQ29uZmlnL0RlZmF1bHRWYWx1ZXMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBpc09iamVjdCwgaXNGdW5jdGlvbiwgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsaXBDbG9jayBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKGVsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzT2JqZWN0KHZhbHVlKSAmJiAhYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFjZSA9IGF0dHJpYnV0ZXMuZmFjZSB8fCBEZWZhdWx0VmFsdWVzLmZhY2U7XG5cbiAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuZmFjZTtcblxuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIG9yaWdpbmFsVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgdGhlbWU6IERlZmF1bHRWYWx1ZXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogRGVmYXVsdFZhbHVlcy5sYW5ndWFnZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICB0aGlzLmZhY2UgPSBmYWNlO1xuICAgICAgICB0aGlzLm1vdW50KGVsKTtcbiAgICB9XG5cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgc2V0IGZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ3N0cmluZycsICdmdW5jdGlvbiddKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNTdHJpbmcodmFsdWUpICYmIEZhY2VzW3ZhbHVlXSkge1xuICAgICAgICAgICAgdGhpcy4kZmFjZSA9IG5ldyBGYWNlc1t2YWx1ZV0odGhpcy5vcmlnaW5hbFZhbHVlLCB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRmYWNlID0gbmV3IHZhbHVlKHRoaXMub3JpZ2luYWxWYWx1ZSwgdGhpcy5nZXRQdWJsaWNBdHRyaWJ1dGVzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRmFjZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmZhY2UuaW5pdGlhbGl6ZWQodGhpcyk7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgc3RvcEF0KCkge1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbih0aGlzLiRzdG9wQXQpID8gdGhpcy4kc3RvcEF0KHRoaXMpIDogdGhpcy4kc3RvcEF0O1xuICAgIH1cblxuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNlLnRpbWVyO1xuICAgIH1cblxuICAgIHNldCB0aW1lcih2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UudGltZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS5yZXNldCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGJpbmRGYWNlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMudXBkYXRlZCgpO1xuXG4gICAgICAgIHRoaXMuJGZhY2Uub2ZmKCd1cGRhdGVkJywgZm4pLm9uKCd1cGRhdGVkJywgZm4pO1xuXG4gICAgICAgIFsndXBkYXRlZCcsICdzdGFydCcsICdzdG9wJywgJ3Jlc2V0JywgJ2ludGVydmFsJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMuZW1pdChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjZS5vZmYoZXZlbnQsIGZuKS5vbihldmVudCwgZm4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmKCB0aGlzLnN0b3BBdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0aGlzLnN0b3BBdCA9PT0gdGhpcy5mYWNlLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdW50KGVsKSB7XG4gICAgICAgIHN1cGVyLm1vdW50KGVsKTtcblxuICAgICAgICB0aGlzLmZhY2UubW91bnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHBhcmVudCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBmYWNlIGhhcyBhIHJlbmRlciBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgYSBmYWNlIHRvIGNvbXBsZXRlbHkgcmUtcmVuZGVyIG9yIGFkZCB0byB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGZhY2Ugc3BlY2lmaWMgaW50ZXJmYWNlcyBmb3IgYSB0aGVtZS5cbiAgICAgICAgaWYodGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKHRoaXMuZWwsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFzcyB0aGUgY2xvY2sgaW5zdGFuY2UgdG8gdGhlIHJlbmRlcmVkKCkgZnVuY3Rpb24gb24gdGhlIGZhY2UuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGdsb2JhbCBtb2RpZmljYXRpb25zIHRvIHRoZSByZW5kZXJlZCB0ZW1wbGF0ZXMgbm90XG4gICAgICAgIC8vIHRoZW1lIHNwZWNpZmljLlxuICAgICAgICB0aGlzLmZhY2UucmVuZGVyZWQodGhpcyk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSByZW5kZXJlZCBlbGVtZW50LlxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5zdGFydCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLmZhY2Uuc3RvcCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlRGl2aWRlcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBEaXZpZGVyLm1ha2UoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMaXN0Lm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGFiZWwodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExhYmVsLm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlR3JvdXAoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIEdyb3VwLm1ha2UoaXRlbXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIHZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ2Z1bmN0aW9uJ10pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdFZhbHVlcy5mYWNlID0gdmFsdWU7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRUaGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRoZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMudGhlbWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJjYWxsYmFjayIsImZuIiwiaXNGdW5jdGlvbiIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwibm9vcCIsInZhbHVlIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJjaGFpbiIsImJlZm9yZSIsImFmdGVyIiwiY29uY2F0TWFwIiwieCIsIm1hcCIsInJlZHVjZSIsInkiLCJjb25jYXQiLCJmbGF0dGVuIiwiZGVlcEZsYXR0ZW4iLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJkaWdpdHMiLCJpc0NsYXNzIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsInR5cGUiLCJpc051bWJlciIsImlzTmFOIiwia2ViYWJDYXNlIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50cyIsImtleSIsImFyZ3MiLCJmb3JFYWNoIiwiZXZlbnQiLCJwdXNoIiwiZmlsdGVyIiwib2ZmIiwib24iLCJoYXNPd25Qcm9wZXJ0eSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJrZXlzIiwiZ2V0QXR0cmlidXRlcyIsIm1hdGNoIiwib2JqIiwic2V0QXR0cmlidXRlcyIsInZhbHVlcyIsImkiLCJjb25zdHJ1Y3RvciIsIiRldmVudHMiLCJUaW1lciIsImludGVydmFsIiwiY291bnQiLCJoYW5kbGUiLCJzdGFydGVkIiwicnVubmluZyIsInN0b3AiLCJzdGFydCIsImVtaXQiLCJEYXRlIiwibGFzdExvb3AiLCJub3ciLCJsb29wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwicmFuZ2VzIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsIm5leHQiLCJjb252ZXJ0ZWQiLCJjaGFyQ29kZSIsInJhbmdlIiwiam9pbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJGYWNlVmFsdWUiLCIkZGlnaXRzIiwiTWF0aCIsIiR2YWx1ZSIsInZhbGlkYXRlIiwic3VjY2VzcyIsImFyZyIsIml0ZW1zIiwidGhlbWUiLCJsYW5ndWFnZSIsImRhdGUiLCJmYWNlIiwiZWxlbWVudCIsImZhY2VWYWx1ZSIsInRpbWVyIiwiRmFjZSIsImRlbGF5IiwiYXV0b1N0YXJ0IiwiY291bnRkb3duIiwiYW5pbWF0aW9uUmF0ZSIsIm1ha2UiLCJkZWZhdWx0QXR0cmlidXRlcyIsImRlZmF1bHRWYWx1ZSIsImluc3RhbmNlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwicmVzZXQiLCJpc1N0b3BwZWQiLCJkZWZhdWx0RGF0YVR5cGUiLCJkYXRhVHlwZSIsImNyZWF0ZUZhY2VWYWx1ZSIsIiR0aW1lciIsIkNvbnNvbGVNZXNzYWdlcyIsIkNvdW50ZXIiLCJNaW51dGVDb3VudGVyIiwic2hvd1NlY29uZHMiLCJzaG93TGFiZWxzIiwib3JpZ2luYWxWYWx1ZSIsImEiLCJiIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmbG9vciIsImdldFRvdGFsU2Vjb25kcyIsInRvdGFsU2Vjb25kcyIsImFicyIsImNlaWwiLCJyb3VuZCIsImdldFRpbWUiLCJIb3VyQ291bnRlciIsImRhdGEiLCJnZXRIb3VycyIsIkRheUNvdW50ZXIiLCJnZXREYXlzIiwiVHdlbnR5Rm91ckhvdXJDbG9jayIsImdyb3VwcyIsIlR3ZWx2ZUhvdXJDbG9jayIsInNob3dNZXJpZGl1bSIsImhvdXJzIiwibWVyaWRpdW0iLCJXZWVrQ291bnRlciIsImdldFdlZWtzIiwiWWVhckNvdW50ZXIiLCJnZXRZZWFycyIsImZyb20iLCJkaWN0aW9uYXJ5Iiwic3dhcCIsImVsIiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwiSFRNTEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImlubmVySFRNTCIsIkRvbUNvbXBvbmVudCIsInBhcmVudCIsInRyYW5zbGF0ZSIsImNsYXNzIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiaW5zZXJ0QmVmb3JlIiwiJGVsIiwiJHBhcmVudCIsIiR0aGVtZSIsIiRsYW5ndWFnZSIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiaW5kZXgiLCJjaGlsZE5vZGVzIiwicXVlcnlTZWxlY3RvciIsInBhcnRzIiwiZ3JvdXAiLCJncm91cEVsIiwicXVlcnlTZWxlY3RvckFsbCIsImxpc3RzIiwibGlzdEVsIiwibGlzdFZhbHVlIiwiY3JlYXRlTGlzdCIsImRvbVZhbHVlIiwiY3JlYXRlR3JvdXAiLCJub2RlcyIsInQiLCJiZWZvcmVWYWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImNyZWF0ZUxpc3RJdGVtIiwiYWN0aXZlIiwiY3JlYXRlRGl2aWRlciIsIm1vdW50IiwiY3JlYXRlTGFiZWwiLCJGbGlwQ2xvY2siLCJmYWNlcyIsImFsaWFzZXMiLCJPcmlnaW5hbCIsIkVuZ2xpc2giLCJEZWZhdWx0VmFsdWVzIiwidXBkYXRlZCIsIiRmYWNlIiwic3RvcEF0IiwidW5kZWZpbmVkIiwibW91bnRlZCIsInJlbmRlcmVkIiwiRmFjZXMiLCJnZXRQdWJsaWNBdHRyaWJ1dGVzIiwiYmluZEZhY2VFdmVudHMiLCJpbml0aWFsaXplZCIsIiRzdG9wQXQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7SUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVVELE9BQVYsQ0FBTjtJQUNIO0FBRUQsSUFBTyxTQUFTRSxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtJQUN6QixNQUFHQyxVQUFVLENBQUNELEVBQUQsQ0FBYixFQUFtQjtJQUNmLFdBQU9BLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTLElBQVQsRUFBZSxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QkYsS0FBekIsQ0FBK0IsQ0FBL0IsQ0FBZixDQUFQO0lBQ0g7SUFDSjtBQUVELElBQU8sU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0lBQ3hCLFNBQU8sQ0FBQ0MsV0FBVyxDQUFDRCxLQUFELENBQVosSUFBdUIsQ0FBQ0UsTUFBTSxDQUFDRixLQUFELENBQXJDO0lBQ0g7QUFFRCxJQUFPLFNBQVNHLEtBQVQsQ0FBZUMsTUFBZixFQUF1QkMsS0FBdkIsRUFBOEI7SUFDakMsU0FBTztJQUFBLFdBQU1BLEtBQUssQ0FBQ0QsTUFBTSxFQUFQLENBQVg7SUFBQSxHQUFQO0lBQ0g7QUFFRCxJQUFPLFNBQVNFLFNBQVQsQ0FBbUJiLEVBQW5CLEVBQXVCO0lBQzFCLFNBQU8sVUFBQWMsQ0FBQyxFQUFJO0lBQ1IsV0FBT0EsQ0FBQyxDQUFDQyxHQUFGLENBQU1mLEVBQU4sRUFBVWdCLE1BQVYsQ0FBaUIsVUFBQ0YsQ0FBRCxFQUFJRyxDQUFKO0lBQUEsYUFBVUgsQ0FB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
