"use client";

import React from "react";
import * as Blocks from "@weblynk/blocks";
import type { TemplateConfig } from "../types";

// Derive valid block names from the actual exports of @weblynk/blocks
type BlocksModule = typeof Blocks;
type BlockName = Exclude<keyof BlocksModule, "default">;

// Your block shape inside the template config
type TemplateBlock = {
  id?: string;
  _id?: string;
  type: BlockName;   // <— key change: not just string/any
  props: any;
};

export interface TemplateRendererProps {
  config: TemplateConfig & {
    sections: Array<{
      id?: string;
      _id?: string;
      blocks: TemplateBlock[];
    }>;
  };
  className?: string;
}

// Helper: prefer id, then _id, then index fallback
const getId = (x: { id?: string; _id?: string } | undefined, i: number) =>
  x?.id ?? x?._id ?? String(i);

// Turn the module into a typed registry we can index safely
const BlocksRegistry = Blocks as unknown as Record<BlockName, React.ComponentType<any>>;

export function TemplateRenderer({ config, className }: TemplateRendererProps) {
  return (
    <div className={className}>
      {config.sections.map((section, si) => (
        <section key={getId(section, si)}>
          {section.blocks.map((block, bi) => {
            const Comp = BlocksRegistry[block.type];
            if (!Comp) {
              console.warn(`Block type "${block.type}" not found`);
              return null;
            }
            return <Comp key={getId(block, bi)} {...block.props} />;
          })}
        </section>
      ))}
    </div>
  );
}
