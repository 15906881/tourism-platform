import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    variant?: 'default' | 'subtle' | 'ghost';
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map