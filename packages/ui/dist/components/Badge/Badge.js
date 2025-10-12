import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export function Badge({ className, variant = 'default', ...props }) {
    return (_jsx("span", { className: cn('inline-flex items-center px-sm py-xs text-xs font-medium rounded-md', variant === 'default' && 'bg-surface-2 text-text', variant === 'primary' && 'bg-primary/10 text-primary', variant === 'success' && 'bg-success/10 text-success', variant === 'warning' && 'bg-warning/10 text-warning', variant === 'error' && 'bg-error/10 text-error', className), ...props }));
}
//# sourceMappingURL=Badge.js.map