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

<script
    setup
    lang="ts"
>
import { ref } from "vue";
import SlideList from "@/components/slideList/SlideList.vue";
import SlidePreview from "@/components/slidePreview/SlidePreview.vue";
import SlideConfig from "@/components/slideConfig/SlideConfig.vue";

interface Slide {
    id: number;
    title: string;
    subtext: string;
}

const activeIndex = ref<number>(0);

const slides = ref<Slide[]>([
    {
        id: 1,
        title: "Welcome to Centiment",
        subtext: "The modern way to build and share presentations.",
    },
    {
        id: 2,
        title: "Data-Driven Insights",
        subtext: "Visualize your metrics with beautiful, interactive charts.",
    },
    {
        id: 3,
        title: "Collaborate in Real Time",
        subtext: "Work together with your team, anywhere in the world.",
    },
]);
</script>

<style
    scoped
    lang="scss"
>
.slide-view {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: #F6F6F6;
}
</style>
