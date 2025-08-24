function useDictionary<T>(terms: [string, T | Translator<T>][]): UseDictionary<T>;
function useDictionary<T>(terms: Record<string, T | Translator<T>>): UseDictionary<T>;