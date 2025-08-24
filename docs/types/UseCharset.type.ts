type UseCharset = {
    /**
     * The charset that was given.
     */
    charset: string[];
    /**
     * The empty character from the charset.
     */
    emptyChar: string;
    /**
     * Determines if the given value is blacklisted.
     */
    isBlacklisted: (value: DigitizedValue) => boolean;
    /**
     * Determines if the given value is whitelisted.
     */
    isWhitelisted: (value: DigitizedValue) => boolean;
    /**
     * Get a chunk of the charset for the given count.
     */
    chunk: (value: DigitizedValue | undefined, count: number) => string[];
    /**
     * Gets the next characters in the charset for the given count.
     */
    next: (value?: DigitizedValue, target?: DigitizedValue | DigitizedValues, count?: number) => DigitizedValue | undefined;
    /**
     * Gets the previous characters in the charset for the given count.
     */
    prev: (value?: DigitizedValue, target?: DigitizedValue | DigitizedValues, count?: number) => DigitizedValue | undefined;
};