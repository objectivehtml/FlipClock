import { add, set, sub } from "date-fns";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "..";
import { flipClock } from "../../src/FlipClock";
import { elapsedTime } from "../../src/faces";
import { useDurationFormats } from "../../src/helpers/duration";
import { theme } from "../../src/themes/flipclock";

describe('ElapsedTime', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('creates an elapsed time to a given date', () => {
        const instance = flipClock({
            parent: document.createElement('div'),
            face: elapsedTime({
                to: add(new Date, { seconds: 3 }),
                format: '[mm]:[ss]'
            }),
            theme: theme()
        });

        expect(instance.face.formattedString).toBe('[00]:[03]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[02]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[01]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[00]');
        
        nextTick(instance);
        
        expect(instance.face.formattedString).toBe('[00]:[00]');
        expect(instance.timer.isStopped).toBeTruthy();
    });

    it('creates an elapsed time from a date in the past', () => {
        const instance = flipClock({
            parent: document.createElement('div'),
            face: elapsedTime({
                from: sub(new Date, { minutes: 60 }),
                format: '[mm]:[ss]'
            }),
            theme: theme()
        });

        expect(instance.face.formattedString).toBe('[60]:[00]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[60]:[01]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[60]:[02]');
    });

    it('creates an elapsed time from a date in the future', () => {
        const instance = flipClock({
            parent: document.createElement('div'),
            face: elapsedTime({
                from: add(new Date, { minutes: 60 }),
                format: '[mm]:[ss]'
            }),
            theme: theme()
        });

        expect(instance.face.formattedString).toBe('[60]:[00]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[59]:[59]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[59]:[58]');
    });

    it('creates an elapsed time from and to a given date', () => {
        const from = set(new Date(), { milliseconds: 0 });
        
        const instance = flipClock({
            parent: document.createElement('div'),
            face: elapsedTime({
                from,
                to: add(from, { seconds: 3 }),
                format: '[mm]:[ss]'
            }),
            theme: theme()
        });

        expect(instance.face.formattedString).toBe('[00]:[00]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[01]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[02]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[03]');

        nextTick(instance);

        expect(instance.face.formattedString).toBe('[00]:[03]');
        expect(instance.timer.isStopped).toBeTruthy();
    });

    it('creates an elapsed time with a formatter', () => {
        const date = new Date;

        const instance = flipClock({
            face: elapsedTime({
                format: '[mm]:[ss]',
                formatter: useDurationFormats()
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe(
            instance.face.formatter.format(date, date, instance.face.format)
        );
    });
});