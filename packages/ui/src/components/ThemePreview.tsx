import React from 'react';
import { useTheme } from './ThemeProvider';

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export function ThemePreview() {
  const { theme } = useTheme();

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-display">
        Current Theme: <span className="capitalize">{theme}</span>
      </h2>
      
      <div className="grid grid-cols-11 gap-2">
        {shades.map((shade) => (
          <div key={shade} className="text-center">
            <div
              className={`w-full h-20 rounded shadow-luxury bg-${theme}-${shade}`}
            />
            <span className="text-xs text-gray-600 mt-1 block">{shade}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded">
        <p className="text-sm text-gray-700">
          Theme CSS variable: <code className="bg-white px-2 py-1 rounded">data-theme="{theme}"</code>
        </p>
      </div>
    </div>
  );
}
