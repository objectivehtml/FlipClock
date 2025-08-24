interface Face<T extends Face<T> = any> extends FaceHooks<T> {
    /**
     * The face's value to display. When this value changes, or a new
     * `FaceValue` instance has been returned, the clock will automatically
     * re-render.
     *
     * @public
     */
    faceValue(): FaceValue<any>;
    /**
     * This method is called with every timer interval. Use this to increment,
     * decrement or value change the `faceValue()`.
     *
     * @public
     */
    interval(instance: FlipClock<T>): void;
}