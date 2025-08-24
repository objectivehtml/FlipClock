import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { timer } from '../src/Timer';

describe('Timer', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('ticks at the given interval', () => {
        const startCallback = vi.fn();
        const stopCallback = vi.fn();
        const resetCallback = vi.fn();

        const instance = timer();

        expect(instance.elapsed).toBe(0);

        instance.lastLoop = 0;

        expect(instance.lastLoop).toBe(0);

        instance.start(startCallback);

        expect(instance.count).toBe(0);  
        expect(instance.started).not.toBeUndefined();
        expect(instance.lastLoop).not.toBe(0);

        vi.advanceTimersByTime(1000);

        expect(instance.elapsed).toBe(1000);
        expect(instance.elapsedSinceLastLoop).toBe(1000); 

        vi.advanceTimersToNextFrame();

        expect(instance.count).toBe(1); 

        vi.advanceTimersByTime(1000);

        expect(instance.elapsed).toBeGreaterThan(2000);
        expect(instance.elapsedSinceLastLoop).toBe(1000); 

        vi.advanceTimersToNextFrame();

        expect(instance.count).toBe(2);

        vi.advanceTimersByTime(1000);

        expect(instance.elapsed).toBeGreaterThan(3000);
        expect(instance.elapsedSinceLastLoop).toBe(1000); 

        vi.advanceTimersToNextFrame();

        expect(instance.count).toBe(3);
    
        instance.reset(resetCallback);

        vi.advanceTimersByTime(1000);
        vi.advanceTimersToNextFrame();

        expect(resetCallback).toBeCalledTimes(1);

        instance.stop(stopCallback);

        vi.advanceTimersByTime(1000);

        expect(stopCallback).toBeCalledTimes(1);

        // expect(instance.elapsed).toBeGreaterThan(3000);
        expect(instance.elapsedSinceLastLoop).toBe(0); 

        vi.advanceTimersToNextFrame();

        expect(instance.count).toBe(1);

    });
});