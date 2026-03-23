<template>
    <p class="slide-insight">{{ text }}</p>
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
.slide-insight {
    font-size: 13px;
    font-style: italic;
    color: #666;
    margin: 0;
    line-height: 1.5;
    border-left: 3px solid currentColor;
    padding-left: 10px;
}
</style>
