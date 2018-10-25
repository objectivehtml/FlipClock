import WeekCounter from './WeekCounter';

export default class YearCounter extends WeekCounter {

    format(value) {
        const now = !this.timer.started ? new Date : value;
        const originalValue = this.originalValue || value;
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
            data.push([this.getSeconds(a, b)])
        }

        return data;
    }

    getYears(a, b) {
        return Math.floor(Math.max(0, this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7 / 52));
    }

    getWeeks(a, b) {
        return Math.abs(super.getWeeks(a, b) % 52);
    }

}
