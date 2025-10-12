export interface ReservationData {
    date: string;
    time: string;
    partySize: number;
    name: string;
    email: string;
    phone: string;
    specialRequests?: string;
}
export interface ReservationWidgetProps {
    availableTimes: string[];
    onSubmit: (data: ReservationData) => Promise<void>;
    className?: string;
}
export declare function ReservationWidget({ availableTimes, onSubmit, className }: ReservationWidgetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReservationWidget.d.ts.map