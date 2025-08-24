type FlipClockThemeOptions<T extends CssDeclaration = CssDeclaration> = {
    /**
     * The CSS declarations used for the theme.
     */
    css?: T | T[];
    /**
     * The characters that should be rendered as dividers.
     */
    dividers?: RegExp | string | string[];
    /**
     * The labels that appear above the groups.
     */
    labels?: FlipClockThemeLabels;
};