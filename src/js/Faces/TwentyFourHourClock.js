import Face from '../Components/Face';
import { callback } from '../Helpers/Functions';

export default class TwentyFourHourClock extends Face {

    defaultDataType() {
        return Date;
    }

    defaultValue() {
        return new Date;
    }

    defaultAttributes() {
        return {
            showSeconds: true,
            showLabels: false
        };
    }

    format(instance, value) {
        if(!value) {
            value = new Date;
        }
        
        const groups = [
            [value.getHours()],
            [value.getMinutes()]
        ];

        if(this.showSeconds) {
            groups.push([value.getSeconds()]);
        }

        return groups;
    }

    increment(instance, offset = 0) {
        instance.value = new Date(this.value.value.getTime() + offset + (new Date().getTime() - instance.timer.lastLoop));
    }

    decrement(instance, offset = 0) {
        instance.value = new Date(this.value.value.getTime() - offset - (new Date().getTime() - instance.timer.lastLoop));
    }

}
