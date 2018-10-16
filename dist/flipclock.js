(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.FlipClock = {})));
}(this, (function (exports) { 'use strict';

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

  var Face = function Face(clock) {
    _classCallCheck(this, Face);

    this.$clock = clock;
  };

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
  function isNull(value) {
    return typeof value === 'null';
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
    return value instanceof Object;
  }
  function isFunction(value) {
    return value instanceof Function;
  }

  function validate(value) {
    var success = false;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    flatten(args).forEach(function (arg) {
      if (isObject(arg) && value instanceof arg || isFunction(arg) && !isClass(arg) && arg(value) === true || isString(arg) && _typeof(value) === arg) {
        success = true;
      }
    });
    return success;
  }

  var Component =
  /*#__PURE__*/
  function () {
    function Component(attributes) {
      _classCallCheck(this, Component);

      this.setAttribute(attributes);
    }

    _createClass(Component, [{
      key: "getAttribute",
      value: function getAttribute(key) {
        return this.hasOwnProperty(key) ? this[key] : null;
      }
    }, {
      key: "getAttributes",
      value: function getAttributes() {
        var _this = this;

        return Object.getOwnPropertyNames(this).map(function (key) {
          return _this.getAttribute(key);
        });
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
    }], [{
      key: "make",
      value: function make() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
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
      prependLeadingZero: false
    }, options);

    function prepend(number) {
      var shouldPrependZero = options.prependLeadingZero && number.toString().split('').length === 1;
      return (shouldPrependZero ? '0' : '').concat(number);
    }

    function digits(arr, min) {
      var length = deepFlatten(arr).length;

      if (length < min) {
        for (var i = 0; i < min - length; i++) {
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

  var FaceValue =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FaceValue, _Component);

    function FaceValue(value, attributes) {
      _classCallCheck(this, FaceValue);

      return _possibleConstructorReturn(this, _getPrototypeOf(FaceValue).call(this, Object.assign({
        prependLeadingZero: false,
        minimumDigits: 0,
        value: value
      }, attributes)));
    }

    _createClass(FaceValue, [{
      key: "digits",
      get: function get() {
        return this.$digits;
      }
    }, {
      key: "value",
      get: function get() {
        return this.$value;
      },
      set: function set(value) {
        this.$digits = digitize(this.$value = value, {
          minimumDigits: this.minimumDigits,
          prependLeadingZero: this.prependLeadingZero
        });
      }
    }]);

    return FaceValue;
  }(Component);

  var Counter =
  /*#__PURE__*/
  function (_Face) {
    _inherits(Counter, _Face);

    function Counter() {
      _classCallCheck(this, Counter);

      return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
    }

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

  function when(condition, html) {
    return condition === true ? html : '';
  }
  function element (value) {
    var template = document.createElement('template');
    template.innerHTML = isArray(value) ? deepFlatten(value).filter(noop).join('') : value;
    return template.content.firstChild;
  }

  function Divider (instance) {
    return element(['<span class="flip-clock-divider">', when(!!instance.label, "<span class=\"flip-clock-label\">".concat(instance.t(instance.label), "</span>")), '<span class="flip-clock-dot top"></span>', '<span class="flip-clock-dot bottom"></span>', '</span>']);
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

  function _translate (value, from) {
    return (isString(from || 'en-us') ? language(from) : from).dictionary[value] || value;
  }

  var ConsoleMessages = {
    items: 'The items must be an array.',
    theme: 'The theme must be an object.',
    language: 'The language must be an object.',
    face: 'The face must be an instance of a Face class.'
  };

  var DomComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DomComponent, _Component);

    function DomComponent(attributes) {
      _classCallCheck(this, DomComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(DomComponent).call(this, Object.assign({
        theme: DefaultValues.theme,
        language: DefaultValues.language
      }, attributes)));
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
        if (this.theme[this.constructor.name]) {
          return this.theme[this.constructor.name](this);
        }

        throw new Error('This component cannot be rendered because it has no template.');
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
    }], [{
      key: "getDefaultTheme",
      value: function getDefaultTheme() {
        return DefaultValues.theme;
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
      key: "getDefaultLanguage",
      value: function getDefaultLanguage() {
        return DefaultValues.language;
      }
    }, {
      key: "setDefaultLanguage",
      value: function setDefaultLanguage(value) {
        if (!validate(value, 'object')) {
          error(ConsoleMessages.language);
        }

        DefaultValues.language = value;
      }
    }]);

    return DomComponent;
  }(Component);

  var ListItem =
  /*#__PURE__*/
  function (_DomComponent) {
    _inherits(ListItem, _DomComponent);

    function ListItem(value, attributes) {
      _classCallCheck(this, ListItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, Object.assign({
        value: value
      }, attributes)));
    }

    return ListItem;
  }(DomComponent);

  function List (instance) {
    instance.items = [ListItem.make(prev(instance.value)), ListItem.make(instance.value)];
    return element(['<div class="flip-clock-list">', instance.items.map(function (item) {
      return item.render().outerHTML;
    }), '</div>']);
  }

  function ListItem$1 (instance) {
    return element(['<div class="flip-clock-list-item">', '<div class="flip-clock-list-item-inner">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + instance.value + '</div>', '</div>', '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + instance.value + '</div>', '</div>', '</div>', '</div>']);
  }

  var Original = {
    Divider: Divider,
    List: List,
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

  var FlipClock =
  /*#__PURE__*/
  function (_DomComponent) {
    _inherits(FlipClock, _DomComponent);

    function FlipClock(value, attributes) {
      _classCallCheck(this, FlipClock);

      return _possibleConstructorReturn(this, _getPrototypeOf(FlipClock).call(this, Object.assign({
        value: value,
        face: DefaultValues.face
      }, attributes)));
    }

    _createClass(FlipClock, [{
      key: "value",
      get: function get() {
        return this.$value;
      },
      set: function set(value) {
        this.$value = value instanceof FaceValue ? value : FaceValue.make(value);
      }
    }, {
      key: "face",
      get: function get() {
        return this.$face;
      },
      set: function set(value) {
        if (!validate(value, [Face, 'function'])) {
          error$1(ConsoleMessages.face);
        }

        this.$face = value instanceof Function ? new value(this) : value;
      }
    }], [{
      key: "getDefaultFace",
      value: function getDefaultFace() {
        return DefaultValues.face;
      }
    }, {
      key: "setDefaultFace",
      value: function setDefaultFace(value) {
        validate(value, [Face, 'function']).then(function () {
          DefaultValues.face = value;
        }, function () {
          error$1(ConsoleMessages.face);
        });
      }
    }]);

    return FlipClock;
  }(DomComponent);

  var item = new FlipClock(100);
  console.log(item);

  exports.default = FlipClock;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvRmFjZXMvRmFjZS5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL0Z1bmN0aW9ucy5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbGlkYXRlLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvQ29tcG9uZW50LmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvRGlnaXRpemUuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9GYWNlVmFsdWUuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvRWxlbWVudC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvRGl2aWRlci5qcyIsIi4uL3NyYy9qcy9IZWxwZXJzL1ZhbHVlLmpzIiwiLi4vc3JjL2pzL0hlbHBlcnMvVHJhbnNsYXRlLmpzIiwiLi4vc3JjL2pzL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9Eb21Db21wb25lbnQuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGlzdC5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvTGlzdEl0ZW0uanMiLCIuLi9zcmMvanMvVGhlbWVzL09yaWdpbmFsL2luZGV4LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9hci1hci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvY3MtY3ouanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RhLWRrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9kZS1kZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZW4tdXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2VzLWVzLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9mYS1pci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZmktZmkuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZyLWNhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9oZS1pbC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaHUtaHUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2l0LWl0LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9qYS1qcC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMva28ta3IuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2x2LWx2LmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ubC1iZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbm8tbmIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3BsLXBsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9wdC1ici5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcnUtcnUuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3NrLXNrLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9zdi1zZS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdGgtdGguanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3RyLXRyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy91YS11YS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtY24uanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3poLXR3LmpzIiwiLi4vc3JjL2pzL0NvbmZpZy9EZWZhdWx0VmFsdWVzLmpzIiwiLi4vc3JjL2pzL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IoY2xvY2spIHtcbiAgICAgICAgdGhpcy4kY2xvY2sgPSBjbG9jaztcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2soZm4pIHtcbiAgICBpZihpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDEpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgIWlzTnVsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRNYXAoZm4pIHtcbiAgICByZXR1cm4geCA9PiB7XG4gICAgICAgIHJldHVybiB4Lm1hcChmbikucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiB4KSh4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEZsYXR0ZW4oeCkge1xuICAgIHJldHVybiBjb25jYXRNYXAoeCA9PiBBcnJheS5pc0FycmF5KHgpID8gZGVlcEZsYXR0ZW4gKHgpIDogeCkoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1Y2ZpcnN0KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVsbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDbGFzcyh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikgJiYgISF2YWx1ZS5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIC4uLmFyZ3MpIHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgZmxhdHRlbihhcmdzKS5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICAgIGlmKCAoaXNPYmplY3QoYXJnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBhcmcpKSB8fFxuICAgICAgICAgICAgKGlzRnVuY3Rpb24oYXJnKSAmJiAhaXNDbGFzcyhhcmcpICYmIGFyZyh2YWx1ZSkgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoaXNTdHJpbmcoYXJnKSAmJiAodHlwZW9mIHZhbHVlID09PSBhcmcpKSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuIiwiaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gdGhpc1trZXldIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlcyh2YWx1ZXMpIHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBGbGF0dGVuIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWdpdGl6ZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtaW5pbXVtRGlnaXRzOiAwLFxuICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IGZhbHNlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBwcmVwZW5kKG51bWJlcikge1xuICAgICAgICBjb25zdCBzaG91bGRQcmVwZW5kWmVybyA9IG9wdGlvbnMucHJlcGVuZExlYWRpbmdaZXJvICYmXG4gICAgICAgICAgICBudW1iZXIudG9TdHJpbmcoKS5zcGxpdCgnJykubGVuZ3RoID09PSAxO1xuXG4gICAgICAgIHJldHVybiAoc2hvdWxkUHJlcGVuZFplcm8gPyAnMCcgOiAnJykuY29uY2F0KG51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlnaXRzKGFyciwgbWluKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRlZXBGbGF0dGVuKGFycikubGVuZ3RoO1xuXG4gICAgICAgIGlmKGxlbmd0aCA8IG1pbikge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1pbiAtIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyWzBdLnVuc2hpZnQoJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZ2l0cyhmbGF0dGVuKFt2YWx1ZV0pLm1hcChudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gZmxhdHRlbihkZWVwRmxhdHRlbihbbnVtYmVyXSkubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJlcGVuZChudW1iZXIpLnNwbGl0KCcnKTtcbiAgICAgICAgfSkpO1xuICAgIH0pLCBvcHRpb25zLm1pbmltdW1EaWdpdHMgfHwgMCk7XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBkaWdpdGl6ZSBmcm9tICcuLi9IZWxwZXJzL0RpZ2l0aXplJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlVmFsdWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBwcmVwZW5kTGVhZGluZ1plcm86IGZhbHNlLFxuICAgICAgICAgICAgbWluaW11bURpZ2l0czogMCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpZ2l0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRpZ2l0cztcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZGlnaXRzID0gZGlnaXRpemUodGhpcy4kdmFsdWUgPSB2YWx1ZSwge1xuICAgICAgICAgICAgbWluaW11bURpZ2l0czogdGhpcy5taW5pbXVtRGlnaXRzLFxuICAgICAgICAgICAgcHJlcGVuZExlYWRpbmdaZXJvOiB0aGlzLnByZXBlbmRMZWFkaW5nWmVyb1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4vRmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBGYWNlIHtcblxuXG59XG4iLCJpbXBvcnQgRmFjZSBmcm9tICcuL0ZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VudHlGb3VySG91ckNsb2NrIGV4dGVuZHMgRmFjZSB7XG5cblxufVxuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRmxhdHRlbiB9IGZyb20gJy4vRnVuY3Rpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW4oY29uZGl0aW9uLCBodG1sKSB7XG5cdHJldHVybiBjb25kaXRpb24gPT09IHRydWUgPyBodG1sIDogJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGlzQXJyYXkodmFsdWUpID9cblx0XHRkZWVwRmxhdHRlbih2YWx1ZSkuZmlsdGVyKG5vb3ApLmpvaW4oJycpIDogdmFsdWU7XG5cbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufVxuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnLi4vLi4vSGVscGVycy9FbGVtZW50JztcbmltcG9ydCB7IHdoZW4gfSBmcm9tICcuLi8uLi9IZWxwZXJzL0VsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHJldHVybiBlbGVtZW50KFtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmxpcC1jbG9jay1kaXZpZGVyXCI+JyxcbiAgICAgICAgICAgIHdoZW4oISFpbnN0YW5jZS5sYWJlbCwgYDxzcGFuIGNsYXNzPVwiZmxpcC1jbG9jay1sYWJlbFwiPiR7aW5zdGFuY2UudChpbnN0YW5jZS5sYWJlbCl9PC9zcGFuPmApLFxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmxpcC1jbG9jay1kb3QgdG9wXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJmbGlwLWNsb2NrLWRvdCBib3R0b21cIj48L3NwYW4+JyxcbiAgICAgICAgJzwvc3Bhbj4nXG4gICAgXSk7XG59XG4iLCJjb25zdCByYW5nZXMgPSBbe1xuICAgIC8vIDAtOVxuICAgIG1pbjogNDgsXG4gICAgbWF4OiA1N1xufSx7XG4gICAgLy8gYS16XG4gICAgbWluOiA2NSxcbiAgICBtYXg6IDkwXG59LHtcbiAgICAvLyBBLVpcbiAgICBtaW46IDk3LFxuICAgIG1heDogMTIyXG59XTtcblxuZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRSYW5nZShjaGFyKSB7XG4gICAgZm9yKGNvbnN0IGkgaW4gcmFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBjaGFyLnRvU3RyaW5nKCkuY2hhckNvZGVBdCgwKTtcblxuICAgICAgICBpZihyYW5nZXNbaV0ubWluIDw9IGNvZGUgJiYgcmFuZ2VzW2ldLm1heCA+PSBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBjaGFyQ29kZShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA8IHJhbmdlLm1heCA/IGNvZGUgKyAxIDogcmFuZ2UubWluXG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2hhckNvZGUoY2hhciwgZm4pIHtcbiAgICBjb25zdCByYW5nZSA9IGZpbmRSYW5nZShjaGFyKTtcbiAgICBjb25zdCBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGZuKHJhbmdlLCBjb2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2KHZhbHVlKSB7XG4gICAgY29uc3QgY29udmVydGVkID0gKHZhbHVlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoY2hhciA9PiBjaGFyQ29kZShjaGFyLCAocmFuZ2UsIGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcmFuZ2UgfHwgY29kZSA+IHJhbmdlLm1pbiA/IGNvZGUgLSAxIDogcmFuZ2UubWF4XG4gICAgICAgIH0pKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0KGNvbnZlcnRlZCwgdHlwZW9mIHZhbHVlKTtcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZnJvbSkge1xuICAgIHJldHVybiAoaXNTdHJpbmcoZnJvbSB8fCAnZW4tdXMnKSA/IGxhbmd1YWdlKGZyb20pIDogZnJvbSkuZGljdGlvbmFyeVt2YWx1ZV0gfHwgdmFsdWU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGl0ZW1zOiAnVGhlIGl0ZW1zIG11c3QgYmUgYW4gYXJyYXkuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0LicsXG4gICAgZmFjZTogJ1RoZSBmYWNlIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYSBGYWNlIGNsYXNzLidcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vSGVscGVycy9UcmFuc2xhdGUnO1xuaW1wb3J0IERlZmF1bHRWYWx1ZXMgZnJvbSAnLi4vQ29uZmlnL0RlZmF1bHRWYWx1ZXMnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB0aGVtZTogRGVmYXVsdFZhbHVlcy50aGVtZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlXG4gICAgICAgIH0sIGF0dHJpYnV0ZXMpKTtcbiAgICB9XG5cbiAgICBnZXQgdGhlbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0aGVtZTtcbiAgICB9XG5cbiAgICBzZXQgdGhlbWUodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0aGVtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBsYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxhbmd1YWdlO1xuICAgIH1cblxuICAgIHNldCBsYW5ndWFnZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKGtleSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRlKGtleSwgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgdChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XG4gICAgfVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZih0aGlzLnRoZW1lW3RoaXMuY29uc3RydWN0b3IubmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW1lW3RoaXMuY29uc3RydWN0b3IubmFtZV0odGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnVGhpcyBjb21wb25lbnQgY2Fubm90IGJlIHJlbmRlcmVkIGJlY2F1c2UgaXQgaGFzIG5vIHRlbXBsYXRlLidcbiAgICAgICAgKTtcblx0fVxuXG4gICAgc3RhdGljIGdldERlZmF1bHRUaGVtZSgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXMudGhlbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRUaGVtZSh2YWx1ZSkge1xuICAgICAgICBpZighdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLnRoZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlZmF1bHRWYWx1ZXMudGhlbWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZWZhdWx0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgaWYoIXZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vRG9tQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgcHJldiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvVmFsdWUnO1xuaW1wb3J0IGVsZW1lbnQgZnJvbSAnLi4vLi4vSGVscGVycy9FbGVtZW50JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5pdGVtcyA9IFtcbiAgICAgICAgTGlzdEl0ZW0ubWFrZShwcmV2KGluc3RhbmNlLnZhbHVlKSksXG4gICAgICAgIExpc3RJdGVtLm1ha2UoaW5zdGFuY2UudmFsdWUpXG4gICAgXTtcblxuICAgIHJldHVybiBlbGVtZW50KFtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJmbGlwLWNsb2NrLWxpc3RcIj4nLFxuICAgICAgICBpbnN0YW5jZS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5yZW5kZXIoKS5vdXRlckhUTUw7XG4gICAgICAgIH0pLFxuICAgICAgICAnPC9kaXY+J1xuICAgIF0pO1xufVxuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnLi4vLi4vSGVscGVycy9FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZWxlbWVudChbXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZmxpcC1jbG9jay1saXN0LWl0ZW1cIj4nLFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lclwiPicsXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ1cFwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2hhZG93XCI+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbm5cIj4nK2luc3RhbmNlLnZhbHVlKyc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZG93blwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2hhZG93XCI+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbm5cIj4nK2luc3RhbmNlLnZhbHVlKyc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICc8L2Rpdj4nXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbVxufTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEFyYWJpYyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfYs9mG2YjYp9iqJyxcbiAgICAnbW9udGhzJyAgOiAn2LTZh9mI2LEnLFxuICAgICdkYXlzJyAgICA6ICfYo9mK2KfZhScsXG4gICAgJ2hvdXJzJyAgIDogJ9iz2KfYudin2KonLFxuICAgICdtaW51dGVzJyA6ICfYr9mC2KfYptmCJyxcbiAgICAnc2Vjb25kcycgOiAn2KvZiNin2YbZiidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydhcicsICdhci1hcicsICdhcmFiaWMnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjcycsICdjcy1jeicsICdjeicsICdjei1jcycsICdjemVjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIERhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEdlcm1hbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlbicsICdlbi11cycsICdlbmdsaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQZXJzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn2LPYp9mEJyxcblx0J21vbnRocycgIDogJ9mF2KfZhycsXG5cdCdkYXlzJyAgICA6ICfYsdmI2LInLFxuXHQnaG91cnMnICAgOiAn2LPYp9i52KonLFxuXHQnbWludXRlcycgOiAn2K/ZgtuM2YLZhycsXG5cdCdzZWNvbmRzJyA6ICfYq9in2YbbjNmHJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZpJywgJ2ZpLWZpJywgJ2Zpbm5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdBbnMnLFxuICAgICdtb250aHMnICA6ICdNb2lzJyxcbiAgICAnZGF5cycgICAgOiAnSm91cnMnLFxuICAgICdob3VycycgICA6ICdIZXVyZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIZWJyZXcgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OJdicsXG4gICAgJ21vbnRocycgIDogJ0jDs25hcCcsXG4gICAgJ2RheXMnICAgIDogJ05hcCcsXG4gICAgJ2hvdXJzJyAgIDogJ8OTcmEnLFxuICAgICdtaW51dGVzJyA6ICdQZXJjJyxcbiAgICAnc2Vjb25kcycgOiAnTcOhc29kcGVyYydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydodScsICdodS1odScsICdodW5nYXJpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSXRhbGlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEphcGFuZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+uFhCcsXG5cdCdtb250aHMnICA6ICfsm5QnLFxuXHQnZGF5cycgICAgOiAn7J28Jyxcblx0J2hvdXJzJyAgIDogJ+yLnCcsXG5cdCdtaW51dGVzJyA6ICfrtoQnLFxuXHQnc2Vjb25kcycgOiAn7LSIJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2tvJywgJ2tvLWtyJywgJ2tvcmVhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBMYXR2aWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRHV0Y2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ2xhdCcsXG5cdCdtb250aHMnICA6ICdtaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnZG5pJyxcblx0J2hvdXJzJyAgIDogJ2dvZHppbicsXG5cdCdtaW51dGVzJyA6ICdtaW51dCcsXG5cdCdzZWNvbmRzJyA6ICdzZWt1bmQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncHQnLCAncHQtYnInLCAncG9ydHVndWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSdXNzaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNsb3ZhayBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzdicsICdzdi1zZScsICdzd2VkaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUaGFpIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRoYWkgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHVya2lzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1nEsWwnLFxuXHQnbW9udGhzJyAgOiAnQXknLFxuXHQnZGF5cycgICAgOiAnR8O8bicsXG5cdCdob3VycycgICA6ICdTYWF0Jyxcblx0J21pbnV0ZXMnIDogJ0Rha2lrYScsXG5cdCdzZWNvbmRzJyA6ICdTYW5peWUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9GA0L7QutC4JyxcbiAgICAnbW9udGhzJyAgOiAn0LzRltGB0Y/RhtGWJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdGWJyxcbiAgICAnaG91cnMnICAgOiAn0LPQvtC00LjQvdC4JyxcbiAgICAnbWludXRlcycgOiAn0YXQstC40LvQuNC90LgnLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LTQuCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd1YScsICd1YS11YScsICd1a3JhaW5lJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENoaW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCJpbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi4vRmFjZXMnO1xuaW1wb3J0IHsgT3JpZ2luYWwgfSBmcm9tICcuLi9UaGVtZXMnO1xuaW1wb3J0IHsgRW5nbGlzaCB9IGZyb20gJy4uL0xhbmd1YWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiBDb3VudGVyLFxuICAgIHRoZW1lOiBPcmlnaW5hbCxcbiAgICBsYW5ndWFnZTogRW5nbGlzaFxufTtcbiIsImltcG9ydCBGYWNlIGZyb20gJy4vRmFjZXMvRmFjZSc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi9IZWxwZXJzL1ZhbGlkYXRlJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgRmFjZVZhbHVlIGZyb20gJy4vQ29tcG9uZW50cy9GYWNlVmFsdWUnO1xuaW1wb3J0IERlZmF1bHRWYWx1ZXMgZnJvbSAnLi9Db25maWcvRGVmYXVsdFZhbHVlcyc7XG5pbXBvcnQgRG9tQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50cy9Eb21Db21wb25lbnQnO1xuaW1wb3J0IENvbnNvbGVNZXNzYWdlcyBmcm9tICcuL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGlwQ2xvY2sgZXh0ZW5kcyBEb21Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBmYWNlOiBEZWZhdWx0VmFsdWVzLmZhY2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgRmFjZVZhbHVlID8gdmFsdWUgOiBGYWNlVmFsdWUubWFrZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRmYWNlO1xuICAgIH1cblxuICAgIHNldCBmYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmKCF2YWxpZGF0ZSh2YWx1ZSwgW0ZhY2UsICdmdW5jdGlvbiddKSkge1xuICAgICAgICAgICAgZXJyb3IoQ29uc29sZU1lc3NhZ2VzLmZhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZmFjZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBuZXcgdmFsdWUodGhpcykgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVmYXVsdEZhY2UoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVzLmZhY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRGYWNlKHZhbHVlKSB7XG4gICAgICAgIHZhbGlkYXRlKHZhbHVlLCBbRmFjZSwgJ2Z1bmN0aW9uJ10pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdFZhbHVlcy5mYWNlID0gdmFsdWU7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRmxpcENsb2NrIGZyb20gJy4vanMvRmxpcENsb2NrJztcblxuLy8gaW1wb3J0IF9fIGZyb20gJy4vanMvSGVscGVycy9UcmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBGbGlwQ2xvY2s7XG5cbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL2pzL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuXG5pbXBvcnQgeyBUd2VudHlGb3VySG91ckNsb2NrIH0gZnJvbSAnLi9qcy9GYWNlcyc7XG5cbmNvbnN0IGl0ZW0gPSBuZXcgRmxpcENsb2NrKDEwMCk7XG5cbmNvbnNvbGUubG9nKGl0ZW0pO1xuIl0sIm5hbWVzIjpbIkZhY2UiLCJjbG9jayIsIiRjbG9jayIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiY2FsbGJhY2siLCJmbiIsImlzRnVuY3Rpb24iLCJhcHBseSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsIm5vb3AiLCJ2YWx1ZSIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwiY29uY2F0TWFwIiwieCIsIm1hcCIsInJlZHVjZSIsInkiLCJjb25jYXQiLCJmbGF0dGVuIiwiZGVlcEZsYXR0ZW4iLCJBcnJheSIsImlzQXJyYXkiLCJpc0NsYXNzIiwiRnVuY3Rpb24iLCJuYW1lIiwiaXNTdHJpbmciLCJpc09iamVjdCIsIk9iamVjdCIsInZhbGlkYXRlIiwic3VjY2VzcyIsImFyZ3MiLCJmb3JFYWNoIiwiYXJnIiwiQ29tcG9uZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsImtleSIsImhhc093blByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZXMiLCJpIiwiZGlnaXRpemUiLCJvcHRpb25zIiwiYXNzaWduIiwibWluaW11bURpZ2l0cyIsInByZXBlbmRMZWFkaW5nWmVybyIsInByZXBlbmQiLCJudW1iZXIiLCJzaG91bGRQcmVwZW5kWmVybyIsInRvU3RyaW5nIiwic3BsaXQiLCJsZW5ndGgiLCJkaWdpdHMiLCJhcnIiLCJtaW4iLCJ1bnNoaWZ0IiwiRmFjZVZhbHVlIiwiJGRpZ2l0cyIsIiR2YWx1ZSIsIkNvdW50ZXIiLCJUd2VudHlGb3VySG91ckNsb2NrIiwid2hlbiIsImNvbmRpdGlvbiIsImh0bWwiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImZpbHRlciIsImpvaW4iLCJjb250ZW50IiwiZmlyc3RDaGlsZCIsImluc3RhbmNlIiwiZWxlbWVudCIsImxhYmVsIiwidCIsInJhbmdlcyIsIm1heCIsImZvcm1hdCIsInR5cGUiLCJwYXJzZUZsb2F0IiwiZmluZFJhbmdlIiwiY2hhciIsImNvZGUiLCJjaGFyQ29kZUF0IiwiY2hhckNvZGUiLCJyYW5nZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByZXYiLCJjb252ZXJ0ZWQiLCJmcm9tIiwibGFuZ3VhZ2UiLCJkaWN0aW9uYXJ5IiwiaXRlbXMiLCJ0aGVtZSIsImZhY2UiLCJEb21Db21wb25lbnQiLCJEZWZhdWx0VmFsdWVzIiwidHJhbnNsYXRlIiwiY29uc3RydWN0b3IiLCIkdGhlbWUiLCJDb25zb2xlTWVzc2FnZXMiLCIkbGFuZ3VhZ2UiLCJMaXN0SXRlbSIsIm1ha2UiLCJpdGVtIiwicmVuZGVyIiwib3V0ZXJIVE1MIiwiRGl2aWRlciIsIkxpc3QiLCJhbGlhc2VzIiwiT3JpZ2luYWwiLCJFbmdsaXNoIiwiRmxpcENsb2NrIiwiJGZhY2UiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQXFCQSxPQUVqQixjQUFZQyxLQUFaLEVBQW1CO0VBQUE7O0VBQ2YsT0FBS0MsTUFBTCxHQUFjRCxLQUFkO0VBQ0g7O0VDSkUsU0FBU0UsT0FBVCxDQUFlQyxPQUFmLEVBQXdCO0VBQzNCLFFBQU0sSUFBSUMsS0FBSixDQUFVRCxPQUFWLENBQU47RUFDSDtBQUVELEVBQU8sU0FBU0UsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7RUFDekIsTUFBR0MsVUFBVSxDQUFDRCxFQUFELENBQWIsRUFBbUI7RUFDZixXQUFPQSxFQUFFLENBQUNFLEtBQUgsQ0FBUyxJQUFULEVBQWUsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNDLFNBQWQsRUFBeUJGLEtBQXpCLENBQStCLENBQS9CLENBQWYsQ0FBUDtFQUNIO0VBQ0o7QUFFRCxFQUFPLFNBQVNHLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtFQUN4QixTQUFPLENBQUNDLFdBQVcsQ0FBQ0QsS0FBRCxDQUFaLElBQXVCLENBQUNFLE1BQU0sQ0FBQ0YsS0FBRCxDQUFyQztFQUNIO0FBRUQsRUFBTyxTQUFTRyxTQUFULENBQW1CVixFQUFuQixFQUF1QjtFQUMxQixTQUFPLFVBQUFXLENBQUMsRUFBSTtFQUNS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
