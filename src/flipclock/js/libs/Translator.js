(function() {

	FlipClock.Translator = FlipClock.Base.extend({

		/**
		 * The default language
		 */	
		 
		defaultLanguage: 'english',
		 
		/**
		 * The language being used to display labels (string)
		 */	
		 
		language: 'english',

		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,

		/*
		 * Constructor
		 *
		 * @param  string
		 * @return 
		*/

		constructor: function(options) {
			this.base(options);
			this.loadLanguage(this.language);
		},

		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */
		 
		loadLanguage: function(name) {	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]) {
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]) {
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.defaultLanguage];
			}
			
			return this.lang = lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

		localize: function(index, obj) {
			var lang = this.lang;

			if(!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object") {
				lang = obj;
			}

			if(lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		}

	});

}());