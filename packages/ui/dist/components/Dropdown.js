import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function Dropdown({ trigger, children, align = 'left' }) {
    const [open, setOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);
    return (_jsxs("div", { className: "relative inline-block", ref: dropdownRef, children: [_jsx("div", { onClick: () => setOpen(!open), children: trigger }), open && (_jsx("div", { className: clsx('absolute z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-luxury py-1', align === 'right' ? 'right-0' : 'left-0'), children: children }))] }));
}
export function DropdownItem({ className, children, ...props }) {
    return (_jsx("button", { className: clsx('w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors', className), ...props, children: children }));
}
//# sourceMappingURL=Dropdown.js.map