'use client';

import React, { useState } from 'react';
import { cn } from '@weblynk/ui';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function Gallery({ images, columns = 3, className }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    
    if (e.key === 'Escape') {
      setSelectedIndex(null);
    } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === 'ArrowRight' && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKeyDown as any);
      return () => document.removeEventListener('keydown', handleKeyDown as any);
    }
  }, [selectedIndex]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : undefined;

  return (
    <>
      <div
        className={cn(
          'grid gap-md',
          columns === 2 && 'grid-cols-2',
          columns === 3 && 'grid-cols-3',
          columns === 4 && 'grid-cols-4',
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && selectedImage && (
        <div
          className="fixed inset-0 bg-bg/95 z-50 flex items-center justify-center p-lg"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-md right-md text-text hover:text-primary"
            onClick={() => setSelectedIndex(null)}
          >
            Close
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
