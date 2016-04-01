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