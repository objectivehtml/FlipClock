import Uuid from '../../src/js/Components/Uuid.js';

test('Setters/Getters', () => {
    const instance = new Uuid();

    expect(new Uuid('test').isUuid()).toBe(false);
    expect(new Uuid().isUuid('test')).toBe(false);
    expect(new Uuid().isUuid(instance)).toBe(true);
    expect(instance.equals(instance)).toBe(true);
    expect(instance.equals(new Uuid)).toBe(false);
    expect(new Uuid().isUuid(instance.value)).toBe(true);
    expect(new Uuid('test').value === 'test').toBe(true);
    expect(new Uuid().isUuid(instance.generate())).toBe(true);
});
