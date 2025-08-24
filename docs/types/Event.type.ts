type Event<T, K extends keyof T> = {
    key: keyof T;
    fn: EventEmitterCallback<T, K>;
    unwatch: () => void;
};