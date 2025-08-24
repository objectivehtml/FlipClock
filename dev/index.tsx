import { render } from 'solid-js/web';
import { faceValue } from '../src/FaceValue';
import { flipClock } from '../src/FlipClock';
import { alphanumeric } from '../src/faces/Alphanumeric';
import { useCss } from '../src/helpers/css';
import { theme } from '../src/themes/flipclock';
import { css } from '../src/themes/flipclock/flipclock.css';


type CssProps = {
    background: string;
    color: string;
}

const a = useCss((props: CssProps) => ({
    body: {
        background: props.background,
        color: props.color
    }
}))

a.merge((props) => ({
    div: {
        color: props.color
    }
}))

const instance = flipClock({
    parent: document.createElement('div'),
    autoStart: false,
    timer: 250,
    face: alphanumeric({
        value: faceValue('[Hello][World!]'),
        targetValue: faceValue('[Nice][to][meet][you!]'),
        skipChars: 10,
        sequencer: {
            stopAfterChanges: 3
        }
    }),
    theme: theme({
        css: css({
            animationDuration: '150ms'
        })
    }),
});

render(() => <>
    <div id="clock"></div>
    <button onclick={() => instance.face.increment()}>Increment</button>
</>, document.getElementById('app')!);

instance.mount(document.getElementById('clock')!);