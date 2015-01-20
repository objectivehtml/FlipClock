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
		 * The available options for this class
		 */		
		
		options: {

			/**
			 * An object of available CSS classes
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
			 
			defaultClockFace: 'HourlyCounter'
		},

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

			console.log(this.options);

			this.lists = [];
			
			this.$el = $el.addClass(this.getOption('classes').wrapper);

			this.loadClockFace(this.getOption('clockFace'), value, this.getOption('clockFaceOptions'));

			this.trigger('init');
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
		 * @return 
		*/

		onDestroy: function() {},
		
		/*
		 * The onInit callback
		 *
		 * @return 
		*/

		onInit: function() {},
		
		/*
		 * The onInterval callback
		 *
		 * @return 
		*/

		onInterval: function() {},
		
		/*
		 * The onStart callback
		 *
		 * @return 
		*/

		onStart: function() {},
		
		/*
		 * The onStop callback
		 *
		 * @return 
		*/

		onStop: function() {},
		
		/*
		 * The onReset callback
		 *
		 * @return 
		*/

		onReset: function() {}
		
	});
		
}(jQuery));
