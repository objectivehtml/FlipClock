class FaceValue<T extends Exclude<unknown, Function>> {
    /**
     * Parameters that are passed to the digiter.
     *
     * @public
     */
    readonly digitizer: UseDigitizer;
    /**
     * The face's value.
     *
     * @protected
     */
    protected $value: Signal<T>;
    /**
     * The face's digits.
     *
     * @protected
     */
    protected $digits: Signal<DigitizedValues>;
    /**
     * Instantiate the face value.
     *
     * @public
     */
    constructor(value: T, props?: FaceValueProps);
    /**
     * The digitized value.
     *
     * @public
     */
    get digits(): DigitizedValues;
    /**
     * Set the digits from a `DigitizedValues`.
     *
     * @public
     */
    set digits(value: DigitizedValues);
    /**
     * Get the length of the flattened digitized array.
     *
     * @public
     */
    get length(): number;
    /**
     * Get the value.
     *
     * @public
     */
    get value(): T;
    /**
     * Set the value.
     *
     * @public
     */
    set value(value: Exclude<T, Function>);
    /**
     * Compare the face value with the given subject.
     *
     * @public
     */
    compare(subject?: FaceValue<any>): boolean;
    /**
     * Create a new instance with the given value.
     *
     * @public
     */
    copy(): FaceValue<T>;
}