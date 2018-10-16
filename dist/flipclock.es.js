(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
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

function error(message) {
  throw new Error(message);
}
function validate$1(value) {
  for (var _len = arguments.length, conditions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    conditions[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {

    for (var i in conditions) {
      var condition = conditions[i];

      if (!!(isFunction(condition) && condition(value)) || isString(condition) && _typeof(value) === condition) {
        resolve();
      }
    }

    reject(error);
  });
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

function element (value) {
  var template = document.createElement('template');
  template.innerHTML = isArray(value) ? value.filter(function (value) {
    return !!value;
  }).join('') : value;
  return template.content.firstChild;
}

function Divider (instance) {
  var dots = !instance.excludeDots ? ['<span class="flip-clock-dot top"></span>', '<span class="flip-clock-dot bottom"></span>'].join('') : '';
  return element(['<span class="flip-clock-divider">', '<span class="flip-clock-label">' + instance.t(instance.label) + '</span>', dots, '</span>']);
}

function List (instance) {
  return element('<div class="flip-clock-list"></div>');
}

function ListItem (instance) {
  return element(['<div class="flip-clock-list-item">', '<div class="flip-clock-list-item-inner">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + instance.value + '</div>', '</div>', '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + instance.value + '</div>', '</div>', '</div>', '</div>']);
}

var index = {
  Divider: Divider,
  List: List,
  ListItem: ListItem
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

var enUs = /*#__PURE__*/Object.freeze({
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
  theme: index,
  language: enUs
};

var ConsoleMessages = {
  face: 'The face must be an object.',
  theme: 'The theme must be an object.',
  language: 'The language must be an object.'
};

var Component =
/*#__PURE__*/
function () {
  function Component() {
    var _this = this;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.filter(function (value) {
      return !!value;
    }).forEach(function (value, i) {
      console.log(i, value);

      _this.setAttribute(i, value);
    });
  }

  _createClass(Component, [{
    key: "getAttributes",
    value: function getAttributes() {
      var _this2 = this;

      return Object.getOwnPropertyNames(this).map(function (attribute) {
        return _this2.getAttribute(attribute);
      });
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(key) {
      return this.hasOwnProperty(key) ? this[key] : null;
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
        this.setAttribute(i, key[i]);
      }
    }
  }, {
    key: "callback",
    value: function callback(fn) {
      if (isFunction(fn)) {
        fn.apply(this, [].slice.call(arguments).slice(1));
      }
    }
  }, {
    key: "theme",
    get: function get() {
      return this.$language;
    },
    set: function set(value) {
      var _this3 = this;

      validate(value, 'object').then(function () {
        _this3.$theme = value;
      }, function (error$$1) {
        error$$1(ConsoleMessages.value);
      });
    }
  }, {
    key: "language",
    get: function get() {
      return this.$language;
    },
    set: function set(value) {
      var _this4 = this;

      validate(value, 'object').then(function () {
        _this4.$language = value;
      }, function (error$$1) {
        error$$1(ConsoleMessages.language);
      });
    }
  }], [{
    key: "getDefaultTheme",
    value: function getDefaultTheme() {
      return DefaultValues.theme;
    }
  }, {
    key: "setDefaultTheme",
    value: function setDefaultTheme(value) {
      validate(value, 'object').then(function () {
        DefaultValues.theme = value;
      }, function (error$$1) {
        error$$1(ConsoleMessages.theme);
      });
    }
  }, {
    key: "getDefaultLanguage",
    value: function getDefaultLanguage() {
      return DefaultValues.language;
    }
  }, {
    key: "setDefaultLanguage",
    value: function setDefaultLanguage(value) {
      validate(value, 'object').then(function () {
        DefaultValues.language = value;
      }, function (error$$1) {
        error$$1(ConsoleMessages.language);
      });
    }
  }, {
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

var Face =
/*#__PURE__*/
function (_Component) {
  _inherits(Face, _Component);

  function Face() {
    _classCallCheck(this, Face);

    return _possibleConstructorReturn(this, _getPrototypeOf(Face).apply(this, arguments));
  }

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



var faces = /*#__PURE__*/Object.freeze({
  Counter: Counter,
  TwentyFourHourClock: TwentyFourHourClock
});

var FaceValue =
/*#__PURE__*/
function (_Component) {
  _inherits(FaceValue, _Component);

  function FaceValue(value, attributes) {
    _classCallCheck(this, FaceValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(FaceValue).call(this, Object.assign({
      original: value || null
    }, attributes)));
  }

  _createClass(FaceValue, null, [{
    key: "make",
    value: function make(value, attributes) {
      if (value instanceof this) {
        return value;
      }

      return new this(value, attributes);
    }
  }]);

  return FaceValue;
}(Component);

function face(value, _default) {
  return isString(value) ? faces[value] || _default : value;
}

var FlipClock =
/*#__PURE__*/
function (_Component) {
  _inherits(FlipClock, _Component);

  function FlipClock(value, attributes) {
    _classCallCheck(this, FlipClock);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlipClock).call(this, Object.assign({
      value: value,
      face: DefaultValues.face,
      theme: DefaultValues.theme,
      language: DefaultValues.language
    }, attributes)));
  }

  _createClass(FlipClock, [{
    key: "value",
    get: function get() {
      return this.$value;
    },
    set: function set(value) {
      this.$value = FaceValue.make(value);
    }
  }, {
    key: "face",
    get: function get() {
      return this.$face;
    },
    set: function set(value) {
      var _this = this;

      validate$1(value, 'string', 'function').then(function () {
        _this.$face = face(value, _this.constructor.getDefaultFace());
      }, function (error$$1) {
        error$$1(ConsoleMessages.face);
      });
    }
  }], [{
    key: "getDefaultFace",
    value: function getDefaultFace() {
      return DefaultValues.face;
    }
  }, {
    key: "setDefaultFace",
    value: function setDefaultFace(value) {
      validate$1(value, 'string', 'function').then(function () {
        DefaultValues.face = face(value, DefaultValues.face);
      }, function (error$$1) {
        error$$1(ConsoleMessages.face);
      });
    }
  }]);

  return FlipClock;
}(Component);

var ListItem$1 =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(value, attributes) {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, Object.assign({
      value: value
    }, attributes)));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      return this.theme(this.constructor.name);
    }
  }]);

  return ListItem;
}(Component);

var ListItem$2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(value, attributes) {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, Object.assign({
      value: value
    }, attributes)));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      return this.theme(this.constructor.name);
    }
  }]);

  return ListItem;
}(Component);

var Timer =
/*#__PURE__*/
function (_Component) {
  _inherits(Timer, _Component);

  function Timer(interval) {
    var _this;

    _classCallCheck(this, Timer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timer).call(this));
    _this.count = 0;
    _this.handle = null;
    _this.started = null;
    _this.running = false;
    _this.interval = interval;
    return _this;
  }
  /**
   * Gets the elapsed the time as an interger
   *
   * @return	Integer
   */


  _createClass(Timer, [{
    key: "getElapsed",
    value: function getElapsed() {
      return this.count * this.interval;
    }
    /**
     * Returns true is the timer is running, and false if it's not
     *
     * @return	Boolean
     */

  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running === true;
    }
    /**
     * Returns true is the timer is not running, and false if it is
     *
     * @return	Boolean
     */

  }, {
    key: "isStopped",
    value: function isStopped() {
      return this.running === false;
    }
    /**
     * Resets the timer. This method is chainable.
     *
     * @param 	Function  callback
     * @return	this
     */

  }, {
    key: "reset",
    value: function reset(callback) {
      var _this2 = this;

      this.stop(function () {
        _this2.count = 0;

        _this2.start(function () {
          return _this2.callback(callback);
        });
      });
      return this;
    }
    /**
     * Starts the timer. This method is chainable.
     *
     * @param 	Function  callback
     * @return	this
     */

  }, {
    key: "start",
    value: function start(callback) {
      var _this3 = this;

      this.started = Date.now();
      this.running = true;

      var loop = function loop() {
        if (Date.now() - _this3.started >= _this3.interval) {
          _this3.started = Date.now();

          _this3.callback(callback);

          _this3.count++;
        }

        _this3.handle = window.requestAnimationFrame(loop);
        return _this3;
      };

      return loop();
    }
    /**
     * Stops the timer. This method is chainable.
     *
     * @param 	Function  callback
     * @return	this
     */

  }, {
    key: "stop",
    value: function stop(callback) {
      var _this4 = this;

      if (this.isRunning()) {
        setTimeout(function () {
          window.cancelAnimationFrame(_this4.handle);
          _this4.running = false;

          _this4.callback(callback);
        });
      }

      return this;
    }
  }]);

  return Timer;
}(Component);

FlipClock.setDefaultFace('TwentyFourHourClock');
FlipClock.setDefaultFace('test');
var item = new FlipClock(100, {
  face: 'test'
});
console.log(item);

export default FlipClock;
export { Face, ListItem$1 as List, ListItem$2 as ListItem, Timer };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcGNsb2NrLmVzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvSGVscGVycy9GdW5jdGlvbnMuanMiLCIuLi9zcmMvanMvSGVscGVycy9FbGVtZW50LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9EaXZpZGVyLmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0LmpzIiwiLi4vc3JjL2pzL1RoZW1lcy9PcmlnaW5hbC9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9UaGVtZXMvT3JpZ2luYWwvaW5kZXguanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2FyLWFyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9jcy1jei5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZGEtZGsuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2RlLWRlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9lbi11cy5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZXMtZXMuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2ZhLWlyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9maS1maS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvZnItY2EuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2hlLWlsLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9odS1odS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvaXQtaXQuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL2phLWpwLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9rby1rci5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvbHYtbHYuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL25sLWJlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9uby1uYi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvcGwtcGwuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3B0LWJyLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy9ydS1ydS5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvc2stc2suanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3N2LXNlLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy90aC10aC5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvdHItdHIuanMiLCIuLi9zcmMvanMvTGFuZ3VhZ2VzL3VhLXVhLmpzIiwiLi4vc3JjL2pzL0xhbmd1YWdlcy96aC1jbi5qcyIsIi4uL3NyYy9qcy9MYW5ndWFnZXMvemgtdHcuanMiLCIuLi9zcmMvanMvQ29uZmlnL0RlZmF1bHRWYWx1ZXMuanMiLCIuLi9zcmMvanMvQ29uZmlnL0NvbnNvbGVNZXNzYWdlcy5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0NvbXBvbmVudC5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0ZhY2UuanMiLCIuLi9zcmMvanMvRmFjZXMvQ291bnRlci5qcyIsIi4uL3NyYy9qcy9GYWNlcy9Ud2VudHlGb3VySG91ckNsb2NrLmpzIiwiLi4vc3JjL2pzL0NvbXBvbmVudHMvRmFjZVZhbHVlLmpzIiwiLi4vc3JjL2pzL0ZsaXBDbG9jay5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL0xpc3QuanMiLCIuLi9zcmMvanMvQ29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIi4uL3NyYy9qcy9Db21wb25lbnRzL1RpbWVyLmpzIiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgLi4uY29uZGl0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gY29uZGl0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gY29uZGl0aW9uc1tpXTtcblxuICAgICAgICAgICAgaWYoKFxuICAgICAgICAgICAgICAgICEhKGlzRnVuY3Rpb24oY29uZGl0aW9uKSAmJiBjb25kaXRpb24odmFsdWUpKSB8fFxuICAgICAgICAgICAgICAgIChpc1N0cmluZyhjb25kaXRpb24pICYmICh0eXBlb2YgdmFsdWUgPT09IGNvbmRpdGlvbikpXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVjZmlyc3Qoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGlzQXJyYXkodmFsdWUpID9cblx0XHR2YWx1ZS5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSkuam9pbignJykgOiB2YWx1ZTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG59XG4iLCJpbXBvcnQgZWxlbWVudCBmcm9tICcuLi8uLi9IZWxwZXJzL0VsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IGRvdHMgPSAhaW5zdGFuY2UuZXhjbHVkZURvdHMgPyBbXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImZsaXAtY2xvY2stZG90IHRvcFwiPjwvc3Bhbj4nLFxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJmbGlwLWNsb2NrLWRvdCBib3R0b21cIj48L3NwYW4+J1xuICAgIF0uam9pbignJykgOiAnJztcblxuICAgIHJldHVybiBlbGVtZW50KFtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiZmxpcC1jbG9jay1kaXZpZGVyXCI+JyxcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZsaXAtY2xvY2stbGFiZWxcIj4nK2luc3RhbmNlLnQoaW5zdGFuY2UubGFiZWwpKyc8L3NwYW4+JyxcbiAgICAgICAgICAgIGRvdHMsXG4gICAgICAgICc8L3NwYW4+J1xuICAgIF0pO1xufVxuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnLi4vLi4vSGVscGVycy9FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZWxlbWVudCgnPGRpdiBjbGFzcz1cImZsaXAtY2xvY2stbGlzdFwiPjwvZGl2PicpO1xufVxuIiwiaW1wb3J0IGVsZW1lbnQgZnJvbSAnLi4vLi4vSGVscGVycy9FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZWxlbWVudChbXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZmxpcC1jbG9jay1saXN0LWl0ZW1cIj4nLFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmbGlwLWNsb2NrLWxpc3QtaXRlbS1pbm5lclwiPicsXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ1cFwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2hhZG93XCI+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbm5cIj4nK2luc3RhbmNlLnZhbHVlKyc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZG93blwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2hhZG93XCI+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpbm5cIj4nK2luc3RhbmNlLnZhbHVlKyc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICc8L2Rpdj4nXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERpdmlkZXIsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbVxufTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEFyYWJpYyBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBBcmFiaWMgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICfYs9mG2YjYp9iqJyxcbiAgICAnbW9udGhzJyAgOiAn2LTZh9mI2LEnLFxuICAgICdkYXlzJyAgICA6ICfYo9mK2KfZhScsXG4gICAgJ2hvdXJzJyAgIDogJ9iz2KfYudin2KonLFxuICAgICdtaW51dGVzJyA6ICfYr9mC2KfYptmCJyxcbiAgICAnc2Vjb25kcycgOiAn2KvZiNin2YbZiidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydhcicsICdhci1hcicsICdhcmFiaWMnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEN6ZWNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEN6ZWNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnUm9reScsXG4gICAgJ21vbnRocycgIDogJ03Em3PDrWNlJyxcbiAgICAnZGF5cycgICAgOiAnRG55JyxcbiAgICAnaG91cnMnICAgOiAnSG9kaW55JyxcbiAgICAnbWludXRlcycgOiAnTWludXR5JyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydjcycsICdjcy1jeicsICdjeicsICdjei1jcycsICdjemVjaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIERhbmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZScsXG5cdCdob3VycycgICA6ICdUaW1lcicsXG5cdCdtaW51dGVzJyA6ICdNaW51dHRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEdlcm1hbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBHZXJtYW4gbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnSmFocmUnLFxuXHQnbW9udGhzJyAgOiAnTW9uYXRlJyxcblx0J2RheXMnICAgIDogJ1RhZ2UnLFxuXHQnaG91cnMnICAgOiAnU3R1bmRlbicsXG5cdCdtaW51dGVzJyA6ICdNaW51dGVuJyxcblx0J3NlY29uZHMnIDogJ1Nla3VuZGVuJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2RlJywgJ2RlLWRlJywgJ2dlcm1hbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRW5nbGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBFbmdsaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1llYXJzJyxcblx0J21vbnRocycgIDogJ01vbnRocycsXG5cdCdkYXlzJyAgICA6ICdEYXlzJyxcblx0J2hvdXJzJyAgIDogJ0hvdXJzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0ZXMnLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlbicsICdlbi11cycsICdlbmdsaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBTcGFuaXNoIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQcOxb3MnLFxuXHQnbW9udGhzJyAgOiAnTWVzZXMnLFxuXHQnZGF5cycgICAgOiAnRMOtYXMnLFxuXHQnaG91cnMnICAgOiAnSG9yYXMnLFxuXHQnbWludXRlcycgOiAnTWludXRvcycsXG5cdCdzZWNvbmRzJyA6ICdTZWd1bmRvcydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydlcycsICdlcy1lcycsICdzcGFuaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQZXJzaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn2LPYp9mEJyxcblx0J21vbnRocycgIDogJ9mF2KfZhycsXG5cdCdkYXlzJyAgICA6ICfYsdmI2LInLFxuXHQnaG91cnMnICAgOiAn2LPYp9i52KonLFxuXHQnbWludXRlcycgOiAn2K/ZgtuM2YLZhycsXG5cdCdzZWNvbmRzJyA6ICfYq9in2YbbjNmHJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZhJywgJ2ZhLWlyJywgJ3BlcnNpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEZpbm5pc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRmlubmlzaCBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdWdW90dGEnLFxuXHQnbW9udGhzJyAgOiAnS3V1a2F1dHRhJyxcblx0J2RheXMnICAgIDogJ1DDpGl2w6TDpCcsXG5cdCdob3VycycgICA6ICdUdW50aWEnLFxuXHQnbWludXRlcycgOiAnTWludXV0dGlhJyxcblx0J3NlY29uZHMnIDogJ1Nla3VudGlhJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2ZpJywgJ2ZpLWZpJywgJ2Zpbm5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIENhbmFkaWFuIEZyZW5jaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBDYW5hZGlhbiBGcmVuY2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdBbnMnLFxuICAgICdtb250aHMnICA6ICdNb2lzJyxcbiAgICAnZGF5cycgICAgOiAnSm91cnMnLFxuICAgICdob3VycycgICA6ICdIZXVyZXMnLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnZnInLCAnZnItY2EnLCAnZnJlbmNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIZWJyZXcgTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgQ2FuYWRpYW4gRnJlbmNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ9ep16DXmdedJyxcblx0J21vbnRocycgIDogJ9eX15XXk9epJyxcblx0J2RheXMnICAgIDogJ9eZ157XmdedJyxcblx0J2hvdXJzJyAgIDogJ9ep16LXldeqJyxcblx0J21pbnV0ZXMnIDogJ9eT16fXldeqJyxcblx0J3NlY29uZHMnIDogJ9ep16DXmdeV16onXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnaWwnLCAnaGUtaWwnLCAnaGVicmV3J107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBIdW5nYXJpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSHVuZ2FyaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OJdicsXG4gICAgJ21vbnRocycgIDogJ0jDs25hcCcsXG4gICAgJ2RheXMnICAgIDogJ05hcCcsXG4gICAgJ2hvdXJzJyAgIDogJ8OTcmEnLFxuICAgICdtaW51dGVzJyA6ICdQZXJjJyxcbiAgICAnc2Vjb25kcycgOiAnTcOhc29kcGVyYydcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydodScsICdodS1odScsICdodW5nYXJpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEl0YWxpYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgSXRhbGlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICdBbm5pJyxcblx0J21vbnRocycgIDogJ01lc2knLFxuXHQnZGF5cycgICAgOiAnR2lvcm5pJyxcblx0J2hvdXJzJyAgIDogJ09yZScsXG5cdCdtaW51dGVzJyA6ICdNaW51dGknLFxuXHQnc2Vjb25kcycgOiAnU2Vjb25kaSdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydkYScsICdkYS1kaycsICdkYW5pc2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIEphcGFuZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIEphcGFuZXNlIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2pwJywgJ2phLWpwJywgJ2phcGFuZXNlJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBLb3JlYW4gTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgS29yZWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+uFhCcsXG5cdCdtb250aHMnICA6ICfsm5QnLFxuXHQnZGF5cycgICAgOiAn7J28Jyxcblx0J2hvdXJzJyAgIDogJ+yLnCcsXG5cdCdtaW51dGVzJyA6ICfrtoQnLFxuXHQnc2Vjb25kcycgOiAn7LSIJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ2tvJywgJ2tvLWtyJywgJ2tvcmVhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgTGF0dmlhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBMYXR2aWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAnR2FkaScsXG4gICAgJ21vbnRocycgIDogJ03Ek25lxaFpJyxcbiAgICAnZGF5cycgICAgOiAnRGllbmFzJyxcbiAgICAnaG91cnMnICAgOiAnU3R1bmRhcycsXG4gICAgJ21pbnV0ZXMnIDogJ01pbsWrdGVzJyxcbiAgICAnc2Vjb25kcycgOiAnU2VrdW5kZXMnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbHYnLCAnbHYtbHYnLCAnbGF0dmlhbiddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgRHV0Y2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgRHV0Y2ggbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuICAgICd5ZWFycycgICA6ICdKYXJlbicsXG4gICAgJ21vbnRocycgIDogJ01hYW5kZW4nLFxuICAgICdkYXlzJyAgICA6ICdEYWdlbicsXG4gICAgJ2hvdXJzJyAgIDogJ1VyZW4nLFxuICAgICdtaW51dGVzJyA6ICdNaW51dGVuJyxcbiAgICAnc2Vjb25kcycgOiAnU2Vjb25kZW4nXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbmwnLCAnbmwtYmUnLCAnZHV0Y2gnXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIE5vcndlZ2lhbi1Cb2ttw6VsIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIE5vcndlZ2lhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG5cdCd5ZWFycycgICA6ICfDhXInLFxuXHQnbW9udGhzJyAgOiAnTcOlbmVkZXInLFxuXHQnZGF5cycgICAgOiAnRGFnZXInLFxuXHQnaG91cnMnICAgOiAnVGltZXInLFxuXHQnbWludXRlcycgOiAnTWludXR0ZXInLFxuXHQnc2Vjb25kcycgOiAnU2VrdW5kZXInXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnbm8nLCAnbmInLCAnbm8tbmInLCAnbm9yd2VnaWFuJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb2xpc2ggTGFuZ3VhZ2UgUGFja1xuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB1c2VkIHRvIHRyYW5zbGF0ZSB0b2tlbnMgaW50byB0aGUgUG9saXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ2xhdCcsXG5cdCdtb250aHMnICA6ICdtaWVzacSZY3knLFxuXHQnZGF5cycgICAgOiAnZG5pJyxcblx0J2hvdXJzJyAgIDogJ2dvZHppbicsXG5cdCdtaW51dGVzJyA6ICdtaW51dCcsXG5cdCdzZWNvbmRzJyA6ICdzZWt1bmQnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncGwnLCAncGwtcGwnLCAncG9saXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBQb3J0dWd1ZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFBvcnR1Z3Vlc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnQW5vcycsXG5cdCdtb250aHMnICA6ICdNZXNlcycsXG5cdCdkYXlzJyAgICA6ICdEaWFzJyxcblx0J2hvdXJzJyAgIDogJ0hvcmFzJyxcblx0J21pbnV0ZXMnIDogJ01pbnV0b3MnLFxuXHQnc2Vjb25kcycgOiAnU2VndW5kb3MnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsncHQnLCAncHQtYnInLCAncG9ydHVndWVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgUnVzc2lhbiBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBSdXNzaWFuIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcbiAgICAneWVhcnMnICAgOiAn0LvQtdGCJyxcbiAgICAnbW9udGhzJyAgOiAn0LzQtdGB0Y/RhtC10LInLFxuICAgICdkYXlzJyAgICA6ICfQtNC90LXQuScsXG4gICAgJ2hvdXJzJyAgIDogJ9GH0LDRgdC+0LInLFxuICAgICdtaW51dGVzJyA6ICfQvNC40L3Rg9GCJyxcbiAgICAnc2Vjb25kcycgOiAn0YHQtdC60YPQvdC0J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3J1JywgJ3J1LXJ1JywgJ3J1c3NpYW4nXTtcbiIsIi8qKlxuICogRmxpcENsb2NrIFNsb3ZhayBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTbG92YWsgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAnUm9reScsXG5cdCdtb250aHMnICA6ICdNZXNpYWNlJyxcblx0J2RheXMnICAgIDogJ0RuaScsXG5cdCdob3VycycgICA6ICdIb2RpbnknLFxuXHQnbWludXRlcycgOiAnTWluw7p0eScsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3NrJywgJ3NrLXNrJywgJ3Nsb3ZhayddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgU3dlZGlzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBTd2VkaXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ8OFcicsXG5cdCdtb250aHMnICA6ICdNw6VuYWRlcicsXG5cdCdkYXlzJyAgICA6ICdEYWdhcicsXG5cdCdob3VycycgICA6ICdUaW1tYXInLFxuXHQnbWludXRlcycgOiAnTWludXRlcicsXG5cdCdzZWNvbmRzJyA6ICdTZWt1bmRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWydzdicsICdzdi1zZScsICdzd2VkaXNoJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBUaGFpIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFRoYWkgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn4Lib4Li1Jyxcblx0J21vbnRocycgIDogJ+C5gOC4lOC4t+C4reC4mScsXG5cdCdkYXlzJyAgICA6ICfguKfguLHguJknLFxuXHQnaG91cnMnICAgOiAn4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcblx0J21pbnV0ZXMnIDogJ+C4meC4suC4l+C4tScsXG5cdCdzZWNvbmRzJyA6ICfguKfguLTguJnguLLguJfguLUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndGgnLCAndGgtdGgnLCAndGhhaSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHVya2lzaCBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUdXJraXNoIGxhbmd1YWdlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ1nEsWwnLFxuXHQnbW9udGhzJyAgOiAnQXknLFxuXHQnZGF5cycgICAgOiAnR8O8bicsXG5cdCdob3VycycgICA6ICdTYWF0Jyxcblx0J21pbnV0ZXMnIDogJ0Rha2lrYScsXG5cdCdzZWNvbmRzJyA6ICdTYW5peWUnXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsndHInLCAndHItdHInLCAndHVya2lzaCddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVWtyYWluaWFuIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIFVrcmFpbmlhbiBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpY3Rpb25hcnkgPSB7XG4gICAgJ3llYXJzJyAgIDogJ9GA0L7QutC4JyxcbiAgICAnbW9udGhzJyAgOiAn0LzRltGB0Y/RhtGWJyxcbiAgICAnZGF5cycgICAgOiAn0LTQvdGWJyxcbiAgICAnaG91cnMnICAgOiAn0LPQvtC00LjQvdC4JyxcbiAgICAnbWludXRlcycgOiAn0YXQstC40LvQuNC90LgnLFxuICAgICdzZWNvbmRzJyA6ICfRgdC10LrRg9C90LTQuCdcbn07XG5cbmV4cG9ydCBjb25zdCBhbGlhc2VzID0gWyd1YScsICd1YS11YScsICd1a3JhaW5lJ107XG4iLCIvKipcbiAqIEZsaXBDbG9jayBDaGluZXNlIExhbmd1YWdlIFBhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdXNlZCB0byB0cmFuc2xhdGUgdG9rZW5zIGludG8gdGhlIENoaW5lc2UgbGFuZ3VhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWN0aW9uYXJ5ID0ge1xuXHQneWVhcnMnICAgOiAn5bm0Jyxcblx0J21vbnRocycgIDogJ+aciCcsXG5cdCdkYXlzJyAgICA6ICfml6UnLFxuXHQnaG91cnMnICAgOiAn5pe2Jyxcblx0J21pbnV0ZXMnIDogJ+WIhicsXG5cdCdzZWNvbmRzJyA6ICfnp5InXG59O1xuXG5leHBvcnQgY29uc3QgYWxpYXNlcyA9IFsnemgnLCAnemgtY24nLCAnY2hpbmVzZSddO1xuIiwiLyoqXG4gKiBGbGlwQ2xvY2sgVHJhZGl0aW9uYWwgQ2hpbmVzZSBMYW5ndWFnZSBQYWNrXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHVzZWQgdG8gdHJhbnNsYXRlIHRva2VucyBpbnRvIHRoZSBUcmFkaXRpb25hbCBDaGluZXNlLlxuICovXG5leHBvcnQgY29uc3QgZGljdGlvbmFyeSA9IHtcblx0J3llYXJzJyAgIDogJ+W5tCcsXG5cdCdtb250aHMnICA6ICfmnIgnLFxuXHQnZGF5cycgICAgOiAn5pelJyxcblx0J2hvdXJzJyAgIDogJ+aZgicsXG5cdCdtaW51dGVzJyA6ICfliIYnLFxuXHQnc2Vjb25kcycgOiAn56eSJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWFzZXMgPSBbJ3poLXR3J107XG4iLCJpbXBvcnQgKiBhcyBmYWNlcyBmcm9tICcuLi9GYWNlcyc7XG5pbXBvcnQgKiBhcyB0aGVtZXMgZnJvbSAnLi4vVGhlbWVzJztcbmltcG9ydCAqIGFzIGxhbmd1YWdlcyBmcm9tICcuLi9MYW5ndWFnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmFjZTogZmFjZXMuQ291bnRlcixcbiAgICB0aGVtZTogdGhlbWVzLk9yaWdpbmFsLFxuICAgIGxhbmd1YWdlOiBsYW5ndWFnZXMuRW5nbGlzaFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBmYWNlOiAnVGhlIGZhY2UgbXVzdCBiZSBhbiBvYmplY3QuJyxcbiAgICB0aGVtZTogJ1RoZSB0aGVtZSBtdXN0IGJlIGFuIG9iamVjdC4nLFxuICAgIGxhbmd1YWdlOiAnVGhlIGxhbmd1YWdlIG11c3QgYmUgYW4gb2JqZWN0Lidcbn07XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgRGVmYXVsdFZhbHVlcyBmcm9tICcuLi9Db25maWcvRGVmYXVsdFZhbHVlcyc7XG5pbXBvcnQgQ29uc29sZU1lc3NhZ2VzIGZyb20gJy4uL0NvbmZpZy9Db25zb2xlTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBhcmdzLmZpbHRlcih2YWx1ZSA9PiAhIXZhbHVlKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgdmFsdWUpO1xuXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShpLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5tYXAoYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KGtleSkgPyB0aGlzW2tleV0gOiBudWxsO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhrZXkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZXModmFsdWVzKSB7XG4gICAgICAgIGZvcihjb25zdCBpIGluIHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoaSwga2V5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxiYWNrKGZuKSB7XG4gICAgICAgIGlmKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc2xpY2UoMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgc2V0IHRoZW1lKHZhbHVlKSB7XG4gICAgICAgIHZhbGlkYXRlKHZhbHVlLCAnb2JqZWN0JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiR0aGVtZSA9IHZhbHVlO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsYW5ndWFnZTtcbiAgICB9XG5cbiAgICBzZXQgbGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGxhbmd1YWdlID0gdmFsdWU7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5sYW5ndWFnZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlZmF1bHRUaGVtZSgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXMudGhlbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERlZmF1bHRUaGVtZSh2YWx1ZSkge1xuICAgICAgICB2YWxpZGF0ZSh2YWx1ZSwgJ29iamVjdCcpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRGVmYXVsdFZhbHVlcy50aGVtZSA9IHZhbHVlXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy50aGVtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZWZhdWx0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVzLmxhbmd1YWdlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZWZhdWx0TGFuZ3VhZ2UodmFsdWUpIHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWUsICdvYmplY3QnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2UgPSB2YWx1ZVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMubGFuZ3VhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyguLi5hcmdzKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxufVxuIiwiaW1wb3J0IEZhY2UgZnJvbSAnLi4vQ29tcG9uZW50cy9GYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIEZhY2Uge1xuXG5cbn1cbiIsImltcG9ydCBGYWNlIGZyb20gJy4uL0NvbXBvbmVudHMvRmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZW50eUZvdXJIb3VyQ2xvY2sgZXh0ZW5kcyBGYWNlIHtcblxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlVmFsdWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBvcmlnaW5hbDogdmFsdWUgfHwgbnVsbFxuICAgICAgICB9LCBhdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2UodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IHRoaXModmFsdWUsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgZmFjZXMgZnJvbSAnLi9GYWNlcyc7XG5pbXBvcnQgKiBhcyB0aGVtZXMgZnJvbSAnLi9UaGVtZXMnO1xuaW1wb3J0ICogYXMgbGFuZ3VhZ2VzIGZyb20gJy4vTGFuZ3VhZ2VzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBGYWNlVmFsdWUgZnJvbSAnLi9Db21wb25lbnRzL0ZhY2VWYWx1ZSc7XG5pbXBvcnQgRGVmYXVsdFZhbHVlcyBmcm9tICcuL0NvbmZpZy9EZWZhdWx0VmFsdWVzJztcbmltcG9ydCBDb25zb2xlTWVzc2FnZXMgZnJvbSAnLi9Db25maWcvQ29uc29sZU1lc3NhZ2VzJztcblxuZnVuY3Rpb24gZmFjZSh2YWx1ZSwgX2RlZmF1bHQpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gKFxuICAgICAgICBmYWNlc1t2YWx1ZV0gfHwgX2RlZmF1bHRcbiAgICApIDogdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsaXBDbG9jayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzdXBlcihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGZhY2U6IERlZmF1bHRWYWx1ZXMuZmFjZSxcbiAgICAgICAgICAgIHRoZW1lOiBEZWZhdWx0VmFsdWVzLnRoZW1lLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IERlZmF1bHRWYWx1ZXMubGFuZ3VhZ2VcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiR2YWx1ZSA9IEZhY2VWYWx1ZS5tYWtlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGZhY2U7XG4gICAgfVxuXG4gICAgc2V0IGZhY2UodmFsdWUpIHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWUsICdzdHJpbmcnLCAnZnVuY3Rpb24nKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGZhY2UgPSBmYWNlKHZhbHVlLCB0aGlzLmNvbnN0cnVjdG9yLmdldERlZmF1bHRGYWNlKCkpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBlcnJvcihDb25zb2xlTWVzc2FnZXMuZmFjZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZWZhdWx0RmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRWYWx1ZXMuZmFjZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RGVmYXVsdEZhY2UodmFsdWUpIHtcbiAgICAgICAgdmFsaWRhdGUodmFsdWUsICdzdHJpbmcnLCAnZnVuY3Rpb24nKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIERlZmF1bHRWYWx1ZXMuZmFjZSA9IGZhY2UodmFsdWUsIERlZmF1bHRWYWx1ZXMuZmFjZSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGVycm9yKENvbnNvbGVNZXNzYWdlcy5mYWNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcblx0fVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgYXR0cmlidXRlcykpO1xuICAgIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcblx0fVxuXG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWwpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBudWxsO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGVsYXBzZWQgdGhlIHRpbWUgYXMgYW4gaW50ZXJnZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm5cdEludGVnZXJcbiAgICAgKi9cbiAgICBnZXRFbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudCAqIHRoaXMuaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlzIHRoZSB0aW1lciBpcyBydW5uaW5nLCBhbmQgZmFsc2UgaWYgaXQncyBub3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5cdEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmcgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlzIHRoZSB0aW1lciBpcyBub3QgcnVubmluZywgYW5kIGZhbHNlIGlmIGl0IGlzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHRCb29sZWFuXG4gICAgICovXG4gICAgaXNTdG9wcGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyLiBUaGlzIG1ldGhvZCBpcyBjaGFpbmFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gXHRGdW5jdGlvbiAgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuXHR0aGlzXG4gICAgICovXG4gICAgcmVzZXQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zdG9wKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgoKSA9PiB0aGlzLmNhbGxiYWNrKGNhbGxiYWNrKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXIuIFRoaXMgbWV0aG9kIGlzIGNoYWluYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBcdEZ1bmN0aW9uICBjYWxsYmFja1xuICAgICAqIEByZXR1cm5cdHRoaXNcbiAgICAgKi9cbiAgICBzdGFydChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy5zdGFydGVkID49IHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbG9vcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSB0aW1lci4gVGhpcyBtZXRob2QgaXMgY2hhaW5hYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIFx0RnVuY3Rpb24gIGNhbGxiYWNrXG4gICAgICogQHJldHVyblx0dGhpc1xuICAgICAqL1xuICAgIHN0b3AoY2FsbGJhY2spIHtcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCBGbGlwQ2xvY2sgZnJvbSAnLi9qcy9GbGlwQ2xvY2snO1xuXG4vLyBpbXBvcnQgX18gZnJvbSAnLi9qcy9IZWxwZXJzL1RyYW5zbGF0ZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vanMvQ29tcG9uZW50cyc7XG5leHBvcnQgZGVmYXVsdCBGbGlwQ2xvY2s7XG5cbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL2pzL0NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuXG5GbGlwQ2xvY2suc2V0RGVmYXVsdEZhY2UoJ1R3ZW50eUZvdXJIb3VyQ2xvY2snKTtcbkZsaXBDbG9jay5zZXREZWZhdWx0RmFjZSgndGVzdCcpO1xuXG5jb25zdCBpdGVtID0gbmV3IEZsaXBDbG9jaygxMDAsIHtcbiAgICBmYWNlOiAndGVzdCdcbn0pO1xuXG5jb25zb2xlLmxvZyhpdGVtKTtcbiJdLCJuYW1lcyI6WyJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsInZhbGlkYXRlIiwidmFsdWUiLCJjb25kaXRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpIiwiY29uZGl0aW9uIiwiaXNGdW5jdGlvbiIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJPYmplY3QiLCJGdW5jdGlvbiIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZmlsdGVyIiwiam9pbiIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaW5zdGFuY2UiLCJkb3RzIiwiZXhjbHVkZURvdHMiLCJlbGVtZW50IiwidCIsImxhYmVsIiwiRGl2aWRlciIsIkxpc3QiLCJMaXN0SXRlbSIsImRpY3Rpb25hcnkiLCJhbGlhc2VzIiwiZmFjZSIsImZhY2VzIiwidGhlbWUiLCJ0aGVtZXMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsIkNvbXBvbmVudCIsImFyZ3MiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsInNldEF0dHJpYnV0ZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJtYXAiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZXMiLCJmbiIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiJGxhbmd1YWdlIiwidGhlbiIsIiR0aGVtZSIsIkNvbnNvbGVNZXNzYWdlcyIsIkRlZmF1bHRWYWx1ZXMiLCJGYWNlIiwiQ291bnRlciIsIlR3ZW50eUZvdXJIb3VyQ2xvY2siLCJGYWNlVmFsdWUiLCJhdHRyaWJ1dGVzIiwiYXNzaWduIiwib3JpZ2luYWwiLCJfZGVmYXVsdCIsIkZsaXBDbG9jayIsIiR2YWx1ZSIsIm1ha2UiLCIkZmFjZSIsImNvbnN0cnVjdG9yIiwiZ2V0RGVmYXVsdEZhY2UiLCJuYW1lIiwiVGltZXIiLCJpbnRlcnZhbCIsImNvdW50IiwiaGFuZGxlIiwic3RhcnRlZCIsInJ1bm5pbmciLCJjYWxsYmFjayIsInN0b3AiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJsb29wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNSdW5uaW5nIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0RGVmYXVsdEZhY2UiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxLQUFULENBQWVDLE9BQWYsRUFBd0I7UUFDckIsSUFBSUMsS0FBSixDQUFVRCxPQUFWLENBQU47O0FBR0osQUFBTyxTQUFTRSxVQUFULENBQWtCQyxLQUFsQixFQUF3QztvQ0FBWkMsVUFBWTtJQUFaQSxVQUFZOzs7U0FDcEMsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQztTQUVJLElBQU1DLENBQVYsSUFBZUosVUFBZixFQUEyQjtVQUNqQkssU0FBUyxHQUFHTCxVQUFVLENBQUNJLENBQUQsQ0FBNUI7O1VBR0ksQ0FBQyxFQUFFRSxVQUFVLENBQUNELFNBQUQsQ0FBVixJQUF5QkEsU0FBUyxDQUFDTixLQUFELENBQXBDLENBQUQsSUFDQ1EsUUFBUSxDQUFDRixTQUFELENBQVIsSUFBd0IsUUFBT04sS0FBUCxNQUFpQk0sU0FGOUMsRUFHRztRQUNDSCxPQUFPOzs7O0lBSWZDLE1BQU0sQ0FBQ1IsS0FBRCxDQUFOO0dBZEcsQ0FBUDs7QUFrQkosQUFJTyxTQUFTWSxRQUFULENBQWtCUixLQUFsQixFQUF5QjtTQUNyQixPQUFPQSxLQUFQLEtBQWlCLFFBQXhCOztBQUdKLEFBQU8sU0FBU1MsT0FBVCxDQUFpQlQsS0FBakIsRUFBd0I7U0FDcEJBLEtBQUssWUFBWVUsS0FBeEI7O0FBR0osQUFBTyxTQUFTQyxRQUFULENBQWtCWCxLQUFsQixFQUF5QjtTQUNyQkEsS0FBSyxZQUFZWSxNQUF4Qjs7QUFHSixBQUFPLFNBQVNMLFVBQVQsQ0FBb0JQLEtBQXBCLEVBQTJCO1NBQ3ZCQSxLQUFLLFlBQVlhLFFB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
