<template>
    <ul class="bullet-list">
        <li
            v-for="(bullet, index) in bullets"
            :key="index"
            class="bullet-list__item"
        >
            {{ bullet }}
        </li>
    </ul>
</template>

<script
    setup
    lang="ts"
>
defineProps<{
    bullets: string[]
}>();
</script>

<style
    scoped
    lang="scss"
>
.bullet-list {
    margin: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item {
        font-size: 13px;
        line-height: 1.6;
        color: #333;
    }
}
</style>
