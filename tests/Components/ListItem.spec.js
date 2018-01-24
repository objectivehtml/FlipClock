import ListItem from '../../src/js/Components/ListItem.js';

test('Settings/Getters', () => {
    const instance = new ListItem(1, {
        className: 'some-class-name'
    });

    expect(instance.value === 1).toBe(true);
    expect(instance.getOption('className') === 'some-class-name').toBe(true);
});
