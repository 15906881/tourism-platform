import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export const Radio = React.forwardRef(({ className, label, ...props }, ref) => {
    return (_jsxs("label", { className: clsx('flex items-center gap-2 cursor-pointer', className), children: [_jsx("input", { type: "radio", ref: ref, className: "h-4 w-4 border-gray-300 text-gold-600 focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", ...props }), label && _jsx("span", { className: "text-sm text-gray-700 select-none", children: label })] }));
});
Radio.displayName = 'Radio';
export function RadioGroup({ className, children, orientation = 'vertical', ...props }) {
    return (_jsx("div", { role: "radiogroup", className: clsx('flex gap-3', orientation === 'horizontal' ? 'flex-row' : 'flex-col', className), ...props, children: children }));
}
//# sourceMappingURL=Radio.js.map