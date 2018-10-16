import ListItem from '../../src/js/Components/ListItem.js';

test('if list item is rendered with the specified value', () => {
    const value = 1;

    const item = ListItem.make(value);

    expect(item.value).toBe(value);
    expect(item.render()).toBeInstanceOf(HTMLElement);
    expect(item.render().querySelector('.inn').innerHTML).toBe(value.toString());
});
