import { createRoot } from "solid-js";
import { render } from "solid-js/web";
import { vi } from "vitest";
import type { Face, FaceHooks } from "../src/Face";
import { faceValue, type FaceValue } from "../src/FaceValue";
import type { DisposeFunction, FlipClock, Theme } from "../src/FlipClock";

export function nextTick(instance: FlipClock<any>) {
    vi.advanceTimersToNextFrame();
    vi.advanceTimersByTime(instance.timer.interval);
    vi.advanceTimersToNextFrame();
    vi.advanceTimersToNextFrame();
}

export function createHookMocks(): Required<FaceHooks<any>> {
    return {
        afterCreate: vi.fn(),
        beforeMount: vi.fn(),
        afterMount: vi.fn(),
        beforeUnmount: vi.fn(),
        afterUnmount: vi.fn(),
        beforeInterval: vi.fn(),
        afterInterval: vi.fn(),
        beforeStart: vi.fn(),
        afterStart: vi.fn(),
        beforeStop: vi.fn(),
        afterStop: vi.fn(),
    };
}

export class SimpleCounter implements Face {
    public value: FaceValue<number>;
    public hooks: Required<FaceHooks<SimpleCounter>>;

    constructor(value: number) {
        this.hooks = createHookMocks();
        this.value = faceValue(value);
    }

    faceValue(): FaceValue<number> {
        return this.value;
    }

    interval(): void {
        this.value.value++;
    }

    afterCreate(instance: FlipClock<any>): void {
        this.hooks.afterCreate(instance);
    }

    beforeMount(instance: FlipClock<any>): void {
        this.hooks.beforeMount(instance);
    }

    afterMount(instance: FlipClock<any>): void {
        this.hooks.afterMount(instance);
    }

    beforeUnmount(instance: FlipClock<any>): void {
        this.hooks.beforeUnmount(instance);
    }

    afterUnmount(instance: FlipClock<any>): void {
        this.hooks.afterUnmount(instance);
    }

    beforeInterval(instance: FlipClock<any>): void {
        this.hooks.beforeInterval(instance);
    }

    afterInterval(instance: FlipClock<any>): void {
        this.hooks.afterInterval(instance);
    }

    beforeStart(instance: FlipClock<any>): void {
        this.hooks.beforeStart(instance);
    }

    afterStart(instance: FlipClock<any>): void {
        this.hooks.afterStart(instance);
    }

    beforeStop(instance: FlipClock<any>): void {
        this.hooks.beforeStop(instance);
    }

    afterStop(instance: FlipClock<any>): void {
        this.hooks.afterStop(instance);
    }
}

export function createSimpleTheme(): [Required<FaceHooks<SimpleCounter>>, Theme<SimpleCounter>] {
    const hooks = createHookMocks();

    const theme = {
        render<T extends Face<T>>(el: Element, instance: FlipClock<T>): [Element, DisposeFunction] {
            return createRoot(dispose => {
                let node: HTMLDivElement|undefined;

                render(() => (
                    <div ref={node}>
                        {instance.face.faceValue().value}
                    </div>
                ), el);

                return [node!, dispose];
            });
        },

        afterCreate(instance: FlipClock<any>): void {
            hooks.afterCreate(instance);
        },

        beforeMount(instance: FlipClock<any>): void {
            hooks.beforeMount(instance);
        },

        afterMount(instance: FlipClock<any>): void {
            hooks.afterMount(instance);
        },

        beforeUnmount(instance: FlipClock<any>): void {
            hooks.beforeUnmount(instance);
        },

        afterUnmount(instance: FlipClock<any>): void {
            hooks.afterUnmount(instance);
        },

        beforeInterval(instance: FlipClock<any>): void {
            hooks.beforeInterval(instance);
        },

        afterInterval(instance: FlipClock<any>): void {
            hooks.afterInterval(instance);
        },

        beforeStart(instance: FlipClock<any>): void {
            hooks.beforeStart(instance);
        },

        afterStart(instance: FlipClock<any>): void {
            hooks.afterStart(instance);
        },

        beforeStop(instance: FlipClock<any>): void {
            hooks.beforeStop(instance);
        },

        afterStop(instance: FlipClock<any>): void {
            hooks.afterStop(instance);
        }
    };

    return [hooks, theme];
}