(function($) {
			
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be 
	 * created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
			
		// clearExcessDigits: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var t        = this;
			var children = this.factory.$el.find('ul');
			var lists = [];
			
			time     = time ? time : this.factory.time.getHourCounter();
			
			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					lists.push(t.createList(digit));
				});
			}
			
			this.factory.lists = lists;	
			
			$(this.createDivider('Seconds')).insertBefore(this.factory.lists[this.factory.lists.length - 2].$el);
			$(this.createDivider('Minutes')).insertBefore(this.factory.lists[this.factory.lists.length - 4].$el);
			
			if(!excludeHours) {
				$(this.createDivider('Hours', true)).insertBefore(this.factory.lists[0].$el);
			}
			
			/*
			if(this.clearExcessDigits) {
				this._clearExcessDigits();
			}
			*/
			
			if(this.autoStart) {
				this.start();
			}
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getHourCounter();
			}	

			this.autoIncrement();
		
			this.base(time, doNotAddPlayClass);
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