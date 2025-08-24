import { expect, it } from 'vitest';
import { faceValue } from '../../src/FaceValue';
import { useCharset } from '../../src/helpers/charset';
import { useSequencer } from '../../src/helpers/sequencer';

it('increments towards "hello" 2 changes at a time', () => {
    const { increment } = useSequencer({
        charset: useCharset(),
        stopAfterChanges: 2
    });
    
    const target = faceValue('hello');

    let subject = faceValue('');

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['b', 'b']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['d', 'd']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['f', 'e']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'b']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'd', 'b']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'f', 'd']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'h', 'f']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'j', 'h']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'j']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'b']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'd']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'f']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'h']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'j']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'l']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'n']);

    subject = increment(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'o']);
});

it('decrements from "hello" 2 changes at a time', () => {
    const { decrement } = useSequencer({
        stopAfterChanges: 2,
        matchArray: {
            backwards: true
        }
    });

    const target = faceValue('');

    let subject = faceValue('hello');

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'l', 'o']);
    
    subject = decrement(subject, target, 2);
    
    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'j', 'm']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'h', 'k']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'f', 'i']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'd', 'g']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'b', 'e']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', ' ', 'c']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'l', 'a']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'e', 'j']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'c', 'h']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'a', 'f']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['h', 'd']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['f', 'b']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['d', ' ']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual(['b']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual([' ']);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual([]);

    subject = decrement(subject, target, 2);

    expect(subject.digits).toStrictEqual([]);
});

it('uses stopWhen callback to stop changes', () => {
    const { increment, decrement } = useSequencer({
        stopWhen: (changes) => {
            return !changes.length;
        }
    });

    const target = faceValue('hello');

    const subject = faceValue('');

    expect(increment(subject, target, 2).digits).toStrictEqual(['b']);
    expect(decrement(subject, target).digits).toStrictEqual(['a']);
});

it('when it does not have any stopWhen callback', () => {
    const { increment, decrement } = useSequencer();

    const target = faceValue('hello');

    const subject = faceValue('');

    expect(increment(subject, target, 2).digits).toStrictEqual(['b', 'b', 'b', 'b', 'b']);
    expect(decrement(subject, target).digits).toStrictEqual(['a', 'a', 'a', 'a', 'a']);
});

it('without any stop callback', () => {
    const { increment, decrement } = useSequencer();

    expect(increment(faceValue('a'), faceValue('a'), 1).digits).toStrictEqual(['a']);
    expect(decrement(faceValue('a'), faceValue('a'), 1).digits).toStrictEqual(['a']);

    expect(increment(faceValue(undefined), faceValue('z'), 1).digits).toStrictEqual(['a']);
    expect(decrement(faceValue(undefined), faceValue('a'), 1).digits).toStrictEqual([' ']);
});