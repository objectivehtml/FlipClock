import MinuteCounter from './MinuteCounter';

export default class HourCounter extends MinuteCounter {

    format(value) {
        const now = !this.timer.started ? new Date : value;
        const originalValue = this.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        const data = [
            [this.getHours(a, b)],
            [this.getMinutes(a, b)]
        ];

        if(this.showSeconds) {
            data.push([this.getSeconds(a, b)])
        }

        return data;
    }

    getMinutes(a, b) {
        return Math.abs(super.getMinutes(a, b) % 60);
    }

    getHours(a, b) {
        return Math.floor(this.getTotalSeconds(a, b) / 60 / 60);
    }

}
