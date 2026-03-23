<template>
    <div class="title-slide">
        <SlideTitle :text="slide.title" />
        <SlideSubtitle
            v-if="slide.subtitle"
            :text="slide.subtitle"
        />
    </div>
</template>

<script
    setup
    lang="ts"
>
import type { ITitleSlide } from "@/definitions/slide/Slide";
import SlideTitle from "@/components/shared/slideTitle/SlideTitle.vue";
import SlideSubtitle from "@/components/shared/slideSubtitle/SlideSubtitle.vue";

defineProps<{
    slide: ITitleSlide
}>();
</script>

<style
    scoped
    lang="scss"
>
.title-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 12px;
    text-align: center;
    padding: 40px;
}
</style>
