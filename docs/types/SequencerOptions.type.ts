type SequencerOptions = {
    /**
     * The charset instance or options used to generate a charset.
     */
    charset?: UseCharset | UseCharsetOptions;
    /**
     * The options passed the function that ensure the array structures are the same.
     */
    matchArray?: MatchArrayStructureOptions;
    /**
     * A call that determines when the sequencer should stop.
     */
    stopWhen?: StopPredicateFunction<[current?: DigitizedValue, target?: DigitizedValue | DigitizedValues]>;
    /**
     * A number of changes that stops the sequencer.
     */
    stopAfterChanges?: number;
};