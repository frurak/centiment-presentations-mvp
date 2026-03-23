<template>
    <div class="slide-preview">
        <div
            class="reveal"
            ref="deckEl"
        >
            <div class="slides">
                <section>
                    <h1>{{ slide.title }}</h1>
                    <p>{{ slide.subtext }}</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import {ref, onMounted, onBeforeUnmount, watch} from "vue";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";

interface Slide {
    id: number;
    title: string;
    subtext: string;
}

const props = defineProps<{
    slide: Slide
}>();

const deckEl = ref<HTMLElement | null>(null);
let deck: Reveal.Api | null = null;

onMounted(() => {
    deck = new Reveal(deckEl.value!, {
        embedded: true,
        controls: false,
        progress: false,
        keyboard: false,
        touch: false,
        center: true,
        transition: "none",
    });
    deck.initialize();
});

onBeforeUnmount(() => {
    deck?.destroy();
});

watch(
    () => props.slide,
    () => {
        deck?.sync();
    },
);
</script>

<style
    scoped
    lang="scss"
>
.slide-preview {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F6F6F6;

    .reveal {
        width: 900px;
        height: 506px;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 0 20px 0 rgba(32, 31, 36, 0.08);
        background: #FFFFFF;

        p, span, div, h1, h2, h3, h4, h5, h6 {
            color: #000000;
        }
    }
}
</style>
