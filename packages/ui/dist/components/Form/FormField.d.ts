import React from 'react';
export interface FormFieldProps {
    label: string;
    children: React.ReactElement;
    error?: string;
    help?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}
export declare function FormField({ label, children, error, help, required, disabled, className }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FormField.d.ts.map