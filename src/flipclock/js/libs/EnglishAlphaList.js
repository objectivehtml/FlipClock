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
	 * node by passing a specific value.
	 *
	 * @param 	mixed   This is the value used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.EnglishAlphaList = FlipClock.List.extend({

		capitalLetters: true,
		
		getPrevValue: function() {
			var charCode = this.value.charCodeAt(0) - 1;
			var minCode = 65, maxCode = 90;

			if(!this.capitalLetters) {
				minCode = 97;
				maxCode = 122;
			}

			if(charCode < minCode) {
				charCode = maxCode;
			}

			return String.fromCharCode(charCode);
		},

		getNextValue: function() {
			var charCode = this.value.charCodeAt(0) + 1;
			var minCode = 65, maxCode = 90;

			if(!this.capitalLetters) {
				minCode = 97;
				maxCode = 122;
			}

			if(charCode > maxCode) {
				charCode = minCode;
			}

			return String.fromCharCode(charCode);
		}

	});
	
	
}(jQuery));