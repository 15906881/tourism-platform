import React from 'react';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
}
export declare function RadioGroup({ className, children, orientation, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Radio.d.ts.map