type AlphanumericProps = {
    /**
     * The starting value of the clock.
     */
    value: FaceValue<string> | FaceValue<DigitizedValues>;
    /**
     * The target value of the clock.
     */
    targetValue?: FaceValue<string> | FaceValue<DigitizedValues>;
    /**
     * Determines if the clock increments or decrements towards the target.
     */
    method?: 'increment' | 'decrement';
    /**
     * Determines if the sequencer works forwards or backwards.
     */
    direction?: 'auto' | 'forwards' | 'backwards';
    /**
     * The sequencer instance or options used for the sequencer.
     */
    sequencer?: UseSequencer | SequencerOptions;
    /**
     * Determines how many characters to skip with each interval.
     */
    skipChars?: number;
};