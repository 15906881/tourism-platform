import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
export const Select = forwardRef(({ className, error, variant = 'default', children, ...props }, ref) => {
    return (_jsx("select", { ref: ref, className: cn('w-full px-md py-sm rounded-md', 'text-text border', 'transition-colors duration-200', 'focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-border-focus/20', 'disabled:opacity-50 disabled:cursor-not-allowed', 'appearance-none cursor-pointer', variant === 'default' && 'bg-surface-2 border-border', variant === 'subtle' && 'bg-surface border-border', variant === 'ghost' && 'bg-transparent border-transparent', error && 'border-error focus:border-error focus:ring-error/20', className), ...props, children: children }));
});
Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map