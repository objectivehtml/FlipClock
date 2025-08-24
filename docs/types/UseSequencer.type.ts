type UseSequencer = {
    /**
     * The charset used by the sequencer.
     */
    charset: string[];
    /**
     * Decrement the current value towards the target value.
     */
    decrement: (current: FaceValue<any>, target: FaceValue<any>, count?: number, backwards?: boolean) => FaceValue<any>;
    /**
     * Increment the current value towards the target value.
     */
    increment: (current: FaceValue<any>, target: FaceValue<any>, count?: number, backwards?: boolean) => FaceValue<any>;
};