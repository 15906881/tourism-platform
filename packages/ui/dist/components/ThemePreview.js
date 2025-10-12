import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useTheme } from './ThemeProvider';
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
export function ThemePreview() {
    const { theme } = useTheme();
    return (_jsxs("div", { className: "p-8 space-y-6", children: [_jsxs("h2", { className: "text-2xl font-display", children: ["Current Theme: ", _jsx("span", { className: "capitalize", children: theme })] }), _jsx("div", { className: "grid grid-cols-11 gap-2", children: shades.map((shade) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: `w-full h-20 rounded shadow-luxury bg-${theme}-${shade}` }), _jsx("span", { className: "text-xs text-gray-600 mt-1 block", children: shade })] }, shade))) }), _jsx("div", { className: "mt-8 p-4 bg-gray-50 rounded", children: _jsxs("p", { className: "text-sm text-gray-700", children: ["Theme CSS variable: ", _jsxs("code", { className: "bg-white px-2 py-1 rounded", children: ["data-theme=\"", theme, "\""] })] }) })] }));
}
//# sourceMappingURL=ThemePreview.js.map