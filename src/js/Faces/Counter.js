import Face from '../Components/Face';

export default class Counter extends Face {

    increment(instance) {
        this.value = this.value.value + 1;
    }

    decrement(instance) {
        this.value = this.value.value - 1;
    }

}
