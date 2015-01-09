(function($) {

	FlipClock.Divider = FlipClock.Base.extend({

		label: false,

		css: false,
		
		excludeDots: false,

		translator: false,

		classes: {
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label'
		},

		$el: false,

		constructor: function(label, options) {
			this.base(options);

			this.label = this.t(label);

			var dots = !this.excludeDots ? [
				'<span class="'+this.classes.dot+' top"></span>',
				'<span class="'+this.classes.dot+' bottom"></span>'
			].join('') : '';

			this.$el = $([
				'<span class="'+this.classes.divider+' '+(this.css ? this.css : '').toLowerCase()+'">',
					'<span class="'+this.classes.label+'">'+(this.label ? this.label : '')+'</span>',
					dots,
				'</span>'
			].join(''));

		},

		toString: function() {
			return this.$el.html();
		}

	});

}(jQuery));