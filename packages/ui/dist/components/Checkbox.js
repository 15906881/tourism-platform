import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export const Checkbox = React.forwardRef(({ className, label, indeterminate, ...props }, ref) => {
    const inputRef = React.useRef(null);
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate ?? false;
        }
    }, [indeterminate]);
    React.useImperativeHandle(ref, () => inputRef.current);
    return (_jsxs("label", { className: clsx('flex items-center gap-2 cursor-pointer', className), children: [_jsx("input", { type: "checkbox", ref: inputRef, className: "h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", ...props }), label && _jsx("span", { className: "text-sm text-gray-700 select-none", children: label })] }));
});
Checkbox.displayName = 'Checkbox';
//# sourceMappingURL=Checkbox.js.map