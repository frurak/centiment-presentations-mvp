<template>
    <div class="pie-chart-slide">
        <SlideTitle :text="slide.title" />
        <PieChart
            :config="slide.chart"
            class="pie-chart-slide__chart"
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
import type { IPieChartSlide } from "@/definitions/slide/Slide";
import SlideTitle from "@/components/shared/slideTitle/SlideTitle.vue";
import SlideInsight from "@/components/shared/slideInsight/SlideInsight.vue";
import PieChart from "@/components/shared/chartTypes/pieChart/PieChart.vue";

defineProps<{
    slide: IPieChartSlide
}>();
</script>

<style
    scoped
    lang="scss"
>
.pie-chart-slide {
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
