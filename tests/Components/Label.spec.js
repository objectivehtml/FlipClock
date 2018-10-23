import Label from '../../src/js/Components/Label';
import FlipClock from '../../src/js/Components/FlipClock';

const defaults = {
    theme: FlipClock.defaults.theme,
    language: FlipClock.defaults.language
};

test('rendering a divider', () => {
    const el = Label.make('test', defaults);

    expect(el.render()).toBeInstanceOf(HTMLElement);
    expect(el.render().classList.contains('flip-clock-label')).toBe(true);
    expect(el.render().innerHTML).toBe('test');
});
