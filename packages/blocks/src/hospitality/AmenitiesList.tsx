import React from 'react';
import { clsx } from 'clsx';

export interface Amenity {
 _id: string;
  name: string;
  icon?: string;
  category?: string;
}

export interface AmenitiesListProps {
  amenities: Amenity[];
  columns?: 2 | 3 | 4;
  showCategories?: boolean;
  className?: string;
}

export function AmenitiesList({
  amenities,
  columns = 3,
  showCategories = false,
  className,
}: AmenitiesListProps) {
  const grouped = showCategories
    ? amenities.reduce((acc, amenity) => {
        const category = amenity.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(amenity);
        return acc;
      }, {} as Record<string, Amenity[]>)
    : { All: amenities };

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <section className={clsx('py-12 px-4', className)}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display mb-8">Amenities</h2>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-8">
            {showCategories && (
              <h3 className="text-xl font-medium mb-4">{category}</h3>
            )}
            <div className={clsx('grid gap-4', gridCols[columns])}>
              {items.map((amenity) => (
                <div key={amenity.id} className="flex items-center gap-3">
                  {amenity.icon && (
                    <span className="text-2xl">{amenity.icon}</span>
                  )}
                  <span className="text-gray-700">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
