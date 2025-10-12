import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
export const Button = forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (_jsx("button", { ref: ref, className: cn('inline-flex items-center justify-center font-medium rounded-md transition-colors', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus', 'disabled:opacity-50 disabled:cursor-not-allowed', variant === 'primary' && 'bg-primary text-bg hover:bg-primary-hover', variant === 'secondary' && 'bg-surface-2 text-text hover:bg-surface-3 border border-border', variant === 'outline' && 'bg-transparent text-primary border border-primary hover:bg-primary/10', variant === 'ghost' && 'bg-transparent text-text hover:bg-surface-2', size === 'sm' && 'px-sm py-xs text-sm', size === 'md' && 'px-md py-sm text-base', size === 'lg' && 'px-lg py-md text-lg', className), ...props }));
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map