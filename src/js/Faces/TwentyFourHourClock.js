import Face from '../Components/Face';
import { callback } from '../Helpers/Functions';

/**
 * @classdesc This face shows the current time in twenty-four hour format.
 * @extends Face
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
export default class TwentyFourHourClock extends Face {

    defaultDataType() {
        return Date;
    }

    defaultValue() {
        return new Date;
    }

    defaultAttributes() {
        return {
            showSeconds: true,
            showLabels: false
        };
    }

    format(instance, value) {
        if(!value) {
            value = new Date;
        }

        const groups = [
            [value.getHours()],
            [value.getMinutes()]
        ];

        if(this.showSeconds) {
            groups.push([value.getSeconds()]);
        }

        return groups;
    }

    increment(instance, offset = 0) {
        instance.value = new Date(this.value.value.getTime() + offset + (new Date().getTime() - instance.timer.lastLoop));
    }

    decrement(instance, offset = 0) {
        instance.value = new Date(this.value.value.getTime() - offset - (new Date().getTime() - instance.timer.lastLoop));
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'TwentyFourHourClock';
    }
}
