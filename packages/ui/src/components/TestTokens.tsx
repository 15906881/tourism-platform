import React from 'react';

export function TestTokens() {
  return (
    <div className="p-8 space-y-8">
      <section>
        <h1 className="text-4xl font-display text-gold-600 mb-4">
          Luxury Design Tokens Test
        </h1>
        <p className="text-lg text-gray-700">
          Testing typography, colors, and spacing from the luxury preset.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display mb-4">Color Palettes</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            {[50, 100, 500, 600, 900].map((shade) => (
              <div
                key={shade}
                className={`w-16 h-16 rounded bg-gold-${shade} shadow-luxury`}
                title={`gold-${shade}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[50, 100, 500, 600, 900].map((shade) => (
              <div
                key={shade}
                className={`w-16 h-16 rounded bg-rose-${shade} shadow-luxury`}
                title={`rose-${shade}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[50, 100, 500, 600, 900].map((shade) => (
              <div
                key={shade}
                className={`w-16 h-16 rounded bg-navy-${shade} shadow-luxury`}
                title={`navy-${shade}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
