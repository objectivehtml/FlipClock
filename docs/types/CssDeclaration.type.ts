type CssDeclaration<T extends CSSProperties = CSSProperties> = {
    css: T;
    toString(): string;
};