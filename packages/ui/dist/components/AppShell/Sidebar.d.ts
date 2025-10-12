import React from 'react';
export interface SidebarProps {
    children: React.ReactNode;
    logo?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
export declare function Sidebar({ children, logo, footer, className }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export interface SidebarItemProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    href?: string;
    className?: string;
}
export declare function SidebarItem({ icon, children, active, onClick, href, className }: SidebarItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Sidebar.d.ts.map