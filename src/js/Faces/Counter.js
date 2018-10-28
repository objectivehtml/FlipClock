import Face from '../Components/Face';

export default class Counter extends Face {

    increment(instance, value = 1) {
        instance.value = this.value.value + value;
    }

    decrement(instance, value = 1) {
        instance.value = this.value.value - value;
    }

}
