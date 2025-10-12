import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
import { Button } from './Button';
export function Pagination({ currentPage, totalPages, onPageChange, className }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const visiblePages = pages.filter((page) => {
        if (totalPages <= 7)
            return true;
        if (page === 1 || page === totalPages)
            return true;
        if (Math.abs(page - currentPage) <= 1)
            return true;
        return false;
    });
    return (_jsxs("nav", { className: clsx('flex items-center gap-2', className), "aria-label": "Pagination", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, children: "Previous" }), visiblePages.map((page, idx) => {
                const showEllipsis = idx > 0 && visiblePages[idx - 1] !== page - 1;
                return (_jsxs(React.Fragment, { children: [showEllipsis && _jsx("span", { className: "px-2", children: "..." }), _jsx(Button, { variant: currentPage === page ? 'primary' : 'ghost', size: "sm", onClick: () => onPageChange(page), children: page })] }, page));
            }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, children: "Next" })] }));
}
//# sourceMappingURL=Pagination.js.map