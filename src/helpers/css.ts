import type { Properties } from "csstype";
import { css } from "goober";

/**
 * A CSS-in-JS style object.
 * 
 * @public
 */
export interface CSSProperties extends Properties {
    [key: string]: CSSProperties | string | number | undefined | null;
}

function isPlainObject(value: unknown): value is CSSProperties {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Merge the target object into the source.
 * 
 * @public
 */
export function mergeCss<TSource extends CSSProperties, TTarget extends CSSProperties>(
    source: TSource,
    target: TTarget
): TSource {
    for (const key in target) {
        if (!target.hasOwnProperty(key)) {
            continue;
        }
        
        const targetVal = target[key];
        const sourceVal = source[key];

        if (isPlainObject(sourceVal) && isPlainObject(targetVal)) {
            source[key] = mergeCss(sourceVal, targetVal) as TSource[typeof key];
        } else if (isPlainObject(targetVal)) {
            source[key] = mergeCss({}, targetVal) as TSource[typeof key];
        } else {
            source[key] = targetVal as unknown as TSource[typeof key];
        }
    }

    return source;
}

export type MergedCssDeclaration<T, U> = {
  [K in keyof T | keyof U]:
    K extends keyof U
      ? U[K]
      : K extends keyof T
      ? T[K]
      : never;
};

export type CssDeclaration<T extends CSSProperties = CSSProperties> = {
    css: T;
    toString(): string;
};

export type UseCssDeclaration<T extends readonly unknown[], V extends CSSProperties> = (...args: T) => V;

export type UseCss<T extends readonly unknown[] = unknown[], V extends CSSProperties = CSSProperties> = {
    /**
     * Get the CSS declaration.
     */
    (...args: T): CssDeclaration<V>;

    /**
     * Merge the given CSS into the current definition.
     */
    merge: <TExtension extends CSSProperties>(
        fn: UseCssDeclaration<T, TExtension>
    ) => UseCss<T, MergedCssDeclaration<V, TExtension>>;

    /**
     * Extend the current definition with the given CSS.
     */
    extend: <TExtension extends CSSProperties>(
        fn: UseCssDeclaration<T, TExtension>
    ) => UseCss<T, MergedCssDeclaration<V, TExtension>>;
}

export function useCss<T extends readonly unknown[], V extends CSSProperties>(
    fn: UseCssDeclaration<T, V>
): UseCss<T, V> {
    const merges: UseCssDeclaration<T, CSSProperties>[] = [];

    function apply(...args: T): CssDeclaration<V> {
        const cssObj = merges.reduce((carry, fn) => mergeCss(carry, fn(...args)), fn(...args));
        return {
            css: cssObj,
            toString() {
                return css(cssObj);
            }
        };
    }

    function merge<TExtension extends CSSProperties>(
        mergeFn: UseCssDeclaration<T, TExtension>
    ): UseCss<T, MergedCssDeclaration<V, TExtension>> {
        merges.push(mergeFn);
        return apply as UseCss<T, MergedCssDeclaration<V, TExtension>>;
    }

    function extend<TExtension extends CSSProperties>(
        extendFn: UseCssDeclaration<T, TExtension>
    ): UseCss<T, MergedCssDeclaration<V, TExtension>> {
        return useCss<T, MergedCssDeclaration<V, TExtension>>((...args) => {
            return mergeCss(apply(...args).css, extendFn(...args)) as MergedCssDeclaration<V, TExtension>;
        });
    }

    (apply as UseCss<T, V>).merge = merge;
    (apply as UseCss<T, V>).extend = extend;

    return apply as UseCss<T, V>;
}