import React from 'react';
import { Button } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface HeroProps {
  image: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function Hero({
  image,
  headline,
  subheadline,
  ctaText,
  ctaLink,
  onCtaClick,
  className,
}: HeroProps) {
  return (
    <section className={clsx('relative h-screen w-full overflow-hidden', className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-6 text-5xl font-display md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          
          {subheadline && (
            <p className="mb-8 text-xl md:text-2xl opacity-90">
              {subheadline}
            </p>
          )}

          {ctaText && (
            <Button
              size="lg"
              onClick={onCtaClick}
              className="shadow-luxury-lg"
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
