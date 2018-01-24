import test from 'ava';
import Timer from '../../src/js/Components/Timer.js';

test('Start/Stop', t => {
    const instance = new Timer({
        interval: 500,
        animationRate: 500
    });

    t.true(instance.getOption('interval') === 500);
    t.true(instance.getOption('animationRate') === 500);
    t.true(instance.isStopped());

    instance.start();

    t.true(instance.isRunning());

    instance.stop(() => {
        t.false(instance.isStopped());
    });

    t.false(instance.isStopped());
});

test('Interval/Reset', t => {
    const instance = new Timer();

    t.true(instance.getElapsed() === 0);

    instance.start(() => {
        t.true(instance.isRunning());
    });

    t.true(instance.isRunning());

    instance.stop(() => {
        t.false(instance.isRunning());

        instance.reset();

        t.true(instance.count === 0);
        t.true(instance.isStopped())

        instance.destroy(() => {
            t.true('destroy', instance.timer);
        });
    });

    t.true(instance.isRunning());
});
