import DayCounter from './DayCounter';

export default class WeekCounter extends DayCounter {

    format(value) {
        const now = !this.timer.started ? new Date : value;
        const originalValue = this.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        const data = [
            [this.getWeeks(a, b)],
            [this.getDays(a, b)],
            [this.getHours(a, b)],
            [this.getMinutes(a, b)]
        ];

        if(this.showSeconds) {
            data.push([this.getSeconds(a, b)])
        }

        return data;
    }

    getWeeks(a, b) {
        return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7);
    }

    getDays(a, b) {
        return Math.abs(super.getDays(a, b) % 7);
    }

}
