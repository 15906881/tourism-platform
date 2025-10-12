import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export function PageHeader({ title, description, actions, breadcrumbs, className }) {
    return (_jsx("div", { className: cn('border-b border-border bg-surface', className), children: _jsxs("div", { className: "px-lg py-lg", children: [breadcrumbs && (_jsx("div", { className: "mb-md text-sm text-text-muted", children: breadcrumbs })), _jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h1", { className: "text-3xl font-heading font-semibold text-text mb-xs", children: title }), description && (_jsx("p", { className: "text-text-muted", children: description }))] }), actions && (_jsx("div", { className: "flex-shrink-0 flex items-center gap-sm", children: actions }))] })] }) }));
}
//# sourceMappingURL=PageHeader.js.map