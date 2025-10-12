export interface BookingData {
    date: string;
    time: string;
    guests: number;
    name: string;
    email: string;
    phone: string;
    notes?: string;
}
export interface BookingFormProps {
    _serviceId: string;
    serviceName: string;
    onSubmit: (data: BookingData) => Promise<void>;
    className?: string;
}
export declare function BookingForm({ _serviceId, serviceName, onSubmit, className }: BookingFormProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BookingForm.d.ts.map