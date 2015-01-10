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

		onDestroy: function() {},
		
		onCreate: function() {},
		
		onInit: function() {},
		
		onInterval: function() {},
		
		onStart: function() {},
		
		onStop: function() {},
		
		onReset: function() {}
		
	});
		
}(jQuery));
