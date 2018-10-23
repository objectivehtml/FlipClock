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

          var loop = function loop() {
            if (Date.now() - _this2.started >= _this2.interval) {
              _this2.started = Date.now();
              callback.call(_this2, fn);
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
        _classCallCheck(this, FaceValue);

        return _possibleConstructorReturn(this, _getPrototypeOf(FaceValue).call(this, Object.assign({
          prependLeadingZero: true,
          minimumDigits: 0,
          value: value
        }, attributes)));
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
          return isNumber(this.value);
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
          this.digits = digitize(this.$value = value, {
            minimumDigits: this.minimumDigits,
            prependLeadingZero: this.prependLeadingZero
          });
        }
      }]);

      return FaceValue;
    }(Component);

    var Face =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Face, _Component);

      function Face(value, attributes) {
        var _this;

        _classCallCheck(this, Face);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Face).call(this, Object.assign({
          // clock: clock,
          value: value,
          delay: 1000,
          countdown: false
        }, isObject(value) ? value : null, attributes)));

        if (!_this.timer) {
          _this.timer = Timer.make(_this.delay);
        }

        return _this;
      }
      /*
      get clock() {
          return this.$clock;
      }
       set clock(clock) {
          this.$clock = clock;
      }
      */


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
        key: "increment",
        value: function increment(value) {//
        }
      }, {
        key: "decrement",
        value: function decrement(value) {//
        }
      }, {
        key: "initialized",
        value: function initialized(clock) {//
        }
      }, {
        key: "rendered",
        value: function rendered(clock) {//
        }
      }, {
        key: "mounted",
        value: function mounted(clock) {//
        }
      }, {
        key: "value",
        get: function get() {
          return this.$value;
        },
        set: function set(value) {
          this.emit('updated', this.$value = value instanceof FaceValue ? value : FaceValue.make(value));
        }
      }, {
        key: "timer",
        get: function get() {
          return this.$timer;
        },
        set: function set(timer) {
          this.$timer = timer instanceof Timer ? timer : Timer.make(this.delay);
        }
      }]);

      return Face;
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

    function _translate (value, from) {
      return (isString(from || 'en-us') ? language(from) : from).dictionary[value] || value;
    }

    var ConsoleMessages = {
      items: 'The items must be an array.',
      theme: 'The theme must be an object.',
      language: 'The language must be an object.',
      face: 'The face must be an instance of a Face class.',
      element: 'The element must be an instance of an HTMLElement',
      faceValue: 'The face must be an instance of a FaceValue class.'
    };

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
        value: function mount(parent) {
          var el = this.render();
          this.parent = parent;
          this.parent.appendChild(el);
          return el;
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

      return TwentyFourHourClock;
    }(Face);

    function Divider$1 (el, instance) {
      appendChildren(el, [createElement('div', {
        class: 'flip-clock-dot top'
      }), createElement('div', {
        class: 'flip-clock-dot bottom'
      })]);
    }

    function child(el, index) {
      return el ? el.childNodes[index] : null;
    }

    function char(el) {
      return el ? el.querySelector('.flip-clock-list-item:first-child .top').innerHTML : null;
    }

    function FlipClock (el, instance) {
      var parts = instance.value.digits.map(function (group, x) {
        var groupEl = child(instance.el, x);
        var lists = group.map(function (value, y) {
          var listEl = child(groupEl, y);
          var listValue = char(listEl);
          return instance.createList(value, {
            domValue: listValue,
            countdown: instance.countdown
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
      appendChildren(el, [createElement('div', [createElement('div', instance.value, {
        class: 'top'
      }), createElement('div', instance.value, {
        class: 'bottom'
      })], {
        class: "flip-clock-list-item-inner ".concat(className)
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
          error(ConsoleMessages.element);
        }

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlipClock).call(this, Object.assign({
          originalValue: value,
          theme: DefaultValues.theme,
          language: DefaultValues.language
        }, isObject(value) ? value : null, attributes)));
        _this.face = DefaultValues.face;

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
          this.face.rendered(_get(_getPrototypeOf(FlipClock.prototype), "render", this).call(this));
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
          if (!validate(value, [Face, 'function'])) {
            error(ConsoleMessages.face);
          }

          this.$face = value instanceof Function ? new value(this.originalValue, this.faceOptions) : value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0RpZ2l0aXplLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvSGVscGVycy9UcmFuc2xhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9EaXZpZGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GbGlwQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0dyb3VwLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MYWJlbC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGlzdC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGlzdEl0ZW0uanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL2luZGV4LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9hci1hci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcnUtcnUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3NrLXNrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zdi1zZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdGgtdGguanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RyLXRyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy91YS11YS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtY24uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLXR3LmpzIiwiLi4vc3JjL2pzL0NvbmZpZy9EZWZhdWx0VmFsdWVzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmxpcENsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2soZm4pIHtcbiAgICBpZihpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDEpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgIWlzTnVsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbihiZWZvcmUsIGFmdGVyKSB7XG4gICAgcmV0dXJuICgpID0+IGFmdGVyKGJlZm9yZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdE1hcChmbikge1xuICAgIHJldHVybiB4ID0+IHtcbiAgICAgICAgcmV0dXJuIHgubWFwKGZuKS5yZWR1Y2UoKHgsIHkpID0+IHguY29uY2F0KHkpLCBbXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IHgpKHgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRmxhdHRlbih4KSB7XG4gICAgcmV0dXJuIGNvbmNhdE1hcCh4ID0+IEFycmF5LmlzQXJyYXkoeCkgPyBkZWVwRmxhdHRlbiAoeCkgOiB4KSh4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVjZmlyc3Qoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChkaWdpdHMpIHtcbiAgICByZXR1cm4gZGVlcEZsYXR0ZW4oZGlnaXRzKS5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7Ly8gfHwgdHlwZW9mIHZhbHVlID09PSAnbnVsbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDbGFzcyh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgISF2YWx1ZS5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgKFxuICAgICAgICB0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJ1xuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2ViYWJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG4iLCJpbXBvcnQgeyBjaGFpbiwgY2FsbGJhY2ssIGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmVudHM7XG4gICAgfVxuXG4gICAgc2V0IGV2ZW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRldmVudHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBlbWl0KGtleSwgLi4uYXJncykge1xuICAgICAgICBpZih0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbihrZXksIGZuLCBvbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIXRoaXMuZXZlbnRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzW2tleV0ucHVzaChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb2ZmKGtleSwgZm4pIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSAmJiBmbikge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IHRoaXMuZXZlbnRzW2tleV0uZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQgIT09IGZuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKGtleSwgZm4pIHtcbiAgICAgICAgZm4gPSBjaGFpbihmbiwgKCkgPT4gdGhpcy5vZmYoa2V5LCBmbikpO1xuXG4gICAgICAgIHRoaXMub24oa2V5LCBmbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gdGhpc1trZXldIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGludGVydmFsKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBoYW5kbGU6IG51bGwsXG4gICAgICAgICAgICBzdGFydGVkOiBudWxsLFxuICAgICAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnZhbDogaW50ZXJ2YWxcbiAgICAgICAgfSwgaXNPYmplY3QoaW50ZXJ2YWwpID8gaW50ZXJ2YWwgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZWxhcHNlZCB0aGUgdGltZSBhcyBhbiBpbnRlcmdlclxuICAgICAqXG4gICAgICogQHJldHVybiBJbnRlZ2VyXG4gICAgICovXG4gICAgZ2V0IGVsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ICogdGhpcy5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0ZWQgPj0gdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICBpZih0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtaW5pbXVtRGlnaXRzOiAwLFxuICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQobnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFByZXBlbmRaZXJvID0gb3B0aW9ucy5wcmVwZW5kTGVhZGluZ1plcm8gJiZcbiAgICAgICAgICAgIG51bWJlci50b1N0cmluZygpLnNwbGl0KCcnKS5sZW5ndGggPT09IDE7XG5cbiAgICAgICAgcmV0dXJuIChzaG91bGRQcmVwZW5kWmVybyA/ICcwJyA6ICcnKS5jb25jYXQobnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWdpdHMoYXJyLCBtaW4pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGVlcEZsYXR0ZW4oYXJyKS5sZW5ndGg7XG5cbiAgICAgICAgaWYobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWluIC0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbMF0udW5zaGlmdCgnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlnaXRzKGZsYXR0ZW4oW3ZhbHVlXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGRlZXBGbGF0dGVuKFtudW1iZXJdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwZW5kKG51bWJlcikuc3BsaXQoJycpO1xuICAgICAgICB9KSk7XG4gICAgfSksIG9wdGlvbnMubWluaW11bURpZ2l0cyB8fCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlcyA9IFt7XG4gICAgLy8gMC05XG4gICAgbWluOiA0OCxcbiAgICBtYXg6IDU3XG59LHtcbiAgICAvLyBhLXpcbiAgICBtaW46IDY1LFxuICAgIG1heDogOTBcbn0se1xuICAgIC8vIEEtWlxuICAgIG1pbjogOTcsXG4gICAgbWF4OiAxMjJcbn1dO1xuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiByYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKHJhbmdlc1tpXS5taW4gPD0gY29kZSAmJiByYW5nZXNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlIDwgcmFuZ2UubWF4ID8gY29kZSArIDEgOiByYW5nZS5taW5cbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFyQ29kZShjaGFyLCBmbikge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGNoYXIpO1xuICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZm4ocmFuZ2UsIGNvZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXYodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlID4gcmFuZ2UubWluID8gY29kZSAtIDEgOiByYW5nZS5tYXhcbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgZGlnaXRpemUgZnJvbSAnLi4vSGVscGVycy9EaWdpdGl6ZSc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBsZW5ndGgsIGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZVZhbHVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0cnVlLFxuICAgICAgICAgICAgbWluaW11bURpZ2l0czogMCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgc2V0IGRpZ2l0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRkaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5taW5pbXVtRGlnaXRzID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlnaXRzLCBsZW5ndGgodmFsdWUpKTtcbiAgICB9XG5cbiAgICBnZXQgZGlnaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZGlnaXRzO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRpZ2l0cyA9IGRpZ2l0aXplKHRoaXMuJHZhbHVlID0gdmFsdWUsIHtcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IHRoaXMubWluaW11bURpZ2l0cyxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdGhpcy5wcmVwZW5kTGVhZGluZ1plcm9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNOYU4oKSB7XG4gICAgICAgIHJldHVybiBpc05hTih0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpc051bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMudmFsdWUpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXInO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vRmFjZVZhbHVlJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc0Z1bmN0aW9uLCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIC8vIGNsb2NrOiBjbG9jayxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgICAgICAgY291bnRkb3duOiBmYWxzZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy50aW1lcikge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IFRpbWVyLm1ha2UodGhpcy5kZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgIGdldCBjbG9jaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGNsb2NrO1xuICAgIH1cblxuICAgIHNldCBjbG9jayhjbG9jaykge1xuICAgICAgICB0aGlzLiRjbG9jayA9IGNsb2NrO1xuICAgIH1cbiAgICAqL1xuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlZCcsIHRoaXMuJHZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUgPyB2YWx1ZSA6IEZhY2VWYWx1ZS5tYWtlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGltZXI7XG4gICAgfVxuXG4gICAgc2V0IHRpbWVyKHRpbWVyKSB7XG4gICAgICAgIHRoaXMuJHRpbWVyID0gdGltZXIgaW5zdGFuY2VvZiBUaW1lciA/IHRpbWVyIDogVGltZXIubWFrZSh0aGlzLmRlbGF5KTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbChmbikge1xuICAgICAgICBpZih0aGlzLmNvdW50ZG93bikge1xuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKCkgPT4gdGhpcy5pbnRlcnZhbChmbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICB9XG5cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnJlc2V0KCgpID0+IHRoaXMuaW50ZXJ2YWwoZm4pKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgIH1cblxuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGNsb2NrKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVuZGVyZWQoY2xvY2spIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBtb3VudGVkKGNsb2NrKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBpc051bGwgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNDbGFzcyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgLi4uYXJncykge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBmbGF0dGVuKGFyZ3MpLmZvckVhY2goYXJnID0+IHtcbiAgICAgICAgaWYoIChpc051bGwodmFsdWUpICYmIGlzTnVsbChhcmcpKSB8fFxuICAgICAgICAgICAgKGlzT2JqZWN0KGFyZykgJiYgKHZhbHVlIGluc3RhbmNlb2YgYXJnKSkgfHxcbiAgICAgICAgICAgIChpc0Z1bmN0aW9uKGFyZykgJiYgIWlzQ2xhc3MoYXJnKSAmJiBhcmcodmFsdWUpID09PSB0cnVlKSB8fFxuICAgICAgICAgICAgKGlzU3RyaW5nKGFyZykgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gYXJnKSkpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzcztcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZnJvbSkge1xuICAgIHJldHVybiAoaXNTdHJpbmcoZnJvbSB8fCAnZW4tdXMnKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbSkuZGljdGlvbmFyeVt2YWx1ZV0gfHwgdmFsdWU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGl0ZW1zOiAnVGhlIGl0ZW1zIG11c3QgYmUgYW4gYXJyYXkuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgZmFjZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlIGNsYXNzLicsXG4gICAgZWxlbWVudDogJ1RoZSBlbGVtZW50IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYW4gSFRNTEVsZW1lbnQnLFxuICAgIGZhY2VWYWx1ZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlVmFsdWUgY2xhc3MuJ1xufTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hlbihjb25kaXRpb24sIGh0bWwpIHtcblx0cmV0dXJuIGNvbmRpdGlvbiA9PT0gdHJ1ZSA/IGh0bWwgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3YXAoZWwsIGV4aXN0aW5nKSB7XG5cdGlmKGV4aXN0aW5nLnBhcmVudE5vZGUpIHtcblx0XHRleGlzdGluZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbCwgZXhpc3RpbmcpO1xuXHRcdFxuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHJldHVybiBleGlzdGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXMpIHtcblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKSB7XG5cdGlmKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uZmlsdGVyKG5vb3ApLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0aWYoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRlbC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsLCBjaGlsZHJlbiwgYXR0cmlidXRlcykge1xuXHRpZighKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcblx0fVxuXG5cdHNldEF0dHJpYnV0ZXMoZWwsIGlzT2JqZWN0KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogYXR0cmlidXRlcyk7XG5cblx0aWYoIWlzT2JqZWN0KGNoaWxkcmVuKSAmJiAhaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcblx0fVxuXHRlbHNlIHtcblx0XHRhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pXG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbi8qXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBpc0FycmF5KHZhbHVlKSA/XG5cdFx0ZGVlcEZsYXR0ZW4odmFsdWUpLmZpbHRlcihub29wKS5qb2luKCcnKSA6IHZhbHVlO1xuXG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVzW2ldKTtcblx0XHR9XG5cdH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59XG4qL1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL0hlbHBlcnMvVHJhbnNsYXRlJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IHN3YXAsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBwYXJlbnQ6IG51bGxcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnRoZW1lKSB7XG4gICAgICAgICAgICBlcnJvcihgJHt0aGlzLm5hbWV9IGRvZXMgbm90IGhhdmUgYSB0aGVtZSBkZWZpbmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIGxhbmd1YWdlIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuXHRcdGlmKCF0aGlzLnRoZW1lW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgJHt0aGlzLm5hbWV9IGNhbm5vdCBiZSByZW5kZXJlZCBiZWNhdXNlIGl0IGhhcyBubyB0ZW1wbGF0ZS5gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZWw7XG4gICAgfVxuXG4gICAgc2V0IGVsKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgbnVsbCwgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQ7XG4gICAgfVxuXG4gICAgc2V0IHBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIGdldCB0aGVtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRoZW1lO1xuICAgIH1cblxuICAgIHNldCB0aGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRoZW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IGxhbmd1YWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgY2xhc3NOYW1lKCkge1xuICAgICAgICByZXR1cm4ga2ViYWJDYXNlKHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlKGtleSwgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgdChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XG4gICAgfVxuXG5cdHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUgPT09ICdmbGlwLWNsb2NrJyA/IHRoaXMuY2xhc3NOYW1lIDogJ2ZsaXAtY2xvY2stJyArIHRoaXMuY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGhlbWVbdGhpcy5uYW1lXShlbCwgdGhpcyk7XG5cbiAgICAgICAgaWYoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZWwuaW5uZXJIVE1MICE9PSBlbC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBzd2FwKGVsLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuXHR9XG5cbiAgICBtb3VudChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlkZXIgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IG5leHQsIHByZXYsICB9IGZyb20gJy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgaXNPYmplY3QsICB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXRlbXM7XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGl0ZW1zID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdEl0ZW0odmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbSh2YWx1ZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihpdGVtcywgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICB9LCBpc09iamVjdChpdGVtcykgPyBpdGVtcyA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGxhYmVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0sIGlzT2JqZWN0KGxhYmVsKSA/IGxhYmVsIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgaW5jcmVtZW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnZhbHVlICsgKHZhbHVlIHx8IDEpO1xuICAgIH1cblxuICAgIGRlY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSAtICh2YWx1ZSB8fCAxKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZW50eUZvdXJIb3VyQ2xvY2sgZXh0ZW5kcyBGYWNlIHtcblxuXG59XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCB0b3AnfSksXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZsaXAtY2xvY2stZG90IGJvdHRvbSd9KVxuICAgIF0pO1xufVxuIiwiaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZnVuY3Rpb24gY2hpbGQoZWwsIGluZGV4KSB7XG4gICAgcmV0dXJuIGVsID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBudWxsO1xufVxuXG5mdW5jdGlvbiBjaGFyKGVsKSB7XG4gICAgcmV0dXJuIGVsID8gZWwucXVlcnlTZWxlY3RvcignLmZsaXAtY2xvY2stbGlzdC1pdGVtOmZpcnN0LWNoaWxkIC50b3AnKS5pbm5lckhUTUwgOiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGluc3RhbmNlLnZhbHVlLmRpZ2l0cy5tYXAoKGdyb3VwLCB4KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwRWwgPSBjaGlsZChpbnN0YW5jZS5lbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGluc3RhbmNlLml0ZW1zID0gW1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShpbnN0YW5jZS52YWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShiZWZvcmVWYWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KVxuICAgIF07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5yZW5kZXIoKSkpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gaW5zdGFuY2UuYWN0aXZlID09PSB0cnVlID8gJ2FjdGl2ZScgOiAoXG4gICAgICAgIGluc3RhbmNlLmFjdGl2ZSA9PT0gZmFsc2UgPyAnYmVmb3JlJyA6IG51bGxcbiAgICApO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ3RvcCd9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGluc3RhbmNlLnZhbHVlLCB7Y2xhc3M6ICdib3R0b20nfSlcbiAgICAgICAgXSwge2NsYXNzOiBgZmxpcC1jbG9jay1saXN0LWl0ZW0taW5uZXIgJHtjbGFzc05hbWV9YH0pXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IEZsaXBDbG9jayBmcm9tICcuL0ZsaXBDbG9jayc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRGl2aWRlcixcbiAgICBGbGlwQ2xvY2ssXG4gICAgR3JvdXAsXG4gICAgTGFiZWwsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbVxufTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEFyYWJpYyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfYs9mG2YjYp9iqJyxcbiAgICAnbW9udGhzJyAgOiAn2LTZh9mI2LEnLFxuICAgICdkYXlzJyAgICA6ICfYo9mK2KfZhScsXG4gICAgJ2hvdXJzJyAgIDogJ9iz2KfYudin2KonLFxuICAgICdtaW51dGVzJyA6ICfYr9mC2KfYptmCJyxcbiAgICAnc2Vjb25kcycgOiAn2KvZiNin2YbZiidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydhcicsICdhci1hcicsICdhcmFiaWMnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjcycsICdjcy1jeicsICdjeicsICdjei1jcycsICdjemVjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIERhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEdlcm1hbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlbicsICdlbi11cycsICdlbmdsaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQZXJzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn2LPYp9mEJyxcblx0J21vbnRocycgIDogJ9mF2KfZhycsXG5cdCdkYXlzJyAgICA6ICfYsdmI2LInLFxuXHQnaG91cnMnICAgOiAn2LPYp9i52KonLFxuXHQnbWludXRlcycgOiAn2K/ZgtuM2YLZhycsXG5cdCdzZWNvbmRzJyA6ICfYq9in2YbbjNmHJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZpJywgJ2ZpLWZpJywgJ2Zpbm5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdBbnMnLFxuICAgICdtb250aHMnICA6ICdNb2lzJyxcbiAgICAnZGF5cycgICAgOiAnSm91cnMnLFxuICAgICdob3VycycgICA6ICdIZXVyZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIZWJyZXcgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OJdicsXG4gICAgJ21vbnRocycgIDogJ0jDs25hcCcsXG4gICAgJ2RheXMnICAgIDogJ05hcCcsXG4gICAgJ2hvdXJzJyAgIDogJ8OTcmEnLFxuICAgICdtaW51dGVzJyA6ICdQZXJjJyxcbiAgICAnc2Vjb25kcycgOiAnTcOhc29kcGVyYydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydodScsICdodS1odScsICdodW5nYXJpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSXRhbGlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEphcGFuZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+uFhCcsXG5cdCdtb250aHMnICA6ICfsm5QnLFxuXHQnZGF5cycgICAgOiAn7J28Jyxcblx0J2hvdXJzJyAgIDogJ+yLnCcsXG5cdCdtaW51dGVzJyA6ICfrtoQnLFxuXHQnc2Vjb25kcycgOiAn7LSIJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2tvJywgJ2tvLWtyJywgJ2tvcmVhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBMYXR2aWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRHV0Y2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ2xhdCcsXG5cdCdtb250aHMnICA6ICdtaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnZG5pJyxcblx0J2hvdXJzJyAgIDogJ2dvZHppbicsXG5cdCdtaW51dGVzJyA6ICdtaW51dCcsXG5cdCdzZWNvbmRzJyA6ICdzZWt1bmQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncHQnLCAncHQtYnInLCAncG9ydHVndWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSdXNzaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNsb3ZhayBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzdicsICdzdi1zZScsICdzd2VkaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUaGFpIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRoYWkgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHVya2lzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1nEsWwnLFxuXHQnbW9udGhzJyAgOiAnQXknLFxuXHQnZGF5cycgICAgOiAnR8O8bicsXG5cdCdob3VycycgICA6ICdTYWF0Jyxcblx0J21pbnV0ZXMnIDogJ0Rha2lrYScsXG5cdCdzZWNvbmRzJyA6ICdTYW5peWUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9GA0L7QutC4JyxcbiAgICAnbW9udGhzJyAgOiAn0LzRltGB0Y/RhtGWJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdGWJyxcbiAgICAnaG91cnMnICAgOiAn0LPQvtC00LjQvdC4JyxcbiAgICAnbWludXRlcycgOiAn0YXQstC40LvQuNC90LgnLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LTQuCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd1YScsICd1YS11YScsICd1a3JhaW5lJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENoaW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IHsgT3JpZ2luYWwgfSBmcm9tICcuLi9UaGVtZXMnO1xuaW1wb3J0IHsgRW5nbGlzaCB9IGZyb20gJy4uL0xhbmd1YWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiBDb3VudGVyLFxuICAgIHRoZW1lOiBPcmlnaW5hbCxcbiAgICBsYW5ndWFnZTogRW5nbGlzaFxufTtcbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9Db21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4uL0NvbXBvbmVudHMvR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL0NvbXBvbmVudHMvTGFiZWwnO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuLi9Db21wb25lbnRzL0RpdmlkZXInO1xuaW1wb3J0IERlZmF1bHRWYWx1ZXMgZnJvbSAnLi4vQ29uZmlnL0RlZmF1bHRWYWx1ZXMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc0Z1bmN0aW9uLCBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENsb2NrIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighdmFsaWRhdGUoZWwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHRoZW1lOiBEZWZhdWx0VmFsdWVzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgdGhpcy5mYWNlID0gRGVmYXVsdFZhbHVlcy5mYWNlO1xuICAgICAgICB0aGlzLmZhY2UuaW5pdGlhbGl6ZWQodGhpcyk7XG4gICAgICAgIHRoaXMubW91bnQoZWwpO1xuICAgIH1cblxuICAgIGdldCBmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZmFjZTtcbiAgICB9XG5cbiAgICBzZXQgZmFjZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIFtGYWNlLCAnZnVuY3Rpb24nXSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGZhY2UgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID9cbiAgICAgICAgICAgIG5ldyB2YWx1ZSh0aGlzLm9yaWdpbmFsVmFsdWUsIHRoaXMuZmFjZU9wdGlvbnMpIDogdmFsdWU7XG5cbiAgICAgICAgdGhpcy5iaW5kRmFjZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmVsICYmIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhpcy4kc3RvcEF0KSA/IHRoaXMuJHN0b3BBdCh0aGlzKSA6IHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICBzZXQgc3RvcEF0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3BBdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0aW1lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjZS50aW1lcjtcbiAgICB9XG5cbiAgICBzZXQgdGltZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLnRpbWVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNlLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQoKTtcbiAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYmluZEZhY2VFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGZuID0gKCkgPT4gdGhpcy51cGRhdGVkKCk7XG5cbiAgICAgICAgdGhpcy4kZmFjZS5vZmYoJ3VwZGF0ZWQnLCBmbikub24oJ3VwZGF0ZWQnLCBmbik7XG5cbiAgICAgICAgWyd1cGRhdGVkJywgJ3N0YXJ0JywgJ3N0b3AnLCAncmVzZXQnLCAnaW50ZXJ2YWwnXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4gdGhpcy5lbWl0KGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5mYWNlLm9mZihldmVudCwgZm4pLm9uKGV2ZW50LCBmbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYoIHRoaXMuc3RvcEF0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RvcEF0ID09PSB0aGlzLmZhY2UudmFsdWUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91bnQoZWwpIHtcbiAgICAgICAgc3VwZXIubW91bnQoZWwpO1xuXG4gICAgICAgIHRoaXMuZmFjZS5tb3VudGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5mYWNlLnJlbmRlcmVkKHN1cGVyLnJlbmRlcigpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbiAgICByZXNldChmbikge1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQoZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuZmFjZS5zdGFydChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLmZhY2Uuc3RvcChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlRGl2aWRlcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBEaXZpZGVyLm1ha2UoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMaXN0Lm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGFiZWwodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExhYmVsLm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlR3JvdXAoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIEdyb3VwLm1ha2UoaXRlbXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIHZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ2Z1bmN0aW9uJ10pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdFZhbHVlcy5mYWNlID0gdmFsdWU7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRUaGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRoZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMudGhlbWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJjYWxsYmFjayIsImZuIiwiaXNGdW5jdGlvbiIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwibm9vcCIsInZhbHVlIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJjaGFpbiIsImJlZm9yZSIsImFmdGVyIiwiY29uY2F0TWFwIiwieCIsIm1hcCIsInJlZHVjZSIsInkiLCJjb25jYXQiLCJmbGF0dGVuIiwiZGVlcEZsYXR0ZW4iLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJkaWdpdHMiLCJpc0NsYXNzIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsInR5cGUiLCJpc051bWJlciIsImlzTmFOIiwia2ViYWJDYXNlIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50cyIsImtleSIsImFyZ3MiLCJmb3JFYWNoIiwiZXZlbnQiLCJwdXNoIiwiZmlsdGVyIiwib2ZmIiwib24iLCJoYXNPd25Qcm9wZXJ0eSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWVzIiwiaSIsIiRldmVudHMiLCJUaW1lciIsImludGVydmFsIiwiY291bnQiLCJoYW5kbGUiLCJzdGFydGVkIiwicnVubmluZyIsInN0b3AiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJsb29wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwicmFuZ2VzIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsIm5leHQiLCJjb252ZXJ0ZWQiLCJjaGFyQ29kZSIsInJhbmdlIiwiam9pbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJGYWNlVmFsdWUiLCIkZGlnaXRzIiwiTWF0aCIsIiR2YWx1ZSIsIkZhY2UiLCJkZWxheSIsImNvdW50ZG93biIsInRpbWVyIiwibWFrZSIsImRlY3JlbWVudCIsImluY3JlbWVudCIsImVtaXQiLCJyZXNldCIsImNsb2NrIiwiJHRpbWVyIiwidmFsaWRhdGUiLCJzdWNjZXNzIiwiYXJnIiwiZnJvbSIsImxhbmd1YWdlIiwiZGljdGlvbmFyeSIsIml0ZW1zIiwidGhlbWUiLCJmYWNlIiwiZWxlbWVudCIsImZhY2VWYWx1ZSIsInN3YXAiLCJlbCIsImV4aXN0aW5nIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJpbm5lckhUTUwiLCJEb21Db21wb25lbnQiLCJwYXJlbnQiLCJ0cmFuc2xhdGUiLCJjbGFzcyIsImNsYXNzTmFtZSIsInJlbmRlciIsIiRlbCIsIkNvbnNvbGVNZXNzYWdlcyIsIiRwYXJlbnQiLCIkdGhlbWUiLCIkbGFuZ3VhZ2UiLCJjb25zdHJ1Y3RvciIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiQ291bnRlciIsIlR3ZW50eUZvdXJIb3VyQ2xvY2siLCJpbnN0YW5jZSIsImluZGV4IiwiY2hpbGROb2RlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJ0cyIsImdyb3VwIiwiZ3JvdXBFbCIsImxpc3RzIiwibGlzdEVsIiwibGlzdFZhbHVlIiwiY3JlYXRlTGlzdCIsImRvbVZhbHVlIiwiY3JlYXRlR3JvdXAiLCJub2RlcyIsInQiLCJiZWZvcmVWYWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZUxpc3RJdGVtIiwiYWN0aXZlIiwiRmxpcENsb2NrIiwiYWxpYXNlcyIsIk9yaWdpbmFsIiwiRW5nbGlzaCIsIm9yaWdpbmFsVmFsdWUiLCJEZWZhdWx0VmFsdWVzIiwiaW5pdGlhbGl6ZWQiLCJtb3VudCIsInVwZGF0ZWQiLCIkZmFjZSIsInN0b3BBdCIsInVuZGVmaW5lZCIsIm1vdW50ZWQiLCJyZW5kZXJlZCIsImZhY2VPcHRpb25zIiwiYmluZEZhY2VFdmVudHMiLCIkc3RvcEF0IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsS0FBVCxDQUFlQyxPQUFmLEVBQXdCO0lBQzNCLFFBQU0sSUFBSUMsS0FBSixDQUFVRCxPQUFWLENBQU47SUFDSDtBQUVELElBQU8sU0FBU0UsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7SUFDekIsTUFBR0MsVUFBVSxDQUFDRCxFQUFELENBQWIsRUFBbUI7SUFDZixXQUFPQSxFQUFFLENBQUNFLEtBQUgsQ0FBUyxJQUFULEVBQWUsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNDLFNBQWQsRUFBeUJGLEtBQXpCLENBQStCLENBQS9CLENBQWYsQ0FBUDtJQUNIO0lBQ0o7QUFFRCxJQUFPLFNBQVNHLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtJQUN4QixTQUFPLENBQUNDLFdBQVcsQ0FBQ0QsS0FBRCxDQUFaLElBQXVCLENBQUNFLE1BQU0sQ0FBQ0YsS0FBRCxDQUFyQztJQUNIO0FBRUQsSUFBTyxTQUFTRyxLQUFULENBQWVDLE1BQWYsRUFBdUJDLEtBQXZCLEVBQThCO0lBQ2pDLFNBQU87SUFBQSxXQUFNQSxLQUFLLENBQUNELE1BQU0sRUFBUCxDQUFYO0lBQUEsR0FBUDtJQUNIO0FBRUQsSUFBTyxTQUFTRSxTQUFULENBQW1CYixFQUFuQixFQUF1QjtJQUMxQixTQUFPLFVBQUFjLENBQUMsRUFBSTtJQUNSLFdBQU9BLENBQUMsQ0FBQ0MsR0FBRixDQUFNZixFQUFOLEVBQVVnQixNQUFWLENBQWlCLFVBQUNGLENBQUQsRUFBSUcsQ0FBSjtJQUFBLGFBQVVILENBQUMsQ0FBQ0ksTUFBRixDQUFTRCxDQUFULENBQVY7SUFBQSxLQUFqQixFQUF3QyxFQUF4QyxDQUFQO0lBQ0gsR0FGRDtJQUdIO0FBRUQsSUFBTyxTQUFTRSxPQUFULENBQWlCTCxDQUFqQixFQUFvQjtJQUN2QixTQUFPRCxTQUFTLENBQUMsVUFBQUMsQ0FBQztJQUFBLFdBQUlBLENBQUo7SUFBQSxHQUFGLENBQVQsQ0FBa0JBLENBQWxCLENBQVA7SUFDSDtBQUVELElBQU8sU0FBU00sV0FBVCxDQUFxQk4sQ0FBckIsRUFBd0I7SUFDM0IsU0FBT0QsU0FBUyxDQUFDLFVBQUFDLENBQUM7SUFBQSxXQUFJTyxLQUFLLENBQUNDLE9BQU4sQ0FBY1IsQ0FBZCxJQUFtQk0sV0FBVyxDQUFFTixDQUFGLENBQTlCLEdBQXFDQSxDQUF6QztJQUFBLEdBQUYsQ0FBVCxDQUF1REEsQ0FBdkQsQ0FBUDtJQUNIO0FBRUQsSUFJTyxTQUFTUyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtJQUMzQixTQUFPSixXQUFXLENBQUNJLE1BQUQsQ0FBWCxDQUFvQkQsTUFBM0I7SUFDSDtBQUVELElBQU8sU0FBU2QsTUFBVCxDQUFnQkYsS0FBaEIsRUFBdUI7SUFDMUIsU0FBT0EsS0FBSyxLQUFLLElBQWpCLENBRDBCO0lBRTdCO0FBRUQsSUFBTyxTQUFTQyxXQUFULENBQXFCRCxLQUFyQixFQUE0QjtJQUMvQixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsV0FBeEI7SUFDSDtBQUVELElBQU8sU0FBU2tCLE9BQVQsQ0FBaUJsQixLQUFqQixFQUF3QjtJQUMzQixTQUFRQSxLQUFLLFlBQVltQixRQUFsQixJQUErQixDQUFDLENBQUNuQixLQUFLLENBQUNvQixJQUE5QztJQUNIO0FBRUQsSUFBTyxTQUFTQyxRQUFULENBQWtCckIsS0FBbEIsRUFBeUI7SUFDNUIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFFBQXhCO0lBQ0g7QUFFRCxJQUFPLFNBQVNlLE9BQVQsQ0FBaUJmLEtBQWpCLEVBQXdCO0lBQzNCLFNBQU9BLEtBQUssWUFBWWMsS0FBeEI7SUFDSDtBQUVELElBQU8sU0FBU1EsUUFBVCxDQUFrQnRCLEtBQWxCLEVBQXlCO0lBQzVCLE1BQU11QixJQUFJLFdBQVV2QixLQUFWLENBQVY7O0lBQ0EsU0FBT0EsS0FBSyxJQUFJLElBQVQsSUFBaUIsQ0FBQ2UsT0FBTyxDQUFDZixLQUFELENBQXpCLEtBQ0h1QixJQUFJLElBQUksUUFBUixJQUFvQkEsSUFBSSxJQUFJLFVBRHpCLENBQVA7SUFHSDtBQUVELElBQU8sU0FBUzdCLFVBQVQsQ0FBb0JNLEtBQXBCLEVBQTJCO0lBQzlCLFNBQU9BLEtBQUssWUFBWW1CLFFBQXhCO0lBQ0g7QUFFRCxJQUFPLFNBQVNLLFFBQVQsQ0FBa0J4QixLQUFsQixFQUF5QjtJQUM1QixTQUFPLENBQUN5QixLQUFLLENBQUN6QixLQUFELENBQWI7SUFDSDtBQUVELElBQU8sU0FBUzBCLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0lBQzNCLFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLGlCQUFaLEVBQStCLE9BQS9CLEVBQXdDQSxPQUF4QyxDQUFnRCxNQUFoRCxFQUF3RCxHQUF4RCxFQUE2REMsV0FBN0QsRUFBUDtJQUNIOztRQzNFb0JDOzs7SUFFakIscUJBQVlDLFVBQVosRUFBd0I7SUFBQTs7SUFDcEIsU0FBS0MsWUFBTCxDQUFrQkMsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDNUJDLE1BQUFBLE1BQU0sRUFBRTtJQURvQixLQUFkLEVBRWZKLFVBRmUsQ0FBbEI7SUFHSDs7Ozs2QkFVSUssS0FBYztJQUFBOztJQUFBLHdDQUFOQyxJQUFNO0lBQU5BLFFBQUFBLElBQU07SUFBQTs7SUFDZixVQUFHLEtBQUtGLE1BQUwsQ0FBWUMsR0FBWixDQUFILEVBQXFCO0lBQ2pCLGFBQUtELE1BQUwsQ0FBWUMsR0FBWixFQUFpQkUsT0FBakIsQ0FBeUIsVUFBQUMsS0FBSyxFQUFJO0lBQzlCQSxVQUFBQSxLQUFLLENBQUM1QyxLQUFOLENBQVksS0FBWixFQUFrQjBDLElBQWxCO0lBQ0gsU0FGRDtJQUdIOztJQUVELGFBQU8sSUFBUDtJQUNIOzs7MkJBRUVELEtBQUszQyxJQUFrQjtBQUFBO0lBQ3RCLFVBQUcsQ0FBQyxLQUFLMEMsTUFBTCxDQUFZQyxHQUFaLENBQUosRUFBc0I7SUFDbEIsYUFBS0QsTUFBTCxDQUFZQyxHQUFaLElBQW1CLEVBQW5CO0lBQ0g7O0lBRUQsV0FBS0QsTUFBTCxDQUFZQyxHQUFaLEVBQWlCSSxJQUFqQixDQUFzQi9DLEVBQXRCO0lBRUEsYUFBTyxJQUFQO0lBQ0g7Ozs0QkFFRzJDLEtBQUszQyxJQUFJO0lBQ1QsVUFBRyxLQUFLMEMsTUFBTCxDQUFZQyxHQUFaLEtBQW9CM0MsRUFBdkIsRUFBMkI7SUFDdkIsYUFBSzBDLE1BQUwsQ0FBWUMsR0FBWixJQUFtQixLQUFLRCxNQUFMLENBQVlDLEdBQVosRUFBaUJLLE1BQWpCLENBQXdCLFVBQUFGLEtBQUssRUFBSTtJQUNoRCxpQkFBT0EsS0FBSyxLQUFLOUMsRUFBakI7SUFDSCxTQUZrQixDQUFuQjtJQUdILE9BSkQsTUFLSztJQUNELGFBQUswQyxNQUFMLENBQVlDLEdBQVosSUFBbUIsRUFBbkI7SUFDSDs7SUFFRCxhQUFPLElBQVA7SUFDSDs7OzZCQUVJQSxLQUFLM0MsSUFBSTtJQUFBOztJQUNWQSxNQUFBQSxFQUFFLEdBQUdVLEtBQUssQ0FBQ1YsRUFBRCxFQUFLO0lBQUEsZUFBTSxNQUFJLENBQUNpRCxHQUFMLENBQVNOLEdBQVQsRUFBYzNDLEVBQWQsQ0FBTjtJQUFBLE9BQUwsQ0FBVjtJQUVBLFdBQUtrRCxFQUFMLENBQVFQLEdBQVIsRUFBYTNDLEVBQWIsRUFBaUIsSUFBakI7SUFDSDs7O3FDQUVZMkMsS0FBSztJQUNkLGFBQU8sS0FBS1EsY0FBTCxDQUFvQlIsR0FBcEIsSUFBMkIsS0FBS0EsR0FBTCxDQUEzQixHQUF1QyxJQUE5QztJQUNIOzs7d0NBRWU7SUFBQTs7SUFDWixVQUFNTCxVQUFVLEdBQUcsRUFBbkI7SUFFQUUsTUFBQUEsTUFBTSxDQUFDWSxtQkFBUCxDQUEyQixJQUEzQixFQUFpQ1AsT0FBakMsQ0FBeUMsVUFBQUYsR0FBRyxFQUFJO0lBQzVDTCxRQUFBQSxVQUFVLENBQUNLLEdBQUQsQ0FBVixHQUFrQixNQUFJLENBQUNVLFlBQUwsQ0FBa0JWLEdBQWxCLENBQWxCO0lBQ0gsT0FGRDtJQUlBLGFBQU9MLFVBQVA7SUFDSDs7O3FDQUVZSyxLQUFLcEMsT0FBTztJQUNyQixVQUFHc0IsUUFBUSxDQUFDYyxHQUFELENBQVgsRUFBa0I7SUFDZCxhQUFLVyxhQUFMLENBQW1CWCxHQUFuQjtJQUNILE9BRkQsTUFHSztJQUNELGFBQUtBLEdBQUwsSUFBWXBDLEtBQVo7SUFDSDtJQUNKOzs7c0NBRWFnRCxRQUFRO0lBQ2xCLFdBQUksSUFBTUMsQ0FBVixJQUFlRCxNQUFmLEVBQXVCO0lBQ25CLGFBQUtoQixZQUFMLENBQWtCaUIsQ0FBbEIsRUFBcUJELE1BQU0sQ0FBQ0MsQ0FBRCxDQUEzQjtJQUNIO0lBQ0o7OztvQ0FFUXhELElBQUk7SUFDVCxhQUFPRCxRQUFRLENBQUNLLElBQVQsQ0FBYyxJQUFkLEVBQW9CSixFQUFwQixDQUFQO0lBQ0g7Ozs0QkE5RVk7SUFDVCxhQUFPLEtBQUt5RCxPQUFaO0lBQ0g7MEJBRVVsRCxPQUFPO0lBQ2QsV0FBS2tELE9BQUwsR0FBZWxELEtBQWY7SUFDSDs7OytCQTBFb0I7SUFBQSx5Q0FBTnFDLElBQU07SUFBTkEsUUFBQUEsSUFBTTtJQUFBOztJQUNqQix3QkFBVyxJQUFYLEVBQW1CQSxJQUFuQjtJQUNIOzs7Ozs7UUN6RmdCYzs7Ozs7SUFFakIsaUJBQVlDLFFBQVosRUFBc0I7SUFBQTs7SUFBQSw4RUFDWm5CLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCbUIsTUFBQUEsS0FBSyxFQUFFLENBRFM7SUFFaEJDLE1BQUFBLE1BQU0sRUFBRSxJQUZRO0lBR2hCQyxNQUFBQSxPQUFPLEVBQUUsSUFITztJQUloQkMsTUFBQUEsT0FBTyxFQUFFLEtBSk87SUFLaEJKLE1BQUFBLFFBQVEsRUFBRUE7SUFMTSxLQUFkLEVBTUg5QixRQUFRLENBQUM4QixRQUFELENBQVIsR0FBcUJBLFFBQXJCLEdBQWdDLElBTjdCLENBRFk7SUFRckI7SUFFRDs7Ozs7Ozs7OztJQTJCQTs7Ozs7OzhCQU1NM0QsSUFBSTtJQUFBOztJQUNOLFdBQUtnRSxJQUFMLENBQVUsWUFBTTtJQUNaLFFBQUEsS0FBSSxDQUFDSixLQUFMLEdBQWEsQ0FBYjs7SUFDQSxRQUFBLEtBQUksQ0FBQ0ssS0FBTCxDQUFXO0lBQUEsaUJBQU1sRSxRQUFRLENBQUNLLElBQVQsQ0FBYyxLQUFkLEVBQW9CSixFQUFwQixDQUFOO0lBQUEsU0FBWDtJQUNILE9BSEQ7SUFLQSxhQUFPLElBQVA7SUFDSDtJQUVEOzs7Ozs7Ozs7OEJBTU1BLElBQUk7SUFBQTs7SUFDTixXQUFLOEQsT0FBTCxHQUFlSSxJQUFJLENBQUNDLEdBQUwsRUFBZjtJQUNBLFdBQUtKLE9BQUwsR0FBZSxJQUFmOztJQUVBLFVBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07SUFDZixZQUFHRixJQUFJLENBQUNDLEdBQUwsS0FBYSxNQUFJLENBQUNMLE9BQWxCLElBQTZCLE1BQUksQ0FBQ0gsUUFBckMsRUFBK0M7SUFDM0MsVUFBQSxNQUFJLENBQUNHLE9BQUwsR0FBZUksSUFBSSxDQUFDQyxHQUFMLEVBQWY7SUFDQXBFLFVBQUFBLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLE1BQWQsRUFBb0JKLEVBQXBCO0lBQ0EsVUFBQSxNQUFJLENBQUM0RCxLQUFMO0lBQ0g7O0lBRUQsUUFBQSxNQUFJLENBQUNDLE1BQUwsR0FBY1EsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkYsSUFBN0IsQ0FBZDtJQUVBLGVBQU8sTUFBUDtJQUNILE9BVkQ7O0lBWUEsYUFBT0EsSUFBSSxFQUFYO0lBQ0g7SUFFRDs7Ozs7Ozs7OzZCQU1LcEUsSUFBSTtJQUFBOztJQUNMLFVBQUcsS0FBS3VFLFNBQVIsRUFBbUI7SUFDZkMsUUFBQUEsVUFBVSxDQUFDLFlBQU07SUFDYkgsVUFBQUEsTUFBTSxDQUFDSSxvQkFBUCxDQUE0QixNQUFJLENBQUNaLE1BQWpDO0lBRUEsVUFBQSxNQUFJLENBQUNFLE9BQUwsR0FBZSxLQUFmO0lBRUFoRSxVQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBYyxNQUFkLEVBQW9CSixFQUFwQjtJQUNILFNBTlMsQ0FBVjtJQU9IOztJQUVELGFBQU8sSUFBUDtJQUNIOzs7NEJBaEZhO0lBQ1YsYUFBTyxLQUFLNEQsS0FBTCxHQUFhLEtBQUtELFFBQXpCO0lBQ0g7SUFFRDs7Ozs7Ozs7NEJBS2dCO0lBQ1osYUFBTyxLQUFLSSxPQUFMLEtBQWlCLElBQXhCO0lBQ0g7SUFFRDs7Ozs7Ozs7NEJBS2dCO0lBQ1osYUFBTyxLQUFLQSxPQUFMLEtBQWlCLEtBQXhCO0lBQ0g7Ozs7TUFyQzhCMUI7O0lDQXBCLFNBQVNxQyxRQUFULENBQWtCbkUsS0FBbEIsRUFBdUM7SUFBQSxNQUFkb0UsT0FBYyx1RUFBSixFQUFJO0lBQ2xEQSxFQUFBQSxPQUFPLEdBQUduQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNwQm1DLElBQUFBLGFBQWEsRUFBRSxDQURLO0lBRXBCQyxJQUFBQSxrQkFBa0IsRUFBRTtJQUZBLEdBQWQsRUFHUEYsT0FITyxDQUFWOztJQUtBLFdBQVNHLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0lBQ3JCLFFBQU1DLGlCQUFpQixHQUFHTCxPQUFPLENBQUNFLGtCQUFSLElBQ3RCRSxNQUFNLENBQUNFLFFBQVAsR0FBa0JDLEtBQWxCLENBQXdCLEVBQXhCLEVBQTRCM0QsTUFBNUIsS0FBdUMsQ0FEM0M7SUFHQSxXQUFPLENBQUN5RCxpQkFBaUIsR0FBRyxHQUFILEdBQVMsRUFBM0IsRUFBK0I5RCxNQUEvQixDQUFzQzZELE1BQXRDLENBQVA7SUFDSDs7SUFFRCxXQUFTdkQsTUFBVCxDQUFnQjJELEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtJQUN0QixRQUFNN0QsU0FBTSxHQUFHSCxXQUFXLENBQUMrRCxHQUFELENBQVgsQ0FBaUI1RCxNQUFoQzs7SUFFQSxRQUFHQSxTQUFNLEdBQUc2RCxHQUFaLEVBQWlCO0lBQ2IsV0FBSSxJQUFJNUIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHNEIsR0FBRyxHQUFHN0QsU0FBekIsRUFBaUNpQyxDQUFDLEVBQWxDLEVBQXNDO0lBQ2xDMkIsUUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPRSxPQUFQLENBQWUsR0FBZjtJQUNIO0lBQ0o7O0lBRUQsV0FBT0YsR0FBUDtJQUNIOztJQUVELFNBQU8zRCxNQUFNLENBQUNMLE9BQU8sQ0FBQyxDQUFDWixLQUFELENBQUQsQ0FBUCxDQUFpQlEsR0FBakIsQ0FBcUIsVUFBQWdFLE1BQU0sRUFBSTtJQUN6QyxXQUFPNUQsT0FBTyxDQUFDQyxXQUFXLENBQUMsQ0FBQzJELE1BQUQsQ0FBRCxDQUFYLENBQXNCaEUsR0FBdEIsQ0FBMEIsVUFBQWdFLE1BQU0sRUFBSTtJQUMvQyxhQUFPRCxPQUFPLENBQUNDLE1BQUQsQ0FBUCxDQUFnQkcsS0FBaEIsQ0FBc0IsRUFBdEIsQ0FBUDtJQUNILEtBRmMsQ0FBRCxDQUFkO0lBR0gsR0FKYSxDQUFELEVBSVRQLE9BQU8sQ0FBQ0MsYUFBUixJQUF5QixDQUpoQixDQUFiO0lBS0g7O0lDakNELElBQU1VLE1BQU0sR0FBRyxDQUFDO0lBQ1o7SUFDQUYsRUFBQUEsR0FBRyxFQUFFLEVBRk87SUFHWkcsRUFBQUEsR0FBRyxFQUFFO0lBSE8sQ0FBRCxFQUliO0lBQ0U7SUFDQUgsRUFBQUEsR0FBRyxFQUFFLEVBRlA7SUFHRUcsRUFBQUEsR0FBRyxFQUFFO0lBSFAsQ0FKYSxFQVFiO0lBQ0U7SUFDQUgsRUFBQUEsR0FBRyxFQUFFLEVBRlA7SUFHRUcsRUFBQUEsR0FBRyxFQUFFO0lBSFAsQ0FSYSxDQUFmOztJQWNBLFNBQVNDLE1BQVQsQ0FBZ0JqRixLQUFoQixFQUF1QnVCLElBQXZCLEVBQTZCO0lBQ3pCLFVBQU9BLElBQVA7SUFDSSxTQUFLLFFBQUw7SUFDSSxhQUFPMkQsVUFBVSxDQUFDbEYsS0FBRCxDQUFqQjtJQUZSOztJQUtBLFNBQU9BLEtBQVA7SUFDSDs7SUFFRCxTQUFTbUYsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7SUFDckIsT0FBSSxJQUFNbkMsQ0FBVixJQUFlOEIsTUFBZixFQUF1QjtJQUNuQixRQUFNTSxJQUFJLEdBQUdELElBQUksQ0FBQ1YsUUFBTCxHQUFnQlksVUFBaEIsQ0FBMkIsQ0FBM0IsQ0FBYjs7SUFFQSxRQUFHUCxNQUFNLENBQUM5QixDQUFELENBQU4sQ0FBVTRCLEdBQVYsSUFBaUJRLElBQWpCLElBQXlCTixNQUFNLENBQUM5QixDQUFELENBQU4sQ0FBVStCLEdBQVYsSUFBaUJLLElBQTdDLEVBQW1EO0lBQy9DLGFBQU9OLE1BQU0sQ0FBQzlCLENBQUQsQ0FBYjtJQUNIO0lBQ0o7O0lBRUQsU0FBTyxJQUFQO0lBQ0g7O0FBRUQsSUFBTyxTQUFTc0MsSUFBVCxDQUFjdkYsS0FBZCxFQUFxQjtJQUN4QixNQUFNd0YsU0FBUyxHQUFJeEYsS0FBRCxDQUNiMEUsUUFEYSxHQUViQyxLQUZhLENBRVAsRUFGTyxFQUdibkUsR0FIYSxDQUdULFVBQUE0RSxJQUFJO0lBQUEsV0FBSUssUUFBUSxDQUFDTCxJQUFELEVBQU8sVUFBQ00sS0FBRCxFQUFRTCxJQUFSLEVBQWlCO0lBQ3pDLGFBQU8sQ0FBQ0ssS0FBRCxJQUFVTCxJQUFJLEdBQUdLLEtBQUssQ0FBQ1YsR0FBdkIsR0FBNkJLLElBQUksR0FBRyxDQUFwQyxHQUF3Q0ssS0FBSyxDQUFDYixHQUFyRDtJQUNILEtBRm9CLENBQVo7SUFBQSxHQUhLLEVBTWJjLElBTmEsQ0FNUixFQU5RLENBQWxCO0lBUUEsU0FBT1YsTUFBTSxDQUFDTyxTQUFELFVBQW1CeEYsS0FBbkIsRUFBYjtJQUNIOztJQUVELFNBQVN5RixRQUFULENBQWtCTCxJQUFsQixFQUF3QjNGLEVBQXhCLEVBQTRCO0lBQ3hCLE1BQU1pRyxLQUFLLEdBQUdQLFNBQVMsQ0FBQ0MsSUFBRCxDQUF2QjtJQUNBLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxVQUFMLENBQWdCLENBQWhCLENBQWI7SUFDQSxTQUFPTSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JwRyxFQUFFLENBQUNpRyxLQUFELEVBQVFMLElBQVIsQ0FBdEIsQ0FBUDtJQUNIOztBQUVELElBQU8sU0FBU1MsSUFBVCxDQUFjOUYsS0FBZCxFQUFxQjtJQUN4QixNQUFNd0YsU0FBUyxHQUFJeEYsS0FBRCxDQUNiMEUsUUFEYSxHQUViQyxLQUZhLENBRVAsRUFGTyxFQUdibkUsR0FIYSxDQUdULFVBQUE0RSxJQUFJO0lBQUEsV0FBSUssUUFBUSxDQUFDTCxJQUFELEVBQU8sVUFBQ00sS0FBRCxFQUFRTCxJQUFSLEVBQWlCO0lBQ3pDLGFBQU8sQ0FBQ0ssS0FBRCxJQUFVTCxJQUFJLEdBQUdLLEtBQUssQ0FBQ2IsR0FBdkIsR0FBNkJRLElBQUksR0FBRyxDQUFwQyxHQUF3Q0ssS0FBSyxDQUFDVixHQUFyRDtJQUNILEtBRm9CLENBQVo7SUFBQSxHQUhLLEVBTWJXLElBTmEsQ0FNUixFQU5RLENBQWxCO0lBUUEsU0FBT1YsTUFBTSxDQUFDTyxTQUFELFVBQW1CeEYsS0FBbkIsRUFBYjtJQUNIOztRQzFEb0IrRjs7Ozs7SUFFakIscUJBQVkvRixLQUFaLEVBQW1CK0IsVUFBbkIsRUFBK0I7SUFBQTs7SUFBQSxrRkFDckJFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCb0MsTUFBQUEsa0JBQWtCLEVBQUUsSUFESjtJQUVoQkQsTUFBQUEsYUFBYSxFQUFFLENBRkM7SUFHaEJyRSxNQUFBQSxLQUFLLEVBQUVBO0lBSFMsS0FBZCxFQUlIK0IsVUFKRyxDQURxQjtJQU05Qjs7Ozs7Ozs7Ozs7Ozs7c0JBc0JPO0lBQ0osYUFBT04sS0FBSyxDQUFDLEtBQUt6QixLQUFOLENBQVo7SUFDSDs7O3NDQUVVO0lBQ1AsYUFBT3dCLFFBQVEsQ0FBQyxLQUFLeEIsS0FBTixDQUFmO0lBQ0g7OzswQkExQlVBLE9BQU87SUFDZCxXQUFLZ0csT0FBTCxHQUFlaEcsS0FBZjtJQUNBLFdBQUtxRSxhQUFMLEdBQXFCNEIsSUFBSSxDQUFDakIsR0FBTCxDQUFTLEtBQUtYLGFBQWQsRUFBNkJyRCxNQUFNLENBQUNoQixLQUFELENBQW5DLENBQXJCO0lBQ0g7NEJBRVk7SUFDVCxhQUFPLEtBQUtnRyxPQUFaO0lBQ0g7Ozs0QkFFVztJQUNSLGFBQU8sS0FBS0UsTUFBWjtJQUNIOzBCQUVTbEcsT0FBTztJQUNiLFdBQUtpQixNQUFMLEdBQWNrRCxRQUFRLENBQUMsS0FBSytCLE1BQUwsR0FBY2xHLEtBQWYsRUFBc0I7SUFDeENxRSxRQUFBQSxhQUFhLEVBQUUsS0FBS0EsYUFEb0I7SUFFeENDLFFBQUFBLGtCQUFrQixFQUFFLEtBQUtBO0lBRmUsT0FBdEIsQ0FBdEI7SUFJSDs7OztNQTVCa0N4Qzs7UUNBbEJxRTs7Ozs7SUFFakIsZ0JBQVluRyxLQUFaLEVBQW1CK0IsVUFBbkIsRUFBK0I7SUFBQTs7SUFBQTs7SUFDM0IsOEVBQU1FLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCO0lBQ0FsQyxNQUFBQSxLQUFLLEVBQUVBLEtBRlM7SUFHaEJvRyxNQUFBQSxLQUFLLEVBQUUsSUFIUztJQUloQkMsTUFBQUEsU0FBUyxFQUFFO0lBSkssS0FBZCxFQUtIL0UsUUFBUSxDQUFDdEIsS0FBRCxDQUFSLEdBQWtCQSxLQUFsQixHQUEwQixJQUx2QixFQUs2QitCLFVBTDdCLENBQU47O0lBT0EsUUFBRyxDQUFDLE1BQUt1RSxLQUFULEVBQWdCO0lBQ1osWUFBS0EsS0FBTCxHQUFhbkQsS0FBSyxDQUFDb0QsSUFBTixDQUFXLE1BQUtILEtBQWhCLENBQWI7SUFDSDs7SUFWMEI7SUFXOUI7SUFFRDs7Ozs7Ozs7Ozs7O2lDQTBCUzNHLElBQUk7SUFDVCxVQUFHLEtBQUs0RyxTQUFSLEVBQW1CO0lBQ2YsYUFBS0csU0FBTDtJQUNILE9BRkQsTUFHSztJQUNELGFBQUtDLFNBQUw7SUFDSDs7SUFFRGpILE1BQUFBLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLElBQWQsRUFBb0JKLEVBQXBCO0lBRUEsYUFBTyxLQUFLaUgsSUFBTCxDQUFVLFVBQVYsQ0FBUDtJQUNIOzs7OEJBRUtqSCxJQUFJO0lBQUE7O0lBQ04sV0FBSzZHLEtBQUwsQ0FBVzVDLEtBQVgsQ0FBaUI7SUFBQSxlQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjM0QsRUFBZCxDQUFOO0lBQUEsT0FBakI7SUFFQSxhQUFPLEtBQUtpSCxJQUFMLENBQVUsT0FBVixDQUFQO0lBQ0g7Ozs2QkFFSWpILElBQUk7SUFDTCxXQUFLNkcsS0FBTCxDQUFXN0MsSUFBWCxDQUFnQmhFLEVBQWhCO0lBRUEsYUFBTyxLQUFLaUgsSUFBTCxDQUFVLE1BQVYsQ0FBUDtJQUNIOzs7OEJBRUtqSCxJQUFJO0lBQUE7O0lBQ04sV0FBSzZHLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQjtJQUFBLGVBQU0sTUFBSSxDQUFDdkQsUUFBTCxDQUFjM0QsRUFBZCxDQUFOO0lBQUEsT0FBakI7SUFFQSxhQUFPLEtBQUtpSCxJQUFMLENBQVUsT0FBVixDQUFQO0lBQ0g7OztrQ0FFUzFHLE9BQU87SUFFaEI7OztrQ0FFU0EsT0FBTztJQUVoQjs7O29DQUVXNEcsT0FBTztJQUVsQjs7O2lDQUVRQSxPQUFPO0lBRWY7OztnQ0FFT0EsT0FBTztJQUVkOzs7NEJBakVXO0lBQ1IsYUFBTyxLQUFLVixNQUFaO0lBQ0g7MEJBRVNsRyxPQUFPO0lBQ2IsV0FBSzBHLElBQUwsQ0FBVSxTQUFWLEVBQXFCLEtBQUtSLE1BQUwsR0FBY2xHLEtBQUssWUFBWStGLFNBQWpCLEdBQTZCL0YsS0FBN0IsR0FBcUMrRixTQUFTLENBQUNRLElBQVYsQ0FBZXZHLEtBQWYsQ0FBeEU7SUFDSDs7OzRCQUVXO0lBQ1IsYUFBTyxLQUFLNkcsTUFBWjtJQUNIOzBCQUVTUCxPQUFPO0lBQ2IsV0FBS08sTUFBTCxHQUFjUCxLQUFLLFlBQVluRCxLQUFqQixHQUF5Qm1ELEtBQXpCLEdBQWlDbkQsS0FBSyxDQUFDb0QsSUFBTixDQUFXLEtBQUtILEtBQWhCLENBQS9DO0lBQ0g7Ozs7TUF2QzZCdEU7O0lDRW5CLFNBQVNnRixRQUFULENBQWtCOUcsS0FBbEIsRUFBa0M7SUFDN0MsTUFBSStHLE9BQU8sR0FBRyxLQUFkOztJQUQ2QyxvQ0FBTjFFLElBQU07SUFBTkEsSUFBQUEsSUFBTTtJQUFBOztJQUc3Q3pCLEVBQUFBLE9BQU8sQ0FBQ3lCLElBQUQsQ0FBUCxDQUFjQyxPQUFkLENBQXNCLFVBQUEwRSxHQUFHLEVBQUk7SUFDekIsUUFBSzlHLE1BQU0sQ0FBQ0YsS0FBRCxDQUFOLElBQWlCRSxNQUFNLENBQUM4RyxHQUFELENBQXhCLElBQ0MxRixRQUFRLENBQUMwRixHQUFELENBQVIsSUFBa0JoSCxLQUFLLFlBQVlnSCxHQURwQyxJQUVDdEgsVUFBVSxDQUFDc0gsR0FBRCxDQUFWLElBQW1CLENBQUM5RixPQUFPLENBQUM4RixHQUFELENBQTNCLElBQW9DQSxHQUFHLENBQUNoSCxLQUFELENBQUgsS0FBZSxJQUZwRCxJQUdDcUIsUUFBUSxDQUFDMkYsR0FBRCxDQUFSLElBQWtCLFFBQU9oSCxLQUFQLE1BQWlCZ0gsR0FIeEMsRUFHK0M7SUFDM0NELE1BQUFBLE9BQU8sR0FBRyxJQUFWO0lBQ0g7SUFDSixHQVBEO0lBU0EsU0FBT0EsT0FBUDtJQUNIOztJQ2xCYyxxQkFBUy9HLEtBQVQsRUFBZ0JpSCxJQUFoQixFQUFzQjtJQUNqQyxTQUFPLENBQUM1RixRQUFRLENBQUM0RixJQUFJLElBQUksT0FBVCxDQUFSLEdBQTRCQyxRQUFRLENBQUNELElBQUQsQ0FBcEMsR0FBNkNBLElBQTlDLEVBQW9ERSxVQUFwRCxDQUErRG5ILEtBQS9ELEtBQXlFQSxLQUFoRjtJQUNIOztBQ0pELDBCQUFlO0lBQ1hvSCxFQUFBQSxLQUFLLEVBQUUsNkJBREk7SUFFWEMsRUFBQUEsS0FBSyxFQUFFLDhCQUZJO0lBR1hILEVBQUFBLFFBQVEsRUFBRSxpQ0FIQztJQUlYSSxFQUFBQSxJQUFJLEVBQUUsK0NBSks7SUFLWEMsRUFBQUEsT0FBTyxFQUFFLG1EQUxFO0lBTVhDLEVBQUFBLFNBQVMsRUFBRTtJQU5BLENBQWY7O0lDVU8sU0FBU0MsSUFBVCxDQUFjQyxFQUFkLEVBQWtCQyxRQUFsQixFQUE0QjtJQUNsQyxNQUFHQSxRQUFRLENBQUNDLFVBQVosRUFBd0I7SUFDdkJELElBQUFBLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsWUFBcEIsQ0FBaUNILEVBQWpDLEVBQXFDQyxRQUFyQztJQUVBLFdBQU9ELEVBQVA7SUFDQTs7SUFFRCxTQUFPQyxRQUFQO0lBQ0E7QUFFRCxJQUFPLFNBQVM1RSxhQUFULENBQXVCMkUsRUFBdkIsRUFBMkIzRixVQUEzQixFQUF1QztJQUM3QyxNQUFHVCxRQUFRLENBQUNTLFVBQUQsQ0FBWCxFQUF5QjtJQUN4QixTQUFJLElBQU1rQixDQUFWLElBQWVsQixVQUFmLEVBQTJCO0lBQzFCMkYsTUFBQUEsRUFBRSxDQUFDMUYsWUFBSCxDQUFnQmlCLENBQWhCLEVBQW1CbEIsVUFBVSxDQUFDa0IsQ0FBRCxDQUE3QjtJQUNBO0lBQ0Q7O0lBRUQsU0FBT3lFLEVBQVA7SUFDQTtBQUVELElBQU8sU0FBU0ksY0FBVCxDQUF3QkosRUFBeEIsRUFBNEJLLFFBQTVCLEVBQXNDO0lBQzVDLE1BQUdoSCxPQUFPLENBQUNnSCxRQUFELENBQVYsRUFBc0I7SUFDckJBLElBQUFBLFFBQVEsQ0FBQ3RGLE1BQVQsQ0FBZ0IxQyxJQUFoQixFQUFzQnVDLE9BQXRCLENBQThCLFVBQUEwRixLQUFLLEVBQUk7SUFDdEMsVUFBR0EsS0FBSyxZQUFZQyxXQUFwQixFQUFpQztJQUNoQ1AsUUFBQUEsRUFBRSxDQUFDUSxXQUFILENBQWVGLEtBQWY7SUFDQTtJQUNELEtBSkQ7SUFLQTs7SUFFRCxTQUFPTixFQUFQO0lBQ0E7QUFFRCxJQUFPLFNBQVNTLGFBQVQsQ0FBdUJULEVBQXZCLEVBQTJCSyxRQUEzQixFQUFxQ2hHLFVBQXJDLEVBQWlEO0lBQ3ZELE1BQUcsRUFBRTJGLEVBQUUsWUFBWU8sV0FBaEIsQ0FBSCxFQUFpQztJQUNoQ1AsSUFBQUEsRUFBRSxHQUFHVSxRQUFRLENBQUNELGFBQVQsQ0FBdUJULEVBQXZCLENBQUw7SUFDQTs7SUFFRDNFLEVBQUFBLGFBQWEsQ0FBQzJFLEVBQUQsRUFBS3BHLFFBQVEsQ0FBQ3lHLFFBQUQsQ0FBUixHQUFxQkEsUUFBckIsR0FBZ0NoRyxVQUFyQyxDQUFiOztJQUVBLE1BQUcsQ0FBQ1QsUUFBUSxDQUFDeUcsUUFBRCxDQUFULElBQXVCLENBQUNoSCxPQUFPLENBQUNnSCxRQUFELENBQWxDLEVBQThDO0lBQzdDTCxJQUFBQSxFQUFFLENBQUNXLFNBQUgsR0FBZU4sUUFBZjtJQUNBLEdBRkQsTUFHSztJQUNKRCxJQUFBQSxjQUFjLENBQUNKLEVBQUQsRUFBS0ssUUFBTCxDQUFkO0lBQ0E7O0lBRUQsU0FBT0wsRUFBUDtJQUNBO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDbkRxQlk7Ozs7O0lBRWpCLHdCQUFZdkcsVUFBWixFQUF3QjtJQUFBOztJQUFBOztJQUNwQixzRkFBTUUsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDaEJxRyxNQUFBQSxNQUFNLEVBQUU7SUFEUSxLQUFkLEVBRUh4RyxVQUZHLENBQU47O0lBSUEsUUFBRyxDQUFDLE1BQUtzRixLQUFULEVBQWdCO0lBQ1poSSxNQUFBQSxLQUFLLFdBQUksTUFBSytCLElBQVQscUNBQUw7SUFDSDs7SUFFRCxRQUFHLENBQUMsTUFBSzhGLFFBQVQsRUFBbUI7SUFDZjdILE1BQUFBLEtBQUssV0FBSSxNQUFLK0IsSUFBVCx3Q0FBTDtJQUNIOztJQUVQLFFBQUcsQ0FBQyxNQUFLaUcsS0FBTCxDQUFXLE1BQUtqRyxJQUFoQixDQUFKLEVBQTJCO0lBQ2pCLFlBQU0sSUFBSTdCLEtBQUosV0FDQyxNQUFLNkIsSUFETixxREFBTjtJQUdIOztJQWpCbUI7SUFrQnZCOzs7O2tDQXNEU2dCLEtBQUs7SUFDWCxhQUFPb0csVUFBUyxDQUFDcEcsR0FBRCxFQUFNLEtBQUs4RSxRQUFYLENBQWhCO0lBQ0g7OzswQkFFQzlFLEtBQUs7SUFDSCxhQUFPLEtBQUtvRyxTQUFMLENBQWVwRyxHQUFmLENBQVA7SUFDSDs7O2lDQUVLO0lBQ0YsVUFBTXNGLEVBQUUsR0FBR1MsYUFBYSxDQUFDLEtBQUQsRUFBUTtJQUM1Qk0sUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFNBQUwsS0FBbUIsWUFBbkIsR0FBa0MsS0FBS0EsU0FBdkMsR0FBbUQsZ0JBQWdCLEtBQUtBO0lBRG5ELE9BQVIsQ0FBeEI7SUFJQSxXQUFLckIsS0FBTCxDQUFXLEtBQUtqRyxJQUFoQixFQUFzQnNHLEVBQXRCLEVBQTBCLElBQTFCOztJQUVBLFVBQUcsQ0FBQyxLQUFLQSxFQUFULEVBQWE7SUFDVCxhQUFLQSxFQUFMLEdBQVVBLEVBQVY7SUFDSCxPQUZELE1BR0ssSUFBRyxLQUFLQSxFQUFMLENBQVFXLFNBQVIsS0FBc0JYLEVBQUUsQ0FBQ1csU0FBNUIsRUFBdUM7SUFDeEMsYUFBS1gsRUFBTCxHQUFVRCxJQUFJLENBQUNDLEVBQUQsRUFBSyxLQUFLQSxFQUFWLENBQWQ7SUFDSDs7SUFFRCxhQUFPLEtBQUtBLEVBQVo7SUFDTjs7OzhCQUVRYSxRQUFRO0lBQ1YsVUFBTWIsRUFBRSxHQUFHLEtBQUtpQixNQUFMLEVBQVg7SUFFQSxXQUFLSixNQUFMLEdBQWNBLE1BQWQ7SUFDQSxXQUFLQSxNQUFMLENBQVlMLFdBQVosQ0FBd0JSLEVBQXhCO0lBRUEsYUFBT0EsRUFBUDtJQUNIOzs7NEJBcEZRO0lBQ0wsYUFBTyxLQUFLa0IsR0FBWjtJQUNIOzBCQUVNNUksT0FBTztJQUNWLFVBQUcsQ0FBQzhHLFFBQVEsQ0FBQzlHLEtBQUQsRUFBUSxJQUFSLEVBQWNpSSxXQUFkLENBQVosRUFBd0M7SUFDcEM1SSxRQUFBQSxLQUFLLENBQUN3SixlQUFlLENBQUN0QixPQUFqQixDQUFMO0lBQ0g7O0lBRUQsV0FBS3FCLEdBQUwsR0FBVzVJLEtBQVg7SUFDSDs7OzRCQUVZO0lBQ1QsYUFBTyxLQUFLOEksT0FBWjtJQUNIOzBCQUVVUCxRQUFRO0lBQ2YsV0FBS08sT0FBTCxHQUFlUCxNQUFmO0lBQ0g7Ozs0QkFFVztJQUNSLGFBQU8sS0FBS1EsTUFBWjtJQUNIOzBCQUVTL0ksT0FBTztJQUNiLFVBQUcsQ0FBQzhHLFFBQVEsQ0FBQzlHLEtBQUQsRUFBUSxRQUFSLENBQVosRUFBK0I7SUFDM0JYLFFBQUFBLEtBQUssQ0FBQ3dKLGVBQWUsQ0FBQzdJLEtBQWpCLENBQUw7SUFDSDs7SUFFRCxXQUFLK0ksTUFBTCxHQUFjL0ksS0FBZDtJQUNIOzs7NEJBRWM7SUFDWCxhQUFPLEtBQUtnSixTQUFaO0lBQ0g7MEJBRVloSixPQUFPO0lBQ2hCLFVBQUcsQ0FBQzhHLFFBQVEsQ0FBQzlHLEtBQUQsRUFBUSxRQUFSLENBQVosRUFBK0I7SUFDM0JYLFFBQUFBLEtBQUssQ0FBQ3dKLGVBQWUsQ0FBQzNCLFFBQWpCLENBQUw7SUFDSDs7SUFFRCxXQUFLOEIsU0FBTCxHQUFpQmhKLEtBQWpCO0lBQ0g7Ozs0QkFFVTtJQUNQLGFBQU8sS0FBS2lKLFdBQUwsQ0FBaUI3SCxJQUF4QjtJQUNIOzs7NEJBRWU7SUFDWixhQUFPTSxTQUFTLENBQUMsS0FBS04sSUFBTixDQUFoQjtJQUNIOzs7O01BeEVxQ1U7O1FDTnJCb0g7Ozs7Ozs7Ozs7OztNQUFnQlo7O1FDQ2hCYTs7Ozs7SUFFakIsb0JBQVluSixLQUFaLEVBQW1CK0IsVUFBbkIsRUFBK0I7SUFBQTs7SUFBQSxpRkFDckJFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCbEMsTUFBQUEsS0FBSyxFQUFFQTtJQURTLEtBQWQsRUFFSHNCLFFBQVEsQ0FBQ3RCLEtBQUQsQ0FBUixHQUFrQkEsS0FBbEIsR0FBMEIsSUFGdkIsRUFFNkIrQixVQUY3QixDQURxQjtJQUk5Qjs7O01BTmlDdUc7O1FDR2pCYzs7Ozs7SUFFakIsZ0JBQVlwSixLQUFaLEVBQW1CK0IsVUFBbkIsRUFBK0I7SUFBQTs7SUFBQSw2RUFDckJFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCbEMsTUFBQUEsS0FBSyxFQUFFQSxLQURTO0lBRWhCb0gsTUFBQUEsS0FBSyxFQUFFO0lBRlMsS0FBZCxFQUdIOUYsUUFBUSxDQUFDdEIsS0FBRCxDQUFSLEdBQWtCQSxLQUFsQixHQUEwQixJQUh2QixFQUc2QitCLFVBSDdCLENBRHFCO0lBSzlCOzs7O3VDQWtCYy9CLE9BQU8rQixZQUFZO0lBQzlCLFVBQU1zSCxJQUFJLEdBQUcsSUFBSUYsUUFBSixDQUFhbkosS0FBYixFQUFvQmlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQzNDbUYsUUFBQUEsS0FBSyxFQUFFLEtBQUtBLEtBRCtCO0lBRTNDSCxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7SUFGNEIsT0FBZCxFQUc5Qm5GLFVBSDhCLENBQXBCLENBQWI7SUFLQSxXQUFLdUgsTUFBTCxDQUFZOUcsSUFBWixDQUFpQjZHLElBQWpCO0lBRUEsYUFBT0EsSUFBUDtJQUNIOzs7NEJBekJXO0lBQ1IsYUFBTyxLQUFLbkQsTUFBWjtJQUNIOzBCQUVTbEcsT0FBTztJQUNiLFdBQUtrRyxNQUFMLEdBQWNsRyxLQUFkO0lBQ0g7Ozs0QkFFVztJQUNSLGFBQU8sS0FBS3NKLE1BQVo7SUFDSDswQkFFU3RKLE9BQU87SUFDYixXQUFLc0osTUFBTCxHQUFjdEosS0FBZDtJQUNIOzs7O01BdkI2QnNJOztRQ0hiaUI7Ozs7O0lBRWpCLGlCQUFZbkMsS0FBWixFQUFtQnJGLFVBQW5CLEVBQStCO0lBQUE7O0lBQUEsOEVBQ3JCRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNoQmtGLE1BQUFBLEtBQUssRUFBRUE7SUFEUyxLQUFkLEVBRUg5RixRQUFRLENBQUM4RixLQUFELENBQVIsR0FBa0JBLEtBQWxCLEdBQTBCLElBRnZCLEVBRTZCckYsVUFGN0IsQ0FEcUI7SUFJOUI7OztNQU44QnVHOztRQ0Fka0I7Ozs7O0lBRWpCLGlCQUFZQyxLQUFaLEVBQW1CMUgsVUFBbkIsRUFBK0I7SUFBQTs7SUFBQSw4RUFDckJFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2hCdUgsTUFBQUEsS0FBSyxFQUFFQTtJQURTLEtBQWQsRUFFSG5JLFFBQVEsQ0FBQ21JLEtBQUQsQ0FBUixHQUFrQkEsS0FBbEIsR0FBMEIsSUFGdkIsRUFFNkIxSCxVQUY3QixDQURxQjtJQUk5Qjs7O01BTjhCdUc7O1FDRGRvQjs7Ozs7Ozs7Ozs7OztrQ0FFUDFKLE9BQU87SUFDYixXQUFLQSxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQSxLQUFYLElBQW9CQSxLQUFLLElBQUksQ0FBN0IsQ0FBYjtJQUNIOzs7a0NBRVNBLE9BQU87SUFDYixXQUFLQSxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQSxLQUFYLElBQW9CQSxLQUFLLElBQUksQ0FBN0IsQ0FBYjtJQUNIOzs7O01BUmdDbUc7O1FDQWhCd0Q7Ozs7Ozs7Ozs7OztNQUE0QnhEOztJQ0FsQyxvQkFBU3VCLEVBQVQsRUFBYWtDLFFBQWIsRUFBdUI7SUFDbEM5QixFQUFBQSxjQUFjLENBQUNKLEVBQUQsRUFBSyxDQUNmUyxhQUFhLENBQUMsS0FBRCxFQUFRO0lBQUNNLElBQUFBLEtBQUssRUFBRTtJQUFSLEdBQVIsQ0FERSxFQUVmTixhQUFhLENBQUMsS0FBRCxFQUFRO0lBQUNNLElBQUFBLEtBQUssRUFBRTtJQUFSLEdBQVIsQ0FGRSxDQUFMLENBQWQ7SUFJSDs7SUNKRCxTQUFTVCxLQUFULENBQWVOLEVBQWYsRUFBbUJtQyxLQUFuQixFQUEwQjtJQUN0QixTQUFPbkMsRUFBRSxHQUFHQSxFQUFFLENBQUNvQyxVQUFILENBQWNELEtBQWQsQ0FBSCxHQUEwQixJQUFuQztJQUNIOztJQUVELFNBQVN6RSxJQUFULENBQWNzQyxFQUFkLEVBQWtCO0lBQ2QsU0FBT0EsRUFBRSxHQUFHQSxFQUFFLENBQUNxQyxhQUFILENBQWlCLHdDQUFqQixFQUEyRDFCLFNBQTlELEdBQTBFLElBQW5GO0lBQ0g7O0FBRUQsSUFBZSxvQkFBU1gsRUFBVCxFQUFha0MsUUFBYixFQUF1QjtJQUNsQyxNQUFNSSxLQUFLLEdBQUdKLFFBQVEsQ0FBQzVKLEtBQVQsQ0FBZWlCLE1BQWYsQ0FBc0JULEdBQXRCLENBQTBCLFVBQUN5SixLQUFELEVBQVExSixDQUFSLEVBQWM7SUFDbEQsUUFBTTJKLE9BQU8sR0FBR2xDLEtBQUssQ0FBQzRCLFFBQVEsQ0FBQ2xDLEVBQVYsRUFBY25ILENBQWQsQ0FBckI7SUFFQSxRQUFNNEosS0FBSyxHQUFHRixLQUFLLENBQUN6SixHQUFOLENBQVUsVUFBQ1IsS0FBRCxFQUFRVSxDQUFSLEVBQWM7SUFDbEMsVUFBTTBKLE1BQU0sR0FBR3BDLEtBQUssQ0FBQ2tDLE9BQUQsRUFBVXhKLENBQVYsQ0FBcEI7SUFDQSxVQUFNMkosU0FBUyxHQUFHakYsSUFBSSxDQUFDZ0YsTUFBRCxDQUF0QjtJQUVBLGFBQU9SLFFBQVEsQ0FBQ1UsVUFBVCxDQUFvQnRLLEtBQXBCLEVBQTJCO0lBQzlCdUssUUFBQUEsUUFBUSxFQUFFRixTQURvQjtJQUU5QmhFLFFBQUFBLFNBQVMsRUFBRXVELFFBQVEsQ0FBQ3ZEO0lBRlUsT0FBM0IsQ0FBUDtJQUlILEtBUmEsQ0FBZDtJQVVBLFdBQU91RCxRQUFRLENBQUNZLFdBQVQsQ0FBcUJMLEtBQXJCLENBQVA7SUFDSCxHQWRhLENBQWQ7SUFnQkEsTUFBTU0sS0FBSyxHQUFHVCxLQUFLLENBQUN4SixHQUFOLENBQVUsVUFBQXlKLEtBQUssRUFBSTtJQUM3QixXQUFPQSxLQUFLLENBQUN0QixNQUFOLEVBQVA7SUFDSCxHQUZhLENBQWQ7SUFJQWIsRUFBQUEsY0FBYyxDQUFDSixFQUFELEVBQUsrQyxLQUFMLENBQWQ7SUFDSDs7SUMvQmMsa0JBQVMvQyxFQUFULEVBQWFrQyxRQUFiLEVBQXVCO0lBQ2xDLE1BQU14QyxLQUFLLEdBQUd3QyxRQUFRLENBQUN4QyxLQUFULENBQWU1RyxHQUFmLENBQW1CLFVBQUE2SSxJQUFJLEVBQUk7SUFDckMsV0FBT0EsSUFBSSxDQUFDVixNQUFMLEVBQVA7SUFDSCxHQUZhLENBQWQ7SUFJQWIsRUFBQUEsY0FBYyxDQUFDSixFQUFELEVBQUtOLEtBQUwsQ0FBZDtJQUNIOztJQ05jLGtCQUFTTSxFQUFULEVBQWFrQyxRQUFiLEVBQXVCO0lBQ2xDbEMsRUFBQUEsRUFBRSxDQUFDVyxTQUFILEdBQWV1QixRQUFRLENBQUNjLENBQVQsQ0FBV2QsUUFBUSxDQUFDSCxLQUFwQixDQUFmO0lBQ0g7O0lDQWMsaUJBQVMvQixFQUFULEVBQWFrQyxRQUFiLEVBQXVCO0lBQ2xDLE1BQU1lLFdBQVcsR0FBR2YsUUFBUSxDQUFDVyxRQUFULEtBQ2hCLENBQUNYLFFBQVEsQ0FBQ3ZELFNBQVYsR0FBc0JQLElBQUksQ0FBQzhELFFBQVEsQ0FBQzVKLEtBQVYsQ0FBMUIsR0FBNkN1RixJQUFJLENBQUNxRSxRQUFRLENBQUM1SixLQUFWLENBRGpDLENBQXBCOztJQUlBLE1BQUk0SixRQUFRLENBQUNXLFFBQVQsSUFBcUJYLFFBQVEsQ0FBQ1csUUFBVCxLQUFzQlgsUUFBUSxDQUFDNUosS0FBeEQsRUFBK0Q7SUFDM0QwSCxJQUFBQSxFQUFFLENBQUNrRCxTQUFILENBQWFDLEdBQWIsQ0FBaUIsTUFBakI7SUFDSDs7SUFFRGpCLEVBQUFBLFFBQVEsQ0FBQ3hDLEtBQVQsR0FBaUIsQ0FDYndDLFFBQVEsQ0FBQ2tCLGNBQVQsQ0FBd0JsQixRQUFRLENBQUM1SixLQUFqQyxFQUF3QztJQUNwQytLLElBQUFBLE1BQU0sRUFBRTtJQUQ0QixHQUF4QyxDQURhLEVBSWJuQixRQUFRLENBQUNrQixjQUFULENBQXdCSCxXQUF4QixFQUFxQztJQUNqQ0ksSUFBQUEsTUFBTSxFQUFFO0lBRHlCLEdBQXJDLENBSmEsQ0FBakI7SUFTQWpELEVBQUFBLGNBQWMsQ0FBQ0osRUFBRCxFQUFLa0MsUUFBUSxDQUFDeEMsS0FBVCxDQUFlNUcsR0FBZixDQUFtQixVQUFBNkksSUFBSTtJQUFBLFdBQUlBLElBQUksQ0FBQ1YsTUFBTCxFQUFKO0lBQUEsR0FBdkIsQ0FBTCxDQUFkO0lBQ0g7O0lDckJjLHFCQUFTakIsRUFBVCxFQUFha0MsUUFBYixFQUF1QjtJQUNsQyxNQUFNbEIsU0FBUyxHQUFHa0IsUUFBUSxDQUFDbUIsTUFBVCxLQUFvQixJQUFwQixHQUEyQixRQUEzQixHQUNkbkIsUUFBUSxDQUFDbUIsTUFBVCxLQUFvQixLQUFwQixHQUE0QixRQUE1QixHQUF1QyxJQUQzQztJQUlBakQsRUFBQUEsY0FBYyxDQUFDSixFQUFELEVBQUssQ0FDZlMsYUFBYSxDQUFDLEtBQUQsRUFBUSxDQUNqQkEsYUFBYSxDQUFDLEtBQUQsRUFBUXlCLFFBQVEsQ0FBQzVKLEtBQWpCLEVBQXdCO0lBQUN5SSxJQUFBQSxLQUFLLEVBQUU7SUFBUixHQUF4QixDQURJLEVBRWpCTixhQUFhLENBQUMsS0FBRCxFQUFReUIsUUFBUSxDQUFDNUosS0FBakIsRUFBd0I7SUFBQ3lJLElBQUFBLEtBQUssRUFBRTtJQUFSLEdBQXhCLENBRkksQ0FBUixFQUdWO0lBQUNBLElBQUFBLEtBQUssdUNBQWdDQyxTQUFoQztJQUFOLEdBSFUsQ0FERSxDQUFMLENBQWQ7SUFNSDs7QUNORCxtQkFBZTtJQUNYUSxFQUFBQSxPQUFPLEVBQVBBLFNBRFc7SUFFWDhCLEVBQUFBLFNBQVMsRUFBVEEsU0FGVztJQUdYekIsRUFBQUEsS0FBSyxFQUFMQSxPQUhXO0lBSVhDLEVBQUFBLEtBQUssRUFBTEEsT0FKVztJQUtYSixFQUFBQSxJQUFJLEVBQUpBLE1BTFc7SUFNWEQsRUFBQUEsUUFBUSxFQUFSQTtJQU5XLENBQWY7O0lDUEE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7OztBQUtBLElBQU8sSUFBTWhDLFlBQVUsR0FBRztJQUN6QixXQUFZLE9BRGE7SUFFekIsWUFBWSxRQUZhO0lBR3pCLFVBQVksTUFIYTtJQUl6QixXQUFZLE9BSmE7SUFLekIsYUFBWSxTQUxhO0lBTXpCLGFBQVk7SUFOYSxDQUFuQjtBQVNQLElBQU8sSUFBTThELFNBQU8sR0FBRyxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLFNBQWhCLENBQWhCOzs7Ozs7O0lDZFA7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztJQ0FBOzs7Ozs7SUNBQTs7Ozs7O0lDQUE7Ozs7OztBQ0lBLHdCQUFlO0lBQ1gzRCxFQUFBQSxJQUFJLEVBQUVvQyxPQURLO0lBRVhyQyxFQUFBQSxLQUFLLEVBQUU2RCxRQUZJO0lBR1hoRSxFQUFBQSxRQUFRLEVBQUVpRTtJQUhDLENBQWY7O1FDT3FCSDs7Ozs7SUFFakIscUJBQVl0RCxFQUFaLEVBQWdCMUgsS0FBaEIsRUFBdUIrQixVQUF2QixFQUFtQztJQUFBOztJQUFBOztJQUMvQixRQUFHLENBQUMrRSxRQUFRLENBQUNZLEVBQUQsRUFBS08sV0FBTCxDQUFaLEVBQStCO0lBQzNCNUksTUFBQUEsS0FBSyxDQUFDd0osZUFBZSxDQUFDdEIsT0FBakIsQ0FBTDtJQUNIOztJQUVELG1GQUFNdEYsTUFBTSxDQUFDQyxNQUFQLENBQWM7SUFDaEJrSixNQUFBQSxhQUFhLEVBQUVwTCxLQURDO0lBRWhCcUgsTUFBQUEsS0FBSyxFQUFFZ0UsYUFBYSxDQUFDaEUsS0FGTDtJQUdoQkgsTUFBQUEsUUFBUSxFQUFFbUUsYUFBYSxDQUFDbkU7SUFIUixLQUFkLEVBSUg1RixRQUFRLENBQUN0QixLQUFELENBQVIsR0FBa0JBLEtBQWxCLEdBQTBCLElBSnZCLEVBSTZCK0IsVUFKN0IsQ0FBTjtJQU1BLFVBQUt1RixJQUFMLEdBQVkrRCxhQUFhLENBQUMvRCxJQUExQjs7SUFDQSxVQUFLQSxJQUFMLENBQVVnRSxXQUFWOztJQUNBLFVBQUtDLEtBQUwsQ0FBVzdELEVBQVg7O0lBYitCO0lBY2xDOzs7O3lDQTJDZ0I7SUFBQTs7SUFDYixVQUFNakksRUFBRSxHQUFHLFNBQUxBLEVBQUs7SUFBQSxlQUFNLE1BQUksQ0FBQytMLE9BQUwsRUFBTjtJQUFBLE9BQVg7O0lBRUEsV0FBS0MsS0FBTCxDQUFXL0ksR0FBWCxDQUFlLFNBQWYsRUFBMEJqRCxFQUExQixFQUE4QmtELEVBQTlCLENBQWlDLFNBQWpDLEVBQTRDbEQsRUFBNUM7SUFFQSxPQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLE1BQXJCLEVBQTZCLE9BQTdCLEVBQXNDLFVBQXRDLEVBQWtENkMsT0FBbEQsQ0FBMEQsVUFBQUMsS0FBSyxFQUFJO0lBQy9ELFlBQU05QyxFQUFFLEdBQUcsU0FBTEEsRUFBSztJQUFBLGlCQUFNLE1BQUksQ0FBQ2lILElBQUwsQ0FBVW5FLEtBQVYsQ0FBTjtJQUFBLFNBQVg7O0lBRUEsUUFBQSxNQUFJLENBQUMrRSxJQUFMLENBQVU1RSxHQUFWLENBQWNILEtBQWQsRUFBcUI5QyxFQUFyQixFQUF5QmtELEVBQXpCLENBQTRCSixLQUE1QixFQUFtQzlDLEVBQW5DO0lBQ0gsT0FKRDtJQUtIOzs7a0NBRVM7SUFDTixXQUFLa0osTUFBTDs7SUFFQSxVQUFJLEtBQUsrQyxNQUFMLEtBQWdCQyxTQUFoQixJQUNBLEtBQUtELE1BQUwsS0FBZ0IsS0FBS3BFLElBQUwsQ0FBVXRILEtBQVYsQ0FBZ0JBLEtBRHBDLEVBQzJDO0lBQ3ZDLGFBQUt5RCxJQUFMO0lBQ0g7SUFDSjs7OzhCQUVLaUUsSUFBSTtJQUNOLDJFQUFZQSxFQUFaOztJQUVBLFdBQUtKLElBQUwsQ0FBVXNFLE9BQVYsQ0FBa0IsSUFBbEI7SUFFQSxhQUFPLElBQVA7SUFDSDs7O2lDQUVRO0lBQ0wsV0FBS3RFLElBQUwsQ0FBVXVFLFFBQVY7SUFFQSxhQUFPLEtBQUtuRSxFQUFaO0lBQ0g7Ozs4QkFFS2pJLElBQUk7SUFDTixXQUFLNkgsSUFBTCxDQUFVWCxLQUFWLENBQWdCbEgsRUFBaEI7SUFFQSxhQUFPLElBQVA7SUFDSDs7OzhCQUVLQSxJQUFJO0lBQ04sV0FBSzZILElBQUwsQ0FBVTVELEtBQVYsQ0FBZ0JqRSxFQUFoQjtJQUVBLGFBQU8sSUFBUDtJQUNIOzs7NkJBRUlBLElBQUk7SUFDTCxXQUFLNkgsSUFBTCxDQUFVN0QsSUFBVixDQUFlaEUsRUFBZjtJQUVBLGFBQU8sSUFBUDtJQUNIOzs7c0NBRWFzQyxZQUFZO0lBQ3RCLGFBQU9tSCxPQUFPLENBQUMzQyxJQUFSLENBQWF0RSxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUM5Qm1GLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQURrQjtJQUU5QkgsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0lBRmUsT0FBZCxFQUdqQm5GLFVBSGlCLENBQWIsQ0FBUDtJQUlIOzs7bUNBRVUvQixPQUFPK0IsWUFBWTtJQUMxQixhQUFPcUgsSUFBSSxDQUFDN0MsSUFBTCxDQUFVdkcsS0FBVixFQUFpQmlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0lBQ2xDbUYsUUFBQUEsS0FBSyxFQUFFLEtBQUtBLEtBRHNCO0lBRWxDSCxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7SUFGbUIsT0FBZCxFQUdyQm5GLFVBSHFCLENBQWpCLENBQVA7SUFJSDs7O29DQUVXL0IsT0FBTytCLFlBQVk7SUFDM0IsYUFBT3lILEtBQUssQ0FBQ2pELElBQU4sQ0FBV3ZHLEtBQVgsRUFBa0JpQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNuQ21GLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQUR1QjtJQUVuQ0gsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0lBRm9CLE9BQWQsRUFHdEJuRixVQUhzQixDQUFsQixDQUFQO0lBSUg7OztvQ0FFV3FGLE9BQU9yRixZQUFZO0lBQzNCLGFBQU93SCxLQUFLLENBQUNoRCxJQUFOLENBQVdhLEtBQVgsRUFBa0JuRixNQUFNLENBQUNDLE1BQVAsQ0FBYztJQUNuQ21GLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQUR1QjtJQUVuQ0gsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0lBRm9CLE9BQWQsRUFHdEJuRixVQUhzQixDQUFsQixDQUFQO0lBSUg7OzsrQkF4SFU7SUFDUCxhQUFPLEtBQUswSixLQUFaO0lBQ0g7MEJBRVF6TCxPQUFPO0lBQ1osVUFBRyxDQUFDOEcsUUFBUSxDQUFDOUcsS0FBRCxFQUFRLENBQUNtRyxJQUFELEVBQU8sVUFBUCxDQUFSLENBQVosRUFBeUM7SUFDckM5RyxRQUFBQSxLQUFLLENBQUN3SixlQUFlLENBQUN2QixJQUFqQixDQUFMO0lBQ0g7O0lBRUQsV0FBS21FLEtBQUwsR0FBYXpMLEtBQUssWUFBWW1CLFFBQWpCLEdBQ1QsSUFBSW5CLEtBQUosQ0FBVSxLQUFLb0wsYUFBZixFQUE4QixLQUFLVSxXQUFuQyxDQURTLEdBQ3lDOUwsS0FEdEQ7SUFHQSxXQUFLK0wsY0FBTDtJQUNBLFdBQUtyRSxFQUFMLElBQVcsS0FBS2lCLE1BQUwsRUFBWDtJQUNIOzs7K0JBRVk7SUFDVCxhQUFPakosVUFBVSxDQUFDLEtBQUtzTSxPQUFOLENBQVYsR0FBMkIsS0FBS0EsT0FBTCxDQUFhLElBQWIsQ0FBM0IsR0FBZ0QsS0FBS0EsT0FBNUQ7SUFDSDswQkFFVWhNLE9BQU87SUFDZCxXQUFLZ00sT0FBTCxHQUFlaE0sS0FBZjtJQUNIOzs7K0JBRVc7SUFDUixhQUFPLEtBQUtzSCxJQUFMLENBQVVoQixLQUFqQjtJQUNIOzBCQUVTdEcsT0FBTztJQUNiLFdBQUtzSCxJQUFMLENBQVVoQixLQUFWLEdBQWtCdEcsS0FBbEI7SUFDSDs7OytCQUVXO0lBQ1IsYUFBTyxLQUFLc0gsSUFBTCxDQUFVdEgsS0FBakI7SUFDSDswQkFFU0EsT0FBTztJQUNiLFdBQUtzSCxJQUFMLENBQVVYLEtBQVY7SUFDQSxXQUFLVyxJQUFMLENBQVV0SCxLQUFWLEdBQWtCQSxLQUFsQjtJQUNIOzs7dUNBdUZxQkEsT0FBTztJQUN6QjhHLE1BQUFBLFFBQVEsQ0FBQzlHLEtBQUQsRUFBUSxDQUFDbUcsSUFBRCxFQUFPLFVBQVAsQ0FBUixDQUFSLENBQW9DOEYsSUFBcEMsQ0FBeUMsWUFBTTtJQUMzQ1osUUFBQUEsYUFBYSxDQUFDL0QsSUFBZCxHQUFxQnRILEtBQXJCO0lBQ0gsT0FGRCxFQUVHLFlBQU07SUFDTFgsUUFBQUEsS0FBSyxDQUFDd0osZUFBZSxDQUFDdkIsSUFBakIsQ0FBTDtJQUNILE9BSkQ7SUFLSDs7O3dDQUVzQnRILE9BQU87SUFDMUIsVUFBRyxDQUFDOEcsUUFBUSxDQUFDOUcsS0FBRCxFQUFRLFFBQVIsQ0FBWixFQUErQjtJQUMzQlgsUUFBQUEsS0FBSyxDQUFDd0osZUFBZSxDQUFDeEIsS0FBakIsQ0FBTDtJQUNIOztJQUVEZ0UsTUFBQUEsYUFBYSxDQUFDaEUsS0FBZCxHQUFzQnJILEtBQXRCO0lBQ0g7OzsyQ0FFeUJBLE9BQU87SUFDN0IsVUFBRyxDQUFDOEcsUUFBUSxDQUFDOUcsS0FBRCxFQUFRLFFBQVIsQ0FBWixFQUErQjtJQUMzQlgsUUFBQUEsS0FBSyxDQUFDd0osZUFBZSxDQUFDM0IsUUFBakIsQ0FBTDtJQUNIOztJQUVEbUUsTUFBQUEsYUFBYSxDQUFDbkUsUUFBZCxHQUF5QmxILEtBQXpCO0lBQ0g7OzsrQkExQnFCO0lBQ2xCLGFBQU9xTCxhQUFQO0lBQ0g7Ozs7TUE5SWtDL0M7Ozs7Ozs7OyJ9
