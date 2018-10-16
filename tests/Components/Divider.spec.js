import Divider from '../../src/js/Components/Divider.js';

test('if divder is rendered', () => {
    const withLabel = Divider.make({
        label: 'years'
    });
    
    expect(withLabel.render()).toBeInstanceOf(HTMLElement);
    expect(withLabel.render().classList.contains('flip-clock-divider')).toBe(true);
    expect(withLabel.render().querySelector('.flip-clock-label')).toBeInstanceOf(HTMLElement);
    expect(withLabel.render().querySelector('.flip-clock-label').innerHTML).toBe('Years');
});
