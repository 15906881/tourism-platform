import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export function EmptyState({ icon, title, description, action, className }) {
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center text-center p-xl', 'min-h-[400px]', className), children: [icon && (_jsx("div", { className: "mb-lg text-text-subtle opacity-50", children: icon })), _jsx("h3", { className: "text-xl font-semibold text-text mb-sm", children: title }), description && (_jsx("p", { className: "text-text-muted max-w-md mb-lg", children: description })), action && _jsx("div", { children: action })] }));
}
//# sourceMappingURL=EmptyState.js.map