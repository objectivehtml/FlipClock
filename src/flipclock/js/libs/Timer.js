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