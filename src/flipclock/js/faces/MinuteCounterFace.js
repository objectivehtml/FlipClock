(function($) {
		
	/**
	 * Minute Counter Clock Face
	 *
	 * This class will generate a minute counter for FlipClock.js. A
	 * minute counter will track minutes and seconds. If an hour is 
	 * reached, the counter will reset back to 0. (4 digits max)
	 */
	 
	FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({

		/**
		 * Build the clock face
		 *	
		 * @return
		 */
		 
		build: function() {
			var time = this.time.getMinuteCounter(this.getOption('showSeconds'));
			
			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.getOption('showSeconds')) {
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - 2].$el);
			}

			this.createDivider('Minutes').$el.insertBefore(this.lists[0].$el);

			return FlipClock.Face.prototype.build.call(this);
		},

		/**
		 * Flip the clock face
		 */
		 
		flip: function() {
			this.base(this.time.getMinuteCounter(this.getOption('showSeconds')));
		}

	});
	
}(jQuery));