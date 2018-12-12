import Face from '../Components/Face';

/**
 * @class Counter
 * @classdesc This face is designed to increment and decrement numberic values,
 *     not `Date` objects.
 * @extends Components.Face
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

}
