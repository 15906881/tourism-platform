import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useId } from 'react';
import { cn } from '../../lib/utils';
export function FormField({ label, children, error, help, required, disabled, className }) {
    const id = useId();
    const helpId = `${id}-help`;
    const errorId = `${id}-error`;
    const childWithProps = React.cloneElement(children, {
        id,
        'aria-describedby': cn(help && helpId, error && errorId) || undefined,
        'aria-invalid': error ? true : undefined,
        'aria-required': required ? true : undefined,
        disabled,
    });
    return (_jsxs("div", { className: cn('space-y-xs', className), children: [_jsxs("label", { htmlFor: id, className: cn('block text-sm font-medium text-text', disabled && 'opacity-50 cursor-not-allowed'), children: [label, required && (_jsx("span", { className: "text-error ml-1", "aria-label": "required", children: "*" }))] }), childWithProps, help && !error && (_jsx("p", { id: helpId, className: "text-sm text-text-muted", children: help })), error && (_jsx("p", { id: errorId, className: "text-sm text-error", role: "alert", children: error }))] }));
}
//# sourceMappingURL=FormField.js.map