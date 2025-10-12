import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
const TabsContext = React.createContext(null);
export function Tabs({ defaultValue, value: controlledValue, onValueChange, children }) {
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const value = controlledValue ?? internalValue;
    const onChange = onValueChange ?? setInternalValue;
    return (_jsx(TabsContext.Provider, { value: { value, onChange }, children: _jsx("div", { children: children }) }));
}
export function TabsList({ className, ...props }) {
    return (_jsx("div", { className: clsx('inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 p-1', className), role: "tablist", ...props }));
}
export function TabsTrigger({ className, value, ...props }) {
    const context = React.useContext(TabsContext);
    if (!context)
        throw new Error('TabsTrigger must be used within Tabs');
    const isActive = context.value === value;
    return (_jsx("button", { role: "tab", "aria-selected": isActive, className: clsx('inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all', isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900', className), onClick: () => context.onChange(value), ...props }));
}
export function TabsContent({ className, value, ...props }) {
    const context = React.useContext(TabsContext);
    if (!context)
        throw new Error('TabsContent must be used within Tabs');
    if (context.value !== value)
        return null;
    return (_jsx("div", { role: "tabpanel", className: clsx('mt-2', className), ...props }));
}
//# sourceMappingURL=Tabs.js.map