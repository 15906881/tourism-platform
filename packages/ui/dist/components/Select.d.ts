import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const selectVariants: (props?: ({
    variant?: "error" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectVariants> {
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=Select.d.ts.map