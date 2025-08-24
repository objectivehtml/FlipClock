import { afterEach } from "node:test";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createSimpleTheme, nextTick, SimpleCounter } from ".";
import { counter } from "../src/faces";
import { faceValue } from "../src/FaceValue";
import { flipClock } from "../src/FlipClock";
import { theme } from "../src/themes/flipclock";
import { css } from "../src/themes/flipclock/flipclock.css";
import { timer } from "../src/Timer";

describe('FlipClock', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('creates, mounts, and toggles the timer on a clock', () => {
        const startCallback = vi.fn();
        const stopCallback = vi.fn();

        const el = document.createElement('div');

        const clock = flipClock({
            autoStart: false,
            face: counter({
                value: faceValue(0)
            }),
            theme: theme({
                css: css()
            }),
        });

        clock.on('afterStart', startCallback);
    
        expect(clock.autoStart).toBe(false);
        expect(clock.animationRate).toBe(0);
        expect(clock.timer.isStopped).toBe(true);

        clock.mount(el);
        clock.toggle(startCallback);

        nextTick(clock);

        expect(startCallback).toBeCalledTimes(2);

        expect(clock.timer.isStopped).toBe(false);
        expect(clock.animationRate).toBe(250);
        expect(el.children.length).toBe(1);

        clock.toggle(stopCallback);

        expect(stopCallback).toBeCalledTimes(1);

        clock.unmount();

        expect(clock.timer.isStopped).toBe(true);
        expect(el.children.length).toBe(0);
    });

    it('automatically mounts when an element is passed', () => {
        const parent = document.createElement('div');

        const clock = flipClock({
            parent,
            autoStart: true,
            face: counter({
                value: faceValue(0)
            }),
            theme: theme(),
        });

        vi.advanceTimersToNextFrame();

        expect(parent.children.length).toBe(1);
        expect(clock.autoStart).toBe(true);
        expect(clock.timer.isRunning).toBe(true);
    });

    it('accepts a custom timer instance or number', () => {
        expect(flipClock({
            autoStart: false,
            timer: timer(500),
            face: counter({
                value: faceValue(0)
            }),
            theme: theme(),
        }).timer.interval).toBe(500);

        expect(flipClock({
            autoStart: false,
            timer: 500,
            face: counter({
                value: faceValue(0)
            }),
            theme: theme(),
        }).timer.interval).toBe(500);
    });

    it('calls all the hooks on a face and theme', () => {
        const el = document.createElement('div');

        const [hooks, simpleTheme] = createSimpleTheme();

        const clock = flipClock({
            autoStart: false,
            face: new SimpleCounter(0),
            theme: simpleTheme,
        });

        expect(clock.face.hooks.afterCreate).toBeCalledTimes(1);
        expect(hooks.afterCreate).toBeCalledTimes(1);

        clock.mount(el);

        vi.advanceTimersToNextFrame();

        expect(clock.face.hooks.beforeMount).toBeCalledTimes(1);
        expect(hooks.beforeMount).toBeCalledTimes(1);

        expect(clock.face.hooks.afterMount).toBeCalledTimes(1);
        expect(hooks.afterMount).toBeCalledTimes(1);

        clock.toggle();
    
        vi.advanceTimersToNextFrame();

        expect(clock.face.hooks.beforeStart).toBeCalledTimes(1);
        expect(hooks.beforeStart).toBeCalledTimes(1);

        nextTick(clock);

        expect(clock.face.hooks.afterStart).toBeCalledTimes(1);
        expect(hooks.afterStart).toBeCalledTimes(1);

        expect(clock.face.hooks.beforeInterval).toBeCalledTimes(1);
        expect(hooks.beforeInterval).toBeCalledTimes(1);

        expect(clock.face.hooks.afterInterval).toBeCalledTimes(1);
        expect(hooks.afterInterval).toBeCalledTimes(1);

        clock.toggle();
    
        vi.advanceTimersToNextFrame();

        expect(clock.face.hooks.beforeStop).toBeCalledTimes(1);
        expect(hooks.beforeStop).toBeCalledTimes(1);
    
        expect(clock.face.hooks.afterStop).toBeCalledTimes(1);
        expect(hooks.afterStop).toBeCalledTimes(1);

        clock.unmount();

        expect(clock.face.hooks.beforeUnmount).toBeCalledTimes(1);
        expect(hooks.beforeUnmount).toBeCalledTimes(1);

        expect(clock.face.hooks.afterUnmount).toBeCalledTimes(1);
        expect(hooks.afterUnmount).toBeCalledTimes(1);
    });
});
