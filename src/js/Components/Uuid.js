import Component from '../Components/Component';

export default class Uuid extends Component {

	/**
	 * Set the default properties for the class
	 *
	 * @param 	null|Object  An object of options
	*/
	properties(value) {
		this.value = value || this.generate();
        this.pattern = "[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}";
	}

	/*
	 * Generate a new Uuid
	 *
	 * @return string
	*/
	generate() {
        let d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
    }

	/*
	 * Does this uuid equal another uuid object
	 *
	 * @param  object
	 * @return bool
	*/
	equals(value) {
		return this.isUuid(value) && this === value;
	}

	/*
	 * Tests another value to see if it's a uuid
	 *
	 * @param  mixed
	 * @return bool
	*/
    isUuid(value) {
        return new RegExp(this.pattern, "i").test(value && value.toString ? value.toString() : value);
    }

	/*
	 * Outputs the object instance as a string
	 *
	 * @return string
	*/
	toString() {
		return this.value;
	}

};
