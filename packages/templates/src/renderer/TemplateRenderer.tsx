"use client";

import React from "react";
import * as Blocks from "@weblynk/blocks";
import type { TemplateConfig } from "../types";

// Types derived from the actual blocks module
type BlocksModule = typeof Blocks;
type BlockName = Exclude<keyof BlocksModule, "default">;

// Allow config blocks to come in as plain strings
type AnyBlock = { id?: string; _id?: string; type: string; props: any };

export interface TemplateRendererProps {
  config: TemplateConfig & {
    sections: Array<{
      id?: string;
      _id?: string;
      blocks: AnyBlock[];
    }>;
  };
  className?: string;
}

// id/_id helper for stable React keys
const getId = (
  x: { id?: string; _id?: string } | undefined,
  i: number
) => x?.id ?? x?._id ?? String(i);

// A permissive registry lets us index with a string safely
const BlocksRegistry = Blocks as unknown as Record<
  string,
  React.ComponentType<any>
>;

export function TemplateRenderer({ config, className }: TemplateRendererProps) {
  return (
    <div className={className}>
      {config.sections.map((section, si) => (
        <section key={getId(section, si)}>
          {section.blocks.map((block, bi) => {
            const key = (block.type ?? "") as BlockName; // narrow for DX
            const Comp = BlocksRegistry[key];
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
