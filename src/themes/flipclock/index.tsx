import { createEffect, createMemo, createRoot, createSignal, Index, Match, Show, Switch, type JSX } from "solid-js";
import { render } from "solid-js/web";
import type { Face } from "../../Face";
import { type FlipClock, type Theme } from "../../FlipClock";
import type { CssDeclaration } from "../../helpers/css";
import type { DigitizedValue, DigitizedValues } from "../../helpers/digitizer";

/**
 * The FlipClock theme labels.
 * 
 * @public
 * 
 */
export type FlipClockThemeLabels = (string|FlipClockThemeLabels)[];

/**
 * The FlipClock theme options.
 * 
 * @public
 */
export type FlipClockThemeOptions<T extends CssDeclaration = CssDeclaration> = {
    /**
     * The CSS declarations used for the theme.
     */
    css?: T | T[];

    /**
     * The characters that should be rendered as dividers.
     */
    dividers?: RegExp | string | string[];

    /**
     * The labels that appear above the groups.
     */
    labels?: FlipClockThemeLabels;
};

/**
 * Renders a FlipClock theme.
 * 
 * @public
 */
export function theme(): Theme<any>;
export function theme<T extends CssDeclaration>(options: FlipClockThemeOptions<T>): Theme<any>;
export function theme<T extends CssDeclaration>(options?: FlipClockThemeOptions<T>): Theme<any>;
export function theme<T extends CssDeclaration>(options?: FlipClockThemeOptions<T>): Theme<any> {
    return {
        render<T extends Face<T>>(el: Element, instance: FlipClock<T>) {
            return createRoot(dispose => {
                let node: HTMLDivElement|undefined;

                const css = createMemo(() => {
                    return (Array.isArray(options?.css)
                        ? options.css
                        : [options?.css]
                    )
                        .filter(Boolean)
                        .map(css => String(css))
                        .join(' ');
                });

                render(() => (
                    <div ref={el => node = el} class="flip-clock" classList={{
                        [css()]: true
                    }}>
                        <Group
                            digits={instance.face.faceValue().digits}
                            dividers={options?.dividers}
                            labels={options?.labels ? [...options.labels] : undefined} />
                    </div>
                ), el);

                return [node!, dispose];
            });
        }
    };
}

function regexp(dividers?: FlipClockThemeOptions['dividers']): RegExp|undefined {
    if (dividers === undefined) {
        return;
    }

    if (dividers instanceof RegExp) {
        return dividers;
    }

    return new RegExp(
        `[${(Array.isArray(dividers) ? dividers : [dividers]).join('|')}]`
    );
}

function isDivider(value: DigitizedValue, dividers?: FlipClockThemeOptions['dividers']) {
    const pattern = regexp(dividers);

    if (!pattern) {
        return false;
    }

    return !!value.match(pattern)?.length;
}

type GroupProps = {
    labels?: FlipClockThemeLabels;
    digits: DigitizedValues;
    dividers?: FlipClockThemeOptions['dividers'];
}

function Group(props: GroupProps): JSX.Element {
    const label = props.labels?.shift();

    let group = 0;

    return (
        <div class="flip-clock-group">
            <Show when={typeof label === 'string'}>
                <div class="flip-clock-label">{label}</div>
            </Show>
            <div class="flip-clock-group-items">
                <Index each={props.digits}>
                    {digit => {
                        const itemType = createMemo(() => {
                            const value = digit();

                            if (Array.isArray(value)) {
                                return 'group';
                            };

                            if (isDivider(value, props.dividers)) {
                                return 'divider';
                            }

                            return 'card';
                        });
                        
                        return (
                            <Switch>
                                <Match when={itemType() === 'group'}>
                                    {(() => {
                                        const labels = Array.isArray(props.labels?.[group])
                                            ? props.labels[group++] as FlipClockThemeLabels
                                            : undefined;
                                        return <Group
                                            digits={digit() as DigitizedValues}
                                            dividers={props.dividers}
                                            labels={labels}/>;
                                    })()}
                                </Match>
                                <Match when={itemType() === 'divider'}>
                                    <Divider value={digit() as DigitizedValue} />
                                </Match>
                                <Match when={itemType() === 'card'}>
                                    <Card value={digit() as DigitizedValue} />
                                </Match>
                            </Switch>
                        );
                    }}
                </Index>
            </div>
        </div>
    );
}

type CardProps = {
    value: DigitizedValue;
    lastValue?: DigitizedValue | DigitizedValues;
}

function Card(props: CardProps): JSX.Element {
    const [value, setValue] = createSignal(props.value);
    const [beforeValue, setBeforeValue] = createSignal(props.value);
    const [getAnimate, setAnimate] = createSignal(false);

    setBeforeValue(props.value);
    setValue(props.value);
  
    createEffect(() => {
        const nextValue = props.value;
        
        setAnimate(false);
        
        requestAnimationFrame(() => {
            setBeforeValue(value());
            setValue(nextValue);

            if (nextValue !== beforeValue()) {
                setAnimate(true);
            }
        });
    });

    return (
        <div
            class="flip-clock-card"
            data-value={value()}
            data-before-value={beforeValue()}
            classList={{
                animate: getAnimate()
            }}>
            <CardItem
                value={value()}
                classList={{
                    active: true
                }} />
            <CardItem
                value={beforeValue()}
                classList={{
                    before: true
                }} />
        </div>
    );
};

type CardItemProps = {
    value: string;
    classList?: JSX.CustomAttributes<'div'>['classList'];
    onAnimationEnd?: (event: AnimationEvent) => void;
}

function CardItem(props: CardItemProps): JSX.Element {
    return (
        <div
            class="flip-clock-card-item"
            classList={props.classList} 
            onanimationend={props.onAnimationEnd}>
            <div class="flip-clock-card-item-inner">
                <div class="top">
                    {props.value}
                </div>
                <div class="bottom">
                    {props.value}
                </div>
            </div>
        </div>
    );
}

type DividerProps = {
    value: string
}

function Divider(props: DividerProps): JSX.Element {
    return (
        <div class="flip-clock-divider" data-value={props.value}>
            <div class="flip-clock-divider-inner">
                {props.value}
            </div>
        </div>
    );
}