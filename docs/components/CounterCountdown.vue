<script setup lang="ts">
//#region imports
import { counter, css, flipClock, theme } from 'flipclock';
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
        face: counter({
            value: 10,
            targetValue: 0,
            countdown: true,
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
}

onMounted(() => parent.value && run(parent.value));
</script>

<template>
    <div ref="parent"></div>
</template>