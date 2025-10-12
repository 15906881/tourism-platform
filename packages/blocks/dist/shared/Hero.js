import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button } from '@weblynk/ui';
import { clsx } from 'clsx';
export function Hero({ image, headline, subheadline, ctaText, _ctaLink, onCtaClick, className, }) {
    return (_jsxs("section", { className: clsx('relative h-screen w-full overflow-hidden', className), children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat", style: { backgroundImage: `url(${image})` }, children: _jsx("div", { className: "absolute inset-0 bg-black/40" }) }), _jsx("div", { className: "relative z-10 flex h-full items-center justify-center px-4", children: _jsxs("div", { className: "max-w-4xl text-center text-white", children: [_jsx("h1", { className: "mb-6 text-5xl font-display md:text-6xl lg:text-7xl", children: headline }), subheadline && (_jsx("p", { className: "mb-8 text-xl md:text-2xl opacity-90", children: subheadline })), ctaText && (_jsx(Button, { size: "lg", onClick: onCtaClick, className: "shadow-luxury-lg", children: ctaText }))] }) })] }));
}
//# sourceMappingURL=Hero.js.map