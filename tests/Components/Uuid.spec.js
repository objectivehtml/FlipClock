import Uuid from '../../src/js/Components/Uuid.js';

test('Setters/Getters', t => {
    const instance = new Uuid();

    t.false(new Uuid('test').isUuid());
    t.false(new Uuid().isUuid('test'));
    t.true(new Uuid().isUuid(instance));
    t.true(instance.equals(instance));
    t.false(instance.equals(new Uuid));
    t.true(new Uuid().isUuid(instance.value));
    t.true(new Uuid('test').value === 'test');
    t.true(new Uuid().isUuid(instance.generate()));
});
