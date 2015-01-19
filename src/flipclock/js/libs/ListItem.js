/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

	FlipClock.ListItem = FlipClock.Base.extend({
				
		/**
		 * The jQuery object
		 */	

		$el: false,
		
		/**
		 * The available options for this class
		 */		
		
		options: {

			/**
			 * An object of available CSS classes
			 */		
			 
			classes: {
				down: 'down',
				inn: 'inn',
				shadow: 'shadow',
				up: 'up'
			},

			/**
			 * The css class appended to the parent DOM node
			 */		

			className: null
		},

		/**
		 * The list item value
		 */		
		
		value: null,

		/*
		 * Constructor
		 *
		 * @param  mixed
		 * @param  mixed
		 * @return 
		*/

		constructor: function(value, options) {
			this.base(options);
			this.value = value;

			this.$el = $([
				'<li class="'+(this.getOption('className') ? this.getOption('className') : '')+'">',
					'<a href="#">',
						'<div class="'+this.getOption('classes').up+'">',
							'<div class="'+this.getOption('classes').shadow+'"></div>',
							'<div class="'+this.getOption('classes').inn+'">'+value+'</div>',
						'</div>',
						'<div class="'+this.getOption('classes').down+'">',
							'<div class="'+this.getOption('classes').shadow+'"></div>',
							'<div class="'+this.getOption('classes').inn+'">'+value+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join(''));
		},

		/*
		 * Output the object instance as a string
		 *
		 * @return string
		*/

		toString: function() {
			return this.$el.html();
		}

	});

}(jQuery));