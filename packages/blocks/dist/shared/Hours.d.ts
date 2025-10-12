export interface DayHours {
    day: string;
    open: string;
    close: string;
    closed?: boolean;
}
export interface HoursProps {
    hours: DayHours[];
    className?: string;
}
export declare function Hours({ hours, className }: HoursProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Hours.d.ts.map