import { type FaceValue } from './FaceValue';
import { type FlipClock } from './FlipClock';

/**
 * The hooks that are fired during the lifecycle. Hooks are triggered in the
 * order they are defined. Hooks may be implemented on a `Face`, `Theme`, or
 * as an event.
 * 
 * @public
 */
export interface FaceHooks<T extends Face<T>> {
    /**
     * The `afterCreate` hook.
     * 
     * @public
     */
    afterCreate?(instance: FlipClock<T>): void;

    /**
     * The `beforeMount` hook.
     * 
     * @public
     */
    beforeMount?(instance: FlipClock<T>): void;

    /**
     * The `afterMount` hook.
     * 
     * @public
     */
    afterMount?(instance: FlipClock<T>): void;

    /**
     * The `beforeUnmount` hook.
     * 
     * @public
     */
    beforeUnmount?(instance: FlipClock<T>): void;

    /**
     * The `afterUnmount` hook.
     * 
     * @public
     */
    afterUnmount?(instance: FlipClock<T>): void;

    /**
     * The `beforeInterval` hook.
     * 
     * @public
     */
    beforeInterval?(instance: FlipClock<T>): void;

    /**
     * The `afterInterval` hook.
     * 
     * @public
     */
    afterInterval?(instance: FlipClock<T>): void;

    /**
     * The `beforeStart` hook.
     * 
     * @public
     */
    beforeStart?(instance: FlipClock<T>): void;

    /**
     * The `afterStart` hook.
     * 
     * @public
     */
    afterStart?(instance: FlipClock<T>): void;

    /**
     * The `beforeStop` hook.
     * 
     * @public
     */
    beforeStop?(instance: FlipClock<T>): void;

    /**
     * The `afterStop` hook.
     * 
     * @public
     */
    afterStop?(instance: FlipClock<T>): void;
}

/**
 * All faces must implement this interface.
 * 
 * @public
 */
export declare interface Face<T extends Face<T> = any> extends FaceHooks<T> {

    /**
     * The face's value to display. When this value changes, or a new
     * `FaceValue` instance has been returned, the clock will automatically
     * re-render.
     * 
     * @public
     */
    faceValue(): FaceValue<any>

    /**
     * This method is called with every timer interval. Use this to increment,
     * decrement or value change the `faceValue()`.
     * 
     * @public
     */
    interval(instance: FlipClock<T>): void;

}