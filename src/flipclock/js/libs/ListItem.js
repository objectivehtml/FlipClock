(function($) {

	FlipClock.ListItem = FlipClock.Base.extend({
		
		css: null,

		value: null,

		classes: {
			up: 'up',
			down: 'down'
		},

		$el: false,
		
		constructor: function(css, value, options) {
			this.base(options);
			this.css = css;
			this.value = value;
			
			this.$el = $([
				'<li class="'+(css ? css : '')+'">',
					'<a href="#">',
						'<div class="'+this.classes.up+'">',
							'<div class="shadow"></div>',
							'<div class="inn">'+value+'</div>',
						'</div>',
						'<div class="'+this.classes.down+'">',
							'<div class="shadow"></div>',
							'<div class="inn">'+value+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join(''));
		},

		toString: function() {
			return this.$el.html();
		}

	});

}(jQuery));