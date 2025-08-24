<script setup lang="ts">
//#region imports
import { css, elapsedTime, flipClock, theme } from 'flipclock';
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
            to: new Date(`${new Date().getFullYear() + 1}-01-01`),
            format: '[WW]:[DD]:[hh]:[mm]:[ss]'
        }),
        theme: theme({
            dividers: ':',
            labels: [['Weeks'], ['Days'], ['Hours'], ['Minutes'], ['Seconds']],
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