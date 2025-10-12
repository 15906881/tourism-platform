"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function FAQ({ faqs, className }) {
    const [openId, setOpenId] = React.useState(null);
    const toggle = (_id) => {
        setOpenId(openId === _id ? null : _id);
    };
    return (_jsx("section", { className: clsx('py-16 px-4', className), children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-display mb-8 text-center", children: "Frequently Asked Questions" }), _jsx("div", { className: "space-y-4", children: faqs.map((faq) => (_jsxs("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: [_jsxs("button", { onClick: () => toggle(faq.id), className: "w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors", children: [_jsx("span", { className: "font-medium text-lg", children: faq.question }), _jsx("span", { className: "text-2xl text-gray-400", children: openId === faq.id ? '−' : '+' })] }), openId === faq.id && (_jsx("div", { className: "px-6 py-4 bg-gray-50 border-t border-gray-200", children: _jsx("p", { className: "text-gray-700", children: faq.answer }) }))] }, faq.id))) })] }) }));
}
//# sourceMappingURL=FAQ.js.map