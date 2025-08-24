import { describe, expect, it } from "vitest";
import { flipClock } from "../../../src/FlipClock";
import { clock } from "../../../src/faces";
import { useCss } from "../../../src/helpers/css";
import { theme } from "../../../src/themes/flipclock";
import { css } from "../../../src/themes/flipclock/flipclock.css";

describe('FlipClock Theme', () => {
    it('renders a clock without labels and dividers', () => {
        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme(),
        });

        expect(parent.outerHTML).not.toContain('flip-clock-label');
    });
    
    it('renders nested groups without labels', () => {
        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme({
                dividers: [':'],
                labels: ['Hours'] // Only one label, but the format will create multiple groups
            }),
        });

        expect(parent.querySelector('.flip-clock')).toBeTruthy();
    });

    it('renders a clock with labels and dividers', () => {
        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme({
                dividers: [':'],
                labels: [['Days'], ['Hours'], ['Minutes'], ['Seconds']]
            }),
        });

        expect(parent.outerHTML).toContain(':');
        expect(parent.outerHTML).toContain('Days');
        expect(parent.outerHTML).toContain('Hours');
        expect(parent.outerHTML).toContain('Minutes');
        expect(parent.outerHTML).toContain('Seconds');
    });

    it('can extend the base theme', () => {
        const customCss = css.extend(() => ({
            body: {
                background: 'red'
            }
        }))();

        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme({
                css: customCss,
                dividers: [':'],
                labels: [['Days'], ['Hours'], ['Minutes'], ['Seconds']]
            }),
        });

        expect(parent.outerHTML).toContain(String(customCss));
    });

    it('can have multiple css declarations', () => {
        const a = useCss(() => ({
            body: {
                background: 'red'
            }
        }));

        const b = useCss(() => ({
            body: {
                color: 'white'
            }
        }));

        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme({
                css: [a(), b()]
            }),
        });

        expect(parent.outerHTML).toContain(a());
        expect(parent.outerHTML).toContain(b());
    });

    it('uses the css options', () => {
        const declaration = css({
            borderRadius: '1rem',
            fontSize: '4rem',
            fontFamily: 'Arial',
            width: '.75em',
            height: '1.25em',
            animationDuration: '100ms',
            animationDelay: '200rem',
        });

        expect(declaration.css['&']['--border-radius']).toBe('1rem');
        expect(declaration.css['&']['--font-size']).toBe('4rem');
        expect(declaration.css['&']['--font-family']).toBe('Arial');
        expect(declaration.css['&']['--width']).toBe('.75em');
        expect(declaration.css['&']['--height']).toBe('1.25em');
        expect(declaration.css['&']['--animation-duration']).toBe('100ms');
        expect(declaration.css['&']['--animation-delay']).toBe('200rem');
    });

    it('can use regex to define dividers', () => {
        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme({
                dividers: /[:]/,
                labels: [['Days'], ['Hours'], ['Minutes'], ['Seconds']]
            }),
        });

        expect(parent.outerHTML).toContain(':');
        expect(parent.outerHTML).toContain('Days');
        expect(parent.outerHTML).toContain('Hours');
        expect(parent.outerHTML).toContain('Minutes');
        expect(parent.outerHTML).toContain('Seconds');
    });

    it('can use a string to define dividers', () => {
        const parent = document.createElement('div');

        flipClock({
            parent,
            face: clock({
                format: '[hh]:[mm]:[ss][A]'
            }),
            theme: theme({
                dividers: ':',
                labels: [['Days'], ['Hours'], ['Minutes'], ['Seconds']]
            }),
        });

        expect(parent.outerHTML).toContain(':');
        expect(parent.outerHTML).toContain('Days');
        expect(parent.outerHTML).toContain('Hours');
        expect(parent.outerHTML).toContain('Minutes');
        expect(parent.outerHTML).toContain('Seconds');
    });
});