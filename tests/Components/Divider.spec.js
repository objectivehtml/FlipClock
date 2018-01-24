import jsdom from 'jsdom';
import Divider from '../../src/js/Components/Divider.js';

test('Test element', () => {
    const instance = new Divider({
        label: 'Test'
    });

    expect(instance.$el instanceof HTMLSpanElement).toBe(true);
});

test('Test label option', () => {
    const instance1 = new Divider({
        label: 'Test'
    });

    expect(instance1.$el.querySelector('.' + instance1.getOption('classes').label)).not.toBe(null);

    const instance2 = new Divider();

    expect(instance2.$el.querySelector('.' + instance2.getOption('classes').label)).toBe(null);
});

test('Test label excludeDots', () => {
    const instance1 = new Divider({
        label: 'Test'
    });

    expect(instance1.$el.querySelector('.' + instance1.getOption('classes').dot)).not.toBe(null);

    const instance2 = new Divider({
        label: 'Test',
        excludeDots: true
    });

    expect(instance2.$el.querySelector('.' + instance2.getOption('classes').dot)).toBe(null);
});
