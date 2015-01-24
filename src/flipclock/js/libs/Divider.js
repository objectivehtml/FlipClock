/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

	"use strict";
	
	/*
	 * The FlipClock.Divider class makes visual dividers on clocks
	 * easy to create and manipulate.
	 * @class
	 * @property {object} - The jQuery object		
	 * @property {object} - The available options for this class
	 * @property {object} - The FlipClock.Translator instance
	*/

	FlipClock.Divider = FlipClock.Base.extend({

		$el: false,

		options: {

			// The available options for this class
			className: false,
		
			// An object of available CSS classes		 
			classes: {
				divider: 'flip-clock-divider',
				dot: 'flip-clock-dot',
				label: 'flip-clock-label'
			},

			// If true the dots will not be displayed in the divider
			excludeDots: false,

			// The label for the divider
			label: false
		},
		
		translator: false,

		/*
		 * Constructor
		 *
		 * @param  mixed  options
		*/

		constructor: function(options) {
			this.base(options);

			// Tranlate the label
			if(this.getOption('label')) {
				this.setOption('label', this.t(this.getOption('label')));
			}

			var dots = !this.getOption('excludeDots') ? [
				'<span class="'+this.getOption('classes').dot+' top"></span>',
				'<span class="'+this.getOption('classes').dot+' bottom"></span>'
			].join('') : '';

			this.$el = $([
				'<span class="'+this.getOption('classes').divider+' '+(this.getOption('css') ? this.getOption('css') : '').toLowerCase()+'">',
					'<span class="'+this.getOption('classes').label+'">'+(this.getOption('label') ? this.getOption('label') : '')+'</span>',
					dots,
				'</span>'
			].join(''));
		},

		/*
		 * Output object instance as a string
		 *
		 * @return string
		*/

		toString: function() {
			return this.$el.html();
		}

	});

}(jQuery));