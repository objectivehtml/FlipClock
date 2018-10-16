import element from '../../Helpers/Element';
import { when } from '../../Helpers/Element';

export default function(instance) {
    return element([
        '<span class="flip-clock-divider">',
            when(!!instance.label, `<span class="flip-clock-label">${instance.t(instance.label)}</span>`),
            '<span class="flip-clock-dot top"></span>',
            '<span class="flip-clock-dot bottom"></span>',
        '</span>'
    ]);
}
