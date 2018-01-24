import test from 'ava';
import jsdom from 'jsdom';
import ListItem from '../../src/js/Components/ListItem.js';

global.document = jsdom();
global.window = document.defaultView;

test('Settings/Getters', t => {
    const instance = new ListItem(1, {
        className: 'some-class-name'
    });

    t.true(instance.value === 1);
    t.true(instance.getOption('className') === 'some-class-name');
});
