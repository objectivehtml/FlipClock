import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "..";
import { alphanumeric } from "../../src/faces";
import { faceValue } from "../../src/FaceValue";
import { flipClock } from "../../src/FlipClock";
import { useSequencer } from "../../src/helpers/sequencer";
import { theme } from "../../src/themes/flipclock";

describe('Alphanumeric', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('creates an alphanumeric that ticks from a to z', () => {
        const instance = flipClock({
            autoStart: false,
            face: alphanumeric({
                value: faceValue('a'),
                targetValue: faceValue('z')
            }),
            theme: theme()
        });
        
        expect(instance.face.faceValue().value).toStrictEqual(['a']);

        instance.face.increment();

        expect(instance.face.faceValue().value).toStrictEqual(['b']);
    });

    it('creates an alphanumeric that skips 2 characters', () => {
        const instance = flipClock({
            autoStart: false,
            face: alphanumeric({
                skipChars: 2,
                value: faceValue('a'),
                targetValue: faceValue('z')
            }),
            theme: theme()
        });
        
        expect(instance.face.faceValue().value).toStrictEqual(['a']);

        instance.face.increment();

        expect(instance.face.faceValue().value).toStrictEqual(['c']);
    });

    it('creates an alphanumeric that ticks forwards', () => {
        const instance = flipClock({
            autoStart: false,
            face: alphanumeric({
                direction: 'forwards',
                value: faceValue('aa'),
                targetValue: faceValue('bb')
            }),
            theme: theme()
        });
        
        expect(instance.face.faceValue().value).toStrictEqual(['a', 'a']);

        instance.face.increment();

        expect(instance.face.faceValue().value).toStrictEqual(['b', 'b']);
    });

    it('creates an alphanumeric that ticks backwards', () => {
        const instance = flipClock({
            autoStart: false,
            face: alphanumeric({
                direction: 'backwards',
                value: faceValue('bb'),
                targetValue: faceValue('aa')
            }),
            theme: theme()
        });
        
        expect(instance.face.faceValue().value).toStrictEqual(['b', 'b']);

        instance.face.decrement();

        expect(instance.face.faceValue().value).toStrictEqual(['a', 'a']);
    });

    it('uses a custom sequencer', () => {
        const instance = flipClock({
            autoStart: false,
            face: alphanumeric({
                sequencer: useSequencer(),
                value: faceValue('a'),
                targetValue: faceValue('z')
            }),
            theme: theme()
        });
        
        expect(instance.face.faceValue().value).toStrictEqual(['a']);

        instance.face.increment();

        expect(instance.face.faceValue().value).toStrictEqual(['b']);
    });

    it('increments on an interval', () => {
        const instance = flipClock({
            parent: document.createElement('div'),
            face: alphanumeric({
                method: 'increment',
                value: faceValue('a'),
                targetValue: faceValue('c')
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toStrictEqual(['a']);

        nextTick(instance);

        expect(instance.face.faceValue().value).toStrictEqual(['b']);

        nextTick(instance);

        expect(instance.timer.isStopped).toBeTruthy();
        expect(instance.face.faceValue().value).toStrictEqual(['c']);

        nextTick(instance);

        expect(instance.face.faceValue().value).toStrictEqual(['c']);
    });

    it('does not have a target value', () => {
        const instance = flipClock({
            parent: document.createElement('div'),
            face: alphanumeric({
                method: 'increment',
                value: faceValue('a')
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toStrictEqual(['a']);

        nextTick(instance);

        expect(instance.timer.isStopped).toBeTruthy();
        expect(instance.face.faceValue().value).toStrictEqual(['a']);
    });
});