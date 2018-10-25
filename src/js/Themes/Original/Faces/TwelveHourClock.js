import TwentyFourHourClock from './TwentyFourHourClock';

export default function(el, instance) {
    TwentyFourHourClock(el, instance);

    if(instance.face.showMeridium && instance.face.meridium) {
        const label = instance.createLabel(instance.face.meridium);
        const parent = el.childNodes[el.childNodes.length - 1];

        label.mount(parent).classList.add('flip-clock-meridium');
    }
}
