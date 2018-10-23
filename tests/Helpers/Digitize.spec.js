import digitize from '../../src/js/Helpers/Digitize';
import { deepFlatten } from '../../src/js/Helpers/Functions';

test('digitize()', () => {
    expect(digitize(1)).toHaveLength(1);
    expect(digitize([1, 2], {prependLeadingZero: true})).toHaveLength(2);
    expect(digitize([1, [1, 2020]])).toHaveLength(2);
    expect(deepFlatten(digitize([1, 1, 2020], {prependLeadingZero: true}))).toHaveLength(8);
    expect(digitize(1, {minimumDigits: 20, prependLeadingZero: false})[0]).toHaveLength(20);
    expect(digitize([1, [1, 2020]], {minimumDigits: 20, prependLeadingZero: false})[0]).toHaveLength(15);
    expect(digitize([1, [1, 2020]], {minimumDigits: 20, prependLeadingZero: false})[1]).toHaveLength(5);
    expect(digitize([1, [1, 2020]], {minimumDigits: 20, prependLeadingZero: true})[0]).toHaveLength(14);
    expect(digitize([1, [1, 2020]], {minimumDigits: 20, prependLeadingZero: true})[1]).toHaveLength(6);
});
