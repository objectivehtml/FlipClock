import { createElement } from '../../src/js/Helpers/Template';

test('creating elements with string', () => {
    expect(createElement('div', 'test').innerHTML).toBe('test');
});

test('creating elements with attributes', () => {
    const el = createElement('div', 'test', {class: 'test'});

    expect(el.innerHTML).toBe('test');
    expect(el.classList.contains('test')).toBeTruthy();
})

test('can creating elements with children', () => {
    const el = createElement('div', [
        createElement('span', 1),
        createElement('span', 2, {class: 'test'}),
    ]);

    expect(el.children).toHaveLength(2);
    expect(el.firstChild).toBeInstanceOf(HTMLSpanElement);
    expect(el.firstChild.innerHTML).toBe('1');
    expect(el.lastChild).toBeInstanceOf(HTMLSpanElement);
    expect(el.lastChild.innerHTML).toBe('2');
});
