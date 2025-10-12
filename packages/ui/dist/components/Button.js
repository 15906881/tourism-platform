import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
const buttonVariants = cva('inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            primary: 'bg-gold-600 text-white hover:bg-gold-700 focus-visible:ring-gold-500',
            secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500',
            ghost: 'hover:bg-gray-100 hover:text-gray-900',
            destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        },
        size: {
            sm: 'h-9 px-3 text-sm',
            md: 'h-10 px-4 text-base',
            lg: 'h-11 px-6 text-lg',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});
export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
    return (_jsx("button", { className: clsx(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map