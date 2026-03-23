<template>
    <div
        class="chart-base"
        ref="containerEl"
    ></div>
</template>

<script
    setup
    lang="ts"
>
import { ChartType } from "@/definitions/chart/Chart.enum";
import type { IBarChartConfig, IPieChartConfig } from "@/definitions/chart/Chart";
import { useChartBase } from "./ChartBase.hooks";

const props = defineProps<{
    type: ChartType
    config: IBarChartConfig | IPieChartConfig
}>();

const { containerEl } = useChartBase(
    () => props.type,
    () => props.config,
);
</script>

<style
    scoped
    lang="scss"
>
.chart-base {
    width: 100%;
    height: 100%;
}
</style>
