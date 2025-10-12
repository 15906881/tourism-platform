import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
const textareaVariants = cva('flex min-h-[80px] w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y', {
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
export const Textarea = React.forwardRef(({ className, variant, ...props }, ref) => {
    return (_jsx("textarea", { className: clsx(textareaVariants({ variant, className })), ref: ref, ...props }));
});
Textarea.displayName = 'Textarea';
//# sourceMappingURL=Textarea.js.map