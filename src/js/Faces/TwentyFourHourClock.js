import Face from '../Components/Face';
import { callback } from '../Helpers/Functions';

export default class TwentyFourHourClock extends Face {

    /*
    defaultDataType() {
        return Date;
    }
    */

    defaultValue() {
        return new Date;
    }

    defaultAttributes() {
        return {
            showSeconds: true,
            showLabels: false
        };
    }

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

    interval(instance, fn) {
        this.value = new Date;

        callback.call(this, fn);

        return this.emit('interval');
    }

}
