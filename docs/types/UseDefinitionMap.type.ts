type UseDefinitionMap<T> = {
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
};