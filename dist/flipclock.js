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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0RpZ2l0aXplLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvSGVscGVycy9WYWxpZGF0ZS5qcyIsIi4uL3NyYy9qcy9Db25maWcvQ29uc29sZU1lc3NhZ2VzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZS5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9ZZWFyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RyYW5zbGF0ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvYXItYXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2NzLWN6LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kYS1kay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGUtZGUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VuLXVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lcy1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmEtaXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZpLWZpLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mci1jYS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaGUtaWwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2h1LWh1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9pdC1pdC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvamEtanAuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2tvLWtyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9sdi1sdi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbmwtYmUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25vLW5iLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wbC1wbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcHQtYnIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLWNuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC10dy5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKGZuKSB7XG4gICAgaWYoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgxKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhaW4oYmVmb3JlLCBhZnRlcikge1xuICAgIHJldHVybiAoKSA9PiBhZnRlcihiZWZvcmUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRNYXAoZm4pIHtcbiAgICByZXR1cm4geCA9PiB7XG4gICAgICAgIHJldHVybiB4Lm1hcChmbikucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiB4KSh4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiBBcnJheS5pc0FycmF5KHgpID8gZGVlcEZsYXR0ZW4gKHgpIDogeCkoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1Y2ZpcnN0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoZGlnaXRzKSB7XG4gICAgcmV0dXJuIGRlZXBGbGF0dGVuKGRpZ2l0cykubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3ModmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEhdmFsdWUubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCwga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZXZlbnRzO1xuICAgIH1cblxuICAgIHNldCBldmVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZW1pdChrZXksIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oa2V5LCBmbiwgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZShrZXksIGZuKSB7XG4gICAgICAgIGZuID0gY2hhaW4oZm4sICgpID0+IHRoaXMub2ZmKGtleSwgZm4pKTtcblxuICAgICAgICB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSA/IHRoaXNba2V5XSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBoYW5kbGU6IG51bGwsXG4gICAgICAgICAgICBzdGFydGVkOiBudWxsLFxuICAgICAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnZhbDogaW50ZXJ2YWxcbiAgICAgICAgfSwgaXNPYmplY3QoaW50ZXJ2YWwpID8gaW50ZXJ2YWwgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZWxhcHNlZCB0aGUgdGltZSBhcyBhbiBpbnRlcmdlclxuICAgICAqXG4gICAgICogQHJldHVybiBJbnRlZ2VyXG4gICAgICovXG4gICAgZ2V0IGVsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ICogdGhpcy5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlO1xuICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy5sYXN0TG9vcCA+PSB0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TG9vcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSB0aW1lci4gVGhpcyBtZXRob2QgaXMgY2hhaW5hYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICBGdW5jdGlvbiBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtaW5pbXVtRGlnaXRzOiAwLFxuICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQobnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFByZXBlbmRaZXJvID0gb3B0aW9ucy5wcmVwZW5kTGVhZGluZ1plcm8gJiZcbiAgICAgICAgICAgIG51bWJlci50b1N0cmluZygpLnNwbGl0KCcnKS5sZW5ndGggPT09IDE7XG5cbiAgICAgICAgcmV0dXJuIChzaG91bGRQcmVwZW5kWmVybyA/ICcwJyA6ICcnKS5jb25jYXQobnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWdpdHMoYXJyLCBtaW4pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGVlcEZsYXR0ZW4oYXJyKS5sZW5ndGg7XG5cbiAgICAgICAgaWYobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWluIC0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbMF0udW5zaGlmdCgnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlnaXRzKGZsYXR0ZW4oW3ZhbHVlXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGRlZXBGbGF0dGVuKFtudW1iZXJdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwZW5kKG51bWJlcikuc3BsaXQoJycpO1xuICAgICAgICB9KSk7XG4gICAgfSksIG9wdGlvbnMubWluaW11bURpZ2l0cyB8fCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlcyA9IFt7XG4gICAgLy8gMC05XG4gICAgbWluOiA0OCxcbiAgICBtYXg6IDU3XG59LHtcbiAgICAvLyBhLXpcbiAgICBtaW46IDY1LFxuICAgIG1heDogOTBcbn0se1xuICAgIC8vIEEtWlxuICAgIG1pbjogOTcsXG4gICAgbWF4OiAxMjJcbn1dO1xuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiByYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKHJhbmdlc1tpXS5taW4gPD0gY29kZSAmJiByYW5nZXNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlIDwgcmFuZ2UubWF4ID8gY29kZSArIDEgOiByYW5nZS5taW5cbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFyQ29kZShjaGFyLCBmbikge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGNoYXIpO1xuICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZm4ocmFuZ2UsIGNvZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXYodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlID4gcmFuZ2UubWluID8gY29kZSAtIDEgOiByYW5nZS5tYXhcbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgZGlnaXRpemUgZnJvbSAnLi4vSGVscGVycy9EaWdpdGl6ZSc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBsZW5ndGgsIGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZVZhbHVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IDBcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgZGlnaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1pbmltdW1EaWdpdHMgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaWdpdHMsIGxlbmd0aCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGlnaXRzID0gZGlnaXRpemUodGhpcy5mb3JtYXQodmFsdWUpLCB7XG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiB0aGlzLm1pbmltdW1EaWdpdHMsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRoaXMucHJlcGVuZExlYWRpbmdaZXJvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzTmFOKCkge1xuICAgICAgICByZXR1cm4gaXNOYU4odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBpc051bWJlcigpXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBpc051bGwgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNDbGFzcyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgLi4uYXJncykge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBmbGF0dGVuKGFyZ3MpLmZvckVhY2goYXJnID0+IHtcbiAgICAgICAgaWYoIChpc051bGwodmFsdWUpICYmIGlzTnVsbChhcmcpKSB8fFxuICAgICAgICAgICAgKGlzT2JqZWN0KGFyZykgJiYgKHZhbHVlIGluc3RhbmNlb2YgYXJnKSkgfHxcbiAgICAgICAgICAgIChpc0Z1bmN0aW9uKGFyZykgJiYgIWlzQ2xhc3MoYXJnKSAmJiBhcmcodmFsdWUpID09PSB0cnVlKSB8fFxuICAgICAgICAgICAgKGlzU3RyaW5nKGFyZykgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gYXJnKSkpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpdGVtczogJ1RoZSBpdGVtcyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicsXG4gICAgdGhlbWU6ICdUaGUgdGhlbWUgcHJvcGVydHkgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBsYW5ndWFnZTogJ1RoZSBsYW5ndWFnZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGRhdGU6ICdUaGUgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERhdGUuJyxcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2UgY2xhc3MuJyxcbiAgICBlbGVtZW50OiAnVGhlIGVsZW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhbiBIVE1MRWxlbWVudCcsXG4gICAgZmFjZVZhbHVlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2VWYWx1ZSBjbGFzcy4nLFxuICAgIHRpbWVyOiAnVGhlIHRpbWVyIHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBUaW1lciBjbGFzcy4nXG59O1xuIiwiaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBlcnJvciwgaXNOdWxsLCBpc0Z1bmN0aW9uLCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBkZWxheSA9IGF0dHJpYnV0ZXMuZGVsYXkgfHwgMTAwMDtcblxuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICBjb3VudGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uUmF0ZTogZGVsYXkgLyAyLFxuICAgICAgICAgICAgdGltZXI6IFRpbWVyLm1ha2UoZGVsYXkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgKHRoaXMuZGVmYXVsdEF0dHJpYnV0ZXMoKSB8fCB7fSksIChhdHRyaWJ1dGVzIHx8IHt9KVxuICAgICAgICApKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gIWlzTnVsbCh2YWx1ZSkgPyB2YWx1ZSA6IHRoaXMuZGVmYXVsdFZhbHVlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGF0YVR5cGUoKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYodGhpcy5kYXRhVHlwZSAmJiAhdmFsaWRhdGUodmFsdWUsIFt0aGlzLmRhdGFUeXBlXSkpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgZmFjZSB2YWx1ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgJHt0aGlzLmRhdGFUeXBlLm5hbWV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlID9cbiAgICAgICAgICAgIHZhbHVlIDogdGhpcy5jcmVhdGVGYWNlVmFsdWUodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlZCcsIHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGdldCB0aW1lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRpbWVyO1xuICAgIH1cblxuICAgIHNldCB0aW1lcih0aW1lcikge1xuICAgICAgICBpZighdmFsaWRhdGUodGltZXIsIFRpbWVyKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRpbWVyID0gdGltZXI7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuY291bnRkb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxuICAgIHN0YXJ0KGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHRoaXMuaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICB9XG5cbiAgICBzdG9wKGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICB9XG5cbiAgICByZXNldChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgoKSA9PiB0aGlzLmludGVydmFsKGluc3RhbmNlLCBmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3Jlc2V0Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmFjZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGYWNlVmFsdWUubWFrZSh2YWx1ZSwge1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB0aGlzLmZvcm1hdCh2YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVuZGVyZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBtb3VudGVkKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b1N0YXJ0ICYmIHRoaXMudGltZXIuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnZhbHVlICsgMTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgLSAxO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW51dGVDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRlO1xuXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgfVxuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICF0aGlzLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBnZXRNaW51dGVzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCk7XG4gICAgfVxuXG4gICAgZ2V0U2Vjb25kcyhhLCBiKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhNYXRoLmNlaWwodG90YWxTZWNvbmRzID09PSA2MCA/IDAgOiB0b3RhbFNlY29uZHMgJSA2MCkpO1xuICAgIH1cblxuICAgIGdldFRvdGFsU2Vjb25kcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IE1pbnV0ZUNvdW50ZXIgZnJvbSAnLi9NaW51dGVDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ckNvdW50ZXIgZXh0ZW5kcyBNaW51dGVDb3VudGVyIHtcblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhdGhpcy50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0TWludXRlcyhhLCBiKSAlIDYwKTtcbiAgICB9XG5cbiAgICBnZXRIb3VycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgSG91ckNvdW50ZXIgZnJvbSAnLi9Ib3VyQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheUNvdW50ZXIgZXh0ZW5kcyBIb3VyQ291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldERheXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCk7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0SG91cnMoYSwgYikgJSAyNCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZW50eUZvdXJIb3VyQ2xvY2sgZXh0ZW5kcyBGYWNlIHtcblxuICAgIC8qXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9XG4gICAgKi9cblxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBncm91cHMgPSBbXG4gICAgICAgICAgICBbdmFsdWUuZ2V0SG91cnMoKV0sXG4gICAgICAgICAgICBbdmFsdWUuZ2V0TWludXRlcygpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKFt2YWx1ZS5nZXRTZWNvbmRzKCldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgRGF0ZTtcblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbHZlSG91ckNsb2NrIGV4dGVuZHMgVHdlbnR5Rm91ckhvdXJDbG9jayB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd0xhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dNZXJpZGl1bTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBob3VycyA9IHZhbHVlLmdldEhvdXJzKCk7XG5cblx0XHRjb25zdCBncm91cHMgPSBbXG5cdFx0XHRob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IChob3VycyA9PT0gMCA/IDEyIDogaG91cnMpLFxuXHRcdFx0dmFsdWUuZ2V0TWludXRlcygpXG5cdFx0XTtcblxuICAgICAgICB0aGlzLm1lcmlkaXVtID0gaG91cnMgPiAxMiA/ICdwbScgOiAnYW0nO1xuXG5cdFx0aWYodGhpcy5zaG93U2Vjb25kcykge1xuXHRcdFx0Z3JvdXBzLnB1c2godmFsdWUuZ2V0U2Vjb25kcygpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERheUNvdW50ZXIgZnJvbSAnLi9EYXlDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vla0NvdW50ZXIgZXh0ZW5kcyBEYXlDb3VudGVyIHtcblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhdGhpcy50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0V2Vla3MoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCAvIDcpO1xuICAgIH1cblxuICAgIGdldERheXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0RGF5cyhhLCBiKSAlIDcpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFdlZWtDb3VudGVyIGZyb20gJy4vV2Vla0NvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyQ291bnRlciBleHRlbmRzIFdlZWtDb3VudGVyIHtcblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhdGhpcy50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRZZWFycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0WWVhcnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heCgwLCB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCAvIDcgLyA1MikpO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldFdlZWtzKGEsIGIpICUgNTIpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBmcm9tKSB7XG4gICAgcmV0dXJuIChpc1N0cmluZyhmcm9tIHx8ICdlbi11cycpID8gbGFuZ3VhZ2UoZnJvbSkgOiBmcm9tKS5kaWN0aW9uYXJ5W3ZhbHVlXSB8fCB2YWx1ZTtcbn07XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW4oY29uZGl0aW9uLCBodG1sKSB7XG5cdHJldHVybiBjb25kaXRpb24gPT09IHRydWUgPyBodG1sIDogJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2FwKGVsLCBleGlzdGluZykge1xuXHRpZihleGlzdGluZy5wYXJlbnROb2RlKSB7XG5cdFx0ZXhpc3RpbmcucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWwsIGV4aXN0aW5nKTtcblx0XHRcblx0XHRyZXR1cm4gZWw7XG5cdH1cblxuXHRyZXR1cm4gZXhpc3Rpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbikge1xuXHRpZihpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLmZpbHRlcihub29wKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGlmKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbCwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMpIHtcblx0aWYoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG5cdH1cblxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBpc09iamVjdChjaGlsZHJlbikgPyBjaGlsZHJlbiA6IGF0dHJpYnV0ZXMpO1xuXG5cdGlmKCFpc09iamVjdChjaGlsZHJlbikgJiYgIWlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0ZWwuaW5uZXJIVE1MID0gY2hpbGRyZW47XG5cdH1cblx0ZWxzZSB7XG5cdFx0YXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vKlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaXNBcnJheSh2YWx1ZSkgP1xuXHRcdGRlZXBGbGF0dGVuKHZhbHVlKS5maWx0ZXIobm9vcCkuam9pbignJykgOiB2YWx1ZTtcblxuXHRpZihpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuXHRcdGZvcihjb25zdCBpIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufVxuKi9cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi9IZWxwZXJzL1RyYW5zbGF0ZSc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBzd2FwLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcGFyZW50OiBudWxsXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy50aGVtZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgdGhlbWUgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBlcnJvcihgJHt0aGlzLm5hbWV9IGRvZXMgbm90IGhhdmUgYSBsYW5ndWFnZSBkZWZpbmVkLmApO1xuICAgICAgICB9XG5cblx0XHRpZighdGhpcy50aGVtZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5uYW1lfSBjYW5ub3QgYmUgcmVuZGVyZWQgYmVjYXVzZSBpdCBoYXMgbm8gdGVtcGxhdGUuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsO1xuICAgIH1cblxuICAgIHNldCBlbCh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIG51bGwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50O1xuICAgIH1cblxuICAgIHNldCBwYXJlbnQocGFyZW50KSB7XG4gICAgICAgIHRoaXMuJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICBnZXQgdGhlbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aGVtZTtcbiAgICB9XG5cbiAgICBzZXQgdGhlbWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aGVtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBsYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBsYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlKGtleSwgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgdChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XG4gICAgfVxuXG5cdHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUgPT09ICdmbGlwLWNsb2NrJyA/IHRoaXMuY2xhc3NOYW1lIDogJ2ZsaXAtY2xvY2stJyArIHRoaXMuY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGhlbWVbdGhpcy5uYW1lXShlbCwgdGhpcyk7XG5cbiAgICAgICAgaWYoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZWwuaW5uZXJIVE1MICE9PSBlbC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBzd2FwKGVsLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuXHR9XG5cbiAgICBtb3VudChwYXJlbnQsIGJlZm9yZSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBpZighYmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCBiZWZvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aWRlciBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiwgIH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBpc09iamVjdCwgIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRpdGVtcztcbiAgICB9XG5cbiAgICBzZXQgaXRlbXModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kaXRlbXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0SXRlbSh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy4kaXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGl0ZW1zLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgIH0sIGlzT2JqZWN0KGl0ZW1zKSA/IGl0ZW1zIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IobGFiZWwsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSwgaXNPYmplY3QobGFiZWwpID8gbGFiZWwgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCB0b3AnfSksXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZsaXAtY2xvY2stZG90IGJvdHRvbSd9KVxuICAgIF0pO1xufVxuIiwiaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZnVuY3Rpb24gY2hpbGQoZWwsIGluZGV4KSB7XG4gICAgcmV0dXJuIGVsID8gKGVsLmNoaWxkTm9kZXMgPyBlbC5jaGlsZE5vZGVzW2luZGV4XSA6IGVsW2luZGV4XSkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBjaGFyKGVsKSB7XG4gICAgcmV0dXJuIGVsID8gZWwucXVlcnlTZWxlY3RvcignLmZsaXAtY2xvY2stbGlzdC1pdGVtOmZpcnN0LWNoaWxkIC50b3AnKS5pbm5lckhUTUwgOiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGluc3RhbmNlLnZhbHVlLmRpZ2l0cy5tYXAoKGdyb3VwLCB4KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwRWwgPSBjaGlsZChpbnN0YW5jZS5lbCA/IGluc3RhbmNlLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGlwLWNsb2NrLWdyb3VwJykgOiBudWxsLCB4KTtcblxuICAgICAgICBjb25zdCBsaXN0cyA9IGdyb3VwLm1hcCgodmFsdWUsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RFbCA9IGNoaWxkKGdyb3VwRWwgPyBncm91cEVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGlwLWNsb2NrLWxpc3QnKSA6IG51bGwsIHkpO1xuICAgICAgICAgICAgY29uc3QgbGlzdFZhbHVlID0gY2hhcihsaXN0RWwpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuY3JlYXRlTGlzdCh2YWx1ZSwge1xuICAgICAgICAgICAgICAgIGRvbVZhbHVlOiBsaXN0VmFsdWUsXG4gICAgICAgICAgICAgICAgY291bnRkb3duOiBpbnN0YW5jZS5jb3VudGRvd24sXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uUmF0ZTogaW5zdGFuY2UuZmFjZS5hbmltYXRpb25SYXRlIHx8IGluc3RhbmNlLmZhY2UuZGVsYXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuY3JlYXRlR3JvdXAobGlzdHMpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZXMgPSBwYXJ0cy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICByZXR1cm4gZ3JvdXAucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgbm9kZXMpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgaXRlbXMgPSBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIGl0ZW1zKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gaW5zdGFuY2UudChpbnN0YW5jZS5sYWJlbCk7XG59XG4iLCJpbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MaXN0SXRlbSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBiZWZvcmVWYWx1ZSA9IGluc3RhbmNlLmRvbVZhbHVlIHx8IChcbiAgICAgICAgIWluc3RhbmNlLmNvdW50ZG93biA/IHByZXYoaW5zdGFuY2UudmFsdWUpIDogbmV4dChpbnN0YW5jZS52YWx1ZSlcbiAgICApO1xuXG4gICAgaWYoIGluc3RhbmNlLmRvbVZhbHVlICYmIGluc3RhbmNlLmRvbVZhbHVlICE9PSBpbnN0YW5jZS52YWx1ZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XG4gICAgfVxuXG4gICAgZWwuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpbnN0YW5jZS5hbmltYXRpb25SYXRlIC8gMn1tc2A7XG4gICAgZWwuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBgJHtpbnN0YW5jZS5hbmltYXRpb25SYXRlIC8gMn1tc2A7XG5cbiAgICBpbnN0YW5jZS5pdGVtcyA9IFtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGlzdEl0ZW0oaW5zdGFuY2UudmFsdWUsIHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGlzdEl0ZW0oYmVmb3JlVmFsdWUsIHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICBdO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIGluc3RhbmNlLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0ucmVuZGVyKCkpKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGluc3RhbmNlLmFjdGl2ZSA9PT0gdHJ1ZSA/ICdhY3RpdmUnIDogKFxuICAgICAgICBpbnN0YW5jZS5hY3RpdmUgPT09IGZhbHNlID8gJ2JlZm9yZScgOiBudWxsXG4gICAgKTtcblxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGluc3RhbmNlLnZhbHVlLCB7Y2xhc3M6ICd0b3AnfSksXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAnYm90dG9tJ30pXG4gICAgICAgIF0sIHtjbGFzczogJ2ZsaXAtY2xvY2stbGlzdC1pdGVtLWlubmVyJ30pXG4gICAgXSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s2XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIH1cbiAgICBcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBUd2VudHlGb3VySG91ckNsb2NrIGZyb20gJy4vVHdlbnR5Rm91ckhvdXJDbG9jayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIFR3ZW50eUZvdXJIb3VyQ2xvY2soZWwsIGluc3RhbmNlKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd01lcmlkaXVtICYmIGluc3RhbmNlLmZhY2UubWVyaWRpdW0pIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBpbnN0YW5jZS5jcmVhdGVMYWJlbChpbnN0YW5jZS5mYWNlLm1lcmlkaXVtKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWwuY2hpbGROb2Rlc1tlbC5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGxhYmVsLm1vdW50KHBhcmVudCkuY2xhc3NMaXN0LmFkZCgnZmxpcC1jbG9jay1tZXJpZGl1bScpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbN10pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnd2Vla3MnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2RheXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1s2XSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzhdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s3XSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s5XSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd5ZWFycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnd2Vla3MnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2RheXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1s2XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1s4XSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzEwXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IEZsaXBDbG9jayBmcm9tICcuL0ZsaXBDbG9jayc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuaW1wb3J0ICogYXMgZmFjZXMgZnJvbSAnLi9GYWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBEaXZpZGVyLFxuICAgIEZsaXBDbG9jayxcbiAgICBHcm91cCxcbiAgICBMYWJlbCxcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIGZhY2VzXG59O1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQXJhYmljIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgYmUgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEFyYWJpYyBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9iz2YbZiNin2KonLFxuICAgICdtb250aHMnICA6ICfYtNmH2YjYsScsXG4gICAgJ2RheXMnICAgIDogJ9ij2YrYp9mFJyxcbiAgICAnaG91cnMnICAgOiAn2LPYp9i52KfYqicsXG4gICAgJ21pbnV0ZXMnIDogJ9iv2YLYp9im2YInLFxuICAgICdzZWNvbmRzJyA6ICfYq9mI2KfZhtmKJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2FyJywgJ2FyLWFyJywgJ2FyYWJpYyddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ3plY2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ3plY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdSb2t5JyxcbiAgICAnbW9udGhzJyAgOiAnTcSbc8OtY2UnLFxuICAgICdkYXlzJyAgICA6ICdEbnknLFxuICAgICdob3VycycgICA6ICdIb2RpbnknLFxuICAgICdtaW51dGVzJyA6ICdNaW51dHknLFxuICAgICdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NzJywgJ2NzLWN6JywgJ2N6JywgJ2N6LWNzJywgJ2N6ZWNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBEYW5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRGFuaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuZWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdlJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RhJywgJ2RhLWRrJywgJ2RhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgR2VybWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEdlcm1hbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdKYWhyZScsXG5cdCdtb250aHMnICA6ICdNb25hdGUnLFxuXHQnZGF5cycgICAgOiAnVGFnZScsXG5cdCdob3VycycgICA6ICdTdHVuZGVuJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZW4nLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGUnLCAnZGUtZGUnLCAnZ2VybWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBFbmdsaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWWVhcnMnLFxuXHQnbW9udGhzJyAgOiAnTW9udGhzJyxcblx0J2RheXMnICAgIDogJ0RheXMnLFxuXHQnaG91cnMnICAgOiAnSG91cnMnLFxuXHQnbWludXRlcycgOiAnTWludXRlcycsXG5cdCdzZWNvbmRzJyA6ICdTZWNvbmRzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2VuJywgJ2VuLXVzJywgJ2VuZ2xpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNwYW5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3BhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBw7FvcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEw61hcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2VzJywgJ2VzLWVzJywgJ3NwYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFBlcnNpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRW5nbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfYs9in2YQnLFxuXHQnbW9udGhzJyAgOiAn2YXYp9mHJyxcblx0J2RheXMnICAgIDogJ9ix2YjYsicsXG5cdCdob3VycycgICA6ICfYs9in2LnYqicsXG5cdCdtaW51dGVzJyA6ICfYr9mC24zZgtmHJyxcblx0J3NlY29uZHMnIDogJ9ir2KfZhtuM2YcnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmEnLCAnZmEtaXInLCAncGVyc2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRmlubmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBGaW5uaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1Z1b3R0YScsXG5cdCdtb250aHMnICA6ICdLdXVrYXV0dGEnLFxuXHQnZGF5cycgICAgOiAnUMOkaXbDpMOkJyxcblx0J2hvdXJzJyAgIDogJ1R1bnRpYScsXG5cdCdtaW51dGVzJyA6ICdNaW51dXR0aWEnLFxuXHQnc2Vjb25kcycgOiAnU2VrdW50aWEnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmknLCAnZmktZmknLCAnZmlubmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ2FuYWRpYW4gRnJlbmNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0FucycsXG4gICAgJ21vbnRocycgIDogJ01vaXMnLFxuICAgICdkYXlzJyAgICA6ICdKb3VycycsXG4gICAgJ2hvdXJzJyAgIDogJ0hldXJlcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWNvbmRlcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmcicsICdmci1jYScsICdmcmVuY2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEhlYnJldyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn16nXoNeZ150nLFxuXHQnbW9udGhzJyAgOiAn15fXldeT16knLFxuXHQnZGF5cycgICAgOiAn15nXnteZ150nLFxuXHQnaG91cnMnICAgOiAn16nXoteV16onLFxuXHQnbWludXRlcycgOiAn15PXp9eV16onLFxuXHQnc2Vjb25kcycgOiAn16nXoNeZ15XXqidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydpbCcsICdoZS1pbCcsICdoZWJyZXcnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEh1bmdhcmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBIdW5nYXJpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4l2JyxcbiAgICAnbW9udGhzJyAgOiAnSMOzbmFwJyxcbiAgICAnZGF5cycgICAgOiAnTmFwJyxcbiAgICAnaG91cnMnICAgOiAnw5NyYScsXG4gICAgJ21pbnV0ZXMnIDogJ1BlcmMnLFxuICAgICdzZWNvbmRzJyA6ICdNw6Fzb2RwZXJjJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2h1JywgJ2h1LWh1JywgJ2h1bmdhcmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSXRhbGlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBJdGFsaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0FubmknLFxuXHQnbW9udGhzJyAgOiAnTWVzaScsXG5cdCdkYXlzJyAgICA6ICdHaW9ybmknLFxuXHQnaG91cnMnICAgOiAnT3JlJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0aScsXG5cdCdzZWNvbmRzJyA6ICdTZWNvbmRpJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RhJywgJ2RhLWRrJywgJ2RhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSmFwYW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSmFwYW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pmCJyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnanAnLCAnamEtanAnLCAnamFwYW5lc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEtvcmVhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBLb3JlYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn64WEJyxcblx0J21vbnRocycgIDogJ+yblCcsXG5cdCdkYXlzJyAgICA6ICfsnbwnLFxuXHQnaG91cnMnICAgOiAn7IucJyxcblx0J21pbnV0ZXMnIDogJ+u2hCcsXG5cdCdzZWNvbmRzJyA6ICfstIgnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsna28nLCAna28ta3InLCAna29yZWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBMYXR2aWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIExhdHZpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdHYWRpJyxcbiAgICAnbW9udGhzJyAgOiAnTcSTbmXFoWknLFxuICAgICdkYXlzJyAgICA6ICdEaWVuYXMnLFxuICAgICdob3VycycgICA6ICdTdHVuZGFzJyxcbiAgICAnbWludXRlcycgOiAnTWluxat0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWt1bmRlcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydsdicsICdsdi1sdicsICdsYXR2aWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBEdXRjaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBEdXRjaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0phcmVuJyxcbiAgICAnbW9udGhzJyAgOiAnTWFhbmRlbicsXG4gICAgJ2RheXMnICAgIDogJ0RhZ2VuJyxcbiAgICAnaG91cnMnICAgOiAnVXJlbicsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0ZW4nLFxuICAgICdzZWNvbmRzJyA6ICdTZWNvbmRlbidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydubCcsICdubC1iZScsICdkdXRjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTm9yd2VnaWFuLUJva23DpWwgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTm9yd2VnaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuZWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdlcicsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydubycsICduYicsICduby1uYicsICdub3J3ZWdpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFBvbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQb2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnbGF0Jyxcblx0J21vbnRocycgIDogJ21pZXNpxJljeScsXG5cdCdkYXlzJyAgICA6ICdkbmknLFxuXHQnaG91cnMnICAgOiAnZ29kemluJyxcblx0J21pbnV0ZXMnIDogJ21pbnV0Jyxcblx0J3NlY29uZHMnIDogJ3Nla3VuZCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwbCcsICdwbC1wbCcsICdwb2xpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFBvcnR1Z3Vlc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9ydHVndWVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm9zJyxcblx0J21vbnRocycgIDogJ01lc2VzJyxcblx0J2RheXMnICAgIDogJ0RpYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwdCcsICdwdC1icicsICdwb3J0dWd1ZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBSdXNzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFJ1c3NpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfQu9C10YInLFxuICAgICdtb250aHMnICA6ICfQvNC10YHRj9GG0LXQsicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3QtdC5JyxcbiAgICAnaG91cnMnICAgOiAn0YfQsNGB0L7QsicsXG4gICAgJ21pbnV0ZXMnIDogJ9C80LjQvdGD0YInLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncnUnLCAncnUtcnUnLCAncnVzc2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU2xvdmFrIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNsb3ZhayBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdSb2t5Jyxcblx0J21vbnRocycgIDogJ01lc2lhY2UnLFxuXHQnZGF5cycgICAgOiAnRG5pJyxcblx0J2hvdXJzJyAgIDogJ0hvZGlueScsXG5cdCdtaW51dGVzJyA6ICdNaW7DunR5Jyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc2snLCAnc2stc2snLCAnc2xvdmFrJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTd2VkaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFN3ZWRpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5hZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2FyJyxcblx0J2hvdXJzJyAgIDogJ1RpbW1hcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3N2JywgJ3N2LXNlJywgJ3N3ZWRpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRoYWkgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVGhhaSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfguJvguLUnLFxuXHQnbW9udGhzJyAgOiAn4LmA4LiU4Li34Lit4LiZJyxcblx0J2RheXMnICAgIDogJ+C4p+C4seC4mScsXG5cdCdob3VycycgICA6ICfguIrguLHguYjguKfguYLguKHguIcnLFxuXHQnbWludXRlcycgOiAn4LiZ4Liy4LiX4Li1Jyxcblx0J3NlY29uZHMnIDogJ+C4p+C4tOC4meC4suC4l+C4tSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0aCcsICd0aC10aCcsICd0aGFpJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUdXJraXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFR1cmtpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWcSxbCcsXG5cdCdtb250aHMnICA6ICdBeScsXG5cdCdkYXlzJyAgICA6ICdHw7xuJyxcblx0J2hvdXJzJyAgIDogJ1NhYXQnLFxuXHQnbWludXRlcycgOiAnRGFraWthJyxcblx0J3NlY29uZHMnIDogJ1Nhbml5ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0cicsICd0ci10cicsICd0dXJraXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBVa3JhaW5pYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVWtyYWluaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0YDQvtC60LgnLFxuICAgICdtb250aHMnICA6ICfQvNGW0YHRj9GG0ZYnLFxuICAgICdkYXlzJyAgICA6ICfQtNC90ZYnLFxuICAgICdob3VycycgICA6ICfQs9C+0LTQuNC90LgnLFxuICAgICdtaW51dGVzJyA6ICfRhdCy0LjQu9C40L3QuCcsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtNC4J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3VhJywgJ3VhLXVhJywgJ3VrcmFpbmUnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfml7YnLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd6aCcsICd6aC1jbicsICdjaGluZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUcmFkaXRpb25hbCBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRyYWRpdGlvbmFsIENoaW5lc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pmCJyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgtdHcnXTtcbiIsImltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgeyBPcmlnaW5hbCB9IGZyb20gJy4uL1RoZW1lcyc7XG5pbXBvcnQgeyBFbmdsaXNoIH0gZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZhY2U6IENvdW50ZXIsXG4gICAgdGhlbWU6IE9yaWdpbmFsLFxuICAgIGxhbmd1YWdlOiBFbmdsaXNoXG59O1xuIiwiaW1wb3J0ICogYXMgRmFjZXMgZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCBMaXN0IGZyb20gJy4uL0NvbXBvbmVudHMvTGlzdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vQ29tcG9uZW50cy9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vQ29tcG9uZW50cy9MYWJlbCc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvRGl2aWRlcic7XG5pbXBvcnQgRGVmYXVsdFZhbHVlcyBmcm9tICcuLi9Db25maWcvRGVmYXVsdFZhbHVlcyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzT2JqZWN0LCBpc0Z1bmN0aW9uLCBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENsb2NrIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighdmFsaWRhdGUoZWwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNPYmplY3QodmFsdWUpICYmICFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWNlID0gYXR0cmlidXRlcy5mYWNlIHx8IERlZmF1bHRWYWx1ZXMuZmFjZTtcblxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5mYWNlO1xuXG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgb3JpZ2luYWxWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB0aGVtZTogRGVmYXVsdFZhbHVlcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIHRoaXMubW91bnQoZWwpO1xuICAgIH1cblxuICAgIGdldCBmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZmFjZTtcbiAgICB9XG5cbiAgICBzZXQgZmFjZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIFtGYWNlLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJ10pKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1N0cmluZyh2YWx1ZSkgJiYgRmFjZXNbdmFsdWVdKSB7XG4gICAgICAgICAgICB0aGlzLiRmYWNlID0gbmV3IEZhY2VzW3ZhbHVlXSh0aGlzLm9yaWdpbmFsVmFsdWUsIHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGZhY2UgPSBuZXcgdmFsdWUodGhpcy5vcmlnaW5hbFZhbHVlLCB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRGYWNlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuZmFjZS5pbml0aWFsaXplZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBzdG9wQXQoKSB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMuJHN0b3BBdCkgPyB0aGlzLiRzdG9wQXQodGhpcykgOiB0aGlzLiRzdG9wQXQ7XG4gICAgfVxuXG4gICAgc2V0IHN0b3BBdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9wQXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGltZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UudGltZXI7XG4gICAgfVxuXG4gICAgc2V0IHRpbWVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS50aW1lciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjZS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLnJlc2V0KHRoaXMsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYmluZEZhY2VFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGZuID0gKCkgPT4gdGhpcy51cGRhdGVkKCk7XG5cbiAgICAgICAgdGhpcy4kZmFjZS5vZmYoJ3VwZGF0ZWQnLCBmbikub24oJ3VwZGF0ZWQnLCBmbik7XG5cbiAgICAgICAgWyd1cGRhdGVkJywgJ3N0YXJ0JywgJ3N0b3AnLCAncmVzZXQnLCAnaW50ZXJ2YWwnXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4gdGhpcy5lbWl0KGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5mYWNlLm9mZihldmVudCwgZm4pLm9uKGV2ZW50LCBmbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYoIHRoaXMuc3RvcEF0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcEF0ID09PSB0aGlzLmZhY2UudmFsdWUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91bnQoZWwpIHtcbiAgICAgICAgc3VwZXIubW91bnQoZWwpO1xuXG4gICAgICAgIHRoaXMuZmFjZS5tb3VudGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcGFyZW50IHJlbmRlciBmdW5jdGlvblxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGZhY2UgaGFzIGEgcmVuZGVyIGZ1bmN0aW9uIGRlZmluZWQgaW4gdGhlIHRoZW1lLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBhIGZhY2UgdG8gY29tcGxldGVseSByZS1yZW5kZXIgb3IgYWRkIHRvIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgZmFjZSBzcGVjaWZpYyBpbnRlcmZhY2VzIGZvciBhIHRoZW1lLlxuICAgICAgICBpZih0aGlzLnRoZW1lLmZhY2VzW3RoaXMuZmFjZS5uYW1lXSkge1xuICAgICAgICAgICAgdGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0odGhpcy5lbCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXNzIHRoZSBjbG9jayBpbnN0YW5jZSB0byB0aGUgcmVuZGVyZWQoKSBmdW5jdGlvbiBvbiB0aGUgZmFjZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgZ2xvYmFsIG1vZGlmaWNhdGlvbnMgdG8gdGhlIHJlbmRlcmVkIHRlbXBsYXRlcyBub3RcbiAgICAgICAgLy8gdGhlbWUgc3BlY2lmaWMuXG4gICAgICAgIHRoaXMuZmFjZS5yZW5kZXJlZCh0aGlzKTtcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHJlbmRlcmVkIGVsZW1lbnQuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5yZXNldCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgdGhpcy5mYWNlLnN0YXJ0KHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5zdG9wKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVEaXZpZGVyKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIERpdmlkZXIubWFrZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExpc3QubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMYWJlbCh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gTGFiZWwubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVHcm91cChpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gR3JvdXAubWFrZShpdGVtcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdEZhY2UodmFsdWUpIHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWUsIFtGYWNlLCAnZnVuY3Rpb24nXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0VmFsdWVzLmZhY2UgPSB2YWx1ZTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdFRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGhlbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy50aGVtZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRMYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImNhbGxiYWNrIiwiZm4iLCJpc0Z1bmN0aW9uIiwiYXBwbHkiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJub29wIiwidmFsdWUiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsImNoYWluIiwiYmVmb3JlIiwiYWZ0ZXIiLCJjb25jYXRNYXAiLCJ4IiwibWFwIiwicmVkdWNlIiwieSIsImNvbmNhdCIsImZsYXR0ZW4iLCJkZWVwRmxhdHRlbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImRpZ2l0cyIsImlzQ2xhc3MiLCJGdW5jdGlvbiIsIm5hbWUiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwidHlwZSIsImlzTnVtYmVyIiwiaXNOYU4iLCJrZWJhYkNhc2UiLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJDb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRzIiwia2V5IiwiYXJncyIsImZvckVhY2giLCJldmVudCIsInB1c2giLCJmaWx0ZXIiLCJvZmYiLCJvbiIsImhhc093blByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldEF0dHJpYnV0ZSIsImtleXMiLCJnZXRBdHRyaWJ1dGVzIiwibWF0Y2giLCJvYmoiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWVzIiwiaSIsImNvbnN0cnVjdG9yIiwiJGV2ZW50cyIsIlRpbWVyIiwiaW50ZXJ2YWwiLCJjb3VudCIsImhhbmRsZSIsInN0YXJ0ZWQiLCJydW5uaW5nIiwic3RvcCIsInN0YXJ0IiwiZW1pdCIsIkRhdGUiLCJsYXN0TG9vcCIsIm5vdyIsImxvb3AiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1J1bm5pbmciLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaWdpdGl6ZSIsIm9wdGlvbnMiLCJtaW5pbXVtRGlnaXRzIiwicHJlcGVuZExlYWRpbmdaZXJvIiwicHJlcGVuZCIsIm51bWJlciIsInNob3VsZFByZXBlbmRaZXJvIiwidG9TdHJpbmciLCJzcGxpdCIsImFyciIsIm1pbiIsInVuc2hpZnQiLCJyYW5nZXMiLCJtYXgiLCJmb3JtYXQiLCJwYXJzZUZsb2F0IiwiZmluZFJhbmdlIiwiY2hhciIsImNvZGUiLCJjaGFyQ29kZUF0IiwibmV4dCIsImNvbnZlcnRlZCIsImNoYXJDb2RlIiwicmFuZ2UiLCJqb2luIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicHJldiIsIkZhY2VWYWx1ZSIsIiRkaWdpdHMiLCJNYXRoIiwiJHZhbHVlIiwidmFsaWRhdGUiLCJzdWNjZXNzIiwiYXJnIiwiaXRlbXMiLCJ0aGVtZSIsImxhbmd1YWdlIiwiZGF0ZSIsImZhY2UiLCJlbGVtZW50IiwiZmFjZVZhbHVlIiwidGltZXIiLCJGYWNlIiwiZGVsYXkiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwibWFrZSIsImRlZmF1bHRBdHRyaWJ1dGVzIiwiZGVmYXVsdFZhbHVlIiwiaW5zdGFuY2UiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJyZXNldCIsImlzU3RvcHBlZCIsImRlZmF1bHREYXRhVHlwZSIsImRhdGFUeXBlIiwiY3JlYXRlRmFjZVZhbHVlIiwiJHRpbWVyIiwiQ29uc29sZU1lc3NhZ2VzIiwiQ291bnRlciIsIk1pbnV0ZUNvdW50ZXIiLCJzaG93U2Vjb25kcyIsInNob3dMYWJlbHMiLCJvcmlnaW5hbFZhbHVlIiwiYSIsImIiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZsb29yIiwiZ2V0VG90YWxTZWNvbmRzIiwidG90YWxTZWNvbmRzIiwiYWJzIiwiY2VpbCIsInJvdW5kIiwiZ2V0VGltZSIsIkhvdXJDb3VudGVyIiwiZGF0YSIsImdldEhvdXJzIiwiRGF5Q291bnRlciIsImdldERheXMiLCJUd2VudHlGb3VySG91ckNsb2NrIiwiZ3JvdXBzIiwiVHdlbHZlSG91ckNsb2NrIiwic2hvd01lcmlkaXVtIiwiaG91cnMiLCJtZXJpZGl1bSIsIldlZWtDb3VudGVyIiwiZ2V0V2Vla3MiLCJZZWFyQ291bnRlciIsImdldFllYXJzIiwiZnJvbSIsImRpY3Rpb25hcnkiLCJzd2FwIiwiZWwiLCJleGlzdGluZyIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJIVE1MRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiaW5uZXJIVE1MIiwiRG9tQ29tcG9uZW50IiwicGFyZW50IiwidHJhbnNsYXRlIiwiY2xhc3MiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJpbnNlcnRCZWZvcmUiLCIkZWwiLCIkcGFyZW50IiwiJHRoZW1lIiwiJGxhbmd1YWdlIiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdCIsIml0ZW0iLCIkaXRlbXMiLCJHcm91cCIsIkxhYmVsIiwibGFiZWwiLCJpbmRleCIsImNoaWxkTm9kZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFydHMiLCJncm91cCIsImdyb3VwRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlzdHMiLCJsaXN0RWwiLCJsaXN0VmFsdWUiLCJjcmVhdGVMaXN0IiwiZG9tVmFsdWUiLCJjcmVhdGVHcm91cCIsIm5vZGVzIiwidCIsImJlZm9yZVZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJhbmltYXRpb25EZWxheSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiY3JlYXRlTGlzdEl0ZW0iLCJhY3RpdmUiLCJjcmVhdGVEaXZpZGVyIiwibW91bnQiLCJjcmVhdGVMYWJlbCIsIkZsaXBDbG9jayIsImZhY2VzIiwiYWxpYXNlcyIsIk9yaWdpbmFsIiwiRW5nbGlzaCIsIkRlZmF1bHRWYWx1ZXMiLCJ1cGRhdGVkIiwiJGZhY2UiLCJzdG9wQXQiLCJ1bmRlZmluZWQiLCJtb3VudGVkIiwicmVuZGVyZWQiLCJGYWNlcyIsImdldFB1YmxpY0F0dHJpYnV0ZXMiLCJiaW5kRmFjZUV2ZW50cyIsImluaXRpYWxpemVkIiwiJHN0b3BBdCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLEtBQVQsQ0FBZUMsT0FBZixFQUF3QjtJQUMzQixRQUFNLElBQUlDLEtBQUosQ0FBVUQsT0FBVixDQUFOO0lBQ0g7QUFFRCxJQUFPLFNBQVNFLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0lBQ3pCLE1BQUdDLFVBQVUsQ0FBQ0QsRUFBRCxDQUFiLEVBQW1CO0lBQ2YsV0FBT0EsRUFBRSxDQUFDRSxLQUFILENBQVMsSUFBVCxFQUFlLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQXlCRixLQUF6QixDQUErQixDQUEvQixDQUFmLENBQVA7SUFDSDtJQUNKO0FBRUQsSUFBTyxTQUFTRyxJQUFULENBQWNDLEtBQWQsRUFBcUI7SUFDeEIsU0FBTyxDQUFDQyxXQUFXLENBQUNELEtBQUQsQ0FBWixJQUF1QixDQUFDRSxNQUFNLENBQUNGLEtBQUQsQ0FBckM7SUFDSDtBQUVELElBQU8sU0FBU0csS0FBVCxDQUFlQyxNQUFmLEVBQXVCQyxLQUF2QixFQUE4QjtJQUNqQyxTQUFPO0lBQUEsV0FBTUEsS0FBSyxDQUFDRCxNQUFNLEVBQVAsQ0FBWDtJQUFBLEdBQVA7SUFDSDtBQUVELElBQU8sU0FBU0UsU0FBVCxDQUFtQmIsRUFBbkIsRUFBdUI7SUFDMUIsU0FBTyxVQUFBYyxDQUFDLEVBQUk7SUFDUixXQUFPQSxDQUFDLENBQUNDLEdBQUYsQ0FBTWYsRUFBTixFQUFVZ0IsTUFBVixDQUFpQixVQUFDRixDQUFELEVBQUlHLENBQUo7SUFBQSxhQUFVSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsQ0FBVCxDQUFWO0lBQUEsS0FBakIsRUFBd0MsRUFBeEMsQ0FBUDtJQUNILEdBRkQ7SUFHSDtBQUVELElBQU8sU0FBU0UsT0FBVCxDQUFpQkwsQ0FBakIsRUFBb0I7SUFDdkIsU0FBT0QsU0FBUyxDQUFDLFVBQUFDLENBQUM7SUFBQSxXQUFJQSxDQUFKO0lBQUEsR0FBRixDQUFULENBQWtCQSxDQUFsQixDQUFQO0lBQ0g7QUFFRCxJQUFPLFNBQVNNLFdBQVQsQ0FBcUJOLENBQXJCLEVBQXdCO0lBQzNCLFNBQU9ELFNBQVMsQ0FBQyxVQUFBQyxDQUFDO0lBQUEsV0FBSU8sS0FBSyxDQUFDQyxPQUFOLENBQWNSLENBQWQsSUFBbUJNLFdBQVcsQ0FBRU4sQ0FBRixDQUE5QixHQUFxQ0EsQ0FBekM7SUFBQSxHQUFGLENBQVQsQ0FBdURBLENBQXZELENBQVA7SUFDSDtBQUVELElBSU8sU0FBU1MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7SUFDM0IsU0FBT0osV0FBVyxDQUFDSSxNQUFELENBQVgsQ0FBb0JELE1BQTNCO0lBQ0g7QUFFRCxJQUFPLFNBQVNkLE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVCO0lBQzFCLFNBQU9BLEtBQUssS0FBSyxJQUFqQixDQUQwQjtJQUU3QjtBQUVELElBQU8sU0FBU0MsV0FBVCxDQUFxQkQsS0FBckIsRUFBNEI7SUFDL0IsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0lBQ0g7QUFFRCxJQUFPLFNBQVNrQixPQUFULENBQWlCbEIsS0FBakIsRUFBd0I7SUFDM0IsU0FBUUEsS0FBSyxZQUFZbUIsUUFBbEIsSUFBK0IsQ0FBQyxDQUFDbkIsS0FBSyxDQUFDb0IsSUFBOUM7SUFDSDtBQUVELElBQU8sU0FBU0MsUUFBVCxDQUFrQnJCLEtBQWxCLEVBQXlCO0lBQzVCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtJQUNIO0FBRUQsSUFBTyxTQUFTZSxPQUFULENBQWlCZixLQUFqQixFQUF3QjtJQUMzQixTQUFPQSxLQUFLLFlBQVljLEtBQXhCO0lBQ0g7QUFFRCxJQUFPLFNBQVNRLFFBQVQsQ0FBa0J0QixLQUFsQixFQUF5QjtJQUM1QixNQUFNdUIsSUFBSSxXQUFVdkIsS0FBVixDQUFWOztJQUNBLFNBQU9BLEtBQUssSUFBSSxJQUFULElBQWlCLENBQUNlLE9BQU8sQ0FBQ2YsS0FBRCxDQUF6QixLQUNIdUIsSUFBSSxJQUFJLFFBQVIsSUFBb0JBLElBQUksSUFBSSxVQUR6QixDQUFQO0lBR0g7QUFFRCxJQUFPLFNBQVM3QixVQUFULENBQW9CTSxLQUFwQixFQUEyQjtJQUM5QixTQUFPQSxLQUFLLFlBQVltQixRQUF4QjtJQUNIO0FBRUQsSUFBTyxTQUFTSyxRQUFULENBQWtCeEIsS0FBbEIsRUFBeUI7SUFDNUIsU0FBTyxDQUFDeUIsS0FBSyxDQUFDekIsS0FBRCxDQUFiO0lBQ0g7QUFFRCxJQUFPLFNBQVMwQixTQUFULENBQW1CQyxHQUFuQixFQUF3QjtJQUMzQixTQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxpQkFBWixFQUErQixPQUEvQixFQUF3Q0EsT0FBeEMsQ0FBZ0QsTUFBaEQsRUFBd0QsR0FBeEQsRUFBNkRDLFdBQTdELEVBQVA7SUFDSDs7UUMzRW9CQzs7O0lBRWpCLHFCQUFZQyxVQUFaLEVBQXdCO0lBQUE7O0lBQ3BCLFNBQUtDLFlBQUwsQ0FBa0JDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQzVCQyxNQUFBQSxNQUFNLEVBQUU7SUFEb0IsS0FBZCxFQUVmSixVQUZlLENBQWxCO0lBR0g7Ozs7NkJBa0JJSyxLQUFjO0lBQUE7O0lBQUEsd0NBQU5DLElBQU07SUFBTkEsUUFBQUEsSUFBTTtJQUFBOztJQUNmLFVBQUcsS0FBS0YsTUFBTCxDQUFZQyxHQUFaLENBQUgsRUFBcUI7SUFDakIsYUFBS0QsTUFBTCxDQUFZQyxHQUFaLEVBQWlCRSxPQUFqQixDQUF5QixVQUFBQyxLQUFLLEVBQUk7SUFDOUJBLFVBQUFBLEtBQUssQ0FBQzVDLEtBQU4sQ0FBWSxLQUFaLEVBQWtCMEMsSUFBbEI7SUFDSCxTQUZEO0lBR0g7O0lBRUQsYUFBTyxJQUFQO0lBQ0g7OzsyQkFFRUQsS0FBSzNDLElBQWtCO0FBQUE7SUFDdEIsVUFBRyxDQUFDLEtBQUswQyxNQUFMLENBQVlDLEdBQVosQ0FBSixFQUFzQjtJQUNsQixhQUFLRCxNQUFMLENBQVlDLEdBQVosSUFBbUIsRUFBbkI7SUFDSDs7SUFFRCxXQUFLRCxNQUFMLENBQVlDLEdBQVosRUFBaUJJLElBQWpCLENBQXNCL0MsRUFBdEI7SUFFQSxhQUFPLElBQVA7SUFDSDs7OzRCQUVHMkMsS0FBSzNDLElBQUk7SUFDVCxVQUFHLEtBQUswQyxNQUFMLENBQVlDLEdBQVosS0FBb0IzQyxFQUF2QixFQUEyQjtJQUN2QixhQUFLMEMsTUFBTCxDQUFZQyxHQUFaLElBQW1CLEtBQUtELE1BQUwsQ0FBWUMsR0FBWixFQUFpQkssTUFBakIsQ0FBd0IsVUFBQUYsS0FBSyxFQUFJO0lBQ2hELGlCQUFPQSxLQUFLLEtBQUs5QyxFQUFqQjtJQUNILFNBRmtCLENBQW5CO0lBR0gsT0FKRCxNQUtLO0lBQ0QsYUFBSzBDLE1BQUwsQ0FBWUMsR0FBWixJQUFtQixFQUFuQjtJQUNIOztJQUVELGFBQU8sSUFBUDtJQUNIOzs7NkJBRUlBLEtBQUszQyxJQUFJO0lBQUE7O0lBQ1ZBLE1BQUFBLEVBQUUsR0FBR1UsS0FBSyxDQUFDVixFQUFELEVBQUs7SUFBQSxlQUFNLE1BQUksQ0FBQ2lELEdBQUwsQ0FBU04sR0FBVCxFQUFjM0MsRUFBZCxDQUFOO0lBQUEsT0FBTCxDQUFWO0lBRUEsV0FBS2tELEVBQUwsQ0FBUVAsR0FBUixFQUFhM0MsRUFBYixFQUFpQixJQUFqQjtJQUNIOzs7cUNBRVkyQyxLQUFLO0lBQ2QsYUFBTyxLQUFLUSxjQUFMLENBQW9CUixHQUFwQixJQUEyQixLQUFLQSxHQUFMLENBQTNCLEdBQXVDLElBQTlDO0lBQ0g7Ozt3Q0FFZTtJQUFBOztJQUNaLFVBQU1MLFVBQVUsR0FBRyxFQUFuQjtJQUVBRSxNQUFBQSxNQUFNLENBQUNZLG1CQUFQLENBQTJCLElBQTNCLEVBQWlDUCxPQUFqQyxDQUF5QyxVQUFBRixHQUFHLEVBQUk7SUFDNUNMLFFBQUFBLFVBQVUsQ0FBQ0ssR0FBRCxDQUFWLEdBQWtCLE1BQUksQ0FBQ1UsWUFBTCxDQUFrQlYsR0FBbEIsQ0FBbEI7SUFDSCxPQUZEO0lBSUEsYUFBT0wsVUFBUDtJQUNIOzs7OENBRXFCO0lBQUE7O0lBQ2xCLGFBQU9FLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZLEtBQUtDLGFBQUwsRUFBWixFQUNGUCxNQURFLENBQ0ssVUFBQUwsR0FBRyxFQUFJO0lBQ1gsZUFBTyxDQUFDQSxHQUFHLENBQUNhLEtBQUosQ0FBVSxLQUFWLENBQVI7SUFDSCxPQUhFLEVBSUZ4QyxNQUpFLENBSUssVUFBQ3lDLEdBQUQsRUFBTWQsR0FBTixFQUFjO0lBQ2xCYyxRQUFBQSxHQUFHLENBQUNkLEdBQUQsQ0FBSCxHQUFXLE1BQUksQ0FBQ1UsWUFBTCxDQUFrQlYsR0FBbEIsQ0FBWDtJQUNBLGVBQU9jLEdBQVA7SUFDSCxPQVBFLEVBT0EsRUFQQSxDQUFQO0lBUUg7OztxQ0FFWWQsS0FBS3BDLE9BQU87SUFDckIsVUFBR3NCLFFBQVEsQ0FBQ2MsR0FBRCxDQUFYLEVBQWtCO0lBQ2QsYUFBS2UsYUFBTCxDQUFtQmYsR0FBbkI7SUFDSCxPQUZELE1BR0s7SUFDRCxhQUFLQSxHQUFMLElBQVlwQyxLQUFaO0lBQ0g7SUFDSjs7O3NDQUVhb0QsUUFBUTtJQUNsQixXQUFJLElBQU1DLENBQVYsSUFBZUQsTUFBZixFQUF1QjtJQUNuQixhQUFLcEIsWUFBTCxDQUFrQnFCLENBQWxCLEVBQXFCRCxNQUFNLENBQUNDLENBQUQsQ0FBM0I7SUFDSDtJQUNKOzs7b0NBRVE1RCxJQUFJO0lBQ1QsYUFBT0QsUUFBUSxDQUFDSyxJQUFULENBQWMsSUFBZCxFQUFvQkosRUFBcEIsQ0FBUDtJQUNIOzs7NEJBakdVO0lBQ1AsYUFBTyxLQUFLNkQsV0FBTCxDQUFpQmxDLElBQXhCO0lBQ0g7Ozs0QkFFZTtJQUNaLGFBQU9NLFNBQVMsQ0FBQyxLQUFLTixJQUFOLENBQWhCO0lBQ0g7Ozs0QkFFWTtJQUNULGFBQU8sS0FBS21DLE9BQVo7SUFDSDswQkFFVXZELE9BQU87SUFDZCxXQUFLdUQsT0FBTCxHQUFldkQsS0FBZjtJQUNIOzs7K0JBcUZvQjtJQUFBLHlDQUFOcUMsSUFBTTtJQUFOQSxRQUFBQSxJQUFNO0lBQUE7O0lBQ2pCLHdCQUFXLElBQVgsRUFBbUJBLElBQW5CO0lBQ0g7Ozs7OztRQzVHZ0JtQjs7Ozs7SUFFakIsaUJBQVlDLFFBQVosRUFBc0I7SUFBQTs7SUFBQSw4RUFDWnhCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCd0IsTUFBQUEsS0FBSyxFQUFFLENBRFM7SUFFaEJDLE1BQUFBLE1BQU0sRUFBRSxJQUZRO0lBR2hCQyxNQUFBQSxPQUFPLEVBQUUsSUFITztJQUloQkMsTUFBQUEsT0FBTyxFQUFFLEtBSk87SUFLaEJKLE1BQUFBLFFBQVEsRUFBRUE7SUFMTSxLQUFkLEVBTUhuQyxRQUFRLENBQUNtQyxRQUFELENBQVIsR0FBcUJBLFFBQXJCLEdBQWdDLElBTjdCLENBRFk7SUFRckI7SUFFRDs7Ozs7Ozs7OztJQTJCQTs7Ozs7OzhCQU1NaEUsSUFBSTtJQUFBOztJQUNOLFdBQUtxRSxJQUFMLENBQVUsWUFBTTtJQUNaLFFBQUEsS0FBSSxDQUFDSixLQUFMLEdBQWEsQ0FBYjs7SUFDQSxRQUFBLEtBQUksQ0FBQ0ssS0FBTCxDQUFXO0lBQUEsaUJBQU12RSxRQUFRLENBQUNLLElBQVQsQ0FBYyxLQUFkLEVBQW9CSixFQUFwQixDQUFOO0lBQUEsU0FBWDs7SUFDQSxRQUFBLEtBQUksQ0FBQ3VFLElBQUwsQ0FBVSxPQUFWO0lBQ0gsT0FKRDtJQU1BLGFBQU8sSUFBUDtJQUNIO0lBRUQ7Ozs7Ozs7Ozs4QkFNTXZFLElBQUk7SUFBQTs7SUFDTixXQUFLbUUsT0FBTCxHQUFlLElBQUlLLElBQUosRUFBZjtJQUNBLFdBQUtDLFFBQUwsR0FBZ0JELElBQUksQ0FBQ0UsR0FBTCxFQUFoQjtJQUNBLFdBQUtOLE9BQUwsR0FBZSxJQUFmO0lBQ0EsV0FBS0csSUFBTCxDQUFVLE9BQVY7O0lBRUEsVUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtJQUNmLFlBQUdILElBQUksQ0FBQ0UsR0FBTCxLQUFhLE1BQUksQ0FBQ0QsUUFBbEIsSUFBOEIsTUFBSSxDQUFDVCxRQUF0QyxFQUFnRDtJQUM1QyxVQUFBLE1BQUksQ0FBQ1MsUUFBTCxHQUFnQkQsSUFBSSxDQUFDRSxHQUFMLEVBQWhCO0lBQ0EzRSxVQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBYyxNQUFkLEVBQW9CSixFQUFwQjs7SUFDQSxVQUFBLE1BQUksQ0FBQ3VFLElBQUwsQ0FBVSxVQUFWOztJQUNBLFVBQUEsTUFBSSxDQUFDTixLQUFMO0lBQ0g7O0lBRUQsUUFBQSxNQUFJLENBQUNDLE1BQUwsR0FBY1UsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkYsSUFBN0IsQ0FBZDtJQUVBLGVBQU8sTUFBUDtJQUNILE9BWEQ7O0lBYUEsYUFBT0EsSUFBSSxFQUFYO0lBQ0g7SUFFRDs7Ozs7Ozs7OzZCQU1LM0UsSUFBSTtJQUFBOztJQUNMLFVBQUcsS0FBSzhFLFNBQVIsRUFBbUI7SUFDZkMsUUFBQUEsVUFBVSxDQUFDLFlBQU07SUFDYkgsVUFBQUEsTUFBTSxDQUFDSSxvQkFBUCxDQUE0QixNQUFJLENBQUNkLE1BQWpDO0lBRUEsVUFBQSxNQUFJLENBQUNFLE9BQUwsR0FBZSxLQUFmO0lBRUFyRSxVQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBYyxNQUFkLEVBQW9CSixFQUFwQjs7SUFFQSxVQUFBLE1BQUksQ0FBQ3VFLElBQUwsQ0FBVSxNQUFWO0lBQ0gsU0FSUyxDQUFWO0lBU0g7O0lBRUQsYUFBTyxJQUFQO0lBQ0g7Ozs0QkF0RmE7SUFDVixhQUFPLEtBQUtOLEtBQUwsR0FBYSxLQUFLRCxRQUF6QjtJQUNIO0lBRUQ7Ozs7Ozs7OzRCQUtnQjtJQUNaLGFBQU8sS0FBS0ksT0FBTCxLQUFpQixJQUF4QjtJQUNIO0lBRUQ7Ozs7Ozs7OzRCQUtnQjtJQUNaLGFBQU8sS0FBS0EsT0FBTCxLQUFpQixLQUF4QjtJQUNIOzs7O01BckM4Qi9COztJQ0FwQixTQUFTNEMsUUFBVCxDQUFrQjFFLEtBQWxCLEVBQXVDO0lBQUEsTUFBZDJFLE9BQWMsdUVBQUosRUFBSTtJQUNsREEsRUFBQUEsT0FBTyxHQUFHMUMsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDcEIwQyxJQUFBQSxhQUFhLEVBQUUsQ0FESztJQUVwQkMsSUFBQUEsa0JBQWtCLEVBQUU7SUFGQSxHQUFkLEVBR1BGLE9BSE8sQ0FBVjs7SUFLQSxXQUFTRyxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtJQUNyQixRQUFNQyxpQkFBaUIsR0FBR0wsT0FBTyxDQUFDRSxrQkFBUixJQUN0QkUsTUFBTSxDQUFDRSxRQUFQLEdBQWtCQyxLQUFsQixDQUF3QixFQUF4QixFQUE0QmxFLE1BQTVCLEtBQXVDLENBRDNDO0lBR0EsV0FBTyxDQUFDZ0UsaUJBQWlCLEdBQUcsR0FBSCxHQUFTLEVBQTNCLEVBQStCckUsTUFBL0IsQ0FBc0NvRSxNQUF0QyxDQUFQO0lBQ0g7O0lBRUQsV0FBUzlELE1BQVQsQ0FBZ0JrRSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7SUFDdEIsUUFBTXBFLFNBQU0sR0FBR0gsV0FBVyxDQUFDc0UsR0FBRCxDQUFYLENBQWlCbkUsTUFBaEM7O0lBRUEsUUFBR0EsU0FBTSxHQUFHb0UsR0FBWixFQUFpQjtJQUNiLFdBQUksSUFBSS9CLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRytCLEdBQUcsR0FBR3BFLFNBQXpCLEVBQWlDcUMsQ0FBQyxFQUFsQyxFQUFzQztJQUNsQzhCLFFBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0UsT0FBUCxDQUFlLEdBQWY7SUFDSDtJQUNKOztJQUVELFdBQU9GLEdBQVA7SUFDSDs7SUFFRCxTQUFPbEUsTUFBTSxDQUFDTCxPQUFPLENBQUMsQ0FBQ1osS0FBRCxDQUFELENBQVAsQ0FBaUJRLEdBQWpCLENBQXFCLFVBQUF1RSxNQUFNLEVBQUk7SUFDekMsV0FBT25FLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUNrRSxNQUFELENBQUQsQ0FBWCxDQUFzQnZFLEdBQXRCLENBQTBCLFVBQUF1RSxNQUFNLEVBQUk7SUFDL0MsYUFBT0QsT0FBTyxDQUFDQyxNQUFELENBQVAsQ0FBZ0JHLEtBQWhCLENBQXNCLEVBQXRCLENBQVA7SUFDSCxLQUZjLENBQUQsQ0FBZDtJQUdILEdBSmEsQ0FBRCxFQUlUUCxPQUFPLENBQUNDLGFBQVIsSUFBeUIsQ0FKaEIsQ0FBYjtJQUtIOztJQ2pDRCxJQUFNVSxNQUFNLEdBQUcsQ0FBQztJQUNaO0lBQ0FGLEVBQUFBLEdBQUcsRUFBRSxFQUZPO0lBR1pHLEVBQUFBLEdBQUcsRUFBRTtJQUhPLENBQUQsRUFJYjtJQUNFO0lBQ0FILEVBQUFBLEdBQUcsRUFBRSxFQUZQO0lBR0VHLEVBQUFBLEdBQUcsRUFBRTtJQUhQLENBSmEsRUFRYjtJQUNFO0lBQ0FILEVBQUFBLEdBQUcsRUFBRSxFQUZQO0lBR0VHLEVBQUFBLEdBQUcsRUFBRTtJQUhQLENBUmEsQ0FBZjs7SUFjQSxTQUFTQyxNQUFULENBQWdCeEYsS0FBaEIsRUFBdUJ1QixJQUF2QixFQUE2QjtJQUN6QixVQUFPQSxJQUFQO0lBQ0ksU0FBSyxRQUFMO0lBQ0ksYUFBT2tFLFVBQVUsQ0FBQ3pGLEtBQUQsQ0FBakI7SUFGUjs7SUFLQSxTQUFPQSxLQUFQO0lBQ0g7O0lBRUQsU0FBUzBGLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0lBQ3JCLE9BQUksSUFBTXRDLENBQVYsSUFBZWlDLE1BQWYsRUFBdUI7SUFDbkIsUUFBTU0sSUFBSSxHQUFHRCxJQUFJLENBQUNWLFFBQUwsR0FBZ0JZLFVBQWhCLENBQTJCLENBQTNCLENBQWI7O0lBRUEsUUFBR1AsTUFBTSxDQUFDakMsQ0FBRCxDQUFOLENBQVUrQixHQUFWLElBQWlCUSxJQUFqQixJQUF5Qk4sTUFBTSxDQUFDakMsQ0FBRCxDQUFOLENBQVVrQyxHQUFWLElBQWlCSyxJQUE3QyxFQUFtRDtJQUMvQyxhQUFPTixNQUFNLENBQUNqQyxDQUFELENBQWI7SUFDSDtJQUNKOztJQUVELFNBQU8sSUFBUDtJQUNIOztBQUVELElBQU8sU0FBU3lDLElBQVQsQ0FBYzlGLEtBQWQsRUFBcUI7SUFDeEIsTUFBTStGLFNBQVMsR0FBSS9GLEtBQUQsQ0FDYmlGLFFBRGEsR0FFYkMsS0FGYSxDQUVQLEVBRk8sRUFHYjFFLEdBSGEsQ0FHVCxVQUFBbUYsSUFBSTtJQUFBLFdBQUlLLFFBQVEsQ0FBQ0wsSUFBRCxFQUFPLFVBQUNNLEtBQUQsRUFBUUwsSUFBUixFQUFpQjtJQUN6QyxhQUFPLENBQUNLLEtBQUQsSUFBVUwsSUFBSSxHQUFHSyxLQUFLLENBQUNWLEdBQXZCLEdBQTZCSyxJQUFJLEdBQUcsQ0FBcEMsR0FBd0NLLEtBQUssQ0FBQ2IsR0FBckQ7SUFDSCxLQUZvQixDQUFaO0lBQUEsR0FISyxFQU1iYyxJQU5hLENBTVIsRUFOUSxDQUFsQjtJQVFBLFNBQU9WLE1BQU0sQ0FBQ08sU0FBRCxVQUFtQi9GLEtBQW5CLEVBQWI7SUFDSDs7SUFFRCxTQUFTZ0csUUFBVCxDQUFrQkwsSUFBbEIsRUFBd0JsRyxFQUF4QixFQUE0QjtJQUN4QixNQUFNd0csS0FBSyxHQUFHUCxTQUFTLENBQUNDLElBQUQsQ0FBdkI7SUFDQSxNQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsVUFBTCxDQUFnQixDQUFoQixDQUFiO0lBQ0EsU0FBT00sTUFBTSxDQUFDQyxZQUFQLENBQW9CM0csRUFBRSxDQUFDd0csS0FBRCxFQUFRTCxJQUFSLENBQXRCLENBQVA7SUFDSDs7QUFFRCxJQUFPLFNBQVNTLElBQVQsQ0FBY3JHLEtBQWQsRUFBcUI7SUFDeEIsTUFBTStGLFNBQVMsR0FBSS9GLEtBQUQsQ0FDYmlGLFFBRGEsR0FFYkMsS0FGYSxDQUVQLEVBRk8sRUFHYjFFLEdBSGEsQ0FHVCxVQUFBbUYsSUFBSTtJQUFBLFdBQUlLLFFBQVEsQ0FBQ0wsSUFBRCxFQUFPLFVBQUNNLEtBQUQsRUFBUUwsSUFBUixFQUFpQjtJQUN6QyxhQUFPLENBQUNLLEtBQUQsSUFBVUwsSUFBSSxHQUFHSyxLQUFLLENBQUNiLEdBQXZCLEdBQTZCUSxJQUFJLEdBQUcsQ0FBcEMsR0FBd0NLLEtBQUssQ0FBQ1YsR0FBckQ7SUFDSCxLQUZvQixDQUFaO0lBQUEsR0FISyxFQU1iVyxJQU5hLENBTVIsRUFOUSxDQUFsQjtJQVFBLFNBQU9WLE1BQU0sQ0FBQ08sU0FBRCxVQUFtQi9GLEtBQW5CLEVBQWI7SUFDSDs7UUMxRG9Cc0c7Ozs7O0lBRWpCLHFCQUFZdEcsS0FBWixFQUFtQitCLFVBQW5CLEVBQStCO0lBQUE7O0lBQUE7O0lBQzNCLG1GQUFNRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNoQnNELE1BQUFBLE1BQU0sRUFBRSxnQkFBQXhGLEtBQUs7SUFBQSxlQUFJQSxLQUFKO0lBQUEsT0FERztJQUVoQjZFLE1BQUFBLGtCQUFrQixFQUFFLElBRko7SUFHaEJELE1BQUFBLGFBQWEsRUFBRTtJQUhDLEtBQWQsRUFJSDdDLFVBSkcsQ0FBTjs7SUFNQSxRQUFHLENBQUMsTUFBSy9CLEtBQVQsRUFBZ0I7SUFDWixZQUFLQSxLQUFMLEdBQWFBLEtBQWI7SUFDSDs7SUFUMEI7SUFVOUI7Ozs7Ozs7Ozs7Ozs7O3NCQXVCTztJQUNKLGFBQU95QixLQUFLLENBQUMsS0FBS3pCLEtBQU4sQ0FBWjtJQUNIOzs7c0NBRVU7SUFDUCxhQUFPd0IsUUFBUSxFQUFmO0lBQ0g7OzswQkEzQlV4QixPQUFPO0lBQ2QsV0FBS3VHLE9BQUwsR0FBZXZHLEtBQWY7SUFDQSxXQUFLNEUsYUFBTCxHQUFxQjRCLElBQUksQ0FBQ2pCLEdBQUwsQ0FBUyxLQUFLWCxhQUFkLEVBQTZCNUQsTUFBTSxDQUFDaEIsS0FBRCxDQUFuQyxDQUFyQjtJQUNIOzRCQUVZO0lBQ1QsYUFBTyxLQUFLdUcsT0FBWjtJQUNIOzs7NEJBRVc7SUFDUixhQUFPLEtBQUtFLE1BQVo7SUFDSDswQkFFU3pHLE9BQU87SUFDYixXQUFLeUcsTUFBTCxHQUFjekcsS0FBZDtJQUNBLFdBQUtpQixNQUFMLEdBQWN5RCxRQUFRLENBQUMsS0FBS2MsTUFBTCxDQUFZeEYsS0FBWixDQUFELEVBQXFCO0lBQ3ZDNEUsUUFBQUEsYUFBYSxFQUFFLEtBQUtBLGFBRG1CO0lBRXZDQyxRQUFBQSxrQkFBa0IsRUFBRSxLQUFLQTtJQUZjLE9BQXJCLENBQXRCO0lBSUg7Ozs7TUFqQ2tDL0M7O0lDRXhCLFNBQVM0RSxRQUFULENBQWtCMUcsS0FBbEIsRUFBa0M7SUFDN0MsTUFBSTJHLE9BQU8sR0FBRyxLQUFkOztJQUQ2QyxvQ0FBTnRFLElBQU07SUFBTkEsSUFBQUEsSUFBTTtJQUFBOztJQUc3Q3pCLEVBQUFBLE9BQU8sQ0FBQ3lCLElBQUQsQ0FBUCxDQUFjQyxPQUFkLENBQXNCLFVBQUFzRSxHQUFHLEVBQUk7SUFDekIsUUFBSzFHLE1BQU0sQ0FBQ0YsS0FBRCxDQUFOLElBQWlCRSxNQUFNLENBQUMwRyxHQUFELENBQXhCLElBQ0N0RixRQUFRLENBQUNzRixHQUFELENBQVIsSUFBa0I1RyxLQUFLLFlBQVk0RyxHQURwQyxJQUVDbEgsVUFBVSxDQUFDa0gsR0FBRCxDQUFWLElBQW1CLENBQUMxRixPQUFPLENBQUMwRixHQUFELENBQTNCLElBQW9DQSxHQUFHLENBQUM1RyxLQUFELENBQUgsS0FBZSxJQUZwRCxJQUdDcUIsUUFBUSxDQUFDdUYsR0FBRCxDQUFSLElBQWtCLFFBQU81RyxLQUFQLE1BQWlCNEcsR0FIeEMsRUFHK0M7SUFDM0NELE1BQUFBLE9BQU8sR0FBRyxJQUFWO0lBQ0g7SUFDSixHQVBEO0lBU0EsU0FBT0EsT0FBUDtJQUNIOztBQ3BCRCwwQkFBZTtJQUNYRSxFQUFBQSxLQUFLLEVBQUUsc0NBREk7SUFFWEMsRUFBQUEsS0FBSyxFQUFFLHVDQUZJO0lBR1hDLEVBQUFBLFFBQVEsRUFBRSxpQ0FIQztJQUlYQyxFQUFBQSxJQUFJLEVBQUUsMENBSks7SUFLWEMsRUFBQUEsSUFBSSxFQUFFLCtDQUxLO0lBTVhDLEVBQUFBLE9BQU8sRUFBRSxtREFORTtJQU9YQyxFQUFBQSxTQUFTLEVBQUUsb0RBUEE7SUFRWEMsRUFBQUEsS0FBSyxFQUFFO0lBUkksQ0FBZjs7UUNPcUJDOzs7OztJQUVqQixnQkFBWXJILEtBQVosRUFBbUIrQixVQUFuQixFQUErQjtJQUFBOztJQUFBOztJQUMzQixRQUFNdUYsS0FBSyxHQUFHdkYsVUFBVSxDQUFDdUYsS0FBWCxJQUFvQixJQUFsQztJQUVBLDhFQUFNO0lBQ0ZDLE1BQUFBLFNBQVMsRUFBRSxJQURUO0lBRUZDLE1BQUFBLFNBQVMsRUFBRSxLQUZUO0lBR0ZDLE1BQUFBLGFBQWEsRUFBRUgsS0FBSyxHQUFHLENBSHJCO0lBSUZGLE1BQUFBLEtBQUssRUFBRTVELEtBQUssQ0FBQ2tFLElBQU4sQ0FBV0osS0FBWDtJQUpMLEtBQU47O0lBT0EsVUFBS25FLGFBQUwsQ0FBbUJsQixNQUFNLENBQUNDLE1BQVAsQ0FDZCxNQUFLeUYsaUJBQUwsTUFBNEIsRUFEZCxFQUNvQjVGLFVBQVUsSUFBSSxFQURsQyxDQUFuQjs7SUFJQSxVQUFLL0IsS0FBTCxHQUFhLENBQUNFLE1BQU0sQ0FBQ0YsS0FBRCxDQUFQLEdBQWlCQSxLQUFqQixHQUF5QixNQUFLNEgsWUFBTCxFQUF0QztJQWQyQjtJQWU5Qjs7OztpQ0FpQ1FDLFVBQVVwSSxJQUFJO0lBQ25CLFVBQUcsS0FBSytILFNBQVIsRUFBbUI7SUFDZixhQUFLTSxTQUFMLENBQWVELFFBQWY7SUFDSCxPQUZELE1BR0s7SUFDRCxhQUFLRSxTQUFMLENBQWVGLFFBQWY7SUFDSDs7SUFFRHJJLE1BQUFBLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLElBQWQsRUFBb0JKLEVBQXBCO0lBRUEsYUFBTyxLQUFLdUUsSUFBTCxDQUFVLFVBQVYsQ0FBUDtJQUNIOzs7OEJBRUs2RCxVQUFVcEksSUFBSTtJQUFBOztJQUNoQixXQUFLMkgsS0FBTCxDQUFXckQsS0FBWCxDQUFpQjtJQUFBLGVBQU0sTUFBSSxDQUFDTixRQUFMLENBQWNvRSxRQUFkLEVBQXdCcEksRUFBeEIsQ0FBTjtJQUFBLE9BQWpCO0lBRUEsYUFBTyxLQUFLdUUsSUFBTCxDQUFVLE9BQVYsQ0FBUDtJQUNIOzs7NkJBRUk2RCxVQUFVcEksSUFBSTtJQUNmLFdBQUsySCxLQUFMLENBQVd0RCxJQUFYLENBQWdCckUsRUFBaEI7SUFFQSxhQUFPLEtBQUt1RSxJQUFMLENBQVUsTUFBVixDQUFQO0lBQ0g7Ozs4QkFFSzZELFVBQVVwSSxJQUFJO0lBQUE7O0lBQ2hCLFdBQUsySCxLQUFMLENBQVdZLEtBQVgsQ0FBaUI7SUFBQSxlQUFNLE1BQUksQ0FBQ3ZFLFFBQUwsQ0FBY29FLFFBQWQsRUFBd0JwSSxFQUF4QixDQUFOO0lBQUEsT0FBakI7SUFFQSxhQUFPLEtBQUt1RSxJQUFMLENBQVUsT0FBVixDQUFQO0lBQ0g7Ozt3Q0FFZWhFLE9BQU87SUFBQTs7SUFDbkIsYUFBT3NHLFNBQVMsQ0FBQ29CLElBQVYsQ0FBZTFILEtBQWYsRUFBc0I7SUFDekJ3RixRQUFBQSxNQUFNLEVBQUUsZ0JBQUF4RixLQUFLO0lBQUEsaUJBQUksTUFBSSxDQUFDd0YsTUFBTCxDQUFZeEYsS0FBWixDQUFKO0lBQUE7SUFEWSxPQUF0QixDQUFQO0lBR0g7OzsrQkFFTUEsT0FBTztJQUNWLGFBQU9BLEtBQVA7SUFDSDs7O3VDQUVjO0lBRWQ7Ozs0Q0FFbUI7SUFFbkI7OzswQ0FFaUI7SUFFakI7OztrQ0FFUzZILFVBQVU7SUFFbkI7OztrQ0FFU0EsVUFBVTtJQUVuQjs7O29DQUVXQSxVQUFVO0lBRXJCOzs7aUNBRVFBLFVBQVU7SUFFbEI7OztnQ0FFT0EsVUFBVTtJQUNkLFVBQUcsS0FBS04sU0FBTCxJQUFrQixLQUFLSCxLQUFMLENBQVdhLFNBQWhDLEVBQTJDO0lBQ3ZDLGFBQUtsRSxLQUFMLENBQVc4RCxRQUFYO0lBQ0g7SUFDSjs7OzRCQXhHYztJQUNYLGFBQU8sS0FBS0ssZUFBTCxFQUFQO0lBQ0g7Ozs0QkFFVztJQUNSLGFBQU8sS0FBS3pCLE1BQVo7SUFDSDswQkFFU3pHLE9BQU87SUFDYixVQUFHLEtBQUttSSxRQUFMLElBQWlCLENBQUN6QixRQUFRLENBQUMxRyxLQUFELEVBQVEsQ0FBQyxLQUFLbUksUUFBTixDQUFSLENBQTdCLEVBQXVEO0lBQ25EOUksUUFBQUEsS0FBSyxtREFBNEMsS0FBSzhJLFFBQUwsQ0FBYy9HLElBQTFELEVBQUw7SUFDSDs7SUFFRCxXQUFLcUYsTUFBTCxHQUFjekcsS0FBSyxZQUFZc0csU0FBakIsR0FDVnRHLEtBRFUsR0FDRixLQUFLb0ksZUFBTCxDQUFxQnBJLEtBQXJCLENBRFo7SUFHQSxXQUFLZ0UsSUFBTCxDQUFVLFNBQVYsRUFBcUIsS0FBS2hFLEtBQTFCO0lBQ0g7Ozs0QkFFVztJQUNSLGFBQU8sS0FBS3FJLE1BQVo7SUFDSDswQkFFU2pCLE9BQU87SUFDYixVQUFHLENBQUNWLFFBQVEsQ0FBQ1UsS0FBRCxFQUFRNUQsS0FBUixDQUFaLEVBQTRCO0lBQ3hCbkUsUUFBQUEsS0FBSyxDQUFDaUosZUFBZSxDQUFDbEIsS0FBakIsQ0FBTDtJQUNIOztJQUVELFdBQUtpQixNQUFMLEdBQWNqQixLQUFkO0lBQ0g7Ozs7TUFoRDZCdEY7O1FDTGJ5Rzs7Ozs7Ozs7Ozs7OztrQ0FFUFYsVUFBVTtJQUNoQixXQUFLN0gsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0EsS0FBWCxHQUFtQixDQUFoQztJQUNIOzs7a0NBRVM2SCxVQUFVO0lBQ2hCLFdBQUs3SCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQSxLQUFYLEdBQW1CLENBQWhDO0lBQ0g7Ozs7TUFSZ0NxSDs7UUNDaEJtQjs7Ozs7Ozs7Ozs7OzswQ0FFQztJQUNkLGFBQU92RSxJQUFQO0lBQ0g7Ozs0Q0FFbUI7SUFDaEIsYUFBTztJQUNId0UsUUFBQUEsV0FBVyxFQUFFLElBRFY7SUFFSEMsUUFBQUEsVUFBVSxFQUFFO0lBRlQsT0FBUDtJQUlIOzs7b0NBRVdiLFVBQVU7SUFDbEIsV0FBS2MsYUFBTCxHQUFxQmQsUUFBUSxDQUFDYyxhQUE5QjtJQUNIOzs7aUNBRVFkLFVBQVVwSSxJQUFJO0lBQ25CLFdBQUtPLEtBQUwsR0FBYSxJQUFJaUUsSUFBSixFQUFiO0lBRUF6RSxNQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBYyxJQUFkLEVBQW9CSixFQUFwQjtJQUVBLGFBQU8sS0FBS3VFLElBQUwsQ0FBVSxVQUFWLENBQVA7SUFDSDs7OytCQUVNaEUsT0FBTztJQUNWLFVBQU1tRSxHQUFHLEdBQUcsQ0FBQyxLQUFLaUQsS0FBTCxDQUFXeEQsT0FBWixHQUFzQixJQUFJSyxJQUFKLEVBQXRCLEdBQWlDakUsS0FBN0M7SUFDQSxVQUFNMkksYUFBYSxHQUFHLEtBQUtBLGFBQUwsSUFBc0IzSSxLQUE1QztJQUNBLFVBQU00SSxDQUFDLEdBQUcsQ0FBQyxLQUFLcEIsU0FBTixHQUFrQnJELEdBQWxCLEdBQXdCd0UsYUFBbEM7SUFDQSxVQUFNRSxDQUFDLEdBQUcsQ0FBQyxLQUFLckIsU0FBTixHQUFrQm1CLGFBQWxCLEdBQWtDeEUsR0FBNUM7SUFFQSxhQUFPLENBQ0gsQ0FBQyxLQUFLMkUsVUFBTCxDQUFnQkYsQ0FBaEIsRUFBbUJDLENBQW5CLENBQUQsQ0FERyxFQUVILENBQUMsS0FBS0UsVUFBTCxDQUFnQkgsQ0FBaEIsRUFBbUJDLENBQW5CLENBQUQsQ0FGRyxDQUFQO0lBSUg7OzttQ0FFVUQsR0FBR0MsR0FBRztJQUNiLGFBQU9yQyxJQUFJLENBQUN3QyxLQUFMLENBQVcsS0FBS0MsZUFBTCxDQUFxQkwsQ0FBckIsRUFBd0JDLENBQXhCLElBQTZCLEVBQXhDLENBQVA7SUFDSDs7O21DQUVVRCxHQUFHQyxHQUFHO0lBQ2IsVUFBTUssWUFBWSxHQUFHLEtBQUtELGVBQUwsQ0FBcUJMLENBQXJCLEVBQXdCQyxDQUF4QixDQUFyQjtJQUVBLGFBQU9yQyxJQUFJLENBQUMyQyxHQUFMLENBQVMzQyxJQUFJLENBQUM0QyxJQUFMLENBQVVGLFlBQVksS0FBSyxFQUFqQixHQUFzQixDQUF0QixHQUEwQkEsWUFBWSxHQUFHLEVBQW5ELENBQVQsQ0FBUDtJQUNIOzs7d0NBRWVOLEdBQUdDLEdBQUc7SUFDbEIsYUFBT3JDLElBQUksQ0FBQzZDLEtBQUwsQ0FBVyxDQUFDVCxDQUFDLENBQUNVLE9BQUYsS0FBY1QsQ0FBQyxDQUFDUyxPQUFGLEVBQWYsSUFBOEIsSUFBekMsQ0FBUDtJQUNIOzs7O01BakRzQ2pDOztRQ0R0QmtDOzs7Ozs7Ozs7Ozs7OytCQUVWdkosT0FBTztJQUNWLFVBQU1tRSxHQUFHLEdBQUcsQ0FBQyxLQUFLaUQsS0FBTCxDQUFXeEQsT0FBWixHQUFzQixJQUFJSyxJQUFKLEVBQXRCLEdBQWlDakUsS0FBN0M7SUFDQSxVQUFNMkksYUFBYSxHQUFHLEtBQUtBLGFBQUwsSUFBc0IzSSxLQUE1QztJQUNBLFVBQU00SSxDQUFDLEdBQUcsQ0FBQyxLQUFLcEIsU0FBTixHQUFrQnJELEdBQWxCLEdBQXdCd0UsYUFBbEM7SUFDQSxVQUFNRSxDQUFDLEdBQUcsQ0FBQyxLQUFLckIsU0FBTixHQUFrQm1CLGFBQWxCLEdBQWtDeEUsR0FBNUM7SUFFQSxVQUFNcUYsSUFBSSxHQUFHLENBQ1QsQ0FBQyxLQUFLQyxRQUFMLENBQWNiLENBQWQsRUFBaUJDLENBQWpCLENBQUQsQ0FEUyxFQUVULENBQUMsS0FBS0MsVUFBTCxDQUFnQkYsQ0FBaEIsRUFBbUJDLENBQW5CLENBQUQsQ0FGUyxDQUFiOztJQUtBLFVBQUcsS0FBS0osV0FBUixFQUFxQjtJQUNqQmUsUUFBQUEsSUFBSSxDQUFDaEgsSUFBTCxDQUFVLENBQUMsS0FBS3VHLFVBQUwsQ0FBZ0JILENBQWhCLEVBQW1CQyxDQUFuQixDQUFELENBQVY7SUFDSDs7SUFFRCxhQUFPVyxJQUFQO0lBQ0g7OzttQ0FFVVosR0FBR0MsR0FBRztJQUNiLGFBQU9yQyxJQUFJLENBQUMyQyxHQUFMLENBQVMsNEVBQWlCUCxDQUFqQixFQUFvQkMsQ0FBcEIsSUFBeUIsRUFBbEMsQ0FBUDtJQUNIOzs7aUNBRVFELEdBQUdDLEdBQUc7SUFDWCxhQUFPckMsSUFBSSxDQUFDd0MsS0FBTCxDQUFXLEtBQUtDLGVBQUwsQ0FBcUJMLENBQXJCLEVBQXdCQyxDQUF4QixJQUE2QixFQUE3QixHQUFrQyxFQUE3QyxDQUFQO0lBQ0g7Ozs7TUExQm9DTDs7UUNBcEJrQjs7Ozs7Ozs7Ozs7OzsrQkFFVjFKLE9BQU87SUFDVixVQUFNbUUsR0FBRyxHQUFHLENBQUMsS0FBS2lELEtBQUwsQ0FBV3hELE9BQVosR0FBc0IsSUFBSUssSUFBSixFQUF0QixHQUFpQ2pFLEtBQTdDO0lBQ0EsVUFBTTJJLGFBQWEsR0FBRyxLQUFLQSxhQUFMLElBQXNCM0ksS0FBNUM7SUFDQSxVQUFNNEksQ0FBQyxHQUFHLENBQUMsS0FBS3BCLFNBQU4sR0FBa0JyRCxHQUFsQixHQUF3QndFLGFBQWxDO0lBQ0EsVUFBTUUsQ0FBQyxHQUFHLENBQUMsS0FBS3JCLFNBQU4sR0FBa0JtQixhQUFsQixHQUFrQ3hFLEdBQTVDO0lBRUEsVUFBTXFGLElBQUksR0FBRyxDQUNULENBQUMsS0FBS0csT0FBTCxDQUFhZixDQUFiLEVBQWdCQyxDQUFoQixDQUFELENBRFMsRUFFVCxDQUFDLEtBQUtZLFFBQUwsQ0FBY2IsQ0FBZCxFQUFpQkMsQ0FBakIsQ0FBRCxDQUZTLEVBR1QsQ0FBQyxLQUFLQyxVQUFMLENBQWdCRixDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBRCxDQUhTLENBQWI7O0lBTUEsVUFBRyxLQUFLSixXQUFSLEVBQXFCO0lBQ2pCZSxRQUFBQSxJQUFJLENBQUNoSCxJQUFMLENBQVUsQ0FBQyxLQUFLdUcsVUFBTCxDQUFnQkgsQ0FBaEIsRUFBbUJDLENBQW5CLENBQUQsQ0FBVjtJQUNIOztJQUVELGFBQU9XLElBQVA7SUFDSDs7O2dDQUVPWixHQUFHQyxHQUFHO0lBQ1YsYUFBT3JDLElBQUksQ0FBQ3dDLEtBQUwsQ0FBVyxLQUFLQyxlQUFMLENBQXFCTCxDQUFyQixFQUF3QkMsQ0FBeEIsSUFBNkIsRUFBN0IsR0FBa0MsRUFBbEMsR0FBdUMsRUFBbEQsQ0FBUDtJQUNIOzs7aUNBRVFELEdBQUdDLEdBQUc7SUFDWCxhQUFPckMsSUFBSSxDQUFDMkMsR0FBTCxDQUFTLHlFQUFlUCxDQUFmLEVBQWtCQyxDQUFsQixJQUF1QixFQUFoQyxDQUFQO0lBQ0g7Ozs7TUEzQm1DVTs7UUNDbkJLOzs7Ozs7Ozs7Ozs7OztJQUVqQjs7Ozs7dUNBTWU7SUFDWCxhQUFPLElBQUkzRixJQUFKLEVBQVA7SUFDSDs7OzRDQUVtQjtJQUNoQixhQUFPO0lBQ0h3RSxRQUFBQSxXQUFXLEVBQUUsSUFEVjtJQUVIQyxRQUFBQSxVQUFVLEVBQUU7SUFGVCxPQUFQO0lBSUg7OzsrQkFFTTFJLE9BQU87SUFDVixVQUFNNkosTUFBTSxHQUFHLENBQ1gsQ0FBQzdKLEtBQUssQ0FBQ3lKLFFBQU4sRUFBRCxDQURXLEVBRVgsQ0FBQ3pKLEtBQUssQ0FBQzhJLFVBQU4sRUFBRCxDQUZXLENBQWY7O0lBS0EsVUFBRyxLQUFLTCxXQUFSLEVBQXFCO0lBQ2pCb0IsUUFBQUEsTUFBTSxDQUFDckgsSUFBUCxDQUFZLENBQUN4QyxLQUFLLENBQUMrSSxVQUFOLEVBQUQsQ0FBWjtJQUNIOztJQUVELGFBQU9jLE1BQVA7SUFDSDs7O2lDQUVRaEMsVUFBVXBJLElBQUk7SUFDbkIsV0FBS08sS0FBTCxHQUFhLElBQUlpRSxJQUFKLEVBQWI7SUFFQXpFLE1BQUFBLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLElBQWQsRUFBb0JKLEVBQXBCO0lBRUEsYUFBTyxLQUFLdUUsSUFBTCxDQUFVLFVBQVYsQ0FBUDtJQUNIOzs7O01BdEM0Q3FEOztRQ0Q1QnlDOzs7Ozs7Ozs7Ozs7OzBDQUVDO0lBQ2QsYUFBTzdGLElBQVA7SUFDSDs7OzRDQUVtQjtJQUNoQixhQUFPO0lBQ0h5RSxRQUFBQSxVQUFVLEVBQUUsS0FEVDtJQUVIRCxRQUFBQSxXQUFXLEVBQUUsSUFGVjtJQUdIc0IsUUFBQUEsWUFBWSxFQUFFO0lBSFgsT0FBUDtJQUtIOzs7K0JBRU0vSixPQUFPO0lBQ1YsVUFBTWdLLEtBQUssR0FBR2hLLEtBQUssQ0FBQ3lKLFFBQU4sRUFBZDtJQUVOLFVBQU1JLE1BQU0sR0FBRyxDQUNkRyxLQUFLLEdBQUcsRUFBUixHQUFhQSxLQUFLLEdBQUcsRUFBckIsR0FBMkJBLEtBQUssS0FBSyxDQUFWLEdBQWMsRUFBZCxHQUFtQkEsS0FEaEMsRUFFZGhLLEtBQUssQ0FBQzhJLFVBQU4sRUFGYyxDQUFmO0lBS00sV0FBS21CLFFBQUwsR0FBZ0JELEtBQUssR0FBRyxFQUFSLEdBQWEsSUFBYixHQUFvQixJQUFwQzs7SUFFTixVQUFHLEtBQUt2QixXQUFSLEVBQXFCO0lBQ3BCb0IsUUFBQUEsTUFBTSxDQUFDckgsSUFBUCxDQUFZeEMsS0FBSyxDQUFDK0ksVUFBTixFQUFaO0lBQ0E7O0lBRUQsYUFBT2MsTUFBUDtJQUNHOzs7O01BN0J3Q0Q7O1FDQXhCTTs7Ozs7Ozs7Ozs7OzsrQkFFVmxLLE9BQU87SUFDVixVQUFNbUUsR0FBRyxHQUFHLENBQUMsS0FBS2lELEtBQUwsQ0FBV3hELE9BQVosR0FBc0IsSUFBSUssSUFBSixFQUF0QixHQUFpQ2pFLEtBQTdDO0lBQ0EsVUFBTTJJLGFBQWEsR0FBRyxLQUFLQSxhQUFMLElBQXNCM0ksS0FBNUM7SUFDQSxVQUFNNEksQ0FBQyxHQUFHLENBQUMsS0FBS3BCLFNBQU4sR0FBa0JyRCxHQUFsQixHQUF3QndFLGFBQWxDO0lBQ0EsVUFBTUUsQ0FBQyxHQUFHLENBQUMsS0FBS3JCLFNBQU4sR0FBa0JtQixhQUFsQixHQUFrQ3hFLEdBQTVDO0lBRUEsVUFBTXFGLElBQUksR0FBRyxDQUNULENBQUMsS0FBS1csUUFBTCxDQUFjdkIsQ0FBZCxFQUFpQkMsQ0FBakIsQ0FBRCxDQURTLEVBRVQsQ0FBQyxLQUFLYyxPQUFMLENBQWFmLENBQWIsRUFBZ0JDLENBQWhCLENBQUQsQ0FGUyxFQUdULENBQUMsS0FBS1ksUUFBTCxDQUFjYixDQUFkLEVBQWlCQyxDQUFqQixDQUFELENBSFMsRUFJVCxDQUFDLEtBQUtDLFVBQUwsQ0FBZ0JGLENBQWhCLEVBQW1CQyxDQUFuQixDQUFELENBSlMsQ0FBYjs7SUFPQSxVQUFHLEtBQUtKLFdBQVIsRUFBcUI7SUFDakJlLFFBQUFBLElBQUksQ0FBQ2hILElBQUwsQ0FBVSxDQUFDLEtBQUt1RyxVQUFMLENBQWdCSCxDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBRCxDQUFWO0lBQ0g7O0lBRUQsYUFBT1csSUFBUDtJQUNIOzs7aUNBRVFaLEdBQUdDLEdBQUc7SUFDWCxhQUFPckMsSUFBSSxDQUFDd0MsS0FBTCxDQUFXLEtBQUtDLGVBQUwsQ0FBcUJMLENBQXJCLEVBQXdCQyxDQUF4QixJQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUF1QyxFQUF2QyxHQUE0QyxDQUF2RCxDQUFQO0lBQ0g7OztnQ0FFT0QsR0FBR0MsR0FBRztJQUNWLGFBQU9yQyxJQUFJLENBQUMyQyxHQUFMLENBQVMseUVBQWNQLENBQWQsRUFBaUJDLENBQWpCLElBQXNCLENBQS9CLENBQVA7SUFDSDs7OztNQTVCb0NhOztRQ0FwQlU7Ozs7Ozs7Ozs7Ozs7K0JBRVZwSyxPQUFPO0lBQ1YsVUFBTW1FLEdBQUcsR0FBRyxDQUFDLEtBQUtpRCxLQUFMLENBQVd4RCxPQUFaLEdBQXNCLElBQUlLLElBQUosRUFBdEIsR0FBaUNqRSxLQUE3QztJQUNBLFVBQU0ySSxhQUFhLEdBQUcsS0FBS0EsYUFBTCxJQUFzQjNJLEtBQTVDO0lBQ0EsVUFBTTRJLENBQUMsR0FBRyxDQUFDLEtBQUtwQixTQUFOLEdBQWtCckQsR0FBbEIsR0FBd0J3RSxhQUFsQztJQUNBLFVBQU1FLENBQUMsR0FBRyxDQUFDLEtBQUtyQixTQUFOLEdBQWtCbUIsYUFBbEIsR0FBa0N4RSxHQUE1QztJQUVBLFVBQU1xRixJQUFJLEdBQUcsQ0FDVCxDQUFDLEtBQUthLFFBQUwsQ0FBY3pCLENBQWQsRUFBaUJDLENBQWpCLENBQUQsQ0FEUyxFQUVULENBQUMsS0FBS3NCLFFBQUwsQ0FBY3ZCLENBQWQsRUFBaUJDLENBQWpCLENBQUQsQ0FGUyxFQUdULENBQUMsS0FBS2MsT0FBTCxDQUFhZixDQUFiLEVBQWdCQyxDQUFoQixDQUFELENBSFMsRUFJVCxDQUFDLEtBQUtZLFFBQUwsQ0FBY2IsQ0FBZCxFQUFpQkMsQ0FBakIsQ0FBRCxDQUpTLEVBS1QsQ0FBQyxLQUFLQyxVQUFMLENBQWdCRixDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBRCxDQUxTLENBQWI7O0lBUUEsVUFBRyxLQUFLSixXQUFSLEVBQXFCO0lBQ2pCZSxRQUFBQSxJQUFJLENBQUNoSCxJQUFMLENBQVUsQ0FBQyxLQUFLdUcsVUFBTCxDQUFnQkgsQ0FBaEIsRUFBbUJDLENBQW5CLENBQUQsQ0FBVjtJQUNIOztJQUVELGFBQU9XLElBQVA7SUFDSDs7O2lDQUVRWixHQUFHQyxHQUFHO0lBQ1gsYUFBT3JDLElBQUksQ0FBQ3dDLEtBQUwsQ0FBV3hDLElBQUksQ0FBQ2pCLEdBQUwsQ0FBUyxDQUFULEVBQVksS0FBSzBELGVBQUwsQ0FBcUJMLENBQXJCLEVBQXdCQyxDQUF4QixJQUE2QixFQUE3QixHQUFrQyxFQUFsQyxHQUF1QyxFQUF2QyxHQUE0QyxDQUE1QyxHQUFnRCxFQUE1RCxDQUFYLENBQVA7SUFDSDs7O2lDQUVRRCxHQUFHQyxHQUFHO0lBQ1gsYUFBT3JDLElBQUksQ0FBQzJDLEdBQUwsQ0FBUywwRUFBZVAsQ0FBZixFQUFrQkMsQ0FBbEIsSUFBdUIsRUFBaEMsQ0FBUDtJQUNIOzs7O01BN0JvQ3FCOzs7Ozs7Ozs7Ozs7Ozs7SUNBMUIscUJBQVNsSyxLQUFULEVBQWdCc0ssSUFBaEIsRUFBc0I7SUFDakMsU0FBTyxDQUFDakosUUFBUSxDQUFDaUosSUFBSSxJQUFJLE9BQVQsQ0FBUixHQUE0QnZELFFBQVEsQ0FBQ3VELElBQUQsQ0FBcEMsR0FBNkNBLElBQTlDLEVBQW9EQyxVQUFwRCxDQUErRHZLLEtBQS9ELEtBQXlFQSxLQUFoRjtJQUNIOztJQ01NLFNBQVN3SyxJQUFULENBQWNDLEVBQWQsRUFBa0JDLFFBQWxCLEVBQTRCO0lBQ2xDLE1BQUdBLFFBQVEsQ0FBQ0MsVUFBWixFQUF3QjtJQUN2QkQsSUFBQUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxZQUFwQixDQUFpQ0gsRUFBakMsRUFBcUNDLFFBQXJDO0lBRUEsV0FBT0QsRUFBUDtJQUNBOztJQUVELFNBQU9DLFFBQVA7SUFDQTtBQUVELElBQU8sU0FBU3ZILGFBQVQsQ0FBdUJzSCxFQUF2QixFQUEyQjFJLFVBQTNCLEVBQXVDO0lBQzdDLE1BQUdULFFBQVEsQ0FBQ1MsVUFBRCxDQUFYLEVBQXlCO0lBQ3hCLFNBQUksSUFBTXNCLENBQVYsSUFBZXRCLFVBQWYsRUFBMkI7SUFDMUIwSSxNQUFBQSxFQUFFLENBQUN6SSxZQUFILENBQWdCcUIsQ0FBaEIsRUFBbUJ0QixVQUFVLENBQUNzQixDQUFELENBQTdCO0lBQ0E7SUFDRDs7SUFFRCxTQUFPb0gsRUFBUDtJQUNBO0FBRUQsSUFBTyxTQUFTSSxjQUFULENBQXdCSixFQUF4QixFQUE0QkssUUFBNUIsRUFBc0M7SUFDNUMsTUFBRy9KLE9BQU8sQ0FBQytKLFFBQUQsQ0FBVixFQUFzQjtJQUNyQkEsSUFBQUEsUUFBUSxDQUFDckksTUFBVCxDQUFnQjFDLElBQWhCLEVBQXNCdUMsT0FBdEIsQ0FBOEIsVUFBQXlJLEtBQUssRUFBSTtJQUN0QyxVQUFHQSxLQUFLLFlBQVlDLFdBQXBCLEVBQWlDO0lBQ2hDUCxRQUFBQSxFQUFFLENBQUNRLFdBQUgsQ0FBZUYsS0FBZjtJQUNBO0lBQ0QsS0FKRDtJQUtBOztJQUVELFNBQU9OLEVBQVA7SUFDQTtBQUVELElBQU8sU0FBU1MsYUFBVCxDQUF1QlQsRUFBdkIsRUFBMkJLLFFBQTNCLEVBQXFDL0ksVUFBckMsRUFBaUQ7SUFDdkQsTUFBRyxFQUFFMEksRUFBRSxZQUFZTyxXQUFoQixDQUFILEVBQWlDO0lBQ2hDUCxJQUFBQSxFQUFFLEdBQUdVLFFBQVEsQ0FBQ0QsYUFBVCxDQUF1QlQsRUFBdkIsQ0FBTDtJQUNBOztJQUVEdEgsRUFBQUEsYUFBYSxDQUFDc0gsRUFBRCxFQUFLbkosUUFBUSxDQUFDd0osUUFBRCxDQUFSLEdBQXFCQSxRQUFyQixHQUFnQy9JLFVBQXJDLENBQWI7O0lBRUEsTUFBRyxDQUFDVCxRQUFRLENBQUN3SixRQUFELENBQVQsSUFBdUIsQ0FBQy9KLE9BQU8sQ0FBQytKLFFBQUQsQ0FBbEMsRUFBOEM7SUFDN0NMLElBQUFBLEVBQUUsQ0FBQ1csU0FBSCxHQUFlTixRQUFmO0lBQ0EsR0FGRCxNQUdLO0lBQ0pELElBQUFBLGNBQWMsQ0FBQ0osRUFBRCxFQUFLSyxRQUFMLENBQWQ7SUFDQTs7SUFFRCxTQUFPTCxFQUFQO0lBQ0E7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNwRHFCWTs7Ozs7SUFFakIsd0JBQVl0SixVQUFaLEVBQXdCO0lBQUE7O0lBQUE7O0lBQ3BCLHNGQUFNRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNoQm9KLE1BQUFBLE1BQU0sRUFBRTtJQURRLEtBQWQsRUFFSHZKLFVBRkcsQ0FBTjs7SUFJQSxRQUFHLENBQUMsTUFBSytFLEtBQVQsRUFBZ0I7SUFDWnpILE1BQUFBLEtBQUssV0FBSSxNQUFLK0IsSUFBVCxxQ0FBTDtJQUNIOztJQUVELFFBQUcsQ0FBQyxNQUFLMkYsUUFBVCxFQUFtQjtJQUNmMUgsTUFBQUEsS0FBSyxXQUFJLE1BQUsrQixJQUFULHdDQUFMO0lBQ0g7O0lBRVAsUUFBRyxDQUFDLE1BQUswRixLQUFMLENBQVcsTUFBSzFGLElBQWhCLENBQUosRUFBMkI7SUFDakIsWUFBTSxJQUFJN0IsS0FBSixXQUNDLE1BQUs2QixJQUROLHFEQUFOO0lBR0g7O0lBakJtQjtJQWtCdkI7Ozs7a0NBOENTZ0IsS0FBSztJQUNYLGFBQU9tSixVQUFTLENBQUNuSixHQUFELEVBQU0sS0FBSzJFLFFBQVgsQ0FBaEI7SUFDSDs7OzBCQUVDM0UsS0FBSztJQUNILGFBQU8sS0FBS21KLFNBQUwsQ0FBZW5KLEdBQWYsQ0FBUDtJQUNIOzs7aUNBRUs7SUFDRixVQUFNcUksRUFBRSxHQUFHUyxhQUFhLENBQUMsS0FBRCxFQUFRO0lBQzVCTSxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsU0FBTCxLQUFtQixZQUFuQixHQUFrQyxLQUFLQSxTQUF2QyxHQUFtRCxnQkFBZ0IsS0FBS0E7SUFEbkQsT0FBUixDQUF4QjtJQUlBLFdBQUszRSxLQUFMLENBQVcsS0FBSzFGLElBQWhCLEVBQXNCcUosRUFBdEIsRUFBMEIsSUFBMUI7O0lBRUEsVUFBRyxDQUFDLEtBQUtBLEVBQVQsRUFBYTtJQUNULGFBQUtBLEVBQUwsR0FBVUEsRUFBVjtJQUNILE9BRkQsTUFHSyxJQUFHLEtBQUtBLEVBQUwsQ0FBUVcsU0FBUixLQUFzQlgsRUFBRSxDQUFDVyxTQUE1QixFQUF1QztJQUN4QyxhQUFLWCxFQUFMLEdBQVVELElBQUksQ0FBQ0MsRUFBRCxFQUFLLEtBQUtBLEVBQVYsQ0FBZDtJQUNIOztJQUVELGFBQU8sS0FBS0EsRUFBWjtJQUNOOzs7OEJBRVFhLFFBQVFsTCxRQUFRO0lBQ2xCLFdBQUtzTCxNQUFMO0lBQ0EsV0FBS0osTUFBTCxHQUFjQSxNQUFkOztJQUVBLFVBQUcsQ0FBQ2xMLE1BQUosRUFBWTtJQUNSLGFBQUtrTCxNQUFMLENBQVlMLFdBQVosQ0FBd0IsS0FBS1IsRUFBN0I7SUFDSCxPQUZELE1BR0s7SUFDRCxhQUFLYSxNQUFMLENBQVlLLFlBQVosQ0FBeUIsS0FBS2xCLEVBQTlCLEVBQWtDckssTUFBbEM7SUFDSDs7SUFFRCxhQUFPLEtBQUtxSyxFQUFaO0lBQ0g7Ozs0QkFqRlE7SUFDTCxhQUFPLEtBQUttQixHQUFaO0lBQ0g7MEJBRU01TCxPQUFPO0lBQ1YsVUFBRyxDQUFDMEcsUUFBUSxDQUFDMUcsS0FBRCxFQUFRLElBQVIsRUFBY2dMLFdBQWQsQ0FBWixFQUF3QztJQUNwQzNMLFFBQUFBLEtBQUssQ0FBQ2lKLGVBQWUsQ0FBQ3BCLE9BQWpCLENBQUw7SUFDSDs7SUFFRCxXQUFLMEUsR0FBTCxHQUFXNUwsS0FBWDtJQUNIOzs7NEJBRVk7SUFDVCxhQUFPLEtBQUs2TCxPQUFaO0lBQ0g7MEJBRVVQLFFBQVE7SUFDZixXQUFLTyxPQUFMLEdBQWVQLE1BQWY7SUFDSDs7OzRCQUVXO0lBQ1IsYUFBTyxLQUFLUSxNQUFaO0lBQ0g7MEJBRVM5TCxPQUFPO0lBQ2IsVUFBRyxDQUFDMEcsUUFBUSxDQUFDMUcsS0FBRCxFQUFRLFFBQVIsQ0FBWixFQUErQjtJQUMzQlgsUUFBQUEsS0FBSyxDQUFDaUosZUFBZSxDQUFDdEksS0FBakIsQ0FBTDtJQUNIOztJQUVELFdBQUs4TCxNQUFMLEdBQWM5TCxLQUFkO0lBQ0g7Ozs0QkFFYztJQUNYLGFBQU8sS0FBSytMLFNBQVo7SUFDSDswQkFFWS9MLE9BQU87SUFDaEIsVUFBRyxDQUFDMEcsUUFBUSxDQUFDMUcsS0FBRCxFQUFRLFFBQVIsQ0FBWixFQUErQjtJQUMzQlgsUUFBQUEsS0FBSyxDQUFDaUosZUFBZSxDQUFDdkIsUUFBakIsQ0FBTDtJQUNIOztJQUVELFdBQUtnRixTQUFMLEdBQWlCL0wsS0FBakI7SUFDSDs7OztNQWhFcUM4Qjs7UUNMckJrSzs7Ozs7Ozs7Ozs7O01BQWdCWDs7UUNDaEJZOzs7OztJQUVqQixvQkFBWWpNLEtBQVosRUFBbUIrQixVQUFuQixFQUErQjtJQUFBOztJQUFBLGlGQUNyQkUsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDaEJsQyxNQUFBQSxLQUFLLEVBQUVBO0lBRFMsS0FBZCxFQUVIc0IsUUFBUSxDQUFDdEIsS0FBRCxDQUFSLEdBQWtCQSxLQUFsQixHQUEwQixJQUZ2QixFQUU2QitCLFVBRjdCLENBRHFCO0lBSTlCOzs7TUFOaUNzSjs7UUNHakJhOzs7OztJQUVqQixnQkFBWWxNLEtBQVosRUFBbUIrQixVQUFuQixFQUErQjtJQUFBOztJQUFBLDZFQUNyQkUsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDaEJsQyxNQUFBQSxLQUFLLEVBQUVBLEtBRFM7SUFFaEI2RyxNQUFBQSxLQUFLLEVBQUU7SUFGUyxLQUFkLEVBR0h2RixRQUFRLENBQUN0QixLQUFELENBQVIsR0FBa0JBLEtBQWxCLEdBQTBCLElBSHZCLEVBRzZCK0IsVUFIN0IsQ0FEcUI7SUFLOUI7Ozs7dUNBa0JjL0IsT0FBTytCLFlBQVk7SUFDOUIsVUFBTW9LLElBQUksR0FBRyxJQUFJRixRQUFKLENBQWFqTSxLQUFiLEVBQW9CaUMsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDM0M0RSxRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FEK0I7SUFFM0NDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQTtJQUY0QixPQUFkLEVBRzlCaEYsVUFIOEIsQ0FBcEIsQ0FBYjtJQUtBLFdBQUtxSyxNQUFMLENBQVk1SixJQUFaLENBQWlCMkosSUFBakI7SUFFQSxhQUFPQSxJQUFQO0lBQ0g7Ozs0QkF6Qlc7SUFDUixhQUFPLEtBQUsxRixNQUFaO0lBQ0g7MEJBRVN6RyxPQUFPO0lBQ2IsV0FBS3lHLE1BQUwsR0FBY3pHLEtBQWQ7SUFDSDs7OzRCQUVXO0lBQ1IsYUFBTyxLQUFLb00sTUFBWjtJQUNIOzBCQUVTcE0sT0FBTztJQUNiLFdBQUtvTSxNQUFMLEdBQWNwTSxLQUFkO0lBQ0g7Ozs7TUF2QjZCcUw7O1FDSGJnQjs7Ozs7SUFFakIsaUJBQVl4RixLQUFaLEVBQW1COUUsVUFBbkIsRUFBK0I7SUFBQTs7SUFBQSw4RUFDckJFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCMkUsTUFBQUEsS0FBSyxFQUFFQTtJQURTLEtBQWQsRUFFSHZGLFFBQVEsQ0FBQ3VGLEtBQUQsQ0FBUixHQUFrQkEsS0FBbEIsR0FBMEIsSUFGdkIsRUFFNkI5RSxVQUY3QixDQURxQjtJQUk5Qjs7O01BTjhCc0o7O1FDQWRpQjs7Ozs7SUFFakIsaUJBQVlDLEtBQVosRUFBbUJ4SyxVQUFuQixFQUErQjtJQUFBOztJQUFBLDhFQUNyQkUsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDaEJxSyxNQUFBQSxLQUFLLEVBQUVBO0lBRFMsS0FBZCxFQUVIakwsUUFBUSxDQUFDaUwsS0FBRCxDQUFSLEdBQWtCQSxLQUFsQixHQUEwQixJQUZ2QixFQUU2QnhLLFVBRjdCLENBRHFCO0lBSTlCOzs7TUFOOEJzSjs7SUNEcEIsb0JBQVNaLEVBQVQsRUFBYTVDLFFBQWIsRUFBdUI7SUFDbENnRCxFQUFBQSxjQUFjLENBQUNKLEVBQUQsRUFBSyxDQUNmUyxhQUFhLENBQUMsS0FBRCxFQUFRO0lBQUNNLElBQUFBLEtBQUssRUFBRTtJQUFSLEdBQVIsQ0FERSxFQUVmTixhQUFhLENBQUMsS0FBRCxFQUFRO0lBQUNNLElBQUFBLEtBQUssRUFBRTtJQUFSLEdBQVIsQ0FGRSxDQUFMLENBQWQ7SUFJSDs7SUNKRCxTQUFTVCxLQUFULENBQWVOLEVBQWYsRUFBbUIrQixLQUFuQixFQUEwQjtJQUN0QixTQUFPL0IsRUFBRSxHQUFJQSxFQUFFLENBQUNnQyxVQUFILEdBQWdCaEMsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjRCxLQUFkLENBQWhCLEdBQXVDL0IsRUFBRSxDQUFDK0IsS0FBRCxDQUE3QyxHQUF3RCxJQUFqRTtJQUNIOztJQUVELFNBQVM3RyxJQUFULENBQWM4RSxFQUFkLEVBQWtCO0lBQ2QsU0FBT0EsRUFBRSxHQUFHQSxFQUFFLENBQUNpQyxhQUFILENBQWlCLHdDQUFqQixFQUEyRHRCLFNBQTlELEdBQTBFLElBQW5GO0lBQ0g7O0FBRUQsSUFBZSxvQkFBU1gsRUFBVCxFQUFhNUMsUUFBYixFQUF1QjtJQUNsQyxNQUFNOEUsS0FBSyxHQUFHOUUsUUFBUSxDQUFDN0gsS0FBVCxDQUFlaUIsTUFBZixDQUFzQlQsR0FBdEIsQ0FBMEIsVUFBQ29NLEtBQUQsRUFBUXJNLENBQVIsRUFBYztJQUNsRCxRQUFNc00sT0FBTyxHQUFHOUIsS0FBSyxDQUFDbEQsUUFBUSxDQUFDNEMsRUFBVCxHQUFjNUMsUUFBUSxDQUFDNEMsRUFBVCxDQUFZcUMsZ0JBQVosQ0FBNkIsbUJBQTdCLENBQWQsR0FBa0UsSUFBbkUsRUFBeUV2TSxDQUF6RSxDQUFyQjtJQUVBLFFBQU13TSxLQUFLLEdBQUdILEtBQUssQ0FBQ3BNLEdBQU4sQ0FBVSxVQUFDUixLQUFELEVBQVFVLENBQVIsRUFBYztJQUNsQyxVQUFNc00sTUFBTSxHQUFHakMsS0FBSyxDQUFDOEIsT0FBTyxHQUFHQSxPQUFPLENBQUNDLGdCQUFSLENBQXlCLGtCQUF6QixDQUFILEdBQWtELElBQTFELEVBQWdFcE0sQ0FBaEUsQ0FBcEI7SUFDQSxVQUFNdU0sU0FBUyxHQUFHdEgsSUFBSSxDQUFDcUgsTUFBRCxDQUF0QjtJQUVBLGFBQU9uRixRQUFRLENBQUNxRixVQUFULENBQW9CbE4sS0FBcEIsRUFBMkI7SUFDOUJtTixRQUFBQSxRQUFRLEVBQUVGLFNBRG9CO0lBRTlCekYsUUFBQUEsU0FBUyxFQUFFSyxRQUFRLENBQUNMLFNBRlU7SUFHOUJDLFFBQUFBLGFBQWEsRUFBRUksUUFBUSxDQUFDWixJQUFULENBQWNRLGFBQWQsSUFBK0JJLFFBQVEsQ0FBQ1osSUFBVCxDQUFjSztJQUg5QixPQUEzQixDQUFQO0lBS0gsS0FUYSxDQUFkO0lBV0EsV0FBT08sUUFBUSxDQUFDdUYsV0FBVCxDQUFxQkwsS0FBckIsQ0FBUDtJQUNILEdBZmEsQ0FBZDtJQWlCQSxNQUFNTSxLQUFLLEdBQUdWLEtBQUssQ0FBQ25NLEdBQU4sQ0FBVSxVQUFBb00sS0FBSyxFQUFJO0lBQzdCLFdBQU9BLEtBQUssQ0FBQ2xCLE1BQU4sRUFBUDtJQUNILEdBRmEsQ0FBZDtJQUlBYixFQUFBQSxjQUFjLENBQUNKLEVBQUQsRUFBSzRDLEtBQUwsQ0FBZDtJQUNIOztJQ2hDYyxrQkFBUzVDLEVBQVQsRUFBYTVDLFFBQWIsRUFBdUI7SUFDbEMsTUFBTWhCLEtBQUssR0FBR2dCLFFBQVEsQ0FBQ2hCLEtBQVQsQ0FBZXJHLEdBQWYsQ0FBbUIsVUFBQTJMLElBQUksRUFBSTtJQUNyQyxXQUFPQSxJQUFJLENBQUNULE1BQUwsRUFBUDtJQUNILEdBRmEsQ0FBZDtJQUlBYixFQUFBQSxjQUFjLENBQUNKLEVBQUQsRUFBSzVELEtBQUwsQ0FBZDtJQUNIOztJQ05jLGtCQUFTNEQsRUFBVCxFQUFhNUMsUUFBYixFQUF1QjtJQUNsQzRDLEVBQUFBLEVBQUUsQ0FBQ1csU0FBSCxHQUFldkQsUUFBUSxDQUFDeUYsQ0FBVCxDQUFXekYsUUFBUSxDQUFDMEUsS0FBcEIsQ0FBZjtJQUNIOztJQ0FjLGlCQUFTOUIsRUFBVCxFQUFhNUMsUUFBYixFQUF1QjtJQUNsQyxNQUFNMEYsV0FBVyxHQUFHMUYsUUFBUSxDQUFDc0YsUUFBVCxLQUNoQixDQUFDdEYsUUFBUSxDQUFDTCxTQUFWLEdBQXNCbkIsSUFBSSxDQUFDd0IsUUFBUSxDQUFDN0gsS0FBVixDQUExQixHQUE2QzhGLElBQUksQ0FBQytCLFFBQVEsQ0FBQzdILEtBQVYsQ0FEakMsQ0FBcEI7O0lBSUEsTUFBSTZILFFBQVEsQ0FBQ3NGLFFBQVQsSUFBcUJ0RixRQUFRLENBQUNzRixRQUFULEtBQXNCdEYsUUFBUSxDQUFDN0gsS0FBeEQsRUFBK0Q7SUFDM0R5SyxJQUFBQSxFQUFFLENBQUMrQyxTQUFILENBQWFDLEdBQWIsQ0FBaUIsTUFBakI7SUFDSDs7SUFFRGhELEVBQUFBLEVBQUUsQ0FBQ2lELEtBQUgsQ0FBU0MsY0FBVCxhQUE2QjlGLFFBQVEsQ0FBQ0osYUFBVCxHQUF5QixDQUF0RDtJQUNBZ0QsRUFBQUEsRUFBRSxDQUFDaUQsS0FBSCxDQUFTRSxpQkFBVCxhQUFnQy9GLFFBQVEsQ0FBQ0osYUFBVCxHQUF5QixDQUF6RDtJQUVBSSxFQUFBQSxRQUFRLENBQUNoQixLQUFULEdBQWlCLENBQ2JnQixRQUFRLENBQUNnRyxjQUFULENBQXdCaEcsUUFBUSxDQUFDN0gsS0FBakMsRUFBd0M7SUFDcEM4TixJQUFBQSxNQUFNLEVBQUU7SUFENEIsR0FBeEMsQ0FEYSxFQUliakcsUUFBUSxDQUFDZ0csY0FBVCxDQUF3Qk4sV0FBeEIsRUFBcUM7SUFDakNPLElBQUFBLE1BQU0sRUFBRTtJQUR5QixHQUFyQyxDQUphLENBQWpCO0lBU0FqRCxFQUFBQSxjQUFjLENBQUNKLEVBQUQsRUFBSzVDLFFBQVEsQ0FBQ2hCLEtBQVQsQ0FBZXJHLEdBQWYsQ0FBbUIsVUFBQTJMLElBQUk7SUFBQSxXQUFJQSxJQUFJLENBQUNULE1BQUwsRUFBSjtJQUFBLEdBQXZCLENBQUwsQ0FBZDtJQUNIOztJQ3hCYyxxQkFBU2pCLEVBQVQsRUFBYTVDLFFBQWIsRUFBdUI7SUFDbEMsTUFBTTRELFNBQVMsR0FBRzVELFFBQVEsQ0FBQ2lHLE1BQVQsS0FBb0IsSUFBcEIsR0FBMkIsUUFBM0IsR0FDZGpHLFFBQVEsQ0FBQ2lHLE1BQVQsS0FBb0IsS0FBcEIsR0FBNEIsUUFBNUIsR0FBdUMsSUFEM0M7SUFJQXJELEVBQUFBLEVBQUUsQ0FBQytDLFNBQUgsQ0FBYUMsR0FBYixDQUFpQmhDLFNBQWpCO0lBRUFaLEVBQUFBLGNBQWMsQ0FBQ0osRUFBRCxFQUFLLENBQ2ZTLGFBQWEsQ0FBQyxLQUFELEVBQVEsQ0FDakJBLGFBQWEsQ0FBQyxLQUFELEVBQVFyRCxRQUFRLENBQUM3SCxLQUFqQixFQUF3QjtJQUFDd0wsSUFBQUEsS0FBSyxFQUFFO0lBQVIsR0FBeEIsQ0FESSxFQUVqQk4sYUFBYSxDQUFDLEtBQUQsRUFBUXJELFFBQVEsQ0FBQzdILEtBQWpCLEVBQXdCO0lBQUN3TCxJQUFBQSxLQUFLLEVBQUU7SUFBUixHQUF4QixDQUZJLENBQVIsRUFHVjtJQUFDQSxJQUFBQSxLQUFLLEVBQUU7SUFBUixHQUhVLENBREUsQ0FBTCxDQUFkO0lBTUg7O0lDZmMsdUJBQVNmLEVBQVQsRUFBYTVDLFFBQWIsRUFBdUI7SUFDbENBLEVBQUFBLFFBQVEsQ0FBQ2tHLGFBQVQsR0FBeUJDLEtBQXpCLENBQStCdkQsRUFBL0IsRUFBbUNBLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQW5DO0lBQ0E1RSxFQUFBQSxRQUFRLENBQUNrRyxhQUFULEdBQXlCQyxLQUF6QixDQUErQnZELEVBQS9CLEVBQW1DQSxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQzs7SUFFQSxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosSUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7SUFDSDs7SUFFRCxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN5QixVQUFqQixFQUE2QjtJQUN6QmIsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixNQUFyQixFQUE2QkQsS0FBN0IsQ0FBbUN2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0Qzs7SUFFQSxRQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosTUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0QztJQUNIO0lBQ0o7SUFDSjs7SUNqQmMsd0JBQVNoQyxFQUFULEVBQWE1QyxRQUFiLEVBQXVCO0lBQ2xDQSxFQUFBQSxRQUFRLENBQUNrRyxhQUFULEdBQXlCQyxLQUF6QixDQUErQnZELEVBQS9CLEVBQW1DQSxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQzs7SUFFQSxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosSUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7SUFDSDs7SUFFRCxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN5QixVQUFqQixFQUE2QjtJQUN6QmIsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0Qzs7SUFFQSxRQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosTUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0QztJQUNIO0lBQ0o7SUFDSjs7SUNmYywwQkFBU2hDLEVBQVQsRUFBYTVDLFFBQWIsRUFBdUI7SUFDbENBLEVBQUFBLFFBQVEsQ0FBQ2tHLGFBQVQsR0FBeUJDLEtBQXpCLENBQStCdkQsRUFBL0IsRUFBbUNBLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQW5DOztJQUVBLE1BQUc1RSxRQUFRLENBQUNaLElBQVQsQ0FBY3lCLFVBQWpCLEVBQTZCO0lBQ3pCYixJQUFBQSxRQUFRLENBQUNvRyxXQUFULENBQXFCLFNBQXJCLEVBQWdDRCxLQUFoQyxDQUFzQ3ZELEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQXRDOztJQUVBLFFBQUc1RSxRQUFRLENBQUNaLElBQVQsQ0FBY3dCLFdBQWpCLEVBQThCO0lBQzFCWixNQUFBQSxRQUFRLENBQUNvRyxXQUFULENBQXFCLFNBQXJCLEVBQWdDRCxLQUFoQyxDQUFzQ3ZELEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQXRDO0lBQ0g7SUFDSjtJQUNKOztJQ1ZjLGdDQUFTaEMsRUFBVCxFQUFhNUMsUUFBYixFQUF1QjtJQUNsQ0EsRUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7O0lBRUEsTUFBRzVFLFFBQVEsQ0FBQ1osSUFBVCxDQUFjd0IsV0FBakIsRUFBOEI7SUFDMUJaLElBQUFBLFFBQVEsQ0FBQ2tHLGFBQVQsR0FBeUJDLEtBQXpCLENBQStCdkQsRUFBL0IsRUFBbUNBLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQW5DO0lBQ0g7O0lBRUQsTUFBRzVFLFFBQVEsQ0FBQ1osSUFBVCxDQUFjeUIsVUFBakIsRUFBNkI7SUFDekJiLElBQUFBLFFBQVEsQ0FBQ29HLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEJELEtBQTlCLENBQW9DdkQsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBcEM7SUFDQTVFLElBQUFBLFFBQVEsQ0FBQ29HLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0NELEtBQWhDLENBQXNDdkQsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBdEM7O0lBRUEsUUFBRzVFLFFBQVEsQ0FBQ1osSUFBVCxDQUFjd0IsV0FBakIsRUFBOEI7SUFDMUJaLE1BQUFBLFFBQVEsQ0FBQ29HLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0NELEtBQWhDLENBQXNDdkQsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBdEM7SUFDSDtJQUNKO0lBRUo7O0lDZGMsNEJBQVNoQyxFQUFULEVBQWE1QyxRQUFiLEVBQXVCO0lBQ2xDK0IsRUFBQUEscUJBQW1CLENBQUNhLEVBQUQsRUFBSzVDLFFBQUwsQ0FBbkI7O0lBRUEsTUFBR0EsUUFBUSxDQUFDWixJQUFULENBQWM4QyxZQUFkLElBQThCbEMsUUFBUSxDQUFDWixJQUFULENBQWNnRCxRQUEvQyxFQUF5RDtJQUNyRCxRQUFNc0MsS0FBSyxHQUFHMUUsUUFBUSxDQUFDb0csV0FBVCxDQUFxQnBHLFFBQVEsQ0FBQ1osSUFBVCxDQUFjZ0QsUUFBbkMsQ0FBZDtJQUNBLFFBQU1xQixNQUFNLEdBQUdiLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBY2hDLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBY3pMLE1BQWQsR0FBdUIsQ0FBckMsQ0FBZjtJQUVBdUwsSUFBQUEsS0FBSyxDQUFDeUIsS0FBTixDQUFZMUMsTUFBWixFQUFvQmtDLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxxQkFBbEM7SUFDSDtJQUNKOztJQ1hjLHdCQUFTaEQsRUFBVCxFQUFhNUMsUUFBYixFQUF1QjtJQUNsQ0EsRUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7SUFDQTVFLEVBQUFBLFFBQVEsQ0FBQ2tHLGFBQVQsR0FBeUJDLEtBQXpCLENBQStCdkQsRUFBL0IsRUFBbUNBLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQW5DO0lBQ0E1RSxFQUFBQSxRQUFRLENBQUNrRyxhQUFULEdBQXlCQyxLQUF6QixDQUErQnZELEVBQS9CLEVBQW1DQSxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQzs7SUFFQSxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosSUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7SUFDSDs7SUFFRCxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN5QixVQUFqQixFQUE2QjtJQUN6QmIsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixNQUFyQixFQUE2QkQsS0FBN0IsQ0FBbUN2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0Qzs7SUFFQSxRQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosTUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0QztJQUNIO0lBQ0o7SUFDSjs7SUNuQmMsd0JBQVNoQyxFQUFULEVBQWE1QyxRQUFiLEVBQXVCO0lBQ2xDQSxFQUFBQSxRQUFRLENBQUNrRyxhQUFULEdBQXlCQyxLQUF6QixDQUErQnZELEVBQS9CLEVBQW1DQSxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQztJQUNBNUUsRUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7SUFDQTVFLEVBQUFBLFFBQVEsQ0FBQ2tHLGFBQVQsR0FBeUJDLEtBQXpCLENBQStCdkQsRUFBL0IsRUFBbUNBLEVBQUUsQ0FBQ2dDLFVBQUgsQ0FBYyxDQUFkLENBQW5DO0lBQ0E1RSxFQUFBQSxRQUFRLENBQUNrRyxhQUFULEdBQXlCQyxLQUF6QixDQUErQnZELEVBQS9CLEVBQW1DQSxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQzs7SUFFQSxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosSUFBQUEsUUFBUSxDQUFDa0csYUFBVCxHQUF5QkMsS0FBekIsQ0FBK0J2RCxFQUEvQixFQUFtQ0EsRUFBRSxDQUFDZ0MsVUFBSCxDQUFjLENBQWQsQ0FBbkM7SUFDSDs7SUFFRCxNQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN5QixVQUFqQixFQUE2QjtJQUN6QmIsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixNQUFyQixFQUE2QkQsS0FBN0IsQ0FBbUN2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFuQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixPQUFyQixFQUE4QkQsS0FBOUIsQ0FBb0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUFwQztJQUNBNUUsSUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsQ0FBZCxDQUF0Qzs7SUFFQSxRQUFHNUUsUUFBUSxDQUFDWixJQUFULENBQWN3QixXQUFqQixFQUE4QjtJQUMxQlosTUFBQUEsUUFBUSxDQUFDb0csV0FBVCxDQUFxQixTQUFyQixFQUFnQ0QsS0FBaEMsQ0FBc0N2RCxFQUFFLENBQUNnQyxVQUFILENBQWMsRUFBZCxDQUF0QztJQUNIO0lBQ0o7SUFDSjs7Ozs7Ozs7Ozs7Ozs7QUNiRCxtQkFBZTtJQUNYVCxFQUFBQSxPQUFPLEVBQVBBLFNBRFc7SUFFWGtDLEVBQUFBLFNBQVMsRUFBVEEsU0FGVztJQUdYN0IsRUFBQUEsS0FBSyxFQUFMQSxPQUhXO0lBSVhDLEVBQUFBLEtBQUssRUFBTEEsT0FKVztJQUtYSixFQUFBQSxJQUFJLEVBQUpBLE1BTFc7SUFNWEQsRUFBQUEsUUFBUSxFQUFSQSxVQU5XO0lBT1hrQyxFQUFBQSxLQUFLLEVBQUxBO0lBUFcsQ0FBZjs7SUNSQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7O0FBS0EsSUFBTyxJQUFNNUQsWUFBVSxHQUFHO0lBQ3pCLFdBQVksT0FEYTtJQUV6QixZQUFZLFFBRmE7SUFHekIsVUFBWSxNQUhhO0lBSXpCLFdBQVksT0FKYTtJQUt6QixhQUFZLFNBTGE7SUFNekIsYUFBWTtJQU5hLENBQW5CO0FBU1AsSUFBTyxJQUFNNkQsU0FBTyxHQUFHLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsU0FBaEIsQ0FBaEI7Ozs7Ozs7SUNkUDs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0FDSUEsd0JBQWU7SUFDWG5ILEVBQUFBLElBQUksRUFBRXNCLE9BREs7SUFFWHpCLEVBQUFBLEtBQUssRUFBRXVILFFBRkk7SUFHWHRILEVBQUFBLFFBQVEsRUFBRXVIO0lBSEMsQ0FBZjs7UUNRcUJKOzs7OztJQUVqQixxQkFBWXpELEVBQVosRUFBZ0J6SyxLQUFoQixFQUF1QitCLFVBQXZCLEVBQW1DO0lBQUE7O0lBQUE7O0lBQy9CLFFBQUcsQ0FBQzJFLFFBQVEsQ0FBQytELEVBQUQsRUFBS08sV0FBTCxDQUFaLEVBQStCO0lBQzNCM0wsTUFBQUEsS0FBSyxDQUFDaUosZUFBZSxDQUFDcEIsT0FBakIsQ0FBTDtJQUNIOztJQUVELFFBQUc1RixRQUFRLENBQUN0QixLQUFELENBQVIsSUFBbUIsQ0FBQytCLFVBQXZCLEVBQW1DO0lBQy9CQSxNQUFBQSxVQUFVLEdBQUcvQixLQUFiO0lBQ0FBLE1BQUFBLEtBQUssR0FBRyxJQUFSO0lBQ0g7O0lBRUQsUUFBTWlILElBQUksR0FBR2xGLFVBQVUsQ0FBQ2tGLElBQVgsSUFBbUJzSCxhQUFhLENBQUN0SCxJQUE5QztJQUVBLFdBQU9sRixVQUFVLENBQUNrRixJQUFsQjtJQUVBLG1GQUFNaEYsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDaEJ5RyxNQUFBQSxhQUFhLEVBQUUzSSxLQURDO0lBRWhCOEcsTUFBQUEsS0FBSyxFQUFFeUgsYUFBYSxDQUFDekgsS0FGTDtJQUdoQkMsTUFBQUEsUUFBUSxFQUFFd0gsYUFBYSxDQUFDeEg7SUFIUixLQUFkLEVBSUh6RixRQUFRLENBQUN0QixLQUFELENBQVIsR0FBa0JBLEtBQWxCLEdBQTBCLElBSnZCLEVBSTZCK0IsVUFKN0IsQ0FBTjtJQU1BLFVBQUtrRixJQUFMLEdBQVlBLElBQVo7O0lBQ0EsVUFBSytHLEtBQUwsQ0FBV3ZELEVBQVg7O0lBckIrQjtJQXNCbEM7Ozs7eUNBZ0RnQjtJQUFBOztJQUNiLFVBQU1oTCxFQUFFLEdBQUcsU0FBTEEsRUFBSztJQUFBLGVBQU0sTUFBSSxDQUFDK08sT0FBTCxFQUFOO0lBQUEsT0FBWDs7SUFFQSxXQUFLQyxLQUFMLENBQVcvTCxHQUFYLENBQWUsU0FBZixFQUEwQmpELEVBQTFCLEVBQThCa0QsRUFBOUIsQ0FBaUMsU0FBakMsRUFBNENsRCxFQUE1QztJQUVBLE9BQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsRUFBNkIsT0FBN0IsRUFBc0MsVUFBdEMsRUFBa0Q2QyxPQUFsRCxDQUEwRCxVQUFBQyxLQUFLLEVBQUk7SUFDL0QsWUFBTTlDLEVBQUUsR0FBRyxTQUFMQSxFQUFLO0lBQUEsaUJBQU0sTUFBSSxDQUFDdUUsSUFBTCxDQUFVekIsS0FBVixDQUFOO0lBQUEsU0FBWDs7SUFFQSxRQUFBLE1BQUksQ0FBQzBFLElBQUwsQ0FBVXZFLEdBQVYsQ0FBY0gsS0FBZCxFQUFxQjlDLEVBQXJCLEVBQXlCa0QsRUFBekIsQ0FBNEJKLEtBQTVCLEVBQW1DOUMsRUFBbkM7SUFDSCxPQUpEO0lBS0g7OztrQ0FFUztJQUNOLFdBQUtpTSxNQUFMOztJQUVBLFVBQUksS0FBS2dELE1BQUwsS0FBZ0JDLFNBQWhCLElBQ0EsS0FBS0QsTUFBTCxLQUFnQixLQUFLekgsSUFBTCxDQUFVakgsS0FBVixDQUFnQkEsS0FEcEMsRUFDMkM7SUFDdkMsYUFBSzhELElBQUw7SUFDSDtJQUNKOzs7OEJBRUsyRyxJQUFJO0lBQ04sMkVBQVlBLEVBQVo7O0lBRUEsV0FBS3hELElBQUwsQ0FBVTJILE9BQVYsQ0FBa0IsSUFBbEI7SUFFQSxhQUFPLElBQVA7SUFDSDs7O2lDQUVRO0lBQ0w7SUFDQSw0RUFGSztJQUtMO0lBQ0E7OztJQUNBLFVBQUcsS0FBSzlILEtBQUwsQ0FBV3FILEtBQVgsQ0FBaUIsS0FBS2xILElBQUwsQ0FBVTdGLElBQTNCLENBQUgsRUFBcUM7SUFDakMsYUFBSzBGLEtBQUwsQ0FBV3FILEtBQVgsQ0FBaUIsS0FBS2xILElBQUwsQ0FBVTdGLElBQTNCLEVBQWlDLEtBQUtxSixFQUF0QyxFQUEwQyxJQUExQztJQUNILE9BVEk7SUFZTDtJQUNBOzs7SUFDQSxXQUFLeEQsSUFBTCxDQUFVNEgsUUFBVixDQUFtQixJQUFuQixFQWRLOztJQWlCTCxhQUFPLEtBQUtwRSxFQUFaO0lBQ0g7Ozs4QkFFS2hMLElBQUk7SUFDTixXQUFLd0gsSUFBTCxDQUFVZSxLQUFWLENBQWdCLElBQWhCLEVBQXNCdkksRUFBdEI7SUFFQSxhQUFPLElBQVA7SUFDSDs7OzhCQUVLQSxJQUFJO0lBQ04sV0FBS3dILElBQUwsQ0FBVWxELEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0J0RSxFQUF0QjtJQUVBLGFBQU8sSUFBUDtJQUNIOzs7NkJBRUlBLElBQUk7SUFDTCxXQUFLd0gsSUFBTCxDQUFVbkQsSUFBVixDQUFlLElBQWYsRUFBcUJyRSxFQUFyQjtJQUVBLGFBQU8sSUFBUDtJQUNIOzs7c0NBRWFzQyxZQUFZO0lBQ3RCLGFBQU9pSyxPQUFPLENBQUN0RSxJQUFSLENBQWF6RixNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUM5QjRFLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQURrQjtJQUU5QkMsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0lBRmUsT0FBZCxFQUdqQmhGLFVBSGlCLENBQWIsQ0FBUDtJQUlIOzs7bUNBRVUvQixPQUFPK0IsWUFBWTtJQUMxQixhQUFPbUssSUFBSSxDQUFDeEUsSUFBTCxDQUFVMUgsS0FBVixFQUFpQmlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2xDNEUsUUFBQUEsS0FBSyxFQUFFLEtBQUtBLEtBRHNCO0lBRWxDQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7SUFGbUIsT0FBZCxFQUdyQmhGLFVBSHFCLENBQWpCLENBQVA7SUFJSDs7O29DQUVXL0IsT0FBTytCLFlBQVk7SUFDM0IsYUFBT3VLLEtBQUssQ0FBQzVFLElBQU4sQ0FBVzFILEtBQVgsRUFBa0JpQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNuQzRFLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQUR1QjtJQUVuQ0MsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0lBRm9CLE9BQWQsRUFHdEJoRixVQUhzQixDQUFsQixDQUFQO0lBSUg7OztvQ0FFVzhFLE9BQU85RSxZQUFZO0lBQzNCLGFBQU9zSyxLQUFLLENBQUMzRSxJQUFOLENBQVdiLEtBQVgsRUFBa0I1RSxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNuQzRFLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQUR1QjtJQUVuQ0MsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0lBRm9CLE9BQWQsRUFHdEJoRixVQUhzQixDQUFsQixDQUFQO0lBSUg7OzsrQkEzSVU7SUFDUCxhQUFPLEtBQUswTSxLQUFaO0lBQ0g7MEJBRVF6TyxPQUFPO0lBQ1osVUFBRyxDQUFDMEcsUUFBUSxDQUFDMUcsS0FBRCxFQUFRLENBQUNxSCxJQUFELEVBQU8sUUFBUCxFQUFpQixVQUFqQixDQUFSLENBQVosRUFBbUQ7SUFDL0NoSSxRQUFBQSxLQUFLLENBQUNpSixlQUFlLENBQUNyQixJQUFqQixDQUFMO0lBQ0g7O0lBRUQsVUFBRzVGLFFBQVEsQ0FBQ3JCLEtBQUQsQ0FBUixJQUFtQjhPLEtBQUssQ0FBQzlPLEtBQUQsQ0FBM0IsRUFBb0M7SUFDaEMsYUFBS3lPLEtBQUwsR0FBYSxJQUFJSyxLQUFLLENBQUM5TyxLQUFELENBQVQsQ0FBaUIsS0FBSzJJLGFBQXRCLEVBQXFDLEtBQUtvRyxtQkFBTCxFQUFyQyxDQUFiO0lBQ0gsT0FGRCxNQUdLO0lBQ0QsYUFBS04sS0FBTCxHQUFhLElBQUl6TyxLQUFKLENBQVUsS0FBSzJJLGFBQWYsRUFBOEIsS0FBS29HLG1CQUFMLEVBQTlCLENBQWI7SUFDSDs7SUFFRCxXQUFLQyxjQUFMO0lBQ0EsV0FBSy9ILElBQUwsQ0FBVWdJLFdBQVYsQ0FBc0IsSUFBdEI7SUFDQSxXQUFLeEUsRUFBTCxJQUFXLEtBQUtpQixNQUFMLEVBQVg7SUFDSDs7OytCQUVZO0lBQ1QsYUFBT2hNLFVBQVUsQ0FBQyxLQUFLd1AsT0FBTixDQUFWLEdBQTJCLEtBQUtBLE9BQUwsQ0FBYSxJQUFiLENBQTNCLEdBQWdELEtBQUtBLE9BQTVEO0lBQ0g7MEJBRVVsUCxPQUFPO0lBQ2QsV0FBS2tQLE9BQUwsR0FBZWxQLEtBQWY7SUFDSDs7OytCQUVXO0lBQ1IsYUFBTyxLQUFLaUgsSUFBTCxDQUFVRyxLQUFqQjtJQUNIOzBCQUVTcEgsT0FBTztJQUNiLFdBQUtpSCxJQUFMLENBQVVHLEtBQVYsR0FBa0JwSCxLQUFsQjtJQUNIOzs7K0JBRVc7SUFDUixhQUFPLEtBQUtpSCxJQUFMLENBQVVqSCxLQUFqQjtJQUNIOzBCQUVTQSxPQUFPO0lBQ2IsV0FBS2lILElBQUwsQ0FBVWUsS0FBVixDQUFnQixJQUFoQixFQUFzQmhJLEtBQXRCO0lBQ0EsV0FBS2lILElBQUwsQ0FBVWpILEtBQVYsR0FBa0JBLEtBQWxCO0lBQ0g7Ozt1Q0FxR3FCQSxPQUFPO0lBQ3pCMEcsTUFBQUEsUUFBUSxDQUFDMUcsS0FBRCxFQUFRLENBQUNxSCxJQUFELEVBQU8sVUFBUCxDQUFSLENBQVIsQ0FBb0M4SCxJQUFwQyxDQUF5QyxZQUFNO0lBQzNDWixRQUFBQSxhQUFhLENBQUN0SCxJQUFkLEdBQXFCakgsS0FBckI7SUFDSCxPQUZELEVBRUcsWUFBTTtJQUNMWCxRQUFBQSxLQUFLLENBQUNpSixlQUFlLENBQUNyQixJQUFqQixDQUFMO0lBQ0gsT0FKRDtJQUtIOzs7d0NBRXNCakgsT0FBTztJQUMxQixVQUFHLENBQUMwRyxRQUFRLENBQUMxRyxLQUFELEVBQVEsUUFBUixDQUFaLEVBQStCO0lBQzNCWCxRQUFBQSxLQUFLLENBQUNpSixlQUFlLENBQUN4QixLQUFqQixDQUFMO0lBQ0g7O0lBRUR5SCxNQUFBQSxhQUFhLENBQUN6SCxLQUFkLEdBQXNCOUcsS0FBdEI7SUFDSDs7OzJDQUV5QkEsT0FBTztJQUM3QixVQUFHLENBQUMwRyxRQUFRLENBQUMxRyxLQUFELEVBQVEsUUFBUixDQUFaLEVBQStCO0lBQzNCWCxRQUFBQSxLQUFLLENBQUNpSixlQUFlLENBQUN2QixRQUFqQixDQUFMO0lBQ0g7O0lBRUR3SCxNQUFBQSxhQUFhLENBQUN4SCxRQUFkLEdBQXlCL0csS0FBekI7SUFDSDs7OytCQTFCcUI7SUFDbEIsYUFBT3VPLGFBQVA7SUFDSDs7OztNQXpLa0NsRDs7Ozs7Ozs7In0=
