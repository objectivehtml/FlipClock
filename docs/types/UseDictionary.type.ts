type UseDictionary<T, K = string> = UseDefinitionMap<T | Translator<T>> & {
    /**
     * Translate a key. If no key is found, use the fallback.
     */
    translate(key: K): T;
    translate(key: K, fallback: T): T;
    translate(key: K, fallback?: T): T;
};