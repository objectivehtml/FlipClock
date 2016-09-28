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
	 * The FlipClock.EnglishAlphaList class is a specific class to create
	 * lists that alphabetical values
	 */

	FlipClock.EnglishAlphaList = FlipClock.List.extend({

		/*
		 * Constructor
		 *
		 * @param  string
		 * @param  mixed
		*/

		constructor: function(value, options) {
			this.options = this.getDefaultOptions();
			this.setOptions(options);

			if(!value) {
				value = String.fromCharCode(this.getMinCharCode());
			}

			this.base(value, options);
		},

		/*
		 * Get the default options for the class
		 *
		 * @return object
		*/

		getDefaultOptions: function() {
			var options = this.base();
			
			/**
			 * Tells the list to use capital letters if true
			 */				
			options.capitalLetters = true;
			
			return options;
		},

		/*
		 * Get the maximum character code in the list
		 *
		 * @return int
		*/

		getMaxCharCode: function() {
			return this.getOption('capitalLetters') ? 90 : 122;
		},

		/*
		 * Get the minimum character code in the list
		 *
		 * @return int
		*/

		getMinCharCode: function() {
			return this.getOption('capitalLetters') ? 65 : 96;
		},

		/*
		 * Get the char code of the current list value
		 *
		 * @return int
		*/

		getCharCode: function() {
			return this.value.charCodeAt(0);
		},
		
		/*
		 * Get the previous value in the list
		 *
		 * @return int
		*/

		getPrevValue: function() {
			var charCode = this.value.charCodeAt(0) - 1;
			var minCode = this.getMinCharCode(), maxCode = this.getMaxCharCode();

			if(charCode < minCode) {
				charCode = maxCode;
			}

			return String.fromCharCode(charCode);
		},

		/*
		 * Get the next value in the list
		 *
		 * @return int
		*/

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