"use client";

import React from 'react';
import { clsx } from 'clsx';

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function Gallery({ images, columns = 3, className }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  React.useEffect(() => {
    if (lightboxOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen]);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <>
      <div className={clsx('grid gap-4', gridCols[columns], className)}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-75"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl hover:opacity-75"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl hover:opacity-75"
            aria-label="Next image"
          >
            ›
          </button>
          <img
            src={images[selectedIndex].url}
            alt={images[selectedIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
}
