import { ChartType } from "@/definitions/chart/Chart.enum";
import { IChartConfig } from "@/definitions/chart/Chart";

export interface IChartBaseProps<T extends ChartType> {
    type: T;
    config: IChartConfig<T>;
}
