import ListItem from '../../src/js/Components/ListItem';
import FlipClock from '../../src/js/Components/FlipClock';

const defaults = {
    theme: FlipClock.defaults.theme,
    language: FlipClock.defaults.language
};

test('rendering a ListItem from string', () => {
    const value = 1;
    const item = ListItem.make(value, defaults);

    expect(item.value).toBe(value);
    expect(item.render()).toBeInstanceOf(HTMLElement);
    expect(item.render().querySelector('.top').innerHTML).toBe(value.toString());
});

test('rendering a ListItem from object', () => {
    const value = 1;
    const item = ListItem.make(Object.assign({
        value: value
    }, defaults));

    expect(item.value).toBe(value);
    expect(item.render()).toBeInstanceOf(HTMLElement);
    expect(item.render().querySelector('.top').innerHTML).toBe(value.toString());
});
