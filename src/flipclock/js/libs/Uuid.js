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
	 * The FlipClock.Uuid object generates a uuid instance and return
	 * the uuid as string.
	 */
	
	FlipClock.Uuid = FlipClock.Base.extend({
		
		/**
		 * The actual uuid value as a string
		 */	

		value: false,

		/*
		 * Constructor
		 * 
		 * @param  string  value 
		*/

		constructor: function(value) {
			this.value = value ? value : this.generate();
		},

		/*
		 * Generate a new Uuid
		 * 
		 * @return string
		*/

		generate: function() {
			var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		    });
		    return uuid;
		},

		/*
		 * Does this uuid equal another uuid object
		 *
		 * @param  object
		 * @return bool
		*/

		equals: function(other) {
		    return this.isUuid(other) && value == other;
		},

		/*
		 * Tests another value to see if it's a uuid
		 *
		 * @param  mixed
		 * @return bool
		*/

		isUuid: function(value) {
			var validator = new RegExp("^[a-z0-9]{32}$", "i");

			return value && (value instanceof Uuid || validator.test(value.toString()));
		},

		/*
		 * Outputs the object instance as a string
		 *
		 * @return string
		*/

		toString: function() {
			return this.value;
		}

	});

}(jQuery));