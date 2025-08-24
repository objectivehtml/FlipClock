/**
 * The event instance.
 * 
 * @public
 */
export type Event<T, K extends keyof T> = {
    key: keyof T,
    fn: EventEmitterCallback<T, K>,
    unwatch: () => void;
}

/**
 * The callback from the event emitter.
 * 
 * @public
 */
export type EventEmitterCallback<T, K extends keyof Required<T>> = (...args: Required<T>[K][]) => void

/**
 * An event emitter to facilitate emitter and listening for events.
 * 
 * @public
 */
export class EventEmitter<T> {
    /**
     * The registered events.
     * 
     * @protected
     */
    protected events: Event<T, any>[] = [];

    /**
     * Emit an event.
     * 
     * @public
    */
    public emit<K extends keyof Required<T>>(key: K, ...args: Required<T>[K] extends (...args: infer P) => void ? P : any[]) {
        for (const event of this.events) {
            if (event.key !== key) {
                continue;
            }

            event.fn(...args);
        }
    }

    /**
     * Listen for an event. This returns a function to unwatch the event.
     * 
     * @public
     */
    public on<K extends keyof Required<T>>(key: K, fn: EventEmitterCallback<T, K>): () => void {
        const unwatch = () => {
            const index = this.events.findIndex(event => {
                return event.key === key && event.fn === fn;
            });

            this.events.splice(index, 1);
        };

        this.events.push({ key, fn, unwatch });

        return unwatch;
    }

    /**
     * Listen for an event once.
     * 
     * @public
     */
    once<K extends keyof Required<T>>(key: K, fn: EventEmitterCallback<T, K>): () => void {
        const unwatch = this.on(key, (...args: T[K][]) => {
            fn(...args);
            unwatch();
        });

        return unwatch;
    }

    /**
     * Stop listening for all events using a, or with a key and a function.
     * 
     * @public
     */
    off<K extends keyof Required<T>>(key: K): void
    off<K extends keyof Required<T>>(key: K, fn: T[K]): void
    off<K extends keyof Required<T>>(key: K, fn?: T[K]): void {
        for (const event of this.events) {
            if (event.key === key && (!fn || fn === event.fn)) {
                event.unwatch();
            }
        }
    }

    /**
     * Reset the event bus and remove all watchers.
     * 
     * @public
     */
    reset(): void {
        this.events = [];
    }
}

export function eventEmitter<T>() {
    return new EventEmitter<T>();
}