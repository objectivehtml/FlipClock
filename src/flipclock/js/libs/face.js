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
	 * @param 	object  The parent FlipClock.Factory object
	 * @param 	object  An object of properties to override the default	
	 */
	 
	FlipClock.Face = FlipClock.Base.extend({
		
		/**
		 * Sets whether or not the clock should start upon instantiation
		 */
		 
		autoStart: true,

		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */
		 
		dividers: [],

		/**
		 * An array of FlipClock.List objects
		 */		
		 
		factory: false,
		
		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],

		/**
		 * Constructor
		 *
		 * @param 	object  The parent FlipClock.Factory object
		 * @param 	object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.dividers = [];
			this.lists = [];
			this.base(options);
			this.factory = factory;
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
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider. 
		 *					If not set, is false.
		 */
		 
		createDivider: function(label, css, excludeDots) {
			if(typeof css == "boolean" || !css) {
				excludeDots = css;
				css = label;
			}

			var dots = [
				'<span class="'+this.factory.classes.dot+' top"></span>',
				'<span class="'+this.factory.classes.dot+' bottom"></span>'
			].join('');

			if(excludeDots) {
				dots = '';	
			}

			label = this.factory.localize(label);

			var html = [
				'<span class="'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
					'<span class="'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
					dots,
				'</span>'
			];	
			
			var $html = $(html.join(''));

			this.dividers.push($html);

			return $html;
		},
		
		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param	mixed 	The digit to select in the list
		 * @param	object  An object to override the default properties
		 */
		 
		createList: function(digit, options) {
			if(typeof digit === "object") {
				options = digit;
				digit = 0;
			}

			var obj = new FlipClock.List(this.factory, digit, options);
		
			this.lists.push(obj);

			return obj;
		},
		
		/**
		 * Triggers when the clock is reset
		 */

		reset: function() {
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0,
				{
					minimumDigits: this.factory.minimumDigits
				}
			);

			this.flip(this.factory.original, false);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			obj.$el.append(false);
		},

		/**
		 * Add a digit to the clock face
		 */
		 
		addDigit: function(digit) {
			var obj = this.createList(digit, {
				classes: {
					active: this.factory.classes.active,
					before: this.factory.classes.before,
					flip: this.factory.classes.flip
				}
			});

			this.appendDigitToClock(obj);
		},
		
		/**
		 * Triggers when the clock is started
		 */
		 
		start: function() {},
		
		/**
		 * Triggers when the time on the clock stops
		 */
		 
		stop: function() {},
		
		/**
		 * Auto increments/decrements the value of the clock face
		 */
		 
		autoIncrement: function() {
			if(!this.factory.countdown) {
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
			this.factory.time.addSecond();
		},

		/**
		 * Decrements the value of the clock face
		 */

		decrement: function() {
			if(this.factory.time.getTimeSeconds() == 0) {
	        	this.factory.stop()
			}
			else {
				this.factory.time.subSecond();
			}
		},
			
		/**
		 * Triggers when the numbers on the clock flip
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			var t = this;

			$.each(time, function(i, digit) {
				var list = t.lists[i];

				if(list) {
					if(!doNotAddPlayClass && digit != list.digit) {
						list.play();	
					}

					list.select(digit);
				}	
				else {
					t.addDigit(digit);
				}
			});
		}
					
	});
	
}(jQuery));
