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
	 * The FlipClock.NumberList class is a specific class to create
	 * lists that display numbers
	 */

	FlipClock.NumericList = FlipClock.List.extend({
		
		/*
		 * Get the previous value in the list
		 *
		 * @return int
		*/

		getPrevValue: function() {
			if(this.value > 0) {
				return this.value - 1;
			}

			return 9;
		},

		/*
		 * Get the next value in the list
		 *
		 * @return int
		*/

		getNextValue: function() {
			if(this.value < 9) {
				return this.value + 1;
			}

			return 0;
		}

	});
	
	
}(jQuery));