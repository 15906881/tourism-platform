import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Badge } from '@weblynk/ui';
import { clsx } from 'clsx';
export function MenuItem({ _id, name, description, price, _currency = 'USD', image, dietary, spicyLevel, popular, className, }) {
    const dietaryIcons = {
        vegetarian: '🥬',
        vegan: '🌱',
        'gluten-free': '🌾',
        'dairy-free': '🥛',
    };
    return (_jsxs("div", { className: clsx('flex gap-4 py-4 border-b border-gray-200', className), children: [image && (_jsx("img", { src: image, alt: name, className: "w-24 h-24 rounded-lg object-cover flex-shrink-0" })), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex justify-between items-start mb-1", children: [_jsxs("h3", { className: "text-lg font-display flex items-center gap-2", children: [name, popular && (_jsx(Badge, { variant: "warning", size: "sm", children: "Popular" }))] }), _jsxs("span", { className: "text-lg font-bold text-gold-600", children: ["$", price] })] }), _jsx("p", { className: "text-gray-600 text-sm mb-2", children: description }), _jsxs("div", { className: "flex items-center gap-3", children: [dietary && dietary.length > 0 && (_jsx("div", { className: "flex gap-1", children: dietary.map((diet) => (_jsx("span", { title: diet, className: "text-lg", children: dietaryIcons[diet] }, diet))) })), spicyLevel && (_jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 3 }).map((_, i) => (_jsx("span", { className: clsx('text-sm', i < spicyLevel ? 'text-red-500' : 'text-gray-300'), children: "\uD83C\uDF36\uFE0F" }, i))) }))] })] })] }));
}
//# sourceMappingURL=MenuItem.js.map