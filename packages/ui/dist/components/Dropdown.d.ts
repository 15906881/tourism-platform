import React from 'react';
export interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: 'left' | 'right';
}
export declare function Dropdown({ trigger, children, align }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
export declare function DropdownItem({ className, children, ...props }: DropdownItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map