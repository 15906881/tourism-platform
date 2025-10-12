"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export function TemplateRenderer({ config, className }) {
    const renderBlock = (block) => {
        // Dynamic import will be resolved at runtime by consumer app
        // @ts-expect-error - workspace dependency resolved by consumer
        const Blocks = await import('@weblynk/blocks');
        const BlockComponent = Blocks[block.type];
        if (!BlockComponent) {
            console.warn(`Block type "${block.type}" not found`);
            return null;
        }
        return BlockComponent ? _jsx(BlockComponent, { ...block.props }, block.id) : null;
    };
    return (_jsx("div", { className: className, children: config.sections.map((section) => (_jsx("section", { children: section.blocks.map(renderBlock) }, section.id))) }));
}
//# sourceMappingURL=TemplateRenderer.js.map