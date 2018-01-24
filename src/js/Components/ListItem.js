import Component from '../Components/Component';

export default class ListItem extends Component {

    /**
     * Set the default properties for the class
     *
     * @param  mixed  A single digit value used for the label
    */
	properties(value) {
		this.el = null;
		this.value = value || null;
	}

	/*
	 * Get the default options for the class
	 *
	 * @return object
	*/
	defaultOptions() {
		return {
			// The css class appended to the parent DOM node
			className: null,
			
			// An object of available CSS classes
			classes: {
				down: 'down',
				inn: 'inn',
				shadow: 'shadow',
				up: 'up'
			}
		};
	}

	initialize() {
		this.$el([
			'<li class="'+(this.getOption('className') ? this.getOption('className') : '')+'">',
				'<a href="#">',
					'<div class="'+this.getOption('classes').up+'">',
						'<div class="'+this.getOption('classes').shadow+'"></div>',
						'<div class="'+this.getOption('classes').inn+'">'+this.value+'</div>',
					'</div>',
					'<div class="'+this.getOption('classes').down+'">',
						'<div class="'+this.getOption('classes').shadow+'"></div>',
						'<div class="'+this.getOption('classes').inn+'">'+this.value+'</div>',
					'</div>',
				'</a>',
			'</li>'
		]);
	}

	/*
	 * Output the object instance as a string
	 *
	 * @return string
	*/
	toString() {
		return this.el.outerHTML;
	}

}
