(function($) {
		
	/**
	 * FlipClock Greek Language Pack
	 *
	 * This class will used to translate tokens into the Greek language.
	 *	
	 */
	 
	FlipClock.Lang.Greek = {
		
		'years'   : '&#x3A7;&#x3C1;&#x3CC;&#x3BD;&#x3B9;&#x3B1;',
		'months'  : '&#x39C;&#x3AE;&#x3BD;&#x3B5;&#x3C2;',
		'days'    : '&#x397;&#x3BC;&#x3AD;&#x3C1;&#x3B5;&#x3C2;',
		'hours'   : '&#x38F;&#x3C1;&#x3B5;&#x3C2;',
		'minutes' : '&#x39B;&#x3B5;&#x3C0;&#x3C4;&#x3AC;',
		'seconds' : '&#x394;&#x3B5;&#x3C5;/&#x3BB;&#x3B5;&#x3C0;&#x3C4;&#x3B1;'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['el']      = FlipClock.Lang.Greek;
	FlipClock.Lang['en-gr']   = FlipClock.Lang.Greek;
	FlipClock.Lang['greek'] = FlipClock.Lang.Greek;

}(jQuery));