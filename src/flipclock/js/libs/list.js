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
	 * The FlipClock List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific digit.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
		
		/**
		 * The digit (0-9)
		 */		
		 
		digit: 0,
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip'	
		},
				
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * The wrapping jQuery object
		 */		
		 
		$obj: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
				 
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		minimumDigits: 0,

		constructor: function(factory, digit, options) {
			this.factory = factory;
			this.digit   = digit;
			this.$obj    = this.createList();
			
			if(digit > 0) {
				this.select(digit);
			}
			
			this.factory.$wrapper.append(this.$obj);
		},
		
		/**
		 * Select the digit in the list
		 *
		 * @param  int  A digit 0-9	 
		 */
		 
		select: function(digit) {
			if(typeof digit === "undefined") {
				digit = this.digit;
			}
			else {
				this.digit = digit;
			}

			var target = this.$obj.find('[data-digit="'+digit+'"]');
			var active = this.$obj.find('.'+this.classes.active).removeClass(this.classes.active);
			var before = this.$obj.find('.'+this.classes.before).removeClass(this.classes.before);

			if(!this.factory.countdown) {
				if(target.is(':first-child')) {
					this.$obj.find(':last-child').addClass(this.classes.before);
				}
				else {
					target.prev().addClass(this.classes.before);
				}
			}
			else {
				if(target.is(':last-child')) {
					this.$obj.find(':first-child').addClass(this.classes.before);
				}
				else {
					target.next().addClass(this.classes.before);
				}
			}
			
			target.addClass(this.classes.active);			
		},
		
		/**
		 * Adds the play class to the DOM object
		 */
		 		
		play: function() {
			this.$obj.addClass(this.factory.classes.play);
		},
		
		/**
		 * Removes the play class to the DOM object 
		 */
		 
		stop: function() {
			var t = this;

			setTimeout(function() {
				t.$obj.removeClass(t.factory.classes.play);
			}, this.factory.timer.interval);
		},
		
		/**
		 * Create the list of digits and appends it to the DOM object 
		 */
		 
		createList: function() {
		
			var html = $('<ul class="'+this.classes.flip+' '+(this.factory.running ? this.factory.classes.play : '')+'" />');
			
			for(var x = 0; x < 10; x++) {
				var item = $([
				'<li data-digit="'+x+'">',
					'<a href="#">',
						'<div class="up">',
							'<div class="shadow"></div>',
							'<div class="inn">'+x+'</div>',
						'</div>',
						'<div class="down">',
							'<div class="shadow"></div>',
							'<div class="inn">'+x+'</div>',
						'</div>',
					'</a>',
				'</li>'].join(''));
				
				this.items.push(item);
				
				html.append(item);
			}
						
			return html;
		}
	});
	
	
}(jQuery));
