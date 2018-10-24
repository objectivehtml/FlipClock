import TwentyFourHourClock from './TwentyFourHourClock';

export default class TwelveHourClock extends TwentyFourHourClock {

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

    rendered(el, instance) {
        super.rendered(el, instance);

        if(this.showMeridium) {
            instance.createLabel(this.meridium)
                .mount(el.childNodes[el.childNodes.length - 1])
                .classList
                .add('flip-clock-meridium');
        }
    }

    defaultAttributes() {
        return {
            showLabels: false,
            showSeconds: true,
            showMeridium: true
        };
    }

}
