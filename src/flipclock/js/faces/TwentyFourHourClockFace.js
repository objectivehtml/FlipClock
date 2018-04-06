(function($) {
	
	/**
	 * Twenty-Four Hour Clock Face
	 *
	 * This class will generate a twenty-four our clock for FlipClock.js	
	 */
	 
	FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function(time) {
			var time = time ? time : this.time.getMilitaryTime(false, this.getOption('showSeconds'));

			for(var i in time) {
				this.createList(time[i]);
			}
			
			this.createDivider().$el.insertBefore(this.lists[this.lists.length - 2].$el);
			this.createDivider().$el.insertBefore(this.lists[this.lists.length - 4].$el);
			
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			this.autoIncrement();
			
			time = time ? time : this.time.getMilitaryTime(false, this.getOption('showSeconds'));
			
			this.base(time);	
		}
				
	});
	
}(jQuery));