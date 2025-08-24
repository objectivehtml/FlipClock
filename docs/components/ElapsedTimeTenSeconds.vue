<script setup lang="ts">
//#region imports
import { add, css, elapsedTime, flipClock, theme } from 'flipclock';
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
        face: elapsedTime({
            from: add(new Date, {seconds: 10}),
            to: new Date,
        }),
        theme: theme({
            dividers: ':',
            css: css({
                fontSize: '3rem'
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