type UseDateFormatsOptions = {
    /**
     * The digitizer instance.
     */
    digitizer?: UseDigitizer;
    /**
     * A translate function or Dictionary.
     */
    translate?: Translator<string> | UseDictionary<string>;
    /**
     * The date format flags.
     */
    formats?: Record<string, DateFlagFormatFunction>;
};