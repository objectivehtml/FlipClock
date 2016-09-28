(function($) {
			
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be 
	 * created.
	 */
	 
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
			
		/**
		 * Constructor
		 *
		 * @param 	mixed
		 * @param 	mixed
		 */
		 
		constructor: function(value, options) {
			this.base(value, options);

			if(this.getOption('showSeconds') === null) {
				this.setOption('showSeconds', true);
			}
		},

		/**
		 * Build the clock face
		 */
		
		build: function(time) {
			var offset = 0, time = time ? time : this.time.getHourCounter(this.getOption('showSeconds'));
			
			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.getOption('showSeconds') === true) {
				offset = 2;
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - offset].$el);
			}
			
			this.createDivider('Minutes').$el.insertBefore(this.lists[this.lists.length - 2 - offset].$el);
			this.createDivider('Hours', true).$el.insertBefore(this.lists[0].$el);

			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {
			if(!time) {
				time = this.time.getHourCounter(this.getOption('showSeconds'));
			}

			this.base(time);
			this.autoIncrement();
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			this.base(obj);
			this.dividers[0].insertAfter(this.dividers[0].next());
		}
		
	});
	
}(jQuery));