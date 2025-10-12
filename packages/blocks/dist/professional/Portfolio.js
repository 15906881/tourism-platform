"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Badge } from '@weblynk/ui';
import { clsx } from 'clsx';
export function Portfolio({ items, columns = 3, showFilters = true, className }) {
    const [filter, setFilter] = React.useState('All');
    const categories = ['All', ...Array.from(new Set(items.map((item) => item.category)))];
    const filteredItems = filter === 'All' ? items : items.filter((item) => item.category === filter);
    const gridCols = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    };
    return (_jsx("section", { className: clsx('py-16 px-4', className), children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-display mb-8 text-center", children: "Our Work" }), showFilters && categories.length > 1 && (_jsx("div", { className: "flex justify-center gap-2 mb-8 flex-wrap", children: categories.map((category) => (_jsx("button", { onClick: () => setFilter(category), className: clsx('px-4 py-2 rounded-lg transition-colors', filter === category
                            ? 'bg-gold-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'), children: category }, category))) })), _jsx("div", { className: clsx('grid gap-6', gridCols[columns]), children: filteredItems.map((item) => (_jsxs("div", { className: "group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow", children: [_jsx("div", { className: "relative h-48 overflow-hidden", children: _jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover transition-transform group-hover:scale-110" }) }), _jsxs("div", { className: "p-4", children: [_jsx(Badge, { variant: "default", size: "sm", className: "mb-2", children: item.category }), _jsx("h3", { className: "text-lg font-display mb-2", children: item.title }), _jsx("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2", children: item.description }), item.tags && (_jsx("div", { className: "flex flex-wrap gap-1", children: item.tags.map((tag) => (_jsxs("span", { className: "text-xs text-gray-500", children: ["#", tag] }, tag))) }))] })] }, item.id))) })] }) }));
}
//# sourceMappingURL=Portfolio.js.map