<template>
    <div class="slide-preview">
        <div
            class="reveal"
            ref="deckEl"
        >
            <div class="slides">
                <section>
                    <component
                        :is="slideComponent"
                        :slide="(slide as any)"
                    />
                </section>
            </div>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { computed, ref, provide, onMounted, onBeforeUnmount, watch } from "vue";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";
import type { ISlide } from "@/definitions/slide/Slide";
import { SlideType } from "@/definitions/slide/Slide.enum";
import TitleSlide from "@/components/slides/titleSlide/TitleSlide.vue";
import KeyStatsSlide from "@/components/slides/keyStatsSlide/KeyStatsSlide.vue";
import BarChartSlide from "@/components/slides/barChartSlide/BarChartSlide.vue";
import PieChartSlide from "@/components/slides/pieChartSlide/PieChartSlide.vue";
import TableSlide from "@/components/slides/tableSlide/TableSlide.vue";
import ConclusionSlide from "@/components/slides/conclusionSlide/ConclusionSlide.vue";

const slideComponentMap = {
    [SlideType.Title]: TitleSlide,
    [SlideType.KeyStats]: KeyStatsSlide,
    [SlideType.BarChart]: BarChartSlide,
    [SlideType.PieChart]: PieChartSlide,
    [SlideType.Table]: TableSlide,
    [SlideType.Conclusion]: ConclusionSlide,
};

const props = defineProps<{
    slide: ISlide
}>();

const slideComponent = computed(() => slideComponentMap[props.slide.type]);

const deckEl = ref<HTMLElement | null>(null);
let deck: InstanceType<typeof Reveal> | null = null;

const revealReady = ref(false);
provide("revealReady", revealReady);

onMounted(async () => {
    deck = new Reveal(deckEl.value!, {
        embedded: true,
        controls: false,
        progress: false,
        keyboard: false,
        touch: false,
        center: false,
        transition: "none",
    });
    await deck.initialize();
    revealReady.value = true;
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

        :deep(.slides) {
            height: 100%;
        }

        :deep(section) {
            height: 100% !important;
            box-sizing: border-box;
        }
    }
}
</style>
