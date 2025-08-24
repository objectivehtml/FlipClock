import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "..";
import { counter } from "../../src/faces";
import { flipClock } from "../../src/FlipClock";
import { theme } from "../../src/themes/flipclock";

describe('Counter', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('increments and decrements', () => {
        const el = document.createElement('div');

        const instance = flipClock({
            parent: el,
            autoStart: false,
            face: counter(),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('0');

        instance.face.increment();

        expect(instance.face.faceValue().value).toBe('1');

        instance.face.increment(2);

        expect(instance.face.faceValue().value).toBe('3');

        instance.face.decrement(2);
    
        expect(instance.face.faceValue().value).toBe('1');

        instance.face.decrement();
    
        expect(instance.face.faceValue().value).toBe('0');
    });

    it('counts up by 2 and stops at 10', () => {
        const el = document.createElement('div');

        const instance = flipClock({
            parent: el,
            autoStart: true,
            face: counter({
                value: 0,
                targetValue: 10,
                step: 2
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('0');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('2');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('4');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('6');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('8');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('10');

        nextTick(instance);

        expect(instance.timer.isStopped).toBeTruthy();
        expect(instance.face.faceValue().value).toBe('10');
    });

    it('counts down by 2 and stops at 0', () => {
        const el = document.createElement('div');

        const instance = flipClock({
            parent: el,
            autoStart: true,
            face: counter({
                value: 10,
                targetValue: 0,
                step: 2,
                countdown: true,
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('10');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('8');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('6');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('4');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('2');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('0');

        nextTick(instance);

        expect(instance.timer.isStopped).toBeTruthy();
        expect(instance.face.faceValue().value).toBe('0');
    });

    it('formats the counter using a callback', () => {
        const el = document.createElement('div');

        const formatter = new Intl.NumberFormat('en-US', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 2
        });

        const instance = flipClock({
            autoStart: true,
            parent: el,
            face: counter({
                format: value => formatter.format(value)
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('00.00');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('01.00');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('02.00');
    });

    it('formats the counter using Intl.NumberFormat', () => {
        const el = document.createElement('div');

        const instance = flipClock({
            autoStart: true,
            parent: el,
            face: counter({
                formatter: Intl.NumberFormat('en-US', {
                    minimumIntegerDigits: 2,
                    minimumFractionDigits: 2
                })
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('00.00');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('01.00');
    });
});