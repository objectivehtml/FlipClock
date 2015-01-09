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
	 * The FlipClock.List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific value.
	 *
	 * @param 	mixed   This is the value used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.NumericList = FlipClock.List.extend({
		
		getPrevValue: function() {
			if(this.value > 0) {
				return this.value - 1;
			}

			return 9;
		},

		getNextValue: function() {
			if(this.value < 9) {
				return this.value + 1;
			}

			return 0;
		}

	});
	
	
}(jQuery));