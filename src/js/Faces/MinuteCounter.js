import Face from '../Components/Face';
import { noop, round, isNull, isUndefined, isNumber, callback } from '../Helpers/Functions';

/**
 * @classdesc This face is meant to display a clock that shows minutes, and
 *     seconds.
 * @extends Face
 * @param {(FaceValue|object)} value - The `Face` value. If not an instance
 *     of FaceValue, this argument is assumed to be the instance attributes.
 * @param {(object|undefined)} [attributes] - The instance attributes.
 * @memberof Faces
 */
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

    increment(instance, value = 0) {
        instance.value = new Date(this.value.value.getTime() + value + (new Date().getTime() - instance.timer.lastLoop));
    }

    decrement(instance, value = 0) {
        instance.value = new Date(this.value.value.getTime() - value - (new Date().getTime() - instance.timer.lastLoop));
    }

    format(instance, value) {
        const started = instance.timer.isRunning ? instance.timer.started : new Date(Date.now() - 50);

        return [
            [this.getMinutes(value, started)],
            this.showSeconds ? [this.getSeconds(value, started)] : null
        ].filter(noop);
    }

    getMinutes(a, b) {
        return round(this.getTotalSeconds(a, b) / 60);
    }

    getSeconds(a, b) {
        const totalSeconds = this.getTotalSeconds(a, b);

        return Math.abs(Math.ceil(totalSeconds === 60 ? 0 : totalSeconds % 60));
    }

    getTotalSeconds(a, b) {
        return a.getTime() === b.getTime() ? 0 : Math.round((a.getTime() - b.getTime()) / 1000);
    }

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'MinuteCounter';
    }
}
