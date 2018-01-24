import ListItem from './ListItem';
import Component from './Component';

export default class List extends Component {

    /**
     * Constructor
     *
     * @param  mixed   An string or integer use to select the correct value
     * @param  object  An object to override the default properties
    */
    initialize() {
        this.createList();
    }

    /**
     * Set the default properties for the class
     *
     * @param  mixed  A single digit value used for the label
    */
	properties(value, options) {
		this.$el = false;
        this.items = [];
		this.value = value || false;
	}

    /*
     * Get the default options for the class
     *
     * @return object
    */
    defaultOptions() {
        return {
            // The CSS classes
            classes: {
                flip: 'flip',
                play: 'play',
                active: 'flipclock-active',
                before: 'flipclock-before'
            },

            // The last value selected in the list
            lastValue: 0
        };
    }

    /**
     * Select the value in the list
     *
     * @param  int  value
     * @return object
    */
    select(value) {
        const _afterListItem = this._afterListItem;

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

        return this;
    }

    /*
     * Add the play class to the list
     *
     * @return object
    */
    addPlayClass() {
        this.$el.addClass(this.getOption('classes').play);

        return this;
    }

    /*
     * Remove the play class to the list
     *
     * @return object
    */
    removePlayClass() {
        this.$el.removeClass(this.getOption('classes').play);

        return this;
    }

    /**
     * Creates the list item HTML and returns as a string
     *
     * @param  mixed  value
     * @param  string  css
     * @return object
    */
    createListItem(value, className) {
        const item = new ListItem(value, {
            className: className
        });

        this.items.push(item);
        this.$el.append(item.$el);
        this.trigger('create:item', item);

        return item;
    }

    /**
     * Create the list of values and appends it to the DOM object
     *
     * @return object
    */
    createList() {
        this.el('<ul class="'+this.getOption('classes').flip+'"></ul>');

        this._beforeListItem = this.createListItem(this.getPrevValue(), this.getOption('classes').before);
        this._afterListItem = this.createListItem(this.value, this.getOption('classes').active);

        this.$el.append(this._beforeListItem.el);
        this.$el.append(this._afterListItem.el);

        this.emit('create:list', this.$el);

        return this.$el;
    }
}
