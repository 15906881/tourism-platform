import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
export function Skeleton({ className, variant = 'rectangular', width, height, animation = 'pulse' }) {
    return (_jsx("div", { className: cn('bg-surface-2', variant === 'text' && 'h-4 rounded', variant === 'circular' && 'rounded-full', variant === 'rectangular' && 'rounded-md', animation === 'pulse' && 'animate-pulse', className), style: { width, height } }));
}
export function SkeletonText({ lines = 3, className }) {
    return (_jsx("div", { className: cn('space-y-2', className), children: Array.from({ length: lines }).map((_, i) => (_jsx(Skeleton, { variant: "text", width: i === lines - 1 ? '60%' : '100%' }, i))) }));
}
//# sourceMappingURL=Skeleton.js.map