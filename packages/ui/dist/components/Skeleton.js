import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Skeleton({ className, ...props }) {
    return (_jsx("div", { className: clsx('animate-pulse rounded-md bg-gray-200', className), ...props }));
}
//# sourceMappingURL=Skeleton.js.map