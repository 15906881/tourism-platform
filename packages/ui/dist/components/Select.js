import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
const selectVariants = cva('flex w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', {
    variants: {
        variant: {
            default: 'border-gray-300 focus-visible:ring-gold-500',
            error: 'border-red-500 focus-visible:ring-red-500',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
export const Select = React.forwardRef(({ className, variant, children, ...props }, ref) => {
    return (_jsx("select", { className: clsx(selectVariants({ variant, className })), ref: ref, ...props, children: children }));
});
Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map