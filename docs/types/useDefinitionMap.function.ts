function useDefinitionMap<T extends [string, unknown][]>(items: T): UseDefinitionMap<InferType<T>>;
function useDefinitionMap<T>(items: Record<string, T>): UseDefinitionMap<T>;