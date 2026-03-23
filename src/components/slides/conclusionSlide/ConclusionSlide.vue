<template>
    <div class="conclusion-slide">
        <SlideTitle :text="slide.title" />
        <BulletList
            v-if="slide.bullets"
            :bullets="slide.bullets"
        />
    </div>
</template>

<script
    setup
    lang="ts"
>
import type { IConclusionSlide } from "@/definitions/slide/Slide";
import SlideTitle from "@/components/shared/slideTitle/SlideTitle.vue";
import BulletList from "@/components/shared/bulletList/BulletList.vue";

defineProps<{
    slide: IConclusionSlide
}>();
</script>

<style
    scoped
    lang="scss"
>
.conclusion-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
    padding: 32px;
}
</style>
