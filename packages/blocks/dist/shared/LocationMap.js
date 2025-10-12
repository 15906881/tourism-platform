import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
export function LocationMap({ address, lat, lng, height = '400px', className }) {
    const embedUrl = lat && lng
        ? `https://maps.google.com/maps?q=${lat},${lng}&output=embed`
        : `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    return (_jsx("section", { className: clsx('w-full', className), style: { height }, children: _jsx("iframe", { src: embedUrl, width: "100%", height: "100%", style: { border: 0 }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: `Map showing ${address}` }) }));
}
//# sourceMappingURL=LocationMap.js.map