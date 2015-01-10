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
			this.base(true, this.time.getMinuteCounter());
		},
		
		/**
		 * Flip the clock face
		 *	
		 * @return
		 */
		 
		flip: function() {
			this.base(this.time.getMinuteCounter());
		}

	});
	
}(jQuery));