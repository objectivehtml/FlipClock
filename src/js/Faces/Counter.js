import Face from '../Components/Face';

export default class Counter extends Face {

    increment(instance) {
        instance.value = this.value.value + 1;
    }

    decrement(instance) {
        instance.value = this.value.value - 1;
    }

}
