import Face from '../Components/Face';

export default class Counter extends Face {

    increment(value) {
        this.value = this.value.value + (value || 1);
    }

    decrement(value) {
        this.value = this.value.value - (value || 1);
    }

}
