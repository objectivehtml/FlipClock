import element from '../../Helpers/Element';

export default function(instance) {
    return element([
        '<div class="flip-clock-list-item">',
            '<div class="flip-clock-list-item-inner">',
                '<div class="up">',
                    '<div class="shadow"></div>',
                    '<div class="inn">'+instance.value+'</div>',
                '</div>',
                '<div class="down">',
                    '<div class="shadow"></div>',
                    '<div class="inn">'+instance.value+'</div>',
                '</div>',
            '</div>',
        '</div>'
    ]);
}
