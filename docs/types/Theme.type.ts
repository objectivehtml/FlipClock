type Theme<T extends Face<T>> = {
    render: (el: Element, instance: FlipClock<T>) => [Element, DisposeFunction];
} & FaceHooks<T>;