import React from 'react';
export interface TabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
}
export declare function Tabs({ defaultValue, value: controlledValue, onValueChange, children }: TabsProps): import("react/jsx-runtime").JSX.Element;
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare function TabsList({ className, ...props }: TabsListProps): import("react/jsx-runtime").JSX.Element;
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
export declare function TabsTrigger({ className, value, ...props }: TabsTriggerProps): import("react/jsx-runtime").JSX.Element;
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
export declare function TabsContent({ className, value, ...props }: TabsContentProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Tabs.d.ts.map