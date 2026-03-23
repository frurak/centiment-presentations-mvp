<template>
    <div class="key-stats-slide">
        <SlideTitle :text="slide.title" />
        <StatGrid
            v-if="slide.stats"
            :stats="slide.stats"
        />
    </div>
</template>

<script
    setup
    lang="ts"
>
import type { IKeyStatsSlide } from "@/definitions/slide/Slide";
import SlideTitle from "@/components/shared/slideTitle/SlideTitle.vue";
import StatGrid from "@/components/shared/statGrid/StatGrid.vue";

defineProps<{
    slide: IKeyStatsSlide
}>();
</script>

<style
    scoped
    lang="scss"
>
.key-stats-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
    padding: 32px;
}
</style>
