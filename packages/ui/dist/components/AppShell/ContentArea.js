import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1536px]',
    full: 'max-w-none'
};
const paddingClasses = {
    none: '',
    sm: 'p-md',
    md: 'p-lg',
    lg: 'p-xl'
};
export function ContentArea({ children, maxWidth = 'full', padding = 'lg', className }) {
    return (_jsx("div", { className: cn('w-full mx-auto', maxWidthClasses[maxWidth], paddingClasses[padding], className), children: children }));
}
//# sourceMappingURL=ContentArea.js.map