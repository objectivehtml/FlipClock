import { next, prev } from '../../src/js/Helpers/Value';
import FaceValue from '../../src/js/Components/FaceValue';


test('face values with 2 groups and prepend leading zeros and 3 minimum digits', () => {
    const faceValue = FaceValue.make([1, 2], {
        minimumDigits: 3,
        prependLeadingZero: true
    });

    expect(faceValue.digits).toHaveLength(2);
    expect(faceValue.digits[0]).toHaveLength(2);
    expect(faceValue.digits[0][0]).toBe('0');
    expect(faceValue.digits[0][1]).toBe('1');
    expect(faceValue.digits[1]).toHaveLength(2);
    expect(faceValue.digits[1][0]).toBe('0');
    expect(faceValue.digits[1][1]).toBe('2');

});

test('face values with strings', () => {
    const faceValue = FaceValue.make('a', {
        prependLeadingZero: false
    });

    expect(faceValue.digits[0]).toHaveLength(1);
    expect(faceValue.digits[0][0]).toBe('a');
});

test('face values without leading zeros', () => {
    const faceValue = FaceValue.make(1, {
        prependLeadingZero: false
    });

    expect(faceValue.digits[0]).toHaveLength(1);
});
