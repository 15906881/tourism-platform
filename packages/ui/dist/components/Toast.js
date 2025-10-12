import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Toast({ id, message, variant = 'default', onClose }) {
    React.useEffect(() => {
        const timer = setTimeout(() => onClose(id), 5000);
        return () => clearTimeout(timer);
    }, [id, onClose]);
    const variantStyles = {
        default: 'bg-gray-900 text-white',
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white',
        warning: 'bg-yellow-600 text-white',
    };
    return (_jsxs("div", { className: clsx('rounded-lg px-4 py-3 shadow-luxury flex items-center justify-between gap-4 min-w-[300px]', variantStyles[variant]), role: "alert", children: [_jsx("p", { className: "text-sm font-medium", children: message }), _jsx("button", { onClick: () => onClose(id), className: "text-white/80 hover:text-white", "aria-label": "Close", children: "\u2715" })] }));
}
export function ToastContainer({ toasts }) {
    return (_jsx("div", { className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2", children: toasts.map((toast) => (_jsx(Toast, { ...toast }, toast.id))) }));
}
//# sourceMappingURL=Toast.js.map