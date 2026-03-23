<template>
    <h2 class="slide-title">{{ text }}</h2>
</template>

<script
    setup
    lang="ts"
>
defineProps<{
    text: string
}>();
</script>

<style
    scoped
    lang="scss"
>
.slide-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 8px;
}
</style>
