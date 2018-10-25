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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0RpZ2l0aXplLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvSGVscGVycy9WYWxpZGF0ZS5qcyIsIi4uL3NyYy9qcy9Db25maWcvQ29uc29sZU1lc3NhZ2VzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZS5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9ZZWFyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RyYW5zbGF0ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvYXItYXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2NzLWN6LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kYS1kay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGUtZGUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VuLXVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lcy1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmEtaXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZpLWZpLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mci1jYS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaGUtaWwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2h1LWh1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9pdC1pdC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvamEtanAuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2tvLWtyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9sdi1sdi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbmwtYmUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25vLW5iLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wbC1wbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcHQtYnIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3ZuLXZuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvQ29uZmlnL0RlZmF1bHRWYWx1ZXMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GbGlwQ2xvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayhmbikge1xuICAgIGlmKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc2xpY2UoMSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiAhaXNOdWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYWluKGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4gYWZ0ZXIoYmVmb3JlKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TWFwKGZuKSB7XG4gICAgcmV0dXJuIHggPT4ge1xuICAgICAgICByZXR1cm4geC5tYXAoZm4pLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHgpIHtcbiAgICByZXR1cm4gY29uY2F0TWFwKHggPT4geCkoeClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBGbGF0dGVuKHgpIHtcbiAgICByZXR1cm4gY29uY2F0TWFwKHggPT4gQXJyYXkuaXNBcnJheSh4KSA/IGRlZXBGbGF0dGVuICh4KSA6IHgpKHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWNmaXJzdChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGRpZ2l0cykge1xuICAgIHJldHVybiBkZWVwRmxhdHRlbihkaWdpdHMpLmxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDsvLyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudWxsJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAmJiAhIXZhbHVlLm5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICFpc0FycmF5KHZhbHVlKSAmJiAoXG4gICAgICAgIHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTih2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZWJhYkNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKTtcbn1cbiIsImltcG9ydCB7IGNoYWluLCBjYWxsYmFjaywgaXNPYmplY3QsIGtlYmFiQ2FzZSB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBldmVudHM6IHt9XG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4ga2ViYWJDYXNlKHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGV2ZW50cztcbiAgICB9XG5cbiAgICBzZXQgZXZlbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGVtaXQoa2V5LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uKGtleSwgZm4sIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBpZighdGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHNba2V5XS5wdXNoKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvZmYoa2V5LCBmbikge1xuICAgICAgICBpZih0aGlzLmV2ZW50c1trZXldICYmIGZuKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gdGhpcy5ldmVudHNba2V5XS5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudCAhPT0gZm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2Uoa2V5LCBmbikge1xuICAgICAgICBmbiA9IGNoYWluKGZuLCAoKSA9PiB0aGlzLm9mZihrZXksIGZuKSk7XG5cbiAgICAgICAgdGhpcy5vbihrZXksIGZuLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KGtleSkgPyB0aGlzW2tleV0gOiBudWxsO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG5cbiAgICBnZXRQdWJsaWNBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRBdHRyaWJ1dGVzKCkpXG4gICAgICAgICAgICAuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFrZXkubWF0Y2goL15cXCQvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhrZXkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZXModmFsdWVzKSB7XG4gICAgICAgIGZvcihjb25zdCBpIGluIHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoaSwgdmFsdWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxiYWNrKGZuKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyguLi5hcmdzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbCkge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgaGFuZGxlOiBudWxsLFxuICAgICAgICAgICAgc3RhcnRlZDogbnVsbCxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IGludGVydmFsXG4gICAgICAgIH0sIGlzT2JqZWN0KGludGVydmFsKSA/IGludGVydmFsIDogbnVsbCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGVsYXBzZWQgdGhlIHRpbWUgYXMgYW4gaW50ZXJnZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gSW50ZWdlclxuICAgICAqL1xuICAgIGdldCBlbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudCAqIHRoaXMuaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlzIHRoZSB0aW1lciBpcyBydW5uaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICovXG4gICAgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIG5vdCBydW5uaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiBCb29sZWFuXG4gICAgICovXG4gICAgZ2V0IGlzU3RvcHBlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZyA9PT0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB0aW1lci4gVGhpcyBtZXRob2QgaXMgY2hhaW5hYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICBGdW5jdGlvbiAgZm5cbiAgICAgKiBAcmV0dXJuIHRoaXNcbiAgICAgKi9cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLnN0b3AoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCgpID0+IGNhbGxiYWNrLmNhbGwodGhpcywgZm4pKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSB0aW1lci4gVGhpcyBtZXRob2QgaXMgY2hhaW5hYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICBGdW5jdGlvbiAgZm5cbiAgICAgKiBAcmV0dXJuIHRoaXNcbiAgICAgKi9cbiAgICBzdGFydChmbikge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZTtcbiAgICAgICAgdGhpcy5sYXN0TG9vcCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcblxuICAgICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoRGF0ZS5ub3coKSAtIHRoaXMubGFzdExvb3AgPj0gdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdExvb3AgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGxvb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgdGltZXIuIFRoaXMgbWV0aG9kIGlzIGNoYWluYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgRnVuY3Rpb24gZm5cbiAgICAgKiBAcmV0dXJuIHRoaXNcbiAgICAgKi9cbiAgICBzdG9wKGZuKSB7XG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RvcCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlnaXRpemUodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbWluaW11bURpZ2l0czogMCxcbiAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBwcmVwZW5kKG51bWJlcikge1xuICAgICAgICBjb25zdCBzaG91bGRQcmVwZW5kWmVybyA9IG9wdGlvbnMucHJlcGVuZExlYWRpbmdaZXJvICYmXG4gICAgICAgICAgICBudW1iZXIudG9TdHJpbmcoKS5zcGxpdCgnJykubGVuZ3RoID09PSAxO1xuXG4gICAgICAgIHJldHVybiAoc2hvdWxkUHJlcGVuZFplcm8gPyAnMCcgOiAnJykuY29uY2F0KG51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlnaXRzKGFyciwgbWluKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRlZXBGbGF0dGVuKGFycikubGVuZ3RoO1xuXG4gICAgICAgIGlmKGxlbmd0aCA8IG1pbikge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1pbiAtIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyWzBdLnVuc2hpZnQoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZ2l0cyhmbGF0dGVuKFt2YWx1ZV0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gZmxhdHRlbihkZWVwRmxhdHRlbihbbnVtYmVyXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJlcGVuZChudW1iZXIpLnNwbGl0KCcnKTtcbiAgICAgICAgfSkpO1xuICAgIH0pLCBvcHRpb25zLm1pbmltdW1EaWdpdHMgfHwgMCk7XG59XG4iLCJjb25zdCByYW5nZXMgPSBbe1xuICAgIC8vIDAtOVxuICAgIG1pbjogNDgsXG4gICAgbWF4OiA1N1xufSx7XG4gICAgLy8gYS16XG4gICAgbWluOiA2NSxcbiAgICBtYXg6IDkwXG59LHtcbiAgICAvLyBBLVpcbiAgICBtaW46IDk3LFxuICAgIG1heDogMTIyXG59XTtcblxuZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRSYW5nZShjaGFyKSB7XG4gICAgZm9yKGNvbnN0IGkgaW4gcmFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBjaGFyLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcblxuICAgICAgICBpZihyYW5nZXNbaV0ubWluIDw9IGNvZGUgJiYgcmFuZ2VzW2ldLm1heCA+PSBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBjaGFyQ29kZShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA8IHJhbmdlLm1heCA/IGNvZGUgKyAxIDogcmFuZ2UubWluXG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2hhckNvZGUoY2hhciwgZm4pIHtcbiAgICBjb25zdCByYW5nZSA9IGZpbmRSYW5nZShjaGFyKTtcbiAgICBjb25zdCBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGZuKHJhbmdlLCBjb2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBjaGFyQ29kZShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA+IHJhbmdlLm1pbiA/IGNvZGUgLSAxIDogcmFuZ2UubWF4XG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IGRpZ2l0aXplIGZyb20gJy4uL0hlbHBlcnMvRGlnaXRpemUnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgbGVuZ3RoLCBpc09iamVjdCwgaXNOdW1iZXIgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2VWYWx1ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWUsXG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiAwXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGRpZ2l0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRkaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5taW5pbXVtRGlnaXRzID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlnaXRzLCBsZW5ndGgodmFsdWUpKTtcbiAgICB9XG5cbiAgICBnZXQgZGlnaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZGlnaXRzO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmRpZ2l0cyA9IGRpZ2l0aXplKHRoaXMuZm9ybWF0KHZhbHVlKSwge1xuICAgICAgICAgICAgbWluaW11bURpZ2l0czogdGhpcy5taW5pbXVtRGlnaXRzLFxuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0aGlzLnByZXBlbmRMZWFkaW5nWmVyb1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc05hTigpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gaXNOdW1iZXIoKVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIC4uLmFyZ3MpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgZmxhdHRlbihhcmdzKS5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICAgIGlmKCAoaXNOdWxsKHZhbHVlKSAmJiBpc051bGwoYXJnKSkgfHxcbiAgICAgICAgICAgIChpc09iamVjdChhcmcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIGFyZykpIHx8XG4gICAgICAgICAgICAoaXNGdW5jdGlvbihhcmcpICYmICFpc0NsYXNzKGFyZykgJiYgYXJnKHZhbHVlKSA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAgIChpc1N0cmluZyhhcmcpICYmICh0eXBlb2YgdmFsdWUgPT09IGFyZykpKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaXRlbXM6ICdUaGUgaXRlbXMgcHJvcGVydHkgbXVzdCBiZSBhbiBhcnJheS4nLFxuICAgIHRoZW1lOiAnVGhlIHRoZW1lIHByb3BlcnR5IG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgbGFuZ3VhZ2U6ICdUaGUgbGFuZ3VhZ2UgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBkYXRlOiAnVGhlIHZhbHVlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBEYXRlLicsXG4gICAgZmFjZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlIGNsYXNzLicsXG4gICAgZWxlbWVudDogJ1RoZSBlbGVtZW50IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYW4gSFRNTEVsZW1lbnQnLFxuICAgIGZhY2VWYWx1ZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlVmFsdWUgY2xhc3MuJyxcbiAgICB0aW1lcjogJ1RoZSB0aW1lciBwcm9wZXJ0eSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgVGltZXIgY2xhc3MuJ1xufTtcbiIsImltcG9ydCBUaW1lciBmcm9tICcuL1RpbWVyJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEZhY2VWYWx1ZSBmcm9tICcuL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgZXJyb3IsIGlzTnVsbCwgaXNGdW5jdGlvbiwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBhdHRyaWJ1dGVzLmRlbGF5IHx8IDEwMDA7XG5cbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgY291bnRkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGRlbGF5IC8gMixcbiAgICAgICAgICAgIHRpbWVyOiBUaW1lci5tYWtlKGRlbGF5KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICh0aGlzLmRlZmF1bHRBdHRyaWJ1dGVzKCkgfHwge30pLCAoYXR0cmlidXRlcyB8fCB7fSlcbiAgICAgICAgKSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9ICFpc051bGwodmFsdWUpID8gdmFsdWUgOiB0aGlzLmRlZmF1bHRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGdldCBkYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERhdGFUeXBlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXMuZGF0YVR5cGUgJiYgIXZhbGlkYXRlKHZhbHVlLCBbdGhpcy5kYXRhVHlwZV0pKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIGZhY2UgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhICR7dGhpcy5kYXRhVHlwZS5uYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEZhY2VWYWx1ZSA/XG4gICAgICAgICAgICB2YWx1ZSA6IHRoaXMuY3JlYXRlRmFjZVZhbHVlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQnLCB0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgdGltZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aW1lcjtcbiAgICB9XG5cbiAgICBzZXQgdGltZXIodGltZXIpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHRpbWVyLCBUaW1lcikpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aW1lciA9IHRpbWVyO1xuICAgIH1cblxuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICBpZih0aGlzLmNvdW50ZG93bikge1xuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbiAgICBzdGFydChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5zdGFydCgoKSA9PiB0aGlzLmludGVydmFsKGluc3RhbmNlLCBmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgc3RvcChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgfVxuXG4gICAgcmVzZXQoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIHRoaXMudGltZXIucmVzZXQoKCkgPT4gdGhpcy5pbnRlcnZhbChpbnN0YW5jZSwgZm4pKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZhY2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRmFjZVZhbHVlLm1ha2UodmFsdWUsIHtcbiAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdGhpcy5mb3JtYXQodmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBpbml0aWFsaXplZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHJlbmRlcmVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgbW91bnRlZChpbnN0YW5jZSkge1xuICAgICAgICBpZih0aGlzLmF1dG9TdGFydCAmJiB0aGlzLnRpbWVyLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGluY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSArIDE7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnZhbHVlIC0gMTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgeyBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWludXRlQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0xhYmVsczogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWU7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgRGF0ZTtcblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhdGhpcy50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldFNlY29uZHMoYSwgYildXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjApO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoYSwgYikge1xuICAgICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoTWF0aC5jZWlsKHRvdGFsU2Vjb25kcyA9PT0gNjAgPyAwIDogdG90YWxTZWNvbmRzICUgNjApKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbFNlY29uZHMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBNaW51dGVDb3VudGVyIGZyb20gJy4vTWludXRlQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXJDb3VudGVyIGV4dGVuZHMgTWludXRlQ291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRNaW51dGVzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldE1pbnV0ZXMoYSwgYikgJSA2MCk7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlDb3VudGVyIGV4dGVuZHMgSG91ckNvdW50ZXIge1xuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICF0aGlzLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQpO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldEhvdXJzKGEsIGIpICUgMjQpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cbiAgICAvKlxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuICAgICovXG5cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0xhYmVsczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW1xuICAgICAgICAgICAgW3ZhbHVlLmdldEhvdXJzKCldLFxuICAgICAgICAgICAgW3ZhbHVlLmdldE1pbnV0ZXMoKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaChbdmFsdWUuZ2V0U2Vjb25kcygpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IERhdGU7XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBUd2VudHlGb3VySG91ckNsb2NrIGZyb20gJy4vVHdlbnR5Rm91ckhvdXJDbG9jayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWx2ZUhvdXJDbG9jayBleHRlbmRzIFR3ZW50eUZvdXJIb3VyQ2xvY2sge1xuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TWVyaWRpdW06IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuXG5cdFx0Y29uc3QgZ3JvdXBzID0gW1xuXHRcdFx0aG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzKSxcblx0XHRcdHZhbHVlLmdldE1pbnV0ZXMoKVxuXHRcdF07XG5cbiAgICAgICAgdGhpcy5tZXJpZGl1bSA9IGhvdXJzID4gMTIgPyAncG0nIDogJ2FtJztcblxuXHRcdGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcblx0XHRcdGdyb3Vwcy5wdXNoKHZhbHVlLmdldFNlY29uZHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEYXlDb3VudGVyIGZyb20gJy4vRGF5Q291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtDb3VudGVyIGV4dGVuZHMgRGF5Q291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3KTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldERheXMoYSwgYikgJSA3KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhckNvdW50ZXIgZXh0ZW5kcyBXZWVrQ291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0WWVhcnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFllYXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3IC8gNTIpKTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRXZWVrcyhhLCBiKSAlIDUyKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZnJvbSkge1xuICAgIHJldHVybiAoaXNTdHJpbmcoZnJvbSB8fCAnZW4tdXMnKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbSkuZGljdGlvbmFyeVt2YWx1ZV0gfHwgdmFsdWU7XG59O1xuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuKGNvbmRpdGlvbiwgaHRtbCkge1xuXHRyZXR1cm4gY29uZGl0aW9uID09PSB0cnVlID8gaHRtbCA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dhcChlbCwgZXhpc3RpbmcpIHtcblx0aWYoZXhpc3RpbmcucGFyZW50Tm9kZSkge1xuXHRcdGV4aXN0aW5nLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsLCBleGlzdGluZyk7XG5cdFx0XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0cmV0dXJuIGV4aXN0aW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cmlidXRlcykge1xuXHRpZihpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuXHRcdGZvcihjb25zdCBpIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVzW2ldKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pIHtcblx0aWYoaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5maWx0ZXIobm9vcCkuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRpZihjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWwsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuXHR9XG5cblx0c2V0QXR0cmlidXRlcyhlbCwgaXNPYmplY3QoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBhdHRyaWJ1dGVzKTtcblxuXHRpZighaXNPYmplY3QoY2hpbGRyZW4pICYmICFpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGVsLmlubmVySFRNTCA9IGNoaWxkcmVuO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbilcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLypcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGlzQXJyYXkodmFsdWUpID9cblx0XHRkZWVwRmxhdHRlbih2YWx1ZSkuZmlsdGVyKG5vb3ApLmpvaW4oJycpIDogdmFsdWU7XG5cblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn1cbiovXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vSGVscGVycy9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgc3dhcCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGhlbWUpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIHRoZW1lIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgbGFuZ3VhZ2UgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG5cdFx0aWYoIXRoaXMudGhlbWVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX0gY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbDtcbiAgICB9XG5cbiAgICBzZXQgZWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBudWxsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudDtcbiAgICB9XG5cbiAgICBzZXQgcGFyZW50KHBhcmVudCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGhlbWU7XG4gICAgfVxuXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgbGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRsYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZShrZXksIHRoaXMubGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIHQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShrZXkpO1xuICAgIH1cblxuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lID09PSAnZmxpcC1jbG9jaycgPyB0aGlzLmNsYXNzTmFtZSA6ICdmbGlwLWNsb2NrLScgKyB0aGlzLmNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRoZW1lW3RoaXMubmFtZV0oZWwsIHRoaXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmVsLmlubmVySFRNTCAhPT0gZWwuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gc3dhcChlbCwgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcblx0fVxuXG4gICAgbW91bnQocGFyZW50LCBiZWZvcmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgaWYoIWJlZm9yZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlkZXIgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IG5leHQsIHByZXYsICB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgaXNPYmplY3QsICB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXRlbXM7XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGl0ZW1zID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdEl0ZW0odmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICB9LCBpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0sIGlzT2JqZWN0KGxhYmVsKSA/IGxhYmVsIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgdG9wJ30pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCBib3R0b20nfSlcbiAgICBdKTtcbn1cbiIsImltcG9ydCB7IG5leHQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmZ1bmN0aW9uIGNoaWxkKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBlbCA/IChlbC5jaGlsZE5vZGVzID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBlbFtpbmRleF0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hhcihlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwLWNsb2NrLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCAudG9wJykuaW5uZXJIVE1MIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnN0YW5jZS52YWx1ZS5kaWdpdHMubWFwKChncm91cCwgeCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEVsID0gY2hpbGQoaW5zdGFuY2UuZWwgPyBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1ncm91cCcpIDogbnVsbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsID8gZ3JvdXBFbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1saXN0JykgOiBudWxsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGluc3RhbmNlLmZhY2UuYW5pbWF0aW9uUmF0ZSB8fCBpbnN0YW5jZS5mYWNlLmRlbGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuXG4gICAgaW5zdGFuY2UuaXRlbXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGluc3RhbmNlLnZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGJlZm9yZVZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgXTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnJlbmRlcigpKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnN0YW5jZS5hY3RpdmUgPT09IHRydWUgPyAnYWN0aXZlJyA6IChcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlID09PSBmYWxzZSA/ICdiZWZvcmUnIDogbnVsbFxuICAgICk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAndG9wJ30pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ2JvdHRvbSd9KVxuICAgICAgICBdLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lcid9KVxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBUd2VudHlGb3VySG91ckNsb2NrKGVsLCBpbnN0YW5jZSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dNZXJpZGl1bSAmJiBpbnN0YW5jZS5mYWNlLm1lcmlkaXVtKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaW5zdGFuY2UuY3JlYXRlTGFiZWwoaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLmNoaWxkTm9kZXNbZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsYWJlbC5tb3VudChwYXJlbnQpLmNsYXNzTGlzdC5hZGQoJ2ZsaXAtY2xvY2stbWVyaWRpdW0nKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s4XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbN10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbOV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgneWVhcnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1sxMF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9GbGlwQ2xvY2snO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCAqIGFzIGZhY2VzIGZyb20gJy4vRmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRGl2aWRlcixcbiAgICBGbGlwQ2xvY2ssXG4gICAgR3JvdXAsXG4gICAgTGFiZWwsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBmYWNlc1xufTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEFyYWJpYyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfYs9mG2YjYp9iqJyxcbiAgICAnbW9udGhzJyAgOiAn2LTZh9mI2LEnLFxuICAgICdkYXlzJyAgICA6ICfYo9mK2KfZhScsXG4gICAgJ2hvdXJzJyAgIDogJ9iz2KfYudin2KonLFxuICAgICdtaW51dGVzJyA6ICfYr9mC2KfYptmCJyxcbiAgICAnc2Vjb25kcycgOiAn2KvZiNin2YbZiidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydhcicsICdhci1hcicsICdhcmFiaWMnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjcycsICdjcy1jeicsICdjeicsICdjei1jcycsICdjemVjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIERhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEdlcm1hbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlbicsICdlbi11cycsICdlbmdsaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQZXJzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn2LPYp9mEJyxcblx0J21vbnRocycgIDogJ9mF2KfZhycsXG5cdCdkYXlzJyAgICA6ICfYsdmI2LInLFxuXHQnaG91cnMnICAgOiAn2LPYp9i52KonLFxuXHQnbWludXRlcycgOiAn2K/ZgtuM2YLZhycsXG5cdCdzZWNvbmRzJyA6ICfYq9in2YbbjNmHJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZpJywgJ2ZpLWZpJywgJ2Zpbm5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdBbnMnLFxuICAgICdtb250aHMnICA6ICdNb2lzJyxcbiAgICAnZGF5cycgICAgOiAnSm91cnMnLFxuICAgICdob3VycycgICA6ICdIZXVyZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIZWJyZXcgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OJdicsXG4gICAgJ21vbnRocycgIDogJ0jDs25hcCcsXG4gICAgJ2RheXMnICAgIDogJ05hcCcsXG4gICAgJ2hvdXJzJyAgIDogJ8OTcmEnLFxuICAgICdtaW51dGVzJyA6ICdQZXJjJyxcbiAgICAnc2Vjb25kcycgOiAnTcOhc29kcGVyYydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydodScsICdodS1odScsICdodW5nYXJpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSXRhbGlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEphcGFuZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+uFhCcsXG5cdCdtb250aHMnICA6ICfsm5QnLFxuXHQnZGF5cycgICAgOiAn7J28Jyxcblx0J2hvdXJzJyAgIDogJ+yLnCcsXG5cdCdtaW51dGVzJyA6ICfrtoQnLFxuXHQnc2Vjb25kcycgOiAn7LSIJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2tvJywgJ2tvLWtyJywgJ2tvcmVhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBMYXR2aWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRHV0Y2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ2xhdCcsXG5cdCdtb250aHMnICA6ICdtaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnZG5pJyxcblx0J2hvdXJzJyAgIDogJ2dvZHppbicsXG5cdCdtaW51dGVzJyA6ICdtaW51dCcsXG5cdCdzZWNvbmRzJyA6ICdzZWt1bmQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncHQnLCAncHQtYnInLCAncG9ydHVndWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSdXNzaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNsb3ZhayBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzdicsICdzdi1zZScsICdzd2VkaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUaGFpIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRoYWkgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHVya2lzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1nEsWwnLFxuXHQnbW9udGhzJyAgOiAnQXknLFxuXHQnZGF5cycgICAgOiAnR8O8bicsXG5cdCdob3VycycgICA6ICdTYWF0Jyxcblx0J21pbnV0ZXMnIDogJ0Rha2lrYScsXG5cdCdzZWNvbmRzJyA6ICdTYW5peWUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9GA0L7QutC4JyxcbiAgICAnbW9udGhzJyAgOiAn0LzRltGB0Y/RhtGWJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdGWJyxcbiAgICAnaG91cnMnICAgOiAn0LPQvtC00LjQvdC4JyxcbiAgICAnbWludXRlcycgOiAn0YXQstC40LvQuNC90LgnLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LTQuCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd1YScsICd1YS11YScsICd1a3JhaW5lJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUcmFkaXRpb25hbCBWaWV0bmFtZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gVmlldG5hbWVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdOxINtJyxcblx0J21vbnRocycgIDogJ1Row6FuZycsXG5cdCdkYXlzJyAgICA6ICdOZ8OgeScsXG5cdCdob3VycycgICA6ICdHaeG7nScsXG5cdCdtaW51dGVzJyA6ICdQaMO6dCcsXG5cdCdzZWNvbmRzJyA6ICdHacOieSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd2bicsICd2bi12bicsICd2aWV0bmFtZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENoaW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IHsgT3JpZ2luYWwgfSBmcm9tICcuLi9UaGVtZXMnO1xuaW1wb3J0IHsgRW5nbGlzaCB9IGZyb20gJy4uL0xhbmd1YWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiBDb3VudGVyLFxuICAgIHRoZW1lOiBPcmlnaW5hbCxcbiAgICBsYW5ndWFnZTogRW5nbGlzaFxufTtcbiIsImltcG9ydCAqIGFzIEZhY2VzIGZyb20gJy4uL0ZhY2VzJztcbmltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9Db21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4uL0NvbXBvbmVudHMvR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL0NvbXBvbmVudHMvTGFiZWwnO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuLi9Db21wb25lbnRzL0RpdmlkZXInO1xuaW1wb3J0IERlZmF1bHRWYWx1ZXMgZnJvbSAnLi4vQ29uZmlnL0RlZmF1bHRWYWx1ZXMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBpc09iamVjdCwgaXNGdW5jdGlvbiwgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsaXBDbG9jayBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbCwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKGVsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzT2JqZWN0KHZhbHVlKSAmJiAhYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFjZSA9IGF0dHJpYnV0ZXMuZmFjZSB8fCBEZWZhdWx0VmFsdWVzLmZhY2U7XG5cbiAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuZmFjZTtcblxuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIG9yaWdpbmFsVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgdGhlbWU6IERlZmF1bHRWYWx1ZXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogRGVmYXVsdFZhbHVlcy5sYW5ndWFnZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICB0aGlzLmZhY2UgPSBmYWNlO1xuICAgICAgICB0aGlzLm1vdW50KGVsKTtcbiAgICB9XG5cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgc2V0IGZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ3N0cmluZycsICdmdW5jdGlvbiddKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNTdHJpbmcodmFsdWUpICYmIEZhY2VzW3ZhbHVlXSkge1xuICAgICAgICAgICAgdGhpcy4kZmFjZSA9IG5ldyBGYWNlc1t2YWx1ZV0odGhpcy5vcmlnaW5hbFZhbHVlLCB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRmYWNlID0gbmV3IHZhbHVlKHRoaXMub3JpZ2luYWxWYWx1ZSwgdGhpcy5nZXRQdWJsaWNBdHRyaWJ1dGVzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRmFjZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmZhY2UuaW5pdGlhbGl6ZWQodGhpcyk7XG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgc3RvcEF0KCkge1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbih0aGlzLiRzdG9wQXQpID8gdGhpcy4kc3RvcEF0KHRoaXMpIDogdGhpcy4kc3RvcEF0O1xuICAgIH1cblxuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNlLnRpbWVyO1xuICAgIH1cblxuICAgIHNldCB0aW1lcih2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UudGltZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS5yZXNldCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGJpbmRGYWNlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMudXBkYXRlZCgpO1xuXG4gICAgICAgIHRoaXMuJGZhY2Uub2ZmKCd1cGRhdGVkJywgZm4pLm9uKCd1cGRhdGVkJywgZm4pO1xuXG4gICAgICAgIFsndXBkYXRlZCcsICdzdGFydCcsICdzdG9wJywgJ3Jlc2V0JywgJ2ludGVydmFsJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMuZW1pdChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjZS5vZmYoZXZlbnQsIGZuKS5vbihldmVudCwgZm4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmKCB0aGlzLnN0b3BBdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0aGlzLnN0b3BBdCA9PT0gdGhpcy5mYWNlLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdW50KGVsKSB7XG4gICAgICAgIHN1cGVyLm1vdW50KGVsKTtcblxuICAgICAgICB0aGlzLmZhY2UubW91bnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHBhcmVudCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBmYWNlIGhhcyBhIHJlbmRlciBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgYSBmYWNlIHRvIGNvbXBsZXRlbHkgcmUtcmVuZGVyIG9yIGFkZCB0byB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGZhY2Ugc3BlY2lmaWMgaW50ZXJmYWNlcyBmb3IgYSB0aGVtZS5cbiAgICAgICAgaWYodGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKHRoaXMuZWwsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFzcyB0aGUgY2xvY2sgaW5zdGFuY2UgdG8gdGhlIHJlbmRlcmVkKCkgZnVuY3Rpb24gb24gdGhlIGZhY2UuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGdsb2JhbCBtb2RpZmljYXRpb25zIHRvIHRoZSByZW5kZXJlZCB0ZW1wbGF0ZXMgbm90XG4gICAgICAgIC8vIHRoZW1lIHNwZWNpZmljLlxuICAgICAgICB0aGlzLmZhY2UucmVuZGVyZWQodGhpcyk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSByZW5kZXJlZCBlbGVtZW50LlxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5zdGFydCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLmZhY2Uuc3RvcCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlRGl2aWRlcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBEaXZpZGVyLm1ha2UoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMaXN0Lm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGFiZWwodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExhYmVsLm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlR3JvdXAoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIEdyb3VwLm1ha2UoaXRlbXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIHZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ2Z1bmN0aW9uJ10pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdFZhbHVlcy5mYWNlID0gdmFsdWU7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRUaGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRoZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMudGhlbWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJjYWxsYmFjayIsImZuIiwiaXNGdW5jdGlvbiIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwibm9vcCIsInZhbHVlIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJjaGFpbiIsImJlZm9yZSIsImFmdGVyIiwiY29uY2F0TWFwIiwieCIsIm1hcCIsInJlZHVjZSIsInkiLCJjb25jYXQiLCJmbGF0dGVuIiwiZGVlcEZsYXR0ZW4iLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJkaWdpdHMiLCJpc0NsYXNzIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsInR5cGUiLCJpc051bWJlciIsImlzTmFOIiwia2ViYWJDYXNlIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50cyIsImtleSIsImFyZ3MiLCJmb3JFYWNoIiwiZXZlbnQiLCJwdXNoIiwiZmlsdGVyIiwib2ZmIiwib24iLCJoYXNPd25Qcm9wZXJ0eSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJrZXlzIiwiZ2V0QXR0cmlidXRlcyIsIm1hdGNoIiwib2JqIiwic2V0QXR0cmlidXRlcyIsInZhbHVlcyIsImkiLCJjb25zdHJ1Y3RvciIsIiRldmVudHMiLCJUaW1lciIsImludGVydmFsIiwiY291bnQiLCJoYW5kbGUiLCJzdGFydGVkIiwicnVubmluZyIsInN0b3AiLCJzdGFydCIsImVtaXQiLCJEYXRlIiwibGFzdExvb3AiLCJub3ciLCJsb29wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwicmFuZ2VzIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsIm5leHQiLCJjb252ZXJ0ZWQiLCJjaGFyQ29kZSIsInJhbmdlIiwiam9pbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJGYWNlVmFsdWUiLCIkZGlnaXRzIiwiTWF0aCIsIiR2YWx1ZSIsInZhbGlkYXRlIiwic3VjY2VzcyIsImFyZyIsIml0ZW1zIiwidGhlbWUiLCJsYW5ndWFnZSIsImRhdGUiLCJmYWNlIiwiZWxlbWVudCIsImZhY2VWYWx1ZSIsInRpbWVyIiwiRmFjZSIsImRlbGF5IiwiYXV0b1N0YXJ0IiwiY291bnRkb3duIiwiYW5pbWF0aW9uUmF0ZSIsIm1ha2UiLCJkZWZhdWx0QXR0cmlidXRlcyIsImRlZmF1bHRWYWx1ZSIsImluc3RhbmNlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwicmVzZXQiLCJpc1N0b3BwZWQiLCJkZWZhdWx0RGF0YVR5cGUiLCJkYXRhVHlwZSIsImNyZWF0ZUZhY2VWYWx1ZSIsIiR0aW1lciIsIkNvbnNvbGVNZXNzYWdlcyIsIkNvdW50ZXIiLCJNaW51dGVDb3VudGVyIiwic2hvd1NlY29uZHMiLCJzaG93TGFiZWxzIiwib3JpZ2luYWxWYWx1ZSIsImEiLCJiIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmbG9vciIsImdldFRvdGFsU2Vjb25kcyIsInRvdGFsU2Vjb25kcyIsImFicyIsImNlaWwiLCJyb3VuZCIsImdldFRpbWUiLCJIb3VyQ291bnRlciIsImRhdGEiLCJnZXRIb3VycyIsIkRheUNvdW50ZXIiLCJnZXREYXlzIiwiVHdlbnR5Rm91ckhvdXJDbG9jayIsImdyb3VwcyIsIlR3ZWx2ZUhvdXJDbG9jayIsInNob3dNZXJpZGl1bSIsImhvdXJzIiwibWVyaWRpdW0iLCJXZWVrQ291bnRlciIsImdldFdlZWtzIiwiWWVhckNvdW50ZXIiLCJnZXRZZWFycyIsImZyb20iLCJkaWN0aW9uYXJ5Iiwic3dhcCIsImVsIiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwiSFRNTEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImlubmVySFRNTCIsIkRvbUNvbXBvbmVudCIsInBhcmVudCIsInRyYW5zbGF0ZSIsImNsYXNzIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiaW5zZXJ0QmVmb3JlIiwiJGVsIiwiJHBhcmVudCIsIiR0aGVtZSIsIiRsYW5ndWFnZSIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiaW5kZXgiLCJjaGlsZE5vZGVzIiwicXVlcnlTZWxlY3RvciIsInBhcnRzIiwiZ3JvdXAiLCJncm91cEVsIiwicXVlcnlTZWxlY3RvckFsbCIsImxpc3RzIiwibGlzdEVsIiwibGlzdFZhbHVlIiwiY3JlYXRlTGlzdCIsImRvbVZhbHVlIiwiY3JlYXRlR3JvdXAiLCJub2RlcyIsInQiLCJiZWZvcmVWYWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImNyZWF0ZUxpc3RJdGVtIiwiYWN0aXZlIiwiY3JlYXRlRGl2aWRlciIsIm1vdW50IiwiY3JlYXRlTGFiZWwiLCJGbGlwQ2xvY2siLCJmYWNlcyIsImFsaWFzZXMiLCJPcmlnaW5hbCIsIkVuZ2xpc2giLCJEZWZhdWx0VmFsdWVzIiwidXBkYXRlZCIsIiRmYWNlIiwic3RvcEF0IiwidW5kZWZpbmVkIiwibW91bnRlZCIsInJlbmRlcmVkIiwiRmFjZXMiLCJnZXRQdWJsaWNBdHRyaWJ1dGVzIiwiYmluZEZhY2VFdmVudHMiLCJpbml0aWFsaXplZCIsIiRzdG9wQXQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7SUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVVELE9BQVYsQ0FBTjtJQUNIO0FBRUQsSUFBTyxTQUFTRSxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtJQUN6QixNQUFHQyxVQUFV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
