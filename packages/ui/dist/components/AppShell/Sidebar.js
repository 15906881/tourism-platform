import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export function Sidebar({ children, logo, footer, className }) {
    return (_jsxs("div", { className: cn('flex flex-col h-full', className), children: [logo && (_jsx("div", { className: "h-16 px-lg flex items-center border-b border-border", children: logo })), _jsx("nav", { className: "flex-1 overflow-y-auto py-md px-sm", children: children }), footer && (_jsx("div", { className: "px-lg py-md border-t border-border", children: footer }))] }));
}
export function SidebarItem({ icon, children, active, onClick, href, className }) {
    const Comp = href ? 'a' : 'button';
    return (_jsxs(Comp, { href: href, onClick: onClick, className: cn('w-full flex items-center gap-3 px-md py-sm rounded-md', 'text-sm font-medium transition-colors', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus', active
            ? 'bg-primary/10 text-primary'
            : 'text-text-muted hover:bg-surface-2 hover:text-text', className), children: [icon && _jsx("span", { className: "flex-shrink-0", children: icon }), _jsx("span", { children: children })] }));
}
//# sourceMappingURL=Sidebar.js.map