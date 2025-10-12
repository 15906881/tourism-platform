"use client";

import React from 'react';
import type { TemplateConfig } from '../types';

export interface TemplateRendererProps {
  config: TemplateConfig;
  className?: string;
}

export function TemplateRenderer({ config, className }: TemplateRendererProps) {
  const renderBlock = (block: any) => {
    // Dynamic import will be resolved at runtime by consumer app
    // @ts-expect-error - workspace dependency resolved by consumer
    const Blocks = await import('@weblynk/blocks');
    const BlockComponent = Blocks[block.type as keyof typeof Blocks];
    
    if (!BlockComponent) {
      console.warn(`Block type "${block.type}" not found`);
      return null;
    }

    return BlockComponent ? <BlockComponent key={block.id} {...block.props} /> : null;
  };

  return (
    <div className={className}>
      {config.sections.map((section) => (
        <section key={section.id}>
          {section.blocks.map(renderBlock)}
        </section>
      ))}
    </div>
  );
}
