import { SlideType } from "./Slide.enum";
import { IBarChartConfig, IPieChartConfig } from "../chart/Chart";

export interface ISlideTheme {
    primary: string;
    accent: string;
    background: string;
}

export interface IStatItem {
    value: string;
    label: string;
}

export interface ITableConfig {
    headers: string[];
    rows: string[][];
}

export interface IBaseSlide<T extends SlideType> {
    id: number;
    type: T;
    title: string;
    subtitle?: string;
    insight?: string;
    bullets?: Array<string>;
    stats?: Array<IStatItem>;
}

export interface ITitleSlide extends IBaseSlide<SlideType.Title> {
}

export interface IKeyStatsSlide extends IBaseSlide<SlideType.KeyStats> {
}

export interface IBarChartSlide extends IBaseSlide<SlideType.BarChart> {
    chart: IBarChartConfig;
}

export interface IPieChartSlide extends IBaseSlide<SlideType.PieChart> {
    chart: IPieChartConfig;
}

export interface ITableSlide extends IBaseSlide<SlideType.Table> {
    table: ITableConfig;
}

export interface IConclusionSlide extends IBaseSlide<SlideType.Conclusion> {
}

export type ISlide =
    | ITitleSlide
    | IKeyStatsSlide
    | IBarChartSlide
    | IPieChartSlide
    | ITableSlide
    | IConclusionSlide
