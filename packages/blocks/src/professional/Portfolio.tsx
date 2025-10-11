"use client";

import React from 'react';
import { Badge } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface PortfolioItem {
 _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags?: string[];
  link?: string;
}

export interface PortfolioProps {
  items: PortfolioItem[];
  columns?: 2 | 3 | 4;
  showFilters?: boolean;
  className?: string;
}

export function Portfolio({ items, columns = 3, showFilters = true, className }: PortfolioProps) {
  const [filter, setFilter] = React.useState<string>('All');

  const categories = ['All', ...Array.from(new Set(items.map((item) => item.category)))];
  const filteredItems = filter === 'All' ? items : items.filter((item) => item.category === filter);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <section className={clsx('py-16 px-4', className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display mb-8 text-center">Our Work</h2>

        {showFilters && categories.length > 1 && (
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={clsx(
                  'px-4 py-2 rounded-lg transition-colors',
                  filter === category
                    ? 'bg-gold-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className={clsx('grid gap-6', gridCols[columns])}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <Badge variant="default" size="sm" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="text-lg font-display mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                {item.tags && (
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
