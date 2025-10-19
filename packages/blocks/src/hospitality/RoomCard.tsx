"use client";

import React from 'react';
import { Button, Badge } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface RoomCardProps {
 _id: string;
  name: string;
  description: string;
  price: number;
 _currency?: string;
  images: string[];
  capacity: number;
  bedType?: string;
  size?: string;
  amenities: string[];
  available?: boolean;
  onBook?: (id: string) => void;
  className?: string;
}

export function RoomCard({
 _id,
  name,
  description,
  price,
 _currency = 'USD',
  images,
  capacity,
  bedType,
  size,
  amenities,
  available = true,
  onBook,
  className,
}: RoomCardProps) {
  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div className={clsx('bg-white rounded-lg shadow-sm overflow-hidden', className)}>
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={images[currentImage]}
          alt={`${name} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={clsx(
                  'w-2 h-2 rounded-full transition-all',
                  currentImage === index ? 'bg-white w-6' : 'bg-white/50'
                )}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-display">{name}</h3>
          {!available && (
            <Badge variant="error">Unavailable</Badge>
          )}
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* Room Details */}
        <div className="flex gap-4 text-sm text-gray-700 mb-4">
          <span>👥 {capacity} guests</span>
          {bedType && <span>🛏️ {bedType}</span>}
          {size && <span>📐 {size}</span>}
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 6).map((amenity) => (
              <Badge key={amenity} variant="default" size="sm">
                {amenity}
              </Badge>
            ))}
            {amenities.length > 6 && (
              <Badge variant="default" size="sm">
                +{amenities.length - 6} more
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing & Booking */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div>
            <span className="text-3xl font-bold text-gold-600">
              ${price}
            </span>
            <span className="text-gray-500 text-sm ml-1">/ night</span>
          </div>
          {onBook && (
            <Button onClick={() => onBook(_id)} disabled={!available}>
              {available ? 'Book Now' : 'Unavailable'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
