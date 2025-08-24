type UseCharsetOptions = {
    /**
     * A function that returns an array of characters.
     */
    charset?: () => string[];
    /**
     * The empty character. Defaults to a space.
     */
    emptyChar?: string;
    /**
     * Provide a shuffle function `boolean` to enable/disable the default shuffle.
     */
    shuffle?: ((chars: string[]) => string[]) | boolean;
    /**
     * An array of characters to omit from the `charset`.
     */
    blacklist?: string[];
    /**
     * An array of characters to include in the `charset`.
     */
    whitelist?: string[];
};