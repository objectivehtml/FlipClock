import MinuteCounter from './MinuteCounter';

/**
 * @classdesc This face is meant to display a clock that shows
 *     hours, minutes, and seconds.
 * @extends Face
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
export default class HourCounter extends MinuteCounter {

    format(instance, value) {
        const now = !instance.timer.started ? new Date : value;
        const originalValue = instance.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        const data = [
            [this.getHours(a, b)],
            [this.getMinutes(a, b)]
        ];

        if(this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
        }

        return data;
    }

    getMinutes(a, b) {
        return Math.abs(super.getMinutes(a, b) % 60);
    }

    getHours(a, b) {
        return Math.floor(this.getTotalSeconds(a, b) / 60 / 60);
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'HourCounter';
    }
}
