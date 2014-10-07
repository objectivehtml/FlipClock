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
		 
		constructor: function(obj, digit, options) {

			if(!options) {
				options = {};
			}

			this.lists = [];
			this.running = false;
			this.base(options);	

			this.$el = $(obj).addClass(this.classes.wrapper);

			// Depcrated support of the $wrapper property.
			this.$wrapper = this.$el;

			this.original = (digit instanceof Date) ? digit : (digit ? Math.round(digit) : 0);

			this.time = new FlipClock.Time(this, this.original, {
				minimumDigits: this.minimumDigits,
				animationRate: this.animationRate 
			});

			this.timer = new FlipClock.Timer(this, options);

			this.loadLanguage(this.language);
			
			this.loadClockFace(this.clockFace, options);

			if(this.autoStart) {
				this.start();
			}

		},
		
		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 */
		 
		loadClockFace: function(name, options) {	
			var face, suffix = 'Face', hasStopped = false;
			
			name = name.ucfirst()+suffix;

			if(this.face.stop) {
				this.stop();
				hasStopped = true;
			}

			this.$el.html('');

			this.time.minimumDigits = this.minimumDigits;
			
			if(FlipClock[name]) {
				face = new FlipClock[name](this, options);
			}
			else {
				face = new FlipClock[this.defaultClockFace+suffix](this, options);
			}
			
			face.build();

			this.face = face

			if(hasStopped) {
				this.start();
			}
			
			return this.face;
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
		},
		 

		/**
		 * Starts the clock
		 */
		 
		start: function(callback) {
			var t = this;

			if(!t.running && (!t.countdown || t.countdown && t.time.time > 0)) {
				t.face.start(t.time);
				t.timer.start(function() {
					t.flip();
					
					if(typeof callback === "function") {
						callback();
					}	
				});
			}
			else {
				t.log('Trying to start timer when countdown already at 0');
			}
		},
		
		/**
		 * Stops the clock
		 */
		 
		stop: function(callback) {
			this.face.stop();
			this.timer.stop(callback);
			
			for(var x in this.lists) {
				if (this.lists.hasOwnProperty(x)) {
					this.lists[x].stop();
				}
			}	
		},
		
		/**
		 * Reset the clock
		 */
		 
		reset: function(callback) {
			this.timer.reset(callback);
			this.face.reset();
		},
		
		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.flip(true);		
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
			var running = this.running;
			
			this.countdown = value ? true : false;
				
			if(running) {
				this.stop();
				this.start();
			}
		},
		
		/**
		 * Flip the digits on the clock
		 *
		 * @param  array  An array of digits	 
		 */
		flip: function(doNotAddPlayClass) {	
			this.face.flip(false, doNotAddPlayClass);
		}
		
	});
		
}(jQuery));
