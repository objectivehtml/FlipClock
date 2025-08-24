import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "..";
import { flipClock } from "../../src/FlipClock";
import { clock } from "../../src/faces";
import { useDateFormats } from "../../src/helpers/date";
import { useDictionary } from "../../src/helpers/dictionary";
import { theme } from "../../src/themes/flipclock";

describe('Clock', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('creates a clock without any options', () => {
        const instance = flipClock({
            face: clock(),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBeTypeOf('string');
    });

    it('creates a clock from the specified date', async () => {
        const date = new Date('2025-01-01 00:00:00');

        const instance = flipClock({
            parent: document.createElement('div'),
            face: clock({
                date,
                format: 'mm:ss'
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('00:00');

        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('00:01');
    
        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('00:02');
    
        nextTick(instance);

        expect(instance.face.faceValue().value).toBe('00:03');
    });

    it('creates a clock with a formatter', () => {
        const date = new Date;

        const instance = flipClock({
            face: clock({
                format: '[hh]:[mm]',
                formatter: useDateFormats()
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe(
            instance.face.formatter.format(date, instance.face.format)
        );
    });

    it('creates a clock with formatter options', () => {
        const date = new Date('2025-01-01 00:00:00');

        const instance = flipClock({
            face: clock({
                date,
                format: 'MMMM',
                formatter: {
                    translate: useDictionary({
                        'January': 'Enero',
                        'February': 'Febrero',
                        'March': 'Marzo',
                        'April': 'Abril',
                        'May': 'Mayo',
                        'June': 'Junio',
                        'July': 'Julio',
                        'August': 'Agosto',
                        'September': 'Septiembre',
                        'October': 'Octubre',
                        'November': 'Noviembre',
                        'December': 'Diciembre'
                    })
                }
            }),
            theme: theme()
        });

        expect(instance.face.faceValue().value).toBe('Enero');
    });
});