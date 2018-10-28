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
    function round(value) {
      return isNegativeZero(value = isNegative(value) ? Math.ceil(value) : Math.floor(value)) ? ('-' + value).toString() : value;
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
    function isNegativeZero(value) {
      return 1 / Math.round(value) === -Infinity;
    }
    function isNegative(value) {
      return isNegativeZero(value) || value < 0;
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

        if (value || _this.defaultValue()) {
          _this.value = !isNull(value) && !isUndefined(value) ? value : _this.defaultValue();
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
      'years': 'lat',
      'months': 'miesięcy',
      'days': 'dni',
      'hours': 'godzin',
      'minutes': 'minut',
      'seconds': 'sekund'
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

    function language(name) {
      return name ? LANGUAGES[name.toLowerCase()] || Object.values(LANGUAGES).find(function (value) {
        return value.aliases.indexOf(name) !== -1;
      }) : null;
    }

    function _translate (value, from) {
      var lang = isString(from) ? language(from) : from;
      var dictionary = lang.dictionary || lang;
      return dictionary[value] || value;
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

          this.value = this.originalValue;
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
          return this.face ? this.face.value : null;
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
          return isFunction(this.$originalValue) && !this.$originalValue.name ? this.$originalValue() : this.$originalValue || (this.face ? this.face.defaultValue() : null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Db21wb25lbnQuanMiLCIuLi9zcmMvanMvSGVscGVycy9EaWdpdGl6ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVmFsaWRhdGUuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2FyLWFyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jYS1lcy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcm8tcm8uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3J1LXJ1LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zay1zay5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc3Ytc2UuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RoLXRoLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90ci10ci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdWEtdWEuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3ZuLXZuLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvSGVscGVycy9MYW5ndWFnZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RyYW5zbGF0ZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1RlbXBsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRG9tQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGlzdC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0dyb3VwLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvTGFiZWwuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9UaW1lci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Db3VudGVyLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL01pbnV0ZUNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvSG91ckNvdW50ZXIuanMiLCIuLi9zcmMvanMvRmFjZXMvRGF5Q291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0ZhY2VzL1R3ZWx2ZUhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9ZZWFyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmxpcENsb2NrLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9Hcm91cC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGFiZWwuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xpc3QuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL0xpc3RJdGVtLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GYWNlcy9EYXlDb3VudGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GYWNlcy9Ib3VyQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvTWludXRlQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvVHdlbnR5Rm91ckhvdXJDbG9jay5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvVHdlbHZlSG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9GYWNlcy9XZWVrQ291bnRlci5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRmFjZXMvWWVhckNvdW50ZXIuanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL2luZGV4LmpzIiwiLi4vc3JjL2pzL0NvbmZpZy9EZWZhdWx0VmFsdWVzLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmxpcENsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2soZm4pIHtcbiAgICBpZihpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDEpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlWmVybyhcbiAgICAgICAgdmFsdWUgPSBpc05lZ2F0aXZlKHZhbHVlKSA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKVxuICAgICkgPyAoJy0nICsgdmFsdWUpLnRvU3RyaW5nKCkgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiAhaXNOdWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYWluKGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4gYWZ0ZXIoYmVmb3JlKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TWFwKGZuKSB7XG4gICAgcmV0dXJuIHggPT4ge1xuICAgICAgICByZXR1cm4geC5tYXAoZm4pLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHgpIHtcbiAgICByZXR1cm4gY29uY2F0TWFwKHggPT4geCkoeClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBGbGF0dGVuKHgpIHtcbiAgICByZXR1cm4gY29uY2F0TWFwKHggPT4gQXJyYXkuaXNBcnJheSh4KSA/IGRlZXBGbGF0dGVuICh4KSA6IHgpKHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWNmaXJzdChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGRpZ2l0cykge1xuICAgIHJldHVybiBkZWVwRmxhdHRlbihkaWdpdHMpLmxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKHZhbHVlKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLnJvdW5kKHZhbHVlKSA9PT0gLUluZmluaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlWmVybyh2YWx1ZSkgfHwgdmFsdWUgPCAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsOy8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bGwnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3ModmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmICEhdmFsdWUubmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIWlzQXJyYXkodmFsdWUpICYmIChcbiAgICAgICAgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbidcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IHsgY2hhaW4sIGNhbGxiYWNrLCBpc09iamVjdCwga2ViYWJDYXNlIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGV2ZW50czoge31cbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBrZWJhYkNhc2UodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgZXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kZXZlbnRzO1xuICAgIH1cblxuICAgIHNldCBldmVudHModmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZW1pdChrZXksIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb24oa2V5LCBmbiwgb25jZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF0aGlzLmV2ZW50c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50c1trZXldLnB1c2goZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZihrZXksIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRzW2tleV0gJiYgZm4pIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2tleV0gPSB0aGlzLmV2ZW50c1trZXldLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50ICE9PSBmbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZShrZXksIGZuKSB7XG4gICAgICAgIGZuID0gY2hhaW4oZm4sICgpID0+IHRoaXMub2ZmKGtleSwgZm4pKTtcblxuICAgICAgICB0aGlzLm9uKGtleSwgZm4sIHRydWUpO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSA/IHRoaXNba2V5XSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIGdldFB1YmxpY0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEF0dHJpYnV0ZXMoKSlcbiAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWtleS5tYXRjaCgvXlxcJC8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtaW5pbXVtRGlnaXRzOiAwLFxuICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRydWVcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQobnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFByZXBlbmRaZXJvID0gb3B0aW9ucy5wcmVwZW5kTGVhZGluZ1plcm8gJiZcbiAgICAgICAgICAgIG51bWJlci50b1N0cmluZygpLnNwbGl0KCcnKS5sZW5ndGggPT09IDE7XG5cbiAgICAgICAgcmV0dXJuIChzaG91bGRQcmVwZW5kWmVybyA/ICcwJyA6ICcnKS5jb25jYXQobnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWdpdHMoYXJyLCBtaW4pIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZGVlcEZsYXR0ZW4oYXJyKS5sZW5ndGg7XG5cbiAgICAgICAgaWYobGVuZ3RoIDwgbWluKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWluIC0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbMF0udW5zaGlmdCgnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlnaXRzKGZsYXR0ZW4oW3ZhbHVlXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGRlZXBGbGF0dGVuKFtudW1iZXJdKS5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwZW5kKG51bWJlcikuc3BsaXQoJycpO1xuICAgICAgICB9KSk7XG4gICAgfSksIG9wdGlvbnMubWluaW11bURpZ2l0cyB8fCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlcyA9IFt7XG4gICAgLy8gMC05XG4gICAgbWluOiA0OCxcbiAgICBtYXg6IDU3XG59LHtcbiAgICAvLyBhLXpcbiAgICBtaW46IDY1LFxuICAgIG1heDogOTBcbn0se1xuICAgIC8vIEEtWlxuICAgIG1pbjogOTcsXG4gICAgbWF4OiAxMjJcbn1dO1xuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmluZFJhbmdlKGNoYXIpIHtcbiAgICBmb3IoY29uc3QgaSBpbiByYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGNoYXIudG9TdHJpbmcoKS5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgIGlmKHJhbmdlc1tpXS5taW4gPD0gY29kZSAmJiByYW5nZXNbaV0ubWF4ID49IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlIDwgcmFuZ2UubWF4ID8gY29kZSArIDEgOiByYW5nZS5taW5cbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjaGFyQ29kZShjaGFyLCBmbikge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGNoYXIpO1xuICAgIGNvbnN0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZm4ocmFuZ2UsIGNvZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXYodmFsdWUpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQgPSAodmFsdWUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChjaGFyID0+IGNoYXJDb2RlKGNoYXIsIChyYW5nZSwgY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFyYW5nZSB8fCBjb2RlID4gcmFuZ2UubWluID8gY29kZSAtIDEgOiByYW5nZS5tYXhcbiAgICAgICAgfSkpXG4gICAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXQoY29udmVydGVkLCB0eXBlb2YgdmFsdWUpO1xufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgZGlnaXRpemUgZnJvbSAnLi4vSGVscGVycy9EaWdpdGl6ZSc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2IH0gZnJvbSAnLi4vSGVscGVycy9WYWx1ZSc7XG5pbXBvcnQgeyBsZW5ndGgsIGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZVZhbHVlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgIHByZXBlbmRMZWFkaW5nWmVybzogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltdW1EaWdpdHM6IDBcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgZGlnaXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1pbmltdW1EaWdpdHMgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaWdpdHMsIGxlbmd0aCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGdldCBkaWdpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRkaWdpdHM7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGlnaXRzID0gZGlnaXRpemUodGhpcy5mb3JtYXQodmFsdWUpLCB7XG4gICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiB0aGlzLm1pbmltdW1EaWdpdHMsXG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IHRoaXMucHJlcGVuZExlYWRpbmdaZXJvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzTmFOKCkge1xuICAgICAgICByZXR1cm4gaXNOYU4odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiBpc051bWJlcigpXG4gICAgfVxuXG4gICAgY2xvbmUodmFsdWUsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodmFsdWUsIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSwgYXR0cmlidXRlc1xuICAgICAgICApKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGZsYXR0ZW4oYXJncykuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICBpZiggKGlzTnVsbCh2YWx1ZSkgJiYgaXNOdWxsKGFyZykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDbGFzcyhhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGl0ZW1zOiAnVGhlIGl0ZW1zIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgZGF0ZTogJ1RoZSB2YWx1ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRGF0ZS4nLFxuICAgIGZhY2U6ICdUaGUgZmFjZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRmFjZSBjbGFzcy4nLFxuICAgIGVsZW1lbnQ6ICdUaGUgZWxlbWVudCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGFuIEhUTUxFbGVtZW50JyxcbiAgICBmYWNlVmFsdWU6ICdUaGUgZmFjZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGEgRmFjZVZhbHVlIGNsYXNzLicsXG4gICAgdGltZXI6ICdUaGUgdGltZXIgcHJvcGVydHkgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIFRpbWVyIGNsYXNzLidcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBGYWNlVmFsdWUgZnJvbSAnLi9GYWNlVmFsdWUnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL0hlbHBlcnMvVmFsaWRhdGUnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcbmltcG9ydCB7IGVycm9yLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc09iamVjdCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgICAgICBpZighKHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgICAgICAgICAgY291bnRkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IDUwMFxuICAgICAgICB9LCB0aGlzLmRlZmF1bHRBdHRyaWJ1dGVzKCksIGF0dHJpYnV0ZXMgfHwge30pKTtcblxuICAgICAgICBpZih2YWx1ZSB8fCB0aGlzLmRlZmF1bHRWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzVW5kZWZpbmVkKHZhbHVlKSA/IHZhbHVlIDogdGhpcy5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERhdGFUeXBlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmKCEodmFsdWUgaW5zdGFuY2VvZiBGYWNlVmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY3JlYXRlRmFjZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0b3BBdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3BBdDtcbiAgICB9XG5cbiAgICBzZXQgc3RvcEF0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHN0b3BBdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBvcmlnaW5hbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kb3JpZ2luYWxWYWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgb3JpZ2luYWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwoaW5zdGFuY2UsIGZuKSB7XG4gICAgICAgIGlmKHRoaXMuY291bnRkb3duKSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcblxuICAgICAgICBpZih0aGlzLnNob3VsZFN0b3AoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdpbnRlcnZhbCcpO1xuICAgIH1cblxuICAgIHNob3VsZFN0b3AoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGlzLnN0b3BBdCkgPyB0aGlzLnN0b3BBdCA9PT0gaW5zdGFuY2UudmFsdWUudmFsdWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgZGVmYXVsdERhdGFUeXBlKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIGRlY3JlbWVudChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHN0YXJ0ZWQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBzdG9wcGVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVzZXQoaW5zdGFuY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBpbml0aWFsaXplZChpbnN0YW5jZSkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIHJlbmRlcmVkKGluc3RhbmNlKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgbW91bnRlZChpbnN0YW5jZSkge1xuICAgICAgICBpZih0aGlzLmF1dG9TdGFydCAmJiBpbnN0YW5jZS50aW1lci5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5zdGFuY2Uuc3RhcnQoaW5zdGFuY2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUZhY2VWYWx1ZShpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZhY2VWYWx1ZS5tYWtlKFxuICAgICAgICAgICAgaXNGdW5jdGlvbih2YWx1ZSkgJiYgIXZhbHVlLm5hbWUgPyB2YWx1ZSgpIDogdmFsdWUsIHtcbiAgICAgICAgICAgICAgICBtaW5pbXVtRGlnaXRzOiB0aGlzLm1pbmltdW1EaWdpdHMsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PiB0aGlzLmZvcm1hdChpbnN0YW5jZSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEZsaXBDbG9jayBBcmFiaWMgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCBiZSB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQXJhYmljIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn2LPZhtmI2KfYqicsXG4gICAgJ21vbnRocycgIDogJ9i02YfZiNixJyxcbiAgICAnZGF5cycgICAgOiAn2KPZitin2YUnLFxuICAgICdob3VycycgICA6ICfYs9in2LnYp9iqJyxcbiAgICAnbWludXRlcycgOiAn2K/Zgtin2KbZgicsXG4gICAgJ3NlY29uZHMnIDogJ9ir2YjYp9mG2YonXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnYXInLCAnYXItYXInLCAnYXJhYmljJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDYXRhbGFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENhdGFsYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgOiAnQW55cycsXG4gICAgJ21vbnRocycgOiAnTWVzb3MnLFxuICAgICdkYXlzJyA6ICdEaWVzJyxcbiAgICAnaG91cnMnIDogJ0hvcmVzJyxcbiAgICAnbWludXRlcycgOiAnTWludXRzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vnb25zJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2NhJywgJ2NhLWVzJywgJ2NhdGFsYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjcycsICdjcy1jeicsICdjeicsICdjei1jcycsICdjemVjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIERhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEdlcm1hbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlbicsICdlbi11cycsICdlbmdsaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQZXJzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn2LPYp9mEJyxcblx0J21vbnRocycgIDogJ9mF2KfZhycsXG5cdCdkYXlzJyAgICA6ICfYsdmI2LInLFxuXHQnaG91cnMnICAgOiAn2LPYp9i52KonLFxuXHQnbWludXRlcycgOiAn2K/ZgtuM2YLZhycsXG5cdCdzZWNvbmRzJyA6ICfYq9in2YbbjNmHJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZpJywgJ2ZpLWZpJywgJ2Zpbm5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdBbnMnLFxuICAgICdtb250aHMnICA6ICdNb2lzJyxcbiAgICAnZGF5cycgICAgOiAnSm91cnMnLFxuICAgICdob3VycycgICA6ICdIZXVyZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIZWJyZXcgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OJdicsXG4gICAgJ21vbnRocycgIDogJ0jDs25hcCcsXG4gICAgJ2RheXMnICAgIDogJ05hcCcsXG4gICAgJ2hvdXJzJyAgIDogJ8OTcmEnLFxuICAgICdtaW51dGVzJyA6ICdQZXJjJyxcbiAgICAnc2Vjb25kcycgOiAnTcOhc29kcGVyYydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydodScsICdodS1odScsICdodW5nYXJpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSXRhbGlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEphcGFuZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+uFhCcsXG5cdCdtb250aHMnICA6ICfsm5QnLFxuXHQnZGF5cycgICAgOiAn7J28Jyxcblx0J2hvdXJzJyAgIDogJ+yLnCcsXG5cdCdtaW51dGVzJyA6ICfrtoQnLFxuXHQnc2Vjb25kcycgOiAn7LSIJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2tvJywgJ2tvLWtyJywgJ2tvcmVhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBMYXR2aWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRHV0Y2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ2xhdCcsXG5cdCdtb250aHMnICA6ICdtaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnZG5pJyxcblx0J2hvdXJzJyAgIDogJ2dvZHppbicsXG5cdCdtaW51dGVzJyA6ICdtaW51dCcsXG5cdCdzZWNvbmRzJyA6ICdzZWt1bmQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncHQnLCAncHQtYnInLCAncG9ydHVndWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJzogJ0FuaScsXG5cdCdtb250aHMnOiAnTHVuaScsXG5cdCdkYXlzJzogJ1ppbGUnLFxuXHQnaG91cnMnOiAnT3JlJyxcblx0J21pbnV0ZXMnOiAnTWludXRlJyxcblx0J3NlY29uZHMnOiAnc1NlY3VuZGUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncm8nLCAncm8tcm8nLCAncm9tYW5hJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBSdXNzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFJ1c3NpYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfQu9C10YInLFxuICAgICdtb250aHMnICA6ICfQvNC10YHRj9GG0LXQsicsXG4gICAgJ2RheXMnICAgIDogJ9C00L3QtdC5JyxcbiAgICAnaG91cnMnICAgOiAn0YfQsNGB0L7QsicsXG4gICAgJ21pbnV0ZXMnIDogJ9C80LjQvdGD0YInLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncnUnLCAncnUtcnUnLCAncnVzc2lhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU2xvdmFrIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNsb3ZhayBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdSb2t5Jyxcblx0J21vbnRocycgIDogJ01lc2lhY2UnLFxuXHQnZGF5cycgICAgOiAnRG5pJyxcblx0J2hvdXJzJyAgIDogJ0hvZGlueScsXG5cdCdtaW51dGVzJyA6ICdNaW7DunR5Jyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZHknXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnc2snLCAnc2stc2snLCAnc2xvdmFrJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTd2VkaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFN3ZWRpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnw4VyJyxcblx0J21vbnRocycgIDogJ03DpW5hZGVyJyxcblx0J2RheXMnICAgIDogJ0RhZ2FyJyxcblx0J2hvdXJzJyAgIDogJ1RpbW1hcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVyJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3N2JywgJ3N2LXNlJywgJ3N3ZWRpc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRoYWkgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVGhhaSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfguJvguLUnLFxuXHQnbW9udGhzJyAgOiAn4LmA4LiU4Li34Lit4LiZJyxcblx0J2RheXMnICAgIDogJ+C4p+C4seC4mScsXG5cdCdob3VycycgICA6ICfguIrguLHguYjguKfguYLguKHguIcnLFxuXHQnbWludXRlcycgOiAn4LiZ4Liy4LiX4Li1Jyxcblx0J3NlY29uZHMnIDogJ+C4p+C4tOC4meC4suC4l+C4tSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0aCcsICd0aC10aCcsICd0aGFpJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUdXJraXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFR1cmtpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnWcSxbCcsXG5cdCdtb250aHMnICA6ICdBeScsXG5cdCdkYXlzJyAgICA6ICdHw7xuJyxcblx0J2hvdXJzJyAgIDogJ1NhYXQnLFxuXHQnbWludXRlcycgOiAnRGFraWthJyxcblx0J3NlY29uZHMnIDogJ1Nhbml5ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd0cicsICd0ci10cicsICd0dXJraXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBVa3JhaW5pYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgVWtyYWluaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0YDQvtC60LgnLFxuICAgICdtb250aHMnICA6ICfQvNGW0YHRj9GG0ZYnLFxuICAgICdkYXlzJyAgICA6ICfQtNC90ZYnLFxuICAgICdob3VycycgICA6ICfQs9C+0LTQuNC90LgnLFxuICAgICdtaW51dGVzJyA6ICfRhdCy0LjQu9C40L3QuCcsXG4gICAgJ3NlY29uZHMnIDogJ9GB0LXQutGD0L3QtNC4J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3VhJywgJ3VhLXVhJywgJ3VrcmFpbmUnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFRyYWRpdGlvbmFsIFZpZXRuYW1lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byBWaWV0bmFtZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ07Eg20nLFxuXHQnbW9udGhzJyAgOiAnVGjDoW5nJyxcblx0J2RheXMnICAgIDogJ05nw6B5Jyxcblx0J2hvdXJzJyAgIDogJ0dp4budJyxcblx0J21pbnV0ZXMnIDogJ1Bow7p0Jyxcblx0J3NlY29uZHMnIDogJ0dpw6J5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3ZuJywgJ3ZuLXZuJywgJ3ZpZXRuYW1lc2UnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENoaW5lc2UgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2hpbmVzZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICflubQnLFxuXHQnbW9udGhzJyAgOiAn5pyIJyxcblx0J2RheXMnICAgIDogJ+aXpScsXG5cdCdob3VycycgICA6ICfml7YnLFxuXHQnbWludXRlcycgOiAn5YiGJyxcblx0J3NlY29uZHMnIDogJ+enkidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd6aCcsICd6aC1jbicsICdjaGluZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUcmFkaXRpb25hbCBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRyYWRpdGlvbmFsIENoaW5lc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pmCJyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgtdHcnXTtcbiIsImltcG9ydCAqIGFzIExBTkdVQUdFUyBmcm9tICcuLi9MYW5ndWFnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYW5ndWFnZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgPyBMQU5HVUFHRVNbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBPYmplY3QudmFsdWVzKExBTkdVQUdFUykuZmluZCh2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5hbGlhc2VzLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH0pIDogbnVsbDtcbn1cbiIsImltcG9ydCBsYW5ndWFnZSBmcm9tICcuL0xhbmd1YWdlJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZnJvbSkge1xuICAgIGNvbnN0IGxhbmcgPSBpc1N0cmluZyhmcm9tKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbTtcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0gbGFuZy5kaWN0aW9uYXJ5IHx8IGxhbmc7XG4gICAgcmV0dXJuIGRpY3Rpb25hcnlbdmFsdWVdIHx8IHZhbHVlO1xufTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hlbihjb25kaXRpb24sIGh0bWwpIHtcblx0cmV0dXJuIGNvbmRpdGlvbiA9PT0gdHJ1ZSA/IGh0bWwgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3YXAoZWwsIGV4aXN0aW5nKSB7XG5cdGlmKGV4aXN0aW5nLnBhcmVudE5vZGUpIHtcblx0XHRleGlzdGluZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbCwgZXhpc3RpbmcpO1xuXHRcdFxuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHJldHVybiBleGlzdGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXMpIHtcblx0aWYoaXNPYmplY3QoYXR0cmlidXRlcykpIHtcblx0XHRmb3IoY29uc3QgaSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oZWwsIGNoaWxkcmVuKSB7XG5cdGlmKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uZmlsdGVyKG5vb3ApLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0aWYoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRlbC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsLCBjaGlsZHJlbiwgYXR0cmlidXRlcykge1xuXHRpZighKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcblx0fVxuXG5cdHNldEF0dHJpYnV0ZXMoZWwsIGlzT2JqZWN0KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogYXR0cmlidXRlcyk7XG5cblx0aWYoIWlzT2JqZWN0KGNoaWxkcmVuKSAmJiAhaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcblx0fVxuXHRlbHNlIHtcblx0XHRhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pXG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbi8qXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBpc0FycmF5KHZhbHVlKSA/XG5cdFx0ZGVlcEZsYXR0ZW4odmFsdWUpLmZpbHRlcihub29wKS5qb2luKCcnKSA6IHZhbHVlO1xuXG5cdGlmKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG5cdFx0Zm9yKGNvbnN0IGkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShpLCBhdHRyaWJ1dGVzW2ldKTtcblx0XHR9XG5cdH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59XG4qL1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi4vSGVscGVycy9MYW5ndWFnZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vSGVscGVycy9WYWxpZGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL0hlbHBlcnMvVHJhbnNsYXRlJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuaW1wb3J0IHsgc3dhcCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMudGhlbWUpIHtcbiAgICAgICAgICAgIGVycm9yKGAke3RoaXMubmFtZX0gZG9lcyBub3QgaGF2ZSBhIHRoZW1lIGRlZmluZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5sYW5ndWFnZSkge1xuICAgICAgICAgICAgZXJyb3IoYCR7dGhpcy5uYW1lfSBkb2VzIG5vdCBoYXZlIGEgbGFuZ3VhZ2UgZGVmaW5lZC5gKTtcbiAgICAgICAgfVxuXG5cdFx0aWYoIXRoaXMudGhlbWVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX0gY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbDtcbiAgICB9XG5cbiAgICBzZXQgZWwodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBudWxsLCBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudDtcbiAgICB9XG5cbiAgICBzZXQgcGFyZW50KHBhcmVudCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGhlbWU7XG4gICAgfVxuXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGhlbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgbGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGxhbmd1YWdlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kbGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUoa2V5LCB0aGlzLmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICB0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUoa2V5KTtcbiAgICB9XG5cblx0cmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSA9PT0gJ2ZsaXAtY2xvY2snID8gdGhpcy5jbGFzc05hbWUgOiAnZmxpcC1jbG9jay0nICsgdGhpcy5jbGFzc05hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aGVtZVt0aGlzLm5hbWVdKGVsLCB0aGlzKTtcblxuICAgICAgICBpZighdGhpcy5lbCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5lbC5pbm5lckhUTUwgIT09IGVsLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHN3YXAoZWwsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG5cdH1cblxuICAgIG1vdW50KHBhcmVudCwgYmVmb3JlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGlmKCFiZWZvcmUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGJlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBEb21Db21wb25lbnQgZnJvbSAnLi9Eb21Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpZGVyIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBuZXh0LCBwcmV2LCAgfSBmcm9tICcuLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGlzT2JqZWN0LCAgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH0sIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbnVsbCwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGl0ZW1zO1xuICAgIH1cblxuICAgIHNldCBpdGVtcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRpdGVtcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RJdGVtKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTGlzdEl0ZW0odmFsdWUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRpdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERvbUNvbXBvbmVudCBmcm9tICcuL0RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoaXRlbXMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgfSwgaXNPYmplY3QoaXRlbXMpID8gaXRlbXMgOiBudWxsLCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIERvbUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihsYWJlbCwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9LCBpc09iamVjdChsYWJlbCkgPyBsYWJlbCA6IG51bGwsIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbCkge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgaGFuZGxlOiBudWxsLFxuICAgICAgICAgICAgc3RhcnRlZDogbnVsbCxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IGludGVydmFsXG4gICAgICAgIH0sIGlzT2JqZWN0KGludGVydmFsKSA/IGludGVydmFsIDogbnVsbCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGVsYXBzZWQgdGhlIHRpbWUgYXMgYW4gaW50ZXJnZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4gSW50ZWdlclxuICAgICAqL1xuICAgIGdldCBlbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGFzdExvb3AgPyAwIDogdGhpcy5sYXN0TG9vcCAtIChcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA/IHRoaXMuc3RhcnRlZC5nZXRUaW1lKCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpcyB0aGUgdGltZXIgaXMgcnVubmluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqL1xuICAgIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlzIHRoZSB0aW1lciBpcyBub3QgcnVubmluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQm9vbGVhblxuICAgICAqL1xuICAgIGdldCBpc1N0b3BwZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPT09IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIuIFRoaXMgbWV0aG9kIGlzIGNoYWluYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgRnVuY3Rpb24gIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgcmVzZXQoZm4pIHtcbiAgICAgICAgdGhpcy5zdG9wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgoKSA9PiBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXIuIFRoaXMgbWV0aG9kIGlzIGNoYWluYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgRnVuY3Rpb24gIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc3RhcnQoZm4pIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGU7XG4gICAgICAgIHRoaXMubGFzdExvb3AgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG5cbiAgICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLmxhc3RMb29wID49IHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGZuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RMb29wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2ludGVydmFsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBsb29wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEZ1bmN0aW9uIGZuXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc3RvcChmbikge1xuICAgICAgICBpZih0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3N0b3AnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgRmFjZSB7XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMSkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoaW5zdGFuY2UsIHZhbHVlID0gMSkge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHRoaXMudmFsdWUudmFsdWUgLSB2YWx1ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5pbXBvcnQgeyBub29wLCByb3VuZCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNOdW1iZXIsIGNhbGxiYWNrIH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbnV0ZUNvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRTdG9wKGluc3RhbmNlKSB7XG4gICAgICAgIGlmKGlzTnVsbChpbnN0YW5jZS5zdG9wQXQpIHx8IGlzVW5kZWZpbmVkKGluc3RhbmNlLnN0b3BBdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3RvcEF0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRkb3duID9cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdC5nZXRUaW1lKCkgPj0gdGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCk6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQuZ2V0VGltZSgpIDw9IHRoaXMudmFsdWUudmFsdWUuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNOdW1iZXIodGhpcy5zdG9wQXQpKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5mbG9vcigodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgLSB0aGlzLm9yaWdpbmFsVmFsdWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGRvd24gP1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF0ID49IGRpZmY6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXQgPD0gZGlmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIHN0b3BBdCBwcm9wZXJ0eSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIERhdGUgb3IgTnVtYmVyLmApO1xuICAgIH1cblxuICAgIGluY3JlbWVudChpbnN0YW5jZSwgdmFsdWUgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgKyB2YWx1ZSArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlLCB2YWx1ZSA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSAtIHZhbHVlIC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5zdGFuY2UudGltZXIubGFzdExvb3ApKTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBpbnN0YW5jZS50aW1lci5pc1J1bm5pbmcgPyBpbnN0YW5jZS50aW1lci5zdGFydGVkIDogbmV3IERhdGUoRGF0ZS5ub3coKSAtIDUwKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0TWludXRlcyh2YWx1ZSwgc3RhcnRlZCldLFxuICAgICAgICAgICAgdGhpcy5zaG93U2Vjb25kcyA/IFt0aGlzLmdldFNlY29uZHModmFsdWUsIHN0YXJ0ZWQpXSA6IG51bGxcbiAgICAgICAgXS5maWx0ZXIobm9vcCk7XG4gICAgfVxuXG4gICAgZ2V0TWludXRlcyhhLCBiKSB7XG4gICAgICAgIHJldHVybiByb3VuZCh0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwKTtcbiAgICB9XG5cbiAgICBnZXRTZWNvbmRzKGEsIGIpIHtcbiAgICAgICAgY29uc3QgdG90YWxTZWNvbmRzID0gdGhpcy5nZXRUb3RhbFNlY29uZHMoYSwgYik7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGguY2VpbCh0b3RhbFNlY29uZHMgPT09IDYwID8gMCA6IHRvdGFsU2Vjb25kcyAlIDYwKSk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxTZWNvbmRzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKSA/IDAgOiBNYXRoLnJvdW5kKChhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IE1pbnV0ZUNvdW50ZXIgZnJvbSAnLi9NaW51dGVDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ckNvdW50ZXIgZXh0ZW5kcyBNaW51dGVDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldE1pbnV0ZXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0TWludXRlcyhhLCBiKSAlIDYwKTtcbiAgICB9XG5cbiAgICBnZXRIb3VycyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0VG90YWxTZWNvbmRzKGEsIGIpIC8gNjAgLyA2MCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgSG91ckNvdW50ZXIgZnJvbSAnLi9Ib3VyQ291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheUNvdW50ZXIgZXh0ZW5kcyBIb3VyQ291bnRlciB7XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9ICFpbnN0YW5jZS5zdGFydGVkID8gbmV3IERhdGUgOiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGluc3RhbmNlLm9yaWdpbmFsVmFsdWUgfHwgdmFsdWU7XG4gICAgICAgIGNvbnN0IGEgPSAhdGhpcy5jb3VudGRvd24gPyBub3cgOiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICBjb25zdCBiID0gIXRoaXMuY291bnRkb3duID8gb3JpZ2luYWxWYWx1ZSA6IG5vdztcblxuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgW3RoaXMuZ2V0RGF5cyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRIb3VycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRNaW51dGVzKGEsIGIpXVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKHRoaXMuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbdGhpcy5nZXRTZWNvbmRzKGEsIGIpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGdldERheXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCk7XG4gICAgfVxuXG4gICAgZ2V0SG91cnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0SG91cnMoYSwgYikgJSAyNCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuLi9Db21wb25lbnRzL0ZhY2UnO1xuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZW50eUZvdXJIb3VyQ2xvY2sgZXh0ZW5kcyBGYWNlIHtcblxuICAgIGRlZmF1bHREYXRhVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93U2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgICAgICBpZighdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFtcbiAgICAgICAgICAgIFt2YWx1ZS5nZXRIb3VycygpXSxcbiAgICAgICAgICAgIFt2YWx1ZS5nZXRNaW51dGVzKCldXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goW3ZhbHVlLmdldFNlY29uZHMoKV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQoaW5zdGFuY2UsIG9mZnNldCA9IDApIHtcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlLnZhbHVlLmdldFRpbWUoKSArIG9mZnNldCArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluc3RhbmNlLnRpbWVyLmxhc3RMb29wKSk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KGluc3RhbmNlLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IERhdGUodGhpcy52YWx1ZS52YWx1ZS5nZXRUaW1lKCkgLSBvZmZzZXQgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnN0YW5jZS50aW1lci5sYXN0TG9vcCkpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFR3ZW50eUZvdXJIb3VyQ2xvY2sgZnJvbSAnLi9Ud2VudHlGb3VySG91ckNsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlbHZlSG91ckNsb2NrIGV4dGVuZHMgVHdlbnR5Rm91ckhvdXJDbG9jayB7XG5cbiAgICBkZWZhdWx0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dMYWJlbHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1NlY29uZHM6IHRydWUsXG4gICAgICAgICAgICBzaG93TWVyaWRpdW06IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3JtYXQoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gdmFsdWUuZ2V0SG91cnMoKTtcblx0XHRjb25zdCBncm91cHMgPSBbXG5cdFx0XHRob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IChob3VycyA9PT0gMCA/IDEyIDogaG91cnMpLFxuXHRcdFx0dmFsdWUuZ2V0TWludXRlcygpXG5cdFx0XTtcblxuICAgICAgICB0aGlzLm1lcmlkaXVtID0gaG91cnMgPiAxMiA/ICdwbScgOiAnYW0nO1xuXG5cdFx0aWYodGhpcy5zaG93U2Vjb25kcykge1xuXHRcdFx0Z3JvdXBzLnB1c2godmFsdWUuZ2V0U2Vjb25kcygpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZ3JvdXBzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IERheUNvdW50ZXIgZnJvbSAnLi9EYXlDb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vla0NvdW50ZXIgZXh0ZW5kcyBEYXlDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0V2Vla3MoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCAvIDcpO1xuICAgIH1cblxuICAgIGdldERheXMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3VwZXIuZ2V0RGF5cyhhLCBiKSAlIDcpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFdlZWtDb3VudGVyIGZyb20gJy4vV2Vla0NvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyQ291bnRlciBleHRlbmRzIFdlZWtDb3VudGVyIHtcblxuICAgIGZvcm1hdChpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gIWluc3RhbmNlLnRpbWVyLnN0YXJ0ZWQgPyBuZXcgRGF0ZSA6IHZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW5zdGFuY2Uub3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgICAgY29uc3QgYSA9ICF0aGlzLmNvdW50ZG93biA/IG5vdyA6IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgIGNvbnN0IGIgPSAhdGhpcy5jb3VudGRvd24gPyBvcmlnaW5hbFZhbHVlIDogbm93O1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICBbdGhpcy5nZXRZZWFycyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXRXZWVrcyhhLCBiKV0sXG4gICAgICAgICAgICBbdGhpcy5nZXREYXlzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldEhvdXJzKGEsIGIpXSxcbiAgICAgICAgICAgIFt0aGlzLmdldE1pbnV0ZXMoYSwgYildXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYodGhpcy5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFt0aGlzLmdldFNlY29uZHMoYSwgYildKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0WWVhcnMoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1heCgwLCB0aGlzLmdldFRvdGFsU2Vjb25kcyhhLCBiKSAvIDYwIC8gNjAgLyAyNCAvIDcgLyA1MikpO1xuICAgIH1cblxuICAgIGdldFdlZWtzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN1cGVyLmdldFdlZWtzKGEsIGIpICUgNTIpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRyZW4sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZmxpcC1jbG9jay1kb3QgdG9wJ30pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWRvdCBib3R0b20nfSlcbiAgICBdKTtcbn1cbiIsImltcG9ydCB7IG5leHQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL1ZhbHVlJztcbmltcG9ydCB7IGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmZ1bmN0aW9uIGNoaWxkKGVsLCBpbmRleCkge1xuICAgIHJldHVybiBlbCA/IChlbC5jaGlsZE5vZGVzID8gZWwuY2hpbGROb2Rlc1tpbmRleF0gOiBlbFtpbmRleF0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2hhcihlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnF1ZXJ5U2VsZWN0b3IoJy5mbGlwLWNsb2NrLWxpc3QtaXRlbTpmaXJzdC1jaGlsZCAudG9wJykuaW5uZXJIVE1MIDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnN0YW5jZS52YWx1ZS5kaWdpdHMubWFwKChncm91cCwgeCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEVsID0gY2hpbGQoaW5zdGFuY2UuZWwgPyBpbnN0YW5jZS5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1ncm91cCcpIDogbnVsbCwgeCk7XG5cbiAgICAgICAgY29uc3QgbGlzdHMgPSBncm91cC5tYXAoKHZhbHVlLCB5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBjaGlsZChncm91cEVsID8gZ3JvdXBFbC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcC1jbG9jay1saXN0JykgOiBudWxsLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGNoYXIobGlzdEVsKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUxpc3QodmFsdWUsIHtcbiAgICAgICAgICAgICAgICBkb21WYWx1ZTogbGlzdFZhbHVlLFxuICAgICAgICAgICAgICAgIGNvdW50ZG93bjogaW5zdGFuY2UuY291bnRkb3duLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblJhdGU6IGluc3RhbmNlLmZhY2UuYW5pbWF0aW9uUmF0ZSB8fCBpbnN0YW5jZS5mYWNlLmRlbGF5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNyZWF0ZUdyb3VwKGxpc3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gcGFydHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgYXBwZW5kQ2hpbGRyZW4oZWwsIG5vZGVzKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaW5zdGFuY2UuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpdGVtcyk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vLi4vSGVscGVycy9UZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGVsLmlubmVySFRNTCA9IGluc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpO1xufVxuIiwiaW1wb3J0IHsgbmV4dCwgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL1RlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmVmb3JlVmFsdWUgPSBpbnN0YW5jZS5kb21WYWx1ZSB8fCAoXG4gICAgICAgICFpbnN0YW5jZS5jb3VudGRvd24gPyBwcmV2KGluc3RhbmNlLnZhbHVlKSA6IG5leHQoaW5zdGFuY2UudmFsdWUpXG4gICAgKTtcblxuICAgIGlmKCBpbnN0YW5jZS5kb21WYWx1ZSAmJiBpbnN0YW5jZS5kb21WYWx1ZSAhPT0gaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuICAgIH1cblxuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuICAgIGVsLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7aW5zdGFuY2UuYW5pbWF0aW9uUmF0ZSAvIDJ9bXNgO1xuXG4gICAgaW5zdGFuY2UuaXRlbXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGluc3RhbmNlLnZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxpc3RJdGVtKGJlZm9yZVZhbHVlLCB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgXTtcblxuICAgIGFwcGVuZENoaWxkcmVuKGVsLCBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnJlbmRlcigpKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnN0YW5jZS5hY3RpdmUgPT09IHRydWUgPyAnYWN0aXZlJyA6IChcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZlID09PSBmYWxzZSA/ICdiZWZvcmUnIDogbnVsbFxuICAgICk7XG5cbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBhcHBlbmRDaGlsZHJlbihlbCwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCBpbnN0YW5jZS52YWx1ZSwge2NsYXNzOiAndG9wJ30pLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgaW5zdGFuY2UudmFsdWUsIHtjbGFzczogJ2JvdHRvbSd9KVxuICAgICAgICBdLCB7Y2xhc3M6ICdmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lcid9KVxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbM10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbNV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnZGF5cycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzRdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWwsIGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzFdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzNdKTtcbiAgICB9XG4gICAgXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbMl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG4gICAgfVxuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93TGFiZWxzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdtaW51dGVzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG5cbiAgICAgICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3NlY29uZHMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsLCBpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1sxXSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgfVxuICAgIFxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnaG91cnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ21pbnV0ZXMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzJdKTtcblxuICAgICAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnc2Vjb25kcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgVHdlbnR5Rm91ckhvdXJDbG9jayBmcm9tICcuL1R3ZW50eUZvdXJIb3VyQ2xvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBUd2VudHlGb3VySG91ckNsb2NrKGVsLCBpbnN0YW5jZSk7XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dNZXJpZGl1bSAmJiBpbnN0YW5jZS5mYWNlLm1lcmlkaXVtKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaW5zdGFuY2UuY3JlYXRlTGFiZWwoaW5zdGFuY2UuZmFjZS5tZXJpZGl1bSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLmNoaWxkTm9kZXNbZWwuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsYWJlbC5tb3VudChwYXJlbnQpLmNsYXNzTGlzdC5hZGQoJ2ZsaXAtY2xvY2stbWVyaWRpdW0nKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzddKTtcbiAgICB9XG5cbiAgICBpZihpbnN0YW5jZS5mYWNlLnNob3dMYWJlbHMpIHtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNF0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1s4XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbCwgaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbMV0pO1xuICAgIGluc3RhbmNlLmNyZWF0ZURpdmlkZXIoKS5tb3VudChlbCwgZWwuY2hpbGROb2Rlc1szXSk7XG4gICAgaW5zdGFuY2UuY3JlYXRlRGl2aWRlcigpLm1vdW50KGVsLCBlbC5jaGlsZE5vZGVzWzVdKTtcbiAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbN10pO1xuXG4gICAgaWYoaW5zdGFuY2UuZmFjZS5zaG93U2Vjb25kcykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVEaXZpZGVyKCkubW91bnQoZWwsIGVsLmNoaWxkTm9kZXNbOV0pO1xuICAgIH1cblxuICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd0xhYmVscykge1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgneWVhcnMnKS5tb3VudChlbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgaW5zdGFuY2UuY3JlYXRlTGFiZWwoJ3dlZWtzJykubW91bnQoZWwuY2hpbGROb2Rlc1syXSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdkYXlzJykubW91bnQoZWwuY2hpbGROb2Rlc1s0XSk7XG4gICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdob3VycycpLm1vdW50KGVsLmNoaWxkTm9kZXNbNl0pO1xuICAgICAgICBpbnN0YW5jZS5jcmVhdGVMYWJlbCgnbWludXRlcycpLm1vdW50KGVsLmNoaWxkTm9kZXNbOF0pO1xuXG4gICAgICAgIGlmKGluc3RhbmNlLmZhY2Uuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNyZWF0ZUxhYmVsKCdzZWNvbmRzJykubW91bnQoZWwuY2hpbGROb2Rlc1sxMF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9GbGlwQ2xvY2snO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcbmltcG9ydCAqIGFzIGZhY2VzIGZyb20gJy4vRmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRGl2aWRlcixcbiAgICBGbGlwQ2xvY2ssXG4gICAgR3JvdXAsXG4gICAgTGFiZWwsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBmYWNlc1xufTtcbiIsImltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgeyBPcmlnaW5hbCB9IGZyb20gJy4uL1RoZW1lcyc7XG5pbXBvcnQgeyBFbmdsaXNoIH0gZnJvbSAnLi4vTGFuZ3VhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZhY2U6IENvdW50ZXIsXG4gICAgdGhlbWU6IE9yaWdpbmFsLFxuICAgIGxhbmd1YWdlOiBFbmdsaXNoXG59O1xuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi9GYWNlJztcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0ICogYXMgRmFjZXMgZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IEZhY2VWYWx1ZSBmcm9tICcuL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCBEZWZhdWx0VmFsdWVzIGZyb20gJy4uL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi4vQ29uZmlnL0NvbnNvbGVNZXNzYWdlcyc7XG5pbXBvcnQgeyBmbGF0dGVuLCBpc1N0cmluZywgaXNPYmplY3QsIGlzVW5kZWZpbmVkLCBpc0Z1bmN0aW9uLCBlcnJvciB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcENsb2NrIGV4dGVuZHMgRG9tQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBpZighdmFsaWRhdGUoZWwsIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNPYmplY3QodmFsdWUpICYmICFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWNlID0gYXR0cmlidXRlcy5mYWNlIHx8IERlZmF1bHRWYWx1ZXMuZmFjZTtcblxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5mYWNlO1xuXG4gICAgICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgb3JpZ2luYWxWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB0aGVtZTogRGVmYXVsdFZhbHVlcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlLFxuICAgICAgICAgICAgdGltZXI6IFRpbWVyLm1ha2UoYXR0cmlidXRlcy5pbnRlcnZhbCB8fCAxMDAwKSxcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLmZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdW50KGVsKTtcbiAgICB9XG5cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgc2V0IGZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ3N0cmluZycsICdmdW5jdGlvbiddKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZmFjZSA9IChGYWNlc1t2YWx1ZV0gfHwgdmFsdWUpLm1ha2UoT2JqZWN0LmFzc2lnbih0aGlzLmdldFB1YmxpY0F0dHJpYnV0ZXMoKSwge1xuICAgICAgICAgICAgb3JpZ2luYWxWYWx1ZTogdGhpcy5mYWNlID8gdGhpcy5mYWNlLm9yaWdpbmFsVmFsdWUgOiB1bmRlZmluZWRcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJGZhY2UuaW5pdGlhbGl6ZWQodGhpcyk7XG5cbiAgICAgICAgaWYodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kZmFjZS52YWx1ZSA9IHRoaXMuZmFjZS5jcmVhdGVGYWNlVmFsdWUodGhpcywgdGhpcy52YWx1ZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgJiYgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgc3RvcEF0KCkge1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbih0aGlzLiRzdG9wQXQpID8gdGhpcy4kc3RvcEF0KHRoaXMpIDogdGhpcy4kc3RvcEF0O1xuICAgIH1cblxuICAgIHNldCBzdG9wQXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kc3RvcEF0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdGltZXI7XG4gICAgfVxuXG4gICAgc2V0IHRpbWVyKHRpbWVyKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh0aW1lciwgVGltZXIpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGltZXIgPSB0aW1lcjtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2UgPyB0aGlzLmZhY2UudmFsdWUgOiBudWxsO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZighdGhpcy5mYWNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZmFjZSBtdXN0IGJlIHNldCBiZWZvcmUgc2V0dGluZyBhIHZhbHVlLicpXG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIEZhY2VWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2UudmFsdWUgPSB0aGlzLmZhY2UudmFsdWUuY2xvbmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWNlLnZhbHVlID0gdGhpcy5mYWNlLmNyZWF0ZUZhY2VWYWx1ZSh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsICYmIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IG9yaWdpbmFsVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpc0Z1bmN0aW9uKHRoaXMuJG9yaWdpbmFsVmFsdWUpICYmICF0aGlzLiRvcmlnaW5hbFZhbHVlLm5hbWVcbiAgICAgICAgKSA/IHRoaXMuJG9yaWdpbmFsVmFsdWUoKSA6ICh0aGlzLiRvcmlnaW5hbFZhbHVlIHx8ICh0aGlzLmZhY2UgPyB0aGlzLmZhY2UuZGVmYXVsdFZhbHVlKCkgOiBudWxsKSk7XG4gICAgfVxuXG4gICAgc2V0IG9yaWdpbmFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG1vdW50KGVsKSB7XG4gICAgICAgIHN1cGVyLm1vdW50KGVsKTtcblxuICAgICAgICB0aGlzLmZhY2UubW91bnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIENhbGwgdGhlIHBhcmVudCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBmYWNlIGhhcyBhIHJlbmRlciBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSB0aGVtZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgYSBmYWNlIHRvIGNvbXBsZXRlbHkgcmUtcmVuZGVyIG9yIGFkZCB0byB0aGUgdGhlbWUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGZhY2Ugc3BlY2lmaWMgaW50ZXJmYWNlcyBmb3IgYSB0aGVtZS5cbiAgICAgICAgaWYodGhpcy50aGVtZS5mYWNlc1t0aGlzLmZhY2UubmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWUuZmFjZXNbdGhpcy5mYWNlLm5hbWVdKHRoaXMuZWwsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFzcyB0aGUgY2xvY2sgaW5zdGFuY2UgdG8gdGhlIHJlbmRlcmVkKCkgZnVuY3Rpb24gb24gdGhlIGZhY2UuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIGdsb2JhbCBtb2RpZmljYXRpb25zIHRvIHRoZSByZW5kZXJlZCB0ZW1wbGF0ZXMgbm90XG4gICAgICAgIC8vIHRoZW1lIHNwZWNpZmljLlxuICAgICAgICB0aGlzLmZhY2UucmVuZGVyZWQodGhpcyk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSByZW5kZXJlZCBlbGVtZW50LlxuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICB9XG5cbiAgICBzdGFydChmbikge1xuICAgICAgICBpZighdGhpcy50aW1lci5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNVbmRlZmluZWQodGhpcy5mYWNlLnN0b3BBdCkgJiYgKHRoaXMuZmFjZS5zdG9wQXQgPSB0aGlzLnN0b3BBdCk7XG4gICAgICAgIGlzVW5kZWZpbmVkKHRoaXMuZmFjZS5vcmlnaW5hbFZhbHVlKSAmJiAodGhpcy5mYWNlLm9yaWdpbmFsVmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWUpO1xuXG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mYWNlLmludGVydmFsKHRoaXMsIGZuKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZhY2Uuc3RhcnRlZCh0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgIH1cblxuICAgIHN0b3AoZm4pIHtcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKGZuKTtcbiAgICAgICAgdGhpcy5mYWNlLnN0b3BwZWQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgnc3RvcCcpO1xuICAgIH1cblxuICAgIHJlc2V0KGZuKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9yaWdpbmFsVmFsdWU7XG4gICAgICAgIHRoaXMudGltZXIucmVzZXQoKCkgPT4gdGhpcy5pbnRlcnZhbCh0aGlzLCBmbikpO1xuICAgICAgICB0aGlzLmZhY2UucmVzZXQodGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgncmVzZXQnKTtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mYWNlLmluY3JlbWVudCh0aGlzLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmFjZS5kZWNyZW1lbnQodGhpcywgdmFsdWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZURpdmlkZXIoYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gRGl2aWRlci5tYWtlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUsXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdCh2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gTGlzdC5tYWtlKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxhYmVsKHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBMYWJlbC5tYWtlKHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUdyb3VwKGl0ZW1zLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBHcm91cC5tYWtlKGl0ZW1zLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVzO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0RmFjZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsIEZhY2UpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmZhY2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdFRoZW1lKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudGhlbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgRGVmYXVsdFZhbHVlcy50aGVtZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRMYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImNhbGxiYWNrIiwiZm4iLCJpc0Z1bmN0aW9uIiwiYXBwbHkiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJyb3VuZCIsInZhbHVlIiwiaXNOZWdhdGl2ZVplcm8iLCJpc05lZ2F0aXZlIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInRvU3RyaW5nIiwibm9vcCIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwiY2hhaW4iLCJiZWZvcmUiLCJhZnRlciIsImNvbmNhdE1hcCIsIngiLCJtYXAiLCJyZWR1Y2UiLCJ5IiwiY29uY2F0IiwiZmxhdHRlbiIsImRlZXBGbGF0dGVuIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGlnaXRzIiwiSW5maW5pdHkiLCJpc0NsYXNzIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsInR5cGUiLCJpc051bWJlciIsImlzTmFOIiwia2ViYWJDYXNlIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50cyIsImtleSIsImFyZ3MiLCJmb3JFYWNoIiwiZXZlbnQiLCJwdXNoIiwiZmlsdGVyIiwib2ZmIiwib24iLCJoYXNPd25Qcm9wZXJ0eSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJrZXlzIiwiZ2V0QXR0cmlidXRlcyIsIm1hdGNoIiwib2JqIiwic2V0QXR0cmlidXRlcyIsInZhbHVlcyIsImkiLCJjb25zdHJ1Y3RvciIsIiRldmVudHMiLCJkaWdpdGl6ZSIsIm9wdGlvbnMiLCJtaW5pbXVtRGlnaXRzIiwicHJlcGVuZExlYWRpbmdaZXJvIiwicHJlcGVuZCIsIm51bWJlciIsInNob3VsZFByZXBlbmRaZXJvIiwic3BsaXQiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwicmFuZ2VzIiwibWF4IiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImZpbmRSYW5nZSIsImNoYXIiLCJjb2RlIiwiY2hhckNvZGVBdCIsIm5leHQiLCJjb252ZXJ0ZWQiLCJjaGFyQ29kZSIsInJhbmdlIiwiam9pbiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJGYWNlVmFsdWUiLCJnZXRQdWJsaWNBdHRyaWJ1dGVzIiwiJGRpZ2l0cyIsIiR2YWx1ZSIsInZhbGlkYXRlIiwic3VjY2VzcyIsImFyZyIsIml0ZW1zIiwidGhlbWUiLCJsYW5ndWFnZSIsImRhdGUiLCJmYWNlIiwiZWxlbWVudCIsImZhY2VWYWx1ZSIsInRpbWVyIiwiRmFjZSIsImF1dG9TdGFydCIsImNvdW50ZG93biIsImFuaW1hdGlvblJhdGUiLCJkZWZhdWx0QXR0cmlidXRlcyIsImRlZmF1bHRWYWx1ZSIsImluc3RhbmNlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50Iiwic2hvdWxkU3RvcCIsInN0b3AiLCJlbWl0Iiwic3RvcEF0IiwiaXNTdG9wcGVkIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RhcnQiLCJtYWtlIiwiZGVmYXVsdERhdGFUeXBlIiwiY3JlYXRlRmFjZVZhbHVlIiwiJHN0b3BBdCIsIiRvcmlnaW5hbFZhbHVlIiwiZGljdGlvbmFyeSIsImFsaWFzZXMiLCJMQU5HVUFHRVMiLCJmaW5kIiwiaW5kZXhPZiIsImZyb20iLCJsYW5nIiwic3dhcCIsImVsIiwiZXhpc3RpbmciLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwiSFRNTEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImlubmVySFRNTCIsIkRvbUNvbXBvbmVudCIsInBhcmVudCIsInRyYW5zbGF0ZSIsImNsYXNzIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiaW5zZXJ0QmVmb3JlIiwiJGVsIiwiQ29uc29sZU1lc3NhZ2VzIiwiJHBhcmVudCIsIiR0aGVtZSIsIiRsYW5ndWFnZSIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJpdGVtIiwiJGl0ZW1zIiwiR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiVGltZXIiLCJpbnRlcnZhbCIsImNvdW50IiwiaGFuZGxlIiwic3RhcnRlZCIsInJ1bm5pbmciLCJEYXRlIiwibGFzdExvb3AiLCJub3ciLCJsb29wIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZ2V0VGltZSIsIkNvdW50ZXIiLCJNaW51dGVDb3VudGVyIiwic2hvd1NlY29uZHMiLCJzaG93TGFiZWxzIiwiZGlmZiIsIm9yaWdpbmFsVmFsdWUiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImEiLCJiIiwiZ2V0VG90YWxTZWNvbmRzIiwidG90YWxTZWNvbmRzIiwiYWJzIiwiSG91ckNvdW50ZXIiLCJkYXRhIiwiZ2V0SG91cnMiLCJEYXlDb3VudGVyIiwiZ2V0RGF5cyIsIlR3ZW50eUZvdXJIb3VyQ2xvY2siLCJncm91cHMiLCJvZmZzZXQiLCJUd2VsdmVIb3VyQ2xvY2siLCJzaG93TWVyaWRpdW0iLCJob3VycyIsIm1lcmlkaXVtIiwiV2Vla0NvdW50ZXIiLCJnZXRXZWVrcyIsIlllYXJDb3VudGVyIiwiZ2V0WWVhcnMiLCJpbmRleCIsImNoaWxkTm9kZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFydHMiLCJncm91cCIsImdyb3VwRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlzdHMiLCJsaXN0RWwiLCJsaXN0VmFsdWUiLCJjcmVhdGVMaXN0IiwiZG9tVmFsdWUiLCJkZWxheSIsImNyZWF0ZUdyb3VwIiwibm9kZXMiLCJ0IiwiYmVmb3JlVmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjcmVhdGVMaXN0SXRlbSIsImFjdGl2ZSIsImNyZWF0ZURpdmlkZXIiLCJtb3VudCIsImNyZWF0ZUxhYmVsIiwiRmxpcENsb2NrIiwiZmFjZXMiLCJPcmlnaW5hbCIsIkVuZ2xpc2giLCJEZWZhdWx0VmFsdWVzIiwibW91bnRlZCIsInJlbmRlcmVkIiwic3RvcHBlZCIsInJlc2V0IiwiJGZhY2UiLCJGYWNlcyIsInVuZGVmaW5lZCIsImluaXRpYWxpemVkIiwiJHRpbWVyIiwiY2xvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLEtBQVQsQ0FBZUMs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
