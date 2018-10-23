import List from '../../src/js/Components/List';
import FlipClock from '../../src/js/Components/FlipClock';

const defaults = {
    theme: FlipClock.defaults.theme,
    language: FlipClock.defaults.language
};

test('if list is rendered with string', () => {
    const list = List.make('a', defaults);

    const el = list.render();

    expect(list.items).toHaveLength(2);

    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.children).toHaveLength(2);
    expect(el.querySelector('.flip-clock-list-item:first-child .top').innerHTML).toBe('a');
    expect(el.querySelector('.flip-clock-list-item:last-child .bottom').innerHTML).toBe('z');
});

test('if list is rendered with object', () => {
    const list = List.make(Object.assign({
        value: 'a',
    }, defaults));

    const el = list.render();

    expect(list.items).toHaveLength(2);

    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.children).toHaveLength(2);
    expect(el.querySelector('.flip-clock-list-item:first-child .top').innerHTML).toBe('a');
    expect(el.querySelector('.flip-clock-list-item:last-child .bottom').innerHTML).toBe('z');
});
