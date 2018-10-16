import List from '../../src/js/Components/List.js';

test('if list is rendered with children', () => {
    const list = List.make('a');

    const el = list.render();

    expect(list.items).toHaveLength(2);
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.children).toHaveLength(2);
    expect(el.querySelector('.flip-clock-list-item:first-child .inn').innerHTML).toBe('z');
    expect(el.querySelector('.flip-clock-list-item:last-child .inn').innerHTML).toBe('a');
});
