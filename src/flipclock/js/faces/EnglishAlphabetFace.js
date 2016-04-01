(function($) {
		
	/**
	 * English Alphabet Clock Face
	 *
	 */
	 
	FlipClock.EnglishAlphabetFace = FlipClock.Face.extend({
		
		_autoIncrementValues: [],

		/**
		 * Tells the clock face if it should auto-increment
		 */

		// shouldAutoIncrement: false,

		/**
		 * Tells the clock face if it should use capital letters
		 */

		capitalLetters: true,

		getDefaultOptions: function() {
			var options = this.base();

			options.capitalLetters = true;

			return options;
		},

		init: function(factory) {
			this.base(factory);

			if(!this.value) {
				this.value = this.getListObject(this.value).value;
			}
		},

		build: function() {
			var values = this.value.split('');

			/*
			for(var x = values.length + 1; x <= this.getOption('minimumDigits'); x++) {
				values.unshift(String.fromCharCode(this.getListObject(false).getMinCharCode()));
			}
			*/

			for(var i in values) {
				this.createList(values[i]);
			}

			for(var x in this.lists) {
				this._autoIncrementValues.unshift(this.lists[x].getCharCode());
			}

			this.base();
		},

		increment: function() {
			var flip = true, i = 0, values = this.value.split('');

			while (flip)
			{
				flip = false;

				var value = this._autoIncrementValues[i];
				var list = this.lists[this.lists.length - i - 1];

				if(list) {
					values[this.value.length - i - 1] = list.getNextValue();

					if(list.getCharCode() >= list.getMaxCharCode()) {
						flip = true;
						i++;
					}
				}
				else {
					values.unshift(String.fromCharCode(this.getListObject(false).getMinCharCode()));
				}
			}

			this.value = values.join('');
		},

		decrement: function() {
			var flip = true, i = 0, values = this.value.split('');

			while (flip)
			{
				flip = false;

				var value = this._autoIncrementValues[i];
				var list = this.lists[this.lists.length - i - 1];

				if(list) {
					values[this.value.length - i - 1] = list.getPrevValue();

					if(list.getCharCode() <= list.getMinCharCode()) {
						flip = true;
						i++;
					}
				}
				else {
					values.unshift(String.fromCharCode(this.getListObject(false).getMinCharCode()));
				}
			}

			this.value = values.join('');
		},

		flip: function() {
			/*
			if(this.shouldAutoIncrement) {
				this.autoIncrement();
			}
			*/

			this.autoIncrement();
			this.base(this.value.split(''));
		},

		/*
		 * Get the list class object
		 *
		 * @return  object
		*/

		getListClass: function() {
			return FlipClock.EnglishAlphaList;
		},

		/*
		 * Get a new list class instance
		 *
		 * @return  object
		*/

		getListObject: function(value) {
			var List = this.getListClass();

			return new List(value, {
				capitalLetters: this.capitalLetters,
				translator: this.translator
			});
		}

	});
	
}(jQuery));