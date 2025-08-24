interface FaceHooks<T extends Face<T>> {
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