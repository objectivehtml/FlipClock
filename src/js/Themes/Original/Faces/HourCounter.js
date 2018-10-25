export default function(el, instance) {
    instance.createDivider().mount(el, el.childNodes[1]);

    if(instance.face.showSeconds) {
        instance.createDivider().mount(el, el.childNodes[3]);
    }
    
    if(instance.face.showLabels) {
        instance.createLabel('hours').mount(el.childNodes[0]);
        instance.createLabel('minutes').mount(el.childNodes[2]);

        if(instance.face.showSeconds) {
            instance.createLabel('seconds').mount(el.childNodes[4]);
        }
    }
}
