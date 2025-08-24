type UseCss<T extends readonly unknown[] = unknown[], V extends CSSProperties = CSSProperties> = {
    /**
     * Get the CSS declaration.
     */
    (...args: T): CssDeclaration<V>;
    /**
     * Merge the given CSS into the current definition.
     */
    merge: <TExtension extends CSSProperties>(fn: UseCssDeclaration<T, TExtension>) => UseCss<T, MergedCssDeclaration<V, TExtension>>;
    /**
     * Extend the current definition with the given CSS.
     */
    extend: <TExtension extends CSSProperties>(fn: UseCssDeclaration<T, TExtension>) => UseCss<T, MergedCssDeclaration<V, TExtension>>;
};