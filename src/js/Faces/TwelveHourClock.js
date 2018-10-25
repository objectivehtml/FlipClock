import TwentyFourHourClock from './TwentyFourHourClock';

export default class TwelveHourClock extends TwentyFourHourClock {

    defaultDataType() {
        return Date;
    }

    defaultAttributes() {
        return {
            showLabels: false,
            showSeconds: true,
            showMeridium: true
        };
    }

    format(value) {
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

}
