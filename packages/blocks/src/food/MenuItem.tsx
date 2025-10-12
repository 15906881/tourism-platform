import React from 'react';
import { Badge } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface MenuItemProps {
 id: string;
  name: string;
  description: string;
  price: number;
 currency?: string;
  image?: string;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free')[];
  spicyLevel?: 1 | 2 | 3;
  popular?: boolean;
  className?: string;
}

export function MenuItem({
 id,
  name,
  description,
  price,
 currency = 'USD',
  image,
  dietary,
  spicyLevel,
  popular,
  className,
}: MenuItemProps) {
  const dietaryIcons = {
    vegetarian: '🥬',
    vegan: '🌱',
    'gluten-free': '🌾',
    'dairy-free': '🥛',
  };

  return (
    <div className={clsx('flex gap-4 py-4 border-b border-gray-200', className)}>
      {image && (
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
        />
      )}

      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-display flex items-center gap-2">
            {name}
            {popular && (
              <Badge variant="warning" size="sm">
                Popular
              </Badge>
            )}
          </h3>
          <span className="text-lg font-bold text-gold-600">
            ${price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-2">{description}</p>

        <div className="flex items-center gap-3">
          {dietary && dietary.length > 0 && (
            <div className="flex gap-1">
              {dietary.map((diet) => (
                <span key={diet} title={diet} className="text-lg">
                  {dietaryIcons[diet]}
                </span>
              ))}
            </div>
          )}

          {spicyLevel && (
            <div className="flex gap-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className={clsx(
                    'text-sm',
                    i < spicyLevel ? 'text-red-500' : 'text-gray-300'
                  )}
                >
                  🌶️
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
