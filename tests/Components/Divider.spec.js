import Divider from '../../src/js/Components/Divider';
import FlipClock from '../../src/js/Components/FlipClock';

const defaults = {
    theme: FlipClock.defaults.theme,
    language: FlipClock.defaults.language
};

test('rendering a divider', () => {
    const divider = Divider.make(defaults);

    expect(divider.el).toBeInstanceOf(HTMLElement);
    expect(divider.el.classList.contains('flip-clock-divider')).toBe(true);
    expect(divider.el).toBe(divider.render());
});
