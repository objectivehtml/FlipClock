import Face from '../Components/Face';

export default class TwentyFourHourClock extends Face {

    format(value) {
        const groups = [
            [value.getHours()],
            [value.getMinutes()]
        ];

        if(this.showSeconds) {
            groups.push([value.getSeconds()]);
        }

        return groups;
    }

    increment(value) {
        this.value = this.createDate(value);
    }

    decrement(value) {
        this.value = this.createDate(-value);
    }

    createDate(modifier = 0) {
        return new Date(new Date().getTime() + modifier);
    }

    rendered(el, instance) {
        instance.createDivider().mount(el, el.childNodes[1]);

        this.showSeconds && instance.createDivider().mount(el, el.childNodes[3]);

        if(this.showLabels) {
            instance.createLabel('hours').mount(el.childNodes[0]);
            instance.createLabel('minutes').mount(el.childNodes[2]);

            this.showSeconds && instance.createLabel('seconds').mount(el.childNodes[4]);
        }
    }

    defaultAttributes() {
        return {
            showSeconds: true,
            showLabels: false
        };
    }

}
