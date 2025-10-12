import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Modal({ open, onClose, children, className }) {
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        if (open) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [open, onClose]);
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "fixed inset-0 bg-black/50", onClick: onClose, "aria-hidden": "true" }), _jsx("div", { className: clsx('relative z-10 bg-white rounded-lg shadow-luxury-lg max-w-lg w-full mx-4 p-6', className), role: "dialog", "aria-modal": "true", children: children })] }));
}
//# sourceMappingURL=Modal.js.map