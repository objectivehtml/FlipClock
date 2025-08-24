import { createRoot } from 'solid-js';
import { Face } from '../Face';
import { faceValue, type FaceValue } from '../FaceValue';
import { FlipClock } from '../FlipClock';
import { useDateFormats, type UseDateFormats, type UseDateFormatsOptions } from '../helpers/date';

/**
 * The `Clock` face options.
 * 
 * @public
 */
export type ClockProps = {
    /**
     * Specify a date used to start the display on the clock.
     */
    date?: Date;

    /**
     * A format string for how the date is displayed.
     */
    format?: string;

    /**
     * A formatter to display the date in the given format. 
     */
    formatter?: UseDateFormats | UseDateFormatsOptions;
}

/**
 * This face will show a clock in a given format. * 
 * 
 * @public
 */
export class Clock implements Face {

    /**
     * The starting date on the clock. If no date is set, the current time
     * will be used.
     * 
     * @public
     */
    public readonly date: Date;

    /**
     * The current formatted value.
     * 
     * @public
     */
    public readonly value: FaceValue<string>;

    /**
     * The format string.
     * 
     * @public
     */
    public format: string = '[hh]:[mm]:[ss][A]';

    /**
     * The duration formatter.
     * 
     * @public
     */
    public formatter: UseDateFormats;

    /**
     * Instantiate the clock face.
     * 
     * @public
     */
    constructor(props?: ClockProps) {
        this.date = props?.date ?? new Date();

        if (props?.format) {
            this.format = props.format;
        }

        if (props?.formatter === undefined) {
            this.formatter = useDateFormats();
        }
        else if ('format' in props.formatter) {
            this.formatter = props.formatter;
        }
        else {
            this.formatter = useDateFormats(props.formatter);
        }

        this.value = createRoot(() => {
            return faceValue(this.formatter.format(this.date, this.format));
        });
    }

    /**
     * The face's current value.
     * 
     * @public
     */
    public faceValue(): FaceValue<string> {
        return this.value;
    }

    /**
     * Format the face value to the current date/time.
     * 
     * @public
     */
    public interval(instance: FlipClock<Clock>): void {
        this.value.value = this.formatter.format(
            new Date(this.date.getTime() + instance.timer.elapsed), this.format
        );
    }
}

/**
 * Create a new `Clock` instance.
 * 
 * @public
 */
export function clock(props?: ClockProps) {
    return new Clock(props);
}
