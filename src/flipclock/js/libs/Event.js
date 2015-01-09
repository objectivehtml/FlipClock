(function($) {

	FlipClock.Event = FlipClock.Base.extend({

		name: false,

		_hasFired: false,

		_lastResponse: null,

		_preventFire: false,

		_fireOnce: false,

		_callback: function() {},

		constructor: function(name, callback) {
			if(!name) {
				throw "Events must have a name";
			}

			if(typeof callback === "function") {
				this._callback = callback;
			}
		},

		fire: function(obj, arguments) {
			if(this._preventFire === false) {
				this.setLastResponse(this._callback.apply(obj, arguments));
				this._hasFired = true;
				if(this._fireOnce) {
					this._preventFire = true;
				}
			}
		},

		off: function() {
			this._preventFire = true;
		},

		hasFired: function() {
			return this._hasFired;
		},

		getLastResponse: function() {
			return this._lastResponse;
		},

		setLastResponse: function(response) {
			this._lastResponse = response;
		},

		getFireOnce: function(value) {
			return this._fireOnce;
		},

		setFireOnce: function(value) {
			this._fireOnce = value;
		}

	});

}(jQuery));