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
			if(this.timer.running) {
				this.trigger('before:stop');
				this.timer.stop(function() {
					t.trigger('stop');
				});
			}
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
			if(this.time.getTimeSeconds() === 0) {
	        	this.stop();
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
		 * Sets the clock face's time
		 */
		 
		setValue: function(value) {
			this.value = value;

			if(this.time) {
				this.time = new FlipClock.Time(this.value, {
					minimumDigits: this.minimumDigits
				});
			}

			this.flip();		
		},
		
		/**
		 * Get the clock face's value
		 *
		 * @return  object
		 */
		 
		getValue: function() {
			return this.value;		
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
