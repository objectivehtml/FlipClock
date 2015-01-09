/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	
	"use strict";
	
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	
	var proto = new this();
	
	extend.call(proto, _instance);
	
	proto.base = function() {
	// call this method from any other method to invoke that method's ancestor
	};

	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] !== null) { // casting
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
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
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
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
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
	
	toString: function() {
		return String(this.valueOf());
	}
});
/*jshint smarttabs:true */

var FlipClock;
	
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * FlipFlock Helper
	 *
	 * @param  object  A jQuery object or CSS select
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock = function(obj, digit, options) {
		if(digit instanceof Object && digit instanceof Date === false) {
			options = digit;
			digit = 0;
		}

		return new FlipClock.Factory(obj, digit, options);
	};

	/**
	 * The global FlipClock.Lang object
	 */

	FlipClock.Lang = {};
	
	/**
	 * The Base FlipClock class is used to extend all other FlipFlock
	 * classes. It handles the callbacks and the basic setters/getters
	 */

	FlipClock.Base = Base.extend({
		
		/**
		 * Build Date
		 */
		 
		buildDate: '2014-12-12',
		
		/**
		 * Version
		 */
		 
		version: '0.7.7',
		
		/**
		 * The bound events to this object
		 */

		_events: {},

		/**
		 * The bound events to this object
		 */

		_uid: false,
		 
		/**
		 * Sets the default options
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		constructor: function(_default, options) {
			if(typeof _default !== "object") {
				_default = {};
			}
			if(typeof options !== "object") {
				options = {};
			}
			this._events = {};
			this._uid = (new FlipClock.Uuid()).toString();		
			this.setOptions($.extend(true, {}, _default, options));
		},
		
		/**
		 * Delegates the callback to the defined method
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		callback: function(method) {
		 	if(typeof method === "function") {
				var args = [];
								
				for(var x = 1; x <= arguments.length; x++) {
					if(arguments[x]) {
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
		 
		log: function(str) {
			if(window.console && console.log) {
				console.log(str);
			}
		},
		 
		/**
		 * Get an single option value. Returns false if option does not exist
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		getOption: function(index) {
			if(this[index]) {
				return this[index];
			}
			return false;
		},
		
		/**
		 * Get all options
		 *
		 * @return	bool
		 */		
		 
		getOptions: function() {
			return this;
		},
		
		/**
		 * Set a single option value
		 *
		 * @param 	string 	The name of the option
		 * @param 	mixed 	The value of the option
		 */		
		 
		setOption: function(index, value) {
			this[index] = value;
		},
		
		/**
		 * Set a multiple options by passing a JSON object
		 *
		 * @param 	object 	The object with the options
		 * @param 	mixed 	The value of the option
		 */		
		
		setOptions: function(options) {
			for(var key in options) {
	  			if(typeof options[key] !== "undefined") {
		  			this.setOption(key, options[key]);
		  		}
		  	}
		},

		/*
		 * Bind an event
		 *
		 * @param  string
		 * @param  callback
		*/

		on: function(name, callback) {
			if(!this._events[name]) {
				this._events[name] = [];
			}

			var event = new FlipClock.Event(name, callback);

			this._events[name].push(event);

			return event;
		},

		/*
		 * Bind an event to be called once
		 *
		 * @param  string
		 * @param  callback
		*/

		once: function(name, callback) {
			var event = this.on(name, callback);

			event.setFireOnce(true);
		},

		/*
		 * Remove all bound events for a specific trigger
		 *
		 * @param  string
		 * @return 
		*/

		off: function(name) {
			if(this._events[name]) {
				delete this._events[name];
			}
		},

		/*
		 * Remove all bound events for a specific trigger
		 *
		 * @param  string
		 * @return 
		*/

		trigger: function(name) {
			if(this._events[name]) {
				var params = [];

				for(var x in arguments) {
					if(x > 0) {
						params.push(arguments[x]);
					}
				}

				for(var i in this._events[name]) {
					this._events[name][i].fire(this, params);
				}

				return this._events[name];
			}
		},

		/*
		 * Translate a string to the localized locale
		 *
		 * @param  
		 * @return 
		*/

		localize: function(name) {
			if(this.translator) {
				this.translator.localize(name);
			}

			return name;
		},

		/*
		 * Helper method for localize. t() is just short.
		 *
		 * @param  
		 * @return 
		*/

		t: function(name) {
			return this.localize(name);
		}
		
	});
	
}(jQuery));
/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * Capitalize the first letter in a string
	 *
	 * @return string
	 */
	 
	String.prototype.ucfirst = function() {
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.FlipClock = function(digit, options) {	
		return new FlipClock($(this), digit, options);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.flipClock = function(digit, options) {
		return $.fn.FlipClock(digit, options);
	};
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock.List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific value.
	 *
	 * @param 	mixed   This is the value used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip',
			play: 'play'
		},
				
		/**
		 * The jQuery object
		 */		
		 
		$el: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
		/**
		 * The last value selected in the list
		 */		
		 
		lastValue: 0,
			
		/**
		 * The selected value in the list
		 */		
		 
		value: 0,
		
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An string or integer use to select the correct value
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(value, options) {
			this.base(options);

			this.value = value;

			var t = this;

			this.createList();

			this.trigger('init');
		},
		
		/**
		 * Select the value in the list
		 *
		 * @param  int  A value 0-9	 
		 */
		 
		select: function(value) {
			var _afterListItem = this._afterListItem;

			this.lastValue = this.value;

			if(typeof value === "undefined") {
				value = this.value;
			}
			else {
				this.value = value;
			}

			if(this.value != this.lastValue) {
				this._beforeListItem.$el.removeClass(this.classes.before);

				this.$el.find('.'+this.classes.active)
					.removeClass(this.classes.active)
					.addClass(this.classes.before);

				this.items.splice(0, 1);

				this._afterListItem = this.createListItem(this.classes.active, this.value);

				this._beforeListItem.$el.remove();
				this._beforeListItem = _afterListItem;

				this.trigger('select', this.value);
			}	
		},

		/*
		 * Add the play class to the list
		 *
		 * @return 
		*/

		addPlayClass: function() {
			this.$el.addClass(this.classes.play);
		},
		
		/*
		 * Remove the play class to the list
		 *
		 * @return 
		*/

		removePlayClass: function() {
			this.$el.removeClass(this.classes.play);
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 */
		 
		createListItem: function(css, value) {
			var item = new FlipClock.ListItem(css, value);

			this.items.push(item);

			this.$el.append(item.$el);

			this.trigger('create:item', item);

			return item;
		},

		/**
		 * Create the lsit of values and appends it to the DOM object 
		 */
		 
		createList: function() {
			var $el = this.$el = $('<ul class="'+this.classes.flip+'"></ul>');

			this._beforeListItem = this.createListItem(this.classes.before, this.getPrevValue());
			this._afterListItem = this.createListItem(this.classes.active, this.value);

			$el.append(this._beforeListItem.el);
			$el.append(this._afterListItem.el);
			
			this.trigger('create:list', $el);		

			return $el;
		}

	});
		
}(jQuery));
(function($) {

	FlipClock.ListItem = FlipClock.Base.extend({
		
		css: null,

		value: null,

		classes: {
			up: 'up',
			down: 'down'
		},

		$el: false,
		
		constructor: function(css, value, options) {
			this.base(options);
			this.css = css;
			this.value = value;
			
			this.$el = $([
				'<li class="'+(css ? css : '')+'">',
					'<a href="#">',
						'<div class="'+this.classes.up+'">',
							'<div class="shadow"></div>',
							'<div class="inn">'+value+'</div>',
						'</div>',
						'<div class="'+this.classes.down+'">',
							'<div class="shadow"></div>',
							'<div class="inn">'+value+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join(''));
		},

		toString: function() {
			return this.$el.html();
		}

	});

}(jQuery));
/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific value.
	 *
	 * @param 	mixed   This is the value used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.EnglishAlphaList = FlipClock.List.extend({

		capitalLetters: true,
		
		getPrevValue: function() {
			var charCode = this.value.charCodeAt(0) - 1;
			var minCode = 65, maxCode = 90;

			if(!this.capitalLetters) {
				minCode = 97;
				maxCode = 122;
			}

			if(charCode < minCode) {
				charCode = maxCode;
			}

			return String.fromCharCode(charCode);
		},

		getNextValue: function() {
			var charCode = this.value.charCodeAt(0) + 1;
			var minCode = 65, maxCode = 90;

			if(!this.capitalLetters) {
				minCode = 97;
				maxCode = 122;
			}

			if(charCode > maxCode) {
				charCode = minCode;
			}

			return String.fromCharCode(charCode);
		}

	});
	
	
}(jQuery));
(function($) {

	FlipClock.Divider = FlipClock.Base.extend({

		label: false,

		css: false,
		
		excludeDots: false,

		translator: false,

		classes: {
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label'
		},

		$el: false,

		constructor: function(label, options) {
			this.base(options);

			this.label = this.t(label);

			var dots = !this.excludeDots ? [
				'<span class="'+this.classes.dot+' top"></span>',
				'<span class="'+this.classes.dot+' bottom"></span>'
			].join('') : '';

			this.$el = $([
				'<span class="'+this.classes.divider+' '+(this.css ? this.css : '').toLowerCase()+'">',
					'<span class="'+this.classes.label+'">'+(this.label ? this.label : '')+'</span>',
					dots,
				'</span>'
			].join(''));

		},

		toString: function() {
			return this.$el.html();
		}

	});

}(jQuery));
(function($) {

	FlipClock.Event = FlipClock.Base.extend({

		name: false,

		_hasFired: false,

		_lastResponse: null,

		_preventFire: false,

		_fireOnce: false,

		_callback: function() {},

		constructor: function(name, callback) {
			if(!name) {
				throw "Events must have a name";
			}

			if(typeof callback === "function") {
				this._callback = callback;
			}
		},

		fire: function(obj, arguments) {
			if(this._preventFire === false) {
				this.setLastResponse(this._callback.apply(obj, arguments));
				this._hasFired = true;
				if(this._fireOnce) {
					this._preventFire = true;
				}
			}
		},

		off: function() {
			this._preventFire = true;
		},

		hasFired: function() {
			return this._hasFired;
		},

		getLastResponse: function() {
			return this._lastResponse;
		},

		setLastResponse: function(response) {
			this._lastResponse = response;
		},

		getFireOnce: function(value) {
			return this._fireOnce;
		},

		setFireOnce: function(value) {
			this._fireOnce = value;
		}

	});

}(jQuery));
/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock Face class is the base class in which to extend
	 * all other FlockClock.Face classes.
	 *
	 * @param 	object  An object of properties to override the default	
	 */
	 
	FlipClock.Face = FlipClock.Base.extend({
		
		/**
		 * The clock's animation rate.
		 * 
		 * Note, currently this property doesn't do anything.
		 * This property is here to be used in the future to
		 * programmaticaly set the clock's animation speed
		 */		

		animationRate: 1000,

		/**
		 * Sets whether or not the clock should start upon instantiation
		 */
		 
		autoStart: true,

		/**
		 * Sets whether or not the clock should countdown
		 */
		 
		countdown: false,

		/**
		 * The default language
		 */	
		 
		defaultLanguage: 'english',
		 
		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */
		 
		dividers: [],

		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,

		/**
		 * The language being used to display labels (string)
		 */	
		 
		language: 'english',

		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],

		/**
		 * The minimum digits the clock must have
		 */		

		minimumDigits: 0,

		/**
		 * The original starting value of the clock face.
		 */		
		 
		originalValue: 0,

		/**
		 * The FlipClock.Time object
		 */		
		 
		time: false,
		
		/**
		 * The FlipClock.Timer object
		 */		
		 
		timer: false,
		
		/**
		 * The FlipClock.Translator object
		 */		
		 
		translator: false,

		/**
		 * The current value of the clock face.
		 */		
		 
		value: false,
		
		/**
		 * Constructor
		 *
		 * @param 	mixed
		 * @param 	object
		 */
		 
		constructor: function(value, options) {
			var t = this;

			if(value instanceof Date === false && typeof value === "object") {
				options = value;
				value = 0;
			}

			this.dividers = [];
			this.lists = [];
			this.originalValue = value;

			this.translator = new FlipClock.Translator({
				defaultLanguage: this.defaultLanguage,
				language: this.language
			});

			this.time = new FlipClock.Time(value, {
				minimumDigits: 0
			});

			this.timer = new FlipClock.Timer();

			this.timer.on('interval', function() {
				t.flip();
				t.trigger('interval');
			});

			this.base(options);

			this.on('add:digit', function(list) {
				if(this.dividers.length) {
					for(var i in this.dividers) {
						var divider = this.dividers[i];

						if(!divider.$el.is(':first-child')) {
							divider.$el.insertAfter(divider.$el.next());
						}
					}
				}
			});

			this.trigger('create');
		},
		
		/**
		 * Add a digit to the clock face
		 */
		 
		addDigit: function(digit) {
			var list = this.createList(digit);

			console.log(this._events);

			this.trigger('add:digit', list);

			return list;
		},

		attachList: function($el, list) {
			$el.append(list.$el);
		},
			
		/**
		 * Build the clock face
		 */
		 
		build: function() {
			if(this.autoStart) {
				this.start();
			}
		},
	
		/**
		 * Perform arbirtrary logic when the clock face instantiated.
		 * The factor object is passed in the first argument
		 *
		 * @param  object
		 */

		init: function(factory) {
			this.trigger('init');
		},
		
		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider. 
		 *					If not set, is false.
		 */
		 
		createDivider: function(label, css, excludeDots) {
			if(typeof css == "boolean" || !css) {
				excludeDots = css;
				css = false;
			}

			var divider = new FlipClock.Divider(label, {
				css: css,
				excludeDots: excludeDots,
				translator: this.translator
			});

			this.dividers.push(divider);

			return divider;
		},
		
		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param	mixed 	The value to select in the list
		 * @param	object  An object to override the default properties
		 */
		 
		createList: function(value, options) {
			var List = this.getListClass();

			var list = new List(value, {
				translator: this.translator
			});
		
			if(this.timer.running) {
				list.addPlayClass();
			}

			this.lists.push(list);

			this.trigger('create:list', list);

			return list;
		},

		/*
		 * Get the list class object
		 *
		 * @return 
		*/

		getListClass: function() {
			return FlipClock.NumericList;
		},
		
		/**
		 * Triggers when the clock is reset
		 */

		reset: function() {
			this.time.time = Math.round(this.originalValue);
			this.flip();
			this.trigger('reset');
		},

		/**
		 * Starts the clock
		 */
		 
		start: function() {
			if(!this.timer.running) {
				this.trigger('before:start');
				this.timer.start();
				this.trigger('start');
			}
		},
		
		/**
		 * Stops the clock
		 */
		 
		stop: function() {
			var t = this;
			this.trigger('before:stop');
			this.timer.stop(function() {
				t.trigger('stop');
			});
		},
		
		/**
		 * Auto increments/decrements the value of the clock face
		 */
		 
		autoIncrement: function() {
			if(!this.countdown) {
				this.increment();
			}
			else {
				this.decrement();
			}
		},

		/**
		 * Increments the value of the clock face
		 */
		 
		increment: function() {
			this.time.addSecond();
		},

		/**
		 * Decrements the value of the clock face
		 */

		decrement: function() {
			if(this.time.getTimeSeconds() == 0) {
	        	this.stop()
			}
			else {
				this.time.subSecond();
			}
		},
		
		/**
		 * Triggers when the numbers on the clock flip
		 */
		 
		flip: function(time) {
			var t = this;

			$.each(time, function(i, digit) {
				if(t.lists[i]) {
					t.lists[i].select(digit);

					if(t.timer.running) {
						t.lists[i].addPlayClass();
					}
				}	
				else {
					t.addDigit(digit);
				}
			});

			this.trigger('flip');
		},

		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.flip();		
		},
		
		/**
		 * Get the clock time
		 *
		 * @return  object  Returns a FlipClock.Time object
		 */
		 
		getTime: function(time) {
			return this.time;		
		},

		/**
		 * Changes the increment of time to up or down (add/sub)
		 */
		
		setCountdown: function(value) {			
			this.countdown = value ? true : false;
				
			if(this.timer.running) {
				this.stop();
				this.start();
			}
		}	

	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
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
	 	
	FlipClock.Factory = FlipClock.Base.extend({
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			wrapper: 'flip-clock-wrapper'
		},
		
		/**
		 * The name of the clock face class in use
		 */	
		 
		clockFace: 'HourlyCounter',
		 
		/**
		 * The FlipClock.Face options object
		 */	
		 
		clockFaceOptions: {},
		 
		/**
		 * The name of the default clock face class to use if the defined
		 * clockFace variable is not a valid FlipClock.Face object
		 */	
		 
		defaultClockFace: 'HourlyCounter',
		 
		/**
		 * The jQuery object
		 */		
		 
		$el: false,

		/**
		 * The FlipClock.Face object
		 */	
		 
		face: false,		 
		 
		/**
		 * Constructor
		 *
		 * @param   object  The wrapping jQuery object
		 * @param	object  Number of seconds used to start the clock
		 * @param	object 	An object override options
		 * @return
		 */
		 
		constructor: function($el, value, options) {			
			if(value instanceof Date === false && typeof value === "object") {
				options = value;
				value = 0;
			}

			this.base(options);

			this.lists = [];
			
			this.$el = $el.addClass(this.classes.wrapper);

			this.loadClockFace(this.clockFace, value, this.clockFaceOptions);
		},
		
		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 * @return  object
		 */
		 
		loadClockFace: function(name, value, options) {	
			var t = this, face, suffix = 'Face', hasStopped = false;
			
			name = name.ucfirst()+suffix;

			if(this.face.stop) {
				this.stop();
				hasStopped = true;
			}

			this.$el.html('');

			if(FlipClock[name]) {
				this.face = new FlipClock[name](value, options);
			}
			else {
				this.face = new FlipClock[this.defaultClockFace+suffix](value, options);
			}

			this.face.on('create:list', function(list) {
				t.face.attachList(t.$el, list);
			});

			this.face.on('destroy', function() {
				t.callback(t.onDestroy);
			});

			this.face.on('start', function() {
				t.callback(t.onStart);
			});
			
			this.face.on('stop', function() {
				t.callback(t.onStop);
			});
			
			this.face.on('reset', function() {
				t.callback(t.onReset);
			});
			
			this.face.on('init', function() {
				t.callback(t.onInit);
			});
			
			this.face.on('interval', function() {
				t.callback(t.onInterval);
			});
			
			this.face.init(this);

			this.face.build();

			if(hasStopped) {
				this.start();
			}
			
			return this.face;
		},
			
		/**
		 * Starts the clock
		 *
		 * @return  object
		 */
		 
		start: function() {
			this.face.start();

			return this;
		},
		
		/**
		 * Stops the clock
		 *
		 * @return  object
		 */
		 
		stop: function() {
			this.face.stop();
			
			return this;
		},

		/**
		 * Reset the clock
		 *
		 * @return  object
		 */
		 
		reset: function() {
			this.face.reset();
			
			return this;
		},

		/**
		 * Sets the clock time
		 *
		 * @return  object
		 */
		 
		setTime: function(time) {
			this.face.setTime(time);
			
			return this;
		},

		/**
		 * Gets the clock time
		 *
		 * @return  object
		 */
		 
		getTime: function() {
			this.face.getTime();
			
			return this;
		},

		onDestroy: function() {},
		
		onCreate: function() {},
		
		onInit: function() {},
		
		onInterval: function() {},
		
		onStart: function() {},
		
		onStop: function() {},
		
		onReset: function() {}
		
	});
		
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock.List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific value.
	 *
	 * @param 	mixed   This is the value used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.NumericList = FlipClock.List.extend({
		
		getPrevValue: function() {
			if(this.value > 0) {
				return this.value - 1;
			}

			return 9;
		},

		getNextValue: function() {
			if(this.value < 9) {
				return this.value + 1;
			}

			return 0;
		}

	});
	
	
}(jQuery));
/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
			
	/**
	 * The FlipClock Time class is used to manage all the time 
	 * calculations.
	 *
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Time = FlipClock.Base.extend({
		
		/**
		 * The time (in seconds) or a date object
		 */		
		 
		time: 0,
		
		/**
		 * The minimum number of digits the clock face must have
		 */		
		 
		minimumDigits: 0,

		/**
		 * Constructor
		 *
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(time, options) {
			if(typeof options != "object") {
				options = {};
			}

			if(time instanceof Date) {
				this.time = time;
			}
			else if(time) {
				this.time = Math.round(time);
			}

			this.base(options);

		},

		/**
		 * Convert a string or integer to an array of digits
		 *
		 * @param   mixed  String or Integer of digits	 
		 * @return  array  An array of digits 
		 */
		 
		convertDigitsToArray: function(str) {
			var data = [];
			
			str = str.toString();
			
			for(var x = 0;x < str.length; x++) {
				if(str[x].match(/^\d*$/g)) {
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
		 
		digit: function(i) {
			var timeStr = this.toString();
			var length  = timeStr.length;
			
			if(timeStr[length - i])	 {
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
		 
		digitize: function(obj) {
			var data = [];

			$.each(obj, function(i, value) {
				value = value.toString();
				
				if(value.length == 1) {
					value = '0'+value;
				}
				
				for(var x = 0; x < value.length; x++) {
					data.push(value.charAt(x));
				}				
			});

			if(data.length > this.minimumDigits) {
				this.minimumDigits = data.length;
			}
			
			if(this.minimumDigits > data.length) {
				for(var x = data.length; x < this.minimumDigits; x++) {
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

		getDateObject: function() {
			if(this.time instanceof Date) {
				return this.time;
			}

			return new Date((new Date()).getTime() + this.getTimeSeconds() * 1000);
		},
		
		/**
		 * Gets a digitized daily counter
		 *
		 * @return  object  Returns a digitized object
		 */

		getDayCounter: function(includeSeconds) {
			var digits = [
				this.getDays(),
				this.getHours(true),
				this.getMinutes(true)
			];

			if(includeSeconds) {
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
		 
		getDays: function(mod) {
			var days = this.getTimeSeconds() / 60 / 60 / 24;
			
			if(mod) {
				days = days % 7;
			}
			
			return Math.floor(days);
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourCounter: function() {
			var obj = this.digitize([
				this.getHours(),
				this.getMinutes(true),
				this.getSeconds(true)
			]);
			
			return obj;
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourly: function() {
			return this.getHourCounter();
		},
		
		/**
		 * Gets number of hours
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getHours: function(mod) {
			var hours = this.getTimeSeconds() / 60 / 60;
			
			if(mod) {
				hours = hours % 24;	
			}
			
			return Math.floor(hours);
		},
		
		/**
		 * Gets the twenty-four hour time
		 *
		 * @return  object  returns a digitized object
		 */
		 
		getMilitaryTime: function(date, showSeconds) {
			if(typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if(!date) {
				date = this.getDateObject();
			}

			var data  = [
				date.getHours(),
				date.getMinutes()			
			];

			if(showSeconds === true) {
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
		 
		getMinutes: function(mod) {
			var minutes = this.getTimeSeconds() / 60;
			
			if(mod) {
				minutes = minutes % 60;
			}
			
			return Math.floor(minutes);
		},
		
		/**
		 * Gets a minute breakdown
		 */
		 
		getMinuteCounter: function() {
			var obj = this.digitize([
				this.getMinutes(),
				this.getSeconds(true)
			]);

			return obj;
		},
		
		/**
		 * Gets time count in seconds regardless of if targetting date or not.
		 *
		 * @return  int   Returns a floored integer
		 */
		 
		getTimeSeconds: function(countdown, date) {
			if(!date) {
				date = new Date();
			}

			if (this.time instanceof Date) {
				if (countdown) {
					return Math.max(this.time.getTime()/1000 - date.getTime()/1000,0);
				} else {
					return date.getTime()/1000 - this.time.getTime()/1000 ;
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
		 
		getTime: function(date, showSeconds) {
			if(typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if(!date) {
				date = this.getDateObject();
			}

			var hours = date.getHours();
			var merid = hours > 12 ? 'PM' : 'AM';
			var data   = [
				hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
				date.getMinutes()			
			];

			if(showSeconds === true) {
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
		 
		getSeconds: function(mod) {
			var seconds = this.getTimeSeconds();
			
			if(mod) {
				if(seconds == 60) {
					seconds = 0;
				}
				else {
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
		 
		getWeeks: function(mod) {
			var weeks = this.getTimeSeconds() / 60 / 60 / 24 / 7;
			
			if(mod) {
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
		 
		removeLeadingZeros: function(totalDigits, digits) {
			var total    = 0;
			var newArray = [];
			
			$.each(digits, function(i, digit) {
				if(i < totalDigits) {
					total += parseInt(digits[i], 10);
				}
				else {
					newArray.push(digits[i]);
				}
			});
			
			if(total === 0) {
				return newArray;
			}
			
			return digits;
		},

		/**
		 * Adds X second to the current time
		 */

		addSeconds: function(x) {
			if(this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() + x);
			}
			else {
				this.time += x;
			}
		},

		/**
		 * Adds 1 second to the current time
		 */

		addSecond: function() {
			this.addSeconds(1);
		},

		/**
		 * Substracts X seconds from the current time
		 */

		subSeconds: function(x) {
			if(this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() - x);
			}
			else {
				this.time -= x;
			}
		},

		/**
		 * Substracts 1 second from the current time
		 */

		subSecond: function() {
			this.subSeconds(1);
		},
		
		/**
		 * Converts the object to a human readable string
		 */
		 
		toString: function() {
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
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * The FlipClock.Timer object managers the JS timers
	 *
	 * @param	object  Override the default options
	 */
	
	FlipClock.Timer = FlipClock.Base.extend({
		
		/**
		 * The rate of the animation in milliseconds (not currently in use)
		 */		
		 
		animationRate: 1000,

		/**
		 * FlipClock timer count (how many intervals have passed)
		 */		
		 
		count: 0,
		
		/**
		 * Timer interval (1 second by default)
		 */		
		 
		interval: 1000,

		/**
		 * Is the timer running?
		 */		
		 
		running: false,
				
		/**
		 * Constructor
		 *
		 * @return	void
		 */		
		 
		constructor: function(options) {
			this.base(options);
			this.trigger('init');
		},
		
		/**
		 * This method gets the elapsed the time as an interger
		 *
		 * @return	void
		 */		
		 
		getElapsed: function() {
			return this.count * this.interval;
		},
		
		/**
		 * This method gets the elapsed the time as a Date object
		 *
		 * @return	void
		 */		
		 
		getElapsedTime: function() {
			return new Date(this.time + this.getElapsed());
		},
		
		/**
		 * This method is resets the timer
		 *
		 * @param 	callback  This method resets the timer back to 0
		 * @return	void
		 */		
		 
		reset: function(callback) {
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);
			this.trigger('reset');
		},
		
		/**
		 * This method is starts the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		start: function(callback) {	
			this.running = true;	
			this._createTimer(callback);
			this.trigger('start');
		},
		
		/**
		 * This method is stops the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		stop: function(callback) {
			var t = this;

			this.running = false;
			this._clearInterval();

			setTimeout(function() {
				t.callback(callback);
				t.trigger('stop');
			}, this.interval);
		},
		
		/**
		 * Clear the timer interval
		 *
		 * @return	void
		 */		
		 
		_clearInterval: function() {
			clearInterval(this.timer);
		},
		
		/**
		 * Create the timer object
		 *
		 * @param 	callback  A function that is called once the timer is created
		 * @return	void
		 */		
		 
		_createTimer: function(callback) {
			this._setInterval(callback);		
		},
		
		/**
		 * Destroy the timer object
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 	
		destroyTimer: function(callback) {
			this._clearInterval();
			this.running = false;		
			this.timer = false;
			this.callback(callback);
			this.trigger('destroy')
		},
		
		/**
		 * This method is called each time the timer interval is ran
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_interval: function(callback) {
			this.callback(callback);
			this.trigger('interval');
			this.count++;
		},
		
		/**
		 * This sets the timer interval
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_setInterval: function(callback) {
			var t = this;
	
			t._interval(callback);

			t.timer = setInterval(function() {		
				t._interval(callback);
			}, this.interval);
		}
			
	});
	
}(jQuery));
(function() {

	FlipClock.Translator = FlipClock.Base.extend({

		/**
		 * The default language
		 */	
		 
		defaultLanguage: 'english',
		 
		/**
		 * The language being used to display labels (string)
		 */	
		 
		language: 'english',

		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,

		/*
		 * Constructor
		 *
		 * @param  string
		 * @return 
		*/

		constructor: function(options) {
			this.base(options);
			this.loadLanguage(this.language);
		},

		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */
		 
		loadLanguage: function(name) {	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]) {
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]) {
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.defaultLanguage];
			}
			
			return this.lang = lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

		localize: function(index, obj) {
			var lang = this.lang;

			if(!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object") {
				lang = obj;
			}

			if(lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		}

	});

}());
(function($) {

	FlipClock.Uuid = FlipClock.Base.extend({
		
		value: false,

		constructor: function() {
			this.value = this.generate();
		},

		generate: function() {
			var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		    });
		    return uuid;
		},

		equals: function(other) {
		    return this.isUuid(other) && value == other;
		},

		isUuid: function(value) {
			var validator = new RegExp("^[a-z0-9]{32}$", "i");

			return value && (value instanceof Uuid || validator.test(value.toString()));
		},

		toString: function() {
			return this.value;
		},

		toJSON: function() {
			return this.value;
		}

	});

}(jQuery));
(function($) {
	
	/**
	 * Twenty-Four Hour Clock Face
	 *
	 * This class will generate a twenty-four our clock for FlipClock.js	
	 */
	 
	FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function(time) {
			var time = time ? time : this.time.getMilitaryTime(false, this.showSeconds);

			for(var i in time) {
				this.createList(time[i]);
			}
			
			this.createDivider().$el.insertBefore(this.lists[this.lists.length - 2].$el);
			this.createDivider().$el.insertBefore(this.lists[this.lists.length - 4].$el);
			
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			this.autoIncrement();
			
			time = time ? time : this.time.getMilitaryTime(false, this.showSeconds);
			
			this.base(time);	
		}
				
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Counter Clock Face
	 *
	 * This class will generate a generice flip counter. The timer has been
	 * disabled. clock.increment() and clock.decrement() have been added.
	 */
	 
	FlipClock.CounterFace = FlipClock.Face.extend({
		
		/**
		 * Tells the counter clock face if it should auto-increment
		 */

		shouldAutoIncrement: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 * @return	
		 */
		 
		constructor: function(value, options) {
			this.base(value, options);

			this.timer.off('stop');

			this.on('before:start', function() {
				this.shouldAutoIncrement = true;
			});

			this.on('before:stop', function() {
				this.shouldAutoIncrement = false;
			});

			this.on('create:list', function(list) {
				list.addPlayClass();
			});
		},

		/**
		 * Build the clock face	
		 *	
		 * @return
		 */
		 
		build: function() {
			var t = this, time = this.getTime().digitize([this.getTime().time]);

			$.each(time, function(i, value) {
				t.createList(value);
			});

			if(this.autoStart) {
				this.shouldAutoIncrement = true;
			}

			this.base();
		},
		
		/**
		 * Flip the clock face
		 *	
		 * @return
		 */
		 
		flip: function(time) {
			if(this.shouldAutoIncrement) {
				this.autoIncrement();
			}

			if(!time) {
				time = this.getTime().digitize([this.getTime().time]);
			}

			this.base(time);
		},

		/**
		 * Perform arbirtrary logic when the clock face instantiated.
		 * The factor object is passed in the first argument
		 *
		 * @param  object
		 * @return
		 */

		init: function(factory) {
			var t = this;

			factory.increment = function() {
				t.increment();
				t.flip();
			};

			factory.decrement = function() {
				t.decrement();
				t.flip();
			};

			this.base(factory);
		}

	});
	
}(jQuery));
(function($) {

	/**
	 * Daily Counter Clock Face
	 *
	 * This class will generate a daily counter for FlipClock.js. A
	 * daily counter will track days, hours, minutes, and seconds. If
	 * the number of available digits is exceeded in the count, a new
	 * digit will be created.
	 */

	FlipClock.DailyCounterFace = FlipClock.Face.extend({

		showSeconds: true,

		/**
		 * Build the clock face
		 */

		build: function(time) {			
			var offset = 0, time = time ? time : this.time.getDayCounter(this.showSeconds);

			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.showSeconds) {
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - 2].$el);
			}
			else
			{
				offset = 2;
			}

			this.createDivider('Minutes').$el.insertBefore(this.lists[this.lists.length - 4 + offset].$el);
			this.createDivider('Hours').$el.insertBefore(this.lists[this.lists.length - 6 + offset].$el);
			this.createDivider('Days', true).$el.insertBefore(this.lists[0].$el);

			this.base();
		},

		/**
		 * Flip the clock face
		 */

		flip: function(time) {
			if(!time) {
				time = this.time.getDayCounter(this.showSeconds);
			}

			this.autoIncrement();
			this.base(time);
		}

	});

}(jQuery));
(function($) {
			
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be 
	 * created.
	 */
	 
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
			
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var time = time ? time : this.time.getHourCounter();
			
			for(var i in time) {
				this.createList(time[i]);
			}

			this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - 2].$el);
			this.createDivider('Minutes').$el.insertBefore(this.lists[this.lists.length - 4].$el);
			
			if(!excludeHours) {
				this.createDivider('Hours', true).$el.insertBefore(this.lists[0].$el);
			}

			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {
			if(!time) {
				time = this.time.getHourCounter();
			}	

			this.autoIncrement();
			this.base(time);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			this.base(obj);

			this.dividers[0].insertAfter(this.dividers[0].next());
		}
		
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Minute Counter Clock Face
	 *
	 * This class will generate a minute counter for FlipClock.js. A
	 * minute counter will track minutes and seconds. If an hour is 
	 * reached, the counter will reset back to 0. (4 digits max)
	 */
	 
	FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({

		/**
		 * Build the clock face
		 *	
		 * @return
		 */
		 
		build: function() {
			this.base(true, this.time.getMinuteCounter());
		},
		
		/**
		 * Flip the clock face
		 *	
		 * @return
		 */
		 
		flip: function(time) {
			if(!time) {
				time = this.time.getMinuteCounter();
			}

			this.base(time);
		}

	});
	
}(jQuery));
(function($) {
		
	/**
	 * Twelve Hour Clock Face
	 *
	 * This class will generate a twelve hour clock for FlipClock.js
	 */
	 
	FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
		
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
		 
		build: function() {
			var t = this;

			var time = this.time.getTime(false, this.showSeconds);

			this.base(time);			
			this.meridiumText = this.getMeridium();			
			this.meridium = $([
				'<ul class="flip-clock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));
						
			this.meridium.insertAfter(this.lists[this.lists.length-1].$el);
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {			
			if(this.meridiumText != this.getMeridium()) {
				this.meridiumText = this.getMeridium();
				this.meridium.find('a').html(this.meridiumText);	
			}
			this.base(this.time.getTime(false, this.showSeconds));	
		},
		
		/**
		 * Get the current meridium
		 *
		 * @return  string  Returns the meridium (AM|PM)
		 */
		 
		getMeridium: function() {
			return new Date().getHours() >= 12 ? this.t('PM') : this.t('AM');
		},
		
		/**
		 * Is it currently in the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isPM: function() {
			return this.getMeridium() == 'PM' ? true : false;
		},

		/**
		 * Is it currently before the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isAM: function() {
			return this.getMeridium() == 'AM' ? true : false;
		}
				
	});
	
}(jQuery));
(function($) {

    /**
     * FlipClock Arabic Language Pack
     *
     * This class will be used to translate tokens into the Arabic language.
     *
     */

    FlipClock.Lang.Arabic = {

      'years'   : 'سنوات',
      'months'  : 'شهور',
      'days'    : 'أيام',
      'hours'   : 'ساعات',
      'minutes' : 'دقائق',
      'seconds' : 'ثواني'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['ar']      = FlipClock.Lang.Arabic;
    FlipClock.Lang['ar-ar']   = FlipClock.Lang.Arabic;
    FlipClock.Lang['arabic']  = FlipClock.Lang.Arabic;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Danish Language Pack
	 *
	 * This class will used to translate tokens into the Danish language.
	 *	
	 */
	 
	FlipClock.Lang.Danish = {
		
		'years'   : 'År',
		'months'  : 'Måneder',
		'days'    : 'Dage',
		'hours'   : 'Timer',
		'minutes' : 'Minutter',
		'seconds' : 'Sekunder'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['da']     = FlipClock.Lang.Danish;
	FlipClock.Lang['da-dk']  = FlipClock.Lang.Danish;
	FlipClock.Lang['danish'] = FlipClock.Lang.Danish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock German Language Pack
	 *
	 * This class will used to translate tokens into the German language.
	 *	
	 */
	 
	FlipClock.Lang.German = {
		
		'years'   : 'Jahre',
		'months'  : 'Monate',
		'days'    : 'Tage',
		'hours'   : 'Stunden',
		'minutes' : 'Minuten',
		'seconds' : 'Sekunden'	
 
	};
	
	/* Create various aliases for convenience */
 
	FlipClock.Lang['de']     = FlipClock.Lang.German;
	FlipClock.Lang['de-de']  = FlipClock.Lang.German;
	FlipClock.Lang['german'] = FlipClock.Lang.German;
 
}(jQuery));
(function($) {
		
	/**
	 * FlipClock English Language Pack
	 *
	 * This class will used to translate tokens into the English language.
	 *	
	 */
	 
	FlipClock.Lang.English = {
		
		'years'   : 'Years',
		'months'  : 'Months',
		'days'    : 'Days',
		'hours'   : 'Hours',
		'minutes' : 'Minutes',
		'seconds' : 'Seconds'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['en']      = FlipClock.Lang.English;
	FlipClock.Lang['en-us']   = FlipClock.Lang.English;
	FlipClock.Lang['english'] = FlipClock.Lang.English;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Spanish Language Pack
	 *
	 * This class will used to translate tokens into the Spanish language.
	 *	
	 */
	 
	FlipClock.Lang.Spanish = {
		
		'years'   : 'A&#241;os',
		'months'  : 'Meses',
		'days'    : 'D&#205;as',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundo'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['es']      = FlipClock.Lang.Spanish;
	FlipClock.Lang['es-es']   = FlipClock.Lang.Spanish;
	FlipClock.Lang['spanish'] = FlipClock.Lang.Spanish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Finnish Language Pack
	 *
	 * This class will used to translate tokens into the Finnish language.
	 *	
	 */
	 
	FlipClock.Lang.Finnish = {
		
		'years'   : 'Vuotta',
		'months'  : 'Kuukautta',
		'days'    : 'Päivää',
		'hours'   : 'Tuntia',
		'minutes' : 'Minuuttia',
		'seconds' : 'Sekuntia'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['fi']      = FlipClock.Lang.Finnish;
	FlipClock.Lang['fi-fi']   = FlipClock.Lang.Finnish;
	FlipClock.Lang['finnish'] = FlipClock.Lang.Finnish;

}(jQuery));

(function($) {

  /**
   * FlipClock Canadian French Language Pack
   *
   * This class will used to translate tokens into the Canadian French language.
   *
   */

  FlipClock.Lang.French = {

    'years'   : 'Ans',
    'months'  : 'Mois',
    'days'    : 'Jours',
    'hours'   : 'Heures',
    'minutes' : 'Minutes',
    'seconds' : 'Secondes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['fr']      = FlipClock.Lang.French;
  FlipClock.Lang['fr-ca']   = FlipClock.Lang.French;
  FlipClock.Lang['french']  = FlipClock.Lang.French;

}(jQuery));

(function($) {
		
	/**
	 * FlipClock Italian Language Pack
	 *
	 * This class will used to translate tokens into the Italian language.
	 *	
	 */
	 
	FlipClock.Lang.Italian = {
		
		'years'   : 'Anni',
		'months'  : 'Mesi',
		'days'    : 'Giorni',
		'hours'   : 'Ore',
		'minutes' : 'Minuti',
		'seconds' : 'Secondi'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['it']      = FlipClock.Lang.Italian;
	FlipClock.Lang['it-it']   = FlipClock.Lang.Italian;
	FlipClock.Lang['italian'] = FlipClock.Lang.Italian;
	
}(jQuery));

(function($) {

  /**
   * FlipClock Latvian Language Pack
   *
   * This class will used to translate tokens into the Latvian language.
   *
   */

  FlipClock.Lang.Latvian = {

    'years'   : 'Gadi',
    'months'  : 'Mēneši',
    'days'    : 'Dienas',
    'hours'   : 'Stundas',
    'minutes' : 'Minūtes',
    'seconds' : 'Sekundes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['lv']      = FlipClock.Lang.Latvian;
  FlipClock.Lang['lv-lv']   = FlipClock.Lang.Latvian;
  FlipClock.Lang['latvian'] = FlipClock.Lang.Latvian;

}(jQuery));
(function($) {

    /**
     * FlipClock Dutch Language Pack
     *
     * This class will used to translate tokens into the Dutch language.
     */

    FlipClock.Lang.Dutch = {

        'years'   : 'Jaren',
        'months'  : 'Maanden',
        'days'    : 'Dagen',
        'hours'   : 'Uren',
        'minutes' : 'Minuten',
        'seconds' : 'Seconden'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['nl']      = FlipClock.Lang.Dutch;
    FlipClock.Lang['nl-be']   = FlipClock.Lang.Dutch;
    FlipClock.Lang['dutch']   = FlipClock.Lang.Dutch;

}(jQuery));

(function($) {

	/**
	 * FlipClock Norwegian-Bokmål Language Pack
	 *
	 * This class will used to translate tokens into the Norwegian language.
	 *	
	 */

	FlipClock.Lang.Norwegian = {

		'years'   : 'År',
		'months'  : 'Måneder',
		'days'    : 'Dager',
		'hours'   : 'Timer',
		'minutes' : 'Minutter',
		'seconds' : 'Sekunder'	

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['no']      = FlipClock.Lang.Norwegian;
	FlipClock.Lang['nb']      = FlipClock.Lang.Norwegian;
	FlipClock.Lang['no-nb']   = FlipClock.Lang.Norwegian;
	FlipClock.Lang['norwegian'] = FlipClock.Lang.Norwegian;

}(jQuery));

(function($) {

	/**
	 * FlipClock Portuguese Language Pack
	 *
	 * This class will used to translate tokens into the Portuguese language.
	 *
	 */

	FlipClock.Lang.Portuguese = {

		'years'   : 'Anos',
		'months'  : 'Meses',
		'days'    : 'Dias',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundos'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['pt']         = FlipClock.Lang.Portuguese;
	FlipClock.Lang['pt-br']      = FlipClock.Lang.Portuguese;
	FlipClock.Lang['portuguese'] = FlipClock.Lang.Portuguese;

}(jQuery));
(function($) {

  /**
   * FlipClock Russian Language Pack
   *
   * This class will used to translate tokens into the Russian language.
   *
   */

  FlipClock.Lang.Russian = {

    'years'   : 'лет',
    'months'  : 'месяцев',
    'days'    : 'дней',
    'hours'   : 'часов',
    'minutes' : 'минут',
    'seconds' : 'секунд'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['ru']      = FlipClock.Lang.Russian;
  FlipClock.Lang['ru-ru']   = FlipClock.Lang.Russian;
  FlipClock.Lang['russian']  = FlipClock.Lang.Russian;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Swedish Language Pack
	 *
	 * This class will used to translate tokens into the Swedish language.
	 *	
	 */
	 
	FlipClock.Lang.Swedish = {
		
		'years'   : 'År',
		'months'  : 'Månader',
		'days'    : 'Dagar',
		'hours'   : 'Timmar',
		'minutes' : 'Minuter',
		'seconds' : 'Sekunder'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['sv']      = FlipClock.Lang.Swedish;
	FlipClock.Lang['sv-se']   = FlipClock.Lang.Swedish;
	FlipClock.Lang['swedish'] = FlipClock.Lang.Swedish;

}(jQuery));
