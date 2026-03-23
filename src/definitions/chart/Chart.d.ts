import { ChartType } from "./Chart.enum";

export interface IBarChartDataPoint {
    [key: string]: string | number;
}

export interface IBarChartConfig {
    xKey: string;
    series: Array<string>;
    data: Array<IBarChartDataPoint>;
}

export interface IPieChartDataPoint {
    name: string;
    value: number;
}

export interface IPieChartConfig {
    data: IPieChartDataPoint[];
}

export type IChartConfig<T extends ChartType> =
    T extends ChartType.Bar ? IBarChartConfig :
        T extends ChartType.Pie ? IPieChartConfig :
            never
