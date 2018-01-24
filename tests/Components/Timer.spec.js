import Timer from '../../src/js/Components/Timer.js';

test('Start/Stop', () => {
    const instance = new Timer({
        interval: 500,
        animationRate: 500
    });

    expect(instance.getOption('interval') === 500).toBe(true);
    expect(instance.getOption('animationRate') === 500).toBe(true);
    expect(instance.isStopped()).toBe(true);

    instance.start();

    expect(instance.isRunning()).toBe(true);

    instance.stop(() => {
        expect(instance.isStopped()).toBe(false);
    });

    expect(instance.isStopped()).toBe(false);
});

test('Interval/Reset', () => {
    const instance = new Timer();

    expect(instance.getElapsed() === 0).toBe(true);

    instance.start(() => {
        expect(instance.isRunning()).toBe(true);
    });

    expect(instance.isRunning()).toBe(true);

    instance.stop(() => {
        expect(instance.isRunning()).toBe(false);

        instance.reset();

        expect(instance.count === 0).toBe(true);
        expect(instance.isStopped()).toBe(true)

        instance.destroy(() => {
            expect('destroy').toBe(true);
        });
    });

    expect(instance.isRunning()).toBe(true);
});
