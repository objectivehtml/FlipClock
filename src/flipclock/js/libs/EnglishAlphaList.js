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
	 */

	FlipClock.EnglishAlphaList = FlipClock.List.extend({

		capitalLetters: true,

		constructor: function(value, options) {
			if(!value) {
				value = String.fromCharCode(this.getMinCharCode());
			}

			this.base(value, options);

			if(!this.value) {
				this.value = String.fromCharCode(this.getMinCharCode());
			}
		},

		getMaxCharCode: function() {
			return this.capitalLetters ? 90 : 122;
		},

		getMinCharCode: function() {
			return this.capitalLetters ? 65 : 96;
		},

		getCharCode: function() {
			return this.value.charCodeAt(0);
		},
		
		getPrevValue: function() {
			var charCode = this.value.charCodeAt(0) - 1;
			var minCode = this.getMinCharCode(), maxCode = this.getMaxCharCode();

			if(charCode < minCode) {
				charCode = maxCode;
			}

			return String.fromCharCode(charCode);
		},

		getNextValue: function() {
			var charCode = this.value.charCodeAt(0) + 1;
			var minCode = this.getMinCharCode(), maxCode = this.getMaxCharCode();

			if(charCode > maxCode) {
				charCode = minCode;
			}

			return String.fromCharCode(charCode);
		}

	});
	
}(jQuery));