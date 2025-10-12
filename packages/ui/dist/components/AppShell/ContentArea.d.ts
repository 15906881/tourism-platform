import React from 'react';
export interface ContentAreaProps {
    children: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
}
export declare function ContentArea({ children, maxWidth, padding, className }: ContentAreaProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ContentArea.d.ts.map