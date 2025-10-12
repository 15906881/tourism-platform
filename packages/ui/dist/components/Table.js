import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Table({ className, ...props }) {
    return (_jsx("div", { className: "relative w-full overflow-auto", children: _jsx("table", { className: clsx('w-full caption-bottom text-sm', className), ...props }) }));
}
export function TableHeader({ className, ...props }) {
    return _jsx("thead", { className: clsx('[&_tr]:border-b', className), ...props });
}
export function TableBody({ className, ...props }) {
    return _jsx("tbody", { className: clsx('[&_tr:last-child]:border-0', className), ...props });
}
export function TableRow({ className, ...props }) {
    return (_jsx("tr", { className: clsx('border-b transition-colors hover:bg-gray-50', className), ...props }));
}
export function TableHead({ className, ...props }) {
    return (_jsx("th", { className: clsx('h-12 px-4 text-left align-middle font-medium text-gray-600 [&:has([role=checkbox])]:pr-0', className), ...props }));
}
export function TableCell({ className, ...props }) {
    return (_jsx("td", { className: clsx('p-4 align-middle [&:has([role=checkbox])]:pr-0', className), ...props }));
}
//# sourceMappingURL=Table.js.map