<template>
    <aside class="slide-list">
        <div
            v-for="(slide, index) in slides"
            :key="slide.id"
            class="slide-list__item"
            :class="{ 'slide-list__item--active': index === activeIndex }"
            @click="$emit('select', index)"
        >
            <span class="slide-list__number">{{ index + 1 }}</span>
            <div class="slide-list__thumbnail">
                <p class="slide-list__thumbnail-title">{{ slide.title }}</p>
                <p class="slide-list__thumbnail-sub">{{ slide.subtext }}</p>
            </div>
        </div>
    </aside>
</template>

<script
    setup
    lang="ts"
>
interface Slide {
    id: number;
    title: string;
    subtext: string;
}

defineProps<{
    slides: Slide[]
    activeIndex: number
}>();

defineEmits<{
    select: [index: number]
}>();
</script>

<style
    scoped
    lang="scss"
>
.slide-list {
    width: 220px;
    min-width: 220px;
    background: #1e1e1e;
    overflow-y: auto;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        cursor: pointer;
        border-radius: 6px;
        padding: 6px;
        border: 2px solid transparent;

        &:hover {
            background: #2a2a2a;
        }

        &--active {
            border-color: #4f8ef7;
        }
    }

    &__number {
        font-size: 11px;
        color: #888;
        min-width: 16px;
        padding-top: 2px;
    }

    &__thumbnail {
        background: #fff;
        border-radius: 4px;
        width: 100%;
        aspect-ratio: 16 / 9;
        padding: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
    }

    &__thumbnail-title {
        font-size: 9px;
        font-weight: 700;
        color: #111;
        margin: 0;
        line-height: 1.2;
    }

    &__thumbnail-sub {
        font-size: 7px;
        color: #555;
        margin: 0;
        line-height: 1.3;
    }
}
</style>
