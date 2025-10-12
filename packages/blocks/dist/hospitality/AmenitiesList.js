import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function AmenitiesList({ amenities, columns = 3, showCategories = false, className, }) {
    const grouped = showCategories
        ? amenities.reduce((acc, amenity) => {
            const category = amenity.category || 'Other';
            if (!acc[category])
                acc[category] = [];
            acc[category].push(amenity);
            return acc;
        }, {})
        : { All: amenities };
    const gridCols = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    };
    return (_jsx("section", { className: clsx('py-12 px-4', className), children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-display mb-8", children: "Amenities" }), Object.entries(grouped).map(([category, items]) => (_jsxs("div", { className: "mb-8", children: [showCategories && (_jsx("h3", { className: "text-xl font-medium mb-4", children: category })), _jsx("div", { className: clsx('grid gap-4', gridCols[columns]), children: items.map((amenity) => (_jsxs("div", { className: "flex items-center gap-3", children: [amenity.icon && (_jsx("span", { className: "text-2xl", children: amenity.icon })), _jsx("span", { className: "text-gray-700", children: amenity.name })] }, amenity.id))) })] }, category)))] }) }));
}
//# sourceMappingURL=AmenitiesList.js.map