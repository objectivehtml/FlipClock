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
	
	/*
	 * The FlipClock.Event class are instances for each event triggered
	 * by FlipClock's classes.
	*/

	FlipClock.Event = FlipClock.Base.extend({

		/**
		 * The name of the event
		 */		 

		name: false,

		/**
		 * Has the event fired?
		 */
		 
		_hasFired: false,

		/**
		 * The returned object of the last event response. Null
		 * if no response has been triggered.
		 */
		 
		_lastResponse: null,

		/**
		 * If true, the event will not fire
		 */
		 
		_preventFire: false,

		/**
		 * If true, the event will only fire once
		 */
		 
		_fireOnce: false,

		/**
		 * The function to call when the event is fired
		 */
		 
		_callback: function() {},

		/*
		 * Constructor
		 *
		 * @param  string
		 * @param  mixed
		*/

		constructor: function(name, callback) {
			if(!name) {
				throw "Events must have a name";
			}

			if(typeof callback === "function") {
				this._callback = callback;
			}
		},

		/*
		 * Fire the event. This method is chainable.
		 *
		 * @param  object
		 * @param  mixed
		 * @return object
		*/

		fire: function(obj, args) {
			if(this._preventFire === false) {
				this.setLastResponse(this._callback.apply(obj, args));
				this._hasFired = true;
				if(this._fireOnce) {
					this._preventFire = true;
				}
			}

			return this;
		},

		/*
		 * Prevent the event from firing. This method is chainable.
		 *
		 * @return object
		*/

		off: function() {
			this._preventFire = true;

			return this;
		},

		/*
		 * Turn on the event (if the event was previously turned off).
		 * This method is chainable.
		 *
		 * @return object
		*/

		on: function() {
			this._preventFire = false;

			return this;
		},

		/*
		 * Returns true if the event has fired
		 *
		 * @return bool
		*/

		hasFired: function() {
			return this._hasFired;
		},

		/*
		 * Get the last response. Returns null if no response exists
		 *
		 * @return mixed
		*/

		getLastResponse: function() {
			return this._lastResponse;
		},

		/*
		 * Sets the last response. This method is chainable.
		 *
		 * @param  object
		 * @return object
		*/

		setLastResponse: function(response) {
			this._lastResponse = response;

			return this;
		},

		/*
		 * Returns true if the event is set to only fire once
		 *
		 * @return bool
		*/

		getFireOnce: function() {
			return this._fireOnce;
		},

		/*
		 * Set event to fire once or indefinitely
		 *
		 * @param  bool
		 * @return object
		*/

		setFireOnce: function(value) {
			this._fireOnce = value;

			return this;
		}

	});

}(jQuery));