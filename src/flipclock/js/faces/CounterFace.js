(function($) {
		
	/**
	 * Counter Clock Face
	 *
	 * This class will generate a generice flip counter. The timer has been
	 * disabled. clock.increment() and clock.decrement() have been added.
	 */
	 
	FlipClock.CounterFace = FlipClock.Face.extend({
		
		/**
		 * Tells the counter clock face if it should auto-increment
		 */

		shouldAutoIncrement: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 * @return	
		 */
		 
		constructor: function(value, options) {
			this.base(value, options);

			this.timer.off('stop');

			this.on('before:start', function() {
				this.shouldAutoIncrement = true;
			});

			this.on('before:stop', function() {
				this.shouldAutoIncrement = false;
			});

			this.on('create:list', function(list) {
				list.addPlayClass();
			});
		},

		/**
		 * Build the clock face	
		 *	
		 * @return
		 */
		 
		build: function() {
			var t = this, time = this.getTime().digitize([this.getTime().time]);

			for(var i in time) {
				t.createList(time[i]);
			}
			
			if(this.autoStart) {
				this.shouldAutoIncrement = true;
			}

			this.base();
		},
		
		/**
		 * Flip the clock face
		 *	
		 * @return
		 */
		 
		flip: function(time) {
			if(this.shouldAutoIncrement) {
				this.autoIncrement();
			}

			if(!time) {
				time = this.getTime().digitize([this.getTime().time]);
			}

			this.base(time);
		},

		/**
		 * Perform arbirtrary logic when the clock face instantiated.
		 * The factor object is passed in the first argument
		 *
		 * @param  object
		 * @return
		 */

		init: function(factory) {
			var t = this;

			factory.increment = function() {
				t.increment();
				t.flip();
			};

			factory.decrement = function() {
				t.decrement();
				t.flip();
			};

			this.base(factory);
		}

	});
	
}(jQuery));