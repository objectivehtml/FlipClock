import Face from '../Components/Face';
import { noop, isNull, isUndefined, isNumber, callback } from '../Helpers/Functions';

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

    shouldStop(instance) {
        if(isNull(instance.stopAt) || isUndefined(instance.stopAt)) {
            return false;
        }

        if(this.stopAt instanceof Date) {
            return this.countdown ?
                this.stopAt.getTime() >= this.value.value.getTime():
                this.stopAt.getTime() <= this.value.value.getTime();
        }
        else if(isNumber(this.stopAt)) {
            const diff = Math.floor((this.value.value.getTime() - this.originalValue.getTime()) / 1000);

            return this.countdown ?
                this.stopAt >= diff:
                this.stopAt <= diff;
        }

        throw new Error(`the stopAt property must be an instance of Date or Number.`);
    }

    increment(instance, value) {
        instance.value = new Date(this.value.value.getTime() + (new Date().getTime() - instance.timer.lastLoop));
    }

    decrement(instance, value) {
        instance.value = new Date(this.value.value.getTime() - (new Date().getTime() - instance.timer.lastLoop));
    }

    format(instance, value) {
        const originalValue = instance.timer.isRunning ? this.originalValue : instance.originalValue;

        return [
            [this.getMinutes(value, originalValue)],
            this.showSeconds ? [this.getSeconds(value, originalValue)] : null
        ].filter(noop);
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
