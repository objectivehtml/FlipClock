import Timer from '../../src/js/Components/Timer';

test('if can the timer be started and stopped.', () => {
    const instance = Timer.make(500);

    expect(instance.interval === 500).toBe(true);
    expect(instance.isStopped()).toBe(true);

    instance.start();

    expect(instance.isRunning()).toBe(true);

    instance.stop(() => {
        expect(instance.isStopped()).toBe(true);
    });

    expect(instance.isStopped()).toBe(false);
});
