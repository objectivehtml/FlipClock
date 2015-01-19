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
		 * The available options for this class
		 */		
		
		options: {

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
		},

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

			this.translator = new FlipClock.Translator({
				defaultLanguage: this.getOption('defaultLanguage'),
				language: this.getOption('language')
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
		 * @param  object  A jQuery object
		 * @param  object  A FlipClock.List object
		 * @return 
		*/

		attachList: function($el, list) {
			$el.append(list.$el);
		},
			
		/**
		 * Build the clock face
		 */
		 
		build: function() {
			if(this.getOption('autoStart')) {
				this.start();
			}

			this.trigger('build');
		},
	
		/**
		 * Perform arbirtrary logic when the clock face instantiated.
		 * The factor object is passed in the first argument
		 *
		 * @param  object
		 */

		init: function(factory) {
			this.setTimeObject(this.value);
			this.trigger('init');
		},
		
		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider. 
		 *					If not set, is false.
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
		 * @param	mixed 	The value to select in the list
		 * @param	object  An object to override the default properties
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
		 * @return  object
		*/

		getListClass: function() {
			return FlipClock.NumericList;
		},

		/*
		 * Get a new list class instance
		 *
		 * @return  object
		*/

		getListObject: function(value) {
			var List = this.getListClass();

			return new List(value, {
				translator: this.translator
			});
		},
		
		/**
		 * Triggers when the clock is reset
		 */

		reset: function(callback) {
			this.value = this.originalValue;
			this.flip();
			this.trigger('reset');
			this.callback(callback);
		},

		/**
		 * Starts the clock
		 */
		 
		start: function(callback) {
			if(!this.timer.running) {
				this.trigger('before:start');
				this.timer.start();
				this.trigger('start');
				this.callback(callback);
			}
		},
		
		/**
		 * Stops the clock
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
		},
		
		/**
		 * Auto increments/decrements the value of the clock face
		 */
		 
		autoIncrement: function() {
			if(!this.getOption('countdown')) {
				this.increment();
			}
			else {
				this.decrement();
			}

			this.trigger('auto:increment', this.getOption('countdown'));
		},

		/**
		 * Increments the value of the clock face
		 */
		 
		increment: function() {
			this.value++;

			if(this.time) {
				this.time.addSecond();
			}

			this.trigger('increment');
		},

		/**
		 * Decrements the value of the clock face
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
		},
		
		/**
		 * Triggers when the numbers on the clock flip
		 */
		 
		flip: function(time) {
			for(var i in time) {
				if(this.lists[i]) {
					this.lists[i].select(time[i]);

					if(this.getOption('autoPlay') || this.timer.running) {
						this.lists[i].addPlayClass();
					}
				}	
				else {
					this.addDigit(time[i]);
				}
			}

			this.trigger('flip');
		},

		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.flip();
			this.trigger('set:time', time);	
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
		 * Set the time attribute with a new FlipClock.Time object
		 */
		 
		setTimeObject: function(time) {
			this.time = new FlipClock.Time(time, {
				minimumDigits: this.getOption('minimumDigits')
			});
		},
		
		/**
		 * Sets the clock face's time
		 */
		 
		setValue: function(value) {
			this.value = value;

			if(this.time) {
				this.setTimeObject(this.time);
			}

			this.flip();

			this.trigger('set:value', this.value);		
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
			this.setOption('countdown', value ? true : false);
				
			if(this.timer.running) {
				this.stop();
				this.start();
			}

			this.trigger('set:countdown', this.getOption('countdown'));
		},

		/**
		 * Get the current countdown option value
		 */
		
		getCountdown: function(value) {			
			return this.getOption('countdown');
		}	

	});
	
}(jQuery));
