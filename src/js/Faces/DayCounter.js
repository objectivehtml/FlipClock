import HourCounter from './HourCounter';

export default class DayCounter extends HourCounter {

    format(value) {
        const now = !this.timer.started ? new Date : value;
        const originalValue = this.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        const data = [
            [this.getDays(a, b)],
            [this.getHours(a, b)],
            [this.getMinutes(a, b)]
        ];

        if(this.showSeconds) {
            data.push([this.getSeconds(a, b)])
        }

        return data;
    }

    getDays(a, b) {
        return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24);
    }

    getHours(a, b) {
        return Math.abs(super.getHours(a, b) % 24);
    }

}
