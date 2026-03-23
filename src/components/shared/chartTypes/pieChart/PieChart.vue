<template>
    <ChartBase
        :type="ChartType.Pie"
        :config="config"
    />
</template>

<script
    setup
    lang="ts"
>
import { ChartType } from "@/definitions/chart/Chart.enum";
import type { IPieChartConfig } from "@/definitions/chart/Chart";
import ChartBase from "@/components/shared/chartBase/ChartBase.vue";

defineProps<{
    config: IPieChartConfig
}>();
</script>
