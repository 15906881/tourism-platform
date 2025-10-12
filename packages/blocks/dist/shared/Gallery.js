'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '@weblynk/ui';
export function Gallery({ images, columns = 3, className }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleKeyDown = (e) => {
        if (selectedIndex === null)
            return;
        if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
        else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
        else if (e.key === 'ArrowRight' && selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };
    React.useEffect(() => {
        if (typeof document !== 'undefined') {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedIndex]);
    const selectedImage = selectedIndex !== null ? images[selectedIndex] : undefined;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: cn('grid gap-md', columns === 2 && 'grid-cols-2', columns === 3 && 'grid-cols-3', columns === 4 && 'grid-cols-4', className), children: images.map((image, index) => (_jsx("div", { className: "relative aspect-square overflow-hidden rounded-md cursor-pointer group", onClick: () => setSelectedIndex(index), children: _jsx("img", { src: image.src, alt: image.alt, className: "w-full h-full object-cover transition-transform group-hover:scale-105" }) }, index))) }), selectedIndex !== null && selectedImage && (_jsxs("div", { className: "fixed inset-0 bg-bg/95 z-50 flex items-center justify-center p-lg", onClick: () => setSelectedIndex(null), children: [_jsx("button", { className: "absolute top-md right-md text-text hover:text-primary", onClick: () => setSelectedIndex(null), children: "Close" }), _jsx("img", { src: selectedImage.src, alt: selectedImage.alt, className: "max-w-full max-h-full object-contain" })] }))] }));
}
//# sourceMappingURL=Gallery.js.map