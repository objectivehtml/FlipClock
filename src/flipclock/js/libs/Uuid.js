(function($) {

	FlipClock.Uuid = FlipClock.Base.extend({
		
		value: false,

		constructor: function() {
			this.value = this.generate();
		},

		generate: function() {
			var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		    });
		    return uuid;
		},

		equals: function(other) {
		    return this.isUuid(other) && value == other;
		},

		isUuid: function(value) {
			var validator = new RegExp("^[a-z0-9]{32}$", "i");

			return value && (value instanceof Uuid || validator.test(value.toString()));
		},

		toString: function() {
			return this.value;
		},

		toJSON: function() {
			return this.value;
		}

	});

}(jQuery));