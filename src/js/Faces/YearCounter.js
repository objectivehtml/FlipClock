import WeekCounter from './WeekCounter';

/**
 * @classdesc This face is meant to display a clock that shows years, weeks,
 *     days, hours, minutes, and seconds.
 * @extends Face
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
export default class YearCounter extends WeekCounter {

    format(instance, value) {
        const now = !instance.timer.started ? new Date : value;
        const originalValue = instance.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        const data = [
            [this.getYears(a, b)],
            [this.getWeeks(a, b)],
            [this.getDays(a, b)],
            [this.getHours(a, b)],
            [this.getMinutes(a, b)]
        ];

        if(this.showSeconds) {
            data.push([this.getSeconds(a, b)]);
        }

        return data;
    }

    getYears(a, b) {
        return Math.floor(Math.max(0, this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7 / 52));
    }

    getWeeks(a, b) {
        return Math.abs(super.getWeeks(a, b) % 52);
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'YearCounter';
    }
}
