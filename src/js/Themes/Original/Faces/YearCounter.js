export default function(el, instance) {
    instance.createDivider().mount(el, el.childNodes[1]);
    instance.createDivider().mount(el, el.childNodes[3]);
    instance.createDivider().mount(el, el.childNodes[5]);
    instance.createDivider().mount(el, el.childNodes[7]);

    if(instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[9]);
    }

    if(instance.face.showLabels) {
        instance.createLabel('years').mount(el.childNodes[0]);
        instance.createLabel('weeks').mount(el.childNodes[2]);
        instance.createLabel('days').mount(el.childNodes[4]);
        instance.createLabel('hours').mount(el.childNodes[6]);
        instance.createLabel('minutes').mount(el.childNodes[8]);

        if(instance.face.showSeconds) {
            instance.createLabel('seconds').mount(el.childNodes[10]);
        }
    }
}
