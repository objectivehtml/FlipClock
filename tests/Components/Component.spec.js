import test from 'ava';
import Component from '../../src/js/Components/Component.js';

test('Option Setters/Getters', t => {
    const instance = new Component();

    t.true(instance.getOptions() instanceof Object);

    instance.setOption('first', 'John');

    t.true(instance.getOption('first') === 'John');
    t.false(!!instance.getOption('last'));

    instance.setOptions({
        first: 'James',
        last: 'Smith'
    });

    t.true(instance.getOptions().first === 'James');
    t.true(instance.getOptions().last === 'Smith');
});

test('Callback', t => {
    const instance = new Component();
    let pass = false;

    instance.callback(() => {
        pass = true;
    });

    pass ? t.pass() : t.fail();
});

test('Event Dispatcher', t => {
    let event, pass = false;

    const instance = new Component();
    const testHandler = () => {
        pass = true;
    };

    instance.once('test-once', testHandler);

    t.true(typeof (event = instance.on('test', testHandler)).handle === "function");

    instance.emit('test');

    t.true(pass);
    pass = false;

    instance.off(event);
    instance.emit('test');

    t.false(pass);

    instance.once('test', testHandler);
    instance.emit('test');

    t.true(pass);
    pass = false;
    t.false(pass);
});
