import { expect, it, vi } from 'vitest';
import { eventEmitter } from '../src/EventEmitter';

it('binds and unbinds events to an emitter', () => {
    const emitter = eventEmitter<{
        foo: () => void
        bar: () => void
    }>();

    const foo = vi.fn();
    const bar = vi.fn();

    emitter.on('foo', foo);
    emitter.on('bar', bar);
    emitter.once('foo', foo);

    const unwatch = emitter.on('foo', foo);

    emitter.emit('foo');
    
    expect(foo).toBeCalledTimes(2);

    unwatch();

    emitter.emit('foo');

    expect(foo).toBeCalledTimes(3);

    emitter.off('foo', foo);
    emitter.emit('foo');
    
    expect(foo).toBeCalledTimes(3);

    emitter.on('bar', bar);
    emitter.emit('bar');

    expect(bar).toBeCalledTimes(2);
    
    emitter.reset();
    
    emitter.emit('bar');

    expect(bar).toBeCalledTimes(2);
});