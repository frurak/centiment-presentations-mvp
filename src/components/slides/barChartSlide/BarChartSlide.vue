<template>
    <div class="bar-chart-slide">
        <SlideTitle :text="slide.title" />
        <BarChart
            :config="slide.chart"
            class="bar-chart-slide__chart"
        />
        <SlideInsight
            v-if="slide.insight"
            :text="slide.insight"
        />
    </div>
</template>

<script
    setup
    lang="ts"
>
import type { IBarChartSlide } from "@/definitions/slide/Slide";
import SlideTitle from "@/components/shared/slideTitle/SlideTitle.vue";
import SlideInsight from "@/components/shared/slideInsight/SlideInsight.vue";
import BarChart from "@/components/shared/chartTypes/barChart/BarChart.vue";

defineProps<{
    slide: IBarChartSlide
}>();
</script>

<style
    scoped
    lang="scss"
>
.bar-chart-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 12px;
    padding: 32px;

    &__chart {
        flex: 1;
        min-height: 0;
    }
}
</style>
