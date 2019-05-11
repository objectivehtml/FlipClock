import HourCounter from './HourCounter';

/**
 * @classdesc This face is meant to display a clock that shows days, hours,
 *     minutes, and seconds.
 * @extends HourCounter
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
export default class DayCounter extends HourCounter {

    format(instance, value) {
        const now = !instance.started ? new Date : value;
        const originalValue = instance.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        const data = [
            [this.getDays(a, b)],
            [this.getHours(a, b)],
            [this.getMinutes(a, b)]
        ];

        if(this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
        }

        return data;
    }

    getDays(a, b) {
        return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24);
    }

    getHours(a, b) {
        return Math.abs(super.getHours(a, b) % 24);
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'DayCounter';
    }
}
