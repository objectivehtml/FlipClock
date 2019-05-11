import Face from '../Components/Face';

/**
 * @classdesc This face is designed to increment and decrement numberic values,
 *     not `Date` objects.
 * @extends Face
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
export default class Counter extends Face {

    increment(instance, value = 1) {
        instance.value = this.value.value + value;
    }

    decrement(instance, value = 1) {
        instance.value = this.value.value - value;
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'Counter';
    }
}
