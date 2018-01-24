import Component from './Component';

export default class Divider extends Component {

	initialize() {
		// Translate the label
		if(this.getOption('label')) {
			this.setOption('label', this.t(this.getOption('label')));
		}

		this.el([
			'<span class="'+(this.getOption('className') ? this.getOption('className') : '')+'">',
				(this.getOption('label') ? '<span class="'+this.getOption('classes').label+'">' + this.getOption('label') +'</span>' : ''),
				(!this.getOption('excludeDots') ? [
        			'<span class="'+this.getOption('classes').dot+' top"></span>',
        			'<span class="'+this.getOption('classes').dot+' bottom"></span>'
        		].join('') : ''),
			'</span>'
		]);
	}

	/*
	 * Get the default options for the class
	 *
	 * @return object
	*/
	defaultOptions() {
		return {
			// The available options for this class
			className: 'flipclock-divider',

			// An object of available CSS classes
			classes: {
                dot: 'flipclock-dot',
				label: 'flipclock-label'
			},

			// The label for the divider. If false, no label is used
			label: false,

			// If true the dots will not be displayed in the divider
			excludeDots: false,
		};
	}

	/*
	 * Output object instance as a string
	 *
	 * @return string
	*/
	toString() {
		return this.$el.outerHTML;
	}

};
