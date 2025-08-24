<script setup lang="ts">
import { alphanumeric, css, faceValue, flipClock, theme } from 'flipclock';
import { onMounted, useTemplateRef } from 'vue';

const parent = useTemplateRef<HTMLDivElement>('parent');

function run(parent: HTMLDivElement) {
    flipClock({
        parent,
        timer: 200,
        face: alphanumeric({
            value: faceValue('[Hello][World!]'),
            // value: faceValue('[Nice][to][[Meet][You!]]'),
            targetValue: faceValue('[Nice][to][[Meet][You!]]'),
            sequencer: {
                stopAfterChanges: 4
            },
            skipChars: 7
        }),
        theme: theme({
            dividers: ' ',
            css: css.extend(() => ({
                '& > .flip-clock-group > .flip-clock-group-items': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: '1rem',

                    '& > .flip-clock-group': {
                        marginLeft: 0
                    }
                },
                '@media screen and (min-width: 960px)': {
                    '&': {
                        fontSize: '2.75rem'
                    },
                },
                '@media screen and (min-width: 1100px)': {
                    '&': {
                        fontSize: '3.25rem'
                    }
                },
                '@media screen and (min-width: 1150px)': {
                    '&': {
                        fontSize: '3.5rem'
                    }
                },
                '@media screen and (min-width: 1200px)': {
                    '&': {
                        fontSize: '3.75rem'
                    }
                }
            }))({
                animationDuration: '100ms',
                fontSize: '1.5rem'
            })
        })
    });
}

onMounted(() => {
    if(!parent.value) {
        return
    }
    
    run(parent.value);
});
</script>

<template>
    <div class="intro">
        <div ref="parent"/>
    </div>
</template>

<style scoped>
.intro {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    & > div {
        width: 100%;
    }
}
</style>