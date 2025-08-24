class EventEmitter<T> {
    /**
     * The registered events.
     *
     * @protected
     */
    protected events: Event<T, any>[];
    /**
     * Emit an event.
     *
     * @public
    */
    emit<K extends keyof Required<T>>(key: K, ...args: Required<T>[K] extends (...args: infer P) => void ? P : any[]): void;
    /**
     * Listen for an event. This returns a function to unwatch the event.
     *
     * @public
     */
    on<K extends keyof Required<T>>(key: K, fn: EventEmitterCallback<T, K>): () => void;
    /**
     * Listen for an event once.
     *
     * @public
     */
    once<K extends keyof Required<T>>(key: K, fn: EventEmitterCallback<T, K>): () => void;
    /**
     * Stop listening for all events using a, or with a key and a function.
     *
     * @public
     */
    off<K extends keyof Required<T>>(key: K): void;
    off<K extends keyof Required<T>>(key: K, fn: T[K]): void;
    /**
     * Reset the event bus and remove all watchers.
     *
     * @public
     */
    reset(): void;
}