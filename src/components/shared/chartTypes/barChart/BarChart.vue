<template>
    <ChartBase
        :type="ChartType.Bar"
        :config="config"
    />
</template>

<script
    setup
    lang="ts"
>
import { ChartType } from "@/definitions/chart/Chart.enum";
import type { IBarChartConfig } from "@/definitions/chart/Chart";
import ChartBase from "@/components/shared/chartBase/ChartBase.vue";

defineProps<{
    config: IBarChartConfig
}>();
</script>
