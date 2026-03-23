<template>
    <p class="slide-subtitle">{{ text }}</p>
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
.slide-subtitle {
    font-size: 16px;
    font-weight: 400;
    color: #555;
    margin: 0;
    line-height: 1.5;
}
</style>
