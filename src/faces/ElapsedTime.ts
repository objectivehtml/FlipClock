import { differenceInMilliseconds } from 'date-fns';
import { createRoot } from 'solid-js';
import { type Face } from '../Face';
import { faceValue, type FaceValue } from '../FaceValue';
import { FlipClock } from '../FlipClock';
import { useDurationFormats, type UseDurationFormats } from '../helpers/duration';

/**
 * The `ElapsedTime` face options.
 * 
 * @public
 */
export type ElapsedTimeProps = {
    /**
     * The date from which the elapsed time is calculated.
     */
    from?: Date;

    /**
     * The date to which the elapsed time is calculated.
     */
    to?: Date;
    
    /**
     * A format string for how the duration is displayed.
     */
    format?: string;

    /**
     * A formatter to display the duration in the given format. 
     */
    formatter?: UseDurationFormats;
}

/**
 * This face will show the amount of time elapsed since the given value and
 * display it a specific format. For example 'hh:mm:ss' will show the elapsed
 * time in hours, minutes, seconds.
 * 
 * @public
 */
export class ElapsedTime implements Face {
    
    /**
     * The date used to calculate the current.
     * 
     * @protected
     */
    protected start: Date;

    /**
     * The date used to calculate the current.
     * 
     * @protected
     */
    protected current: Date;
    
    /**
     * The "from" date used to calculate the elsapsed time.
     * 
     * @public
     */
    public from?: Date;

    /**
     * The "to" date used to calculate the elsapsed time.
     * 
     * @public
     */
    public to?: Date;

    /**
     * The format string.
     * 
     * @public
     */
    public format: string = '[mm]:[ss]';

    /**
     * The duration formatter.
     * 
     * @public
     */
    public formatter: UseDurationFormats;

    /**
     * The current face value.
     * 
     * @public
     */
    public value: FaceValue<string>;

    /**
     * Construct the clock face.
     * 
     * @public
     */
    constructor(props?: ElapsedTimeProps) {
        this.from = props?.from;
        this.to = props?.to;
        this.start = new Date;
        this.current = new Date(this.start);
        
        if (props?.format) {
            this.format = props.format;
        }
    
        if (!props?.formatter) {
            this.formatter = useDurationFormats();
        }
        else {
            this.formatter = props.formatter;
        }

        this.value = createRoot(() => faceValue(this.formattedString));
    }

    /**
     * Get the elapsed time as a formatted string.
     * 
     * @public
     */
    public get formattedString() {
        if (this.from) {
            return this.formatter.format(
                this.from, this.current, this.format
            );
        }

        if (this.to) {
            return this.formatter.format(
                this.to, this.current, this.format
            );
        }

        return this.formatter.format(
            this.start, this.current, this.format
        );
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
     * Format the value with the new elapsed time.
     * 
     * @public
     */
    public interval(instance: FlipClock<ElapsedTime>): void {
        if (this.shouldStop()) {
            instance.stop();
        }
        else {
            this.current.setTime(instance.timer.lastLoop);

            this.value.value = this.formattedString;
        }
    }

    /**
     * Set the dates before the clock starts.
     * 
     * @public
     */
    public beforeStart(): void {
        this.start = new Date;
        this.current = new Date(this.start);
    }
    
    /**
     * Determines if the clock should be stopped.
     * 
     * @public
     */
    public shouldStop(): boolean {
        if (this.from && this.from > this.start) {
            return differenceInMilliseconds(this.from, this.current) <= 0;
        }

        if (this.to) {
            return differenceInMilliseconds(this.to, this.current) <= 0;
        }

        return false;
    }
}

/**
 * Create a new `ElapsedTime` instance.
 * 
 * @public
 */
export function elapsedTime(props?: ElapsedTimeProps) {
    return new ElapsedTime(props);
}