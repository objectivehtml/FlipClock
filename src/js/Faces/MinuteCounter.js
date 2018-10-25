import Face from '../Components/Face';
import { callback } from '../Helpers/Functions';

export default class MinuteCounter extends Face {

    defaultDataType() {
        return Date;
    }

    defaultAttributes() {
        return {
            showSeconds: true,
            showLabels: true
        };
    }

    initialized(instance) {
        this.originalValue = instance.originalValue;
    }

    interval(instance, fn) {
        this.value = new Date;

        callback.call(this, fn);

        return this.emit('interval');
    }

    format(value) {
        const now = !this.timer.started ? new Date : value;
        const originalValue = this.originalValue || value;
        const a = !this.countdown ? now : originalValue;
        const b = !this.countdown ? originalValue : now;

        return [
            [this.getMinutes(a, b)],
            [this.getSeconds(a, b)]
        ];
    }

    getMinutes(a, b) {
        return Math.floor(this.getTotalSeconds(a, b) / 60);
    }

    getSeconds(a, b) {
        const totalSeconds = this.getTotalSeconds(a, b);

        return Math.abs(Math.ceil(totalSeconds === 60 ? 0 : totalSeconds % 60));
    }

    getTotalSeconds(a, b) {
        return Math.round((a.getTime() - b.getTime()) / 1000);
    }

}
