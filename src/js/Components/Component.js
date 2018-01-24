import { each } from 'lodash';
import { extend } from 'lodash';
import { isArray } from 'lodash';
import { isObject } from 'lodash';
import { isFunction } from 'lodash';
import Broadcast from '@objectivehtml/broadcast';

export default class Component {

	/**
	 * Constructor use to set the default properties and options
	 * @param  ....
	*/
	constructor() {
		this.$el = null;
		this.translator = false;
		this.channel = 'flipclock';
		this.options = this.defaultOptions();
		this.properties.apply(this, arguments);
		this.setOptions(arguments[arguments.length - 1]);
		this.registerDispatch(this.channel);
		this.initialize.apply(this, arguments);
	}

	/**
	 * Initialize the class after all settings/getters have ran
	 *
	 * @param  ....
	*/
	initialize() {
		//
	}

	/**
	 * Define the default properties for the class
	 *
	 * @param 	null|Object  An object of options
	*/
	properties(options) {
		//
	}

	/**
	 * Register the event dispatcher
	 *
	 * @param	String	The name of the dispatch channel
	*/
	registerDispatch(channel) {
		const dispatch = this.$dispatch = new Broadcast().dispatch(channel);

		each(this.$dispatchMethods = ['on', 'once', 'off', 'emit', 'request', 'reply', 'stopReply'], method => {
			this[method] = function() {
				return dispatch[method].apply(dispatch, arguments);
			};
		});
	}

	/**
	 * Delegates the callback to the defined method
	 *
	 * @param  {function} method - The callback function
	 * @return Object
	*/
	callback(method) {
	 	if(typeof method === "function") {
			const args = [];

			for(let x = 1; x <= arguments.length; x++) {
				if(arguments[x]) {
					args.push(arguments[x]);
				}
			}

			method.apply(this, args);
		}

		return this;
	}

	/**
	 * Log a string into the console if it exists
	 *
	 * @param  {string} str - The string to log
	 * @return mixed
	*/
	log(str) {
		if(window.console && console.log) {
			console.log(str);
		}

		return this;
	}

	/**
	 * Get an single option value. Returns false if option does not exist
	 *
	 * @param  {string} index - The name of the option
	 * @return mixed
	*/
	getOption(index) {
		if(this.options.hasOwnProperty(index)) {
			return this.options[index];
		}
		return null;
	}

	/**
	 * Get all options
	 *
	 * @return	bool
	*/
	getOptions() {
		return this.options;
	}

	/**
	 * Set a single option value
	 *
	 * @param  {string} index - The name of the option
	 * @param  {string} value - The value of the option
	 * @return Object
	*/
	setOption(index, value) {
		if( this.hasOwnProperty(index) ||
			typeof this[index] === "function" ||
			index in this
		) {
			this[index] = value;
		}
		else {
			this.options[index] = value;
		}

		return this;
	}

	/**
	 * Set a multiple options by passing a JSON object
	 *
	 * @param  {object} - An object of options to set
	 * @return Object
	*/
	setOptions(options) {
		for(let key in options) {
  			if(typeof options[key] !== "undefined") {
	  			this.setOption(key, options[key]);
	  		}
	  	}

	  	return this;
	}

	/*
	 * Get the default options for the class
	 *
	 * @return Object
	*/
	defaultOptions() {
		return {};
	}

	/*
	 * Translate a string to the localized locale
	 *
	 * @param  {string} name - The name of the string to localize
	 * @return string
	*/
	localize(name) {
		if(this.translator) {
			return this.translator.localize(name);
		}

		return name;
	}

	/*
	 * Helper method for localize. t() is just short.
	 *
	 * @param  {string} name - The name of the string to localize
	 * @return string
	*/
	t(name) {
		return this.localize(name);
	}

	/*
	 * Helper method to create DOM nodes.
	 *
	 * @param  {string} name - The name of the string to localize
	 * @return string
	*/
	el(html) {
		const template = document.createElement('template');
	    template.innerHTML = (isArray(html) ? html.join('') : '').trim();
	    return this.$el = template.content.firstChild;
	}

};
