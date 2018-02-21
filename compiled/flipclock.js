"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function Base() {
	// dummy
};

Base.extend = function (_instance, _static) {
	// subclass

	"use strict";

	var extend = Base.prototype.extend;

	// build the prototype
	Base._prototyping = true;

	var proto = new this();

	extend.call(proto, _instance);

	proto.base = function () {
		// call this method from any other method to invoke that method's ancestor
	};

	delete Base._prototyping;

	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function () {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) {
				// instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] !== null) {
				// casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};

	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function (type) {
		//return (type == "object") ? klass : constructor; //-dean
		return type == "object" ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {
	extend: function extend(source, value) {
		if (arguments.length > 1) {
			// extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && typeof value == "function" && ( // overriding a method?
			// the valueOf() comparison is to avoid circular references
			!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) && /\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function value() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function (type) {
					return type == "object" ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) {
			// extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = { toSource: null };
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);
				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
exports.Base = Base = Base.extend({
	constructor: function constructor() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",

	forEach: function forEach(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},

	implement: function implement() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},

	toString: function toString() {
		return String(this.valueOf());
	}
});
/*jshint smarttabs:true */

var _FlipClock;

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @license   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * FlipFlock Helper
  *
  * @param  object  A jQuery object or CSS select
  * @param  int     An integer used to start the clock (no. seconds)
  * @param  object  An object of properties to override the default	
  */

	_FlipClock = function FlipClock(obj, digit, options) {
		if (digit instanceof Object && digit instanceof Date === false) {
			options = digit;
			digit = 0;
		}

		return new _FlipClock.Factory(obj, digit, options);
	};

	/**
  * The global FlipClock.Lang object
  */

	_FlipClock.Lang = {};

	/**
  * The Base FlipClock class is used to extend all other FlipFlock
  * classes. It handles the callbacks and the basic setters/getters
  *	
  * @param 	object  An object of the default properties
  * @param 	object  An object of properties to override the default	
  */

	_FlipClock.Base = Base.extend({

		/**
   * Build Date
   */

		buildDate: '2014-12-12',

		/**
   * Version
   */

		version: '0.7.7',

		/**
   * Sets the default options
   *
   * @param	object 	The default options
   * @param	object 	The override options
   */

		constructor: function constructor(_default, options) {
			if ((typeof _default === "undefined" ? "undefined" : _typeof(_default)) !== "object") {
				_default = {};
			}
			if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
				options = {};
			}
			this.setOptions($.extend(true, {}, _default, options));
		},

		/**
   * Delegates the callback to the defined method
   *
   * @param	object 	The default options
   * @param	object 	The override options
   */

		callback: function callback(method) {
			if (typeof method === "function") {
				var args = [];

				for (var x = 1; x <= arguments.length; x++) {
					if (arguments[x]) {
						args.push(arguments[x]);
					}
				}

				method.apply(this, args);
			}
		},

		/**
   * Log a string into the console if it exists
   *
   * @param 	string 	The name of the option
   * @return	mixed
   */

		log: function log(str) {
			if (window.console && console.log) {
				console.log(str);
			}
		},

		/**
   * Get an single option value. Returns false if option does not exist
   *
   * @param 	string 	The name of the option
   * @return	mixed
   */

		getOption: function getOption(index) {
			if (this[index]) {
				return this[index];
			}
			return false;
		},

		/**
   * Get all options
   *
   * @return	bool
   */

		getOptions: function getOptions() {
			return this;
		},

		/**
   * Set a single option value
   *
   * @param 	string 	The name of the option
   * @param 	mixed 	The value of the option
   */

		setOption: function setOption(index, value) {
			this[index] = value;
		},

		/**
   * Set a multiple options by passing a JSON object
   *
   * @param 	object 	The object with the options
   * @param 	mixed 	The value of the option
   */

		setOptions: function setOptions(options) {
			for (var key in options) {
				if (typeof options[key] !== "undefined") {
					this.setOption(key, options[key]);
				}
			}
		}

	});
})(jQuery);

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * The FlipClock Face class is the base class in which to extend
  * all other FlockClock.Face classes.
  *
  * @param 	object  The parent FlipClock.Factory object
  * @param 	object  An object of properties to override the default	
  */

	_FlipClock.Face = _FlipClock.Base.extend({

		/**
   * Sets whether or not the clock should start upon instantiation
   */

		autoStart: true,

		/**
   * An array of jQuery objects used for the dividers (the colons)
   */

		dividers: [],

		/**
   * An array of FlipClock.List objects
   */

		factory: false,

		/**
   * An array of FlipClock.List objects
   */

		lists: [],

		/**
   * Constructor
   *
   * @param 	object  The parent FlipClock.Factory object
   * @param 	object  An object of properties to override the default	
   */

		constructor: function constructor(factory, options) {
			this.dividers = [];
			this.lists = [];
			this.base(options);
			this.factory = factory;
		},

		/**
   * Build the clock face
   */

		build: function build() {
			if (this.autoStart) {
				this.start();
			}
		},

		/**
   * Creates a jQuery object used for the digit divider
   *
   * @param	mixed 	The divider label text
   * @param	mixed	Set true to exclude the dots in the divider. 
   *					If not set, is false.
   */

		createDivider: function createDivider(label, css, excludeDots) {
			if (typeof css == "boolean" || !css) {
				excludeDots = css;
				css = label;
			}

			var dots = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join('');

			if (excludeDots) {
				dots = '';
			}

			label = this.factory.localize(label);

			var html = ['<span class="' + this.factory.classes.divider + ' ' + (css ? css : '').toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (label ? label : '') + '</span>', dots, '</span>'];

			var $html = $(html.join(''));

			this.dividers.push($html);

			return $html;
		},

		/**
   * Creates a FlipClock.List object and appends it to the DOM
   *
   * @param	mixed 	The digit to select in the list
   * @param	object  An object to override the default properties
   */

		createList: function createList(digit, options) {
			if ((typeof digit === "undefined" ? "undefined" : _typeof(digit)) === "object") {
				options = digit;
				digit = 0;
			}

			var obj = new _FlipClock.List(this.factory, digit, options);

			this.lists.push(obj);

			return obj;
		},

		/**
   * Triggers when the clock is reset
   */

		reset: function reset() {
			this.factory.time = new _FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {
				minimumDigits: this.factory.minimumDigits
			});

			this.flip(this.factory.original, false);
		},

		/**
   * Append a newly created list to the clock
   */

		appendDigitToClock: function appendDigitToClock(obj) {
			obj.$el.append(false);
		},

		/**
   * Add a digit to the clock face
   */

		addDigit: function addDigit(digit) {
			var obj = this.createList(digit, {
				classes: {
					active: this.factory.classes.active,
					before: this.factory.classes.before,
					flip: this.factory.classes.flip
				}
			});

			this.appendDigitToClock(obj);
		},

		/**
   * Triggers when the clock is started
   */

		start: function start() {},

		/**
   * Triggers when the time on the clock stops
   */

		stop: function stop() {},

		/**
   * Auto increments/decrements the value of the clock face
   */

		autoIncrement: function autoIncrement() {
			if (!this.factory.countdown) {
				this.increment();
			} else {
				this.decrement();
			}
		},

		/**
   * Increments the value of the clock face
   */

		increment: function increment() {
			this.factory.time.addSecond();
		},

		/**
   * Decrements the value of the clock face
   */

		decrement: function decrement() {
			if (this.factory.time.getTimeSeconds() == 0) {
				this.factory.stop();
			} else {
				this.factory.time.subSecond();
			}
		},

		/**
   * Triggers when the numbers on the clock flip
   */

		flip: function flip(time, doNotAddPlayClass) {
			var t = this;

			$.each(time, function (i, digit) {
				var list = t.lists[i];

				if (list) {
					if (!doNotAddPlayClass && digit != list.digit) {
						list.play();
					}

					list.select(digit);
				} else {
					t.addDigit(digit);
				}
			});
		}

	});
})(jQuery);

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * The FlipClock Factory class is used to build the clock and manage
  * all the public methods.
  *
  * @param 	object  A jQuery object or CSS selector used to fetch
  				    the wrapping DOM nodes
  * @param 	mixed   This is the digit used to set the clock. If an 
  				    object is passed, 0 will be used.	
  * @param 	object  An object of properties to override the default	
  */

	_FlipClock.Factory = _FlipClock.Base.extend({

		/**
   * The clock's animation rate.
   * 
   * Note, currently this property doesn't do anything.
   * This property is here to be used in the future to
   * programmaticaly set the clock's animation speed
   */

		animationRate: 1000,

		/**
   * Auto start the clock on page load (True|False)
   */

		autoStart: true,

		/**
   * The callback methods
   */

		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},

		/**
   * The CSS classes
   */

		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label',
			flip: 'flip',
			play: 'play',
			wrapper: 'flip-clock-wrapper'
		},

		/**
   * The name of the clock face class in use
   */

		clockFace: 'HourlyCounter',

		/**
   * The name of the clock face class in use
   */

		countdown: false,

		/**
   * The name of the default clock face class to use if the defined
   * clockFace variable is not a valid FlipClock.Face object
   */

		defaultClockFace: 'HourlyCounter',

		/**
   * The default language
   */

		defaultLanguage: 'english',

		/**
   * The jQuery object
   */

		$el: false,

		/**
   * The FlipClock.Face object
   */

		face: true,

		/**
   * The language object after it has been loaded
   */

		lang: false,

		/**
   * The language being used to display labels (string)
   */

		language: 'english',

		/**
   * The minimum digits the clock must have
   */

		minimumDigits: 0,

		/**
   * The original starting value of the clock. Used for the reset method.
   */

		original: false,

		/**
   * Is the clock running? (True|False)
   */

		running: false,

		/**
   * The FlipClock.Time object
   */

		time: false,

		/**
   * The FlipClock.Timer object
   */

		timer: false,

		/**
   * The jQuery object (depcrecated)
   */

		$wrapper: false,

		/**
   * Constructor
   *
   * @param   object  The wrapping jQuery object
   * @param	object  Number of seconds used to start the clock
   * @param	object 	An object override options
   */

		constructor: function constructor(obj, digit, options) {

			if (!options) {
				options = {};
			}

			this.lists = [];
			this.running = false;
			this.base(options);

			this.$el = $(obj).addClass(this.classes.wrapper);

			// Depcrated support of the $wrapper property.
			this.$wrapper = this.$el;

			this.original = digit instanceof Date ? digit : digit ? Math.round(digit) : 0;

			this.time = new _FlipClock.Time(this, this.original, {
				minimumDigits: this.minimumDigits,
				animationRate: this.animationRate
			});

			this.timer = new _FlipClock.Timer(this, options);

			this.loadLanguage(this.language);

			this.loadClockFace(this.clockFace, options);

			if (this.autoStart) {
				this.start();
			}
		},

		/**
   * Load the FlipClock.Face object
   *
   * @param	object  The name of the FlickClock.Face class
   * @param	object 	An object override options
   */

		loadClockFace: function loadClockFace(name, options) {
			var face,
			    suffix = 'Face',
			    hasStopped = false;

			name = name.ucfirst() + suffix;

			if (this.face.stop) {
				this.stop();
				hasStopped = true;
			}

			this.$el.html('');

			this.time.minimumDigits = this.minimumDigits;

			if (_FlipClock[name]) {
				face = new _FlipClock[name](this, options);
			} else {
				face = new _FlipClock[this.defaultClockFace + suffix](this, options);
			}

			face.build();

			this.face = face;

			if (hasStopped) {
				this.start();
			}

			return this.face;
		},

		/**
   * Load the FlipClock.Lang object
   *
   * @param	object  The name of the language to load
   */

		loadLanguage: function loadLanguage(name) {
			var lang;

			if (_FlipClock.Lang[name.ucfirst()]) {
				lang = _FlipClock.Lang[name.ucfirst()];
			} else if (_FlipClock.Lang[name]) {
				lang = _FlipClock.Lang[name];
			} else {
				lang = _FlipClock.Lang[this.defaultLanguage];
			}

			return this.lang = lang;
		},

		/**
   * Localize strings into various languages
   *
   * @param	string  The index of the localized string
   * @param	object  Optionally pass a lang object
   */

		localize: function localize(index, obj) {
			var lang = this.lang;

			if (!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") {
				lang = obj;
			}

			if (lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		},

		/**
   * Starts the clock
   */

		start: function start(callback) {
			var t = this;

			if (!t.running && (!t.countdown || t.countdown && t.time.time > 0)) {
				t.face.start(t.time);
				t.timer.start(function () {
					t.flip();

					if (typeof callback === "function") {
						callback();
					}
				});
			} else {
				t.log('Trying to start timer when countdown already at 0');
			}
		},

		/**
   * Stops the clock
   */

		stop: function stop(callback) {
			this.face.stop();
			this.timer.stop(callback);

			for (var x in this.lists) {
				if (this.lists.hasOwnProperty(x)) {
					this.lists[x].stop();
				}
			}
		},

		/**
   * Reset the clock
   */

		reset: function reset(callback) {
			this.timer.reset(callback);
			this.face.reset();
		},

		/**
   * Sets the clock time
   */

		setTime: function setTime(time) {
			this.time.time = time;
			this.flip(true);
		},

		/**
   * Get the clock time
   *
   * @return  object  Returns a FlipClock.Time object
   */

		getTime: function getTime(time) {
			return this.time;
		},

		/**
   * Changes the increment of time to up or down (add/sub)
   */

		setCountdown: function setCountdown(value) {
			var running = this.running;

			this.countdown = value ? true : false;

			if (running) {
				this.stop();
				this.start();
			}
		},

		/**
   * Flip the digits on the clock
   *
   * @param  array  An array of digits	 
   */
		flip: function flip(doNotAddPlayClass) {
			this.face.flip(false, doNotAddPlayClass);
		}

	});
})(jQuery);

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * The FlipClock List class is used to build the list used to create 
  * the card flip effect. This object fascilates selecting the correct
  * node by passing a specific digit.
  *
  * @param 	object  A FlipClock.Factory object
  * @param 	mixed   This is the digit used to set the clock. If an 
  *				    object is passed, 0 will be used.	
  * @param 	object  An object of properties to override the default	
  */

	_FlipClock.List = _FlipClock.Base.extend({

		/**
   * The digit (0-9)
   */

		digit: 0,

		/**
   * The CSS classes
   */

		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip'
		},

		/**
   * The parent FlipClock.Factory object
   */

		factory: false,

		/**
   * The jQuery object
   */

		$el: false,

		/**
   * The jQuery object (deprecated)
   */

		$obj: false,

		/**
   * The items in the list
   */

		items: [],

		/**
   * The last digit
   */

		lastDigit: 0,

		/**
   * Constructor
   *
   * @param  object  A FlipClock.Factory object
   * @param  int     An integer use to select the correct digit
   * @param  object  An object to override the default properties	 
   */

		constructor: function constructor(factory, digit, options) {
			this.factory = factory;
			this.digit = digit;
			this.lastDigit = digit;
			this.$el = this.createList();

			// Depcrated support of the $obj property.
			this.$obj = this.$el;

			if (digit > 0) {
				this.select(digit);
			}

			this.factory.$el.append(this.$el);
		},

		/**
   * Select the digit in the list
   *
   * @param  int  A digit 0-9	 
   */

		select: function select(digit) {
			if (typeof digit === "undefined") {
				digit = this.digit;
			} else {
				this.digit = digit;
			}

			if (this.digit != this.lastDigit) {
				var $delete = this.$el.find('.' + this.classes.before).removeClass(this.classes.before);

				this.$el.find('.' + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before);

				this.appendListItem(this.classes.active, this.digit);

				$delete.remove();

				this.lastDigit = this.digit;
			}
		},

		/**
   * Adds the play class to the DOM object
   */

		play: function play() {
			this.$el.addClass(this.factory.classes.play);
		},

		/**
   * Removes the play class to the DOM object 
   */

		stop: function stop() {
			var t = this;

			setTimeout(function () {
				t.$el.removeClass(t.factory.classes.play);
			}, this.factory.timer.interval);
		},

		/**
   * Creates the list item HTML and returns as a string 
   */

		createListItem: function createListItem(css, value) {
			return ['<li class="' + (css ? css : '') + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (value ? value : '') + '</div>', '</div>', '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (value ? value : '') + '</div>', '</div>', '</a>', '</li>'].join('');
		},

		/**
   * Append the list item to the parent DOM node 
   */

		appendListItem: function appendListItem(css, value) {
			var html = this.createListItem(css, value);

			this.$el.append(html);
		},

		/**
   * Create the list of digits and appends it to the DOM object 
   */

		createList: function createList() {

			var lastDigit = this.getPrevDigit() ? this.getPrevDigit() : this.digit;

			var html = $(['<ul class="' + this.classes.flip + ' ' + (this.factory.running ? this.factory.classes.play : '') + '">', this.createListItem(this.classes.before, lastDigit), this.createListItem(this.classes.active, this.digit), '</ul>'].join(''));

			return html;
		},

		getNextDigit: function getNextDigit() {
			return this.digit == 9 ? 0 : this.digit + 1;
		},

		getPrevDigit: function getPrevDigit() {
			return this.digit == 0 ? 9 : this.digit - 1;
		}

	});
})(jQuery);

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * Capitalize the first letter in a string
  *
  * @return string
  */

	String.prototype.ucfirst = function () {
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};

	/**
  * jQuery helper method
  *
  * @param  int     An integer used to start the clock (no. seconds)
  * @param  object  An object of properties to override the default	
  */

	$.fn.FlipClock = function (digit, options) {
		return new _FlipClock($(this), digit, options);
	};

	/**
  * jQuery helper method
  *
  * @param  int     An integer used to start the clock (no. seconds)
  * @param  object  An object of properties to override the default	
  */

	$.fn.flipClock = function (digit, options) {
		return $.fn.FlipClock(digit, options);
	};
})(jQuery);

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * The FlipClock Time class is used to manage all the time 
  * calculations.
  *
  * @param 	object  A FlipClock.Factory object
  * @param 	mixed   This is the digit used to set the clock. If an 
  *				    object is passed, 0 will be used.	
  * @param 	object  An object of properties to override the default	
  */

	_FlipClock.Time = _FlipClock.Base.extend({

		/**
   * The time (in seconds) or a date object
   */

		time: 0,

		/**
   * The parent FlipClock.Factory object
   */

		factory: false,

		/**
   * The minimum number of digits the clock face must have
   */

		minimumDigits: 0,

		/**
   * Constructor
   *
   * @param  object  A FlipClock.Factory object
   * @param  int     An integer use to select the correct digit
   * @param  object  An object to override the default properties	 
   */

		constructor: function constructor(factory, time, options) {
			if ((typeof options === "undefined" ? "undefined" : _typeof(options)) != "object") {
				options = {};
			}

			if (!options.minimumDigits) {
				options.minimumDigits = factory.minimumDigits;
			}

			this.base(options);
			this.factory = factory;

			if (time) {
				this.time = time;
			}
		},

		/**
   * Convert a string or integer to an array of digits
   *
   * @param   mixed  String or Integer of digits	 
   * @return  array  An array of digits 
   */

		convertDigitsToArray: function convertDigitsToArray(str) {
			var data = [];

			str = str.toString();

			for (var x = 0; x < str.length; x++) {
				if (str[x].match(/^\d*$/g)) {
					data.push(str[x]);
				}
			}

			return data;
		},

		/**
   * Get a specific digit from the time integer
   *
   * @param   int    The specific digit to select from the time	 
   * @return  mixed  Returns FALSE if no digit is found, otherwise
   *				   the method returns the defined digit	 
   */

		digit: function digit(i) {
			var timeStr = this.toString();
			var length = timeStr.length;

			if (timeStr[length - i]) {
				return timeStr[length - i];
			}

			return false;
		},

		/**
   * Formats any array of digits into a valid array of digits
   *
   * @param   mixed  An array of digits	 
   * @return  array  An array of digits 
   */

		digitize: function digitize(obj) {
			var data = [];

			$.each(obj, function (i, value) {
				value = value.toString();

				if (value.length == 1) {
					value = '0' + value;
				}

				for (var x = 0; x < value.length; x++) {
					data.push(value.charAt(x));
				}
			});

			if (data.length > this.minimumDigits) {
				this.minimumDigits = data.length;
			}

			if (this.minimumDigits > data.length) {
				for (var x = data.length; x < this.minimumDigits; x++) {
					data.unshift('0');
				}
			}

			return data;
		},

		/**
   * Gets a new Date object for the current time
   *
   * @return  array  Returns a Date object
   */

		getDateObject: function getDateObject() {
			if (this.time instanceof Date) {
				return this.time;
			}

			return new Date(new Date().getTime() + this.getTimeSeconds() * 1000);
		},

		/**
   * Gets a digitized daily counter
   *
   * @return  object  Returns a digitized object
   */

		getDayCounter: function getDayCounter(includeSeconds) {
			var digits = [this.getDays(), this.getHours(true), this.getMinutes(true)];

			if (includeSeconds) {
				digits.push(this.getSeconds(true));
			}

			return this.digitize(digits);
		},

		/**
   * Gets number of days
   *
   * @param   bool  Should perform a modulus? If not sent, then no.
   * @return  int   Retuns a floored integer
   */

		getDays: function getDays(mod) {
			var days = this.getTimeSeconds() / 60 / 60 / 24;

			if (mod) {
				days = days % 7;
			}

			return Math.floor(days);
		},

		/**
   * Gets an hourly breakdown
   *
   * @return  object  Returns a digitized object
   */

		getHourCounter: function getHourCounter() {
			var obj = this.digitize([this.getHours(), this.getMinutes(true), this.getSeconds(true)]);

			return obj;
		},

		/**
   * Gets an hourly breakdown
   *
   * @return  object  Returns a digitized object
   */

		getHourly: function getHourly() {
			return this.getHourCounter();
		},

		/**
   * Gets number of hours
   *
   * @param   bool  Should perform a modulus? If not sent, then no.
   * @return  int   Retuns a floored integer
   */

		getHours: function getHours(mod) {
			var hours = this.getTimeSeconds() / 60 / 60;

			if (mod) {
				hours = hours % 24;
			}

			return Math.floor(hours);
		},

		/**
   * Gets the twenty-four hour time
   *
   * @return  object  returns a digitized object
   */

		getMilitaryTime: function getMilitaryTime(date, showSeconds) {
			if (typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if (!date) {
				date = this.getDateObject();
			}

			var data = [date.getHours(), date.getMinutes()];

			if (showSeconds === true) {
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},

		/**
   * Gets number of minutes
   *
   * @param   bool  Should perform a modulus? If not sent, then no.
   * @return  int   Retuns a floored integer
   */

		getMinutes: function getMinutes(mod) {
			var minutes = this.getTimeSeconds() / 60;

			if (mod) {
				minutes = minutes % 60;
			}

			return Math.floor(minutes);
		},

		/**
   * Gets a minute breakdown
   */

		getMinuteCounter: function getMinuteCounter() {
			var obj = this.digitize([this.getMinutes(), this.getSeconds(true)]);

			return obj;
		},

		/**
   * Gets time count in seconds regardless of if targetting date or not.
   *
   * @return  int   Returns a floored integer
   */

		getTimeSeconds: function getTimeSeconds(date) {
			if (!date) {
				date = new Date();
			}

			if (this.time instanceof Date) {
				if (this.factory.countdown) {
					return Math.max(this.time.getTime() / 1000 - date.getTime() / 1000, 0);
				} else {
					return date.getTime() / 1000 - this.time.getTime() / 1000;
				}
			} else {
				return this.time;
			}
		},

		/**
   * Gets the current twelve hour time
   *
   * @return  object  Returns a digitized object
   */

		getTime: function getTime(date, showSeconds) {
			if (typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if (!date) {
				date = this.getDateObject();
			}

			console.log(date);

			var hours = date.getHours();
			var merid = hours > 12 ? 'PM' : 'AM';
			var data = [hours > 12 ? hours - 12 : hours === 0 ? 12 : hours, date.getMinutes()];

			if (showSeconds === true) {
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},

		/**
   * Gets number of seconds
   *
   * @param   bool  Should perform a modulus? If not sent, then no.
   * @return  int   Retuns a ceiled integer
   */

		getSeconds: function getSeconds(mod) {
			var seconds = this.getTimeSeconds();

			if (mod) {
				if (seconds == 60) {
					seconds = 0;
				} else {
					seconds = seconds % 60;
				}
			}

			return Math.ceil(seconds);
		},

		/**
   * Gets number of weeks
   *
   * @param   bool  Should perform a modulus? If not sent, then no.
   * @return  int   Retuns a floored integer
   */

		getWeeks: function getWeeks(mod) {
			var weeks = this.getTimeSeconds() / 60 / 60 / 24 / 7;

			if (mod) {
				weeks = weeks % 52;
			}

			return Math.floor(weeks);
		},

		/**
   * Removes a specific number of leading zeros from the array.
   * This method prevents you from removing too many digits, even
   * if you try.
   *
   * @param   int    Total number of digits to remove 
   * @return  array  An array of digits 
   */

		removeLeadingZeros: function removeLeadingZeros(totalDigits, digits) {
			var total = 0;
			var newArray = [];

			$.each(digits, function (i, digit) {
				if (i < totalDigits) {
					total += parseInt(digits[i], 10);
				} else {
					newArray.push(digits[i]);
				}
			});

			if (total === 0) {
				return newArray;
			}

			return digits;
		},

		/**
   * Adds X second to the current time
   */

		addSeconds: function addSeconds(x) {
			if (this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() + x);
			} else {
				this.time += x;
			}
		},

		/**
   * Adds 1 second to the current time
   */

		addSecond: function addSecond() {
			this.addSeconds(1);
		},

		/**
   * Substracts X seconds from the current time
   */

		subSeconds: function subSeconds(x) {
			if (this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() - x);
			} else {
				this.time -= x;
			}
		},

		/**
   * Substracts 1 second from the current time
   */

		subSecond: function subSecond() {
			this.subSeconds(1);
		},

		/**
   * Converts the object to a human readable string
   */

		toString: function toString() {
			return this.getTimeSeconds().toString();
		}

		/*
  getYears: function() {
  	return Math.floor(this.time / 60 / 60 / 24 / 7 / 52);
  },
  
  getDecades: function() {
  	return Math.floor(this.getWeeks() / 10);
  }*/
	});
})(jQuery);

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	/**
  * The FlipClock.Timer object managers the JS timers
  *
  * @param	object  The parent FlipClock.Factory object
  * @param	object  Override the default options
  */

	_FlipClock.Timer = _FlipClock.Base.extend({

		/**
   * Callbacks
   */

		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},

		/**
   * FlipClock timer count (how many intervals have passed)
   */

		count: 0,

		/**
   * The parent FlipClock.Factory object
   */

		factory: false,

		/**
   * Timer interval (1 second by default)
   */

		interval: 1000,

		/**
   * The rate of the animation in milliseconds (not currently in use)
   */

		animationRate: 1000,

		/**
   * Constructor
   *
   * @return	void
   */

		constructor: function constructor(factory, options) {
			this.base(options);
			this.factory = factory;
			this.callback(this.callbacks.init);
			this.callback(this.callbacks.create);
		},

		/**
   * This method gets the elapsed the time as an interger
   *
   * @return	void
   */

		getElapsed: function getElapsed() {
			return this.count * this.interval;
		},

		/**
   * This method gets the elapsed the time as a Date object
   *
   * @return	void
   */

		getElapsedTime: function getElapsedTime() {
			return new Date(this.time + this.getElapsed());
		},

		/**
   * This method is resets the timer
   *
   * @param 	callback  This method resets the timer back to 0
   * @return	void
   */

		reset: function reset(callback) {
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);
			this.callback(this.callbacks.reset);
		},

		/**
   * This method is starts the timer
   *
   * @param 	callback  A function that is called once the timer is destroyed
   * @return	void
   */

		start: function start(callback) {
			this.factory.running = true;
			this._createTimer(callback);
			this.callback(this.callbacks.start);
		},

		/**
   * This method is stops the timer
   *
   * @param 	callback  A function that is called once the timer is destroyed
   * @return	void
   */

		stop: function stop(callback) {
			this.factory.running = false;
			this._clearInterval(callback);
			this.callback(this.callbacks.stop);
			this.callback(callback);
		},

		/**
   * Clear the timer interval
   *
   * @return	void
   */

		_clearInterval: function _clearInterval() {
			clearInterval(this.timer);
		},

		/**
   * Create the timer object
   *
   * @param 	callback  A function that is called once the timer is created
   * @return	void
   */

		_createTimer: function _createTimer(callback) {
			this._setInterval(callback);
		},

		/**
   * Destroy the timer object
   *
   * @param 	callback  A function that is called once the timer is destroyed
   * @return	void
   */

		_destroyTimer: function _destroyTimer(callback) {
			this._clearInterval();
			this.timer = false;
			this.callback(callback);
			this.callback(this.callbacks.destroy);
		},

		/**
   * This method is called each time the timer interval is ran
   *
   * @param 	callback  A function that is called once the timer is destroyed
   * @return	void
   */

		_interval: function _interval(callback) {
			this.callback(this.callbacks.interval);
			this.callback(callback);
			this.count++;
		},

		/**
   * This sets the timer interval
   *
   * @param 	callback  A function that is called once the timer is destroyed
   * @return	void
   */

		_setInterval: function _setInterval(callback) {
			var t = this;

			t._interval(callback);

			t.timer = setInterval(function () {
				t._interval(callback);
			}, this.interval);
		}

	});
})(jQuery);

(function ($) {

	/**
  * Twenty-Four Hour Clock Face
  *
  * This class will generate a twenty-four our clock for FlipClock.js
  *
  * @param  object  The parent FlipClock.Factory object
  * @param  object  An object of properties to override the default	
  */

	_FlipClock.TwentyFourHourClockFace = _FlipClock.Face.extend({

		/**
   * Constructor
   *
   * @param  object  The parent FlipClock.Factory object
   * @param  object  An object of properties to override the default	
   */

		constructor: function constructor(factory, options) {
			this.base(factory, options);
		},

		/**
   * Build the clock face
   *
   * @param  object  Pass the time that should be used to display on the clock.	
   */

		build: function build(time) {
			var t = this;
			var children = this.factory.$el.find('ul');

			if (!this.factory.time.time) {
				this.factory.original = new Date();

				this.factory.time = new _FlipClock.Time(this.factory, this.factory.original);
			}

			var time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);

			if (time.length > children.length) {
				$.each(time, function (i, digit) {
					t.createList(digit);
				});
			}

			this.createDivider();
			this.createDivider();

			$(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el);

			this.base();
		},

		/**
   * Flip the clock face
   */

		flip: function flip(time, doNotAddPlayClass) {
			this.autoIncrement();

			time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);

			this.base(time, doNotAddPlayClass);
		}

	});
})(jQuery);
(function ($) {

	/**
  * Counter Clock Face
  *
  * This class will generate a generice flip counter. The timer has been
  * disabled. clock.increment() and clock.decrement() have been added.
  *
  * @param  object  The parent FlipClock.Factory object
  * @param  object  An object of properties to override the default	
  */

	_FlipClock.CounterFace = _FlipClock.Face.extend({

		/**
   * Tells the counter clock face if it should auto-increment
   */

		shouldAutoIncrement: false,

		/**
   * Constructor
   *
   * @param  object  The parent FlipClock.Factory object
   * @param  object  An object of properties to override the default	
   */

		constructor: function constructor(factory, options) {

			if ((typeof options === "undefined" ? "undefined" : _typeof(options)) != "object") {
				options = {};
			}

			factory.autoStart = options.autoStart ? true : false;

			if (options.autoStart) {
				this.shouldAutoIncrement = true;
			}

			factory.increment = function () {
				factory.countdown = false;
				factory.setTime(factory.getTime().getTimeSeconds() + 1);
			};

			factory.decrement = function () {
				factory.countdown = true;
				var time = factory.getTime().getTimeSeconds();
				if (time > 0) {
					factory.setTime(time - 1);
				}
			};

			factory.setValue = function (digits) {
				factory.setTime(digits);
			};

			factory.setCounter = function (digits) {
				factory.setTime(digits);
			};

			this.base(factory, options);
		},

		/**
   * Build the clock face	
   */

		build: function build() {
			var t = this;
			var children = this.factory.$el.find('ul');
			var time = this.factory.getTime().digitize([this.factory.getTime().time]);

			if (time.length > children.length) {
				$.each(time, function (i, digit) {
					var list = t.createList(digit);

					list.select(digit);
				});
			}

			$.each(this.lists, function (i, list) {
				list.play();
			});

			this.base();
		},

		/**
   * Flip the clock face
   */

		flip: function flip(time, doNotAddPlayClass) {
			if (this.shouldAutoIncrement) {
				this.autoIncrement();
			}

			if (!time) {
				time = this.factory.getTime().digitize([this.factory.getTime().time]);
			}

			this.base(time, doNotAddPlayClass);
		},

		/**
   * Reset the clock face
   */

		reset: function reset() {
			this.factory.time = new _FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0);

			this.flip();
		}
	});
})(jQuery);
(function ($) {

	/**
  * Daily Counter Clock Face
  *
  * This class will generate a daily counter for FlipClock.js. A
  * daily counter will track days, hours, minutes, and seconds. If
  * the number of available digits is exceeded in the count, a new
  * digit will be created.
  *
  * @param  object  The parent FlipClock.Factory object
  * @param  object  An object of properties to override the default
  */

	_FlipClock.DailyCounterFace = _FlipClock.Face.extend({

		showSeconds: true,

		/**
   * Constructor
   *
   * @param  object  The parent FlipClock.Factory object
   * @param  object  An object of properties to override the default
   */

		constructor: function constructor(factory, options) {
			this.base(factory, options);
		},

		/**
   * Build the clock face
   */

		build: function build(time) {
			var t = this;
			var children = this.factory.$el.find('ul');
			var offset = 0;

			time = time ? time : this.factory.time.getDayCounter(this.showSeconds);

			if (time.length > children.length) {
				$.each(time, function (i, digit) {
					t.createList(digit);
				});
			}

			if (this.showSeconds) {
				$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			} else {
				offset = 2;
			}

			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + offset].$el);
			$(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + offset].$el);
			$(this.createDivider('Days', true)).insertBefore(this.lists[0].$el);

			this.base();
		},

		/**
   * Flip the clock face
   */

		flip: function flip(time, doNotAddPlayClass) {
			if (!time) {
				time = this.factory.time.getDayCounter(this.showSeconds);
			}

			this.autoIncrement();

			this.base(time, doNotAddPlayClass);
		}

	});
})(jQuery);
(function ($) {

	/**
  * Hourly Counter Clock Face
  *
  * This class will generate an hourly counter for FlipClock.js. An
  * hour counter will track hours, minutes, and seconds. If number of
  * available digits is exceeded in the count, a new digit will be 
  * created.
  *
  * @param  object  The parent FlipClock.Factory object
  * @param  object  An object of properties to override the default	
  */

	_FlipClock.HourlyCounterFace = _FlipClock.Face.extend({

		// clearExcessDigits: true,

		/**
   * Constructor
   *
   * @param  object  The parent FlipClock.Factory object
   * @param  object  An object of properties to override the default	
   */

		constructor: function constructor(factory, options) {
			this.base(factory, options);
		},

		/**
   * Build the clock face
   */

		build: function build(excludeHours, time) {
			var t = this;
			var children = this.factory.$el.find('ul');

			time = time ? time : this.factory.time.getHourCounter();

			if (time.length > children.length) {
				$.each(time, function (i, digit) {
					t.createList(digit);
				});
			}

			$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el);

			if (!excludeHours) {
				$(this.createDivider('Hours', true)).insertBefore(this.lists[0].$el);
			}

			this.base();
		},

		/**
   * Flip the clock face
   */

		flip: function flip(time, doNotAddPlayClass) {
			if (!time) {
				time = this.factory.time.getHourCounter();
			}

			this.autoIncrement();

			this.base(time, doNotAddPlayClass);
		},

		/**
   * Append a newly created list to the clock
   */

		appendDigitToClock: function appendDigitToClock(obj) {
			this.base(obj);

			this.dividers[0].insertAfter(this.dividers[0].next());
		}

	});
})(jQuery);
(function ($) {

	/**
  * Minute Counter Clock Face
  *
  * This class will generate a minute counter for FlipClock.js. A
  * minute counter will track minutes and seconds. If an hour is 
  * reached, the counter will reset back to 0. (4 digits max)
  *
  * @param  object  The parent FlipClock.Factory object
  * @param  object  An object of properties to override the default	
  */

	_FlipClock.MinuteCounterFace = _FlipClock.HourlyCounterFace.extend({

		clearExcessDigits: false,

		/**
   * Constructor
   *
   * @param  object  The parent FlipClock.Factory object
   * @param  object  An object of properties to override the default	
   */

		constructor: function constructor(factory, options) {
			this.base(factory, options);
		},

		/**
   * Build the clock face	
   */

		build: function build() {
			this.base(true, this.factory.time.getMinuteCounter());
		},

		/**
   * Flip the clock face
   */

		flip: function flip(time, doNotAddPlayClass) {
			if (!time) {
				time = this.factory.time.getMinuteCounter();
			}

			this.base(time, doNotAddPlayClass);
		}

	});
})(jQuery);
(function ($) {

	/**
  * Twelve Hour Clock Face
  *
  * This class will generate a twelve hour clock for FlipClock.js
  *
  * @param  object  The parent FlipClock.Factory object
  * @param  object  An object of properties to override the default	
  */

	_FlipClock.TwelveHourClockFace = _FlipClock.TwentyFourHourClockFace.extend({

		/**
   * The meridium jQuery DOM object
   */

		meridium: false,

		/**
   * The meridium text as string for easy access
   */

		meridiumText: 'AM',

		/**
   * Build the clock face
   *
   * @param  object  Pass the time that should be used to display on the clock.	
   */

		build: function build() {
			var t = this;

			var time = this.factory.time.getTime(false, this.showSeconds);

			this.base(time);
			this.meridiumText = this.getMeridium();
			this.meridium = $(['<ul class="flip-clock-meridium">', '<li>', '<a href="#">' + this.meridiumText + '</a>', '</li>', '</ul>'].join(''));

			this.meridium.insertAfter(this.lists[this.lists.length - 1].$el);
		},

		/**
   * Flip the clock face
   */

		flip: function flip(time, doNotAddPlayClass) {
			if (this.meridiumText != this.getMeridium()) {
				this.meridiumText = this.getMeridium();
				this.meridium.find('a').html(this.meridiumText);
			}
			this.base(this.factory.time.getTime(false, this.showSeconds), doNotAddPlayClass);
		},

		/**
   * Get the current meridium
   *
   * @return  string  Returns the meridium (AM|PM)
   */

		getMeridium: function getMeridium() {
			return new Date().getHours() >= 12 ? 'PM' : 'AM';
		},

		/**
   * Is it currently in the post-medirium?
   *
   * @return  bool  Returns true or false
   */

		isPM: function isPM() {
			return this.getMeridium() == 'PM' ? true : false;
		},

		/**
   * Is it currently before the post-medirium?
   *
   * @return  bool  Returns true or false
   */

		isAM: function isAM() {
			return this.getMeridium() == 'AM' ? true : false;
		}

	});
})(jQuery);
(function ($) {

	/**
  * FlipClock Arabic Language Pack
  *
  * This class will be used to translate tokens into the Arabic language.
  *
  */

	_FlipClock.Lang.Arabic = {

		'years': 'سنوات',
		'months': 'شهور',
		'days': 'أيام',
		'hours': 'ساعات',
		'minutes': 'دقائق',
		'seconds': 'ثواني'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['ar'] = _FlipClock.Lang.Arabic;
	_FlipClock.Lang['ar-ar'] = _FlipClock.Lang.Arabic;
	_FlipClock.Lang['arabic'] = _FlipClock.Lang.Arabic;
})(jQuery);
(function ($) {

	/**
  * FlipClock Czech Language Pack
  *
  * This class will used to translate tokens into the Czech language.
  *
  */

	_FlipClock.Lang.Czech = {

		'years': 'Roky',
		'months': 'Měsíce',
		'days': 'Dny',
		'hours': 'Hodiny',
		'minutes': 'Minuty',
		'seconds': 'Sekundy'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['cs'] = _FlipClock.Lang.Czech;
	_FlipClock.Lang['cs-cz'] = _FlipClock.Lang.Czech;
	_FlipClock.Lang['czech'] = _FlipClock.Lang.Czech;
})(jQuery);
(function ($) {

	/**
  * FlipClock Czech Language Pack
  *
  * This class will used to translate tokens into the Czech language.
  *
  */

	_FlipClock.Lang.Czech = {

		'years': 'Roky',
		'months': 'Měsíce',
		'days': 'Dny',
		'hours': 'Hodiny',
		'minutes': 'Minuty',
		'seconds': 'Sekundy'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['cz'] = _FlipClock.Lang.Czech;
	_FlipClock.Lang['cz-cs'] = _FlipClock.Lang.Czech;
	_FlipClock.Lang['czech'] = _FlipClock.Lang.Czech;
})(jQuery);

(function ($) {

	/**
  * FlipClock Danish Language Pack
  *
  * This class will used to translate tokens into the Danish language.
  *	
  */

	_FlipClock.Lang.Danish = {

		'years': 'År',
		'months': 'Måneder',
		'days': 'Dage',
		'hours': 'Timer',
		'minutes': 'Minutter',
		'seconds': 'Sekunder'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['da'] = _FlipClock.Lang.Danish;
	_FlipClock.Lang['da-dk'] = _FlipClock.Lang.Danish;
	_FlipClock.Lang['danish'] = _FlipClock.Lang.Danish;
})(jQuery);
(function ($) {

	/**
  * FlipClock German Language Pack
  *
  * This class will used to translate tokens into the German language.
  *	
  */

	_FlipClock.Lang.German = {

		'years': 'Jahre',
		'months': 'Monate',
		'days': 'Tage',
		'hours': 'Stunden',
		'minutes': 'Minuten',
		'seconds': 'Sekunden'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['de'] = _FlipClock.Lang.German;
	_FlipClock.Lang['de-de'] = _FlipClock.Lang.German;
	_FlipClock.Lang['german'] = _FlipClock.Lang.German;
})(jQuery);
(function ($) {

	/**
  * FlipClock English Language Pack
  *
  * This class will used to translate tokens into the English language.
  *	
  */

	_FlipClock.Lang.English = {

		'years': 'Years',
		'months': 'Months',
		'days': 'Days',
		'hours': 'Hours',
		'minutes': 'Minutes',
		'seconds': 'Seconds'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['en'] = _FlipClock.Lang.English;
	_FlipClock.Lang['en-us'] = _FlipClock.Lang.English;
	_FlipClock.Lang['english'] = _FlipClock.Lang.English;
})(jQuery);
(function ($) {

	/**
  * FlipClock Spanish Language Pack
  *
  * This class will used to translate tokens into the Spanish language.
  *
  */

	_FlipClock.Lang.Spanish = {

		'years': 'Años',
		'months': 'Meses',
		'days': 'Días',
		'hours': 'Horas',
		'minutes': 'Minutos',
		'seconds': 'Segundos'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['es'] = _FlipClock.Lang.Spanish;
	_FlipClock.Lang['es-es'] = _FlipClock.Lang.Spanish;
	_FlipClock.Lang['spanish'] = _FlipClock.Lang.Spanish;
})(jQuery);
(function ($) {

	/**
  * FlipClock English Language Pack
  *
  * This class will used to translate tokens into the English language.
  *	
  */

	_FlipClock.Lang.Persian = {

		'years': 'سال',
		'months': 'ماه',
		'days': 'روز',
		'hours': 'ساعت',
		'minutes': 'دقیقه',
		'seconds': 'ثانیه'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['fa'] = _FlipClock.Lang.Persian;
	_FlipClock.Lang['fa-ir'] = _FlipClock.Lang.Persian;
	_FlipClock.Lang['persian'] = _FlipClock.Lang.Persian;
})(jQuery);

(function ($) {

	/**
  * FlipClock Finnish Language Pack
  *
  * This class will used to translate tokens into the Finnish language.
  *	
  */

	_FlipClock.Lang.Finnish = {

		'years': 'Vuotta',
		'months': 'Kuukautta',
		'days': 'Päivää',
		'hours': 'Tuntia',
		'minutes': 'Minuuttia',
		'seconds': 'Sekuntia'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['fi'] = _FlipClock.Lang.Finnish;
	_FlipClock.Lang['fi-fi'] = _FlipClock.Lang.Finnish;
	_FlipClock.Lang['finnish'] = _FlipClock.Lang.Finnish;
})(jQuery);

(function ($) {

	/**
  * FlipClock Canadian French Language Pack
  *
  * This class will used to translate tokens into the Canadian French language.
  *
  */

	_FlipClock.Lang.French = {

		'years': 'Ans',
		'months': 'Mois',
		'days': 'Jours',
		'hours': 'Heures',
		'minutes': 'Minutes',
		'seconds': 'Secondes'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['fr'] = _FlipClock.Lang.French;
	_FlipClock.Lang['fr-ca'] = _FlipClock.Lang.French;
	_FlipClock.Lang['french'] = _FlipClock.Lang.French;
})(jQuery);

(function ($) {

	/**
  * FlipClock Hungarian Language Pack
  *
  * This class will used to translate tokens into the Hungarian language.
  *	
  */

	_FlipClock.Lang.German = {

		'years': 'év',
		'months': 'hónap',
		'days': 'nap',
		'hours': 'óra',
		'minutes': 'perc',
		'seconds': 'másodperc'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['hu'] = _FlipClock.Lang.German;
	_FlipClock.Lang['hu-hu'] = _FlipClock.Lang.German;
	_FlipClock.Lang['hungarian'] = _FlipClock.Lang.German;
})(jQuery);

(function ($) {

	/**
  * FlipClock Italian Language Pack
  *
  * This class will used to translate tokens into the Italian language.
  *	
  */

	_FlipClock.Lang.Italian = {

		'years': 'Anni',
		'months': 'Mesi',
		'days': 'Giorni',
		'hours': 'Ore',
		'minutes': 'Minuti',
		'seconds': 'Secondi'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['it'] = _FlipClock.Lang.Italian;
	_FlipClock.Lang['it-it'] = _FlipClock.Lang.Italian;
	_FlipClock.Lang['italian'] = _FlipClock.Lang.Italian;
})(jQuery);

(function ($) {

	/**
  * FlipClock Korean Language Pack
  *
  * This class will used to translate tokens into the Korean language.
  *	
  */

	_FlipClock.Lang.Korean = {

		'years': '년',
		'months': '월',
		'days': '일',
		'hours': '시',
		'minutes': '분',
		'seconds': '초'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['ko'] = _FlipClock.Lang.Korean;
	_FlipClock.Lang['ko-kr'] = _FlipClock.Lang.Korean;
	_FlipClock.Lang['korean'] = _FlipClock.Lang.Korean;
})(jQuery);

(function ($) {

	/**
  * FlipClock Latvian Language Pack
  *
  * This class will used to translate tokens into the Latvian language.
  *
  */

	_FlipClock.Lang.Latvian = {

		'years': 'Gadi',
		'months': 'Mēneši',
		'days': 'Dienas',
		'hours': 'Stundas',
		'minutes': 'Minūtes',
		'seconds': 'Sekundes'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['lv'] = _FlipClock.Lang.Latvian;
	_FlipClock.Lang['lv-lv'] = _FlipClock.Lang.Latvian;
	_FlipClock.Lang['latvian'] = _FlipClock.Lang.Latvian;
})(jQuery);
(function ($) {

	/**
  * FlipClock Dutch Language Pack
  *
  * This class will used to translate tokens into the Dutch language.
  */

	_FlipClock.Lang.Dutch = {

		'years': 'Jaren',
		'months': 'Maanden',
		'days': 'Dagen',
		'hours': 'Uren',
		'minutes': 'Minuten',
		'seconds': 'Seconden'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['nl'] = _FlipClock.Lang.Dutch;
	_FlipClock.Lang['nl-be'] = _FlipClock.Lang.Dutch;
	_FlipClock.Lang['dutch'] = _FlipClock.Lang.Dutch;
})(jQuery);

(function ($) {

	/**
  * FlipClock Norwegian-Bokmål Language Pack
  *
  * This class will used to translate tokens into the Norwegian language.
  *	
  */

	_FlipClock.Lang.Norwegian = {

		'years': 'År',
		'months': 'Måneder',
		'days': 'Dager',
		'hours': 'Timer',
		'minutes': 'Minutter',
		'seconds': 'Sekunder'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['no'] = _FlipClock.Lang.Norwegian;
	_FlipClock.Lang['nb'] = _FlipClock.Lang.Norwegian;
	_FlipClock.Lang['no-nb'] = _FlipClock.Lang.Norwegian;
	_FlipClock.Lang['norwegian'] = _FlipClock.Lang.Norwegian;
})(jQuery);

(function ($) {

	/**
  * FlipClock Portuguese Language Pack
  *
  * This class will used to translate tokens into the Portuguese language.
  *
  */

	_FlipClock.Lang.Portuguese = {

		'years': 'Anos',
		'months': 'Meses',
		'days': 'Dias',
		'hours': 'Horas',
		'minutes': 'Minutos',
		'seconds': 'Segundos'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['pt'] = _FlipClock.Lang.Portuguese;
	_FlipClock.Lang['pt-br'] = _FlipClock.Lang.Portuguese;
	_FlipClock.Lang['portuguese'] = _FlipClock.Lang.Portuguese;
})(jQuery);
(function ($) {

	/**
  * FlipClock Romanian Language Pack
  *
  * This class will used to translate tokens into the Romanian language.
  *
  */

	_FlipClock.Lang.Romanian = {

		'years': 'ani',
		'months': 'luni',
		'days': 'zile',
		'hours': 'ore',
		'minutes': 'minute',
		'seconds': 'secunde'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['ro'] = _FlipClock.Lang.Romanian;
	_FlipClock.Lang['ro-ro'] = _FlipClock.Lang.Romanian;
	_FlipClock.Lang['romanian'] = _FlipClock.Lang.Romanian;
})(jQuery);

(function ($) {

	/**
  * FlipClock Russian Language Pack
  *
  * This class will used to translate tokens into the Russian language.
  *
  */

	_FlipClock.Lang.Russian = {

		'years': 'лет',
		'months': 'месяцев',
		'days': 'дней',
		'hours': 'часов',
		'minutes': 'минут',
		'seconds': 'секунд'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['ru'] = _FlipClock.Lang.Russian;
	_FlipClock.Lang['ru-ru'] = _FlipClock.Lang.Russian;
	_FlipClock.Lang['russian'] = _FlipClock.Lang.Russian;
})(jQuery);
(function ($) {

	/**
  * FlipClock Slovak Language Pack
  *
  * This class will used to translate tokens into the Slovak language.
  *
  */

	_FlipClock.Lang.Slovak = {

		'years': 'Roky',
		'months': 'Mesiace',
		'days': 'Dni',
		'hours': 'Hodiny',
		'minutes': 'Minúty',
		'seconds': 'Sekundy'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['sk'] = _FlipClock.Lang.Slovak;
	_FlipClock.Lang['sk-sk'] = _FlipClock.Lang.Slovak;
	_FlipClock.Lang['slovak'] = _FlipClock.Lang.Slovak;
})(jQuery);

(function ($) {

	/**
  * FlipClock Swedish Language Pack
  *
  * This class will used to translate tokens into the Swedish language.
  *	
  */

	_FlipClock.Lang.Swedish = {

		'years': 'År',
		'months': 'Månader',
		'days': 'Dagar',
		'hours': 'Timmar',
		'minutes': 'Minuter',
		'seconds': 'Sekunder'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['sv'] = _FlipClock.Lang.Swedish;
	_FlipClock.Lang['sv-se'] = _FlipClock.Lang.Swedish;
	_FlipClock.Lang['swedish'] = _FlipClock.Lang.Swedish;
})(jQuery);

(function ($) {

	/**
  * FlipClock Thai Language Pack
  *
  * This class will used to translate tokens into the Thai language.
  *	
  */

	_FlipClock.Lang.Thai = {

		'years': 'ปี',
		'months': 'เดือน',
		'days': 'วัน',
		'hours': 'ชั่วโมง',
		'minutes': 'นาที',
		'seconds': 'วินาที'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['th'] = _FlipClock.Lang.Thai;
	_FlipClock.Lang['th-th'] = _FlipClock.Lang.Thai;
	_FlipClock.Lang['thai'] = _FlipClock.Lang.Thai;
})(jQuery);
(function ($) {

	/**
  * FlipClock Chinese Language Pack
  *
  * This class will used to translate tokens into the Chinese language.
  *	
  */

	_FlipClock.Lang.Chinese = {

		'years': '年',
		'months': '月',
		'days': '日',
		'hours': '时',
		'minutes': '分',
		'seconds': '秒'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['zh'] = _FlipClock.Lang.Chinese;
	_FlipClock.Lang['zh-cn'] = _FlipClock.Lang.Chinese;
	_FlipClock.Lang['chinese'] = _FlipClock.Lang.Chinese;
})(jQuery);
(function ($) {

	/**
  * FlipClock Traditional Chinese Language Pack
  *
  * This class will used to translate tokens into the Traditional Chinese.
  *	
  */

	_FlipClock.Lang.TraditionalChinese = {

		'years': '年',
		'months': '月',
		'days': '日',
		'hours': '時',
		'minutes': '分',
		'seconds': '秒'

	};

	/* Create various aliases for convenience */

	_FlipClock.Lang['zh-tw'] = _FlipClock.Lang.TraditionalChinese;
})(jQuery);

'use strict';
exports.default = _FlipClock;
exports.Base = Base;
