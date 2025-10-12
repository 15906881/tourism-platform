import React from 'react';
import { Button } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface PricingTier {
 id: string;
  name: string;
  description: string;
  price: number;
 currency?: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  onSelect?: (id: string) => void;
}

export interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <section className={clsx('py-16 px-4', className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display mb-12 text-center">Choose Your Room</h2>
        
        <div className={clsx(
          'grid gap-6',
          tiers.length === 2 && 'md:grid-cols-2 max-w-4xl mx-auto',
          tiers.length === 3 && 'md:grid-cols-3',
          tiers.length >= 4 && 'md:grid-cols-2 lg:grid-cols-4'
        )}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                'bg-white rounded-lg p-8 transition-all',
                tier.highlighted
                  ? 'shadow-luxury-lg ring-2 ring-gold-500 scale-105'
                  : 'shadow-sm hover:shadow-md'
              )}
            >
              {tier.highlighted && (
                <div className="text-gold-600 text-sm font-medium mb-2">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-display mb-2">{tier.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${tier.price}
                </span>
                {tier.period && (
                  <span className="text-gray-500 text-sm ml-2">
                    / {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gold-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.onSelect && (
                <Button
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  onClick={() => tier.onSelect!(tier.id)}
                  className="w-full"
                >
                  {tier.ctaText || 'Select'}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
