export type UseDefinitionMap<T> = {
    /**
     * A map of key/value pairs.
     */
    map: Map<string, T>;

    /**
     * Define a new definition.
     */
    define(key: string, value: T): void;
    define(key: [string, T][]): void;
    define(key: Record<string, T>): void;
    define(key: string | [string, T][] | Record<string, T>, value?: T): void;

    /**
     * Removes a definition.
     */
    unset(keys: string): void;
    unset(keys: string[]): void;
    unset(keys: string | string[]): void;
}

type InferType<T> = T extends [string, infer V][] ? V : never;

export function useDefinitionMap<T extends [string, unknown][]>(items: T): UseDefinitionMap<InferType<T>>;
export function useDefinitionMap<T>(items: Record<string,T>): UseDefinitionMap<T>;
export function useDefinitionMap<T>(items: [string, T][] | Record<string,T>): UseDefinitionMap<T> {
    const map = new Map(Array.isArray(items) ? items : Object.entries(items));

    function define(key: string, value: T): void;
    function define(key: [string, T][]): void;
    function define(key: Record<string, T>): void;
    function define(key: string | [string, T][] | Record<string, T>, value?: T): void {
        if (typeof key === 'string' && value !== undefined) {
            map.set(key, value);
        }
        else if (Array.isArray(key)) {
            for (const [entryKey, entryValue] of key) {
                map.set(entryKey, entryValue);
            }
        }
        else if (typeof key === 'object') {
            for (const [entryKey, entryValue] of Object.entries(key)) {
                map.set(entryKey, entryValue);
            }
        }
    }

    function unset(keys: string | string[]): void {
        if (Array.isArray(keys)) {
            for (const key of keys) {
                map.delete(key);
            }
        }
        else {
            map.delete(keys);
        }
    }

    return {
        map, define, unset
    };
}

/**
 * The translator function.
 */
export type Translator<T, K = string> = (value: K) => T;

/**
 * The return type for `useDictionary()`.
 * 
 * @public
 */
export type UseDictionary<T, K = string> = UseDefinitionMap<T | Translator<T>> & {
    /**
     * Translate a key. If no key is found, use the fallback.
     */
    translate(key: K): T;
    translate(key: K, fallback: T): T;
    translate(key: K, fallback?: T): T;
}

/**
 * Use the provided terms to create a reusable translation dictionary.
 * 
 * @public
 */
export function useDictionary<T>(terms: [string, T | Translator<T>][]): UseDictionary<T>;
export function useDictionary<T>(terms: Record<string, T | Translator<T>>): UseDictionary<T>;
export function useDictionary<T>(terms: [string, T | Translator<T>][] | Record<string, T | Translator<T>>): UseDictionary<T> {
    const { map, define, unset } = useDefinitionMap(
        Array.isArray(terms) ? terms : Object.entries(terms)
    );

    function translate(key: string): T;
    function translate(key: string, fallback: T): T;
    function translate(key: string, fallback?: T): T {
        const term = map.get(key);

        if (typeof term === 'function') {
            return (term as Translator<T>)(key);
        }

        if (term !== undefined) {
            return term as T;
        }

        if (fallback !== undefined) {
            return fallback;
        }
        
        return key as unknown as T;
    }

    return {
        map,
        define,
        translate,
        unset,
    };
}