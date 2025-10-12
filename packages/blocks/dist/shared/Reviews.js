'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { cn } from '@weblynk/ui';
export function Reviews({ reviews, autoRotate = true, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (!autoRotate || reviews.length <= 1)
            return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [autoRotate, reviews.length]);
    const currentReview = reviews[currentIndex];
    if (!currentReview)
        return null;
    return (_jsx("div", { className: cn('space-y-lg', className), children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-heading font-semibold text-text mb-sm", children: "What Our Guests Say" }), _jsx("div", { className: "flex items-center justify-center gap-sm mb-lg", children: _jsx("div", { className: "flex gap-xs", children: Array.from({ length: 5 }).map((_, i) => (_jsx("span", { className: cn('text-2xl', i < currentReview.rating ? 'text-primary' : 'text-text-subtle'), children: "\u2605" }, i))) }) }), _jsxs("blockquote", { className: "text-lg text-text mb-md max-w-2xl mx-auto", children: ["\"", currentReview.text, "\""] }), _jsx("div", { className: "flex items-center justify-center gap-md", children: _jsxs("div", { className: "text-sm", children: [_jsx("div", { className: "font-medium text-text", children: currentReview.author }), _jsx("div", { className: "text-text-muted", children: currentReview.date })] }) }), reviews.length > 1 && (_jsx("div", { className: "flex justify-center gap-sm mt-lg", children: reviews.map((_, index) => (_jsx("button", { className: cn('w-2 h-2 rounded-full transition-colors', index === currentIndex ? 'bg-primary' : 'bg-text-subtle'), onClick: () => setCurrentIndex(index) }, index))) }))] }) }));
}
//# sourceMappingURL=Reviews.js.map