import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export function AppShell({ children, sidebar, topbar, className }) {
    return (_jsxs("div", { className: cn('flex h-screen bg-bg overflow-hidden', className), children: [sidebar && (_jsx("aside", { className: "w-64 border-r border-border bg-surface flex-shrink-0", children: sidebar })), _jsxs("div", { className: "flex flex-col flex-1 overflow-hidden", children: [topbar && (_jsx("header", { className: "h-16 border-b border-border bg-surface flex-shrink-0", children: topbar })), _jsx("main", { className: "flex-1 overflow-auto", children: children })] })] }));
}
//# sourceMappingURL=AppShell.js.map