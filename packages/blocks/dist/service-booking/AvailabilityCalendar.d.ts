export interface TimeSlot {
    time: string;
    available: boolean;
}
export interface AvailabilityCalendarProps {
    availableDates: Date[];
    onSelectDate: (date: Date) => void;
    onSelectTime?: (time: string) => void;
    timeSlots?: TimeSlot[];
    className?: string;
}
export declare function AvailabilityCalendar({ availableDates, onSelectDate, onSelectTime, timeSlots, className, }: AvailabilityCalendarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AvailabilityCalendar.d.ts.map