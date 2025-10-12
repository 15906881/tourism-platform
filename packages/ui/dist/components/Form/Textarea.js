import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
export const Textarea = forwardRef(({ className, error, variant = 'default', ...props }, ref) => {
    return (_jsx("textarea", { ref: ref, className: cn('w-full px-md py-sm rounded-md', 'text-text border', 'placeholder:text-text-subtle', 'transition-colors duration-200', 'focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-border-focus/20', 'disabled:opacity-50 disabled:cursor-not-allowed', 'resize-vertical min-h-[100px]', variant === 'default' && 'bg-surface-2 border-border', variant === 'subtle' && 'bg-surface border-border', variant === 'ghost' && 'bg-transparent border-transparent', error && 'border-error focus:border-error focus:ring-error/20', className), ...props }));
});
Textarea.displayName = 'Textarea';
//# sourceMappingURL=Textarea.js.map