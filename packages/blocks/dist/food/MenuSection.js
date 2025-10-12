import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { MenuItem } from './MenuItem';
import { clsx } from 'clsx';
export function MenuSection({ title, description, items, className }) {
    return (_jsxs("section", { className: clsx('py-8', className), children: [_jsxs("div", { className: "mb-6", children: [_jsx("h2", { className: "text-3xl font-display mb-2", children: title }), description && (_jsx("p", { className: "text-gray-600", children: description }))] }), _jsx("div", { className: "space-y-0", children: items.map((item) => (_jsx(MenuItem, { ...item }, item.id))) })] }));
}
//# sourceMappingURL=MenuSection.js.map