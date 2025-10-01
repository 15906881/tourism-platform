import React from 'react';
import { Button, Badge } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  currency?: string;
  duration?: string;
  image?: string;
  category?: string;
  featured?: boolean;
  onBook?: (id: string) => void;
  className?: string;
}

export function ServiceCard({
  id,
  name,
  description,
  price,
  currency = 'USD',
  duration,
  image,
  category,
  featured,
  onBook,
  className,
}: ServiceCardProps) {
  return (
    <div className={clsx('bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow', className)}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          {featured && (
            <Badge variant="warning" className="absolute top-2 right-2">
              Featured
            </Badge>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display">{name}</h3>
          {category && (
            <Badge variant="default" size="sm">
              {category}
            </Badge>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gold-600">
              ${price}
            </span>
            {currency !== 'USD' && (
              <span className="text-sm text-gray-500 ml-1">{currency}</span>
            )}
            {duration && (
              <span className="text-sm text-gray-500 ml-2">/ {duration}</span>
            )}
          </div>

          {onBook && (
            <Button onClick={() => onBook(id)}>
              Book Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
