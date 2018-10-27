export default function(el, instance) {
    if(instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[1]);
    }

    if(instance.face.showLabels) {
        instance.createLabel('minutes').mount(el.childNodes[0]);

        if(instance.face.showSeconds) {
            instance.createLabel('seconds').mount(el.childNodes[2]);
        }
    }
}
