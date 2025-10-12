import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Card({ className, ...props }) {
    return (_jsx("div", { className: clsx('rounded-lg border border-gray-200 bg-white shadow-sm', className), ...props }));
}
export function CardHeader({ className, ...props }) {
    return (_jsx("div", { className: clsx('flex flex-col space-y-1.5 p-6', className), ...props }));
}
export function CardTitle({ className, ...props }) {
    return (_jsx("h3", { className: clsx('text-2xl font-display font-semibold leading-none tracking-tight', className), ...props }));
}
export function CardContent({ className, ...props }) {
    return _jsx("div", { className: clsx('p-6 pt-0', className), ...props });
}
export function CardFooter({ className, ...props }) {
    return (_jsx("div", { className: clsx('flex items-center p-6 pt-0', className), ...props }));
}
//# sourceMappingURL=Card.js.map