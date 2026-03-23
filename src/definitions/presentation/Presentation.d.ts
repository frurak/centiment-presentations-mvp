import type { ISlide, ISlideTheme } from "@/definitions/slide/Slide";

export interface IPresentation {
    title: string;
    subtitle: string;
    theme: ISlideTheme;
    slides: ISlide[];
}
