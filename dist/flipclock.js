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
	 * @param  {object} obj - A jQuery object or CSS select
	 * @param  {int} digit - An integer used to start the clock (no. seconds)
	 * @param  {object} options - An object of properties to override the default	
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
		 * @param {string} buildDate - The last official build date
		 */
		 
		buildDate: '2016-04-01',
		
		/**
		 * @param {string} version - The current version
		 */
		 
		version: '1.0.0',
		
		/**
		 * @param {object} options - The available options for this class
		 */		
		
		options: {},

		/**
		 * @param {object} _events - The bound events to this object
		 */

		_events: {},

		/**
		 * @param {object} _uid - The Flipclock.Uuid object instance
		 */

		_uid: false,
		 
		/**
		 * Sets the default options
		 *
		 * @param  {mixed} options - The default options
		 */
		 
		constructor: function(options) {
			if(typeof options !== "object") {
				options = {};
			}
			this._events = {};
			this._uid = (new FlipClock.Uuid()).toString();
			this.options = this.getDefaultOptions();
			this.setOptions(options);
		},
		
		/**
		 * Delegates the callback to the defined method
		 *
		 * @param  {function} method - The callback function
		 * @return object
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

			return this;
		},
		 
		/**
		 * Log a string into the console if it exists
		 *
		 * @param  {string} str - The string to log
		 * @return mixed
		 */		
		 
		log: function(str) {
			if(window.console && console.log) {
				console.log(str);
			}

			return this;
		},
		 
		/**
		 * Get an single option value. Returns false if option does not exist
		 *
		 * @param  {string} index - The name of the option
		 * @return mixed
		 */		
		 
		getOption: function(index) {
			if(this.options.hasOwnProperty(index)) {
				return this.options[index];
			}
			return null;
		},
		
		/**
		 * Get all options
		 *
		 * @return	bool
		 */		
		 
		getOptions: function() {
			return this.options;
		},
		
		/**
		 * Set a single option value
		 *
		 * @param  {string} index - The name of the option
		 * @param  {string} value - The value of the option
		 * @return object
		 */		
		 
		setOption: function(index, value) {
			if( this.hasOwnProperty(index) || 
				typeof this[index] === "function" || 
				index in this
			) {
				this[index] = value;
			}
			else {
				this.options[index] = value;
			}

			return this;
		},
		
		/**
		 * Set a multiple options by passing a JSON object
		 *
		 * @param  {object} options - An object of options to set
		 * @return object
		 */		
		
		setOptions: function(options) {
			for(var key in options) {
	  			if(typeof options[key] !== "undefined") {
		  			this.setOption(key, options[key]);
		  		}
		  	}

		  	return this;
		},

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {};
		},

		/*
		 * Bind an event
		 *
		 * @param  {string} name - The name of the event
		 * @param  {function} callback - The event callback function or method
		 * @return object
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
		 * @param  {string} name - The name of the event
		 * @param  {function} callback - The event callback function or method
		 * @return object
		*/

		once: function(name, callback) {
			var event = this.on(name, callback);

			event.setFireOnce(true);

			return event;
		},

		/*
		 * Remove all bound events for a specific trigger
		 *
		 * @param  {string} name - The name of the event
		 * @return object
		*/

		off: function(name) {
			if(this._events[name]) {
				delete this._events[name];
			}

			return this;
		},

		/*
		 * Remove all bound events for a specific trigger
		 *
		 * @param  {string} name - The name of the event
		 * @return object
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
			}

			return this;
		},

		/*
		 * Translate a string to the localized locale
		 *
		 * @param  {string} name - The name of the string to localize
		 * @return string
		*/

		localize: function(name) {
			if(this.translator) {
				return this.translator.localize(name);
			}

			return name;
		},

		/*
		 * Helper method for localize. t() is just short.
		 *
		 * @param  {string} name - The name of the string to localize
		 * @return string
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
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
			
		/**
		 * The jQuery object
		 */		
		 
		$el: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
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
			this.items = [];
			this.value = value;
			this.$el = false;

			this.base(options);
			this.createList();
			this.trigger('init');
		},
		
		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * The CSS classes
				 */		
				 
				classes: {
					active: 'flipclock-active',
					before: 'flipclock-before',
					flip: 'flip',
					play: 'play'
				},
					
				/**
				 * The last value selected in the list
				 */		
				 
				lastValue: 0
			};
		},

		/**
		 * Select the value in the list
		 *
		 * @param  int  value
		 * @return object
		 */
		 
		select: function(value) {
			var _afterListItem = this._afterListItem;

			this.setOption('lastValue', this.value);

			if(typeof value === "undefined") {
				value = this.value;
			}
			else {
				this.value = value;
			}

			if(this.value != this.getOption('lastValue')) {
				this._beforeListItem.$el.removeClass(this.getOption('classes').before);

				this.$el.find('.'+this.getOption('classes').active)
					.removeClass(this.getOption('classes').active)
					.addClass(this.getOption('classes').before);

				this.items.splice(0, 1);

				this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

				this._beforeListItem.$el.remove();
				this._beforeListItem = _afterListItem;

				this.trigger('select', this.value);
			}	

			return this;
		},

		/*
		 * Add the play class to the list
		 *
		 * @return object
		*/

		addPlayClass: function() {
			this.$el.addClass(this.getOption('classes').play);

			return this;
		},
		
		/*
		 * Remove the play class to the list
		 *
		 * @return object
		*/

		removePlayClass: function() {
			this.$el.removeClass(this.getOption('classes').play);

			return this;
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 *
		 * @param  mixed  value
		 * @param  string  css
		 * @return object
		 */
		 
		createListItem: function(value, css) {
			var item = new FlipClock.ListItem(value, {
				className: css
			});

			this.items.push(item);

			this.$el.append(item.$el);

			this.trigger('create:item', item);

			return item;
		},

		/**
		 * Create the list of values and appends it to the DOM object 
		 *
		 * @return object
		 */
		 
		createList: function() {
			var $el = this.$el = $('<ul class="'+this.getOption('classes').flip+'"></ul>');

			this._beforeListItem = this.createListItem(this.getPrevValue(), this.getOption('classes').before);
			this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

			$el.append(this._beforeListItem.el);
			$el.append(this._afterListItem.el);
			
			this.trigger('create:list', $el);		

			return $el;
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
	 * The FlipClock.ListItem object generates and maintains a list item
	 * in FlipClock.List objets.
	 */
	
	FlipClock.ListItem = FlipClock.Base.extend({
				
		/**
		 * The jQuery object
		 */	

		$el: false,
		
		/**
		 * The list item value
		 */		
		
		value: null,

		/*
		 * Constructor
		 *
		 * @param  mixed
		 * @param  mixed
		*/

		constructor: function(value, options) {
			this.base(options);
			this.value = value;

			this.$el = $([
				'<li class="'+(this.getOption('className') ? this.getOption('className') : '')+'">',
					'<a href="#">',
						'<div class="'+this.getOption('classes').up+'">',
							'<div class="'+this.getOption('classes').shadow+'"></div>',
							'<div class="'+this.getOption('classes').inn+'">'+value+'</div>',
						'</div>',
						'<div class="'+this.getOption('classes').down+'">',
							'<div class="'+this.getOption('classes').shadow+'"></div>',
							'<div class="'+this.getOption('classes').inn+'">'+value+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join(''));
		},

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * An object of available CSS classes
				 */		
				 
				classes: {
					down: 'down',
					inn: 'inn',
					shadow: 'shadow',
					up: 'up'
				},

				/**
				 * The css class appended to the parent DOM node
				 */		

				className: null
			};
		},

		/*
		 * Output the object instance as a string
		 *
		 * @return string
		*/

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
	 * The FlipClock.EnglishAlphaList class is a specific class to create
	 * lists that alphabetical values
	 */

	FlipClock.EnglishAlphaList = FlipClock.List.extend({

		/*
		 * Constructor
		 *
		 * @param  string
		 * @param  mixed
		*/

		constructor: function(value, options) {
			this.options = this.getDefaultOptions();
			this.setOptions(options);

			if(!value) {
				value = String.fromCharCode(this.getMinCharCode());
			}

			this.base(value, options);
		},

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			var options = this.base();
			
			/**
			 * Tells the list to use capital letters if true
			 */				
			options.capitalLetters = true;
			
			return options;
		},

		/*
		 * Get the maximum character code in the list
		 *
		 * @return int
		*/

		getMaxCharCode: function() {
			return this.getOption('capitalLetters') ? 90 : 122;
		},

		/*
		 * Get the minimum character code in the list
		 *
		 * @return int
		*/

		getMinCharCode: function() {
			return this.getOption('capitalLetters') ? 65 : 96;
		},

		/*
		 * Get the char code of the current list value
		 *
		 * @return int
		*/

		getCharCode: function() {
			return this.value.charCodeAt(0);
		},
		
		/*
		 * Get the previous value in the list
		 *
		 * @return int
		*/

		getPrevValue: function() {
			var charCode = this.value.charCodeAt(0) - 1;
			var minCode = this.getMinCharCode(), maxCode = this.getMaxCharCode();

			if(charCode < minCode) {
				charCode = maxCode;
			}

			return String.fromCharCode(charCode);
		},

		/*
		 * Get the next value in the list
		 *
		 * @return int
		*/

		getNextValue: function() {
			var charCode = this.value.charCodeAt(0) + 1;
			var minCode = this.getMinCharCode(), maxCode = this.getMaxCharCode();

			if(charCode > maxCode) {
				charCode = minCode;
			}

			return String.fromCharCode(charCode);
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
	
	/*
	 * The FlipClock.Divider class makes visual dividers on clocks
	 * easy to create and manipulate.
	*/

	FlipClock.Divider = FlipClock.Base.extend({

		/**
		 * The jQuery object
		 */		
		
		$el: false,

		/**
		 * The FlipClock.Translator instance
		 */		
		
		translator: false,

		/*
		 * Constructor
		 *
		 * @param  mixed  options
		*/

		constructor: function(options) {
			this.base(options);

			// Translate the label
			if(this.getOption('label')) {
				this.setOption('label', this.t(this.getOption('label')));
			}

			var dots = !this.getOption('excludeDots') ? [
				'<span class="'+this.getOption('classes').dot+' top"></span>',
				'<span class="'+this.getOption('classes').dot+' bottom"></span>'
			].join('') : '';

			this.$el = $([
				'<span class="'+this.getOption('classes').divider+' '+(this.getOption('css') ? this.getOption('css') : '').toLowerCase()+'">',
					'<span class="'+this.getOption('classes').label+'">'+(this.getOption('label') ? this.getOption('label') : '')+'</span>',
					dots,
				'</span>'
			].join(''));
		},

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {					
				/**
				 * The available options for this class
				 */		
				
				className: false,
			
				/**
				 * An object of available CSS classes
				 */		
				 
				classes: {
					divider: 'flipclock-divider',
					dot: 'flipclock-dot',
					label: 'flipclock-label'
				},

				/**
				 * If true the dots will not be displayed in the divider
				 */		

				excludeDots: false,

				/**
				 * The label for the divider
				 */		
				
				label: false
			};
		},

		/*
		 * Output object instance as a string
		 *
		 * @return string
		*/

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
	
	/*
	 * The FlipClock.Event class are instances for each event triggered
	 * by FlipClock's classes.
	*/

	FlipClock.Event = FlipClock.Base.extend({

		/**
		 * The name of the event
		 */		 

		name: false,

		/**
		 * Has the event fired?
		 */
		 
		_hasFired: false,

		/**
		 * The returned object of the last event response. Null
		 * if no response has been triggered.
		 */
		 
		_lastResponse: null,

		/**
		 * If true, the event will not fire
		 */
		 
		_preventFire: false,

		/**
		 * If true, the event will only fire once
		 */
		 
		_fireOnce: false,

		/**
		 * The function to call when the event is fired
		 */
		 
		_callback: function() {},

		/*
		 * Constructor
		 *
		 * @param  string
		 * @param  mixed
		*/

		constructor: function(name, callback) {
			if(!name) {
				throw "Events must have a name";
			}

			if(typeof callback === "function") {
				this._callback = callback;
			}
		},

		/*
		 * Fire the event. This method is chainable.
		 *
		 * @param  object
		 * @param  mixed
		 * @return object
		*/

		fire: function(obj, args) {
			if(this._preventFire === false) {
				this.setLastResponse(this._callback.apply(obj, args));
				this._hasFired = true;
				if(this._fireOnce) {
					this._preventFire = true;
				}
			}

			return this;
		},

		/*
		 * Prevent the event from firing. This method is chainable.
		 *
		 * @return object
		*/

		off: function() {
			this._preventFire = true;

			return this;
		},

		/*
		 * Turn on the event (if the event was previously turned off).
		 * This method is chainable.
		 *
		 * @return object
		*/

		on: function() {
			this._preventFire = false;

			return this;
		},

		/*
		 * Returns true if the event has fired
		 *
		 * @return bool
		*/

		hasFired: function() {
			return this._hasFired;
		},

		/*
		 * Get the last response. Returns null if no response exists
		 *
		 * @return mixed
		*/

		getLastResponse: function() {
			return this._lastResponse;
		},

		/*
		 * Sets the last response. This method is chainable.
		 *
		 * @param  object
		 * @return object
		*/

		setLastResponse: function(response) {
			this._lastResponse = response;

			return this;
		},

		/*
		 * Returns true if the event is set to only fire once
		 *
		 * @return bool
		*/

		getFireOnce: function() {
			return this._fireOnce;
		},

		/*
		 * Set event to fire once or indefinitely
		 *
		 * @param  bool
		 * @return object
		*/

		setFireOnce: function(value) {
			this._fireOnce = value;

			return this;
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
	 * The FlipClock.Face class is an abstract class used to create
	 * new clock faces.
	 */
	 	
	FlipClock.Face = FlipClock.Base.extend({
		
		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */
		 
		dividers: [],

		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,

		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],

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
		 
		value: 0,
		
		/**
		 * Constructor
		 *
		 * @param 	mixed
		 * @param 	mixed
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
			this.value = value;

			this.base(options);

			this.translator = new FlipClock.Translator({
				defaultLanguage: this.getOption('defaultLanguage'),
				language: this.getOption('language')
			});

			this.timer = new FlipClock.Timer();

			this.timer.on('interval', function() {
				t.flip();
				t.trigger('interval');
			});

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
		},
		
		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * The clock's animation rate.
				 * 
				 * Note, currently this property doesn't do anything.
				 * This property is here to be used in the future to
				 * programmaticaly set the clock's animation speed
				 */		

				animationRate: 1000,

				/**
				 * Sets whether or not the clock should automatically add the play class
				 */
				 
				autoPlay: true,

				/**
				 * Sets whether or not the clock should start ticking upon instantiation
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
				 * The language being used to display labels (string)
				 */	
				 
				language: 'english',

				/**
				 * The minimum digits the clock must have
				 */

				minimumDigits: 0
			};
		},

		/**
		 * Add a digit to the clock face
		 */
		 
		addDigit: function(digit) {
			var list = this.createList(digit);

			this.trigger('add:digit', list);

			return list;
		},

		/*
		 * Attach the FlipClock.List to the DOM of the clock face
		 *
		 * @param  object  $el
		 * @param  object  list
		 * @return null
		*/

		attachList: function($el, list) {
			$el.append(list.$el);
		},
			
		/**
		 * Build the clock face. This method is chainable.
		 *
		 * @return object
		 */
		 
		build: function() {
			if(this.getOption('autoStart')) {
				this.start();
			}

			this.trigger('build');

			return this;
		},
	
		/**
		 * Perform arbirtrary logic when the clock face instantiated.
		 * The factor object is passed in the first argument. This
		 * method is chainable.
		 *
		 * @param  object factory
		 * @return object
		 */

		init: function(factory) {
			this.setTimeObject(this.value);
			this.trigger('init');

			return this;
		},
		
		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param  mixed  label
		 * @param  mixed  className
		 * @param  mixed  excludeDots
		 */
		 
		createDivider: function(label, className, excludeDots) {
			if(typeof className == "boolean" || !className) {
				excludeDots = className;
				className = false;
			}

			var divider = new FlipClock.Divider({
				label: label,
				className: className,
				excludeDots: excludeDots,
				translator: this.translator
			});

			this.dividers.push(divider);

			this.trigger('create:divider', divider);

			return divider;
		},
				
		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param  mixed  value
		 * @param  object  options
		 * @return object
		 */
		 
		createList: function(value, options) {
			var list = this.getListObject(value);

			if(this.getOption('autoPlay') || this.timer.running) {
				list.addPlayClass();
			}

			this.lists.push(list);

			this.trigger('create:list', list);

			return list;
		},

		/*
		 * Get the list class object
		 *
		 * @return object
		*/

		getListClass: function() {
			return FlipClock.NumericList;
		},

		/*
		 * Get a new list class instance
		 *
		 * @param  mixed  value
		 * @return object
		*/

		getListObject: function(value) {
			var List = this.getListClass();

			return new List(value, {
				translator: this.translator
			});
		},
		
		/**
		 * Reset the clock. This method is chainable.
		 *
		 * @param  function  callback
		 * @return object
		 */

		reset: function(callback) {
			this.value = this.originalValue;
			this.time.time = this.value;
			this.flip();
			this.trigger('reset');
			this.callback(callback);

			return this;
		},

		/**
		 * Starts the clock. This method is chainable.
		 *
		 * @param  function  callback
		 * @return object
		 */
		 
		start: function(callback) {
			if(!this.timer.running) {
				this.trigger('before:start');
				this.timer.start();
				this.trigger('start');
				this.callback(callback);
			}

			return this;
		},
		
		/**
		 * Stops the clock. This method is chainable.
		 *
		 * @param  function  callback
		 * @return object
		 */
		 
		stop: function(callback) {
			var t = this;
			if(this.timer.running) {
				this.trigger('before:stop');
				this.timer.stop(function() {
					t.trigger('stop');
					t.callback(callback);
				});
			}

			return this;
		},
		
		/**
		 * Auto increments/decrements the value of the clock face.
		 * This method is chainable;
		 *
		 * @return object
		 */
		 
		autoIncrement: function() {
			if(!this.getOption('countdown')) {
				this.increment();
			}
			else {
				this.decrement();
			}

			this.trigger('auto:increment', this.getOption('countdown'));

			return this;
		},

		/**
		 * Increments the value of the clock face. This method is chainable.
		 *
		 * @return object
		 */
		 
		increment: function() {
			this.value++;

			if(this.time) {
				this.time.addSecond();
			}

			this.trigger('increment');

			return this;
		},

		/**
		 * Decrements the value of the clock face. This method is chainable.
		 *
		 * @return object
		 */

		decrement: function() {
			if(this.time.getTimeSeconds() === 0) {
	        	this.stop();
			}
			else {
				this.value--;

				if(this.time) {
					this.time.subSecond();
				}
			}

			this.trigger('decrement');

			return this;
		},
		
		/**
		 * Triggers when the numbers on the clock flip. This method is chainable.
		 *
		 * @param  array  time
		 * @return object
		 */
		 
		flip: function(time) {
			for(var i in time) {
				if(this.lists[i]) {
					this.lists[i].select(time[i]);
					if(this.getOption('autoPlay') && this.timer.running) {
						this.lists[i].addPlayClass();
					}
				}	
				else {
					this.addDigit(time[i]);
				}
			}

			this.trigger('flip');

			return this;
		},

		/**
		 * Sets the clock time. This method is chainable.
		 *
		 * @param  mixed  time
		 * @return object
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.flip();
			this.trigger('set:time', time);

			return this;
		},
		
		/**
		 * Get the clock time
		 *
		 * @return object
		 */
		 
		getTime: function() {
			return this.time;		
		},

		/**
		 * Set the time attribute with a new FlipClock.Time object.
		 * This method is chainable.
		 *
		 * @param  object  time
		 * @return object
		 */
		 
		setTimeObject: function(time) {
			this.time = new FlipClock.Time(time, {
				minimumDigits: this.getOption('minimumDigits')
			});

			return this;
		},
		
		/**
		 * Sets the clock face's time. This method is chainable.
		 *
		 * @param  mixed  value
		 * @return object
		 */
		 
		setValue: function(value) {
			this.value = value;

			if(this.time) {
				this.setTimeObject(value);
			}

			this.flip();

			this.trigger('set:value', this.value);

			return this;
		},

		/**
		 * Get the clock face's value
		 *
		 * @return mixed
		 */
		 
		getValue: function() {
			return this.value;		
		},

		/**
		 * Changes the increment of time to up or down (add/sub).
		 * This method is chainable.
		 *
		 * @param  bool  value
		 * @return object
		 */
		
		setCountdown: function(value) {			
			this.setOption('countdown', value ? true : false);
				
			if(this.timer.running) {
				this.stop();
				this.start();
			}

			this.trigger('set:countdown', this.getOption('countdown'));

			return this;
		},

		/**
		 * Get the current countdown option value
		 *
		 * @return bool
		 */
		
		getCountdown: function() {			
			return this.getOption('countdown');
		},

		/**
		 * Destroy the clock face. This method is chainable.
		 *
		 * @return object
		 */
		
		destroy: function() {
			this.timer.destroy();
			this.trigger('destroy');

			return this;
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
	 */
	 	
	FlipClock.Factory = FlipClock.Base.extend({
		
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
		 */
		 
		constructor: function($el, value, options) {			
			if(value instanceof Date === false && typeof value === "object") {
				options = value;
				value = 0;
			}

			this.base(options);

			this.lists = [];
			
			this.$el = $el.addClass(this.getOption('classes').wrapper);

			this.loadClockFace(this.getOption('clockFace'), value, this.getOption('clockFaceOptions'));

			this.trigger('init');
		},
		
		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * An object of available CSS classes
				 */		
				 
				classes: {
					wrapper: 'flipclock-wrapper'
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
				 
				defaultClockFace: 'HourlyCounter'
			};
		},

		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 * @return  object
		 */
		 
		loadClockFace: function(name, value, options) {	
			var t = this, face, suffix = 'Face';
			
			name = name.ucfirst()+suffix;

			if(this.face.stop) {
				this.stop();
			}

			this.$el.html('');

			if(FlipClock[name]) {
				this.face = new FlipClock[name](value, options);
			}
			else {
				this.face = new FlipClock[this.getOption('defaultClockFace')+suffix](value, options);
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
			
			this.face.on('interval', function() {
				t.callback(t.onInterval);
			});
			
			this.face.init(this);

			this.face.build();

			this.trigger('load:face', this.face);

			this.callback(t.onInit);

			return this.face;
		},
			
		/**
		 * Starts the clock face countdown option
		 *
		 * @return  object
		 */
		 
		setCountdown: function(value) {
			this.face.setCountdown(value);

			return this;
		},
		
		/**
		 * Gets the countdown option from the clock face
		 *
		 * @return  object
		 */
		 
		getCountdown: function() {
			return this.face.getCountdown();
		},
		
		/**
		 * Destroy the clock
		 *
		 * @return  object
		 */
		 
		destroy: function() {
			this.face.destroy();
			this.face = false;
			this.$el.removeClass(this.getOption('classes').wrapper);
			this.$el.html('');
			
			return this;
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
		 * Sets the clock face's value
		 *
		 * @return  object
		 */
		 
		setFaceValue: function(value) {
			this.face.setValue(value);
			
			return this;
		},

		/**
		 * Gets the clock face's value
		 *
		 * @return  object
		 */
		 
		getFaceValue: function() {
			return this.face.getValue();
		},

		/*
		 * The onDestroy callback
		 *
		 * @return undefined
		*/

		onDestroy: function() {},
		
		/*
		 * The onInit callback
		 *
		 * @return undefined
		*/

		onInit: function() {},
		
		/*
		 * The onInterval callback
		 *
		 * @return undefined
		*/

		onInterval: function() {},
		
		/*
		 * The onStart callback
		 *
		 * @return undefined
		*/

		onStart: function() {},
		
		/*
		 * The onStop callback
		 *
		 * @return undefined
		*/

		onStop: function() {},
		
		/*
		 * The onReset callback
		 *
		 * @return undefined
		*/

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
	 * The FlipClock.NumberList class is a specific class to create
	 * lists that display numbers
	 */

	FlipClock.NumericList = FlipClock.List.extend({
		
		/*
		 * Get the previous value in the list
		 *
		 * @return int
		*/

		getPrevValue: function() {
			if(this.value > 0) {
				return this.value - 1;
			}

			return 9;
		},

		/*
		 * Get the next value in the list
		 *
		 * @return int
		*/

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
	
	/*
	 * The FlipClock.Time class is a helper classes to digitize clock
	 * values and help calculate time.
	*/

	FlipClock.Time = FlipClock.Base.extend({
		
		/**
		 * The time (in seconds) or a date object
		 */		
		 
		time: 0,
		
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

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * The minimum number of digits the clock face must have
				 */		
				 
				minimumDigits: 0
			};
		},

		/**
		 * Convert a string or integer to an array of digits
		 *
		 * @param   mixed  str	 
		 * @return  array
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

			for(var i in obj) {
				var value = obj[i].toString();
				
				if(value.length == 1) {
					value = '0'+value;
				}
				
				for(var x = 0; x < value.length; x++) {
					data.push(value.charAt(x));
				}
			}

			if(data.length > this.getOption('minimumDigits')) {
				this.setOption('minimumDigits', data.length);
			}
			
			if(this.getOption('minimumDigits') > data.length) {
				for(var x = data.length; x < this.getOption('minimumDigits'); x++) {
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
		 * @param   mixed   includeSeconds
		 * @return  object  Returns a digitized object
		 */
		 
		getHourCounter: function(includeSeconds) {
			var data = [
				this.getHours(),
				this.getMinutes(true)
			];

			if(includeSeconds !== false) {
				data.push(this.getSeconds(true));
			}

			return this.digitize(data);
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @param   mixed   includeSeconds
		 * @return  object  Returns a digitized object
		 */
		 
		getHourly: function(includeSeconds) {
			return this.getHourCounter(includeSeconds);
		},
		
		/**
		 * Gets number of hours
		 *
		 * @param   bool  mod
		 * @return  int
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
		 
		getMinuteCounter: function(includeSeconds) {
			var data = [
				this.getMinutes()
			];

			if(includeSeconds !== false) {
				data.push(this.getSeconds(true));
			}

			return this.digitize(data);
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
					return Math.round(Math.max(this.time.getTime()/1000 - date.getTime()/1000,0));
				} else {
					return Math.round(date.getTime()/1000 - this.time.getTime()/1000);
				}
			} else {
				return Math.round(this.time);
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
			
			for(var i in digits) {
				if(i < totalDigits) {
					total += parseInt(digits[i], 10);
				}
				else {
					newArray.push(digits[i]);
				}
			}

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
	 * The FlipClock.Timer object is a helper to manage the JS time intervals
	 */
	
	FlipClock.Timer = FlipClock.Base.extend({
		
		/**
		 * FlipClock timer count (how many intervals have passed)
		 */		
		 
		count: 0,

		/**
		 * Is the timer running?
		 */		
		 
		running: false,
				
		/**
		 * Constructor
		 *
		 * @param  mixed  mixed
		 */		
		 
		constructor: function(options) {
			this.base(options);
			this.trigger('init');
		},
		
		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * The rate of the animation in milliseconds (not currently in use)
				 */		
				 
				animationRate: 1000,

				/**
				 * Timer interval (1 second by default)
				 */		
				 
				interval: 1000
			};
		},

		/**
		 * Gets the elapsed the time as an interger
		 *
		 * @return	int
		 */		
		 
		getElapsed: function() {
			return this.count * this.getOption('interval');
		},
		
		/**
		 * Gets the elapsed the time as a Date object
		 *
		 * @return	object
		 */		
		 
		getElapsedTime: function() {
			return new Date(this.time + this.getElapsed());
		},
		
		/**
		 * Resets the timer. This method is chainable.
		 *
		 * @param 	function callback
		 * @return	object
		 */		
		 
		reset: function(callback) {
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);
			this.trigger('reset');

			return this;
		},
				
		/**
		 * Starts the timer. This method is chainable.
		 *
		 * @param 	function callback
		 * @return	object
		 */		
		 
		start: function(callback) {	
			this.running = true;	
			this._createTimer(callback);

			return this;
		},
		
		/**
		 * Stops the timer. This method is chainable.
		 *
		 * @param 	function callback
		 * @return	object
		 */		
		 
		stop: function(callback) {
			var t = this;

			this.running = false;
			this._clearInterval();

			setTimeout(function() {
				t.callback(callback);
				t.trigger('stop');
			}, this.getOption('interval'));

			return this;
		},


		/**
		 * Destroy the timer. This method is chainable.
		 *
		 * @param 	function callback
		 * @return	object
		 */		
		 
		destroy: function(callback) {
			this._destroyTimer(callback);
			this.trigger('destroy');

			return this;
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
		 * @param 	function callback
		 * @return	void
		 */		
		 
		_createTimer: function(callback) {
			this._setInterval(callback);		
		},
		
		/**
		 * Destroy the timer object
		 *
		 * @param 	function callback
		 * @return	void
		 */		
		 	
		_destroyTimer: function(callback) {
			this._clearInterval();
			this.running = false;		
			this.timer = false;
			this.callback(callback);
			this.trigger('destroy')
		},
		
		/**
		 * This method is called each time the timer interval is ran
		 *
		 * @param 	function callback
		 * @return	void
		 */		
		 
		_interval: function(callback) {
			this.callback(callback);
			this.trigger('interval');
			this.count++;
		},
		
		/**
		 * Sets the timer interval
		 *
		 * @param 	function callback
		 * @return	void
		 */		
		 
		_setInterval: function(callback) {
			var t = this;
			this.timer = setInterval(function() {
				if(t.running) {	
					t._interval(callback);
				}
			}, this.getOption('interval'));
			this.trigger('start');
			this._interval(callback);
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

(function() {

	"use strict";
	
	/**
	 * The FlipClock.Translate object will translate string to a specified 
	 * locale.
	 */
	
	FlipClock.Translator = FlipClock.Base.extend({

		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,

		/*
		 * Constructor
		 *
		 * @param  mixed  options
		*/

		constructor: function(options) {
			this.base(options);
			this.loadLanguage(this.getOption('language'));
		},

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * The default language
				 */	
				 
				defaultLanguage: 'english',
				 
				/**
				 * The language being used to display labels (string)
				 */	
				 
				language: 'english'
			};
		},

		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 * @return	object
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
				lang = FlipClock.Lang[this.getOption('defaultLanguage')];
			}
			
			return this.lang = lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 * @return	string
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
	 * The FlipClock.Uuid object generates a uuid instance and return
	 * the uuid as string.
	 */
	
	FlipClock.Uuid = FlipClock.Base.extend({
		
		/**
		 * The actual uuid value as a string
		 */	

		value: false,

		/*
		 * Constructor
		 * 
		 * @param  string  value 
		*/

		constructor: function(value) {
			this.value = value ? value : this.generate();
		},

		/*
		 * Generate a new Uuid
		 * 
		 * @return string
		*/

		generate: function() {
			var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		    });
		    return uuid;
		},

		/*
		 * Does this uuid equal another uuid object
		 *
		 * @param  object
		 * @return bool
		*/

		equals: function(other) {
		    return this.isUuid(other) && value == other;
		},

		/*
		 * Tests another value to see if it's a uuid
		 *
		 * @param  mixed
		 * @return bool
		*/

		isUuid: function(value) {
			var validator = new RegExp("^[a-z0-9]{32}$", "i");

			return value && (value instanceof Uuid || validator.test(value.toString()));
		},

		/*
		 * Outputs the object instance as a string
		 *
		 * @return string
		*/

		toString: function() {
			return this.value;
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
	 * The FlipClock.List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific value.
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
			
		/**
		 * The jQuery object
		 */		
		 
		$el: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
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
			this.items = [];
			this.value = value;
			this.$el = false;

			this.base(options);
			this.createList();
			this.trigger('init');
		},
		
		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			return {
				/**
				 * The CSS classes
				 */		
				 
				classes: {
					active: 'flipclock-active',
					before: 'flipclock-before',
					flip: 'flip',
					play: 'play'
				},
					
				/**
				 * The last value selected in the list
				 */		
				 
				lastValue: 0
			};
		},

		/**
		 * Select the value in the list
		 *
		 * @param  int  value
		 * @return object
		 */
		 
		select: function(value) {
			var _afterListItem = this._afterListItem;

			this.setOption('lastValue', this.value);

			if(typeof value === "undefined") {
				value = this.value;
			}
			else {
				this.value = value;
			}

			if(this.value != this.getOption('lastValue')) {
				this._beforeListItem.$el.removeClass(this.getOption('classes').before);

				this.$el.find('.'+this.getOption('classes').active)
					.removeClass(this.getOption('classes').active)
					.addClass(this.getOption('classes').before);

				this.items.splice(0, 1);

				this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

				this._beforeListItem.$el.remove();
				this._beforeListItem = _afterListItem;

				this.trigger('select', this.value);
			}	

			return this;
		},

		/*
		 * Add the play class to the list
		 *
		 * @return object
		*/

		addPlayClass: function() {
			this.$el.addClass(this.getOption('classes').play);

			return this;
		},
		
		/*
		 * Remove the play class to the list
		 *
		 * @return object
		*/

		removePlayClass: function() {
			this.$el.removeClass(this.getOption('classes').play);

			return this;
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 *
		 * @param  mixed  value
		 * @param  string  css
		 * @return object
		 */
		 
		createListItem: function(value, css) {
			var item = new FlipClock.ListItem(value, {
				className: css
			});

			this.items.push(item);

			this.$el.append(item.$el);

			this.trigger('create:item', item);

			return item;
		},

		/**
		 * Create the list of values and appends it to the DOM object 
		 *
		 * @return object
		 */
		 
		createList: function() {
			var $el = this.$el = $('<ul class="'+this.getOption('classes').flip+'"></ul>');

			this._beforeListItem = this.createListItem(this.getPrevValue(), this.getOption('classes').before);
			this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

			$el.append(this._beforeListItem.el);
			$el.append(this._afterListItem.el);
			
			this.trigger('create:list', $el);		

			return $el;
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
			var time = time ? time : this.time.getMilitaryTime(false, this.getOption('showSeconds'));

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
			
			time = time ? time : this.time.getMilitaryTime(false, this.getOption('showSeconds'));
			
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
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 * @return	
		 */
		 
		constructor: function(value, options) {
			this.base(value, options);

			this.timer.off('stop');

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

			for(var i in time) {
				t.createList(time[i]);
			}

			this.base();
		},
		
		/**
		 * Flip the clock face
		 *	
		 * @return
		 */
		 
		flip: function(time) {
			if(this.getOption('autoStart')) {
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

		/**
		 * Build the clock face
		 */

		build: function() {	
			var offset = 0;

			var time = this.time.getDayCounter(this.getOption('showSeconds'));

			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.getOption('showSeconds')) {
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
				time = this.time.getDayCounter(this.getOption('showSeconds'));
			}

			this.base(time);
			this.autoIncrement();
		},


	});

}(jQuery));
(function($) {
		
	/**
	 * English Alphabet Clock Face
	 *
	 */
	 
	FlipClock.EnglishAlphabetFace = FlipClock.Face.extend({
		
		_autoIncrementValues: [],

		/**
		 * Tells the clock face if it should auto-increment
		 */

		// shouldAutoIncrement: false,

		/**
		 * Tells the clock face if it should use capital letters
		 */

		capitalLetters: true,

		getDefaultOptions: function() {
			var options = this.base();

			options.capitalLetters = true;

			return options;
		},

		init: function(factory) {
			this.base(factory);

			if(!this.value) {
				this.value = this.getListObject(this.value).value;
			}
		},

		build: function() {
			var values = this.value.split('');

			/*
			for(var x = values.length + 1; x <= this.getOption('minimumDigits'); x++) {
				values.unshift(String.fromCharCode(this.getListObject(false).getMinCharCode()));
			}
			*/

			for(var i in values) {
				this.createList(values[i]);
			}

			for(var x in this.lists) {
				this._autoIncrementValues.unshift(this.lists[x].getCharCode());
			}

			this.base();
		},

		increment: function() {
			var flip = true, i = 0, values = this.value.split('');

			while (flip)
			{
				flip = false;

				var value = this._autoIncrementValues[i];
				var list = this.lists[this.lists.length - i - 1];

				if(list) {
					values[this.value.length - i - 1] = list.getNextValue();

					if(list.getCharCode() >= list.getMaxCharCode()) {
						flip = true;
						i++;
					}
				}
				else {
					values.unshift(String.fromCharCode(this.getListObject(false).getMinCharCode()));
				}
			}

			this.value = values.join('');
		},

		decrement: function() {
			var flip = true, i = 0, values = this.value.split('');

			while (flip)
			{
				flip = false;

				var value = this._autoIncrementValues[i];
				var list = this.lists[this.lists.length - i - 1];

				if(list) {
					values[this.value.length - i - 1] = list.getPrevValue();

					if(list.getCharCode() <= list.getMinCharCode()) {
						flip = true;
						i++;
					}
				}
				else {
					values.unshift(String.fromCharCode(this.getListObject(false).getMinCharCode()));
				}
			}

			this.value = values.join('');
		},

		flip: function() {
			/*
			if(this.shouldAutoIncrement) {
				this.autoIncrement();
			}
			*/

			this.autoIncrement();
			this.base(this.value.split(''));
		},

		/*
		 * Get the list class object
		 *
		 * @return  object
		*/

		getListClass: function() {
			return FlipClock.EnglishAlphaList;
		},

		/*
		 * Get a new list class instance
		 *
		 * @return  object
		*/

		getListObject: function(value) {
			var List = this.getListClass();

			return new List(value, {
				capitalLetters: this.capitalLetters,
				translator: this.translator
			});
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
		 * Constructor
		 *
		 * @param 	mixed
		 * @param 	mixed
		 */
		 
		constructor: function(value, options) {
			this.base(value, options);

			if(this.getOption('showSeconds') === null) {
				this.setOption('showSeconds', true);
			}
		},

		/**
		 * Build the clock face
		 */
		
		build: function(time) {
			var offset = 0, time = time ? time : this.time.getHourCounter(this.getOption('showSeconds'));
			
			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.getOption('showSeconds') === true) {
				offset = 2;
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - offset].$el);
			}
			
			this.createDivider('Minutes').$el.insertBefore(this.lists[this.lists.length - 2 - offset].$el);
			this.createDivider('Hours', true).$el.insertBefore(this.lists[0].$el);

			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {
			if(!time) {
				time = this.time.getHourCounter(this.getOption('showSeconds'));
			}

			this.base(time);
			this.autoIncrement();
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
			var time = this.time.getMinuteCounter(this.getOption('showSeconds'));
			
			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.getOption('showSeconds')) {
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - 2].$el);
			}

			this.createDivider('Minutes').$el.insertBefore(this.lists[0].$el);

			return FlipClock.Face.prototype.build.call(this);
		},

		/**
		 * Flip the clock face
		 */
		 
		flip: function() {
			this.base(this.time.getMinuteCounter(this.getOption('showSeconds')));
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
		 
		$meridium: false,
		
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
			var t = this, time = this.time.getTime(false, this.getOption('showSeconds'));
		
			this.meridiumText = this.getMeridium();

			this.$meridium = $([
				'<ul class="flipclock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));

			this.base(time);	
						
			this.$meridium.insertAfter(this.lists[this.lists.length-1].$el);
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {			
			if(this.meridiumText != this.getMeridium()) {
				this.meridiumText = this.getMeridium();
				this.$meridium.find('a').html(this.meridiumText);	
			}

			this.base(this.time.getTime(false, this.getOption('showSeconds')));	
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
     * FlipClock Czech Language Pack
     *
     * This class will used to translate tokens into the Czech language.
     *
     */

    FlipClock.Lang.Czech = {

        'years'   : 'Roky',
        'months'  : 'Měsíce',
        'days'    : 'Dny',
        'hours'   : 'Hodiny',
        'minutes' : 'Minuty',
        'seconds' : 'Sekundy'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['cs']    = FlipClock.Lang.Czech;
    FlipClock.Lang['cs-cz'] = FlipClock.Lang.Czech;
    FlipClock.Lang['cz']    = FlipClock.Lang.Czech;
    FlipClock.Lang['cz-cs'] = FlipClock.Lang.Czech;
    FlipClock.Lang['czech'] = FlipClock.Lang.Czech;

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

		'years'   : 'Años',
		'months'  : 'Meses',
		'days'    : 'Días',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundos'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['es']      = FlipClock.Lang.Spanish;
	FlipClock.Lang['es-es']   = FlipClock.Lang.Spanish;
	FlipClock.Lang['spanish'] = FlipClock.Lang.Spanish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock English Language Pack
	 *
	 * This class will used to translate tokens into the English language.
	 *	
	 */
	 
	FlipClock.Lang.Persian = {
		
		'years'   : 'سال',
		'months'  : 'ماه',
		'days'    : 'روز',
		'hours'   : 'ساعت',
		'minutes' : 'دقیقه',
		'seconds' : 'ثانیه'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['fa']      = FlipClock.Lang.Persian;
	FlipClock.Lang['fa-ir']   = FlipClock.Lang.Persian;
	FlipClock.Lang['persian'] = FlipClock.Lang.Persian;

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
	FlipClock Hebrew Language Pack *
	This class will used to translate tokens into the Hebrew language. *
	Laurent HADJADJ - 10/09/2015
	*/

	FlipClock.Lang.Hebrew = {
		'years' : 'שנים',
		'months' : 'חודש',
		'days' : 'ימים',
		'hours' : 'שעות',
		'minutes' : 'דקות',
		'seconds' : 'שניות'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['il'] = FlipClock.Lang.Hebrew;
	FlipClock.Lang['he-il'] = FlipClock.Lang.Hebrew;
	FlipClock.Lang['hebrew'] = FlipClock.Lang.Hebrew;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Hungarian Language Pack
	 *
	 * This class will used to translate tokens into the Hungarian language.
	 *	
	 */
	 
	FlipClock.Lang.Hungarian = {
		'years'   : 'Év',
	    'months'  : 'Hónap',
	    'days'    : 'Nap',
	    'hours'   : 'Óra',
	    'minutes' : 'Perc',
	    'seconds' : 'Másodperc'	
	};
	
	/* Create various aliases for convenience */
 
	FlipClock.Lang['hu']     = FlipClock.Lang.Hungarian;
	FlipClock.Lang['hu-hu']  = FlipClock.Lang.Hungarian;
	FlipClock.Lang['hungarian'] = FlipClock.Lang.Hungarian;
 
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
	 * FlipClock Korean Language Pack
	 *
	 * This class will used to translate tokens into the Korean language.
	 *	
	 */
	 
	FlipClock.Lang.Korean = {
		
		'years'   : '년',
		'months'  : '월',
		'days'    : '일',
		'hours'   : '시',
		'minutes' : '분',
		'seconds' : '초'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['ko']      = FlipClock.Lang.Korean;
	FlipClock.Lang['ko-kr']   = FlipClock.Lang.Korean;
	FlipClock.Lang['korean']  = FlipClock.Lang.Korean;

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
	 * FlipClock Polish Language Pack
	 *
	 * This class will used to translate tokens into the Polish language.
	 *
	 */

	FlipClock.Lang.Polish = {

		'years'   : 'lat',
		'months'  : 'miesięcy',
		'days'    : 'dni',
		'hours'   : 'godzin',
		'minutes' : 'minut',
		'seconds' : 'sekund'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['pl']         = FlipClock.Lang.Polish;
	FlipClock.Lang['pl-pl']      = FlipClock.Lang.Polish;
	FlipClock.Lang['polish'] = FlipClock.Lang.Polish;

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
	 * FlipClock Slovak Language Pack
	 *
	 * This class will used to translate tokens into the Slovak language.
	 *
	 */

	FlipClock.Lang.Slovak = {

		'years'   : 'Roky',
		'months'  : 'Mesiace',
		'days'    : 'Dni',
		'hours'   : 'Hodiny',
		'minutes' : 'Minúty',
		'seconds' : 'Sekundy'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['sk']      = FlipClock.Lang.Slovak;
	FlipClock.Lang['sk-sk']   = FlipClock.Lang.Slovak;
	FlipClock.Lang['slovak'] = FlipClock.Lang.Slovak;

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

(function($) {
		
	/**
	 * FlipClock Thai Language Pack
	 *
	 * This class will used to translate tokens into the Thai language.
	 *	
	 */
	 
	FlipClock.Lang.Thai = {
		
		'years'   : 'ปี',
		'months'  : 'เดือน',
		'days'    : 'วัน',
		'hours'   : 'ชั่วโมง',
		'minutes' : 'นาที',
		'seconds' : 'วินาที'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['th']      = FlipClock.Lang.Thai;
	FlipClock.Lang['th-th']   = FlipClock.Lang.Thai;
	FlipClock.Lang['thai'] = FlipClock.Lang.Thai;

}(jQuery));
(function($) {

    /**
     * FlipClock Russian Language Pack
     *
     * This class will used to translate tokens into the Russian language.
     *
     */

    FlipClock.Lang.Ukrainian = {

        'years'   : 'роки',
        'months'  : 'місяці',
        'days'    : 'дні',
        'hours'   : 'години',
        'minutes' : 'хвилини',
        'seconds' : 'секунди'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['ua']      = FlipClock.Lang.Ukrainian;
    FlipClock.Lang['ua-ua']   = FlipClock.Lang.Ukrainian;
    FlipClock.Lang['ukraine']  = FlipClock.Lang.Ukrainian;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Chinese Language Pack
	 *
	 * This class will used to translate tokens into the Chinese language.
	 *	
	 */
	 
	FlipClock.Lang.Chinese = {
		
		'years'   : '年',
		'months'  : '月',
		'days'    : '日',
		'hours'   : '时',
		'minutes' : '分',
		'seconds' : '秒'

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['zh']      = FlipClock.Lang.Chinese;
	FlipClock.Lang['zh-cn']   = FlipClock.Lang.Chinese;
	FlipClock.Lang['chinese'] = FlipClock.Lang.Chinese;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Traditional Chinese Language Pack
	 *
	 * This class will used to translate tokens into the Traditional Chinese.
	 *	
	 */
	 
	FlipClock.Lang.TraditionalChinese = {
		
		'years'   : '年',
		'months'  : '月',
		'days'    : '日',
		'hours'   : '時',
		'minutes' : '分',
		'seconds' : '秒'

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['zh-tw']   = FlipClock.Lang.TraditionalChinese;

}(jQuery));
