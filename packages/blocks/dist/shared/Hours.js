import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Hours({ hours, className }) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    return (_jsx("section", { className: clsx('py-8 px-4', className), children: _jsxs("div", { className: "max-w-md mx-auto", children: [_jsx("h3", { className: "text-2xl font-display mb-6", children: "Hours of Operation" }), _jsx("div", { className: "space-y-3", children: hours.map((day) => (_jsxs("div", { className: clsx('flex justify-between py-2 border-b border-gray-200', day.day === today && 'font-semibold text-gold-600'), children: [_jsx("span", { children: day.day }), _jsx("span", { children: day.closed ? 'Closed' : `${day.open} - ${day.close}` })] }, day.day))) })] }) }));
}
//# sourceMappingURL=Hours.js.map