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