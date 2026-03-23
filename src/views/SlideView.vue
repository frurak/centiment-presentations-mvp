<template>
    <div class="slide-view">
        <SlideList
            :slides="slides"
            :activeIndex="activeIndex"
            @select="activeIndex = $event"
        />
        <SlidePreview :slide="slides[activeIndex]" />
        <SlideConfig />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { ISlide } from "@/definitions/slide/Slide"
import SlideList from "@/components/slideList/SlideList.vue"
import SlidePreview from "@/components/slidePreview/SlidePreview.vue"
import SlideConfig from "@/components/slideConfig/SlideConfig.vue"
import aiOutput from "@/defaults/ai/ai-output.json"

const activeIndex = ref<number>(0)
const slides = ref<ISlide[]>(aiOutput.slides as ISlide[])
</script>

<style scoped lang="scss">
.slide-view {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: #F6F6F6;
}
</style>
