<script setup lang="ts">
//#region imports
import { alphanumeric, css, faceValue, flipClock, theme } from 'flipclock';
//#endregion imports
import { onMounted, useTemplateRef } from 'vue';

const parent = useTemplateRef<HTMLDivElement>('parent');

function run(parent: HTMLDivElement) {
    /**
    //#region parent
    const parent = document.querySelector('#clock')!;
    //#endregion parent
    */

    //#region example
    flipClock({
        parent,
        timer: 200,
        face: alphanumeric({
            value: faceValue('This is FlipClock.js'),
            targetValue: faceValue('Hello World!'),
            sequencer: {
                stopAfterChanges: 3,
            },
            skipChars: 5
        }),
        theme: theme({
            dividers: ' ',
            css: css({
                animationDuration: '100ms',
                fontSize: '2rem'
            })
        })
    });
    //#endregion example
}

onMounted(() => parent.value && run(parent.value));
</script>

<template>
    <div ref="parent"></div>
</template>