import { prev } from '../../Helpers/Value';
import element from '../../Helpers/Element';
import ListItem from '../../Components/ListItem';

export default function(instance) {
    instance.items = [
        ListItem.make(prev(instance.value)),
        ListItem.make(instance.value)
    ];

    return element([
        '<div class="flip-clock-list">',
        instance.items.map(item => {
            return item.render().outerHTML;
        }),
        '</div>'
    ]);
}
