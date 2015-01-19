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
	
	/**
	 * The FlipClock.List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific value.
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
			
		/**
		 * The jQuery object
		 */		
		 
		$el: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
		/**
		 * The available options for this class
		 */		
		
		options: {

			/**
			 * The CSS classes
			 */		
			 
			classes: {
				active: 'flip-clock-active',
				before: 'flip-clock-before',
				flip: 'flip',
				play: 'play'
			},
				
			/**
			 * The last value selected in the list
			 */		
			 
			lastValue: 0
		},

		/**
		 * The selected value in the list
		 */		
		 
		value: 0,
		
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An string or integer use to select the correct value
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(value, options) {
			this.base(options);

			this.value = value;

			var t = this;

			this.createList();

			this.trigger('init');
		},
		
		/**
		 * Select the value in the list
		 *
		 * @param  int  A value 0-9	 
		 */
		 
		select: function(value) {
			var _afterListItem = this._afterListItem;

			this.setOption('lastValue', this.value);

			if(typeof value === "undefined") {
				value = this.value;
			}
			else {
				this.value = value;
			}

			if(this.value != this.getOption('lastValue')) {
				this._beforeListItem.$el.removeClass(this.getOption('classes').before);

				this.$el.find('.'+this.getOption('classes').active)
					.removeClass(this.getOption('classes').active)
					.addClass(this.getOption('classes').before);

				this.items.splice(0, 1);

				this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

				this._beforeListItem.$el.remove();
				this._beforeListItem = _afterListItem;

				this.trigger('select', this.value);
			}	
		},

		/*
		 * Add the play class to the list
		 *
		 * @return 
		*/

		addPlayClass: function() {
			this.$el.addClass(this.getOption('classes').play);
		},
		
		/*
		 * Remove the play class to the list
		 *
		 * @return 
		*/

		removePlayClass: function() {
			this.$el.removeClass(this.getOption('classes').play);
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 */
		 
		createListItem: function(value, css) {
			var item = new FlipClock.ListItem(value, {
				className: css
			});

			this.items.push(item);

			this.$el.append(item.$el);

			this.trigger('create:item', item);

			return item;
		},

		/**
		 * Create the list of values and appends it to the DOM object 
		 */
		 
		createList: function() {
			var $el = this.$el = $('<ul class="'+this.getOption('classes').flip+'"></ul>');

			this._beforeListItem = this.createListItem(this.getPrevValue(), this.getOption('classes').before);
			this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

			$el.append(this._beforeListItem.el);
			$el.append(this._afterListItem.el);
			
			this.trigger('create:list', $el);		

			return $el;
		}

	});
		
}(jQuery));