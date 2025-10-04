'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@weblynk/ui';

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface ReviewsProps {
  reviews: Review[];
  autoRotate?: boolean;
  className?: string;
}

export function Reviews({ reviews, autoRotate = true, className }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || reviews.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, reviews.length]);

  const currentReview = reviews[currentIndex];
  if (!currentReview) return null;

  return (
    <div className={cn('space-y-lg', className)}>
      <div className="text-center">
        <h2 className="text-2xl font-heading font-semibold text-text mb-sm">
          What Our Guests Say
        </h2>
        <div className="flex items-center justify-center gap-sm mb-lg">
          <div className="flex gap-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'text-2xl',
                  i < currentReview.rating ? 'text-primary' : 'text-text-subtle'
                )}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <blockquote className="text-lg text-text mb-md max-w-2xl mx-auto">
          "{currentReview.text}"
        </blockquote>

        <div className="flex items-center justify-center gap-md">
          <div className="text-sm">
            <div className="font-medium text-text">{currentReview.author}</div>
            <div className="text-text-muted">{currentReview.date}</div>
          </div>
        </div>

        {reviews.length > 1 && (
          <div className="flex justify-center gap-sm mt-lg">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-colors',
                  index === currentIndex ? 'bg-primary' : 'bg-text-subtle'
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
