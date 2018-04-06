(function($) {
		
	/**
	 * Twelve Hour Clock Face
	 *
	 * This class will generate a twelve hour clock for FlipClock.js
	 */
	 
	FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
		
		/**
		 * The meridium jQuery DOM object
		 */
		 
		$meridium: false,
		
		/**
		 * The meridium text as string for easy access
		 */
		 
		meridiumText: 'AM',
			
		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function() {
			var t = this, time = this.time.getTime(false, this.getOption('showSeconds'));
		
			this.meridiumText = this.getMeridium();

			this.$meridium = $([
				'<ul class="flipclock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));

			this.base(time);	
						
			this.$meridium.insertAfter(this.lists[this.lists.length-1].$el);
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {			
			if(this.meridiumText != this.getMeridium()) {
				this.meridiumText = this.getMeridium();
				this.$meridium.find('a').html(this.meridiumText);	
			}

			this.base(this.time.getTime(false, this.getOption('showSeconds')));	
		},
		
		/**
		 * Get the current meridium
		 *
		 * @return  string  Returns the meridium (AM|PM)
		 */
		 
		getMeridium: function() {
			return new Date().getHours() >= 12 ? this.t('PM') : this.t('AM');
		},
		
		/**
		 * Is it currently in the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isPM: function() {
			return this.getMeridium() == 'PM' ? true : false;
		},

		/**
		 * Is it currently before the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isAM: function() {
			return this.getMeridium() == 'AM' ? true : false;
		}
				
	});
	
}(jQuery));