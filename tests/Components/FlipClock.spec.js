import FlipClock from '../../src/js/Components/FlipClock';

test('clock with the default values', () => {
    const parent = document.createElement('div');

    const clock = FlipClock.make(parent, [1, 1]);


    console.log(clock, parent.innerHTML);
});
