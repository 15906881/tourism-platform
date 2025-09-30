import React from 'react';
import { clsx } from 'clsx';

export interface LocationMapProps {
  address: string;
  lat?: number;
  lng?: number;
  height?: string;
  className?: string;
}

export function LocationMap({ address, lat, lng, height = '400px', className }: LocationMapProps) {
  const embedUrl = lat && lng
    ? `https://maps.google.com/maps?q=${lat},${lng}&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className={clsx('w-full', className)} style={{ height }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${address}`}
      />
    </section>
  );
}
