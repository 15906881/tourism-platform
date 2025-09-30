import React from 'react';
import { clsx } from 'clsx';

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  photo?: string;
}

export interface ReviewsProps {
  reviews: Review[];
  autoRotate?: boolean;
  interval?: number;
  className?: string;
}

export function Reviews({ reviews, autoRotate = true, interval = 5000, className }: ReviewsProps) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!autoRotate || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoRotate, interval, reviews.length]);

  const review = reviews[current];

  return (
    <section className={clsx('py-16 px-4', className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display mb-12">What Our Clients Say</h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <div className="space-y-6">
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={clsx('text-2xl', i < review.rating ? 'text-gold-500' : 'text-gray-300')}>
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl italic text-gray-700">
              "{review.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              {review.photo && (
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <cite className="not-italic font-medium text-gray-900">
                {review.name}
              </cite>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={clsx(
                  'w-2 h-2 rounded-full transition-all',
                  current === index ? 'bg-gold-600 w-8' : 'bg-gray-300'
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
