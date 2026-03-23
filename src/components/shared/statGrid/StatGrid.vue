<template>
    <div class="stat-grid">
        <div
            v-for="(stat, index) in stats"
            :key="index"
            class="stat-grid__item"
        >
            <span class="stat-grid__value">{{ stat.value }}</span>
            <span class="stat-grid__label">{{ stat.label }}</span>
        </div>
    </div>
</template>

<script
    setup
    lang="ts"
>
import type { IStatItem } from "@/definitions/slide/Slide";

defineProps<{
    stats: IStatItem[]
}>();
</script>

<style
    scoped
    lang="scss"
>
.stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    &__item {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 16px;
        border-radius: 6px;
        background: #f4f4f4;
    }

    &__value {
        font-size: 32px;
        font-weight: 700;
        line-height: 1;
    }

    &__label {
        font-size: 12px;
        color: #555;
        line-height: 1.4;
    }
}
</style>
