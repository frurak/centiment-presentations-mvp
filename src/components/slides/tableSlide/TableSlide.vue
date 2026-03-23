<template>
    <div class="table-slide">
        <SlideTitle :text="slide.title" />
        <DataTable :table="slide.table" />
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
import type { ITableSlide } from "@/definitions/slide/Slide";
import SlideTitle from "@/components/shared/slideTitle/SlideTitle.vue";
import SlideInsight from "@/components/shared/slideInsight/SlideInsight.vue";
import DataTable from "@/components/shared/dataTable/DataTable.vue";

defineProps<{
    slide: ITableSlide
}>();
</script>

<style
    scoped
    lang="scss"
>
.table-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 16px;
    padding: 32px;
}
</style>
