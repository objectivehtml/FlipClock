<script setup lang="ts">
//#region imports
import { counter, css, flipClock, theme } from 'flipclock';
//#endregion imports
import { onMounted, useTemplateRef } from 'vue';

const parent = useTemplateRef<HTMLDivElement>('parent');

let instance: any;

function run(parent: HTMLDivElement) {
    /**
    //#region parent
    const parent = document.querySelector('#clock')!;
    //#endregion parent
    */

    //#region example
    const instance = flipClock({
        parent,
        autoStart: false,
        face: counter({
            formatter: Intl.NumberFormat('en-US', {
                minimumIntegerDigits: 2
            })
        }),
        theme: theme({
            css: css({
                fontSize: '3rem'
            })
        })
    });
    //#endregion example

    return instance;
}

onMounted(() => {
    if(!parent.value) {
        return;
    }
    instance = run(parent.value);
});
</script>

<template>
    <div class="wrapper">
        <div ref="parent"></div>
        
        <div>
            <div class="buttons">
                <!--#region buttons -->
                <button @click="instance.face.increment()">+1</button>
                <button @click="instance.face.increment(10)">+10</button>
                <button @click="instance.face.decrement()">-1</button>
                <button @click="instance.face.decrement(10)">-10</button>
                <!--#endregion buttons-->
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}

.buttons {
    display: flex;
    gap: .5rem;
}

button {
    background: var(--vp-button-brand-bg);
    padding: .5em .75em;
    border-radius: .25em;
    outline: none;
    width: 2.75rem;
}

button:active {
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--vp-button-brand-bg), transparent 50%);
}
</style>