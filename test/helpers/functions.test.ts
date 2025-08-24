import { expect, it } from "vitest";
import { getAnimationRate, parseDuration } from "../../src/helpers/functions";

it('converts a duration string to a number', () => {
    expect(parseDuration('')).toBe(0);
    expect(parseDuration('test')).toBe(0);
    expect(parseDuration('500')).toBe(0);
    expect(parseDuration('500ms')).toBe(500);
    expect(parseDuration('.5s')).toBe(500);
    expect(parseDuration('5s')).toBe(5000);
    expect(parseDuration('1m')).toBe(60000);
    expect(parseDuration('1h')).toBe(3600000);
});

it('gets the animation rate', () => {
    const el = document.createElement('div');

    el.style.setProperty('--animation-duration', '500ms');

    expect(getAnimationRate(el)).toBe(500);
});