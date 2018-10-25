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

          // this.interval(instance, fn);
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
          if (isFunction(value) && !value.name) {
            value = value();
          }

          var types = isArray(this.dataType) ? this.dataType : [this.dataType];
          types.push(FaceValue);

          if (this.dataType && !validate(value, types)) {
            error("The face value must be an instance of a ".concat(this.dataType.name));
          }

          this.emit('updated', this.$value = !(value instanceof FaceValue) ? this.createFaceValue(value) : value);
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
        key: "started",
        value: function started(instance) {
          this.originalValue = instance.originalValue;
        }
      }, {
        key: "initialized",
        value: function initialized(instance) {
          var _this = this;

          instance.on('off', function () {
            return _this.started(instance);
          });
          instance.on('start', function () {
            return _this.started(instance);
          });
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
     * FlipClock Catalan Language Pack
     *
     * This class will used to translate tokens into the Catalan language.
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
          //this.originalValue = value;
          this.face.reset(this, value);
          this.face.value = value;
          this.render();
        }
      }, {
        key: "originalValue",
        get: function get$$1() {
          return isFunction(this.$originalValue) && !this.$originalValue.name ? this.$originalValue() : this.$originalValue;
        },
        set: function set(value) {
          this.$originalValue = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0RpZ2l0aXplLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvSGVscGVycy9WYWxpZGF0ZS5qcyIsIi4uL3NyYy9qcy9Db25maWcvQ29uc29sZU1lc3NhZ2VzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZS5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9ZZWFyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RyYW5zbGF0ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvYXItYXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2NhLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jcy1jei5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGEtZGsuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RlLWRlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lbi11cy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZXMtZXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZhLWlyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9maS1maS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZnItY2EuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2hlLWlsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9odS1odS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaXQtaXQuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2phLWpwLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9rby1rci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbHYtbHYuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25sLWJlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9uby1uYi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcGwtcGwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3B0LWJyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9yby1yby5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcnUtcnUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3NrLXNrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zdi1zZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdGgtdGguanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RyLXRyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy91YS11YS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdm4tdm4uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLWNuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC10dy5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKGZuKSB7XG4gICAgaWYoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgxKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhaW4oYmVmb3JlLCBhZnRlcikge1xuICAgIHJldHVybiAoKSA9PiBhZnRlcihiZWZvcmUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRNYXAoZm4pIHtcbiAgICByZXR1cm4geCA9PiB7XG4gICAgICAgIHJldHVybiB4Lm1hcChmbikucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiB4KSh4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiBBcnJheS5pc0FycmF5KHgpID8gZGVlcEZsYXR0ZW4gKHgpIDogeCkoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1Y2ZpcnN0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoZGlnaXRzKSB7XG4gICAgcmV0dXJuIGRlZXBGbGF0dGVuKGRpZ2l0cykubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3ModmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEhdmFsdWUubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCwga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZXZlbnRzO1xuICAgIH1cblxuICAgIHNldCBldmVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZW1pdChrZXksIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oa2V5LCBmbiwgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZShrZXksIGZuKSB7XG4gICAgICAgIGZuID0gY2hhaW4oZm4sICgpID0+IHRoaXMub2ZmKGtleSwgZm4pKTtcblxuICAgICAgICB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSA/IHRoaXNba2V5XSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBoYW5kbGU6IG51bGwsXG4gICAgICAgICAgICBzdGFydGVkOiBudWxsLFxuICAgICAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnZhbDogaW50ZXJ2YWxcbiAgICAgICAgfSwgaXNPYmplY3QoaW50ZXJ2YWwpID8gaW50ZXJ2YWwgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZWxhcHNlZCB0aGUgdGltZSBhcyBhbiBpbnRlcmdlclxuICAgICAqXG4gICAgICogQHJldHVybiBJbnRlZ2VyXG4gICAgICovXG4gICAgZ2V0IGVsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ICogdGhpcy5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlO1xuICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy5sYXN0TG9vcCA+PSB0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TG9vcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSB0aW1lci4gVGhpcyBtZXRob2QgaXMgY2hhaW5hYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICBGdW5jdGlvbiBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtaW5pbXVtRGlnaXRzOiAwLFxuICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQobnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFByZXBlbmRaZXJvID0gb3B0aW9ucy5wcmVwZW5kTGVhZGluZ1plcm8gJiZcbiAgICAgICAgICAgIG51bWJlci50b1N0cmluZygpLnNwbGl0KCcnKS5sZW5ndGggPT09IDE7XG5cbiAgICAgICAgcmV0dXJuIChzaG91bGRQcmVwZW5kWmVybyA/ICcwJyA6ICcnKS5jb25jYXQobnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWdpdHMoYXJyLCBtaW4pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGVlcEZsYXR0ZW4oYXJyKS5sZW5ndGg7XG5cbiAgICAgICAgaWYobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWluIC0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbMF0udW5zaGlmdCgnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlnaXRzKGZsYXR0ZW4oW3ZhbHVlXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGRlZXBGbGF0dGVuKFtudW1iZXJdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwZW5kKG51bWJlcikuc3BsaXQoJycpO1xuICAgICAgICB9KSk7XG4gICAgfSksIG9wdGlvbnMubWluaW11bURpZ2l0cyB8fCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlcyA9IFt7XG4gICAgLy8gMC05XG4gICAgbWluOiA0OCxcbiAgICBtYXg6IDU3XG59LHtcbiAgICAvLyBhLXpcbiAgICBtaW46IDY1LFxuICAgIG1heDogOTBcbn0se1xuICAgIC8vIEEtWlxuICAgIG1pbjogOTcsXG4gICAgbWF4OiAxMjJcbn1dO1xuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiByYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKHJhbmdlc1tpXS5taW4gPD0gY29kZSAmJiByYW5nZXNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlIDwgcmFuZ2UubWF4ID8gY29kZSArIDEgOiByYW5nZS5taW5cbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFyQ29kZShjaGFyLCBmbikge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGNoYXIpO1xuICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZm4ocmFuZ2UsIGNvZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXYodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlID4gcmFuZ2UubWluID8gY29kZSAtIDEgOiByYW5nZS5tYXhcbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgZGlnaXRpemUgZnJvbSAnLi4vSGVscGVycy9EaWdpdGl6ZSc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBsZW5ndGgsIGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZVZhbHVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IDBcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgZGlnaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1pbmltdW1EaWdpdHMgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaWdpdHMsIGxlbmd0aCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGlnaXRzID0gZGlnaXRpemUodGhpcy5mb3JtYXQodmFsdWUpLCB7XG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiB0aGlzLm1pbmltdW1EaWdpdHMsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRoaXMucHJlcGVuZExlYWRpbmdaZXJvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzTmFOKCkge1xuICAgICAgICByZXR1cm4gaXNOYU4odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBpc051bWJlcigpXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBpc051bGwgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNDbGFzcyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgLi4uYXJncykge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBmbGF0dGVuKGFyZ3MpLmZvckVhY2goYXJnID0+IHtcbiAgICAgICAgaWYoIChpc051bGwodmFsdWUpICYmIGlzTnVsbChhcmcpKSB8fFxuICAgICAgICAgICAgKGlzT2JqZWN0KGFyZykgJiYgKHZhbHVlIGluc3RhbmNlb2YgYXJnKSkgfHxcbiAgICAgICAgICAgIChpc0Z1bmN0aW9uKGFyZykgJiYgIWlzQ2xhc3MoYXJnKSAmJiBhcmcodmFsdWUpID09PSB0cnVlKSB8fFxuICAgICAgICAgICAgKGlzU3RyaW5nKGFyZykgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gYXJnKSkpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpdGVtczogJ1RoZSBpdGVtcyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicsXG4gICAgdGhlbWU6ICdUaGUgdGhlbWUgcHJvcGVydHkgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICBsYW5ndWFnZTogJ1RoZSBsYW5ndWFnZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGRhdGU6ICdUaGUgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERhdGUuJyxcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2UgY2xhc3MuJyxcbiAgICBlbGVtZW50OiAnVGhlIGVsZW1lbnQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhbiBIVE1MRWxlbWVudCcsXG4gICAgZmFjZVZhbHVlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIEZhY2VWYWx1ZSBjbGFzcy4nLFxuICAgIHRpbWVyOiAnVGhlIHRpbWVyIHByb3BlcnR5IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBUaW1lciBjbGFzcy4nXG59O1xuIiwiaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBlcnJvciwgaXNOdWxsLCBpc0FycmF5LCBpc0Z1bmN0aW9uLCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBkZWxheSA9IGF0dHJpYnV0ZXMuZGVsYXkgfHwgMTAwMDtcblxuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhdXRvU3RhcnQ6IHRydWUsXG4gICAgICAgICAgICBjb3VudGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uUmF0ZTogZGVsYXkgLyAyLFxuICAgICAgICAgICAgdGltZXI6IFRpbWVyLm1ha2UoZGVsYXkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgKHRoaXMuZGVmYXVsdEF0dHJpYnV0ZXMoKSB8fCB7fSksIChhdHRyaWJ1dGVzIHx8IHt9KVxuICAgICAgICApKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gIWlzTnVsbCh2YWx1ZSkgPyB2YWx1ZSA6IHRoaXMuZGVmYXVsdFZhbHVlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGF0YVR5cGUoKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYoaXNGdW5jdGlvbih2YWx1ZSkgJiYgIXZhbHVlLm5hbWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHR5cGVzID0gaXNBcnJheSh0aGlzLmRhdGFUeXBlKSA/IHRoaXMuZGF0YVR5cGUgOiBbdGhpcy5kYXRhVHlwZV07XG5cbiAgICAgICAgdHlwZXMucHVzaChGYWNlVmFsdWUpO1xuXG4gICAgICAgIGlmKHRoaXMuZGF0YVR5cGUgJiYgIXZhbGlkYXRlKHZhbHVlLCB0eXBlcykpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgZmFjZSB2YWx1ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgJHt0aGlzLmRhdGFUeXBlLm5hbWV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZWQnLFxuICAgICAgICAgICAgdGhpcy4kdmFsdWUgPSAhKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSA/IHRoaXMuY3JlYXRlRmFjZVZhbHVlKHZhbHVlKSA6IHZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGltZXI7XG4gICAgfVxuXG4gICAgc2V0IHRpbWVyKHRpbWVyKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh0aW1lciwgVGltZXIpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGltZXIgPSB0aW1lcjtcbiAgICB9XG5cbiAgICBpbnRlcnZhbChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgaWYodGhpcy5jb3VudGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgfVxuXG4gICAgc3RhcnQoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIC8vIHRoaXMuaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKTtcblxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHRoaXMuaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICB9XG5cbiAgICBzdG9wKGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICB9XG5cbiAgICByZXNldChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgoKSA9PiB0aGlzLmludGVydmFsKGluc3RhbmNlLCBmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3Jlc2V0Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmFjZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGYWNlVmFsdWUubWFrZSh2YWx1ZSwge1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB0aGlzLmZvcm1hdCh2YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVuZGVyZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBtb3VudGVkKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b1N0YXJ0ICYmIHRoaXMudGltZXIuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnZhbHVlICsgMTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgLSAxO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW51dGVDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhcnRlZChpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLm9uKCdvZmYnLCAoKSA9PiB0aGlzLnN0YXJ0ZWQoaW5zdGFuY2UpKTtcbiAgICAgICAgaW5zdGFuY2Uub24oJ3N0YXJ0JywgKCkgPT4gdGhpcy5zdGFydGVkKGluc3RhbmNlKSk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgRGF0ZTtcblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhdGhpcy50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldFNlY29uZHMoYSwgYildXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjApO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoYSwgYikge1xuICAgICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoTWF0aC5jZWlsKHRvdGFsU2Vjb25kcyA9PT0gNjAgPyAwIDogdG90YWxTZWNvbmRzICUgNjApKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbFNlY29uZHMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBNaW51dGVDb3VudGVyIGZyb20gJy4vTWludXRlQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXJDb3VudGVyIGV4dGVuZHMgTWludXRlQ291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRNaW51dGVzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldE1pbnV0ZXMoYSwgYikgJSA2MCk7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlDb3VudGVyIGV4dGVuZHMgSG91ckNvdW50ZXIge1xuXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICF0aGlzLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQpO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldEhvdXJzKGEsIGIpICUgMjQpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cbiAgICAvKlxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuICAgICovXG5cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dTZWNvbmRzOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0xhYmVsczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW1xuICAgICAgICAgICAgW3ZhbHVlLmdldEhvdXJzKCldLFxuICAgICAgICAgICAgW3ZhbHVlLmdldE1pbnV0ZXMoKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaChbdmFsdWUuZ2V0U2Vjb25kcygpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IERhdGU7XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBUd2VudHlGb3VySG91ckNsb2NrIGZyb20gJy4vVHdlbnR5Rm91ckhvdXJDbG9jayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWx2ZUhvdXJDbG9jayBleHRlbmRzIFR3ZW50eUZvdXJIb3VyQ2xvY2sge1xuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gRGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TWVyaWRpdW06IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuXG5cdFx0Y29uc3QgZ3JvdXBzID0gW1xuXHRcdFx0aG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzKSxcblx0XHRcdHZhbHVlLmdldE1pbnV0ZXMoKVxuXHRcdF07XG5cbiAgICAgICAgdGhpcy5tZXJpZGl1bSA9IGhvdXJzID4gMTIgPyAncG0nIDogJ2FtJztcblxuXHRcdGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcblx0XHRcdGdyb3Vwcy5wdXNoKHZhbHVlLmdldFNlY29uZHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEYXlDb3VudGVyIGZyb20gJy4vRGF5Q291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtDb3VudGVyIGV4dGVuZHMgRGF5Q291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3KTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldERheXMoYSwgYikgJSA3KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhckNvdW50ZXIgZXh0ZW5kcyBXZWVrQ291bnRlciB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIXRoaXMudGltZXIuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0WWVhcnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFllYXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3IC8gNTIpKTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRXZWVrcyhhLCBiKSAlIDUyKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZnJvbSkge1xuICAgIHJldHVybiAoaXNTdHJpbmcoZnJvbSB8fCAnZW4tdXMnKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbSkuZGljdGlvbmFyeVt2YWx1ZV0gfHwgdmFsdWU7XG59O1xuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuKGNvbmRpdGlvbiwgaHRtbCkge1xuXHRyZXR1cm4gY29uZGl0aW9uID09PSB0cnVlID8gaHRtbCA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dhcChlbCwgZXhpc3RpbmcpIHtcblx0aWYoZXhpc3RpbmcucGFyZW50Tm9kZSkge1xuXHRcdGV4aXN0aW5nLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsLCBleGlzdGluZyk7XG5cdFx0XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0cmV0dXJuIGV4aXN0aW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cmlidXRlcykge1xuXHRpZihpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuXHRcdGZvcihjb25zdCBpIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVzW2ldKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pIHtcblx0aWYoaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5maWx0ZXIobm9vcCkuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRpZihjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWwsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuXHR9XG5cblx0c2V0QXR0cmlidXRlcyhlbCwgaXNPYmplY3QoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBhdHRyaWJ1dGVzKTtcblxuXHRpZighaXNPYmplY3QoY2hpbGRyZW4pICYmICFpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGVsLmlubmVySFRNTCA9IGNoaWxkcmVuO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbilcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLypcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGlzQXJyYXkodmFsdWUpID9cblx0XHRkZWVwRmxhdHRlbih2YWx1ZSkuZmlsdGVyKG5vb3ApLmpvaW4oJycpIDogdmFsdWU7XG5cblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn1cbiovXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vSGVscGVycy9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgc3dhcCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGhlbWUpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIHRoZW1lIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgbGFuZ3VhZ2UgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG5cdFx0aWYoIXRoaXMudGhlbWVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX0gY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbDtcbiAgICB9XG5cbiAgICBzZXQgZWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBudWxsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudDtcbiAgICB9XG5cbiAgICBzZXQgcGFyZW50KHBhcmVudCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGhlbWU7XG4gICAgfVxuXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgbGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRsYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZShrZXksIHRoaXMubGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIHQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZShrZXkpO1xuICAgIH1cblxuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lID09PSAnZmxpcC1jbG9jaycgPyB0aGlzLmNsYXNzTmFtZSA6ICdmbGlwLWNsb2NrLScgKyB0aGlzLmNsYXNzTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRoZW1lW3RoaXMubmFtZV0oZWwsIHRoaXMpO1xuXG4gICAgICAgIGlmKCF0aGlzLmVsKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmVsLmlubmVySFRNTCAhPT0gZWwuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gc3dhcChlbCwgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcblx0fVxuXG4gICAgbW91bnQocGFyZW50LCBiZWZvcmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgaWYoIWJlZm9yZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlkZXIgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IG5leHQsIHByZXYsICB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgaXNPYmplY3QsICB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXRlbXM7XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGl0ZW1zID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdEl0ZW0odmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICB9LCBpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0sIGlzT2JqZWN0KGxhYmVsKSA/IGxhYmVsIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgdG9wJ30pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCBib3R0b20nfSlcbiAgICBdKTtcbn1cbiIsImltcG9ydCB7IG5leHQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmZ1bmN0aW9uIGNoaWxkKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBlbCA/IChlbC5jaGlsZE5vZGVzID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBlbFtpbmRleF0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hhcihlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwLWNsb2NrLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCAudG9wJykuaW5uZXJIVE1MIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnN0YW5jZS52YWx1ZS5kaWdpdHMubWFwKChncm91cCwgeCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEVsID0gY2hpbGQoaW5zdGFuY2UuZWwgPyBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1ncm91cCcpIDogbnVsbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsID8gZ3JvdXBFbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1saXN0JykgOiBudWxsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGluc3RhbmNlLmZhY2UuYW5pbWF0aW9uUmF0ZSB8fCBpbnN0YW5jZS5mYWNlLmRlbGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuXG4gICAgaW5zdGFuY2UuaXRlbXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGluc3RhbmNlLnZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGJlZm9yZVZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgXTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnJlbmRlcigpKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnN0YW5jZS5hY3RpdmUgPT09IHRydWUgPyAnYWN0aXZlJyA6IChcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlID09PSBmYWxzZSA/ICdiZWZvcmUnIDogbnVsbFxuICAgICk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAndG9wJ30pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ2JvdHRvbSd9KVxuICAgICAgICBdLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lcid9KVxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBUd2VudHlGb3VySG91ckNsb2NrKGVsLCBpbnN0YW5jZSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dNZXJpZGl1bSAmJiBpbnN0YW5jZS5mYWNlLm1lcmlkaXVtKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaW5zdGFuY2UuY3JlYXRlTGFiZWwoaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLmNoaWxkTm9kZXNbZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsYWJlbC5tb3VudChwYXJlbnQpLmNsYXNzTGlzdC5hZGQoJ2ZsaXAtY2xvY2stbWVyaWRpdW0nKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s4XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbN10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbOV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgneWVhcnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1sxMF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9GbGlwQ2xvY2snO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCAqIGFzIGZhY2VzIGZyb20gJy4vRmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRGl2aWRlcixcbiAgICBGbGlwQ2xvY2ssXG4gICAgR3JvdXAsXG4gICAgTGFiZWwsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBmYWNlc1xufTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEFyYWJpYyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfYs9mG2YjYp9iqJyxcbiAgICAnbW9udGhzJyAgOiAn2LTZh9mI2LEnLFxuICAgICdkYXlzJyAgICA6ICfYo9mK2KfZhScsXG4gICAgJ2hvdXJzJyAgIDogJ9iz2KfYudin2KonLFxuICAgICdtaW51dGVzJyA6ICfYr9mC2KfYptmCJyxcbiAgICAnc2Vjb25kcycgOiAn2KvZiNin2YbZiidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydhcicsICdhci1hcicsICdhcmFiaWMnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhdGFsYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2F0YWxhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyA6ICdBbnlzJyxcbiAgICAnbW9udGhzJyA6ICdNZXNvcycsXG4gICAgJ2RheXMnIDogJ0RpZXMnLFxuICAgICdob3VycycgOiAnSG9yZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dHMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWdvbnMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnY2EnLCAnY2EtZXMnLCAnY2F0YWxhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ3plY2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ3plY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdSb2t5JyxcbiAgICAnbW9udGhzJyAgOiAnTcSbc8OtY2UnLFxuICAgICdkYXlzJyAgICA6ICdEbnknLFxuICAgICdob3VycycgICA6ICdIb2RpbnknLFxuICAgICdtaW51dGVzJyA6ICdNaW51dHknLFxuICAgICdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NzJywgJ2NzLWN6JywgJ2N6JywgJ2N6LWNzJywgJ2N6ZWNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBEYW5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRGFuaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuZWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdlJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RhJywgJ2RhLWRrJywgJ2RhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgR2VybWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEdlcm1hbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdKYWhyZScsXG5cdCdtb250aHMnICA6ICdNb25hdGUnLFxuXHQnZGF5cycgICAgOiAnVGFnZScsXG5cdCdob3VycycgICA6ICdTdHVuZGVuJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZW4nLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGUnLCAnZGUtZGUnLCAnZ2VybWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBFbmdsaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWWVhcnMnLFxuXHQnbW9udGhzJyAgOiAnTW9udGhzJyxcblx0J2RheXMnICAgIDogJ0RheXMnLFxuXHQnaG91cnMnICAgOiAnSG91cnMnLFxuXHQnbWludXRlcycgOiAnTWludXRlcycsXG5cdCdzZWNvbmRzJyA6ICdTZWNvbmRzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2VuJywgJ2VuLXVzJywgJ2VuZ2xpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNwYW5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3BhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBw7FvcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEw61hcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2VzJywgJ2VzLWVzJywgJ3NwYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFBlcnNpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRW5nbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfYs9in2YQnLFxuXHQnbW9udGhzJyAgOiAn2YXYp9mHJyxcblx0J2RheXMnICAgIDogJ9ix2YjYsicsXG5cdCdob3VycycgICA6ICfYs9in2LnYqicsXG5cdCdtaW51dGVzJyA6ICfYr9mC24zZgtmHJyxcblx0J3NlY29uZHMnIDogJ9ir2KfZhtuM2YcnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmEnLCAnZmEtaXInLCAncGVyc2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRmlubmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBGaW5uaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1Z1b3R0YScsXG5cdCdtb250aHMnICA6ICdLdXVrYXV0dGEnLFxuXHQnZGF5cycgICAgOiAnUMOkaXbDpMOkJyxcblx0J2hvdXJzJyAgIDogJ1R1bnRpYScsXG5cdCdtaW51dGVzJyA6ICdNaW51dXR0aWEnLFxuXHQnc2Vjb25kcycgOiAnU2VrdW50aWEnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZmknLCAnZmktZmknLCAnZmlubmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ2FuYWRpYW4gRnJlbmNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0FucycsXG4gICAgJ21vbnRocycgIDogJ01vaXMnLFxuICAgICdkYXlzJyAgICA6ICdKb3VycycsXG4gICAgJ2hvdXJzJyAgIDogJ0hldXJlcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWNvbmRlcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmcicsICdmci1jYScsICdmcmVuY2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEhlYnJldyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn16nXoNeZ150nLFxuXHQnbW9udGhzJyAgOiAn15fXldeT16knLFxuXHQnZGF5cycgICAgOiAn15nXnteZ150nLFxuXHQnaG91cnMnICAgOiAn16nXoteV16onLFxuXHQnbWludXRlcycgOiAn15PXp9eV16onLFxuXHQnc2Vjb25kcycgOiAn16nXoNeZ15XXqidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydpbCcsICdoZS1pbCcsICdoZWJyZXcnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEh1bmdhcmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBIdW5nYXJpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4l2JyxcbiAgICAnbW9udGhzJyAgOiAnSMOzbmFwJyxcbiAgICAnZGF5cycgICAgOiAnTmFwJyxcbiAgICAnaG91cnMnICAgOiAnw5NyYScsXG4gICAgJ21pbnV0ZXMnIDogJ1BlcmMnLFxuICAgICdzZWNvbmRzJyA6ICdNw6Fzb2RwZXJjJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2h1JywgJ2h1LWh1JywgJ2h1bmdhcmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSXRhbGlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBJdGFsaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0FubmknLFxuXHQnbW9udGhzJyAgOiAnTWVzaScsXG5cdCdkYXlzJyAgICA6ICdHaW9ybmknLFxuXHQnaG91cnMnICAgOiAnT3JlJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0aScsXG5cdCdzZWNvbmRzJyA6ICdTZWNvbmRpJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RhJywgJ2RhLWRrJywgJ2RhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSmFwYW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSmFwYW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pmCJyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnanAnLCAnamEtanAnLCAnamFwYW5lc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEtvcmVhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBLb3JlYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn64WEJyxcblx0J21vbnRocycgIDogJ+yblCcsXG5cdCdkYXlzJyAgICA6ICfsnbwnLFxuXHQnaG91cnMnICAgOiAn7IucJyxcblx0J21pbnV0ZXMnIDogJ+u2hCcsXG5cdCdzZWNvbmRzJyA6ICfstIgnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsna28nLCAna28ta3InLCAna29yZWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBMYXR2aWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIExhdHZpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdHYWRpJyxcbiAgICAnbW9udGhzJyAgOiAnTcSTbmXFoWknLFxuICAgICdkYXlzJyAgICA6ICdEaWVuYXMnLFxuICAgICdob3VycycgICA6ICdTdHVuZGFzJyxcbiAgICAnbWludXRlcycgOiAnTWluxat0ZXMnLFxuICAgICdzZWNvbmRzJyA6ICdTZWt1bmRlcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydsdicsICdsdi1sdicsICdsYXR2aWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBEdXRjaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBEdXRjaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0phcmVuJyxcbiAgICAnbW9udGhzJyAgOiAnTWFhbmRlbicsXG4gICAgJ2RheXMnICAgIDogJ0RhZ2VuJyxcbiAgICAnaG91cnMnICAgOiAnVXJlbicsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0ZW4nLFxuICAgICdzZWNvbmRzJyA6ICdTZWNvbmRlbidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydubCcsICdubC1iZScsICdkdXRjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTm9yd2VnaWFuLUJva23DpWwgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTm9yd2VnaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuZWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdlcicsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydubycsICduYicsICduby1uYicsICdub3J3ZWdpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFBvbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQb2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnbGF0Jyxcblx0J21vbnRocycgIDogJ21pZXNpxJljeScsXG5cdCdkYXlzJyAgICA6ICdkbmknLFxuXHQnaG91cnMnICAgOiAnZ29kemluJyxcblx0J21pbnV0ZXMnIDogJ21pbnV0Jyxcblx0J3NlY29uZHMnIDogJ3Nla3VuZCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwbCcsICdwbC1wbCcsICdwb2xpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFBvcnR1Z3Vlc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9ydHVndWVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm9zJyxcblx0J21vbnRocycgIDogJ01lc2VzJyxcblx0J2RheXMnICAgIDogJ0RpYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydwdCcsICdwdC1icicsICdwb3J0dWd1ZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTd2VkaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFN3ZWRpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnOiAnQW5pJyxcblx0J21vbnRocyc6ICdMdW5pJyxcblx0J2RheXMnOiAnWmlsZScsXG5cdCdob3Vycyc6ICdPcmUnLFxuXHQnbWludXRlcyc6ICdNaW51dGUnLFxuXHQnc2Vjb25kcyc6ICdzU2VjdW5kZSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydybycsICdyby1ybycsICdyb21hbmEnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFJ1c3NpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUnVzc2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9C70LXRgicsXG4gICAgJ21vbnRocycgIDogJ9C80LXRgdGP0YbQtdCyJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdC10LknLFxuICAgICdob3VycycgICA6ICfRh9Cw0YHQvtCyJyxcbiAgICAnbWludXRlcycgOiAn0LzQuNC90YPRgicsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydydScsICdydS1ydScsICdydXNzaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTbG92YWsgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU2xvdmFrIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1Jva3knLFxuXHQnbW9udGhzJyAgOiAnTWVzaWFjZScsXG5cdCdkYXlzJyAgICA6ICdEbmknLFxuXHQnaG91cnMnICAgOiAnSG9kaW55Jyxcblx0J21pbnV0ZXMnIDogJ01pbsO6dHknLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzaycsICdzay1zaycsICdzbG92YWsnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFN3ZWRpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3dlZGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmFkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnYXInLFxuXHQnaG91cnMnICAgOiAnVGltbWFyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc3YnLCAnc3Ytc2UnLCAnc3dlZGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVGhhaSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUaGFpIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+C4m+C4tScsXG5cdCdtb250aHMnICA6ICfguYDguJTguLfguK3guJknLFxuXHQnZGF5cycgICAgOiAn4Lin4Lix4LiZJyxcblx0J2hvdXJzJyAgIDogJ+C4iuC4seC5iOC4p+C5guC4oeC4hycsXG5cdCdtaW51dGVzJyA6ICfguJnguLLguJfguLUnLFxuXHQnc2Vjb25kcycgOiAn4Lin4Li04LiZ4Liy4LiX4Li1J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3RoJywgJ3RoLXRoJywgJ3RoYWknXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFR1cmtpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHVya2lzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZxLFsJyxcblx0J21vbnRocycgIDogJ0F5Jyxcblx0J2RheXMnICAgIDogJ0fDvG4nLFxuXHQnaG91cnMnICAgOiAnU2FhdCcsXG5cdCdtaW51dGVzJyA6ICdEYWtpa2EnLFxuXHQnc2Vjb25kcycgOiAnU2FuaXllJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3RyJywgJ3RyLXRyJywgJ3R1cmtpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFVrcmFpbmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBVa3JhaW5pYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfRgNC+0LrQuCcsXG4gICAgJ21vbnRocycgIDogJ9C80ZbRgdGP0YbRlicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3RlicsXG4gICAgJ2hvdXJzJyAgIDogJ9Cz0L7QtNC40L3QuCcsXG4gICAgJ21pbnV0ZXMnIDogJ9GF0LLQuNC70LjQvdC4JyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC00LgnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndWEnLCAndWEtdWEnLCAndWtyYWluZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgVmlldG5hbWVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIFZpZXRuYW1lc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnTsSDbScsXG5cdCdtb250aHMnICA6ICdUaMOhbmcnLFxuXHQnZGF5cycgICAgOiAnTmfDoHknLFxuXHQnaG91cnMnICAgOiAnR2nhu50nLFxuXHQnbWludXRlcycgOiAnUGjDunQnLFxuXHQnc2Vjb25kcycgOiAnR2nDonknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndm4nLCAndm4tdm4nLCAndmlldG5hbWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDaGluZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aXticsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poJywgJ3poLWNuJywgJ2NoaW5lc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRyYWRpdGlvbmFsIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHJhZGl0aW9uYWwgQ2hpbmVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd6aC10dyddO1xuIiwiaW1wb3J0IHsgQ291bnRlciB9IGZyb20gJy4uL0ZhY2VzJztcbmltcG9ydCB7IE9yaWdpbmFsIH0gZnJvbSAnLi4vVGhlbWVzJztcbmltcG9ydCB7IEVuZ2xpc2ggfSBmcm9tICcuLi9MYW5ndWFnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmFjZTogQ291bnRlcixcbiAgICB0aGVtZTogT3JpZ2luYWwsXG4gICAgbGFuZ3VhZ2U6IEVuZ2xpc2hcbn07XG4iLCJpbXBvcnQgKiBhcyBGYWNlcyBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBHcm91cCBmcm9tICcuLi9Db21wb25lbnRzL0dyb3VwJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9Db21wb25lbnRzL0xhYmVsJztcbmltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9EaXZpZGVyJztcbmltcG9ydCBEZWZhdWx0VmFsdWVzIGZyb20gJy4uL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNPYmplY3QsIGlzRnVuY3Rpb24sIGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGlwQ2xvY2sgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZWwsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZShlbCwgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc09iamVjdCh2YWx1ZSkgJiYgIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZhY2UgPSBhdHRyaWJ1dGVzLmZhY2UgfHwgRGVmYXVsdFZhbHVlcy5mYWNlO1xuXG4gICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmZhY2U7XG5cbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBEZWZhdWx0VmFsdWVzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgdGhpcy5mYWNlID0gZmFjZTtcbiAgICAgICAgdGhpcy5tb3VudChlbCk7XG4gICAgfVxuXG4gICAgZ2V0IGZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRmYWNlO1xuICAgIH1cblxuICAgIHNldCBmYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgW0ZhY2UsICdzdHJpbmcnLCAnZnVuY3Rpb24nXSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzU3RyaW5nKHZhbHVlKSAmJiBGYWNlc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgIHRoaXMuJGZhY2UgPSBuZXcgRmFjZXNbdmFsdWVdKHRoaXMub3JpZ2luYWxWYWx1ZSwgdGhpcy5nZXRQdWJsaWNBdHRyaWJ1dGVzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZmFjZSA9IG5ldyB2YWx1ZSh0aGlzLm9yaWdpbmFsVmFsdWUsIHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZEZhY2VFdmVudHMoKTtcbiAgICAgICAgdGhpcy5mYWNlLmluaXRpYWxpemVkKHRoaXMpO1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhpcy4kc3RvcEF0KSA/IHRoaXMuJHN0b3BBdCh0aGlzKSA6IHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICBzZXQgc3RvcEF0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3BBdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0aW1lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjZS50aW1lcjtcbiAgICB9XG5cbiAgICBzZXQgdGltZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLnRpbWVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNlLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAvL3RoaXMub3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQodGhpcywgdmFsdWUpO1xuICAgICAgICB0aGlzLmZhY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgb3JpZ2luYWxWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlzRnVuY3Rpb24odGhpcy4kb3JpZ2luYWxWYWx1ZSkgJiYgIXRoaXMuJG9yaWdpbmFsVmFsdWUubmFtZVxuICAgICAgICApID8gdGhpcy4kb3JpZ2luYWxWYWx1ZSgpIDogdGhpcy4kb3JpZ2luYWxWYWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgb3JpZ2luYWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYmluZEZhY2VFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGZuID0gKCkgPT4gdGhpcy51cGRhdGVkKCk7XG5cbiAgICAgICAgdGhpcy4kZmFjZS5vZmYoJ3VwZGF0ZWQnLCBmbikub24oJ3VwZGF0ZWQnLCBmbik7XG5cbiAgICAgICAgWyd1cGRhdGVkJywgJ3N0YXJ0JywgJ3N0b3AnLCAncmVzZXQnLCAnaW50ZXJ2YWwnXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4gdGhpcy5lbWl0KGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5mYWNlLm9mZihldmVudCwgZm4pLm9uKGV2ZW50LCBmbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYoIHRoaXMuc3RvcEF0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcEF0ID09PSB0aGlzLmZhY2UudmFsdWUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91bnQoZWwpIHtcbiAgICAgICAgc3VwZXIubW91bnQoZWwpO1xuXG4gICAgICAgIHRoaXMuZmFjZS5tb3VudGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcGFyZW50IHJlbmRlciBmdW5jdGlvblxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGZhY2UgaGFzIGEgcmVuZGVyIGZ1bmN0aW9uIGRlZmluZWQgaW4gdGhlIHRoZW1lLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBhIGZhY2UgdG8gY29tcGxldGVseSByZS1yZW5kZXIgb3IgYWRkIHRvIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgZmFjZSBzcGVjaWZpYyBpbnRlcmZhY2VzIGZvciBhIHRoZW1lLlxuICAgICAgICBpZih0aGlzLnRoZW1lLmZhY2VzW3RoaXMuZmFjZS5uYW1lXSkge1xuICAgICAgICAgICAgdGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0odGhpcy5lbCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXNzIHRoZSBjbG9jayBpbnN0YW5jZSB0byB0aGUgcmVuZGVyZWQoKSBmdW5jdGlvbiBvbiB0aGUgZmFjZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgZ2xvYmFsIG1vZGlmaWNhdGlvbnMgdG8gdGhlIHJlbmRlcmVkIHRlbXBsYXRlcyBub3RcbiAgICAgICAgLy8gdGhlbWUgc3BlY2lmaWMuXG4gICAgICAgIHRoaXMuZmFjZS5yZW5kZXJlZCh0aGlzKTtcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHJlbmRlcmVkIGVsZW1lbnQuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5yZXNldCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgdGhpcy5mYWNlLnN0YXJ0KHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5zdG9wKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVEaXZpZGVyKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIERpdmlkZXIubWFrZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExpc3QubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMYWJlbCh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gTGFiZWwubWFrZSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVHcm91cChpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gR3JvdXAubWFrZShpdGVtcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdEZhY2UodmFsdWUpIHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWUsIFtGYWNlLCAnZnVuY3Rpb24nXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBEZWZhdWx0VmFsdWVzLmZhY2UgPSB2YWx1ZTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdFRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGhlbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy50aGVtZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRMYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImNhbGxiYWNrIiwiZm4iLCJpc0Z1bmN0aW9uIiwiYXBwbHkiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJub29wIiwidmFsdWUiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsImNoYWluIiwiYmVmb3JlIiwiYWZ0ZXIiLCJjb25jYXRNYXAiLCJ4IiwibWFwIiwicmVkdWNlIiwieSIsImNvbmNhdCIsImZsYXR0ZW4iLCJkZWVwRmxhdHRlbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImRpZ2l0cyIsImlzQ2xhc3MiLCJGdW5jdGlvbiIsIm5hbWUiLCJpc1N0cmluZyIsImlzT2JqZWN0IiwidHlwZSIsImlzTnVtYmVyIiwiaXNOYU4iLCJrZWJhYkNhc2UiLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJDb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRzIiwia2V5IiwiYXJncyIsImZvckVhY2giLCJldmVudCIsInB1c2giLCJmaWx0ZXIiLCJvZmYiLCJvbiIsImhhc093blByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldEF0dHJpYnV0ZSIsImtleXMiLCJnZXRBdHRyaWJ1dGVzIiwibWF0Y2giLCJvYmoiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWVzIiwiaSIsImNvbnN0cnVjdG9yIiwiJGV2ZW50cyIsIlRpbWVyIiwiaW50ZXJ2YWwiLCJjb3VudCIsImhhbmRsZSIsInN0YXJ0ZWQiLCJydW5uaW5nIiwic3RvcCIsInN0YXJ0IiwiZW1pdCIsIkRhdGUiLCJsYXN0TG9vcCIsIm5vdyIsImxvb3AiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1J1bm5pbmciLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaWdpdGl6ZSIsIm9wdGlvbnMiLCJtaW5pbXVtRGlnaXRzIiwicHJlcGVuZExlYWRpbmdaZXJvIiwicHJlcGVuZCIsIm51bWJlciIsInNob3VsZFByZXBlbmRaZXJvIiwidG9TdHJpbmciLCJzcGxpdCIsImFyciIsIm1pbiIsInVuc2hpZnQiLCJyYW5nZXMiLCJtYXgiLCJmb3JtYXQiLCJwYXJzZUZsb2F0IiwiZmluZFJhbmdlIiwiY2hhciIsImNvZGUiLCJjaGFyQ29kZUF0IiwibmV4dCIsImNvbnZlcnRlZCIsImNoYXJDb2RlIiwicmFuZ2UiLCJqb2luIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicHJldiIsIkZhY2VWYWx1ZSIsIiRkaWdpdHMiLCJNYXRoIiwiJHZhbHVlIiwidmFsaWRhdGUiLCJzdWNjZXNzIiwiYXJnIiwiaXRlbXMiLCJ0aGVtZSIsImxhbmd1YWdlIiwiZGF0ZSIsImZhY2UiLCJlbGVtZW50IiwiZmFjZVZhbHVlIiwidGltZXIiLCJGYWNlIiwiZGVsYXkiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwibWFrZSIsImRlZmF1bHRBdHRyaWJ1dGVzIiwiZGVmYXVsdFZhbHVlIiwiaW5zdGFuY2UiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJyZXNldCIsImlzU3RvcHBlZCIsImRlZmF1bHREYXRhVHlwZSIsInR5cGVzIiwiZGF0YVR5cGUiLCJjcmVhdGVGYWNlVmFsdWUiLCIkdGltZXIiLCJDb25zb2xlTWVzc2FnZXMiLCJDb3VudGVyIiwiTWludXRlQ291bnRlciIsInNob3dTZWNvbmRzIiwic2hvd0xhYmVscyIsIm9yaWdpbmFsVmFsdWUiLCJhIiwiYiIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZmxvb3IiLCJnZXRUb3RhbFNlY29uZHMiLCJ0b3RhbFNlY29uZHMiLCJhYnMiLCJjZWlsIiwicm91bmQiLCJnZXRUaW1lIiwiSG91ckNvdW50ZXIiLCJkYXRhIiwiZ2V0SG91cnMiLCJEYXlDb3VudGVyIiwiZ2V0RGF5cyIsIlR3ZW50eUZvdXJIb3VyQ2xvY2siLCJncm91cHMiLCJUd2VsdmVIb3VyQ2xvY2siLCJzaG93TWVyaWRpdW0iLCJob3VycyIsIm1lcmlkaXVtIiwiV2Vla0NvdW50ZXIiLCJnZXRXZWVrcyIsIlllYXJDb3VudGVyIiwiZ2V0WWVhcnMiLCJmcm9tIiwiZGljdGlvbmFyeSIsInN3YXAiLCJlbCIsImV4aXN0aW5nIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJpbm5lckhUTUwiLCJEb21Db21wb25lbnQiLCJwYXJlbnQiLCJ0cmFuc2xhdGUiLCJjbGFzcyIsImNsYXNzTmFtZSIsInJlbmRlciIsImluc2VydEJlZm9yZSIsIiRlbCIsIiRwYXJlbnQiLCIkdGhlbWUiLCIkbGFuZ3VhZ2UiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0IiwiaXRlbSIsIiRpdGVtcyIsIkdyb3VwIiwiTGFiZWwiLCJsYWJlbCIsImluZGV4IiwiY2hpbGROb2RlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJ0cyIsImdyb3VwIiwiZ3JvdXBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaXN0cyIsImxpc3RFbCIsImxpc3RWYWx1ZSIsImNyZWF0ZUxpc3QiLCJkb21WYWx1ZSIsImNyZWF0ZUdyb3VwIiwibm9kZXMiLCJ0IiwiYmVmb3JlVmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjcmVhdGVMaXN0SXRlbSIsImFjdGl2ZSIsImNyZWF0ZURpdmlkZXIiLCJtb3VudCIsImNyZWF0ZUxhYmVsIiwiRmxpcENsb2NrIiwiZmFjZXMiLCJhbGlhc2VzIiwiT3JpZ2luYWwiLCJFbmdsaXNoIiwiRGVmYXVsdFZhbHVlcyIsInVwZGF0ZWQiLCIkZmFjZSIsInN0b3BBdCIsInVuZGVmaW5lZCIsIm1vdW50ZWQiLCJyZW5kZXJlZCIsIkZhY2VzIiwiZ2V0UHVibGljQXR0cmlidXRlcyIsImJpbmRGYWNlRXZlbnRzIiwiaW5pdGlhbGl6ZWQiLCIkc3RvcEF0IiwiJG9yaWdpbmFsVmFsdWUiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7SUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVVELE9BQVYsQ0FBTjtJQUNIO0FBRUQsSUFBTyxTQUFTRSxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtJQUN6QixNQUFHQyxVQUFVLENBQUNELEVBQUQsQ0FBYixFQUFtQjtJQUNmLFdBQU9BLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTLElBQVQsRUFBZSxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QkYsS0FBekIsQ0FBK0IsQ0FBL0IsQ0FBZixDQUFQO0lBQ0g7SUFDSjtBQUVELElBQU8sU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0lBQ3hCLFNBQU8sQ0FBQ0MsV0FBVyxDQUFDRCxLQUFELENBQVosSUFBdUIsQ0FBQ0UsTUFBTSxDQUFDRixLQUFELENBQXJDO0lBQ0g7QUFFRCxJQUFPLFNBQVNHLEtBQVQsQ0FBZUMsTUFBZixFQUF1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
