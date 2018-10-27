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
        key: "clone",
        value: function clone(value) {
          var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new this.constructor(value, Object.assign(this.getPublicAttributes(), attributes));
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

      function Face(value) {
        var _this;

        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

        if (value) {
          _this.value = !isNull(value) ? value : _this.defaultValue();
        }

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

          if (this.shouldStop(instance)) {
            instance.stop();
          }

          return this.emit('interval');
        }
      }, {
        key: "shouldStop",
        value: function shouldStop(instance) {
          return !isUndefined(this.stopAt) ? this.stopAt === instance.value.value : false;
        }
      }, {
        key: "format",
        value: function format(instance, value) {
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
        key: "started",
        value: function started(instance) {//
        }
      }, {
        key: "stopped",
        value: function stopped(instance) {//
        }
      }, {
        key: "reset",
        value: function reset(instance) {//
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
          if (this.autoStart && instance.timer.isStopped) {
            window.requestAnimationFrame(function () {
              return instance.start(instance);
            });
          }
        }
      }, {
        key: "createFaceValue",
        value: function createFaceValue(instance, value) {
          var _this2 = this;

          return FaceValue.make(isFunction(value) && !value.name ? value() : value, {
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
      }, {
        key: "stopAt",
        get: function get() {
          return this.$stopAt;
        },
        set: function set(value) {
          this.$stopAt = value;
        }
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
          return !this.lastLoop ? 0 : this.lastLoop - (this.started ? this.started.getTime() : new Date().getTime());
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
          instance.value = this.value.value + 1;
        }
      }, {
        key: "decrement",
        value: function decrement(instance) {
          instance.value = this.value.value - 1;
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
        value: function increment(instance, value) {
          instance.value = new Date(this.value.value.getTime() + (new Date().getTime() - instance.timer.lastLoop));
        }
      }, {
        key: "decrement",
        value: function decrement(instance, value) {
          instance.value = new Date(this.value.value.getTime() - (new Date().getTime() - instance.timer.lastLoop));
        }
      }, {
        key: "format",
        value: function format(instance, value) {
          return [[this.getMinutes(value, instance.timer.isRunning ? this.originalValue : instance.originalValue)], [this.getSeconds(value, instance.timer.isRunning ? this.originalValue : instance.originalValue)]];
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
          var groups = [[value.getHours()], [value.getMinutes()]];

          if (this.showSeconds) {
            groups.push([value.getSeconds()]);
          }

          return groups;
        }
      }, {
        key: "interval",
        value: function interval(instance, fn) {
          instance.value = new Date();
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
          language: DefaultValues.language,
          timer: Timer.make(attributes.interval || 1000)
        }, attributes)));

        if (!_this.face) {
          _this.face = face;
        }

        _this.mount(el);

        return _this;
      }

      _createClass(FlipClock, [{
        key: "updated",

        /*
        bindFaceEvents() {
            const fn = () => this.updated();
             this.$face.off('updated', fn).on('updated', fn);
             ['updated', 'start', 'stop', 'reset', 'interval'].forEach(event => {
                const fn = () => this.emit(event);
                 this.face.off(event, fn).on(event, fn);
            });
        }
        */
        value: function updated() {
          this.render();
          console.log('dated');
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
      }, {
        key: "stop",
        value: function stop(fn) {
          this.timer.stop(fn);
          this.face.stopped(this);
          return this.emit('stop');
        }
      }, {
        key: "reset",
        value: function reset(fn) {
          var _this3 = this;

          this.timer.reset(function () {
            return _this3.interval(_this3, fn);
          });
          this.face.reset(this);
          return this.emit('reset');
        }
      }, {
        key: "increment",
        value: function increment(value) {
          this.face.increment(this, value);
        }
      }, {
        key: "decrement",
        value: function decrement(value) {
          this.face.decrement(this, value);
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

          this.$face = (Faces[value] || value).make(this.getPublicAttributes());

          if (!this.value) {
            this.value = this.originalValue;
          }

          this.$face.initialized(this);
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
          return this.$timer;
        },
        set: function set(timer) {
          if (!validate(timer, Timer)) {
            error(ConsoleMessages.timer);
          }

          this.$timer = timer;
        }
      }, {
        key: "value",
        get: function get$$1() {
          return this.face.value;
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
          if (!validate(value, Face)) {
            error(ConsoleMessages.face);
          }

          DefaultValues.face = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvSGVscGVycy9EaWdpdGl6ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvSGVscGVycy9UcmFuc2xhdGUuanMiLCIuLi9zcmMvanMvSGVscGVycy9UZW1wbGF0ZS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RvbUNvbXBvbmVudC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3QuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Hcm91cC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xhYmVsLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvVGltZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9NaW51dGVDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0hvdXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL0RheUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvVHdlbnR5Rm91ckhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VsdmVIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvWWVhckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0RpdmlkZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvR3JvdXAuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xhYmVsLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZW50eUZvdXJIb3VyQ2xvY2suanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvV2Vla0NvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0ZhY2VzL1llYXJDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9pbmRleC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvYXItYXIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2NhLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jcy1jei5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGEtZGsuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RlLWRlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lbi11cy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZXMtZXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZhLWlyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9maS1maS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZnItY2EuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2hlLWlsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9odS1odS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaXQtaXQuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2phLWpwLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9rby1rci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbHYtbHYuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25sLWJlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9uby1uYi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcGwtcGwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3B0LWJyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9yby1yby5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcnUtcnUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3NrLXNrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zdi1zZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdGgtdGguanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RyLXRyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy91YS11YS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdm4tdm4uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLWNuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC10dy5qcyIsIi4uL3NyYy9qcy9Db25maWcvRGVmYXVsdFZhbHVlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZsaXBDbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrKGZuKSB7XG4gICAgaWYoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgxKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhaW4oYmVmb3JlLCBhZnRlcikge1xuICAgIHJldHVybiAoKSA9PiBhZnRlcihiZWZvcmUoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRNYXAoZm4pIHtcbiAgICByZXR1cm4geCA9PiB7XG4gICAgICAgIHJldHVybiB4Lm1hcChmbikucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiB4KSh4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiBBcnJheS5pc0FycmF5KHgpID8gZGVlcEZsYXR0ZW4gKHgpIDogeCkoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1Y2ZpcnN0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoZGlnaXRzKSB7XG4gICAgcmV0dXJuIGRlZXBGbGF0dGVuKGRpZ2l0cykubGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3ModmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEhdmFsdWUubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCwga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZXZlbnRzO1xuICAgIH1cblxuICAgIHNldCBldmVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZW1pdChrZXksIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oa2V5LCBmbiwgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZShrZXksIGZuKSB7XG4gICAgICAgIGZuID0gY2hhaW4oZm4sICgpID0+IHRoaXMub2ZmKGtleSwgZm4pKTtcblxuICAgICAgICB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSA/IHRoaXNba2V5XSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtaW5pbXVtRGlnaXRzOiAwLFxuICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQobnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFByZXBlbmRaZXJvID0gb3B0aW9ucy5wcmVwZW5kTGVhZGluZ1plcm8gJiZcbiAgICAgICAgICAgIG51bWJlci50b1N0cmluZygpLnNwbGl0KCcnKS5sZW5ndGggPT09IDE7XG5cbiAgICAgICAgcmV0dXJuIChzaG91bGRQcmVwZW5kWmVybyA/ICcwJyA6ICcnKS5jb25jYXQobnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWdpdHMoYXJyLCBtaW4pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGVlcEZsYXR0ZW4oYXJyKS5sZW5ndGg7XG5cbiAgICAgICAgaWYobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWluIC0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbMF0udW5zaGlmdCgnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlnaXRzKGZsYXR0ZW4oW3ZhbHVlXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGRlZXBGbGF0dGVuKFtudW1iZXJdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwZW5kKG51bWJlcikuc3BsaXQoJycpO1xuICAgICAgICB9KSk7XG4gICAgfSksIG9wdGlvbnMubWluaW11bURpZ2l0cyB8fCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlcyA9IFt7XG4gICAgLy8gMC05XG4gICAgbWluOiA0OCxcbiAgICBtYXg6IDU3XG59LHtcbiAgICAvLyBhLXpcbiAgICBtaW46IDY1LFxuICAgIG1heDogOTBcbn0se1xuICAgIC8vIEEtWlxuICAgIG1pbjogOTcsXG4gICAgbWF4OiAxMjJcbn1dO1xuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiByYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKHJhbmdlc1tpXS5taW4gPD0gY29kZSAmJiByYW5nZXNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlIDwgcmFuZ2UubWF4ID8gY29kZSArIDEgOiByYW5nZS5taW5cbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFyQ29kZShjaGFyLCBmbikge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGNoYXIpO1xuICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZm4ocmFuZ2UsIGNvZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXYodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlID4gcmFuZ2UubWluID8gY29kZSAtIDEgOiByYW5nZS5tYXhcbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgZGlnaXRpemUgZnJvbSAnLi4vSGVscGVycy9EaWdpdGl6ZSc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBsZW5ndGgsIGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZVZhbHVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IDBcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgZGlnaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1pbmltdW1EaWdpdHMgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaWdpdHMsIGxlbmd0aCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGlnaXRzID0gZGlnaXRpemUodGhpcy5mb3JtYXQodmFsdWUpLCB7XG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiB0aGlzLm1pbmltdW1EaWdpdHMsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRoaXMucHJlcGVuZExlYWRpbmdaZXJvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzTmFOKCkge1xuICAgICAgICByZXR1cm4gaXNOYU4odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBpc051bWJlcigpXG4gICAgfVxuXG4gICAgY2xvbmUodmFsdWUsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodmFsdWUsIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSwgYXR0cmlidXRlc1xuICAgICAgICApKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDbGFzcyhhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGl0ZW1zOiAnVGhlIGl0ZW1zIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgZGF0ZTogJ1RoZSB2YWx1ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRGF0ZS4nLFxuICAgIGZhY2U6ICdUaGUgZmFjZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRmFjZSBjbGFzcy4nLFxuICAgIGVsZW1lbnQ6ICdUaGUgZWxlbWVudCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGFuIEhUTUxFbGVtZW50JyxcbiAgICBmYWNlVmFsdWU6ICdUaGUgZmFjZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRmFjZVZhbHVlIGNsYXNzLicsXG4gICAgdGltZXI6ICdUaGUgdGltZXIgcHJvcGVydHkgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIFRpbWVyIGNsYXNzLidcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBGYWNlVmFsdWUgZnJvbSAnLi9GYWNlVmFsdWUnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGVycm9yLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc09iamVjdCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgICAgICBpZighKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgY291bnRkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IDUwMFxuICAgICAgICB9LCB0aGlzLmRlZmF1bHRBdHRyaWJ1dGVzKCksIGF0dHJpYnV0ZXMgfHwge30pKTtcblxuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICFpc051bGwodmFsdWUpID8gdmFsdWUgOiB0aGlzLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0RGF0YVR5cGUoKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYoISh2YWx1ZSBpbnN0YW5jZW9mIEZhY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jcmVhdGVGYWNlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc3RvcEF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcEF0O1xuICAgIH1cblxuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIHNldCBvcmlnaW5hbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbChpbnN0YW5jZSwgZm4pIHtcbiAgICAgICAgaWYodGhpcy5jb3VudGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvdWxkU3RvcChpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgfVxuXG4gICAgc2hvdWxkU3RvcChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaXMuc3RvcEF0KSA/IHRoaXMuc3RvcEF0ID09PSBpbnN0YW5jZS52YWx1ZS52YWx1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgc3RhcnRlZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHN0b3BwZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICByZXNldChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluaXRpYWxpemVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVuZGVyZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBtb3VudGVkKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b1N0YXJ0ICYmIGluc3RhbmNlLnRpbWVyLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBpbnN0YW5jZS5zdGFydChpbnN0YW5jZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRmFjZVZhbHVlKGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRmFjZVZhbHVlLm1ha2UoXG4gICAgICAgICAgICBpc0Z1bmN0aW9uKHZhbHVlKSAmJiAhdmFsdWUubmFtZSA/IHZhbHVlKCkgOiB2YWx1ZSwge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT4gdGhpcy5mb3JtYXQoaW5zdGFuY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBmcm9tKSB7XG4gICAgcmV0dXJuIChpc1N0cmluZyhmcm9tIHx8ICdlbi11cycpID8gbGFuZ3VhZ2UoZnJvbSkgOiBmcm9tKS5kaWN0aW9uYXJ5W3ZhbHVlXSB8fCB2YWx1ZTtcbn07XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW4oY29uZGl0aW9uLCBodG1sKSB7XG5cdHJldHVybiBjb25kaXRpb24gPT09IHRydWUgPyBodG1sIDogJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2FwKGVsLCBleGlzdGluZykge1xuXHRpZihleGlzdGluZy5wYXJlbnROb2RlKSB7XG5cdFx0ZXhpc3RpbmcucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWwsIGV4aXN0aW5nKTtcblx0XHRcblx0XHRyZXR1cm4gZWw7XG5cdH1cblxuXHRyZXR1cm4gZXhpc3Rpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGksIGF0dHJpYnV0ZXNbaV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGVsLCBjaGlsZHJlbikge1xuXHRpZihpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLmZpbHRlcihub29wKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGlmKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0ZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbCwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMpIHtcblx0aWYoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG5cdH1cblxuXHRzZXRBdHRyaWJ1dGVzKGVsLCBpc09iamVjdChjaGlsZHJlbikgPyBjaGlsZHJlbiA6IGF0dHJpYnV0ZXMpO1xuXG5cdGlmKCFpc09iamVjdChjaGlsZHJlbikgJiYgIWlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0ZWwuaW5uZXJIVE1MID0gY2hpbGRyZW47XG5cdH1cblx0ZWxzZSB7XG5cdFx0YXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG4vKlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaXNBcnJheSh2YWx1ZSkgP1xuXHRcdGRlZXBGbGF0dGVuKHZhbHVlKS5maWx0ZXIobm9vcCkuam9pbignJykgOiB2YWx1ZTtcblxuXHRpZihpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuXHRcdGZvcihjb25zdCBpIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufVxuKi9cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi9IZWxwZXJzL1RyYW5zbGF0ZSc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBzd2FwLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcGFyZW50OiBudWxsXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICBpZighdGhpcy50aGVtZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgdGhlbWUgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBlcnJvcihgJHt0aGlzLm5hbWV9IGRvZXMgbm90IGhhdmUgYSBsYW5ndWFnZSBkZWZpbmVkLmApO1xuICAgICAgICB9XG5cblx0XHRpZighdGhpcy50aGVtZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5uYW1lfSBjYW5ub3QgYmUgcmVuZGVyZWQgYmVjYXVzZSBpdCBoYXMgbm8gdGVtcGxhdGUuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsO1xuICAgIH1cblxuICAgIHNldCBlbCh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIG51bGwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50O1xuICAgIH1cblxuICAgIHNldCBwYXJlbnQocGFyZW50KSB7XG4gICAgICAgIHRoaXMuJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICBnZXQgdGhlbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aGVtZTtcbiAgICB9XG5cbiAgICBzZXQgdGhlbWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aGVtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBsYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBsYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlKGtleSwgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgdChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XG4gICAgfVxuXG5cdHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUgPT09ICdmbGlwLWNsb2NrJyA/IHRoaXMuY2xhc3NOYW1lIDogJ2ZsaXAtY2xvY2stJyArIHRoaXMuY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGhlbWVbdGhpcy5uYW1lXShlbCwgdGhpcyk7XG5cbiAgICAgICAgaWYoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZWwuaW5uZXJIVE1MICE9PSBlbC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBzd2FwKGVsLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuXHR9XG5cbiAgICBtb3VudChwYXJlbnQsIGJlZm9yZSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBpZighYmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCBiZWZvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aWRlciBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgbmV4dCwgcHJldiwgIH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBpc09iamVjdCwgIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9LCBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRpdGVtcztcbiAgICB9XG5cbiAgICBzZXQgaXRlbXModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kaXRlbXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0SXRlbSh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy4kaXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGl0ZW1zLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgIH0sIGlzT2JqZWN0KGl0ZW1zKSA/IGl0ZW1zIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IobGFiZWwsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSwgaXNPYmplY3QobGFiZWwpID8gbGFiZWwgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0LCBjYWxsYmFjayB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWwpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGhhbmRsZTogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0ZWQ6IG51bGwsXG4gICAgICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsOiBpbnRlcnZhbFxuICAgICAgICB9LCBpc09iamVjdChpbnRlcnZhbCkgPyBpbnRlcnZhbCA6IG51bGwpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBlbGFwc2VkIHRoZSB0aW1lIGFzIGFuIGludGVyZ2VyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEludGVnZXJcbiAgICAgKi9cbiAgICBnZXQgZWxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhc3RMb29wID8gMCA6IHRoaXMubGFzdExvb3AgLSAoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPyB0aGlzLnN0YXJ0ZWQuZ2V0VGltZSgpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaXMgdGhlIHRpbWVyIGlzIHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW5cbiAgICAgKi9cbiAgICBnZXQgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RvcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKCkgPT4gY2FsbGJhY2suY2FsbCh0aGlzLCBmbikpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uICBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlO1xuICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy5sYXN0TG9vcCA+PSB0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TG9vcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSB0aW1lci4gVGhpcyBtZXRob2QgaXMgY2hhaW5hYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICBGdW5jdGlvbiBmblxuICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAqL1xuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG4gICAgaW5jcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSArIDE7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdGhpcy52YWx1ZS52YWx1ZSAtIDE7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IHsgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNOdW1iZXIsIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW51dGVDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkU3RvcChpbnN0YW5jZSkge1xuICAgICAgICBpZihpc051bGwoaW5zdGFuY2Uuc3RvcEF0KSB8fCBpc1VuZGVmaW5lZChpbnN0YW5jZS5zdG9wQXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0b3BBdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZG93biA/XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQuZ2V0VGltZSgpID49IHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0LmdldFRpbWUoKSA8PSB0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzTnVtYmVyKHRoaXMuc3RvcEF0KSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguZmxvb3IoKHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpIC0gdGhpcy5vcmlnaW5hbFZhbHVlLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRkb3duID9cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdCA+PSBkaWZmOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0IDw9IGRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBzdG9wQXQgcHJvcGVydHkgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBEYXRlIG9yIE51bWJlci5gKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSAtIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyh2YWx1ZSwgaW5zdGFuY2UudGltZXIuaXNSdW5uaW5nID8gdGhpcy5vcmlnaW5hbFZhbHVlIDogaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSldLFxuICAgICAgICAgICAgW3RoaXMuZ2V0U2Vjb25kcyh2YWx1ZSwgaW5zdGFuY2UudGltZXIuaXNSdW5uaW5nID8gdGhpcy5vcmlnaW5hbFZhbHVlIDogaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSldXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjApO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoYSwgYikge1xuICAgICAgICBjb25zdCB0b3RhbFNlY29uZHMgPSB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoTWF0aC5jZWlsKHRvdGFsU2Vjb25kcyA9PT0gNjAgPyAwIDogdG90YWxTZWNvbmRzICUgNjApKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbFNlY29uZHMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBNaW51dGVDb3VudGVyIGZyb20gJy4vTWludXRlQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXJDb3VudGVyIGV4dGVuZHMgTWludXRlQ291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXRNaW51dGVzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldE1pbnV0ZXMoYSwgYikgJSA2MCk7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEhvdXJDb3VudGVyIGZyb20gJy4vSG91ckNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlDb3VudGVyIGV4dGVuZHMgSG91ckNvdW50ZXIge1xuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3cgPSAhaW5zdGFuY2Uuc3RhcnRlZCA/IG5ldyBEYXRlIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnN0YW5jZS5vcmlnaW5hbFZhbHVlIHx8IHZhbHVlO1xuICAgICAgICBjb25zdCBhID0gIXRoaXMuY291bnRkb3duID8gbm93IDogb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgY29uc3QgYiA9ICF0aGlzLmNvdW50ZG93biA/IG9yaWdpbmFsVmFsdWUgOiBub3c7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIFt0aGlzLmdldERheXMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0SG91cnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyhhLCBiKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW3RoaXMuZ2V0U2Vjb25kcyhhLCBiKV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQpO1xuICAgIH1cblxuICAgIGdldEhvdXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldEhvdXJzKGEsIGIpICUgMjQpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcbmltcG9ydCB7IGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBkZWZhdWx0RGF0YVR5cGUoKSB7XG4gICAgICAgIHJldHVybiBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlO1xuICAgIH1cblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW1xuICAgICAgICAgICAgW3ZhbHVlLmdldEhvdXJzKCldLFxuICAgICAgICAgICAgW3ZhbHVlLmdldE1pbnV0ZXMoKV1cbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaChbdmFsdWUuZ2V0U2Vjb25kcygpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxuICAgIGludGVydmFsKGluc3RhbmNlLCBmbikge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IG5ldyBEYXRlO1xuXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VsdmVIb3VyQ2xvY2sgZXh0ZW5kcyBUd2VudHlGb3VySG91ckNsb2NrIHtcblxuICAgIGRlZmF1bHRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd0xhYmVsczogZmFsc2UsXG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dNZXJpZGl1bTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSB2YWx1ZS5nZXRIb3VycygpO1xuXG5cdFx0Y29uc3QgZ3JvdXBzID0gW1xuXHRcdFx0aG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzKSxcblx0XHRcdHZhbHVlLmdldE1pbnV0ZXMoKVxuXHRcdF07XG5cbiAgICAgICAgdGhpcy5tZXJpZGl1bSA9IGhvdXJzID4gMTIgPyAncG0nIDogJ2FtJztcblxuXHRcdGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcblx0XHRcdGdyb3Vwcy5wdXNoKHZhbHVlLmdldFNlY29uZHMoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEYXlDb3VudGVyIGZyb20gJy4vRGF5Q291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlZWtDb3VudGVyIGV4dGVuZHMgRGF5Q291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3KTtcbiAgICB9XG5cbiAgICBnZXREYXlzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldERheXMoYSwgYikgJSA3KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBXZWVrQ291bnRlciBmcm9tICcuL1dlZWtDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhckNvdW50ZXIgZXh0ZW5kcyBXZWVrQ291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS50aW1lci5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0WWVhcnMoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0V2Vla3MoYSwgYildLFxuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldFllYXJzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYikgLyA2MCAvIDYwIC8gMjQgLyA3IC8gNTIpKTtcbiAgICB9XG5cbiAgICBnZXRXZWVrcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdXBlci5nZXRXZWVrcyhhLCBiKSAlIDUyKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcmVuLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZsaXAtY2xvY2stZG90IHRvcCd9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgYm90dG9tJ30pXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5mdW5jdGlvbiBjaGlsZChlbCwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWwgPyAoZWwuY2hpbGROb2RlcyA/IGVsLmNoaWxkTm9kZXNbaW5kZXhdIDogZWxbaW5kZXhdKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNoYXIoZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5xdWVyeVNlbGVjdG9yKCcuZmxpcC1jbG9jay1saXN0LWl0ZW06Zmlyc3QtY2hpbGQgLnRvcCcpLmlubmVySFRNTCA6IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IHBhcnRzID0gaW5zdGFuY2UudmFsdWUuZGlnaXRzLm1hcCgoZ3JvdXAsIHgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbCA9IGNoaWxkKGluc3RhbmNlLmVsID8gaW5zdGFuY2UuZWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stZ3JvdXAnKSA6IG51bGwsIHgpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RzID0gZ3JvdXAubWFwKCh2YWx1ZSwgeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gY2hpbGQoZ3JvdXBFbCA/IGdyb3VwRWwucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAtY2xvY2stbGlzdCcpIDogbnVsbCwgeSk7XG4gICAgICAgICAgICBjb25zdCBsaXN0VmFsdWUgPSBjaGFyKGxpc3RFbCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVMaXN0KHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgZG9tVmFsdWU6IGxpc3RWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb3VudGRvd246IGluc3RhbmNlLmNvdW50ZG93bixcbiAgICAgICAgICAgICAgICBhbmltYXRpb25SYXRlOiBpbnN0YW5jZS5mYWNlLmFuaW1hdGlvblJhdGUgfHwgaW5zdGFuY2UuZmFjZS5kZWxheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jcmVhdGVHcm91cChsaXN0cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub2RlcyA9IHBhcnRzLm1hcChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBub2Rlcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBpdGVtcyA9IGluc3RhbmNlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaXRlbXMpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBpbnN0YW5jZS50KGluc3RhbmNlLmxhYmVsKTtcbn1cbiIsImltcG9ydCB7IG5leHQsIHByZXYgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RJdGVtJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGJlZm9yZVZhbHVlID0gaW5zdGFuY2UuZG9tVmFsdWUgfHwgKFxuICAgICAgICAhaW5zdGFuY2UuY291bnRkb3duID8gcHJldihpbnN0YW5jZS52YWx1ZSkgOiBuZXh0KGluc3RhbmNlLnZhbHVlKVxuICAgICk7XG5cbiAgICBpZiggaW5zdGFuY2UuZG9tVmFsdWUgJiYgaW5zdGFuY2UuZG9tVmFsdWUgIT09IGluc3RhbmNlLnZhbHVlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcbiAgICBlbC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke2luc3RhbmNlLmFuaW1hdGlvblJhdGUgLyAyfW1zYDtcblxuICAgIGluc3RhbmNlLml0ZW1zID0gW1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShpbnN0YW5jZS52YWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMaXN0SXRlbShiZWZvcmVWYWx1ZSwge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KVxuICAgIF07XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5yZW5kZXIoKSkpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gaW5zdGFuY2UuYWN0aXZlID09PSB0cnVlID8gJ2FjdGl2ZScgOiAoXG4gICAgICAgIGluc3RhbmNlLmFjdGl2ZSA9PT0gZmFsc2UgPyAnYmVmb3JlJyA6IG51bGxcbiAgICApO1xuXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ3RvcCd9KSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGluc3RhbmNlLnZhbHVlLCB7Y2xhc3M6ICdib3R0b20nfSlcbiAgICAgICAgXSwge2NsYXNzOiAnZmxpcC1jbG9jay1saXN0LWl0ZW0taW5uZXInfSlcbiAgICBdKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2RheXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIH1cbiAgICBcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ2hvdXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgVHdlbnR5Rm91ckhvdXJDbG9jayhlbCwgaW5zdGFuY2UpO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TWVyaWRpdW0gJiYgaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGluc3RhbmNlLmNyZWF0ZUxhYmVsKGluc3RhbmNlLmZhY2UubWVyaWRpdW0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5jaGlsZE5vZGVzW2VsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGFiZWwubW91bnQocGFyZW50KS5jbGFzc0xpc3QuYWRkKCdmbGlwLWNsb2NrLW1lcmlkaXVtJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s3XSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1s1XSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzldKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3llYXJzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCd3ZWVrcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzZdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzhdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMTBdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgRmxpcENsb2NrIGZyb20gJy4vRmxpcENsb2NrJztcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgKiBhcyBmYWNlcyBmcm9tICcuL0ZhY2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgRmxpcENsb2NrLFxuICAgIEdyb3VwLFxuICAgIExhYmVsLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgZmFjZXNcbn07XG4iLCIvKipcbiAqIEZsaXBDbG9jayBBcmFiaWMgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCBiZSB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQXJhYmljIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn2LPZhtmI2KfYqicsXG4gICAgJ21vbnRocycgIDogJ9i02YfZiNixJyxcbiAgICAnZGF5cycgICAgOiAn2KPZitin2YUnLFxuICAgICdob3VycycgICA6ICfYs9in2LnYp9iqJyxcbiAgICAnbWludXRlcycgOiAn2K/Zgtin2KbZgicsXG4gICAgJ3NlY29uZHMnIDogJ9ir2YjYp9mG2YonXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnYXInLCAnYXItYXInLCAnYXJhYmljJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDYXRhbGFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhdGFsYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgOiAnQW55cycsXG4gICAgJ21vbnRocycgOiAnTWVzb3MnLFxuICAgICdkYXlzJyA6ICdEaWVzJyxcbiAgICAnaG91cnMnIDogJ0hvcmVzJyxcbiAgICAnbWludXRlcycgOiAnTWludXRzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vnb25zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NhJywgJ2NhLWVzJywgJ2NhdGFsYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjcycsICdjcy1jeicsICdjeicsICdjei1jcycsICdjemVjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIERhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEdlcm1hbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlbicsICdlbi11cycsICdlbmdsaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQZXJzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn2LPYp9mEJyxcblx0J21vbnRocycgIDogJ9mF2KfZhycsXG5cdCdkYXlzJyAgICA6ICfYsdmI2LInLFxuXHQnaG91cnMnICAgOiAn2LPYp9i52KonLFxuXHQnbWludXRlcycgOiAn2K/ZgtuM2YLZhycsXG5cdCdzZWNvbmRzJyA6ICfYq9in2YbbjNmHJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZpJywgJ2ZpLWZpJywgJ2Zpbm5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdBbnMnLFxuICAgICdtb250aHMnICA6ICdNb2lzJyxcbiAgICAnZGF5cycgICAgOiAnSm91cnMnLFxuICAgICdob3VycycgICA6ICdIZXVyZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIZWJyZXcgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OJdicsXG4gICAgJ21vbnRocycgIDogJ0jDs25hcCcsXG4gICAgJ2RheXMnICAgIDogJ05hcCcsXG4gICAgJ2hvdXJzJyAgIDogJ8OTcmEnLFxuICAgICdtaW51dGVzJyA6ICdQZXJjJyxcbiAgICAnc2Vjb25kcycgOiAnTcOhc29kcGVyYydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydodScsICdodS1odScsICdodW5nYXJpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSXRhbGlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEphcGFuZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+uFhCcsXG5cdCdtb250aHMnICA6ICfsm5QnLFxuXHQnZGF5cycgICAgOiAn7J28Jyxcblx0J2hvdXJzJyAgIDogJ+yLnCcsXG5cdCdtaW51dGVzJyA6ICfrtoQnLFxuXHQnc2Vjb25kcycgOiAn7LSIJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2tvJywgJ2tvLWtyJywgJ2tvcmVhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBMYXR2aWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRHV0Y2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ2xhdCcsXG5cdCdtb250aHMnICA6ICdtaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnZG5pJyxcblx0J2hvdXJzJyAgIDogJ2dvZHppbicsXG5cdCdtaW51dGVzJyA6ICdtaW51dCcsXG5cdCdzZWNvbmRzJyA6ICdzZWt1bmQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncHQnLCAncHQtYnInLCAncG9ydHVndWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJzogJ0FuaScsXG5cdCdtb250aHMnOiAnTHVuaScsXG5cdCdkYXlzJzogJ1ppbGUnLFxuXHQnaG91cnMnOiAnT3JlJyxcblx0J21pbnV0ZXMnOiAnTWludXRlJyxcblx0J3NlY29uZHMnOiAnc1NlY3VuZGUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncm8nLCAncm8tcm8nLCAncm9tYW5hJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBSdXNzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFJ1c3NpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfQu9C10YInLFxuICAgICdtb250aHMnICA6ICfQvNC10YHRj9GG0LXQsicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3QtdC5JyxcbiAgICAnaG91cnMnICAgOiAn0YfQsNGB0L7QsicsXG4gICAgJ21pbnV0ZXMnIDogJ9C80LjQvdGD0YInLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncnUnLCAncnUtcnUnLCAncnVzc2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU2xvdmFrIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNsb3ZhayBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdSb2t5Jyxcblx0J21vbnRocycgIDogJ01lc2lhY2UnLFxuXHQnZGF5cycgICAgOiAnRG5pJyxcblx0J2hvdXJzJyAgIDogJ0hvZGlueScsXG5cdCdtaW51dGVzJyA6ICdNaW7DunR5Jyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc2snLCAnc2stc2snLCAnc2xvdmFrJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTd2VkaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFN3ZWRpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5hZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2FyJyxcblx0J2hvdXJzJyAgIDogJ1RpbW1hcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3N2JywgJ3N2LXNlJywgJ3N3ZWRpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRoYWkgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVGhhaSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfguJvguLUnLFxuXHQnbW9udGhzJyAgOiAn4LmA4LiU4Li34Lit4LiZJyxcblx0J2RheXMnICAgIDogJ+C4p+C4seC4mScsXG5cdCdob3VycycgICA6ICfguIrguLHguYjguKfguYLguKHguIcnLFxuXHQnbWludXRlcycgOiAn4LiZ4Liy4LiX4Li1Jyxcblx0J3NlY29uZHMnIDogJ+C4p+C4tOC4meC4suC4l+C4tSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0aCcsICd0aC10aCcsICd0aGFpJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUdXJraXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFR1cmtpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWcSxbCcsXG5cdCdtb250aHMnICA6ICdBeScsXG5cdCdkYXlzJyAgICA6ICdHw7xuJyxcblx0J2hvdXJzJyAgIDogJ1NhYXQnLFxuXHQnbWludXRlcycgOiAnRGFraWthJyxcblx0J3NlY29uZHMnIDogJ1Nhbml5ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0cicsICd0ci10cicsICd0dXJraXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBVa3JhaW5pYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVWtyYWluaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0YDQvtC60LgnLFxuICAgICdtb250aHMnICA6ICfQvNGW0YHRj9GG0ZYnLFxuICAgICdkYXlzJyAgICA6ICfQtNC90ZYnLFxuICAgICdob3VycycgICA6ICfQs9C+0LTQuNC90LgnLFxuICAgICdtaW51dGVzJyA6ICfRhdCy0LjQu9C40L3QuCcsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtNC4J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3VhJywgJ3VhLXVhJywgJ3VrcmFpbmUnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRyYWRpdGlvbmFsIFZpZXRuYW1lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byBWaWV0bmFtZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ07Eg20nLFxuXHQnbW9udGhzJyAgOiAnVGjDoW5nJyxcblx0J2RheXMnICAgIDogJ05nw6B5Jyxcblx0J2hvdXJzJyAgIDogJ0dp4budJyxcblx0J21pbnV0ZXMnIDogJ1Bow7p0Jyxcblx0J3NlY29uZHMnIDogJ0dpw6J5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3ZuJywgJ3ZuLXZuJywgJ3ZpZXRuYW1lc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfml7YnLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd6aCcsICd6aC1jbicsICdjaGluZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUcmFkaXRpb25hbCBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRyYWRpdGlvbmFsIENoaW5lc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pmCJyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgtdHcnXTtcbiIsImltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgeyBPcmlnaW5hbCB9IGZyb20gJy4uL1RoZW1lcyc7XG5pbXBvcnQgeyBFbmdsaXNoIH0gZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZhY2U6IENvdW50ZXIsXG4gICAgdGhlbWU6IE9yaWdpbmFsLFxuICAgIGxhbmd1YWdlOiBFbmdsaXNoXG59O1xuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi9GYWNlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0ICogYXMgRmFjZXMgZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IEZhY2VWYWx1ZSBmcm9tICcuL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBEZWZhdWx0VmFsdWVzIGZyb20gJy4uL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBmbGF0dGVuLCBpc1N0cmluZywgaXNPYmplY3QsIGlzVW5kZWZpbmVkLCBpc0Z1bmN0aW9uLCBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENsb2NrIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighdmFsaWRhdGUoZWwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNPYmplY3QodmFsdWUpICYmICFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWNlID0gYXR0cmlidXRlcy5mYWNlIHx8IERlZmF1bHRWYWx1ZXMuZmFjZTtcblxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5mYWNlO1xuXG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgb3JpZ2luYWxWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB0aGVtZTogRGVmYXVsdFZhbHVlcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlLFxuICAgICAgICAgICAgdGltZXI6IFRpbWVyLm1ha2UoYXR0cmlidXRlcy5pbnRlcnZhbCB8fCAxMDAwKSxcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLmZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdW50KGVsKTtcbiAgICB9XG5cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgc2V0IGZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ3N0cmluZycsICdmdW5jdGlvbiddKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZmFjZSA9IChGYWNlc1t2YWx1ZV0gfHwgdmFsdWUpLm1ha2UodGhpcy5nZXRQdWJsaWNBdHRyaWJ1dGVzKCkpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZmFjZS5pbml0aWFsaXplZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBzdG9wQXQoKSB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMuJHN0b3BBdCkgPyB0aGlzLiRzdG9wQXQodGhpcykgOiB0aGlzLiRzdG9wQXQ7XG4gICAgfVxuXG4gICAgc2V0IHN0b3BBdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9wQXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGltZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aW1lcjtcbiAgICB9XG5cbiAgICBzZXQgdGltZXIodGltZXIpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHRpbWVyLCBUaW1lcikpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aW1lciA9IHRpbWVyO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjZS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXRoaXMuZmFjZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGZhY2UgbXVzdCBiZSBzZXQgYmVmb3JlIHNldHRpbmcgYSB2YWx1ZS4nKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdGhpcy5mYWNlLnZhbHVlLmNsb25lKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS5jcmVhdGVGYWNlVmFsdWUodGhpcywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCAmJiB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGdldCBvcmlnaW5hbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXNGdW5jdGlvbih0aGlzLiRvcmlnaW5hbFZhbHVlKSAmJiAhdGhpcy4kb3JpZ2luYWxWYWx1ZS5uYW1lXG4gICAgICAgICkgPyB0aGlzLiRvcmlnaW5hbFZhbHVlKCkgOiB0aGlzLiRvcmlnaW5hbFZhbHVlO1xuICAgIH1cblxuICAgIHNldCBvcmlnaW5hbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgIGJpbmRGYWNlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMudXBkYXRlZCgpO1xuXG4gICAgICAgIHRoaXMuJGZhY2Uub2ZmKCd1cGRhdGVkJywgZm4pLm9uKCd1cGRhdGVkJywgZm4pO1xuXG4gICAgICAgIFsndXBkYXRlZCcsICdzdGFydCcsICdzdG9wJywgJ3Jlc2V0JywgJ2ludGVydmFsJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHRoaXMuZW1pdChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmFjZS5vZmYoZXZlbnQsIGZuKS5vbihldmVudCwgZm4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgKi9cblxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGVkJyk7XG4gICAgfVxuXG4gICAgbW91bnQoZWwpIHtcbiAgICAgICAgc3VwZXIubW91bnQoZWwpO1xuXG4gICAgICAgIHRoaXMuZmFjZS5tb3VudGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcGFyZW50IHJlbmRlciBmdW5jdGlvblxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGZhY2UgaGFzIGEgcmVuZGVyIGZ1bmN0aW9uIGRlZmluZWQgaW4gdGhlIHRoZW1lLlxuICAgICAgICAvLyBUaGlzIGFsbG93cyBhIGZhY2UgdG8gY29tcGxldGVseSByZS1yZW5kZXIgb3IgYWRkIHRvIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgZmFjZSBzcGVjaWZpYyBpbnRlcmZhY2VzIGZvciBhIHRoZW1lLlxuICAgICAgICBpZih0aGlzLnRoZW1lLmZhY2VzW3RoaXMuZmFjZS5uYW1lXSkge1xuICAgICAgICAgICAgdGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0odGhpcy5lbCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXNzIHRoZSBjbG9jayBpbnN0YW5jZSB0byB0aGUgcmVuZGVyZWQoKSBmdW5jdGlvbiBvbiB0aGUgZmFjZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgZ2xvYmFsIG1vZGlmaWNhdGlvbnMgdG8gdGhlIHJlbmRlcmVkIHRlbXBsYXRlcyBub3RcbiAgICAgICAgLy8gdGhlbWUgc3BlY2lmaWMuXG4gICAgICAgIHRoaXMuZmFjZS5yZW5kZXJlZCh0aGlzKTtcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHJlbmRlcmVkIGVsZW1lbnQuXG4gICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH1cblxuICAgIHN0YXJ0KGZuKSB7XG4gICAgICAgIGlmKCF0aGlzLnRpbWVyLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpc1VuZGVmaW5lZCh0aGlzLmZhY2Uuc3RvcEF0KSAmJiAodGhpcy5mYWNlLnN0b3BBdCA9IHRoaXMuc3RvcEF0KTtcbiAgICAgICAgaXNVbmRlZmluZWQodGhpcy5mYWNlLm9yaWdpbmFsVmFsdWUpICYmICh0aGlzLmZhY2Uub3JpZ2luYWxWYWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy50aW1lci5zdGFydCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2UuaW50ZXJ2YWwodGhpcywgZm4pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmFjZS5zdGFydGVkKHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgc3RvcChmbikge1xuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoZm4pO1xuICAgICAgICB0aGlzLmZhY2Uuc3RvcHBlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdG9wJyk7XG4gICAgfVxuXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldCgoKSA9PiB0aGlzLmludGVydmFsKHRoaXMsIGZuKSk7XG4gICAgICAgIHRoaXMuZmFjZS5yZXNldCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdyZXNldCcpO1xuICAgIH1cblxuICAgIGluY3JlbWVudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmZhY2UuaW5jcmVtZW50KHRoaXMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLmRlY3JlbWVudCh0aGlzLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGl2aWRlcihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBEaXZpZGVyLm1ha2UoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMaXN0Lm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGFiZWwodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIExhYmVsLm1ha2UodmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlR3JvdXAoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIEdyb3VwLm1ha2UoaXRlbXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgRmFjZSkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMuZmFjZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0VGhlbWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aGVtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLnRoZW1lID0gdmFsdWVcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdExhbmd1YWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiY2FsbGJhY2siLCJmbiIsImlzRnVuY3Rpb24iLCJhcHBseSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm5vb3AiLCJ2YWx1ZSIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwiY2hhaW4iLCJiZWZvcmUiLCJhZnRlciIsImNvbmNhdE1hcCIsIngiLCJtYXAiLCJyZWR1Y2UiLCJ5IiwiY29uY2F0IiwiZmxhdHRlbiIsImRlZXBGbGF0dGVuIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGlnaXRzIiwiaXNDbGFzcyIsIkZ1bmN0aW9uIiwibmFtZSIsImlzU3RyaW5nIiwiaXNPYmplY3QiLCJ0eXBlIiwiaXNOdW1iZXIiLCJpc05hTiIsImtlYmFiQ2FzZSIsInN0ciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIkNvbXBvbmVudCIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudHMiLCJrZXkiLCJhcmdzIiwiZm9yRWFjaCIsImV2ZW50IiwicHVzaCIsImZpbHRlciIsIm9mZiIsIm9uIiwiaGFzT3duUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0QXR0cmlidXRlIiwia2V5cyIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsIm9iaiIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZXMiLCJpIiwiY29uc3RydWN0b3IiLCIkZXZlbnRzIiwiZGlnaXRpemUiLCJvcHRpb25zIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwicmFuZ2VzIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsIm5leHQiLCJjb252ZXJ0ZWQiLCJjaGFyQ29kZSIsInJhbmdlIiwiam9pbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJGYWNlVmFsdWUiLCJnZXRQdWJsaWNBdHRyaWJ1dGVzIiwiJGRpZ2l0cyIsIk1hdGgiLCIkdmFsdWUiLCJ2YWxpZGF0ZSIsInN1Y2Nlc3MiLCJhcmciLCJpdGVtcyIsInRoZW1lIiwibGFuZ3VhZ2UiLCJkYXRlIiwiZmFjZSIsImVsZW1lbnQiLCJmYWNlVmFsdWUiLCJ0aW1lciIsIkZhY2UiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJhbmltYXRpb25SYXRlIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJkZWZhdWx0VmFsdWUiLCJpbnN0YW5jZSIsImRlY3JlbWVudCIsImluY3JlbWVudCIsInNob3VsZFN0b3AiLCJzdG9wIiwiZW1pdCIsInN0b3BBdCIsImlzU3RvcHBlZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0IiwibWFrZSIsImRlZmF1bHREYXRhVHlwZSIsImNyZWF0ZUZhY2VWYWx1ZSIsIiRzdG9wQXQiLCIkb3JpZ2luYWxWYWx1ZSIsImZyb20iLCJkaWN0aW9uYXJ5Iiwic3dhcCIsImVsIiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwiSFRNTEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImlubmVySFRNTCIsIkRvbUNvbXBvbmVudCIsInBhcmVudCIsInRyYW5zbGF0ZSIsImNsYXNzIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiaW5zZXJ0QmVmb3JlIiwiJGVsIiwiQ29uc29sZU1lc3NhZ2VzIiwiJHBhcmVudCIsIiR0aGVtZSIsIiRsYW5ndWFnZSIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiVGltZXIiLCJpbnRlcnZhbCIsImNvdW50IiwiaGFuZGxlIiwic3RhcnRlZCIsInJ1bm5pbmciLCJEYXRlIiwibGFzdExvb3AiLCJub3ciLCJsb29wIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZ2V0VGltZSIsIkNvdW50ZXIiLCJNaW51dGVDb3VudGVyIiwic2hvd1NlY29uZHMiLCJzaG93TGFiZWxzIiwiZGlmZiIsImZsb29yIiwib3JpZ2luYWxWYWx1ZSIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiYSIsImIiLCJnZXRUb3RhbFNlY29uZHMiLCJ0b3RhbFNlY29uZHMiLCJhYnMiLCJjZWlsIiwicm91bmQiLCJIb3VyQ291bnRlciIsImRhdGEiLCJnZXRIb3VycyIsIkRheUNvdW50ZXIiLCJnZXREYXlzIiwiVHdlbnR5Rm91ckhvdXJDbG9jayIsImdyb3VwcyIsIlR3ZWx2ZUhvdXJDbG9jayIsInNob3dNZXJpZGl1bSIsImhvdXJzIiwibWVyaWRpdW0iLCJXZWVrQ291bnRlciIsImdldFdlZWtzIiwiWWVhckNvdW50ZXIiLCJnZXRZZWFycyIsImluZGV4IiwiY2hpbGROb2RlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJ0cyIsImdyb3VwIiwiZ3JvdXBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaXN0cyIsImxpc3RFbCIsImxpc3RWYWx1ZSIsImNyZWF0ZUxpc3QiLCJkb21WYWx1ZSIsImRlbGF5IiwiY3JlYXRlR3JvdXAiLCJub2RlcyIsInQiLCJiZWZvcmVWYWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImNyZWF0ZUxpc3RJdGVtIiwiYWN0aXZlIiwiY3JlYXRlRGl2aWRlciIsIm1vdW50IiwiY3JlYXRlTGFiZWwiLCJGbGlwQ2xvY2siLCJmYWNlcyIsImFsaWFzZXMiLCJPcmlnaW5hbCIsIkVuZ2xpc2giLCJEZWZhdWx0VmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm1vdW50ZWQiLCJyZW5kZXJlZCIsInN0b3BwZWQiLCJyZXNldCIsIiRmYWNlIiwiRmFjZXMiLCJpbml0aWFsaXplZCIsIiR0aW1lciIsImNsb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7SUFDM0IsUUFBTSxJQUFJQyxLQUFKLENBQVVELE9BQVYsQ0FBTjtJQUNIO0FBRUQsSUFBTyxTQUFTRSxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtJQUN6QixNQUFHQyxVQUFVLENBQUNELEVBQUQsQ0FBYixFQUFtQjtJQUNmLFdBQU9BLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTLElBQVQsRUFBZSxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QkYsS0FBekIsQ0FBK0IsQ0FBL0IsQ0FBZixDQUFQO0lBQ0g7SUFDSjtBQUVELElBQU8sU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0lBQ3hCLFNBQU8sQ0FBQ0MsV0FBVyxDQUFDRCxLQUFELENBQVosSUFBdUIsQ0FBQ0UsTUFBTSxDQUFDRixLQUFELENBQXJDO0lBQ0g7QUFFRCxJQUFPLFNBQVNHLEtBQVQsQ0FBZUMsTUFBZixFQUF1QkMsS0FBdkIsRUFBOEI7SUFDakMsU0FBTztJQUFBLFdBQU1BLEtBQUssQ0FBQ0QsTUFBTSxFQUFQLENBQVg7SUFBQSxHQUFQO0lBQ0g7QUFFRCxJQUFPLFNBQVNFLFNBQVQsQ0FBbUJiLEVBQW5CLEVBQXVCO0lBQzFCLFNBQU8sVUFBQWMsQ0FBQyxFQUFJO0lBQ1IsV0FBT0EsQ0FBQyxDQUFDQyxHQUFGLENBQU1mLEVBQU4sRUFBVWdCLE1BQVYsQ0FBaUIsVUFBQ0Ys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
