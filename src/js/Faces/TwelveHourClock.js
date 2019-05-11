import TwentyFourHourClock from './TwentyFourHourClock';

/**
 * @classdesc This face shows the current time in twelve hour format, with AM
 *     and PM.
 * @extends Face
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
export default class TwelveHourClock extends TwentyFourHourClock {

    defaultAttributes() {
        return {
            showLabels: false,
            showSeconds: true,
            showMeridium: true
        };
    }

    format(instance, value) {
        if(!value) {
            value = new Date;
        }

        const hours = value.getHours();
		const groups = [
			hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
			value.getMinutes()
		];

        this.meridium = hours > 12 ? 'pm' : 'am';

		if(this.showSeconds) {
			groups.push(value.getSeconds());
		}

		return groups;
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'TwelveHourClock';
    }
}
