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
		 * The available options for this class
		 */		
		
		options: {

			/**
			 * The rate of the animation in milliseconds (not currently in use)
			 */		
			 
			animationRate: 1000,

			/**
			 * Timer interval (1 second by default)
			 */		
			 
			interval: 1000
		},
		
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
			return this.count * this.getOption('interval');
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
			}, this.getOption('interval'));

			t.trigger('stop');
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