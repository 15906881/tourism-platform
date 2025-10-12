import React from 'react';
import { MenuItem, type MenuItemProps } from './MenuItem';
import { clsx } from 'clsx';

export interface MenuSectionProps {
  title: string;
  description?: string;
  items: Omit<MenuItemProps, 'className'>[];
  className?: string;
}

export function MenuSection({ title, description, items, className }: MenuSectionProps) {
  return (
    <section className={clsx('py-8', className)}>
      <div className="mb-6">
        <h2 className="text-3xl font-display mb-2">{title}</h2>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      <div className="space-y-0">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
