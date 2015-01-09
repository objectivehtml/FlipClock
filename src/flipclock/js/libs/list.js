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
	 *
	 * @param 	mixed   This is the value used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
		
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
		 * The jQuery object
		 */		
		 
		$el: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
		/**
		 * The last value selected in the list
		 */		
		 
		lastValue: 0,
			
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

			this.lastValue = this.value;

			if(typeof value === "undefined") {
				value = this.value;
			}
			else {
				this.value = value;
			}

			if(this.value != this.lastValue) {
				this._beforeListItem.$el.removeClass(this.classes.before);

				this.$el.find('.'+this.classes.active)
					.removeClass(this.classes.active)
					.addClass(this.classes.before);

				this.items.splice(0, 1);

				this._afterListItem = this.createListItem(this.classes.active, this.value);

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
			this.$el.addClass(this.classes.play);
		},
		
		/*
		 * Remove the play class to the list
		 *
		 * @return 
		*/

		removePlayClass: function() {
			this.$el.removeClass(this.classes.play);
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 */
		 
		createListItem: function(css, value) {
			var item = new FlipClock.ListItem(css, value);

			this.items.push(item);

			this.$el.append(item.$el);

			this.trigger('create:item', item);

			return item;
		},

		/**
		 * Create the lsit of values and appends it to the DOM object 
		 */
		 
		createList: function() {
			var $el = this.$el = $('<ul class="'+this.classes.flip+'"></ul>');

			this._beforeListItem = this.createListItem(this.classes.before, this.getPrevValue());
			this._afterListItem = this.createListItem(this.classes.active, this.value);

			$el.append(this._beforeListItem.el);
			$el.append(this._afterListItem.el);
			
			this.trigger('create:list', $el);		

			return $el;
		}

	});
		
}(jQuery));