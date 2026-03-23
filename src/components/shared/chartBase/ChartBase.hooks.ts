import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import Highcharts from "highcharts";
import { ChartType } from "@/definitions/chart/Chart.enum";
import type { IBarChartConfig, IPieChartConfig } from "@/definitions/chart/Chart";

const buildBarOptions = (config: IBarChartConfig): Highcharts.Options => ({
    chart: {type: "bar"},
    title: {text: undefined},
    xAxis: {
        categories: config.data.map((row) => String(row[config.xKey])),
    },
    yAxis: {
        title: {text: undefined},
    },
    series: config.series.map((seriesName) => ({
        type: "bar" as const,
        name: seriesName,
        data: config.data.map((row) => Number(row[seriesName])),
    })),
});

const buildPieOptions = (config: IPieChartConfig): Highcharts.Options => ({
    chart: {type: "pie"},
    title: {text: undefined},
    series: [
        {
            type: "pie" as const,
            data: config.data.map((point) => ({
                name: point.name,
                y: point.value,
            })),
        },
    ],
});

const buildOptions = (type: ChartType, config: IBarChartConfig | IPieChartConfig): Highcharts.Options => {
    if (type === ChartType.Bar) return buildBarOptions(config as IBarChartConfig);
    if (type === ChartType.Pie) return buildPieOptions(config as IPieChartConfig);
    return {};
};

export const useChartBase = (
    type: () => ChartType,
    config: () => IBarChartConfig | IPieChartConfig,
) => {
    const containerEl = ref<HTMLElement | null>(null);
    let chart: Highcharts.Chart | null = null;

    const initChart = () => {
        chart = Highcharts.chart(containerEl.value!, buildOptions(type(), config()));
    };

    const destroyChart = () => {
        chart?.destroy();
        chart = null;
    };

    const rebuildChart = () => {
        destroyChart();
        initChart();
    };

    onMounted(() => {
        initChart();
    });

    onBeforeUnmount(() => {
        destroyChart();
    });

    watch(config, () => {
        rebuildChart();
    }, {deep: true});

    return {containerEl};
};
