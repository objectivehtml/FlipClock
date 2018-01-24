import Component from '../../src/js/Components/Component.js';

test('Test the option setters/getters', () => {
    const instance = new Component();

    expect(instance.getOptions() instanceof Object).toBe(true);

    instance.setOption('first', 'John');

    expect(instance.getOption('first') === 'John').toBe(true);
    expect(!!instance.getOption('last')).toBe(false);

    instance.setOptions({
        first: 'James',
        last: 'Smith'
    });

    expect(instance.getOptions().first === 'James').toBe(true);
    expect(instance.getOptions().last === 'Smith').toBe(true);
});

test('Test callback()', done => {
    const instance = new Component();

    instance.callback(() => {
        done();
    });
});

test('Test listening to events', () => {
    let emissions = 0;
    const instance = new Component();

    instance.on('test', () => {
        emissions++;
    });

    instance.emit('test');
    instance.emit('test');
    instance.emit('test');

    expect(emissions).toBe(3);
});

test('Test listening to an event once', done => {
    let emissions = 0;
    const instance = new Component();

    instance.once('test', value => {
        emissions++;
        done();
    });

    instance.emit('test');
    instance.emit('test');
    instance.emit('test');

    expect(emissions).toBe(1);
});

test('Test turning an event off', done => {
    let emissions = 0;
    const instance = new Component();

    instance.on('test', () => {
        emissions++;
        done();
    });

    const event = instance.on('test', () => {
        emissions++;
        done();
    });

    instance.emit('test');
    instance.off(event);
    instance.emit('test');
    instance.off('test');
    instance.emit('test');

    expect(emissions).toBe(3);
});
