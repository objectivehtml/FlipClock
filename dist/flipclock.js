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

    function error$1(message) {
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

          this.started = Date.now();
          this.running = true;
          this.emit('start');

          var loop = function loop() {
            if (Date.now() - _this2.started >= _this2.interval) {
              _this2.started = Date.now();
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

        _this.setAttributes(Object.assign(_this.defaultAttributes(), attributes));

        _this.value = value;
        return _this;
      }

      _createClass(Face, [{
        key: "interval",
        value: function interval(fn) {
          if (this.countdown) {
            this.decrement();
          } else {
            this.increment();
          }

          callback.call(this, fn);
          return this.emit('interval');
        }
      }, {
        key: "start",
        value: function start(fn) {
          var _this2 = this;

          this.timer.start(function () {
            return _this2.interval(fn);
          });
          return this.emit('start');
        }
      }, {
        key: "stop",
        value: function stop(fn) {
          this.timer.stop(fn);
          return this.emit('stop');
        }
      }, {
        key: "reset",
        value: function reset(fn) {
          var _this3 = this;

          this.timer.reset(function () {
            return _this3.interval(fn);
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
        key: "defaultAttributes",
        value: function defaultAttributes() {//
        }
      }, {
        key: "increment",
        value: function increment(value) {//
        }
      }, {
        key: "decrement",
        value: function decrement(value) {//
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
            this.start();
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.$value;
        },
        set: function set(value) {
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
        value: function increment(value) {
          this.value = this.value.value + (value || 1);
        }
      }, {
        key: "decrement",
        value: function decrement(value) {
          this.value = this.value.value - (value || 1);
        }
      }]);

      return Counter;
    }(Face);

    var TwentyFourHourClock =
    /*#__PURE__*/
    function (_Face) {
      _inherits(TwentyFourHourClock, _Face);

      function TwentyFourHourClock() {
        _classCallCheck(this, TwentyFourHourClock);

        return _possibleConstructorReturn(this, _getPrototypeOf(TwentyFourHourClock).apply(this, arguments));
      }

      _createClass(TwentyFourHourClock, [{
        key: "format",
        value: function format(value) {
          var groups = [[value.getHours()], [value.getMinutes()]];

          if (this.showSeconds) {
            groups.push([value.getSeconds()]);
          }

          return groups;
        }
      }, {
        key: "increment",
        value: function increment(value) {
          this.value = this.createDate(value);
        }
      }, {
        key: "decrement",
        value: function decrement(value) {
          this.value = this.createDate(-value);
        }
      }, {
        key: "createDate",
        value: function createDate() {
          var modifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return new Date(new Date().getTime() + modifier);
        }
      }, {
        key: "rendered",
        value: function rendered(el, instance) {
          instance.createDivider().mount(el, el.childNodes[1]);
          this.showSeconds && instance.createDivider().mount(el, el.childNodes[3]);

          if (this.showLabels) {
            instance.createLabel('hours').mount(el.childNodes[0]);
            instance.createLabel('minutes').mount(el.childNodes[2]);
            this.showSeconds && instance.createLabel('seconds').mount(el.childNodes[4]);
          }
        }
      }, {
        key: "defaultAttributes",
        value: function defaultAttributes() {
          return {
            showSeconds: true,
            showLabels: false
          };
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
      }, {
        key: "rendered",
        value: function rendered(el, instance) {
          _get(_getPrototypeOf(TwelveHourClock.prototype), "rendered", this).call(this, el, instance);

          if (this.showMeridium) {
            instance.createLabel(this.meridium).mount(el.childNodes[el.childNodes.length - 1]).classList.add('flip-clock-meridium');
          }
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
      }]);

      return TwelveHourClock;
    }(TwentyFourHourClock);



    var Faces = /*#__PURE__*/Object.freeze({
        Counter: Counter,
        TwelveHourClock: TwelveHourClock,
        TwentyFourHourClock: TwentyFourHourClock
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
          error$1("".concat(_this.name, " does not have a theme defined."));
        }

        if (!_this.language) {
          error$1("".concat(_this.name, " does not have a language defined."));
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
            error$1(ConsoleMessages.element);
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
            error$1(ConsoleMessages.value);
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
            error$1(ConsoleMessages.language);
          }

          this.$language = value;
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

    var Original = {
      Divider: Divider$1,
      FlipClock: FlipClock,
      Group: Group$1,
      Label: Label$1,
      List: List$1,
      ListItem: ListItem$1
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
          error$1(ConsoleMessages.element);
        }

        var face = attributes.face || DefaultValues.face;
        delete attributes.face;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlipClock).call(this, Object.assign({
          originalValue: value,
          theme: DefaultValues.theme,
          language: DefaultValues.language
        }, isObject(value) ? value : null, attributes)));
        _this.face = face;

        _this.face.initialized(_assertThisInitialized(_assertThisInitialized(_this)));

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
          this.face.rendered(_get(_getPrototypeOf(FlipClock.prototype), "render", this).call(this), this);
          return this.el;
        }
      }, {
        key: "reset",
        value: function reset(fn) {
          this.face.reset(fn);
          return this;
        }
      }, {
        key: "start",
        value: function start(fn) {
          this.face.start(fn);
          return this;
        }
      }, {
        key: "stop",
        value: function stop(fn) {
          this.face.stop(fn);
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
            error$1(ConsoleMessages.face);
          }

          if (isString(value) && Faces[value]) {
            this.$face = new Faces[value](this.originalValue, this.getPublicAttributes());
          } else {
            this.$face = new value(this.originalValue, this.getPublicAttributes());
          }

          this.bindFaceEvents();
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
          this.face.reset();
          this.face.value = value;
        }
      }], [{
        key: "setDefaultFace",
        value: function setDefaultFace(value) {
          validate(value, [Face, 'function']).then(function () {
            DefaultValues.face = value;
          }, function () {
            error$1(ConsoleMessages.face);
          });
        }
      }, {
        key: "setDefaultTheme",
        value: function setDefaultTheme(value) {
          if (!validate(value, 'object')) {
            error$1(ConsoleMessages.theme);
          }

          DefaultValues.theme = value;
        }
      }, {
        key: "setDefaultLanguage",
        value: function setDefaultLanguage(value) {
          if (!validate(value, 'object')) {
            error$1(ConsoleMessages.language);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0RpZ2l0aXplLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvSGVscGVycy9WYWxpZGF0ZS5qcyIsIi4uL3NyYy9qcy9Db25maWcvQ29uc29sZU1lc3NhZ2VzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZS5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvRmFjZXMvVHdlbHZlSG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVHJhbnNsYXRlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVGVtcGxhdGUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Eb21Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9EaXZpZGVyLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdEl0ZW0uanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvR3JvdXAuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MYWJlbC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmxpcENsb2NrLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9Hcm91cC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xpc3QuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvYXItYXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2NzLWN6LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kYS1kay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGUtZGUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VuLXVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lcy1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmEtaXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZpLWZpLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mci1jYS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaGUtaWwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2h1LWh1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9pdC1pdC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvamEtanAuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2tvLWtyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9sdi1sdi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbmwtYmUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25vLW5iLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wbC1wbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcHQtYnIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLWNuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC10dy5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKGZuKSB7XG4gICAgaWYoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgxKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhaW4oYmVmb3JlLCBhZnRlcikge1xuICAgIHJldHVybiAoKSA9PiBhZnRlcihiZWZvcmUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRNYXAoZm4pIHtcbiAgICByZXR1cm4geCA9PiB7XG4gICAgICAgIHJldHVybiB4Lm1hcChmbikucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiB4KSh4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiBBcnJheS5pc0FycmF5KHgpID8gZGVlcEZsYXR0ZW4gKHgpIDogeCkoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1Y2ZpcnN0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoZGlnaXRzKSB7XG4gICAgcmV0dXJuIGRlZXBGbGF0dGVuKGRpZ2l0cykubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3ModmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEhdmFsdWUubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBldmVudHM6IHt9XG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZXZlbnRzO1xuICAgIH1cblxuICAgIHNldCBldmVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZW1pdChrZXksIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oa2V5LCBmbiwgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZShrZXksIGZuKSB7XG4gICAgICAgIGZuID0gY2hhaW4oZm4sICgpID0+IHRoaXMub2ZmKGtleSwgZm4pKTtcblxuICAgICAgICB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSA/IHRoaXNba2V5XSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBoYW5kbGU6IG51bGwsXG4gICAgICAgICAgICBzdGFydGVkOiBudWxsLFxuICAgICAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnZhbDogaW50ZXJ2YWxcbiAgICAgICAgfSwgaXNPYmplY3QoaW50ZXJ2YWwpID8gaW50ZXJ2YWwgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZWxhcHNlZCB0aGUgdGltZSBhcyBhbiBpbnRlcmdlclxuICAgICAqXG4gICAgICogQHJldHVybiBJbnRlZ2VyXG4gICAgICovXG4gICAgZ2V0IGVsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ICogdGhpcy5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcblxuICAgICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRlZCA+PSB0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICBpZih0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZ2l0aXplKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG1pbmltdW1EaWdpdHM6IDAsXG4gICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZChudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlcGVuZFplcm8gPSBvcHRpb25zLnByZXBlbmRMZWFkaW5nWmVybyAmJlxuICAgICAgICAgICAgbnVtYmVyLnRvU3RyaW5nKCkuc3BsaXQoJycpLmxlbmd0aCA9PT0gMTtcblxuICAgICAgICByZXR1cm4gKHNob3VsZFByZXBlbmRaZXJvID8gJzAnIDogJycpLmNvbmNhdChudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZ2l0cyhhcnIsIG1pbikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBkZWVwRmxhdHRlbihhcnIpLmxlbmd0aDtcblxuICAgICAgICBpZihsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtaW4gLSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclswXS51bnNoaWZ0KCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJldHVybiBkaWdpdHMoZmxhdHRlbihbdmFsdWVdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oZGVlcEZsYXR0ZW4oW251bWJlcl0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBlbmQobnVtYmVyKS5zcGxpdCgnJyk7XG4gICAgICAgIH0pKTtcbiAgICB9KSwgb3B0aW9ucy5taW5pbXVtRGlnaXRzIHx8IDApO1xufVxuIiwiY29uc3QgcmFuZ2VzID0gW3tcbiAgICAvLyAwLTlcbiAgICBtaW46IDQ4LFxuICAgIG1heDogNTdcbn0se1xuICAgIC8vIGEtelxuICAgIG1pbjogNjUsXG4gICAgbWF4OiA5MFxufSx7XG4gICAgLy8gQS1aXG4gICAgbWluOiA5NyxcbiAgICBtYXg6IDEyMlxufV07XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmFuZ2UoY2hhcikge1xuICAgIGZvcihjb25zdCBpIGluIHJhbmdlcykge1xuICAgICAgICBjb25zdCBjb2RlID0gY2hhci50b1N0cmluZygpLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgaWYocmFuZ2VzW2ldLm1pbiA8PSBjb2RlICYmIHJhbmdlc1tpXS5tYXggPj0gY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmdlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dCh2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZCA9ICh2YWx1ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4gY2hhckNvZGUoY2hhciwgKHJhbmdlLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXJhbmdlIHx8IGNvZGUgPCByYW5nZS5tYXggPyBjb2RlICsgMSA6IHJhbmdlLm1pblxuICAgICAgICB9KSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdChjb252ZXJ0ZWQsIHR5cGVvZiB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGNoYXJDb2RlKGNoYXIsIGZuKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBmaW5kUmFuZ2UoY2hhcik7XG4gICAgY29uc3QgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShmbihyYW5nZSwgY29kZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldih2YWx1ZSkge1xuICAgIGNvbnN0IGNvbnZlcnRlZCA9ICh2YWx1ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGNoYXIgPT4gY2hhckNvZGUoY2hhciwgKHJhbmdlLCBjb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXJhbmdlIHx8IGNvZGUgPiByYW5nZS5taW4gPyBjb2RlIC0gMSA6IHJhbmdlLm1heFxuICAgICAgICB9KSlcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdChjb252ZXJ0ZWQsIHR5cGVvZiB2YWx1ZSk7XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBkaWdpdGl6ZSBmcm9tICcuLi9IZWxwZXJzL0RpZ2l0aXplJztcbmltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGxlbmd0aCwgaXNPYmplY3QsIGlzTnVtYmVyIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlVmFsdWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLFxuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0cnVlLFxuICAgICAgICAgICAgbWluaW11bURpZ2l0czogMFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBkaWdpdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZGlnaXRzID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWluaW11bURpZ2l0cyA9IE1hdGgubWF4KHRoaXMubWluaW11bURpZ2l0cywgbGVuZ3RoKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpZ2l0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRpZ2l0cztcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5kaWdpdHMgPSBkaWdpdGl6ZSh0aGlzLmZvcm1hdCh2YWx1ZSksIHtcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IHRoaXMubWluaW11bURpZ2l0cyxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdGhpcy5wcmVwZW5kTGVhZGluZ1plcm9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNOYU4oKSB7XG4gICAgICAgIHJldHVybiBpc05hTih0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpc051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKClcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDbGFzcyhhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGl0ZW1zOiAnVGhlIGl0ZW1zIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgZmFjZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlIGNsYXNzLicsXG4gICAgZWxlbWVudDogJ1RoZSBlbGVtZW50IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYW4gSFRNTEVsZW1lbnQnLFxuICAgIGZhY2VWYWx1ZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlVmFsdWUgY2xhc3MuJyxcbiAgICB0aW1lcjogJ1RoZSB0aW1lciBwcm9wZXJ0eSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgVGltZXIgY2xhc3MuJ1xufTtcbiIsImltcG9ydCBUaW1lciBmcm9tICcuL1RpbWVyJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEZhY2VWYWx1ZSBmcm9tICcuL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzRnVuY3Rpb24sIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gYXR0cmlidXRlcy5kZWxheSB8fCAxMDAwO1xuXG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGF1dG9TdGFydDogdHJ1ZSxcbiAgICAgICAgICAgIGNvdW50ZG93bjogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRpb25SYXRlOiBkZWxheSAvIDIsXG4gICAgICAgICAgICB0aW1lcjogVGltZXIubWFrZShkZWxheSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRBdHRyaWJ1dGVzKCksIGF0dHJpYnV0ZXNcbiAgICAgICAgKSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlID9cbiAgICAgICAgICAgIHZhbHVlIDogdGhpcy5jcmVhdGVGYWNlVmFsdWUodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlZCcsIHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGdldCB0aW1lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRpbWVyO1xuICAgIH1cblxuICAgIHNldCB0aW1lcih0aW1lcikge1xuICAgICAgICBpZighdmFsaWRhdGUodGltZXIsIFRpbWVyKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRpbWVyID0gdGltZXI7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwoZm4pIHtcbiAgICAgICAgaWYodGhpcy5jb3VudGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnaW50ZXJ2YWwnKTtcbiAgICB9XG5cbiAgICBzdGFydChmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCgpID0+IHRoaXMuaW50ZXJ2YWwoZm4pKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgIH1cblxuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgfVxuXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgoKSA9PiB0aGlzLmludGVydmFsKGZuKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGYWNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZhY2VWYWx1ZS5tYWtlKHZhbHVlLCB7XG4gICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+IHRoaXMuZm9ybWF0KHZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVuZGVyZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBtb3VudGVkKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b1N0YXJ0ICYmIHRoaXMudGltZXIuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSArICh2YWx1ZSB8fCAxKTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgLSAodmFsdWUgfHwgMSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW1xuICAgICAgICAgICAgW3ZhbHVlLmdldEhvdXJzKCldLFxuICAgICAgICAgICAgW3ZhbHVlLmdldE1pbnV0ZXMoKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaChbdmFsdWUuZ2V0U2Vjb25kcygpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jcmVhdGVEYXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY3JlYXRlRGF0ZSgtdmFsdWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZURhdGUobW9kaWZpZXIgPSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIG1vZGlmaWVyKTtcbiAgICB9XG5cbiAgICByZW5kZXJlZChlbCwgaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgICAgICB0aGlzLnNob3dTZWNvbmRzICYmIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG5cbiAgICAgICAgaWYodGhpcy5zaG93TGFiZWxzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd1NlY29uZHMgJiYgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbHZlSG91ckNsb2NrIGV4dGVuZHMgVHdlbnR5Rm91ckhvdXJDbG9jayB7XG5cbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuXG5cdFx0Y29uc3QgZ3JvdXBzID0gW1xuXHRcdFx0aG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzKSxcblx0XHRcdHZhbHVlLmdldE1pbnV0ZXMoKVxuXHRcdF07XG5cbiAgICAgICAgdGhpcy5tZXJpZGl1bSA9IGhvdXJzID4gMTIgPyAncG0nIDogJ2FtJztcblxuXHRcdGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcblx0XHRcdGdyb3Vwcy5wdXNoKHZhbHVlLmdldFNlY29uZHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICByZW5kZXJlZChlbCwgaW5zdGFuY2UpIHtcbiAgICAgICAgc3VwZXIucmVuZGVyZWQoZWwsIGluc3RhbmNlKTtcblxuICAgICAgICBpZih0aGlzLnNob3dNZXJpZGl1bSkge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwodGhpcy5tZXJpZGl1bSlcbiAgICAgICAgICAgICAgICAubW91bnQoZWwuY2hpbGROb2Rlc1tlbC5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3RcbiAgICAgICAgICAgICAgICAuYWRkKCdmbGlwLWNsb2NrLW1lcmlkaXVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TWVyaWRpdW06IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZnJvbSkge1xuICAgIHJldHVybiAoaXNTdHJpbmcoZnJvbSB8fCAnZW4tdXMnKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbSkuZGljdGlvbmFyeVt2YWx1ZV0gfHwgdmFsdWU7XG59O1xuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuKGNvbmRpdGlvbiwgaHRtbCkge1xuXHRyZXR1cm4gY29uZGl0aW9uID09PSB0cnVlID8gaHRtbCA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dhcChlbCwgZXhpc3RpbmcpIHtcblx0aWYoZXhpc3RpbmcucGFyZW50Tm9kZSkge1xuXHRcdGV4aXN0aW5nLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVsLCBleGlzdGluZyk7XG5cdFx0XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0cmV0dXJuIGV4aXN0aW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cmlidXRlcykge1xuXHRpZihpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuXHRcdGZvcihjb25zdCBpIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVzW2ldKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pIHtcblx0aWYoaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5maWx0ZXIobm9vcCkuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRpZihjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWwsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuXHR9XG5cblx0c2V0QXR0cmlidXRlcyhlbCwgaXNPYmplY3QoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBhdHRyaWJ1dGVzKTtcblxuXHRpZighaXNPYmplY3QoY2hpbGRyZW4pICYmICFpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGVsLmlubmVySFRNTCA9IGNoaWxkcmVuO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbilcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuLypcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGlzQXJyYXkodmFsdWUpID9cblx0XHRkZWVwRmxhdHRlbih2YWx1ZSkuZmlsdGVyKG5vb3ApLmpvaW4oJycpIDogdmFsdWU7XG5cblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn1cbiovXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vSGVscGVycy9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBrZWJhYkNhc2UgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgc3dhcCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGhlbWUpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIHRoZW1lIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgbGFuZ3VhZ2UgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG5cdFx0aWYoIXRoaXMudGhlbWVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX0gY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbDtcbiAgICB9XG5cbiAgICBzZXQgZWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBudWxsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudDtcbiAgICB9XG5cbiAgICBzZXQgcGFyZW50KHBhcmVudCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGhlbWU7XG4gICAgfVxuXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgbGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRsYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUoa2V5LCB0aGlzLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICB0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUoa2V5KTtcbiAgICB9XG5cblx0cmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSA9PT0gJ2ZsaXAtY2xvY2snID8gdGhpcy5jbGFzc05hbWUgOiAnZmxpcC1jbG9jay0nICsgdGhpcy5jbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aGVtZVt0aGlzLm5hbWVdKGVsLCB0aGlzKTtcblxuICAgICAgICBpZighdGhpcy5lbCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5lbC5pbm5lckhUTUwgIT09IGVsLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHN3YXAoZWwsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG5cdH1cblxuICAgIG1vdW50KHBhcmVudCwgYmVmb3JlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgaWYoIWJlZm9yZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlkZXIgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IG5leHQsIHByZXYsICB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgaXNPYmplY3QsICB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXRlbXM7XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGl0ZW1zID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdEl0ZW0odmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICB9LCBpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0sIGlzT2JqZWN0KGxhYmVsKSA/IGxhYmVsIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgdG9wJ30pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCBib3R0b20nfSlcbiAgICBdKTtcbn1cbiIsImltcG9ydCB7IG5leHQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmZ1bmN0aW9uIGNoaWxkKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBlbCA/IChlbC5jaGlsZE5vZGVzID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBlbFtpbmRleF0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hhcihlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwLWNsb2NrLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCAudG9wJykuaW5uZXJIVE1MIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnN0YW5jZS52YWx1ZS5kaWdpdHMubWFwKChncm91cCwgeCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEVsID0gY2hpbGQoaW5zdGFuY2UuZWwgPyBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1ncm91cCcpIDogbnVsbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsID8gZ3JvdXBFbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1saXN0JykgOiBudWxsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGluc3RhbmNlLmZhY2UuYW5pbWF0aW9uUmF0ZSB8fCBpbnN0YW5jZS5mYWNlLmRlbGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuXG4gICAgaW5zdGFuY2UuaXRlbXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGluc3RhbmNlLnZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGJlZm9yZVZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgXTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnJlbmRlcigpKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnN0YW5jZS5hY3RpdmUgPT09IHRydWUgPyAnYWN0aXZlJyA6IChcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlID09PSBmYWxzZSA/ICdiZWZvcmUnIDogbnVsbFxuICAgICk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAndG9wJ30pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ2JvdHRvbSd9KVxuICAgICAgICBdLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lcid9KVxuICAgIF0pO1xufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9GbGlwQ2xvY2snO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgRmxpcENsb2NrLFxuICAgIEdyb3VwLFxuICAgIExhYmVsLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW1cbn07XG4iLCIvKipcbiAqIEZsaXBDbG9jayBBcmFiaWMgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCBiZSB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQXJhYmljIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn2LPZhtmI2KfYqicsXG4gICAgJ21vbnRocycgIDogJ9i02YfZiNixJyxcbiAgICAnZGF5cycgICAgOiAn2KPZitin2YUnLFxuICAgICdob3VycycgICA6ICfYs9in2LnYp9iqJyxcbiAgICAnbWludXRlcycgOiAn2K/Zgtin2KbZgicsXG4gICAgJ3NlY29uZHMnIDogJ9ir2YjYp9mG2YonXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnYXInLCAnYXItYXInLCAnYXJhYmljJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDemVjaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDemVjaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ1Jva3knLFxuICAgICdtb250aHMnICA6ICdNxJtzw61jZScsXG4gICAgJ2RheXMnICAgIDogJ0RueScsXG4gICAgJ2hvdXJzJyAgIDogJ0hvZGlueScsXG4gICAgJ21pbnV0ZXMnIDogJ01pbnV0eScsXG4gICAgJ3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnY3MnLCAnY3MtY3onLCAnY3onLCAnY3otY3MnLCAnY3plY2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIERhbmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBEYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2UnLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBHZXJtYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgR2VybWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0phaHJlJyxcblx0J21vbnRocycgIDogJ01vbmF0ZScsXG5cdCdkYXlzJyAgICA6ICdUYWdlJyxcblx0J2hvdXJzJyAgIDogJ1N0dW5kZW4nLFxuXHQnbWludXRlcycgOiAnTWludXRlbicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlbidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkZScsICdkZS1kZScsICdnZXJtYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEVuZ2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRW5nbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZZWFycycsXG5cdCdtb250aHMnICA6ICdNb250aHMnLFxuXHQnZGF5cycgICAgOiAnRGF5cycsXG5cdCdob3VycycgICA6ICdIb3VycycsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVzJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZHMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZW4nLCAnZW4tdXMnLCAnZW5nbGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3BhbmlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTcGFuaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0HDsW9zJyxcblx0J21vbnRocycgIDogJ01lc2VzJyxcblx0J2RheXMnICAgIDogJ0TDrWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZXMnLCAnZXMtZXMnLCAnc3BhbmlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUGVyc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9iz2KfZhCcsXG5cdCdtb250aHMnICA6ICfZhdin2YcnLFxuXHQnZGF5cycgICAgOiAn2LHZiNiyJyxcblx0J2hvdXJzJyAgIDogJ9iz2KfYudiqJyxcblx0J21pbnV0ZXMnIDogJ9iv2YLbjNmC2YcnLFxuXHQnc2Vjb25kcycgOiAn2KvYp9mG24zZhydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmYScsICdmYS1pcicsICdwZXJzaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBGaW5uaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEZpbm5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnVnVvdHRhJyxcblx0J21vbnRocycgIDogJ0t1dWthdXR0YScsXG5cdCdkYXlzJyAgICA6ICdQw6RpdsOkw6QnLFxuXHQnaG91cnMnICAgOiAnVHVudGlhJyxcblx0J21pbnV0ZXMnIDogJ01pbnV1dHRpYScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bnRpYSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydmaScsICdmaS1maScsICdmaW5uaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDYW5hZGlhbiBGcmVuY2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnQW5zJyxcbiAgICAnbW9udGhzJyAgOiAnTW9pcycsXG4gICAgJ2RheXMnICAgIDogJ0pvdXJzJyxcbiAgICAnaG91cnMnICAgOiAnSGV1cmVzJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlcycsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZyJywgJ2ZyLWNhJywgJ2ZyZW5jaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSGVicmV3IExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhbmFkaWFuIEZyZW5jaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfXqdeg15nXnScsXG5cdCdtb250aHMnICA6ICfXl9eV15PXqScsXG5cdCdkYXlzJyAgICA6ICfXmdee15nXnScsXG5cdCdob3VycycgICA6ICfXqdei15XXqicsXG5cdCdtaW51dGVzJyA6ICfXk9en15XXqicsXG5cdCdzZWNvbmRzJyA6ICfXqdeg15nXldeqJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2lsJywgJ2hlLWlsJywgJ2hlYnJldyddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgSHVuZ2FyaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEh1bmdhcmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDiXYnLFxuICAgICdtb250aHMnICA6ICdIw7NuYXAnLFxuICAgICdkYXlzJyAgICA6ICdOYXAnLFxuICAgICdob3VycycgICA6ICfDk3JhJyxcbiAgICAnbWludXRlcycgOiAnUGVyYycsXG4gICAgJ3NlY29uZHMnIDogJ03DoXNvZHBlcmMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaHUnLCAnaHUtaHUnLCAnaHVuZ2FyaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBJdGFsaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEl0YWxpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5uaScsXG5cdCdtb250aHMnICA6ICdNZXNpJyxcblx0J2RheXMnICAgIDogJ0dpb3JuaScsXG5cdCdob3VycycgICA6ICdPcmUnLFxuXHQnbWludXRlcycgOiAnTWludXRpJyxcblx0J3NlY29uZHMnIDogJ1NlY29uZGknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZGEnLCAnZGEtZGsnLCAnZGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBKYXBhbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBKYXBhbmVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydqcCcsICdqYS1qcCcsICdqYXBhbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgS29yZWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEtvcmVhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfrhYQnLFxuXHQnbW9udGhzJyAgOiAn7JuUJyxcblx0J2RheXMnICAgIDogJ+ydvCcsXG5cdCdob3VycycgICA6ICfsi5wnLFxuXHQnbWludXRlcycgOiAn67aEJyxcblx0J3NlY29uZHMnIDogJ+y0iCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydrbycsICdrby1rcicsICdrb3JlYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIExhdHZpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgTGF0dmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ0dhZGknLFxuICAgICdtb250aHMnICA6ICdNxJNuZcWhaScsXG4gICAgJ2RheXMnICAgIDogJ0RpZW5hcycsXG4gICAgJ2hvdXJzJyAgIDogJ1N0dW5kYXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW7Fq3RlcycsXG4gICAgJ3NlY29uZHMnIDogJ1Nla3VuZGVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2x2JywgJ2x2LWx2JywgJ2xhdHZpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIER1dGNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIER1dGNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnSmFyZW4nLFxuICAgICdtb250aHMnICA6ICdNYWFuZGVuJyxcbiAgICAnZGF5cycgICAgOiAnRGFnZW4nLFxuICAgICdob3VycycgICA6ICdVcmVuJyxcbiAgICAnbWludXRlcycgOiAnTWludXRlbicsXG4gICAgJ3NlY29uZHMnIDogJ1NlY29uZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25sJywgJ25sLWJlJywgJ2R1dGNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBOb3J3ZWdpYW4tQm9rbcOlbCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBOb3J3ZWdpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5lZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2VyJyxcblx0J2hvdXJzJyAgIDogJ1RpbWVyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ25vJywgJ25iJywgJ25vLW5iJywgJ25vcndlZ2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUG9saXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvbGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdsYXQnLFxuXHQnbW9udGhzJyAgOiAnbWllc2nEmWN5Jyxcblx0J2RheXMnICAgIDogJ2RuaScsXG5cdCdob3VycycgICA6ICdnb2R6aW4nLFxuXHQnbWludXRlcycgOiAnbWludXQnLFxuXHQnc2Vjb25kcycgOiAnc2VrdW5kJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3BsJywgJ3BsLXBsJywgJ3BvbGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUG9ydHVndWVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBQb3J0dWd1ZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ0Fub3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRGlhcycsXG5cdCdob3VycycgICA6ICdIb3JhcycsXG5cdCdtaW51dGVzJyA6ICdNaW51dG9zJyxcblx0J3NlY29uZHMnIDogJ1NlZ3VuZG9zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3B0JywgJ3B0LWJyJywgJ3BvcnR1Z3Vlc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFJ1c3NpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUnVzc2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9C70LXRgicsXG4gICAgJ21vbnRocycgIDogJ9C80LXRgdGP0YbQtdCyJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdC10LknLFxuICAgICdob3VycycgICA6ICfRh9Cw0YHQvtCyJyxcbiAgICAnbWludXRlcycgOiAn0LzQuNC90YPRgicsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydydScsICdydS1ydScsICdydXNzaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTbG92YWsgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU2xvdmFrIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1Jva3knLFxuXHQnbW9udGhzJyAgOiAnTWVzaWFjZScsXG5cdCdkYXlzJyAgICA6ICdEbmknLFxuXHQnaG91cnMnICAgOiAnSG9kaW55Jyxcblx0J21pbnV0ZXMnIDogJ01pbsO6dHknLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzaycsICdzay1zaycsICdzbG92YWsnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFN3ZWRpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgU3dlZGlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmFkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnYXInLFxuXHQnaG91cnMnICAgOiAnVGltbWFyJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc3YnLCAnc3Ytc2UnLCAnc3dlZGlzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVGhhaSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUaGFpIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+C4m+C4tScsXG5cdCdtb250aHMnICA6ICfguYDguJTguLfguK3guJknLFxuXHQnZGF5cycgICAgOiAn4Lin4Lix4LiZJyxcblx0J2hvdXJzJyAgIDogJ+C4iuC4seC5iOC4p+C5guC4oeC4hycsXG5cdCdtaW51dGVzJyA6ICfguJnguLLguJfguLUnLFxuXHQnc2Vjb25kcycgOiAn4Lin4Li04LiZ4Liy4LiX4Li1J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3RoJywgJ3RoLXRoJywgJ3RoYWknXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFR1cmtpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHVya2lzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdZxLFsJyxcblx0J21vbnRocycgIDogJ0F5Jyxcblx0J2RheXMnICAgIDogJ0fDvG4nLFxuXHQnaG91cnMnICAgOiAnU2FhdCcsXG5cdCdtaW51dGVzJyA6ICdEYWtpa2EnLFxuXHQnc2Vjb25kcycgOiAnU2FuaXllJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3RyJywgJ3RyLXRyJywgJ3R1cmtpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFVrcmFpbmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBVa3JhaW5pYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfRgNC+0LrQuCcsXG4gICAgJ21vbnRocycgIDogJ9C80ZbRgdGP0YbRlicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3RlicsXG4gICAgJ2hvdXJzJyAgIDogJ9Cz0L7QtNC40L3QuCcsXG4gICAgJ21pbnV0ZXMnIDogJ9GF0LLQuNC70LjQvdC4JyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC00LgnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndWEnLCAndWEtdWEnLCAndWtyYWluZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDaGluZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aXticsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poJywgJ3poLWNuJywgJ2NoaW5lc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRyYWRpdGlvbmFsIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVHJhZGl0aW9uYWwgQ2hpbmVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfmmYInLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd6aC10dyddO1xuIiwiaW1wb3J0IHsgQ291bnRlciB9IGZyb20gJy4uL0ZhY2VzJztcbmltcG9ydCB7IE9yaWdpbmFsIH0gZnJvbSAnLi4vVGhlbWVzJztcbmltcG9ydCB7IEVuZ2xpc2ggfSBmcm9tICcuLi9MYW5ndWFnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmFjZTogQ291bnRlcixcbiAgICB0aGVtZTogT3JpZ2luYWwsXG4gICAgbGFuZ3VhZ2U6IEVuZ2xpc2hcbn07XG4iLCJpbXBvcnQgKiBhcyBGYWNlcyBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBHcm91cCBmcm9tICcuLi9Db21wb25lbnRzL0dyb3VwJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9Db21wb25lbnRzL0xhYmVsJztcbmltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9EaXZpZGVyJztcbmltcG9ydCBEZWZhdWx0VmFsdWVzIGZyb20gJy4uL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNPYmplY3QsIGlzRnVuY3Rpb24sIGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGlwQ2xvY2sgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZWwsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZShlbCwgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWNlID0gYXR0cmlidXRlcy5mYWNlIHx8IERlZmF1bHRWYWx1ZXMuZmFjZTtcblxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5mYWNlO1xuXG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgb3JpZ2luYWxWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB0aGVtZTogRGVmYXVsdFZhbHVlcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIHRoaXMuZmFjZS5pbml0aWFsaXplZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VudChlbCk7XG4gICAgfVxuXG4gICAgZ2V0IGZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRmYWNlO1xuICAgIH1cblxuICAgIHNldCBmYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgW0ZhY2UsICdzdHJpbmcnLCAnZnVuY3Rpb24nXSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzU3RyaW5nKHZhbHVlKSAmJiBGYWNlc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgIHRoaXMuJGZhY2UgPSBuZXcgRmFjZXNbdmFsdWVdKHRoaXMub3JpZ2luYWxWYWx1ZSwgdGhpcy5nZXRQdWJsaWNBdHRyaWJ1dGVzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZmFjZSA9IG5ldyB2YWx1ZSh0aGlzLm9yaWdpbmFsVmFsdWUsIHRoaXMuZ2V0UHVibGljQXR0cmlidXRlcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZEZhY2VFdmVudHMoKTtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBzdG9wQXQoKSB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMuJHN0b3BBdCkgPyB0aGlzLiRzdG9wQXQodGhpcykgOiB0aGlzLiRzdG9wQXQ7XG4gICAgfVxuXG4gICAgc2V0IHN0b3BBdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9wQXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGltZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UudGltZXI7XG4gICAgfVxuXG4gICAgc2V0IHRpbWVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS50aW1lciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjZS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGJpbmRGYWNlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMudXBkYXRlZCgpO1xuXG4gICAgICAgIHRoaXMuJGZhY2Uub2ZmKCd1cGRhdGVkJywgZm4pLm9uKCd1cGRhdGVkJywgZm4pO1xuXG4gICAgICAgIFsndXBkYXRlZCcsICdzdGFydCcsICdzdG9wJywgJ3Jlc2V0JywgJ2ludGVydmFsJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMuZW1pdChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjZS5vZmYoZXZlbnQsIGZuKS5vbihldmVudCwgZm4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmKCB0aGlzLnN0b3BBdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0aGlzLnN0b3BBdCA9PT0gdGhpcy5mYWNlLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdW50KGVsKSB7XG4gICAgICAgIHN1cGVyLm1vdW50KGVsKTtcblxuICAgICAgICB0aGlzLmZhY2UubW91bnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZmFjZS5yZW5kZXJlZChzdXBlci5yZW5kZXIoKSwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy5mYWNlLnJlc2V0KGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydChmbikge1xuICAgICAgICB0aGlzLmZhY2Uuc3RhcnQoZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgdGhpcy5mYWNlLnN0b3AoZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZURpdmlkZXIoYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gRGl2aWRlci5tYWtlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdCh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gTGlzdC5tYWtlKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMYWJlbC5tYWtlKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUdyb3VwKGl0ZW1zLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBHcm91cC5tYWtlKGl0ZW1zLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVzO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0RmFjZSh2YWx1ZSkge1xuICAgICAgICB2YWxpZGF0ZSh2YWx1ZSwgW0ZhY2UsICdmdW5jdGlvbiddKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRWYWx1ZXMuZmFjZSA9IHZhbHVlO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0VGhlbWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aGVtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLnRoZW1lID0gdmFsdWVcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdExhbmd1YWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiY2FsbGJhY2siLCJmbiIsImlzRnVuY3Rpb24iLCJhcHBseSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm5vb3AiLCJ2YWx1ZSIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwiY2hhaW4iLCJiZWZvcmUiLCJhZnRlciIsImNvbmNhdE1hcCIsIngiLCJtYXAiLCJyZWR1Y2UiLCJ5IiwiY29uY2F0IiwiZmxhdHRlbiIsImRlZXBGbGF0dGVuIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGlnaXRzIiwiaXNDbGFzcyIsIkZ1bmN0aW9uIiwibmFtZSIsImlzU3RyaW5nIiwiaXNPYmplY3QiLCJ0eXBlIiwiaXNOdW1iZXIiLCJpc05hTiIsImtlYmFiQ2FzZSIsInN0ciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIkNvbXBvbmVudCIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudHMiLCJrZXkiLCJhcmdzIiwiZm9yRWFjaCIsImV2ZW50IiwicHVzaCIsImZpbHRlciIsIm9mZiIsIm9uIiwiaGFzT3duUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0QXR0cmlidXRlIiwia2V5cyIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsIm9iaiIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZXMiLCJpIiwiJGV2ZW50cyIsIlRpbWVyIiwiaW50ZXJ2YWwiLCJjb3VudCIsImhhbmRsZSIsInN0YXJ0ZWQiLCJydW5uaW5nIiwic3RvcCIsInN0YXJ0IiwiZW1pdCIsIkRhdGUiLCJub3ciLCJsb29wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwicmFuZ2VzIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsIm5leHQiLCJjb252ZXJ0ZWQiLCJjaGFyQ29kZSIsInJhbmdlIiwiam9pbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJGYWNlVmFsdWUiLCIkZGlnaXRzIiwiTWF0aCIsIiR2YWx1ZSIsInZhbGlkYXRlIiwic3VjY2VzcyIsImFyZyIsIml0ZW1zIiwidGhlbWUiLCJsYW5ndWFnZSIsImZhY2UiLCJlbGVtZW50IiwiZmFjZVZhbHVlIiwidGltZXIiLCJGYWNlIiwiZGVsYXkiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwibWFrZSIsImRlZmF1bHRBdHRyaWJ1dGVzIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwicmVzZXQiLCJpbnN0YW5jZSIsImlzU3RvcHBlZCIsImNyZWF0ZUZhY2VWYWx1ZSIsIiR0aW1lciIsIkNvbnNvbGVNZXNzYWdlcyIsIkNvdW50ZXIiLCJUd2VudHlGb3VySG91ckNsb2NrIiwiZ3JvdXBzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwic2hvd1NlY29uZHMiLCJnZXRTZWNvbmRzIiwiY3JlYXRlRGF0ZSIsIm1vZGlmaWVyIiwiZ2V0VGltZSIsImVsIiwiY3JlYXRlRGl2aWRlciIsIm1vdW50IiwiY2hpbGROb2RlcyIsInNob3dMYWJlbHMiLCJjcmVhdGVMYWJlbCIsIlR3ZWx2ZUhvdXJDbG9jayIsImhvdXJzIiwibWVyaWRpdW0iLCJzaG93TWVyaWRpdW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJmcm9tIiwiZGljdGlvbmFyeSIsInN3YXAiLCJleGlzdGluZyIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJIVE1MRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiaW5uZXJIVE1MIiwiRG9tQ29tcG9uZW50IiwicGFyZW50IiwidHJhbnNsYXRlIiwiY2xhc3MiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJpbnNlcnRCZWZvcmUiLCIkZWwiLCIkcGFyZW50IiwiJHRoZW1lIiwiJGxhbmd1YWdlIiwiY29uc3RydWN0b3IiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0IiwiaXRlbSIsIiRpdGVtcyIsIkdyb3VwIiwiTGFiZWwiLCJsYWJlbCIsImluZGV4IiwicXVlcnlTZWxlY3RvciIsInBhcnRzIiwiZ3JvdXAiLCJncm91cEVsIiwicXVlcnlTZWxlY3RvckFsbCIsImxpc3RzIiwibGlzdEVsIiwibGlzdFZhbHVlIiwiY3JlYXRlTGlzdCIsImRvbVZhbHVlIiwiY3JlYXRlR3JvdXAiLCJub2RlcyIsInQiLCJiZWZvcmVWYWx1ZSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImNyZWF0ZUxpc3RJdGVtIiwiYWN0aXZlIiwiRmxpcENsb2NrIiwiYWxpYXNlcyIsIk9yaWdpbmFsIiwiRW5nbGlzaCIsIkRlZmF1bHRWYWx1ZXMiLCJvcmlnaW5hbFZhbHVlIiwiaW5pdGlhbGl6ZWQiLCJ1cGRhdGVkIiwiJGZhY2UiLCJzdG9wQXQiLCJ1bmRlZmluZWQiLCJtb3VudGVkIiwicmVuZGVyZWQiLCJGYWNlcyIsImdldFB1YmxpY0F0dHJpYnV0ZXMiLCJiaW5kRmFjZUV2ZW50cyIsIiRzdG9wQXQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
